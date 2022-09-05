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
      <g transform="translate(130.16744995117188, -33.659873962402344)">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#729754" }}></stop>
            <stop offset="100%" style={{ stopColor: "#96c95c" }}></stop>
          </linearGradient>
        </defs>
        <path className="blob" fill="url(#gradient)">
          <animate
            attributeName="d"
            dur="5000ms"
            repeatCount="indefinite"
            values="
            M434,332Q414,414,332,445.5Q250,477,165,448.5Q80,420,74.5,335Q69,250,97.5,188Q126,126,188,84Q250,42,312,84Q374,126,414,188Q454,250,434,332Z;

            M438,320Q390,390,320,430Q250,470,193.5,416.5Q137,363,111.5,306.5Q86,250,84,166Q82,82,166,78Q250,74,304,108Q358,142,422,196Q486,250,438,320Z;

            M424.5,307.5Q365,365,307.5,398.5Q250,432,164,427Q78,422,48,336Q18,250,79.5,195.5Q141,141,195.5,95Q250,49,318,81.5Q386,114,435,182Q484,250,424.5,307.5Z;

            M398,315Q380,380,315,425Q250,470,183.5,426.5Q117,383,60,316.5Q3,250,43,166.5Q83,83,166.5,51Q250,19,303,81.5Q356,144,386,197Q416,250,398,315Z;

            M434,332Q414,414,332,445.5Q250,477,165,448.5Q80,420,74.5,335Q69,250,97.5,188Q126,126,188,84Q250,42,312,84Q374,126,414,188Q454,250,434,332Z;
          "
          ></animate>
        </path>
      </g>
    </svg>
  );
}

export default Blob;
