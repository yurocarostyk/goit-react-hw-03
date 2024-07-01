import React from 'react';
import styles from './Contact.module.css';

const Contact = ({ name, number }) => (
  <li className={styles.item}>
    <p>{name}: {number}</p>
  </li>
);

export default Contact;
