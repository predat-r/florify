import {createStore} from 'redux'
import rootreducer from './reducers'
import {applyMiddleware} from 'redux-thunk'

const store  = createStore(rootreducer,applyMiddleware(thunk));
export default store;