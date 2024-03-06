import { FC, ReactNode } from 'react';

import cn from 'classnames';

import css from './HomeLayout.module.scss';

type THomeLayoutProps = {
  hero?: ReactNode;
  biosecurityIs?: ReactNode;
  slider?: ReactNode;
  producer?: ReactNode;
  veterinarian?: ReactNode;
  serviceProvider?: ReactNode;
  aboutUs?: ReactNode;
};

const HomeLayout: FC<THomeLayoutProps> = (props) => {
  return (
    <main>
      <section className='container'>{props.hero}</section>
      <section className={cn('container', css.biosecurityIs)}>{props.biosecurityIs}</section>
      <section>
        <div className='container'>{props.slider}</div>
      </section>
      <section>
        <div className='container'>{props.producer}</div>
      </section>
      <section className='container'>{props.veterinarian}</section>
      <section>
        <div className='container'>{props.serviceProvider}</div>
      </section>
      <section className={cn('container', css.about)}>{props.aboutUs}</section>
    </main>
  );
};

export { HomeLayout };
