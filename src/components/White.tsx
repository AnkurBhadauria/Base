import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./White.module.css";

export type WhiteType = {
  className?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
};

const White: FunctionComponent<WhiteType> = ({
  className = "",
  propBackgroundColor,
}) => {
  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div className={[styles.white, className].join(" ")}>
      <div className={styles.button} style={buttonStyle} />
    </div>
  );
};

export default White;
