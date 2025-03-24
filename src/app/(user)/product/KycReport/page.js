"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Modal = dynamic(() => import("../Result/result"), { ssr: false });
const LoadingScreen = dynamic(() => import("@/app/components/common/Loading"), { ssr: false });

const MyKycReport = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [openModalLoading, setModalOpenLoading] = useState(false);
  const [openModalResult, setIsModalOpenResult] = useState(false);
  const [FilteredData, setFilteredData] = useState([]);
  const [kycDataList, setKycDataList] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedData = localStorage.getItem("FilteredData");
      const storedKycData = localStorage.getItem("kycDataList");

      setFilteredData(storedData ? JSON.parse(storedData) : []);
      setKycDataList(storedKycData ? JSON.parse(storedKycData) : []);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      if (FilteredData && FilteredData.length > 0) {
        setIsModalOpenResult(true);
      } else {
        setIsModalOpenResult(false);
      }
    }
  }, [isLoading, FilteredData]);

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