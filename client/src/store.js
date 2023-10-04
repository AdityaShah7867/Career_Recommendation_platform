import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import authReducer from './redux/Auth/authSlice'






const store = configureStore({
    reducer: {
        // reducer
        auth: authReducer
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false
    })
})


export default store;