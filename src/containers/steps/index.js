import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styles from './index.css';
import 'font-awesome/css/font-awesome.min.css';
//import btnStyle from './buttonNext.css';
import Basket from './basket';
import YourDetails from './yourDetails';
import Payment from './payment';
import Shipping from './shipping';
class Checkout extends Component{
    constructor(props){
        super(props);
        this.state={
            basketActive:true,
            buyerActive:false,
            paymentActive:false,
            shippingActive:false,
            highlightBar:styles.line_one
        }
        this.basketOnClick = this.basketOnClick.bind(this);
        this.buyerOnClick = this.buyerOnClick.bind(this);
        this.paymentOnClick = this.paymentOnClick.bind(this);
        this.shippingOnClick = this.shippingOnClick.bind(this);
    }
    basketOnClick(e){
        e.preventDefault();
        const currentState = this.state.basketActive;
        if(currentState==true) return
        this.setState({
            basketActive: !currentState,
            buyerActive: false,
            paymentActive: false,
            shippingActive:false,
            highlightBar:styles.line_one
        })
    }
    buyerOnClick(e){
        e.preventDefault();
        const currentState = this.state.buyerActive;
        if(currentState==true) return
        this.setState({
            buyerActive: !currentState,
            basketActive:false,
            paymentActive: false,
            shipppingActive: false,
            highlightBar:styles.line_two
        })
    }
    paymentOnClick(e){
        e.preventDefault();
        const currentState = this.state.paymentActive;
        if(currentState==true) return
        this.setState({
            paymentActive: !currentState,
            buyerActive: false,
            basketActive:false,
            shippingActive:false,
            highlightBar:styles.line_three
        })
    }
    shippingOnClick(e){
        e.preventDefault();
        const currentState = this.state.shippingActive;
        if(currentState==true) return
        this.setState({
            shippingActive: !currentState,
            buyerActive: false,
            basketActive:false,
            paymentActive: false,
            highlightBar:styles.line_four
        })
    }
    
    render() {
        
        return(                 
            <div className={styles.checkoutWrapper}>
                <div className={styles.left_side}>
                    <ul>
                        <li className={this.state.basketActive===true?styles.stepSelected:styles.notSelected} onClick={this.basketOnClick}>
                            <div className={styles.icon}>
                                <i className="fa fa-shopping-bag fa-2x" aria-hidden="true"></i>
                            </div>
                            <div className={styles.title}>Shopping Bag</div>
                        </li>
                        <li className={this.state.buyerActive===true?styles.stepSelected:styles.notSelected} onClick={this.buyerOnClick}>
                            <div className={styles.icon}>
                            <i className="fa fa-user fa-2x" aria-hidden="true"></i>
                            </div>
                            <div className={styles.title}>Your Details</div>
                        </li>
                      
                        <li className={this.state.paymentActive===true?styles.stepSelected:styles.notSelected} onClick={this.paymentOnClick}>
                            <div className={styles.icon}>
                            <i className="fa fa-credit-card fa-2x" aria-hidden="true"></i>
                            </div>
                            <div className={styles.title}>Payment</div>
                        </li>
                       
                        <li className={this.state.shippingActive===true?styles.stepSelected:styles.notSelected} onClick={this.shippingOnClick}>
                            <div className={styles.icon}>
                            <i className="fa fa-truck fa-2x" aria-hidden="true"></i>
                            </div>
                            <div className={styles.title}>Shipping</div>
                        </li>
                        
                    </ul>
                </div>
                <div className={styles.border}>
                    <div className={this.state.highlightBar}></div>
                </div>
                <div className={styles.right_side}>
                    <div className={this.state.basketActive?styles.basket_active:styles.content_basket}>
                        <Basket url='#'/>
                    </div>
                    <div className={this.state.buyerActive?styles.buyer_active:styles.content_buyer}>
                        <YourDetails url='#'/>
                    </div>
                    <div className={this.state.paymentActive?styles.payment_active:styles.content_payment}>
                        <Payment url='#'/>
                    </div>
                    <div className={this.state.shippingActive?styles.shipping_active:styles.content_shipping}>
                        <Shipping url='#'/>
                    </div>
                </div>
            </div> 
        )
    }
}

export default Checkout;