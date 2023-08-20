import React from "react";
import { useState } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "../assets/portfolioItem.css";
import { Item } from "./Item";

export const Portf = () => {
  const [imageIndex, setImageIndex] = useState(0);
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
    {
      header: "4444444444",
      imgSrc: "src/assets/kundera.png",
      imgAlt: "kundera_exhibition",
      paragraph:
        "Výstavu uspořádalo České centrum v Paříži ve spolupráci s Moravskou zemskou knihovnou v Brně, jíž manželé Kunderovi v roce 2020 darovali archiv a knihovnu.",
    },
  ];

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };
  return (
    <div className="h-[150vh] flex flex-col justify-center items-center">
      <div className="content">
        <Slider {...settings}>
          {items.map((item, idx) => (
            <div
              id={idx}
              className={
                idx === imageIndex ? "desktop-item active" : "desktop-item"
              }
            >
              <Item
                header={item.header}
                imgSrc={item.imgSrc}
                imgAlt={item.imgAlt}
                paragraph={item.paragraph}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
