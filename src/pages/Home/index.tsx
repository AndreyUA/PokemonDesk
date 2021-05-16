import React from 'react';

import s from './Home.module.scss';

import Header from '../../components/Header/index.tsx';
import Layout from '../../components/Layout/index.tsx';
import Button from '../../components/Button/index.tsx';

const HomePage = () => {
  return (
    <div className={s.root}>
      <Header />
      <Layout className={s.contentWrap}>
        <div className={s.contentText}>
          <h1>
            <b>Find</b> all your favorite <b>Pokemon</b>
          </h1>
          <p>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
          {/* eslint-disable-next-line no-console */}
          <Button onClick={() => console.log('Click!')}>See pokemons</Button>
        </div>
        <div className={s.contentParallax}>We&apos;ll see Parallax here soon...</div>
      </Layout>
    </div>
  );
};

export default HomePage;
