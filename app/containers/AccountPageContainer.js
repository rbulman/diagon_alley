'use strict';

import { connect } from 'react-redux';
import AccountPage from '../components/AccountPage'

import {fetchSelectedItem} from 'APP/app/reducers/selectedItem'

const mapStateToProps = ({items}) => ({items}); 

const mapDispatchToProps = dispatch => ({
    getItems(){
    	dispatch(fetchItems());
    },

})

export default connect(mapStateToProps, mapDispatchToProps)(ItemList)