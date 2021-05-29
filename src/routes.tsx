/* eslint-disable no-shadow */
import React, { PropsWithChildren } from 'react';

import Home from './pages/Home/index.tsx';
import Pokedex from './pages/Pokedex/index.tsx';
import Empty from './pages/Empty/index.tsx';
import Pokemon, { IProps } from './pages/Pokemon/index.tsx';

interface IGeneralMenu {
  title: string;
  link: LinkEnum;
  component: (props: PropsWithChildren<any>) => JSX.Element;
}

export enum LinkEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCUMENTATION = '/documentation',
  POKEMON = '/pokemon/:id',
}

export const GENERAL_MENU: Array<IGeneralMenu> = [
  {
    title: 'Home',
    link: LinkEnum.HOME,
    component: () => <Home />,
  },
  {
    title: 'Pokédex',
    link: LinkEnum.POKEDEX,
    component: () => <Pokedex />,
  },
  {
    title: 'Legendaries',
    link: LinkEnum.LEGENDARIES,
    component: () => <Empty title="legendaries" />,
  },
  {
    title: 'Documentation',
    link: LinkEnum.DOCUMENTATION,
    component: () => <Empty title="documentation" />,
  },
];

export const SECOND_ROUTES: Array<IGeneralMenu> = [
  {
    title: 'Pokemon',
    link: LinkEnum.POKEMON,
    component: ({ id }: IProps) => <Pokemon id={id} />,
  },
];

interface IAccMenu {
  [n: string]: (props: PropsWithChildren<any>) => JSX.Element;
}

const routes = [...GENERAL_MENU, ...SECOND_ROUTES].reduce((acc: IAccMenu, item: IGeneralMenu) => {
  acc[item.link] = item.component;

  return acc;
}, {});

export default routes;
