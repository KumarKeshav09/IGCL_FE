"use client";
import Image from "next/image";
import Navbar from "../../../components/common/navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../../../components/common/footer";
// import { initFlowbite } from "flowbite";
import { useEffect } from "react";
import styles from "./servicedetails.module.css";
import Compliances1 from "@/app/components/common/Compliances1/servicesfirst";
import Compliances2 from "@/app/components/common/Compliances2/serviceSecond";
import Compliances3 from "@/app/components/common/Compliances3/serviceThird";

export default function ServicesDetail() {
  return (
    <main className="">
      <Navbar />
      <div className="-mt-44">
        <section className="bg-top h-62 bg-no-repeat bg-[url('/images/hero_banner5.jpg')] bg-top bg-gray-100 bg-blend-multiply">
          <div className="heroContent mx-auto max-w-screen text-center py-44 lg:py-44"></div>
        </section>
      </div>

      <div className={`mb-4 border-b border-gray-200 dark:border-gray-700`}>
        
        <ul
          className={`${styles.navBar} flex flex-wrap -mb-px text-sm font-medium text-center`}
          id="default-tab"
          data-tabs-toggle="#default-tab-content"
          role="tablist"
        >
          <li className="me-2" role="presentation">
            <button
              className="inline-block p-4 border-b-2 rounded-t-lg"
              id="profile-tab"
              data-tabs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Statutory Compliances
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              id="dashboard-tab"
              data-tabs-target="#dashboard"
              type="button"
              role="tab"
              aria-controls="dashboard"
              aria-selected="false"
            >
              Establishment Compliances
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              id="settings-tab"
              data-tabs-target="#settings"
              type="button"
              role="tab"
              aria-controls="settings"
              aria-selected="false"
            >
              Labour Law Audit & Assessment
            </button>
          </li>
        </ul>
      </div>
      <div id="default-tab-content">
        <div
          className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <Compliances1 />
        </div>
        <div
          className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="dashboard"
          role="tabpanel"
          aria-labelledby="dashboard-tab"
        >
          <Compliances2 />
        </div>
        <div
          className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="settings"
          role="tabpanel"
          aria-labelledby="settings-tab"
        >
         <Compliances3 />
        </div>
      </div>
      <Footer />
    </main>
  );
}
