import React from 'react';
import Menu from './../Menu/Menu';
import Button from './../Button/Button';
import styles from './Hero.module.sass';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Menu />
      <div className={styles.cta}>
        <div className={styles.ctaSlogan}>Sesja zdjęciowa w&nbsp;ogrodzie</div>
        <Button variant="white" link="#callus">Umów się na sesję</Button>
      </div>
      
    </section>
  );
}