import React from "react";
import Image, { type StaticImageData } from "next/image";

const FirstCarouselItem = ({
  item,
}: {
  item: { src: StaticImageData; title: string; subtitle: string };
}) => {
  return (
    <div className="w-full h-[min(40dvh,400px)] lg:h-[min(60dvh,450px)] xl:min-h-[min(80dvh,600px)] rounded-xl rounded-tl-[4rem] rounded-br-[4rem] overflow-clip relative isolate flex items-center px-16">
      <Image
        src={item.src}
        alt={item.title}
        fill
        quality={100}
        placeholder="blur"
        priority
        className="object-fill xl:object-cover xl:object-center -z-10"
      />
    </div>
  );
};

export default FirstCarouselItem;
