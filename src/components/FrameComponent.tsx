import { useCallback } from "react";
import { Button } from "@mui/material";
import White from "./White";
import Card from "./Card";
import InputField from "./InputField";
import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
  const onButtonSignInClick = useCallback(() => {
    // Please sync "Upload" to the project
  }, []);

  return (
    <div className={[styles.signInFormParent, className].join(" ")}>
      <div className={styles.signInForm}>
        <h1 className={styles.signIn}>Sign In</h1>
        <b className={styles.signInTo}>Sign in to your account</b>
      </div>
      <div className={styles.authOptions}>
        <div className={styles.googleSignIn}>
          <White />
          <img
            className={styles.googleIcon1}
            loading="lazy"
            alt=""
            src="/googleicon-1@2x.png"
          />
          <b className={styles.signInWith}>Sign in with Google</b>
        </div>
        <div className={styles.googleSignIn1}>
          <White />
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
        <Card />
        <div className={styles.emailAndPassword}>
          <b className={styles.emailAddress}>Email address</b>
          <div className={styles.inputFields}>
            <InputField />
            <input
              className={styles.johndoegmailcom}
              placeholder="johndoe@gmail.com"
              type="text"
            />
          </div>
        </div>
        <div className={styles.emailAndPassword}>
          <b className={styles.password}>Password</b>
          <div className={styles.inputParent}>
            <div className={styles.input} />
            <div className={styles.parent}>
              <b className={styles.b}>••••••••</b>
              <div className={styles.passwordField}>
                <div className={styles.passwordFieldChild} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.forgotPasswordLink}>
          <b className={styles.forgotPassword}>Forgot password?</b>
        </div>
        <Button
          className={styles.buttonSignIn}
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#0d0d0d",
            fontSize: "16",
            background: "#605bff",
            borderRadius: "0px 0px 0px 0px",
            "&:hover": { background: "#605bff" },
            height: 43.9,
          }}
          onClick={onButtonSignInClick}
        >
          Sign In
        </Button>
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

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
