import {put, call, takeEvery} from "redux-saga/effects"
import {API} from '../api/api';
import {setNextPageURL, setPokemons, setPreviousPageURL} from "../actions";
import {GET_NEXT_PAGE} from "../constants/actionTypes";

function* getPokemonsWorker() {
    const result = yield call(API.getPokemons)
    if (result.status === 200) {
        for (let value of result.data.results) {
            yield  call(getPokemonData, value);
            yield put(setNextPageURL(result.data.next));
            yield put(setPreviousPageURL(result.data.previous));
        }
    }
}

function* getPokemonData(pokemon) {
    const pokemonResponse = yield call(API.getPokemonData, pokemon);
    yield put(setPokemons(pokemonResponse));
}

function* getNextPageWorker(nextPageURL) {
    const result = yield call(API.getPokemons, nextPageURL);
    if (result.status === 200) {
        for (let value of result.data.results) {
            yield  call(getPokemonData, value);
            yield put(setNextPageURL(result.data.next));
            yield put(setPreviousPageURL(result.data.previous));
        }
    }
}

export function* getPokemonsWatcher() {
    yield call(getPokemonsWorker);
}

export function* getNextPageWatcher() {
    yield takeEvery(GET_NEXT_PAGE, getNextPageWorker);
}
