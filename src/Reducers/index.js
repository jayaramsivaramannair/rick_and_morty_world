import {combineReducers} from 'redux';
import profileReducer from './profiles';


export default combineReducers({
  profiles: profileReducer,
})