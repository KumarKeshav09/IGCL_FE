import { Inter } from "next/font/google";
// import "../globals.css";
import Sidebar from "../components/common/sidebar/sidebar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Admin IGCL",
  description: "IGCL",
};

export default function RootLayout({ children }) {
  return (
    <>
    <link href="https://cdn.jsdelivr.net/npm/flowbite@2.4.1/dist/flowbite.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
    <script src="https://cdn.jsdelivr.net/npm/flowbite@2.4.1/dist/flowbite.min.js"></script>
        <Sidebar children={children} />
        {/* <ToastContainer autoClose={2000} closeOnClick/> */}
        </>
       
  );
}