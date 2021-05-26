import React, { FC, useState, useEffect } from 'react';

import s from './Pokemon.module.scss';

import { PokemonRequest } from '../../interface/pokemons';
import Heading from '../../components/Heading/index.tsx';

export interface IProps {
  id: string | number;
}

const pokemonsData = {
  name_clean: 'bulbasaur',
  abilities: ['overgrow', 'chlorophyll'],
  stats: {
    hp: 45,
    attack: 49,
    defense: 49,
    'special-attack': 65,
    'special-defense': 65,
    speed: 45,
  },
  types: ['grass', 'poison'],
  img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
  name: 'bulbasaur',
  base_experience: 64,
  height: 7,
  id: 1,
  is_default: true,
  order: 1,
  weight: 69,
};

const Pokemon: FC<IProps> = ({ id }) => {
  const [pokemon, setPokemon] = useState<PokemonRequest | null>(null);

  useEffect(() => {
    setPokemon(pokemonsData);
  }, [id]);
  return (
    <div className={s.root}>
      {pokemon ? (
        <div className={s.pokemonCard}>
          <div className={s.pokemonImage}>
            <img className={s.pokemonPic} src={pokemon.img} alt="pokemon" />
            <div className={s.pokemonAbilities}>
              <div className={s.labelWrap}>
                {pokemon.types.map((type) => (
                  <span key={type} className={s.label}>
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className={s.pokemonStats}>
            <Heading className={s.pokemonName} type="h3">
              {`${pokemon.name[0].toUpperCase()}${pokemon.name.slice(1)}`}
            </Heading>
          </div>
        </div>
      ) : (
        <h1>loading...</h1>
      )}
    </div>
  );
};

export default Pokemon;
