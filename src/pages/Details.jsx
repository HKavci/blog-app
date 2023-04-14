import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  List,
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
import UpdateModal from "../components/blog/UpdateModal";

const Details = () => {
  const { getOneBlog, addLike, deleteBlog } = useBlogCall();
  const { oneblog } = useSelector((state) => state.blog);
  const { currentUser, userId } = useSelector((state) => state.auth);
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
    likes_n,
    post_views,
    publish_date,
    title,
  } = oneblog;

  const date = new Date(publish_date).toLocaleString().slice(0, 16);

  let isLikedByUser = false;
  if (likes_n && likes_n.length > 0) {
    isLikedByUser = likes_n.some((like) => like.user_id === userId);
  }

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
                  color: () => (isLikedByUser && likes ? "red" : "gray"),
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

          <UpdateModal open={open} handleClose={handleClose} id={id} />

          {author === currentUser && (
            <List
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                marginTop: 2,
              }}
            >
              <Button variant="contained" color="success" onClick={handleOpen}>
                UPDATE BLOG
              </Button>

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
