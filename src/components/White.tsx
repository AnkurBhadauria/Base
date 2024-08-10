import PropTypes from "prop-types";
import styles from "./White.module.css";

const White = ({ className = "" }) => {
  return (
    <div className={[styles.white, className].join(" ")}>
      <div className={styles.button} />
    </div>
  );
};

White.propTypes = {
  className: PropTypes.string,
};

export default White;
