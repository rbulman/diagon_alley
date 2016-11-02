'use strict';

import { connect } from 'react-redux';
import ItemList from '../components/ItemList'
import {fetchItems} from 'APP/app/reducers/items'
import {fetchSelectedItem} from 'APP/app/reducers/selectedItem'

const mapStateToProps = ({items}) => ({items}); 

const mapDispatchToProps = dispatch => ({
    getItems(){
    	dispatch(fetchItems());
    },

    go(item){
    	dispatch(fetchSelectedItem(item))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemList)