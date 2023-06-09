import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import About from "../pages/About";
import PrivateRouter from "./PrivateRouter";
import Details from "../pages/Details";
import Footer from "../components/Footer";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import NewBlog from "../pages/NewBlog";
import MyBlogs from "../pages/MyBlogs";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="" element={<PrivateRouter />}>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/newblog" element={<NewBlog />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/myblogs" element={<MyBlogs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
