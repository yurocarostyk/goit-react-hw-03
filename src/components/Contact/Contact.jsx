// src/components/Contact/Contact.jsx
import React from 'react';
import styles from './Contact.module.css';

const Contact = ({ contact, deleteContact }) => {
  return (
    <li className={styles.contact}>
      <p>{contact.name}: {contact.number}</p>
      <button className={styles.deleteButton} onClick={() => deleteContact(contact.id)}>Delete</button>
    </li>
  );
};

export default Contact;
