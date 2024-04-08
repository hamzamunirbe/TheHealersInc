import { FunctionComponent } from "react";
import JoinAsPractitioner from "./JoinAsPractitioner";
import styles from "./PractionerAndVendorDiv.module.css";

const PractionerAndVendorDiv: FunctionComponent = () => {
  return (
    <section className={styles.practionerAndVendorDiv}>
      <div className={styles.practitionerAndVendorContai}>
        <JoinAsPractitioner
          paragraph="Join our community of healers and showcase your fitness and wellness services to a wide audience."
          wrapper="pending_I6290:8658;1304:10666;96528:163581"
          text="Join as practitioner"
        />
        <JoinAsPractitioner
          paragraph="Explore a variety of fitness and wellness services offered by our trusted providers to enhance your well-being."
          wrapper="pending_I6290:8662;1304:10666;96528:163581"
          text="Explore Services"
          propLeft="720px"
          propBackgroundImage="url('/explore-services@3x.png')"
          propPadding="0px var(--padding-2xs) 0px 0px"
          propWidth="147px"
        />
      </div>
    </section>
  );
};

export default PractionerAndVendorDiv;
