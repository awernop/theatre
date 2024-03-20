import React from "react";
import styles from "../News/news.module.scss";
import Link from "next/link";
import Image from "next/image";

const News = (news: {id: any; preview: any; title: any}) => {
    const {id, preview, title} = news;

    return(
        <Link href="/article">
        <div className={styles.news}>
            <Image src={preview} alt="" className={styles.img}/>
            <p className={styles.news__txt}>{title}</p>
        </div>
        </Link>
    )
}

export default News;