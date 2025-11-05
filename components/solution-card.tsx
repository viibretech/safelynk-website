import { RiAddLine, RiCloseLine } from "@remixicon/react";
import { motion } from "framer-motion";
import { Image } from "@heroui/react";

type SolutionCardProps = {
  title: React.ReactNode;
  description: string;
  imagePath: string;
  flipped: boolean;
  onPress: () => void;
};

export const SolutionCard = ({
  title,
  description,
  imagePath,
  flipped,
  onPress,
}: SolutionCardProps) => {
  return (
    <motion.div
      className="relative w-full h-[320px] cursor-pointer transform-3d"
      animate={{ rotateY: flipped ? 180 : 0 }}
      transition={{ duration: 0.4 }}
      onClick={onPress}
    >
      {/* FRONT */}
      <div className="absolute inset-0 backface-hidden">
        <Image
          src={imagePath}
          alt="card-image"
          className={`w-full ${
            window && window?.innerWidth <= 767 ? "w-screen" : ""
          } h-[320px] object-cover rounded-2xl`}
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/20 to-transparent z-10 rounded-2xl">
          <div className="flex flex-col justify-between h-full">
            <div className="p-4 font-instrument-italic text-4xl text-white">
              {title}
            </div>
            <div className="flex justify-end p-3">
              <div className="h-[40px] w-[40px] rounded-full flex items-center justify-center bg-white/20 backdrop-blur-md">
                <RiAddLine className="text-white" size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BACK */}
      <div className="absolute inset-0 bg-[#739B07] text-white p-3 rounded-2xl backface-hidden transform-[rotateY(180deg)] flex flex-col justify-between">
        <div>
          <div className="font-instrument-italic text-2xl mb-3">{title}</div>
          <p className="text-[15px]">{description}</p>
        </div>
        <div className="flex justify-end">
          <div className="h-[40px] w-[40px] rounded-full flex items-center justify-center bg-white/20 backdrop-blur-md">
            <RiCloseLine size={20} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
