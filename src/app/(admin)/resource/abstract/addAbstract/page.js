"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import 'react-toastify/dist/ReactToastify.css';
import { API_BASE_URL } from "../../../../../../utils/constants";

export default function AddAbstract() {
  const [resourceId, setResourceId] = useState(""); // State for ResourceNameId
  const [pdf, setPdf] = useState(null); // State for PDF file
  const [policies, setPolicies] = useState([]); // State for dropdown options
  const router = useRouter();

  // Fetch policies for dropdown
  useEffect(() => {
    const fetchPolicies = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/policy/allPolicy`);
        const data = await res.json();
        if (data.success) {
          setPolicies(data.data || []); // Assuming data.data contains the policies
        } else {
          toast.error(data.errMessage || "Failed to fetch policies");
        }
      } catch (error) {
        toast.error("An error occurred while fetching policies");
      }
    };

    fetchPolicies();
  }, []);

  const handleResourceIdChange = (e) => {
    setResourceId(e.target.value);
  };

  const handlePdfChange = (e) => {
    setPdf(e.target.files[0]); // Handling file input
  };

  const submitForm = async () => {
    if (!resourceId || !pdf) {
      toast.error('Please fill in all required fields and upload a PDF.');
      return;
    }

    const formData = new FormData();
    formData.append('ResourceNameId', resourceId);
    formData.append('pdf', pdf); // Append the PDF file

    try {
      const res = await fetch(`${API_BASE_URL}/abstract/add`, {
        method: 'POST',
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
        Add Your Abstract Details
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
              htmlFor="resourceId"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white required"
            >
              Policy Name
            </label>
            <select
              id="resourceId"
              value={resourceId}
              onChange={handleResourceIdChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            >
              <option value="">Select a Policy</option>
              {policies.map((policy) => (
                <option key={policy.id} value={policy.id}>
                  {policy.PolicyName}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="pdf"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white required"
            >
              Upload PDF
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
