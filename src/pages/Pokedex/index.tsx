/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';

import s from './Pokedex.module.scss';

import PokemonCard from '../../components/PokemonCard/index.tsx';
import Heading from '../../components/Heading/index.tsx';
import useDebounce from '../../hook/useDebounce';
import usePokemons from '../../hook/usePokemons';

interface IQuery {
  limit: number;
  name?: string;
}

const Pokedex = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [query, setQuery] = useState<IQuery>({
    limit: 12,
  });

  const debouncedValue = useDebounce(searchValue, 1000);

  const { isLoading, isError, data } = usePokemons('getPokemons', query, [searchValue]);
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('debouncedValue =>', debouncedValue);
  }, [debouncedValue]);

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    setQuery((state: IQuery) => ({
      ...state,
      name: value,
    }));
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Something wrong...</div>;

  return (
    <div className={s.root}>
      <div className={s.wrapper}>
        <Heading type="h3">
          {data.total} <b>Pokemons</b> for you to choose your favorite
        </Heading>
        <input
          className={s.pokemonInput}
          placeholder="Choose pokemon"
          type="text"
          value={searchValue}
          onChange={(e) => handleSearchChange(e.target.value)}
        />
        <ul className={s.pokemonCards}>
          {data.pokemons.map((pokemon: any, index: number) => {
            const { id, name_clean, stats, types, img } = pokemon;
            if (index > 8) return null;

            return (
              <PokemonCard
                key={id}
                name={name_clean}
                attack={stats.attack}
                defense={stats.defense}
                types={types}
                img={img}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Pokedex;
