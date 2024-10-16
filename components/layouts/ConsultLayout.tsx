import React from "react";
import SectionContainer from "./SectionContainer";

const ConsultLayout: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <SectionContainer
      contentContainerClassName="h-[calc(100vh-8.6rem)] items-center justify-center flex"
      className="flex items-center justify-center"
    >
      <div
        className={`w-full max-w-[32rem] p-5 rounded-xl bg-slate-50 shadow-md ${className}`}
      >
        {children}
      </div>
    </SectionContainer>
  );
};

export default ConsultLayout;
