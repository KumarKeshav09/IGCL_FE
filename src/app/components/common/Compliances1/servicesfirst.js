import { useState } from "react";
import Link from "next/link";
import CompliancesPost1 from "./post1";
import CompliancesPost2 from "./post2";
import CompliancesPost3 from "./post3";
import CompliancesPost4 from "./post4";
import CompliancesPost6 from "./post6";
import CompliancesPost5 from "./post5";

const Compliances1 = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="md:flex">
      {/* Sidebar */}
      <ul className="flex-column space-y space-y-4 text-nowrap text-base font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
        <li>
          <button
            onClick={() => handleTabChange("profile")}
            className={`inline-flex items-center px-4 py-3 rounded-lg w-full ${
              activeTab === "profile"
                ? "text-white bg-indigo-500 dark:bg-indigo-500"
                : "bg-gray-50 text-gray-500 dark:bg-gray-800 dark:text-gray-400"
            }`}
          >
            Payroll Management Services 
          </button>
        </li>
        <li>
          <button
            onClick={() => handleTabChange("dashboard")}
            className={`inline-flex items-center px-4 py-3 rounded-lg w-full ${
              activeTab === "dashboard"
                ? "text-white bg-indigo-500 dark:bg-indigo-500"
                : "bg-gray-50 text-gray-500 dark:bg-gray-800 dark:text-gray-400"
            }`}
          >
            Employee Provident Fund (EPF)
          </button>
        </li>
        <li>
          <button
            onClick={() => handleTabChange("settings")}
            className={`inline-flex items-center px-4 py-3 rounded-lg w-full ${
              activeTab === "settings"
                ? "text-white bg-indigo-500 dark:bg-indigo-500"
                : "bg-gray-50 text-gray-500 dark:bg-gray-800 dark:text-gray-400"
            }`}
          >
            Employee State Insurance Act (ESI)
          </button>
        </li>
        <li>
          <button
            onClick={() => handleTabChange("contact")}
            className={`inline-flex items-center px-4 py-3 rounded-lg w-full ${
              activeTab === "contact"
                ? "text-white bg-indigo-500 dark:bg-indigo-500"
                : "bg-gray-50 text-gray-500 dark:bg-gray-800 dark:text-gray-400"
            }`}
          >
            Payment of Bonus Act, 1965
          </button>
        </li>
        <li>
          <button
            onClick={() => handleTabChange("about")}
            className={`inline-flex items-center px-4 py-3 rounded-lg w-full ${
              activeTab === "about"
                ? "text-white bg-indigo-500 dark:bg-indigo-500"
                : "bg-gray-50 text-gray-500 dark:bg-gray-800 dark:text-gray-400"
            }`}
          >
            The Payment of Gratuity Act, 1972 
          </button>
        </li>
        <li>
          <button
            onClick={() => handleTabChange("disabled")}
            className={`inline-flex items-center px-4 py-3 rounded-lg w-full ${
              activeTab === "disabled"
                ? "text-white bg-indigo-500 dark:bg-indigo-500"
                : "bg-gray-50 text-gray-500 dark:bg-gray-800 dark:text-gray-400"
            }`}
          >
            PT and LWF Compliances
          </button>
        </li>
      </ul>

      {/* Content */}
      <div className="md:px-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
        {activeTab === "profile" && (
          <div>
            <CompliancesPost1 />
          </div>
        )}
        {activeTab === "dashboard" && (
          <div>
            <CompliancesPost2 />
          </div>
        )}
        {activeTab === "settings" && (
          <div>
            <CompliancesPost3 />
          </div>
        )}
        {activeTab === "contact" && (
          <div>
            <CompliancesPost4 />
          </div>
        )}
        {activeTab === "about" && (
          <div>
            <CompliancesPost5 />
          </div>
        )}
        {activeTab === "disabled" && (
          <div>
            <CompliancesPost6 />
          </div>
        )}
      </div>
    </div>
  );
};

export default Compliances1;
