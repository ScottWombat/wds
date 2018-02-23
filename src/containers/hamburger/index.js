import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { intlShape, injectIntl , FormattedMessage } from 'react-intl';
import { bindActionCreators } from 'redux';
import { Provider,connect } from 'react-redux';
import { Link  } from 'react-router-dom';
import classnames from 'classnames';
import styles from './test.css';
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
        <nav role="navigation">
            <div className={styles.menuToggle}>
                <input type="checkbox" />
                <span className={styles.ham}></span>
                <span className={styles.ham}></span>
                <span className={styles.ham}></span>
                <div className={styles.menu}>
                <div className={styles.navLeft}>
                <ul>
                <li onClick={() => selectedLocale('en')}>
                 {this.props.english}
                </li>
                <li className={styles.vertical_bar}>&#124;</li>
                <li onClick={() => selectedLocale('es')}>
                 {this.props.spanish}
                </li>
                <li className={styles.vertical_bar}>&#124;</li>
                <li onClick={() => selectedLocale('fr')}>
                 {this.props.french}
                </li>
                <li className={styles.vertical_bar}>&#124;</li>
                <li onClick={() => selectedLocale('de')}>
                 {this.props.german}
                </li>
                <li className={styles.vertical_bar}>&#124;</li>
                <li onClick={() => selectedLocale('ja')}>
                 {this.props.japan}
                </li>
                <li className={styles.vertical_bar}>&#124;</li>
                <li onClick={() => selectedLocale('th')}>
                 {this.props.thai}
 
                </li>
                </ul>
                </div>
                <div className={styles.navRight}>
                <ul>
                <li>
                 <Link to='/comingSoon' className={styles.menuLink}>
                <FormattedMessage id="app.login.menu"
                defaultMessage="Login"
                description="Loin Menu" />
                </Link></li>
                <li>
                <Link to='/comingSoon' className={styles.menuLink}>
                <FormattedMessage id="app.mycart.menu"
                defaultMessage="My Cart"
                description="My Cart Menu" />
                </Link></li>
                <li>
                <Link to='/comingSoon' className={styles.menuLink}>
                 <FormattedMessage id="app.contact.menu"
                defaultMessage="Contact"
                description="Contact Menu" />
                </Link></li>
                <li>
                <Link to='/comingSoon' className={styles.menuLink}>
                  <FormattedMessage id="app.about.menu"
                defaultMessage="About"
                description="About Menu" />
                </Link></li>
                </ul>   
                </div>
                </div>
            </div>
        </nav>
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


