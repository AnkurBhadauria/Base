import { FunctionComponent, useCallback } from "react";
import White from "./White";
import Card from "./Card";
import InputField from "./InputField";
import PasswordInput from "./PasswordInput";
import { useNavigate } from "react-router-dom";
import ButtonPrimary from "./ButtonPrimary";
import styles from "./Credentials.module.css";

export type CredentialsType = {
  className?: string;
};

const Credentials: FunctionComponent<CredentialsType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onButtonSignInClick = useCallback(() => {
    navigate("/upload1");
  }, [navigate]);

  return (
    <div className={[styles.credentials, className].join(" ")}>
      <div className={styles.signInForm}>
        <h1 className={styles.signIn}>Sign In</h1>
        <b className={styles.signInTo}>Sign in to your account</b>
      </div>
      <div className={styles.signInOptions}>
        <div className={styles.googleSignIn}>
          <White />
          <img
            className={styles.googleIcon1}
            loading="lazy"
            alt=""
            src="/googleicon-11@2x.png"
          />
          <b className={styles.signInWith}>Sign in with Google</b>
        </div>
        <div className={styles.appleSignIn}>
          <White propBackgroundColor="#fff" />
          <img
            className={styles.apple1Icon}
            loading="lazy"
            alt=""
            src="/apple-1@2x.png"
          />
          <div className={styles.signInWithAppleWrapper}>
            <b className={styles.signInWith1}>Sign in with Apple</b>
          </div>
        </div>
      </div>
      <form className={styles.emailSignIn}>
        <Card />
        <div className={styles.emailInput}>
          <b className={styles.emailAddress}>Email address</b>
          <div className={styles.emailField}>
            <InputField />
            <b className={styles.johndoegmailcom}>johndoe@gmail.com</b>
          </div>
        </div>
        <PasswordInput />
        <div className={styles.forgotPassword}>
          <b className={styles.forgotPassword1}>Forgot password?</b>
        </div>
        <button className={styles.buttonSignIn} onClick={onButtonSignInClick}>
          <ButtonPrimary />
          <b className={styles.signIn1}>Sign In</b>
        </button>
      </form>
      <div className={styles.register}>
        <b className={styles.dontHaveAnContainer}>
          <span>{`Don’t have an account? `}</span>
          <span className={styles.registerHere}>Register here</span>
        </b>
      </div>
    </div>
  );
};

export default Credentials;
