import React from 'react'

import styles from './TextSection.module.sass'

export default function TextSection() {
  return (
    <section id="offer" className={styles.textSection}>
      <h1 className={styles.header}>
        Sesja ślubna
      </h1>
      <article className={styles.content}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit pellentesque tempus egestas blandit risus pulvinar. Ultrices pretium mattis semper lorem in orci. Odio massa sed pretium cras at purus netus.</p>
        <p>Ullamcorper lectus sed ipsum, at. Id risus, pulvinar interdum blandit dictum. Lacinia nulla diam amet est. Eu dolor proin lacus non mi, malesuada nec ac:</p>
        <ul className={styles.list}>
          <li>Cras facilisis nec pretium justo, sed cras</li>
          <li>Ut fringilla nunc potenti elementu</li>
          <li>Eu dictum dolor quisque in pellentesque arcu</li>
        </ul>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit pellentesque tempus egestas blandit risus pulvinar. Ultrices pretium mattis semper lorem in orci. Odio massa sed pretium cras at purus netus.</p>
        <p>Ullamcorper lectus sed ipsum, at. Id risus, pulvinar interdum blandit dictum. Lacinia nulla diam amet est. Eu dolor proin lacus non mi, malesuada nec ac:</p>
        <ul className={styles.list}>
          <li>Cras facilisis nec pretium justo, sed cras</li>
          <li>Ut fringilla nunc potenti elementu</li>
          <li>Eu dictum dolor quisque in pellentesque arcu</li>
        </ul>
      </article>
      <h1 className={styles.header}>
        Lorem ipsum
      </h1>
      <article className={styles.content}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit pellentesque tempus egestas blandit risus pulvinar. Ultrices pretium mattis semper lorem in orci. Odio massa sed pretium cras at purus netus.
        Ullamcorper lectus sed ipsum, at. Id risus, pulvinar interdum blandit dictum. Lacinia nulla diam amet est. Eu dolor proin lacus non mi, malesuada nec ac:</p>
      </article>
    </section>
  )
}
