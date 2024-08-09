import { FunctionComponent } from "react";
import styles from "./ButtonPrimary.module.css";

export type ButtonPrimaryType = {
  className?: string;
};

const ButtonPrimary: FunctionComponent<ButtonPrimaryType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.buttonPrimary, className].join(" ")}>
      <div className={styles.buttonPrimary1} />
    </div>
  );
};

export default ButtonPrimary;
