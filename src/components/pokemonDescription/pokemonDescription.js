import React from 'react';
import {useSelector} from "react-redux";
import {Main, Image, Stats, EmptyMessage, MovesContainer, DescriptionWrapper} from './styledComponents';

const PokemonDescription = () => {

    const pokemonData = useSelector((state) => {
        return state.pokemonsReducer.selectedPokemon
    });

    return <Main>
        {pokemonData ?
            <DescriptionWrapper>
                <Image
                    src={pokemonData.sprites.other.dream_world.front_default}
                    alt="pokemon-image"
                />
                <h2>{pokemonData.name}</h2>
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
                <h4>Moves</h4>
                <MovesContainer>
                    {pokemonData && pokemonData.moves
                        .map((move, index) => <div key={index}>{move.move.name}</div>)}
                </MovesContainer>
            </DescriptionWrapper>
            : <EmptyMessage>{'Pokémon is not selected'}</EmptyMessage>}
    </Main>
};

export default PokemonDescription;