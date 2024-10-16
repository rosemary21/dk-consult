import GetInTouch from "@/components/general/GetInTouch";
import RootLayout from "@/components/layouts/RootLayout";
import React from "react";
import AboutUsSection from "../../components/pages/about/AboutUsSection";
import GreatResults from "@/components/pages/home/GreatResults";
import Testimonial from "../../components/pages/about/Testimonial";
import Hero from "@/components/pages/home/Hero";
import { HeroBannerImageFour } from "@/assets/images/jpgs";
import { useRouter } from "next/router";
import { Routes } from "@/utils/variables";

const About = () => {
  const { push } = useRouter();
  return (
    <RootLayout>
      <Hero
        title={"Innovating Business with Seamless IT Solutions"}
        subTitle="Seamless Technical Guidance and Tailored Solutions"
        description="DK Consult specializes in providing expert advice and innovative, seamless technical solutions that help businesses meet their goals."
        primaryButtonLabel="Schedule a Call"
        secondaryButtonLabel="Get in touch"
        images={[HeroBannerImageFour]}
        secondaryButtonAction={() => {
          push(Routes.Contact.path);
        }}
      />
      <AboutUsSection />
      <GreatResults />
      <Testimonial />
      <GetInTouch />
    </RootLayout>
  );
};

export default About;
