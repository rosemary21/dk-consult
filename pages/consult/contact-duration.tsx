import { ChevronLeftIcon, ChevronRightIcon } from "@/assets/icons";
import Button from "@/components/Button";
import RadioButton from "@/components/general/RadioButton";
import ConsultLayout from "@/components/layouts/ConsultLayout";
import { Routes } from "@/utils/variables";
import { useRouter } from "next/router";
import React from "react";

const ContactDuration = () => {
  const labelClassName = "text-sm",
    buttonClassName = "text-sm !py-2 rounded-md inline-flex items-center gap-1",
    { push } = useRouter();
  return (
    <ConsultLayout className="flex flex-col gap-6">
      <div className="">
        <h1 className="font-bold">Contact Duration</h1>
        <p className="opacity-60">How soon do you want to be contacted?</p>
      </div>
      <div className="flex flex-col gap-3">
        <RadioButton labelClassName={labelClassName} label="Immediately" />
        <RadioButton labelClassName={labelClassName} label="Tomorrow" />
        <RadioButton labelClassName={labelClassName} label="In a week time" />
        <RadioButton labelClassName={labelClassName} label="In 2 weeks time" />
      </div>

      <div className="flex gap-2 justify-end mt-2">
        <Button
          onClick={() => {
            push(`${Routes.Consult.path}/budget`);
          }}
          className={`${buttonClassName} pl-3`}
        >
          <span>
            <ChevronLeftIcon />
          </span>
          <span>Back</span>
        </Button>
        <Button
          onClick={() => {
            push(`${Routes.Consult.path}/additional-information`);
          }}
          className={`${buttonClassName} pr-3`}
          buttonType="primary"
        >
          <span>Next</span>
          <span>
            <ChevronRightIcon color="#fff" />
          </span>
        </Button>
      </div>
    </ConsultLayout>
  );
};

export default ContactDuration;
