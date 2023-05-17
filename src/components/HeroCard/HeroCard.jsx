import { Link } from 'react-router-dom';
import * as icon from '../../assets/icons';
import styles from './HeroCard.module.scss';

const HeroCard = (props) => {
  const { name, powerstats, imgUrl, id } = props;

  return (
    <article className={styles.cardWrapper}>
      <header className={styles.cardHeader}>
        <Link to={`/hero/${id}`}>
          <img className={styles.cardImg} src={imgUrl} alt='' />
        </Link>
      </header>
      <section className={styles.articleBody}>
        <h2>{name}</h2>
        <div className={styles.cardAttrs}>
          <div className={styles.powerstat}>
            <img
              className={styles.statImg}
              src={icon.combat}
              alt='Combat Icon'
            />
            <span>{powerstats.combat}</span>
          </div>
          <div className={styles.powerstat}>
            <img className={styles.statImg} src={icon.speed} alt='Speed Icon' />

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
      </section>
    </article>
  );
};

export default HeroCard;
