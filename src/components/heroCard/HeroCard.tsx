

import {IForceUser} from '../data'
import styles from './heroCard.module.css';

interface HeroCardProps {
  hero: IForceUser;
}

const HeroCard = ({ hero }: HeroCardProps) => {
  return (
    <div className={styles.heroCard}>
      <h4>{hero.name}</h4>
      <div>
        <p>Age: {hero.age}</p>
        <div>
          <img width={200} src={hero.image} alt={hero.name} />
        </div>
      </div>
      <p>
        Lightsaber colors:{' '}
        {hero.LightsaberColors.map((color: string, index: number) => (
          <div 
            key={index}
            className={styles.lightsaberColor}
            style={{backgroundColor: color}}
          ></div>
        ))}
      </p>
    </div>
  );
};

export default HeroCard;
