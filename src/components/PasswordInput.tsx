import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./PasswordInput.module.css";

export type PasswordInputType = {
  className?: string;

  /** Style props */
  propColor?: CSSProperties["color"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBackgroundColor1?: CSSProperties["backgroundColor"];
  propColor1?: CSSProperties["color"];
};

const PasswordInput: FunctionComponent<PasswordInputType> = ({
  className = "",
  propColor,
  propBackgroundColor,
  propBackgroundColor1,
  propColor1,
}) => {
  const passwordStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const passwordFieldStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const inputStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const bStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  return (
    <div className={[styles.passwordInput, className].join(" ")}>
      <b className={styles.password} style={passwordStyle}>
        Password
      </b>
      <div className={styles.passwordField} style={passwordFieldStyle}>
        <div className={styles.input} style={inputStyle} />
        <div className={styles.passwordValue}>
          <b className={styles.b} style={bStyle}>
            ••••••••
          </b>
          <div className={styles.separatorWrapper}>
            <div className={styles.separator} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordInput;
