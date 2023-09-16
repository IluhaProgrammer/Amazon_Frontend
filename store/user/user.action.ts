import {createAsyncThunk} from '@reduxjs/toolkit'
import { errorCatch } from '../../api/api.helper'
import { IAuthResponse, IEmailPassword } from './user.interface'
import { AuthService } from '../../services/auth/auth.service'
import { removeTokensStorage } from '../../services/auth/auth.helper'


/* register */ 

export const register = createAsyncThunk<IAuthResponse, IEmailPassword>('auth/register', async (data, thunkApi) => {
    try {
        const response = await AuthService.main('register', data)
        return response
    } catch(e) {
        return thunkApi.rejectWithValue(e)
    }
})


/* login */ 

export const login = createAsyncThunk<IAuthResponse, IEmailPassword>('auth/login', async (data, thunkApi) => {
    try {
        const response = await AuthService.main('login', data)
        return response
    } catch(e) {
        return thunkApi.rejectWithValue(e)
    }
})


/* logout */

export const logout = createAsyncThunk('auth/logout', async () => {
    removeTokensStorage()
})


/* check-auth */

export const checkAuth = createAsyncThunk<IAuthResponse>('auth/check-auth', async (_, thunkApi) => {
    try {
        const response = await AuthService.getNewTokens()
        return response.data 
    } catch(e) {
        if(errorCatch(e) === 'jwt expired') {
            thunkApi.dispatch(logout)
        }

        return thunkApi.rejectWithValue(e)
    }
    
})