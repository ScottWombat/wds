import React, { Component } from 'react';
import styles from './comingSoon.css';
import { Link  } from 'react-router-dom';
const ComingSoon = () => {
  return (
      
      <div className={styles.container}>
       
        <div className={styles.neon}>COMING SOON</div>
      <Link to='/' className={styles.homeLink}>
        <div className={styles.flux}>Return to Home</div>
      </Link>
      </div> 
    
  )
}
export default ComingSoon;