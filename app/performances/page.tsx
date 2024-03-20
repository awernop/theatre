'use client'
import styles from "./performances.module.scss";
import Sort from "@/shared/Sort/Sort";
import perfs from "../../assets/performances";
import Performancess from "@/widgets/Performances/Performances";
import { useState } from "react";
import Heading from "@/shared/Heading/Heading";
import Image from "next/image";
import poster1 from "../../img/posters/anna.png";
import poster2 from "../../img/posters/david.png";
import Link from "next/link";
import Form from "@/widgets/Form/Form";


const Performances = () => {

    const [perfos, setPerfos] = useState(perfs);

    const handleClick1 = () => {
        let maas = [];
        perfs.forEach(item => {
            item.neww ? maas.push(item) : null;
        });
        setPerfos(maas);
    }

    const handleClick2 = () => {
        let maas = [];
        perfs.forEach(item => {
            !item.neww ? maas.push(item) : null;
        });
        setPerfos(maas);
    }

    return(
        <div className="container">
        <div className={styles.main}>
            <div className={styles.part1}>
                <h1>В этом сезоне</h1>
            </div>
            <div className={styles.part2}>
                <div className={styles.part2__2}>
                    <div className={styles.part2__2__line}>
                        <div className={styles.part2__2__line1}>
                            <Sort onClick={() => handleClick1()}>Премьеры</Sort>
                            <Sort onClick={() => handleClick2()}>Прошлый сезон</Sort>
                        </div>
                        <button onClick={() => setPerfos(perfs)} className={styles.part2__2__all}>Показать все</button>
                    </div>
                    <div className={styles.part2__2__plays}>
                        {perfos.map((perfos) => (
                            <Performancess key={perfos.id} {...perfos}/>
                        ))}
                    </div>
                </div>
            </div>
            <div className={styles.part3} id="tickets">
                <Heading>Купить билеты</Heading>
                <div className={styles.form}>
                    <Form />
                    <p className={styles.form__txt}>*Оформляя покупку на сайте вы соглашаетесь с условиями <a href="#">согласия на обработку персональных данных</a></p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Performances;