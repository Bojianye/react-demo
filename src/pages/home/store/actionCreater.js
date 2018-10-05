import * as constants from './constant'
import {Get} from "../../../http";

export const refreshCardList = () => {
    return (dispatch)=>{
        Get('timeline/AklCouncil').then(res => {
            const action = {
                type: constants.REFRESH_CARD_LIST,
                cardList: res
            };
            dispatch(action)
        })
    }
}
