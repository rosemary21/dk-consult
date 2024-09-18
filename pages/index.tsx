import GetInTouch from "@/components/general/GetInTouch";
import RootLayout from "@/components/layouts/RootLayout";
import EmpoweringVisionSection from "@/components/pages/home/EmpoweringVisionSection/EmpoweringVisionSection";
import GreatResults from "@/components/pages/home/GreatResults";
import Hero from "@/components/pages/home/Hero";
import ServicesListAtHome from "@/components/pages/home/ServicesList/ServicesListAtHome";
import TechStack from "@/components/pages/home/TechStack/TechStack";
import TrustedBy from "@/components/pages/home/TrustedBy";
import WhyChooseUs from "@/components/pages/home/WhyChooseUs";
import { HeroBannerImageTwo } from "@/assets/images/jpgs";
import { HeroBannerImageOne } from "@/assets/images/pngs";
import HorizontalScroll from "@/components/general/HorizontalScroll";

export default function Home() {
  return (
    <RootLayout>
      <Hero
        title={
          <>
            Transforming <span className="text-primary">Ideas</span> into
            <br />
            <span className="text-primary">Seamless</span> Technical
            <br />
            Solutions.
          </>
        }
        subTitle="Innovative Solutions, Expert Guidance"
        description="Our seasoned professionals deliver innovative strategies to enhance your business performance and growth."
        primaryButtonLabel="Reserve Your Spot for a Strategic Session"
        secondaryButtonLabel="Get in touch"
        images={[HeroBannerImageTwo, HeroBannerImageOne]}
      />
      <TrustedBy />
      <ServicesListAtHome />
      <EmpoweringVisionSection />
      <TechStack />
      <WhyChooseUs />
      <GreatResults />
      <HorizontalScroll />
      <GetInTouch />
    </RootLayout>
  );
}
