import { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { searchHeroesByName } from '../../scripts/searchHeroesByName';
import HeroCard from '../HeroCard/HeroCard';
import Loader from '../Loader/Loader';
import styles from './SearchView.module.scss';
import { v4 as uuid } from 'uuid';

const SearchView = () => {
  const [searchList, setSearchListContent] = useState([]);
  const [isLoading, setLoadingState] = useState(true);
  const { name } = useParams();

  useEffect(() => {
    setLoadingState(true);
    searchHeroesByName(name).then((searchResults) => {
      const { data } = searchResults;

      if (data.error) {
        console.log(data.error);
        return;
      }
      const { results } = data;
      setSearchListContent(results);
      setLoadingState(false);
    });
  }, [name]);

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
