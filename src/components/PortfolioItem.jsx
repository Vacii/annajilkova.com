import React from "react";
import "../assets/portfolioItem.css";

export const PortfolioItem = ({
  data: { imgPath, imgAlt, headerText, subText },
}) => {
  return (
    <div className="flex flex-col justify-center items-center mt-10 item">
      <img src={imgPath} alt={imgAlt} className="rounded-t-3xl" />
      <div className="flex flex-col justify-around bg-white w-[337px] h-[200px] px-5 py-2 rounded-b-3xl shadow-xl">
        <div className="bg-[#F6F0E4] text-[#174416] py-2 w-32 text-center rounded-3xl text-xs">
          Exhibition design
        </div>
        <p>{headerText}</p>
        <p className="text-sm">{subText}</p>
      </div>
    </div>
  );
};
