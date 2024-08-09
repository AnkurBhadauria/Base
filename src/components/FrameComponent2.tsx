import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;
  vector?: string;
  placeholderTop?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propWidth?: CSSProperties["width"];
  propColor?: CSSProperties["color"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBorder?: CSSProperties["border"];
  propBorder1?: CSSProperties["border"];
  propColor1?: CSSProperties["color"];
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
  propFlex,
  propWidth,
  propColor,
  vector,
  propBackgroundColor,
  propBorder,
  placeholderTop,
  propBorder1,
  propColor1,
}) => {
  const frameSectionStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      width: propWidth,
    };
  }, [propFlex, propWidth]);

  const uploadCSVStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const inputContainerStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const inputFieldsStyle: CSSProperties = useMemo(() => {
    return {
      border: propBorder,
    };
  }, [propBorder]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      border: propBorder1,
    };
  }, [propBorder1]);

  const placeholderTextStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const navigate = useNavigate();

  const onSizemdIconLeftTypePrimaClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <section
      className={[styles.uploadContentWrapper, className].join(" ")}
      style={frameSectionStyle}
    >
      <div className={styles.uploadContent}>
        <div className={styles.uploadInner}>
          <a className={styles.uploadCsv} style={uploadCSVStyle}>
            Upload CSV
          </a>
          <div className={styles.white}>
            <div className={styles.button} />
          </div>
          <div className={styles.uploadButton}>
            <div className={styles.uploadButtonIcon}>
              <img
                className={styles.vectorIcon}
                loading="lazy"
                alt=""
                src={vector}
              />
            </div>
            <img
              className={styles.maskGroupIcon}
              loading="lazy"
              alt=""
              src="/mask-group@2x.png"
            />
          </div>
        </div>
        <div className={styles.inputContainerWrapper}>
          <div className={styles.inputContainer} style={inputContainerStyle}>
            <div className={styles.inputFields} style={inputFieldsStyle}>
              <div className={styles.inputFieldTop}>
                <img
                  className={styles.placeholderTopIcon}
                  loading="lazy"
                  alt=""
                  src={placeholderTop}
                />
              </div>
              <div className={styles.inputFieldTop}>
                <div className={styles.placeholderText}>
                  upload-template.xlsx
                </div>
              </div>
              <div
                className={styles.inputFieldsChild}
                style={rectangleDivStyle}
              />
              <div className={styles.placeholderTextWrapper}>
                <div
                  className={styles.placeholderText1}
                  style={placeholderTextStyle}
                >
                  Remove
                </div>
              </div>
            </div>
            <div
              className={styles.sizemdIconleftTypeprima}
              onClick={onSizemdIconLeftTypePrimaClick}
            >
              <div className={styles.inputIconShape} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
