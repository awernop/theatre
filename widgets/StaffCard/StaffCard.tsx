import React from "react";
import Link from "next/link";
import Image from "next/image";

import style from "./staffcard.module.scss";

const StaffCard = (staff: {id: any; src: any; name: any; gender: any; voice: any; instrument: any; position: any; link: any}) =>{

    const {id, src, name, gender, voice, instrument, position, link} = staff;
    
    return(
        <Link href={link}>
            <div className={style.card}>
                <Image src={src} alt="" className={style.img}/>
                <span>{name}</span>
                <p>{position}</p>
            </div>
        </Link>
    )
}

export default StaffCard;