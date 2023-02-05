import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import BlogsReducer from 'Slices/FetchBlogsSlice'

const reducer = combineReducers({
    FetchedBlogs: BlogsReducer,

})
const store = configureStore({ reducer })

export default store;