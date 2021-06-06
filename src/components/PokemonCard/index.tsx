import React, { FC } from 'react';

import Heading from '../Heading/index.tsx';
import toCapitalizeFirstLetter from '../../utils/toCapitalizeFirstLetter';
import colorHelper from '../../utils/colorHelper';

import s from './PokemonCard.module.scss';

interface IProps {
  name: string;
  attack: number;
  defense: number;
  types: Array<string>;
  img: string;
}

const PokemonCard: FC<IProps> = ({ name, attack, defense, types, img }) => {
  return (
    <li className={s.root}>
      <div className={s.infoWrap}>
        <Heading type="h4" className={s.titleName}>
          {toCapitalizeFirstLetter(name)}
        </Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{defense}</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          {types.map((type) => (
            <span
              key={type}
              className={s.label}
              style={{
                background: `${colorHelper(type)}`,
              }}>
              {type}
            </span>
          ))}
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img src={img} alt="Charmander" />
      </div>
    </li>
  );
};

export default PokemonCard;
