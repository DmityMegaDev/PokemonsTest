import React, {useEffect, useState} from 'react'
import Select from "react-select";
import {getNextPage} from "../actions";
import {adoptTypeList} from "../helpers";
import {useDispatch, useSelector} from "react-redux";
import {pokemonTypes} from "../constants/pocemonTypes";
import PokemonCard from "../components/pokemonCard/pokemonCard";
import {Main, ContentWrapper, CardsWrapper, MoreButton} from "./styledComponents";
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

    return (
        <Main>
            <h1>{'Pokemons'}</h1>
            <div style={{maxWidth: '300px'}}>
                <Select
                    value={type}
                    onChange={sortTypeHandler}
                    options={adoptedTypesList}
                    placeholder={'Select pokemon type'}
                />
            </div>
            <ContentWrapper>
                <div style={{width: '60%', padding: '20px'}}>
                    <CardsWrapper>
                        {filteredList.length > 0 && filteredList.map((pokemon, index) => (
                            <PokemonCard
                                key={index}
                                pokemonData={pokemon}
                            />
                        ))}
                    </CardsWrapper>
                    {filteredList.length > 0
                    && <MoreButton
                        onClick={moreButtonHandler}>
                        {'More'}
                    </MoreButton>}
                </div>
                <PokemonDescription/>
            </ContentWrapper>
        </Main>
    );
}

export default App;
