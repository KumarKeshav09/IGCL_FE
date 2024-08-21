"use client";
import Image from "next/image";
import Navbar from "../../../components/common/navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../../../components/common/footer";
// import { initFlowbite } from "flowbite";
import { useEffect } from "react";
import styles from "./servicedetails.module.css";
import Compliances2 from "@/app/components/common/Compliances2/serviceSecond";

export default function ServicesDetail2({ params }) {
  return (
    <main className="">
      <Navbar />
      {/* <div className="-mt-44">
        <section className="bg-top h-62 bg-no-repeat bg-[url('/images/hero_banner5.jpg')] bg-top bg-gray-100 bg-blend-multiply">
          <div className="heroContent mx-auto max-w-screen text-center py-44 lg:py-44"></div>
        </section>
      </div> */}

      <div className="text-gray-500 text-center pt-4 sm:text-lg dark:text-gray-400">
        <h2 className=" text-4xl tracking-tight md:text-7xl font-bold text-gray-800">
          Establishment Compliances
        </h2>
        <div className="text-center">
          <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
          <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
          <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
          <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
          <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
        </div>
      </div>

      <div id="default-tab-content">
        <div
          className=" rounded-lg bg-gray-50 dark:bg-gray-800"
          id="dashboard"
          role="tabpanel"
          aria-labelledby="dashboard-tab"
        >
          <Compliances2 />
        </div>
      </div>
      <Footer />
    </main>
  );
}
