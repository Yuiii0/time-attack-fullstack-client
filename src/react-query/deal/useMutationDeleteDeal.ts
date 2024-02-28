// import api from "@/api";
// import { useMutation, useQueryClient } from "@tanstack/react-query";

// export default async function useMutationDeleteDeal(dealId: number) {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: await api.deals.deleteDeal(dealId),
//     onSuccess: () => {
//       queryClient.invalidateQueries({ exact: true, queryKey: ["deal"] });
//     },
//   });
// }
