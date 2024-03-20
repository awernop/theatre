'use client'
import Image from "next/image";
import stuuff from "@/img/staff.png";
import Heading from "@/shared/Heading/Heading";
import director from "@/img/staff/director.png";
import staff from "@/assets/staff";
import StaffCard from "@/widgets/StaffCard/StaffCard";
import { useState } from "react";

import style from "./staff.module.scss";

const runSearch = (query: string) => {
    if(!query){
        return staff;
    }
  
    const lowerCaseQuery = query.toLowerCase();
  
    return staff.filter((item) => 
    item.name.toLowerCase().includes(lowerCaseQuery))
  };

const Staff = () =>{

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

    const handleChangeVoice = (e) =>{
        let maas = [];
        if(e.target.value == "Голос"){
            setStuff(staff);
        } else{
            staff.forEach(item => {
                item.voice == e.target.value ? maas.push(item) : null;
            });
            setStuff(maas);
        }
    }

    const handleChangeInstrument = (e) =>{
        let maas = [];
        if(e.target.value == "Инструмент"){
            setStuff(staff);
        } else{
            staff.forEach(item => {
                item.instrument == e.target.value ? maas.push(item) : null;
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

    return(
        <div className="container">
        <div className={style.main}>

            <div className={style.svg}>
                <svg width="776" height="1042" viewBox="0 0 776 1042" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_683_1640)">
                    <circle cx="255" cy="521" r="371" fill="#A21717" fill-opacity="0.42" />
                </g>
                <defs>
                    <filter id="filter0_f_683_1640" x="-266" y="0" width="1042" height="1042" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_683_1640" />
                    </filter>
                </defs>
                </svg>
            </div>
            <div className={style.part1}>
                <div className={style.part1__left}>
                    <Image src={stuuff} alt="" className={style.img}/>
                </div>
                <div className={style.right}>
                    <h2>Сотрудники</h2>
                    <p>Наш коллектив состоит из талантливых актеров, 
                        режиссеров, художников, музыкантов, светотехников 
                        и звукооператоров, которые совместными усилиями создают 
                        незабываемые спектакли. </p>
                </div>
            </div>
            <div className={style.part3}>
            <div className={style.part4__line__select}>
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

                        <select onChange={(e) => handleChangeVoice(e)}>
                            <option value="Голос">Голос</option>
                            <option value="Бас">Бас</option>
                            <option value="Баритон">Баритон</option>
                            <option value="Тенор">Тенор</option>
                            <option value="Сопрано">Сопрано</option>
                            <option value="Альт">Альт</option>
                        </select>

                        <select onChange={(e) => handleChangeInstrument(e)}>
                            <option value="Инструмент">Инструмент</option>
                            <option value="Гитара">Гитара</option>
                            <option value="Скрипка">Скрипка</option>
                            <option value="Фортепиано">Фортепиано</option>
                            <option value="Барабаны">Барабаны</option>
                            <option value="Дирижер">Дирижер</option>
                        </select>

                        <div className={style.search}>
                            <input type="text" className={style.input} onChange={handleChange} />
                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.0086 13.2075H14.06L13.7238 12.8834C14.9412 11.4714 15.6102 9.66876 15.6089 7.80446C15.6089 6.26089 15.1512 4.75197 14.2936 3.46854C13.4361 2.1851 12.2172 1.18478 10.7911 0.594083C9.36502 0.00338155 7.7958 -0.151173 6.28189 0.149964C4.76797 0.451101 3.37735 1.1944 2.28588 2.28588C1.1944 3.37735 0.451101 4.76797 0.149964 6.28189C-0.151173 7.7958 0.00338155 9.36502 0.594083 10.7911C1.18478 12.2172 2.1851 13.4361 3.46854 14.2936C4.75197 15.1512 6.26089 15.6089 7.80446 15.6089C9.73757 15.6089 11.5146 14.9005 12.8834 13.7238L13.2075 14.06V15.0086L19.211 21L21 19.211L15.0086 13.2075ZM7.80446 13.2075C4.81475 13.2075 2.40138 10.7942 2.40138 7.80446C2.40138 4.81475 4.81475 2.40138 7.80446 2.40138C10.7942 2.40138 13.2075 4.81475 13.2075 7.80446C13.2075 10.7942 10.7942 13.2075 7.80446 13.2075Z" fill="black" />
                            </svg>
                        </div>
                    </div>
                <div className={style.part3__post}>
                    {stuff.map((stuff) => (
                        <StaffCard key={stuff.id} {...stuff}/>
                    ))}
                </div>
            </div>
        </div>
        </div>
    )
}

export default Staff;