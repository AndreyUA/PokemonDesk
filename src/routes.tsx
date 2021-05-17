import React from 'react';

import Home from './pages/Home/index.tsx';
import Empty from './pages/Empty/index.tsx';

interface IGeneralMenu {
  title: string;
  link: string;
  component: () => JSX.Element;
}

export const GENERAL_MENU: Array<IGeneralMenu> = [
  {
    title: 'Home',
    link: '/',
    component: () => <Home />,
  },
  {
    title: 'Pokédex',
    link: '/pokedex',
    component: () => <Empty title="Pokedex" />,
  },
  {
    title: 'Legendaries',
    link: '/legendaries',
    component: () => <Empty title="legendaries" />,
  },
  {
    title: 'Documentation',
    link: '/documentation',
    component: () => <Empty title="documentation" />,
  },
];

interface IAccMenu {
  [n: string]: () => JSX.Element;
}

const routes = GENERAL_MENU.reduce((acc: IAccMenu, item: IGeneralMenu) => {
  acc[item.link] = item.component;

  return acc;
}, {});

export default routes;
