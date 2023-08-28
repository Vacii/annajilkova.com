import React from "react";
import "../assets/footer.css";
import { ContactUs } from "./ContactUs";

export const Footer = () => {
  return (
    <footer>
      <div className=" flex flex-col relative overflow-hidden md:hidden">
        <svg
          className="blob"
          xmlns="http://www.w3.org/2000/svg"
          width="215"
          height="97"
          viewBox="0 0 215 97"
          fill="none"
        >
          <path
            d="M-72.5254 29.1529C-55.4114 25.8582 -41.2858 19.9904 -25.9935 29.6919C-15.1441 36.5748 -9.70462 46.3306 6.14065 48.2476C28.6941 50.9761 55.1833 35.1379 64.149 21.1455C73.4247 6.6695 93.9293 -3.45784 116.315 2.97477C128.822 6.56874 133.798 18.0387 146.049 21.7614C152.786 23.8084 161.221 20.1129 167.333 18.4892C175.155 16.411 183.65 15.3079 191.955 16.2948C204.585 17.7956 212.423 25.3487 213.656 34.5426C214.448 40.4408 213.879 46.867 211.883 52.5978C209.916 58.2422 205.275 60.8469 200.25 64.8784C197.818 66.8287 194.889 69.7128 194.355 72.4239C193.733 75.5779 197.491 77.9551 198.737 80.7778C202.89 90.1912 180.151 92.9625 172.237 93.3664C156.575 94.1659 140.338 92.2728 130.66 82.3177C123.233 74.6769 124.706 62.8429 113.081 57.4869C104.918 53.7263 92.6922 52.3163 84.0242 55.8701C72.6596 60.5294 69.5055 71.0806 61.1234 77.698C46.4686 89.2675 24.7156 99.54 2.01955 94.8293C-4.3367 93.5101 -9.47796 89.3847 -14.0997 86.1289C-20.3966 81.6932 -27.5167 77.7465 -35.0703 74.5413C-43.6749 70.89 -55.5646 69.2346 -64.9613 72.1544C-69.4424 73.5468 -72.8548 76.3921 -77.742 76.9666C-84.4414 77.7541 -90.1677 77.3472 -96 74.8877"
            stroke="#6F8B86"
            stroke-opacity="0.3"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
        <div className="flex flex-col justify-center align-middle mt-[200px] px-7">
          <h2 className="text-2xl text-[#B07AE5]">Want to work together?</h2>
          <ContactUs />
          <div className="flex flex-row gap-2 justify-center mt-10 mb-10">
            <a
              href="https://dribbble.com/Adina_"
              title="Dribble profile"
              target="_blank"
            >
              <img src="src/assets/dribble-icon.png" alt="dribble-icon" />
            </a>

            <a
              href="https://www.linkedin.com/in/anna-jílková-4a5778279/"
              title="LinkedIn profile"
              target="_blank"
            >
              <img src="src/assets/linkedin-icon.png" alt="linkedin-icon" />
            </a>
          </div>
        </div>
        <div className="footer-green-blur"></div>
      </div>
    </footer>
  );
};
