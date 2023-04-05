import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myblogs: [],
  blogs: [],
  details: [],
  categories: [],
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
    getBlogsSuccess: (state, { payload }) => {
      state.loading = false;
      state.blogs = payload;
    },
    getMyBlogsSuccess: (state, { payload }) => {
      state.loading = false;
      state.myblogs = payload;
    },
    postNewBlogSuccess: (state, { payload }) => {
      state.loading = false;
      state.myblogs = payload;
    },
  },
});

export const {
  fetchStart,
  getSuccess,
  postNewBlogSuccess,
  getBlogsSuccess,
  getMyBlogsSuccess,
} = blogSlice.actions;

export default blogSlice.reducer;
