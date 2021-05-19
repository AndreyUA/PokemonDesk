/* eslint-disable no-console */
import React from 'react';
import { navigate } from 'hookrouter';

import s from './NotFoundPage.module.scss';

import Button from '../../components/Button/index.tsx';

import TeamRocket from './assets/Team_Rocket_trio_OS 1.png';

const NotFoundPage = () => (
  <div className={s.root}>
    <div className={s.wrap}>
      <div className={s.text}>404</div>
      <div className={s.layer}>
        <img src={TeamRocket} alt="team rocket" />
        <div className={s.subTitle}>
          <span>The rocket team</span> has won this time.
        </div>
        <Button yellowColor onClick={() => navigate('/')}>
          <span>Return</span>
        </Button>
      </div>
    </div>
  </div>
);

export default NotFoundPage;
