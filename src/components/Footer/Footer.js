import React from 'react'

import styles from './Footer.module.sass';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div id="map" className={styles.map}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48329.87372399922!2d-74.14668830058277!3d40.792431138319955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2566d370e88b7%3A0x8613920d905dc78d!2sLyndhurst%2C%20New%20Jersey%2C%20Stany%20Zjednoczone!5e0!3m2!1spl!2spl!4v1594835076098!5m2!1spl!2spl"
          title="mapa"
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
      <div className={styles.info}>
        <address>
          Adam Kowalski<br/><br/>
          54-321 Miasto<br/>
          ul. Uliczna 12a<br/>
          tel. 123 456 789<br/>
        </address>
        <div className={styles.author}>
          Realizacja: <a href="https://przemyslawpitus.pl">Przemysław Pitus</a>
        </div>
      </div>
    </footer>
  )
}
