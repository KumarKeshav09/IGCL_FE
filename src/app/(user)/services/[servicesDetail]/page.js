"use client";
import { useEffect, useRef, useState } from "react";
import Navbar from "../../../components/common/navbar";
import Footer from "../../../components/common/footer";
import styles from "./servicedetails.module.css";
import Compliances1 from "@/app/components/common/Compliances1/servicesfirst";
import Compliances2 from "@/app/components/common/Compliances2/serviceSecond";
import Compliances3 from "@/app/components/common/Compliances3/serviceThird";
import Compliances4 from "@/app/components/common/Compliances4/serviceThird";

export default function ServicesDetail() {
  const [activeTab, setActiveTab] = useState("profile");
  const tabListRef = useRef(null);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (["profile", "dashboard", "settings", "startup"].includes(hash)) {
      setActiveTab(hash);
    }

    console.log("Scroll width:", tabListRef.current.scrollWidth);
    console.log("Client width:", tabListRef.current.clientWidth);
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
              {["profile", "dashboard", "settings", "startup"].map((tab) => (
                <li key={tab}>
                  <button
                    className={`inline-block p-4 border-b-2 text-black rounded-t-lg ${activeTab === tab ? "text-indigo-500 border-indigo-500" : "hover:text-indigo-500"}`}
                    onClick={() => handleTabChange(tab)}
                    role="tab"
                  >
                    {tab === "profile" && "Statutory Compliances"}
                    {tab === "dashboard" && "Establishment Compliances"}
                    {tab === "settings" && "Labor Law Audit & Assessment"}
                    {tab === "startup" && "Solutions for Startups"}
                  </button>
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
        <div className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${activeTab === "profile" ? "block" : "hidden"}`} role="tabpanel">
          <Compliances1 />
        </div>
        <div className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${activeTab === "dashboard" ? "block" : "hidden"}`} role="tabpanel">
          <Compliances2 />
        </div>
        <div className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${activeTab === "settings" ? "block" : "hidden"}`} role="tabpanel">
          <Compliances3 />
        </div>
        <div className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${activeTab === "startup" ? "block" : "hidden"}`} role="tabpanel">
          <Compliances4 />
        </div>
      </div>

      <Footer />
    </main>
  );
}
