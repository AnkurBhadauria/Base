import Main from "../components/Main";
import Credentials from "../components/Credentials";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.login}>
      <Main />
      <div className={styles.formContainer}>
        <div className={styles.form}>
          <Credentials />
          <div className={styles.social}>
            <div className={styles.icons}>
              <div className={styles.firstIcon}>
                <img
                  className={styles.iconOne}
                  loading="lazy"
                  alt=""
                  src="/vector@2x.png"
                />
              </div>
              <div className={styles.secondIcon}>
                <img
                  className={styles.iconTwo}
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
                  className={styles.discordOneIcon}
                  loading="lazy"
                  alt=""
                  src="/vector-3.svg"
                />
                <img
                  className={styles.discordTwoIcon}
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
