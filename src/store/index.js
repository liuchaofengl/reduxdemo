import {createStore,applyMiddleware,compose} from "redux";
import thunk from 'redux-thunk'
import {reducer} from "./reducer.js"
const composeEanher = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
const enhaner = composeEanher(applyMiddleware(thunk))
const store = createStore(reducer,enhaner)
export default store