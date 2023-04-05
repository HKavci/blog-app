import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const BlogCard = ({
  author,
  content,
  image,
  likes,
  post_views,
  publish_date,
  title,
}) => {
  const date = new Date(publish_date).toLocaleString();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={image} alt="image" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
          <Typography variant="p">{date}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BlogCard;
