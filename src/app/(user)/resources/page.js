"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../services/[servicesDetail]/servicedetails.module.css";
import Abstarcts from "./abstracts/abstarcts";
import Judgements from "./judgements/judgements";
import Navbar from "@/app/components/common/navbar";
import Footer from "@/app/components/common/footer";
import Notifications from "./notifications/notifications";
import Labor from "./labor/labor";

export default function Resources() {
  const [activeTab, setActiveTab] = useState("profile");

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (["profile", "dashboard", "settings","code"].includes(hash)) {
      setActiveTab(hash);
    }
    
    const handleHashChange = () => {
      const newHash = window.location.hash.slice(1);
      if (["profile", "dashboard", "settings"].includes(newHash)) {
        setActiveTab(newHash);
      }
    };

    // Add event listener for hash change
    window.addEventListener("hashchange", handleHashChange);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    window.history.pushState(null, "", `#${tabId}`);
  };

  return (
    <main>
      <Navbar />
      <div className={`mb-4 border-b border-gray-200 dark:border-gray-700`}>
        <ul
          className={`${styles.navBar} md:pl-24 flex flex-wrap -mb-px text-sm font-medium text-center`}
          id="default-tab"
          role="tablist"
        >
          <li className="me-2" role="presentation">
            <Link href="/resources#profile" passHref>
              <button
                onClick={() => handleTabChange("profile")}
                className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === "profile" ? "text-indigo-500" : "hover:text-indigo-500 text-black"}`}
                id="profile-tab"
                role="tab"
                aria-controls="profile"
                aria-selected={activeTab === "profile"}
              >
                Abstarct
              </button>
            </Link>
          </li>
          <li className="me-2" role="presentation">
            <Link href="/resources#dashboard" passHref>
              <button
                onClick={() => handleTabChange("dashboard")}
                className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === "dashboard" ? "text-indigo-500" : "hover:text-indigo-500 text-black"}`}
                id="dashboard-tab"
                role="tab"
                aria-controls="dashboard"
                aria-selected={activeTab === "dashboard"}
              >
                Judgement
              </button>
            </Link>
          </li>
          <li className="me-2" role="presentation">
            <Link href="/resources#settings" passHref>
              <button
                onClick={() => handleTabChange("settings")}
                className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === "settings" ? "text-indigo-500" : "hover:text-indigo-500 text-black"}`}
                id="settings-tab"
                role="tab"
                aria-controls="settings"
                aria-selected={activeTab === "settings"}
              >
                Notification
              </button>
            </Link>
          </li>
          <li className="me-2" role="presentation">
            <Link href="/resources#code" passHref>
              <button
                onClick={() => handleTabChange("code")}
                className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === "code" ? "text-indigo-500" : "hover:text-indigo-500 text-black"}`}
                id="code-tab"
                role="tab"
                aria-controls="code"
                aria-selected={activeTab === "code"}
              >
                Labor Code
              </button>
            </Link>
          </li>
        </ul>
      </div>
      <div id="default-tab-content">
        <div
          className={`p-4 rounded-lg dark:bg-gray-800 ${activeTab !== "profile" ? "hidden" : ""}`}
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <Abstarcts />
        </div>
        <div
          className={`p-4 rounded-lg dark:bg-gray-800 ${activeTab !== "dashboard" ? "hidden" : ""}`}
          id="dashboard"
          role="tabpanel"
          aria-labelledby="dashboard-tab"
        >
          <Judgements />
        </div>
        <div
          className={`p-4 rounded-lg dark:bg-gray-800 ${activeTab !== "settings" ? "hidden" : ""}`}
          id="settings"
          role="tabpanel"
          aria-labelledby="settings-tab"
        >
          <Notifications />
        </div>
        <div
          className={`p-4 rounded-lg dark:bg-gray-800 ${activeTab !== "code" ? "hidden" : ""}`}
          id="code"
          role="tabpanel"
          aria-labelledby="code-tab"
        >
          <Labor />
        </div>
      </div>
      <Footer />
    </main>
  );
}
