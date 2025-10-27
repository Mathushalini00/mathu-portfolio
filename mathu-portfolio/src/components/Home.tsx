import React from 'react';

const Home: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const techIcons = [
    { 
      name: 'React', 
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="2"/>
          <ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          <ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)"/>
          <ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(120 12 12)"/>
        </svg>
      ), 
      color: 'text-blue-400' 
    },
    { 
      name: 'TypeScript', 
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
        </svg>
      ), 
      color: 'text-blue-500' 
    },
    { 
      name: 'Figma', 
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 0a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"/>
          <circle cx="16" cy="8" r="4"/>
          <circle cx="16" cy="16" r="4"/>
          <circle cx="12" cy="12" r="4"/>
        </svg>
      ), 
      color: 'text-purple-400' 
    },
    { 
      name: 'Tailwind', 
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
        </svg>
      ), 
      color: 'text-cyan-400' 
    },
    { 
      name: 'JavaScript', 
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
        </svg>
      ), 
      color: 'text-yellow-400' 
    },
    { 
      name: 'UI/UX', 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ), 
      color: 'text-pink-400' 
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Enhanced Background with Purple Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 via-transparent to-purple-900/30"></div>
      
      {/* Floating Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-float-delayed"></div>
      <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-pink-500/10 rounded-full blur-xl animate-float-slow"></div>
      <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-purple-400/10 rounded-full blur-xl animate-float"></div>

      <div className="container-max-width section-padding text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Greeting */}
          <div className="fade-in opacity-100 translate-y-0 text-purple-400 text-lg font-medium mb-4">
            Hello, I'm
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 fade-in opacity-100 translate-y-0">
            Mathushalini Vasanthakumar
          </h1>

          {/* Title */}
          <h2 className="text-xl sm:text-2xl lg:text-4xl text-white mb-8 font-medium fade-in opacity-100 translate-y-0">
            UI/UX Engineer
          </h2>

          {/* Tagline */}
          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed fade-in opacity-100 translate-y-0">
            Passionate about crafting <span className="text-purple-400 font-semibold">user-friendly</span> and <span className="text-blue-400 font-semibold">visually appealing</span> digital experiences through innovative UI/UX design and robust frontend development.
          </p>

          {/* Technology Icons */}
          <div className="mb-12 fade-in opacity-100 translate-y-0">
            <p className="text-gray-400 text-sm mb-6 font-medium">Technologies I work with:</p>
            <div className="flex flex-wrap justify-center gap-8">
              {techIcons?.map((tech, index) => (
                <div
                  key={tech?.name}
                  className="flex flex-col items-center group hover:scale-110 transition-all duration-300 p-4 rounded-lg hover:bg-gray-800/50"
                >
                  <div className={`mb-3 group-hover:animate-bounce ${tech?.color} transition-all duration-300`}>
                    {tech?.icon}
                  </div>
                  <span className="text-gray-400 text-sm font-medium group-hover:text-white transition-colors duration-300">
                    {tech?.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in opacity-100 translate-y-0 mb-16">
            <button
              onClick={() => scrollToSection('experience')}
              className="btn-primary hover:scale-105 transition-transform duration-300 shadow-lg shadow-blue-500/25"
            >
              View My Work
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-purple hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-500/25"
            >
              Contact Me
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto fade-in opacity-100 translate-y-0">
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold gradient-text mb-2">2+</div>
              <div className="text-gray-400 text-sm">Years Experience</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold gradient-text-purple mb-2">10+</div>
              <div className="text-gray-400 text-sm">Projects Completed</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold gradient-text mb-2">5+</div>
              <div className="text-gray-400 text-sm">Technologies</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold gradient-text-purple mb-2">100%</div>
              <div className="text-gray-400 text-sm">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in opacity-100 translate-y-0">
          <div className="flex flex-col items-center">
            <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center animate-bounce-slow">
              <div className="w-1 h-3 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mt-2 animate-bounce-slow" />
            </div>
            <p className="text-purple-400 text-xs mt-2 font-medium">Scroll Down</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
