import React from 'react';
import 'font-awesome/css/font-awesome.css';
import styles from './yourDetails.css';
import styles1 from './index.css';

import CreditCard from '../creditCard';
export const Payment = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault()
   alert('d');
  }

  return (
         <div className={styles.flex_container}>
         <div className={styles.inner_element}>
         <div className={styles.title}>your payment</div>
        
         <CreditCard/>
          <br/><br/>
         <div className={styles.btn_nav}>
                               <a className={styles1.btn}>&lt;&nbsp;Shopping Bag</a>
                               <a className={styles1.btn}>Shipping&nbsp;&gt;</a>          
         </div>
    
        </div>
        </div>
      );
}

