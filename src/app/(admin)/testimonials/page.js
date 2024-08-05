"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Pagination from "@/app/components/common/pagination";
import Popup from "@/app/components/common/popup";
import { API_BASE_URL } from "../../../../utils/constants";
import 'react-toastify/dist/ReactToastify.css'; 


export default function TestiMonials() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [listData, setListData] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false); // Add loading state

  useEffect(() => {
    getAllTestimonial();
  }, [page]);

  // Fetch all testimonials with pagination
  const getAllTestimonial = async () => {
    setLoading(true); // Set loading to true before fetching
    try {
      const res = await fetch(
        `${API_BASE_URL}/testimonial/allTestimonial?page=${page}&limit=10`
      );
      const data = await res.json();

      if (data?.success) {
        setListData(data);
      } else {
        toast.error(data?.errMessage || "Failed to fetch testimonials.");
      }
    } catch (error) {
      toast.error("An error occurred while fetching testimonials.");
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  // Delete a testimonial
  const handleDelete = async () => {
    try {
      const res = await fetch(
        `${API_BASE_URL}/testimonial/deleteTestimonial/${deleteId}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();

      if (data?.success) {
        getAllTestimonial();
        setDeleteId(null);
        setIsPopupOpen(false);
        toast.success("Testimonial deleted successfully.");
      } else {
        toast.error(data?.errMessage || "Failed to delete testimonial.");
      }
    } catch (error) {
      toast.error("An error occurred while deleting the testimonial.");
    }
  };

  // Cancel the delete action
  const handleCancel = () => {
    setDeleteId(null);
    setIsPopupOpen(false);
  };

  // Open the delete confirmation popup
  const deleteTestimonialModal = (id) => {
    setDeleteId(id);
    setIsPopupOpen(true);
  };

  // Handle page change for pagination
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <section>
      <div className="relative overflow-x-auto sm:rounded-lg">
        <h1 className="text-2xl text-black underline mb-3 font-bold">
          Testimonials
        </h1>
        <div className="flex flex-col sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
          <div>
            <Link href={"/testimonials/addTestiMonials"}>
              <button
                className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                type="button"
              >
                + Add Testimonial
              </button>
            </Link>
          </div>
        </div>

        {loading ? (
          <div role="status" className="flex justify-center items-center h-64">
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
        ) : (
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Comment
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {listData?.data?.map((item) => (
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
                  <td className="px-6 py-4">
                    <img
                      className="object-cover"
                      src={item.Image}
                      width={100}
                      height={100}
                      alt="Testimonial"
                    />
                  </td>
                  <td className="px-6 py-4">{item.Message}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <Link
                        href={`/testimonials/${item._id}`}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        <i className="bi bi-pencil-square"></i>
                      </Link>
                      <button
                        onClick={() => deleteTestimonialModal(item._id)}
                        className="font-medium text-red-600 dark:text-red-500 hover:underline"
                      >
                        <i className="bi bi-trash-fill"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <Pagination data={listData} pageNo={handlePageChange} pageVal={page} />
      <Popup
        isOpen={isPopupOpen}
        title="Are you sure you want to delete this Testimonial?"
        confirmLabel="Yes, I'm sure"
        cancelLabel="No, cancel"
        onConfirm={handleDelete}
        onCancel={handleCancel}
      />
    </section>
  );
}
