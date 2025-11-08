"use client";
import { useDeviceType } from "@/hooks/device-type-hook";
import { Button } from "@heroui/react";
import { RiAndroidLine, RiAppStoreLine } from "@remixicon/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import AppDrawer from "./drawer";
import { useRouter } from "next/navigation";

const Header = ({ mainPage = false }: { mainPage?: boolean }) => {
  const { isDesktop } = useDeviceType();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past 100px
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`flex justify-between transition-all duration-300 py-7 w-full items-center bg-transparent z-50 translate-y-0 lg:px-40 px-5`}
    >
      <div className="flex items-center space-x-24">
        <div onClick={() => router.push("/")} className="cursor-pointer">
          <Image
            alt="viibre.png"
            src={
              mainPage
                ? "/images/safelynk-white.png"
                : "/images/safelynk-green.png"
            }
            className="-translate-x-1 scale-[0.9] lg:scale-[0.9] rounded-none"
            width={124}
            height={26}
          />
        </div>
        {isDesktop && (
          <div className="flex items-center">
            <nav className="space-x-5">
              <NavLink
                color={mainPage ? "white" : "black"}
                href={mainPage ? `#home` : "/"}
              >
                Home
              </NavLink>
              <NavLink
                color={mainPage ? "white" : "black"}
                href={mainPage ? `#security` : "/#security"}
              >
                Security
              </NavLink>
              <NavLink
                color={mainPage ? "white" : "black"}
                href="#how-it-works"
              >
                How It Works
              </NavLink>
              <NavLink
                color={mainPage ? "white" : "black"}
                href={mainPage ? `#use-cases` : "/#use-cases"}
              >
                Use Cases
              </NavLink>
              <NavLink
                color={mainPage ? "white" : "black"}
                href={mainPage ? `#faqs` : "/#faqs"}
              >
                FAQs
              </NavLink>
              <NavLink
                color={mainPage ? "white" : "black"}
                href={`/contact-us`}
              >
                Contact
              </NavLink>
            </nav>
          </div>
        )}
      </div>
      {!isDesktop ? (
        <AppDrawer mainPage={mainPage} />
      ) : (
        <div className="relative group overflow-hidden rounded-full">
          <Button
            radius="full"
            variant="bordered"
            size="md"
            className={`border-1 z-10 relative bg-transparent ${
              mainPage ? "border-white" : "border-black"
            } px-2.5`}
          >
            <div
              className={`flex items-center space-x-2 relative z-10 ${
                mainPage
                  ? "text-white group-hover:text-black"
                  : "text-black group-hover:text-white"
              } transition-colors duration-200`}
            >
              <RiAppStoreLine size={15} />
              <RiAndroidLine size={15} />
              <span>Download the App</span>
            </div>
          </Button>
          <div
            className={`absolute top-0 left-0 bottom-0 right-0 h-full w-full  ${
              mainPage ? "bg-white" : "bg-black"
            } rounded-full transition-all duration-200 ease-in-out origin-left scale-x-0 group-hover:scale-x-100`}
          />
        </div>
      )}
    </div>
  );
};

export default Header;

export const NavLink = ({
  href,
  children,
  color = "white",
}: {
  href: string;
  children: React.ReactNode;
  color?: "white" | "black";
}) => (
  <a
    href={href}
    className={`text-xs font-inter-regular  ${
      color === "white" ? "text-white" : "text-black"
    } relative group inline-block`}
  >
    {children}
    <span
      className={`absolute left-0 bottom-0 w-0 h-px ${
        color === "white" ? "bg-white" : "bg-black"
      } transition-all duration-300 ease-in-out group-hover:w-full`}
    />
  </a>
);
