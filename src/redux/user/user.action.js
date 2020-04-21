import {UserActionTypes} from './user.types';


export const setCurrentUser = user => ({
	type: UserActionTypes.SET_CURRENT_USER,
	payload: user
})







{/* actions are functions that return objects 

-  here using actions are replacing the code of setState() in  normal applicaiton 
*/}