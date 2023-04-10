import { Box, Container, Grid, Typography } from "@mui/material";
import { Formik } from "formik";
import NewBlogForm from "../components/blog/NewBlogForm";
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
            backgroundColor: "white",
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "10px",
            maxWidth: "400px",
            padding: "2rem",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        >
          <Typography variant="h6" color={"blue"} fontFamily={"cursive"}>
            NEW BLOG
          </Typography>

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
              actions.setSubmitting(false);
              actions.resetForm();
            }}
            component={(props) => <NewBlogForm {...props} />}
          ></Formik>
        </Grid>
      </Box>
    </Container>
  );
};

export default NewBlog;
