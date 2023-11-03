"use client";

import React from "react";
import Post from "@/app/(afterLogin)/_component/Post";
type Props = {
  searchParams: { q: string, pf?: string };
}
export default function SearchResult({searchParams}: Props) {
  return(<>
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
  </>)
//   const {data} = useQuery<IPost[], Object, IPost[], [_key: string, Props['searchParams']]>({
//     queryKey: ["searchResult", searchParams],
//     queryFn: getSearchResult,
//   });

//   return data?.map((v) => <Post key={v.postId} post={v}/>);
}