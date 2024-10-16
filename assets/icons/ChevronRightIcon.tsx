import React from "react";

const ChevronRightIcon: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  color = "var(--black)",
  ...props
}) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M10 17L15 12L10 7"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ChevronRightIcon;
