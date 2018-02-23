import React, { Component } from 'react';
import styles from './popup.css'
class Popup extends React.Component {
  render() {
   

    return (
      <div className={styles.modalStyle}>
        {this.props.source && 
        <img src={require(`../../containers/gallery/women/${this.props.source}_lg.jpg`)}
         className={styles.polaroid}/>
        
        }
        {this.props.source && 
        <div class="lb-overlay" id="image-1">
							<a href="#page" class="lb-close">x Close</a>
							<img src="images/full/1.jpg" alt="image01" />
							<div>
								<h3>pointe <span>/point/</h3>
								<p>Dance performed on the tips of the toes</p>
							</div>
							
						</div>
        }
      </div>
    )
  }


}

export default Popup;

<div class="lb-overlay" id="image-1">
							<a href="#page" class="lb-close">x Close</a>
							<img src="images/full/1.jpg" alt="image01" />
							<div>
								<h3>pointe <span>/point/</h3>
								<p>Dance performed on the tips of the toes</p>
							</div>
							
						</div>