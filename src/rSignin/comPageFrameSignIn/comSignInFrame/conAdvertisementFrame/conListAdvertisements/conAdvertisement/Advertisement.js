import React, {Component} from 'react';
import './css/Advertisement.scss';

class Advertisement extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		}
	}
	render() {
		const {par1, par2} = this.props;
		
		return (
			<div class="advertisement">
				<img src={require('./img/batman_1.png')}/>
			</div>
		)
	}
}

export default Advertisement;