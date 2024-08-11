import { Button } from "@mui/material";
import FrameComponent from "../components/FrameComponent";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.login}>
      <div className={styles.sideRightParent}>
        <img className={styles.sideRightIcon} alt="" src="/side-right@2x.png" />
        <Button
          className={styles.frameChild}
          startIcon={
            <img width="27.5px" height="27.5px" src="/group-200.svg" />
          }
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#000",
            fontSize: "26",
            background: "#fff",
            borderRadius: "28.94px",
            "&:hover": { background: "#fff" },
            width: 151.3,
            height: 61,
          }}
        >
          Base
        </Button>
      </div>
      <div className={styles.mainContent}>
        <div className={styles.authContainer}>
          <FrameComponent />
          <div className={styles.footer}>
            <div className={styles.footerContent}>
              <div className={styles.socialLinks}>
                <img
                  className={styles.vectorIcon}
                  loading="lazy"
                  alt=""
                  src="/vector@2x.png"
                />
              </div>
              <div className={styles.vectorWrapper}>
                <img
                  className={styles.vectorIcon1}
                  loading="lazy"
                  alt=""
                  src="/vector-1@2x.png"
                />
              </div>
              <div className={styles.carbonlogoLinkedin}>
                <img
                  className={styles.linkedInIcon}
                  loading="lazy"
                  alt=""
                  src="/vector-2.svg"
                />
              </div>
              <div className={styles.carbonlogoDiscord}>
                <img
                  className={styles.vectorIcon2}
                  loading="lazy"
                  alt=""
                  src="/vector-3.svg"
                />
                <img
                  className={styles.vectorIcon3}
                  alt=""
                  src="/vector-4.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
