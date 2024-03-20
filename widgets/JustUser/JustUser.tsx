import { useUnit } from "effector-react";
import { $activeUser } from "@/stores/activeUserStore";
import Image from "next/image";
import avatar from "@/img/avatar/avatar.png";
import Tickets from "../Tickets/Tickets";
import { $ticketsStore } from "@/stores/tickets";

import style from "./justuser.module.scss";

const JustUser = () =>{

    const userData = useUnit($activeUser);
    const tickets = useUnit($ticketsStore);

    return(
        <div className="container">
    <div className={style.main}>
        <div className={style.top}>
            <Image src={avatar} alt=""/>
            <div className={style.top__txt}>
                <h2>{userData.name}</h2>
                <span>@{userData.login}</span>
            </div>
        </div>
        <div className={style.bottom}>
            <h2 className={style.bottom__title}>Билеты</h2>
            <div className={style.tickes}>
            {tickets.map((t, index) => (
                <Tickets 
                key={index} 
                play = {t.play} 
                date = {t.date} 
                row = {t.row} 
                place = {t.place}/>
            ))}
            </div>
        </div>
    </div>
    </div>
    )
}

export default JustUser;