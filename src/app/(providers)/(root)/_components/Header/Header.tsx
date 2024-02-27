import Link from "next/link";
import HeaderMenu from "./components/HeaderMenu";

function Header() {
  return (
    <header className="bg-white  text-orange-400  sticky top-0 h-16 border-b flex items-center px-5 lg:px-8 z-10 shrink-0">
      <Link href="/" className="font-bold text-lg">
        중고마켓
      </Link>

      <nav className="ml-20">
        <ul className="text-[15px]  flex gap-x-5 ">
          <li>
            <Link href={"/"}>구입하기</Link>
          </li>
          <li>
            <Link href={"/deals/create"}>판매하기</Link>
          </li>
          <li>
            <Link href={"/my/deals"}>내 판매글</Link>
          </li>
        </ul>
      </nav>
      <HeaderMenu />
    </header>
  );
}

export default Header;
