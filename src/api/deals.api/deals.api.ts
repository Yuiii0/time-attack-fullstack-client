import { Response } from "@/types/Response.type";
import { coreClient } from "..";
import { GetDealData, GetDealsData } from "./deals.data";

async function getDeals() {
  const response = await coreClient.get<Response<GetDealsData>>("deals");
  const data = response.data;
  if (!data.success) throw new Error(data.error.message);

  const deals = data.result;
  return deals;
}
async function getDeal(dealId: number) {
  const response = await coreClient.get<Response<GetDealData>>(
    `deals/${dealId}`
  );
  const data = response.data;
  if (!data.success) throw new Error(data.error.message);
  const deal = data.result;
  return deal;
}

const dealsAPI = {
  getDeals,
  getDeal,
};

export default dealsAPI;
