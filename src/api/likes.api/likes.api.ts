import { Response } from "@/types/Response.type";
import { coreClient } from "..";

async function toggleLikeDeal(dealId: number) {
  const response = await coreClient.post<Response<boolean>>(
    `/deals/${dealId}/likes`
  );
  const data = response.data;
  if (!data.success) throw new Error(data.error.message);

  const isLiked = data.result;
  return isLiked;
}
async function getMyLikedDeals() {
  const response = await coreClient.get("/likes");
  const data = response.data;
  if (!data.success) throw new Error(data.error.message);

  const likedPosts = data.result;
  return likedPosts;
}
const likesAPI = {
  toggleLikeDeal,
  getMyLikedDeals,
};

export default likesAPI;
