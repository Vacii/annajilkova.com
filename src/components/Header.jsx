import React from "react";
import "../assets/header.css";

export const Header = () => {
  return (
    <header className="hidden md:block relative w-full max-w-[1500px] mx-auto">
      <nav className="absolute top-16 left-16 flex flex-row gap-10">
        <a href="#">About</a>
        <a href="#">My work</a>
        <a href="#">Contact me</a>
      </nav>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="688"
        height="486"
        viewBox="0 0 688 486"
        fill="none"
      >
        <path
          d="M-6 484C28.6127 474.505 84.4286 456.145 106.464 427.73C121.97 407.736 128.504 390.878 120.522 367.525C110.53 338.289 87.2241 309.516 113.35 280.694C141.652 249.471 176.581 254.985 216.347 254.985C276.047 254.985 281.145 197.291 321.925 171.04C349.139 153.522 378.053 147.259 408.569 159.497C434.701 169.977 468.484 192.559 498.368 184.55C516.649 179.65 532.682 168.43 548.145 158.71C559.181 151.773 573.292 145.843 578.126 133.789C587.478 110.468 601.415 85.3352 617.431 65.058C630.559 48.4381 651.489 36.2167 667.782 22.5604C674.34 17.0637 678.826 0 686 0"
          stroke="#6F8B86"
          stroke-opacity="0.27"
          stroke-width="3"
          stroke-linecap="round"
        />
      </svg>
    </header>
  );
};
