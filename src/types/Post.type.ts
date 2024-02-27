export type Post = {
  id: number;
  authorId: number;
  title: string;
  content: string;
  imgSrc: string;
  price: 460000;
  location: string;
  createdAt: string;
  updatedAt: string;
  author: {
    email: string;
  };
};
