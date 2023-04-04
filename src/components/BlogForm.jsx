import { Box, Button, MenuItem, TextField } from "@mui/material";
import { Form } from "formik";

const BlogForm = ({ values, handleChange }) => {
  return (
    <Form>
      <Box>
        <TextField
          type="text"
          label="Title"
          name="title"
          onChange={handleChange}
          value={values.title}
          variant="outlined"
          sx={{ width: "100%", marginTop: "1rem" }}
          required
        />

        <TextField
          type="url"
          label="Image URL"
          name="image"
          onChange={handleChange}
          value={values.image}
          variant="outlined"
          maxLength="400"
          sx={{ width: "100%", marginTop: "1rem" }}
          required
        />

        <TextField
          select
          label="Category"
          name="category"
          value={values.category}
          onChange={handleChange}
          variant="outlined"
          sx={{ width: "100%", marginTop: "1rem" }}
          required
        >
          <MenuItem value="" style={{ color: "gray" }}>
            Please Choose
          </MenuItem>
          <MenuItem value="6">Safari</MenuItem>
          <MenuItem value="5">Cultural Tour</MenuItem>
          <MenuItem value="4">Nature</MenuItem>
          <MenuItem value="3">Cities</MenuItem>
          <MenuItem value="2">Experience</MenuItem>
          <MenuItem value="1">Other</MenuItem>
        </TextField>

        <TextField
          select
          label="Status"
          name="status"
          value={values.status}
          onChange={handleChange}
          variant="outlined"
          sx={{ width: "100%", marginTop: "1rem" }}
          required
        >
          <MenuItem value="" style={{ color: "gray" }}>
            Please Choose
          </MenuItem>
          <MenuItem value="d">Draft</MenuItem>
          <MenuItem value="p">Published</MenuItem>
        </TextField>

        <TextField
          type="text"
          label="Content"
          name="content"
          onChange={handleChange}
          value={values.content}
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
      </Box>
    </Form>
  );
};

export default BlogForm;
