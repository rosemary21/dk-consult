import React from "react";

const ChevronLeftIcon: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  color = "var(--black)",
  ...props
}) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M14 7L9 12L14 17"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ChevronLeftIcon;
