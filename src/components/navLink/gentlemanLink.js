import React, { Component } from 'react';
import { Link  } from 'react-router-dom';
import {FormattedMessage } from 'react-intl';
import styles from './navLink.css';

const GentlemanLink = ({productType}) =>{
    return(
         <div className={styles.title_gen}>    
                <Link to='/products/men' className={styles.animatedColorLink}>
                <FormattedMessage id="app.gentleman.link"
                defaultMessage="Gentleman"
                description="Gentleman link" />
                </Link>
          </div>
    );
    
};

export default GentlemanLink;