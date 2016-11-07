import {connect} from 'react-redux';
import Cart from 'APP/app/components/Cart'
import { fetchCartItems } from '../reducers/cartItems';
import { fetchCart } from '../reducers/cart';

const mapStateToProps = ({cartItems, cart}) => ({cartItems, cart})

const mapDispatchToProps = dispatch => (
	{
		getCartItems(){
			dispatch(fetchCartItems())
		},

		getCart(){
			dispatch(fetchCart())
		}
	});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);