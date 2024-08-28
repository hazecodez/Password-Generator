import PropTypes from "prop-types";

const CheckBoxes = ({ checkboxData, handleChange }) => {
  return (
    <div className="checkboxes">
      {checkboxData.map((data, i) => (
        <div key={i}>
          <input
            type="checkbox"
            onChange={() => handleChange(i)}
            checked={data.state}
          />
          <label>{data.title}</label>
        </div>
      ))}
    </div>
  );
};

CheckBoxes.propTypes = {
  checkboxData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired, // title should be a string and is required
      state: PropTypes.bool.isRequired, // state should be a boolean and is required
    })
  ).isRequired,
  handleChange: PropTypes.func.isRequired, // handleChange should be a function and is required
};

export default CheckBoxes;
