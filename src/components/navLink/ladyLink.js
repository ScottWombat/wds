import React, { Component } from 'react';
import { Link  } from 'react-router-dom';
import {FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import styles from './navLink.css';


const LadyLink = () =>{
    return(
         <div className={styles.title_lad}>    
                <Link to='/products/women' className={styles.animatedColorLink}>
                <FormattedMessage id="app.lady.link"
                defaultMessage="Lady"
                description="Lady link" />
                </Link>
          </div>
    );
    
};


export default LadyLink;