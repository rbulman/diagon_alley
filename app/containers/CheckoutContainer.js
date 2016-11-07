import {connect} from 'react-redux';
import Checkout from 'APP/app/components/Checkout'

const mapStateToProps = ({cart}) => ({cart})

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);