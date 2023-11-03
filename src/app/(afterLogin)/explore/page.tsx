import {Metadata} from "next";
import style from "./explore.module.css";
import Trend from "@/app/(afterLogin)/_component/Trend";
import SearchForm from "@/app/(afterLogin)/_component/SearchForm";
import Post from "@/app/(afterLogin)/_component/Post";

export const metadata: Metadata = {
  title: '탐색하기 / Z',
  description: '탐색하기',
}

export default async function Explore() {

  return <main className={style.main}>
    <div className={style.formZone}>
      <SearchForm />
    </div>
    <div className={style.trend}>
      <h3>Trends for you</h3>
      <Trend />
      <Trend />
      <Trend />
      <Trend />
      <Trend />
    </div>
    <div>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  </main>
}