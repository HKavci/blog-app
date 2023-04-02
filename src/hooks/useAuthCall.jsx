import { useDispatch } from "react-redux";

const useAuthCall = () => {
  const dispatch = useDispatch();

  const BASE_URL = "http://32240.fullstack.clarusway.com/";

  const register = async () => {
    dispatch(fetchStart());
    try {
    } catch (error) {}
  };
};

export default useAuthCall;
