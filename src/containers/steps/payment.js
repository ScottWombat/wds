import React,{Component} from 'react';
import 'font-awesome/css/font-awesome.css';
import styles from './yourDetails.css';
import styles1 from './index.css';
import radioGroup from './radioGroup.css';
import CreditCard from '../creditCard';
import { Link  } from 'react-router-dom';
class Payment extends Component {
  
  constructor(props,context){
        super(props,context);
        this.state={
            selectedOption: 'master',
            creditCardName:'',
            creditCardNumber1:'',
            creditCardNumber2:'',
            creditCardNumber3:'',
            creditCardNumber4:'',
            creditCardExpiryMonth:'',
            creditCardExpiryYear:'',
            creditCardCVV:''
        }
        this.handleOptionOnChange = this.handleOptionOnChange.bind(this);
        this.createCreditCardName = this.createCreditCardName.bind(this);
        this.createCreditCardType = this.createCreditCardType.bind(this);
        this.createCreateCreditCardNumber = this.createCreateCreditCardNumber.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }
  handleOptionOnChange(changeEvent){
   console.log('onchange:' + changeEvent.target.value);
   this.setState({
      selectedOption: changeEvent.target.value
    });
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
      customerInfoObj.creditCardName= this.state.creditCardName;
      customerInfoObj.creditCardNumber = this.state.creditCardNumber1 + "-" + this.state.creditCardNumber2 + "-" + this.state.creditCardNumber3 +"-" + this.state.creditCardNumber4;
      customerInfoObj.creditExpiryDate=this.state.creditCardExpiryMonth + "-" + this.state.creditCardExpiryYear;
      customerInfoObj.creditCardCVV = this.state.creditCardCVV;
 
      
      localStorage.removeItem('customerInfo');
      localStorage.setItem('customerInfo',JSON.stringify(customerInfoObj))
      //console.info(localStorage.getItem("customerInfo"))
  }
 
  createCreditCardType() {
     return(
        <fieldset id="payment_method">
            <legend>Payment Method</legend>
                <div className={radioGroup.fieldgroup}>
                    <div className={radioGroup.displayStyle}>
                        <input type="radio" id='master' onChange={this.handleOptionOnChange} name="payment_method" value="master" className={radioGroup.next} checked={this.state.selectedOption === 'master'} />
                        <div className={radioGroup.nextMargin}>master</div>
                    </div>
                </div>
                <div className={radioGroup.fieldgroup}>
                    <div className={radioGroup.displayStyle}>
                        <input type="radio" id='visa' onChange={this.handleOptionOnChange} name="payment_method" value="visa" className={radioGroup.next} checked={this.state.selectedOption === 'visa'} />
                        <div className={radioGroup.nextMargin}>visa</div>
                    </div>
                </div>
        </fieldset>
     )
  }
  createCreditCardName(){
    return(
        <fieldset id="payment_method">
            <legend>Credit Card Name</legend>
            <div className={radioGroup.fieldgroup}>
                   <input type="text" name='creditCardName' id='creditCardName' onChange={this.handleOnChange}/>
                        <label htmlFor='creditCardName'>xxxx</label>
            </div>
        </fieldset>
    )
  }
  createCreateCreditCardNumber(){
      return(
            <div className={radioGroup.displayStyle}>
               <fieldset id="credit_card_number" className={radioGroup.next}>
               <legend>Credit Card Number</legend>
               <div className={radioGroup.displayStyle}>
                    <div className={styles.group} style={{margin:'15px 15px 15px 0px',flex:'1'}}>    
                        <input type="text" name='creditCardNumber1' id='group1' onChange={this.handleOnChange}/>
                        <label htmlFor='group1'>xxxx</label>
                    </div>
                    <div className={styles.group} style={{margin:'15px',flex:'1'}}>  
                        <input type="text" name='creditCardNumber2' id='group2' onChange={this.handleOnChange}/>
                        <label htmlFor='group2'>xxxx</label>
                    </div>
                    <div className={styles.group} style={{margin:'15px',flex:'1'}}>  
                        <input type="text" name='creditCardNumber3' id='group3' onChange={this.handleOnChange}/>
                        <label htmlFor='group3'>xxxx</label>
                    </div>
                    <div className={styles.group} style={{margin:'15px',flex:'1'}}>  
                        <input type="text" name='creditCardNumber4' id='group4' onChange={this.handleOnChange}/>
                        <label htmlFor='group4'>xxxx</label>
                    </div>
                </div>   
                </fieldset>
                <fieldset id="expiry_date" className={radioGroup.next}>
                    <legend>Expiry Date</legend>
                    <div className={radioGroup.displayStyle}>
                        <div className={styles.group} style={{margin:'15px',flex:'1'}}>      
                            <input type="text" name='creditCardExpiryMonth' id='mm' onChange={this.handleOnChange}/>
                            <label htmlFor='mm'>mm</label>
                        </div>
                        <div className={styles.group} style={{margin:'15px',flex:'1'}}>      
                            <input type="text" name='creditCardExpiryYear' id='yyyy' onChange={this.handleOnChange}/>
                            <label htmlFor='yyyy'>yyyy</label>
                        </div>
                    </div>
                </fieldset>
                <fieldset id="cvv" className={radioGroup.next}>
                    <legend>CVV</legend>
                    <div className={radioGroup.displayStyle}>
                        <div className={styles.group} style={{margin:'20px 15px 15px 0px',flex:'1'}}>    
                        <input type="text" name='creditCardExpiryCVV' id='xxx' onChange={this.handleOnChange}/>
                             <label htmlFor='xxx'>xxx</label>
                        </div>
                    </div>
                </fieldset>
            </div>
    )
  }
  render(){
      return (
         <div className={styles.flex_container}>
         <div className={styles.inner_element}>
         <div className={styles.title}>Your Payment</div>
         {this.createCreditCardType()}
         {this.createCreditCardName()}
         {this.createCreateCreditCardNumber()}
         <div className={styles.btn_nav}>
                               <a className={styles1.btn}>&lt;&nbsp;Shopping Bag</a>
                               <a className={styles1.btn} onClick={(e) => {this.handleOnSubmit(e)}}>Shipping&nbsp;&gt;</a>    
                                <Link to='/' className={styles1.btn}>
                                cancel
                                </Link>
         </div>
    
        </div>
        </div>
      );
  }
  
}

export default Payment;

