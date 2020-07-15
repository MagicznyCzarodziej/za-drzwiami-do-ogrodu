import React from 'react'

import Button from './../Button/Button';

import styles from './CallUs.module.sass';

export default function CallUs() {
  return (
    <div id="callus" className={styles.callUs}>
      <div className={styles.divider}></div>
      <div className={styles.header}>
        Umów się na sesję zdjęciową<br/>
        “Za drzwiami do ogrodu”
        <p className={styles.address}>54-321 Miasto ul.&nbsp;Uliczna&nbsp;12a</p>
      </div>
      <Button variant="black" icon="phone">Zadzwoń 123&nbsp;456&nbsp;789</Button>
      <div className={styles.or}>lub</div>
      <Button variant="black" icon="messenger">Napisz do nas na Facebooku</Button>
      <div className={styles.divider}></div>
      <Button variant="blue" icon="facebook">Udostępnij na Facebooku</Button>
    </div>
  )
}
