import api from "@/api";
import Page from "@/components/Page";
import randomNumber from "@/utils/randomNumber.utils";

async function DealPage(props: { params: { dealId: string } }) {
  const dealId = props.params.dealId;
  const deal = await api.deals.getDeal(Number(dealId));
  return (
    <Page>
      <section>
        <div>
          <img src={deal.imgSrc} alt={deal.title} />
        </div>
        <div>
          <img
            src="https://w7.pngwing.com/pngs/665/132/png-transparent-user-defult-avatar.png"
            alt="user_img"
          />
          <p>{deal.author.email}</p>
          <p>{deal.location}</p>
        </div>
        <div>
          <h5>{deal.title}</h5>
          <h6>{deal.createdAt}</h6>
          <h6>{deal.price}</h6>
        </div>
        <div>
          <p>{deal.content}</p>
          <div>
            <span>관심 {randomNumber()}</span>
            <span>조회 {randomNumber()}</span>
          </div>
          <button>관심</button>
        </div>
      </section>
    </Page>
  );
}

export default DealPage;
