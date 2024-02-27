"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import Modal from "@/components/Modal";
import { useAuth } from "@/contexts/auth.context";
import { useModal } from "@/contexts/modal.context";
import useMutationLogIn from "@/react-query/auth/useMutationLogin";
import { useRouter } from "next/navigation";
import { useState } from "react";

function LogInModal() {
  const { mutateAsync: logIn, isPending } = useMutationLogIn();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = useAuth();
  const router = useRouter();
  const modal = useModal();

  const handleClickLogIn = async () => {
    if (!email.trim()) return alert("이메일을 입력해주세요");
    if (!password.trim()) return alert("이메일을 입력해주세요");

    try {
      await logIn({ email, password });
      auth.setIsLoggedIn(true);
      router.push("/");
      modal.close();
    } catch (e) {
      alert("로그인에 실패하였습니다");
    }
  };
  return (
    <Modal>
      <h2 className="font-bold text-gray-700 text-2xl text-center mb-10">
        로그인
      </h2>
      <section className="flex flex-col justify-center items-center gap-y-4 max-w-sm mx-auto w-full ">
        <Input
          label="이메일"
          autoFocus
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isPending}
        />
        <Input
          label="비밀번호"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isPending}
        />
        <div className="mb-2"></div>
        <Button color="orange" onClick={handleClickLogIn} disabled={isPending}>
          로그인
        </Button>
      </section>
    </Modal>
  );
}

export default LogInModal;
