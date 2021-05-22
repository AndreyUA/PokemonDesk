import React, { FC } from 'react';

interface IProps {
  title?: string;
}

const Empty: FC<IProps> = ({ title }) => {
  return <div>EMPTY!!! {title}</div>;
};

export default Empty;
