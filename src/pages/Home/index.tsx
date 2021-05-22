import React from 'react';
import { navigate } from 'hookrouter';

import s from './Home.module.scss';

import Layout from '../../components/Layout/index.tsx';
import Button from '../../components/Button/index.tsx';
import Parallax from '../../components/Parallax/index.tsx';
import Heading from '../../components/Heading/index.tsx';

import { LinkEnum } from '../../routes.tsx';

const HomePage = () => (
  <div className={s.root}>
    <Layout className={s.contentWrap}>
      <div className={s.contentText}>
        <Heading type="h1">
          <b>Find</b> all your favorite <b>Pokemon</b>
        </Heading>
        <Heading type="h3">You can know the type of Pokemon, its strengths, disadvantages and abilities</Heading>
        {/* eslint-disable-next-line no-console */}
        <Button onClick={() => navigate(LinkEnum.POKEDEX)}>See pokemons</Button>
      </div>
      <div className={s.contentParallax}>
        <Parallax />
      </div>
    </Layout>
  </div>
);

export default HomePage;
