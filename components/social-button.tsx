import { Button, Image } from "@heroui/react";

const SocialButton = (payload: {
  imagePath: string;
  text1: string;
  text2: string;
}) => {
  return (
    <Button
      className="border-1 border-black bg-transparent py-5 px-2"
      fullWidth={false}
    >
      <div className="flex  space-x-1.5 rounded-lg items-center">
        <Image
          src={payload.imagePath}
          alt="apple-logo"
          className="h-[25px] w-[25px]"
          radius="none"
        />
        <div className="flex flex-col items-start -translate-y-1">
          <span className="text-[9px] translate-y-2">{payload.text1}</span>
          <span className="text-xl font-inter-display-medium">
            {payload.text2}
          </span>
        </div>
      </div>
    </Button>
  );
};

export default SocialButton;
