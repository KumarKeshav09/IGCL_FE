"use client";

import React, { useState } from 'react';
import Select from 'react-select'; // Ensure you have the react-select package installed
import { API_BASE_URL } from '../../../../utils/constants';

const MyForm = () => {
    // Options for the select components
    const IndustryOptions = [
        { value: "Manufacturing with power", label: "Manufacturing with power" },
        { value: "Manufacturing without power", label: "Manufacturing without power" },
        { value: "Service", label: "Service" },
        { value: "Telecom", label: "Telecom" },
        { value: "Banking", label: "Banking" },
        { value: "Mines", label: "Mines" },
        { value: "Education Institute and NGO’s", label: "Education Institute and NGO’s" },
        { value: "Pharmaceutical industry", label: "Pharmaceutical industry" },
        { value: "Construction industry", label: "Construction industry" },
        { value: "Contractor", label: "Contractor" },
        { value: "Logistic and Transport", label: "Logistic and Transport" },
    ];

    const statesOptions = [
        { value: "Andhra Pradesh", label: "Andhra Pradesh" },
        { value: "Arunachal Pradesh", label: "Arunachal Pradesh" },
        { value: "Assam", label: "Assam" },
        { value: "Bihar", label: "Bihar" },
        { value: "Chhattisgarh", label: "Chhattisgarh" },
        { value: "Goa", label: "Goa" },
        { value: "Gujarat", label: "Gujarat" },
        { value: "Haryana", label: "Haryana" },
        { value: "Himachal Pradesh", label: "Himachal Pradesh" },
        { value: "Jammu and Kashmir", label: "Jammu and Kashmir" },
        { value: "Jharkhand", label: "Jharkhand" },
        { value: "Karnataka", label: "Karnataka" },
        { value: "Kerala", label: "Kerala" },
        { value: "Madhya Pradesh", label: "Madhya Pradesh" },
        { value: "Maharashtra", label: "Maharashtra" },
        { value: "Manipur", label: "Manipur" },
        { value: "Meghalaya", label: "Meghalaya" },
        { value: "Mizoram", label: "Mizoram" },
        { value: "Nagaland", label: "Nagaland" },
        { value: "Odisha", label: "Odisha" },
        { value: "Puducherry", label: "Puducherry" },
        { value: "Punjab", label: "Punjab" },
        { value: "Rajasthan", label: "Rajasthan" },
        { value: "Sikkim", label: "Sikkim" },
        { value: "Tamil Nadu", label: "Tamil Nadu" },
        { value: "Telangana", label: "Telangana" },
        { value: "Tripura", label: "Tripura" },
        { value: "Uttar Pradesh", label: "Uttar Pradesh" },
        { value: "Uttarakhand", label: "Uttarakhand" },
        { value: "West Bengal", label: "West Bengal" },
        { value: "Andaman and Nicobar Islands", label: "Andaman and Nicobar Islands" },
        { value: "Chandigarh", label: "Chandigarh" },
        { value: "Dadra and Nagar Haveli and Daman and Diu", label: "Dadra and Nagar Haveli and Daman and Diu" },
        { value: "Daman and Diu", label: "Daman and Diu" },
        { value: "Delhi", label: "Delhi" },
        { value: "Lakshadweep", label: "Lakshadweep" },
        { value: "Ladakh", label: "Ladakh" }
    ];


    // Initial form state
    const [formValues, setFormValues] = useState({
        organizationName: '',
        date: '',
        TypeOfIndustry: '',
        gstinNumber: '',
        isMultiState: '',
        statesOfOperation: [],
        employeeCount: '',
        hasContractor: '',
        numberOfContractors: '',
        maxContractLabourEngaged: '',
        maxContractLabourInAnyContract: '',
        hasMigrantWorkers: '',
        hasMigrantWorkersInContract: '',
        representativeName: '',
        representativeDesignation: '',
        representativeEmail: '',
        representativeMobile: '',
        representativeWebsite: '',
    });

    // Handle changes in input fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    // Handle changes in select fields (single select)
    const handleSelectChange = (selectedOption, { name }) => {
        setFormValues({
            ...formValues,
            [name]: selectedOption ? selectedOption.value : '',
        });
    };

    // Handle changes in multi-select fields
    const handleMultiSelectChange = (selectedOptions) => {
        setFormValues({
            ...formValues,
            statesOfOperation: selectedOptions || [], // Ensure it's an array
        });
    };

    // Handle form submission
    const submit = async () => {
        try {
            // Fetch KYC data from the API
            const response = await fetch(`${API_BASE_URL}/kyc/allKYC`); // Adjust the URL as needed
            const data = await response.json();
            console.log(data)
    
            // Define the filtering criteria
            const minEmployeeCount = formValues.employeeCount ? parseInt(formValues.employeeCount, 10) : 0;
            const states = Array.isArray(formValues.statesOfOperation) ? formValues.statesOfOperation.map(option => option.value) : []; // Ensure it's an array
            console.log("statess",formValues.statesOfOperation)
            const typeOfIndustry = formValues.TypeOfIndustry; // Adjust if necessary
            console.log("statess",formValues.TypeOfIndustry)
    
            // Filter data based on form values
            const filteredData = data.data.filter(row => {
                const matchesEmployeeCount = row.EmployeeCount >= minEmployeeCount;
                const matchesState = row.States.includes(state);
                const matchesTypeOfIndustry = row.TypeOfIndustry.includes(typeOfIndustry);
                
                console.log({
                    row,
                    matchesEmployeeCount,
                    matchesState,
                    matchesTypeOfIndustry
                });
                
                return matchesEmployeeCount && matchesState && matchesTypeOfIndustry;
            }).map(row => ({
                actname: row.actname,
                complianceFrequency: row.complianceFrequency
            }));
            
            console.log("formValues",formValues)
            console.log("filteredData",filteredData)
    
            // Log the filtered data or handle it as needed
            if (filteredData.length > 0) {
                console.log("Filtered Data Matches:");
                filteredData.forEach(item => {
                    console.log("actname:", item.actname);
                    console.log("complianceFrequency:", item.complianceFrequency);
                });
            } else {
                console.log("No data matches the criteria.");
            }
        } catch (error) {
            console.error("Error fetching KYC data:", error);
        }
    };


    return (
        <>
            <form className="grid grid-cols-3 gap-2 m-4">
                <div className="mb-5">
                    <label
                        htmlFor="organizationName"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Name of organization
                    </label>
                    <input
                        type="text"
                        id="organizationName"
                        name="organizationName"
                        value={formValues.organizationName}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="date"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Date
                    </label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={formValues.date}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="TypeOfIndustry"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Type of Industry
                    </label>
                    <Select
                        className='text-black'
                        name="TypeOfIndustry"
                        options={IndustryOptions}
                        value={IndustryOptions.find(
                            (option) => option.value === formValues.TypeOfIndustry
                        )}
                        onChange={handleSelectChange}
                        placeholder="Select One"
                        required
                    />
                </div>
                {formValues.TypeOfIndustry === "Education Institute and NGO’s" && (
                    <div className="mb-5">
                        <label
                            htmlFor="gstinNumber"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            GSTIN Number
                        </label>
                        <input
                            type="text"
                            id="gstinNumber"
                            name="gstinNumber"
                            value={formValues.gstinNumber}
                            onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>
                )}
                <div className="mb-5">
                    <label
                        htmlFor="isMultiState"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Do you operate in Multi-State?
                    </label>
                    <input
                        type="radio"
                        name="isMultiState"
                        id="isMultiStateYes"
                        value="true"
                        checked={formValues.isMultiState === 'true'}
                        onChange={handleChange}
                    />
                    <label htmlFor="isMultiStateYes" className="mr-3 ml-2 text-black">
                        Yes
                    </label>
                    <input
                        type="radio"
                        name="isMultiState"
                        id="isMultiStateNo"
                        value="false"
                        checked={formValues.isMultiState === 'false'}
                        onChange={handleChange}
                    />
                    <label htmlFor="isMultiStateNo" className="ml-2 text-black">
                        No
                    </label>
                </div>
                {formValues.isMultiState === 'true' ? (
                    <div className="mb-5">
                        <label
                            htmlFor="statesOfOperation"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            States Of Operation
                        </label>
                        <Select
                            className='text-black'
                            isMulti
                            name="statesOfOperation"
                            options={statesOptions}
                            value={formValues.statesOfOperation}
                            onChange={handleMultiSelectChange}
                            placeholder="Select States"
                        />
                    </div>
                ) : (
                    <div className="mb-5">
                        <label
                            htmlFor="State"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            State Of Operation
                        </label>
                        <Select
                            className='text-black'
                            name="State"
                            options={statesOptions}
                            value={statesOptions.find(
                                (option) => option.value === formValues.State
                            )}
                            onChange={handleSelectChange}
                            placeholder="Select State"
                        />
                    </div>
                )}
                {formValues.TypeOfIndustry === "Contractor" && (
                    <>
                        <div className="mb-5">
                            <label
                                htmlFor="hasContractor"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Do you have any Contractor in your establishment?
                            </label>
                            <input
                                type="radio"
                                name="hasContractor"
                                id="hasContractorYes"
                                value="true"
                                checked={formValues.hasContractor === 'true'}
                                onChange={handleChange}
                            />
                            <label htmlFor="hasContractorYes" className="mr-3 ml-2 text-black">
                                Yes
                            </label>
                            <input
                                type="radio"
                                name="hasContractor"
                                id="hasContractorNo"
                                value="false"
                                checked={formValues.hasContractor === 'false'}
                                onChange={handleChange}
                            />
                            <label htmlFor="hasContractorNo" className="ml-2 text-black">
                                No
                            </label>
                        </div>
                        {formValues.hasContractor === 'true' && (
                            <>
                                <div className="mb-5">
                                    <label
                                        htmlFor="numberOfContractors"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Total Number of Contractors Engaged in Your Establishment
                                    </label>
                                    <input
                                        type="number"
                                        id="numberOfContractors"
                                        name="numberOfContractors"
                                        value={formValues.numberOfContractors}
                                        onChange={handleChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                </div>
                                <div className="mb-5">
                                    <label
                                        htmlFor="maxContractLabourInAnyContractor"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Maximum Number of Contract Labour Engaged in any Contractor
                                    </label>
                                    <input
                                        type="number"
                                        id="maxContractLabourInAnyContract"
                                        name="maxContractLabourInAnyContract"
                                        value={formValues.maxContractLabourEngaged}
                                        onChange={handleChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                </div>
                            </>
                        )}
                    </>
                )}
                <div className="mb-5">
                    <label
                        htmlFor="employeeCount"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Employee count
                    </label>
                    <input
                        type="number"
                        id="employeeCount"
                        name="employeeCount"
                        value={formValues.employeeCount}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="hasMigrantWorkers"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Do you have Five or More than Five Inter-state Migrant Workers in your establishment?
                    </label>
                    <input
                        type="radio"
                        name="hasMigrantWorkers"
                        id="hasMigrantWorkersYes"
                        value="true"
                        checked={formValues.hasMigrantWorkers === 'true'}
                        onChange={handleChange}
                    />
                    <label htmlFor="hasMigrantWorkersYes" className="mr-3 ml-2 text-black">
                        Yes
                    </label>
                    <input
                        type="radio"
                        name="hasMigrantWorkers"
                        id="hasMigrantWorkersNo"
                        value="false"
                        checked={formValues.hasMigrantWorkers === 'false'}
                        onChange={handleChange}
                    />
                    <label htmlFor="hasMigrantWorkersNo" className="ml-2 text-black">
                        No
                    </label>
                </div>
                {formValues.TypeOfIndustry === "Contractor" && (
                    <>
                        <div className="mb-5">
                            <label
                                htmlFor="maxContractLabourInAnyContract"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Maximum Number of Contract Labour Engaged in any Contract
                            </label>
                            <input
                                type="number"
                                id="maxContractLabourInAnyContract"
                                name="maxContractLabourInAnyContract"
                                value={formValues.maxContractLabourInAnyContract}
                                onChange={handleChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </div>

                        <div className="mb-5">
                            <label
                                htmlFor="hasMigrantWorkersInContract"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Do you have Five or More than Five Inter-state Migrant Workers engaged in any Contract?
                            </label>
                            <input
                                type="radio"
                                name="hasMigrantWorkersInContract"
                                id="hasMigrantWorkersInContractYes"
                                value="true"
                                checked={formValues.hasMigrantWorkersInContract === 'true'}
                                onChange={handleChange}
                            />
                            <label htmlFor="hasMigrantWorkersInContractYes" className="mr-3 ml-2 text-black">
                                Yes
                            </label>
                            <input
                                type="radio"
                                name="hasMigrantWorkersInContract"
                                id="hasMigrantWorkersInContractNo"
                                value="false"
                                checked={formValues.hasMigrantWorkersInContract === 'false'}
                                onChange={handleChange}
                            />
                            <label htmlFor="hasMigrantWorkersInContractNo" className="ml-2 text-black">
                                No
                            </label>
                        </div>
                    </>
                )}
                <div className="mb-5">
                    <label
                        htmlFor="representativeName"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Name of Representative
                    </label>
                    <input
                        type="text"
                        id="representativeName"
                        name="representativeName"
                        value={formValues.representativeName}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="representativeDesignation"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Designation
                    </label>
                    <input
                        type="text"
                        id="representativeDesignation"
                        name="representativeDesignation"
                        value={formValues.representativeDesignation}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="representativeEmail"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="representativeEmail"
                        name="representativeEmail"
                        value={formValues.representativeEmail}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="representativeMobile"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Mobile Number
                    </label>
                    <input
                        type="tel"
                        id="representativeMobile"
                        name="representativeMobile"
                        value={formValues.representativeMobile}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="representativeWebsite"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Website
                    </label>
                    <input
                        type="url"
                        id="representativeWebsite"
                        name="representativeWebsite"
                        value={formValues.representativeWebsite}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>
            </form>
            <button
                onClick={submit}
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Register new account
            </button>
        </>
    );
};

export default MyForm;
