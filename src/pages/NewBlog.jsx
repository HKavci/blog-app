import {
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const NewBlog = () => {
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <Container component="main">
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: "1px solid red",
            maxWidth: "400px",
            padding: "2rem",
          }}
        >
          <Typography variant="h6">New Blog</Typography>

          <TextField
            label="Title"
            variant="outlined"
            sx={{ width: "100%", marginTop: "1rem" }}
            required
          />

          <TextField
            label="Image URL"
            variant="outlined"
            maxLength="400"
            sx={{ width: "100%", marginTop: "1rem" }}
            required
          />

          <TextField
            select
            label="Category"
            value={category}
            onChange={handleCategoryChange}
            variant="outlined"
            sx={{ width: "100%", marginTop: "1rem" }}
            required
          >
            <MenuItem value="" style={{ color: "gray" }}>
              Please Choose
            </MenuItem>
            <MenuItem value="safari">Safari</MenuItem>
            <MenuItem value="culturel-tour">Culturel Tour</MenuItem>
            <MenuItem value="nature">Nature</MenuItem>
            <MenuItem value="cities">Cities</MenuItem>
            <MenuItem value="experience">Experience</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </TextField>

          <TextField
            select
            label="Status"
            value={status}
            onChange={handleStatusChange}
            variant="outlined"
            sx={{ width: "100%", marginTop: "1rem" }}
            required
          >
            <MenuItem value="" style={{ color: "gray" }}>
              Please Choose
            </MenuItem>
            <MenuItem value="draft">Draft</MenuItem>
            <MenuItem value="published">Published</MenuItem>
          </TextField>

          <TextField
            label="Content"
            variant="outlined"
            sx={{ width: "100%", marginTop: "1rem" }}
            multiline
            required
          />

          <Button
            type="submit"
            variant="contained"
            sx={{ width: "100%", marginTop: "1rem" }}
          >
            Add New Blog
          </Button>
        </Grid>
      </Box>
    </Container>
  );
};

export default NewBlog;
