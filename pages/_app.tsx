import "@/styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import NextNProgress from "nextjs-progressbar";
import aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useMemo } from "react";
import SEO from "@/components/general/seo/SEO";

const Nav = dynamic(() => import("@/components/general/navigation/NavBar"), {
  ssr: false,
});
const Footer = dynamic(() => import("@/components/general/navigation/Footer"), {
  ssr: false,
});

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  imageDescription?: string;
  locale?: string;
}

type CustomAppProps = AppProps & {
  Component: AppProps["Component"] & {
    hideNav?: boolean;
    hideFooter?: boolean;
    seoProps?: SEOProps;
  };
};

const useAOS = () => {
  useEffect(() => {
    aos.init({
      once: true,
      easing: "ease-in-out",
      duration: 1000,
    });
  }, []);
};

export default function App({ Component, pageProps }: CustomAppProps) {
  useAOS();

  const memoizedSEO = useMemo(() => {
    const { seoProps } = Component;
    return (
      <SEO
        title={seoProps?.title}
        description={seoProps?.description}
        image={seoProps?.image}
        imageDescription={seoProps?.imageDescription}
        locale={seoProps?.locale}
      />
    );
  }, [Component]);

  return (
    <>
      <NextNProgress color="var(--primary)" height={3.5} />
      {memoizedSEO}
      {!Component.hideNav && <Nav />}
      <main>
        <Component {...pageProps} />
      </main>
      {!Component.hideFooter && <Footer />}
    </>
  );
}
