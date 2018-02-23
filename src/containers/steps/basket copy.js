import React,{Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import InputNumber from '../../components/form/inputNumber';
import styles from './index.css';
import styles1 from './yourDetails.css';

class Basket extends Component {
   constructor(props,context){
        super(props,context);
   }
  render(){
  return (
      <div className={styles.flex_container}>
      <div className={styles.inner_element}>
        <div className={styles1.title}>your shopping basket</div>
        <form method="POST" >
             <div className={styles.content_grid}>
                        <div className={styles.content_column_title_t}>title</div>
                        <div className={styles.content_column_desc_t}>description</div>
                        <div className={styles.content_column_price_t}>price</div>
                        <div className={styles.content_column_qty_t}>quantity</div>
                        <div className={styles.content_column_total_t}>total</div>
                        <div className={styles.content_column}>
                        </div>
            </div>         
            <div className={styles.content_grid}>
                        <div className={styles.content_column_title}>dolce</div>
                        <div className={styles.content_column_desc}>miss dior</div>
                        <div className={styles.content_column_price}>$120</div>
                        <div className={styles.content_column_qty}>
                        <InputNumber productId={1} qty={1}/>
                        </div>
                        <div className={styles.content_column_total}>$120</div>
                        <div className={styles.content_column}>
                        <i className="material-icons right">delete</i>
                        </div>
                        
            </div>
            
	        <div className={styles.btn_nav}>
                               <a className={styles.btn}>&lt;&nbsp;Shopping Bag</a>
                               <a className={styles.btn}>Payment&nbsp;&gt;</a>       
            </div>
        
      </form>
      </div>
    </div>
  );
  }
}

function mapStateToProps(state,props) {
  let addedItems = state.addItemToCart.addedItems;
  console.log("addItems" + JSON.stringify(addedItems));
  return { addedItems:addedItems }
}


export default connect(mapStateToProps)(Basket);