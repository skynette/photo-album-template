import { configureStore } from "@reduxjs/toolkit";
import galleryReducer from "./galleryState";

const store = configureStore({
	reducer: {
		gallery: galleryReducer,
	},
});

export default store;