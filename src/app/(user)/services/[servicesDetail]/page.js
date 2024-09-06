"use client";
import { useEffect, useState } from "react";
import Navbar from "../../../components/common/navbar";
import Footer from "../../../components/common/footer";
import styles from "./servicedetails.module.css";
import Compliances1 from "@/app/components/common/Compliances1/servicesfirst";
import Compliances2 from "@/app/components/common/Compliances2/serviceSecond";
import Compliances3 from "@/app/components/common/Compliances3/serviceThird";
import Compliances4 from "@/app/components/common/Compliances4/serviceThird";

export default function ServicesDetail() {
  const [activeTab, setActiveTab] = useState("profile");

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (["profile", "dashboard", "settings", "startup"].includes(hash)) {
      setActiveTab(hash);
    }
  }, []);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    window.history.pushState(null, "", `#${tabId}`);
  };

  return (
    <main className="">
      <Navbar />

      <div className={`mb-4 border-b border-gray-200 dark:border-gray-700`}>
        <ul
          className={`${styles.navBar} lg:pl-16 flex flex-wrap -mb-px text-base font-medium text-center`}
          id="default-tab"
          role="tablist"
        >
          <li className="me-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 text-black rounded-t-lg ${activeTab === "profile" ? "text-indigo-500 border-indigo-500" : "hover:text-indigo-500"}`}
              onClick={() => handleTabChange("profile")}
              role="tab"
            >
              Statutory Compliances
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 text-black  rounded-t-lg ${activeTab === "dashboard" ? "text-indigo-500 border-indigo-500" : "hover:text-indigo-500"}`}
              onClick={() => handleTabChange("dashboard")}
              role="tab"
            >
              Establishment Compliances
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 text-black  rounded-t-lg ${activeTab === "settings" ? "text-indigo-500 border-indigo-500" : "hover:text-indigo-500"}`}
              onClick={() => handleTabChange("settings")}
              role="tab"
            >
              Labor Law Audit & Assessment
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 text-black  rounded-t-lg ${activeTab === "startup" ? "text-indigo-500 border-indigo-500" : "hover:text-indigo-500"}`}
              onClick={() => handleTabChange("startup")}
              role="tab"
            >
              Solutions for Startups
            </button>
          </li>
        </ul>
      </div>

      <div id="default-tab-content">
        <div
          className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${activeTab === "profile" ? "block" : "hidden"}`}
          id="profile"
          role="tabpanel"
        >
          <Compliances1 />
        </div>
        <div
          className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${activeTab === "dashboard" ? "block" : "hidden"}`}
          id="dashboard"
          role="tabpanel"
        >
          <Compliances2 />
        </div>
        <div
          className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${activeTab === "settings" ? "block" : "hidden"}`}
          id="settings"
          role="tabpanel"
        >
          <Compliances3 />
        </div>
        <div
          className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${activeTab === "startup" ? "block" : "hidden"}`}
          id="startup"
          role="tabpanel"
        >
          <Compliances4 />
        </div>
      </div>

      <Footer />
    </main>
  );
}
