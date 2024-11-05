"use client";
import Link from "next/link";
import { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { API_BASE_URL, IMAGE_BASE_URL } from "../../../../../utils/constants";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";

export default function AddTestiMonials() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [image, setImage] = useState(null);
  const [imageUpload, setImageUpload] = useState(null);
  const [loading, setLoading] = useState(false); // Manage loading state
  const imageInputRef = useRef(null);
  const router = useRouter();
  const token = Cookies.get("token");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const uploadImage = async (imageFile) => {
    setLoading(true);

    try {
      // Ensure the file is valid
      if (
        !imageFile ||
        !["image/jpeg", "image/jpg", "image/png"].includes(imageFile.type)
      ) {
        throw new Error(
          "Invalid image type. Please upload a JPEG or PNG file."
        );
      }

      // Create FormData
      const formData = new FormData();
      formData.append("pdf", imageFile);

      const response = await fetch(`${IMAGE_BASE_URL}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        const errorBody = await response.text();
        throw new Error(
          `HTTP error! Status: ${response.status}. Response: ${errorBody}`
        );
      }

      const resData = await response.json();

      if (resData?.success) {
        setImageUpload(resData.imageUrl);
      } else {
        throw new Error(resData.error || "An error occurred");
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`);
      return { error: error.message };
    } finally {
      setLoading(false);
    }
  };

  const handleImageInputChange = async (e) => {
    const file = e.target.files[0];
    const acceptedFileTypes = ["image/jpeg", "image/jpg", "image/png"];

    if (file && acceptedFileTypes.includes(file.type)) {
      setImage(file);
      await uploadImage(file)
    } else {
      toast.error("Invalid image type. Please upload only JPEG or PNG files.");
      if (imageInputRef.current) {
        imageInputRef.current.value = "";
      }
    }
  };


  const submitForm = async () => {
    if (!name || !comment || !image) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const requestBody = {
      Name: name,
      Description: comment,
      Image: imageUpload, 
    };

    try {
      const response = await fetch(`${API_BASE_URL}/client/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Client Added");
        router.push("/client");
      } else {
        toast.error(data.errMessage);
      }
    } catch (error) {
      toast.error("An error occurred while submitting the form.");
    }
  };

  // const submitForm = async () => {
  //   // const uploadResult = await uploadImage(image);

  //   // if (uploadResult.error) {
  //   //   return;
  //   // }

  //   // const { imageUrl } = uploadResult;
  //   const requestBody = new URLSearchParams();
  //   requestBody.append("Name", "name");
  //   requestBody.append("Image", "1730721150802-clientC16.png");
  //   requestBody.append("Description", "comment");

  //   fetch("https://igrf.igclindia.com/v1/client/add", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/x-www-form-urlencoded",
  //       "Authorization": `Bearer ${token}`,
  //     },
  //     body: requestBody.toString(),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => console.log("Response:", data))
  //     .catch((error) => console.error("Error:", error));
  // };
  return (
    <section>
      <h1 className="text-2xl text-black underline mb-3 font-bold">
        Add Your Client Details
      </h1>
      <Link href="/client">
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
              htmlFor="comment"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white required"
            >
              Description
            </label>
            <textarea
              value={comment}
              onChange={handleCommentChange}
              id="comment"
              className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
              rows={4}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="imageInput"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white required"
            >
              Upload Image
            </label>
            <input
              type="file"
              id="imageInput"
              name="imageInput"
              ref={imageInputRef}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              accept=".jpg, .jpeg, .png"
              onChange={handleImageInputChange}
              required
            />
          </div>
          {image && (
            <div className="flex flex-wrap">
              <div className="mr-4 mb-4">
                <div className="ml-2 underline">
                  <h3>Selected Image</h3>
                </div>
                <img
                  src={URL.createObjectURL(image)}
                  alt="Selected preview"
                  className="object-cover m-2 mt-5 border border-black rounded-lg"
                  width={200}
                  height={200}
                />
              </div>
            </div>
          )}
        </div>
      </form>

      <div>
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
          onClick={submitForm}
          disabled={loading} // Disable button while loading
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </div>
    </section>
  );
}
