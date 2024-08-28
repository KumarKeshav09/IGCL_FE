"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/common/navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../../components/common/footer";
// import { initFlowbite } from "flowbite";
import { useEffect } from "react";
import styles from "../../services.module.css";


export default function Services() {

    return (
        <main className="">
            <Navbar />
            {/* <div className="-mt-44"> */}
            {/* <section className="bg-top h-62 bg-no-repeat bg-[url('/images/hero_banner5.jpg')] bg-top bg-gray-100 bg-blend-multiply">
            <div className="heroContent mx-auto max-w-screen text-center py-44 lg:py-44">
              
            </div>
          </section> */}
            {/* </div> */}
            <div className="min-w-screen border-b flex items-center justify-center py-5">
                <div className="w-full  border-gray-200 md:px-12 px-5  py-5 md:py-10 ">
                    <div className="w-full mx-auto">
                        <div className="text-center max-w-xl mx-auto">
                            <h1 className="text-4xl md:text-7xl font-bold mb-5 text-gray-800">
                                SERVICES
                            </h1>
                            <h3 className="text-xl mb-5 font-light text-gray-600">
                                Offering a range of services tailored to meet your needs.
                            </h3>
                            <div className="text-center mb-5">
                                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                                <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                            </div>
                        </div>
                        <div className={styles.BoxContainer}>
                            <Link href='/services/1-detail#profile' className={styles.card}>
                                <img
                                    src="/images/image1.jpg"
                                    className={styles.image}
                                />
                                <div className={styles.overlay}>
                                    <div className={styles.text}>
                                        <h3 className={styles.textNum}>01-</h3>
                                        <h3 className={styles.textDesp}>Statutory Compliances </h3>
                                        <p className={styles.textSecret}>Navigating Legal Requirements for Effective Labour Law Compliance</p>
                                    </div>
                                </div>
                            </Link>
                            <Link href='/services/1-detail#dashboard' className={styles.card}>
                                <img
                                    src="/images/image2.jpg"
                                    className={styles.image}
                                />
                                <div className={styles.overlay}>
                                    <div className={styles.text}>
                                        <h3 className={styles.textNum}>02-</h3>
                                        <h3 className={styles.textDesp}>Establishment Compliances</h3>
                                        <p className={styles.textSecret}>Driving Sustainable Development Through Comprehensive ESG Strategies</p>
                                    </div>
                                </div>
                            </Link>
                            <Link href='/services/1-detail#settings' className={styles.card}>
                                <img
                                    src="/images/image3.jpg"
                                    className={styles.image}
                                />
                                <div className={styles.overlay}>
                                    <div className={styles.text}>
                                        <div><h3 className={styles.textNum}>03-</h3></div>
                                        <div><h3 className={styles.textDesp}>Labour Law Audit and Assessment</h3></div>
                                        <p className={styles.textSecret}>Enhancing Organizational Skills Through Tailored Training and Expert Consultancy</p>
                                    </div>
                                </div>
                            </Link>
                            <Link href='/services/1-detail#startup' className={styles.card}>
                                <img
                                    src="/images/image4.jpg"
                                    className={styles.image}
                                />
                                <div className={styles.overlay}>
                                    <div className={styles.text}>
                                        <h3 className={styles.textNum}>04-</h3>
                                        <h3 className={styles.textDesp}>Solutions for Startups </h3>
                                        <p className={styles.textSecret}>Providing Comprehensive Staffing Solutions for Optimal Workforce Management</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

        </main>
    )
}