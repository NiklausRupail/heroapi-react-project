import styles from './HeroCard.module.scss';

const HeroCard = (props) => {
  const { name, powerstats, imgUrl } = props;
  return (
    <article className={styles.cardWrapper}>
      <header className={styles.cardHeader}>
        <img src={imgUrl} alt='' />
      </header>
      <section className={styles.articleBody}>
        <h2>{name}</h2>
        <ul className={styles.cardAttrs}>
          <li>
            <p>Combat</p>
            <span>{powerstats.combat}</span>
          </li>
          <li>
            <p>Speed</p>
            <span>{powerstats.speed}</span>
          </li>
          <li>
            <p>Intelligence</p>
            <span>{powerstats.intelligence}</span>
          </li>
          <li>
            <p>Durability</p>
            <span>{powerstats.durability}</span>
          </li>
          <li>
            <p>Strength</p>
            <span>{powerstats.strength}</span>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default HeroCard;
