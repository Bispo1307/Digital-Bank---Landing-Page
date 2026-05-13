import React from "react";

import articles from "../../data/articles.json";

export const Articles = () => {
  return (
    <section className="w-full h-auto bg-gray-50">
      <div className="py-20 px-4 max-w-304 h-full mx-auto">
        <h2 className="text-center lg:text-left mb-10 text-5xl font-light text-blue-950">
          Artigos mais recentes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-4 md:grid-rows-2 lg:grid-rows-1 gap-4">
          {articles.map((item) => (
            <div
              key={item.id}
              className="w-full h-auto rounded-lg overflow-hidden shadow mx-auto"
            >
              <div className="w-full h-54">
                <img src={item.image} className="w-full h-full object-cover" />
              </div>
              <div className="w-full h-54 py-2.5 px-5 md:px-3.5 lg:px-3 bg-white">
                <small className="text-gray-600">{item.author}</small>
                <h4 className="mt-2 mb-3 text-xl/6 transition hover:cursor-pointer text-blue-950 hover:text-green-500">
                  {item.title}
                </h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
