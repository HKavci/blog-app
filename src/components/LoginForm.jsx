import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  TextField,
} from "@mui/material";
import { Form } from "formik";
import { useState } from "react";
import { object, string } from "yup";

export const loginSchemas = object({
  email: string().email().required(),
  password: string()
    .required()
    .min(8)
    .max(20)
    .matches(/\d+/)
    .matches(/[a-z]/)
    .matches(/[A-Z]/)
    .matches(/[!,?{}><%&$#£+-.]/),
});

const LoginForm = ({
  handleSubmit,
  touched,
  errors,
  values,
  handleBlur,
  handleChange,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePasswordVisibility = () => setShowPassword((show) => !show);

  return (
    <Form onSubmit={handleSubmit}>
      <Box>
        <TextField
          autoFocus
          required
          fullWidth
          margin="normal"
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          id="password"
          autoComplete="current-password"
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
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="/register" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Form>
  );
};

export default LoginForm;
