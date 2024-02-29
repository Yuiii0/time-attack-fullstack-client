import api from "@/api";
import Page from "@/components/Page";
import formatPrice from "@/utils/formatPrice.utils";
import { hourDayCount } from "@/utils/hourDayCount.utils";
import randomNumber from "@/utils/randomNumber.utils";
import ButtonGroup from "./_components/ButtonGroup";
import LikeButton from "./_components/LikeButton";

async function DealPage(props: { params: { dealId: string } }) {
  const dealId = props.params.dealId;
  const deal = await api.deals.getDeal(Number(dealId));

  return (
    <Page>
      <section className="flex flex-col gap-y-5  w-3/5 min-w-96 mx-auto">
        <div className=" h w-3/4 h-3/4 mb-8 flex justify-center mx-auto bg-gray-100/30 items-center h-80">
          <img
            src={`http://localhost:5050/${deal?.imgSrc}`}
            alt={deal?.title}
            className="object-cover"
          />
        </div>
        <div className=" rounded flex gap-x-4 border-b pb-3 overflow-hidden">
          <img
            className="w-12"
            src="https://secure.gravatar.com/avatar/b5df731310ce165389769473928fb706/?default=https%3A%2F%2Fus.v-cdn.net%2F5020483%2Fuploads%2Fdefaultavatar%2FK2266OAKOLNC.jpg&rating=g&size=200"
            alt="user_img"
          />
          <div>
            <p className="text-gray-700 text-[15px]">{deal.author?.email}</p>
            <p className="text-sm font-extralight text-gray-400">
              {deal.location}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-y-1">
          <h5 className="font-semibold text-gray-800 text-lg">{deal.title}</h5>
          <h6 className="font-bold pt-3">{formatPrice(deal.price)}</h6>
          <h6 className="text-sm text-gray-600 font-light">
            {hourDayCount(deal.createdAt)}
          </h6>
        </div>
        <div className="flex flex-col gap-y-2">
          <p className="mb-4">{deal.content}</p>
          <div className="flex text-sm text-gray-600 border-b py-3 gap-x-2">
            <span>관심 {0}</span>
            <span>조회 {randomNumber()}</span>
          </div>
          <div className="flex gap-x-4 mt-2 ">
            <LikeButton dealId={dealId} />
            <ButtonGroup user={deal.author?.email} dealId={dealId} />
          </div>
        </div>
      </section>
    </Page>
  );
}

export default DealPage;
