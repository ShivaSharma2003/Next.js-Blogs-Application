import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


const FetchBlogs = createAsyncThunk('blogs/fetchBlogs', async (thunkAPI) => {
    const { data } = await axios.get('url')
    return data
})

const InitialState = {
    loading: false,
    blogs: [],
    error: null,
}

const BlogsSlice = createSlice(
    {
        name: "Blogs",
        initialState: InitialState,
        reducers: {},
        extraReducers: (builder) => {
            builder.addCase(FetchBlogs.fulfilled, (state, action) => {
                state.loading = false,
                    state.blogs.push(...action.payload)
            })
            builder.addCase(FetchBlogs.pending, (state, action) => {
                state.loading = true
            })
            builder.addCase(FetchBlogs.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
        }
    }
)

export default BlogsSlice;