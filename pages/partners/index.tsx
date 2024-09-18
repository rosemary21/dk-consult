import React from "react";
import { HeroBannerImageThree } from "@/assets/images/pngs";
import Partners from "@/components/pages/partners/Partners";
import GetInTouch from "@/components/general/GetInTouch";
import RootLayout from "@/components/layouts/RootLayout";
import Hero from "@/components/pages/home/Hero";

const index = () => {
  return (
    <RootLayout>
      <Hero
        title={"Exceeding Expectations for Years"}
        subTitle="Our clients"
        description="57+ active clients with an average relationship of over 3 years. And a 96% retention rate."
        primaryButtonLabel="Schedule a Call"
        secondaryButtonLabel="Get in touch"
        images={[HeroBannerImageThree]}
      />
      <Partners />
      <GetInTouch />
    </RootLayout>
  );
};

export default index;
