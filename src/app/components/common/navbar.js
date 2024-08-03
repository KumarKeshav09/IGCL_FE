"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";
import { useEffect } from "react";
// import { initFlowbite } from "flowbite";

export default function Navbar() {
  const pathname = usePathname();
  useEffect(() => {
    // Import Flowbite only on the client side
    import('flowbite').then((module) => {
      const { initFlowbite } = module;
      initFlowbite();
    });
  }, []);
  
  return (
    <>
      <nav className=" h-32 bg-gray-100 dark:bg-gray-900  w-full relative z-50 top-0 start-0">
        <div
          className={`${styles.navMain} max-w-screen flex flex-wrap items-center justify-between mx-auto  py-4  px-28 `}
        >
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/images/logoWithoutBg.png"
              className="h-24"
              alt="IGCl Logo"
            />
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${styles.navUlMain} hidden navUlMain w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 bg-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  href="/"
                  className={`${
                    pathname == "/"
                      ? "block text-lg py-2 px-3 bg-blue-700 rounded md:bg-transparent hover:text-black text-black md:text-blue-700 md:p-0 dark:text-white md:dark:text-white "
                      : "block text-lg py-2 px-3 text-black  rounded md:bg-transparent hover:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  }`}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/aboutus"
                  className={`${
                    pathname == "/aboutus"
                      ? "block text-lg py-2 px-3 bg-blue-700 rounded md:bg-transparent hover:text-black text-black md:text-blue-700 md:p-0 dark:text-white md:dark:text-white "
                      : "block text-lg py-2 px-3 text-black  rounded md:bg-transparent hover:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  }`}
                  aria-current="page"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover"
                  className={`${
                    pathname == "/services"
                      ? "block text-lg py-2 px-3 bg-blue-700 rounded md:bg-transparent hover:text-black text-black md:text-blue-700 md:p-0 dark:text-white md:dark:text-white "
                      : "block text-lg py-2 px-3 text-black  rounded md:bg-transparent hover:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  }`}
                >
                  Services
                </Link>
                <div id="dropdownHover" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-auto dark:bg-gray-700">
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
      <li>
        <Link href="/services/1" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Labour Law Compliances</Link>
      </li>
      <li>
        <Link href="/services/1" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Environment Social and Governance</Link>
      </li>
      <li>
        <Link href="/services/1" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Training & Consultancy</Link>
      </li>
      <li>
        <Link href="/services/1" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Staffing Solution</Link>
      </li>
    </ul>
</div>
              </li>
              <li>
                <Link
                  href="#"
                  className={`${
                      "block text-lg py-2 px-3 text-black  rounded md:bg-transparent hover:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  }`}
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`${pathname == '/contact' 
                    ? "block text-lg py-2 px-3 bg-blue-700 rounded md:bg-transparent hover:text-blue-700 text-black md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 " :
                    "block text-lg py-2 px-3 text-black  rounded md:bg-transparent hover:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"}`}
                                  >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
