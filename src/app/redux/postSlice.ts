/* eslint-disable prettier/prettier */
import { createAsyncThunk } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit";
import { IPost } from "../interfaces/postInterface";
import axios from 'axios';
import { apiUrl } from "../../environments/env";

interface Post {
    posts: IPost[],
    feedPosts: IPost[],
    userPosts: IPost[],
    loading: boolean,
    status: any
}

export const fetchPosts = createAsyncThunk<IPost[], void, { rejectValue: string }>(
    "post/fetchPosts",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get(`${apiUrl}/posts?_sort=createAt&_order=desc`)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue("Failed to fetch issues.");
        }
    }
);

export const addPost = createAsyncThunk<IPost, IPost, { rejectValue: string }>(
    "post/addPost",
    async (data, thunkAPI) => {
        try {
            const response = await axios.post(`${apiUrl}/posts`, data)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue("Failed to post issues.");
        }
    }
);

export const updatePost = createAsyncThunk<IPost, any, { rejectValue: string }>(
    "post/updatePost",
    async (args: { id: number; data: IPost }, thunkAPI) => {
        try {
            const response = await axios.put(`${apiUrl}/posts/${args.id}`, args.data)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue("Failed to put issues.");
        }
    }
);

export const deletePost = createAsyncThunk<number, number, { rejectValue: string }>(
    "post/deletePost",
    async (id, thunkAPI) => {
        try {
            await axios.delete(`${apiUrl}/posts/${id}`)
            return id
        } catch (error) {
            return thunkAPI.rejectWithValue("Failed to delete issues.");
        }
    }
)

export const fetchPostsId = createAsyncThunk<IPost[], number, { rejectValue: string }>(
    "post/fetchPostsId",
    async (id, thunkAPI) => {
        try {
            const response = await axios.get(`${apiUrl}/posts?_sort=createAt&_order=desc&user.id=${id}`)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue("Failed to fetch issues.");
        }
    }
)


const initialState: Post = {
    posts: [],
    feedPosts: [],
    userPosts: [],
    loading: false,
    status: null
}

const postsSlice = createSlice({
    name: "posts",
    initialState,
    // Thêm thuộc tính reducers
    reducers: {
        // addPost: (state, action: PayloadAction<IPost>) => {
        //     state.posts.push(action.payload);
        // },
    },
    // Giữ nguyên các reducer cho action async
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state, action) => {
                state.loading = true;
                // state.status = fetchPosts.pending;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.posts = action.payload;
                state.feedPosts = action.payload.filter((post: IPost) => post.typeDisplay !== 'Only me')
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.loading = false;
                // state.error = action.error.message || 'Something went wrong';
                state.status = action.type
            })
            .addCase(fetchPostsId.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(fetchPostsId.fulfilled, (state,action) => {
                state.loading = false;
                state.posts = action.payload;
                state.userPosts = action.payload;
            })
            .addCase(fetchPostsId.rejected, (state, action) => {
                state.loading = false;
                state.status = action.type
            })
            .addCase(addPost.fulfilled, (state, action) => {
                state.loading = false;
                state.posts.unshift(action.payload)
                if (action.payload.typeDisplay !== 'Only me') {
                    state.feedPosts.unshift(action.payload)
                }
                state.userPosts.unshift(action.payload)
                state.status = action.type
            })
            .addCase(deletePost.fulfilled, (state, action) => {
                state.loading = false;
                state.posts = state.posts.filter((post) => post.id !== action.payload)
                state.feedPosts = state.feedPosts.filter((post) => post.id !== action.payload)
                state.status = action.type
            })
            .addCase(updatePost.fulfilled, (state, action) => {
                state.loading = false
                const postData = action.payload
                const postIndex = state.posts.findIndex((post) => post.id === postData.id)
                state.posts[postIndex] = postData
                const feedPostIndex = state.feedPosts.findIndex((post) => post.id === postData.id)

                if (feedPostIndex !== -1) {
                    if (action.payload.typeDisplay !== 'Only me') {
                        state.feedPosts[postIndex] = postData
                    } else {
                        state.feedPosts.splice(feedPostIndex, 1)
                    }
                } else {
                    if (action.payload.typeDisplay !== 'Only me') {
                        state.feedPosts.unshift(action.payload)
                    }
                }
            })
    },
});

export default postsSlice.reducer;
