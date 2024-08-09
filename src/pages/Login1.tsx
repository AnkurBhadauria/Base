import { FunctionComponent } from "react";
import FrameComponent4 from "../components/FrameComponent4";
import styles from "./Login1.module.css";

const Login1: FunctionComponent = () => {
  return (
    <div className={styles.login}>
      <div className={styles.sideRightParent}>
        <img className={styles.sideRightIcon} alt="" src="/side-right@2x.png" />
        <button className={styles.topContentParent}>
          <div className={styles.topContent}>
            <img
              className={styles.topContentChild}
              alt=""
              src="/group-200.svg"
            />
          </div>
          <a className={styles.base}>Base</a>
        </button>
      </div>
      <div className={styles.mainContent}>
        <div className={styles.authContainer}>
          <FrameComponent4 />
          <div className={styles.footer}>
            <div className={styles.footerContent}>
              <div className={styles.socialLinks}>
                <img
                  className={styles.vectorIcon}
                  loading="lazy"
                  alt=""
                  src="/vector1@2x.png"
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

export default Login1;
