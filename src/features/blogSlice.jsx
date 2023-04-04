import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  content: "",
  image: "",
  category: "",
  status: "",
  loading: false,
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    getSuccess: (state, { payload: { data, url } }) => {
      state.loading = false;
      state[url] = data;
    },
  },
});

export const {fetchStart, getSuccess} = blogSlice.actions;

export default blogSlice.reducer;
