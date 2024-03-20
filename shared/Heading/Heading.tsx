import React from "react";
import styles from "./heading.module.scss";
import Image from "next/image";
import star from "../../img/star.png";

interface HeadingProps{
    children: React.ReactNode;}

export default function Heading({children}:HeadingProps){
    return(
        <div className={styles.heading}>
            <Image src={star} alt=""/>
            <h2 className={styles.heading__txt}>{children}</h2>
        </div>
    )
}