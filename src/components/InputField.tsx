import PropTypes from "prop-types";
import styles from "./InputField.module.css";

const InputField = ({ className = "" }) => {
  return (
    <div className={[styles.inputField, className].join(" ")}>
      <div className={styles.inputField1} />
    </div>
  );
};

InputField.propTypes = {
  className: PropTypes.string,
};

export default InputField;
