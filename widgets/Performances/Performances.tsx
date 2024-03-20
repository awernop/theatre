import React from "react";
import Marks from "@/shared/Marks/Marks";
import Image from "next/image";
import Button from "@/shared/Button/Button";

import styles from "./performances.module.scss";

const Performancess = (performances: {id: any; src: any; title: any; genre: any; neww: any; link: any, rate: any, description: any}) => {
    const {id, src, title, genre, neww, link, rate, description} = performances;

    return(
        <div className={styles.main}>
            <div className={styles.left}>
                <Image src={src} alt="" className={styles.img}/>
            </div>
            <div className={styles.right}>
                <div className={styles.title}>
                    <span>{title}</span>
                    {neww == true ? <Marks>Премьера</Marks> : null}
                </div>
                <span className={styles.rate}>{rate}</span>
                <p className={styles.desc}>{description}</p>
                <Button href={link}>Подробнее</Button>
            </div>
        </div>
    )
}

export default Performancess;