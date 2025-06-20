import { createListenerMiddleware, createSlice } from "@reduxjs/toolkit";

export type LoadReducerStateProps = {
	loaderState: "loading" | "loaded";
};

const initialState: LoadReducerStateProps = {
	loaderState: "loaded",
};

export const listenerMiddleware = createListenerMiddleware();

const SLICE_NAME = "loaderReducer";
const SCROLL_DISABLE_CLASSNAME = "scroll-disable";

const loaderReducer = createSlice({
	name: SLICE_NAME,
	initialState,
	reducers: {
		// action prop was omitted
		beginLoading: (state) => {
			state.loaderState = "loading";
		},
		endLoading: (state) => {
			state.loaderState = "loaded";
		},
	},
});

export const { beginLoading, endLoading } = loaderReducer.actions;

listenerMiddleware.startListening({
	actionCreator: beginLoading,
	// Both "action" and "listenerApi" were omitted
	effect: async (_, __) => {
		document.body.classList.add(SCROLL_DISABLE_CLASSNAME);
	},
});

listenerMiddleware.startListening({
	actionCreator: endLoading,
	effect: async (_, __) => {
		document.body.classList.remove(SCROLL_DISABLE_CLASSNAME);
	},
});

export default loaderReducer.reducer;
