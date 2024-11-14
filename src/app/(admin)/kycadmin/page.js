"use client";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { API_BASE_URL } from "../../../../utils/constants";
import Pagination from "@/app/components/common/pagination"; // Adjust the path if needed
import * as XLSX from "xlsx";
import { toast } from "react-toastify";

const DataDisplay = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchData, setSearchData] = useState("");
  const [page, setPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError(null);

      const token = Cookies.get("token");

      try {
        // Fetch KYC User Data Get with pagination
        const kycUserDataGetResponse = await fetch(
          `${API_BASE_URL}/kycData/kycUserDataGet?page=${page}&limit=${itemsPerPage}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        if (!kycUserDataGetResponse.ok) {
          throw new Error("Error fetching KYC User Data Get");
        }
        const kycUserDataGetResult = await kycUserDataGetResponse.json();
        const userMap = new Map(
          kycUserDataGetResult.data.map((user) => [user._id, user])
        );

        // Fetch KYC Data Get with pagination
        const kycDataGetResponse = await fetch(
          `${API_BASE_URL}/kycData/kycDataGet?page=${page}&limit=${itemsPerPage}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        if (!kycDataGetResponse.ok) {
          throw new Error("Error fetching KYC Data Get");
        }
        const kycDataGetResult = await kycDataGetResponse.json();

        // Create a map of KYC data by user ID for easy lookup
        const kycDataMap = new Map(
          kycDataGetResult.data.map((item) => [item.CreatedBy?._id, item])
        );

        // Process and compare data
        const mergedData = Array.from(userMap.values()).map((user) => {
          const kycData = kycDataMap.get(user._id);
          return {
            ...user,
            ExistsInUserData: kycData ? "Yes" : "No",
          };
        });

        setData(mergedData);
      } catch (error) {
        setError(error.message);
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [page]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const fetchData = async () => {
    setLoading(true);

    try {
      // Prepare the export data from mergedData, which contains the data already fetched
      const exportData = data.map((item) => ({
        Name: item.Name,
        Email: item.EmailId,
        Mobile: item.Mobile,
        KYC_Form_Filled: item.ExistsInUserData, // or any other field you want to include
      }));

      // Create a worksheet from the export data
      const ws = XLSX.utils.json_to_sheet(exportData);

      // Create a workbook and append the worksheet
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "KYC Data");

      // Write the Excel file
      const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });

      // Create a Blob and trigger the download
      const blob = new Blob([excelBuffer], {
        type: "application/octet-stream",
      });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "kyc_data.xlsx"; // Name of the downloaded file
      link.click();
    } catch (error) {
      console.error("Error exporting data:", error);
      toast.error("An error occurred while downloading the file");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl text-black underline mb-3 font-bold">
        KYC Forms
      </h1>
      <div className="flex justify-end">
        <button
          onClick={fetchData}
          className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          disabled={loading}
        >
          {loading ? "Loading..." : "Download Excel"}
        </button>
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              S. No.
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Mobile
            </th>
            <th scope="col" className="px-6 py-3">
              KYC Forms
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {loading ? (
            <tr>
              <td colSpan="5" className="text-center py-4">
                <div role="status" className="flex justify-center items-center">
                  <svg
                    aria-hidden="true"
                    className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              </td>
            </tr>
          ) : (
            data.map((item, index) => (
              <tr
                key={item._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {index + 1} {/* Adjust field name if needed */}
                </td>
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.Name}
                </td>
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.EmailId}
                </td>
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.Mobile}
                </td>
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.ExistsInUserData}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <Pagination data={data} pageNo={handlePageChange} pageVal={page} />
    </div>
  );
};

export default DataDisplay;
