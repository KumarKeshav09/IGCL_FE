"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import 'react-toastify/dist/ReactToastify.css'; 
import { API_BASE_URL } from "../../../../../../utils/constants";
import Cookies from "js-cookie";

export default function EditPolicy({ params }) {
  const [question, setQuestion] = useState("");
  const router = useRouter();
  const policyId = params?.editPolicy; // Adjusted to match the parameter name for policy
  const token = Cookies.get("token");


  useEffect(() => {
    const fetchPolicyDetails = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/policy/PolicyById/${policyId}`, {
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        });
        const data = await res.json();
        if (data.success) {
          setQuestion(data.data?.PolicyName);
        } else {
          toast.error(data.errMessage || "Failed to fetch policy details");
        }
      } catch (error) {
        toast.error("An error occurred while fetching policy details");
      }
    };

    fetchPolicyDetails();
  }, [policyId]);

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };


  const submitForm = async () => {
    if (!question ) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const formData = {
      PolicyName: question,
    };

    try {
      const res = await fetch(`${API_BASE_URL}/policy/updatePolicy/${policyId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        toast.success(data.message || "Policy updated successfully");
        router.push("/resource");
      } else {
        toast.error(data.errMessage || "Failed to update policy");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while updating the policy");
    }
  };

  return (
    <section>
      <h1 className="text-2xl text-black underline mb-3 font-bold">
        Update Your Policy Details
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
              htmlFor="question"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white required"
            >
              Policy Name
            </label>
            <input
              type="text"
              value={question}
              onChange={handleQuestionChange}
              id="question"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Policy Name"
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
          Update
        </button>
      </div>
      
    </section>
  );
}
