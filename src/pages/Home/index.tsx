import React from 'react';

import s from './Home.module.scss';

import Header from '../../components/Header/index.tsx';
import Layout from '../../components/Layout/index.tsx';
import Button from '../../components/Button/index.tsx';
import Parallax from '../../components/Parallax/index.tsx';
import Heading from '../../components/Heading/index.tsx';

const HomePage = () => {
  return (
    <div className={s.root}>
      <Header />
      <Layout className={s.contentWrap}>
        <div className={s.contentText}>
          <Heading size="72px">
            <b>Find</b> all your favorite <b>Pokemon</b>
          </Heading>
          <Heading size="36px">You can know the type of Pokemon, its strengths, disadvantages and abilities</Heading>

          {/* eslint-disable-next-line no-console */}
          <Button onClick={() => console.log('Click!')}>See pokemons</Button>
        </div>
        <div className={s.contentParallax}>
          <Parallax />
        </div>
      </Layout>
    </div>
  );
};

export default HomePage;
