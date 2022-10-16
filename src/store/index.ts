import { configureStore } from '@reduxjs/toolkit'
import {Action} from "redux";
import { ThunkAction } from 'redux-thunk';
import { currencyAPI } from '../services/CurrencyService'

export const store = configureStore({
    reducer: {
        [currencyAPI.reducerPath]: currencyAPI.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(currencyAPI.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
    >;
