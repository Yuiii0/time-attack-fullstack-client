import api from "@/api";
import ProductCardList from "@/components/DealCardList";
import Heading from "@/components/Heading";
import Page from "@/components/Page";

async function HomePage() {
  const deals = await api.deals.getDeals();

  return (
    <Page>
      <Heading>전체 판매글</Heading>
      <ProductCardList deals={deals} />
    </Page>
  );
}

export const revalidate = 5;
export default HomePage;
