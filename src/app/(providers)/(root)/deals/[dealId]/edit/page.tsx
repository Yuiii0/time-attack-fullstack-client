"use client";

import api from "@/api";
import Button from "@/components/Button";
import FileInput from "@/components/FileInput/FileInput";
import Heading from "@/components/Heading";
import Input from "@/components/Input";
import Page from "@/components/Page";
import { useRouter } from "next/navigation";
import { useState } from "react";

function ModifyDealPage(props: { params: { dealId: string } }) {
  const dealId = props.params.dealId;
  const router = useRouter();
  // const {} = useMutationUpdateDeal(Number(dealId));

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [price, setPrice] = useState<any>("");

  const handleClickUpdateDeal = async () => {
    if (!title.trim()) return alert("제목을 입력해 주세요");
    if (!content.trim()) return alert("내용을 입력해 주세요");
    if (!location.trim()) return alert("위치를 입력해 주세요");
    if (!price) return alert("가격을 입력해 주세요");
    if (!image) return alert("이미지를 선택해주세요");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("location", location);
    formData.append("price", price);
    formData.append("image", image);

    try {
      await api.deals.updateDeal(Number(dealId), formData);
      alert("글이 성공적으로 업데이트 되었습니다");

      setTitle("");
      setContent("");
      setLocation("");
      setPrice("");
      router.push(`/deals/${dealId}`);
    } catch (e) {
      alert("글 업데이트에 실패하였습니다.");
    }
  };

  return (
    <Page>
      <div>
        <Heading>판매글 수정</Heading>
      </div>

      <div className="flex flex-col gap-y-6 w-3/5 mx-auto">
        <Input
          label="제목"
          autoFocus
          value={title}
          type="text"
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          label="글 내용"
          large
          value={content}
          autoFocus
          type="text"
          onChange={(e) => setContent(e.target.value)}
        />
        <Input
          label="직거래 위치"
          value={location}
          autoFocus
          type="text"
          onChange={(e) => setLocation(e.target.value)}
        />
        <Input
          label="판매 가격"
          value={price}
          autoFocus
          type="number"
          onChange={(e) => setPrice(Number(e.target.value))}
        />
        <div className="mb-3"></div>
        <FileInput
          onChange={(e: any) => setImage(e.target.files?.[0] || null)}
        />
        <div className="mb-3"></div>
        <Button color="orange" onClick={handleClickUpdateDeal}>
          글 수정
        </Button>
      </div>
    </Page>
  );
}

export default ModifyDealPage;
