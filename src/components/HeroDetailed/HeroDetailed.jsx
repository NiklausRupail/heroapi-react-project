import { useParams } from 'react-router';
import styles from './HeroDetailed.module.scss';
import { useEffect, useState } from 'react';
import { searchHeroById } from '../../scripts/searchHeroById';
import Loader from '../Loader/Loader';
import * as icon from '../../assets/icons';

const HeroDetailed = () => {
  const { id } = useParams();
  const [isLoading, setLoadingState] = useState(true);
  const [idHero, setIdHero] = useState({});
  const [metricSystem, setMetricSystem] = useState(true);
  useEffect(() => {
    setLoadingState(true);

    searchHeroById(id).then((searchResults) => {
      const { data } = searchResults;

      if (data.error) {
        console.log(data.error);
        return;
      }
      console.log(data);
      setIdHero(data);
      setLoadingState(false);
    });
  }, [id]);
  const { name, image, powerstats, appearance, biography } = idHero;
  return isLoading ? (
    <div className={styles.container}>
      <Loader />
    </div>
  ) : (
    <article className={styles.detailedHero}>
      <h1>{name}</h1>
      <div className={styles.heroInfo}>
        <img src={image.url} alt={name} />
        <div className={styles.heroData}>
          <div className={styles.heroPowerstats}>
            <div className={styles.powerstat}>
              <img
                className={styles.statImg}
                src={icon.combat}
                alt='Combat Icon'
              />
              <span>{powerstats.combat}</span>
            </div>
            <div className={styles.powerstat}>
              <img
                className={styles.statImg}
                src={icon.speed}
                alt='Speed Icon'
              />

              <span>{powerstats.speed}</span>
            </div>
            <div className={styles.powerstat}>
              <img
                className={styles.statImg}
                src={icon.intelligence}
                alt='Intelligence Icon'
              />

              <span>{powerstats.intelligence}</span>
            </div>
            <div className={styles.powerstat}>
              <img
                className={styles.statImg}
                src={icon.durability}
                alt='Durability Icon'
              />

              <span>{powerstats.durability}</span>
            </div>
            <div className={styles.powerstat}>
              <img
                className={styles.statImg}
                src={icon.strength}
                alt='Strength Icon'
              />
              <span>{powerstats.strength}</span>
            </div>
          </div>
          <div className={styles.lifeInfo}>
            <div>
              <h2>Apperance</h2>
              <p>Gender: {appearance.gender}</p>
              <p>Race: {appearance.race}</p>
              <p>Eyes: {appearance['eye-color']}</p>
              <p>Hair: {appearance['hair-color']}</p>
              <p>Height: {appearance.height[metricSystem | 0]}</p>
              <p>Weight: {appearance.weight[metricSystem | 0]}</p>
              <button onClick={() => setMetricSystem(!metricSystem)}>
                Change Metric System
              </button>
              <p></p>
            </div>
            <div className={styles.bio}>
              <h2>Biography</h2>
              <p>
                Name: <br /> {biography['full-name']}
              </p>
              <p>
                First Appearance: <br />
                {biography['first-appearance']}
              </p>
              <p>
                Alignment:
                {' ' +
                  biography.alignment[0].toUpperCase() +
                  biography.alignment.slice(1)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default HeroDetailed;
