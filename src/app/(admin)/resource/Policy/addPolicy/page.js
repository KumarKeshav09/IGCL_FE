"use client";
import Link from "next/link";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import 'react-toastify/dist/ReactToastify.css';
import { API_BASE_URL, IMAGE_BASE_URL } from "../../../../../../utils/constants";
import Cookies from "js-cookie";

export default function AddPolicy() {
  const [notificationTitle, setNotificationTitle] = useState("");
  const [loading, setLoading] = useState(false); // Track loading state
  const [pdf, setPdf] = useState(null);
  const router = useRouter();
  const token = Cookies.get("token");

  const handleNotificationTitleChange = (e) => {
    setNotificationTitle(e.target.value);
  };

  const uploadPDF = async (pdfFile, setLoading = () => {}) => {
    setLoading(true);

    try {
      // Ensure the file is valid
      if (!pdfFile || pdfFile.type !== 'application/pdf') {
        throw new Error('Invalid file type. Please upload a PDF file.');
      }

      // Create a FormData object
      const formData = new FormData();
      formData.append('pdf', pdfFile);

      const response = await fetch(`${IMAGE_BASE_URL}`, {
        method: "POST",
        body: formData,
      });

      // Check if the response status is OK
      if (!response.ok) {
        const errorBody = await response.text();
        throw new Error(`HTTP error! Status: ${response.status}. Response: ${errorBody}`);
      }

      const resData = await response.json();

      if (resData?.success) {
        return { successMessage: resData };
      } else {
        return { errMessage: resData.error || 'An error occurred' };
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`);
      return { errMessage: error.message || 'Unknown error occurred' };
    } finally {
      setLoading(false);
    }
  };

  const handlePdfChange = async (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      const result = await uploadPDF(file, setLoading);
      if (result.successMessage) {
        setPdf(result.successMessage.imageUrl); // Store the PDF URL after successful upload
      } else {
        console.error('Upload error:', result.errMessage);
      }
    } else {
      console.error('Please select a valid PDF file.');
    }
  };

  const submitForm = async () => {
    // Validate required fields
    if (!notificationTitle || !pdf) {
      toast.error('Please fill in all required fields.');
      return;
    }

    // Create JSON object
    const requestBody = {
      Title: notificationTitle,
      PDF: pdf
    };

    try {
      // Send POST request
      const response = await fetch(`${API_BASE_URL}/policy/add`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      // Handle response
      const data = await response.json();
      if (data.success) {
        router.push("/resource#policy");
        toast.success(data.message || "Policy added successfully");
      } else {
        toast.error(data.errMessage || "Failed to add policy");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while adding the policy");
    }
  };

  return (
    <section>
      <h1 className="text-2xl text-black underline mb-3 font-bold">
        Add Your Notification Details
      </h1>
      <Link href="/resource#policy">
        <div className="mb-5 mt-5">
          <button
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            type="button"
          >
            Back
          </button>
        </div>
      </Link>
      <form className="mb-5">
        <div className="grid gap-4 mb-4 md:grid-cols-2">
          <div>
            <label
              htmlFor="policyName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white required"
            >
              Notification Title
            </label>
            <input
              type="text"
              value={notificationTitle}
              onChange={handleNotificationTitleChange}
              id="policyName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Notification Title"
              required
            />
          </div>
          <div>
            <label
              htmlFor="pdf"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white required"
            >
              Notification PDF
            </label>
            <input
              type="file"
              accept=".pdf"
              onChange={handlePdfChange}
              id="pdf"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
        </div>
      </form>

      <div>
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
          onClick={submitForm}
          disabled={loading} // Disable the button when loading is true
        >
          {loading ? 'Uploading...' : 'Submit'} {/* Change button text while uploading */}
        </button>
      </div>
    </section>
  );
}
