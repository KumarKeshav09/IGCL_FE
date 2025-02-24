"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Styles from "./sidebar.module.css";
import Cookies from "js-cookie";

export default function Sidebar({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleSignOut = () => {
    Cookies.remove('token');
    router.push('/login');
  };

  const [activeTab, setActiveTab] = useState();

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  useEffect(() => {
    setActiveTab(pathname.split("/"));
  }, [pathname]);

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <a href="/" className="flex ms-2 md:me-24">
                <img
                  src="../../../../images/logo.png"
                  className="h-8 me-3"
                  alt="FlowBite Logo"
                />
                <span className="self-center text-xl font-semibold text-black sm:text-2xl whitespace-nowrap dark:text-white">
                  IGCL
                </span>
              </a>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ms-3">
                <div>
                  <button
                    type="button"
                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      alt="user photo"
                    />
                  </button>
                </div>
                <div
                  className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                  id="dropdown-user"
                >
                  <div className="px-4 py-3" role="none">
                    <p
                      className="text-sm text-gray-900 dark:text-white"
                      role="none"
                    >
                      IGCL
                    </p>
                    <p
                      className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                      role="none"
                    >
                      Igcl@gmail.com
                    </p>
                  </div>
                  <ul className="py-1" role="none">
                    <li>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handleSignOut();
                        }}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                href="/testimonials"
                to="/testimonials"
                onClick={() => handleTabClick("testimonials")}
                className={` ${activeTab?.includes("testimonials")
                    ? Styles.activeTab
                    : Styles.inactiveTab
                  } flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-blue-100 dark:hover:bg-blue-700 group`}
              >
                <svg
                  className={`${activeTab?.includes("testimonials") ? Styles.tabSvg : Styles.inactiveTab
                    } flex-shrink-0 w-5 h-5 text-gray-900 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-black`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.857V2.571A1.857 1.857 0 0 0 6.143 0Zm0 5.143H1.857v-2.29h4.286v2.29Zm10.286-5.143h-4.286A1.857 1.857 0 0 0 11 2.571v4.286A1.857 1.857 0 0 0 12.857 8h4.286A1.857 1.857 0 0 0 19 6.857V2.571A1.857 1.857 0 0 0 17.143 0Zm-1.857 2.29v2.29h-4.286v-2.29h4.286Zm-7.236 8.066a.75.75 0 0 0-.741-.076c-1.434.792-3.341.793-4.914.002a.75.75 0 1 0-.757 1.296c1.73 1.006 3.81 1.008 5.566 0a.75.75 0 0 0 .757-1.296Zm4.095-.682a.75.75 0 0 0-1.036.277c-.835 1.588-2.268 2.425-3.952 2.425-1.674 0-3.055-.829-3.883-2.446a.75.75 0 0 0-1.318.674c.965 1.842 2.707 2.788 4.934 2.788 2.437 0 4.52-1.151 5.334-3.183a.75.75 0 0 0-.277-1.036Z" />
                </svg>
                <span className="ms-3">Testimonials</span>
              </Link>
            </li>
            <li>
              <Link
                href="/client"
                to="/client"
                onClick={() => handleTabClick("client")}
                className={` ${activeTab?.includes("client")
                    ? Styles.activeTab
                    : Styles.inactiveTab
                  } flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-blue-100 dark:hover:bg-blue-700 group`}
              >
                <svg
                  className={`${activeTab?.includes("client") ? Styles.tabSvg
                      : Styles.inactiveTab
                    } flex-shrink-0 w-5 h-5 text-gray-900 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-black`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="ms-3">Clients</span>
              </Link>
            </li>
            <li>
              <Link
                href="/FAQ"
                to="/FAQ"
                onClick={() => handleTabClick("FAQ")}
                className={` ${activeTab?.includes("FAQ")
                    ? Styles.activeTab
                    : Styles.inactiveTab
                  } flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-blue-100 dark:hover:bg-blue-700 group`}
              >
                <svg
                  className={`${activeTab?.includes("FAQ") ? Styles.tabSvg : Styles.inactiveTab
                    } flex-shrink-0 w-5 h-5 text-gray-900 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-black`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span className="ms-3">FAQ</span>
              </Link>
            </li>
            <li>
              <Link
                href="/resource"
                to="/resource"
                onClick={() => handleTabClick("resource")}
                className={` ${activeTab?.includes("resource")
                    ? Styles.activeTab
                    : Styles.inactiveTab
                  } flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-blue-100 dark:hover:bg-blue-700 group`}
              >
                <svg
                  className={`${activeTab?.includes("resource") ? Styles.tabSvg : Styles.inactiveTab
                    } flex-shrink-0 w-5 h-5 text-gray-900 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-black`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span className="ms-3">Resource</span>
              </Link>
            </li>
            <li>
              <Link
                href="/contactus"
                to="/contactus"
                onClick={() => handleTabClick("contactus")}
                className={` ${activeTab?.includes("contactus")
                    ? Styles.activeTab
                    : Styles.inactiveTab
                  } flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-blue-100 dark:hover:bg-blue-700 group`}
              >
                <svg
                  className={`${activeTab?.includes("contactus") ? Styles.tabSvg : Styles.inactiveTab
                    } flex-shrink-0 w-5 h-5 text-gray-900 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-black`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span className="ms-3">Contact</span>
              </Link>
            </li>
            <li>
              <Link
                href="/kycadmin"
                to="/kycadmin"
                onClick={() => handleTabClick("kycadmin")}
                className={` ${activeTab?.includes("kycadmin")
                    ? Styles.activeTab
                    : Styles.inactiveTab
                  } flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-blue-100 dark:hover:bg-blue-700 group`}
              >
                <svg
                  className={`${activeTab?.includes("kycadmin") ? Styles.tabSvg : Styles.inactiveTab
                    } flex-shrink-0 w-5 h-5 text-gray-900 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-black`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span className="ms-3">KYC</span>
              </Link>
            </li>
            <li>
              <Link
                href="/representative"
                to="/representative"
                onClick={() => handleTabClick("representative")}
                className={` ${activeTab?.includes("representative")
                    ? Styles.activeTab
                    : Styles.inactiveTab
                  } flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-blue-100 dark:hover:bg-blue-700 group`}
              >
                <svg
                  className={`${activeTab?.includes("representative") ? Styles.tabSvg : Styles.inactiveTab
                    } flex-shrink-0 w-5 h-5 text-gray-900 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-black`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span className="ms-3">Representatives</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 h-full border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          {children}
        </div>
      </div>
    </>
  );
}
