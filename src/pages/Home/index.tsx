import React from 'react';

import s from './Home.module.scss';

import Header from '../../components/Header/index.tsx';

const HomePage = () => {
  return (
    <div className={s.root}>
      <Header />
    </div>
  );
};

export default HomePage;
