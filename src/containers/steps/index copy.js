import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styles from './index.css';
import 'font-awesome/css/font-awesome.min.css';
import btnStyle from './buttonNext.css';
import {YourDetails} from './yourDetails';
import {Payment} from './payment';
import {Shipping} from './shipping';
class Checkout extends Component{
    constructor(props){
        super(props);
        this.state={
            basketActive:true,
            buyerActive:false,
            paymentActive:false,
            shippingActive:false
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
            shippingActive:false
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
            shipppingActive: false
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
            shippingActive:false
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
        })
    }
    
    render() {
        
        return(                 
            <div className={styles.checkoutWrapper}>
                <div className={styles.left_side}>
                    <ul>
                        <li className={styles.choose} onClick={this.basketOnClick}>
                            <div className={styles.icon}>
                                <i className="fa fa-shopping-bag fa-2x" aria-hidden="true"></i>
                            </div>
                            <div className={styles.title}>Shopping Bag</div>
                        </li>
                        <li className={styles.choose} onClick={this.buyerOnClick}>
                            <div className={styles.icon}>
                            <i className="fa fa-user fa-2x" aria-hidden="true"></i>
                            </div>
                            <div className={styles.title}>Your Details</div>
                        </li>
                      
                        <li className={styles.choose} onClick={this.paymentOnClick}>
                            <div className={styles.icon}>
                            <i className="fa fa-credit-card fa-2x" aria-hidden="true"></i>
                            </div>
                            <div className={styles.title}>Payment</div>
                        </li>
                       
                        <li className={styles.choose} onClick={this.shippingOnClick}>
                            <div className={styles.icon}>
                            <i className="fa fa-truck fa-2x" aria-hidden="true"></i>
                            </div>
                            <div className={styles.title}>Shipping</div>
                        </li>
                        <li className={styles.choose}>
                            <div className={styles.icon}>
                            <i className="fa fa-truck fa-2x" aria-hidden="true"></i>
                            </div>
                            <div className={styles.title}>Summary</div>
                        </li>
                    </ul>
                </div>
                <div className={styles.border}>
                    <div className={styles.line_one}></div>
                </div>
                <div className={styles.right_side}>
                    <div className={this.state.basketActive?styles.basket_active:styles.content_basket}>
                        
                        <div className={styles.content_grid}>
                        <div className={styles.content_column_id_t}>no</div>
                        <div className={styles.content_column_title_t}>title</div>
                        <div className={styles.content_column_desc_t}>description</div>
                        <div className={styles.content_column_price_t}>price</div>
                        <div className={styles.content_column_qty_t}>quantity</div>
                        <div className={styles.content_column_total_t}>total</div>
                        <div className={styles.content_column}>
                        </div>
                        <div className={styles.content_column}></div>
                        </div>
                        <div className={styles.content_grid}>
                        <div className={styles.content_column_id}>1</div>
                        <div className={styles.content_column_title}>dolce</div>
                        <div className={styles.content_column_desc}>miss dior</div>
                        <div className={styles.content_column_price}>$120</div>
                        <div className={styles.content_column_qty}>1</div>
                        <div className={styles.content_column_total}>$120</div>
                        <div className={styles.content_column}>
                        <i className="fa fa-pencil-square-o fa-lg"></i>
                        </div>
                        <div className={styles.content_column}><i className="fa fa-trash-o fa-lg" aria-hidden="true"></i></div>
                        </div>
                        <div className={styles.btn_nav}>
                           
                               <a className={styles.btn}>Your Details&nbsp;&gt;</a>
                               <a className={styles.btn}>&lt;&nbsp;Shopping Bag</a>
                               <a className={styles.btn}>Shipping</a>
                               <a className={styles.btn}>Payment</a>
                           
                        </div>
                        
                   
                    </div>
                    <div className={this.state.buyerActive?styles.buyer_active:styles.content_buyer}>
                        <YourDetails url='#'/>
                    </div>
                    <div className={this.state.paymentActive?styles.payment_active:styles.content_payment}>
                        <div className={styles.content_title}>payment</div>
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