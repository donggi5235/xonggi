import style from "./layout.module.css";
import Logo from "../../../public/logo.png"
import Link from "next/link";
import Image from "next/image";
import {NextPage} from "next";
import { ReactNode } from "react";
import NavMenu from "@/app/(afterLogin)/_component/NavMenu";
import LogoutButton from "@/app/(afterLogin)/_component/LogoutButton";
import TrendSection from "@/app/(afterLogin)/_component/TrendSection";
import RightSearchZone from "@/app/(afterLogin)/_component/RightSearchZone";

type Props = {children:ReactNode, modal:ReactNode}

export async function AfterLoginLayout({children,modal}:Props) {

  return (
    <div className={style.container}> 
      <header className={style.leftSectionWrapper}>
        <section className={style.leftSection}>
          <div className={style.leftSectionFixed}>
            <Link className={style.logo} href="/home">
              <div className={style.logoPill}>
                <Image src={Logo} alt="" width={30} />
              </div>
            </Link>
            <nav>
              <ul>
                <NavMenu />
              </ul>
              <Link href="/compose/tweet" className={style.postButton}>게시하기</Link>
            </nav>
            <LogoutButton />
          </div>
        </section>
      </header>
      <div className={style.rightSectionWrapper}>
        <div className={style.rightSectionInner}>
          <main className={style.main}>{children}</main>
          <section className={style.rightSection}>
            <RightSearchZone />
            <TrendSection />
            <div className={style.followRecommend}>
              <h3>Who to follow</h3>
              {/* {followRecommends.map((v) => <FollowRecommend key={Math.random()} user={v}/>)} */}
              <div className={style.container}>
                <div className={style.userLogoSection}>
                  <div className={style.userLogo}>
                    
                  </div>
                </div>
                <div className={style.userInfo}>
                  <div className={style.title}>{}</div>
                  <div className={style.count}>@{}</div>
                </div>
                <div className={style.followButtonSection}>
                  <button >팔로우</button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {modal}
    </div>
  )
}

export default AfterLoginLayout;