import React from "react";
import { PortfolioItem } from "./PortfolioItem";
import "../assets/portfolioItem.css";

export const Portfolio = () => {
  const items = [];
  const kundera = {
    imgPath: "src/assets/kundera.png",
    imgAlt: "kundera_exhibition",
    headerText: "Milan Kundera: Nostalgie po Evropě",
    subText:
      "Výstavu uspořádalo České centrum v Paříži ve spolupráci s Moravskou zemskou knihovnou v Brně, jíž manželé Kunderovi v roce 2020 darovali archiv a knihovnu.",
  };
  return (
    <section id="Portfolio">
      <div className="flex flex-col justify-start items-center mt-8 md:hidden">
        <PortfolioItem data={kundera} />
        <PortfolioItem data={kundera} />
        <PortfolioItem data={kundera} />
      </div>
      <div className="hidden md:block h-screen">
        <div className="flex flex-row justify-center items-center content relative">
          <div className="flex flex-row absolute w-[683px] h-[623px] bg-white rounded-[44px]">
            <img
              src="src/assets/kundera.png"
              alt=""
              className="rounded-l-[44px]"
            />
            <div className="flex flex-col pt-20 px-10">
              <h3 className="text-lg">Milan Kundera: Nostalgie de l'Europe</h3>
              <p className="text-[15px] pt-10">
                The exhibition about the Czech writer was organised by the
                Centre tchèque de Paris in cooperation with the Moravian Library
                in Brno.
              </p>
            </div>
          </div>

          <div className="flex flex-row absolute right-0 scale-50 z-[-1] blur-lg w-[683px] h-[623px] bg-white rounded-[44px]">
            <img
              src="src/assets/kundera.png"
              alt=""
              className="rounded-l-[44px]"
            />
            <div className="flex flex-col pt-20 px-10">
              <h3 className="text-lg">Milan Kundera: Nostalgie de l'Europe</h3>
              <p className="text-[15px] pt-10">
                The exhibition about the Czech writer was organised by the
                Centre tchèque de Paris in cooperation with the Moravian Library
                in Brno.
              </p>
            </div>
          </div>

          <div className="flex flex-row absolute left-0 scale-50 z-[-1] blur-lg w-[683px] h-[623px] bg-white rounded-[44px]">
            <img
              src="src/assets/kundera.png"
              alt=""
              className="rounded-l-[44px]"
            />
            <div className="flex flex-col pt-20 px-10">
              <h3 className="text-lg">Milan Kundera: Nostalgie de l'Europe</h3>
              <p className="text-[15px] pt-10">
                The exhibition about the Czech writer was organised by the
                Centre tchèque de Paris in cooperation with the Moravian Library
                in Brno.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
