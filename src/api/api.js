import axios from "axios";

export const API = {
    getPokemons(pageURL) {
        if (!pageURL) {
            return axios
                .get(
                    `https://pokeapi.co/api/v2/pokemon?limit=0`
                )
                .then((res) => {
                    return res;
                });
        } else {
            return axios
                .get(
                    pageURL.payload
                )
                .then((res) => {
                    return res;
                });
        }
    },

    getPokemonData(pokemon) {
        return axios
            .get(
                `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
            )
            .then((res) => {
                return res.data;
            });
    },
};
