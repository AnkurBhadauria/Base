import ThemeSwitch from "./ThemeSwitch";
import PropTypes from "prop-types";
import styles from "./Main.module.css";

const Main = ({ className = "" }) => {
  return (
    <div className={[styles.main, className].join(" ")}>
      <img className={styles.sideRightIcon} alt="" src="/side-right@2x.png" />
      <div className={styles.content}>
        <div className={styles.leftContent}>
          <img
            className={styles.leftContentChild}
            loading="lazy"
            alt=""
            src="/group-200.svg"
          />
        </div>
        <a className={styles.base}>Base</a>
      </div>
      <ThemeSwitch />
    </div>
  );
};

Main.propTypes = {
  className: PropTypes.string,
};

export default Main;
