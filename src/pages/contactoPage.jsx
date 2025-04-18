import React from "react";
import { FaLinkedin, FaPhone, FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactoPage() {
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
        `}
      </style>

      <main className="p-8 max-w-5xl mx-auto pt-24 pb-12 flex-1 animate-fade-in">
        <h1 className="text-3xl font-bold mb-8 text-center">Contacto</h1>

        <div className="bg-white text-gray-800 shadow-xl rounded-xl p-6 flex flex-col md:flex-row items-center gap-8">
          {/* Información de contacto */}
          <div className="flex-1 space-y-4">
            <p className="text-xl font-semibold text-gray-900">Agustín Hernández Silva</p>

            <p className="flex items-center gap-3">
              <FaLinkedin className="text-blue-700" />
              <a
                href="https://www.linkedin.com/in/agustín-hernández"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline"
              >
                Linkedin
              </a>
            </p>

            <p className="flex items-center gap-3">
              <FaWhatsapp className="text-green-500" />
              <a
                href="https://wa.me/56946653445"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 hover:underline"
              >
                WhatsApp
              </a>
            </p>

            <p className="flex items-center gap-3">
              <FaPhone className="text-gray-600" />
              +56 9 466 53 445
            </p>

            <p className="flex items-center gap-3">
              <FaEnvelope className="text-red-500" />
              agustinhernandez027@gmail.com
            </p>

            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-gray-600" />
              Región Metropolitana
            </p>
          </div>

          {/* Foto de perfil */}
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-md">
            <img
              src="/assets/images/ProfilePicture.jpg"
              alt="Agustín Hernández"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
