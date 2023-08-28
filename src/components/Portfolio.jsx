import React, { useEffect, useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import { PortfolioItem } from "./PortfolioItem";
import "../assets/portfolioItem.css";
import "../assets/portfolio.css";

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
  const items = [];
  const kundera = {
    imgPath: "src/assets/kundera.png",
    imgAlt: "kundera_exhibition",
    headerText: "Milan Kundera: Nostalgie po Evropě",
    subText:
      "The exhibition about the Czech writer was organised by the Centre tchèque de Paris in cooperation with the Moravian Library in Brno.",
  };

  const srom = {
    imgPath: "src/assets/srom.jpeg",
    imgAlt: "srom_webpage",
    headerText: "Leopold Šrom and Moravian RAF Pilots",
    subText:
      "The online exhibition about Czech RAF pilot from Brno, Leopold Šrom, and other Moravian pilots.",
  };

  const kundera_ex = {
    imgPath: "src/assets/kundera_exhibition.jpeg",
    imgAlt: "srom_webpage",
    headerText: "Milan Kundera exhibition at the World Book Fair in Prague",
    subText:
      "A large-scale exhibition of Kudera's work at the World Book Fair in Prague in 2021.",
  };
  return (
    <section id="Portfolio">
      <div className="flex flex-col justify-start items-center relative md:hidden">
        <PortfolioItem data={kundera} />
        <PortfolioItem data={srom} />
        <PortfolioItem data={kundera_ex} />
        <svg
          className="mt-10"
          xmlns="http://www.w3.org/2000/svg"
          width="75"
          height="116"
          viewBox="0 0 75 116"
          fill="none"
        >
          <path
            d="M36.8778 1.30886C53.5447 18.0179 36.7012 50.0882 31.2675 51.9942C29.7833 52.5148 18.0111 52.4919 19.2865 48.5043C20.2959 45.3482 25.841 43.8324 27.8661 44.0576C33.468 44.6807 37.4872 50.569 40.1068 56.1413C47.0403 70.89 42.7038 96.4813 36.5107 114.082"
            stroke="#B07AE5"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M35.1422 111.93C35.4817 113.03 35.8942 114.239 36.3511 114.4C36.9917 114.625 40.0481 111.652 40.7648 111.305"
            stroke="#B07AE5"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </div>

      <div className="hidden md:block h-screen">
        <div className="flex flex-row justify-center items-center content relative">
          <button
            className="absolute z-10 left-[10vw] lg:left-[20%]"
            onClick={handleDecrement}
          >
            <BsFillArrowLeftCircleFill className="h-10 w-10 shadow-2xl text-gray-700 hover:scale-110" />
          </button>
          <button
            className="absolute z-10 right-[10vw] lg:right-[20%]"
            onClick={handleIncrement}
          >
            <BsFillArrowRightCircleFill className="h-10 w-10 shadow-2xl  text-gray-700 hover:scale-110" />
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
            <img
              src="src/assets/kundera.png"
              alt=""
              className="rounded-l-[44px]"
            />
            <div className="flex flex-col pt-20 px-10">
              <h3 className="text-lg">11111111</h3>
              <p className="text-[15px] pt-10">
                The exhibition about the Czech writer was organised by the
                Centre tchèque de Paris in cooperation with the Moravian Library
                in Brno.
              </p>
            </div>
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
