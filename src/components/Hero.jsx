import React from "react";
import { BtnPrimary } from "./BtnPrimary";

import mockup from "../assets/images/image-mockups.png";

export const Hero = () => {
  return (
    <section className="h-auto md:h-258 lg:h-134 bg-gray-50 overflow-x-hidden">
      <div className="max-w-304 h-full mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">
        <div className="pb-10 px-4 lg:px-0 w-full lg:w-[70%]">
          <h1 className="text-center lg:text-left text-blue-950 text-[42px]/tight md:text-6xl/tight font-light">
            O banco digital da próxima geração
          </h1>
          <p className="text-center lg:text-left lg:w-115 my-6 text-base/tight md:text-lg/normal text-gray-600">
            Leve sua vida financeira para o ambiente online. Sua conta no
            Digitalbank será um balcão único para gastar, poupar, fazer
            orçamentos, investir e muito mais.
          </p>
          <BtnPrimary className="flex items-center justify-center mx-auto lg:block lg:mx-0" />
        </div>
        <div className="w-full h-full flex justify-center ml-auto relative lg:left-48 overflow-y-hidden bg-[url(/public/bg-intro-mobile.svg)] md:bg-[url(/public/bg-intro-desktop.svg)] bg-center bg-cover">
          <img
            src={mockup}
            alt="Mockup"
            className="w-82 h-76 md:w-180 md:h-230 object-cover relative bottom-12 lg:bottom-48"
          />
        </div>
      </div>
    </section>
  );
};
