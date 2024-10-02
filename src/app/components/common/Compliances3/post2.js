import { Accordion } from "flowbite-react";

export default function CompliancesPost2() {
  return (
    <>
      {/* overview */}
      <div>
        <section className="bg-white border-b dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-6">
            <div className="">
              <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className="mb-4 text-4xl tracking-tight md:text-7xl font-bold mb-5 text-gray-800">
                  Assessing employee efficiencyThrough Comprehensive HR Audits
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
                  <p className="mb-4 font-medium text-justify text-lg lg:text-xl">
                    HR Audit is a systematic assessment of an organization's
                    human resources function to evaluate its effectiveness,
                    compliance, and alignment with business objectives. This
                    process involves a comprehensive review of HR policies,
                    procedures, practices, and systems to identify strengths,
                    weaknesses, and areas for improvement.By conducting an HR Audit, organizations can ensure legal
                    compliance, optimize HR processes, enhance employee
                    satisfaction, and align HR strategies with overall business
                    goals.
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
                  "A comprehensive review of HR policies, procedures, and practices to assess alignment with legal requirements and industry best practices.",
                  "Analysis of compensation and benefits structures to assess competitiveness, equity, and compliance with statutory regulations.",
                  "Examination of employee relations practices, including grievance handling procedures and disciplinary processes, to ensure fairness and compliance with labor laws.",
                  "Evaluation of HR data management systems and practices to assess accuracy, security, and compliance with data protection regulations.",
                  "Identification of gaps, risks, and opportunities for improvement in HR practices and recommendations for corrective action.",
                  "Provision of actionable insights, benchmarks, and best practices to support HR strategy development and implementation.",
                  "Ongoing support and guidance throughout the audit process, including assistance with implementation of recommendations and monitoring of progress."
                ].map((item, index) => (
                  <li key={index} className="flex space-x-2 rtl:space-x-reverse items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      className="w-6 h-6 flex-shrink-0" // Ensure consistent size here
                    >
                      <path
                        fill="#3f51b5"
                        d="M13.62 7.82a1.21 1.21 0 0 0 .32-1.27 1.22 1.22 0 0 0-1-.84l-2.52-.37a.23.23 0 0 1-.18-.13L9.11 2.92a1.24 1.24 0 0 0-2.22 0L5.76 5.21a.23.23 0 0 1-.18.13l-2.52.37a1.22 1.22 0 0 0-1 .84 1.21 1.21 0 0 0 .32 1.27L4.2 9.59a.29.29 0 0 1 .07.22l-.43 2.51a1.23 1.23 0 0 0 1.79 1.3l2.26-1.18a.22.22 0 0 1 .22 0l2.26 1.18a1.18 1.18 0 0 0 .57.15 1.24 1.24 0 0 0 1.22-1.45l-.43-2.51a.26.26 0 0 1 .07-.21ZM11.1 8.88a1.24 1.24 0 0 0-.35 1.1l.43 2.51a.23.23 0 0 1-.1.23.22.22 0 0 1-.25 0l-2.25-1.17a1.27 1.27 0 0 0-1.16 0l-2.25 1.19a.22.22 0 0 1-.25 0 .23.23 0 0 1-.1-.23L5.25 10a1.24 1.24 0 0 0-.35-1.1L3.07 7.1A.25.25 0 0 1 3 6.86a.24.24 0 0 1 .2-.17l2.52-.36a1.24 1.24 0 0 0 .93-.68l1.14-2.28a.23.23 0 0 1 .42 0l1.13 2.28a1.24 1.24 0 0 0 .93.68l2.52.36a.24.24 0 0 1 .2.17.25.25 0 0 1-.06.24Z"
                      ></path>
                    </svg>
                    <span className="leading-tight text-justify text-lg lg:text-xl">{item}</span>
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
                      className="border-none  text-base font-normal text-gray-500 lg:text-xl  dark:text-gray-400 bg-transparent hover:bg-transparent
                    focus:bg-transparent   focus:ring-grey-0 focus:ring-0"
                    >
                      Why should employers invest in an HR audit?
                    </Accordion.Title>
                    <Accordion.Content
                      className="border-none text-base  font-normal text-gray-900 lg:text-xl dark:text-gray-400 hover:bg-transparent
                    focus:bg-transparent   focus:ring-grey-0 focus:ring-0"
                    >
                      <p className=" mb-2 text-gray-500 dark:text-gray-800 text-justify ">
                        Employers invest in HR audits to ensure compliance with labor laws, reduce legal risks, improve HR practices, and enhance overall organizational efficiency.
                      </p>
                    </Accordion.Content>
                  </section>
                </Accordion.Panel>
                <Accordion.Panel className=" border border-b border-gray-200">
                  <section className=" border-b border-gray-200">
                    <Accordion.Title
                      className="border-none  text-base font-normal text-gray-500 lg:text-xl  dark:text-gray-400 bg-transparent hover:bg-transparent
                    focus:bg-transparent   focus:ring-grey-0 focus:ring-0"
                    >
                      What are the key benefits of an HR audit?
                    </Accordion.Title>
                    <Accordion.Content
                      className="border-none text-base  font-normal text-gray-900 lg:text-xl dark:text-gray-400 hover:bg-transparent
                    focus:bg-transparent   focus:ring-grey-0 focus:ring-0"
                    >
                      <p className=" mb-2 text-gray-500 dark:text-gray-800 text-justify ">
                        Key benefits include identifying compliance gaps, mitigating legal risks, optimizing HR processes, enhancing employee satisfaction, and aligning HR practices with organizational goals.
                      </p>
                    </Accordion.Content>
                  </section>
                </Accordion.Panel>
                <Accordion.Panel className=" border border-b border-gray-200">
                  <section className=" border-b border-gray-200">
                    <Accordion.Title
                      className="border-none  text-base font-normal text-gray-500 lg:text-xl  dark:text-gray-400 bg-transparent hover:bg-transparent
                    focus:bg-transparent   focus:ring-grey-0 focus:ring-0"
                    >
                      What areas are typically reviewed during an HR audit?
                    </Accordion.Title>
                    <Accordion.Content
                      className="border-none text-base  font-normal text-gray-900 lg:text-xl dark:text-gray-400 hover:bg-transparent
                    focus:bg-transparent   focus:ring-grey-0 focus:ring-0"
                    >
                      <p className=" mb-2 text-gray-500 dark:text-gray-800 text-justify ">
                        Areas often reviewed include recruitment and hiring practices, employee records, compensation and benefits, compliance with labor laws, performance management, and employee relations.
                      </p>
                    </Accordion.Content>
                  </section>
                </Accordion.Panel>
                <Accordion.Panel className=" border border-b border-gray-200">
                  <section className=" border-b border-gray-200">
                    <Accordion.Title
                      className="border-none  text-base font-normal text-gray-500 lg:text-xl  dark:text-gray-400 bg-transparent hover:bg-transparent
                    focus:bg-transparent   focus:ring-grey-0 focus:ring-0"
                    >
                      Can an HR audit help with compliance issues?
                    </Accordion.Title>
                    <Accordion.Content
                      className="border-none text-base  font-normal text-gray-900 lg:text-xl dark:text-gray-400 hover:bg-transparent
                    focus:bg-transparent   focus:ring-grey-0 focus:ring-0"
                    >
                      <p className=" mb-2 text-gray-500 dark:text-gray-800 text-justify ">
                        Yes, an HR audit helps identify and address compliance issues, ensuring that the organization adheres to legal and regulatory requirements, thereby reducing the risk of legal disputes and penalties.
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
