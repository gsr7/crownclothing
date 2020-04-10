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
		
 { /* This <FormInput comes from form-input component when we click these changes will go as props to form-input.component */ }
	
		
		<FormInput 
		name='password' 
		type='password' 
		value={this.state.password}  
		label='password'
		handleChange={this.handleChange} 
		required
		/>
		
		{/* belowattributes passed as props to custom-button.component*/}


		<div className='buttons'>
		<CustomButton type='submit' > Sign In  </CustomButton>
		<CustomButton onClick={signInWithGoogle} isGoogleSignIn> 
		     Sign In with Google 
		</CustomButton>
		
		</div>
	
	</form>
	</div>
 		)
 }

}//class

export default SignIn;