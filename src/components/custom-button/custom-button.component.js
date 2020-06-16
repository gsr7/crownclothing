import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ( {children, isGoogleSignIn,inverted, ...otherProps}) => (
 <button className={ ` ${inverted ? 'inverted' : ''}
 	${ isGoogleSignIn ? 'google-sign-in' : '' } custom-button`}{...otherProps}  >
   
   {children}
 
 </button>


	);

{/* The props in custom button comes from sign-in.component  */}

export default CustomButton;