import React from "react";
import HamburguerSvg from "./HamburguerSvg";

export default function ButtonToggleMenu(props) {
  return (
    <div className="-my-2 -mr-2 md:hidden" {...props}>
      <div className="bg-gray-200 dark:bg-midnight text-gray-600 dark:text-gray-300 rounded-full p-3.5 inline-flex items-center justify-center hover:text-gray-700 hover:bg-gray-300 cursor-pointer focus:outline-none general-ring-state">
        <HamburguerSvg />
      </div>
    </div>
  );
}
