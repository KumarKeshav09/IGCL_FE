import { useEffect, useRef, useState } from "react";
import { API_BASE_URL } from "../../../../../utils/constants";
import { toast } from "react-toastify";
import styles from "./servicethird.module.css"
import Modal from "../conatctusmodal/conatctusModal";

export default function Compliances4() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    return (
        <>
            <div className="max-w-full mx-auto md:p-6">
                <header className="text-center mb-2">
                    <h1 className="text-4xl font-bold text-gray-800">Empowering Your Start-up Journey with Comprehensive Services</h1>
                </header>
                <div className="text-center mb-5">
                    <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                    <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                    <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                    <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                    <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                </div>

                <section className="space-y-8">
                    <p className="text-gray-600 text-justify text-lg lg:text-xl">
                        IGCL India offers a detailed and comprehensive framework of services tailored to meet the unique needs of start-ups.
                        Whether you're just starting or looking to streamline your operations, our range of services is designed to support you every step of the way.
                    </p>

                    <div className="space-y-6">
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <h2 className="text-2xl font-semibold text-gray-800">1. Incorporation of Your Start-ups</h2>
                            <p className="text-gray-600 text-justify text-lg lg:text-xl">
                                Setting the right foundation is crucial for the success of any start-up. Our expert team will guide you through the process of company incorporation, ensuring that you meet all legal requirements and set off on the right foot.
                            </p>
                        </div>

                        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <h2 className="text-2xl font-semibold text-gray-800">2. Start-up Recognition from DPIIT</h2>
                            <p className="text-gray-600 text-justify text-lg lg:text-xl">
                                DPIIT-recognized start-ups enjoy a host of benefits under the Start-up India Initiative. From self-certification of compliance to exemption from inspections for a specified period, we'll help you navigate the process and unlock the advantages offered by DPIIT recognition.
                            </p>
                        </div>

                        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <h2 className="text-2xl font-semibold text-gray-800">3. Obtaining Various Registrations and Licenses</h2>
                            <p className="text-gray-600 text-justify text-lg lg:text-xl">
                                Navigating the maze of registrations and licenses can be overwhelming for start-ups. Let us take the hassle out of the process by assisting you with obtaining essential registrations and licenses such as Udyam Registration, Sansthan Aadhar Number (SAN), Shop and Establishment Registration, GST Registration, and more.
                            </p>
                        </div>

                        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <h2 className="text-2xl font-semibold text-gray-800">4. Payroll Management for Your Start-up</h2>
                            <p className="text-gray-600 text-justify text-lg lg:text-xl">
                                Managing payroll efficiently is essential for maintaining employee satisfaction and compliance. Our payroll management services ensure accurate and timely processing of salaries, taxes, and other payroll-related tasks, allowing you to focus on growing your business.
                            </p>
                        </div>

                        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <h2 className="text-2xl font-semibold text-gray-800">5. Statutory and Labor Law Compliances</h2>
                            <p className="text-gray-600 text-justify text-lg lg:text-xl">
                                Staying compliant with statutory and labour laws is crucial for the long-term success of your start-up. Our team will ensure that your business adheres to all relevant regulations, minimizing the risk of penalties and legal issues.
                            </p>
                        </div>

                        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <h2 className="text-2xl font-semibold text-gray-800">6. Accounting and Taxation</h2>
                            <p className="text-gray-600 text-justify text-lg lg:text-xl">
                                Navigating the complexities of Accounting and Taxation can be challenging for start-ups. Our services cover everything from registration to filing returns, ensuring that your business remains compliant at all times.
                            </p>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <h3 className="text-3xl font-semibold text-gray-800">Why Choose IGCL India?</h3>
                        <ul className="list-disc list-inside mt-4 text-gray-600 text-justify text-lg lg:text-xl">
                            <li><strong>Expertise:</strong> Our team comprises seasoned professionals with in-depth knowledge of start-up regulations and compliance requirements.</li>
                            <li><strong>Tailored Solutions:</strong> We understand that every start-up is unique. That's why we offer personalized solutions tailored to your specific needs and objectives.</li>
                            <li><strong>Reliability:</strong> With IGCL India, you can trust that your start-up's registration and compliance needs are in safe hands. We prioritize efficiency, accuracy, and reliability in everything we do.</li>
                        </ul>
                    </div>

                    <div className="text-center mt-12">
                        <h3 className="text-3xl font-semibold text-white">
                            <span className="bg-indigo-500 p-2">Get Started Today!</span>
                        </h3>
                        <p className="text-gray-600 text-lg lg:text-xl mt-4">
                            Ready to take your start-up to the next level?
                            <button
                                onClick={toggleModal}
                                className="px-2 border-b text-indigo-700 border-indigo-500"
                            >
                                Contact us
                            </button>

                            now to learn more about our services and how we can support your entrepreneurial journey.
                        </p>
                    </div>

                </section>
            </div>

            <Modal isOpen={isModalOpen} onClose={toggleModal} />

        </>
    );
}
