import { FC, ReactNode } from 'react';

import cn from 'classnames';

import css from './GradientSection.module.scss';

type TColor = 'gray' | 'green';

type TGradientSectionProps = {
  children: ReactNode;
  color?: TColor;
  className?: string;
};

const GradientSection: FC<TGradientSectionProps> = ({ children, className, color = 'green' }) => {
  return <section className={cn(css.section, css[color], className)}>{children}</section>;
};

export { GradientSection };
