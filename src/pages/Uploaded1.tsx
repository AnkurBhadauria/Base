import { FunctionComponent, useState, useCallback } from "react";
import Popover from "../components/Popover";
import PortalPopup from "../components/PortalPopup";
import CollapsibleSideBar1 from "../components/CollapsibleSideBar1";
import FrameComponent from "../components/FrameComponent";
import FrameComponent3 from "../components/FrameComponent3";
import styles from "./Uploaded1.module.css";

const Uploaded1: FunctionComponent = () => {
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
        <CollapsibleSideBar1
          frameDivMarginTop="-46px"
          subtractIconHeight="100%"
          subtractIconPosition="absolute"
          subtractIconMargin="0 !important"
          subtractIconTop="0px"
          subtractIconBottom="0px"
          subtractIconLeft="0px"
          subtractIconMaxHeight="100%"
          logoContainerHeight="42px"
          logoContainerPosition="relative"
          logoContainerMargin="unset"
          logoContainerTop="unset"
          logoContainerBottom="unset"
          logoContainerLeft="unset"
          logoContainerMaxHeight="unset"
        />
        <main className={styles.uploadHeaderParent}>
          <div className={styles.uploadHeader}>
            <a className={styles.uploadCsv}>Upload CSV</a>
            <div className={styles.white}>
              <div className={styles.button} />
            </div>
            <div className={styles.uploadButton}>
              <div className={styles.uploadIconWrapper}>
                <img
                  className={styles.uploadIcon}
                  loading="lazy"
                  alt=""
                  src="/vector.svg"
                />
              </div>
              <img
                className={styles.maskGroupIcon}
                loading="lazy"
                alt=""
                src="/mask-group@2x.png"
              />
            </div>
          </div>
          <FrameComponent
            propBackgroundColor="#0d0d0d"
            propBorder="1px dashed rgba(255, 255, 255, 0.08)"
            inputCursor="/frame-7682.svg"
            propBorder1="1px dashed rgba(255, 255, 255, 0.08)"
            icon="/icon.svg"
            propColor="#0d0d0d"
          />
          <section className={styles.tableHeaderWrapper}>
            <div className={styles.tableHeader}>
              <h2 className={styles.uploads}>Uploads</h2>
              <div className={styles.tableDemo3}>
                <div className={styles.button1}>
                  <img className={styles.icon} alt="" src="/icon-1.svg" />
                </div>
                <div className={styles.dataRow}>
                  <div className={styles.dataTypeParent}>
                    <div className={styles.dataType}>Sl No.</div>
                    <div className={styles.dataCollection}>
                      <div className={styles.dataType1}>Links</div>
                    </div>
                    <div className={styles.dataCollection1}>
                      <div className={styles.dataType2}>Prefix</div>
                    </div>
                    <div className={styles.dataCollection2}>
                      <div className={styles.dataType3}>Add Tags</div>
                    </div>
                    <div className={styles.dataType4}>Selected Tags</div>
                  </div>
                </div>
                <div className={styles.tableRow}>
                  <div className={styles.checkbox}>
                    <div className={styles.box} />
                  </div>
                  <div className={styles.dataRowContent}>
                    <div className={styles.dataColumns}>
                      <div className={styles.dataType5}>01</div>
                    </div>
                    <div className={styles.columnTypesCopy}>
                      <a
                        className={styles.dataType6}
                        href="https://www.google.com"
                        target="_blank"
                      >
                        www.google.com
                      </a>
                    </div>
                    <div className={styles.dataTypeFrame}>
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
                  <div className={styles.dataLabels}>
                    <div className={styles.leftContainer}>
                      <div className={styles.label}>
                        <div className={styles.labelText}>your label</div>
                        <img
                          className={styles.controlsIcon}
                          alt=""
                          src="/icon-2.svg"
                        />
                      </div>
                      <div className={styles.label}>
                        <div className={styles.labelText}>your label</div>
                        <img
                          className={styles.controlsIcon}
                          alt=""
                          src="/icon-2.svg"
                        />
                      </div>
                      <div className={styles.leftContainer1}>
                        <div className={styles.label2}>
                          <div className={styles.labelText2}>TAG 1</div>
                          <img
                            className={styles.icon3}
                            loading="lazy"
                            alt=""
                            src="/icon-4.svg"
                          />
                        </div>
                        <div className={styles.label3}>
                          <div className={styles.labelText3}>TAG 2</div>
                          <img
                            className={styles.icon3}
                            loading="lazy"
                            alt=""
                            src="/icon-4.svg"
                          />
                        </div>
                        <div className={styles.label3}>
                          <div className={styles.labelText3}>TAG 3</div>
                          <img
                            className={styles.icon3}
                            loading="lazy"
                            alt=""
                            src="/icon-4.svg"
                          />
                        </div>
                        <div className={styles.label2}>
                          <div className={styles.labelText5}>TAG 4</div>
                          <img
                            className={styles.icon3}
                            loading="lazy"
                            alt=""
                            src="/icon-4.svg"
                          />
                        </div>
                        <div className={styles.label6}>
                          <div className={styles.labelText6}>TAG 4</div>
                          <img
                            className={styles.icon3}
                            alt=""
                            src="/icon-4.svg"
                          />
                        </div>
                        <div className={styles.label6}>
                          <div className={styles.labelText7}>TAG 4</div>
                          <img
                            className={styles.icon3}
                            alt=""
                            src="/icon-4.svg"
                          />
                        </div>
                        <div className={styles.label6}>
                          <div className={styles.labelText7}>TAG 4</div>
                          <img
                            className={styles.icon3}
                            alt=""
                            src="/icon-4.svg"
                          />
                        </div>
                        <div className={styles.label6}>
                          <div className={styles.labelText7}>TAG 4</div>
                          <img
                            className={styles.icon3}
                            alt=""
                            src="/icon-4.svg"
                          />
                        </div>
                        <div className={styles.label10}>
                          <div className={styles.labelText}>your label</div>
                          <img
                            className={styles.controlsIcon}
                            alt=""
                            src="/icon-12.svg"
                          />
                        </div>
                        <div className={styles.label10}>
                          <div className={styles.labelText}>your label</div>
                          <img
                            className={styles.controlsIcon}
                            alt=""
                            src="/icon-12.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.tableRow}>
                  <div className={styles.checkbox}>
                    <div className={styles.box} />
                  </div>
                  <div className={styles.dataRowContent}>
                    <div className={styles.dataColumns}>
                      <div className={styles.dataType5}>02</div>
                    </div>
                    <div className={styles.columnTypesCopy}>
                      <a
                        className={styles.dataType6}
                        href="https://www.google.com"
                        target="_blank"
                      >
                        www.google.com
                      </a>
                    </div>
                    <div className={styles.dataTypeFrame}>
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
                    <div className={styles.leftContainer2}>
                      <div className={styles.label12}>
                        <div className={styles.labelText2}>TAG 1</div>
                        <img
                          className={styles.icon3}
                          loading="lazy"
                          alt=""
                          src="/icon-2.svg"
                        />
                      </div>
                      <div className={styles.label13}>
                        <div className={styles.labelText3}>TAG 2</div>
                        <img
                          className={styles.icon3}
                          loading="lazy"
                          alt=""
                          src="/icon-2.svg"
                        />
                      </div>
                      <div className={styles.label14}>
                        <div className={styles.labelText}>your label</div>
                        <img
                          className={styles.controlsIcon}
                          alt=""
                          src="/icon-2.svg"
                        />
                      </div>
                      <div className={styles.label14}>
                        <div className={styles.labelText}>your label</div>
                        <img
                          className={styles.controlsIcon}
                          alt=""
                          src="/icon-2.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <FrameComponent3
                  propBackgroundColor="#161616"
                  propColor="#e0dcdd"
                  propColor1="#75a3ff"
                  propColor2="#e0dcdd"
                  propBackgroundColor1="#0d0d0d"
                  propBorder="1px solid #1a1a1a"
                  propColor3="#e0dcdd"
                  propColor4="#0d0d0d"
                  icon="/icon-2.svg"
                  propColor5="#0d0d0d"
                  icon1="/icon-2.svg"
                  propColor6="#0d0d0d"
                  icon2="/icon-2.svg"
                  propColor7="#0d0d0d"
                  icon3="/icon-2.svg"
                  propBackgroundColor2="#287eff"
                  icon4="/icon-2.svg"
                  propBackgroundColor3="#287eff"
                  icon5="/icon-2.svg"
                  propBackgroundColor4="#161616"
                  propColor8="#e0dcdd"
                  propColor9="#75a3ff"
                  propColor10="#e0dcdd"
                  propBackgroundColor5="#0d0d0d"
                  propBorder1="1px solid #1a1a1a"
                  propColor11="#e0dcdd"
                  propColor12="#0d0d0d"
                  icon6="/icon-2.svg"
                  propBackgroundColor6="#287eff"
                  icon7="/icon-2.svg"
                  propBackgroundColor7="#287eff"
                  icon8="/icon-2.svg"
                  propBackgroundColor8="#161616"
                  propColor13="#e0dcdd"
                  propColor14="#75a3ff"
                  propColor15="#e0dcdd"
                  propBackgroundColor9="#0d0d0d"
                  propBorder2="1px solid #1a1a1a"
                  propColor16="#e0dcdd"
                  propColor17="#0d0d0d"
                  icon9="/icon-2.svg"
                  propColor18="#0d0d0d"
                  icon10="/icon-2.svg"
                  propColor19="#0d0d0d"
                  icon11="/icon-2.svg"
                  propBackgroundColor10="#287eff"
                  icon12="/icon-2.svg"
                  propBackgroundColor11="#287eff"
                  icon13="/icon-2.svg"
                  propBackgroundColor12="#0d0d0d"
                  propBackgroundColor13="#161616"
                  propColor20="#e0dcdd"
                  propBackgroundColor14="#0d0d0d"
                  propColor21="#e0dcdd"
                  propBackgroundColor15="#0d0d0d"
                  propColor22="#e0dcdd"
                  propBackgroundColor16="#0d0d0d"
                  propColor23="#e0dcdd"
                  propBackgroundColor17="#0d0d0d"
                  propColor24="#e0dcdd"
                  propBackgroundColor18="#0d0d0d"
                  propColor25="#e0dcdd"
                  propBackgroundColor19="#0d0d0d"
                  propColor26="#e0dcdd"
                  propBackgroundColor20="#0d0d0d"
                  propColor27="#e0dcdd"
                  propBackgroundColor21="#0d0d0d"
                  propColor28="#e0dcdd"
                  propBackgroundColor22="#0d0d0d"
                  propColor29="#e0dcdd"
                  propBackgroundColor23="#0d0d0d"
                />
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

export default Uploaded1;
