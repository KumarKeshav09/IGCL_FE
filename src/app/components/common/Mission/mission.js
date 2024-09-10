"use client"
import React, { useEffect, useState } from "react";
import styles from "./mission.module.css";
import "../../../../app/globals.css";

// Testimonials component
const VisionMission = () => {
    const [listData, setListData] = useState([
        {
            heading: "Our Vision",
            content:
                "To be recognized as a key provider of strategic consulting for the development and execution of growth strategies across the world.",
        },
        {
            heading: "Our Mission",
            content:
                "Led by energetic and experienced professionals, we use a dedicated business approach to produce innovative and strategic, yet affordable, solutions and result oriented service which helps clients to accomplish their venturesome goals with optimized costs.",
    },
    ]);
    return (
        <div
            className={`introdocution border-none dark:border-gray-700 grid md:grid-cols-2 gap-8`}
        >
            {listData.map((item, index) => (
                <div key={index} className="">
                    {" "}
                    <div className="e-card playing">
                        <div className="image"></div>
                        <div className="wave"></div>

                        <div className="infotop">
                            <h3 className="merriweather-bold text-3xl text-center font-bold text-black dark:text-white">
                                {item?.heading}
                            </h3>

                            <p className="m-4 text-left text-black text-md font-semibold text-justify">
                                {item?.content}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default VisionMission;
