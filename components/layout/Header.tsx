import Image from "next/image";
import Logo from "@/public/logo.png";
const Header = () => {
  return (
    <header className="bg-white flex [@media(max-width:21rem)]:justify-start justify-center items-center lg:justify-start py-8 px-4 lg:px-8 relative isolate">
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
     
    </header>
  );
};

export default Header;
