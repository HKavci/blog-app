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
import { useNavigate } from "react-router-dom";

const useBlogCall = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { token, userId } = useSelector((state) => state.auth);

  const BASE_URL = "http://32240.fullstack.clarusway.com/";

  //----------------------GET--------------------------------

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

  //-----------------------POST / ADD --------------------

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
      await axios.post(
        `${BASE_URL}api/likes/${id}/`,
        {},
        {
          headers: { Authorization: `Token ${token}` },
        }
      );
      getBlogs();
    } catch (error) {
      console.log(error);
      toastErrorNotify("Like cannot be performed");
    }
  };

  const addComment = async (id, comment) => {
    try {
      await axios.post(`${BASE_URL}api/comments/${id}/`, comment, {
        headers: { Authorization: `Token ${token}` },
      });
      toastSuccessNotify("Comment created successfully");
      getOneBlog(id);
    } catch (error) {
      console.log(error);
      toastErrorNotify("Comment cannot be sent");
    }
  };

  //-------------------UPDATE----------------

  const updateBlog = async (id, info) => {
    try {
      await axios.put(`${BASE_URL}api/blogs/${id}/`, info, {
        headers: { Authorization: `Token ${token}` },
      })
      getOneBlog(id)
      toastSuccessNotify("Blog successfully updated")
    } catch (error) {
      console.log(error);
      toastErrorNotify("Error updating blog")
    }
  }

  //-------------------DELETE----------------

  const deleteBlog = async (id) => {
    try {
      await axios.delete(`${BASE_URL}api/blogs/${id}`, {
        headers: { Authorization: `Token ${token}` },
      });
      toastSuccessNotify("Blog deleted successfully");
      getBlogs();
      navigate(-1)
    } catch (error) {
      console.log(error);
      toastErrorNotify("Blog could not be deleted");
    }
  };

  return {
    getBlogs,
    getMyBlogs,
    getOneBlog,
    addNewBlog,
    addLike,
    addComment,
    deleteBlog,
    updateBlog
  };
};

export default useBlogCall;
