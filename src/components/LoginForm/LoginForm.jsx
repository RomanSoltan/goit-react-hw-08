import { ErrorMessage, Field, Form, Formik } from 'formik';
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

  return (
    <section className={s.formWrapper}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
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
