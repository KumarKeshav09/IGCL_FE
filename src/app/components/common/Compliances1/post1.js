export default function CompliancesPost1() {
  return (
    <>
      {/* overview */}
      <div>
        <section className="bg-white border-b dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="grid grid-cols-7 md:grid-cols-7 gap-1">
              <div className="col-span-1">
                <p className="hidden md:block text-blue-900 font-bold">
                  Overview
                </p>
              </div>
              <div className="col-span-6 max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
                  Streamlined Solutions for Efficient Payroll Processing
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
                  <p className="mb-4 font-medium">
                    Our payroll management services streamline the complexities
                    of managing employee compensation, ensuring accuracy,
                    compliance, and efficiency. From salary calculation to tax
                    withholding and reporting, we handle all aspects of payroll
                    administration, allowing you to focus on your core business
                    activities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* what to expect */}

      <div>
        <section className="bg-white border-b dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="text-center max-w-xl mx-auto">
              <h1 className="text-4xl md:text-7xl font-bold mb-5 text-gray-800">
                What to Expect
              </h1>
              <h3 className="text-xl mb-5 font-light text-gray-800">
                Empowering clients with innovative solutions and unparalleled
                support.
              </h3>
              <div className="text-center mb-10">
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
              </div>
            </div>
            <div className=" p-4  rounded-lg md:p-8 dark:bg-gray-800">
              <p className="mb-3 text-gray-500 dark:text-gray-400">
                Partner with us for reliable and comprehensive payroll
                management solutions tailored to your business needs. Focus on
                growing your business while we handle the complexities of
                payroll administration with precision and professionalism.
              </p>

              <ul
                role="list"
                className="space-y-4 mt-8 text-gray-500 dark:text-gray-400"
              >
                <li className="flex space-x-2 rtl:space-x-reverse items-center">
                  <svg
                    className="w-3.5 h-3.5 me-2 text-green-400 dark:text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  <span className="leading-tight">Save Time and Resources</span>
                </li>
                <li className="flex space-x-2 rtl:space-x-reverse items-center">
                  <svg
                    className="w-3.5 h-3.5 me-2 text-green-400 dark:text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  <span className="leading-tight">Ensure Accuracy</span>
                </li>
                <li className="flex space-x-2 rtl:space-x-reverse items-center">
                  <svg
                    className="w-3.5 h-3.5 me-2 text-green-400 dark:text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  <span className="leading-tight">Stay Compliant</span>
                </li>
                <li className="flex space-x-2 rtl:space-x-reverse items-center">
                  <svg
                    className="w-3.5 h-3.5 me-2 text-green-400 dark:text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  <span className="leading-tight">
                    Enhance Employee Satisfaction
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
