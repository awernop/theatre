'use client'
import React from "react";
import Image from "next/image";
import Button from "@/shared/Button/Button";
import Marks from "@/shared/Marks/Marks";
import poster from "@/img/posters/master.png";
import actor1 from "@/img/staff/actor3.png";
import actor2 from "@/img/staff/actor6.png";
import actor3 from "@/img/staff/actor5.png";
import actor4 from "@/img/staff/actor7.png";
import Link from "next/link";

import style from "./master.module.scss";

const Masterandmargarita = () =>{
    return(
        <div className="container">
    <div className={style.main}>
        <div className={style.main1}>
            <div className={style.left}>
                <Image src={poster} alt="" className={style.img1}/>
            </div>
            <div className={style.right}>
                <div className={style.title}>
                    <span>Мастер и Маргарита</span>
                    <Marks>Премьера</Marks>
                </div>
                <span className={style.rate}>16+</span>
                <p className={style.desc}>Спектакль о любви, вере, 
                предательстве и чудесах, который заставляет зрителя 
                задуматься о вечных ценностях и противоречиях человеческой души.</p>
                <Button href="/performances#tickets">Купить билеты</Button>
            </div>
        </div>
        <div className={style.bottom}>
            <h2>Актеры</h2>
            <div className={style.bottom__line}>
                <Link href="/no">
                    <div className={style.bottom__card}>
                        <Image src={actor1} alt='' className={style.img}/>
                        <p className={style.bottom__role}>Воланд</p>
                        <p className={style.bottom__p}>Ефимов Матвей Алексеевич</p>    
                    </div>
                </Link>

                <Link href="/no">
                    <div className={style.bottom__card}>
                        <Image src={actor2} alt='' className={style.img}/>
                        <p className={style.bottom__role}>Маргарита</p>
                        <p className={style.bottom__p}>Щербакова Елизавета Ильичнина</p>    
                    </div>
                </Link>

                <Link href="/no">
                    <div className={style.bottom__card}>
                        <Image src={actor3} alt='' className={style.img}/>
                        <p className={style.bottom__role}>Мастер</p>
                        <p className={style.bottom__p}>Алексеев Илья Алиевич</p>    
                    </div>
                </Link>

                <Link href="/no">
                    <div className={style.bottom__card}>
                        <Image src={actor4} alt='' className={style.img}/>
                        <p className={style.bottom__role}>Азазелло</p>
                        <p className={style.bottom__p}>Зеленин Роберт Николаевич</p>    
                    </div>
                </Link>
            </div>
        </div>
    </div>
    </div>
    )
}

export default Masterandmargarita;