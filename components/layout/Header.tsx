import Image from "next/image";
import Logo from "@/public/logo.png";
import DarkPhone from "@/public/dark-phone.png";
const Header = () => {
  return (
    <header className="bg-white flex items-center [@media(max-width:21rem)]:justify-start justify-center items-center lg:justify-start py-8 px-4 lg:px-8 relative isolate">
      <Image
        src={Logo}
        alt="로고"
        className="w-48 lg:w-64"
        width={1078}
        height={231}
        priority
        quality={100}
        loading="eager"
      />
      <a href="tel:050-8202-1308">
        <Image
          src={DarkPhone}
          alt="모바일 폰"
          width={42}
          height={42}
          className="lg:hidden absolute right-4 top-1/2 -translate-y-1/2"
        />
      </a>
    </header>
  );
};

export default Header;
