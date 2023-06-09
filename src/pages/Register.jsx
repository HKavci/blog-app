import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Formik } from "formik";
import RegisterForm, { registerSchemas } from "../components/auth/RegisterForm";
import useAuthCall from "../hooks/useAuthCall";

export default function Register() {
  const { register } = useAuthCall();


  return (
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
            actions.resetForm();
          }}
          component={(props) => <RegisterForm {...props} />}
        ></Formik>
      </Box>
    </Container>
  );
}
