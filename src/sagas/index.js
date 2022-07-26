import { all, call } from "redux-saga/effects";
import {getNextPageWatcher, getPokemonsWatcher} from "./pokemonsSaga";

export default function* watchRootSaga() {
    yield all([
        call(getPokemonsWatcher),
        call(getNextPageWatcher),
    ]);
}
