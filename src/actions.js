import {
    GET_NEXT_PAGE,
    SET_NEXT_PAGE_URL,
    SET_POKEMONS,
    SET_PREVIOUS_PAGE_URL,
    SET_SELECTED_POKEMON_DATA
} from "./constants/actionTypes";

export const setPokemons = (payload) => {
    return {
        type: SET_POKEMONS,
        payload
    }
};

export const setNextPageURL = (payload) => {
    return {
        type: SET_NEXT_PAGE_URL,
        payload
    }
};

export const setPreviousPageURL = (payload) => {
    return {
        type: SET_PREVIOUS_PAGE_URL,
        payload
    }
};

export const getNextPage = (payload) => {
    return {
        type: GET_NEXT_PAGE,
        payload
    }
};

export const setSelectedPokemonData = (payload) => {
    return {
        type: SET_SELECTED_POKEMON_DATA,
        payload
    }
};