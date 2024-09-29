import React from "react";
import Image, { type StaticImageData } from "next/image";

const FirstCarouselItem = ({
  item,
}: {
  item: { src: StaticImageData; title: string; subtitle: string };
}) => {
  return (
    <div className="w-full min-h-[min(80dvh,600px)] rounded-xl rounded-tl-[4rem] rounded-br-[4rem] overflow-clip relative isolate flex items-center px-16">
      <Image
        src={item.src}
        alt={item.title}
        fill
        quality={100}
        placeholder="blur"
        priority
        className="object-cover object-center -z-10"
      />
      <div className="absolute inset-0 w-full h-full bg-black/50 z-10" />
      <div className="relative z-20 flex flex-col gap-4 items-start text-left">
        <h1 className="text-primary threeRem font-bold">{item.title}</h1>
        <p className="text-white font-bold twoTwoFive">{item.subtitle}</p>
      </div>
    </div>
  );
};

export default FirstCarouselItem;
