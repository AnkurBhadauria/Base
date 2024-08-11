import { useCallback } from "react";
import { Button } from "@mui/material";
import CollapsibleSideBar from "./CollapsibleSideBar";
import PropTypes from "prop-types";
import styles from "./Main.module.css";

const Main = ({ className = "" }) => {
  const onSizemdIconLeftTypePrimaClick = useCallback(() => {
    // Please sync "Uploading" to the project
  }, []);

  return (
    <div className={[styles.main, className].join(" ")}>
      <CollapsibleSideBar />
      <section className={styles.uploadContentWrapper}>
        <div className={styles.uploadContent}>
          <div className={styles.uploadInput}>
            <a className={styles.uploadCsv}>Upload CSV</a>
            <div className={styles.white}>
              <div className={styles.button} />
            </div>
            <div className={styles.inputWrapper}>
              <div className={styles.inputIcon}>
                <img
                  className={styles.uploadIcon}
                  loading="lazy"
                  alt=""
                  src="/vector1.svg"
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
            <div className={styles.inputContainer}>
              <div className={styles.placeholderWrapper}>
                <div className={styles.placeholderContainer}>
                  <img
                    className={styles.placeholderInnerIcon}
                    loading="lazy"
                    alt=""
                    src="/frame-7682.svg"
                  />
                </div>
                <div className={styles.placeholderText}>
                  <span>{`Drop your excel sheet here or `}</span>
                  <span className={styles.browse}>browse</span>
                </div>
                <div className={styles.placeholderWrapperChild} />
                <div className={styles.placeholderWrapperItem} />
              </div>
              <Button
                className={styles.sizemdIconleftTypeprima}
                startIcon={<img width="24px" height="24px" src="/icon.svg" />}
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#0d0d0d",
                  fontSize: "14",
                  background: "#605bff",
                  borderRadius: "8px",
                  "&:hover": { background: "#605bff" },
                  height: 56,
                }}
                onClick={onSizemdIconLeftTypePrimaClick}
              >
                Upload
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

Main.propTypes = {
  className: PropTypes.string,
};

export default Main;
