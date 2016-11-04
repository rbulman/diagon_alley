'use strict';

import { connect } from 'react-redux';
import Users from '../components/Users'
import {fetchUsers} from 'APP/app/reducers/users'
import {fetchSelectedUser} from 'APP/app/reducers/users'

const mapStateToProps = () => ({}); 

const mapDispatchToProps = dispatch => ({
   
})

export default connect(mapStateToProps, mapDispatchToProps)(Users)