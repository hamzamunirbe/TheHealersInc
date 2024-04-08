import { FunctionComponent } from "react";
import styles from "./ConsumerResetPassword.module.css";

const ConsumerResetPassword: FunctionComponent = () => {
  return (
    <div className={styles.consumerResetPassword}>
      <div className={styles.counter} />
      <div className={styles.button}>
        <div className={styles.iconWrapper}>
          <img className={styles.wrapperIcon} alt="" />
        </div>
        <b className={styles.text}>Update Password</b>
      </div>
      <div className={styles.consumerResetPasswordInner}>
        <div className={styles.frameParent}>
          <div className={styles.forgotPasswordParent}>
            <h2 className={styles.forgotPassword}>Forgot Password?</h2>
            <div className={styles.enter6DigitContainer}>
              <span>{`Enter 6 digit OTP sent to `}</span>
              <b>{`user@email.com and `}</b>
              <span>update your password.</span>
            </div>
          </div>
          <div className={styles.otpFields}>
            <div className={styles.textfield}>
              <div className={styles.input}>
                <div className={styles.label} />
                <div className={styles.content}>
                  <div className={styles.adornStartContainer}>
                    <div className={styles.icon}>
                      <img className={styles.starfilledIcon} alt="" />
                    </div>
                  </div>
                  <div className={styles.minHeight} />
                  <div className={styles.value}>1</div>
                  <div className={styles.placeholder}>user@email.com</div>
                  <div className={styles.adornEndContainer}>
                    <img className={styles.removeredeyefilledIcon} alt="" />
                  </div>
                  <div className={styles.minWidth} />
                </div>
                <div className={styles.newPasswordInstructions} />
              </div>
              <div className={styles.formhelpertext}>
                <div className={styles.helperText}>Helper text</div>
              </div>
            </div>
            <div className={styles.textfield1}>
              <div className={styles.input1}>
                <div className={styles.label1} />
                <div className={styles.content1}>
                  <div className={styles.adornStartContainer1}>
                    <div className={styles.icon1}>
                      <img className={styles.starfilledIcon1} alt="" />
                    </div>
                  </div>
                  <div className={styles.minHeight1} />
                  <div className={styles.value1}>2</div>
                  <div className={styles.placeholder1}>user@email.com</div>
                  <div className={styles.adornEndContainer1}>
                    <img className={styles.removeredeyefilledIcon1} alt="" />
                  </div>
                  <div className={styles.minWidth1} />
                </div>
                <div className={styles.underline} />
              </div>
              <div className={styles.formhelpertext1}>
                <div className={styles.helperText1}>Helper text</div>
              </div>
            </div>
            <div className={styles.textfield2}>
              <div className={styles.input2}>
                <div className={styles.label2} />
                <div className={styles.content2}>
                  <div className={styles.adornStartContainer2}>
                    <div className={styles.icon2}>
                      <img className={styles.starfilledIcon2} alt="" />
                    </div>
                  </div>
                  <div className={styles.minHeight2} />
                  <div className={styles.value2}>3</div>
                  <div className={styles.placeholder2}>user@email.com</div>
                  <div className={styles.adornEndContainer2}>
                    <img className={styles.removeredeyefilledIcon2} alt="" />
                  </div>
                  <div className={styles.minWidth2} />
                </div>
                <div className={styles.underline1} />
              </div>
              <div className={styles.formhelpertext2}>
                <div className={styles.helperText2}>Helper text</div>
              </div>
            </div>
            <div className={styles.textfield3}>
              <div className={styles.input3}>
                <div className={styles.label3} />
                <div className={styles.content3}>
                  <div className={styles.adornStartContainer3}>
                    <div className={styles.icon3}>
                      <img className={styles.starfilledIcon3} alt="" />
                    </div>
                  </div>
                  <div className={styles.minHeight3} />
                  <div className={styles.value3}>4</div>
                  <div className={styles.placeholder3}>user@email.com</div>
                  <div className={styles.adornEndContainer3}>
                    <img className={styles.removeredeyefilledIcon3} alt="" />
                  </div>
                  <div className={styles.minWidth3} />
                </div>
                <div className={styles.underline2} />
              </div>
              <div className={styles.formhelpertext3}>
                <div className={styles.helperText3}>Helper text</div>
              </div>
            </div>
            <div className={styles.textfield4}>
              <div className={styles.input4}>
                <div className={styles.label4} />
                <div className={styles.content4}>
                  <div className={styles.adornStartContainer4}>
                    <div className={styles.icon4}>
                      <img className={styles.starfilledIcon4} alt="" />
                    </div>
                  </div>
                  <div className={styles.minHeight4} />
                  <div className={styles.value4}>5</div>
                  <div className={styles.placeholder4}>user@email.com</div>
                  <div className={styles.adornEndContainer4}>
                    <img className={styles.removeredeyefilledIcon4} alt="" />
                  </div>
                  <div className={styles.minWidth4} />
                </div>
                <div className={styles.underline3} />
              </div>
              <div className={styles.formhelpertext4}>
                <div className={styles.helperText4}>Helper text</div>
              </div>
            </div>
            <div className={styles.textfield5}>
              <div className={styles.input5}>
                <div className={styles.label5} />
                <div className={styles.content5}>
                  <div className={styles.adornStartContainer5}>
                    <div className={styles.icon5}>
                      <img className={styles.starfilledIcon5} alt="" />
                    </div>
                  </div>
                  <div className={styles.minHeight5} />
                  <div className={styles.value5}>6</div>
                  <div className={styles.placeholder5}>user@email.com</div>
                  <div className={styles.adornEndContainer5}>
                    <img className={styles.removeredeyefilledIcon5} alt="" />
                  </div>
                  <div className={styles.minWidth5} />
                </div>
                <div className={styles.underline4} />
              </div>
              <div className={styles.formhelpertext5}>
                <div className={styles.helperText5}>Helper text</div>
              </div>
            </div>
          </div>
          <div className={styles.reSendInParent}>
            <div className={styles.reSendIn}>{`Re-send in: `}</div>
            <div className={styles.parent}>
              <div className={styles.div}>00:</div>
              <div className={styles.div1}>29</div>
            </div>
          </div>
          <div className={styles.uppercaseHintParent}>
            <div className={styles.uppercaseHint}>
              <div className={styles.textfield6}>
                <div className={styles.input6}>
                  <div className={styles.label6}>New Password</div>
                  <div className={styles.content6}>
                    <div className={styles.adornStartContainer6}>
                      <div className={styles.icon6}>
                        <img className={styles.starfilledIcon6} alt="" />
                      </div>
                    </div>
                    <div className={styles.minHeight6} />
                    <div className={styles.value6} />
                    <input
                      className={styles.placeholder6}
                      placeholder="************"
                      type="text"
                    />
                    <div className={styles.characterTypeContainer}>
                      <div className={styles.adornEndContainer6}>
                        <img
                          className={styles.removeredeyefilledIcon6}
                          alt=""
                          src="/removeredeyefilled.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.minWidth6} />
                  </div>
                  <div className={styles.passwordMeter} />
                </div>
                <div className={styles.formhelpertext6}>
                  <div className={styles.helperText6}>Helper text</div>
                </div>
              </div>
              <div className={styles.textfield7}>
                <div className={styles.input7}>
                  <div className={styles.label7}>Confirm Password</div>
                  <div className={styles.content7}>
                    <div className={styles.adornStartContainer7}>
                      <div className={styles.icon7}>
                        <img className={styles.starfilledIcon7} alt="" />
                      </div>
                    </div>
                    <div className={styles.minHeight7} />
                    <div className={styles.value7} />
                    <input
                      className={styles.placeholder7}
                      placeholder="************"
                      type="text"
                    />
                    <div className={styles.characterTypeContainer1}>
                      <div className={styles.adornEndContainer7}>
                        <img
                          className={styles.removeredeyefilledIcon7}
                          alt=""
                          src="/removeredeyefilled.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.minWidth7} />
                  </div>
                  <div className={styles.underline5} />
                </div>
                <div className={styles.formhelpertext7}>
                  <div className={styles.helperText7}>Helper text</div>
                </div>
              </div>
              <div className={styles.passwordMeter1}>
                <div className={styles.assistiveText}>Very Weak</div>
                <div className={styles.component2Parent}>
                  <div className={styles.component2}>
                    <div className={styles.barRed} />
                  </div>
                  <div className={styles.bar}>
                    <div className={styles.barRed1} />
                  </div>
                  <div className={styles.component4}>
                    <div className={styles.barGreen} />
                  </div>
                  <div className={styles.component5}>
                    <div className={styles.barGreen1} />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.yourPasswordMust}>
              Your Password must contain:
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
                <div className={styles.frameDiv}>
                  <div className={styles.frameParent1}>
                    <div className={styles.infoWrapper}>
                      <img
                        className={styles.infoIcon}
                        loading="lazy"
                        alt=""
                        src="/info.svg"
                      />
                    </div>
                    <div className={styles.charactersInstructions}>
                      <div className={styles.characters}>8+ Characters</div>
                      <div className={styles.infoContainer}>
                        <img
                          className={styles.infoIcon1}
                          loading="lazy"
                          alt=""
                          src="/info.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent2}>
                    <div className={styles.frameParent3}>
                      <div className={styles.infoFrame}>
                        <img
                          className={styles.infoIcon2}
                          loading="lazy"
                          alt=""
                          src="/info.svg"
                        />
                      </div>
                      <div className={styles.numeric}>1 Numeric</div>
                    </div>
                    <div className={styles.infoWrapper1}>
                      <img
                        className={styles.infoIcon3}
                        loading="lazy"
                        alt=""
                        src="/info.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.button1}>
                  <div className={styles.buttonInstance}>
                    <div className={styles.iconWrapper1}>
                      <img
                        className={styles.wrapperIcon1}
                        alt=""
                        src="/wrapper-1@2x.png"
                      />
                    </div>
                  </div>
                  <b className={styles.text1}>Back to Sign In</b>
                </div>
              </div>
              <div className={styles.uppercaseCharact}>
                <div className={styles.uppercase}>1 Uppercase</div>
                <div className={styles.specialCharacter}>
                  1 Special Character
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.consumerResetPasswordChild}
        alt=""
        src="/group-52.svg"
      />
      <div className={styles.subtractBtn}>
        <img className={styles.subtractIcon} alt="" src="/subtract.svg" />
        <div className={styles.logoWrapper}>
          <div className={styles.logo}>
            <img
              className={styles.theHealersLogo}
              loading="lazy"
              alt=""
              src="/the-healers-logo4.svg"
            />
            <div className={styles.theHealersLog}>
              <img
                className={styles.theHealersIcon}
                loading="lazy"
                alt=""
                src="/the-healers4.svg"
              />
            </div>
          </div>
        </div>
        <h1 className={styles.exploreLocalOfferings}>
          Explore Local offerings in fitness, and wellness services.
        </h1>
      </div>
    </div>
  );
};

export default ConsumerResetPassword;
