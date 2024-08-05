"use client";

import { useCallback, useState } from "react";
import Styles from "./login.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { API_BASE_URL } from "../../../../utils/constants";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; 


export default function Login() {
  const router = useRouter();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handleEmail = useCallback((value) => {
    setEmail(() => value.target.value);
  }, []);
  const handlePassword = useCallback((value) => {
    setPassword(() => value.target.value);
  }, []);
  const login = async () => {
    if (Email === "") {
      toast.error("Email cannot be empty");
      return false;
    }

    if (Password.length < 5) {
      toast.error("Password must be at least 5 characters long");
      return false;
    }

    const data = {
      EmailId: Email,
      Password,
    };
    const res = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const resData = await res.json();
    if (resData?.success == true) {
      toast.success(resData?.message);
      router.push("/testimonials");
    } else {
      toast.error(resData?.error);
      return;
    }
  };
  return (
    <>
      <section
        className={` ${Styles.loginMain} bg-gray-50 dark:bg-gray-900 h-100`}
      >
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div
            className={`${Styles.loginBoxMain} bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700`}
          >
            <a
              href="#"
              className={` ${Styles.mt7} flex justify-center text-2xl font-semibold text-gray-900 dark:text-white`}
            >
              <img
                className="w-24 h-20 mr-2"
                src="../../../../images/logo.png"
                alt="logo"
              />
            </a>
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6">
                <div>
                  <label
                    htmlFor="Email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    value={Email}
                    onChange={handleEmail}
                    id="phone"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    required
                    placeholder="Email"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    value={Password}
                    onChange={handlePassword}
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Link
                    href="/forgetPassword"
                    className="text-sm font-medium text-black text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </Link>
                </div>
                <button
                  onClick={login}
                  type="button"
                  className={`${Styles.signInBtn} w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800`}
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
