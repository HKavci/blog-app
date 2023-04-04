import { Box, Container, Grid, Typography } from "@mui/material";
import { Formik } from "formik";
import BlogForm from "../components/BlogForm";
import useBlogCall from "../hooks/useBlogCall";

const NewBlog = () => {
  const { addNewBlog } = useBlogCall();

  return (
    <Container component="main">
      <Box
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

          <Formik
            initialValues={{
              title: "",
              content: "",
              image: "",
              category: "",
              status: "",
              slug: "",
            }}
            onSubmit={(values, actions) => {
              addNewBlog(values);
              console.log(values);
              actions.setSubmitting(false);
              // actions.resetForm();
            }}
            component={(props) => <BlogForm {...props} />}
          ></Formik>
        </Grid>
      </Box>
    </Container>
  );
};

export default NewBlog;
