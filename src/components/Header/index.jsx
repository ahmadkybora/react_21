import React from "react";

import PropTypes from "prop-types";

const Header = ({
  children, styleName, title,
}) => (
  <div class={`container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10 ${styleName}`}>
    {title ? {title} : null}
    {children}
  </div>
  );

Header.defaultProps = {
  styleName: "",
  header: null,
  title: null,
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.node,
  styleName: PropTypes.string,
  title: PropTypes.string,
};

export default Header;
