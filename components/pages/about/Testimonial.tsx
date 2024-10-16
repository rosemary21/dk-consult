import { HeroBannerImageTwo } from "@/assets/images/jpgs";
import SectionContainer from "@/components/layouts/SectionContainer";
import Image from "next/image";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface TestimonialSlideProps {
  date: string;
  title: string;
  content: string;
}

const TestimonialSlide: React.FC<TestimonialSlideProps> = ({
  date,
  title,
  content
}) => {
  return (
    <div className="flex  gap-4 h-72 rounded-lg overflow-hidden bg-slate-50  my-10">
      <div className="flex-[0.4] relative h-full">
        <Image
          src={HeroBannerImageTwo}
          alt="Testimonial Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex-[0.6] space-y-5 p-5">
        <p className="text-sm">{date}</p>
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-sm">{content}</p>
      </div>
    </div>
  );
};

const Testimonial = () => {
  const testimonials = [
    {
      date: "May 8, 2020",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt."
    },
    {
      date: "June 10, 2020",
      title: "A seamless and rewarding experience.",
      content:
        "Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu."
    },
    {
      date: "June 10, 2020",
      title: "A seamless and rewarding experience.",
      content:
        "Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu."
    },
    {
      date: "June 10, 2020",
      title: "A seamless and rewarding experience.",
      content:
        "Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu."
    },
    {
      date: "June 10, 2020",
      title: "A seamless and rewarding experience.",
      content:
        "Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu."
    },
    {
      date: "June 10, 2020",
      title: "A seamless and rewarding experience.",
      content:
        "Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu."
    },
    {
      date: "June 10, 2020",
      title: "A seamless and rewarding experience.",
      content:
        "Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu."
    }
  ];

  return (
    <SectionContainer
      contentContainerClassName="py-10 md:py-20"
      className="flex flex-col gap-6"
    >
      <div className="text-center">
        <h2 className="text-3xl">Testimonials</h2>
        <p>Partnering with us is a seamless and rewarding experience.</p>
      </div>
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={3}
        spaceBetween={25}
        centeredSlides={true}
        freeMode={true}
        autoplay={{
          delay: 2000
        }}
        pagination={{ clickable: true }}
        speed={1000}
        loop={true}
        className="w-full"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="!w-[600px]">
            <TestimonialSlide
              date={testimonial.date}
              title={testimonial.title}
              content={testimonial.content}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </SectionContainer>
  );
};

export default Testimonial;
