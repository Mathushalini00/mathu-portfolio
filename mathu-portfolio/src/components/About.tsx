import React from "react";
const About: React.FC = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mathushalini-vasanthakumar",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      url: "https://github.com/Mathushalini00",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: "Dribbble",
      url: "https://dribbble.com/MATHU_2000",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm6.568 5.302c1.516 1.938 2.432 4.35 2.432 7.098 0 .338-.021.672-.059 1.002-2.746-.438-5.18-1.227-7.169-2.236-.438-2.059-.959-4.106-1.564-6.127 2.746-.438 5.18-1.227 7.169-2.236.438 2.059.959 4.106 1.564 6.127zm-13.136 0c1.516-1.938 2.432-4.35 2.432-7.098 0-.338-.021-.672-.059-1.002 2.746.438 5.18 1.227 7.169 2.236.438 2.059.959 4.106 1.564 6.127-2.746.438-5.18 1.227-7.169 2.236-.438-2.059-.959-4.106-1.564-6.127zm13.136 13.396c-1.516 1.938-2.432 4.35-2.432 7.098 0 .338.021.672.059 1.002-2.746-.438-5.18-1.227-7.169-2.236-.438-2.059-.959-4.106-1.564-6.127 2.746-.438 5.18-1.227 7.169-2.236.438 2.059.959 4.106 1.564 6.127z" />
        </svg>
      ),
    },
    {
      name: "Behance",
      url: "https://www.behance.net/mathushalini",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.688 2.474-5.68 5.466-5.68 3.018 0 4.964 1.977 4.964 5.205 0 2.395-1.183 3.63-2.767 3.63-.576 0-1.024-.439-1.024-1.024 0-.576.448-1.024 1.024-1.024.576 0 1.024.448 1.024 1.024 0 .576-.448 1.024-1.024 1.024zm-7.688-1.024c0 1.024.448 1.024 1.024 1.024.576 0 1.024-.448 1.024-1.024 0-.576-.448-1.024-1.024-1.024-.576 0-1.024.448-1.024 1.024zm-1.024-1.024c-.576 0-1.024.448-1.024 1.024 0 .576.448 1.024 1.024 1.024.576 0 1.024-.448 1.024-1.024 0-.576-.448-1.024-1.024-1.024zm-1.024-1.024c0 1.024.448 1.024 1.024 1.024.576 0 1.024-.448 1.024-1.024 0-.576-.448-1.024-1.024-1.024-.576 0-1.024.448-1.024 1.024zm-1.024-1.024c-.576 0-1.024.448-1.024 1.024 0 .576.448 1.024 1.024 1.024.576 0 1.024-.448 1.024-1.024 0-.576-.448-1.024-1.024-1.024z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container-max-width section-padding">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              About <span className="gradient-text-purple">Me</span>
            </h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full flex items-center justify-center overflow-hidden">
                  <div className="w-72 h-72 bg-gray-700 rounded-full flex items-center justify-center overflow-hidden">
                    {/* Profile Image Placeholder - Replace with your actual image */}
                    <img
                      src="/images/profile-photo.jpg"
                      alt="Mathushalini Vasanthakumar - UI/UX Engineer"
                      className="w-full h-full object-cover rounded-full"
                      onError={(e) => {
                        // Fallback to initials if image not found
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML =
                            '<div class="w-64 h-64 bg-gray-600 rounded-full flex items-center justify-center"><span class="text-4xl font-bold text-white">MV</span></div>';
                        }
                      }}
                    />
                  </div>
                </div>
                <div className="absolute inset-0 border-4 border-transparent border-t-purple-400 border-r-blue-400 rounded-full animate-spin-slow" />
              </div>
            </div>

            {/* Bio Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-4">
                UI/UX Engineer
              </h3>

              <p className="text-gray-300 text-lg leading-relaxed">
                A passionate and detail-oriented UI/UX Engineer with hands-on
                experience in user interface design, user experience research,
                and frontend development. Skilled in creating intuitive,
                accessible, and visually stunning digital experiences that solve
                real-world problems through innovative design thinking and
                robust technical implementation.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <svg
                    className="w-5 h-5 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-gray-300">
                    Chavakachcheri, Sri Lanka
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <svg
                    className="w-5 h-5 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-gray-300">
                   0775378073
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg
                    className="w-5 h-5 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-gray-300">
                    mathushalinivasanth29@gmail.com
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 pt-4">
                {socialLinks?.map((social, index) => (
                  <a
                    key={social?.name}
                    href={social?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-700 hover:bg-blue-600 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                  >
                    {social?.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
