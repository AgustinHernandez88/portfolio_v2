import React, { useState } from "react";

const experiences = [
  {
    title: "Soporte TI",
    company: "Transdev Chile",
    date: "Ago 2023 - Actualidad",
    summary:
      "Especialista Semi senior en TI orientado a la administración de infraestructura en entornos Windows y Azure, realizando proyectos estratégicos.",
    description:
      `🔹 Liderazgo y Gestión de Proyectos
Encargado de la coordinación de Mesa de Ayuda, liderando la gestión de tickets, brindando soporte a más de 450 equipos corporativos, garantizando el cumplimiento de SLA y la satisfacción de los usuarios.
Supervisión, planificación y ejecución de auditorías basadas en políticas de TI, consolidando informes y asegurando la trazabilidad de cada activo.
Gestión de presupuestos con proveedores.

🔹 Administración de Infraestructura IT
Gestión de Active Directory, Azure AD y Office 365 (usuarios, permisos, licencias, SharePoint, Exchange, Entra ID y Compliance).
Mantenimiento de redes MPLS y procesos de offboarding.

🔹 Ciberseguridad y Protección de Activos
Implementación de proyectos bajo norma ISO 27001 (MFA, etiquetas).
Administración de CrowdStrike y Carbon Black, capacitaciones de seguridad, análisis proactivo de amenazas.`,
  },
  {
    title: "Soporte TI",
    company: "S.T Computación - Universidad Andrés Bello",
    date: "Ene 2022 - Mar 2023",
    summary:
      "Soporte Nivel 1-2 y administración de infraestructura IT en entornos educativos y corporativos.",
    description:
      `🔹 Gestión y Mantenimiento de Equipos TI
Diagnóstico, reparación de equipos, administración de dominio y repositorio.

🔹 Redes y Telecomunicaciones
Manejo de cableado estructurado, switches y redes MPLS.

🔹 Soporte Técnico y Atención al Usuario
Resolución de incidencias, administración de perfiles en AD, documentación de procedimientos.`,
  },
  {
    title: "Practicante Técnico Electrónico",
    company: "Servicios de Ingeniería VIPAC",
    date: "Ene 2021 - Dic 2021",
    summary:
      "Practicante en desarrollo de interfaces HMI, programación en PLC y soporte en automatización.",
    description:
      `🔹 Automatización y Desarrollo Tecnológico
Programación de PLCs, desarrollo de interfaces HMI, ensamblaje de paneles eléctricos.

🔹 Diseño Técnico y Presentación Corporativa
Creación de catálogos, documentación técnica y apoyo en proyectos de automatización.`,
  },
];

const ExperienceCard = ({ title, company, date, summary, description }) => {
  const [showFull, setShowFull] = useState(false);

  return (
    <div className="relative group border-l-4 border-yellow-300 pl-8 mb-16">
      <span className="absolute -left-2 top-1.5 w-4 h-4 rounded-full bg-yellow-300"></span>

      <p className="text-yellow-300 font-semibold text-base md:text-lg">{title}</p>
      <h3 className="text-white font-bold text-xl md:text-2xl mt-1">{company}</h3>
      <p className="text-white text-base md:text-lg mb-2">{date}</p>

      <p className="text-white text-base md:text-lg mb-2">
        {summary}
      </p>

      {showFull && (
        <p className="text-white text-sm md:text-base whitespace-pre-line leading-relaxed">
          {description}
        </p>
      )}

      <button
        className="mt-3 text-sm md:text-base text-yellow-300 hover:underline"
        onClick={() => setShowFull(!showFull)}
      >
        {showFull ? "Ver menos" : "Ver más →"}
      </button>
    </div>
  );
};

const WorkExperience = () => {
  return (
    <section className="px-6 md:px-32 py-14 bg-[#111111] min-h-screen">
      <h2 className="text-center text-white text-4xl md:text-5xl font-bold mb-20">
        Work Experience
      </h2>

      <div className="flex flex-col">
        {experiences.map((exp, idx) => (
          <ExperienceCard key={idx} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
