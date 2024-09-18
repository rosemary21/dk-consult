import Image, { StaticImageData } from "next/image";
import React from "react";

interface HeroBannerProps {
  images: StaticImageData[];
}

const HeroBanner: React.FC<HeroBannerProps> = ({ images }) => {
  return (
    <div className="h-[clamp(20rem,47vw,32rem)] flex flex-col gap-4">
      {images.map((image, index) => (
        <div
          key={index}
          className={`relative rounded-xl overflow-hidden h-full`}
          style={{ flex: images.length === 1 ? 1 : index === 0 ? 0.6 : 0.4 }}
        >
          <Image
            src={image}
            alt={`HeroBannerImage${index + 1}`}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="bg-gray rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default HeroBanner;
