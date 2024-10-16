import { ChevronLeftIcon, ChevronRightIcon } from "@/assets/icons";
import Button from "@/components/Button";
import RadioButton from "@/components/general/RadioButton";
import ConsultLayout from "@/components/layouts/ConsultLayout";
import { Routes } from "@/utils/variables";
import { useRouter } from "next/router";
import React from "react";

const Budget = () => {
  const labelClassName = "text-sm",
    buttonClassName = "text-sm !py-2 rounded-md inline-flex items-center gap-1",
    { push } = useRouter();
  return (
    <ConsultLayout className="flex flex-col gap-6">
      <div className="">
        <h1 className="font-bold">Budget</h1>
        <p className="opacity-60">Help us understand your available budget?</p>
      </div>
      <div className="flex flex-col gap-3">
        <RadioButton labelClassName={labelClassName} label="Less than $1,000" />
        <RadioButton labelClassName={labelClassName} label="$1,000 - $9,000" />
        <RadioButton
          labelClassName={labelClassName}
          label="$10,000 - $49,000"
        />
        <RadioButton
          labelClassName={labelClassName}
          label="$50,000 and above"
        />
      </div>

      <div className="flex gap-2 justify-end mt-2">
        <Button
          onClick={() => {
            push(`${Routes.Consult.path}/contact`);
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
            push(`${Routes.Consult.path}/contact-duration`);
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

export default Budget;
