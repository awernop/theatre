import { createEvent, createStore } from "effector";

export const $usersStore = createStore([
    {
        login: "admin",
        password: "123",
        name: "Admin",
    },
    {
        login: "awernop",
        password: "123",
        name: "Анна",
    },
]);

export const addUser = createEvent();

$usersStore.on(addUser, (store, res) => [...store, res]);