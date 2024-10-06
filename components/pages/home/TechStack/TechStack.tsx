import {
  Item1,
  Item2,
  Item3,
  Item4,
  Item5,
  Item6,
  Item7
} from "@/assets/images/svgs";
import SectionContainer from "@/components/layouts/SectionContainer";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const images = [
  Item1,
  Item2,
  Item3,
  Item4,
  Item5,
  Item6,
  Item7,
  Item1,
  Item2,
  Item3,
  Item4,
  Item5,
  Item6,
  Item7
];

const svg = (
  <svg
    width="19"
    height="18"
    viewBox="0 0 19 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.5 9L11 4.5M15.5 9L11 13.5M15.5 9H7.625M3.5 9H5.375"
      stroke="#1877F2"
      stroke-width="1.125"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const ImageSwiper = ({ reverse = false }) => (
  <Swiper
    modules={[Autoplay]}
    slidesPerView={5}
    spaceBetween={10}
    freeMode={true}
    autoplay={{
      delay: 0,
      reverseDirection: reverse,
      disableOnInteraction: false
    }}
    speed={30000}
    loop={true}
    allowTouchMove={false}
    className="w-full"
    breakpoints={{
      320: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      640: {
        slidesPerView: 5,
        spaceBetween: 10
      },
      1024: {
        slidesPerView: 7,
        spaceBetween: 1
      }
    }}
  >
    {images.map((img, index) => (
      <SwiperSlide key={index}>
        <div className="relative w-full h-10">
          <Image src={img} alt={`Item ${index + 1}`} fill objectFit="contain" />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);

const TechStack = () => {
  return (
    <SectionContainer
      className="flex flex-col items-center justify-center text-center md:text-left py-24"
      contentContainerClassName=" bg-slate-50"
    >
      <h2 className="text-3xl">Complete Tech Stack Coverage</h2>
      <p className="text-base sm:w-[75%] lg:w-[50%] text-center">
        Our team brings expertise across a vast array of programming languages,
        ensuring your project is built with the right tools for success.
      </p>

      <div className="my-10 w-full space-y-6 opacity-30">
        <div className="">
          <ImageSwiper />
        </div>
        <div className=" hidden md:block">
          <ImageSwiper reverse />
        </div>
      </div>

      <p className="font-semibold flex gap-2 items-center">
        See Our Wide-Ranging Knowledge {svg}
      </p>
    </SectionContainer>
  );
};

export default TechStack;
