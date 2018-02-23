import {LOCALE_SELECTED} from '../../common/constants/ActionTypes';

export function selectedLocale(locale){
    return{
        type: LOCALE_SELECTED,
        locale    
    }
}