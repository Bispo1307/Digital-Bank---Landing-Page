import React from "react";

import logoLight from "../assets/images/logo-light.svg";

import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BtnPrimary } from "./BtnPrimary";

export const Footer = () => {
  return (
    <section className="w-full h-auto bg-blue-950">
      <div className="py-10 md:px-4 max-w-304 h-full mx-auto flex flex-col md:flex-row justify-between">
        <div className="flex flex-col items-center md:items-start justify-between mb-6 md:mb-0 mx-auto md:mx-0">
          <img className="w-40 h-6 mb-5 md:mb-0" src={logoLight} alt="Logo" />
          <div className="flex gap-3">
            <FaFacebookSquare className="w-6 h-6 hover:cursor-pointer text-gray-50" />
            <FaYoutube className="w-6 h-6 hover:cursor-pointer text-gray-50" />
            <FaTwitter className="w-6 h-6 hover:cursor-pointer text-gray-50" />
            <FaPinterest className="w-6 h-6 hover:cursor-pointer text-gray-50" />
            <FaInstagram className="w-6 h-6 hover:cursor-pointer text-gray-50" />
          </div>
        </div>
        <nav className="flex flex-col items-center md:items-start justify-between gap-1 md:gap-0 text-gray-100">
          <a
            className="transition hover:cursor-pointer hover:text-green-500"
            href="#"
          >
            Sobre nós
          </a>
          <a
            className="transition hover:cursor-pointer hover:text-green-500"
            href="#"
          >
            Contato
          </a>
          <a
            className="transition hover:cursor-pointer hover:text-green-500"
            href="#"
          >
            Blog
          </a>
        </nav>
        <nav className="flex flex-col items-center md:items-start justify-between gap-1 md:gap-0 text-gray-100">
          <a
            className="transition hover:cursor-pointer hover:text-green-500"
            href="#"
          >
            Carreiras
          </a>
          <a
            className="transition hover:cursor-pointer hover:text-green-500"
            href="#"
          >
            Suporte
          </a>
          <a
            className="transition hover:cursor-pointer hover:text-green-500"
            href="#"
          >
            Politica de Privacidade
          </a>
        </nav>
        <div className="md:w-60 lg:w-auto flex flex-col items-center md:items-end mt-6 md:mt-0 gap-5">
          <BtnPrimary />
          <span className="w-auto md:w-75 lg:w-auto md:text-end text-gray-600">
            ©Digitalbank. Todos os Direitos Reservados
          </span>
        </div>
      </div>
    </section>
  );
};
