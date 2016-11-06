import {connect} from 'react-redux';
import Cart from 'APP/app/components/Cart'

const mapStateToProps = ({cartItems}) => ({cartItems})

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Cart);