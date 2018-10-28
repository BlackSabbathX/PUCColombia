import {combineReducers} from 'redux';
import themes from './themes';
import search from './search';

export default combineReducers({
    themes,
    search
});