import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import NightDaySvg from "./NightDaySvg";

const ButtonToogleTheme = () => {
  const [mounted, setMouted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  useEffect(() => {
    setMouted(true);
  }, []);
  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full dark:bg-midnight general-ring-state"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {mounted && (
        <div>
          <NightDaySvg type={resolvedTheme === "dark" ? "night" : "day"} />
        </div>
      )}
    </button>
  );
};

export default ButtonToogleTheme;
