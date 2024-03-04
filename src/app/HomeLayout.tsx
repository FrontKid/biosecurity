import { FC, ReactNode } from 'react';

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
      <section className='container'>{props.biosecurityIs}</section>
      <section>
        <div className='containr'>{props.slider}</div>
      </section>
      <section>
        <div className='container'>{props.producer}</div>
      </section>
      <section className='container'>{props.veterinarian}</section>
      <section>
        <div className='container'>{props.serviceProvider}</div>
      </section>
      <section className='container'>{props.aboutUs}</section>
    </main>
  );
};

export { HomeLayout };
