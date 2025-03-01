import { ErrorMessage, Field, Form, Formik } from 'formik';
import s from './ContactForm.module.css';
import { useId } from 'react';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

const ContactForm = () => {
  const initialValues = {
    name: '',
    number: '',
  };

  const dispatch = useDispatch();

  const onlyLetters = /^[A-Za-zА-Яа-яЄєІіЇїҐґ-\s]+$/;
  const PatternPhone = /^(\d{3}-\d{2}-\d{2}|\d{7})$/;

  const nameFieldId = useId();
  const numberFieldId = useId();

  const contactFormSchema = Yup.object().shape({
    name: Yup.string()
      .matches(onlyLetters, 'Are your parents programmers? Use only letters')
      .min(3, 'Too short')
      .max(50, 'Too long')
      .required('Write something'),
    number: Yup.string()
      .required('Write something')
      .matches(
        PatternPhone,
        'You are definitely learning JS. Number format ХХХ-ХХ-ХХ',
      ),
  });

  const handleSubmit = (values, options) => {
    const newContact = {
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(newContact));
    options.resetForm();
  };

  return (
    <section className={s.formWrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={contactFormSchema}
      >
        <Form className={s.form}>
          <label className={s.label} htmlFor={nameFieldId}>
            Name
          </label>
          <Field
            className={s.input}
            type="text"
            name="name"
            id={nameFieldId}
            placeholder="Enter name"
          />
          <ErrorMessage className={s.error} component="p" name="name" />

          <label className={s.label} htmlFor={numberFieldId}>
            Number
          </label>
          <Field
            className={s.input}
            type="phone"
            name="number"
            id={numberFieldId}
            placeholder="ХХХ-ХХ-ХХ"
          />
          <ErrorMessage className={s.error} component="p" name="number" />

          <button className={s.btn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </section>
  );
};
export default ContactForm;
