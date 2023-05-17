import { useEffect, useState } from 'react';
import * as icon from '../../assets/icons';
import '../../assets/icons/index';
import { getFeaturedHero } from '../../scripts/getFeaturedHero';
import { getRandomIds } from '../../scripts/getRandomId';
import styles from './HeroesFeatured.module.scss';
import HeroCard from '../HeroCard/HeroCard';

const featuredHeroIds = getRandomIds(5);

const HeroesFeatured = () => {
  useEffect(() => {
    fetchAndRenderFeaturedHeroes();
  }, []);

  const [featuredHeroList, setFeaturedHerosList] = useState([]);

  const fetchAndRenderFeaturedHeroes = async () => {
    let heroes = [];
    for (const heroId of featuredHeroIds) {
      const hero = await getFeaturedHero(heroId);
      heroes.push(hero);
    }
    // console.log(heroes);
    setFeaturedHerosList(heroes);
  };
  return (
    <section className={styles.heroesFeatured}>
      {featuredHeroList.map(({ name, powerstats, imgUrl }) => (
        <HeroCard name={name} powerstats={powerstats} imgUrl={imgUrl} />
      ))}
    </section>
  );
};

export default HeroesFeatured;
