'use client'
import styles from "./page.module.scss";
import Button from "@/shared/Button/Button";
import Link from "next/link";
import Heading from "@/shared/Heading/Heading";
import {Swiper, SwiperSlide} from "swiper/react";
import news from "../assets/news";
import Schedule from "@/widgets/Schedule/Schedule";
import schedule from "@/assets/schedule";
import News from "@/widgets/News/News";
import 'swiper/css';


export default function Home() {
  return (
    <div className="container">
    <div className={styles.main}>

      <div className={styles.part__1}>
      <div className={styles.blur}>
      <svg width="655" height="1042" viewBox="0 0 655 1042" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_f_683_1604)">
            <circle cx="134" cy="521" r="371" fill="#A21717" fill-opacity="0.42" />
          </g>
          <defs>
            <filter id="filter0_f_683_1604" x="-387" y="0" width="1042" height="1042" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_683_1604" />
            </filter>
          </defs>
        </svg>
      </div>
        <div className={styles.left}>
          <h1>ВМЕСТЕ МЫ ТВОРИМ ИСКУССТВО</h1>
          <div className={styles.buttons}>
              <Button href="/performances">Спектакли</Button>
              <Link href="/performances#tickets">
                <button className={styles.button__white}>Купить билеты</button>
              </Link>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.right__img}>
            
          </div>
        </div>
      </div>

      <div className={styles.part__2}>
          <div className={styles.part__2__2}>
            {schedule.map((schedule) =>(
              <Schedule key={schedule.id} {...schedule}/>
              ))
            }
          </div>

          <div className={styles.part__2__1}>
            <Heading>Новости</Heading>
            <Swiper
              spaceBetween={550}
              slidesPerView={3}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {news.map((news) =>(
                <SwiperSlide><News key={news.id} {...news}/></SwiperSlide>
              ))
              }
            </Swiper>
          </div>
      </div>
    </div>
    </div>
  );
}
