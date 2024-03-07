import { FC, ReactNode } from 'react';

import css from './GradientSection.module.scss';

type TGradientSectionProps = {
  children: ReactNode;
};

const GradientSection: FC<TGradientSectionProps> = ({ children }) => {
  return <section className={css.section}>{children}</section>;
};

export { GradientSection };
