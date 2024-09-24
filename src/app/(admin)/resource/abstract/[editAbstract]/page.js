"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import 'react-toastify/dist/ReactToastify.css'; 
import { API_BASE_URL, IMAGE_BASE_URL } from "../../../../../../utils/constants";
import Cookies from "js-cookie";

export default function EditAbstract({ params }) {
  const [notificationTitle, setNotificationTitle] = useState("");
  const [pdf, setPdf] = useState(null); // State to handle PDF upload
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const policyId = params?.editAbstract; // Adjusted to match the parameter name for policy
  const token = Cookies.get("token");

  useEffect(() => {
    const fetchPolicyDetails = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/abstract/AbstractById/${policyId}`, {
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        });
        const data = await res.json();
        if (data.success) {
          const policy = data.data;
          setNotificationTitle(policy.Title);
          setPdf(policy.PDF);
        } else {
          toast.error(data.errMessage || "Failed to fetch policy details");
        }
      } catch (error) {
        toast.error("An error occurred while fetching policy details");
      }
    };

    fetchPolicyDetails();
  }, [policyId, token]); // Added policyId to dependencies

  const uploadPDF = async (pdfFile) => {
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
      const result = await uploadPDF(file);
      if (result.successMessage) {
        setPdf(result.successMessage.imageUrl); // Save the URL or path returned by the upload
      } else {
        console.error('Upload error:', result.errMessage);
      }
    } else {
      console.error('Please select a valid PDF file.');
    }
  };

  const submitForm = async () => {
    if (!notificationTitle || !pdf) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const requestBody = {
      Title: notificationTitle,
      PDF: pdf, // Include the PDF URL or path
    };

    try {
      setLoading(true);
      const res = await fetch(`${API_BASE_URL}/abstract/updateAbstract/${policyId}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      const data = await res.json();
      if (data.success) {
        router.push("/resource#abstract");
        toast.success(data.message || "Abstract updated successfully");
      } else {
        toast.error(data.errMessage || "Failed to update abstract");
      }
    } catch (error) {
      console.error('Error updating abstract:', error);
      toast.error("An error occurred while updating the abstract");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <h1 className="text-2xl text-black underline mb-3 font-bold">
        Update Your Abstract Details
      </h1>
      <Link href="/resource#abstract">
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
              Abstract Title
            </label>
            <input
              type="text"
              value={notificationTitle}
              onChange={(e) => setNotificationTitle(e.target.value)}
              id="policyName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Abstract Name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="pdf"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white required"
            >
              Abstract PDF
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
          disabled={loading}
        >
          {loading ? "Updating..." : "Update"}
        </button>
      </div>
    </section>
  );
}
