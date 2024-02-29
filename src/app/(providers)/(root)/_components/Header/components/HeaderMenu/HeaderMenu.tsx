"use client";

import { useAuth } from "@/contexts/auth.context";
import { useModal } from "@/contexts/modal.context";
import Link from "next/link";
import { useRouter } from "next/navigation";
import LogInModal from "../LoginModal/LogInModal";

function HeaderMenu() {
  const modal = useModal();
  const auth = useAuth();
  const router = useRouter();

  const handleClickLogIn = () => {
    modal.open(<LogInModal />);
  };

  const handleClickLogOut = async () => {
    localStorage.removeItem("accessToken");
    auth.setIsLoggedIn(false);

    router.push("/");
  };
  return (
    <div className="text-[15px] ml-auto flex gap-x-5 text-gray-500 ">
      {auth.isLoggedIn ? (
        <button
          onClick={handleClickLogOut}
          className="text-[15px] ml-auto flex gap-x-5 text-gray-500"
        >
          로그아웃
        </button>
      ) : (
        <>
          <button
            className="hover:text-black transition"
            onClick={handleClickLogIn}
          >
            로그인
          </button>
          <Link href="/sign-up" className="hover:text-black transition">
            회원가입
          </Link>
        </>
      )}
    </div>
  );
}

export default HeaderMenu;
