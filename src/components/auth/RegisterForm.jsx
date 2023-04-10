import {
  Box,
  Button,
  Grid,
  InputAdornment,
  Link,
  TextField,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { object, string } from "yup";
import { useState } from "react";

export const registerSchemas = object({
  first_name: string().max(20).required(),
  last_name: string().max(20).required(),
  email: string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: string()
    .required()
    .min(8)
    .max(20)
    .matches(/\d+/)
    .matches(/[a-z]/)
    .matches(/[A-Z]/)
    .matches(/[!,?{}><%&$#£+-.]/),
  password2: string()
    .required()
    .min(8)
    .max(20)
    .matches(/\d+/)
    .matches(/[a-z]/)
    .matches(/[A-Z]/)
    .matches(/[!,?{}><%&$#£+-.]/),
});

const RegisterForm = ({
  handleSubmit,
  touched,
  errors,
  values,
  handleBlur,
  handleChange,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePasswordVisibility = () => setShowPassword((show) => !show);

  const [showPassword2, setShowPassword2] = useState(false);
  const handleTogglePasswordVisibility2 = () =>
    setShowPassword2((show) => !show);

  const defaultImage = "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
  const defaultBio = "User"

  return (
    <>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoFocus
              fullWidth
              name="first_name"
              id="first_name"
              label="First Name"
              onChange={handleChange}
              value={values.first_name}
              onBlur={handleBlur}
              helperText={touched.first_name && errors.first_name}
              error={touched.first_name && Boolean(errors.first_name)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="last_name"
              label="Last Name"
              name="last_name"
              onChange={handleChange}
              value={values.last_name}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="username"
              type="text"
              fullWidth
              id="username"
              label="User Name"
              onChange={handleChange}
              value={values.username}
              error={touched.username && Boolean(errors.username)}
              helperText={touched.username && errors.username}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type="email"
              id="email"
              label="Email Address"
              name="email"
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type="url"
              id="image"
              label="Image"
              name="image"
              onChange={handleChange}
              defaultValue={values.image || defaultImage || ""}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type="text"
              id="bio"
              label="Bio"
              name="bio"
              onChange={handleChange}
              defaultValue={values.bio || defaultBio || ""}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              id="password"
              onChange={handleChange}
              value={values.password}
              onBlur={handleBlur}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleTogglePasswordVisibility}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="password2"
              label="Confirm Password"
              type={showPassword2 ? "text" : "password"}
              id="password2"
              onChange={handleChange}
              value={values.password2}
              onBlur={handleBlur}
              error={touched.password2 && Boolean(errors.password2)}
              helperText={touched.password2 && errors.password2}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleTogglePasswordVisibility2}
                      edge="end"
                    >
                      {showPassword2 ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
        <Button
          fullWidth
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign Up
        </Button>
        <Grid container justifyContent="center">
          <Grid item>
            <Link href="/login" variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default RegisterForm;
