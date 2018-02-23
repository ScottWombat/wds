import {connect} from 'react-redux';
import {IntlProvider} from 'react-intl';

function mapStateToProps(state){
    
    const {lang,messages} = state.localeReducer;
    
    return {locale: lang, key:lang, messages}
}
export default connect(mapStateToProps)(IntlProvider);