import { FC, ReactNode } from 'react';

import cn from 'classnames';

import css from './GradientSection.module.scss';

type TColor = 'gray' | 'green';

type TGradientSectionProps = {
  children: ReactNode;
  color?: TColor;
};

const GradientSection: FC<TGradientSectionProps> = ({ children, color = 'green' }) => {
  return <section className={cn(css.section, css[color])}>{children}</section>;
};

export { GradientSection };
