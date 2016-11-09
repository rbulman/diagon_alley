import {connect} from 'react-redux';
import Confirmation from 'APP/app/components/Confirmation'

const mapStateToProps = ({cart}) => ({cart});
const mapDispatchToProps = null;

export default connect(
	mapStateToProps,
	mapDispatchToProps
) (Confirmation)