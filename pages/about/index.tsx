import GetInTouch from "@/components/general/GetInTouch";
import RootLayout from "@/components/layouts/RootLayout";
import React from "react";
import AboutUsSection from "./AboutUsSection";
import GreatResults from "@/components/pages/home/GreatResults";
import Testimonial from "./Testimonial";
import Hero from "@/components/pages/home/Hero";
import { HeroBannerImageFour } from "@/assets/images/jpgs";

const index = () => {
  return (
    <RootLayout>
      <Hero
        title={"Innovating Business with Seamless IT Solutions"}
        subTitle="Seamless Technical Guidance and Tailored Solutions"
        description="DK Consult specializes in providing expert advice and innovative, seamless technical solutions that help businesses meet their goals."
        primaryButtonLabel="Schedule a Call"
        secondaryButtonLabel="Get in touch"
        images={[HeroBannerImageFour]}
      />
      <AboutUsSection />
      <GreatResults />
      <Testimonial />
      <GetInTouch />
    </RootLayout>
  );
};

export default index;
