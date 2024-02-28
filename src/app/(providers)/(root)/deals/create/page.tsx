"use client";

import Button from "@/components/Button";
import FileInput from "@/components/FileInput/FileInput";
import Heading from "@/components/Heading";
import Input from "@/components/Input";
import Page from "@/components/Page";
import useMutationCreateDeal from "@/react-query/deal/useMutationCreateDeal";
import { useRouter } from "next/navigation";
import { MouseEventHandler, useState } from "react";

function WritePostPage() {
  const router = useRouter();
  const { mutateAsync: createDeal, isPending } = useMutationCreateDeal();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState<number | string>();

  const handleClickCreateDeal: MouseEventHandler<HTMLButtonElement> = async (
    e
  ) => {
    if (!title.trim()) return alert("제목을 입력해 주세요");
    if (!content.trim()) return alert("내용을 입력해 주세요");
    if (!location.trim()) return alert("위치를 입력해 주세요");
    if (!price) return alert("가격을 입력해 주세요");

    try {
      await createDeal({ title, content, location, price });
      setTitle("");
      setContent("");
      setLocation("");
      setPrice("");
    } catch (e) {
      alert("판매글 작성에 실패하였습니다.");
    }
  };
  return (
    <Page>
      <div>
        <Heading>판매글 작성</Heading>
      </div>

      <div className="flex flex-col gap-y-6">
        <Input
          label="제목"
          autoFocus
          value={title}
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          disabled={isPending}
        />
        <Input
          label="글 내용"
          large
          value={content}
          autoFocus
          type="text"
          onChange={(e) => setContent(e.target.value)}
          disabled={isPending}
        />
        <Input
          label="직거래 위치"
          value={location}
          autoFocus
          type="text"
          onChange={(e) => setLocation(e.target.value)}
          disabled={isPending}
        />
        <Input
          label="판매 가격"
          value={price}
          autoFocus
          type="number"
          onChange={(e) => setPrice(Number(e.target.value))}
          disabled={isPending}
        />
        <div className="mb-3"></div>
        <FileInput />
        <div className="mb-3"></div>
        <Button
          color="orange"
          onClick={handleClickCreateDeal}
          disabled={isPending}
        >
          판매글 작성
        </Button>
      </div>
    </Page>
  );
}

export default WritePostPage;
