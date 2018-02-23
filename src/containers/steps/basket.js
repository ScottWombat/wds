import React,{Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import InputNumber from '../../components/form/inputNumber';
import Item from './item';
import styles from './index.css';
import styles1 from './yourDetails.css';
import Immutable from 'immutable';
import { Link  } from 'react-router-dom';
class Basket extends Component {
   constructor(props,context){
        super(props,context);
        this.createProductGrid = this.createProductGrid.bind(this);
        this.createProductItem = this.createProductItem.bind(this);
   }

  createProductItem(item){
      
      return <Item key={item.id} title={item.name} desc={item.description} price={item.price} qty={item.qty} itemId={item.id}/>;
  }
  createProductGrid(){
      //return this.props.addedItems.map(this.createProductItem);
      var customerInfo = localStorage.getItem("customerInfo");
      var obj =JSON.parse(customerInfo);
      return obj.items.map(this.createProductItem);
  }
  componentDidMount(){
      var customerInfo = localStorage.getItem("customerInfo");
      var obj =JSON.parse(customerInfo);
      
     
  }
  render(){
    
  return (
      <div className={styles.flex_container}>
      <div className={styles.inner_element}>
        <div className={styles1.title}>Your Shopping Basket</div>
        <form method="POST" >
             <div className={styles.content_grid}>
                        <div className={styles.content_column_title_t}>Title</div>
                        <div className={styles.content_column_desc_t}>Description</div>
                        <div className={styles.content_column_price_t}>Price</div>
                        <div className={styles.content_column_qty_t}>Quantity</div>
                        <div className={styles.content_column_total_t}>Total</div>
                        <div className={styles.content_column}>
                        </div>
            </div>         
            
            {this.createProductGrid()}
            
	        <div className={styles.btn_nav1}>
                               <a className={styles.btn}>&lt;&nbsp;Shopping Bag</a>
                               <a className={styles.btn}>Payment&nbsp;&gt;</a>
                                <Link to='/' className={styles.btn}>
                                cancel
                                </Link>
            </div>
        
      </form>
      </div>
    </div>
  );
  }
}

function mapStateToProps(state,props) {
  let addedItems = state.addItemToCart.addedItems;
  //const map = Immutable.Map();
  //addedItems.forEach(function(obj) { 
   //    console.log("d:" +obj.id); 
   //});
  return { addedItems:addedItems }
}


export default connect(mapStateToProps)(Basket);