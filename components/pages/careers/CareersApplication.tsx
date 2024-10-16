import Button from "@/components/general/Button";
import SectionContainer from "@/components/layouts/SectionContainer";
import React from "react";

const CareersApplication = () => {
  return (
    <SectionContainer
      contentContainerClassName="py-10"
      className="flex-col gap-4 flex items-center justify-center"
    >
      <p className="text-3xl font-medium">We don&apos;t just fill vacancies.</p>
      <p className="md:w-[60%] text-center text-text-gray">
        We go beyond traditional hiring. By spotlighting your strengths and
        interests, we can connect you to your ideal role.
      </p>
      <p className="md:w-[60%] text-center text-text-gray">
        Don&apos;t see your dream job listed? Fill out an open application.
        We&apos;re always looking for top talent!
      </p>
      <div className="flex flex-col md:flex-row  gap-4">
        <Button variant="black">Send an Open Application</Button>
        <Button variant="secondary">Get in touch</Button>
      </div>
    </SectionContainer>
  );
};

export default CareersApplication;
