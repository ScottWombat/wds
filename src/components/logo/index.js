import React, { Component } from 'react';
import { intlShape, injectIntl , FormattedMessage } from 'react-intl';
import styles from './logo.css';
/*
class Logo extends Component{
    
    render(){
       return(
           <div className={styles.logo}><FormattedMessage id="app.logo"
            defaultMessage="Welcome to Obsessed"
            description="Welcome Obsessed" /></div>
        )
    }
}

export default Logo;
*/

const Logo = () => {
  return  (<div className={styles.logo}><FormattedMessage id="app.logo"
            defaultMessage="Welcome to Obsessed"
            description="Welcome Obsessed" /></div>)
}
export default Logo;