import { Container } from "@mui/material";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import useBlogCall from "../hooks/useBlogCall";
import BlogCard from "../components/blog/BlogCard";

const Home = () => {
  const { blogs } = useSelector((state) => state.blog);
  const { getBlogs } = useBlogCall();

  useEffect(() => {
    getBlogs();
  }, []);

  return (
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
        const {
          author,
          comments,
          content,
          id,
          image,
          likes,
          post_views,
          publish_date,
          title,
        } = card;
        return (
          <BlogCard
            key={id}
            author={author}
            content={content}
            comments={comments}
            image={image}
            likes={likes}
            post_views={post_views}
            publish_date={publish_date}
            title={title}
          />
        );
      })}
    </Container>
  );
};

export default Home;
