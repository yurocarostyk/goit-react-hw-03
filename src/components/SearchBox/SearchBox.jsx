// src/components/SearchBox/SearchBox.jsx
import React from 'react';
import styles from './SearchBox.module.css';

const SearchBox = ({ value, onChange }) => (
  <input
    className={styles.input}
    type="text"
    value={value}
    onChange={onChange}
    placeholder="Search contacts..."
  />
);

export default SearchBox;
