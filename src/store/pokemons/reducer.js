import {
    SET_NEXT_PAGE_URL,
    SET_POKEMONS,
    SET_PREVIOUS_PAGE_URL,
    SET_SELECTED_POKEMON_DATA
} from "../../constants/actionTypes";


const initialState = {
    pokemons: [],
    nextPageURL: '',
    previousPageURL: '',
    selectedPokemon: null,
};

const pokemonsReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_POKEMONS:
            return {
                ...state,
                pokemons: [...state.pokemons, action.payload]
            };

            case SET_NEXT_PAGE_URL:
            return {
                ...state,
                nextPageURL: action.payload.toString()
            };

            case SET_PREVIOUS_PAGE_URL:
            return {
                ...state,
                previousPageURL: action.payload
            };

            case SET_SELECTED_POKEMON_DATA:
            return {
                ...state,
                selectedPokemon: action.payload
            };

        default:
            return state;
    }
};

export default pokemonsReducer;
