import React from "react";

import "../assets/about.css";

export const About = () => {
  return (
    <>
      <section id="About">
        <div className="h-[92vh] flex relative flex-col justify-start items-center pt-10 overflow-y-auto overflow-x-hidden md:hidden ">
          <div className="flex relative flex-col justify-center items-center gap-10">
            <svg
              className="svg-about-green"
              xmlns="http://www.w3.org/2000/svg"
              width="94"
              height="89"
              viewBox="0 0 94 89"
              fill="none"
            >
              <path
                d="M1 19V35"
                stroke="#6F8B86"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M15 32C15 21.2123 20 12.0914 20 1"
                stroke="#6F8B86"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M22 35C22 29.8869 25 26.8979 25 22"
                stroke="#6F8B86"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M33 35C42.1383 32.7826 48.5854 21.2377 50 13"
                stroke="#6F8B86"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M53 60C56.9667 60 60.3314 57 64 57"
                stroke="#6F8B86"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M44 47C47.9667 47 51.3314 43 55 43"
                stroke="#6F8B86"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M60 71C70.6389 70.2263 82.5964 67.2699 93 65"
                stroke="#6F8B86"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M61 88C63.2337 88 64.9408 87.4576 67 87"
                stroke="#6F8B86"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <svg
              className="svg-about-pink"
              xmlns="http://www.w3.org/2000/svg"
              width="43"
              height="37"
              viewBox="0 0 43 37"
              fill="none"
            >
              <path
                d="M1 1H19"
                stroke="#F4C7ED"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M10 24C15.1718 22.9656 19.9077 16.1847 22 12"
                stroke="#F4C7ED"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M42 12C36.6321 17.1932 40.105 29.3754 40.105 36"
                stroke="#F4C7ED"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <img src="src/assets/picture.jpeg" alt="profile_picture" />
            <div className="flex relative flex-col items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="222"
                height="2"
                viewBox="0 0 222 2"
                fill="none"
              >
                <path d="M0 1H222" stroke="#6F8B86" />
              </svg>
              <p className="about-text-mobile">
                Hi! I am Anna and I’m energetic graphic designer with three
                years of experience. I specialize in working with Adobe programs
                such as Photoshop, Illustrator and InDesign, but I love to
                expand my skills and continually learn in other programs like
                Figma. My biggest achievement so far is the graphic design of a
                large exhibition about the Czech writer Milan Kundera at the
                Czech Centre in Paris.
              </p>
              <a
                href="src/assets/resume.pdf"
                target="_blank"
                className="text-[#B07AE5] px-5 py-2 border-2 rounded-xl border-[#B07AE5] hover:bg-[#B07AE5] hover:text-white mt-5"
              >
                Download my CV
              </a>
            </div>
          </div>
          <div className="about-green-blur"></div>

          <svg
            className="svg-white-about"
            xmlns="http://www.w3.org/2000/svg"
            width="111"
            height="89"
            viewBox="0 0 111 89"
            fill="none"
          >
            <path
              d="M154.185 18.2999C145.371 19.5883 136.522 22.5419 127.63 23.1125C118.744 23.6827 109.026 20.7008 101.382 16.8865C97.9885 15.193 95.034 12.5883 92.019 10.4249C87.7354 7.35123 82.9507 5.04534 77.8205 3.22289C69.5446 0.282956 61.7875 -0.625725 55.9471 6.11714C48.8842 14.2715 45.4045 25.1083 33.0761 28.3289C28.3406 29.5659 23.3372 29.6957 18.7625 31.425C12.9005 33.641 10.1584 37.9312 7.48045 42.8001C3.9431 49.2316 -2.30889 59.638 3.14416 66.4926C15.8905 82.5152 31.4126 59.4707 43.0918 55.9252C50.8528 53.5692 59.221 55.6539 61.9335 62.7907C63.759 67.5935 63.9245 72.2707 67.6897 76.5215C71.8905 81.2643 81.6023 89.1342 89.3328 87.863C97.4856 86.5223 103.634 75.2651 106.179 69.084C108.329 63.8615 107.606 57.9818 110.439 53.0983C112.636 49.3101 114.243 43.8095 117.653 40.7136C121.885 36.8715 129.01 36.9306 134.461 38.2905C139.663 39.5883 144.937 44.4635 148.813 47.579C154.312 51.9995 161.928 49.9799 168 47.9829"
              stroke="#F6F0E4"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          <svg
            className="svg-arrow-about"
            xmlns="http://www.w3.org/2000/svg"
            width="159"
            height="163"
            viewBox="0 0 159 163"
            fill="none"
          >
            <path
              d="M63.6333 1.39906C65.6179 3.74111 65.9237 8.07551 67.1215 10.882C69.5509 16.5736 71.7098 22.4029 72.4602 28.5895C73.3292 35.7537 72.1538 55.4446 63.3649 58.4623C55.6906 61.0973 50.7957 52.9765 52.6681 46.0511C55.0331 37.304 63.9175 42.175 69.0474 45.3233C86.1768 55.836 95.2159 70.4357 97.7437 90.6477C99.5287 104.92 95.9039 114.137 89.9209 126.905C85.1089 137.173 85.1486 151.949 95.2001 158.867"
              stroke="#B07AE5"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M86.8884 158.744C89.2513 159.026 95.4982 159.551 96.4886 156.888C97.4769 154.231 95.6278 151.312 97.1905 149.041"
              stroke="#B07AE5"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="hidden md:block h-full relative overflow-hidden">
          <div className="content relative">
            <div className="flex flex-row justify-center items-start">
              <div className="flex flex-col justify-start items-center gap-10 pt-32 w-2/3 relative">
                <svg
                  className="md:w-2/3 lg:w-full"
                  xmlns="http://www.w3.org/2000/svg"
                  width="699"
                  height="4"
                  viewBox="0 0 699 4"
                  fill="none"
                >
                  <path d="M0 2H699" stroke="#6F8B86" stroke-width="3" />
                </svg>
                <p className="md:w-2/3 about-text-desktop">
                  Hi! I am Anna and I’m energetic graphic designer with three
                  years of experience. I specialize in working with Adobe
                  programs such as Photoshop, Illustrator and InDesign, but I
                  love to expand my skills and continually learn in other
                  programs like Figma. My biggest achievement so far is the
                  graphic design of a large exhibition about the Czech writer
                  Milan Kundera at the Czech Centre in Paris.
                </p>
                <a
                  href="src/assets/resume.pdf"
                  target="_blank"
                  className="text-[#B07AE5] px-5 py-2 border-2 rounded-xl border-[#B07AE5] hover:bg-[#B07AE5] hover:text-white "
                >
                  Download my CV
                </a>
              </div>
              <div className="w-1/4 relative">
                <img src="src/assets/picture.png" alt="" />
                {/* green sparks */}
                <svg
                  className="absolute top-[-80px] left-10"
                  xmlns="http://www.w3.org/2000/svg"
                  width="166"
                  height="157"
                  viewBox="0 0 166 157"
                  fill="none"
                >
                  <path
                    d="M2 33.6552V61.7931"
                    stroke="#6F8B86"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                  <path
                    d="M26.6206 56.5172C26.6206 37.5457 35.4137 21.5055 35.4137 2"
                    stroke="#6F8B86"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                  <path
                    d="M38.931 61.7931C38.931 52.8011 44.2069 47.5446 44.2069 38.9311"
                    stroke="#6F8B86"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                  <path
                    d="M57 72.6897C73.0708 68.7901 84.4089 48.4871 86.8965 34"
                    stroke="#6F8B86"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                  <path
                    d="M93.4482 105.759C100.424 105.759 106.341 100.483 112.793 100.483"
                    stroke="#6F8B86"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                  <path
                    d="M77.6206 82.8966C84.5966 82.8966 90.5137 75.8621 96.9654 75.8621"
                    stroke="#6F8B86"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                  <path
                    d="M105.759 125.103C124.468 123.743 145.497 118.544 163.793 114.552"
                    stroke="#6F8B86"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                  <path
                    d="M107.517 155C111.445 155 114.448 154.046 118.069 153.241"
                    stroke="#6F8B86"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                </svg>
                <svg
                  className="absolute left-[-50px] top-40"
                  xmlns="http://www.w3.org/2000/svg"
                  width="75"
                  height="73"
                  viewBox="0 0 75 73"
                  fill="none"
                >
                  <path
                    d="M2 2H33.8726"
                    stroke="#F4C7ED"
                    stroke-width="4"
                    stroke-linecap="round"
                  />
                  <path
                    d="M25 48.0657C34.5099 46.1637 43.2183 33.6948 47.0657 26"
                    stroke="#F4C7ED"
                    stroke-width="4"
                    stroke-linecap="round"
                  />
                  <path
                    d="M72.8814 26C65.9364 35.5493 70.4296 57.95 70.4296 70.1313"
                    stroke="#F4C7ED"
                    stroke-width="4"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </div>
            <svg
              className="absolute bottom-0 left-[60vw]"
              xmlns="http://www.w3.org/2000/svg"
              width="231"
              height="228"
              viewBox="0 0 231 228"
              fill="none"
            >
              <path
                d="M229 2C227.432 7.75669 220.809 13.0211 217.626 18.0301C211.17 28.1889 204.195 38.0663 195.089 46.0829C184.544 55.3662 151.621 75.1769 137.061 64.4331C124.347 55.0517 131.978 38.2705 145.17 33.6384C161.832 27.7879 163.829 47.375 164.443 59.0546C166.492 98.0544 153.036 128.607 123.37 154.919C102.422 173.499 83.6135 177.85 56.4957 182.339C34.6856 185.949 11 202.29 11 226"
                stroke="#B07AE5"
                stroke-width="3"
                stroke-linecap="round"
              />
              <path
                d="M2 213C4.08093 216.959 9.9253 227.19 15.1032 225.886C20.2698 224.585 22.8191 218.612 28 218.612"
                stroke="#B07AE5"
                stroke-width="3"
                stroke-linecap="round"
              />
            </svg>
          </div>

          <div className="desktop-about-green-blur"></div>
          <svg
            className="absolute right-0 top-44 z-[-1]"
            xmlns="http://www.w3.org/2000/svg"
            width="413"
            height="295"
            viewBox="0 0 413 295"
            fill="none"
          >
            <path
              d="M514.758 59.8653C485.254 64.1745 455.633 74.0539 425.87 75.9624C396.126 77.8697 363.598 67.8956 338.01 55.1375C326.65 49.4732 316.761 40.7609 306.668 33.5246C292.33 23.2438 276.314 15.531 259.142 9.43518C231.44 -0.398388 205.474 -3.43777 185.925 19.116C162.283 46.3908 150.635 82.638 109.368 93.4103C93.5174 97.5481 76.7695 97.9822 61.4565 103.766C41.8346 111.178 32.6559 125.529 23.692 141.814C11.8515 163.326 -9.07587 198.134 9.17714 221.062C51.8431 274.654 103.8 197.575 142.894 185.715C168.872 177.835 196.883 184.808 205.963 208.679C212.074 224.744 212.628 240.388 225.231 254.607C239.292 270.47 271.8 296.794 297.677 292.542C324.967 288.058 345.547 250.404 354.066 229.729C361.264 212.261 358.844 192.594 368.324 176.26C375.678 163.589 381.06 145.19 392.473 134.835C406.638 121.984 430.489 122.182 448.734 126.73C466.147 131.071 483.803 147.378 496.775 157.799C515.181 172.585 540.674 165.829 561 159.15"
              stroke="#F6F0E4"
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </section>
    </>
  );
};
