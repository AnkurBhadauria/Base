import { FunctionComponent } from "react";
import CollapsibleSideBar1 from "../components/CollapsibleSideBar1";
import FrameComponent2 from "../components/FrameComponent2";
import styles from "./Uploading.module.css";

const Uploading: FunctionComponent = () => {
  return (
    <div className={styles.uploading}>
      <main className={styles.main}>
        <CollapsibleSideBar1
          frameDivMarginTop="unset"
          subtractIconHeight="42px"
          subtractIconPosition="relative"
          subtractIconMargin="unset"
          subtractIconTop="unset"
          subtractIconBottom="unset"
          subtractIconLeft="unset"
          subtractIconMaxHeight="unset"
          logoContainerHeight="100%"
          logoContainerPosition="absolute"
          logoContainerMargin="0 !important"
          logoContainerTop="0px"
          logoContainerBottom="0px"
          logoContainerLeft="0px"
          logoContainerMaxHeight="100%"
        />
        <FrameComponent2
          vector="/vector.svg"
          placeholderTop="/frame-76821.svg"
        />
      </main>
    </div>
  );
};

export default Uploading;
