import React from "react";
import style from "./profile.module.css"
import BackButton from "@/app/(afterLogin)/search/_component/BackButton";
import Post from "../_component/Post";

type Props = {
  params: { username: string }
};

export default async function Page({params}: Props) {
  const user = {
    id:"donggi",
    nickname:"동구밭",
    image:"/donggi.jpg",
    
  }
  return (
    <div className={style.main}>
      <div className={style.header}>
        <BackButton />
        <h3 className={style.headerTitle}>{user.nickname}</h3>
      </div>
      <div className={style.userZone}>
        <div className={style.userImage}>
          <img src={user.image} alt={user.id}/>
        </div>
        <div className={style.userName}>
          <div>{user.nickname}</div>
          <div>@{user.id}</div>
        </div>
        <button className={style.followButton}>팔로우</button>
      </div>
      <div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}