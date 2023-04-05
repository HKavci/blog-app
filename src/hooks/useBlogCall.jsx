import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchStart,
  getBlogsSuccess,
  postNewBlogSuccess,
} from "../features/blogSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

const useBlogCall = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  const BASE_URL = "http://32240.fullstack.clarusway.com/";

  const getAllBlogs = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axios(`${BASE_URL}api/blogs`);
      dispatch(getBlogsSuccess(data));
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

  return { getAllBlogs, addNewBlog };
};

export default useBlogCall;
