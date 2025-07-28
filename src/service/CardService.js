import {fetchAllCards, fetchClassCards} from "./ApiService.js";

const getClassCards = (selectedClass) => {
    return fetchClassCards(selectedClass);
}


const getAllCards = () => {
    return fetchAllCards();
}

export {
    getAllCards,
    getClassCards,
}