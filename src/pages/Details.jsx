import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  List,
  Modal,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import useBlogCall from "../hooks/useBlogCall";
import { useEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useParams } from "react-router-dom";
import CommentBox from "../components/blog/CommentBox";
import { AddBoxOutlined } from "@mui/icons-material";

const Details = () => {
  const { getOneBlog, addLike, deleteBlog } = useBlogCall();
  const { oneblog } = useSelector((state) => state.blog);
  const { currentUser } = useSelector((state) => state.auth);
  const { id } = useParams();
  const [comment, setComment] = useState(false);
  const [open, setOpen] = useState(false);

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

  const date = new Date(publish_date).toLocaleString().slice(0, 16);

  useEffect(() => {
    getOneBlog(id);
  }, []);

  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: 3 }}>
      <Card sx={{ maxWidth: 600 }}>
        <Typography>
          <CardMedia
            component="img"
            height="400"
            width="600"
            sx={{
              borderBottom: "1px solid gray",
              backgroundImage: `url(${image})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
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
            <Box sx={{ display: "flex", gap: 1 }}>
              <FavoriteIcon
                sx={{
                  cursor: "pointer",
                  color: () => (likes ? "red" : "gray"),
                }}
                onClick={() => {
                  addLike(id);
                  getOneBlog(id);
                }}
              />
              <Typography>{likes}</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 1 }}>
              <InsertCommentIcon
                sx={{ cursor: "pointer" }}
                color="disabled"
                onClick={() => setComment(!comment)}
              />
              <Typography>{comment_count}</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 1 }}>
              <VisibilityIcon color="disabled" />
              <Typography>{post_views}</Typography>
            </Box>
          </List>
          {author === currentUser && (
            <List
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                marginTop: 2,
              }}
            >
              <div>
                <Button
                  variant="contained"
                  color="success"
                  // onClick={() => setOpen(!open)}
                >
                  UPDATE BLOG
                </Button>
              </div>

              <Button
                variant="contained"
                color="error"
                onClick={() => {
                  deleteBlog(id);
                }}
              >
                DELETE BLOG
              </Button>
            </List>
          )}
          <Box>
            {comment === true && <CommentBox comments={comments} id={id} />}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Details;
