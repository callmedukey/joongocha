import Image from "next/image";
import Ship from "@/public/ship.png";
import Logo from "@/public/logo.png";
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
    <main className="overflow-clip">
      <article className="relative h-[min(80dvh,600px)] isolate bg-black p-4 lg:p-8 md:p-6 flex items-center justify-center">
        <div className="absolute inset-0 bg-white/70 z-10" />
        <Image
          src={Logo}
          alt="로고"
          className="z-20 absolute top-6 md:left-6 left-1/2 -translate-x-1/2 md:translate-x-0"
          width={200}
          height={100}
          priority
          quality={100}
        />
        <Image
          src={Ship}
          alt="화물선"
          className="object-cover object-center -z-10"
          quality={100}
          placeholder="blur"
          priority
          fill
        />
        <h1 className="relative z-20 font-bold flex flex-col gap-4 items-center text-center translate-y-4 sm:translate-y-0">
          <span className="thirtysix">키로수, 연식, 사고차 상관없이</span>
          <span className="fourtyeight text-primary">
            중고차 수출로 최대 300만원 비싸게 파세요
          </span>
        </h1>
      </article>
      <article className="px-4">
        <InquiryForm />
      </article>
      <article className="relative md:py-[calc(var(--mb)*2)] my-[var(--mb)] px-4">
        <div className="absolute inset-0 bg-primaryBackgroundColor opacity-50" />
        <Image
          src={World}
          alt="세계지도"
          fill
          sizes="100vw"
          className="xl:object-contain object-cover object-center -z-10 opacity-50 hidden md:block"
        />
        <section className="max-w-3xl mx-auto z-50 bg-primary rounded-3xl py-8 lg:px-16 px-2 sm:px-8 isolate relative">
          <h2 className="thirty-fixed font-bold text-white text-center border-b-2 pb-4 max-w-sm mx-auto lg:max-w-full sm:max-w-lg">
            실시간 차량상담 접수 전황
          </h2>
          <FakeRealtime />
        </section>
        <div className="absolute bg-primary -z-10 h-6 opacity-50 w-[120vw] mx-[-2rem] md:block hidden bottom-48 rotate-[-5deg]" />
        <div className="absolute bg-primary -z-10 h-6 opacity-50 w-[120vw] mx-[-2rem] md:block hidden bottom-36 rotate-[-5deg]" />
      </article>
      <article className="px-4">
        <Image
          src={Poster}
          alt="포스터"
          width={768}
          quality={100}
          placeholder="blur"
          className="mx-auto"
        />
      </article>
      <ul className="px-4 grid-cols-2 gap-4 md:gap-8 max-w-3xl mx-auto my-[calc(var(--mb)*2)] hidden sm:grid">
        {carList.map((car) => (
          <CarItem car={car} isCarousel={false} key={car.title} />
        ))}
      </ul>
      <CarListCarousel carList={carList} />
      <article className="max-w-5xl lg:mx-auto lg:px-16 px-4 md:px-8 py-12 bg-white rounded-3xl mx-4 relative isolate">
        <Image
          src={Vector}
          alt="벡터"
          fill
          className="object-bottom object-contain -z-10"
        />
        <h3 className="fifty font-bold text-primary text-center border-b-[5px] border-primaryText pb-2 max-w-sm mx-auto lg:max-w-full sm:max-w-lg">
          왜! 중고차 수출을 해야 할까요?
        </h3>
        <p className="text-center max-w-sm mx-auto my-8">
          국내에서 사용된 차량을 해외 시장으로 수출하여 판매하는 방식은, 국내
          중고차 시장에서 거래되는 가격보다 더 높은 수익을 기대할 수 있는
          효과적인 중고차 매매 방식이다.
        </p>
        <Image
          src={Consultant2}
          alt="상담원"
          height={600}
          priority
          quality={100}
          className="mx-auto block"
        />
        <ol className="thirty space-y-6">
          <li className="flex bg-white z-10 rounded-[1.5rem] border shadow-md min-h-16 py-2 text-center md:text-left px-4 items-center">
            <span className="space-x-4 ">
              <span className="font-bold hidden sm:inline">1</span>
              <span>연식이 오래되어도 국내 대비 감가폭이 크지 않음</span>
            </span>
          </li>
          <li className="flex bg-white z-10 rounded-[1.5rem] border shadow-md min-h-16 py-2 text-center md:text-left px-4 items-center">
            <span className="space-x-4 ">
              <span className="font-bold hidden sm:inline">2</span>
              <span>주행거리가 많아도 감가율 적음</span>
            </span>
          </li>
          <li className="flex bg-white z-10 rounded-[1.5rem] border shadow-md min-h-16 py-2 text-center md:text-left px-4 items-center">
            <span className="space-x-4 ">
              <span className="font-bold hidden sm:inline">3</span>
              <span>사고 이력이 있는 차량도 감가율이 낮음</span>
            </span>
          </li>
          <li className="flex bg-white z-10 rounded-[1.5rem] border shadow-md min-h-16 py-2 text-center md:text-left px-4 items-center">
            <span className="space-x-4 ">
              <span className="font-bold hidden sm:inline">4</span>
              <span>폐차가치보다 50만 원에서 300만 원까지 더 받을 수 있음</span>
            </span>
          </li>
        </ol>
      </article>
      <article className="px-4 mt-[calc(var(--mb)*3)]">
        <h4 className="text-primary text-center fifty font-bold">
          중고차 수출 절차
        </h4>
        <div className="triangle" />
        <div className="triangle" />
        <div className="triangle" />
        <p className="text-center max-w-md mx-auto">
          고객님께서 가족처럼 아끼셨던, 내 가족을 안전하게 지켜주던 나의 소중한
          친구를 외국의 이쁜 가족과 좋은 인연을 만들어 드리겠습니다
        </p>
        <div className="relative w-full aspect-square max-w-4xl mx-auto my-[calc(var(--mb))]">
          <Image
            src={Diagram}
            alt="절차"
            fill
            className="object-contain"
            placeholder="blur"
            quality={100}
          />
        </div>
      </article>
      <article className="px-4 mb-24">
        <InquiryForm />
      </article>
      <article className="flex flex-wrap justify-center gap-x-[clamp(4rem,10vw,8rem)] bg-white lg:gap-y-4 gap-y-8 mx-auto px-4 border-t-2 border-primary pt-4 pb-12">
        <PartnerCarousel speed="normal" />
      </article>
    </main>
  );
}
