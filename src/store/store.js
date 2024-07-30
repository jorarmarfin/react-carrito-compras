import {configureStore} from "@reduxjs/toolkit";
import {CounterSlice} from "./slices/CounterSlice.jsx";

export const store = configureStore({
    reducer: {
        counter: CounterSlice.reducer,

    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    //     serializableCheck: false
    // })
});