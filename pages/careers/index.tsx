import RootLayout from "@/components/layouts/RootLayout";
import React from "react";
import GetInTouch from "@/components/general/GetInTouch";
import Hero from "@/components/pages/home/Hero";
import { HeroBannerImageFive } from "@/assets/images/jpgs";
import CareersApplication from "@/components/pages/careers/CareersApplication";

const index = () => {
  return (
    <RootLayout>
      <Hero
        title={
          <>
            Innovate, <br /> from Anywhere.
          </>
        }
        subTitle="Careers"
        description="We are a remote-first company that connects you to global opportunities."
        primaryButtonLabel="Schedule a Call"
        secondaryButtonLabel="Get in touch"
        images={[HeroBannerImageFive]}
      />
      <CareersApplication />
      <GetInTouch />
    </RootLayout>
  );
};

export default index;
