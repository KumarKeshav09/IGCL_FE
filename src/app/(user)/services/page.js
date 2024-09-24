"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/common/navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../../components/common/footer";
// import { initFlowbite } from "flowbite";
import { useEffect } from "react";
import styles from "./servicein.module.css";


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
            <div className="min-w-screen border-b flex items-center justify-center py-3">
                <div className="w-full  border-gray-200 md:px-12 px-5 md:py-10 ">
                    <div className="w-full mx-auto">
                        <div className="text-center max-w-xl mx-auto">
                            <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
                                Services
                            </h1>
                            <div className="text-center mb-3">
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
                                        <h3 className={styles.textDesp}>Statutory Compliances </h3>
                                        <p className={styles.textSecret}>Compliance with labor, taxation, and environmental laws is key to responsible business.</p>
                                    </div>
                                </div>
                            </Link>
                            <Link href='/services/1-detail#dashboard' className={styles.card}>
                                <img
                                    src="/images/image4.jpg"
                                    className={styles.image}
                                />
                                <div className={styles.overlay}>
                                    <div className={styles.text}>
                                        <h3 className={styles.textDesp}>Establishment Compliances</h3>
                                        <p className={styles.textSecret}>Meeting legal requirements for permits, licenses, and safety standards in business operations.</p>
                                    </div>
                                </div>
                            </Link>
                            <Link href='/services/1-detail#settings' className={styles.card}>
                                <img
                                    src="/images/image2.jpg"
                                    className={styles.image}
                                />
                                <div className={styles.overlay}>
                                    <div className={styles.text}>
                                        <div><h3 className={styles.textDesp}>Labor Law Audit and Assessment</h3></div>
                                        <p className={styles.textSecret}>Evaluating compliance with labor regulations to ensure fair practices in wages, benefits, and safety.</p>
                                    </div>
                                </div>
                            </Link>
                            <Link href='/services/1-detail#startup' className={styles.card}>
                                <img
                                    src="/images/Logo.jpg"
                                    className={styles.image}
                                />
                                <div className={styles.overlay}>
                                    <div className={styles.text}>
                                        <h3 className={styles.textDesp}>Solutions for Startups </h3>
                                        <p className={styles.textSecret}>Comprehensive support for startups in planning, compliance and marketing to fuel growth.</p>
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