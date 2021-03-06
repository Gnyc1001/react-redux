"use strict"

import {combineReducers} from 'redux';
//IMPORT Reducers to be combined
import {booksReducers} from './booksReducers';
import {cartReducers} from './cartReducers';
//combine reducers
export default combineReducers({
    books: booksReducers,
    cart: cartReducers
})