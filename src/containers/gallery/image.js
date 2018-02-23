import React,{Component} from 'react';
import PropTypes from 'prop-types';
import styles from './image.css';
import {default as UUID} from "node-uuid";

class Image extends Component{
    constructor(props){
        super(props);
        this.state={
            value:'dddd'
        }
        this.changeHandler = this.changeHandler.bind(this)
    }
    componentWillMount() {
    this.id = UUID.v4();
    
    }
    
    changeHandler(){
        //alert(this.props.source);
      //  if (typeof this.props.action === 'function') {
            this.props.action(this.props.product);
      //  }
    }
    render(){
        
        return(
           <div className={styles.container} onClick={this.changeHandler}>
          
            <img src={require(`./${this.props.productType}/${this.props.product.image}_md.jpg`)} className={styles.image}/>
            <div className={styles.middle}>
           <div className={styles.text}>
               <div className={styles.descSection}>
                    <div className={styles.desc}>{this.props.product.name}</div>
                    <div className={styles.desc}>{this.props.product.description}</div>
                    <div className={styles.desc}>${this.props.product.price}</div>
                    <div className={styles.desc}>****</div>
               </div>
           </div>

           </div>
           </div>
        );

    }
}





export default Image;


