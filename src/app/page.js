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
import { useCallback, useEffect, useState } from "react";
import styles from "./services.module.css";
import { API_BASE_URL } from "../../utils/constants";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Testimonials from "./components/common/Testimonials/testimonials";
export default function Home() {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Message, setMessage] = useState('');
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
  useEffect(() => {
    // Import Flowbite only on the client side
    import('flowbite').then((module) => {
      const { initFlowbite } = module;
      initFlowbite();
    });
  }, []);
  // useEffect(() => {
  //   initFlowbite(); // Call initCarousels() when component mounts
  // }, []);
  const handleName = useCallback((value) => {
    console.log('value',value.target.value)
    setName(() => value.target.value);
  }, []);
  const handleEmail = useCallback((value) => {
    console.log('value',value.target.value)
    setEmail(() => value.target.value);
  }, []);
  const handleMobile = useCallback((value) => {
    console.log('value',value.target.value)
    setMobile(() => value.target.value);
  }, []);
  const handleMessage = useCallback((value) => {
    console.log('value',value.target.value)
    setMessage(() => value.target.value);
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!Name){
      
      toast.error('Name is required');
      return;
    }
    if(!Email){

      toast.error('Email is required');
      return;
    }
    if(!Message){

      toast.error('Question is required');
      return;
    }
    let data = {
      Name,
      Email,
      Message
    }
    if (Mobile !== '') {
      data.Mobile = Mobile;
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
     
      console.log('resData',resData)
     
  
      if (resData?.success) {
        toast.success('Question is successfully sent!');
        setName('')
        setEmail('')
        setMessage('')
        setMobile('')
        return {successMessage:resData};
      } else {
        toast.error(resData.error);
        return {errMessage:resData.error};
      }
    } catch (error) {
      toast.error("someting went wrong");
      console.log("error message ", error);
    }
};
  return (
    <main className="">
      <ToastContainer />
      <Navbar />
      {/* hero section */}
      <div className="">
        {/* bg-[url('/images/hero_banner8.webp')] */}
        

<section className="heroImage bg-center  bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
    <div className="px-2 mx-auto max-w-screen-2xl overflow-x-hidden text-center">
        <Slider {...herosettings}>
          <div>
        <h1 className="heroLabourtext mb-4  font-bold tracking-tight leading-none text-white ">YOUR COMPLIANCE </h1>
        <h1 className="heroLabourtext mb-12  font-bold tracking-tight leading-none text-white ">   OUR PRIORITY</h1>
          </div>

          <div>
        <h1 className="heroLabourtext mb-4  font-bold tracking-tight leading-none text-white ">YOUR COMPLIANCE  </h1>
        <h1 className="heroLabourtext mb-12  font-bold tracking-tight leading-none text-white "> COMPANION</h1>
          </div>

          <div>
        <h1 className="heroLabourtext mb-4  font-bold tracking-tight leading-none text-white ">ENSURING COMPLIANCE </h1>
        <h1 className="heroLabourtext mb-12  font-bold tracking-tight leading-none text-white "> EMPOWERING  WORKFORCE</h1>
          </div>
         </Slider>

        {/* <h1 className="heroLabourtext mb-4  font-bold tracking-tight leading-none text-white ">Your Compliance, </h1>
        <h1 className="heroLabourtext mb-12  font-bold tracking-tight leading-none text-white ">   Our Priority</h1> */}
        <p className="mb-12 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">IGCL INDIA has been diversified into multiple business domains hence words fall short to describe the enthusiasm and working profile of our corporation.</p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
           
            <Link href="/services" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
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

      {/* what we do */}
      <div className="py-8 mt-12 whatWeDoMain px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-2">
            <div className="mx-1 mt-24">
              <div>
                <img
                  className="h-36 md:h-96  w-full"
                  src="/images/imgp1.jpeg"
                  alt=""
                />
              </div>
              <div className="mt-3">
                <div className={`${styles.weDoBox2}`}>
                  <img className={`${styles.weDoBoxIcon}`} src="../images/customer-care.png" />
                  <h1 className={`${styles.weDoBoxHead}`}>436</h1>
                  <p className={`${styles.weDoBoxPara}`}>SATISFIED CLIENTS</p>
                </div>
              </div>
            </div>
            <div className="mx-1">
            <div className="mt-3">
                <div className={`${styles.weDoBox3}`}>
                  <img className={`${styles.weDoBoxIcon}`} src="../images/customer-care.png" />
                  <h1 className={`${styles.weDoBoxHead}`}>532</h1>
                  <p className={`${styles.weDoBoxPara}`}>PROJECTS COMPLETED</p>
                </div>
              </div>
              <div className="mt-3">
                <img
                  className="h-36 md:h-96  w-full"
                  src="/images/whatWeDo4.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div>
            <section className=" dark:bg-gray-900">
              <div className="py-8 whatWeDoRIght mx-auto max-w-screen-xl text-left lg:py-16 md:px-28">
                <h1 className="mb-4 text-4xl text-gray-900 font-extrabold tracking-tight leading-none  md:text-5xl lg:text-6xl dark:text-white">
                  We Provide the Best Facilities for Your Business
                </h1>
                <p className="mb-8 text-lg text-justify font-normal text-gray-900 lg:text-xl  dark:text-gray-400">
                  IGCL INDIA provides outstanding and unsurpassed service that,
                  together, delivers premium values to our customers. Since
                  then, IGCL INDIA has been diversified into multiple business
                  domains hence words fall short to describe the enthusiasm and
                  working profile of our corporation.
                </p>
                <p className="mb-8 mt-4 text-lg text-justify font-normal text-gray-900 lg:text-xl  dark:text-gray-400">
                  At IGCL INDIA, we believe in treating people the way they want
                  to be treated, with friendliness, calmness, and respect. Our
                  success is not only due to the quality of our work, It’s due
                  to our attitude, our approach, and the way we treat our
                  clients.
                </p>
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
      <div className="min-w-screen  flex items-center justify-center py-5">
        <div className="w-full border-t border-gray-200 px-5 py-16 md:py-16 ">
          <div className="w-full mx-auto">
            <div className="text-center max-w-xl mx-auto">
              <h1 className="text-4xl md:text-7xl font-bold mb-5 text-gray-800">
                SERVICES
              </h1>
              <h3 className="text-xl mb-5 font-light text-gray-600">
                Offering a range of services tailored to meet your needs.
              </h3>
              <div className="text-center mb-10">
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
              </div>
            </div>
            <div className={styles.BoxContainer}>
            <Link href='/services/1' className={styles.card}>
                    <img
                        src="/images/image1.jpg"
                        className={styles.image}
                    />
                    <div className={styles.overlay}>
                        <div className={styles.text}>
                            <h3 className={styles.textNum}>01-</h3>
                            <h3 className={styles.textDesp}>Labour Law Compliances</h3>
                            <p className={styles.textSecret}>Navigating Legal Requirements for Effective Labour Law Compliance</p>
                        </div>
                    </div>
                </Link>
                <Link href='/services/1' className={styles.card}>
                    <img
                        src="/images/image2.jpg"
                        className={styles.image}
                    />
                    <div className={styles.overlay}>
                        <div className={styles.text}>
                            <h3 className={styles.textNum}>02-</h3>
                            <h3 className={styles.textDesp}>Environment Social and Governance</h3>
                            <p className={styles.textSecret}>Driving Sustainable Development Through Comprehensive ESG Strategies</p>
                        </div>
                    </div>
                </Link>
                <Link href='/services/1' className={styles.card}>
                    <img
                        src="/images/image3.jpg"
                        className={styles.image}
                    />
                    <div className={styles.overlay}>
                        <div className={styles.text}>
                            <div><h3 className={styles.textNum}>03-</h3></div>
                            <div><h3 className={styles.textDesp}>Training & Consultancy</h3></div>
                            <p className={styles.textSecret}>Enhancing Organizational Skills Through Tailored Training and Expert Consultancy</p>
                        </div>
                    </div>
                </Link>
                <Link href='/services/1' className={styles.card}>
                    <img
                        src="/images/image4.jpg"
                        className={styles.image}
                    />
                    <div className={styles.overlay}>
                        <div className={styles.text}>
                            <h3 className={styles.textNum}>04-</h3>
                            <h3 className={styles.textDesp}>Staffing Solution</h3>
                            <p className={styles.textSecret}>Providing Comprehensive Staffing Solutions for Optimal Workforce Management</p>
                        </div>
                    </div>
                </Link>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="min-w-screen  flex items-center justify-center py-5">
        <div className="w-full border-t border-b border-gray-200 px-5 py-16 md:py-16 ">
          <div className="w-full mx-auto">
            <div className="text-center max-w-xl mx-auto">
              <h1 className="text-4xl md:text-7xl font-bold mb-5 text-gray-800">
                FAQ's
              </h1>
              <h3 className="text-xl mb-5 font-light text-gray-600">
                Find answers to commonly asked questions.
              </h3>
              <div className="text-center mb-10">
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
              </div>
            </div>
            <div className="py-5 px-24 faqs mx-auto flex flex-col md:flex-row gap-12">
              <div className="flex flex-col text-left basis-1/2">
                <p className="inline-block font-semibold text-gray-800 mb-4">
                  QUESTIONS & ANSWERS
                </p>
                <p className="sm:text-4xl text-4xl md:text-7xl font-bold text-gray-800">
                  Have any questions?
                </p>
                <p className="sm:text-4xl text-4xl md:text-7xl font-bold text-gray-800">
                  Find answers here
                </p>
                <p className="inline-block text-gray-800 mt-4 text-justify text-primary mb-4 text-lg font-normal text-gray-900 lg:text-xl  dark:text-gray-400">
                  Whether you're curious about our services, need assistance, or
                  have a specific question, our FAQ section is here to help.
                  Browse through our most frequently asked questions and find
                  the information you need quickly and easily.
                </p>
              </div>
              <ul className="basis-1/2">
                <Accordion
                  collapseAll
                  className="border-none border-b border-gray-800"
                >
                  <Accordion.Panel className=" border border-b border-gray-200">
                    <section className=" border-b border-gray-200">
                      <Accordion.Title
                        className="border-none  text-lg font-normal text-gray-900 lg:text-xl  dark:text-gray-400 bg-transparent hover:bg-transparent
                    focus:bg-transparent   focus:ring-grey-0 focus:ring-0"
                      >
                        What is labour law compliance? 
                      </Accordion.Title>
                      <Accordion.Content
                        className="border-none text-lg  font-normal text-gray-900 lg:text-xl dark:text-gray-400 hover:bg-transparent
                    focus:bg-transparent   focus:ring-grey-0 focus:ring-0"
                      >
                        <p className=" mb-2 text-gray-800 dark:text-gray-800 ">
                        Labour law compliance involves adhering to all applicable labour laws and regulations to protect employees' rights and welfare.
                        </p>
                      </Accordion.Content>
                    </section>
                  </Accordion.Panel>
                  <Accordion.Panel className=" border border-b border-gray-200">
                    <section className=" border-b border-gray-200">
                      <Accordion.Title
                        className="border-none  text-lg font-normal text-gray-900 lg:text-xl  dark:text-gray-400 bg-transparent hover:bg-transparent
                    focus:bg-transparent   focus:ring-grey-0 focus:ring-0"
                      >
                      Why is labour law compliance important for businesses? 
                      </Accordion.Title>
                      <Accordion.Content
                        className="border-none text-lg font-normal text-gray-900 lg:text-xl  dark:text-gray-400 hover:bg-transparent
                    focus:bg-transparent   focus:ring-grey-0 focus:ring-0"
                      >
                        <p className=" mb-2 text-gray-800 dark:text-gray-800 ">
                        Compliance helps businesses avoid legal penalties, improve employee satisfaction, and maintain a positive reputation. It ensures a safe and fair working environment.
                        </p>
                      </Accordion.Content>
                    </section>
                  </Accordion.Panel>
                  <Accordion.Panel className=" border border-b border-gray-200">
                    <section className=" border-b border-gray-200">
                      <Accordion.Title
                        className="border-none text-lg font-normal text-gray-900 lg:text-xl  dark:text-gray-400 bg-transparent hover:bg-transparent
                    focus:bg-transparent   focus:ring-grey-0 focus:ring-0"
                      >
                        How can businesses ensure labour law compliance? 
                      </Accordion.Title>
                      <Accordion.Content
                        className="border-none text-lg font-normal text-gray-900 lg:text-xl  dark:text-gray-400 hover:bg-transparent
                    focus:bg-transparent   focus:ring-grey-0 focus:ring-0"
                      >
                        <p className=" mb-2 text-lg font-normal text-gray-900 lg:text-xl  dark:text-gray-400 dark:text-gray-800 ">
                        Businesses can ensure compliance by staying updated with legal changes, maintaining proper records, conducting regular audits, and seeking professional advice from compliance experts.
                        </p>
                      </Accordion.Content>
                    </section>
                  </Accordion.Panel>
                  <Accordion.Panel className=" border border-b border-gray-200">
                    <section className=" border-b border-gray-200">
                      <Accordion.Title
                        className="border-none text-lg font-normal text-gray-900 lg:text-xl  dark:text-gray-400 bg-transparent hover:bg-transparent
                    focus:bg-transparent   focus:ring-grey-0 focus:ring-0"
                      >
                      What are the various categories of labour laws in India? 
                      </Accordion.Title>
                      <Accordion.Content
                        className="border-none text-lg font-normal text-gray-900 lg:text-xl  dark:text-gray-400 hover:bg-transparent
                    focus:bg-transparent   focus:ring-grey-0 focus:ring-0"
                      >
                        <p className=" mb-2 text-gray-800 dark:text-gray-800 ">
                        Labour laws in India can be categorised as follows: (i) industrial relations, (ii) industrial safety and health, (iii) child and women labour, (iv) social security, (v) wages, and (vi) labour welfare. 
                        </p>
                      </Accordion.Content>
                    </section>
                  </Accordion.Panel>
                  <Accordion.Panel className=" border border-b border-gray-200">
                    <section className=" border-b border-gray-200">
                      <Accordion.Title
                        className="border-none  text-lg font-normal text-gray-900 lg:text-xl  dark:text-gray-400 bg-transparent hover:bg-transparent
                    focus:bg-transparent   focus:ring-grey-0 focus:ring-0"
                      >
                    	What are the important labour and employment laws typically applicable to businesses in India?
                      </Accordion.Title>
                      <Accordion.Content
                        className="border-none text-lg font-normal text-gray-900 lg:text-xl  dark:text-gray-400 hover:bg-transparent
                    focus:bg-transparent   focus:ring-grey-0 focus:ring-0"
                      >
                        <p className=" mb-2 text-gray-800 dark:text-gray-800 ">
                        Some of the important labour laws which should be considered while setting up and operating a business in India are as follows:
(i) Factories Act, 1948
(ii) Industrial Dispute Act, 1947
(iii) Shops and Establishment Act as framed by respective State Governments
(iv) Minimum Wages Act, 1948
(v) Payment of Wages Act, 1936
(vi) Payment of Bonus Act, 1965
(vii) Contract Labour (Regulation and Prohibition) Act, 1970
(viii) Employees Provident Fund and Miscellaneous Provisions Act, 1952
(ix) Employees’ State Insurance Act, 1948
(x) Payment of Gratuity Act, 1965
(xi) Equal Remuneration Act, 1976
(xii) Maternity Benefit Act, 1961
(xiii) Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013
The Central Government and respective State Governments have framed rules under the above-mentioned laws.

                        </p>
                      </Accordion.Content>
                    </section>
                  </Accordion.Panel>
                </Accordion>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      {/* <div className="min-w-screen  flex items-center justify-center py-5">
        <div className="w-full border-b border-gray-200 px-5 py-5 md:py-5 ">
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
            <div className="-mx-3 ">
              <div className="py-5 px-24 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="w-full mx-auto bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
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
                    <p className="text-sm leading-tight text-justify">
                      <span className="text-lg leading-none  italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      Company has been a game-changer for our organization. Their deep understanding of labor laws and exceptional legal advice have helped us navigate complex employment issues with ease. Their team is professional, responsive, and always goes above and beyond to ensure our needs are met. Highly recommended!
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
                <div className="w-full mx-auto bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
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
                    <p className="text-sm leading-tight text-justify">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      We turned to ICGL Labour Law Company during a challenging time in our business. Their expertise and strategic guidance were invaluable in resolving our disputes efficiently and favorably. The attorneys at ICGL are not only knowledgeable but also approachable, making the entire process smoother. We are incredibly grateful for their support.
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
                <div className="w-full mx-auto bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src="https://i.pravatar.cc/100?img=2" alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm uppercase text-gray-600">
                        Ramesh
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight text-justify">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      We turned to ICGL Labour Law Company during a challenging time in our business. Their expertise and strategic guidance were invaluable in resolving our disputes efficiently and favorably. The attorneys at ICGL are not only knowledgeable but also approachable, making the entire process smoother. We are incredibly grateful for their support.
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
                <div className="w-full mx-auto bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src="https://i.pravatar.cc/100?img=2" alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm uppercase text-gray-600">
                        Suresh
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight text-justify">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      We turned to ICGL Labour Law Company during a challenging time in our business. Their expertise and strategic guidance were invaluable in resolving our disputes efficiently and favorably. The attorneys at ICGL are not only knowledgeable but also approachable, making the entire process smoother. We are incredibly grateful for their support.
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
                <div className="w-full mx-auto bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
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
                    <p className="text-sm leading-tight text-justify">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      Working with this company has been an outstanding experience. Their legal team is exceptionally skilled and well-versed in all aspects of labor law. They have consistently provided us with accurate and practical legal solutions. Their dedication to their clients is evident in the quality of their work. We highly recommend their services.
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>

                <div className="w-full mx-auto bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
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
                    <p className="text-sm leading-tight text-justify">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                     This Company has proven to be an invaluable partner for our business. Their deep knowledge of labor regulations and proactive approach to legal challenges have helped us maintain compliance and avoid potential issues. Their commitment to excellence and client satisfaction is truly impressive.
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>

                <div className="w-full mx-auto bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
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
                    <p className="text-sm leading-tight text-justify">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      They offers unparalleled legal expertise and exceptional client service. Their attorneys are not only highly skilled but also genuinely care about the well-being of their clients. They have helped us successfully navigate numerous labor-related matters, and we couldn't be more satisfied with their services.
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
                <div className="w-full mx-auto bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
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
                    <p className="text-sm leading-tight text-justify">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      This Company has been instrumental in guiding us through complex employment regulations and labor disputes. Their prompt and insightful advice has saved us time and resources. The team’s professionalism and commitment to our success make them an invaluable partner. We trust ICGL completely with our labor law needs.
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
      </div> */}

      <Testimonials />


      {/* Clients */}
      <div className="min-w-screen  flex items-center justify-center py-5">
        <div className="w-full border-b border-gray-200 px-5 py-5 md:py-10 text-gray-800">
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
              <div className="px-3 pb-10">
                <Slider {...clientssettings}>
                  <div className="image-container">
                    <img
                      src="/images/clientC1.png"
                      alt="Hover Image"
                      className="cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src="/images/clientC2.png"
                      alt="Hover Image"
                      className="cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src="/images/clientC3.jpg"
                      alt="Hover Image"
                      className="cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src="/images/clientC4.jpg"
                      alt="Hover Image"
                      className="cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src="/images/clientC5.jpg"
                      alt="Hover Image"
                      className="cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src="/images/clientC6.png"
                      alt="Hover Image"
                      className="cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src="/images/clientC7.png"
                      alt="Hover Image"
                      className="cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src="/images/clientC8.png"
                      alt="Hover Image"
                      className=" cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src="/images/clientC9.jpg"
                      alt="Hover Image"
                      className=" cursor-pointer"
                    />
                  </div>
                  {/* <div className="image-container">
    <img src="/images/clientBW10.png" alt="Initial Image" className="initial-image cursor-pointer" />
    <img src="/images/clientC10.png" alt="Hover Image" className="hover-image cursor-pointer" />
  </div> */}
                  <div className="image-container">
                    <img
                      src="/images/clientC11.png"
                      alt="Hover Image"
                      className=" cursor-pointer"
                    />
                  </div>
                  {/* <div className="image-container">
    <img src="/images/clientBW12.png" alt="Initial Image" className="initial-image cursor-pointer" />
    <img src="/images/clientC12.jpg" alt="Hover Image" className="hover-image cursor-pointer" />
  </div> */}
                  <div className="image-container">
                    <img
                      src="/images/clientC13.png"
                      alt="Hover Image"
                      className=" cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src="/images/clientC1.png"
                      alt="Hover Image"
                      className=" cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src="/images/clientC2.png"
                      alt="Hover Image"
                      className=" cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src="/images/clientC3.jpg"
                      alt="Hover Image"
                      className=" cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src="/images/clientC4.jpg"
                      alt="Hover Image"
                      className="cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src="/images/clientC14.jpg"
                      alt="Hover Image"
                      className="cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src="/images/clientC15.png"
                      alt="Hover Image"
                      className=" cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src="/images/clientC16.png"
                      alt="Hover Image"
                      className=" cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src="/images/clientC17.png"
                      alt="Hover Image"
                      className="cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src="/images/clientC18.jpg"
                      alt="Hover Image"
                      className=" cursor-pointer"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src="/images/clientC19.png"
                      alt="Hover Image"
                      className="cursor-pointer"
                    />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Us */}
     
            <section className={`${styles.forthSection}`}>
                <div className={`${styles.forthSectionInner}`}>
                    <div className={`${styles.forthBoxImg}`}>
                        <img 
                            className=" mt-5"
                            src="images/speech-bubble.png"
                            width="130px"
                            height="130px"
                        />
                    </div>
                    <div className={`${styles.forthBoxMain}`}>
                        <div className={`${styles.forthBoxText}`}>
                            <h1>We always love </h1>
                            <h1>to hear from you</h1>
                        </div>
                        <form className={`${styles.forthBoxForm}`}>
                            <div className={`${styles.forthBoxInput}`}>
                                <input
                                    placeholder="Your First Name"
                                    value={Name}
                                    onChange={handleName}
                                    className="border-b bg-transparent text-xl focus:outline-0 focus:border-white hover:border-white mr-2 placeholder-gray-300 hover:placeholder-white py-3" />
                                <input
                                    placeholder="Your Email Address"
                                    value={Email}
                                    onChange={handleEmail}
                                    className={`${styles.forthBoxInput2} py-3 border-b bg-transparent text-xl focus:outline-0 mr-2 focus:border-white hover:border-white placeholder-gray-300 hover:placeholder-white `} />
                                <input
                                    placeholder="Your Mobile Number"
                                    type="number"
                                    value={Mobile}
                                    onChange={handleMobile}
                                    className={`${styles.forthBoxInput2} py-3 border-0 border-b border-gray-300  appearance-none bg-transparent text-xl focus:outline-0 focus:border-white hover:border-white placeholder-gray-300 hover:placeholder-white `} />
                            </div>
                            <textarea
                              rows="4"
                                placeholder="Ask your question"
                                value={Message}
                                onChange={handleMessage}
                                className="block py-2.5 px-0 w-full resize-none text-xl text-white bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-0 focus:border-white hover:border-white placeholder-gray-300 hover:placeholder-white peer"
                            />   
                        </form>
                    </div>
                    <div className={`${styles.forthBoxButton}`}>
                        <button onClick={handleSubmit} className={`${styles.forthButton}`}>Submit</button>
                    </div>

                </div>
            </section>
          


      <Footer />
    </main>
  );
}
