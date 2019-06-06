import React, {Component} from 'react';
import './css/ListAdvertisements.scss';
import Advertisement from './conAdvertisement/Advertisement';

class ListAdvertisements extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		}
	}
	render() {
		const {par1, par2} = this.props;
		
		return (
			<div class='listadvertisements'>
				<Advertisement />
				<Advertisement />
				<Advertisement />
			</div>
		)
	}
}

export default ListAdvertisements;