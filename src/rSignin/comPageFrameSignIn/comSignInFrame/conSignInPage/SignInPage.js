import React, {Component} from 'react';
import './font/font-awesome-4.7.0/css/font-awesome.min.css';
import './css/SignInPage.scss';
import RegistrationForm from './conRegistrationForm/RegistrationForm';

class SignInPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		}
	}

	onEmailChange = (event) => {
		this.setState({email: event.target.value});
	}

	onPasswordChange = (event) => {
		this.setState({password: event.target.value});
	}

	onSignInSubmit = (event) => {
		fetch('http://93.123.94.2:3001/signin',{
			method: 'post',
			headers:{'Content-type':'application/json'},
			body: JSON.stringify(this.state)
		})
		.then(response => response.json())
		.then(result => {
			if(result.data) {
				this.props.updateUser(result.data);
				this.props.onRouteChange('home');	
			} else {
				alert(result.err);
			}		
		})
		.catch(err => {alert(err)});
	}

	render() {
		const {onRouteChange} = this.props;
		return (
				<div className='signin'>			 
					<RegistrationForm/>							 
				</div>										
		)
	}
}

export default SignInPage;