import React from "react";

// import PropTypes from "prop-types";

import { Formik } from "formik";

const Form = ({
    divStyle, initialValues, onSubmit, validationSchema, children,
}) => (
  divStyle ? 
  <div className={divStyle}> 
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  </div>
  : 
  <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
  </Formik>
);


export default Form;
