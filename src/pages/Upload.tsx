import CollapsibleSideBar from "../components/CollapsibleSideBar";
import UploadContainer from "../components/UploadContainer";
import styles from "./Upload.module.css";

const Upload = () => {
  return (
    <div className={styles.upload}>
      <main className={styles.main}>
        <CollapsibleSideBar />
        <section className={styles.uploadContainerWrapper}>
          <UploadContainer />
        </section>
      </main>
    </div>
  );
};

export default Upload;
