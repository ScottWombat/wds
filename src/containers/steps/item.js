import React,{Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import InputNumber from '../../components/form/inputNumber';
import styles from './index.css';
;
import 'font-awesome/css/font-awesome.min.css';
class Item extends Component {
   constructor(props,context){
        super(props,context);
        this.deleteItem = this.deleteItem.bind(this);
   }
    
 deleteItem(event,itemId){
     event.preventDefault();
     
     let customerInfo =localStorage.getItem('customerInfo');
     let customerInfoObj = JSON.parse(customerInfo);
      var items = JSON.stringify(customerInfoObj.items);
        for(var i in customerInfoObj.items){
            var item = customerInfoObj.items[i];
            if(item.id === itemId){
                customerInfoObj.items.splice(i,1);
            }
        }
        localStorage.removeItem('customerInfo');
        localStorage.setItem('customerInfo',JSON.stringify(customerInfoObj))

 }
    
 render(){
    
     return(
             <div className={styles.content_grid}>
                        <div className={styles.content_column_title}>{this.props.title}</div>
                        <div className={styles.content_column_desc}>{this.props.desc}</div>
                        <div className={styles.content_column_price}>${this.props.price}</div>
                        <div className={styles.content_column_qty}>
                        <InputNumber itemId={this.props.itemId} qty={this.props.qty}/>
                        </div>
                        <div className={styles.content_column_total}>${this.props.price * this.props.qty}</div>
                        <div className={styles.content_column}>
                         <a className={styles.removeLink} onClick={(e) => { this.deleteItem(e, this.props.itemId) }}>
                        <i className='fa fa-trash' aria-hidden="true"></i>
                        </a>
                        </div>
                        
            </div>
     );
 }
}

export default Item;