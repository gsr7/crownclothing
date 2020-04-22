
const INITIAL_STATE = { currentUser: null }

const userReducer = (state = INITIAL_STATE, action) => {

		switch(action.type){
			case 'SET_CURRENT_USER':
				return{
					...state,
					currentUser:action.payload
				}
				default : 
			return state;
         
         }
}

export default userReducer;

{/* A reducer is a function that taks two arguments....
...state - gives all the values of the state and update currentUser      
- user.reducer code has written first  */}