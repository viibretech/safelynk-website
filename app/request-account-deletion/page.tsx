"use client";
import EmailInputComponent from "@/components/email-input-component";
import Footer from "@/components/footer";
import GeneralInputComponent from "@/components/general-input-component";
import Header from "@/components/header";
import { Button, Card, CardBody, Form, Textarea } from "@heroui/react";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Page = () => {
  const [isHuman, setIsHuman] = useState(false);

  return (
    <>
      <Header />
      <div className="z-20 px-5 lg:px-40">
        <div className="flex flex-col items-center mt-10 mb-10 md:space-y-1">
          <h1 className="text-2xl transition-all md:text-4xl font-inter-display-bold text-center mb-6">
            {"We're sorry to see you leave"}
          </h1>
          <h1 className="text-xs transition-all text-center">
            {
              "Please provide your details below to request account deletion. If there's anything we can do to improve your experience, let us know."
            }
          </h1>
        </div>

        <div className="max-w-4xl mx-auto pb-20 space-y-8">
          <Card>
            <CardBody className="p-10 px-5 md:px-10 w-full">
              <Form
                className="space-y-5"
                onSubmit={async (e) => {
                  e.preventDefault();
                  if (!isHuman) return;
                }}
              >
                <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-x-10 gap-y-5 w-full">
                  <GeneralInputComponent label="Full Name" name="name" />
                  <EmailInputComponent />
                </div>
                <Textarea
                  placeholder="Reason for account deletion"
                  variant="underlined"
                  name="message"
                  classNames={{
                    label: ["m-0 pb-1 text-xs"],
                    inputWrapper: [`h-[2.3rem] rounded-0`],
                    input: ["placeholder:text-xs", "text-xs"],
                  }}
                />
                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                  onChange={(token) => {
                    if (token) {
                      setIsHuman(true);
                    } else {
                      setIsHuman(false);
                    }
                  }}
                />
                <Button
                  fullWidth={false}
                  radius="full"
                  className="bg-[#183222] h-[40px] mt-3 text-[#D3FC64] px-8"
                  size="sm"
                  type="submit"
                >
                  Request
                </Button>
              </Form>
            </CardBody>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
