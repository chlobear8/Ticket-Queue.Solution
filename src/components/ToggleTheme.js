import React from "react";
import PropTypes from "prop-types";

function ToggleTheme(props) {
  const { toggleTheme } = props;

  return (
    <React.Fragment>
      <button onClick = {toggleTheme}>Toggle Theme</button>
      <hr />
    </React.Fragment>
  );
}

ToggleTheme.propTypes = {
  toggleTheme: PropTypes.func
}

export default ToggleTheme;