'use client';
import { useUnit } from "effector-react";
import { $activeUser } from "@/stores/activeUserStore";
import JustUser from "@/widgets/JustUser/JustUser";
import Button from "@/shared/Button/Button";
import Admin from "@/widgets/Admin/Admin";

import style from "./user.module.scss";


const User = () =>{

    const user = useUnit($activeUser);

    return(
        <div>
        {user.length != 0 ? (
            <div>
                {user.login == "admin" ? <Admin /> : <JustUser />}
            </div>) 
            : (
                <div className={style.nouser}>
                    <span>Вы еще не вошли в аккаунт</span>
                    <Button href="/login">Войти</Button>                    
                </div>
            )}
        </div>
    )
}

export default User;