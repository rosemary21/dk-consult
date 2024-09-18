import React, { useState } from "react";
import { useRouter } from "next/router";
import { LogoIcon } from "@/assets/icons";
import Button from "../Button";
import NavItem from "./NavItem";
import { navRoutes } from "@/utils/variables";
import { RouteType } from "@/utils/types";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { asPath } = useRouter();

  const toggleNav = () => setIsOpen(!isOpen);

  const isRouteActive = (route: RouteType): boolean => {
    const [firstSegment] = asPath.split("/").filter(Boolean);
    return route.path === "/" && !firstSegment
      ? true
      : route.activeIn.includes(`/${firstSegment || ""}`);
  };

  return (
    <div className="lg:hidden">
      <button onClick={toggleNav} className="p-2">
        <div className="flex flex-col gap-1">
          <span className="h-1 w-9 rounded-lg bg-primary"></span>
          <span className="h-1 w-9 rounded-lg bg-primary"></span>
          <span className="h-1 w-6 rounded-lg bg-primary"></span>
        </div>
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-white h-fit shadow-md z-50 p-6">
          <div className="flex justify-between items-center mb-8">
            <LogoIcon />
            <button onClick={toggleNav} className="p-2">
              <div className="flex flex-col gap-1">
                <span className="h-1 w-9 rounded-lg rotate-45 bg-primary"></span>
                <span className="h-1 w-6 rounded-lg rotate-45 bg-primary"></span>
              </div>
            </button>
          </div>
          <div className="flex flex-col gap-6">
            {navRoutes.map((route: RouteType) => (
              <NavItem
                key={route.path}
                isActive={isRouteActive(route)}
                route={route}
                className={isRouteActive(route) ? "active-link" : ""}
              />
            ))}
          </div>
          <div className="mt-8">
            <ul className="flex justify-center gap-3 mb-4">
              {["RU /", "ENG /", "ES"].map((lang) => (
                <li key={lang} className="cursor-pointer">
                  {lang}
                </li>
              ))}
            </ul>
            <Button variant="black" isSpecial={true} className="w-full">
              Get in touch
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
