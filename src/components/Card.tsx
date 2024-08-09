import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Card.module.css";

export type CardType = {
  className?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
};

const Card: FunctionComponent<CardType> = ({
  className = "",
  propBackgroundColor,
}) => {
  const cardStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div className={[styles.card, className].join(" ")}>
      <div className={styles.card1} style={cardStyle} />
    </div>
  );
};

export default Card;
