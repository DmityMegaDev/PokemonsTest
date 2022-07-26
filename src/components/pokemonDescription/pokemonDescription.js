import React from 'react';
import Select from 'react-select';
import {adoptPokemonList} from "../../helpers";
import {setSelectedPokemonData} from "../../actions";
import {useDispatch, useSelector} from "react-redux";
import {Main, Image, Stats, EmptyMessage} from './styledComponents';

const PokemonDescription = () => {

    const dispatch = useDispatch();

    const pokemonData = useSelector((state) => {
        return state.pokemonsReducer.selectedPokemon
    });
    const pokemonsList = useSelector((state) => {
        return state.pokemonsReducer.pokemons
    });

    const adoptedPokemonList = adoptPokemonList(pokemonsList);

    const pokemonSearchHandler = (e) => {
        dispatch(setSelectedPokemonData(e));
    };

    return <Main>
        <Select
            onChange={pokemonSearchHandler}
            options={adoptedPokemonList}
        />
        {pokemonData ?
            <>
                <h2>{pokemonData.name}</h2>
                <Image
                    src={pokemonData.sprites.other.dream_world.front_default}
                    alt="pokemon-image"
                />
                <h3>Type: {pokemonData.types[0].type.name}</h3>
                <Stats>
                    {pokemonData.stats.map((stat) => (
                        <div style={{display: 'flex'}}>
                            <div>{stat.stat.name}</div>
                            <div>{'-'}</div>
                            <div>{stat.base_stat}</div>
                        </div>
                    ))}
                </Stats>
                <div style={{height: '400px', overflowY: 'scroll'}}>
                    {pokemonData && pokemonData.moves.map((move, index) => <div key={index}>{move.move.name}</div>)}
                </div>
            </>
            : <EmptyMessage>{'Choose a pokemon'}</EmptyMessage>}
    </Main>
};

export default PokemonDescription;