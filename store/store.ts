import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE} from 'redux-persist'
import { userSlice } from './user/user.silce'
import cartSlice from './cart/cart.slice'
import storage from '../assets/utils/storage'

const persistConfig = {
    key: 'amazon-v2',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userSlice.reducer,
    cart: cartSlice
})

const persistReducers = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistReducers,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE]
            }
        })
})

export const persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof rootReducer>