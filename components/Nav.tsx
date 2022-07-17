import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { siteMetadata } from "../data/SiteMetadata";
import ButtonToggleMenu from "./ButtonToggleMenu";
import ProfileLogo from "./ProfileLogo";
import NavItem from "./NavItem";
import ButtonToogleTheme from "./ButtonToogleTheme";

export default function Nav({}) {
  const [mounted, setMouted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  useEffect(() => {
    setMouted(true);
    setTheme("light");
  }, []);

  return (
    <div
      className={`relative z-50 text-gray-900 dark:text-gray-100 bg-gradient-to-t`}
    >
      <div className="flex items-center justify-between max-w-6xl px-4 py-6 mx-auto sm:px-6 md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <ProfileLogo src={siteMetadata.avatarImage} />
        </div>
        <ButtonToggleMenu onClick={() => setIsOpen(true)} />

        <nav className="hidden space-x-6 text-lg md:flex">
          <NavItem href="/" text="Home" />
          <NavItem href="/about" text="About" />
          <NavItem href="/projects" text="Projects" />
          <NavItem href="/blog" text="Blog" />
          <NavItem href="/community-wall" text="Community wall" />
        </nav>

        <div className="items-center justify-end  md:flex md:flex-1 lg:w-0">
          <ButtonToogleTheme />
        </div>
      </div>
    </div>
  );
}
