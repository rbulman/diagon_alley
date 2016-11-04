'use strict';

import { connect } from 'react-redux';
import Users from '../components/Users'
import {fetchUsers} from 'APP/app/reducers/users'
import {fetchSelectedUser} from 'APP/app/reducers/users'

const mapStateToProps = ({users}) => ({users}); 

const mapDispatchToProps = dispatch => ({
   getUsers(){
    	dispatch(fetchUsers());
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Users)