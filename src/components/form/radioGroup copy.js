import React, { Component} from 'react';
import PropTypes from 'prop-types';
import styles from './radioGroup.css';
class RadioGroup extends Component {
  constructor(props){
        super(props);
        this.state={
            selectedOption: 'master',
        }
        this.handleOptonOnChange = this.handleOptonOnChange.bind(this)
  }
  

  handleOptonOnChange = (changeEvent) => {
   this.setState({
      selectedOption: changeEvent.target.value
    });
  }

  render() {
    

    return (
      <form method="POST">
            <div className={radio1.radiobutton_container}>
                    <ul className={radio1.radioGroup}>
                    <li>
                    <input type="radio" id="f_option" checked={this.state.selectedOption === 'master'} name="selector" value="master" onChange={this.handleOptionChange}/>
                    <label htmlFor="f_option">Master</label>
                    <div className={radio1.check}></div>
                    </li>
                    <li>
                    <input type="radio" id="s_option" name="selector" checked={this.state.selectedOption === 'visa'} value="visa" onChange={this.handleOptionChange}/>
                    <label htmlFor="s_option">Visa</label>
                    <div className={radio1.check}><div className={radio1.inside}></div></div>
                    </li>
                    <div className={styles.check}><div className={styles.inside}></div></div>
       
                    </ul>
              </div>
      </form>
    );
  }
}



export default RadioGroup;