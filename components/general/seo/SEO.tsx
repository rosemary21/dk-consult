import {
  SEODescription,
  siteName,
  defaultImage,
  defaultImageDescription,
  twitterHandle,
  authorName,
  siteUrl
} from "@/utils/variables";
import Head from "next/head";
import Script from "next/script";
import React from "react";

type SEOProps = {
  title?: string;
  description?: string;
  image?: string;
  imageDescription?: string;
  locale?: string;
};

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  image,
  imageDescription,
  locale
}) => {
  return (
    <>
      <Head key="main-head">
        <title>{`${siteName}${title ? ` | ${title}` : ""}`}</title>
        <meta
          property="og:title"
          content={`${siteName}${title ? ` | ${title}` : ""}`}
        />
        <meta name="author" content={authorName} />
        <meta
          name="description"
          content={description ? description : SEODescription}
        />
        <meta
          property="og:description"
          content={description ? description : SEODescription}
        />
        <meta property="og:image" content={image ? image : defaultImage} />
        <meta name="twitter:card" content={image ? image : defaultImage} />
        <meta name="twitter:site" content={twitterHandle} />
        <meta
          name="twitter:title"
          content={`${siteName}${title ? ` | ${title}` : ""}`}
        />
        <meta
          name="twitter:description"
          content={description ? description : SEODescription}
        />
        <meta name="twitter:image" content={image ? image : defaultImage} />
        <meta
          property="og:image:alt"
          content={imageDescription || defaultImageDescription}
        />
        <meta property="og:locale" content={locale ? locale : "en_US"} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
      </Head>
      <Script
        src="https://www.google-analytics.com/analytics.js"
        async
      ></Script>
    </>
  );
};

export default SEO;
