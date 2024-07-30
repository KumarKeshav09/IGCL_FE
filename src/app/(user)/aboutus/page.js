"use client";
import Navbar from "@/app/components/common/navbar";
import styles from "./aboutus.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { initFlowbite } from "flowbite";
import { useEffect } from "react";
import Footer from "@/app/components/common/footer";

export default function aboutUs() {

    var clientssettings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1008,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
      };

      useEffect(() => {
        initFlowbite(); // Call initCarousels() when component mounts
      }, []);

  return (
    <>
      <Navbar />
      <div className="-mt-44">
        <section className="bg-top h-62 bg-no-repeat bg-[url('/images/hero_banner5.jpg')] bg-top bg-gray-100 bg-blend-multiply">
          <div className="heroContent mx-auto max-w-screen text-center py-44 lg:py-44"></div>
        </section>
      </div>
      <div className={`${styles.heroSection}`} >
        <div className={`${styles.heroSectionLeft}`}>
          <h1 className="text-black font-semibold text-2xl mb-2">About ICGL</h1>
          <p className="text-gray-600">
            Innovative Governance Corporation Limited (IGCL INDIA) is a public
            limited corporation, set up under “The Companies Act 2013” of the
            Ministry of Corporate Affairs, Government of INDIA having its
            registered and corporate office at Jaipur (Rajasthan). The IGCL
            India, as one of the most significantly emerging consulting
            corporations of India, is engaged in a diversified portfolio of
            services. At IGCL India, we believe in treating people the way they
            want to be treated, with friendliness, calmness and respect. Our
            success is not only due to the quality of our work, it’s due to our
            attitude, our approach and the way we treat our clients. We provide
            outstanding and unsurpassed service that, together, delivers premium
            values to our customers.
          </p>
        </div>
        <div className={`${styles.heroSectionRight}`}>
          <img src="https://companion.stylemixthemes.com/corporate/wp-content/uploads/sites/3/2022/06/services-tab-1.jpg" />
        </div>
      </div>
      <hr />

      {/* value section  */}
      <div className={`${styles.valueSectionOutline}`}>
        <h1 className={`${styles.headMain}`}>Our Core Values</h1>
        <div className="text-center mb-10">
          <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
          <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
          <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
          <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
          <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
        </div>
        <div className={`${styles.valueSection}`}>
          <div className={`${styles.eachBlock}`}>
            <img src="../../images/talent.png" width={60} height={60} />
            <h1 className={`${styles.headText} mt-2`}>Success</h1>
            <p className={`${styles.despText}`}>
              We are committed to ensuring that our advice and recommendations
              are based on the best combination of methods, information
              research, creativity and internal quality assurance.
            </p>
          </div>
          <div className={`${styles.eachBlock}`}>
            <img src="../../images/bulb.png" width={60} height={60} />
            <h1 className={`${styles.headText} mt-2`}>Innovation</h1>
            <p className={`${styles.despText}`}>
              We love trying new things to run more effectively and efficiently.
            </p>
          </div>
          <div className={`${styles.eachBlock}`}>
            <img src="../../images/store-buyer.png" width={60} height={60} />
            <h1 className={`${styles.headText} mt-2`}>Ownership</h1>
            <p className={`${styles.despText}`}>
              We take initiative and responsibility for projects to achieve
              positive client results and social impact.
            </p>
          </div>
          <div className={`${styles.eachBlock}`}>
            <img src="../../images/customer.png" width={60} height={60} />
            <h1 className={`${styles.headText} mt-2`}>Happy Customer</h1>
            <p className={`${styles.despText}`}>
              Our customers are assured about the confidentiality and uniqueness
              of the service they are provided. Every client is reassured by the
              fact that the service provided to them is made-to-measure and will
              not be recycled for their competitors
            </p>
          </div>
          <div className={`${styles.eachBlock}`}>
            <img src="../../images/people-roof.png" width={60} height={60} />
            <h1 className={`${styles.headText} mt-2`}>Family</h1>
            <p className={`${styles.despText}`}>
              We are stronger because of our network of diverse peers, mentors,
              organizations, and communities.
            </p>
          </div>
          <div className={`${styles.eachBlock}`}>
            <img src="../../images/trust-alt.png" width={60} height={60} />
            <h1 className={`${styles.headText} mt-2`}>Trust</h1>
            <p className={`${styles.despText}`}>
              Our customers are the heart of all we do; we strive to deliver the
              best. We appreciate the trust that our clients put in us as we
              work with them to improve their business.
            </p>
          </div>
        </div>
      </div>
      <hr />

      {/* mission and vision  */}
      <div className={`${styles.missionSectionOutline}`}>
        <div className="mt-4">
          <p>
            <span className={`${styles.missionHeadTop}`}>
              WHO WE ARE. WHAT BE DO
            </span>
          </p>
          <h1 className={`${styles.missionHead}`}>Our Mission</h1>
          <p className={`${styles.missiondesp}`}>
            Led by energetic and experienced professionals, we use a dedicated
            business approach to produce innovative and strategic, yet
            affordable, solutions and result oriented service which helps
            clients to accomplish their venturesome goals with optimized costs.
          </p>
        </div>
        <div className="mt-4">
          <p>
            <span className={`${styles.missionHeadTop}`}>
              WHAT BE ASPIRE TO BE
            </span>
          </p>
          <h1 className={`${styles.missionHead}`}>Our Vision</h1>
          <p className={`${styles.missiondesp}`}>
            To be recognized as a key provider of strategic consulting for the
            development and execution of growth strategies across the world.
          </p>
        </div>
      </div>
      <hr />

      {/* team  */}
      <div className={`${styles.teamSection}`}>
      <h1 className={`${styles.headMain}`}>Our Team</h1>
        <div className="text-center mb-10">
          <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
          <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
          <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
          <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
          <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
        </div>
        <div className={`${styles.teamInnerSection}`}>
          <div className={`${styles.teamInnerleft}`}>
            <img className={`${styles.teamInnerImage}`} src="../../images/person1.jpg" />
          </div>
          <div className={`${styles.teamInnerright}`}>
            <h1 className="text-black font-semibold text-xl">Dr Vijay Vyas</h1>
            <p className="text-gray-600">Welcome to Innovative Governance Corporation Limited (IGCL INDIA), where we specialize in navigating the complex terrain of labor law with precision and expertise. As the Director of this esteemed consultancy, I am proud to lead a team dedicated to providing unparalleled support and guidance to businesses across industries. Our mission is to empower organizations with the knowledge and strategies needed to thrive while upholding the highest standards of legal compliance. At IGCL INDIA, we believe that proactive compliance not only mitigates risk but also fosters a culture of fairness and respect in the workplace. It is our privilege to serve as your trusted advisors, providing clarity and peace of mind in the complex world of labor law.</p>
          </div>
        </div>
        <div className={`${styles.teamInnerSection}`}>
          <div className={`${styles.teamInnerleft}`}>
            <img className={`${styles.teamInnerImage}`}  src="../../images/person1.jpg" />
          </div>
          <div className={`${styles.teamInnerright}`}>
            <h1 className="text-black font-semibold text-xl">Nitesh Choudhary</h1>
            <p className="text-gray-600">Progress for me has never been a dream. It has always been a distant reality and once one milestone is achieved, there is always another one waiting to be crossed. It is with this belief that I started INNOVATIVE GOVERNANCE CORPORATION LIMITED (IGCL) in 2020, a company that is in Labour Law Compliance. I always wanted to push my company to more prosperous milestones. More than being a global player, I always perceived my company as a unit that could make a difference with its quality and competitively priced services. The journey of IGCL is never-ending. But with the support of my team and clients, I am confident that the company will continue to scale milestones of excellence for years to come.</p>
          </div>
        </div>
      </div>
      <hr />

      {/* client */}
      <div className="min-w-screen  flex items-center justify-center py-5">
        <div className="w-full border-b border-gray-200 px-10 py-16 md:py-24 text-gray-800">
          <div className="w-full max-w-screen mx-auto">
            <div className="text-center max-w-xl mx-auto">
              <h1 className="text-4xl md:text-7xl font-bold mb-5 text-gray-800">
                CLIENTS
              </h1>
              <h3 className="text-xl mb-5 font-light text-gray-800">
                Empowering clients with innovative solutions and unparalleled
                support.
              </h3>
              <div className="text-center mb-10">
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
              </div>
            </div>
            <div className="-mx-3 ">
              <div className="px-3 ">
                <Slider {...clientssettings}>
                  <div className="image-container">
                    <img
                      src="/images/clientBW1.png"
                      alt="Initial Image"
                      className="initial-image cursor-pointer"
                    />
                    <img
                      src="/images/clientC1.png"
                      alt="Hover Image"
                      className="hover-image cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src="/images/clientBW2.png"
                      alt="Initial Image"
                      className="initial-image cursor-pointer"
                    />
                    <img
                      src="/images/clientC2.png"
                      alt="Hover Image"
                      className="hover-image cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src="/images/clientBW3.png"
                      alt="Initial Image"
                      className="initial-image cursor-pointer"
                    />
                    <img
                      src="/images/clientC3.jpg"
                      alt="Hover Image"
                      className="hover-image cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src="/images/clientBW4.png"
                      alt="Initial Image"
                      className="initial-image cursor-pointer"
                    />
                    <img
                      src="/images/clientC4.jpg"
                      alt="Hover Image"
                      className="hover-image cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src="/images/clientBW5.png"
                      alt="Initial Image"
                      className="initial-image cursor-pointer"
                    />
                    <img
                      src="/images/clientC5.jpg"
                      alt="Hover Image"
                      className="hover-image cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src="/images/clientBW6.png"
                      alt="Initial Image"
                      className="initial-image cursor-pointer"
                    />
                    <img
                      src="/images/clientC6.png"
                      alt="Hover Image"
                      className="hover-image cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src="/images/clientBW7.png"
                      alt="Initial Image"
                      className="initial-image cursor-pointer"
                    />
                    <img
                      src="/images/clientC7.png"
                      alt="Hover Image"
                      className="hover-image cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src="/images/clientC8.png"
                      alt="Initial Image"
                      className="initial-image cursor-pointer"
                    />
                    <img
                      src="/images/clientC8.png"
                      alt="Hover Image"
                      className="hover-image cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src="/images/clientBW9.png"
                      alt="Initial Image"
                      className="initial-image cursor-pointer"
                    />
                    <img
                      src="/images/clientC9.jpg"
                      alt="Hover Image"
                      className="hover-image cursor-pointer"
                    />
                  </div>
                  {/* <div className="image-container">
    <img src="/images/clientBW10.png" alt="Initial Image" className="initial-image cursor-pointer" />
    <img src="/images/clientC10.png" alt="Hover Image" className="hover-image cursor-pointer" />
  </div> */}
                  <div className="image-container">
                    <img
                      src="/images/clientBW11.png"
                      alt="Initial Image"
                      className="initial-image cursor-pointer"
                    />
                    <img
                      src="/images/clientC11.png"
                      alt="Hover Image"
                      className="hover-image cursor-pointer"
                    />
                  </div>
                  {/* <div className="image-container">
    <img src="/images/clientBW12.png" alt="Initial Image" className="initial-image cursor-pointer" />
    <img src="/images/clientC12.jpg" alt="Hover Image" className="hover-image cursor-pointer" />
  </div> */}
                  <div className="image-container">
                    <img
                      src="/images/clientBW13.png"
                      alt="Initial Image"
                      className="initial-image cursor-pointer"
                    />
                    <img
                      src="/images/clientC13.png"
                      alt="Hover Image"
                      className="hover-image cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src="/images/clientBW1.png"
                      alt="Initial Image"
                      className="initial-image cursor-pointer"
                    />
                    <img
                      src="/images/clientC1.png"
                      alt="Hover Image"
                      className="hover-image cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src="/images/clientBW2.png"
                      alt="Initial Image"
                      className="initial-image cursor-pointer"
                    />
                    <img
                      src="/images/clientC2.png"
                      alt="Hover Image"
                      className="hover-image cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src="/images/clientBW3.png"
                      alt="Initial Image"
                      className="initial-image cursor-pointer"
                    />
                    <img
                      src="/images/clientC3.jpg"
                      alt="Hover Image"
                      className="hover-image cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src="/images/clientBW4.png"
                      alt="Initial Image"
                      className="initial-image cursor-pointer"
                    />
                    <img
                      src="/images/clientC4.jpg"
                      alt="Hover Image"
                      className="hover-image cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src="/images/clientBW14.png"
                      alt="Initial Image"
                      className="initial-image cursor-pointer"
                    />
                    <img
                      src="/images/clientC14.jpg"
                      alt="Hover Image"
                      className="hover-image cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src="/images/clientBW15.png"
                      alt="Initial Image"
                      className="initial-image cursor-pointer"
                    />
                    <img
                      src="/images/clientC15.png"
                      alt="Hover Image"
                      className="hover-image cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src="/images/clientBW16.png"
                      alt="Initial Image"
                      className="initial-image cursor-pointer"
                    />
                    <img
                      src="/images/clientC16.png"
                      alt="Hover Image"
                      className="hover-image cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src="/images/clientBW17.png"
                      alt="Initial Image"
                      className="initial-image cursor-pointer"
                    />
                    <img
                      src="/images/clientC17.png"
                      alt="Hover Image"
                      className="hover-image cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src="/images/clientBW18.png"
                      alt="Initial Image"
                      className="initial-image cursor-pointer"
                    />
                    <img
                      src="/images/clientC18.jpg"
                      alt="Hover Image"
                      className="hover-image cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src="/images/clientBW19.png"
                      alt="Initial Image"
                      className="initial-image cursor-pointer"
                    />
                    <img
                      src="/images/clientC19.png"
                      alt="Hover Image"
                      className="hover-image cursor-pointer"
                    />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* testimonials  */}
      <div className="min-w-screen  flex items-center justify-center py-5">
        <div className="w-full border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800">
          <div className="w-full max-w-6xl mx-auto">
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
            <div className="-mx-3 ">
              <div className="px-3 grid grid-cols-2 md:grid-cols-3 gap-3">
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src="https://i.pravatar.cc/100?img=1" alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm uppercase text-gray-600">
                        Kenzie Edgar.
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quos sunt ratione dolor exercitationem minima quas itaque
                      saepe quasi architecto vel! Accusantium, vero sint
                      recusandae cum tempora nemo commodi soluta deleniti.
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src="https://i.pravatar.cc/100?img=2" alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm uppercase text-gray-600">
                        Stevie Tifft.
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      Lorem ipsum, dolor sit amet, consectetur adipisicing elit.
                      Dolore quod necessitatibus, labore sapiente, est,
                      dignissimos ullam error ipsam sint quam tempora vel.
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src="https://i.pravatar.cc/100?img=3" alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm uppercase text-gray-600">
                        Tommie Ewart.
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Vitae, obcaecati ullam excepturi dicta error deleniti
                      sequi.
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>

                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src="https://i.pravatar.cc/100?img=4" alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm uppercase text-gray-600">
                        Charlie Howse.
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto inventore voluptatum nostrum atque, corrupti,
                      vitae esse id accusamus dignissimos neque reprehenderit
                      natus, hic sequi itaque dicta nisi voluptatem! Culpa,
                      iusto.
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>

                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src="https://i.pravatar.cc/100?img=5" alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm uppercase text-gray-600">
                        Nevada Herbertson.
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nobis, voluptatem porro obcaecati dicta, quibusdam sunt
                      ipsum, laboriosam nostrum facere exercitationem pariatur
                      deserunt tempora molestiae assumenda nesciunt alias eius?
                      Illo, autem!
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src="https://i.pravatar.cc/100?img=6" alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm uppercase text-gray-600">
                        Kris Stanton.
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatem iusto, explicabo, cupiditate quas totam!
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
