"use client";

import React, { useEffect, useState } from "react";

import Modal from "../Result/result";
import LoadingScreen from "@/app/components/common/Loading";

const MyKycReport = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [openModalLoading, setModalOpenLoading] = useState(false);
  const [openModalResult, setIsModalOpenResult] = useState(false);
  const [FilteredData, setFilteredData] = useState([]); // Assuming FilteredData is an array
  const [kycDataList, setKycDataList] = useState([]); // Assuming kycDataList is an array

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedData = localStorage.getItem("FilteredData");
      const storedKycData = localStorage.getItem("kycDataList");
      if (storedData && storedKycData) {
        setFilteredData(JSON.parse(storedData));
        setKycDataList(JSON.parse(storedKycData));
      }
      setIsLoading(false);
    } // Simulate loading complete
  }, []);

  // Watch FilteredData and isLoading to handle modal logic
  useEffect(() => {
    if (!isLoading) {
      if (FilteredData && FilteredData.length > 0) {
        setIsModalOpenResult(true);
      } else {
        setIsModalOpenResult(false);
      }
    }
  }, [isLoading, FilteredData]); // Re-run whenever isLoading or FilteredData changes

  // Close modal functions
  const closeModalLoading = () => setModalOpenLoading(false);
  const closeModalResult = () => setIsModalOpenResult(false);
  return (
    <>
      <div>
        {isLoading ? (
          <>
            <LoadingScreen
              isOpen={openModalLoading}
              onClose={closeModalLoading}
            />
            <h1>{console.log("isloadingUp ----->", isLoading)}</h1>
          </>
        ) : (
          <>
            <Modal
              isOpen={openModalResult}
              onClose={closeModalResult}
              data={FilteredData}
              kyc={kycDataList}
            />
            <h1>{console.log("isloadingUp ----->", isLoading)}</h1>
          </>
        )}
      </div>
    </>
  );
};

export default MyKycReport;
