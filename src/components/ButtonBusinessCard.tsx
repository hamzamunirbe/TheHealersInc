import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ButtonBusinessCard.module.css";

export type ButtonBusinessCardType = {
  monogram?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
};

const ButtonBusinessCard: FunctionComponent<ButtonBusinessCardType> = ({
  monogram,
  propMinWidth,
}) => {
  const text1Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={styles.buttonbusinessCard}>
      <div className={styles.mediaTextContent}>
        <div className={styles.header}>
          <div className={styles.content}>
            <img
              className={styles.monogramIcon}
              loading="lazy"
              alt=""
              src={monogram}
            />
            <div className={styles.text}>
              <b className={styles.header1}>The Star Studio</b>
              <div className={styles.subhead}>Yoga, Meditation</div>
            </div>
          </div>
        </div>
        <div className={styles.media}>
          <img
            className={styles.mediaIcon}
            loading="lazy"
            alt=""
            src="/media@2x.png"
          />
        </div>
        <div className={styles.textContent}>
          <div className={styles.supportingText}>Howe Street, Vancouver</div>
          <div className={styles.actions}>
            <div className={styles.secondaryAction}>
              <div className={styles.stateLayer}>
                <div className={styles.labelText}>Enabled</div>
              </div>
            </div>
            <div className={styles.primaryAction}>
              <div className={styles.stateLayer1}>
                <div className={styles.labelText1}>Enabled</div>
              </div>
            </div>
          </div>
          <div className={styles.texttitle}>
            <div className={styles.text1} style={text1Style}>
              1 mile
            </div>
            <img className={styles.iconWrapper} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonBusinessCard;
