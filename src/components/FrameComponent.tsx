import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
  inputCursor?: string;
  icon?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBorder?: CSSProperties["border"];
  propBorder1?: CSSProperties["border"];
  propColor?: CSSProperties["color"];
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  propBackgroundColor,
  propBorder,
  inputCursor,
  propBorder1,
  icon,
  propColor,
}) => {
  const inputContainer2Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const inputField1Style: CSSProperties = useMemo(() => {
    return {
      border: propBorder,
    };
  }, [propBorder]);

  const rectangleDiv2Style: CSSProperties = useMemo(() => {
    return {
      border: propBorder1,
    };
  }, [propBorder1]);

  const value1Style: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className={[styles.inputContainerWrapper, className].join(" ")}>
      <div className={styles.inputContainer} style={inputContainer2Style}>
        <div className={styles.inputField} style={inputField1Style}>
          <div className={styles.inputCursorWrapper}>
            <img
              className={styles.inputCursorIcon}
              loading="lazy"
              alt=""
              src={inputCursor}
            />
          </div>
          <div className={styles.placeholderText}>
            <span>{`Drop your excel sheet here or `}</span>
            <span className={styles.browse}>browse</span>
          </div>
          <div className={styles.inputFieldChild} style={rectangleDiv2Style} />
          <div className={styles.inputFieldItem} />
        </div>
        <button className={styles.sizemdIconleftTypeprima}>
          <img className={styles.icon} alt="" src={icon} />
          <div className={styles.value} style={value1Style}>
            Upload
          </div>
        </button>
      </div>
    </div>
  );
};

export default FrameComponent;
