/* eslint-disable prettier/prettier */
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"
import postReducer from "./redux/postSlice"
import { useDispatch } from "react-redux"
import  authReducer from "./redux/authSlice"
import searchReducer from "./redux/searchSlice"
export const store = configureStore({
	reducer: {
		counter: counterReducer,
		post: postReducer,
		auth: authReducer,
		search: searchReducer
	},
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch = () => useDispatch<AppDispatch>()
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>
