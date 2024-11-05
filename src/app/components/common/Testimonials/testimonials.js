import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./testimonial.module.css";
import { API_BASE_URL } from "../../../../../utils/constants";
import { toast } from "react-toastify";

const settings = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Testimonials = () => {
  const [listData, setListData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAllTestimonial();
  }, []);

  // Fetch all testimonials with pagination
  const getAllTestimonial = async () => {
    setLoading(true); // Set loading to true before fetching
    try {
      const res = await fetch(`${API_BASE_URL}/testimonial/allTestimonial`);
      const data = await res.json();

      if (data?.success) {
        setListData(data);
      } else {
        toast.error(data?.errMessage || "Failed to fetch testimonials.");
      }
    } catch (error) {
      toast.error("An error occurred while fetching testimonials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-w-screen bgAlternate flex items-center justify-center px-5 md:py-3">
      <div className="w-full border-gray-200 md:px-10 py-5 md:py-3">
        <div className="w-full mx-auto">
          <div className="text-center max-w-xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-800">
              What people are saying.
            </h1>
            <div className="text-center mb-5">
              <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
              <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
              <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
            </div>
          </div>

          {/* Show the spinner while loading */}
          {loading ? (
            <div className="flex justify-center items-center py-10">
              <div role="status">
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
            </div>
          ) : (
            <div className="-mx-3">
              <div className="px-5 md:px-16">
                <Slider {...settings}>
                  {listData?.data?.map((item) => (
                    <div
                      key={item._id}
                      className={`${styles.cardWidth} mx-auto bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6`}
                    >
                      <div className="w-full flex mb-2 items-center">
                        <div className="flex-grow pl-3">
                          <h6 className="font-bold text-sm uppercase text-gray-600">
                            {item.Name}
                          </h6>
                          <p className="text-sm">
                            {item.Designation} - {item.CompanyName}
                          </p>
                        </div>
                      </div>
                      <div className="w-full flex-grow flex items-center justify-center">
                        <p className="text-sm leading-tight text-justify">
                          <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                            "
                          </span>
                          {item.Message}
                          <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                            "
                          </span>
                        </p>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
