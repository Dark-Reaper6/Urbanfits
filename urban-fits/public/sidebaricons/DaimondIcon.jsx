import React from "react";

export const DaimondIcon = ({color}) => {
  return (
    <svg
      width="15"
      height="14"
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.68424 0.492281C3.51892 0.563131 0 5.24716 0 5.39673C0 5.45971 0.314893 5.84545 0.692764 6.26268C1.07063 6.67204 2.08616 7.78991 2.95212 8.73459C3.81807 9.67927 4.89658 10.868 5.35317 11.3718C6.93551 13.1273 7.43146 13.6548 7.49444 13.6548C7.58104 13.6548 7.92742 13.2769 13.8395 6.78226C14.7212 5.82184 15.0361 5.42035 14.9968 5.32588C14.8865 5.02673 11.4385 0.515898 11.2968 0.476536C11.0685 0.413557 3.84169 0.429302 3.68424 0.492281ZM10.7063 0.96462C10.7063 1.05121 7.55742 4.99524 7.48657 4.98737C7.43934 4.98737 4.58169 1.42121 4.33764 1.05909C4.2353 0.901641 4.24318 0.901641 7.47082 0.901641C9.24997 0.901641 10.7063 0.93313 10.7063 0.96462ZM5.46338 3.18461L6.99849 5.11333L3.88105 5.13694C2.16489 5.14482 0.74787 5.13694 0.724253 5.1212C0.692764 5.08184 3.22765 1.61802 3.57403 1.23228C3.69999 1.09058 3.74722 1.07483 3.82594 1.15355C3.88105 1.20866 4.61317 2.12185 5.46338 3.18461ZM12.9027 3.17674C13.69 4.22376 14.3197 5.10546 14.304 5.1212C14.2882 5.13694 12.8634 5.14482 11.1393 5.13694L8.00614 5.11333L9.32869 3.46014C11.3046 0.980364 11.2653 1.0276 11.3755 1.15355C11.4306 1.20866 12.1155 2.12185 12.9027 3.17674ZM14.2489 5.67226C14.2489 5.70375 10.9583 9.34076 9.79316 10.5846C9.57273 10.8208 8.99018 11.4584 8.5021 12.0016C8.01401 12.5448 7.58104 12.9935 7.52593 13.0093C7.4787 13.0171 6.46317 11.9544 5.27445 10.6476C2.55063 7.65608 1.31468 6.29417 0.95255 5.9163L0.677019 5.62503H7.46295C11.1944 5.62503 14.2489 5.64864 14.2489 5.67226Z"
        fill={color || "black" }  
      />
    </svg>
  );
};
