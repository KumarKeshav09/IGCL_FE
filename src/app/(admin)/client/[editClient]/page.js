"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import {
  API_BASE_URL,
  IMAGE_BASE_URL,
  IMAGE_VIEW_URL,
} from "../../../../../utils/constants";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";

export default function EditClient({ params }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null); // Image selected by the user
  const [loading, setLoading] = useState(false);
  const [currentImage, setCurrentImage] = useState(null); // Image already uploaded
  const [imageUpload, setImageUpload] = useState(null); // Image URL after upload
  const imageInputRef = useRef(null);
  const router = useRouter();
  const token = Cookies.get("token");
  const clientId = params?.editClient;

  useEffect(() => {
    if (clientId) {
      fetchClientData();
    }
  }, [clientId]);

  const fetchClientData = async () => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/client/clientById/${clientId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch client data.");
      }

      const data = await response.json();
      setName(data.data.Name);
      setDescription(data.data.Description);
      setCurrentImage(data.data.Image); // Use current image for display
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  const handleNameChange = (e) => setName(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);

  const uploadImage = async (imageFile) => {
    setLoading(true); // Set loading state

    try {
      // Validate the image file type
      const acceptedFileTypes = ["image/jpeg", "image/jpg", "image/png", "image/pjpeg"];
      const fileExtension = imageFile.name.split(".").pop().toLowerCase();
      const isValidExtension = ["jpg", "jpeg", "png"].includes(fileExtension);

      if (!imageFile || !acceptedFileTypes.includes(imageFile.type) || !isValidExtension) {
        throw new Error(
          "Invalid image type or extension. Please upload only JPEG or PNG files."
        );
      }

      // Create FormData to send the file
      const formData = new FormData();
      formData.append("pdf", imageFile);

      // Make the image upload request
      const response = await fetch(`${IMAGE_BASE_URL}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      // Check if the server responded correctly
      if (!response.ok) {
        const errorBody = await response.text();
        throw new Error(`Upload failed: ${response.status} - ${errorBody}`);
      }

      // Parse the server response
      const resData = await response.json();

      // If the image was successfully uploaded, set the image URL
      if (resData?.success) {
        setImageUpload(resData.imageUrl); // Store the uploaded image URL
      } else {
        throw new Error(
          resData.error || "An error occurred during image upload"
        );
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`);
      console.error("Image upload error:", error); // More detailed error logging
    } finally {
      setLoading(false); // Reset the loading state
    }
  };

  const handleImageInputChange = async (e) => {
    const file = e.target.files[0];
    console.log("Selected file:", file);
    console.log("File type:", file.type);
    console.log("File name:", file.name);

    const acceptedFileTypes = ["image/jpeg", "image/jpg", "image/png", "image/pjpeg"];
    const fileExtension = file.name.split(".").pop().toLowerCase();
    const isValidExtension = ["jpg", "jpeg", "png"].includes(fileExtension);

    if (file && acceptedFileTypes.includes(file.type) && isValidExtension) {
      setImage(file);
      await uploadImage(file);
    } else {
      toast.error("Invalid image type or extension. Please upload only JPEG or PNG files.");
      if (imageInputRef.current) {
        imageInputRef.current.value = ""; // Clear the input field
      }
    }
  };

  const submitForm = async () => {
    if (!name || !description) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const formData = new URLSearchParams();
    formData.append("Name", name);
    formData.append("Description", description);
    formData.append("Image", imageUpload || currentImage);

    try {
      const response = await fetch(
        `${API_BASE_URL}/client/updateClient/${clientId}`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formData.toString(),
        }
      );

      const data = await response.json();

      if (data.success) {
        toast.success("Client Updated");
        router.push("/client");
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
        Update Your Client Details
      </h1>
      <Link href="/client">
        <button className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700">
          Back
        </button>
      </Link>

      <form className="mb-5">
        <div className="grid gap-4 mb-4 md:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Description
            </label>
            <textarea
              value={description}
              onChange={handleDescriptionChange}
              id="description"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
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
              ref={imageInputRef}
              accept=".jpg, .jpeg, .png"
              onChange={handleImageInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full"
            />
          </div>

          {image && (
            <div className="flex flex-wrap">
              <div className="mr-4 mb-4">
                <h3>Selected Image</h3>
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

          {currentImage && !image && (
            <div className="flex flex-wrap">
              <div className="mr-4 mb-4">
                <h3>Current Image</h3>
                <img
                  src={`${IMAGE_VIEW_URL}${currentImage}`}
                  alt="Current preview"
                  className="object-cover m-2 mt-5 border border-black rounded-lg"
                  width={200}
                  height={200}
                />
              </div>
            </div>
          )}
        </div>
      </form>

      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        onClick={submitForm}
        disabled={loading}
      >
        {loading ? "Updating..." : "Update"}
      </button>
    </section>
  );
}
