import Image from 'next/image'
import style from "@/app/(afterLogin)/layout.module.css";
import Trend from './Trend'

export default function TrendSection() {
  // const trendItem:{} = {
  //   id:"123",
  // }
  return (<div className={style.trendBg}>
    <div className={style.trend}>
      <h3>Trends for you</h3>
      {/* {Trend.map(trend => ( */}
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
      {/* ))} */}
      
    </div>
  </div>
  )
}
