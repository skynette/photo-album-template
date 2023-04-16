import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPhotos = createAsyncThunk(
	"gallery/fetchPhotos", async () => {
		const response = await fetch("https://picsum.photos/v2/list?page=2&limit=12");
		const data = await response.json();
		return data;
	});

const initialState = {
	photos: [],
	isLoading: false,
};

const gallerySlice = createSlice({
	name: "gallery",
	initialState,
	reducers: {},
	extraReducers: {
		[fetchPhotos.pending]: (state) => {
			state.isLoading = true;
		},
		[fetchPhotos.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.photos = action.payload;
		},
		[fetchPhotos.rejected]: (state) => {
			state.isLoading = false;
		}
	}
});


export default gallerySlice.reducer;