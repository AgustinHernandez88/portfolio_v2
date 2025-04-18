import React from 'react';

const portfolioItems = [

  {
    id: 1,
    name: "Personal Website",
    imageUrl: "portafolio_v2",
    status:
      "My personal website, I created this website to display my profile, skills and projects. As well as my place to try new technology.",
    tech: "JavaScript | CSS3 | HTML5 | Node.js | Express | ReactJS",
    github: "https://github.com/rakha-elctrnx/Portofolio-v2",
    demo: "https://portafolioagustinhernandez.vercel.app/portfolio/",
  },
  {
    id: 2,
    name: "Brotto E-commerce",
    imageUrl: "brottopage",
    status: "E-commerce Page for client.",
    tech: "JavaScript | CSS | HTML | Node.js | Express | ReactJS",
    github: "https://github.com/AgustinHernandez88/brotto",
    demo: "https://brotto.vercel.app",
  },
  {
    id: 3,
    name: "RBU Page",
    imageUrl: "rbupage",
    status: "A web login by transport enterprise, for administrative users.",
    tech: "JavaScript | CSS | HTML | Node.js | Express | ReactJS",
    github: "https://github.com/AgustinHernandez88/rbu-page",
    demo: "https://rbu-page.vercel.app",
  },
  {
    id: 4,
    name: "Futurama App",
    imageUrl: "futurama",
    status:
      "Futurama-inspired application, using a Futurama API to display characters and other visual elements in a grid layout. The project also includes a 3D viewer and a video player with an iPhone frame.",
    tech: "JavaScript | CSS | HTML | Node.js | React | Vite ",
    github: "https://github.com/AgustinHernandez88/Futurama-app.git",
    demo: "https://futurama-app-lilac.vercel.app",
  },
  {
    id: 5,
    name: "Weather APP",
    imageUrl: "weatherapp",
    status: "Real-time weather application",
    tech: "JavaScript | CSS | HTML | Node.js | React | Vite ",
    github: "https://github.com/AgustinHernandez88/Aplicacion-de-clima.git",
    demo: "https://aplicacion-de-clima.vercel.app",
  },
  {
    id: 6,
    name: "Work in Progress",
    imageUrl: "https://media.tenor.com/c1hbwzxjPW8AAAAM/dog-reading.gif",
    status: "Thinking about a new Project",
    tech: "ReactJS Probably",
    github: "null",
    demo: "null",
  },
];

const Portfolio = () => {
  return (
    <div className="px-5 py-5 md:px-12 md:py-10 text-left text-amber-50 mx-3">
      <article>
        <header>
          <div className="text-2xl font-bold text-white mb-10 fadein-bot title-section flex items-center justify-center flex-col">
            <h4>Past Project Experience</h4>
            <h4 className="text-base font-normal text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-amber-300">
              Explore the projects I've worked on so far
            </h4>
          </div>
        </header>

        <section>
          <div className="grid grid-cols-1 gap-4 pb-32 md:grid-cols-3 md:gap-3 xl:grid-cols-3 xl:gap-3 2xl:gap-5 fade-zoom-in">
            {portfolioItems.map((item) => (
              <div key={item.id}>
                <div className="item-card flex flex-col items-center gap-2 rounded bg-[#1e1e1f] hover:bg-[#282828] border border-[#383838] rounded-xl text-amber-50 md:gap-3 px-5 py-5 lg:px-5">
                  <div className="flex h-full w-full items-center justify-center lg:p-0 zoom-in">
                    <img
                      src={
                        item.imageUrl.startsWith("http")
                          ? item.imageUrl
                          : `/assets/images/${item.imageUrl}.png`
                      }
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/assets/images/default.png"; // <-- opcional imagen por defecto
                      }}
                      alt={item.name}
                      className={`drop-shadow-xl rounded-xl object-cover ${
                        item.imageUrl.startsWith("http") ? "w-40 h-40" : ""
                      }`}
                    />
                  </div>

                  <div className="w-full flex flex-col gap-2 items-center text-sm md:text-base lg:text-lg">
                    <div className="title-text font-medium text-secondary">{item.name}</div>
                    <div className="w-full text-left text-[10px] text-[#c1c1c1] md:text-xs lg:text-sm">
                      {item.status}
                    </div>
                    <div className="w-full mt-4 text-normal text-sm text-left text-amber-200">
                      {item.tech}
                    </div>

                    <div className="w-full flex justify-end">
                      <div className="flex cursor-pointer items-end gap-2 text-primary">
                        {item.github !== "null" && (
                          <a
                            href={item.github}
                            target="_blank"
                            rel="noreferrer"
                            title="View GitHub repository"
                            className="transition-all hover:text-amber-400"
                          >
                            <svg
                              stroke="currentColor"
                              fill="none"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              height="16"
                              width="16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61
                                  c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77
                                  5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38
                                  0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77
                                  a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7
                                  A3.37 3.37 0 0 0 9 18.13V22" />
                            </svg>
                          </a>
                        )}
                        {item.demo !== "null" && (
                          <a
                            href={item.demo}
                            target="_blank"
                            rel="noreferrer"
                            title="View Demo"
                            className="transition-all hover:text-amber-400"
                          >
                            <svg
                              stroke="currentColor"
                              fill="none"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              height="18"
                              width="18"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                              <polyline points="15 3 21 3 21 9" />
                              <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
};

export default Portfolio;
