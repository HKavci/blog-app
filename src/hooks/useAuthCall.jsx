import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchFail, fetchStart, registerSuccess } from "../features/authSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import axios from "axios";

const useAuthCall = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const BASE_URL = "http://32240.fullstack.clarusway.com/";

  const register = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(`${BASE_URL}users/register/`, userInfo);
      dispatch(registerSuccess(data));
      toastSuccessNotify("Successfully registered");
    //   navigate("/details"); //details in yanına id bilgisi eklenecek
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Register can not be performed");
      console.log(error);
    }
  };
  return { register };
};

export default useAuthCall;
