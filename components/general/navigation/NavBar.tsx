import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import { LogoIcon } from "@/assets/icons";
import Button from "../Button";
import NavItem from "./NavItem";
import { navRoutes } from "@/utils/variables";
import { RouteType } from "@/utils/types";
import MobileNav from "./MobileNav";

const NavBar: React.FC = () => {
  const { asPath } = useRouter();
  const defaultDotStyle = { left: 0, width: 0, opacity: 0 };
  const [dotStyle, setDotStyle] = useState(defaultDotStyle);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const activeLink = navRef.current?.querySelector(".active-link");
    if (activeLink) {
      const rect = activeLink.getBoundingClientRect();
      const navRect = navRef.current?.getBoundingClientRect();
      setDotStyle({
        left: rect.left - (navRect?.left || 0),
        width: rect.width,
        opacity: 1,
      });
    } else {
      setDotStyle(defaultDotStyle);
    }
  }, [asPath]);

  /**
   * Determines if a given route is currently active.
   * @param route - The route to check
   * @returns true if the route is active, false otherwise
   */
  const isRouteActive = (route: RouteType): boolean => {
    const [firstSegment] = asPath.split("/").filter(Boolean);
    return route.path === "/" && !firstSegment
      ? true
      : route.activeIn.includes(`/${firstSegment || ""}`);
  };

  return (
    <nav className="px-6 shadow-sm bg-white h-16 z-50 w-full sticky top-0 flex items-center justify-between">
      <LogoIcon />
      <div ref={navRef} className=" gap-6 relative hidden lg:flex">
        {navRoutes.map((route: RouteType) => (
          <NavItem
            key={route.path}
            isActive={isRouteActive(route)}
            route={route}
            className={isRouteActive(route) ? "active-link" : ""}
          />
        ))}

        <div
          className="absolute bottom-0 h-[6px] w-[6px] rounded-full bg-primary transition-all duration-300 ease-in-out"
          style={{
            left: `${dotStyle.left + dotStyle.width / 2 - 3}px`,
            opacity: dotStyle.opacity,
          }}
        />
      </div>
      <div className=" gap-6 items-center hidden  lg:flex">
        <ul className="flex gap-3 [&>li:nth-child(2)]:text-primary">
          {["RU /", "ENG /", "ES"].map((lang) => (
            <li
              key={lang}
              className="cursor-pointer transition hover:scale-[1.02]"
            >
              {lang}
            </li>
          ))}
        </ul>
        <Button variant="black" isSpecial={true}>
          Get in touch
        </Button>
      </div>
      <MobileNav />
    </nav>
  );
};

export default NavBar;
