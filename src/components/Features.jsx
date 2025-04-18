import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const educationItems = [
  {
    logo: "/assets/images/inacap.png",
    institution: "INACAP",
    title: "Ingeniería en Informática",
    year: "2025",
  },
  {
    logo: "/assets/images/udemy.svg",
    institution: "Udemy",
    title: "Curso de ReactJS",
    year: "2024",
  },
  {
    logo: "/assets/images/aws.png",
    institution: "AWS Academy",
    title: "Fundamentos AWS Cloud",
    year: "2024",
  },
  {
    logo: "/assets/images/inacap.png",
    institution: "INACAP",
    title: "Desarrollador Fullstack",
    year: "2023",
  },
  {
    logo: "/assets/images/google.png",
    institution: "Google",
    title: "Certificado Análisis de Datos",
    year: "2023",
  },
  {
    logo: "/assets/images/inacap.png",
    institution: "INACAP",
    title: "Desarrollo de Aplicaciones Básicas",
    year: "2023",
  },
  {
    logo: "/assets/images/inacap.png",
    institution: "INACAP",
    title: "Soporte Computacional",
    year: "2023",
  },
  {
    logo: "/assets/images/movistar.png",
    institution: "Movistar",
    title: "Principios de Big Data",
    year: "2023",
  },
  {
    logo: "/assets/images/aiep.png",
    institution: "AIEP",
    title: "Diplomado Diseño y Programación Web",
    year: "2022",
  },
  {
    logo: "/assets/images/lichan.png",
    institution: "Liceo Chileno Alemán",
    title: "Técnico Electrónico",
    year: "2021",
  },
  {
    logo: "/assets/images/inacap.png",
    institution: "INACAP",
    title: "Curso PYTHON",
    year: "2019",
  },
];

const EducationCard = ({ logo, institution, title, year }) => (
  <div className="group w-40 sm:w-44 md:w-48 h-40 sm:h-44 md:h-48 border border-yellow-400 rounded-full flex flex-col items-center justify-center text-center text-black p-3 bg-white hover:scale-105 hover:bg-yellow-50 transition duration-300 overflow-hidden shadow-[0_0_20px_2px_rgba(234,179,8,0.4)] hover:shadow-[0_0_30px_4px_rgba(234,179,8,0.8)]">
    <img
      src={logo}
      alt={institution}
      className="w-16 sm:w-20 md:w-24 h-auto object-contain mb-2 transition-transform duration-300 group-hover:scale-110"
    />
    <div className="text-sm sm:text-base md:text-lg font-semibold leading-tight">
      {institution}
    </div>
    <div className="text-[11px] sm:text-sm md:text-sm font-light leading-tight">
      {title}
    </div>
    <div className="text-[11px] sm:text-sm mt-1 font-light">{year}</div>
  </div>
);

const EducationGrid = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".edu-card",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: "#education-section",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section
      id="education-section"
      className="bg-[#111111] py-16 text-white scroll-mt-10"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12">
        Educación, Cursos y Certificaciones
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6 px-4 md:px-12 justify-items-center">
        {educationItems.map((item, idx) => (
          <div key={idx} className="edu-card">
            <EducationCard {...item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationGrid;
