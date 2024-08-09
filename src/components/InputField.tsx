import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./InputField.module.css";

export type InputFieldType = {
  className?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
};

const InputField: FunctionComponent<InputFieldType> = ({
  className = "",
  propBackgroundColor,
}) => {
  const inputField2Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div className={[styles.inputField, className].join(" ")}>
      <div className={styles.inputField1} style={inputField2Style} />
    </div>
  );
};

export default InputField;
