import { Fragment, useEffect, useState } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import { getFeaturedHero } from './scripts/getFeaturedHero';
import { v4 as uuid } from 'uuid';
import HeroCard from './components/HeroCard/HeroCard';
import { getRandomIds } from './scripts/getRandomId';

const featuredHeroIds = getRandomIds(5);

function App() {
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
    <>
      <Nav></Nav>
      <main>
        {featuredHeroList.map((hero) => (
          <Fragment key={uuid()}>
            <HeroCard hero={hero}></HeroCard>
          </Fragment>
        ))}
      </main>
      <footer></footer>
    </>
  );
}

export default App;
