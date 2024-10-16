import {
  FacebookIcon,
  InstagramIcon,
  LocationIcon,
  MailIcon,
  PhoneCallIcon,
  TwitterIcon
} from "@/assets/icons";
import Button from "@/components/Button";
import InputField from "@/components/general/InputField";
import RadioButton from "@/components/general/RadioButton";
import SectionContainer from "@/components/layouts/SectionContainer";
import Link from "next/link";
import React from "react";

const Contact = () => {
  const contactDetailsClassName = "inline-flex items-center gap-2",
    contactSocialsClassName =
      "size-8 rounded-full flex items-center justify-center",
    inputClassName =
      "border-b-2 border-l-0 border-r-0 border-t-0 border-slate-300 text-slate-500 focus:text-primary focus:border-primary rounded-none px-0",
    contactDetailsIconProps = {
      width: 20,
      height: 21
    };
  return (
    <SectionContainer className="" contentContainerClassName="py-20">
      <div className="flex flex-col md:flex-row items-start gap-20 -3 bg-white overflow-hidden">
        <div className="bg-primary rounded-md p-10 text-white flex flex-col gap-28 md:max-w-[31rem] relative">
          <div className="absolute size-[18rem] -right-1/2 -translate-x-1/2 -translate-y-1/2 -bottom-1/2 rounded-full bg-white">
            <div className="size-[9rem] bg-[#EBEBEB80] rounded-full absolute -top-[40%] translate-y-1/2" />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-xl md:text-2xl">
              Contact Information
            </h1>
            <p className="font-lighter opacity-60">
              Say something to start a chat
            </p>
          </div>

          <div className="text-lighter">
            <ul className="flex flex-col gap-10">
              <li className={contactDetailsClassName}>
                <span>
                  <PhoneCallIcon
                    color={"var(--white)"}
                    {...contactDetailsIconProps}
                  />
                </span>
                <span>+1012 3456 789</span>
              </li>
              <li className={contactDetailsClassName}>
                <span>
                  <MailIcon
                    color={"var(--white)"}
                    {...contactDetailsIconProps}
                  />
                </span>
                <span>demo@gmail.com</span>
              </li>
              <li className={contactDetailsClassName}>
                <span>
                  <LocationIcon
                    color={"var(--white)"}
                    {...contactDetailsIconProps}
                  />
                </span>
                <span>
                  132 Dartmouth Street Boston, Massachusetts 02156 United States
                </span>
              </li>
            </ul>
          </div>

          <ul className="flex items-center gap-7">
            <li>
              <Link href="" className={`${contactSocialsClassName} bg-black`}>
                <FacebookIcon color={"#ffffff"} />
              </Link>
            </li>
            <li>
              <Link href="" className={`${contactSocialsClassName} bg-white`}>
                <InstagramIcon color={"#1877F2"} />
              </Link>
            </li>
            <li>
              <Link href="" className={`${contactSocialsClassName} bg-black`}>
                <TwitterIcon color={"#ffffff"} />
              </Link>
            </li>
          </ul>
        </div>

        <form className="flex-1 flex-col flex gap-10 md:gap-14">
          <div className="grid grid-col-1 md:grid-cols-2 gap-6">
            <InputField
              label="First Name"
              placeholder="Type here..."
              inputClassName={inputClassName}
            />
            <InputField
              label="Last Name"
              placeholder="Type here..."
              inputClassName={inputClassName}
            />
          </div>
          <div className="grid grid-col-1 md:grid-cols-2 gap-6">
            <InputField
              label="Email"
              placeholder="Type here..."
              type="email"
              inputClassName={inputClassName}
            />
            <InputField
              label="Phone number"
              type="tel"
              placeholder="Type here..."
              inputClassName={inputClassName}
            />
          </div>

          <div className="flex flex-start flex-col items-start gap-3">
            <h1 className="">Select Subject</h1>
            <div className="flex items-center gap-6">
              <RadioButton label="General Inquiry" name="subject" />
              <RadioButton label="General Inquiry" name="subject" />
              <RadioButton label="General Inquiry" name="subject" />
            </div>
          </div>

          <InputField
            label="Message"
            placeholder="Write your message..."
            inputClassName={inputClassName}
          />

          <div className="flex justify-end">
            <Button buttonType="primary" className="rounded-md">
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </SectionContainer>
  );
};

export default Contact;
