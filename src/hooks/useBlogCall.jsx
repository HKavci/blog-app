import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchStart,
  getMyBlogsSuccess,
  getBlogsSuccess,
  postNewBlogSuccess,
  getOneBlogSuccess,
} from "../features/blogSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

const useBlogCall = () => {
  const dispatch = useDispatch();
  const { token, userId } = useSelector((state) => state.auth);

  const BASE_URL = "http://32240.fullstack.clarusway.com/";

  const getBlogs = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axios(`${BASE_URL}api/blogs`);
      dispatch(getBlogsSuccess(data));
    } catch (error) {
      console.log(error);
      toastErrorNotify("Something went wrong");
    }
  };

  const getMyBlogs = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axios(`${BASE_URL}api/blogs/?author=${userId}`, {
        headers: { Authorization: `Token ${token}` },
      });
      dispatch(getMyBlogsSuccess(data));
    } catch (error) {
      console.log(error);
      toastErrorNotify("Something went wrong");
    }
  };

  const getOneBlog = async (id) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios(`${BASE_URL}api/blogs/${id}`, {
        headers: { Authorization: `Token ${token}` },
      });
      dispatch(getOneBlogSuccess(data));
    } catch (error) {
      console.log(error);
      toastErrorNotify("Something went wrong");
    }
  };

  const addNewBlog = async (info) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(`${BASE_URL}api/blogs/`, info, {
        headers: { Authorization: `Token ${token}` },
      });
      dispatch(postNewBlogSuccess(data));
      toastSuccessNotify("Your blog has been successfully added");
    } catch (error) {
      console.log(error);
      toastErrorNotify("Your blog cannot be added");
    }
  };

  const addLike = async (id) => {
    try {
      await axios.post(`${BASE_URL}api/likes/${id}/`, {}, {
        headers: { Authorization: `Token ${token}` }
      });
      getBlogs();
    } catch (error) {
      console.log(error);
      toastErrorNotify("Like cannot be performed");
    }
  };

  return { getBlogs, getMyBlogs, getOneBlog, addNewBlog, addLike };
};

export default useBlogCall;
