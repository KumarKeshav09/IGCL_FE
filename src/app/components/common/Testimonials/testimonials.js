// Import necessary libraries and CSS
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
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
  return (
    <div className="min-w-screen flex items-center justify-center py-5">
      <div className="w-full border-b border-gray-200 px-5 py-5 md:py-5">
        <div className="w-full mx-auto">
          <div className="text-center max-w-xl mx-auto">
            <h1 className="text-4xl md:text-7xl font-bold mb-5 text-gray-800">
              What people are saying.
            </h1>
            <h3 className="text-xl mb-5 font-light text-gray-800">
              Authentic testimonials from clients who trust us.
            </h3>
            <div className="text-center mb-10">
              <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
              <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
              <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
            </div>
          </div>
          <div className="-mx-3">
            <div className="px-16">
            <Slider {...settings} >
              <div className="w-full h-56 mx-auto bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                <div className="w-full flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    <img src="https://i.pravatar.cc/100?img=1" alt="Kenzie Edgar" />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-sm uppercase text-gray-600">
                      Kenzie Edgar.
                    </h6>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-sm leading-tight text-justify">
                    <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>
                    Company has been a game-changer for our organization. Their deep understanding of labor laws and exceptional legal advice have helped us navigate complex employment issues with ease. Their team is professional, responsive, and always goes above and beyond to ensure our needs are met. Highly recommended!
                    <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span>
                  </p>
                </div>
              </div>
              <div className="w-full h-56 mx-auto bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                <div className="w-full flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    <img src="https://i.pravatar.cc/100?img=2" alt="Stevie Tifft" />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-sm uppercase text-gray-600">
                      Stevie Tifft.
                    </h6>
                  </div>
                </div>
                <div className="w-full h-56">
                  <p className="text-sm leading-tight text-justify">
                    <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>
                    We turned to ICGL Labour Law Company during a challenging time in our business. Their expertise and strategic guidance were invaluable in resolving our disputes efficiently and favorably. The attorneys at ICGL are not only knowledgeable but also approachable, making the entire process smoother. We are incredibly grateful for their support.
                    <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span>
                  </p>
                </div>
              </div>
              <div className="w-full h-56 mx-auto bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                <div className="w-full flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    <img src="https://i.pravatar.cc/100?img=3" alt="Tommie Ewart" />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-sm uppercase text-gray-600">
                      Tommie Ewart.
                    </h6>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-sm leading-tight text-justify">
                    <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>
                    Working with this company has been an outstanding experience. Their legal team is exceptionally skilled and well-versed in all aspects of labor law. They have consistently provided us with accurate and practical legal solutions. Their dedication to their clients is evident in the quality of their work. We highly recommend their services.
                    <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span>
                  </p>
                </div>
              </div>
              <div className="w-full h-56 mx-auto bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                <div className="w-full flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    <img src="https://i.pravatar.cc/100?img=4" alt="Charlie Howse" />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-sm uppercase text-gray-600">
                      Charlie Howse.
                    </h6>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-sm leading-tight text-justify">
                    <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>
                    This Company has proven to be an invaluable partner for our business. Their deep knowledge of labor regulations and proactive approach to legal challenges have helped us maintain compliance and avoid potential issues. Their commitment to excellence and client satisfaction is truly impressive.
                    <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span>
                  </p>
                </div>
              </div>
              <div className="w-full h-56 mx-auto bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                <div className="w-full flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    <img src="https://i.pravatar.cc/100?img=5" alt="Nevada Herbertson" />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-sm uppercase text-gray-600">
                      Nevada Herbertson.
                    </h6>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-sm leading-tight text-justify">
                    <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>
                    They offer unparalleled legal expertise and exceptional client service. Their attorneys are not only highly skilled but also genuinely care about the well-being of their clients. They have helped us successfully navigate numerous labor-related matters, and we couldn't be more satisfied with their services.
                    <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span>
                  </p>
                </div>
              </div>
              <div className="w-full h-56 mx-auto bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                <div className="w-full flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    <img src="https://i.pravatar.cc/100?img=6" alt="Kris Stanton" />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-sm uppercase text-gray-600">
                      Kris Stanton.
                    </h6>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-sm leading-tight text-justify">
                    <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>
                    This Company has been instrumental in guiding us through complex employment regulations and labor disputes. Their prompt and insightful advice has saved us time and resources. The team’s professionalism and commitment to our success make them an invaluable partner. We trust ICGL completely with our labor law needs.
                    <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span>
                  </p>
                </div>
              </div>
            </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
