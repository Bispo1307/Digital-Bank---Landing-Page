import { useState } from "react";

import { BtnPrimary } from "./BtnPrimary";

import logo from "../assets/images/logo-dark.svg";
import iconHamburguer from "../assets/images/icon-hamburger.svg";
import iconClose from "../assets/images/icon-close.svg";

export const Header = () => {
  const [menu, setMenu] = useState(false);

  const handleToggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <section className="w-full">
      <div className="max-w-304 py-5 px-6 md:px-4 lg:px-0 mx-auto flex items-center justify-between relative">
        <a href="#">
          <img src={logo} alt="Logo" className="w-45 h-auto md:w-42" />
        </a>

        <nav className="hidden md:flex items-center gap-8 md:gap-4 font-medium text-gray-600">
          <a
            className="transition  hover:border-b-4 hover:border-b-green-500 hover:cursor-pointer hover:text-blue-950"
            href="#"
          >
            Inicio
          </a>
          <a
            className="transition  hover:border-b-4 hover:border-b-green-500 hover:cursor-pointer hover:text-blue-950"
            href="#"
          >
            Sobre
          </a>
          <a
            className="transition  hover:border-b-4 hover:border-b-green-500 hover:cursor-pointer hover:text-blue-950"
            href="#"
          >
            Contato
          </a>
          <a
            className="transition  hover:border-b-4 hover:border-b-green-500 hover:cursor-pointer hover:text-blue-950"
            href="#"
          >
            Blog
          </a>
          <a
            className="transition  hover:border-b-4 hover:border-b-green-500 hover:cursor-pointer hover:text-blue-950"
            href="#"
          >
            Carreiras
          </a>
        </nav>

        <BtnPrimary className="hidden md:block" />

        <div className="flex md:hidden">
          <button
            onClick={handleToggleMenu}
            className="w-10 h-auto cursor-pointer flex items-center justify-center"
          >
            <img
              src={menu ? iconClose : iconHamburguer}
              alt="Icon Menu"
              className="w-6 h-auto object-cover"
            />
          </button>
        </div>
      </div>

      {menu && (
        <div className="block md:hidden absolute w-full min-h-screen bg-overlay z-10">
          <nav className="w-11/12 h-62 mt-6 mx-auto flex flex-col items-center justify-center gap-3 text-lg rounded-lg bg-white text-blue-950">
            <a className="transition hover:text-green-500" href="#">
              Inicio
            </a>
            <a className="transition hover:text-green-500" href="#">
              Sobre
            </a>
            <a className="transition hover:text-green-500" href="#">
              Contato
            </a>
            <a className="transition hover:text-green-500" href="#">
              Blog
            </a>
            <a className="transition hover:text-green-500" href="#">
              Carreiras
            </a>
          </nav>
        </div>
      )}
    </section>
  );
};
