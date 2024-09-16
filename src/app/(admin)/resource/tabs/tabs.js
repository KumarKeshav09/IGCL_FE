"use client";
import { useEffect, useState } from "react";
import Abstract from "../abstract/abstract";
import Policy from "../Policy/Policy";
import Judgement from "../judgement/judgement";
import styles from "./tabs.module.css";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("policy");

  useEffect(() => {
    // Read the hash from the URL and set the active tab
    const hash = window.location.hash.slice(1);
    if (["abstract", "policy", "judgement"].includes(hash)) {
      setActiveTab(hash);
    }
  }, []);

  // Update the URL hash when the tab changes
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    window.location.hash = `#${tabId}`;
  };

  return (
    <>
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul className={`${styles.WrapText} flex flex-wrap -mb-px text-sm font-medium text-center`} role="tablist">
          <li className="me-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === "abstract" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-600 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"}`}
              onClick={() => handleTabChange("abstract")}
              type="button"
              role="tab"
              aria-controls="abstract"
              aria-selected={activeTab === "abstract"}
            >
              Abstract
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === "policy" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-600 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"}`}
              onClick={() => handleTabChange("policy")}
              type="button"
              role="tab"
              aria-controls="policy"
              aria-selected={activeTab === "policy"}
            >
              Notification
            </button>
          </li>
          <li role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === "judgement" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-600 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"}`}
              onClick={() => handleTabChange("judgement")}
              type="button"
              role="tab"
              aria-controls="judgement"
              aria-selected={activeTab === "judgement"}
            >
              Judgement
            </button>
          </li>
        </ul>
      </div>
      <div>
        <div
          className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${activeTab === "abstract" ? "block" : "hidden"}`}
          id="abstract"
          role="tabpanel"
          aria-labelledby="abstract-tab"
        >
          <Abstract />
        </div>
        <div
          className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${activeTab === "policy" ? "block" : "hidden"}`}
          id="policy"
          role="tabpanel"
          aria-labelledby="policy-tab"
        >
          <Policy />
        </div>
        <div
          className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${activeTab === "judgement" ? "block" : "hidden"}`}
          id="judgement"
          role="tabpanel"
          aria-labelledby="judgement-tab"
        >
          <Judgement />
        </div>
      </div>
    </>
  );
}
