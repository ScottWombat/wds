import React,{Component} from 'react';
import PropTypes from 'prop-types';
import styles from './yourDetails.css';
import styles1 from './index.css';
import { Link  } from 'react-router-dom';
import {withRouter} from "react-router-dom";
class Shipping extends Component {
  static contextTypes = {
    router: PropTypes.object
  }
   constructor(props,context){
       super(props,context);
       this.state ={
           addr1:'',
           suburb1:'',
           state1:'',
           zip1:'',
           country1:'',
           asabove: false,
           addr2:'',
           suburb2:'',
           state2:'',
           zip2:'',
           country2:''
           
       }
       this.handleOnChange = this.handleOnChange.bind(this);
       this.handleOnSubmit = this.handleOnSubmit.bind(this);
   }
    
    handleOnChange(e){
     const target = e.target;
      const name = target.name;
      const value = target.value;
      this.setState(state =>({[name]: value}))
  }
    
  handleOnSubmit(e){
      e.preventDefault();
     // console.log(JSON.stringify(this.state, null, 4))
      let customerInfo = localStorage.getItem('customerInfo');
      var customerInfoObj = JSON.parse(customerInfo);
      
      customerInfoObj.postalAddress= this.state.addr1;
      customerInfoObj.postalSuburb = this.state.suburb1 ;
      customerInfoObj.postalState=this.state.state1; 
      customerInfoObj.postalZip = this.state.zip1;
      customerInfoObj.postalCountry = this.state.country1;
      
      customerInfoObj.deliveryAddress= this.state.addr2;
      customerInfoObj.deliverySuburb = this.state.suburb2 ;
      customerInfoObj.deliveryState=this.state.suburb2; 
      customerInfoObj.deliveryZip = this.state.suburb2;
      customerInfoObj.deliveryCountry = this.state.suburb2;
      
      customerInfoObj.postalAsDelivery = this.state.asabove;
      
      //localStorage.removeItem('customerInfo');
      //localStorage.setItem('customerInfo',JSON.stringify(customerInfoObj))
      //console.info(localStorage.getItem("customerInfo"))
      //window.location = '/summary';
      //this.props.history.push('/summary');
      this.context.router.history.push('/summary');
  }
  render(){
    return (
      <div className={styles.flex_container}>
        <div className={styles.inner_element}>
        <div className={styles.title}>Your Shipping</div>
              <fieldset style={{width:'100%'}}>
            <legend>Postal Address</legend>
             <div className={styles.displayStyle}>
                <div className={styles.group} style={{margin:'15px',flex:'1'}}>      
                    <input type="text" name='addr1' id='addr1' onChange={this.handleChange} style={{width:'400px'}}/>
                    <label htmlFor='addr1'>address</label>
                </div>
                <div className={styles.group} style={{margin:'15px',flex:'1'}}>      
                    <input type="text" onChange={this.handleChange} name='suberb1' id='suberb1'/>
                    <label htmlFor='suburb1'>suburn</label>
                </div>
                <div className={styles.group} style={{margin:'15px',flex:'1'}}>      
                    <input type="text" onChange={this.handleChange} name='state1' id='state1'/>
                    <label htmlFor='state1'>state</label>
                </div>
                <div className={styles.group} style={{margin:'15px',flex:'1'}}>      
                    <input type="text" onChange={this.handleChange} name='zip1' id='zip1'/>
                    <label htmlFor='zip1'>zip code</label>
                </div>
                <div className={styles.group} style={{margin:'15px',flex:'1'}}>      
                    <input type="text" onChange={this.handleChange} name='country1' id='country1'/>
                    <label htmlFor='country1'>country</label>
                </div>
            </div>
            </fieldset>
          
            <div className={styles.displayStyle}>
                <div className={styles.group} style={{margin:'15px',flex:'1'}}>   
                    <fieldset>
                    <div style={{display:'block',width:'400px'}}>
                    <input
                    type="checkbox"
                    value='yes'
                    id='asabove'
                    />
                    <label htmlFor='asabove'>delivery address as above</label>
                    </div>
                    </fieldset>
                </div>
            </div>
         
            <fieldset style={{width:'100%'}}>
            <legend>Delivery Address</legend>
            <div className={styles.displayStyle}>
                
                <div className={styles.group} style={{margin:'15px',flex:'1'}}>      
                    <input type="text" name='addr2' id='addr2' style={{width:'400px'}}/>
                    <label htmlFor='addr2'>address</label>
                </div>
                <div className={styles.group} style={{margin:'15px',flex:'1'}}>      
                    <input type="text" onChange={this.handleChange} name='suburb2' id='suburb2'/>
                    <label htmlFor='suburb2'>suburn</label>
                </div>
                <div className={styles.group} style={{margin:'15px',flex:'1'}}>      
                    <input type="text" onChange={this.handleChange} name='state2' id='state2'/>
                    <label htmlFor='state2'>state</label>
                </div>
                <div className={styles.group} style={{margin:'15px',flex:'1'}}>      
                    <input type="text" onChange={this.handleChange} name='zip2' id='zip2'/>
                    <label htmlFor='zip2'>zip code</label>
                </div>
                <div className={styles.group} style={{margin:'15px',flex:'1'}}>      
                    <input type="text" onChange={this.handleChange} name='country2' id='country2'/>
                    <label htmlFor='country2'>country</label>
                </div>
                
            </div>
            </fieldset>
            <div className={styles.btn_nav}>
                               <a className={styles1.btn}>&lt;&nbsp;Payment</a>
                               <a className={styles1.btn} onClick={(e) => {this.handleOnSubmit(e)}}>Checkout&nbsp;&gt;</a>     
                                <Link to='/' className={styles1.btn}>
                                cancel
                                </Link>
           </div>
        </div>
      </div>
      );
  }
}

export default Shipping;