import React from 'react';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

const ContactList = ({ contacts }) => (
  <ul className={styles.list}>
    {contacts.map(({ id, name, number }) => (
      <Contact key={id} name={name} number={number} />
    ))}
  </ul>
);

export default ContactList;
