import {connect} from 'react-redux';
import Shipping from 'APP/app/components/Shipping'

import {updateDeliveryToServer} from 'APP/app/reducers/cart'


const mapStateToProps = ({cart}) => ({cart});

const mapDispatchToProps = (dispatch) => ({
	updateDelivery (id, delivery) {

		dispatch(updateDeliveryToServer(id, delivery));
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Shipping);