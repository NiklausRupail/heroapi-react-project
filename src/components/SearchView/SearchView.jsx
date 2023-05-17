import { Fragment, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { searchHeroesByName } from '../../scripts/searchHeroesByName';
import HeroCard from '../HeroCard/HeroCard';
import Loader from '../Loader/Loader';
import styles from './SearchView.module.scss';

const SearchView = () => {
  const [searchList, setSearchListContent] = useState([]);
  const [isLoading, setLoadingState] = useState(true);
  const { name } = useParams();
  const [notFound, setNotFoundState] = useState(false);

  useEffect(() => {
    setLoadingState(true);
    searchHeroesByName(name).then((searchResults) => {
      const { data } = searchResults;

      if (data.error) {
        console.log(data.error);
        setLoadingState(false);
        setNotFoundState(true);
      }
      const { results } = data;
      setSearchListContent(results);
      setLoadingState(false);
    });
  }, [name]);

  if (notFound) {
    return (
      <section className={styles.errorMessage}>
        <h1>Hero not found, Try searching something else</h1>
        <Link to='/'>
          <button>Go Back</button>
        </Link>
      </section>
    );
  }

  return isLoading ? (
    <div className={styles.container}>
      <Loader />
    </div>
  ) : (
    <section className={styles.cardsPlaceholder}>
      {searchList.map(({ powerstats, image, name, id }) => (
        <Fragment key={uuid()}>
          <HeroCard
            name={name}
            powerstats={powerstats}
            imgUrl={image.url}
            id={id}
          />
        </Fragment>
      ))}
    </section>
  );
};

export default SearchView;
