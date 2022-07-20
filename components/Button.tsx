import React from "react";

export default function Button({ buttonType, children, ...props }) {
  return (
    <button
      {...props}
      aria-label="button"
      type="button"
      className={`md:w-auto md:inline-flex py-3 px-2 md:px-12 rounded-full w-full border-4 border-indigo-500  ${
        buttonType === "primary"
          ? "bg-midnight text-white dark:bg-gray-200 dark:text-midnight"
          : buttonType === "secondary"
          ? "bg-gray-200 dark:bg-midnight text-midnight dark:text-white"
          : null
      } items-center justify-center general-ring-state font-medium`}
    >
      {children}
    </button>
  );
}
