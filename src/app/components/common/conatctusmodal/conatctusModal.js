import React, { useState } from 'react';
import { toast } from 'react-toastify'; // Ensure you have react-toastify installed
import { API_BASE_URL } from '../../../../../utils/constants';

const Modal = ({ isOpen, onClose }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [message, setMessage] = useState('');

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
        return re.test(String(email).toLowerCase());
    };

    const validateMobile = (mobile) => {
        return /^\d{10}$/.test(mobile); // Must be exactly 10 digits
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation checks
        if (!validateEmail(email)) {
            toast.error("Please enter a valid email address.");
            return;
        }

        if (!validateMobile(mobile)) {
            toast.error("Mobile number must be 10 digits.");
            return;
        }

        const data = {
            name,
            email,
            mobile,
            message,
        };

        try {
            const res = await fetch(`${API_BASE_URL}/contact/addContact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            const resData = await res.json();

            if (resData?.success) {
                toast.success("Question is successfully sent!");
                setName("");
                setEmail("");
                setMobile("");
                setMessage("");
                onClose(); // Close the popup after successful submission
            } else {
                toast.error(resData.error);
            }
        } catch (error) {
            toast.error("Something went wrong");
        }
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            onClick={onClose}
        >
            <div
                className="relative p-4 w-full max-w-2xl bg-white rounded-lg shadow"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
                <div className="flex items-center justify-between p-4 border-b rounded-t">
                    <h3 className="text-xl font-semibold text-gray-900">
                        Contact Us
                    </h3>
                    <button
                        type="button"
                        className="text-gray-400 hover:text-gray-900"
                        onClick={onClose}
                    >
                        <svg
                            className="w-3 h-3"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                        </svg>
                    </button>
                </div>
                <form className="p-4 space-y-4 text-black" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full p-2 border"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full p-2 border"
                    />
                    <input
                        type="tel"
                        placeholder="Mobile"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        required
                        className="w-full p-2 border"
                    />
                    <textarea
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        className="w-full p-2 border"
                    />
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-blue-700 text-white px-4 py-2 "
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;
