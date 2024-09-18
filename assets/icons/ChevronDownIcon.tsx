import { IconProps } from "@/utils/types";
import React from "react";

const ChevronDownIcon: React.FC<IconProps> = ({
  width = 21,
  height = 20,
  color = "var(--black)",
  ...props
}) => (
  <svg width={width} height={height} viewBox="0 0 21 20" fill="none" {...props}>
    <path
      d="M5.0293 7.50049L10.0293 12.5005L15.0293 7.50049"
      stroke={color}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default ChevronDownIcon;
