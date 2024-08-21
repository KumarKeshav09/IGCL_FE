"use client";
import Link from "next/link";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import 'react-toastify/dist/ReactToastify.css';
import { API_BASE_URL } from "../../../../../../utils/constants";
import Cookies from "js-cookie";

export default function AddPolicy() {
  const [policyName, setPolicyName] = useState("");
  const [judgmentTitle, setJudgmentTitle] = useState("");
  const [judgmentDescription, setJudgmentDescription] = useState("");
  const [notificationTitle, setNotificationTitle] = useState("");
  const [notificationDescription, setNotificationDescription] = useState("");
  const [pdf, setPdf] = useState(null);
  const router = useRouter();
  const token = Cookies.get("token");

  const handleNotificationTitleChange = (e) => {
    setNotificationTitle(e.target.value);
  };

  const handlePdfChange = (e) => {
    setPdf(e.target.files[0]); // Handling file input
  };

  const handleNotificationDescriptionChange = (e) => {
    setNotificationDescription(e.target.value);
  };

  const handleJudgmentTitleChange = (e) => {
    setJudgmentTitle(e.target.value);
  };

  const handleJudgmentDescriptionChange = (e) => {
    setJudgmentDescription(e.target.value);
  };

  const handlePolicyChange = (e) => {
    setPolicyName(e.target.value);
  };

  const submitForm = async () => {
    if (!policyName || !judgmentTitle || !judgmentDescription || !notificationTitle || !notificationDescription || !pdf) {
      toast.error('Please fill in all required fields.');
      return;
    }

    const formData = new FormData();
    formData.append('PolicyName', policyName);
    formData.append('JudgmentTitle', judgmentTitle);
    formData.append('JudgmentDescription', judgmentDescription);
    formData.append('NotificationTitle', notificationTitle);
    formData.append('NotificationDescription', notificationDescription);
    formData.append('pdf', pdf);

    try {
      const res = await fetch(`${API_BASE_URL}/policy/add`, {
        method: 'POST',
        headers: {
          "Authorization": `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await res.json();
      if (data.success) {
        router.push("/resource");
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
        Add Your Policy Details
      </h1>
      <Link href="/resource">
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
              Policy Name
            </label>
            <input
              type="text"
              value={policyName}
              onChange={handlePolicyChange}
              id="policyName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Policy Name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="judgmentTitle"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white required"
            >
              Judgment Title
            </label>
            <input
              type="text"
              value={judgmentTitle}
              onChange={handleJudgmentTitleChange}
              id="judgmentTitle"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Judgment Title"
              required
            />
          </div>
          <div>
            <label
              htmlFor="judgmentDescription"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white required"
            >
              Judgment Description
            </label>
            <textarea
              value={judgmentDescription}
              onChange={handleJudgmentDescriptionChange}
              id="judgmentDescription"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Judgment Description"
              required
            />
          </div>
          <div>
            <label
              htmlFor="notificationTitle"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white required"
            >
              Notification Title
            </label>
            <input
              type="text"
              value={notificationTitle}
              onChange={handleNotificationTitleChange}
              id="notificationTitle"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Notification Title"
              required
            />
          </div>
          <div>
            <label
              htmlFor="notificationDescription"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white required"
            >
              Notification Description
            </label>
            <textarea
              value={notificationDescription}
              onChange={handleNotificationDescriptionChange}
              id="notificationDescription"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Notification Description"
              required
            />
          </div>
          <div>
            <label
              htmlFor="pdf"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white required"
            >
              PDF
            </label>
            <input
              type="file"
              accept=".pdf"
              onChange={handlePdfChange}
              id="pdf"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
        >
          Submit
        </button>
      </div>
    </section>
  );
}
