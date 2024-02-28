import { Response } from "@/types/Response.type";
import { coreClient } from "..";
import {
  CreateDealData,
  DeleteDealData,
  GetDealData,
  GetDealsData,
} from "./deals.data";

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

async function createDeal(dto: CreateDealData) {
  await coreClient.post<Response>("deals/create", dto);
}
async function deleteDeal(dealId: number) {
  const response = await coreClient.delete<Response<DeleteDealData>>(
    `deals/${dealId}`
  );
  const data = response.data;
  if (!data.success) throw new Error(data.error.message);

  const deletedDealId = data.result;
  return deletedDealId;
}

async function updateDeal(dealId: number, dto: CreateDealData) {
  const response = await coreClient.put(`/deals/${dealId}/edit`, dto);
  const data = response.data;
  if (!data.success) throw new Error(data.error.message);

  const deal = data.result;
  return deal;
}
async function getMyDeals() {
  const response = await coreClient.get("/my/deals");
  const data = response.data;
  if (!data.success) throw new Error(data.error.message);

  const deals = data.result;
  return deals;
}

const dealsAPI = {
  getDeals,
  getDeal,
  createDeal,
  deleteDeal,
  updateDeal,
  getMyDeals,
};

export default dealsAPI;
