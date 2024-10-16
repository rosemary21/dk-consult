import { ChevronLeftIcon } from "@/assets/icons";
import Button from "@/components/Button";
import TextArea from "@/components/general/TextArea";
import ConsultLayout from "@/components/layouts/ConsultLayout";
import { Routes } from "@/utils/variables";
import { useRouter } from "next/router";
import React from "react";

const AdditionalInformation = () => {
  const labelClassName = "text-sm",
    inputClassName =
      "border-b-2 border-l-0 border-r-0 border-t-0 border-slate-300 text-slate-500 focus:text-primary focus:border-primary rounded-none px-0 bg-transparent",
    buttonClassName = "text-sm !py-2 rounded-md inline-flex items-center gap-1",
    { push } = useRouter();
  return (
    <ConsultLayout className="flex flex-col gap-6">
      <div className="">
        <h1 className="font-bold">Additional information</h1>
        <p className="opacity-60">
          Would you like to add any additional information (optional)?
        </p>
      </div>
      <TextArea
        labelClassName={labelClassName}
        placeholder="Type here..."
        inputClassName={inputClassName}
      />
      <div className="flex gap-2 justify-end mt-2">
        <Button
          onClick={() => {
            push(`${Routes.Consult.path}/contact-duration`);
          }}
          className={`${buttonClassName} pl-3`}
        >
          <span>
            <ChevronLeftIcon />
          </span>
          <span>Back</span>
        </Button>
        <Button
          onClick={() => {}}
          className={`${buttonClassName}`}
          buttonType="primary"
        >
          <span>Submit</span>
        </Button>
      </div>
    </ConsultLayout>
  );
};

export default AdditionalInformation;
