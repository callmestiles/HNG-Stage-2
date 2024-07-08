import "./Timeline.scss";
import PropTypes from "prop-types";

function Timeline({ text }) {
  return (
    <div className="timeline">
      <p className="timeline__text">{text}</p>
      <img
        src="../../../icons/icon-arrow-right-double.svg"
        alt="Icon-right-double"
      />
    </div>
  );
}

Timeline.propTypes = {
  text: PropTypes.string.isRequired
};
export default Timeline;
