import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, List } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link, useNavigate } from "react-router-dom";
import useBlogCall from "../../hooks/useBlogCall";

const BlogCard = ({
  author,
  comments,
  content,
  image,
  id,
  likes,
  post_views,
  publish_date,
  title,
}) => {
  const { addLike } = useBlogCall();
  const navigate = useNavigate();
  const date = new Date(publish_date).toLocaleString();

  // console.log(id);

  return (
    <Card sx={{ width: 300, height: 570 }}>
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
            sx={{ maxHeight: 60, overflow: "hidden", textOverflow: "ellipsis" }}
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
                sx={{ color: () => (likes ? "red" : "gray") }}
                onClick={() => addLike(id)}
              />
              <Typography>{likes}</Typography>
            </Box>
            <Box>
              <InsertCommentIcon color="disabled" />
            </Box>
            <Box>
              <VisibilityIcon color="disabled" />
            </Box>

            <Link to={`/details/${id}`}>
              <Button component="div" variant="contained">
                Details
              </Button>
            </Link>
          </List>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BlogCard;
