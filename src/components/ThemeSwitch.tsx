import { useCallback } from "react";
import PropTypes from "prop-types";
import styles from "./ThemeSwitch.module.css";

const ThemeSwitch = ({ className = "" }) => {
  const onThemeSwitchContainerClick = useCallback(() => {
    // Please sync "Upload" to the project
  }, []);

  return (
    <div
      className={[styles.themeSwitch, className].join(" ")}
      onClick={onThemeSwitchContainerClick}
    >
      <div className={styles.themeIcons}>
        <img
          className={styles.tablerIconSun}
          loading="lazy"
          alt=""
          src="/tablericonsun.svg"
        />
      </div>
      <div className={styles.themeIcons1}>
        <img
          className={styles.tablerIconSun}
          loading="lazy"
          alt=""
          src="/tablericonmoon.svg"
        />
      </div>
    </div>
  );
};

ThemeSwitch.propTypes = {
  className: PropTypes.string,
};

export default ThemeSwitch;
