"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { API_BASE_URL } from "../../../../../../utils/constants";
import Cookies from "js-cookie";
import Link from "next/link";

export default function EditAbstract({ params }) {
  const [selectedPolicy, setSelectedPolicy] = useState(""); // State for selected policy ID
  const [pdf, setPdf] = useState(null); // State for PDF file
  const [policyOptions, setPolicyOptions] = useState([]);
  const [loadingPolicies, setLoadingPolicies] = useState(true);
  const [abstract, setAbstract] = useState(null); // State for abstract details
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const token = Cookies.get("token");
  const abstractId = params.editAbstract; // ID from route parameters

  // Fetch policies for dropdown
  useEffect(() => {
    const fetchPolicies = async () => {
      setLoadingPolicies(true);
      try {
        const res = await fetch(`${API_BASE_URL}/policy/allPolicy`, {
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        });
        const data = await res.json();
        if (data.success) {
          setPolicyOptions(data.data || []);
        } else {
          toast.error(data.errMessage || "Failed to fetch policies");
        }
      } catch (error) {
        console.error('Error fetching policies:', error);
        toast.error("An error occurred while fetching policies");
      } finally {
        setLoadingPolicies(false);
      }
    };

    fetchPolicies();
  }, [token]);

  // Fetch existing abstract details
  useEffect(() => {
    const fetchAbstract = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${API_BASE_URL}/abstract/AbstractById/${abstractId}`, {
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        });
        const data = await res.json();
        if (data.success) {
          setAbstract(data.data);
          setSelectedPolicy(data.data.PolicyId._id);
        } else {
          toast.error(data.errMessage || "Failed to fetch abstract details");
        }
      } catch (error) {
        console.error('Error fetching abstract details:', error);
        toast.error("An error occurred while fetching abstract details");
      } finally {
        setLoading(false);
      }
    };

    fetchAbstract();
  }, [abstractId, token]);

  const handlePolicyChange = (e) => {
    setSelectedPolicy(e.target.value);
  };

  const handlePdfChange = (e) => {
    setPdf(e.target.files[0]); // Handling file input
  };

  const submitForm = async () => {
    if (!selectedPolicy) {
      toast.error('Please select a policy.');
      return;
    }

    const formData = new FormData();
    formData.append('PolicyId', selectedPolicy);
    if (pdf) {
      formData.append('pdf', pdf);
    }

    try {
      const res = await fetch(`${API_BASE_URL}/abstract/updateAbstract/${abstractId}`, {
        method: 'PATCH',
        headers: {
          "Authorization": `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await res.json();
      if (data.success) {
        router.push("/resource");
        toast.success(data.message || "Abstract updated successfully");
      } else {
        toast.error(data.errMessage || "Failed to update abstract");
      }
    } catch (error) {
      console.error('Error updating abstract:', error);
      toast.error("An error occurred while updating the abstract");
    }
  };

  if (loading || loadingPolicies) {
    return (
      <div role="status" className="flex justify-center items-center">
        <svg
          aria-hidden="true"
          className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <section>
      <h1 className="text-2xl text-black underline mb-3 font-bold">
        Edit Abstract Details
      </h1>
      <Link href="/resource">
        <button
          className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          type="button"
        >
          Back
        </button>
      </Link>
      <form className="mb-5">
        <div className="grid gap-4 mb-4 md:grid-cols-2">
          <div>
            <label
              htmlFor="policy"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white required"
            >
              Policy Name
            </label>
            <select
              id="policy"
              value={selectedPolicy}
              onChange={handlePolicyChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            >
              <option value="">Select a Policy</option>
              {loadingPolicies ? (
                <option>Loading...</option>
              ) : (
                policyOptions.map(policy => (
                  <option key={policy._id} value={policy._id}>
                    {policy.PolicyName}
                  </option>
                ))
              )}
            </select>
          </div>
          <div>
            <label
              htmlFor="pdf"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Upload New PDF
            </label>
            <input
              type="file"
              accept=".pdf"
              onChange={handlePdfChange}
              id="pdf"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
