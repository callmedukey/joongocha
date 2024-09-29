"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";
import FirstImage from "@/public/sonata.jpeg";
import SecondImage from "@/public/port.jpeg";
import FirstCarouselItem from "./FirstCarouselItem";

const CarouselList = [
  {
    src: FirstImage,
    title: "중고차 수출로 최대 300만원 비싸게 파세요",
    subtitle: "키로수, 연식, 사고차 상관없이",
  },
  {
    src: SecondImage,
    title: "타사 대비 +200만 원 더 받기",
    subtitle: "감가 없이 내차 팔기",
  },
];

const FirstCarousel = () => {
  const splideOptions1 = {
    type: "loop", // Loop back to the beginning when reaching the end
    perPage: 1, // Number of items visible per page
    perMove: 1, // Move one item at a time
    pagination: false, // Enable pagination dots
    autoplay: true,
    interval: 3200,
    speed: 1800,
    arrows: false,
    easing: "ease",
    padding: "0.5rem",
    gap: "16px",
    width: "100%",
  };

  return (
    <div className="hidden md:block">
      <Splide options={splideOptions1}>
        {CarouselList.map((data, i) => (
          <SplideSlide key={i}>
            <FirstCarouselItem item={data} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default FirstCarousel;
