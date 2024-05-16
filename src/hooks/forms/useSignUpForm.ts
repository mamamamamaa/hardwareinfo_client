import { FormikHelpers, useFormik } from "formik";
import { SignUpFormType } from "../../types.ts";
import * as yup from "yup";
import { AxiosError } from "axios";
import { useAuth } from "../../providers";
import { useStorage } from "../common";
import axiosInstance from "../../utils";

const initialValues: SignUpFormType = {
  email: "",
  username: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = yup.object({
  email: yup.string().email("Invalid email address").required("Required"),
  username: yup
    .string()
    .min(6, "Username must be at least 6 characters")
    .required("Username is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(30, "Password must be at most 30 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

export const useSignUpForm = () => {
  const { setUserToken } = useStorage();
  const { setUser } = useAuth();

  const onSubmit = async (
    { username, email, password }: SignUpFormType,
    { resetForm, setFieldError }: FormikHelpers<SignUpFormType>
  ) => {
    try {
      const { data } = await axiosInstance.post(`${import.meta.env.VITE_API_URL}/sign_up`, {
        username,
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
          else if (error.response.data.message.toLowerCase().includes("username"))
            setFieldError("username", error.response.data.message);
          else setFieldError("email", error.response.data.message);
        }
      }
    }
  };

  const formik = useFormik<SignUpFormType>({
    initialValues,
    validationSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit,
  });

  return formik;
};
