import Image from "next/image";
import World from "@/public/world.png";
import InquiryForm from "@/components/forms/InquiryForm";
import FakeRealtime from "@/components/carousel/FakeRealtime";
import Poster from "@/public/poster.png";
import Car1 from "@/public/car-1.png";
import Car2 from "@/public/car-2.png";
import Car3 from "@/public/car-3.png";
import Car4 from "@/public/car-4.png";
import CarItem from "@/components/carousel/CarItem";
import CarListCarousel from "@/components/carousel/CarListCarousel";
import Consultant2 from "@/public/person.png";
import Vector from "@/public/vector.png";
import Diagram from "@/public/diagram.png";
import { PartnerCarousel } from "@/components/partners/PartnerCarousel";
import FirstCarousel from "@/components/carousel/FirstCarousel";
import Ad from "@/public/ad.png";

import Sonata from "@/public/sonata.jpeg";
import QM from "@/public/qm.png";
const carList = [
  {
    src: Car1,
    title: "현대 더 뉴랜드 스타렉스",
    originalPrice: "3200만 원",
    salePrice: "3350만 원",
    keyText: "최대 150만원 차이!",
  },
  {
    src: Car2,
    title: "쉐보래 어매이 크루즈 ",
    originalPrice: "620만 원",
    salePrice: "750만 원",
    keyText: "최대 130만원 차이!",
  },
  {
    src: Car3,
    title: "기아 올 뉴 카니발 9인승",
    originalPrice: "1100만 원",
    salePrice: "13200만 원",
    keyText: "최대 220만원 차이!",
  },
  {
    src: Car4,
    title: "현대 더뉴 i40 살룬",
    originalPrice: "780만 원",
    salePrice: "980만 원",
    keyText: "최대 200만원 차이!",
  },
];

export default function Home() {
  return (
    <main className="isolate overflow-clip">
      <article className="max-w-screen-8xl mx-auto">
        <FirstCarousel />
        <section className="md:hidden relative min-h-[min(80dvh,500px)] flex flex-col items-center mb-[calc(var(--mb)*4)] justify-center py-12 text-center px-2">
          <div className="z-20 mb-auto font-bold">
            <p className="text-white text-[1.25rem]">
              키로수, 연식, 사고차 상관없이
            </p>
            <h1 className="text-primary text-[1.5rem] max-w-[20rem] sm:w-full mt-6 md:mt-0">
              중고차 수출로 최대 300만원 비싸게 파세요
            </h1>
          </div>
          <Image
            src={Sonata}
            alt="소나타"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black opacity-50" />
          <InquiryForm className="" outer />
        </section>
      </article>
      <article className="relative px-4 mt-[calc(var(--mb)*2)] hidden md:block max-w-screen-8xl mx-auto">
        <Image
          src={Ad}
          alt="광고"
          width={4960}
          height={1808}
          className=""
          placeholder="blur"
          quality={100}
          priority
        />
      </article>
      <article className="px-4 hidden md:block mt-[calc(var(--mb)*2)]">
        <InquiryForm className="max-w-screen-8xl mx-auto bg-[#FFF1E8]" />
      </article>
      <article className="relative md:py-[calc(var(--mb)*2)] my-[var(--mb)] px-4">
        <div className="absolute inset-0 bg-white opacity-50" />
        <Image
          src={World}
          alt="세계지도"
          fill
          sizes="100vw"
          className="xl:object-contain object-cover object-center -z-10 opacity-50 hidden lg:block"
        />
        <div className="relative xl:flex gap-6 justify-center max-w-6xl mx-auto">
          <section className="max-w-3xl mx-auto z-50 bg-primary rounded-3xl py-8 lg:px-16 px-2 sm:px-8 isolate relative w-full">
            <h2 className="thirty-fixed font-bold text-white text-center border-b-2 pb-4 max-w-sm mx-auto lg:max-w-full sm:max-w-lg">
              실시간 차량 상담 접수 현황
            </h2>
            <FakeRealtime />
          </section>
          <Image
            src={QM}
            alt="QM"
            width={2716}
            height={1528}
            className="self-end hidden xl:block flex-1 max-w-[30rem] scale-125 w-full mr-auto translate-y-12 translate-x-16"
          />
        </div>
        <div className="absolute bg-primary -z-10 h-6 opacity-50 w-[120vw] mx-[-2rem] xl:block hidden bottom-48 rotate-[-5deg]" />
        <div className="absolute bg-primary -z-10 h-6 opacity-50 w-[120vw] mx-[-2rem] xl:block hidden bottom-36 rotate-[-5deg]" />
      </article>
      <article className="px-4">
        <Image
          src={Poster}
          alt="포스터"
          width={2600}
          height={1460}
          quality={100}
          placeholder="blur"
          priority
          className="mx-auto max-w-4xl w-full"
        />
      </article>
      <h3 className="threeRem font-bold text-center mt-[calc(var(--mb)*2)] mb-[calc(var(--mb))]">
        <span className="text-primary underline underline-offset-8">
          부당 감가 걱정
        </span>
        은 이제 그만!
      </h3>
      <ul className="px-4 grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto mb-[calc(var(--mb)*2)] hidden sm:grid">
        {carList.map((car) => (
          <CarItem car={car} isCarousel={false} key={car.title} />
        ))}
      </ul>
      <CarListCarousel carList={carList} />
      <article className="max-w-5xl lg:mx-auto lg:px-16 px-2 md:px-8 pt-12 md:py-12 bg-white rounded-3xl mx-4 relative isolate">
        <Image
          src={Vector}
          alt="벡터"
          fill
          className="object-bottom object-contain -z-10"
        />
        <h3 className="threeRem font-bold text-center mx-auto sm:mb-[calc(var(--mb)*2)] mb-[var(--mb)]">
          왜! 중고차{" "}
          <span className="underline underline-offset-8 text-primary">
            수출
          </span>
          을 해야 할까요?
        </h3>
        <Image
          src={Consultant2}
          alt="상담원"
          height={600}
          priority
          quality={100}
          className="mx-auto block"
        />
        <ol className="space-y-6 list-text">
          <li className="flex bg-white z-10 rounded-full border shadow-md min-h-12 sm:min-h-16 md:min-h-20 py-2 text-center md:text-left px-2 sm:px-4 items-center">
            <span className="flex items-center gap-2 text-left">
              <span className="font-bold size-6 sm:size-8 md:size-10 bg-primary text-white rounded-full flex items-center justify-center">
                1
              </span>
              <span>
                <span className="font-bold text-primary">
                  연식이 오래되어도
                </span>{" "}
                감가율이 적습니다
              </span>
            </span>
          </li>
          <li className="flex bg-white z-10 rounded-full border shadow-md min-h-12 sm:min-h-16 md:min-h-20 py-2 text-center md:text-left px-2 sm:px-4 items-center">
            <span className="flex items-center gap-2 text-left">
              <span className="font-bold size-6 sm:size-8 md:size-10 bg-primary text-white rounded-full flex items-center justify-center">
                2
              </span>
              <span>
                <span className="font-bold text-primary">
                  주행거리가 많아도
                </span>{" "}
                감가율이 적습니다
              </span>
            </span>
          </li>
          <li className="flex bg-white z-10 rounded-full border shadow-md min-h-12 sm:min-h-16 md:min-h-20 py-2 text-center md:text-left px-2 sm:px-4 items-center">
            <span className="flex items-center gap-2 text-left">
              <span className="font-bold size-6 sm:size-8 md:size-10 bg-primary text-white rounded-full flex items-center justify-center">
                3
              </span>
              <span>
                <span className="font-bold text-primary">
                  사고 이력이 있는 차량도
                </span>{" "}
                감가율이 적습니다
              </span>
            </span>
          </li>
          <li className="flex bg-white z-10 rounded-full border shadow-md min-h-12 sm:min-h-16 md:min-h-20 py-2 text-center md:text-left px-2 sm:px-4 items-center">
            <span className="flex items-center gap-2 text-left">
              <span className="font-bold size-6 sm:size-8 md:size-10 bg-primary text-white rounded-full flex items-center justify-center">
                4
              </span>
              <span>
                폐차보다{" "}
                <span className="font-bold text-primary">
                  50만원~300만원까지 더
                </span>{" "}
                받을 수 있습니다
              </span>
            </span>
          </li>
        </ol>
      </article>
      <article className="px-4 mt-[calc(var(--mb)*3)]">
        <h4 className="text-primary text-center fifty font-bold">
          중고차 수출 절차
        </h4>
        <div className="relative w-full aspect-square max-w-4xl mx-auto mb-[calc(var(--mb))]">
          <Image
            src={Diagram}
            alt="절차"
            width={3252}
            height={2584}
            className="object-contain w-full h-full"
            placeholder="blur"
            quality={100}
            priority
          />
        </div>
      </article>
      <article className="px-4 mb-24 md:hidden">
        <InquiryForm className="max-w-screen-8xl mx-auto" disableId outer />
      </article>
      <article className="px-4 hidden md:block mt-[calc(var(--mb)*2)]">
        <InquiryForm
          className="max-w-screen-8xl mx-auto bg-[#FFF1E8]"
          disableId
        />
      </article>
      <article className="flex flex-wrap justify-center gap-x-[clamp(4rem,10vw,8rem)] bg-white lg:gap-y-4 gap-y-8 mx-auto px-4 border-t-2 border-primary pt-4 pb-12">
        <PartnerCarousel speed="normal" />
      </article>
    </main>
  );
}
