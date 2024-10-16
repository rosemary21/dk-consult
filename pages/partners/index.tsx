import React from "react";
import { HeroBannerImageThree } from "@/assets/images/pngs";
import Partners from "@/components/pages/partners/Partners";
import GetInTouch from "@/components/general/GetInTouch";
import RootLayout from "@/components/layouts/RootLayout";
import Hero from "@/components/pages/home/Hero";
import { useRouter } from "next/router";
import { Routes } from "@/utils/variables";

const PartnerPage = () => {
  const { push } = useRouter();
  return (
    <RootLayout>
      <Hero
        title={"Exceeding Expectations for Years"}
        subTitle="Our clients"
        description="57+ active clients with an average relationship of over 3 years. And a 96% retention rate."
        primaryButtonLabel="Schedule a Call"
        secondaryButtonLabel="Get in touch"
        images={[HeroBannerImageThree]}
        primaryButtonAction={() => {
          push(Routes.Consult.path);
        }}
        secondaryButtonAction={() => {
          push(Routes.Contact.path);
        }}
      />
      <Partners />
      <GetInTouch />
    </RootLayout>
  );
};

export default PartnerPage;
