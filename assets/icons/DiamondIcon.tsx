import React from "react";

const DiamondIcon: React.FC<IconProps> = ({
  width = 40,
  height = 41,
  color = "var(--white)",
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0  40 41"
    fill="none"
    {...props}
  >
    <path
      d="M10 8.8335H30L35 17.1668L20.8333 33.0002C20.7247 33.111 20.595 33.1991 20.452 33.2592C20.3089 33.3194 20.1552 33.3503 20 33.3503C19.8448 33.3503 19.6911 33.3194 19.548 33.2592C19.4049 33.1991 19.2753 33.111 19.1667 33.0002L5 17.1668L10 8.8335Z"
      stroke={color}
      strokeWidth="3.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.6667 20.5003L13.3333 16.8337L14.3333 15.167"
      stroke={color}
      strokeWidth="3.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default DiamondIcon;
