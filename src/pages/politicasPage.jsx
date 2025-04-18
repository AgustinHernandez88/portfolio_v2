// src/pages/PoliticasPage.jsx

import React, { useState } from "react";
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const sectionsData = [
  {
    id: "terminos",
    title: "Términos y Condiciones",
    content:
      "Al utilizar el sitio web de Brotto, aceptas nuestros Términos y Condiciones. Estos regulan el acceso, uso del sitio, compra de productos y servicios ofrecidos. Brotto se reserva el derecho de modificar estos términos en cualquier momento, los cuales entrarán en vigencia al ser publicados...",
  },
  {
    id: "privacidad",
    title: "Política de Privacidad",
    content:
      "En Brotto nos tomamos muy en serio la privacidad de tus datos. Toda información personal que nos entregues será tratada de forma confidencial y utilizada exclusivamente para mejorar tu experiencia de compra...",
  },
  {
    id: "cookies",
    title: "Política de Cookies",
    content:
      "Brotto utiliza cookies para brindarte una experiencia personalizada y eficiente. Estas cookies permiten reconocer tus preferencias, entender tu comportamiento de navegación y ofrecer contenido adaptado...",
  },
  {
    id: "devoluciones",
    title: "Política de Devoluciones",
    content:
      "En Brotto, si no estás conforme con tu compra, puedes devolver o cambiar un producto dentro de los 30 días desde su recepción, bajo nuestra política de 'Satisfacción Garantizada'...",
  },
  {
    id: "envios",
    title: "Política de Envíos",
    content:
      "En Brotto realizamos envíos a todo Chile, con plazos estimados entre 48 a 72 horas hábiles, dependiendo de la zona. Una vez realizado el pedido, recibirás un número de seguimiento...",
  },
  {
    id: "garantia",
    title: "Política de Garantía",
    content:
      "Todos nuestros productos cuentan con garantía legal de 6 meses desde la fecha de recepción. Esta cubre fallas de fabricación, funcionamiento o materiales...",
  },
];

export default function PoliticasPage() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (id) => {
    setOpenSection((prev) => (prev === id ? null : id));
  };

  return (
    <div className="bg-neutral-900 text-white min-h-screen flex flex-col justify-between">
      <style>
        {`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 1s forwards;
          }
          .accordion-content {
            transition: max-height 0.4s ease, padding 0.4s ease;
          }
        `}
      </style>

      <Navbar />

      <main className="p-8 space-y-6 max-w-4xl mx-auto pt-24 pb-12 flex-1">
        {sectionsData.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="bg-white text-gray-800 shadow-xl rounded-xl p-4 animate-fade-in cursor-pointer"
            onClick={() => toggleSection(section.id)}
          >
            <h2 className="text-xl font-bold mb-2">{section.title}</h2>
            <div
              className={`accordion-content overflow-hidden transition-all duration-300 ease-in-out ${
                openSection === section.id ? "max-h-96 p-2" : "max-h-0 p-0"
              }`}
            >
              <p className="text-sm text-gray-700">{section.content}</p>
            </div>
          </section>
        ))}

        {/* NUEVO BLOQUE: Canales de atención */}
        <section className="bg-white text-gray-800 shadow-xl rounded-xl p-6 animate-fade-in">
          <h2 className="text-xl font-bold mb-4">Nuestros canales de atención</h2>
          <div className="flex justify-center gap-16 pt-2">
            <a
              href="https://www.instagram.com/brotto"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Brotto"
              className="text-gray-700 hover:text-pink-500 transition"
            >
              <FaInstagram size={28} />
            </a>
            <a
              href="https://wa.me/56946653445"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Brotto"
              className="text-gray-700 hover:text-green-500 transition"
            >
              <FaWhatsapp size={28} />
            </a>
            <a
              href="mailto:ventas@brotto.cl"
              aria-label="Correo Brotto"
              className="text-gray-700 hover:text-blue-500 transition"
            >
              <FaEnvelope size={28} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
