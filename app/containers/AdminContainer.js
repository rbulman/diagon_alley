'use strict';

import { connect } from 'react-redux';
import Admin from '../components/Admin'


const mapStateToProps = ({auth}) => ({user: auth}); 

const mapDispatchToProps = dispatch => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(Admin)