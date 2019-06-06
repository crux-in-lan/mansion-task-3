import React, {Component} from 'react';
import './css/AdvertisementFrame.scss';
import ListAdvertisements from './conListAdvertisements/ListAdvertisements';

class AdvertisementFrame extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		}
	}
	render() {
		const {par1, par2} = this.props;
		
		return (
			<div className='advertisementframe'>
				<ListAdvertisements/>
			</div>
		)
	}
}

export default AdvertisementFrame;