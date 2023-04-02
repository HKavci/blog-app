import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Formik } from "formik";
import RegisterForm, { registerSchemas } from "../components/RegisterForm";
import useAuthCall from "../hooks/useAuthCall";

const theme = createTheme();

export default function Register() {
  const { register } = useAuthCall();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Formik
            initialValues={{
              username: "",
              first_name: "",
              last_name: "",
              email: "",
              image: "",
              bio: "",
              password: "",
              password2: "",
            }}
            validationSchema={registerSchemas}
            onSubmit={(values, actions) => {
              register(values);
              actions.setSubmitting(false);
              actions.resetForm()
            }}
            component={(props) => <RegisterForm {...props} />}
          ></Formik>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
