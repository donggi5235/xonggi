"use client";
import style from "./tab.module.css";
import React, {useContext, useState} from "react";
import {useRouter} from "next/navigation";
import {TabContext} from "@/app/(afterLogin)/home/_component/TabProvider";

const Tab = () => {
  const [tab, setTab] = useState('rec');

  const onClickRec = () => {
    setTab("rec");
  }
  const onClickFol = () => {
    setTab("fol");
  }

  return (
    <div className={style.homeFixed}>
      <div className={style.homeTab}>
        <div onClick={onClickRec}>For you
          <div className={style.tabIndicator} hidden={tab === 'fol'}></div>
        </div>
        <div onClick={onClickFol}>
          Following
          <div className={style.tabIndicator} hidden={tab === 'rec'}></div>
        </div>
      </div>
    </div>
  );
};

export default Tab;