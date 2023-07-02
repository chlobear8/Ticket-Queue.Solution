import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "../context/theme-context";

function ReusableForm(props) {

  const theme = useContext(ThemeContext);

  if (!theme) {
    throw new Error("ThemeContext must be used within a ThemeContext.Provider!");
  }
  
  const buttonStyles = {
    backgroundColor: theme.buttonBackground,
    color: theme.textColor
  }

  const inputStyles = {
    backgroundColor: theme.inputBackground,
    color: theme.textColor
  }

  return (
    <React.Fragment>
      <form onSubmit = {props.formSubmissionHandler}>
        <label>Pair Names:
          <br/>
          <input
            style={inputStyles}
            type='text'
            name='names'
            placeholder='Pair Names' />
        </label>
        <br/>
        <label>Location:
          <br/>
          <input
            style={inputStyles}
            type='text'
            name='location'
            placeholder='Location' />
        </label>
        <br/>
        <label>Describe your issue:
          <br/>
          <textarea
            style={inputStyles}
            name='issue'
            placeholder='Describe your issue.' />
        </label>
        <br/>
        <button style={buttonStyles} type='submit'>{props.buttonText}</button>
      </form>
      <hr />
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;