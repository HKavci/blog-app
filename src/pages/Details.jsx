import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  List,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import useBlogCall from "../hooks/useBlogCall";
import { useEffect } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useParams } from "react-router-dom";

const Details = () => {
  const { getBlogs, getOneBlog } = useBlogCall();
  const { oneblog } = useSelector((state) => state.blog);
  const {id} = useParams()
  const {
    author,
    comment_count,
    comments,
    content,
    image,
    likes,
    post_views,
    publish_date,
    title,
  } = oneblog;


  const date = new Date(publish_date).toLocaleString();

  useEffect(() => {
    getOneBlog(id);
  }, []);



  return (
    <Box>
      <Card>
        <CardActionArea>
          <Typography>
            <CardMedia
              component="img"
              height="300"
              image={image}
              alt="image"
              sx={{ border: "1px solid black" }}
            />
          </Typography>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                maxHeight: 60,
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {content}
            </Typography>
            <Typography variant="p" sx={{ display: "block", marginTop: 3 }}>
              {date}
            </Typography>
            <Typography mt={3} sx={{ display: "flex" }}>
              <AccountCircleIcon />
              {author}
            </Typography>
            <List
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                marginTop: 2,
              }}
            >
              <Typography>
                <FavoriteIcon />
                <InsertCommentIcon />
                <VisibilityIcon />
              </Typography>
            </List>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default Details;
