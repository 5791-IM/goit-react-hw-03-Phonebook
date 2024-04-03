/* eslint-disable react/prop-types */
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const ContactForm = ({ onAddContact }) => {
  const initialValues = {
    name: "",
    number: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Too short")
      .max(50, "Too long"),
    number: Yup.string()
      .required("Number is required")
      .min(3, "Too short")
      .max(50, "Too long"),
  });

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: Math.random().toString(36).substr(2, 9),
      name: values.name,
      number: values.number,
    };
    onAddContact(newContact);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.ContactForm}>
        <label className={css.ContactLabel}>
          <span className={css.ContactSpanTitle}>Name</span>
          <Field className={css.ContactFormInput} type="text" name="name" />
          <ErrorMessage component="p" name="name" />
        </label>
        <label className={css.ContactLabel}>
          <span className={css.ContactSpanTitle}>Number</span>
          <Field
            name="number"
            className={`${css.ContactFormInput} ${css.NumberFormInput}`}
            type="text"
          />
          <ErrorMessage
            className={css.ContactSpanTitle}
            component="p"
            name="number"
          />
        </label>
        <button className={css.ContactButton} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
