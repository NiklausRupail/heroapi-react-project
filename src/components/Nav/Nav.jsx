import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/nav_logo.png';
import styles from './Nav.module.scss';

const Nav = () => {
  const [searchInputValue, setSearchInputValue] = useState('');
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link to='/*'>
          <img className={styles.logoImg} src={logo} alt='SuperHero Database' />
        </Link>
        <div className={styles.navSearch}>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              console.log(event);
              window.location.href = `/search/${event.target[0].value}`;
            }}
          >
            <input
              onChange={(event) => {
                setSearchInputValue(event.target.value);
              }}
              value={searchInputValue}
              type='text'
              name='search'
            />
            <button type='submit'>find hero!</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
