import React from "react";
import Image from "next/image";
import UpArrow from "@/public/img/up-arrow.svg";

const CarItem = ({ car, isCarousel }: { car: Car; isCarousel: boolean }) => {
  if (isCarousel) {
    return (
      <div className="bg-white rounded-3xl overflow-clip border shadow-md flex flex-col">
        <div className="relative flex-1 basis-[220px]">
          <Image
            src={car.src}
            alt={car.title}
            fill
            quality={100}
            placeholder="blur"
            priority
            sizes="220px"
            className="object-cover object-center"
          />
        </div>
        <div className="flex-1 p-4 flex flex-col gap-4">
          <p className="text-center font-bold pb-4">{car.title}</p>
          <p className="flex justify-between">
            <span>중고차 매매상사</span>
            <span>{car.originalPrice}</span>
          </p>
          <p className="flex justify-between text-[1.25rem] font-bold">
            <span>중고차 수출</span>
            <span>{car.salePrice}</span>
          </p>
          <p className="max-w-fit bg-primaryBlue text-white py-2 px-4 font-bold rounded-lg mx-auto mt-6 text-[1.25rem]">
            {car.keyText}
          </p>
        </div>
      </div>
    );
  }

  return (
    <li className="bg-white rounded-3xl overflow-clip border shadow-md flex flex-col">
      <div className="relative flex-1 basis-[220px]">
        <Image
          src={car.src}
          alt={car.title}
          fill
          quality={100}
          placeholder="blur"
          priority
          sizes="220px"
          className="object-cover object-center"
        />
      </div>
      <div className="flex-1 p-4 flex flex-col gap-4">
        <p className="text-center font-bold pb-4">{car.title}</p>
        <p className="flex justify-between">
          <span>중고차 매매상사</span>
          <span>{car.originalPrice}</span>
        </p>
        <p className="flex justify-between text-[1.25rem] font-bold">
          <span>중고차 수출</span>
          <span>{car.salePrice}</span>
        </p>
        <p className="max-w-fit bg-primaryBlue text-white py-2 px-4 font-bold rounded-lg mx-auto mt-6 text-[1.25rem]">
          {car.keyText}
        </p>
      </div>
    </li>
  );
};

export default CarItem;
