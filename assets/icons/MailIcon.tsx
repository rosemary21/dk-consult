import React from "react";

const MailIcon: React.FC<IconProps> = ({
  width = 28,
  height = 29,
  color = "var(--black)",
  ...props
}) => (
  <svg width={width} height={height} viewBox="0 0 28 29" fill="none" {...props}>
    {/* <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"> */}
    <path
      d="M25.6215 5.27356H2.45117V23.8098H25.6215V5.27356ZM23.3044 9.90762L14.0363 15.7002L4.7682 9.90762V7.59059L14.0363 13.3832L23.3044 7.59059V9.90762Z"
      fill={color}
    />
  </svg>
);

export default MailIcon;
