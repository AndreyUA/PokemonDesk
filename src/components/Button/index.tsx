import React, { FC, MouseEvent } from 'react';

import s from './Button.module.scss';

interface IProps {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<IProps> = ({ children, onClick }) => {
  return (
    <button className={s.root} type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
