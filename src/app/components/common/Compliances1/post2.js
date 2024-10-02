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
                  Ensuring financial security for your workforce under EPF
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
                  <p className=" font-medium text-justify text-lg lg:text-xl">
                    The Employees' Provident Fund provides social security
                    benefits to Employees of establishments on which the
                    Employees’ Provident Fund and Miscellaneous Provisions Act
                    1952 applies.The Act mainly provides Retirement or old age benefits such
                    as Provident fund, Superannuation fund, Family Pension, and
                    Deposit Linked Insurance.
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
              <div className="text-center mb-3">
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
              </div>
            </div>
            <div className=" p-4  rounded-lg md:p-4 dark:bg-gray-800">
              <ul className="list-disc text-gray-500 text-justify text-lg lg:text-xl">
                <li>
                  The EPF scheme mandatorily applies to all establishments that
                  have employed a minimum of 20 people.
                </li>
                <li className="mt-2">
                  Establishments with less than 20 employees can also opt for
                  voluntary registration. All the employees of such an
                  establishment will be eligible for EPF right from the
                  beginning of their employment.
                </li>
                <li>
                  For every employee whose wages (Basic + DA) are less than INR
                  15000.
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
              <div className="text-center mb-6">
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
              </div>
            </div>
            <div className="rounded-lg dark:bg-gray-800">
              <ul role="list" className="space-y-4 text-gray-500 dark:text-gray-400">
                {[
                  "Registration of Firm Under Employee Provident Fund Act (EPF) (Year)",
                  "Generate Monthly Contribution ECR and PF Return Filing",
                  "Registration of New Joiners Under the Establishment Code",
                  "Updating the KYC of Employees",
                  "Provide Consultancy regarding EPF.",
                  "Provide support in online PF Transfers and Withdrawal Claims",
                  "Provide support in E- Nomination under EPF",
                ].map((text, index) => (
                  <li key={index} className="flex space-x-2 rtl:space-x-reverse items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      className="w-6 h-6 flex-shrink-0" // Apply the class here
                    >
                      <path
                        fill="#3f51b5"
                        d="M13.62 7.82a1.21 1.21 0 0 0 .32-1.27 1.22 1.22 0 0 0-1-.84l-2.52-.37a.23.23 0 0 1-.18-.13L9.11 2.92a1.24 1.24 0 0 0-2.22 0L5.76 5.21a.23.23 0 0 1-.18.13l-2.52.37a1.22 1.22 0 0 0-1 .84 1.21 1.21 0 0 0 .32 1.27L4.2 9.59a.29.29 0 0 1 .07.22l-.43 2.51a1.23 1.23 0 0 0 1.79 1.3l2.26-1.18a.22.22 0 0 1 .22 0l2.26 1.18a1.18 1.18 0 0 0 .57.15 1.24 1.24 0 0 0 1.22-1.45l-.43-2.51a.26.26 0 0 1 .07-.21ZM11.1 8.88a1.24 1.24 0 0 0-.35 1.1l.43 2.51a.23.23 0 0 1-.1.23.22.22 0 0 1-.25 0l-2.25-1.17a1.27 1.27 0 0 0-1.16 0l-2.25 1.19a.22.22 0 0 1-.25 0 .23.23 0 0 1-.1-.23L5.25 10a1.24 1.24 0 0 0-.35-1.1L3.07 7.1A.25.25 0 0 1 3 6.86a.24.24 0 0 1 .2-.17l2.52-.36a1.24 1.24 0 0 0 .93-.68l1.14-2.28a.23.23 0 0 1 .42 0l1.13 2.28a1.24 1.24 0 0 0 .93.68l2.52.36a.24.24 0 0 1 .2.17.25.25 0 0 1-.06.24Z"
                      ></path>
                    </svg>
                    <span className="leading-tight text-justify text-lg lg:text-xl">
                      {text}
                    </span>
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
                      What are the contributions payable by the employer and employee?
                    </Accordion.Title>
                    <Accordion.Content
                      className="border-none text-base  font-normal text-gray-900 lg:text-xl dark:text-gray-400 hover:bg-transparent
                    focus:bg-transparent   focus:ring-grey-0 focus:ring-0"
                    >
                      <p className=" mb-2 text-gray-500 dark:text-gray-800 text-justify ">
                        The contributions payable by the employer and the employee under the scheme are 12% of PF wages. From the employer’s share of contribution, 8.33% is contributed towards the Employees’ Pension Scheme and the remaining 3.67% is contributed to the EPF Scheme. Employer’s contribution towards Employees’ Deposit-linked Insurance Scheme is 0.50% and the administrative charges are 0.50%.
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
                      Can an employee opt out of the Schemes under the EPF Act?
                    </Accordion.Title>
                    <Accordion.Content
                      className="border-none text-base  font-normal text-gray-900 lg:text-xl dark:text-gray-400 hover:bg-transparent
                    focus:bg-transparent   focus:ring-grey-0 focus:ring-0"
                    >
                      <p className=" mb-2 text-gray-500 dark:text-gray-800 text-justify ">
                        An employee with a basic salary of over Rs. 15,000 and who has never been a member of EPF can opt out of the scheme. But once they become a member, they cannot opt out of the scheme.
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
                      Is EPF deducted on the stipend?
                    </Accordion.Title>
                    <Accordion.Content
                      className="border-none text-base  font-normal text-gray-900 lg:text-xl dark:text-gray-400 hover:bg-transparent
                    focus:bg-transparent   focus:ring-grey-0 focus:ring-0"
                    >
                      <p className=" mb-2 text-gray-500 dark:text-gray-800 text-justify ">
                        A trainee or an intern is not an employee by the definition of the Act and the schemes defined under the Act. EPF is not deducted from the stipend earned by a trainee or an intern subject to the condition that such trainees are covered under either the Apprenticeship Act or Industrial Employment (standing orders) Act or the interns are engaged through recognized institutions undergoing on-job training as part of their curriculum.
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
                      How can a member access his/her details through the portal?
                    </Accordion.Title>
                    <Accordion.Content
                      className="border-none text-base  font-normal text-gray-900 lg:text-xl dark:text-gray-400 hover:bg-transparent
                    focus:bg-transparent   focus:ring-grey-0 focus:ring-0"
                    >
                      <p className=" mb-2 text-gray-500 dark:text-gray-800 text-justify ">
                        Members need to visit the UAN-based Member Portal website. Initially, the member will have to activate his/her UAN by selecting a link given ‘Activate your UAN’ on the UAN Member Portal. Member should have UAN, Mobile and Member ID readily available to activate his/her UAN on the UAN Member Portal.
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
