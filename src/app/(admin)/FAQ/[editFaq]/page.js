"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import 'react-toastify/dist/ReactToastify.css'; 
import { API_BASE_URL } from "../../../../../utils/constants";
import Cookies from "js-cookie";

export default function EditFaq({ params }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const router = useRouter();
  const faqId = params?.editFaq; 
  const token = Cookies.get("token");


  useEffect(() => {
    const fetchFaqDetails = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/faq/FAQById/${faqId}`, {
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        });
        const data = await res.json();
        if (data.success) {
          setQuestion(data.data?.Question);
          setAnswer(data.data?.Answer);
        } else {
          toast.error(data.errMessage || "Failed to fetch FAQ details");
        }
      } catch (error) {
        toast.error("An error occurred while fetching FAQ details");
      }
    };

    fetchFaqDetails();
  }, []);

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  const submitForm = async () => {
    if (!question || !answer) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const formData = {
      Question: question,
      Answer: answer,
    };

    try {
      const res = await fetch(`${API_BASE_URL}/faq/updateFAQ/${faqId}`, {
        method: 'PATCH',
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        toast.success(data.message || "FAQ updated successfully");
        router.push("/FAQ");
      } else {
        toast.error(data.errMessage || "Failed to update FAQ");
      }
    } catch (error) {
      console.log(error)
      toast.error("An error occurred while updating the FAQ");
    }
  };

  return (
    <section>
      <h1 className="text-2xl text-black underline mb-3 font-bold">
        Update Your FAQ Details
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
              htmlFor="question"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white required"
            >
              Question
            </label>
            <input
              type="text"
              value={question}
              onChange={handleQuestionChange}
              id="question"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Question"
              required
            />
          </div>
          <div>
            <label
              htmlFor="answer"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white required"
            >
              Answer
            </label>
            <textarea
              value={answer}
              onChange={handleAnswerChange}
              id="answer"
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
          Update
        </button>
      </div>
      
    </section>
  );
}
