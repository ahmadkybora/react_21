import React from "react";

// import PropTypes from "prop-types";

import { Formik } from "formik";

const Form = ({
    initialValues, onSubmit, validationSchema, children,
}) => (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
);

// Header.defaultProps = {
//   styleName: "",
//   header: null,
//   title: null,
// };

// Header.propTypes = {
//   children: PropTypes.node.isRequired,
//   header: PropTypes.node,
//   styleName: PropTypes.string,
//   title: PropTypes.string,
// };

export default Form;
