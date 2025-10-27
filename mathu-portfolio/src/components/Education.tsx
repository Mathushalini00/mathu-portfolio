import React from "react";

const Education: React.FC = () => {
  const educationData = [
    {
      id: 1,
      degree: "BSc (Hons) in Software Engineering",
      institution: "The Open University of Sri Lanka",
      period: "2022 – Present",
      description:
        "Pursuing advanced studies in software engineering with focus on modern development practices, system design, and software architecture.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l9-5-9-5-9 5 9 5z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="container-max-width section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              My <span className="gradient-text">Education</span>
            </h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-700"></div>

            {educationData.map((item, index) => (
              <div key={item?.id} className="relative flex items-start mb-12">
                <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full hover:scale-110 transition-transform duration-300">
                  <div className="text-white">{item?.icon}</div>
                </div>

                <div className="ml-8 flex-1">
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 hover-lift">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h3 className="text-xl font-bold text-white mb-2 sm:mb-0">
                        {item?.degree}
                      </h3>
                      <span className="text-blue-400 font-medium text-sm">
                        {item?.period}
                      </span>
                    </div>

                    <h4 className="text-lg text-gray-300 mb-3 font-medium">
                      {item?.institution}
                    </h4>

                    <p className="text-gray-400 leading-relaxed">
                      {item?.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 hover-lift">
              <h3 className="text-lg font-semibold text-white mb-2">
                Continuous Learning
              </h3>
              <p className="text-gray-400">
                Committed to staying updated with the latest technologies and
                industry best practices through continuous learning and
                professional development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
