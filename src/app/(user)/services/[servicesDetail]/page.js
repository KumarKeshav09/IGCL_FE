"use client";
import Image from "next/image";
import Navbar from "../../../components/common/navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../../../components/common/footer";
import { initFlowbite } from "flowbite";
import { useEffect } from "react";
import styles from "../../../services.module.css";

export default function ServicesDetail() {
  return (
    <main className="">
      <Navbar />
      <div className="-mt-44">
        <section className="bg-top h-62 bg-no-repeat bg-[url('/images/hero_banner5.jpg')] bg-top bg-gray-100 bg-blend-multiply">
          <div className="heroContent mx-auto max-w-screen text-center py-44 lg:py-44"></div>
        </section>
      </div>

      {/* overview */}
      <div>
        <section class="bg-white border-b dark:bg-gray-900">
          <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="grid grid-cols-7 md:grid-cols-7 gap-1">
              <div className="col-span-1">
                <p className="hidden md:block text-blue-900 font-bold">Overview</p>
              </div>
              <div class="col-span-6 max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 class="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
                  Powering innovation at{" "}
                  <span class="font-extrabold">200,000+</span> companies
                  worldwide
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <p class="mb-4 font-medium">
                    Track work across the enterprise through an open,
                    collaborative platform. Link issues across Jira and ingest
                    data from other software development tools, so your IT
                    support and operations teams have richer contextual
                    information to rapidly respond to requests, incidents, and
                    changes.
                  </p>
                  <p class="mb-4 font-medium">
                    Deliver great service experiences fast - without the
                    complexity of traditional ITSM solutions.Accelerate critical
                    development work, eliminate toil, and deploy changes with
                    ease.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* what to expect */}

      <div>
        <section class="bg-white border-b dark:bg-gray-900">
          <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="text-center max-w-xl mx-auto">
              <h1 className="text-4xl md:text-7xl font-bold mb-5 text-gray-800">
                What to Expect
              </h1>
              <h3 className="text-xl mb-5 font-light text-gray-800">
                Empowering clients with innovative solutions and unparalleled
                support.
              </h3>
              <div className="text-center mb-10">
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
              </div>
            </div>
            <div class=" p-4  rounded-lg md:p-8 dark:bg-gray-800">
              <p class="mb-3 text-gray-500 dark:text-gray-400">
                Empower Developers, IT Ops, and business teams to collaborate at
                high velocity. Respond to changes and deliver great customer and
                employee service experiences fast.
              </p>

              <ul
                role="list"
                class="space-y-4 mt-8 text-gray-500 dark:text-gray-400"
              >
                <li class="flex space-x-2 rtl:space-x-reverse items-center">
                  <svg
                    class="w-3.5 h-3.5 me-2 text-green-400 dark:text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  <span class="leading-tight">
                    Dynamic reports and dashboards
                  </span>
                </li>
                <li class="flex space-x-2 rtl:space-x-reverse items-center">
                  <svg
                    class="w-3.5 h-3.5 me-2 text-green-400 dark:text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  <span class="leading-tight">Templates for everyone</span>
                </li>
                <li class="flex space-x-2 rtl:space-x-reverse items-center">
                  <svg
                    class="w-3.5 h-3.5 me-2 text-green-400 dark:text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  <span class="leading-tight">Development workflow</span>
                </li>
                <li class="flex space-x-2 rtl:space-x-reverse items-center">
                  <svg
                    class="w-3.5 h-3.5 me-2 text-green-400 dark:text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  <span class="leading-tight">
                    Limitless business automation
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* Applicability  */}

      <div>
        <section class="bg-white border-b dark:bg-gray-900">
          <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="text-center max-w-xl mx-auto">
              <h1 className="text-4xl md:text-7xl font-bold mb-5 text-gray-800">
                Applicability
              </h1>
              <h3 className="text-xl mb-5 font-light text-gray-800">
                Empowering clients with innovative solutions and unparalleled
                support.
              </h3>
              <div className="text-center mb-10">
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
              </div>
            </div>
            <div class=" p-4  rounded-lg md:p-8 dark:bg-gray-800">
              <p class="mb-3 text-gray-500 dark:text-gray-400">
                The ESI scheme is applicable to all factories and other
                establishments as defined in the Act with 10 or more persons
                employed in such establishments and the beneficiaries’ monthly
                wage does not exceed Rs 21,000 are covered under the scheme.
              </p>

              <ul class="list-disc mt-8 text-gray-500">
                <li>
                  Providing day-to-day consultancy on matters pertaining to ESI.
                </li>
                <li>
                  Update all eligible employees’ personal and family details on
                  the ESI Portal for various benefits under the ESI Scheme and
                  maintain Form 1.
                </li>
                <li>
                  Arrange and issue the ESIC card to all such eligible employees
                  covered under the ESIC.
                </li>
                <li>
                  Guide employers as well as employees to get proper benefits
                  available under the ESI Scheme.
                </li>
                <li>Consulting on Monthly ESI contribution and remittance.</li>
                <li>
                  Prepare & maintain the inspection book, accident book, and
                  other various forms.
                </li>
                <li>
                  Ensure timely compliance and smooth working of the clients
                  with ownership concept.
                </li>
                <li>
                  Replying & Stratifying show cause notice issued under the ESI
                  Act.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
