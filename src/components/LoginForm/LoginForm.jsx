import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import s from './LoginForm.module.css';

const LoginForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values, options) => {
    console.log(values);
    options.resetForm();
  };

  const loginFormSchema = Yup.object().shape({
    email: Yup.string()
      .email('Must be a valid email!')
      .required('Please, enter your email'),
    password: Yup.string()
      .min(8, 'Password must be 8 characters long')
      .matches(/[0-9]/, 'Password must contain one number')
      .matches(/[a-z]/, 'Password must contain one lowercase letter')
      .matches(/[A-Z]/, 'Password must contain one uppercase letter')
      .matches(/[^\w]/, 'Password must contain one special character')
      .required('Please, enter your password'),
  });

  return (
    <section className={s.formWrapper}>
      <h2>Log In your account</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={loginFormSchema}
      >
        <Form className={s.form}>
          <label className={s.label}>
            <span>Email:</span>
            <Field
              className={s.input}
              type="email"
              name="email"
              placeholder="Enter email"
            />
            <ErrorMessage className={s.error} component="p" name="email" />
          </label>
          <label className={s.label}>
            <span>Password:</span>
            <Field
              className={s.input}
              type="password"
              name="password"
              placeholder="Enter password"
            />
            <ErrorMessage className={s.error} component="p" name="password" />
          </label>
          <button className={s.btn} type="submit">
            Log In
          </button>
        </Form>
      </Formik>
    </section>
  );
};
export default LoginForm;
