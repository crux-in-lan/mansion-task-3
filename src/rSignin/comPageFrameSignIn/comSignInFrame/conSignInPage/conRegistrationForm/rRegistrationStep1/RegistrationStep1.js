import React, {Component} from 'react';
import './css/RegistrationStep1.scss';

class RegistrationStep1 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		}
	}

	onSignInSubmit = (event) => {

	}

	render() {
		const {onRouteChange} = this.props;

		return (
			<div className="registrationstep1">				
					<span className="login100-form-title">
						Member Login
					</span>

					<div className="wrap-input100">
						<input className="input100" type="text" name="email" placeholder="Email" onChange={this.onEmailChange}/>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

					<div className="wrap-input100">
						<input className="input100" type="password" name="pass" placeholder="Password" onChange={this.onPasswordChange}/>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
					
					<div className="container-login100-form-btn">
						<button className="login100-form-btn" onClick={() => this.onSignInSubmit()}>
							Login
						</button>
					</div>

					<div className="text-center p-t-12">
						<span className="txt1">
							Forgot
						</span>
						<a className="txt2" href="#">
							Username / Password?
						</a>
					</div>

					<div className="text-center p-t-136">
						<a className="txt2" onClick={() => onRouteChange('register')}>
							Create your Account
							<i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
						</a>
					</div>
			</div>
		)
	}
}

export default RegistrationStep1;