'use strict';

import { connect } from 'react-redux';
import Item from '../components/Item'
import {fetchSelectedItem} from 'APP/app/reducers/selectedItem'

const mapStateToProps = ({selectedItem, auth}) => ({selectedItem, auth}); 


export default connect(mapStateToProps)(Item)