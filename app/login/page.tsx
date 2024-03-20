'use client'
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useUnit } from "effector-react";
import { $usersStore } from "@/stores/usersStore";
import { exitUser, loginUser } from "@/stores/activeUserStore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import "./login.scss";

type Inputs = {
    example: string;
    exampleRequired: string;
  };
  
  const loginUserPage = (data : any, allUser: any) => {
      return allUser.filter((user: any) => (
          user.login== data.login &&
          user.password == data.password
      ))
  }

const Login = () =>{
    useEffect(() => {
        exitUser()
    }, [])

    const [validLogin, setValidLogin] = useState(false)

    const routing = useRouter()

    const allUser = useUnit($usersStore)

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<Inputs>();
      const onSubmit: SubmitHandler<Inputs> = (data) => {
            const userData = loginUserPage(data, allUser)
            if (userData.length == 0) {
                return setValidLogin(true)
            }
            setValidLogin(false)
            loginUser(userData[0])
            routing.push('/user')
        };

    return(
        <div className="container">
        <div className="main">
            <div className="register">
                <h2>Вход</h2>
                {validLogin ? <p className="validation">Неверный логин или пароль</p> : null}
                <form onSubmit={handleSubmit(onSubmit)} className="register__form">
                    <div className="register__item">
                        <label htmlFor="login">Логин *</label>
                        <input 
                        type="login" 
                        id="login"
                        {...register("login",{
                            required: {
                                value: true,
                                message: "Этот пункт обязателен для заполнения!",
                            },
                        })}
                        />
                    </div>

                    <div className="register__item">
                        <label htmlFor="password">Пароль *</label>
                        <input 
                        type="password" 
                        id="password"
                        {...register("password",{
                            required: {
                                value: true,
                                message: "Этот пункт обязателен для заполнения!",
                            },
                        })}
                        />
                    </div>
                    <button type="submit">
                        <div className="btn" id="button-3">
                            <div id="circle"></div>
                            <p>Войти</p>
                        </div>
                    </button>
                </form>
            </div>
        </div>
        </div>
    )
}

export default Login;