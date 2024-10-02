"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";

const ConsultStatus = [
  "Kia K8 2021년식 상담... ",
  "G80 2016년식 상담... ",
  "카니발 2020년식 상담... ",
  "티볼리 2015년식 상담... ",
  "레이 2019년식 상담... ",
  "토레스 2022년식 상담... ",
  "아우디 A6 2018년식 상담... ",
  "그랜저 IG 6 2016년식 상담... ",
];

const FakeRealtime = () => {
  const splideOptions = {
    direction: "ttb",
    height: "25rem",
    type: "loop", // Loop back to the beginning when reaching the end
    perPage: 5, // Number of items visible per page
    perMove: 1, // Move one item at a time
    pagination: false, // Enable pagination dots
    autoplay: true,
    interval: 3000,
    speed: 2500,
    arrows: false,
    easing: "ease",
    gap: "16px",
    drag: false,
  };

  return (
    <ul className="py-8 max-w-sm mx-auto lg:max-w-full sm:max-w-lg flex-1">
      <Splide options={splideOptions}>
        {ConsultStatus.map((data, i) => (
          <SplideSlide key={i}>
            <div className="bg-primaryBlue rounded-lg py-4 md:px-8 px-2 sm:px-4 flex items-center md:gap-12 sm:gap-6 gap-2 text-sm sm:text-[clamp(1rem, 1.5vw, 1.25rem)]">
              <div className="bg-white text-primary p-1.5 rounded-lg font-medium">
                NEW
              </div>
              <span className="text-white font-medium">{data}</span>
              <span className="text-white font-medium mr-0 ml-auto">
                상담완료
              </span>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </ul>
  );
};

export default FakeRealtime;
