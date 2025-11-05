import { Button } from "@heroui/react";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import React from "react";
import { RiArrowLeftLongLine, RiArrowRightLongLine } from "@remixicon/react";

type PropType = {
  slides: React.ReactNode[];
  options?: EmblaOptionsType;
};

const CarouselComponent: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel({ ...options });

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((item, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">{item}</div>
            </div>
          ))}
        </div>
        {slides.length > 1 && (
          <>
            {/* <Indicators api={emblaApi} /> */}
            <div className="flex flex-row items-center justify-end pr-3 pt-3">
              <ScrollButton api={emblaApi} variant="right" />
              <ScrollButton api={emblaApi} variant="left" />
            </div>
          </>
        )}
      </div>
    </section>
  );
};

const ScrollButton = ({
  variant,
  api,
}: {
  variant: "left" | "right";
  api?: EmblaCarouselType;
}) => {
  const handleScroll = ({
    variant,
    api,
  }: {
    variant: "left" | "right";
    api?: EmblaCarouselType;
  }) => {
    if (variant == "left") {
      api?.scrollNext();
    }
    if (variant == "right") {
      api?.scrollPrev();
    }
  };

  return (
    <Button
      radius="full"
      size="lg"
      onPress={() => handleScroll({ variant, api })}
      className="bg-[#739B07] ml-2"
      fullWidth={false}
      isIconOnly={true}
    >
      {variant == "left" ? (
        <RiArrowRightLongLine color="white" size={35} />
      ) : (
        <RiArrowLeftLongLine color="white" size={35} />
      )}
    </Button>
  );
};

export default CarouselComponent;
