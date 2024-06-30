import {configureStore} from '@reduxjs/toolkit'
import userReducer from './features/userSlice'
import locationReducer from './features/locationSlice'
import carReducer from './features/carSlice'
import paymentReducer from './features/paymentSlice'


export const store = configureStore({
    reducer:{
        user:userReducer,
        location:locationReducer,
        car:carReducer,
        payment:paymentReducer
    }
})

export type Rootstate = ReturnType<typeof store.getState>

export type AppDispatch = typeof  store.dispatch