import {connect} from 'react-redux';
import App from 'APP/app/components/App'
import {logout} from '../reducers/auth'

const mapStateToProps = ({auth}) => ({user: auth})
const mapDispatchToProps = {logout}

export default connect(mapStateToProps, mapDispatchToProps)(App)