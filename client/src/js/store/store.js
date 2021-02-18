import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import rootReducer from '../Reducers'

const initState = {};
const middleware = [thunk]

const store = createStore(
    rootReducer,initState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;