import api from "@/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useMutationToggleLikedDeals(dealId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => api.likes.toggleLikeDeal(Number(dealId)),
    onSuccess: () => {
      queryClient.invalidateQueries({ exact: true, queryKey: ["likedDeals"] });
    },
  });
}
