/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';

import s from './Pokedex.module.scss';

import PokemonCard from '../../components/PokemonCard/index.tsx';
import Heading from '../../components/Heading/index.tsx';

const Pokedex = () => {
  const [totalPokemons, setTotalPokemons] = useState<number>(0);
  const [pokemons, setPokemons] = useState<Array<any>>([]);
  const [isLoading, setIsloading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    fetch('http://zar.hosthot.ru/api/v1/pokemons')
      .then((response) => response.json())
      .then((data) => {
        setTotalPokemons(data.total);
        setPokemons(data.pokemons);
      })
      .catch(() => setIsError(true))
      .finally(() => setIsloading(false));
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Something wrong...</div>;

  return (
    <div className={s.root}>
      <div className={s.wrapper}>
        <Heading type="h1">
          {totalPokemons} <b>Pokemons</b> for you to choose your favorite
        </Heading>
        <ul className={s.pokemonCards}>
          {pokemons.map((pokemon: any) => {
            const { id, name_clean, stats, types, img } = pokemon;
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
