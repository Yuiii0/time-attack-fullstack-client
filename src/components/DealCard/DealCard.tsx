import { Post } from "@/types/Post.type";
import formatPrice from "@/utils/formatPrice.utils";
import randomNumber from "@/utils/randomNumber.utils";
import Link from "next/link";
interface DealCardProps {
  deal: Post;
}
function DealCard({ deal }: DealCardProps) {
  return (
    <Link
      href={`/deals/${deal.id}`}
      className="flex flex-col gap-y-5 cursor-pointer"
    >
      <div className="w-72 h-72 bg-gray-100/30 flex">
        <img
          className="w-full object-cover"
          src={`http://localhost:5050/${deal?.imgSrc}`}
          alt={deal.title}
        />
      </div>
      <div className="flex flex-col gap-1">
        <h4 className=" text-gray-800">{deal.title}</h4>
        <p className="text-gray-500 text-sm  font-light">{deal.location}</p>
        <p className="font-bold">{formatPrice(deal.price)}</p>
        <p className="text-gray-400 text-sm font-light mt-2">
          관심 {randomNumber()}
        </p>
      </div>
    </Link>
  );
}

export default DealCard;
