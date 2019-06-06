import React, {Component} from 'react';
import './css/HeaderFrameSignIn.scss';
import Header from './conHeader/Header';
import LogInBtn from './conLogInBtn/LogInBtn';

class HeaderFrameSignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
	
		}
	}
	render() {
		const {par1, par2} = this.props;
		
		return (
			<div className='headerframesignin'>
				<Header/>
				<LogInBtn/>
			</div>
		)
	}
}

export default HeaderFrameSignIn;