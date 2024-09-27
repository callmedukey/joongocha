import Link from "next/link";
import Logo from "@/public/img/daehan-logo.png";
import Image from "next/image";

const Header = () => {
  return (
    <header className="sticky top-0 flex text-primary py-8 px-2 lg:justify-center justify-end font-medium z-50 bg-white">
      <Link href="/" className="absolute left-4 top-0 bottom-0 self-center">
        <Image
          src={Logo}
          alt="로고"
          width={250}
          className=""
          priority
          quality={100}
        />
      </Link>
      <nav className="gap-[clamp(1rem,10vw,3.5rem)] hidden sm:flex">
        <NavLink href="/">홈</NavLink>
        <NavLink href="/about">회사 소개</NavLink>
        <NavLink href="/export">중고차 직수출</NavLink>
      </nav>
      <MobileMenu />
    </header>
  );
};

export default Header;
