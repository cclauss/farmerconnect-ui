import * as React from "react";

const RunTrace: React.FC<React.SVGProps<SVGSVGElement>> = ({
  fill = "black",
  ...props
}) => (
  <svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 500 500"
    fill={fill}
    {...props}
  >
    <path
      d="M263.86,356.71a8.63,8.63,0,0,0-11.94,2.45l-5.46,8.28c-2.09,3.16-5.17,3.17-7.27,0l-65.11-98.65a147.12,147.12,0,0,1-10.22-19.12c-.3-.72-7.39-17.89-7.39-33.24a86.36,86.36,0,1,1,172.71,0c0,15.48-7.31,33-7.38,33.22a8.61,8.61,0,1,0,15.88,6.67c.9-2.12,8.73-21.29,8.73-39.89a103.59,103.59,0,1,0-207.17,0c0,18.44,7.83,37.73,8.73,39.9a161.62,161.62,0,0,0,11.73,21.93l65.11,98.66c4.29,6.5,10.85,10.24,18,10.24s13.72-3.73,18-10.23l5.47-8.28A8.62,8.62,0,0,0,263.86,356.71Z"
      fill={fill}
    />
    <path
      d="M242.82,166.45a27.74,27.74,0,0,0-19.74,8.19L201.77,196a27.92,27.92,0,0,0,0,39.49l21.31,21.31a27.91,27.91,0,0,0,39.48,0l21.33-21.31a27.93,27.93,0,0,0,0-39.49l-21.31-21.31A27.75,27.75,0,0,0,242.82,166.45Zm32,49.24a10.64,10.64,0,0,1-3.14,7.57l-21.32,21.31a10.94,10.94,0,0,1-15.11,0L214,223.26a10.69,10.69,0,0,1,0-15.13l21.33-21.32h0a10.69,10.69,0,0,1,15.12,0l21.31,21.32A10.64,10.64,0,0,1,274.84,215.69Z"
      fill={fill}
    />
    <path
      d="M356.12,301.38,290.28,267a8.62,8.62,0,0,0-12.59,7.64v68.67A8.6,8.6,0,0,0,290.28,351l65.84-34.33a8.6,8.6,0,0,0,0-15.27Zm-61.2,27.76V288.88L333.52,309Z"
      fill={fill}
    />
  </svg>
);

export default RunTrace;
