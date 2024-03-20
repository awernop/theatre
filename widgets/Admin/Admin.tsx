import { useUnit } from "effector-react";
import { $activeUser } from "@/stores/activeUserStore";
import Image from "next/image";
import avatar from "@/img/avatar/avatar.png";
import staff from "@/assets/staff";
import { useState } from "react";

import style from "./admin.module.scss"

const runSearch = (query: string) => {
    if(!query){
        return staff;
    }
  
    const lowerCaseQuery = query.toLowerCase();
  
    return staff.filter((item) => 
    item.name.toLowerCase().includes(lowerCaseQuery))
  };

const Admin = () =>{

    const handleChange = (event: { target: { value: string; }; }) => {
        const foundArtist = runSearch(event.target.value);
        setStuff(foundArtist);
    };

    const [stuff, setStuff] = useState(staff);

    const handleChangeGender = (e) =>{
        let maas = [];
        if(e.target.value == "Пол"){
            setStuff(staff);
        } else{
            staff.forEach(item => {
                item.gender == e.target.value ? maas.push(item) : null;
            });
            setStuff(maas);
        }
        
    }

    const handleChangePosition = (e) =>{
        let maas = [];
        if(e.target.value == "Должность"){
            setStuff(staff);
        } else{
            staff.forEach(item => {
                item.position == e.target.value ? maas.push(item) : null;
            });
            setStuff(maas);
        }
    }

    const userData = useUnit($activeUser);

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
            <div className={style.select}>
                <select onChange={(e) => handleChangeGender(e)}>
                    <option value="Пол">Пол</option>
                    <option value="ж" id="fem">Женский</option>
                    <option value="м" id="male">Мужской</option>
                </select>

                <select onChange={(e) => handleChangePosition(e)}>
                    <option value="Должность">Должность</option>
                    <option value="Актер">Актер</option>
                    <option value="Музыкант">Музыкант</option>
                    <option value="Музыкант">Постановщик</option>
                </select>

                <div className={style.search}>
                    <input type="text" className={style.input} onChange={handleChange} />
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.0086 13.2075H14.06L13.7238 12.8834C14.9412 11.4714 15.6102 9.66876 15.6089 7.80446C15.6089 6.26089 15.1512 4.75197 14.2936 3.46854C13.4361 2.1851 12.2172 1.18478 10.7911 0.594083C9.36502 0.00338155 7.7958 -0.151173 6.28189 0.149964C4.76797 0.451101 3.37735 1.1944 2.28588 2.28588C1.1944 3.37735 0.451101 4.76797 0.149964 6.28189C-0.151173 7.7958 0.00338155 9.36502 0.594083 10.7911C1.18478 12.2172 2.1851 13.4361 3.46854 14.2936C4.75197 15.1512 6.26089 15.6089 7.80446 15.6089C9.73757 15.6089 11.5146 14.9005 12.8834 13.7238L13.2075 14.06V15.0086L19.211 21L21 19.211L15.0086 13.2075ZM7.80446 13.2075C4.81475 13.2075 2.40138 10.7942 2.40138 7.80446C2.40138 4.81475 4.81475 2.40138 7.80446 2.40138C10.7942 2.40138 13.2075 4.81475 13.2075 7.80446C13.2075 10.7942 10.7942 13.2075 7.80446 13.2075Z" fill="black" />
                    </svg>
                </div>
            </div>
            <div className={style.tickes}>
                <table>
                    {stuff.map((s, index) => (
                        <tr key={index}>
                            <td>{s.name}</td>
                            <td>{s.gender}</td>
                            <td>{s.birth}</td>
                            <td>{s.position}</td>
                            <td>{s.voice}</td>
                            <td>{s.instrument}</td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    </div>
    </div>
    )
}

export default Admin;