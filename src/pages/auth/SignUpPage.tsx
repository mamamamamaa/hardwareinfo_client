import { Button, Stack, Typography, useTheme } from "@mui/material";
import { AuthFormCard, TextFieldWrapper } from "../../components";
import { Link } from "react-router-dom";
import { useSignUpForm } from "../../hooks";
import { FormikProvider } from "formik";

export const SignUpPage = () => {
  const { palette } = useTheme();
  const formik = useSignUpForm();

  return (
    <AuthFormCard title="Sign Up">
      <FormikProvider value={formik}>
        <Stack spacing={2}>
          <TextFieldWrapper
            name="email"
            label="Email"
            type="email"
            required
            variant="outlined"
            fullWidth
          />
          <TextFieldWrapper
            name="username"
            label="Username"
            required
            variant="outlined"
            fullWidth
          />
          <TextFieldWrapper
            name="password"
            label="Password"
            required
            type="password"
            variant="outlined"
            fullWidth
          />
          <Stack spacing={1}>
            <TextFieldWrapper
              name="confirmPassword"
              label="Confirm Password"
              required
              type="password"
              variant="outlined"
              fullWidth
            />
            <Typography variant="body1">
              Already have an account?{" "}
              <Link
                to="/auth/sign-in"
                style={{ color: palette.primary.dark, textDecoration: "none" }}>
                Sign In
              </Link>
            </Typography>
          </Stack>
        </Stack>

        <Button
          fullWidth
          variant="outlined"
          disabled={!formik.isValid || formik.isSubmitting}
          onClick={() => formik.handleSubmit()}>
          Register
        </Button>
      </FormikProvider>
    </AuthFormCard>
  );
};
