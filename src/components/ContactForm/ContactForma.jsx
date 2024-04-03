// /* eslint-disable react/prop-types */
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import css from "./ContactForm.module.css";

// const ContactForm = ({ onAddContact }) => {
//   const initialValues = {
//     name: "",
//     number: "",
//   };

//   const validationSchema = Yup.object().shape({
//     name: Yup.string()
//       .required("Name is required")
//       .min(3, "Too short")
//       .max(50, "Too long"),
//     number: Yup.string()
//       .required("Number is required")
//       .min(3, "Too short")
//       .max(50, "Too long"),
//   });

//   const handleSubmit = (values, { resetForm }) => {
//     const newContact = {
//       id: Math.random().toString(36).substr(2, 9),
//       name: values.name,
//       number: values.number,
//     };
//     onAddContact(newContact);
//     resetForm();
//   };

//     return (
//       <Form className={s.ContactForm}>
//         <label className={s.ContactLabel}>
//           <span className={s.ContactSpanTitle}>Name</span>
//           <Field className={s.ContactFormInput} type="name" name="name" />
//           <ErrorMessage component="p" name="name" />
//         </label>
//         <label className={s.ContactLabel}>
//           <span className={s.ContactSpanTitle}>Number</span>
//           <Field
//             name="number"
//             className={`${s.ContactFormInput} ${s.NumberFormInput}`}
//             component={PhoneNumberInput}
//           />
//           <ErrorMessage
//             className={s.ContactSpanTitle}
//             component="p"
//             name="number"
//           />
//         </label>
//         <button className={s.ContactButton} type="submit">
//           Add contact
//         </button>
//       </Form>
//     </Formik>
//     // <Formik
//     //   initialValues={initialValues}
//     //   validationSchema={validationSchema}
//     //   onSubmit={handleSubmit}
//     // >
//     //   <Form className={css.ContactForm}>
//     //     <div>
//     //       <label htmlFor="name">Name:</label>
//     //       <Field type="text" id="name" name="name" />
//     //       <ErrorMessage name="name" component="div" />
//     //     </div>
//     //     <div>
//     //       <label htmlFor="number">Number:</label>
//     //       <Field type="text" id="number" name="number" />
//     //       <ErrorMessage name="number" component="div" />
//     //     </div>
//     //     <button className={css.ContactBtn} type="submit">
//     //       Add contact
//     //     </button>
//     //   </Form>
//     // </Formik>
//   );
// };

// export default ContactForm;
