import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Button.module.css";

export type ButtonType = {
  wrapper?: string;
  button?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
};

const Button: FunctionComponent<ButtonType> = ({
  wrapper,
  button,
  propWidth,
  propMinWidth,
}) => {
  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth,
    };
  }, [propWidth, propMinWidth]);

  return (
    <button className={styles.button}>
      <div className={styles.iconWrapper}>
        <img className={styles.wrapperIcon} alt="" src={wrapper} />
      </div>
      <b className={styles.button1} style={buttonStyle}>
        {button}
      </b>
    </button>
  );
};

export default Button;
