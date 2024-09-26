import Image from "next/image";
import Link from "next/link";
import React from "react";
import WhitePhone from "@/public/white-phone.svg";
const Footer = () => {
  return (
    <footer className="px-[clamp(1rem,5vw,6rem)] py-4 bg-primary text-sm">
      <div className="max-w-4xl mx-auto w-full">
        <div className="flex gap-12 text-white">
          <Link href="/terms">이용약관</Link>
          <Link href="/privacy">개인정보취급방침</Link>
        </div>
        <div className="flex lg:gap-12 gap-6 text-white flex-wrap py-12 px-2">
          <ul className="lg:border-r border-white flex-1 basis-[12rem]">
            <li>{`상호명: 티앤에스(T&S)무역`}</li>
            <li>{`대표: 장태산`}</li>
            <li>{`사업자등록번호: 681-25-01849`}</li>
          </ul>
          <ul className="flex-1 basis-[12rem]">
            <li>{`주소: 인천광역시 부평구 평천로255번길 13, 9층 908(청천동)`}</li>
            <li>대표번호: 050-8202-1308</li>
          </ul>
          <div className="flex-1 basis-[12rem]">
            <p className="flex items-center gap-2">
              <Image
                src={WhitePhone}
                width={24}
                height={24}
                alt="고객센터 전화번호 050-8202-1308"
              />
              <span>고객센터 전화번호 050-8202-1308</span>
            </p>
          </div>
        </div>
      </div>
      <div className="text-center text-white text-xs">
        <p>© 2024 대한중고차수출. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
};

export default Footer;
