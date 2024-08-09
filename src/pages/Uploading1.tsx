import { FunctionComponent } from "react";
import CollapsibleSideBar from "../components/CollapsibleSideBar";
import FrameComponent2 from "../components/FrameComponent2";
import styles from "./Uploading1.module.css";

const Uploading1: FunctionComponent = () => {
  return (
    <div className={styles.uploading}>
      <main className={styles.collapsibleSideBarParent}>
        <CollapsibleSideBar
          companyNameHeight="42px"
          companyNamePosition="relative"
          companyNameMargin="unset"
          companyNameTop="unset"
          companyNameBottom="unset"
          companyNameLeft="unset"
          companyNameMaxHeight="unset"
          baseHeight="100%"
          basePosition="absolute"
          baseMargin="0 !important"
          baseTop="0px"
          baseBottom="0px"
          baseLeft="0px"
          baseMaxHeight="100%"
          groupDivTextDecoration="none"
          notificationTextDecoration="none"
          themeSwitchTextDecoration="none"
        />
        <FrameComponent2
          propFlex="unset"
          propWidth="1071px"
          propColor="#000"
          vector="/vector2.svg"
          propBackgroundColor="#fff"
          propBorder="1px dashed rgba(0, 0, 0, 0.08)"
          placeholderTop="/frame-76822.svg"
          propBorder1="1px dashed rgba(0, 0, 0, 0.08)"
          propColor1="#d33030"
        />
      </main>
    </div>
  );
};

export default Uploading1;
