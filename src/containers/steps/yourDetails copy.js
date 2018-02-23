import React from 'react';
import styles from './yourDetails.css';
import styles1 from './index.css';

export const YourDetails = (props) => {
  return (
      <div className={styles.flex_container}>
      <div className={styles.inner_element}>
        <div className={styles.title}>your details</div>
        <form method="POST" >
             
             <div style={{display:'flex'}}>
             <div className={styles.group} style={{margin:'15px',flex:'1'}}>      
                <input type="text" required id='fname'/>
                <label htmlFor='fname'>first name</label>
            </div>
      
            <div className={styles.group} style={{margin:'15px',flex:'1'}}>      
                <input type="text" required id='lname'/>
                <label htmlFor='lname'>last name</label>
            </div>
            </div>
            <br/>
           <div style={{display:'flex'}}>
                <div className={styles.group} style={{margin:'15px',flex:'1'}}>      
                <input type="text" required id='pwd'/>
                <label htmlFor='pwd'>password</label>
                </div>
                <div className={styles.group} style={{margin:'15px',flex:'1'}}>      
                <input type="text" required id='email'/>
                <label htmlFor='email'>email</label>
                </div>
            </div>
          <br/>
           <div style={{display:'flex'}}>
                <div className={styles.group} style={{margin:'15px',flex:'1'}}>      
                <input type="text" required id='mobile'/>
                <label htmlFor='mobile'>mobile</label>
                </div>
                <div className={styles.group} style={{margin:'15px',flex:'1'}}>      
                &nbsp;
                </div>
            </div>
	        <div className={styles1.btn_nav}>
                               <a className={styles1.btn}>&lt;&nbsp;Shopping Bag</a>
                               <a className={styles1.btn}>Payment&nbsp;&gt;</a>       
            </div>
        
      </form>
      </div>
    </div>
  );
}