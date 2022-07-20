import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
const NavItem = ({ href, text }) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link href={href || "/"}>
      <a
        className={` text-center ${
          isActive
            ? "font-bold text-gray-900 dark:text-gray-200"
            : "font-normal text-gray-600 dark:text-gray-400"
        } 'hidden md:inline-block p-1 sm:px-6 sm:py-2 rounded-full hover:bg-gray-100 dark:hover:bg-midnight transition-all`}
      >
        <span
          className={`${
            isActive
              ? "py-1 border-b-2 border-teal-400 dark:border-teal-500"
              : "capsize"
          }`}
        >
          {text}
        </span>
      </a>
    </Link>
  );
};

export default NavItem;
