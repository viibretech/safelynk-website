import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Button,
  useDisclosure,
} from "@heroui/react";
import { RiCloseLine, RiMenuFill } from "@remixicon/react";
import Image from "next/image";

export default function AppDrawer({
  mainPage = false,
}: {
  mainPage?: boolean;
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        onPress={onOpen}
        isIconOnly
        size="sm"
        radius="full"
        className="bg-transparent"
        startContent={
          <RiMenuFill
            className={`${
              mainPage ? "text-white" : "text-black"
            } cursor-pointer z-30`}
            size={20}
          />
        }
      />
      <Drawer
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="full"
        hideCloseButton
        classNames={{
          base: "bg-black",
        }}
      >
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1">
                <div className="flex justify-between">
                  <Image
                    src="/images/safelynk-icon.png"
                    alt="safelynk-icon"
                    height={40}
                    width={40}
                  />
                  <Button
                    size="sm"
                    radius="full"
                    isIconOnly
                    className="bg-transparent text-white"
                    onPress={onClose}
                    startContent={<RiCloseLine />}
                  />
                </div>
              </DrawerHeader>
              <DrawerBody>
                <nav className="space-y-8 flex flex-col items-center mt-10">
                  <div onClick={onClose}>
                    <NavLink href="/#home">Home</NavLink>
                  </div>
                  <div onClick={onClose}>
                    <NavLink href="/#security">Security</NavLink>
                  </div>
                  <div onClick={onClose}>
                    <NavLink href="/#how-it-works">How It Works</NavLink>
                  </div>
                  <div onClick={onClose}>
                    <NavLink href="/#use-cases">Use Cases</NavLink>
                  </div>
                  <div onClick={onClose}>
                    <NavLink href="/#faqs">FAQs</NavLink>
                  </div>
                </nav>
              </DrawerBody>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}

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
    className={`text-2xl font-inter-regular  ${
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
