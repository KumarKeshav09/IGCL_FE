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
                  Prioritizing Safety and Compliance in Factory Environments
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
                  <p className="mb-4 font-medium text-justify text-lg lg:text-xl">
                    Factories Compliances encompass the regulatory requirements
                    that govern the establishment, operation, and management of
                    factories in India. These compliances are established under
                    the Factory Act of 1948 and its subsequent amendments,
                    aiming to ensure the safety, health, and welfare of workers
                    employed in industrial settings.They cover various aspects such as working hours, employment
                    conditions, safety measures, welfare amenities, and
                    environmental regulations. Adherence to factory compliances
                    is essential for factory owners to maintain legal
                    compliance, uphold workplace standards, and safeguard the
                    well-being of their employees.
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
            <div className=" rounded-lg dark:bg-gray-800">
              <ul className="list-disc mt-8 text-gray-500 text-justify text-lg lg:text-xl">
                <li>
                  Factory compliances are applicable to all establishments
                  categorized as factories under the Factory Act of 1948 and its
                  relevant state-specific amendments.
                </li>
                <li>
                  The applicability extends to any premises where ten or more
                  workers are engaged in manufacturing processes with the aid of
                  power, or where twenty or more workers are engaged in
                  manufacturing processes without the aid of power, on any day
                  of the preceding twelve months.
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
                  "Comprehensive assistance in understanding and complying with the provisions of the Factory Act of 1948 and relevant state-specific regulations.",
                  "Guidance on factory registration and obtaining necessary licenses and permits from regulatory authorities.",
                  "Support in establishing and implementing safety measures, including risk assessments, safety training, and emergency preparedness plans.",
                  "Assistance in maintaining records and documentation required by factory regulations, including registers, inspection reports, and accident records.",
                  "Advisory services on employment conditions, working hours, leave entitlements, and welfare amenities for factory workers.",
                  "Ongoing compliance monitoring, audits, and updates to ensure adherence to evolving factory regulations and standards.",
                ].map((item, index) => (
                  <li key={index} className="flex space-x-2 rtl:space-x-reverse items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-6 h-6 flex-shrink-0">
                      <path fill="#3f51b5" d="M13.62 7.82a1.21 1.21 0 0 0 .32-1.27 1.22 1.22 0 0 0-1-.84l-2.52-.37a.23.23 0 0 1-.18-.13L9.11 2.92a1.24 1.24 0 0 0-2.22 0L5.76 5.21a.23.23 0 0 1-.18.13l-2.52.37a1.22 1.22 0 0 0-1 .84 1.21 1.21 0 0 0 .32 1.27L4.2 9.59a.29.29 0 0 1 .07.22l-.43 2.51a1.23 1.23 0 0 0 1.79 1.3l2.26-1.18a.22.22 0 0 1 .22 0l2.26 1.18a1.18 1.18 0 0 0 .57.15 1.24 1.24 0 0 0 1.22-1.45l-.43-2.51a.26.26 0 0 1 .07-.21ZM11.1 8.88a1.24 1.24 0 0 0-.35 1.1l.43 2.51a.23.23 0 0 1-.1.23.22.22 0 0 1-.25 0l-2.25-1.17a1.27 1.27 0 0 0-1.16 0l-2.25 1.19a.22.22 0 0 1-.25 0 .23.23 0 0 1-.1-.23L5.25 10a1.24 1.24 0 0 0-.35-1.1L3.07 7.1A.25.25 0 0 1 3 6.86a.24.24 0 0 1 .2-.17l2.52-.36a1.24 1.24 0 0 0 .93-.68l1.14-2.28a.23.23 0 0 1 .42 0l1.13 2.28a1.24 1.24 0 0 0 .93.68l2.52.36a.24.24 0 0 1 .2.17.25.25 0 0 1-.06.24Z" />
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
                      What are the key compliances under the Factories Act?
                    </Accordion.Title>
                    <Accordion.Content
                      className="border-none text-base  font-normal text-gray-900 lg:text-xl dark:text-gray-400 hover:bg-transparent
                    focus:bg-transparent   focus:ring-grey-0 focus:ring-0"
                    >
                      <p className=" mb-2 text-gray-500 dark:text-gray-800 text-justify ">
                        <ul>
                          <li><strong>Health Measures:</strong> Ensure cleanliness, proper ventilation, lighting, and the disposal of waste.</li>
                          <li><strong>Safety Measures:</strong> Includes the maintenance of machinery, precautions in case of fire, safety training for workers, and more.</li>
                          <li><strong>Welfare Measures:</strong> Provision of facilities like canteens, restrooms, first-aid appliances, and crèches for children of workers.</li>
                          <li><strong>Working Hours: </strong> Restrictions on working hours, weekly holidays, and intervals for rest. Special provisions for women and young persons.</li>
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
                      What are the penalties for non-compliance with the Factories Act?
                    </Accordion.Title>
                    <Accordion.Content
                      className="border-none text-base  font-normal text-gray-900 lg:text-xl dark:text-gray-400 hover:bg-transparent
                    focus:bg-transparent   focus:ring-grey-0 focus:ring-0"
                    >
                      <p className=" mb-2 text-gray-500 dark:text-gray-800 text-justify ">
                        Penalties can range from fines to imprisonment depending on the severity of the non-compliance. Repeated violations can lead to higher penalties, including the cancellation of factory licenses.
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
                      How often should factories file annual returns?
                    </Accordion.Title>
                    <Accordion.Content
                      className="border-none text-base  font-normal text-gray-900 lg:text-xl dark:text-gray-400 hover:bg-transparent
                    focus:bg-transparent   focus:ring-grey-0 focus:ring-0"
                    >
                      <p className=" mb-2 text-gray-500 dark:text-gray-800 text-justify ">
                        Factories are required to file annual returns by 31 January, at the end of the Calendar year. The return includes details on the number of workers employed, man-days worked, wages paid, accidents, and other related information.
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
                      What are the procedures for handling industrial accidents?
                    </Accordion.Title>
                    <Accordion.Content
                      className="border-none text-base  font-normal text-gray-900 lg:text-xl dark:text-gray-400 hover:bg-transparent
                    focus:bg-transparent   focus:ring-grey-0 focus:ring-0"
                    >
                      <p className=" mb-2 text-gray-500 dark:text-gray-800 text-justify ">
                        <ul>
                          <li><strong>Immediate Reporting:</strong> Any fatal or serious accident must be reported to the nearest inspector and local authorities immediately.</li>
                          <li><strong>Accident Register:</strong> Factories must maintain an accident register detailing the nature and cause of accidents, injuries, and actions taken.</li>
                          <li><strong>Compensation:</strong> Injured workers or their families are entitled to compensation under the Employees' Compensation Act.</li>
                        </ul>

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
