"use client";
import React, { useRef, useState } from "react";
import { jsPDF } from "jspdf";
import html2pdf from "html2pdf.js";

const Modal = ({ isOpen, onClose, data, kyc }) => {
  const contentRef = useRef();
  const [isModalOpen, setModalOpen] = useState(false);

  const handleClose = () => {
    onClose();
  };

  // Check if both kyc and data are empty
  const isNoDataAvailable =
    (!kyc || Object.keys(kyc).length === 0) && (!data || data.length === 0);

  const handleDownload = () => {
    const element = document.getElementById("rep1");
    const downloadBtn = document.getElementById("download-btn");
    if (downloadBtn) {
      downloadBtn.style.display = "none"; // Hide the button before generating the PDF
    }
    const options = {
      filename: "report.pdf",
      html2canvas: { scale: 2 },
      jsPDF: { unit: "pt", format: "a3", orientation: "portrait" },
    };

    html2pdf()
      .from(element)
      .set(options)
      .save()
      .then(() => {
        // After the PDF is generated, make sure to show the button again
        if (downloadBtn) {
          downloadBtn.style.display = "inline-block"; // Or whatever its original display style was
        }
      });
  };

  const handleOpen = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  if (!isOpen) return null;

  return (
    <div
      onClick={handleClose}
      id="default-modal"
      tabIndex="-1"
      aria-hidden="true"
      className="fixed top-0 right-0 left-0 z-50 w-full h-full bg-white max-h-full overflow-y-auto overflow-x-hidden flex justify-center items-center bg-transparent/[.8]"
    >
      <div
        id="rep1"
        className="relative bg-white w-full pb-4 max-w-7xl max-h-full"
        onClick={(e) => e.stopPropagation()}
      >
          <div
            ref={contentRef}
            className="relative m-4 border bg-white rounded-lg shadow dark:bg-gray-700"
          >
            <img src="/images/logoWIthoutBg.png" className="w-32 block md:hidden ml-auto mr-auto h-32" />
            <div className="flex items-center justify-between p-1 md:p-5 mx-4 md:mx-10 rounded-t dark:border-gray-600">
              <div className="justify-items-center">
                <h1 className="text-black md:text-3xl font-bold text-xl">
                  Innovative Governance Corporation Limited (IGCL INDIA)
                </h1>
                <p className="text-gray-900">
                  <span className="text-black text-lg font-semibold mr-2">
                    Address :
                  </span>
                  A-611, Vaishali Utsav, Gandhi Path (W), Vaishali Nagar,
                  Jaipur-302021, Rajasthan (India)
                </p>
                <p className="text-gray-900 md:w-3/5 text-center mt-8">
                  <span className="text-black text-lg font-semibold mr-2">
                    Know Your Compliance :
                  </span>
                  Your go-to tool for effortlessly navigating the complex
                  landscape of labour laws applicable to your establishment.
                </p>
              </div>
              <img src="/images/logoWIthoutBg.png" className="w-32 hidden md:block h-32" />
            </div>
            <div className="border-b"></div>
            {/* <div className=" text-black font-semibold text-xl pt-6 px-14">
            <span className="text-gray-500 text-3xl">" </span>
            <span className="">Thank you for
            choosing Know Your Compliance. We’re here to help you stay compliant
            and focus on what matters most your business!{" "}</span>
            <span className="text-gray-500 text-3xl">"</span>
          </div> */}

            <div className="text-black font-semibold text-xl pt-6 md:px-14">
              <div className="flex">
                <span className="text-gray-500 text-3xl mr-2">"</span>
                <span>
                  Thank you for choosing Know Your Compliance. We're here to
                  help you stay compliant and focus on what matters most your
                  business!
                  <span className="text-gray-500 text-3xl"> "</span>
                </span>
              </div>
            </div>

            <div className="p-4 md:p-5 space-y-4">
              {/* Check if there is no data */}
              {isNoDataAvailable ? (
                <div className="text-center text-lg text-red-600">
                  No data available
                </div>
              ) : (
                <>
                  {/* If kyc exists, display the KYC table */}
                  {kyc ? (
                    <div className="overflow-x-auto">
                      <table className="min-w-full border border-gray-300 text-black text-start">
                        <thead>
                          <tr>
                            <th className="border p-2 w-1/3">
                              Name Of Organization
                            </th>
                            <td className="border border-gray-300 p-2">
                              {kyc.NameOfOrganization}
                            </td>
                          </tr>
                          <tr>
                            <th className="border border-gray-300 p-2">
                              Date Of Commencement
                            </th>
                            <td className="border border-gray-300 p-2">
                              {new Date(
                                kyc.DateOfCommenceMent
                              ).toLocaleDateString("en-IN")}
                            </td>
                          </tr>
                          <tr>
                            <th className="border border-gray-300 p-2">
                              GST Number
                            </th>
                            <td className="border border-gray-300 p-2">
                              {kyc.GSTNumber}
                            </td>
                          </tr>
                          <tr>
                            <th className="border border-gray-300 p-2">
                              Type Of Industry
                            </th>
                            <td className="border border-gray-300 p-2">
                              {kyc.TypeOfIndustry}
                            </td>
                          </tr>
                          <tr>
                            <th className="border border-gray-300 p-2">
                              State Of Operations
                            </th>
                            <td className="border border-gray-300 p-2">
                              {kyc.StateOfOperations.join(", ")}
                            </td>
                          </tr>
                          {kyc.EmployeeCount > 0 ? (
                            <tr>
                              <th className="border border-gray-300 p-2">
                                Employee Count
                              </th>
                              <td className="border border-gray-300 p-2">
                                {kyc.EmployeeCount}{" "}
                                <span className="ml-2">
                                  (Including Contractual Workers)
                                </span>
                              </td>
                            </tr>
                          ) : null}

                          {kyc.inAnyContractor > 0 ? (
                            <tr>
                              <th className="border border-gray-300 p-2">
                                Maximum Number of Contract Labor Engaged in any
                                Contract
                              </th>
                              <td className="border border-gray-300 p-2">
                                {kyc.inAnyContractor}{" "}
                              </td>
                            </tr>
                          ) : null}
                          {kyc.throughAnyContractor > 0 ? (
                            <tr>
                              <th className="border border-gray-300 p-2">
                                Maximum Number of Contract labour Engaged
                                through any Contractor
                              </th>
                              <td className="border border-gray-300 p-2">
                                {kyc.throughAnyContractor}{" "}
                              </td>
                            </tr>
                          ) : null}
                        </thead>
                      </table>
                    </div>
                  ) : null}

                  <div className="px-6">
                    <button
                      id="download-btn"
                      onClick={handleDownload}
                      className="border p-2 rounded-md border-gray-400 text-blue-600"
                    >
                      Download PDF
                    </button>
                  </div>

                  {/* Display the data table if data is available */}
                  <div className="overflow-x-auto">
                    {data && data.length > 0 ? (
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-10">
                              S. No.
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Indicative Acts Applicable on your Establishment
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Compliance Frequency
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-60">
                              Remark
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {data.map((item, key) => (
                            <tr key={key}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {key + 1}
                              </td>
                              <td className="px-8 py-4 text-sm font-medium text-gray-900 text-nowrap md:text-wrap ">
                                {item.ActName}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {item.ComplianceFrequency}
                              </td>
                              <td className="px-8 py-4 text-sm text-gray-500">
                                {item.remark === "This Law valid for "
                                  ? "-"
                                  : item.remark}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ) : null}
                  </div>
                </>
              )}
            </div>
            <hr />
            <div>
              <p className="pl-12 pt-4 pb-8 text-black">
                <strong>Note: </strong>
                <ul className="list-decimal mt-2 list-inside text-gray-600 space-y-2">
                  <li>
                    This report is computer-generated and serves as a helpful
                    tool for understanding the applicability of labor law within
                    your establishment.
                  </li>
                  <li>
                    While the information provided is informative, it is not
                    intended to be an official document and should not be used
                    for legal regulatory purposes.
                  </li>
                  <li>
                    The report is designed to assist in understanding general
                    compliance with labor laws, but it should not be relied upon
                    as a legally binding reference.
                  </li>
                  <li>
                    This document is for internal use and guidance only, and is
                    not a substitute for formal legal advice or compliance
                    documentation.
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className="h-4"></div>
      </div>
    </div>
  );
};

export default Modal;

//
