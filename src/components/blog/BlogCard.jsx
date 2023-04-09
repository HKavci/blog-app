import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, List } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link } from "react-router-dom";
import useBlogCall from "../../hooks/useBlogCall";

const BlogCard = ({ card }) => {
  const { addLike } = useBlogCall();
  const {
    author,
    comment_count,
    content,
    id,
    image,
    likes,
    post_views,
    publish_date,
    title,
  } = card;
  const date = new Date(publish_date).toLocaleString().slice(0, 16);

  return (
    <Card sx={{ width: 300, height: 570 }}>
      <Typography>
        <CardMedia
          component="img"
          height="300"
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
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "1",
            WebkitBoxOrient: "vertical",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            height: 60,
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "3",
            WebkitBoxOrient: "vertical",
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
            marginTop: 1,
          }}
        >
          <Box sx={{ display: "flex", gap: 1 }}>
            <FavoriteIcon
              sx={{ cursor: "pointer", color: () => (likes ? "red" : "gray") }}
              onClick={() => addLike(id)}
            />
            <Typography>{likes}</Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            <InsertCommentIcon color="disabled" />
            <Typography>{comment_count}</Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            <VisibilityIcon color="disabled" />
            <Typography>{post_views}</Typography>
          </Box>

          <Link to={`/details/${id}`}>
            <Button component="div" variant="contained">
              Details
            </Button>
          </Link>
        </List>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
