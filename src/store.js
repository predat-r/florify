import {createStore} from 'redux'
import {thunk} from 'redux-thunk'
import rootreducer from './reducers'
import {applyMiddleware} from 'redux'

const store  = createStore(rootreducer,applyMiddleware(thunk));
export default store;
