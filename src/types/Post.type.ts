export type Post = {
  id?: number;
  authorId?: number;
  title: string;
  content: string;
  imgSrc?: string;
  price: number | string;
  location: string;
  createdAt?: string;
  updatedAt?: string;
  author?: {
    email: string;
  };
};
