import {connect} from 'react-redux';
import Checkout from 'APP/app/components/Checkout'
import {browserHistory} from 'react-router'

const mapStateToProps = ({cart}) => ({cart})

const mapDispatchToProps = (dispatch) => ({
	confirmOrder() {
		browserHistory.push('/confirmation')
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);