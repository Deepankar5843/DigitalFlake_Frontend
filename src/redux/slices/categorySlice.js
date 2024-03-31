import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosClient } from "../utils/axiosClient";

export const getFeedCategoryData = createAsyncThunk(
  "category/getFeedCategoryData",
  async (id) => {
    // Accept id parameter
    try {
      const response = await axiosClient.get(`/category/${id}`);
      console.log("get profile", response);
      return response.data;
    } catch (err) {
      return Promise.reject(err);
    }
  }
);

const categotySlice = createSlice({
  name: "categorySlice",
  initialState: {
    categoryData: {},
  },
  extraReducers: (builder) => {
    builder.addCase(getFeedCategoryData.fulfilled, (state, action) => {
      state.categoryData = action.payload;
    });
  },
});

export default categotySlice.reducer;
