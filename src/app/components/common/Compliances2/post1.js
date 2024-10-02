import { Accordion } from "flowbite-react";

export default function CompliancesPost1() {
  return (
    <>
      {/* overview */}
      <div>
        <section className="bg-white border-b dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-6">
            <div className="">
              <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className="mb-4 text-4xl tracking-tight md:text-7xl font-bold mb-5 text-gray-800">
                  Ensuring Adherence to Regulations for Shops and Commercial
                  Establishments
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
                  <p className="mb-4 font-medium text-justify text-lg lg:text-xl">
                    Shop and Establishment Compliances refer to the regulatory
                    obligations that businesses operating within commercial
                    establishments must adhere to. These regulations typically
                    cover aspects such as working hours, holidays, wages, and
                    conditions of work for employees.These compliances are established under the Shop and
                    establishment act 1958. Compliance ensures that businesses
                    operate within the legal framework set by local authorities,
                    promoting fair labor practices and workplace standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Applicability  */}

      <div>
        <section className="bg-white border-b dark:bg-gray-900">
          <div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-6 lg:px-6">
            <div className="text-center max-w-xl mx-auto">
              <h1 className="text-4xl md:text-7xl font-bold text-gray-800">
                Applicability
              </h1>
              <div className="text-center">
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
              </div>
            </div>
            <div className="rounded-lg dark:bg-gray-800">
              <ul className="list-disc text-gray-500 text-justify text-lg lg:text-xl">
                <li>
                  Shop and Establishment Compliances are applicable to various
                  commercial establishments, including shops, offices, eateries,
                  and other businesses operating within a defined jurisdiction.
                </li>
                <li>
                  The applicability varies by state or local government
                  regulations, with each region having its own set of rules and
                  requirements.
                </li>
                <li>
                  Generally, businesses employing a certain number of workers,
                  regardless of whether they are permanent, temporary, or
                  contract, are subject to these compliances.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* what to expect */}

      <div>
        <section className="bg-white border-b dark:bg-gray-900">
          <div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-6 lg:px-6">
            <div className="text-center max-w-xl mx-auto">
              <h1 className="text-4xl md:text-7xl font-bold text-gray-800">
                What to Expect
              </h1>
              <div className="text-center mb-3">
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
              </div>
            </div>
            <div className="rounded-lg dark:bg-gray-800">
              <ul role="list" className="space-y-4 mt-8 text-gray-500 dark:text-gray-400">
                {[
                  "Registration assistance for Shop and Establishment compliance with local authorities.",
                  "Guidance on maintaining records and documentation required by Shop and Establishment regulations.",
                  "Support in understanding and implementing working hour regulations, including overtime and rest intervals.",
                  "Assistance in ensuring compliance with rules regarding holidays, leave entitlements, and employee welfare measures.",
                  "Advisory services on wage calculations, minimum wages, and timely payment to employees.",
                  "Ongoing compliance monitoring and updates to ensure adherence to evolving Shop and Establishment regulations."
                ].map((text, index) => (
                  <li key={index} className="flex space-x-2 rtl:space-x-reverse items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      id="Star"
                      className="w-6 h-6 flex-shrink-0" // Ensure consistent size
                    >
                      <path
                        fill="#3f51b5"
                        d="M13.62 7.82a1.21 1.21 0 0 0 .32-1.27 1.22 1.22 0 0 0-1-.84l-2.52-.37a.23.23 0 0 1-.18-.13L9.11 2.92a1.24 1.24 0 0 0-2.22 0L5.76 5.21a.23.23 0 0 1-.18.13l-2.52.37a1.22 1.22 0 0 0-1 .84 1.21 1.21 0 0 0 .32 1.27L4.2 9.59a.29.29 0 0 1 .07.22l-.43 2.51a1.23 1.23 0 0 0 1.79 1.3l2.26-1.18a.22.22 0 0 1 .22 0l2.26 1.18a1.18 1.18 0 0 0 .57.15 1.24 1.24 0 0 0 1.22-1.45l-.43-2.51a.26.26 0 0 1 .07-.21ZM11.1 8.88a1.24 1.24 0 0 0-.35 1.1l.43 2.51a.23.23 0 0 1-.1.23.22.22 0 0 1-.25 0l-2.25-1.17a1.27 1.27 0 0 0-1.16 0l-2.25 1.19a.22.22 0 0 1-.25 0 .23.23 0 0 1-.1-.23L5.25 10a1.24 1.24 0 0 0-.35-1.1L3.07 7.1A.25.25 0 0 1 3 6.86a.24.24 0 0 1 .2-.17l2.52-.36a1.24 1.24 0 0 0 .93-.68l1.14-2.28a.23.23 0 0 1 .42 0l1.13 2.28a1.24 1.24 0 0 0 .93.68l2.52.36a.24.24 0 0 1 .2.17.25.25 0 0 1-.06.24Z"
                        className="color231f20 svgShape"
                      ></path>
                    </svg>
                    <span className="leading-tight text-justify text-lg lg:text-xl">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>


      <div>
        <section className="bg-white border-b dark:bg-gray-900">
          <div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-6 lg:px-6">
            <div className="text-center max-w-xl mx-auto">
              <h1 className="text-4xl md:text-7xl font-bold text-gray-800">
                FAQ
              </h1>
              <div className="text-center mb-6">
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
              </div>
            </div>
            <div className="rounded-lg dark:bg-gray-800">
              <Accordion
                collapseAll
                className="border-none border-gray-800"
              >
                <Accordion.Panel className=" border border-b border-gray-200">
                  <section className=" border-b border-gray-200">
                    <Accordion.Title
                      className="border-none  text-lg font-normal text-gray-500 lg:text-xl  dark:text-gray-400 bg-transparent hover:bg-transparent
                    focus:bg-transparent   focus:ring-grey-0 focus:ring-0"
                    >
                      What are the key compliance requirements under these laws?
                    </Accordion.Title>
                    <Accordion.Content
                      className="border-none text-lg  font-normal text-gray-900 lg:text-xl dark:text-gray-400 hover:bg-transparent
                    focus:bg-transparent   focus:ring-grey-0 focus:ring-0"
                    >
                      <h1 className=" mb-2 text-gray-500 dark:text-gray-800 text-justify ">
                        <ul>
                          <li><strong>Registration:</strong> Establishments must be registered with the local authorities or relevant departments.</li>
                          <li><strong>Working Hours:</strong> Adherence to prescribed working hours, overtime rules, and rest periods.</li>
                          <li><strong>Leave Policies:</strong> Compliance with statutory leave entitlements such as casual leave, sick leave, and annual leave.</li>
                          <li><strong>Wages:</strong> Payment of minimum wages, timely salary payments, and maintenance of wage records.</li>
                          <li><strong>Health and Safety:</strong> Ensuring a safe and healthy working environment, including provisions for sanitation and first aid.</li>
                        </ul>

                      </h1>
                    </Accordion.Content>
                  </section>
                </Accordion.Panel>
                <Accordion.Panel className=" border border-b border-gray-200">
                  <section className=" border-b border-gray-200">
                    <Accordion.Title
                      className="border-none  text-lg font-normal text-gray-500 lg:text-xl  dark:text-gray-400 bg-transparent hover:bg-transparent
                    focus:bg-transparent   focus:ring-grey-0 focus:ring-0"
                    >
                      How should an establishment comply with the working hours and overtime regulations?
                    </Accordion.Title>
                    <Accordion.Content
                      className="border-none text-lg  font-normal text-gray-900 lg:text-xl dark:text-gray-400 hover:bg-transparent
                    focus:bg-transparent   focus:ring-grey-0 focus:ring-0"
                    >
                      <p className=" mb-2 text-gray-500 dark:text-gray-800 text-justify ">
                        Establishments must follow state-specific regulations regarding working hours, which generally include limits on daily and weekly working hours and mandatory rest periods. Overtime regulations also require employers to compensate employees for any work beyond the standard working hours at rates specified by law. Employers should maintain accurate records of working hours and overtime.
                      </p>
                    </Accordion.Content>
                  </section>
                </Accordion.Panel>
                <Accordion.Panel className=" border border-b border-gray-200">
                  <section className=" border-b border-gray-200">
                    <Accordion.Title
                      className="border-none  text-lg font-normal text-gray-500 lg:text-xl  dark:text-gray-400 bg-transparent hover:bg-transparent
                    focus:bg-transparent   focus:ring-grey-0 focus:ring-0"
                    >
                      What are the consequences of non-compliance with Shops and Commercial Establishments laws?
                    </Accordion.Title>
                    <Accordion.Content
                      className="border-none text-lg  font-normal text-gray-900 lg:text-xl dark:text-gray-400 hover:bg-transparent
                    focus:bg-transparent   focus:ring-grey-0 focus:ring-0"
                    >
                      <p className=" mb-2 text-gray-500 dark:text-gray-800 text-justify ">
                        Non-compliance can result in various penalties, including fines, legal actions, and orders to rectify the violations. Establishments may also face inspections and audits by labor authorities, and persistent non-compliance can lead to suspension or cancellation of registration. To avoid these issues, it is important for employers to stay updated with state-specific regulations and ensure timely compliance.
                      </p>
                    </Accordion.Content>
                  </section>
                </Accordion.Panel>
                <Accordion.Panel className=" border border-b border-gray-200">
                  <section className=" border-b border-gray-200">
                    <Accordion.Title
                      className="border-none  text-lg font-normal text-gray-500 lg:text-xl  dark:text-gray-400 bg-transparent hover:bg-transparent
                    focus:bg-transparent   focus:ring-grey-0 focus:ring-0"
                    >
                      What are the mandatory holidays for employees?
                    </Accordion.Title>
                    <Accordion.Content
                      className="border-none text-lg  font-normal text-gray-900 lg:text-xl dark:text-gray-400 hover:bg-transparent
                    focus:bg-transparent   focus:ring-grey-0 focus:ring-0"
                    >
                      <p className=" mb-2 text-gray-500 dark:text-gray-800 text-justify ">
                        Employees are entitled to a weekly day off. In addition, national holidays like Republic Day, Independence Day, and Gandhi Jayanti, along with other state-specific holidays, must be provided.
                      </p>
                    </Accordion.Content>
                  </section>
                </Accordion.Panel>
              </Accordion>
            </div>
          </div>
        </section>
      </div>


    </>
  );
}
