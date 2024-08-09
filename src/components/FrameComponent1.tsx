import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
  uploadImage?: string;
  inputPadding?: string;
  icon?: string;

  /** Style props */
  propColor?: CSSProperties["color"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBorder?: CSSProperties["border"];
  propBorder1?: CSSProperties["border"];
  propColor1?: CSSProperties["color"];
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
  propColor,
  uploadImage,
  propBackgroundColor,
  propBorder,
  inputPadding,
  propBorder1,
  icon,
  propColor1,
}) => {
  const uploadCSV1Style: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const inputContainer1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const inputFieldStyle: CSSProperties = useMemo(() => {
    return {
      border: propBorder,
    };
  }, [propBorder]);

  const rectangleDiv1Style: CSSProperties = useMemo(() => {
    return {
      border: propBorder1,
    };
  }, [propBorder1]);

  const valueStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const navigate = useNavigate();

  const onSizemdIconLeftTypePrimaClick = useCallback(() => {
    navigate("/uploading");
  }, [navigate]);

  return (
    <section className={[styles.uploadContentWrapper, className].join(" ")}>
      <div className={styles.uploadContent}>
        <header className={styles.uploadHeader}>
          <a className={styles.uploadCsv} style={uploadCSV1Style}>
            Upload CSV
          </a>
          <div className={styles.white}>
            <div className={styles.button} />
          </div>
          <div className={styles.uploadButton}>
            <div className={styles.uploadImageIcon}>
              <img
                className={styles.uploadImageIcon1}
                loading="lazy"
                alt=""
                src={uploadImage}
              />
            </div>
            <img
              className={styles.maskGroupIcon}
              loading="lazy"
              alt=""
              src="/mask-group@2x.png"
            />
          </div>
        </header>
        <div className={styles.inputContainerWrapper}>
          <div className={styles.inputContainer} style={inputContainer1Style}>
            <div className={styles.inputField} style={inputFieldStyle}>
              <div className={styles.inputPadding}>
                <img
                  className={styles.inputPaddingIcon}
                  loading="lazy"
                  alt=""
                  src={inputPadding}
                />
              </div>
              <div className={styles.placeholderText}>
                <span>{`Drop your excel sheet here or `}</span>
                <span className={styles.browse}>browse</span>
              </div>
              <div
                className={styles.inputFieldChild}
                style={rectangleDiv1Style}
              />
              <div className={styles.inputFieldItem} />
            </div>
            <button
              className={styles.sizemdIconleftTypeprima}
              onClick={onSizemdIconLeftTypePrimaClick}
            >
              <img className={styles.icon} alt="" src={icon} />
              <div className={styles.value} style={valueStyle}>
                Upload
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
