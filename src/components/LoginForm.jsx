import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  TextField,
} from "@mui/material";
import { Form } from "formik";
import { object, string } from "yup";

export const loginSchemas = object({
  email: string()
    .email("Geçerli bir e-mail giriniz!")
    .required("E-mail zorunludur!"),
  password: string()
    .required("Password zorunludur!")
    .min(8, "Password en az 8 karakter olmalıdır.")
    .max(20)
    .matches(/\d+/, "Password bir sayı içermelidir.")
    .matches(/[a-z]/, "Password küçük harf içermelidir.")
    .matches(/[A-Z]/, "Password büyük harf içermelidir.")
    .matches(/[!,?{}><%&$#£+-.]/, "Password bir özel karakter içermelidir."),
});

const LoginForm = ({ handleSubmit, touched, errors, values, handleBlur, handleChange }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Box>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
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
          type="password"
          id="password"
          autoComplete="current-password"
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
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
