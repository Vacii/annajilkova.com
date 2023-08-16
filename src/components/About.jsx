import React from "react";
import "../assets/about.css";

export const About = () => {
  return (
    <section
      id="About"
      className="h-[80vh] flex relative flex-col justify-start items-center"
    >
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
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M15 32C15 21.2123 20 12.0914 20 1"
            stroke="#6F8B86"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M22 35C22 29.8869 25 26.8979 25 22"
            stroke="#6F8B86"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M33 35C42.1383 32.7826 48.5854 21.2377 50 13"
            stroke="#6F8B86"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M53 60C56.9667 60 60.3314 57 64 57"
            stroke="#6F8B86"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M44 47C47.9667 47 51.3314 43 55 43"
            stroke="#6F8B86"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M60 71C70.6389 70.2263 82.5964 67.2699 93 65"
            stroke="#6F8B86"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M61 88C63.2337 88 64.9408 87.4576 67 87"
            stroke="#6F8B86"
            stroke-width="2"
            stroke-linecap="round"
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
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M10 24C15.1718 22.9656 19.9077 16.1847 22 12"
            stroke="#F4C7ED"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M42 12C36.6321 17.1932 40.105 29.3754 40.105 36"
            stroke="#F4C7ED"
            stroke-width="2"
            stroke-linecap="round"
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
          <p>
            Hi! I am Anna and I’m energetic graphic designer with three years of
            experience. I specialize in working with Adobe programs such as
            Photoshop, Illustrator and InDesign, but I love to expand my skills
            and continually learn in other programs like Figma. My biggest
            achievement so far is the graphic design of a large exhibition about
            the Czech writer Milan Kundera at the Czech Centre in Paris.
          </p>
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
          stroke-width="2"
          stroke-linecap="round"
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
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M86.8884 158.744C89.2513 159.026 95.4982 159.551 96.4886 156.888C97.4769 154.231 95.6278 151.312 97.1905 149.041"
          stroke="#B07AE5"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </section>
  );
};
