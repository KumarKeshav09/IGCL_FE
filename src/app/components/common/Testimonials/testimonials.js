// Import necessary libraries and CSS
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./testimonial.module.css"
import { API_BASE_URL } from "../../../../../utils/constants";


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

// Testimonials component
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
      const res = await fetch(
        `${API_BASE_URL}/testimonial/allTestimonial`
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
      setLoading(false);
    }
  };

  console.log("listData",listData)

  return (
    <div className="min-w-screen bgAlternate flex items-center justify-center px-5 md:py-3">
      <div className="w-full  border-gray-200 md:px-10 py-5 md:py-3">
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
          <div className="-mx-3">
            <div className="px-5 md:px-16">
            <Slider {...settings} >
            {listData?.data?.map((item) => (
              <div className={`${styles.cardWidth} mx-auto bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6`}>
                <div className="w-full flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200 flex">
                    {/* <img src={`https://igcl-api.onrender.com/uploads/` + `${item.Image}`} alt="Kenzie Edgar" /> */}
                    <img src={`../../../images/person1.jpg`} alt="Kenzie Edgar" />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-sm uppercase text-gray-600">
                      {item.Name}
                    </h6>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-sm leading-tight text-justify">
                    <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>
                    {item.Message}
                    <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span>
                  </p>
                </div>
              </div>
            ))}
            </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
