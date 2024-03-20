import { createStore, createEvent } from "effector";

export const $ticketsStore = createStore([
    {
        play: "Мастер и Маргарита",
        firstName: "Анна",
        secondName: "Борисова",
        patronymic: "Андреевна",
        date: "2024-03-09",
        row: "8",
        place: "13",
    },
]);

export const addTicket = createEvent();

$ticketsStore.on(addTicket, (store, res) => [...store, res]);