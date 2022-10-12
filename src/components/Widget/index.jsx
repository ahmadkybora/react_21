import React from "react";

import PropTypes from "prop-types";

const Widget = ({
  children, header, styleName, title,
}) => (
  <div class={`container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10 ${styleName}`}>
    {header ? <CardHeader tag="h6">{header}</CardHeader> : null}
    {title ? <CardTitle>{title}</CardTitle> : null}
    {children}
  </div>
  );

Widget.defaultProps = {
  styleName: "",
  header: null,
  title: null,
};

Widget.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.node,
  styleName: PropTypes.string,
  title: PropTypes.string,
};

export default Widget;