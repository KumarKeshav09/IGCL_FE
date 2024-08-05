"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { API_BASE_URL } from "../../../../../utils/constants";
import 'react-toastify/dist/ReactToastify.css';

export default function EditTestiMonials(params) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState("");
  const [imageFile, setImageFile] = useState(null); // To keep track of the new image file
  const [loading, setLoading] = useState(false); // Add loading state
  const imageInputRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    // Fetch the existing testimonial data
    const fetchTestimonial = async () => {
      setLoading(true); // Set loading to true before fetching
      try {
        const res = await fetch(`${API_BASE_URL}/testimonial/testimonialById/${params.params.editTestiMonials}`);
        const data = await res.json();
        if (data.success) {
          const { Name, Message, Image } = data.data;
          setName(Name);
          setMessage(Message);
          setImage(Image);
        } else {
          toast.error(data.errMessage || "Failed to fetch testimonial data.");
        }
      } catch (error) {
        toast.error("An error occurred while fetching testimonial data.");
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchTestimonial();
  }, [params.params.editTestiMonials]);

  const handleNameChange = (e) => setName(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  const handleImageInputChange = (event) => {
    const acceptedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
    const file = event.target.files[0];

    if (!acceptedFileTypes.includes(file.type)) {
      toast.error("Invalid image type. Please upload only JPEG or PNG files.");
      if (imageInputRef.current) {
        imageInputRef.current.value = "";
      }
      return;
    }

    setImageFile(file);
    setImage(URL.createObjectURL(file)); // Preview the selected image
  };

  const submitForm = async () => {
    if (!name || !message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setLoading(true); // Set loading to true before submitting
    const formData = new FormData();
    formData.append("Name", name);
    formData.append("Message", message);
    if (imageFile) {
      formData.append("Image", imageFile);
    }

    try {
      const res = await fetch(`${API_BASE_URL}/testimonial/updateTestimonial/${params.params.editTestiMonials}`, {
        method: "PATCH",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Updated Testimonials");
        router.push("/testimonials");
      } else {
        toast.error(data.errMessage || "Failed to update testimonial.");
      }
    } catch (error) {
      toast.error("An error occurred while updating the testimonial.");
    } finally {
      setLoading(false); // Set loading to false after submitting
    }
  };

  return (
    <section>
      <h1 className="text-2xl text-black underline mb-3 font-bold">
        Update Your Testimonial Details
      </h1>
      <Link href="/testimonials">
        <div className="mb-5 mt-5">
          <button
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            type="button"
          >
            Back
          </button>
        </div>
      </Link>
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
                onChange={handleNameChange}
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white required"
              >
                Message
              </label>
              <textarea
                value={message}
                onChange={handleMessageChange}
                id="message"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
                rows={4}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="imageInput"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Upload Image
              </label>
              <input
                type="file"
                id="imageInput"
                name="imageInput"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                ref={imageInputRef}
                accept=".jpg, .jpeg, .png"
                onChange={handleImageInputChange}
              />
            </div>
            {image && (
              <div className="flex flex-wrap">
                <div className="mr-4 mb-4">
                  <div className="ml-2 underline">
                    <h3>Selected Image</h3>
                  </div>
                  <img
                    src={image}
                    alt="Selected"
                    className="object-cover m-2 mt-5 border border-black rounded-lg"
                    width={200}
                    height={200}
                  />
                </div>
              </div>
            )}
          </div>
        </form>
      )}

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