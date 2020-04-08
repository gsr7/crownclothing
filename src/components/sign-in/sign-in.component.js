import React from 'react';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss'
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle} from '../../firebase/firebase.utils';


class SignIn extends React.Component {

   constructor(){
   	super();
   	this.state={
   		email: '',
   		password:''

   	}
   }

handleSubmit= event => {
	event.preventDefault();
	this.setState({email:'', password:'' })
}

handleChange= event => {
	const {value, name}= event.target;
	this.setState({[name]: value})
}

 render(){
 	return(

 		<div className='sign-in'>
 		  <h2> I already have an account </h2>
 		  <span> Sign in with your email and Password </span>

	<form onSubmit={this.handleSubmit}>
	    <FormInput 
	    name='email' 
		type='email' 
		value={this.state.email} 
		label='email'
		handleChange={this.handleChange} 
		required 
		/>
		
		
		
		<FormInput 
		name='password' 
		type='password' 
		value={this.state.password}  
		label='password'
		handleChange={this.handleChange} 
		required
		/>
		
		
		
		<CustomButton type='submit' > Sign In  </CustomButton>
		<CustomButton onClick={signInWithGoogle} > Sign In with Google </CustomButton>
	</form>
	</div>
 		)
 }

}//class

export default SignIn;