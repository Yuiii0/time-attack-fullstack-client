"use client";

import api from "@/api";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

interface LikeButtonProps {
  dealId: string;
}

const LikeButton = ({ dealId }: LikeButtonProps) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleClickLikeButton = async () => {
    console.log("좋아요 버튼 클릭!");
    const likedState = await api.likes.toggleLikeDeal(Number(dealId));
    setIsLiked(likedState);
  };

  return isLiked ? (
    <FaHeart
      onClick={handleClickLikeButton}
      style={{ cursor: "pointer", color: "orange" }}
      size="24px"
    />
  ) : (
    <FaRegHeart
      onClick={handleClickLikeButton}
      style={{ cursor: "pointer", color: "orange" }}
      size="24px"
    />
  );
};

export default LikeButton;
