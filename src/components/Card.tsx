import PropTypes from "prop-types";
import styles from "./Card.module.css";

const Card = ({ className = "" }) => {
  return (
    <div className={[styles.card, className].join(" ")}>
      <div className={styles.card1} />
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
};

export default Card;
