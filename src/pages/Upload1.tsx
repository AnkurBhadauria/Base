import { FunctionComponent } from "react";
import CollapsibleSideBar1 from "../components/CollapsibleSideBar1";
import FrameComponent1 from "../components/FrameComponent1";
import styles from "./Upload1.module.css";

const Upload1: FunctionComponent = () => {
  return (
    <div className={styles.upload}>
      <CollapsibleSideBar1 />
      <FrameComponent1
        propColor="#fff"
        uploadImage="/vector.svg"
        propBackgroundColor="#0d0d0d"
        propBorder="1px dashed rgba(255, 255, 255, 0.08)"
        inputPadding="/frame-7682.svg"
        propBorder1="1px dashed rgba(255, 255, 255, 0.08)"
        icon="/icon.svg"
        propColor1="#0d0d0d"
      />
    </div>
  );
};

export default Upload1;
