import Image from 'next/image';
import styles from './Hero.module.scss';
import HeroMobile from '../../../public/images/hero2.jpg';
import HeroWeb from '../../../public/images/hero.png';

function Hero() {
  return (
    <div className={styles.hero}>
      <Image
        src={HeroMobile}
        alt='Background Image'
        layout='fill'
        objectFit='cover'
        className={styles.backgroundImage}
      />
      <div className={styles.overlay}></div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Your Title Here</h1>
      </div>
    </div>
  );
}

export default Hero;
