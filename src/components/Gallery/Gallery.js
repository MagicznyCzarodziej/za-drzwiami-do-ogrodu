import React, { useState } from 'react';
import cx from 'classnames';

import { SRLWrapper } from 'simple-react-lightbox';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Button from './../Button/Button';

import styles from './Gallery.module.sass';

import img1 from '../../images/1.webp';
import img2 from '../../images/2.webp';
import img3 from '../../images/3.webp';
import img4 from '../../images/4.webp';
import img5 from '../../images/5.webp';
import img6 from '../../images/6.webp';

export default function Gallery() {
  const slrOptions = {
    buttons: {
      showDownloadButton: false,
    }
  }

  const [showMore, setShowMore] = useState(false);


  const toggleMore = () => {
    setShowMore(!showMore);
  }

  return (
    <section className={styles.gallery}>
      <p>(Kliknij na zdjęcie, aby powiększyć)</p>
      <SRLWrapper options={slrOptions}>
        <LazyLoadImage src={img1} alt="" />
        <LazyLoadImage src={img2} alt="" />
        <LazyLoadImage src={img3} alt="" />
        <div className={cx(styles.subGallery, showMore ? '' : styles.hidden)}>
          <LazyLoadImage src={img5} alt="" />
          <LazyLoadImage src={img2} alt="" />
          <LazyLoadImage src={img3} alt="" />
          <LazyLoadImage src={img4} alt="" />
          <LazyLoadImage src={img6} alt="" />
          <LazyLoadImage src={img1} alt="" />
        </div>
      </SRLWrapper>
      
      {showMore ? '' : <><div className={styles.more}></div><Button variant="black" mobileOnly onClick={toggleMore}>Zobacz więcej</Button></>}
    </section>
  );
};