import { FunctionComponent, useCallback } from "react";
import White from "./White";
import Card from "./Card";
import InputField from "./InputField";
import PasswordInput from "./PasswordInput";
import { useNavigate } from "react-router-dom";
import ButtonPrimary from "./ButtonPrimary";
import styles from "./FrameComponent4.module.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onButtonSignInClick = useCallback(() => {
    navigate("/upload");
  }, [navigate]);

  return (
    <div className={[styles.signInFormParent, className].join(" ")}>
      <div className={styles.signInForm}>
        <h1 className={styles.signIn}>Sign In</h1>
        <b className={styles.signInTo}>Sign in to your account</b>
      </div>
      <div className={styles.authOptions}>
        <div className={styles.googleSignIn}>
          <White propBackgroundColor="#0d0d0d" />
          <img
            className={styles.googleIcon1}
            loading="lazy"
            alt=""
            src="/googleicon-1@2x.png"
          />
          <b className={styles.signInWith}>Sign in with Google</b>
        </div>
        <div className={styles.googleSignIn1}>
          <White propBackgroundColor="#0d0d0d" />
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
      <form className={styles.credentials}>
        <Card propBackgroundColor="#0d0d0d" />
        <div className={styles.emailAndPassword}>
          <b className={styles.emailAddress}>Email address</b>
          <div className={styles.inputFields}>
            <InputField propBackgroundColor="#161616" />
            <input
              className={styles.johndoegmailcom}
              placeholder="johndoe@gmail.com"
              type="text"
            />
          </div>
        </div>
        <PasswordInput
          propColor="#fff"
          propBackgroundColor="#212121"
          propBackgroundColor1="#212121"
          propColor1="#fff"
        />
        <div className={styles.forgotPasswordLink}>
          <b className={styles.forgotPassword}>Forgot password?</b>
        </div>
        <button className={styles.buttonSignIn} onClick={onButtonSignInClick}>
          <ButtonPrimary />
          <b className={styles.signIn1}>Sign In</b>
        </button>
      </form>
      <div className={styles.dontHaveAnAccountRegisteWrapper}>
        <b className={styles.dontHaveAnContainer}>
          <span>{`Don’t have an account? `}</span>
          <span className={styles.registerHere}>Register here</span>
        </b>
      </div>
    </div>
  );
};

export default FrameComponent4;
