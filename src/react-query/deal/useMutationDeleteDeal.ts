// import api from "@/api";
// import { useMutation, useQueryClient } from "@tanstack/react-query";

// export default function useMutationUpdateDeal(dealId: number) {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: (newDealData) => api.deals.updateDeal(dealId, newDealData), // mutationFn 수정
//     onSuccess: () => {      /
//       queryClient.invalidateQueries({ exact: true, queryKey: ["deal"] });
//     },
//   });
// }
