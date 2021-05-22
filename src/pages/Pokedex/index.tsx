/* eslint-disable camelcase */
import React from 'react';

import s from './Pokedex.module.scss';

import Header from '../../components/Header/index.tsx';
import PokemonCard from '../../components/PokemonCard/index.tsx';

import pokemons from './mockData';

const Pokedex = () => {
  return (
    <div className={s.root}>
      <Header />
      <div className={s.wrapper}>
        <ul className={s.pokemonCards}>
          {pokemons.map((pokemon) => {
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
