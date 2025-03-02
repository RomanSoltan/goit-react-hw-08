import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import s from './RegistrationForm.module.css';
import { useDispatch } from 'react-redux';
import { registerThunk } from '../../redux/auth/operations';

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(registerThunk(values));
    options.resetForm();
  };

  const onlyLetters = /^[A-Za-zА-Яа-яЄєІіЇїҐґ-\s]+$/;

  const registrationFormSchema = Yup.object().shape({
    name: Yup.string()
      .matches(onlyLetters, 'Are your parents programmers? Use only letters')
      .min(2, 'Too short')
      .max(50, 'Too long')
      .required('Please, enter your name'),
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
      <h2>Register your account!</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={registrationFormSchema}
      >
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name:</span>
            <Field
              className={s.input}
              type="text"
              name="name"
              placeholder="Enter name"
            />
            <ErrorMessage className={s.error} component="p" name="name" />
          </label>
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
            Register
          </button>
        </Form>
      </Formik>
    </section>
  );
};
export default RegistrationForm;
