import React from "react";
import "../assets/portfolioItem.css";

export const Item = (props) => {
  return (
    <>
      <img src={props.imgSrc} alt={props.imgAlt} className="rounded-l-[44px]" />
      <div className="flex flex-col pt-20 px-10">
        <h3 className="text-lg">{props.header}</h3>
        <p className="text-[15px] pt-10">{props.paragraph}</p>
      </div>
    </>
  );
};
