import {CHANGE_IMAGE_SOURCE} from '../../common/constants/ActionTypes';

export default function changeImageSource(sourceName){
    return {
        type: CHANGE_IMAGE_SOURCE,
        sourceName
        
    }
}

