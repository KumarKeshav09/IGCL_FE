"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Pagination from "@/app/components/common/pagination";
import Popup from "@/app/components/common/popup";
import 'react-toastify/dist/ReactToastify.css'; // Ensure this import
import { API_BASE_URL } from "../../../../utils/constants";
import Cookies from "js-cookie";
//test

export default function FAQ() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [listData, setListData] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [page, setPage] = useState(1);
  const [searchData, setSearchData] = useState("");
  const [loading, setLoading] = useState(false); // Loader state
  const token = Cookies.get("token");


  useEffect(() => {
    getAllFAQ();
  }, [page, searchData]);

  const getAllFAQ = async () => {
    setLoading(true); // Show loader
    try {
      const res = await fetch(`${API_BASE_URL}/faq/allFAQ?page=${page}&limit=10`);
      if (!res) {
        const errorText = await res.text();
        throw new Error(`HTTP error! Status: ${res.status}, ${errorText}`);
      }
      const data = await res.json();
      if (data.success) {
        setListData(data);
      } else {
        toast.error(data.errMessage || "Failed to fetch FAQs");
      }
    } catch (error) {
      toast.error("An error occurred while fetching FAQs");
    } finally {
      setLoading(false); // Hide loader
    }
  };

  const handleDelete = async () => {
    try {
      setLoading(true); // Show loader
      const res = await fetch(`${API_BASE_URL}/faq/deleteFAQ/${deleteId}`, {
        method: 'DELETE',
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
      const data = await res.json();
      if (data.success) {
        getAllFAQ();
        setDeleteId(null);
        setIsPopupOpen(false);
        toast.success(data.message || "FAQ deleted successfully");
      } else {
        toast.error(data.errMessage || "Failed to delete FAQ");
      }
    } catch (error) {
      toast.error("An error occurred while deleting FAQ");
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

  const deleteTestimonialModal = (id) => {
    setDeleteId(id);
    setIsPopupOpen(true);
  };

  const handleCancel = () => {
    setDeleteId(null);
    setIsPopupOpen(false);
  };

  return (
    <section>
      <div className="relative overflow-x-auto sm:rounded-lg">
        <h1 className="text-2xl text-black underline mb-3 font-bold">
          FAQ
        </h1>
        <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
          <div>
            <Link href={"/FAQ/addFaq"}>
              <button
                className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                type="button"
              >
                + Add FAQ
              </button>
            </Link>
          </div>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Question
              </th>
              <th scope="col" className="px-6 py-3">
                Answer
              </th>
              <th scope="col" className="px-6 py-3">
                Action
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
                    {item.Question}
                  </td>
                  <td className="px-6 py-4 ">
                    {item.Answer}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <Link
                        href={`/FAQ/${item._id}`}
                        className="font-medium text-blue-600 text-lg dark:text-blue-500 hover:underline"
                      >
                        <i className="bi bi-pencil-square"></i>
                      </Link>
                      <Link
                        href="#"
                        className="font-medium text-red-600 text-lg dark:text-red-500 hover:underline"
                      >
                        <i
                          onClick={() => deleteTestimonialModal(item._id)}
                          className="bi bi-trash-fill"
                        ></i>
                      </Link>
                    </div>
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
      <Pagination data={listData} pageNo={handlePageChange} pageVal={page} />
      <Popup
        isOpen={isPopupOpen}
        title="Are you sure you want to delete this FAQ?"
        confirmLabel="Yes, I'm sure"
        cancelLabel="No, cancel"
        onConfirm={handleDelete}
        onCancel={handleCancel}
      />
      
    </section>
  );
}
