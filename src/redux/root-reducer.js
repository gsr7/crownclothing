

import {combineReducers} from 'redux';

import userReducer from './user/user.reducer';

export default combineReducers({
	user: userReducer
});





{/* All full state in redux is one big JSON object  */}