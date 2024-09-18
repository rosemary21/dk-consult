import React, { forwardRef } from "react";

const SectionContainer = forwardRef<
  HTMLDivElement,
  {
    children: React.ReactNode;
    isInnerContent?: boolean;
    className?: string;
    contentContainerClassName?: string;
  }
>(({ children, isInnerContent, className, contentContainerClassName }, ref) => {
  return (
    <section ref={ref} className={`${contentContainerClassName}`}>
      <div
        className={`${className} ${
          isInnerContent ? "" : "px-6 my-32 max-w-[1550px] w-full mx-auto"
        } relative`}
      >
        {children}
      </div>
    </section>
  );
});

SectionContainer.displayName = "SectionContainer";

export default SectionContainer;
