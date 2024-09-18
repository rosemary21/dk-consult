import { IconProps } from "@/utils/types";
import React from "react";

const InstagramIcon: React.FC<IconProps> = ({
  width = 17,
  height = 17,
  color = "var(--black)",
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0  17 17"
    fill="none"
    {...props}
  >
    {/* <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"> */}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13.5 0.11084H4.5C2.02522 0.11084 0 2.01022 0 4.33309V12.7776C0 15.0996 2.02522 16.9999 4.5 16.9999H13.5C15.9748 16.9999 18 15.0996 18 12.7776V4.33309C18 2.01022 15.9748 0.11084 13.5 0.11084ZM9.00001 12.0737C6.92866 12.0737 5.24994 10.4979 5.24994 8.55525C5.24994 6.61174 6.92866 5.03663 9.00001 5.03663C11.0705 5.03663 12.7501 6.61174 12.7501 8.55525C12.7501 10.4979 11.0705 12.0737 9.00001 12.0737ZM12.7501 3.98107C12.7501 4.56395 13.2532 5.03663 13.8751 5.03663C14.497 5.03663 15.0001 4.56395 15.0001 3.98107C15.0001 3.39819 14.497 2.9255 13.8751 2.9255C13.2532 2.9255 12.7501 3.39819 12.7501 3.98107Z"
      fill={color}
    />
  </svg>
);

export default InstagramIcon;
