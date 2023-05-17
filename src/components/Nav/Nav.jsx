import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/nav_logo.png';
import styles from './Nav.module.scss';

const Nav = () => {
  const [searchInputValue, setSearchInputValue] = useState('');
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link to='/'>
          <img className={styles.logoImg} src={logo} alt='SuperHero Database' />
        </Link>
        <div className={styles.navSearch}>
          <input
            onChange={(event) => {
              setSearchInputValue(event.target.value);
            }}
            value={searchInputValue}
            type='text'
            name='search'
          />
          <Link to={`/search/${searchInputValue}`}>
            <button>find hero!</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
