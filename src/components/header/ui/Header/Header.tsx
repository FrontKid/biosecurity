import cn from 'classnames';
import Link from 'next/link';

import { Button } from '@/shared/ui/Button';
import { Logo } from '@/shared/ui/Logo';

import { Burger } from '../Burger';
import { Localization } from '../Localization';
import { Navbar } from '../Navbar';
import css from './Header.module.scss';

const Header = () => {
  return (
    <header className={cn('container', css.header)}>
      <div className={css.inner}>
        <div className={css.leftHeader}>
          <Logo />
          <Navbar />
        </div>
        <div className={css.rightHeader}>
          <Localization className={css.local} />
          <Link className={css.signIn} href='/signIn'>
            Sign In
          </Link>
          <Button className={css.signUp} color='lightGreen' txtColor='black'>
            Sign Up
          </Button>

          <Burger />
        </div>
      </div>
    </header>
  );
};

export { Header };
