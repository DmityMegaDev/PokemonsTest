import React from 'react';
import {useDispatch} from "react-redux";
import {setSelectedPokemonData} from "../../actions";
import {Main, ImageStyle} from './styledComponents';

const PokemonCard = ({pokemonData}) => {

    const {name} = pokemonData

    const dispatch = useDispatch();

    const setTypeColor = () => {
        switch (pokemonData.types[0].type.name) {
            case 'grass': {
                return 'green'
            }
            case 'water': {
                return 'blue'
            }
            case 'fire': {
                return 'red'
            }
            case 'bug': {
                return 'yellow'
            }
            case 'normal': {
                return 'pink'
            }
            case 'poison': {
                return 'purple'
            }
            default: {
                return 'gold'
            }
        }
    };

    const handleClick = () => {
        dispatch(setSelectedPokemonData(pokemonData));
    };

    return (
        <Main
            data-testid='pokemonCardId'
            onClick={handleClick}
            backgroundStyle={setTypeColor()}
        >
            <ImageStyle src={pokemonData.sprites.other.dream_world.front_default}
                        alt={name}/>
            <div>
                <h3>{name}</h3>
                <span>Type:{pokemonData.types[0].type.name}</span>
            </div>
        </Main>
    )
};

export default PokemonCard;