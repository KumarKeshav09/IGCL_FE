"use client";
import Navbar from "../../components/common/navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../../components/common/footer";
import Link from "next/link";
import styles from "../../services.module.css";
import { useState } from "react";
import Modal from "./ModelLogin/modellogin";



export default function Product() {
    const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
    return (
        <main className="">
            <Navbar />
            <div className="min-w-screen border-b flex items-center justify-center py-5">
                <div className="w-full  border-gray-200 md:px-12 px-5  py-5 md:py-10 ">
                    <div className="w-full mx-auto">
                        <div className="text-center max-w-xl mx-auto">
                            <h1 className="text-4xl md:text-7xl font-bold mb-5 text-gray-800">
                                Product
                            </h1>
                            {/* <h3 className="text-xl mb-5 font-light text-gray-600">
                                Offering a range of services tailored to meet your needs.
                            </h3> */}
                            <div className="text-center mb-5">
                                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                                <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                            </div>
                        </div>
                        <div className={styles.BoxContainer}>
                            <Link href='/services/1' className={styles.card}>
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
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={openModal}>Show Modal</button>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h2>Modal Content</h2>
                <p>This is the content inside the modal.</p>
            </Modal>
            <Footer />
        </main>
    );
}
