import React, {Component} from 'react';
import './css/RegistrationForm.scss';
import RegistrationStep1 from './rRegistrationStep1/RegistrationStep1';
import RegistrationStep2 from './rRegistrationStep2/RegistrationStep2';
import RegistrationStep3 from './rRegistrationStep3/RegistrationStep3';
import RegistrationStep4 from './rRegistrationStep4/RegistrationStep4';

class RegistrationForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			route: 'step1'
		}
	}
	render() {
		const {par1, par2} = this.props;
		const {route} = this.state;

		switch(route) {
			case 'step1':
				return (
					<div className='registrationform'>
						<RegistrationStep1/>
					</div>
				)
			break;
			case 'step2':
				return (
					<div className='registrationform'>
						<RegistrationStep2/>
					</div>
				)
			break;
			case 'step3':
				return (
					<div className='registrationform'>
						<RegistrationStep3/>
					</div>
				)
			break;
			case 'step4':
				return (
					<div className='registrationform'>
						<RegistrationStep4/>
					</div>
				)
			break;
		}		
	}
}

export default RegistrationForm;