"use client";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../services/[servicesDetail]/servicedetails.module.css";
import Abstarcts from "./abstracts/abstarcts";
import Judgements from "./judgements/judgements";
import Navbar from "@/app/components/common/navbar";
import Footer from "@/app/components/common/footer";
import Notifications from "./notifications/notifications";

export default function Resources() {
  return (
    <main className="">
      <Navbar />
      {/* <div className="-mt-44">
        <section className="bg-top h-62 bg-no-repeat bg-[url('/images/hero_banner5.jpg')] bg-top bg-gray-100 bg-blend-multiply">
          <div className="heroContent mx-auto max-w-screen text-center py-44 lg:py-44"></div>
        </section>
      </div> */}

      <div className={`mb-4 border-b border-gray-200 dark:border-gray-700`}>

        <ul
          className={`${styles.navBar} md:pl-24 flex flex-wrap -mb-px text-sm font-medium text-center`}
          id="default-tab"
          data-tabs-toggle="#default-tab-content"
          role="tablist"
        >
          <li className="me-2" role="presentation">
            <button
              className="inline-block p-4 border-b-2 rounded-t-lg hover:text-indigo-500"
              id="profile-tab"
              data-tabs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Abstarct
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className="inline-block p-4 border-b-2 rounded-t-lg hover:text-indigo-500 hover:border-gray-300 dark:hover:text-gray-300"
              id="dashboard-tab"
              data-tabs-target="#dashboard"
              type="button"
              role="tab"
              aria-controls="dashboard"
              aria-selected="false"
            >
              Judgement
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className="inline-block p-4 border-b-2 rounded-t-lg hover:text-indigo-500 hover:border-gray-300 dark:hover:text-gray-300"
              id="settings-tab"
              data-tabs-target="#settings"
              type="button"
              role="tab"
              aria-controls="settings"
              aria-selected="false"
            >
              Notification
            </button>
          </li>
        </ul>
      </div>
      <div id="default-tab-content">
        <div
          className="hidden p-4 rounded-lg  dark:bg-gray-800"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
            <Abstarcts />
        </div>
        <div
          className="hidden p-4 rounded-lg dark:bg-gray-800"
          id="dashboard"
          role="tabpanel"
          aria-labelledby="dashboard-tab"
        >
            <Judgements />
        </div>
        <div
          className="hidden p-4 rounded-lg dark:bg-gray-800"
          id="settings"
          role="tabpanel"
          aria-labelledby="settings-tab"
        >
            <Notifications />
        </div>
      </div>
      <Footer />
    </main>
  );
}
