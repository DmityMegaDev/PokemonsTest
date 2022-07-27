import React, {useEffect, useState} from 'react'
import Select from "react-select";
import {useDispatch, useSelector} from "react-redux";
import {pokemonTypes} from "../constants/pocemonTypes";
import {adoptPokemonList, adoptTypeList} from "../helpers";
import {getNextPage, setSelectedPokemonData} from "../actions";
import PokemonCard from "../components/pokemonCard/pokemonCard";
import {
    Main,
    Header,
    MoreButton,
    CardsWrapper,
    SelectWrapper,
    ContentWrapper,
    LeftSideWrapper,
} from "./styledComponents";
import PokemonDescription from "../components/pokemonDescription/pokemonDescription";

function App() {

    const dispatch = useDispatch();

    const allPokemons = useSelector(
        ({
             pokemonsReducer: {
                 pokemons,
                 nextPageURL
             }
         }) => ({pokemons, nextPageURL})
    );

    const {
        pokemons,
        nextPageURL
    } = allPokemons;

    const [type, setType] = useState('');
    const [filteredList, setFilteredList] = useState(pokemons);

    const pokemonsList = useSelector((state) => {
        return state.pokemonsReducer.pokemons
    });

    const adoptedPokemonList = adoptPokemonList(pokemonsList);

    useEffect(() => {
        setFilteredList(pokemons)
    }, [pokemons])

    const adoptedTypesList = adoptTypeList(pokemonTypes);

    const moreButtonHandler = () => {
        if (nextPageURL.length > 0)
            dispatch(getNextPage(nextPageURL));
    };

    const sortTypeHandler = (e) => {
        setType(e)
    };

    useEffect(() => {
        const filterData = () => {
            setFilteredList(pokemons.filter((item) => {
                if (type.value !== 'All') {
                    return item.types[0].type.name === type.value
                } else {
                    return item
                }
            }));
        };
        filterData();
    }, [type])

    const pokemonSearchHandler = (e) => {
        dispatch(setSelectedPokemonData(e));
    };

    return (
        <Main>
            <Header>
                <h1 style={{margin: '0px'}}>{'Pokemons'}</h1>
                <SelectWrapper>
                    <Select
                        value={type}
                        onChange={sortTypeHandler}
                        options={adoptedTypesList}
                        placeholder={'Select pokémon type...'}
                    />
                </SelectWrapper>
                <SelectWrapper>
                    <Select
                        onChange={pokemonSearchHandler}
                        options={adoptedPokemonList}
                        placeholder={'Choose a pokémon...'}
                    />
                </SelectWrapper>
            </Header>
            <ContentWrapper>
                <LeftSideWrapper>
                    <CardsWrapper>
                        {filteredList.length > 0 && filteredList.map((pokemon, index) => {
                            console.log(pokemon)
                            return <PokemonCard
                                key={index}
                                pokemonData={pokemon}
                            />
                        })}
                    </CardsWrapper>
                    {filteredList.length > 0
                    && <MoreButton
                        onClick={moreButtonHandler}>
                        {'More'}
                    </MoreButton>}
                </LeftSideWrapper>
                <PokemonDescription/>
            </ContentWrapper>
        </Main>
    );
}

export default App;
