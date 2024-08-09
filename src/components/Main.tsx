import { FunctionComponent } from "react";
import ThemeSwitch from "./ThemeSwitch";
import styles from "./Main.module.css";

export type MainType = {
  className?: string;
};

const Main: FunctionComponent<MainType> = ({ className = "" }) => {
  return (
    <div className={[styles.main, className].join(" ")}>
      <img className={styles.sideRightIcon} alt="" src="/side-right1@2x.png" />
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
      <ThemeSwitch
        tablerIconSun="/tablericonsun1.svg"
        tablerIconMoon="/tablericonmoon1.svg"
      />
    </div>
  );
};

export default Main;
