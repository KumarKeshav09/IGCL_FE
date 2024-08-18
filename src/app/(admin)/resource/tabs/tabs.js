"use client";
import { useState, useEffect } from "react";
import Abstract from "../abstract/abstract";
import Policy from "../Policy/Policy";
import Notification from "../notification/notification";
import Judgement from "../judgement/judgement";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("policy");

  // Use this effect to initialize Flowbite if needed
  useEffect(() => {
    import("flowbite").then((module) => {
      const { initFlowbite } = module;
      initFlowbite();
    });
  }, []);

  // Handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" role="tablist">
          <li className="me-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === "policy" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-600 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"}`}
              onClick={() => handleTabChange("policy")}
              type="button"
              role="tab"
              aria-controls="policy"
              aria-selected={activeTab === "policy"}
            >
              Policy
            </button>
          </li>
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
              className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === "notification" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-600 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"}`}
              onClick={() => handleTabChange("notification")}
              type="button"
              role="tab"
              aria-controls="notification"
              aria-selected={activeTab === "notification"}
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
          className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${activeTab !== "policy" && "hidden"}`}
          id="policy"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <Policy />
        </div>
        <div
          className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${activeTab !== "abstract" && "hidden"}`}
          id="abstract"
          role="tabpanel"
          aria-labelledby="dashboard-tab"
        >
          <Abstract />
        </div>
        <div
          className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${activeTab !== "notification" && "hidden"}`}
          id="notification"
          role="tabpanel"
          aria-labelledby="settings-tab"
        >
          <Notification />
        </div>
        <div
          className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${activeTab !== "judgement" && "hidden"}`}
          id="judgement"
          role="tabpanel"
          aria-labelledby="contacts-tab"
        >
          <Judgement />
        </div>
      </div>
    </>
  );
}
