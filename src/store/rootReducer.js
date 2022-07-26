import { combineReducers } from "redux";
import pokemonsReducer from "./pokemons/reducer";

export const rootReducer = combineReducers({
    pokemonsReducer
});