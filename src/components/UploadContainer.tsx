import { useCallback } from "react";
import { Button } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./UploadContainer.module.css";

const UploadContainer = ({ className = "" }) => {
  const onSizemdIconLeftTypePrimaClick = useCallback(() => {
    // Please sync "Uploading" to the project
  }, []);

  return (
    <div className={[styles.uploadContainer, className].join(" ")}>
      <header className={styles.uploadHeader}>
        <a className={styles.uploadCsv}>Upload CSV</a>
        <div className={styles.white}>
          <div className={styles.button} />
        </div>
        <div className={styles.uploadInput}>
          <div className={styles.inputIconContainer}>
            <img
              className={styles.uploadImageIcon}
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
      </header>
      <div className={styles.inputField}>
        <div className={styles.inputContainer}>
          <div className={styles.inputFieldContent}>
            <div className={styles.inputPaddingWrapper}>
              <img
                className={styles.inputPaddingIcon}
                loading="lazy"
                alt=""
                src="/frame-7682.svg"
              />
            </div>
            <div className={styles.placeholderText}>
              <span>{`Drop your excel sheet here or `}</span>
              <span className={styles.browse}>browse</span>
            </div>
            <div className={styles.inputFieldContentChild} />
            <div className={styles.inputFieldContentItem} />
          </div>
          <Button
            className={styles.sizemdIconleftTypeprima}
            startIcon={<img width="24px" height="24px" src="/icon.svg" />}
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
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
  );
};

UploadContainer.propTypes = {
  className: PropTypes.string,
};

export default UploadContainer;
