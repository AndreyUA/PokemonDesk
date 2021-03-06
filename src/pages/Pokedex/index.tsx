/* eslint-disable no-console */
/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { A } from 'hookrouter';
import { useSelector, useDispatch } from 'react-redux';

import s from './Pokedex.module.scss';

import PokemonCard from '../../components/PokemonCard/index.tsx';
import Heading from '../../components/Heading/index.tsx';
import Loader from '../../components/Loader/index.tsx';

import useDebounce from '../../hook/useDebounce';
import useData from '../../hook/useData';
import { IPokemons, PokemonRequest } from '../../interface/pokemons';
import { getPokemonsTypes, getPokemonsTypesLoading, getTypesAction } from '../../store/pokemons';

interface IQuery {
  name?: string;
}

const Pokedex = () => {
  const pokemonTypes = useSelector(getPokemonsTypes);
  const isTypesLoading = useSelector(getPokemonsTypesLoading);
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState<string>('');
  const [query, setQuery] = useState<IQuery>({});

  const debouncedValue = useDebounce(searchValue, 500);

  const { isLoading, isError, data } = useData<IPokemons>('getPokemons', query, [debouncedValue]);

  useEffect(() => {
    dispatch(getTypesAction());
  }, [dispatch]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((state: IQuery) => ({
      ...state,
      name: e.target.value,
    }));
  };

  if (isError) return <div>Something wrong...</div>;

  return (
    <div className={s.root}>
      <div className={s.wrapper}>
        <Heading type="h3">
          {!isLoading && data && data.total} <b>Pokemons</b> for you to choose your favorite
        </Heading>
        <input
          className={s.pokemonInput}
          placeholder="Choose pokemon"
          type="text"
          value={searchValue}
          onChange={handleSearchChange}
        />
        <div>{isTypesLoading ? <Loader /> : pokemonTypes?.map((item) => <p key={item}>{item}</p>)}</div>
        <ul className={s.pokemonCards}>
          {isLoading ? (
            <Loader />
          ) : (
            data &&
            data.pokemons.map((pokemon: PokemonRequest) => {
              const { id, name_clean, stats, types, img } = pokemon;
              return (
                <A className={s.pokemonLink} key={id} href={`/pokemon/${id}`}>
                  <PokemonCard
                    name={name_clean}
                    attack={stats.attack}
                    defense={stats.defense}
                    types={types}
                    img={img}
                  />
                </A>
              );
            })
          )}
        </ul>
      </div>
    </div>
  );
};

export default Pokedex;
