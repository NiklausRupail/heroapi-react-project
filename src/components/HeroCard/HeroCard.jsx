import styles from './HeroCard.module.scss';

const HeroCard = (props) => {
    
    console.log(props.hero) ;
    const { name, powerstats, imgUrl } = props.hero;
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
            <p>Power</p>
            <span>{powerstats.power}</span>
          </li>
          <li>
            <p>Intelligence</p>
            <span>{powerstats.intelligence}</span>
          </li>
        </ul>
      </section>
      {/* <footer className={styles.cardFooter}>
        <a href={} target='_blank' rel='noreferrer'>
          Click to Buy
        </a>
        <p>Price {}$</p>
      </footer> */}
    </article>
  );
};

export default HeroCard;
