import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { intlShape, injectIntl , FormattedMessage } from 'react-intl';
import { bindActionCreators } from 'redux';
import { Provider,connect } from 'react-redux';
import { Link  } from 'react-router-dom';
import classnames from 'classnames';
//import styles from './hamburger.css';
import test from './test.css';
import {selectedLocale} from '../../components/i18n/localeAction';


class Hamburger extends Component{
  constructor(props) {
    super(props);
    this.state = {
       isChecked: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }  
 handleChange (e) {
        this.setState({isChecked: !this.state.isChecked});
        console.log('CHANGE!');
  }
  render(){
      
      const { intl, selectedLocale } = this.props;
      return (  
        
            <div id="menuToggle" className={test.menuToggle}>
            <input type="checkbox" id="toggle"/>
            <span></span>
            <span></span>
            <span></span>
             <div className={test.nav}>
                  jjjjjj
             </div>
            
            </div>
       
     )
  }
  
}

const mapStateToProps = (state) =>{
    return Object.assign({}, ...state, {
        english: state.countryReducer.EN,
        spanish: state.countryReducer.ES,
        french: state.countryReducer.FR,
        german: state.countryReducer.DE,
        japan: state.countryReducer.JP,
        thai: state.countryReducer.TH
        
    });
}


const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({ selectedLocale }, dispatch);
}


Hamburger.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(connect(mapStateToProps,mapDispatchToProps)(Hamburger));


