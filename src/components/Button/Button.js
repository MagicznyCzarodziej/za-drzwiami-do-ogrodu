import React from 'react';
import cx from 'classnames';
import { 
  FaFacebookSquare,
  FaFacebookMessenger,
  FaPhone
} from 'react-icons/fa';

import styles from './Button.module.sass';

export default function Button(props) {
  const className = styles[props.variant] || styles.black;

  const icons = {
    facebook: <FaFacebookSquare/>,
    messenger: <FaFacebookMessenger/>,
    phone: <FaPhone/>,
  };

  function handleClick() {
    props.onClick && props.onClick();
    props.link && (document.location = props.link);
  }

  return (
    <button
      className={ cx(styles.button, className, props.mobileOnly ? styles.mobileOnly : '') }
      onClick={handleClick}
    >
      { props.children }
      { icons[props.icon] }
    </button>
  );
};
