import {createStore} from'redux';
import { reducer } from './reducer';
import {composeWithDevTools} from 'redux-devtools-extension'

export const initialState = {
    cart: [],
   products:[]
  };

  export const store=createStore(reducer,initialState,composeWithDevTools())