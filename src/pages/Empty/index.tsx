import React, { FC } from 'react';

import Header from '../../components/Header/index.tsx';

interface IProps {
  title?: string;
}

const Empty: FC<IProps> = ({ title }) => {
  return (
    <div>
      <Header />
      EMPTY!!! {title}
    </div>
  );
};

export default Empty;
