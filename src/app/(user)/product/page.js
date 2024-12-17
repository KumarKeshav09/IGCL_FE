"use client";
import Navbar from "../../components/common/navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../../components/common/footer";
import styles from "./product.module.css";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import the Modal component to disable SSR
const Modal = dynamic(() => import("./ModelLogin/modellogin"), { ssr: false });

export default function Product() {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    useEffect(() => {
        // This code will run only on the client side
        if (typeof window !== 'undefined' && typeof self !== 'undefined') {
            const selfReference = self; // Safe to use `self` here
        }
    }, []);

    return (
        <main>
            <Navbar />
            <div className="md:px-10">
                <div className="text-center max-w-xl mx-auto">
                    <h1 className="text-3xl md:text-5xl mt-4 font-bold text-gray-800">
                        Products
                    </h1>
                    <div className="text-center mb-3">
                        <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                        <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                        <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                        <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                        <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 px-2 md:px-24">
                    <div className={`${styles.backgroundImg}`}>
                        <h1 className="text-5xl px-6 py-4 font-semibold text-white">Know Your Compliance</h1>
                    </div>
                    <div className="border border-blue bg-indigo-500 px-7 md:px-20 py-6 flex flex-col">
                        <div className="flex-grow">
                            <h1 className="text-3xl  md:text-4xl font-medium mb-3 text-white">Welcome to Know Your Compliance</h1>
                            <ul className="list-disc text-base md:text-lg mb-4">
                                <li className="text-base md:text-xl font-medium mb-3 text-justify text-white">Your go-to tool for effortlessly navigating the complex landscape of labour laws applicable to your establishment. Whether you're a small startup or a large enterprise, ensuring compliance with labour regulations is crucial to maintaining a legal and ethical workplace.</li>
                                <li className="text-base md:text-xl font-medium mb-3 text-justify text-white">Our intuitive platform simplifies this process by helping you identify the specific labour laws that apply to your business based on your industry, location, and workforce size. With Know Your Compliance, you can stay updated with the latest legal requirements, minimize risk, and focus on what matters most—growing your business.</li>
                            </ul>
                        </div>
                        <div className="flex justify-end mt-auto">
                            <button onClick={openModal} className="bg-white text-indigo-500 px-4 py-2 font-semibold text-lg hover:bg-indigo-600 hover:text-white">More Info</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Conditionally render Modal only on the client-side */}
            {typeof window !== 'undefined' && isModalOpen && (
                <Modal isOpen={isModalOpen} onClose={closeModal} />
            )}

            <Footer />
        </main>
    );
}
