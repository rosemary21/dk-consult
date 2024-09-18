import { IconProps } from "@/utils/types";
import React from "react";

const FacebookIcon: React.FC<IconProps> = ({
  width = 10,
  height = 17,
  color = "var(--black)",
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0  10 17"
    fill="none"
    {...props}
  >
    <path
      d="M6.39703 16.9972V9.30705H9.16203L9.57303 6.29611H6.39703V4.37827C6.39703 3.50943 6.65503 2.91456 7.98403 2.91456H9.66803V0.230142C8.84903 0.147573 8.02503 0.108166 7.20103 0.110981C4.75703 0.110981 3.07903 1.51089 3.07903 4.08084V6.29048H0.332031V9.30142H3.08503V16.9972H6.39703Z"
      fill={color}
    />
  </svg>
);

export default FacebookIcon;
