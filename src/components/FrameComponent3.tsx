import { FunctionComponent, useState } from "react";
import Button from "./Button";
import styles from "./FrameComponent3.module.css";

const FrameComponent3: FunctionComponent = () => {
  const [checkBoxFilledIconChecked, setCheckBoxFilledIconChecked] =
    useState(true);
  return (
    <form className={styles.frameParent}>
      <div className={styles.h3Parent}>
        <h1 className={styles.h3}>Continue your healing journey</h1>
        <div className={styles.textfield}>
          <div className={styles.input}>
            <div className={styles.label}>Email</div>
            <input
              className={styles.content}
              placeholder="user@email.com"
              type="text"
            />
            <div className={styles.underline} />
          </div>
          <div className={styles.formhelpertext}>
            <div className={styles.helperText}>Helper text</div>
          </div>
        </div>
      </div>
      <div className={styles.textfield1}>
        <div className={styles.input1}>
          <div className={styles.label1}>Password</div>
          <div className={styles.content1}>
            <div className={styles.adornStartContainer}>
              <div className={styles.icon}>
                <img className={styles.starfilledIcon} alt="" />
              </div>
            </div>
            <div className={styles.minHeight} />
            <div className={styles.value} />
            <input
              className={styles.placeholder}
              placeholder="************"
              type="text"
            />
            <div className={styles.adornEndContainerWrapper}>
              <div className={styles.adornEndContainer}>
                <img
                  className={styles.removeredeyefilledIcon}
                  alt=""
                  src="/removeredeyefilled.svg"
                />
              </div>
            </div>
            <div className={styles.minWidth} />
          </div>
          <div className={styles.buttonInstance} />
        </div>
        <div className={styles.formhelpertext1}>
          <div className={styles.helperText1}>Helper text</div>
        </div>
      </div>
      <div className={styles.checkboxParent}>
        <div className={styles.checkbox}>
          <div className={styles.padding}>
            <input
              className={styles.checkboxfilled}
              checked={checkBoxFilledIconChecked}
              type="checkbox"
              onChange={(event) =>
                setCheckBoxFilledIconChecked(event.target.checked)
              }
            />
          </div>
          <div className={styles.labelWrapper}>
            <div className={styles.label2}>Keep me signed in.</div>
          </div>
        </div>
        <Button
          wrapper="pending_I6335:23192;1304:10666;96528:163581"
          button="Sign In"
        />
        <div className={styles.button}>
          <div className={styles.iconWrapper}>
            <img className={styles.wrapperIcon} alt="" />
          </div>
          <div className={styles.text}>Forgot Password?</div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.lineWrapper}>
            <div className={styles.frameChild} />
          </div>
          <div className={styles.or}>Or</div>
          <div className={styles.lineContainer}>
            <div className={styles.frameItem} />
          </div>
        </div>
        <div className={styles.socialMediaButtons}>
          <button className={styles.googleButton}>
            <div className={styles.content2}>
              <img
                className={styles.icons8Google1}
                alt=""
                src="/icons8google-1.svg"
              />
              <div className={styles.signUpWith}>Sign up with Google</div>
            </div>
          </button>
          <button className={styles.facebookButton}>
            <div className={styles.content3}>
              <img className={styles.facebookIcon} alt="" src="/facebook.svg" />
              <div className={styles.signUpWith1}>Sign up with Facebook</div>
            </div>
          </button>
        </div>
        <div className={styles.dontHaveAnAccountParent}>
          <div className={styles.dontHaveAn}>Don’t have an account?</div>
          <div className={styles.signUp}>Sign Up</div>
        </div>
        <button className={styles.button1}>
          <div className={styles.subtractSymbol}>
            <div className={styles.iconWrapper1}>
              <img
                className={styles.wrapperIcon1}
                alt=""
                src="/wrapper-2@2x.png"
              />
            </div>
          </div>
          <b className={styles.text1}>Back to home</b>
        </button>
      </div>
    </form>
  );
};

export default FrameComponent3;
