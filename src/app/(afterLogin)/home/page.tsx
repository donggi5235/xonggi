import PostForm from "./_component/PostForm";
import Tab from "./_component/Tab";
import TabProvider from "./_component/TabProvider";
import Post from "@/app/(afterLogin)/_component/Post";
import style from "./home.module.css";
import {Metadata, NextPage} from "next";
export const metadata: Metadata = {
  title: '홈 / Z',
  description: '홈',
}

const Home: NextPage = async () => {

  return (
    <main className={style.main}>
      <TabProvider>
        <Tab />
        <PostForm />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </TabProvider>
    </main>
  );
}

export default Home;