import { configureStore } from '@reduxjs/toolkit'
import { combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension'

const reducer = {}
const initialState = {}

const store = configureStore({ reducer }, initialState, composeWithDevTools(applyMiddleware([thunk])))

export default store;