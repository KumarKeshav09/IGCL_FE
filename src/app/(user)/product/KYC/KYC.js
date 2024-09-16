"use client";

import React, { useState } from 'react';
import Select from 'react-select'; // Ensure you have the react-select package installed
import { API_BASE_URL } from '../../../../../utils/constants';
import Cookies from 'js-cookie';

const MyForm = () => {
    const token = Cookies.get("UserId");
    const [FilteredData, setFilteredData] = useState([]);
    const [errors, setErrors] = useState({});
    const [matchedStates, setMatchedStates] = useState([]); 
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
        { value: "Whole India", label: "Whole India" },
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

    const validateForm = () => {
        const newErrors = {};
        // Check required fields
        if (!formValues.organizationName) newErrors.organizationName = 'Name of organization is required';
        if (!formValues.date) newErrors.date = 'Date is required';
        if (!formValues.TypeOfIndustry) newErrors.TypeOfIndustry = 'Type of Industry is required';
        if (formValues.TypeOfIndustry === "Education Institute and NGO’s" && !formValues.gstinNumber) newErrors.gstinNumber = 'GSTIN Number is required';
        if (!formValues.employeeCount) newErrors.employeeCount = 'Employee count is required';
        if (!formValues.representativeName) newErrors.representativeName = 'Name of Representative is required';
        if (!formValues.representativeDesignation) newErrors.representativeDesignation = 'Designation is required';
        if (!formValues.representativeEmail) newErrors.representativeEmail = 'Email Address is required';
        if (!formValues.representativeMobile) newErrors.representativeMobile = 'Mobile Number is required';

        // Conditional checks
        if(!formValues.isMultiState){
            newErrors.statesOfOperation = 'States Of Operation is required';
        } else {
            if (formValues.isMultiState === 'true' && formValues.statesOfOperation.length === 0) {
                newErrors.statesOfOperation = 'States Of Operation is required';
            } else if (formValues.isMultiState === 'false' && !formValues.statesOfOperation) {
                newErrors.statesOfOperation = 'State Of Operation is required';
            }
        }

        if (formValues.TypeOfIndustry === 'Contractor') {
            if (formValues.hasContractor === 'true') {
                if (!formValues.numberOfContractors) newErrors.numberOfContractors = 'Total Number of Contractors is required';
                if (!formValues.maxContractLabourEngaged) newErrors.maxContractLabourEngaged = 'Maximum Number of Contract Labour Engaged is required';
            }
            if (formValues.hasMigrantWorkersInContract === 'true' && !formValues.maxContractLabourInAnyContract) {
                newErrors.maxContractLabourInAnyContract = 'Maximum Number of Contract Labour Engaged in any Contract is required';
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const submit = async () => {
        if (!validateForm()) return;

        try {
            // Fetch KYC data from the primary API endpoint
            const response = await fetch(`${API_BASE_URL}/kyc/allKYC`);
            const data = await response.json();

            // Verify data using the secondary API endpoint
            const verificationResponse = await fetch(`${API_BASE_URL}/kycData/kycData`, {
                method: 'POST',
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ /* data to be sent for verification */ }),
            });
            const verificationData = await verificationResponse.json();

            // Define the filtering criteria
            const minEmployeeCount = formValues.employeeCount ? parseInt(formValues.employeeCount, 10) : 0;
            const states = Array.isArray(formValues.statesOfOperation)
                ? formValues.statesOfOperation.map(option => option.value)
                : formValues.statesOfOperation
                    ? [formValues.statesOfOperation] // Handle single selection
                    : [];
            const typeOfIndustry = formValues.TypeOfIndustry;

            // Filter data based on form values
            const filteredData = data.data.filter(row => {
                const matchesEmployeeCount = row.EmployeeCount >= minEmployeeCount;
                const matchesState = states.some(state => row.State.includes(state));
                const matchesTypeOfIndustry = row.TypeOfIndustry.includes(typeOfIndustry);
                return matchesEmployeeCount && matchesState && matchesTypeOfIndustry;
            }).map(row => ({
                actname: row.ActName,
                complianceFrequency: row.ComplianceFrequency,
                state: (row.State + ",")
            }));

            // Extract unique matched states
            const uniqueStates = [...new Set(filteredData.flatMap(item => item.state))];
            const matchedStatesString = uniqueStates.join(', ');

            // Update state with filtered data and matched states
            setFilteredData(filteredData);
            setMatchedStates(matchedStatesString);
            setIsModalOpen(true);

        } catch (error) {
            console.error("Error during API calls:", error);
        }
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
    };


    return (
        <>
            <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
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
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                    />
                    {errors.organizationName && <div className="error text-red-500 mt-1">{errors.organizationName}</div>}
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
                    {errors.date && <div className="error text-red-500 mt-1">{errors.date}</div>}
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
                    {errors.TypeOfIndustry && <div className="error text-red-500 mt-1">{errors.TypeOfIndustry}</div>}
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
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                        {errors.gstinNumber && <div className="error text-red-500 mt-1">{errors.gstinNumber}</div>}
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
                    {errors.statesOfOperation && <div className="error text-red-500 mt-1">{errors.statesOfOperation}</div>}
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
                         {errors.statesOfOperation && <div className="error text-red-500 mt-1">{errors.statesOfOperation}</div>}
                    </div>
                ) : (
                    <div className="mb-5">
                        <label
                            htmlFor="statesOfOperation"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            State Of Operation
                        </label>
                        <Select
                            className='text-black'
                            name="statesOfOperation"
                            options={statesOptions}
                            value={statesOptions.find(
                                (option) => option.value === formValues.statesOfOperation
                            )}
                            onChange={handleSelectChange}
                            placeholder="Select State"
                        />
                         {errors.statesOfOperation && <div className="error text-red-500 mt-1">{errors.statesOfOperation}</div>}
                    </div>
                )}
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
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                    />
                    {errors.employeeCount && <div className="error text-red-500 mt-1">{errors.employeeCount}</div>}
                </div>
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
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                            {errors.maxContractLabourEngaged && <div className="error text-red-500 mt-1">{errors.maxContractLabourEngaged}</div>}
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
                            {errors.maxContractLabourInAnyContract && <div className="error text-red-500 mt-1">{errors.maxContractLabourInAnyContract}</div>}
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
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                     {errors.numberOfContractors && <div className="error text-red-500 mt-1">{errors.numberOfContractors}</div>}
                                </div>
                                <div className="mb-5">
                                    <label
                                        htmlFor="maxContractLabourEngaged"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Maximum Number of Contract Labour Engaged in any Contractor
                                    </label>
                                    <input
                                        type="number"
                                        id="maxContractLabourEngaged"
                                        name="maxContractLabourEngaged"
                                        value={formValues.maxContractLabourEngaged}
                                        onChange={handleChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                      {errors.maxContractLabourInAnyContract && <div className="error text-red-500 mt-1">{errors.maxContractLabourInAnyContract}</div>}
                                </div>
                            </>
                        )}
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
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                    />
                    {errors.representativeName && <div className="error text-red-500 mt-1">{errors.representativeName}</div>}
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
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                    />
                    {errors.representativeDesignation && <div className="error text-red-500 mt-1">{errors.representativeDesignation}</div>}
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
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                    />
                    {errors.representativeEmail && <div className="error text-red-500 mt-1">{errors.representativeEmail}</div>}
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
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                    />
                    {errors.representativeMobile && <div className="error text-red-500 mt-1">{errors.representativeMobile}</div>}
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
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>
            </form>
            <button
                onClick={submit}
                data-modal-target="default-modal" data-modal-toggle="default-modal"
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Register new account
            </button>
            <div className="overflow-x-auto lg:p-4">
                {isModalOpen ? (
                    FilteredData.length > 0 ? (
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S. No.</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Act Name</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Compliance Frequency</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">State</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {FilteredData.map((item, key) => (
                                    <tr key={key}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{key + 1}</td>
                                        <td className="px-8 py-4 text-wrap text-sm font-medium text-gray-900">{item.actname}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.complianceFrequency}</td>
                                        <td className="px-8 py-4 text-wrap text-sm text-gray-500">{item.state}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p className="text-gray-500">No data found.</p>
                    )
                ) : null}
            </div>

        </>
    );
};

export default MyForm;
