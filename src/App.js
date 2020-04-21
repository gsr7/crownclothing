import React from 'react';
import HomePage from './pages/homepage/Homepage.component';
import './App.css';
import {Route,Switch,Redirect} from 'react-router-dom';
import ShopPage  from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils.js';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.action';


class App extends React.Component {
 
 unsubscribeFromAuth = null;
  componentDidMount(){
    const {setCurrentUser} = this.props
     this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth){
         const userRef = await createUserProfileDocument(userAuth);
         userRef.onSnapshot( snapShot =>{

          setCurrentUser({
                  id:snapShot.id, 
                  ...snapShot.data() 
                });
           });
          }//if
     
     setCurrentUser(userAuth);

     });
  }//componentDidMount

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

render(){
  return (
    <div>
      <Header/>
    	<Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/signin" 
                render= { ()=>this.props.currentUser ? (
                  <Redirect to="/" />)
                  : ( <SignInAndSignUp />)
                } />

        </Switch>
    </div>
  );
}

}

const mapStateToProps = ({user}) =>({
    currentUser:user.currentUser
})



const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps,mapDispatchToProps )(App);
