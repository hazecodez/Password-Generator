import PropTypes from "prop-types";

const Button = ({ customClassName, text, onClick }) => {
  return (
    <button className={customClassName} onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  customClassName: PropTypes.string,
  text: PropTypes.string.isRequired, // text is required and should be a string
  onClick: PropTypes.func.isRequired, // onClick is required and should be a function
};

Button.defaultProps = {
  customClassName: "", // Default class name if none is provided
};

export default Button;
