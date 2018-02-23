import React, { Component} from 'react';
import PropTypes from 'prop-types';
import styles from './radioGroup.css';
class CreditCardType extends Component {
  constructor(props){
        super(props);
        this.state={
            selectedOption: 'master',
        }
        this.handleOptionOnChange = this.handleOptionOnChange.bind(this)
  }
  

  handleOptionOnChange(changeEvent){
   console.log('onchange:' + changeEvent.target.value);
   this.setState({
      selectedOption: changeEvent.target.value
    });
  }
  
  render() {
    return (

      <fieldset id="payment_method">
            <legend>Payment Method</legend>
                <div className={styles.fieldgroup}>
                    <div className={styles.displayStyle}>
                        <input type="radio" id='master' onChange={this.handleOptionOnChange} name="payment_method" value="master" className={styles.next} checked={this.state.selectedOption === 'master'} />
                        <div className={styles.nextMargin}>master</div>
                    </div>
                </div>
                <div className={styles.fieldgroup}>
                    <div className={styles.displayStyle}>
                        <input type="radio" id='visa' onChange={this.handleOptionOnChange} name="payment_method" value="visa" className={styles.next} checked={this.state.selectedOption === 'visa'} />
                        <div className={styles.nextMargin}>visa</div>
                    </div>
                </div>
     </fieldset>
 
    );
  }
}



export default CreditCardType;