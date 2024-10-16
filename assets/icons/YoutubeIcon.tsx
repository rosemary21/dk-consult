import React from "react";

const YoutubeIcon: React.FC<IconProps> = ({
  width = 23,
  height = 16,
  color = "var(--black)",
  ...props
}) => (
  <svg width={width} height={height} viewBox="0 0 23 16" fill="none" {...props}>
    {/* <svg width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg"> */}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M19.9673 0.735448C20.929 0.853016 21.8482 1.7306 21.9651 2.6458C22.3792 5.99988 22.3792 9.25233 21.9651 12.6054C21.8482 13.5206 20.929 14.3992 19.9673 14.5157C14.1029 15.1994 8.17221 15.1994 2.30949 14.5157C1.34689 14.3989 0.427732 13.5206 0.310784 12.6054C-0.103269 9.25207 -0.103269 5.99988 0.310784 2.6458C0.427732 1.7306 1.34689 0.852755 2.30949 0.735448C8.17221 0.0517255 14.1026 0.0517255 19.9673 0.735448ZM9.28156 4.14229V11.1094L14.8505 7.62596L9.28156 4.14229Z"
      fill={color}
    />
  </svg>
);

export default YoutubeIcon;
