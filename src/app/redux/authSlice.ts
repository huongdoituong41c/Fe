/* eslint-disable prettier/prettier */
import { createSlice } from "@reduxjs/toolkit";
import { authLogin, registerUser } from "../services/Auth.service";
import { ILoginRes } from "../interfaces/Login.interface";
import { ROLE } from "../constants/role";

interface IResult {
    LoginInfo: ILoginRes,
    messageRegister: string
}

const initialState: IResult = {
    LoginInfo: {
        id: 0,
        firstName: '',
        lastName: '',
        email: '',
        role: ROLE.USER
    },
    messageRegister: ''
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.LoginInfo = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(authLogin.fulfilled, (state, action) => {
                state.LoginInfo = action.payload;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.messageRegister = action.payload;
            })
    }
});

export const { login } = authSlice.actions;
export default authSlice.reducer;
