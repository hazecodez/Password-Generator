import React from "react";
import PropTypes from "prop-types";

const PasswordStrengthChecker = ({ password }) => {
  const getStrength = () => {
    if (password.length < 6) {
      return "Very Poor";
    } else if (password.length < 8) {
      return "Poor";
    } else if (password.length < 12) {
      return "Medium";
    } else if (password.length < 16) {
      return "Strong";
    } else {
      return "Very Strong";
    }
  };

  const strength = getStrength();
  if (!strength) return <React.Fragment />;

  return (
    <div className="password-strength">
      {" "}
      Strength : <span style={{ fontWeight: "bold" }}>{strength}</span>{" "}
    </div>
  );
};

PasswordStrengthChecker.propTypes = {
  password: PropTypes.string.isRequired,
};

export default PasswordStrengthChecker;
