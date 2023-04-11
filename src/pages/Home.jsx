import { Container } from "@mui/material";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import useBlogCall from "../hooks/useBlogCall";
import BlogCard from "../components/blog/BlogCard";
import Loader from "../components/Loader";

const Home = () => {
  const { blogs, loading } = useSelector((state) => state.blog);
  const { getBlogs } = useBlogCall();

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: 3,
            gap: 3,
          }}
        >
          {blogs?.map((card) => {
            return <BlogCard key={card.id} card={card} />;
          })}
        </Container>
      )}
    </>
  );
};

export default Home;
