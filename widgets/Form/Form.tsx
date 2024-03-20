'use client';
import "./form.scss";
import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import { $ticketsStore, addTicket } from "@/stores/tickets";
import { useUnit } from "effector-react";
import { $activeUser } from "@/stores/activeUserStore";

type IFormValues = {
    play: string;
    firstName: string;
    secondName: string;
    patronymic: string;
    date: Date;
    row: number;
    place: number;
    /*example: string;
    exampleRequired: string;*/
}

const Form = () =>{

    const ticketStore = useUnit($ticketsStore);
    const activeUser = useUnit($activeUser);

    const { register, handleSubmit } = useForm<IFormValues>();

    const onSubmit: SubmitHandler<IFormValues> = (data) => {
        if(activeUser.length != 0){
        addTicket(data);
        alert("Билет добавлен в ваш профиль");
        console.log(data);
        }else{
            alert("Чтобы купить билет, войдите в аккаунт");
        }
    };

    return(
        <form onSubmit={handleSubmit(onSubmit)} className="form">
            <div className="form__el">
                <label className="form__label">Спектакль *</label>
                <select className="form__select"
                {...register("play", 
                    {required: {
                        value: true,
                        message: "Этот пункт обязателен для заполнения!",
                    },} )}>
                    <option value=" "></option>
                    <option value="Великий Гэтсби">Великий Гэтсби</option>
                    <option value="Портрет Дориана Грея">Портрет Дориана Грея</option>
                    <option value="Преступление и наказание">Преступление и наказание</option>
                    <option value="Мастер и Маргарита">Мастер и Маргарита</option>
                </select>
            </div>

            <div className="form__namediv">
            <div className="form__el">
                <label htmlFor="firstName" className="form__label">Имя *</label>
                <input 
                type="text" 
                id="firstName"
                {...register("firstName",{
                    required: {
                        value: true,
                        message: "Этот пункт обязателен для заполнения!",
                    },
                })}
                className="form__input"
                style={{width: 330}}
                />
            </div>

            <div className="form__el">
                <label htmlFor="secondName" className="form__label">Фамилия *</label>
                <input 
                type="text" 
                id="secondName"
                {...register("secondName",{
                    required: {
                        value: true,
                        message: "Этот пункт обязателен для заполнения!",
                    },
                })}
                className="form__input"
                style={{width: 330}}
                />
            </div>

            <div className="form__el">
                <label htmlFor="patronymic" className="form__label">Отчество</label>
                <input 
                type="text" 
                id="patronymic"
                {...register("patronymic",{
                    required: {
                        value: false,
                        message: "Этот пункт обязателен для заполнения!",
                    },
                })}
                className="form__input"
                style={{width: 330}}
                />
            </div>
            </div>

            <div className="form__el">
                <label htmlFor="date" className="form__label">Дата *</label>
                <input 
                type="date" 
                id="date"
                {...register("date",{
                    required: {
                        value: true,
                        message: "Этот пункт обязателен для заполнения!",
                    },
                })}
                className="form__date"
                />
            </div>

            <div className="form__namediv">

            <div className="form__el">
                <label htmlFor="row" className="form__label">Ряд *</label>
                <input 
                type="number" 
                id="row"
                {...register("row",{
                    required: {
                        value: true,
                        message: "Этот пункт обязателен для заполнения!",
                    },
                })}
                className="form__input"
                style={{width: 176}}
                />
            </div>

            <div className="form__el">
                <label htmlFor="place" className="form__label">Место *</label>
                <input 
                type="number" 
                id="place"
                {...register("place",{
                    required: {
                        value: true,
                        message: "Этот пункт обязателен для заполнения!",
                    },
                })}
                className="form__input"
                style={{width: 176}}
                />
            </div>

            </div>

            <button>
            <div className="button__red" id="button-3">
                <div id="circle"></div>
                <a>Купить</a>
            </div>
            </button>
        </form>
    )
}

export default Form;