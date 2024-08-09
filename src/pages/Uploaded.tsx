import { FunctionComponent, useState, useCallback } from "react";
import Popover from "../components/Popover";
import PortalPopup from "../components/PortalPopup";
import CollapsibleSideBar from "../components/CollapsibleSideBar";
import FrameComponent from "../components/FrameComponent";
import FrameComponent3 from "../components/FrameComponent3";
import styles from "./Uploaded.module.css";

const Uploaded: FunctionComponent = () => {
  const [isPopoverOpen, setPopoverOpen] = useState(false);

  const openPopover = useCallback(() => {
    setPopoverOpen(true);
  }, []);

  const closePopover = useCallback(() => {
    setPopoverOpen(false);
  }, []);

  return (
    <>
      <div className={styles.uploaded}>
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
          groupDivTextDecoration="unset"
          notificationTextDecoration="unset"
          themeSwitchTextDecoration="unset"
        />
        <main className={styles.uploadContentWrapper}>
          <section className={styles.uploadContent}>
            <header className={styles.uploadHeader}>
              <a className={styles.uploadCsv}>Upload CSV</a>
              <div className={styles.white}>
                <div className={styles.button} />
              </div>
              <div className={styles.uploadIcon}>
                <div className={styles.uploadImageIcon}>
                  <img
                    className={styles.vectorIcon}
                    loading="lazy"
                    alt=""
                    src="/vector2.svg"
                  />
                </div>
                <img
                  className={styles.maskGroupIcon}
                  loading="lazy"
                  alt=""
                  src="/mask-group@2x.png"
                />
              </div>
            </header>
            <FrameComponent inputCursor="/frame-76823.svg" icon="/icon1.svg" />
            <div className={styles.tableHeaderWrapper}>
              <div className={styles.tableHeader}>
                <h2 className={styles.uploads}>Uploads</h2>
                <div className={styles.tableDemo3}>
                  <div className={styles.button1}>
                    <img className={styles.icon} alt="" src="/icon-11.svg" />
                  </div>
                  <div className={styles.dataTypeRow}>
                    <div className={styles.dataTypeParent}>
                      <div className={styles.dataType}>Sl No.</div>
                      <div className={styles.dataTypeCollection}>
                        <div className={styles.dataType1}>Links</div>
                      </div>
                      <div className={styles.dataTypeCollection1}>
                        <div className={styles.dataType2}>Prefix</div>
                      </div>
                      <div className={styles.dataTypeCollection2}>
                        <div className={styles.dataType3}>Add Tags</div>
                      </div>
                      <div className={styles.dataType4}>Selected Tags</div>
                    </div>
                  </div>
                  <div className={styles.tableRow}>
                    <div className={styles.checkbox}>
                      <div className={styles.box} />
                    </div>
                    <div className={styles.tableRowContainer}>
                      <div className={styles.dataTypeCell}>
                        <div className={styles.dataType5}>01</div>
                      </div>
                      <div className={styles.dataTypeWrapper}>
                        <a
                          className={styles.dataType6}
                          href="https://www.google.com"
                          target="_blank"
                        >
                          www.google.com
                        </a>
                      </div>
                      <div className={styles.dataTypeContainer}>
                        <div className={styles.dataType7}>prefixsample</div>
                      </div>
                      <div className={styles.chipHolder}>
                        <div className={styles.dataType8}>Select Tags</div>
                        <div className={styles.button2} onClick={openPopover}>
                          <img
                            className={styles.controlsIcon}
                            alt=""
                            src="/controls.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.leftContainerWrapper}>
                      <div className={styles.leftContainer}>
                        <div className={styles.label}>
                          <div className={styles.labelText}>TAG 1</div>
                          <img
                            className={styles.icon1}
                            loading="lazy"
                            alt=""
                            src="/icon-12.svg"
                          />
                        </div>
                        <div className={styles.label1}>
                          <div className={styles.labelText1}>TAG 2</div>
                          <img
                            className={styles.icon1}
                            alt=""
                            src="/icon-12.svg"
                          />
                        </div>
                        <div className={styles.label1}>
                          <div className={styles.labelText1}>TAG 3</div>
                          <img
                            className={styles.icon1}
                            alt=""
                            src="/icon-12.svg"
                          />
                        </div>
                        <div className={styles.label}>
                          <div className={styles.labelText3}>TAG 4</div>
                          <img
                            className={styles.icon1}
                            alt=""
                            src="/icon-12.svg"
                          />
                        </div>
                        <div className={styles.label4}>
                          <div className={styles.labelText4}>TAG 4</div>
                          <img
                            className={styles.icon5}
                            alt=""
                            src="/icon-12.svg"
                          />
                        </div>
                        <div className={styles.label4}>
                          <div className={styles.labelText5}>TAG 4</div>
                          <img
                            className={styles.icon5}
                            alt=""
                            src="/icon-12.svg"
                          />
                        </div>
                        <div className={styles.label4}>
                          <div className={styles.labelText5}>TAG 4</div>
                          <img
                            className={styles.icon5}
                            alt=""
                            src="/icon-12.svg"
                          />
                        </div>
                        <div className={styles.label4}>
                          <div className={styles.labelText5}>TAG 4</div>
                          <img
                            className={styles.icon5}
                            alt=""
                            src="/icon-12.svg"
                          />
                        </div>
                        <div className={styles.label8}>
                          <div className={styles.labelText8}>your label</div>
                          <img
                            className={styles.controlsIcon}
                            alt=""
                            src="/icon-12.svg"
                          />
                        </div>
                        <div className={styles.label8}>
                          <div className={styles.labelText8}>your label</div>
                          <img
                            className={styles.controlsIcon}
                            alt=""
                            src="/icon-12.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.tableRow1}>
                    <div className={styles.checkbox}>
                      <div className={styles.box} />
                    </div>
                    <div className={styles.frameParent}>
                      <div className={styles.dataTypeCell}>
                        <div className={styles.dataType5}>02</div>
                      </div>
                      <div className={styles.dataTypeWrapper}>
                        <a
                          className={styles.dataType6}
                          href="https://www.google.com"
                          target="_blank"
                        >
                          www.google.com
                        </a>
                      </div>
                      <div className={styles.dataTypeContainer}>
                        <div className={styles.dataType7}>prefixsample</div>
                      </div>
                      <div className={styles.chipHolder}>
                        <div className={styles.dataType8}>Select Tags</div>
                        <div className={styles.button2} onClick={openPopover}>
                          <img
                            className={styles.controlsIcon}
                            alt=""
                            src="/controls.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.leftContainerContainer}>
                      <div className={styles.leftContainer1}>
                        <div className={styles.label10}>
                          <div className={styles.labelText}>TAG 1</div>
                          <img
                            className={styles.icon1}
                            loading="lazy"
                            alt=""
                            src="/icon-12.svg"
                          />
                        </div>
                        <div className={styles.label11}>
                          <div className={styles.labelText1}>TAG 2</div>
                          <img
                            className={styles.icon1}
                            loading="lazy"
                            alt=""
                            src="/icon-12.svg"
                          />
                        </div>
                        <div className={styles.label12}>
                          <div className={styles.labelText8}>your label</div>
                          <img
                            className={styles.controlsIcon}
                            alt=""
                            src="/icon-12.svg"
                          />
                        </div>
                        <div className={styles.label12}>
                          <div className={styles.labelText8}>your label</div>
                          <img
                            className={styles.controlsIcon}
                            alt=""
                            src="/icon-12.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <FrameComponent3
                    icon="/icon-12.svg"
                    icon1="/icon-12.svg"
                    icon2="/icon-12.svg"
                    icon3="/icon-12.svg"
                    icon4="/icon-12.svg"
                    icon5="/icon-12.svg"
                    icon6="/icon-12.svg"
                    icon7="/icon-12.svg"
                    icon8="/icon-12.svg"
                    icon9="/icon-12.svg"
                    icon10="/icon-12.svg"
                    icon11="/icon-12.svg"
                    icon12="/icon-12.svg"
                    icon13="/icon-12.svg"
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      {isPopoverOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePopover}
        >
          <Popover onClose={closePopover} />
        </PortalPopup>
      )}
    </>
  );
};

export default Uploaded;
