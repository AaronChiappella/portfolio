import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div className="flex flex-col md:flex-row justify-center items-center">
          {/* Image Section */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <img
              src="/path-to-your-image.png" // Reemplaza esto con la ruta de tu imagen
              alt="Contacto"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Form Section */}
          <div className="w-full md:w-2/3 bg-gray-800 p-8 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-center mb-6">Contacto</h1>
            <p className="text-center mb-6">¡Déjanos un mensaje!</p>

            {/* Contact Form */}
            <form>
              {/* Name Field */}
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 rounded-md bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Tu nombre"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 rounded-md bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="tucorreo@ejemplo.com"
                  required
                />
              </div>

              {/* Message Field */}
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  className="w-full p-3 rounded-md bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Escribe tu mensaje aquí"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition duration-300"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
