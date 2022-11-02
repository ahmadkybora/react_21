import React from "react";

const ErrorMessage = ({ error, intl, visible }) => {
  if (!visible || !error) return null;

  return (
    <span className="d-block error">{intl.formatMessage({ id: error })}</span>
  );
}

export default ErrorMessage;
