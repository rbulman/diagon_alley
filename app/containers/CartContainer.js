import {connect} from 'react-redux';
import Cart from 'APP/app/components/Cart'
import { fetchCartItems } from '../reducers/cartItems';

const mapStateToProps = ({cartItems}) => ({cartItems})

const mapDispatchToProps = dispatch => (
	{
		getCartItems(){
			dispatch(fetchCartItems())
		}
	});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);