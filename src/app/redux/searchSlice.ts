/* eslint-disable prettier/prettier */
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { IUser } from "../interfaces/postInterface"
import axios from "axios"

interface ISearchUser {
    users: IUser[]
    filteredUsers: IUser[],
    loading: string,
    error: any
}

const initialState: ISearchUser = {
    users: [],
    filteredUsers: [],
    loading: 'idle',
    error: null
}

export const fetchUsers = createAsyncThunk<IUser[], void, { rejectValue: string }>(
    'users/fetchUsers',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("http://localhost:5000/logins")
            const users: IUser[] = []
            response.data.forEach((user: IUser) => {
                const _userConvert: IUser = {
                    id: user.id,
                    username: user.username,
                    avatar: user.avatar
                }
                users.push(_userConvert)
            });
            return users
        } catch (error) {
            return thunkAPI.rejectWithValue("Failed to fetch issues.");
        }
    }
)

const searchSlice = createSlice({
    name: "search",
    initialState,
    // Thêm thuộc tính reducers
    reducers: {
        filterUsers: (state, action) => {
            const keyword = action.payload.text.toLowerCase()
            const userLogin = action.payload.userId
            if (keyword && userLogin) {
                state.filteredUsers = state.users.filter((user: IUser) => user.username.toLowerCase().includes(keyword) && user.id !== userLogin)
            } else {
                state.filteredUsers = []
            }
        },
    },
    // Giữ nguyên các reducer cho action async
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = 'pending'
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = 'success'
                state.users = action.payload
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = 'error'
                state.error = action.error.message
            })
    },
});

export const { filterUsers } = searchSlice.actions
export default searchSlice.reducer;
