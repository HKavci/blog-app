import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import { useSelector } from "react-redux";

const Profile = () => {
  const { profile } = useSelector((state) => state.auth);
  const { bio, email, first_name, image, last_name, username } = profile;

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card sx={{ maxWidth: 600, border: "3px solid black" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            maxheight="400"
            image={image}
            alt="image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
              {first_name} {last_name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <b>Username:</b> {username}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <b>Email:</b> {email}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <b>Bio:</b> {bio}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default Profile;
