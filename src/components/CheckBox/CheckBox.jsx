import "./CheckBox.scss";
import PropTypes from "prop-types";

function CheckBox({ checked, onChange }) {
  return (
    <input
      type="checkbox"
      className="checkbox"
      checked={checked}
      onChange={onChange}
    />
  );
}

CheckBox.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func
};

export default CheckBox;
