import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, List } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import VisibilityIcon from "@mui/icons-material/Visibility";

const MyBlogCards = ({
  author,
  comments,
  content,
  image,
  likes,
  post_views,
  publish_date,
  title,
}) => {
  const date = new Date(publish_date).toLocaleString();

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
            <Typography>
              <FavoriteIcon />
              <InsertCommentIcon />
              <VisibilityIcon />
            </Typography>
            <>
              <Button component="div" variant="contained">
                Details
              </Button>
            </>
          </List>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MyBlogCards;
