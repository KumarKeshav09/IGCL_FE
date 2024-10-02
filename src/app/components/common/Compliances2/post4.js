import { Accordion } from "flowbite-react";

export default function CompliancesPost4() {
  return (
    <>
      {/* overview */}
      <div>
        <section className="bg-white border-b dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-6">
            <div className="">
              <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className="mb-4 text-4xl tracking-tight md:text-7xl font-bold mb-5 text-gray-800">
                  Safeguarding Women in the Workplace Under the Prevention of Sexual Harassment (POSH) Act
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-x-10">
                  <p className="mb-4 font-medium text-justify text-lg lg:text-xl">
                    POSH Compliances refers to the legal obligations outlined in
                    the Sexual Harassment of Women at Workplace (Prevention,
                    Prohibition and Redressal) Act, 2013. This legislation aims
                    to create a safe and respectful work environment for women
                    by preventing and addressing instances of sexual harassment.
                    POSH Compliances encompasses a range of measures, including
                    the establishment of Internal Complaints Committees (ICCs),
                    employee awareness and training programs, and the
                    implementation of effective grievance redressal mechanisms.
                    Adherence to POSH Compliances is crucial for organizations
                    to foster a culture of gender equality, respect, and dignity
                    in the workplace while mitigating legal risks associated
                    with sexual harassment incidents.
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
            <div className=" p-4  rounded-lg md:p-8 dark:bg-gray-800">
              <ul className="list-disc mt-8 text-gray-500 text-justify text-lg lg:text-xl">
                <li>
                  POSH (Prevention of Sexual Harassment) Compliances are
                  applicable to all workplaces, including both public and
                  private sector organizations, educational institutions, NGOs,
                  and any other place where women are employed.
                </li>
                <li>
                  The Act covers all women employees, including permanent,
                  temporary, contract, and even interns, regardless of their
                  employment status or designation.
                </li>
                <li>
                  Every organization with ten or more employees must constitute
                  an Internal Complaints Committee (ICC) to address complaints
                  of sexual harassment.
                </li>
                <li>
                  POSH Compliances apply to all forms of workplaces, including
                  offices, factories, shops, establishments, and even remote or
                  virtual work setups.
                </li>
                <li>
                  Additionally, organizations operating in multiple locations or
                  across different states must comply with state-specific rules
                  and regulations related to POSH.
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
                  "Development and implementation of comprehensive POSH policies tailored to the specific needs and requirements of the organization.",
                  "Establishment and structuring of Internal Complaints Committees (ICCs), including training committee members on their roles and responsibilities.",
                  "Conducting awareness and sensitization programs on preventing sexual harassment in the workplace for employees at all levels.",
                  "Assistance in drafting and disseminating communication materials, including posters, handbooks, and reporting mechanisms, to ensure widespread understanding of POSH policies.",
                  "Training sessions for employees to understand their rights, responsibilities, and the procedures for reporting incidents of sexual harassment.",
                  "Support in conducting impartial and thorough investigations into complaints of sexual harassment, ensuring confidentiality and adherence to due process.",
                  "Regular review and audit of POSH policies and procedures to ensure compliance with legal requirements and effectiveness in creating a safe and respectful work environment."
                ].map((text, index) => (
                  <li key={index} className="flex space-x-2 rtl:space-x-reverse items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-6 h-6 flex-shrink-0">
                      <path fill="#3f51b5" d="M13.62 7.82a1.21 1.21 0 0 0 .32-1.27 1.22 1.22 0 0 0-1-.84l-2.52-.37a.23.23 0 0 1-.18-.13L9.11 2.92a1.24 1.24 0 0 0-2.22 0L5.76 5.21a.23.23 0 0 1-.18.13l-2.52.37a1.22 1.22 0 0 0-1 .84 1.21 1.21 0 0 0 .32 1.27L4.2 9.59a.29.29 0 0 1 .07.22l-.43 2.51a1.23 1.23 0 0 0 1.79 1.3l2.26-1.18a.22.22 0 0 1 .22 0l2.26 1.18a1.18 1.18 0 0 0 .57.15 1.24 1.24 0 0 0 1.22-1.45l-.43-2.51a.26.26 0 0 1 .07-.21ZM11.1 8.88a1.24 1.24 0 0 0-.35 1.1l.43 2.51a.23.23 0 0 1-.1.23.22.22 0 0 1-.25 0l-2.25-1.17a1.27 1.27 0 0 0-1.16 0l-2.25 1.19a.22.22 0 0 1-.25 0 .23.23 0 0 1-.1-.23L5.25 10a1.24 1.24 0 0 0-.35-1.1L3.07 7.1A.25.25 0 0 1 3 6.86a.24.24 0 0 1 .2-.17l2.52-.36a1.24 1.24 0 0 0 .93-.68l1.14-2.28a.23.23 0 0 1 .42 0l1.13 2.28a1.24 1.24 0 0 0 .93.68l2.52.36a.24.24 0 0 1 .2.17.25.25 0 0 1-.06.24Z" className="color231f20 svgShape"></path>
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
                      className="border-none  text-base font-normal text-gray-500 lg:text-xl  dark:text-gray-400 bg-transparent hover:bg-transparent
                    focus:bg-transparent   focus:ring-grey-0 focus:ring-0"
                    >
                      What are the key responsibilities of an employer under the POSH Act?
                    </Accordion.Title>
                    <Accordion.Content
                      className="border-none text-base  font-normal text-gray-900 lg:text-xl dark:text-gray-400 hover:bg-transparent
                    focus:bg-transparent   focus:ring-grey-0 focus:ring-0"
                    >
                      <p className=" mb-2 text-gray-500 dark:text-gray-800 text-justify ">
                        <ul>
                          <li>Employers must establish an Internal Committee (IC) at every office or branch with 10 or more employees.</li>
                          <li>Employers should provide a safe working environment, including safety from third parties.</li>
                          <li>Regularly conduct workshops and awareness programs to sensitize employees about the provisions of the Act.</li>
                          <li>Display the consequences of sexual harassment at conspicuous places in the workplace.</li>
                          <li>Assist in the filing of a police complaint, if the complainant desires, in cases of a criminal offence.</li>
                          <li>Ensure timely submission of the annual report by the Internal Committee to the District Officer.</li>
                        </ul>
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
                      What is the composition of the Internal Committee (IC)?
                    </Accordion.Title>
                    <Accordion.Content
                      className="border-none text-base  font-normal text-gray-900 lg:text-xl dark:text-gray-400 hover:bg-transparent
                    focus:bg-transparent   focus:ring-grey-0 focus:ring-0"
                    >
                      <p className=" mb-2 text-gray-500 dark:text-gray-800 text-justify ">
                        <ul>
                          <li>The IC must include a Presiding Officer (a senior woman employee), at least two members committed to the cause of women or who have experience in social work or legal knowledge, and one external member from an NGO or an association committed to the cause of women or familiar with issues relating to sexual harassment.</li>
                          <li>At least half of the IC members should be women.</li>
                        </ul>
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
                      What is the procedure for filing a complaint under POSH?
                    </Accordion.Title>
                    <Accordion.Content
                      className="border-none text-base  font-normal text-gray-900 lg:text-xl dark:text-gray-400 hover:bg-transparent
                    focus:bg-transparent   focus:ring-grey-0 focus:ring-0"
                    >
                      <p className=" mb-2 text-gray-500 dark:text-gray-800 text-justify ">
                        <ul>
                          <li>A written complaint should be filed by the aggrieved woman within three months of the incident.</li>
                          <li>The complaint can also be filed by a legal heir or representative in case of the complainant's inability to do so.</li>
                          <li>The IC may allow a time extension if there are valid reasons.</li>
                        </ul>

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
                      Can the Internal Committee’s decision be appealed?
                    </Accordion.Title>
                    <Accordion.Content
                      className="border-none text-base  font-normal text-gray-900 lg:text-xl dark:text-gray-400 hover:bg-transparent
                    focus:bg-transparent   focus:ring-grey-0 focus:ring-0"
                    >
                      <p className=" mb-2 text-gray-500 dark:text-gray-800 text-justify ">
                        Yes, either party can appeal the decision of the IC within 90 days of the final report to the appropriate court or tribunal.
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
