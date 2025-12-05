import { socials } from "@/utils/contents";
import { NavLink } from "./header";
import { Divider, Image } from "@heroui/react";

const Footer = () => {
  return (
    <section id="footer" className="bg-white px-5 lg:px-40 pt-20 pb-10">
      <div className="">
        <div className="space-y-3">
          <Divider />
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <div className="flex items-start sm:items-center flex-col sm:flex-row space-x-3">
              <Image
                alt="viibre.png"
                src={"/images/safelynk-icon.png"}
                width={30}
                radius="none"
              />
              <nav className="space-x-3 text-black mt-2 sm:mt-0">
                <NavLink color="black" href="#home">
                  Home
                </NavLink>
                <NavLink color="black" href="#security">
                  Security
                </NavLink>
                <NavLink color="black" href="#how-it-works">
                  How It Works
                </NavLink>
                <NavLink color="black" href="#use-cases">
                  Use Cases
                </NavLink>
                <NavLink color="black" href="#faqs">
                  FAQs
                </NavLink>
              </nav>
            </div>

            <div className="flex items-center space-x-3  mt-6 sm:mt-0">
              {socials.map((item, i) => {
                return (
                  <a
                    key={i}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      alt={item.name}
                      src={item.image}
                      width={20}
                      radius="none"
                    />
                  </a>
                );
              })}
            </div>
          </div>
          <nav className="space-x-3 text-black">
            <NavLink color="black" href="/terms-of-service">
              Terms of Service
            </NavLink>
            <NavLink color="black" href="/privacy">
              Privacy Policy
            </NavLink>
            {/* <NavLink color="black" href="">
                Our Escrow Promise
              </NavLink> */}
          </nav>
          <div className="text-xs mt-7 font-inter-bold text-divider-600">
            Safelynk is a product of{" "}
            <a
              href="https://viibretech.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Viibre Technologies Limited.
            </a>
            <div className="font-inter-regular">
              Viibre helps businesses grow with smart, tailored software
              solutions that streamline operations, enhance experiences, and
              drive results. We don’t just build software — we design digital
              solutions that strengthen every part of your business. Our focus
              areas ensure you get measurable results where it matters most.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
