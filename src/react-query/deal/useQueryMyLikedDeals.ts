import api from "@/api";
import { useQuery } from "@tanstack/react-query";

export default function useQueryMyLikedDeals(enabled: boolean = true) {
  return useQuery({
    queryKey: ["deals"],
    queryFn: api.deals.getMyLikedDeals,
    enabled,
  });
}
