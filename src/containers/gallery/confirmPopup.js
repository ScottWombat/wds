import React, { Component } from 'react';
import { intlShape, injectIntl , FormattedMessage } from 'react-intl';
import styles from './confirmPopup.css'
import 'font-awesome/css/font-awesome.css';
import { Link  } from 'react-router-dom';
import { connect } from 'react-redux';

class ConfirmPopup extends Component{
    constructor(props){
        super(props);
        this.state = {
          noInCart: 10
        }
    }
    componentDidMount() {
        var customerInfo = localStorage.getItem("customerInfo");
        var obj =JSON.parse(customerInfo);
      
       // console.log("componentDitMount1:" + customerInfo)
      console.log("componentDitMount2:" + JSON.stringify(obj.items.length));
        this.setState({
            noInCart:JSON.stringify(obj.items.length)
        })
    }
    render(){
        return(
            <div className={styles.modalStyle}>
					
					<div className={styles.polaroid}>
						<div className={styles.bag}>
                             <i className="fas fa-cart-plus fa-3x"></i>
                        </div>
                        <div className={styles.bag_desc}>
                        You have {this.state.noInCart} item(s) in your shopping bag
                        </div>
                        <div className={styles.menu}>
                        <div className={styles.continue}>
                            
                             <Link to='/' className={styles.menuLink}>
                            Continue Shopping
                            </Link>
                        </div>
                        <div className={styles.mybag}>
                            <Link to='/comingSoon' className={styles.menuLink}>My Bag</Link>
                        </div>
                        <div className={styles.checkout}>
                            <Link to='/steps' className={styles.menuLink}>Check Out</Link>
                        </div>
                        <div className={styles.home}>
                            <Link to='/' className={styles.menuLink}>Back to Home</Link>
                        </div>
                       </div>
					</div>
            </div>
        )
    }
}



export default ConfirmPopup;