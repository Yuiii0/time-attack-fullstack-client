import { Post } from "@/types/Post.type";
import DealCard from "../DealCard";
interface DealCardListProps {
  deals: Post[];
}

function DealCardList({ deals }: DealCardListProps) {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
      {deals?.map((deal) => (
        <li key={deal.id}>
          <DealCard deal={deal} />
        </li>
      ))}
    </ul>
  );
}

export default DealCardList;
