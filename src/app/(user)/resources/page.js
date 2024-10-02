"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "../services/[servicesDetail]/servicedetails.module.css";
import Abstarcts from "./abstracts/abstarcts";
import Judgements from "./judgements/judgements";
import Navbar from "@/app/components/common/navbar";
import Footer from "@/app/components/common/footer";
import Notifications from "./notifications/notifications";
import Labor from "./labor/labor";

export default function Resources() {
  const [activeTab, setActiveTab] = useState("profile");
  const tabListRef = useRef(null);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (["profile", "dashboard", "settings", "code"].includes(hash)) {
      setActiveTab(hash);
    }

    const handleHashChange = () => {
      const newHash = window.location.hash.slice(1);
      if (["profile", "dashboard", "settings", "code"].includes(newHash)) {
        setActiveTab(newHash);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    window.history.pushState(null, "", `#${tabId}`);
  };

  const scrollLeft = () => {
    if (tabListRef.current) {
      tabListRef.current.scrollBy({
        left: -200,
        behavior: 'smooth', // Smooth scrolling
      });
    }
  };

  const scrollRight = () => {
    if (tabListRef.current) {
      tabListRef.current.scrollBy({
        left: 200,
        behavior: 'smooth', // Smooth scrolling
      });
    }
  };

  return (
    <main>
      <Navbar />
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center md:ml-24">
          <button onClick={scrollLeft} className={`mx-2 text-black ${styles.scrollButton}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left-circle-fill text-indigo-500" viewBox="0 0 16 16">
              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
            </svg>
          </button>
          <div className={`overflow-x-auto ${styles.scrollContainer}`} ref={tabListRef}>
            <ul className={`${styles.navBar} flex`} role="tablist">
              {["profile", "dashboard", "settings", "code"].map((tab) => (
                <li className="me-2" role="presentation" key={tab}>
                  <Link href={`/resources#${tab}`} passHref>
                    <button
                      onClick={() => handleTabChange(tab)}
                      className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === tab ? "text-indigo-500" : "hover:text-indigo-500 text-black"}`}
                      id={`${tab}-tab`}
                      role="tab"
                      aria-controls={tab}
                      aria-selected={activeTab === tab}
                    >
                      {tab === "profile" && "Abstarct"}
                      {tab === "dashboard" && "Judgement"}
                      {tab === "settings" && "Notification"}
                      {tab === "code" && "Labor Code"}
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <button onClick={scrollRight} className={`mx-2  text-black ${styles.scrollButton}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right-circle-fill text-indigo-500" viewBox="0 0 16 16">
              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
            </svg>
          </button>
        </div>
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
