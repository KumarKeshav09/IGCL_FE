"use client";
import Navbar from "../../components/common/navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../../components/common/footer";
import styles from "./product.module.css";
import { useState } from "react";
import Modal from "./ModelLogin/modellogin";



export default function Product() {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
    return (
        <main className="">
            <Navbar />
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
                    <h1 className="text-5xl px-6 py-4 font-semibold">LABOR LAW COMPLIANCES</h1>
                </div>
                <div className="border border-blue bg-indigo-500 px-7 md:px-20 py-6 flex flex-col">
                    <div className="flex-grow">
                        <h1 className="text-3xl  md:text-5xl font-medium mb-3">Hello</h1>
                        <ul className="list-disc text-base md:text-lg mb-4">
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Concludes with more legalistic and formal-sounding phrases, typical in Lorem Ipsum passages.</li>
                            <li>"Lorem ipsum dolor sit amet" is a standard starting phrase in placeholder text.
                                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                            <li>Describes temporary work and pain, with a focus on illustrating placeholder content.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                            <li>Mentions various aspects of pain and pleasure, continuing the non-meaningful pattern of the text.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
                        </ul>
                    </div>
                    <div className="flex justify-end mt-auto">
                        <button onClick={openModal} className="bg-white text-indigo-500 px-4 py-2 font-semibold text-lg hover:bg-indigo-600 hover:text-white">More Info</button>
                    </div>
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
            </Modal>
            <Footer />
        </main>
    );
}
