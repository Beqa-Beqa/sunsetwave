import { configureStore } from "@reduxjs/toolkit";
import loaderReducer, { LoadReducerStateProps, listenerMiddleware as loaderMiddleware } from "./loaderReducer";

export type RootState = {
    loader: LoadReducerStateProps
}

const store = configureStore({
    reducer: {
        loader: loaderReducer,
    },
    middleware: (getDefaultMiddleware) => (
        getDefaultMiddleware().prepend(loaderMiddleware.middleware)
    )
});

export default store;