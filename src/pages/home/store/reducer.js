import {fromJS} from 'immutable'
import * as constant from './constant'

const defaultState = fromJS({
    cardList: []
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constant.REFRESH_CARD_LIST: {
            return state.set('cardList', fromJS((action.cardList)));
        }
        default:
            return state;
    }
}