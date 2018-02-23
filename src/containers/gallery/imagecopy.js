import React from 'react';
import styles from './image.css';
let Image = function statelessFunctionComponentClass(props) {
  let source = './women/' + props.source;
  
  let style1 = {
    width: '300px',
    height: '300px',
    margin: '0px 0px 0px 0px',

  };
    
  let style2 = {
    color:'white',
    margin_top:'-400px',
    zIndex:'10'
  };
  const handler = () =>{
      alert('d');
  }
  return (
            <div className={styles.container} onClick={handler}>
          
            <img src={require('./women/anna_md.jpg')} className={styles.image}/>
            <div className={styles.middle}>
           <div className={styles.text}>
               <div className={styles.descSection}>
                    <div className={styles.desc}>Miss Dior</div>
                    <div className={styles.desc}>Booming Bouquet</div>
                    <div className={styles.desc}>$123</div>
                    <div className={styles.desc}>****</div>
               </div>
           </div>

           </div>
           </div>
    
    
  );
};

export default Image;


