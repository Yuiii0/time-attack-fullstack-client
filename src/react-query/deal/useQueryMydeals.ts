import api from "@/api";
import { useQuery } from "@tanstack/react-query";

export default function useQueryMyDeals(enabled: boolean = true) {
  return useQuery({
    queryKey: ["deals"],
    queryFn: api.deals.getMyDeals,
    enabled,
  });
}
