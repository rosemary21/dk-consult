import { ChevronLeftIcon, ChevronRightIcon } from "@/assets/icons";
import Button from "@/components/Button";
import InputField from "@/components/general/InputField";
import ConsultLayout from "@/components/layouts/ConsultLayout";
import { Routes } from "@/utils/variables";
import { useRouter } from "next/router";
import React from "react";

const Contact = () => {
  const labelClassName = "text-sm",
    inputClassName =
      "border-b-2 border-l-0 border-r-0 border-t-0 border-slate-300 text-slate-500 focus:text-primary focus:border-primary rounded-none px-0 bg-transparent",
    buttonClassName = "text-sm !py-2 rounded-md inline-flex items-center gap-1",
    { push } = useRouter();
  return (
    <ConsultLayout className="flex flex-col gap-6">
      <div className="">
        <h1 className="font-bold">Contact information</h1>
        <p className="opacity-60">
          provide your contact information we will use in addressing and
          reaching back to you?
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          labelClassName={labelClassName}
          placeholder="First name"
          inputClassName={inputClassName}
        />
        <InputField
          labelClassName={labelClassName}
          placeholder="Last name"
          inputClassName={inputClassName}
        />
        <InputField
          labelClassName={labelClassName}
          placeholder="Email"
          inputClassName={inputClassName}
        />
        <InputField
          labelClassName={labelClassName}
          placeholder="Phone number"
          inputClassName={inputClassName}
        />
      </div>

      <div className="flex gap-2 justify-end mt-2">
        <Button
          onClick={() => {
            push(`${Routes.Consult.path}`);
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
            push(`${Routes.Consult.path}/budget`);
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

export default Contact;
