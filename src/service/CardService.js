import {fetchAllCards} from "./ApiService.js";

const getAllCards = () => {
    return fetchAllCards()
        .sort(() => Math.random() - 0.5)
}

export {
    getAllCards,
}