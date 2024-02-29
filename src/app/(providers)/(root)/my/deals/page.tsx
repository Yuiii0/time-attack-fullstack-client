"use client";

import api from "@/api";
import DealCardList from "@/components/DealCardList";
import Heading from "@/components/Heading";
import Page from "@/components/Page";
import TabLink from "@/components/TabLink";
import { useEffect, useState } from "react";

function MyPage(props: { searchParams: { postType?: string | undefined } }) {
  const postType = props.searchParams.postType || "myDeal";
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchDeals() {
      if (postType === "myDeal" || postType === undefined) {
        const myDeals = await api.deals.getMyDeals();

        setPosts(myDeals);
      } else {
        const response = await api.likes.getMyLikedDeals();
        const myLikedDeals = response.map((arr: any) => arr.post);
        setPosts(myLikedDeals);
      }
    }

    if (postType) {
      fetchDeals();
    }
  }, [postType]);

  //좋아요 포스트

  return (
    <Page>
      {postType === "myDeal" ? (
        <Heading>내 판매글</Heading>
      ) : (
        <Heading>관심 판매글</Heading>
      )}

      <ul className="flex gap-x-7 pb-12">
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

      <DealCardList deals={posts}></DealCardList>
    </Page>
  );
}

export default MyPage;
