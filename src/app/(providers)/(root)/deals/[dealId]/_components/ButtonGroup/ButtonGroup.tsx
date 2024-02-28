"use client";

import api from "@/api";
import { useAuth } from "@/contexts/auth.context";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface ButtonGroupProps {
  user: string | undefined;
  dealId: string;
}
function ButtonGroup({ user, dealId }: ButtonGroupProps) {
  const router = useRouter();
  const { email } = useAuth();

  const handleClickDelete = async () => {
    await api.deals.deleteDeal(Number(dealId));
    alert("글이 성공적으로 삭제되었습니다");
    router.push("/");
  };
  if (email === user) {
    return (
      <>
        <Link href={`/deals/${dealId}/edit`}>수정</Link>
        <button onClick={handleClickDelete}>삭제</button>
      </>
    );
  } else {
    <>
      <div>이상해</div>
    </>;
  }
}

export default ButtonGroup;
