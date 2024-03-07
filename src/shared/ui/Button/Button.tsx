'use client';

import { FC, ReactNode } from 'react';

import cn from 'classnames';

import css from './Button.module.scss';

type TBgColor = 'lightGreen' | 'black' | 'tr';
type TTxtColor = 'white' | 'black';
type TButtonType = 'button' | 'submit' | 'reset';

type TButtonProps = {
  children: ReactNode;
  color?: TBgColor;
  txtColor?: TTxtColor;
  className?: string;
  type?: TButtonType;
  onClick?: (e: React.MouseEvent) => void;
};

const bgColors = {
  lightGreen: css.bgLightGreen,
  black: css.bgBlack,
  tr: css.bgTransparent,
};

const txtColors = {
  black: css.txtBlack,
  white: css.txtWhite,
};

const Button: FC<TButtonProps> = ({
  children,
  color = 'black',
  txtColor = 'white',
  className = '',
  onClick = () => {},
  type = 'button',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(className, css.button, bgColors[color], txtColors[txtColor])}
    >
      {children}
    </button>
  );
};

export { Button };
