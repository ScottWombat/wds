import {PAGE_NO_CHANGED} from '../../common/constants/ActionTypes';

export function pageNoChanged(pageNo){
    return{
        type: PAGE_NO_CHANGED,
        pageNo
    }
}