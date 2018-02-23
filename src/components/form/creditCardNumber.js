import React, { Component} from 'react';
import PropTypes from 'prop-types';

import styles from '../../containers/steps/yourDetails.css';
const CreditCardNumber = () =>{
 
    return (
      <div style={{display:'flex'}}>
      <fieldset id="credit_card_number" style={{flex:'1'}}>
            <legend>Credit Card Number</legend>
            <div style={{display:'flex'}}>
             <div className={styles.group} style={{margin:'15px 15px 15px 0px',flex:'1'}}>      
                <input type="text" required id='group1'/>
                <label htmlFor='group1'>xxxx</label>
            </div>
            <div className={styles.group} style={{margin:'15px',flex:'1'}}>      
                <input type="text" required id='group2'/>
                <label htmlFor='group2'>xxxx</label>
            </div>
            <div className={styles.group} style={{margin:'15px',flex:'1'}}>      
                <input type="text" required id='group3'/>
                <label htmlFor='group3'>xxxx</label>
            </div>
            <div className={styles.group} style={{margin:'15px',flex:'1'}}>      
                <input type="text" required id='group4'/>
                <label htmlFor='group4'>xxxx</label>
            </div>
            </div>
            
      </fieldset>
        
       <fieldset id="expiry_date" style={{flex:'1'}}>
            <legend>Expiry Date</legend>
            <div style={{display:'flex'}}>
           <div className={styles.group} style={{margin:'15px',flex:'1'}}>      
                <input type="text" required id='mm'/>
                <label htmlFor='mm'>mm</label>
            </div>
            <div className={styles.group} style={{margin:'15px',flex:'1'}}>      
                <input type="text" required id='yyyy'/>
                <label htmlFor='yyyy'>yyyy</label>
            </div>
            </div>
        </fieldset>
        <fieldset id="ccv" style={{flex:'1'}}>
            <legend>CCV</legend>
            <div style={{display:'flex'}}>
            <div className={styles.group} style={{margin:'20px 15px 15px 0px',flex:'1'}}>      
            <input type="text" required id='xxx'/>
            <label htmlFor='xxx'>xxx</label>
            </div>
            </div>
        </fieldset>
        </div>
    );
  
}



export default CreditCardNumber;