import React from "react";

import benefits from "../../data/benefits.json";

export const Benefits = () => {
  return (
    <section className="w-full h-auto bg-gray-100">
      <div className="py-20 px-4 max-w-304 h-full mx-auto">
        <h2 className="text-center lg:text-left text-5xl font-light text-blue-950">
          Por que escolher o Digitalbank?
        </h2>
        <p className="text-center lg:text-left md:w-175 mt-10 mb-14 text-lg/tight md:text-lg text-gray-600">
          Aproveitamos o Open Banking para transformar sua conta bancária em seu
          centro financeiro. Controle suas finanças como nunca antes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-4 md:grid-rows-2 lg:grid-rows-1 justify-items-center gap-8 lg:gap-0">
          {benefits.map((item) => (
            <div className="text-center lg:text-left" key={item.id}>
              <img
                className="mx-auto lg:mx-0"
                src={item.icon}
                alt={item.title}
              />
              <h3 className="mt-6 mb-4 font-light text-2xl text-blue-950">
                {item.title}
              </h3>
              <p className="lg:max-w-66 text-base/tight md:text-base text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
