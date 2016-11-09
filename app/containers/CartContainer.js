import {connect} from 'react-redux';
import Cart from 'APP/app/components/Cart'
import { fetchCartItems } from '../reducers/cartItems';
import { fetchCart } from '../reducers/cart';
import { whoami } from '../reducers/auth';

const mapStateToProps = ({cartItems, cart}) => ({cartItems, cart})

const mapDispatchToProps = dispatch => (
	{
		getCartItems(){
			dispatch(fetchCartItems())
		},

		getCart(){
			dispatch(fetchCart())
		},

		getAuth(){
			dispatch(whoami())
		}
	});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);