// import React from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';

// const ContactForm = () => {
//   const validationSchema = Yup.object({
//     email: Yup.string()
//       .email('Invalid email address')
//       .required('Email is required'),
//     name: Yup.string()
//       .min(2, 'Minimun 2 characters')
//       .required('Name is required'),
//     message: Yup.string()
//       .min(20, 'Minimun 20 characters')
//       .required('Message is required'),
//   });

//   const formik = useFormik({
//     initialValues: {
//       email: '',
//       name: '',
//       message: '',
//     },
//     validationSchema,
//     onSubmit: (values ,{resetForm}) => {
//       alert('Thank you for submitting the form');
//       // You can handle form submission here
//       resetForm();
//     },
//   });

//   return (
//     <form onSubmit={formik.handleSubmit} className='gap-4 flex flex-col max-w-80 w-60'>
//       {/* Email Input */}
//       <input
//         id="email"
//         name="email"
//         type="email"
//         placeholder='Email Address'
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         value={formik.values.email}
//         className='h-12 p-4 bg-amber-50 rounded-2xl'
//       />
//       {formik.touched.email && formik.errors.email ? (
//         <div className="text-red-500 text-sm">{formik.errors.email}</div>
//       ) : null}

//       {/* Name Input */}
//       <input
//         id="name"
//         name="name"
//         type="text"
//         placeholder='Your Name'
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         value={formik.values.name}
//         className='h-12 p-4 bg-amber-50 rounded-2xl'
//       />
//       {formik.touched.name && formik.errors.name ? (
//         <div className="text-red-500 text-sm">{formik.errors.name}</div>
//       ) : null}

//       {/* Message Textarea */}
//       <textarea
//         id="message"
//         name="message"
//         placeholder='Your Message'
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         value={formik.values.message}
//         className='h-24 p-4 bg-amber-50 rounded-2xl'
//       />
//       {formik.touched.message && formik.errors.message ? (
//         <div className="text-red-500 text-sm">{formik.errors.message}</div>
//       ) : null}

//       <button
//         type="submit"
//         className="bg-gradient-to-r from-pink-800 to-blue-700 text-white font-semibold py-3 px-4 rounded shadow hover:opacity-90 hover:bg-gradient-to-r hover:from-pink-400 hover:to-blue-300"
//       >
//         Send Message
//       </button>
//     </form>
//   );
// };

// export default ContactForm;


import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    name: Yup.string()
      .min(2, 'Minimum 2 characters')
      .required('Name is required'),
    message: Yup.string()
      .min(20, 'Minimum 20 characters')
      .required('Message is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      message: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      alert('Thank you for submitting the form');
    
      resetForm();
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col gap-4 w-full max-w-md px-4 pt-[25px]"
    >

      <input
        id="email"
        name="email"
        type="email"
        placeholder="Email Address"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        className="h-12 p-4 bg-amber-50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {formik.touched.email && formik.errors.email ? (
        <div className="text-red-500 text-sm">{formik.errors.email}</div>
      ) : null}


      <input
        id="name"
        name="name"
        type="text"
        placeholder="Your Name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
        className="h-12 p-4 bg-amber-50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {formik.touched.name && formik.errors.name ? (
        <div className="text-red-500 text-sm">{formik.errors.name}</div>
      ) : null}


      <textarea
        id="message"
        name="message"
        placeholder="Your Message"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.message}
        className="h-32 p-4 bg-amber-50 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {formik.touched.message && formik.errors.message ? (
        <div className="text-red-500 text-sm">{formik.errors.message}</div>
      ) : null}

      <button
        type="submit"
        className="bg-gradient-to-r from-[#E100FF] to-[#7F00FF] text-white font-semibold py-3 px-6 rounded shadow group-hover:from-pink-400 group-hover:to-blue-300 transition"
  >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
