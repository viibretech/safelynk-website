"use client";

import Card from "@/components/card";
import CarouselComponent from "@/components/carousel";
import Footer from "@/components/footer";
import Header from "@/components/header";
import SocialButton from "@/components/social-button";
import { SolutionCard } from "@/components/solution-card";
import { useDeviceType } from "@/hooks/device-type-hook";
import { faqs, useCases } from "@/utils/contents";
import { Accordion, AccordionItem, Avatar, Button, Image } from "@heroui/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Index() {
  const [flipped, setFlipped] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);

  const handleFlip = (index: number) => {
    setFlipped((prev) => prev.map((val, i) => (i === index ? !val : val)));
  };

  const { isMobile, isDesktop } = useDeviceType();

  const router = useRouter();

  return (
    <div>
      <section
        id="home"
        className="text-white relative sm:h-screen h-[80vh] overflow-hidden"
      >
        {/* Background image and gradient - full viewport */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/main-photo.jpg"
            alt="main-photo.jpg"
            radius="none"
            className="z-0 w-full sm:h-screen h-[80vh] object-cover scale-200 -translate-y-40"
          />
          {/* Gradient overlay from left to right */}
          <div className="absolute inset-0 w-full h-full bg-linear-to-r from-black/90 via-black/20 to-transparent z-10" />
        </div>
        {/* Content with padding */}
        <div className="relative z-20">
          {/* Your content here */}
          <div className="flex flex-col sm:h-screen h-[80vh]">
            <Header mainPage />
            <div className="h-full flex flex-col justify-center lg:px-40 px-5">
              <div className="max-w-md space-y-3">
                <span className="text-2xl transition-all md:text-5xl font-inter-display-bold">
                  Rebuilding Trust in <br /> Digital Trade
                </span>
                <div className="sm:max-w-md text-xs mt-3 font-inter-light">
                  Safelynk makes sure deals are honored — protecting both buyers
                  and sellers in an increasingly digital marketplace.
                </div>
                <Button
                  fullWidth={false}
                  radius="full"
                  className="w-28 bg-white h-[40px] mt-3"
                  size="sm"
                  onPress={() => router.push("/#download")}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="security" className="bg-white px-5 lg:px-40 py-16">
        <div className="grid grid-row-2 grid-cols-1">
          {/* first */}
          <div className="flex gap-y-5 sm:space-y-0 flex-col-reverse sm:flex-row sm:space-x-4 justify-between">
            <div className="flex flex-col">
              <div className="space-y-3">
                <span className="text-2xl transition-all md:text-4xl font-inter-display-bold">
                  We Hold the Money
                  <br /> Until the Deal is Done
                </span>
                <div className="sm:max-w-md font-inter-light text-xs mt-3">
                  Your funds stay protected until all terms are met. This
                  ensures the buyer gets what they paid for, and the seller
                  receives their money without delays or excuses.
                </div>
                <Button
                  fullWidth={false}
                  radius="full"
                  className="bg-[#183222] h-[40px] mt-3 text-[#D3FC64]"
                  size="sm"
                >
                  Learn about our escrow promise
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="images/shield.png"
                alt="shield"
                className="h-40 sm:h-56 transition-all"
              />
            </div>
          </div>
          {/* second */}
          <div className="grid grid-rows-3 grid-cols-1 sm:grid-rows-1 sm:grid-cols-3 mt-10 sm:mt-12 gap-x-4 gap-y-6">
            <div className="flex flex-col items-start space-y-3 max-w-xs">
              <Avatar
                showFallback
                className="bg-[#EDEFEC] h-12 w-12"
                fallback={
                  <Image
                    src="svgs/key.svg"
                    alt="key.svg"
                    radius="none"
                    className="h-4 w-4 text-[#183222]"
                  />
                }
              />
              <span className="text-divider-600 tracking-[-1.1] text-xs">
                We securely lock the payment until both sides confirm the deal.
              </span>
            </div>

            <div className="flex flex-col items-start space-y-3 max-w-xs">
              <Avatar
                showFallback
                className="bg-[#EDEFEC]  h-12 w-12"
                fallback={
                  <Image
                    src="svgs/lock.svg"
                    alt="lock.svg"
                    radius="none"
                    className="h-4 w-4 text-[#183222]"
                  />
                }
              />
              <span className="text-divider-600 tracking-[-1.1] text-xs">
                Your account is protected with 2-factor authentication.
              </span>
            </div>

            <div className="flex flex-col items-start space-y-3 max-w-xs">
              <Avatar
                showFallback
                className="bg-[#EDEFEC]  h-12 w-12"
                fallback={
                  <Image
                    src="svgs/shield.svg"
                    alt="shield.svg"
                    radius="none"
                    className="h-4 w-4 text-[#183222]"
                  />
                }
              />
              <span className="text-divider-600 tracking-[-1.1] text-xs">
                Funds are safely stored in escrow through trusted financial
                partners.
              </span>
            </div>
          </div>
        </div>
      </section>
      <section id="how-it-works" className="bg-white px-5 lg:px-40 py-10">
        <div className="">
          <div className="flex flex-col items-center ">
            <span className="text-2xl transition-all md:text-4xl font-inter-display-bold">
              How it works
            </span>
            <div className="sm:max-w-md text-xs mt-3 tracking-[-1.1] text-divider-600 text-center">
              Safelynk uses escrow to protect both parties. The buyer’s funds
              are securely stored and released only after delivery or service
              confirmation.
            </div>
          </div>
          <div className="flex flex-col w-full space-y-6 justify-center md:flex-row mt-10 md:space-y-0 md:space-x-10">
            <Card
              index="1"
              title="Create the Transaction"
              desc="The seller sets up an escrow payment link and shares it with the buyer."
            />
            <Card
              index="2"
              title="Buyer Makes Payment"
              desc="The seller sets up an escrow payment link and shares it with the buyer."
            />
            <Card
              index="3"
              title="Complete & Confirm"
              desc="Once value is delivered to buyer Safelynk releases the funds to the seller."
            />
          </div>
        </div>
      </section>
      <div className="relative w-full pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-t from-[#D3FC64]/50 via-[#D3FC64]/20 to-transparent pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(211, 252, 100, 0.15) 0%, transparent 70%)",
          }}
        />

        <div className="flex justify-center relative z-10">
          <div className="flex flex-col items-center w-100 sm:w-160">
            <h1 className="text-6xl md:text-[135px] sm:text-[100px] transition-all font-inter-display-bold">
              Over 80%
            </h1>
            <span className="text-2xl transition-all md:text-4xl font-inter-display-bold text-center">
              of payment fraud starts online
            </span>
            <div className="sm:max-w-md mt-3 text-divider-600 text-xs text-center">
              Safelynk makes sure deals are honored — protecting both buyers and
              sellers in an increasingly digital marketplace.
            </div>
          </div>
        </div>
      </div>
      <section
        id="use-cases"
        className="bg-black px-5 lg:px-40 py-20 text-white"
      >
        <span className="text-3xl md:text-4xl font-inter-display-bold text-center">
          {!isMobile && (
            <span>
              One Simple Solution for Any <br /> Transaction That Requires Trust
            </span>
          )}
          {isMobile &&
            "One Simple Solution for Any Transaction That Requires Trust"}
        </span>

        <div className="mt-10">
          {!isMobile && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {useCases.map((card, i) => (
                <SolutionCard
                  key={i}
                  title={card.title}
                  description={card.description}
                  imagePath={card.imagePath}
                  flipped={flipped[i]}
                  onPress={() => handleFlip(i)}
                />
              ))}
            </div>
          )}

          {isMobile && (
            <CarouselComponent
              slides={useCases.map((card, i) => (
                <SolutionCard
                  key={i}
                  title={card.title}
                  description={card.description}
                  imagePath={card.imagePath}
                  flipped={flipped[i]}
                  onPress={() => handleFlip(i)}
                />
              ))}
            />
          )}
        </div>
      </section>
      <section id="download" className="relative w-full">
        <Image
          src="images/rough-bg.jpg"
          alt="rough-bg.jpg"
          className="object-cover h-160 w-screen rounded-none"
        />
        <div className="absolute inset-0 px-5 h-full lg:px-40 py-16 z-40">
          <div className="bg-white flex justify-center rounded-2xl h-full">
            <div className="flex flex-col justify-center items-center space-y-7">
              <span className="text-2xl transition-all md:text-4xl font-inter-display-bold text-center">
                {!isMobile && (
                  <span>
                    Download the App and <br /> Start Transacting Safely
                  </span>
                )}
                {isMobile && "Download the App and Start Transacting Safely"}
              </span>
              <div className="flex items-center border-1 border-divider-300 px-5 py-3 max-w-60 rounded-2xl">
                <span className="text-divider-500">
                  Scan to get the Safelynk app
                </span>
                <Image
                  src="images/qrcode.png"
                  alt="qrcode.png"
                  className="rounded-none aspect-square max-w-20"
                />
              </div>
              <div className="flex justify-center space-x-4">
                <SocialButton
                  imagePath="svgs/apple.svg"
                  text1="Download on the"
                  text2="App Store"
                  url="https://apps.apple.com/gh/app/safelynk/id6755051699"
                />
                <SocialButton
                  imagePath="svgs/google.svg"
                  text1="GET IT ON"
                  text2="Google Pay"
                  url="https://play.google.com/store/apps/details?id=com.safelynk.prod"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="faqs" className="bg-white px-5 lg:px-40 py-20">
        <div className="flex flex-col items-start sm:grid sm:grid-rows-1 sm:grid-cols-2">
          <div className="flex flex-col space-y-3 items-start">
            <span className="text-4xl transition-all sm:text-6xl font-inter-medium">
              {isDesktop && (
                <span>
                  Your questions, <br /> answered
                </span>
              )}
              {!isDesktop && "Your questions, answered"}
            </span>
            <span className="text-xs max-w-xs">
              <span>Can’t find what you’re looking for? Reach out to</span>{" "}
              <a href="mailto:hello@safelynk.io" className="underline">
                support@safelynk.io
              </a>
            </span>
          </div>
          <div className="mt-6 sm:mt-0 w-full">
            <Accordion className="w-full">
              {faqs.map((item, index) => {
                return (
                  <AccordionItem
                    key={index}
                    aria-label={item.title}
                    title={item.title}
                    classNames={{
                      title: "text-[17px]",
                      base: "text-xs text-divider-600 font-inter-regular",
                      indicator: "text-black",
                      titleWrapper: "cursor-pointer",
                    }}
                  >
                    {item.description}
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
