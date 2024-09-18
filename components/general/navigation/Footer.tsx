import {
  LogoIcon,
  YoutubeIcon,
  TwitterIcon,
  InstagramIcon,
  FacebookIcon,
} from "@/assets/icons";
import React from "react";

const Footer = () => {
  return (
    <footer className="px-6 mt-10  bg-primary py-20">
      <div className="w-full flex justify-between gap-6 md:items-start flex-col md:flex-row">
        <LogoIcon color2="white" />
        <ul>
          <li>About ConsultingCo</li>
          <li>Environment</li>
          <li>Jobs</li>
          <li>Privacy Policy</li>
          <li>Contact Us</li>
        </ul>
        <ul>
          <li>ConsultingCo Tickets</li>
        </ul>
        <ul>
          <li>
            Hotel Reservation: <span>123-456-7890</span>
          </li>
          <li>
            Email: <span>ConsultingCo@gmail.com</span>
          </li>
        </ul>
        <div>
          <p>Social</p>
          <span className="flex gap-2">
            <FacebookIcon />
            <YoutubeIcon />
            <TwitterIcon />
            <InstagramIcon />
          </span>
        </div>
      </div>
      <hr className="my-5" />
      <p className="text-center ">
        © 2019 ConsultingCo Media | All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
