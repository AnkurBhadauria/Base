import { FunctionComponent } from "react";
import CollapsibleSideBar from "../components/CollapsibleSideBar";
import FrameComponent1 from "../components/FrameComponent1";
import styles from "./Upload.module.css";

const Upload: FunctionComponent = () => {
  return (
    <div className={styles.upload}>
      <main className={styles.main}>
        <CollapsibleSideBar />
        <FrameComponent1
          uploadImage="/vector2.svg"
          inputPadding="/frame-76823.svg"
          icon="/icon1.svg"
        />
      </main>
    </div>
  );
};

export default Upload;
