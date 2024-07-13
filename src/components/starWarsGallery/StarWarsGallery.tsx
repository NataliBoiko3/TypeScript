
import {forceUsers} from '../data'
import HeroCard from '../heroCard/HeroCard';
import styles from './starWarsGallery.module.css'

const StarWarsGallery = () => {
  return (
    <div className={styles.galleryContainer}>
      <h3>Star Wars Gallery</h3>
      <div className={styles.heroGrid}>
        {forceUsers.map((hero, index) => (
          <HeroCard key={index} hero={hero} />
        ))}
      </div>
    </div>
  );
};

export default StarWarsGallery;
