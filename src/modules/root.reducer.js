import { combineReducers } from 'redux';
import api from './home.reducer';
export default combineReducers({
    api: api,
});