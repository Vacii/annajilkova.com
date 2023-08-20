import React, { useEffect, useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import { PortfolioItem } from "./PortfolioItem";
import "../assets/portfolioItem.css";
import { Item } from "./Item";

export const Portfolio = () => {
  const [currentActive, setCurrentActive] = useState(() => {
    return 1;
  });
  const [previousActive, setPreviousActive] = useState(() => {
    return 0;
  });

  const handleIncrement = () => {
    setPreviousActive((prevActive) => (prevActive = currentActive));
    setCurrentActive((prevActive) => (prevActive + 1) % 3);
  };

  const handleDecrement = () => {
    setPreviousActive((prevActive) => (prevActive = currentActive));
    setCurrentActive((prevActive) => (prevActive - 1 + 3) % 3);
  };

  useEffect(() => {
    console.log("prev:" + previousActive);
    console.log("curr:" + currentActive);
  });
  const items = [
    {
      header: "11111111111",
      imgSrc: "src/assets/kundera.png",
      imgAlt: "kundera_exhibition",
      paragraph:
        "Výstavu uspořádalo České centrum v Paříži ve spolupráci s Moravskou zemskou knihovnou v Brně, jíž manželé Kunderovi v roce 2020 darovali archiv a knihovnu.",
    },
    {
      header: "22222222222",
      imgSrc: "src/assets/kundera.png",
      imgAlt: "kundera_exhibition",
      paragraph:
        "Výstavu uspořádalo České centrum v Paříži ve spolupráci s Moravskou zemskou knihovnou v Brně, jíž manželé Kunderovi v roce 2020 darovali archiv a knihovnu.",
    },
    {
      header: "33333333333",
      imgSrc: "src/assets/kundera.png",
      imgAlt: "kundera_exhibition",
      paragraph:
        "Výstavu uspořádalo České centrum v Paříži ve spolupráci s Moravskou zemskou knihovnou v Brně, jíž manželé Kunderovi v roce 2020 darovali archiv a knihovnu.",
    },
  ];
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
          <button
            className="absolute z-10 left-[21rem]"
            onClick={handleDecrement}
          >
            <BsFillArrowLeftCircleFill className="h-10 w-10 shadow-2xl text-white" />
          </button>
          <button
            className="absolute z-10 right-[21rem]"
            onClick={handleIncrement}
          >
            <BsFillArrowRightCircleFill className="h-10 w-10 shadow-2xl text-white" />
          </button>
          <div
            className={
              currentActive === 1
                ? "active"
                : previousActive == 1
                ? "desktop-item left"
                : "desktop-item right"
            }
          >
            <Item props={items[0]} />
          </div>
          <div
            className={
              currentActive === 2
                ? "active"
                : previousActive == 2
                ? "desktop-item left"
                : "desktop-item right"
            }
          >
            <img
              src="src/assets/kundera.png"
              alt=""
              className="rounded-l-[44px]"
            />
            <div className="flex flex-col pt-20 px-10">
              <h3 className="text-lg">222222222222</h3>
              <p className="text-[15px] pt-10">
                The exhibition about the Czech writer was organised by the
                Centre tchèque de Paris in cooperation with the Moravian Library
                in Brno.
              </p>
            </div>
          </div>

          <div
            className={
              currentActive === 0
                ? "active"
                : previousActive == 0
                ? "desktop-item left"
                : "desktop-item right"
            }
          >
            <img
              src="src/assets/kundera.png"
              alt=""
              className="rounded-l-[44px]"
            />
            <div className="flex flex-col pt-20 px-10">
              <h3 className="text-lg">000000000000</h3>
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
