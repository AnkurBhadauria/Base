import { FunctionComponent } from "react";
import styles from "./Popover.module.css";

export type PopoverType = {
  className?: string;
  onClose?: () => void;
};

const Popover: FunctionComponent<PopoverType> = ({
  className = "",
  onClose,
}) => {
  return (
    <div className={[styles.popover, className].join(" ")}>
      <div className={styles.menuItem}>
        <div className={styles.title}>Tag 1</div>
      </div>
      <div className={styles.menuItem1}>
        <div className={styles.title}>Tag 2</div>
        <div className={styles.radioButton} />
      </div>
      <div className={styles.menuItem2}>
        <div className={styles.title}>Tag 3</div>
      </div>
      <div className={styles.menuItem2}>
        <div className={styles.title}>Tag 4</div>
      </div>
      <div className={styles.menuItem2}>
        <div className={styles.title}>Tag 5</div>
      </div>
      <div className={styles.menuItem5}>
        <div className={styles.title5}>Tag 6</div>
      </div>
      <div className={styles.menuItem5}>
        <div className={styles.title5}>Tag 7</div>
      </div>
      <div className={styles.menuItem5}>
        <div className={styles.title5}>Tag 8</div>
      </div>
      <div className={styles.menuItem5}>
        <div className={styles.title5}>Tag 9</div>
      </div>
      <div className={styles.menuItem5}>
        <div className={styles.title5}>Tag 10</div>
      </div>
      <div className={styles.menuItem10}>
        <div className={styles.title5}>Single line item</div>
        <div className={styles.radioButton1}>
          <div className={styles.circle} />
        </div>
      </div>
    </div>
  );
};

export default Popover;
