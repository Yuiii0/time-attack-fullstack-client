import { Post } from "@/types/Post.type";

export type GetDealsData = Post[];
export type GetDealData = Post;

export type CreateDealData = Post;
export type UpdateDealData = {
  title: string;
  content: string;
  location: string;
  price: number;
  imgSrc?: string;
};
export type DeleteDealData = {
  id: number;
};

export type LikedDealData = {
  id: number;
  userId: number;
  postId: number;
  createdAt: string;
  post: Post;
};
