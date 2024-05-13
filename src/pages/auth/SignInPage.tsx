import { AuthFormCard, TextFieldWrapper } from "../../components";
import { Button, Stack, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { useSignInForm } from "../../hooks";
import { FormikProvider } from "formik";

export const SignInPage = () => {
  const { palette } = useTheme();
  const formik = useSignInForm();

  return (
    <AuthFormCard title="Sign In">
      <FormikProvider value={formik}>
        <Stack spacing={2}>
          <TextFieldWrapper name="email" label="Email" variant="outlined" fullWidth required />
          <Stack spacing={1}>
            <TextFieldWrapper
              name="password"
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              required
            />
            <Typography variant="body1">
              You don't have an account?{" "}
              <Link
                to="/auth/sign-up"
                style={{ color: palette.primary.dark, textDecoration: "none" }}>
                Sign up
              </Link>
            </Typography>
          </Stack>
        </Stack>

        <Button
          fullWidth
          variant="outlined"
          disabled={!formik.isValid || formik.isSubmitting}
          onClick={() => formik.handleSubmit()}>
          Login
        </Button>
      </FormikProvider>
    </AuthFormCard>
  );
};
