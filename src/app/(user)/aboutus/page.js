"use client";
import Navbar from "@/app/components/common/navbar";
import styles from "./aboutus.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import { initFlowbite } from "flowbite";
import { useEffect, useState } from "react";
import Footer from "@/app/components/common/footer";
import Testimonials from "@/app/components/common/Testimonials/testimonials";
import { API_BASE_URL } from "../../../../utils/constants";
import { toast } from "react-toastify";

export default function aboutUs() {
  useEffect(() => {
    // Import Flowbite only on the client side
    import("flowbite").then((module) => {
      const { initFlowbite } = module;
      initFlowbite();
      getAllClient();
    });
  }, []);

  const [listData, setListData] = useState([]);
  const [loading, setLoading] = useState(false); // Add loading state

  const getAllClient = async () => {
    setLoading(true); // Set loading to true before fetching
    try {
      const response = await fetch(`${API_BASE_URL}/client/allClient`);
      const data = await response.json();
      if (data.success) {
        setListData(data);
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Failed to fetch clients");
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };
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

  return (
    <>
      <Navbar />
      {/* <div className="-mt-44">
        <section className="bg-top h-62 bg-no-repeat bg-[url('/images/hero_banner5.jpg')] bg-top bg-gray-100 bg-blend-multiply">
          <div className="heroContent mx-auto max-w-screen text-center py-44 lg:py-44"></div>
        </section>
      </div> */}
      <div className={`${styles.heroSection}`}>
        <div className={`${styles.heroSectionLeft} md:pr-10 `}>
          <h1 className={`${styles.heroMain}`}>About ICGL</h1>
          <p className={`${styles.despText} text-justify`}>
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
        <div className="text-center mb-5">
          <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
          <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
          <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
          <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
          <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
        </div>
        <div className={`${styles.valueSection}`}>
          <div className={`${styles.eachBlock}`}>
            <img className={`${styles.imageBefore}`} src="../../images/people-roof1.png" width={60} height={60} />
            <img className={`${styles.imageAfter}`} src="../../images/people-roof-W.png" width={60} height={60} />
            <h1 className={`${styles.headText} mt-2`}>Family</h1>
            <p className={`${styles.despText} text-justify `}>
              Our strength lies in the diverse network of peers, mentors, and
              organizations that support us. Together, we thrive through shared
              knowledge and community. We grow stronger by embracing and
              learning from each other.
            </p>
          </div>
          <div className={`${styles.eachBlock}`}>
            <img className={`${styles.imageBefore}`} src="../../images/bulb1.png" width={60} height={60} />
            <img className={`${styles.imageAfter}`} src="../../images/bulb-W.png" width={60} height={60} />
            <h1 className={`${styles.headText} mt-2`}>Innovation</h1>
            <p className={`${styles.despText} text-justify`}>
              We embrace new approaches to enhance effectiveness and efficiency.
              By experimenting and adapting, we drive continuous improvement.
              Our passion for innovation fuels progress and success.
            </p>
          </div>
          <div className={`${styles.eachBlock}`}>
            <img className={`${styles.imageBefore}`} src="../../images/store-buyer1.png" width={60} height={60} />
            <img className={`${styles.imageAfter}`} src="../../images/store-buyer-W.png" width={60} height={60} />
            <h1 className={`${styles.headText} mt-2`}>Ownership</h1>
            <p className={`${styles.despText} text-justify`}>
              We take initiative and embrace responsibility for our projects.
              Our commitment drives positive client outcomes and social impact.
              By owning our work, we ensure excellence and meaningful results.
            </p>
          </div>
          <div className={`${styles.eachBlock}`}>
            <img className={`${styles.imageBefore}`} src="../../images/customer1.png" width={60} height={60} />
            <img className={`${styles.imageAfter}`} src="../../images/customer-W.png" width={60} height={60} />
            <h1 className={`${styles.headText} mt-2`}>Happy Customer</h1>
            <p className={`${styles.despText} text-justify`}>
              Our customers are assured about the confidentiality and uniqueness
              of the service they are provided. Every client is reassured by the
              fact that the service provided to them is made-to-measure and will
              not be recycled for their competitors
            </p>
          </div>
          <div className={`${styles.eachBlock}`}>
            <img className={`${styles.imageBefore}`} src="../../images/talent1.png" width={60} height={60} />
            <img className={`${styles.imageAfter}`} src="../../images/talent-W.png" width={60} height={60} />
            <h1 className={`${styles.headText} mt-2`}>Success</h1>
            <p className={`${styles.despText} text-justify`}>
              We are committed to ensuring that our advice and recommendations
              are based on the best combination of methods, information
              research, creativity and internal quality assurance.
            </p>
          </div>
          <div className={`${styles.eachBlock}`}>
            <img className={`${styles.imageBefore}`} src="../../images/trust-alt1.png" width={60} height={60} />
            <img className={`${styles.imageAfter}`} src="../../images/trust-alt-W.png" width={60} height={60} />
            <h1 className={`${styles.headText} mt-2`}>Trust</h1>
            <p className={`${styles.despText} text-justify`}>
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
          <h1 className={`${styles.missionHead}`}>Our Mission</h1>
          <p className={`${styles.missiondesp} text-justify`}>
            Led by energetic and experienced professionals, we use a dedicated
            business approach to produce innovative and strategic, yet
            affordable, solutions and result oriented service which helps
            clients to accomplish their venturesome goals with optimized costs.
          </p>
        </div>
        <div className="mt-4">
          <h1 className={`${styles.missionHead}`}>Our Vision</h1>
          <p className={`${styles.missiondesp} text-justify`}>
            To be recognized as a key provider of strategic consulting for the
            development and execution of growth strategies across the world.
          </p>
        </div>
      </div>
      <hr />

      {/* team  */}
      <div className={`${styles.teamSection}`}>
        <h1 className={`${styles.headMain}`}>Leadership</h1>
        <div className="text-center mb-5">
          <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
          <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
          <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
          <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
          <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
        </div>
        <div className={`${styles.teamInnerSection}`}>
          <div className={`${styles.teamInnerleft}`}>
            <img
              className={`${styles.teamInnerImage}`}
              src="../../images/person1.jpg"
            />
          </div>
          <div className={`${styles.teamInnerright}`}>
            <h1 className={`${styles.heroMain}`}>Dr Vijay Vyas</h1>
            <p className={`${styles.despText} text-justify`}>
              Welcome to Innovative Governance Corporation Limited (IGCL INDIA),
              where we specialize in navigating the complex terrain of labor law
              with precision and expertise. As the Director of this esteemed
              consultancy, I am proud to lead a team dedicated to providing
              unparalleled support and guidance to businesses across industries.
              Our mission is to empower organizations with the knowledge and
              strategies needed to thrive while upholding the highest standards
              of legal compliance. At IGCL INDIA, we believe that proactive
              compliance not only mitigates risk but also fosters a culture of
              fairness and respect in the workplace. It is our privilege to
              serve as your trusted advisors, providing clarity and peace of
              mind in the complex world of labor law.
            </p>
          </div>
        </div>
        <div className={`${styles.teamInnerSection}`}>
          <div className={`${styles.teamInnerleft}`}>
            <img
              className={`${styles.teamInnerImage}`}
              src="../../images/person1.jpg"
            />
          </div>
          <div className={`${styles.teamInnerright}`}>
            <h1 className={`${styles.heroMain}`}>Nitesh Choudhary</h1>
            <p className={`${styles.despText} text-justify`}>
              Progress for me has never been a dream. It has always been a
              distant reality and once one milestone is achieved, there is
              always another one waiting to be crossed. It is with this belief
              that I started INNOVATIVE GOVERNANCE CORPORATION LIMITED (IGCL) in
              2020, a company that is in Labour Law Compliance. I always wanted
              to push my company to more prosperous milestones. More than being
              a global player, I always perceived my company as a unit that
              could make a difference with its quality and competitively priced
              services. The journey of IGCL is never-ending. But with the
              support of my team and clients, I am confident that the company
              will continue to scale milestones of excellence for years to come.
            </p>
          </div>
        </div>
      </div>
      <hr />

      {/* client */}
      <div className="min-w-screen  flex items-center justify-center py-5">
        <div className="w-full border-gray-200 px-5 py-5 md:py-10 text-gray-800">
          <div className="w-full max-w-screen mx-auto">
            <div className="text-center max-w-xl mx-auto">
              <h1 className="text-4xl md:text-7xl font-bold mb-5 text-gray-800">
                CLIENTS
              </h1>
              <h3 className="text-xl lg:text-nowrap mb-5 font-light text-gray-800">
                Empowering clients with innovative solutions and unparalleled
                support.
              </h3>
              <div className="text-center mb-5">
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
              </div>
            </div>
            <div className="-mx-3 ">
              <div className="px-3 pb-10">
                <Slider {...clientssettings}>
                  {listData?.data?.map((item) => (
                    <div className="image-container">
                      <img
                        src={item.Image}
                        alt="Hover Image"
                        className="cursor-pointer"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* testimonials  */}
      <Testimonials />

      <Footer />
    </>
  );
}
