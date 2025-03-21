"use client";
import Image from "next/image";
import Navbar from "./components/common/navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Accordion } from "flowbite-react";
import Footer from "./components/common/footer";
// import { initFlowbite } from "flowbite";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./services.module.css";
import { API_BASE_URL, IMAGE_VIEW_URL } from "../../utils/constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Testimonials from "./components/common/Testimonials/testimonials";
export default function Home() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const [Mobile, setMobile] = useState();

  var herosettings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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

  const [listData, setListData] = useState([]);
  const [listFAQData, setListFAQData] = useState([]);
  const [loading, setLoading] = useState(false); // Add loading state

  useEffect(() => {
    getAllClient();
    getAllFAQ();
  }, []);

  const getAllFAQ = async () => {
    setLoading(true); // Show loader
    try {
      const res = await fetch(`${API_BASE_URL}/faq/allFAQ`);
      const data = await res.json();
      if (data.success) {
        setListFAQData(data);
      } else {
        toast.error(data.errMessage || "Failed to fetch FAQs");
      }
    } catch (error) {
      toast.error("An error occurred while fetching FAQs");
    } finally {
      setLoading(false); // Hide loader
    }
  };

  const getAllClient = async () => {
    setLoading(true); // Set loading to true before fetching
    try {
      const response = await fetch(
        `${API_BASE_URL}/client/allClient?page=1&limit=100`
      );
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

  console.log("listData", listData);
  useEffect(() => {
    // Import Flowbite only on the client side
    import("flowbite").then((module) => {
      const { initFlowbite } = module;
      initFlowbite();
    });
  }, []);
  // useEffect(() => {
  //   initFlowbite(); // Call initCarousels() when component mounts
  // }, []);
  const handleName = useCallback((value) => {
    console.log("value", value.target.value);
    setName(() => value.target.value);
  }, []);
  const handleEmail = useCallback((value) => {
    console.log("value", value.target.value);
    setEmail(() => value.target.value);
  }, []);
  const handleMobile = useCallback((value) => {
    console.log("value", value.target.value);
    setMobile(() => value.target.value);
  }, []);
  const handleMessage = useCallback((value) => {
    console.log("value", value.target.value);
    setMessage(() => value.target.value);
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!Name) {
      toast.error("Name is required");
      return;
    }
    if (!Email) {
      toast.error("Email is required");
      return;
    }
    function isValidEmail(Email) {
      // Regular expression to validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(Email);
    }
    if (!isValidEmail(Email)) {
      toast.error("Invalid email format");
      return;
    }
    if (!Message) {
      toast.error("Question is required");
      return;
    }
    let data = {
      Name,
      Email,
      Message,
    };
    if (Mobile !== "") {
      data.Mobile = Mobile;
    }
    if (!/^(\+\d{1,3}[- ]?)?\d{10}$/.test(Mobile)) {
      toast.error("Please enter a valid 10-digit mobile number");
      return false;
    }
    try {
      const res = await fetch(`${API_BASE_URL}/contact/addContact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const resData = await res.json();

      console.log("resData", resData);

      if (resData?.success) {
        toast.success("Question is successfully sent!");
        setName("");
        setEmail("");
        setMessage("");
        setMobile("");
        return { successMessage: resData };
      } else {
        toast.error(resData.error);
        return { errMessage: resData.error };
      }
    } catch (error) {
      toast.error("someting went wrong");
      console.log("error message ", error);
    }
  };

  const boxRef = useRef(null);

  useEffect(() => {
    const scrollBox = boxRef.current;
    let scrollInterval;

    const autoScroll = () => {
      if (scrollBox) {
        scrollBox.scrollBy({
          left: 300, // Adjust the scroll amount as needed
          behavior: "smooth",
        });

        // Reset scroll if it reaches the end
        if (
          scrollBox.scrollLeft + scrollBox.clientWidth >=
          scrollBox.scrollWidth
        ) {
          scrollBox.scrollLeft = 0;
        }
      }
    };

    scrollInterval = setInterval(autoScroll, 3000); // Change slides every 3 seconds

    return () => clearInterval(scrollInterval);
  }, []);

  const Spinner = () => (
    <div role="status" className="flex justify-center items-center py-10">
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
  );

  return (
    <main className="">
      <Navbar />
      {/* hero section */}
      <div className="">
        {/* bg-[url('/images/hero_banner8.webp')] */}

        <section className="heroImage bg-center  bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
          <div className="px-2 mx-auto max-w-screen-2xl overflow-x-hidden text-center">
            <Slider {...herosettings}>
              <div>
                <h1 className="heroLabourtext mb-4  font-bold tracking-tight leading-none text-white ">
                  YOUR COMPLIANCE{" "}
                </h1>
                <h1 className="heroLabourtext mb-12  font-bold tracking-tight leading-none text-white ">
                  {" "}
                  OUR PRIORITY
                </h1>
              </div>

              <div>
                <h1 className="heroLabourtext mb-4  font-bold tracking-tight leading-none text-white ">
                  YOUR COMPLIANCE{" "}
                </h1>
                <h1 className="heroLabourtext mb-12  font-bold tracking-tight leading-none text-white ">
                  {" "}
                  COMPANION
                </h1>
              </div>

              <div>
                <h1 className="heroLabourtext mb-4  font-bold tracking-tight leading-none text-white ">
                  ENSURING COMPLIANCE{" "}
                </h1>
                <h1 className="heroLabourtext mb-12  font-bold tracking-tight leading-none text-white ">
                  {" "}
                  EMPOWERING WORKFORCE
                </h1>
              </div>
            </Slider>

            {/* <h1 className="heroLabourtext mb-4  font-bold tracking-tight leading-none text-white ">Your Compliance, </h1>
        <h1 className="heroLabourtext mb-12  font-bold tracking-tight leading-none text-white ">   Our Priority</h1> */}
            <p className="mb-12 text-base font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
              IGCL INDIA offers customized compliance solutions, ensuring your
              business meets all statutory requirements, from employee benefits
              to workplace safety.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
              <Link
                href="/services"
                className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
              >
                More info
              </Link>
            </div>
          </div>
        </section>

        {/* <section className="bg-center demo-wrap h-screen bg-no-repeat  bg-cover bg-gray-100 bg-blend-multiply">
            <div className="demo-content heroContent mx-auto max-w-screen text-center py-44 lg:py-44">
              <div className="flex w-fit labour mr-auto">
                <h1 className="mb-4 heroLabourtext  tracking-tight leading-none text-gray-900 ">
                YOUR 
                </h1> 
              </div>
              <div className="w-fit law">
                <h1 className="mb-4 heroLabourtext  tracking-tight leading-none text-gray-900 ">
                COMPLIANCE
                </h1>
              </div>
              <div className="flex w-fit compliance mr-auto">
                <div className="heroCompliance">
                  <h1 className="mb-4 heroLabourtext  tracking-tight leading-none text-gray-900 ">
                  COMPANION
                  </h1>
                </div>
              </div>
              <div className="mt-auto mt-4 mr-auto ml-4">
                <div>
                  <p className="text-white bg-blue-700 w-fit px-4 font-bold heroDesc text-left">
                    We appreciate your trust greatly!
                  </p>
                </div>
                <div className="w-fit heroMoreInfo mt-4">
                  <a
                    href="#"
                    className=" inline-flex justify-center hover:text-gray-900  py-3 px-5  text-base font-medium text-center text-white font-bold  border border-white hover:bg-gray-400 focus:ring-4 focus:ring-gray-400"
                  >
                    More Info
                  </a>
                </div>
              </div>
            </div>
          </section> */}
        {/* <section className="bg-center h-screen bg-no-repeat bg-[url('/images/hero_labourNew.jpg')] bg-gray-700 bg-blend-multiply">
            <div className="heroContent mx-auto max-w-screen text-center py-44 lg:py-44">
              <div className="flex w-fit labour mr-auto">
                <h1 className="mb-4 heroLabourtext  tracking-tight leading-none text-white ">
                  LABOUR
                </h1>
              </div>
              <div className="w-fit law">
                <h1 className="mb-4 heroLabourtext  tracking-tight leading-none text-white ">
                  LAW
                </h1>
              </div>
              <div className="flex w-fit compliance mr-auto">
                <div className="heroCompliance">
                  <h1 className="mb-4 heroLabourtext  tracking-tight leading-none text-white ">
                    COMPLIANCES
                  </h1>
                </div>
              </div>
              <div className="mt-auto mt-4 mr-auto ml-4">
                <div>
                  <p className="text-gray-300 heroDesc text-left">
                    We appreciate your trust greatly!
                  </p>
                </div>
                <div className="w-fit heroMoreInfo mt-4">
                  <a
                    href="#"
                    className=" inline-flex justify-center hover:text-gray-900  py-3 px-5  text-base font-medium text-center text-white  border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
                  >
                    More Info
                  </a>
                </div>
              </div>
            </div>
          </section> */}
        {/* </Slider> */}
      </div>
      <marquee
        behavior="scroll"
        direction="left"
        className="p-2 text-lg font-bold text-white bg-indigo-600"
        // style={{ backgroundColor: "#5E9C40" }}
      >
        <span className="mr-4">
          IGCL India is proudly empaneled with the Ministry of Women and Child
          Development, Government of India, to conduct training and awareness
          programs under the POSH Act.
        </span>
      </marquee>
      {/* what we do */}
      <div className="py-2 md:py-8 whatWeDoMain px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 lg:h-29">
            <div className="mx-1 mt-24">
              <div>
                <img
                  className="h-32 lg:h-64  w-full"
                  src="/images/imgp1.jpeg"
                  alt=""
                />
              </div>
              <div className="mt-3">
                <img
                  className="h-32 lg:h-64 w-full"
                  src="/images/image5.jpg"
                  alt=""
                />
              </div>
              {/* <div className="mt-3">
                <div className={`${styles.weDoBox2}`}>
                  <img className={`${styles.weDoBoxIcon}`} src="../images/customer-care.png" />
                  <h1 className={`${styles.weDoBoxHead}`}>436</h1>
                  <p className={`${styles.weDoBoxPara}`}>SATISFIED CLIENTS</p>
                </div>
              </div> */}
            </div>
            <div className="mx-1">
              {/* <div className="mt-3">
                <div className={`${styles.weDoBox3}`}>
                  <img className={`${styles.weDoBoxIcon}`} src="../images/customer-care.png" />
                  <h1 className={`${styles.weDoBoxHead}`}>532</h1>
                  <p className={`${styles.weDoBoxPara}`}>PROJECTS COMPLETED</p>
                </div>
              </div> */}
              <div>
                <img
                  className="h-32  lg:h-64  w-full"
                  src="/images/whatWeDo3.png"
                  alt=""
                />
              </div>
              <div className="mt-3">
                <img
                  className="h-32  lg:h-64  w-full"
                  src="/images/whatWeDo4.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div>
            <section className=" dark:bg-gray-900">
              <div className="py-8 whatWeDoRIght mx-auto max-w-screen-xl text-left lg:py-16 md:px-16">
                <h1 className="mb-4 text-3xl text-gray-900 font-extrabold tracking-tight leading-none  md:text-4xl lg:text-6xl dark:text-white">
                  Expert Guidance in Compliance and Labor Law for Your Business
                </h1>
                <p className="mb-8 text-base text-justify font-normal text-gray-900 lg:text-xl  dark:text-gray-400">
                  IGCL INDIA is committed to providing outstanding and
                  unsurpassed service in the field of Labor law and statutory
                  compliance, consistently delivering premium value to our
                  customers. Our dedication and expertise in this specialized
                  domain define the enthusiasm and strong working profile of our
                  corporation.
                </p>
                {/* <p className="mb-8 mt-4 text-base text-justify font-normal text-gray-900 lg:text-xl  dark:text-gray-400">
                  At IGCL India, we believe in treating people the way they want to be treated, with friendliness, calmness, and respect. Our success is not only due to the quality of our work, It’s due to our attitude, our approach, and the way we treat our clients.
                </p> */}
                <div className="flex flex-col space-y-4 sm:flex-row  sm:space-y-0">
                  <Link
                    href="/aboutus"
                    className="py-3 px-5  text-sm font-medium text-indigo-500 focus:outline-none  border border-indigo-500 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-70"
                  >
                    Get to know us
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="min-w-screen bgAlternate  flex items-center justify-center md:py-3">
        <div className="w-full border-gray-200 px-5 pt-3 md:py-3 ">
          <div className="w-full mx-auto">
            <div className="text-center max-w-xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-800">
                Services
              </h1>
              <div className="text-center mb-3">
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
              </div>
            </div>
            <div className={styles.BoxContainer} ref={boxRef}>
              <Link href="/services/1-detail#profile" className={styles.card}>
                <img src="/images/image1.jpg" className={styles.image} />
                <div className={styles.overlay}>
                  <div className={styles.text}>
                    <h3 className={styles.textDesp}>Statutory Compliances </h3>
                    <p className={styles.textSecret}>
                      Compliance with labor, taxation, and environmental laws is
                      key to responsible business.
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="/services/1-detail#dashboard" className={styles.card}>
                <img src="/images/image4.jpg" className={styles.image} />
                <div className={styles.overlay}>
                  <div className={styles.text}>
                    <h3 className={styles.textDesp}>
                      Establishment Compliances
                    </h3>
                    <p className={styles.textSecret}>
                      Meeting legal requirements for permits, licenses, and
                      safety standards in business operations.
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="/services/1-detail#settings" className={styles.card}>
                <img src="/images/image2.jpg" className={styles.image} />
                <div className={styles.overlay}>
                  <div className={styles.text}>
                    <div>
                      <h3 className={styles.textDesp}>
                        Labor Law Audit and Assessment
                      </h3>
                    </div>
                    <p className={styles.textSecret}>
                      Evaluating compliance with labor regulations to ensure
                      fair practices in wages, benefits, and safety.
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="/services/1-detail#startup" className={styles.card}>
                <img src="/images/Logo.jpg" className={styles.image} />
                <div className={styles.overlay}>
                  <div className={styles.text}>
                    <h3 className={styles.textDesp}>Solutions for Startups </h3>
                    <p className={styles.textSecret}>
                      Comprehensive support for startups in planning, compliance
                      and marketing to fuel growth.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="min-w-screen flex items-center justify-center px-5 md:py-2">
        <div className="w-full border-gray-200 py-2 md:px-12 md:py-3 ">
          <div className="w-full mx-auto">
            <div className="text-center max-w-xl mx-auto">
              <h1 className="text-3xl md:text-4xl mb-2 font-bold text-gray-800">
                FAQ's
              </h1>
              <div className="text-center mb-5">
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
              </div>
            </div>

            {/* Conditional rendering based on loading state */}
            {loading ? (
              <Spinner />
            ) : (
              <div className="py-5 px-1 md:px-24 faqs mx-auto flex flex-col md:flex-row md:gap-12">
                <div className="flex flex-col text-left basis-1/2">
                  <p className="inline-block font-semibold text-gray-800 mb-4">
                    QUESTIONS & ANSWERS
                  </p>
                  <p className="text-3xl md:text-4xl font-bold text-gray-800">
                    Have any questions?
                  </p>
                  <p className="text-3xl md:text-4xl font-bold text-gray-800">
                    Find answers here
                  </p>
                  <p className="inline-block text-gray-800 mt-4 text-justify text-primary mb-4 text-lg font-normal text-gray-900 lg:text-xl dark:text-gray-400">
                    Whether you're curious about our services, need assistance,
                    or have a specific question, our FAQ section is here to
                    help. Browse through our most frequently asked questions and
                    find the information you need quickly and easily.
                  </p>
                </div>
                <ul className="basis-1/2">
                  <Accordion
                    collapseAll
                    className="border-none border-b border-gray-800"
                  >
                    {listFAQData?.data?.map((item) => (
                      <Accordion.Panel
                        className="border border-b border-gray-200"
                        key={item._id}
                      >
                        <section className="border-b border-gray-200">
                          <Accordion.Title
                            className="border-none text-base font-normal text-gray-900 lg:text-xl dark:text-gray-400 bg-transparent hover:bg-transparent
                            focus:bg-transparent focus:ring-grey-0 focus:ring-0 text-justify"
                          >
                            {item.Question}
                          </Accordion.Title>
                          <Accordion.Content
                            className="border-none text-base font-normal text-gray-900 lg:text-xl dark:text-gray-400 hover:bg-transparent
                            focus:bg-transparent focus:ring-grey-0 focus:ring-0"
                          >
                            <p className="mb-2 text-gray-800 dark:text-gray-800 text-justify">
                              {item.Answer}
                            </p>
                          </Accordion.Content>
                        </section>
                      </Accordion.Panel>
                    ))}
                  </Accordion>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <Testimonials />

      {/* Clients */}
      {/* <div className="min-w-screen  flex items-center justify-center px-5 md:py-2">
        <div className="w-full border-gray-200 md:px-10 py-5 md:py-3 text-gray-800">
          <div className="w-full max-w-screen mx-auto">
            <div className="text-center max-w-xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-800">
                Clients
              </h1>
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
                        src={`${IMAGE_VIEW_URL}` + `${item.Image}`}
                        alt="Hover Image"
                        className="cursor-pointer"
                      />
                    </div>
                  ))}
                  <div className="image-container">
                    <img
                      src={`../../images/clientC1.png`}
                      alt="Hover Image"
                      className="cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src={`../../images/clientC2.png`}
                      alt="Hover Image"
                      className="cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src={`../../images/clientC3.jpg`}
                      alt="Hover Image"
                      className="cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src={`../../images/clientC4.jpg`}
                      alt="Hover Image"
                      className="cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src={`../../images/clientC5.jpg`}
                      alt="Hover Image"
                      className="cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src={`../../images/clientC6.png`}
                      alt="Hover Image"
                      className="cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src={`../../images/clientC7.png`}
                      alt="Hover Image"
                      className="cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src={`../../images/clientC8.png`}
                      alt="Hover Image"
                      className="cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src={`../../images/clientC9.jpg`}
                      alt="Hover Image"
                      className="cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src={`../../images/clientC10.png`}
                      alt="Hover Image"
                      className="cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src={`../../images/clientC11.png`}
                      alt="Hover Image"
                      className="cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src={`../../images/clientC12.jpg`}
                      alt="Hover Image"
                      className="cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src={`../../images/clientC13.png`}
                      alt="Hover Image"
                      className="cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src={`../../images/clientC14.jpg`}
                      alt="Hover Image"
                      className="cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src={`../../images/clientC15.png`}
                      alt="Hover Image"
                      className="cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src={`../../images/clientC16.png`}
                      alt="Hover Image"
                      className="cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src={`../../images/clientC17.png`}
                      alt="Hover Image"
                      className="cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src={`../../images/clientC18.jpg`}
                      alt="Hover Image"
                      className="cursor-pointer"
                    />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="min-w-screen flex items-center justify-center md:py-2">
        <div className="w-full border-gray-200 px-5 py-5 md:py-3 text-gray-800">
          <div className="w-full max-w-screen mx-auto">
            <div className="text-center max-w-xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-800">
                Clients
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
              <Spinner />
            ) : (
              // Show the slider with client images after loading is complete
              <div className="-mx-3">
                <div className="px-3 pb-10">
                  <Slider {...clientssettings}>
                    {listData?.data?.map((item) => (
                      <div className="image-container" key={item._id}>
                        <img
                          src={`${IMAGE_VIEW_URL}${item.Image}`}
                          alt="Client Image"
                          className="cursor-pointer"
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Contact Us */}

      <section className={`${styles.forthSection} flex `}>
        <div className={`${styles.forthSectionInner}`}>
          <div className={`${styles.forthBoxMain}`}>
            <div className={`${styles.forthBoxText}`}>
              <h1>We always love to hear from you</h1>
            </div>
            <form className={`${styles.forthBoxForm}`}>
              <div className={`${styles.forthBoxInput}`}>
                <input
                  placeholder="Full Name"
                  value={Name}
                  onChange={handleName}
                  className="border-b bg-transparent text-xl focus:outline-0 focus:border-white hover:border-white mr-2 placeholder-gray-300 hover:placeholder-white py-3"
                />
                <input
                  placeholder="Email Address"
                  value={Email}
                  onChange={handleEmail}
                  className={`${styles.forthBoxInput2} py-3 border-b bg-transparent text-xl focus:outline-0 mr-2 focus:border-white hover:border-white placeholder-gray-300 hover:placeholder-white `}
                />
                <input
                  placeholder="Mobile Number"
                  type="number"
                  value={Mobile}
                  onChange={handleMobile}
                  className={`${styles.forthBoxInput2} py-3 border-0 border-b border-gray-300  appearance-none bg-transparent text-xl focus:outline-0 focus:border-white hover:border-white placeholder-gray-300 hover:placeholder-white `}
                />
              </div>
              <div className={`${styles.forthBoxDisplayForm}`}>
                <textarea
                  rows="2"
                  placeholder="Ask Your Question"
                  value={Message}
                  onChange={handleMessage}
                  className="block py-2.5 px-0 w-full resize-none text-xl text-white bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-0 focus:border-white hover:border-white placeholder-gray-300 hover:placeholder-white peer"
                />
                <div className={`${styles.forthBoxButton}`}>
                  <button
                    onClick={handleSubmit}
                    className={`${styles.forthButton}`}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className={`${styles.forthSectionImg}`}>
          <img src="../../../../images/contact.avif" />
        </div>
      </section>

      <Footer />
    </main>
  );
}
