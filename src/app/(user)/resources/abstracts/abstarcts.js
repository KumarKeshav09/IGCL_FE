"use client";

import { useEffect, useState } from "react";
import { API_BASE_URL } from "../../../../../utils/constants";
import { toast } from "react-toastify";

export default function Abstarcts() {
  const [activeTab, setActiveTab] = useState(null); // Initialize with null
  const [page, setPage] = useState(1);
  const [listData, setListData] = useState([]);

  const handleTabChange = (id) => {
    setActiveTab(id);
  };

  useEffect(() => {
    import("flowbite").then((module) => {
      const { initFlowbite } = module;
      initFlowbite();
    });
    getAllPolicies();
  }, [page]);

  const getAllPolicies = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/policy/allPolicy?page=${page}&limit=10`);
      const data = await res.json();
      console.log("API response:", data); // Log the full response
      if (data && data.data) {
        setListData(data.data);
        if (data.data.length > 0) {
          setActiveTab(data.data[0]._id); // Set the first policy's ID as active
        }
      } else {
        toast.error(data.errMessage || "Failed to fetch policies");
      }
    } catch (error) {
      toast.error("An error occurred while fetching policies");
    }
  };

  return (
    <main>
      <div className="md:flex">
        {/* Sidebar */}
        <ul className="flex-column space-y space-y-4 text-nowrap text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
          {listData.map((item) => (
            <li key={item._id}>
              <button
                onClick={() => handleTabChange(item._id)}
                className={`inline-flex items-center px-4 py-3 rounded-lg w-full ${
                  activeTab === item._id
                    ? "text-white bg-indigo-500 dark:bg-indigo-500"
                    : "bg-gray-50 text-gray-500 dark:bg-gray-800 dark:text-gray-400"
                }`}
              >
                {item.PolicyName}
              </button>
            </li>
          ))}
        </ul>

        {/* Content */}
        <div className="p-6 bg-white text-medium text-gray-500 dark:text-gray-400 dark:bg-white w-full">
          {activeTab && (
            <div>
                test
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
