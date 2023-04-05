import { Container } from "@mui/material";
import { useSelector } from "react-redux";
import useBlogCall from "../hooks/useBlogCall";
import { useEffect } from "react";
import MyBlogCards from "../components/blog/MyBlogCards";

const MyBlogs = () => {
  const { myblogs } = useSelector((state) => state.blog);
  const { getMyBlogs } = useBlogCall();

  useEffect(() => {
    getMyBlogs();
  }, []);

  console.log(myblogs);

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
      {myblogs.map((blog) => {
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
        } = blog;
        return (
          <MyBlogCards
            key={id}
            author={author}
            comments={comments}
            content={content}
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

export default MyBlogs;
