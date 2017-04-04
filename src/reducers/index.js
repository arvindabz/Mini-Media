import {combineReducers} from 'redux';
import posts from './homeReducer';

const rootReducer = combineReducers({
  posts
});

export default rootReducer;
