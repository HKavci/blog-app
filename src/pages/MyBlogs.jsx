import { Container } from "@mui/material";
import { useSelector } from "react-redux";
import useBlogCall from "../hooks/useBlogCall";
import { useEffect } from "react";
import BlogCard from "../components/blog/BlogCard";
import Loader from "../components/Loader";

const MyBlogs = () => {
  const { myblogs, loading } = useSelector((state) => state.blog);
  const { getMyBlogs } = useBlogCall();

  useEffect(() => {
    getMyBlogs();
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
          {myblogs?.map((card) => {
            return <BlogCard card={card} key={card.id} />;
          })}
        </Container>
      )}
    </>
  );
};

export default MyBlogs;
