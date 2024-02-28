"use client";

import DealCardList from "@/components/DealCardList";
import Heading from "@/components/Heading";
import Page from "@/components/Page";
import TabLink from "@/components/TabLink";
import useQueryMyDeals from "@/react-query/deal/useQueryMydeals";

function MyPage(props: { searchParams: { postType?: string } }) {
  const { data: myPosts } = useQueryMyDeals();
  let posts = [];

  const postType = props.searchParams.postType;
  if (postType === "myDeal") {
    posts = myPosts;
  } else {
  }

  //좋아요 포스트

  return (
    <Page>
      {postType === "myDeal" ? (
        <Heading>내 판매글</Heading>
      ) : (
        <Heading>관심 판매글</Heading>
      )}

      <ul className="flex gap-x-7">
        <TabLink
          href="/my/deals?postType=myDeal"
          label="내 판매글"
          isActive={postType === "myDeal"}
        />
        <TabLink
          href="/my/deals?postType=likedPost"
          label="관심 판매글"
          isActive={postType === "likedPost"}
        />
      </ul>
      <h3></h3>
      <DealCardList deals={posts}></DealCardList>
    </Page>
  );
}

export default MyPage;
