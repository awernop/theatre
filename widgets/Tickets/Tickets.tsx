import { $ticketsStore } from "@/stores/tickets";
import { useUnit } from "effector-react";
import Image from "next/image";
import ticket from "@/img/tickets.png";
import logo from "@/img/logo.png";

import style from "./tickets.module.scss";

const Tickets = ({play, date, row, place}) =>{
    const ticketData = useUnit($ticketsStore)
    let num = Math.trunc(Math.random() * (1000000 - 100000) + 100000);

    return(
    <div className={style.main}>
        <div className={style.left}>
            <Image src={ticket} alt=""/>
        </div>
        <div className={style.right}>
            <div className={style.right__row}>
                <p>№{num}</p>
            </div>
            <h2 className={style.play}>{play}</h2>
            <p><span>Дата: </span><span>{date}</span></p>
            <p><span>Ряд: </span><span>{row}</span></p>
            <p><span>Место: </span><span>{place}</span></p>
        </div>
    </div>
    )

}

export default Tickets;