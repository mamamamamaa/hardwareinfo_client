import { TextField, TextFieldProps } from "@mui/material";
import { getIn, useFormikContext } from "formik";

type Props<T> = Omit<TextFieldProps, "name"> & {
  name: Extract<keyof T, string>;
};

export const TextFieldWrapper = <T,>({ name, ...otherProps }: Props<T>) => {
  const formik = useFormikContext<T>();

  const value = getIn(formik.values, name);
  const error = getIn(formik.errors, name);
  const touched = getIn(formik.touched, name);

  return (
    <TextField
      name={name}
      onBlur={formik.handleBlur}
      onChange={formik.handleChange}
      value={value}
      error={touched && Boolean(error)}
      helperText={touched && error && String(error)}
      {...otherProps}
    />
  );
};
