import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./JoinAsPractitioner.module.css";

export type JoinAsPractitionerType = {
  paragraph?: string;
  wrapper?: string;
  text?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propBackgroundImage?: CSSProperties["backgroundImage"];
  propPadding?: CSSProperties["padding"];
  propWidth?: CSSProperties["width"];
};

const JoinAsPractitioner: FunctionComponent<JoinAsPractitionerType> = ({
  paragraph,
  wrapper,
  text,
  propLeft,
  propBackgroundImage,
  propPadding,
  propWidth,
}) => {
  const joinAsPractitionerStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
      backgroundImage: propBackgroundImage,
    };
  }, [propLeft, propBackgroundImage]);

  const innerDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const textStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={styles.joinAsPractitioner} style={joinAsPractitionerStyle}>
      <div className={styles.innerDiv} style={innerDivStyle}>
        <h3 className={styles.paragraph}>{paragraph}</h3>
        <button className={styles.button}>
          <div className={styles.iconWrapper}>
            <img className={styles.wrapperIcon} alt="" src={wrapper} />
          </div>
          <b className={styles.text} style={textStyle}>
            {text}
          </b>
        </button>
      </div>
    </div>
  );
};

export default JoinAsPractitioner;
