import React, { Component } from 'react';
import styles from './popup.css';
import closeButton from './closebutton.css';
import 'font-awesome/css/font-awesome.min.css';
import { Link  } from 'react-router-dom';
class Popup extends React.Component {
    
  constructor(props) {
      super(props);
     // this.state={
      //    isModalOpen:this.props.modalOpen,
     //     onClose:false
     // }
  }
  addProductToCart(e){
       e.preventDefault();
     this.props.action(this.props.product);
  }
  close(e){
     e.preventDefault();
     this.props.action('close');
  }
    /*
  shouldComponentUpdate(nextProps, nextState){
    return true;
  }
  componentDidMount() {
      console.log(">>"+this.state.isModalOpen);
      console.log(">>"+this.props.modalOpen);
        this.setState({ isModalOpen: true})
   
  }
  */
  render() {
    //console.log('on rebder' + this.state.isModalOpen);
    //if(this.state.isModalOpen===false){
     //   
     //   return null;
    //}
    console.log("dddd" + this.props.p)
    return (
      
      <div className={styles.modalStyle}>
        {this.props.product && 
          <div className={styles.polaroid}>   
                <img src={require(`../../containers/gallery/${this.props.product.productType}/${this.props.product.image}_lg.jpg`)}/>
                <div className={styles.box_content}>
                    <div className={styles.box_content_left}>
                        <span className={styles.content_title}>{this.props.product.name}</span>
                        <span className={styles.content_desc}>{this.props.product.description}{this.props.product.productType}</span>
                    </div>
                   <div className={styles.box_content_right}>
                        <div className={styles.box_content_right_price}>
                            <span className={styles.content_price}>Price:$&nbsp;{this.props.product.price}</span>
                            <span className={styles.content_discount}><span className={styles.strikediag}>Discount:{this.props.product.discount}%</span></span>
                            <span className={styles.content_star}>
                            <i className='fa fa-heart'></i>&nbsp; 
                            <i className='fa fa-heart'></i>&nbsp;
                            <i className='fa fa-heart'></i>&nbsp;
                            <i className='fa fa-heart'></i>&nbsp; 
                            <i className='fa fa-heart'></i> 
                            </span>
                        </div>
                        <div className={styles.box_content_right_button}>
                            <span className={styles.content_link}><a href='#' onClick={e => this.addProductToCart(e)} className={styles.menu_link }>add to cart</a></span>
                            <span className={styles.content_link}>
                                <Link to='/' className={styles.menu_link}>
                                cancel
                                </Link>
                            </span>
                        </div>
                    </div>
                    
                    
                </div>
            

                
          </div>
        }
        
       
      </div>
    )
  }


}

export default Popup;

