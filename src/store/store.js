import {configureStore} from "@reduxjs/toolkit";
import {CartSlice} from "./slices/CartSlice.jsx";

export const store = configureStore({
    reducer: {
        Cart: CartSlice.reducer,

    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    //     serializableCheck: false
    // })
});