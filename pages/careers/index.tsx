import RootLayout from "@/components/layouts/RootLayout";
import React from "react";
import GetInTouch from "@/components/general/GetInTouch";
import Hero from "@/components/pages/home/Hero";
import { HeroBannerImageFive } from "@/assets/images/jpgs";
import CareersApplication from "@/components/pages/careers/CareersApplication";
import { useRouter } from "next/router";
import { Routes } from "@/utils/variables";

const Careers = () => {
  const { push } = useRouter();
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
        primaryButtonAction={() => {
          push(Routes.Consult.path);
        }}
        secondaryButtonLabel="Get in touch"
        secondaryButtonAction={() => {
          push(Routes.Contact.path);
        }}
        images={[HeroBannerImageFive]}
      />
      <CareersApplication />
      <GetInTouch />
    </RootLayout>
  );
};

export default Careers;
