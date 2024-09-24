"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { API_BASE_URL } from "../../../../../utils/constants";
import 'react-toastify/dist/ReactToastify.css';
import Cookies from "js-cookie";

export default function EditTestiMonials({ params }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [designation, setDesignation] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const token = Cookies.get("token");
  const testimonialId = params?.editTestiMonials;

  useEffect(() => {
    if (testimonialId) {
      fetchTestimonialData();
    }
  }, [testimonialId]);

  const fetchTestimonialData = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/testimonial/testimonialById/${testimonialId}`, {
        headers: { 'Authorization': `Bearer ${token}` },
      });

      if (!response.ok) throw new Error('Failed to fetch testimonial data.');
      
      const data = await response.json();
      setName(data.data.Name);
      setComment(data.data.Message);
      setDesignation(data.data.Designation);
      setCompanyName(data.data.CompanyName);
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  const handleInputChange = (setter) => (e) => setter(e.target.value);

  const submitForm = async () => {
    if (!name || !comment || !designation || !companyName) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const requestBody = {
      Name: name,
      Message: comment,
      Designation: designation,
      CompanyName: companyName,
    };

    try {
      const response = await fetch(`${API_BASE_URL}/testimonial/updateTestimonial/${testimonialId}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();
      if (data.success) {
        toast.success("Testimonial Updated");
        router.push("/testimonials");
      } else {
        toast.error(data.errMessage);
      }
    } catch (error) {
      toast.error("An error occurred while submitting the form.");
    }
  };

  return (
    <section>
      <h1 className="text-2xl text-black underline mb-3 font-bold">
        Update Your Testimonial Details
      </h1>
      <Link href="/testimonials">
        <button className="py-2.5 px-5 mb-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100">
          Back
        </button>
      </Link>
      <form className="mb-5">
        <div className="grid gap-4 mb-4 md:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white required"
            >
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={handleInputChange(setName)}
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="designation"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white required"
            >
              Designation
            </label>
            <input
              type="text"
              value={designation}
              onChange={handleInputChange(setDesignation)}
              id="designation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Designation"
              required
            />
          </div>
          <div>
            <label
              htmlFor="companyName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white required"
            >
              Company Name
            </label>
            <input
              type="text"
              value={companyName}
              onChange={handleInputChange(setCompanyName)}
              id="companyName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Company Name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="comment"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white required"
            >
              Comment
            </label>
            <textarea
              value={comment}
              onChange={handleInputChange(setComment)}
              id="comment"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
              rows={4}
            />
          </div>
        </div>
      </form>

      <button
        onClick={submitForm}
        disabled={loading}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5"
      >
        {loading ? "Updating..." : "Update"}
      </button>
    </section>
  );
}
