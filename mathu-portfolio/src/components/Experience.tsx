import React from "react";

const Experience: React.FC = () => {
  const experienceData = [
    {
      id: 1,
      company: "Speed Code Labs",
      roles: [
        {
          title: "Associate UI/UX Engineer",
          period: "Aug 2024 – Present",
          type: "current",
        },
        {
          title: "Intern UI/UX Engineer",
          period: "Dec 2023 – Jul 2024",
          type: "previous",
        },
      ],
      projects: [
        {
          name: "E-Learning Management System",
          role: " Frontend Developer",
          description:
            "Designed and implemented user-centered learning platform with secure media streaming, JWT authentication, and optimized API performance. Focused on creating intuitive user flows for educators and students.",
          technologies: ["React", "JWT", "API Integration", "Media Streaming"],
          image: "/images/projects/e-learning-system.jpg",
        },
        {
          name: "Food Order System",
          role: "UI/UX Designer & Frontend Developer",
          description:
            "Led UI/UX design and development of a responsive food ordering platform with Redux Toolkit, state persistence, and seamless ordering flow. Designed user-friendly interface for both customers and restaurant staff.",
          technologies: [
            "React",
            "Redux Toolkit",
            "UI/UX Design",
            "State Management",
            "Responsive Design",
          ],
          image: "/images/projects/food-order-system.jpg",
        },
        {
          name: "HR Management System",
          role: "Frontend Developer",
          description:
            "Created comprehensive HR management interface using PrimeReact components with focus on data visualization and user experience. Designed intuitive dashboards for HR professionals.",
          technologies: ["PrimeReact", "Data Visualization", "Interactive UI"],
          image: "/images/projects/hr-management-system.jpg",
        },
        {
          name: "E-Commerce Web App",
          role: "UI/UX Designer & Frontend Developer",
          description:
            "Designed and developed scalable e-commerce platform with Redux Toolkit and Tailwind CSS. Created user-centered shopping experience with modern design principles and accessibility in mind.",
          technologies: [
            "Redux Toolkit",
            "Tailwind CSS",
            "Scalable Architecture",
            "E-Commerce",
            "UI/UX Design",
          ],
          image: "/images/projects/ecommerce-web-app.jpg",
        },
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="container-max-width section-padding">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full"></div>
          </div>

          {experienceData.map((company, companyIndex) => (
            <div key={company.id} className="mb-16">
              {/* Company Header */}
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4 hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {company.company}
                  </h3>
                  <p className="text-gray-400">Software Development Company</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {company.roles.map((role, roleIndex) => (
                  <div
                    key={role.title}
                    className={`p-6 rounded-lg border hover-lift transition-all duration-300 ${
                      role.type === "current"
                        ? "bg-blue-600/10 border-blue-500"
                        : "bg-gray-700 border-gray-600"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold text-white">
                        {role.title}
                      </h4>
                      {role.type === "current" && (
                        <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400">{role.period}</p>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="text-xl font-semibold text-white mb-6">
                  Key Projects
                </h4>
                <div className="grid lg:grid-cols-2 gap-6">
                  {company.projects.map((project, projectIndex) => (
                    <div
                      key={project.name}
                      className="bg-gray-700 rounded-lg border border-gray-600 hover:border-blue-500 transition-all duration-300 hover-lift overflow-hidden"
                    >
                      <div className="h-48 bg-gray-600 overflow-hidden">
                        <img
                          src={project.image}
                          alt={`${project.name} - UI/UX Design`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            // Fallback to gradient background if image not found
                            const target = e.target as HTMLImageElement;
                            target.style.display = "none";
                            const parent = target.parentElement;
                            if (parent) {
                              parent.innerHTML =
                                '<div class="w-full h-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center"><div class="text-center text-white"><svg class="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg><p class="text-sm font-medium">UI/UX Design</p></div></div>';
                            }
                          }}
                        />
                      </div>

                      <div className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <h5 className="text-lg font-semibold text-white">
                            {project.name}
                          </h5>
                          <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded-full">
                            {project.role}
                          </span>
                        </div>

                        <p className="text-gray-300 mb-4 leading-relaxed">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-gray-600 text-gray-300 text-sm rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
