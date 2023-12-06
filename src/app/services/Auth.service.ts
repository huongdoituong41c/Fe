import { createAsyncThunk } from '@reduxjs/toolkit';
import Api from './Api.main'
import { ILoginReq, ILoginRes } from '../interfaces/Login.interface';
import { IRegisterReq } from '../interfaces/Register.interface';

const authLogin = createAsyncThunk<ILoginRes, ILoginReq, { rejectValue: string }>(
    'auth/login',
    async (data: ILoginReq, thunkAPI) => {
        try {
            const login = await Api.post(Api.url.authLogin, data);
            return login.data;
        } catch (error) {
            return thunkAPI.rejectWithValue("Failed to login.");
        }
    }
);

const registerUser = createAsyncThunk<string, IRegisterReq, { rejectValue: string }>(
    'auth/register',
    async (data: IRegisterReq, thunkAPI) => {
        try {
            const register = await Api.post(Api.url.register, data);
            return register.data;
        } catch (error) {
            return thunkAPI.rejectWithValue("Failed to login.");
        }
    }
);

export {
    authLogin,
    registerUser
};
