"use client";

import { useEffect, useState } from "react";
import { API_BASE_URL } from "../../../../../utils/constants";
import { toast } from "react-toastify";
import styles from "../resources.module.css";

export default function Notifications() {
  const [activeTab, setActiveTab] = useState(null); // Initialize with null
  const [listData, setListData] = useState([]);
  const [totalCount, setTotalCount] = useState();
  const [loading, setLoading] = useState(false); // Add loading state
  const [error, setError] = useState(null); // Add error state

  const handleTabChange = (id) => {
    setActiveTab(id);
  };

  useEffect(() => {
    import("flowbite").then((module) => {
      const { initFlowbite } = module;
      initFlowbite();
    });
    getAllPolicies();
  }, []);

  const getAllPolicies = async () => {
    setLoading(true); // Start loading
    try {
      const res = await fetch(`${API_BASE_URL}/policy/allPolicy?limit=${totalCount}`);
      const data = await res.json();
      console.log("API response:", data); // Log the full response
      if (data && data.data) {
        setListData(data.data);
        setTotalCount(data.totalCount);
        if (data.data.length > 0) {
          setActiveTab(data.data[0]._id); // Set the first policy's ID as active
        }
      } else {
        toast.error(data.errMessage || "Failed to fetch policies");
      }
    } catch (error) {
      toast.error("An error occurred while fetching policies");
      setError("An error occurred while fetching policies");
    } finally {
      setLoading(false); // End loading
    }
  };

  // Filtered data based on the active tab
  const filteredData = listData.filter((item) => item._id === activeTab);

  return (
    <main>
      <div className="md:flex">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                S. No.
              </th>
              <th scope="col" className="px-6 py-3">
                Notification Title
              </th>
              <th scope="col" className="px-6 py-3">
                PDF Link
              </th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="3" className="text-center py-4">
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
                </td>
              </tr>
            ) : listData.length > 0 ? (
              listData.map((item, index) => (
                <tr
                  key={item._id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {/* Display serial number (index + 1) */}
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 text-black">{item.Title}</td>
                  <td className="px-6 py-4">
                    <a
                      href={`https://igcl-api.onrender.com/uploads/${item.PDF}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      download="Document.pdf"
                      className="text-blue-600 hover:underline"
                    >
                      Download PDF
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center py-4">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}
