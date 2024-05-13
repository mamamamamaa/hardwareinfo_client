import { FormikHelpers, useFormik } from "formik";
import { SignInFormType } from "../../types.ts";
import * as yup from "yup";
import { useStorage } from "../common";
import { useAuth } from "../../providers";
import axios, { AxiosError } from "axios";

const initialValues: SignInFormType = {
  email: "",
  password: "",
};

const validationSchema = yup.object({
  email: yup.string().email("Invalid email address").required("Required"),
  password: yup.string().required("Password is required"),
});

export const useSignInForm = () => {
  const { setUserToken } = useStorage();
  const { setUser } = useAuth();

  const onSubmit = async (
    { email, password }: SignInFormType,
    { resetForm, setFieldError }: FormikHelpers<SignInFormType>
  ) => {
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/sign_in`, {
        email,
        password,
      });

      setUserToken(data.token);
      setUser(data.user);

      resetForm();
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 409) {
          if (error.response.data.message.toLowerCase().includes("email"))
            setFieldError("email", error.response.data.message);
          else setFieldError("password", error.response.data.message);
        } else if (Number(error.response?.status) >= 500)
          setFieldError("password", "Something went wrong. Please try again later.");
        else setFieldError("password", "Invalid email or password");
      }
    }
  };

  const formik = useFormik<SignInFormType>({
    initialValues,
    validationSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit,
  });

  return formik;
};
