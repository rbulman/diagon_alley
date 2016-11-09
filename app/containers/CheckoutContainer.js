import {connect} from 'react-redux';
import Checkout from 'APP/app/components/Checkout'
import {browserHistory} from 'react-router'
import {updateCompleteStatusToServer} from 'APP/app/reducers/cart'

const mapStateToProps = ({cart}) => ({cart})

const mapDispatchToProps = (dispatch) => ({
	confirmOrder() {
		dispatch(updateCompleteStatusToServer())
		browserHistory.push('/confirmation')
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);