import { combineReducers } from 'redux-immutable'
import {reducer as homeReducer} from '../pages/home/store'
import {reducer as detailReducer} from '../pages/detail/store'

export default combineReducers({
    home: homeReducer,
    detail: detailReducer
})