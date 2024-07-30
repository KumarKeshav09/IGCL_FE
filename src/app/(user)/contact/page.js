"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/common/navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../../components/common/footer";
import { initFlowbite } from "flowbite";
import { useCallback, useEffect, useState } from "react";
import styles from "../../services.module.css";
import { API_BASE_URL } from "../../../../utils/constants";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Message, setMessage] = useState('');
    const handleName = useCallback((value) => {
        console.log('value',value.target.value)
        setName(() => value.target.value);
      }, []);
      const handleEmail = useCallback((value) => {
        console.log('value',value.target.value)
        setEmail(() => value.target.value);
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
             <div className="-mt-44">
          <section className="bg-top h-62 bg-no-repeat bg-[url('/images/hero_banner5.jpg')] bg-top bg-gray-100 bg-blend-multiply">
            <div className="heroContent mx-auto max-w-screen text-center py-44 lg:py-44">
              
            </div>
          </section>
          </div>

         
           {/* overview */}
      <div>
        <section class="bg-white border-b dark:bg-gray-900">
          <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="grid grid-cols-7 md:grid-cols-7 gap-1">
              <div className="col-span-1">
                <p className="hidden md:block text-blue-900 font-bold">Contact Us</p>
              </div>
              <div class="col-span-6 max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 class="mb-4 text-2xl tracking-tight font-semibold text-gray-900 dark:text-white">
                For inquiries or requests that require a more personal response, we will make every attempt to respond in a timely manner. Or, if you prefer to contact us by phone or please find a office near you.
                </h2>
                {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <p class="mb-4 font-medium">
                    Track work across the enterprise through an open,
                    collaborative platform. Link issues across Jira and ingest
                    data from other software development tools, so your IT
                    support and operations teams have richer contextual
                    information to rapidly respond to requests, incidents, and
                    changes.
                  </p>
                  <p class="mb-4 font-medium">
                    Deliver great service experiences fast - without the
                    complexity of traditional ITSM solutions.Accelerate critical
                    development work, eliminate toil, and deploy changes with
                    ease.
                  </p>
                </div> */}
              </div>
            </div>
          </div>
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-12 lg:px-6">
            <div class=" grid grid-cols-1 md:grid-cols-3 md:border-indigo-600 border-white px-10 py-6">
                
                <div class="mb-8 mx-8 flex text-black contactDetail">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>

               <div className="ml-4">

                    <div className="flex justify-center">


                    <h6 class="text-gray-700  ml-3 text-md font-medium leading-5 pb-3 md:text-start text-center">Address</h6>
                    </div>
                    <hr />
                    <h3 class="mt-4 text-xl font-semibold leading-8 md:text-start text-center">Taman Tower Jaipur, Rajasthan</h3>
               </div>
                </div>
                <div class="mb-8 mx-8 flex text-black contactDetail">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
               </svg>
               <div className="ml-4">

                    <div className="flex justify-center">


                    <h6 class="text-gray-700 ml-3 text-md font-medium leading-5 pb-3 md:text-start text-center">Email Address</h6>
                    </div>
                    <hr />
                    <h3 class="mt-4 text-xl font-semibold leading-8 md:text-start text-center">pagedone@gmail.com</h3>
               </div>
                </div>
                <div class="mb-8 mx-8 flex text-black contactDetail">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
</svg>

               <div className="ml-4">

                    <div className="flex justify-center">


                    <h6 class="text-gray-700 ml-3 text-md font-medium leading-5 pb-3 md:text-start text-center">Phone Number</h6>
                    </div>
                    <hr />
                    <h3 class="mt-4 text-xl font-semibold leading-8 md:text-start text-center">+918723565354</h3>
               </div>
                </div>
               
            </div>
        </div>
        </section>
      </div>


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
                                    className={`${styles.forthBoxInput2} py-3 border-b bg-transparent text-xl focus:outline-0 focus:border-white hover:border-white placeholder-gray-300 hover:placeholder-white `} />
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
        )
}