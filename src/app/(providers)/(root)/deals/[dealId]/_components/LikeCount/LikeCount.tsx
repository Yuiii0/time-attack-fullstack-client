"use client";

import { useState } from "react";

function LikeCount() {
  const [likeCount, setLikeCount] = useState(0);
  return <div>{likeCount}</div>;
}

export default LikeCount;
