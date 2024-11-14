"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Pagination from "@/app/components/common/pagination";
import Popup from "@/app/components/common/popup";
import "react-toastify/dist/ReactToastify.css"; // Ensure this import
import { API_BASE_URL } from "../../../../utils/constants";
import Cookies from "js-cookie";
import * as XLSX from "xlsx";

export default function Contact() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [listData, setListData] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [page, setPage] = useState(1);
  const [searchData, setSearchData] = useState("");
  const [loading, setLoading] = useState(false); // Loader state
  const token = Cookies.get("token");

  useEffect(() => {
    getAllContacts();
  }, [page, searchData]);

  const getAllContacts = async () => {
    setLoading(true); // Show loader
    try {
      const res = await fetch(
        `${API_BASE_URL}/contact/allContact?page=${page}&limit=10`
      );
      const data = await res.json();
      if (data.success) {
        setListData(data);
      } else {
        toast.error(data.errMessage || "Failed to fetch contacts");
      }
    } catch (error) {
      toast.error("An error occurred while fetching contacts");
    } finally {
      setLoading(false); // Hide loader
    }
  };

  const handleDelete = async () => {
    try {
      setLoading(true); // Show loader
      const res = await fetch(
        `${API_BASE_URL}/contact/deleteContact/${deleteId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();
      if (data.success) {
        getAllContacts();
        setDeleteId(null);
        setIsPopupOpen(false);
        toast.success(data.message || "Contact deleted successfully");
      } else {
        toast.error(data.errMessage || "Failed to delete contact");
      }
    } catch (error) {
      toast.error("An error occurred while deleting contact");
    } finally {
      setLoading(false); // Hide loader
    }
  };

  const searchInputChange = (e) => {
    setSearchData(e.target.value);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const deleteContactModal = (id) => {
    setDeleteId(id);
    setIsPopupOpen(true);
  };

  const handleCancel = () => {
    setDeleteId(null);
    setIsPopupOpen(false);
  };

  const fetchData = async () => {
    setLoading(true);

    try {
      let allData = [];
      let page = 1;
      let totalPages = 1; // Initialize totalPages to ensure the loop runs at least once

      // Loop to fetch all pages of data
      while (page <= totalPages) {
        const response = await fetch(
          `${API_BASE_URL}/contact/allContact?page=${page}&limit=10`
        );
        const result = await response.json();

        // Check if result contains the expected data format
        if (!result || !result.data || !Array.isArray(result.data)) {
          throw new Error("Invalid data format");
        }

        // Add the current page's data to the allData array
        allData = [...allData, ...result.data];

        // Calculate total pages based on count and limit
        totalPages = result.totalPages; // Adjust `10` if you use a different page size

        // Increment the page number for the next iteration
        page += 1;
      }

      // Prepare the data for export
      const exportData = allData.map((item) => ({
        Name: item.Name,
        Mobile: item.Mobile,
        Email: item.Email,
        Message: item.Message,
      }));

      // Create a worksheet from the data
      const ws = XLSX.utils.json_to_sheet(exportData);

      // Create a workbook and append the worksheet
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Contacts");

      // Write the Excel file
      const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });

      // Create a Blob and trigger the download
      const blob = new Blob([excelBuffer], {
        type: "application/octet-stream",
      });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "contacts.xlsx";
      link.click();
    } catch (error) {
      console.error("Error fetching or processing data:", error);
      toast.error("An error occurred while downloading the file");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <div className="relative overflow-x-auto sm:rounded-lg">
        <h1 className="text-2xl text-black underline mb-3 font-bold">
          Contacts
        </h1>
        <div className="flex justify-end">
          <button
            onClick={fetchData}
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            disabled={loading}
          >
            {loading ? "Loading..." : "Download Excel"}
          </button>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Number
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Message
              </th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  <div
                    role="status"
                    className="flex justify-center items-center"
                  >
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
            ) : listData?.data?.length ? (
              listData.data.map((item) => (
                <tr
                  key={item._id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.Name}
                  </td>
                  <td className="px-6 py-4">{item.Mobile}</td>
                  <td className="px-6 py-4">{item.Email}</td>
                  <td className="px-6 py-4">{item.Message}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  No contacts found
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <Pagination data={listData} pageNo={handlePageChange} pageVal={page} />
      </div>
    </section>
  );
}
