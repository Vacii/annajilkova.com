import React from "react";
import { PortfolioItem } from "./PortfolioItem";

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
    <section
      id="Portfolio"
      className="flex flex-col justify-start items-center mt-8"
    >
      <PortfolioItem data={kundera} />
      <PortfolioItem data={kundera} />
      <PortfolioItem data={kundera} />
    </section>
  );
};
