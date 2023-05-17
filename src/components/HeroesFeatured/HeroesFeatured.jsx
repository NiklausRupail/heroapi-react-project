import { Fragment, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import '../../assets/icons/index';
import { getFeaturedHero } from '../../scripts/getFeaturedHero';
import { getRandomIds } from '../../scripts/getRandomId';
import HeroCard from '../HeroCard/HeroCard';
import Loader from '../Loader/Loader';
import styles from './HeroesFeatured.module.scss';

const featuredHeroIds = getRandomIds(5);

const HeroesFeatured = () => {
  const [isLoading, setLoadingState] = useState(true);
  useEffect(() => {
    fetchAndRenderFeaturedHeroes();
  }, []);

  const [featuredHeroList, setFeaturedHerosList] = useState([]);

  const fetchAndRenderFeaturedHeroes = async () => {
    setLoadingState(true);
    let heroes = [];
    for (const heroId of featuredHeroIds) {
      const hero = await getFeaturedHero(heroId);
      heroes.push(hero);
    }
    // console.log(heroes);
    setFeaturedHerosList(heroes);
    setLoadingState(false);
  };
  return isLoading ? (
    <div className={styles.container}>
      <Loader />
    </div>
  ) : (
    <section className={styles.heroesFeatured}>
      {featuredHeroList.map(({ name, powerstats, imgUrl, id }) => (
        <Fragment key={uuid()}>
          <HeroCard
            name={name}
            powerstats={powerstats}
            imgUrl={imgUrl}
            id={id}
          />
        </Fragment>
      ))}
    </section>
  );
};

export default HeroesFeatured;
