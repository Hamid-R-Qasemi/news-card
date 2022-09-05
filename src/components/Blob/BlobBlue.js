import React from "react";

function Blob(props) {
  return (
    <svg
      className={props.className}
      viewBox="0 0 800 500"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="100%"
      id="blobSvg"
    >
      <g transform="translate(158.04263305664062, -7.6164398193359375)">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#3dabfa" }}></stop>
            <stop offset="100%" style={{ stopColor: "#abd4f1" }}></stop>
          </linearGradient>
        </defs>
        <path className="blob" fill="url(#gradient)">
          <animate
            attributeName="d"
            dur="5000ms"
            repeatCount="indefinite"
            values="
            M452.5,337.5Q425,425,337.5,461Q250,497,173,450.5Q96,404,75.5,327Q55,250,84.5,182Q114,114,182,92.5Q250,71,332,78.5Q414,86,447,168Q480,250,452.5,337.5Z;

            M418,333.5Q417,417,333.5,423Q250,429,172,417.5Q94,406,52.5,328Q11,250,48,167.5Q85,85,167.5,67Q250,49,308.5,91Q367,133,393,191.5Q419,250,418,333.5Z;

            M419.5,316.5Q383,383,316.5,412Q250,441,184,411.5Q118,382,73.5,316Q29,250,71,181.5Q113,113,181.5,96Q250,79,326,88.5Q402,98,429,174Q456,250,419.5,316.5Z;

            M451.5,335.5Q421,421,335.5,458Q250,495,196,426.5Q142,358,99.5,304Q57,250,96.5,193Q136,136,193,110Q250,84,309.5,107.5Q369,131,425.5,190.5Q482,250,451.5,335.5Z;

            M452.5,337.5Q425,425,337.5,461Q250,497,173,450.5Q96,404,75.5,327Q55,250,84.5,182Q114,114,182,92.5Q250,71,332,78.5Q414,86,447,168Q480,250,452.5,337.5Z;
          "
          ></animate>
        </path>
      </g>
    </svg>
  );
}

export default Blob;
