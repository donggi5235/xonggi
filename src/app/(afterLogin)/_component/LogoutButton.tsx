"use client";

import Image from "next/image";
import style from "@/app/(afterLogin)/layout.module.css";

export default function LogoutButton() {
  const me = {
    id:"donggi",
    nickname:"동구밭",
    image:"/donggi.jpg",
    
  }
  const onLogout = ():void => {
    
  }

  return (
    <>
      <button className={style.logoutButton} onClick={onLogout}>
        <div className={style.logOutUserImage}>
          <Image src={me.image} alt={me.id} width={50} height={50} />
        </div>
        <div className={style.logOutUserName}>
          <div>{me.nickname}</div>
          <div>@{me.id}</div>
        </div>
       </button>
    </>
  )
}