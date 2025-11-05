import { Avatar } from "@heroui/react";

const Card = (data: { title: string; index: string; desc: string }) => {
  return (
    <div className="flex flex-col items-start bg-gray-50 rounded-3xl p-5 w-full md:max-w-68 h-full">
      <Avatar
        showFallback
        className="bg-transparent border-1.5 h-6 w-6"
        fallback={<span>{data.index}</span>}
      />
      <span className="font-inter-display-medium text-xl mt-2">
        {data.title}
      </span>
      <div className="sm:max-w-md text-xs mt-2 text-divider-600 text-start">
        {data.desc}
      </div>
    </div>
  );
};

export default Card;
