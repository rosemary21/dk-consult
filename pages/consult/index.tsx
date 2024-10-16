import { ChevronRightIcon } from "@/assets/icons";
import Button from "@/components/Button";
import RadioButton from "@/components/general/RadioButton";
import ConsultLayout from "@/components/layouts/ConsultLayout";
import { Routes } from "@/utils/variables";
import { useRouter } from "next/router";
import React from "react";

const Consult = () => {
  const labelClassName = "text-sm",
    buttonClassName =
      "text-sm !py-2 pr-3 rounded-md inline-flex items-center gap-1",
    { push } = useRouter();
  return (
    <ConsultLayout className="flex flex-col gap-6">
      <div className="">
        <h1 className="font-bold">Reason for consultation</h1>
        <p className="opacity-60">
          What is the reason you are planning on scheduling a call with us?
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <RadioButton labelClassName={labelClassName} label="I have a project" />
        <RadioButton labelClassName={labelClassName} label="I need a tutor" />
        <RadioButton labelClassName={labelClassName} label="Price enquiries" />
      </div>
      <div className="flex justify-end">
        <Button
          onClick={() => {
            push(`${Routes.Consult.path}/contact`);
          }}
          className={buttonClassName}
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

export default Consult;
