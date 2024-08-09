import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ThemeSwitch.module.css";

export type ThemeSwitchType = {
  className?: string;
  tablerIconSun?: string;
  tablerIconMoon?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBoxShadow?: CSSProperties["boxShadow"];
  propBackgroundColor1?: CSSProperties["backgroundColor"];
  propBoxShadow1?: CSSProperties["boxShadow"];
  propBackgroundColor2?: CSSProperties["backgroundColor"];
};

const ThemeSwitch: FunctionComponent<ThemeSwitchType> = ({
  className = "",
  propBackgroundColor,
  propBoxShadow,
  propBackgroundColor1,
  tablerIconSun,
  propBoxShadow1,
  propBackgroundColor2,
  tablerIconMoon,
}) => {
  const themeSwitchStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const iconStyle: CSSProperties = useMemo(() => {
    return {
      boxShadow: propBoxShadow,
      backgroundColor: propBackgroundColor1,
    };
  }, [propBoxShadow, propBackgroundColor1]);

  const icon1Style: CSSProperties = useMemo(() => {
    return {
      boxShadow: propBoxShadow1,
      backgroundColor: propBackgroundColor2,
    };
  }, [propBoxShadow1, propBackgroundColor2]);

  const navigate = useNavigate();

  const onThemeSwitchContainerClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div
      className={[styles.themeSwitch, className].join(" ")}
      onClick={onThemeSwitchContainerClick}
      style={themeSwitchStyle}
    >
      <div className={styles.icon} style={iconStyle}>
        <img
          className={styles.tablerIconSun}
          loading="lazy"
          alt=""
          src={tablerIconSun}
        />
      </div>
      <div className={styles.icon1} style={icon1Style}>
        <img
          className={styles.tablerIconSun}
          loading="lazy"
          alt=""
          src={tablerIconMoon}
        />
      </div>
    </div>
  );
};

export default ThemeSwitch;
