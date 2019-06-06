import React, {Component} from 'react';
import './css/LogInBtn.scss';

class LogInBtn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		}
	}
	render() {
		const {par1, par2} = this.props;
		
		return (
			<div class="loginbtn">
				<img src={require('./img/LogInBtn.png')}/>
			</div>
		)
	}
}

export default LogInBtn;