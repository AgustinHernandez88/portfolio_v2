import React, { useState } from "react";

const data = {
  tech: [
    { id: 1, name: "HTML", imageUrl: "https://cdn-icons-png.flaticon.com/512/1051/1051277.png", status: "Intermediate" },
    { id: 2, name: "CSS", imageUrl: "https://cdn-icons-png.flaticon.com/512/732/732190.png", status: "Intermediate" },
    { id: 4, name: "Javascript", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/640px-Unofficial_JavaScript_logo_2.svg.png", status: "Intermediate" },
    { id: 6, name: "ReactJS", imageUrl: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png", status: "Intermediate" },
    { id: 7, name: "Python", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png", status: "Beginner" },
    { id: 10, name: "Tailwind", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", status: "Intermediate" },
    { id: 11, name: "Bootstrap", imageUrl: "https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png", status: "Intermediate" },
    { id: 12, name: "VueJS", imageUrl: "https://cdn.iconscout.com/icon/free/png-256/free-vue-282497.png?f=webp", status: "Beginner" },
    { id: 13, name: "NodeJS", imageUrl: "https://cdn.iconscout.com/icon/free/png-256/free-node-js-1174925.png", status: "Beginner" }
  ],
  tools: [
    { id: 1, name: "Azure", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png", status: "Administration" },
    { id: 2, name: "Amazon Web Services", imageUrl: "https://registry.npmmirror.com/@lobehub/icons-static-png/1.15.0/files/dark/aws.png", status: "Control" },
    { id: 3, name: "Git", imageUrl: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png", status: "Version Control" },
    { id: 4, name: "MySQL", imageUrl: "https://cdn-icons-png.flaticon.com/512/5968/5968313.png", status: "Query manager" },
    { id: 5, name: "GitHub", imageUrl: "https://cdn-icons-png.flaticon.com/512/25/25231.png", status: "Git Hosting" },
    { id: 6, name: "NPM", imageUrl: "https://cdn.iconscout.com/icon/free/png-256/free-npm-3-1175132.png", status: "Package Manager" }
  ],
  languages: [
    { id: 1, name: "Spanish", imageUrl: "https://vectorflags.s3.amazonaws.com/flags/es-circle-01.png", status: "Native" },
    { id: 2, name: "English", imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/012/616/631/small_2x/american-flag-us-flag-usa-flag-on-the-circle-shape-format-png.png", status: "B1 Certificate by TOELF" },
    { id: 3, name: "Chinese", imageUrl: "https://static.vecteezy.com/system/resources/previews/011/571/507/non_2x/circle-flag-of-china-free-png.png", status: "HSK1 Certificate by Cultural Center of Chinese" },
    { id: 4, name: "French", imageUrl: "https://cdn-icons-png.flaticon.com/512/197/197560.png", status: "Enthusiast Beginner" }
  ]
};

const About = () => {
  const [activeTab, setActiveTab] = useState(1);

  const renderItems = (list) => (
    <div className="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12">
      {list.map((item) => (
        <div
          key={item.id}
          className="group item-tech flex items-center gap-3 rounded border border-amber-200 px-4 py-4 hover:scale-105 transition-transform duration-300 hover:bg-amber-200 hover:bg-opacity-10"
        >
          <div className="flex-shrink-0 h-12 w-12 lg:h-16 lg:w-16">
            <img
              alt={item.name}
              src={item.imageUrl}
              width={32}
              height={32}
              className="drop-shadow-xl transition-transform duration-300 h-full w-full group-hover:scale-110"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm md:text-base lg:text-lg font-semibold text-white">
              {item.name}
            </span>
            <span className="text-[10px] text-amber-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:text-xs lg:text-sm">
              {item.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-[#1e1e1f] px-5 py-5 md:px-12 md:py-10 text-left border border-[#383838] rounded-3xl text-amber-50 mx-3 mb-5">
      <article>
        <header className="text-2xl font-bold text-white mb-5 fadein-bot title-section flex items-center">
          About Me
          <div className="h-[1px] w-32 bg-amber-200 md:w-96 ml-4" />
        </header>

        <section className="flex flex-col md:flex-row items-center md:items-start gap-12 max-w-8xl mx-auto">
          <img
            className="w-72 rounded-full object-cover fadein-up"
            src="/assets/images/ProfilePicture.jpg"
            alt="Foto de Perfil"
          />

          <div className="text-sm md:text-lg text-justify">
            <p>
              I am a Semi-Senior IT professional with over five years of experience in dynamic environments, specializing in IT infrastructure and administration, Full Stack development, and cybersecurity. I am currently in my final year of a Computer Engineering degree and have a solid background in data analysis, application development, and platform administration in Windows and Azure environments.
            </p>
            <p className="mt-4">
            I have led strategic projects focused on process optimization, operational standardization, and continuous improvement. I stand out for my ability to implement scalable solutions, both in web development (ReactJS, TypeScript) and corporate environments, managing Active Directory, Office 365, critical networks, and cybersecurity platforms such as CrowdStrike and Carbon Black.
            </p>
          </div>
        </section>
      </article>

      <div className="px-5 py-5 md:px-12 md:py-10 text-left text-amber-50 mx-3">
        <article>
          <header className="text-2xl font-bold text-white mb-5 fadein-bot title-section flex items-center">
            <div className="h-[1px] w-10 bg-amber-200 md:w-20 mr-2" /> Skills
          </header>
          <section>
            <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 mb-5">
              <li className="mr-2">
                <button
                  className={`inline-block px-4 py-3 rounded-lg hover:text-white ${activeTab === 1 ? "text-amber-200 bg-amber-200 bg-opacity-10" : ""
                    }`}
                  onClick={() => setActiveTab(1)}
                >
                  Tech Stack
                </button>
              </li>
              <li className="mr-2">
                <button
                  className={`inline-block px-4 py-3 rounded-lg hover:text-white ${activeTab === 2 ? "text-amber-200 bg-amber-200 bg-opacity-10" : ""
                    }`}
                  onClick={() => setActiveTab(2)}
                >
                  Tools
                </button>
              </li>
              <li className="mr-2">
                <button
                  className={`inline-block px-4 py-3 rounded-lg hover:text-white ${activeTab === 3 ? "text-amber-200 bg-amber-200 bg-opacity-10" : ""
                    }`}
                  onClick={() => setActiveTab(3)}
                >
                  Languages
                </button>
              </li>
            </ul>
            {activeTab === 1 && renderItems(data.tech)}
            {activeTab === 2 && renderItems(data.tools)}
            {activeTab === 3 && renderItems(data.languages)}
          </section>
        </article>
      </div>
    </div>
  );
};

export default About;