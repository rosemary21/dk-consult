import React from "react";
import Link from "next/link";

interface NavItemProps {
  route: RouteType;
  isActive: boolean;
  className?: string;
}
const NavItem: React.FC<NavItemProps> = ({ route, isActive, className }) => {
  return (
    <ul className="relative">
      <li className="">
        <Link
          href={route.path}
          className={`flex items-center  ${className ?? ""} ${
            isActive ? "active" : ""
          } py-2 ${
            isActive ? "text-primary" : "text-black"
          } hover:text-gray-700 transition-colors duration-200`}
        >
          {route.label}
          {route.Icon && <route.Icon className="h-4 w-4" />}
        </Link>
      </li>
    </ul>
  );
};

export default NavItem;
