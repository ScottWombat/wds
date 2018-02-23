import {CHANGE_RECORDS_PER_PAGE} from '../../common/constants/ActionTypes';

export function changeRecordsPerPage(noOfRecords){
    return{
        type: CHANGE_RECORDS_PER_PAGE,
        noOfRecords   
    }
}