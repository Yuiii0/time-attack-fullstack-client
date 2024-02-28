import api from "@/api";
import Page from "@/components/Page";
import randomNumber from "@/utils/randomNumber.utils";
import ButtonGroup from "./_components/ButtonGroup";

async function DealPage(props: { params: { dealId: string } }) {
  const dealId = props.params.dealId;
  const deal = await api.deals.getDeal(Number(dealId));

  return (
    <Page>
      <section>
        <div>
          <img src={deal?.imgSrc} alt={deal?.title} />
        </div>
        <div>
          <img
            src="https://secure.gravatar.com/avatar/b5df731310ce165389769473928fb706/?default=https%3A%2F%2Fus.v-cdn.net%2F5020483%2Fuploads%2Fdefaultavatar%2FK2266OAKOLNC.jpg&rating=g&size=200"
            alt="user_img"
          />
          <p>{deal.author?.email}</p>
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
          <ButtonGroup user={deal.author?.email} dealId={dealId} />
        </div>
      </section>
    </Page>
  );
}

export default DealPage;
