"use client";
import Link from "next/link";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import 'react-toastify/dist/ReactToastify.css';
import { API_BASE_URL } from "../../../../../utils/constants";
import Cookies from "js-cookie";

export default function AddFaq() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const router = useRouter();
  const token = Cookies.get("token");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const submitForm = async () => {
    if (!name || !comment) {
      toast.error('Please fill in all required fields.');
      return;
    }

    const formData = new FormData();
    formData.append('Question', name);
    formData.append('Answer', comment);

    try {
      const res = await fetch(`${API_BASE_URL}/faq/add`, {
        method: 'POST',
        headers: {
          "Authorization": `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        toast.success(data.message || "FAQ added successfully");
        router.push("/FAQ");
      } else {
        toast.error(data.errMessage || "Failed to add FAQ");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while adding the FAQ");
    }
  };

  return (
    <section>
      <h1 className="text-2xl text-black underline mb-3 font-bold">
        Add Your FAQ Details
      </h1>
      <Link href="/FAQ">
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
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white required"
            >
              Question
            </label>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Question"
              required
            />
          </div>
          <div>
            <label
              htmlFor="comment"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white required"
            >
              Answer
            </label>
            <textarea
              value={comment}
              onChange={handleCommentChange}
              id="comment"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Answer"
              required
              rows={4}
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

      <ToastContainer />
    </section>
  );
}
