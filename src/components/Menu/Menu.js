import React, { useState, useEffect } from 'react';
import { FaTimes, FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa'

import styles from './Menu.module.sass';

import logo from '../../images/logo.svg';

export default function Menu(props) {
  const [isOpen, setIsOpen] = useState(false);

  const togggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  const menuItems =
    <>
      <a href="#offer">Oferta</a>
      <a href="#callus">Umów sesję</a>
      <a href="#map">Lokalizacja</a>
      <div className={styles.social}>
        <a href="#fb" aria-label="facebook">
          <FaFacebookSquare />
        </a>
        <a href="#insta" aria-label="instagram">
          <FaInstagramSquare />
        </a>
      </div>
    </>

  return (
    <nav className={styles.menu}>
        <div className={styles.logo}>
          <img src={logo} alt="" />
          <span className={ styles.logoText }>Za drzwiami<br/>do ogrodu</span>
        </div>
        <div className={styles.menuItems}>
          { menuItems }
        </div>
        { !isOpen &&
          <svg
            className={styles.hamburger}
            onClick={togggleMenu} 
            viewBox="0 0 110 80" width="40" height="40"
          >
            <rect width="120" height="10"></rect>
            <rect y="40" width="120" height="10"></rect>
            <rect y="80" width="120" height="10"></rect>
          </svg>
        }
        {isOpen && 
        <div className={styles.menuOpen} onClick={togggleMenu}>
        <div className={styles.closeButton}>
          <FaTimes />
        </div>
        <div className={styles.menuOpenItems}>
          { menuItems }
        </div>
      </div>}
    </nav>
  );
};
