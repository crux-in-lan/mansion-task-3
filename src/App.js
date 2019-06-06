/*libraries and APIs*/
import React, { Component } from 'react';

/*common for the whole application*/
import logo from './logo.svg';
// import './css/util.css';
import './css/App.scss';

/*homepage*/
import PageFrameHome from './rHome/comPageFrameHome/PageFrameHome';

/*signin page*/
import PageFrameSignIn from './rSignin/comPageFrameSignIn/PageFrameSignIn';
import HeaderFrameSignIn from './rSignin/comPageFrameSignIn/conHeaderFrameSignIn/HeaderFrameSignIn';
import SignInFrame from './rSignin/comPageFrameSignIn/comSignInFrame/SignInFrame';
import SignInPage from './rSignin/comPageFrameSignIn/comSignInFrame/conSignInPage/SignInPage';
import AdvertisementFrame from './rSignin/comPageFrameSignIn/comSignInFrame/conAdvertisementFrame/AdvertisementFrame';
import FooterFrameSignIn from './rSignin/comPageFrameSignIn/comFooterFrameSignIn/FooterFrameSignIn';

/*register page*/
// import PageFrameRegister from './rRegister/comPageFrameRegister/PageFrameRegister';
// import RegisterFrame from './rRegister/comPageFrameRegister/comRegisterFrame/RegisterFrame';
// import RegisterPage from './rRegister/comPageFrameRegister/comRegisterFrame/conRegisterPage/RegisterPage';
// import FooterFrameRegister from './rRegister/comPageFrameRegister/comFooterFrameRegister/FooterFrameRegister';
// import FooterRegister from './rRegister/comPageFrameRegister/comFooterFrameRegister/comFooterRegister/FooterRegister';

class App extends Component {
  constructor() {
    super();
    this.state ={
      route: 'signin',
      user: {     
        username: '',
        email: ''
      }
    }
  }

  onRouteChange = (newRoute) => {
    this.setState({route:newRoute});
  }

  updateUser = (userInfo) => {
    this.setState((prevState) => ({user:{...prevState.user,...userInfo}}));
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    const {route} = this.state;
    switch(route) {
      case 'signin':
        return (
          <PageFrameSignIn>
            
            <HeaderFrameSignIn/>                                
            
            <SignInFrame> 
              <SignInPage onRouteChange={this.onRouteChange} updateUser={this.updateUser}/>                           
              <AdvertisementFrame/>
            </SignInFrame>            
            
            <FooterFrameSignIn/>    
            
          </PageFrameSignIn>        
        );
      break;
      case 'home':
        return (
          <PageFrameHome>          
            
          </PageFrameHome>
        );
      break;
      case 'register':
        // return (
        //   <PageFrameRegister>

        //     <RegisterFrame>              
        //       <RegisterPage onRouteChange={this.onRouteChange}/>              
        //     </RegisterFrame>
            
        //     <FooterFrameRegister>
        //       <FooterRegister/>
        //     </FooterFrameRegister>
            
        //   </PageFrameRegister>
        // );
      break;
      default:
        // return (
        //   <PageFrameSignIn>

        //     <SignInFrame>              
        //       <SignInPage onRouteChange={this.onRouteChange} updateUser={this.updateUser}/>  
        //     </SignInFrame>

        //     <FooterFrameSignIn>
        //       <FooterSignIn/>              
        //     </FooterFrameSignIn>

        //   </PageFrameSignIn>
        // );
        break;
    }    
  }
}

export default App;