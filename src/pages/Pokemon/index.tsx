import React, { FC } from 'react';

export interface IProps {
  id: string | number;
}

const Pokemon: FC<IProps> = ({ id }) => {
  return <div>pokemon id: {id}</div>;
};

export default Pokemon;
