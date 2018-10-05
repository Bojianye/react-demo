import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    avatarUrl: "",
    userName: "",
    mainImageUrl: "",
    text: "",
    createDate: ""
});

export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_DETAIL:
            return state.merge({
                avatarUrl: action.avatarUrl,
                userName: action.userName,
                mainImageUrl: action.mainImageUrl,
                text: action.text,
                createDate: action.createDate
            });
        default:
            return state;
    }
}