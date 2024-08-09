import {
  FunctionComponent,
  useState,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import Popover from "./Popover";
import PortalPopup from "./PortalPopup";
import styles from "./FrameComponent3.module.css";

export type FrameComponent3Type = {
  className?: string;
  icon?: string;
  icon1?: string;
  icon2?: string;
  icon3?: string;
  icon4?: string;
  icon5?: string;
  icon6?: string;
  icon7?: string;
  icon8?: string;
  icon9?: string;
  icon10?: string;
  icon11?: string;
  icon12?: string;
  icon13?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propColor?: CSSProperties["color"];
  propColor1?: CSSProperties["color"];
  propColor2?: CSSProperties["color"];
  propBackgroundColor1?: CSSProperties["backgroundColor"];
  propBorder?: CSSProperties["border"];
  propColor3?: CSSProperties["color"];
  propColor4?: CSSProperties["color"];
  propColor5?: CSSProperties["color"];
  propColor6?: CSSProperties["color"];
  propColor7?: CSSProperties["color"];
  propBackgroundColor2?: CSSProperties["backgroundColor"];
  propBackgroundColor3?: CSSProperties["backgroundColor"];
  propBackgroundColor4?: CSSProperties["backgroundColor"];
  propColor8?: CSSProperties["color"];
  propColor9?: CSSProperties["color"];
  propColor10?: CSSProperties["color"];
  propBackgroundColor5?: CSSProperties["backgroundColor"];
  propBorder1?: CSSProperties["border"];
  propColor11?: CSSProperties["color"];
  propColor12?: CSSProperties["color"];
  propBackgroundColor6?: CSSProperties["backgroundColor"];
  propBackgroundColor7?: CSSProperties["backgroundColor"];
  propBackgroundColor8?: CSSProperties["backgroundColor"];
  propColor13?: CSSProperties["color"];
  propColor14?: CSSProperties["color"];
  propColor15?: CSSProperties["color"];
  propBackgroundColor9?: CSSProperties["backgroundColor"];
  propBorder2?: CSSProperties["border"];
  propColor16?: CSSProperties["color"];
  propColor17?: CSSProperties["color"];
  propColor18?: CSSProperties["color"];
  propColor19?: CSSProperties["color"];
  propBackgroundColor10?: CSSProperties["backgroundColor"];
  propBackgroundColor11?: CSSProperties["backgroundColor"];
  propBackgroundColor12?: CSSProperties["backgroundColor"];
  propBackgroundColor13?: CSSProperties["backgroundColor"];
  propColor20?: CSSProperties["color"];
  propBackgroundColor14?: CSSProperties["backgroundColor"];
  propColor21?: CSSProperties["color"];
  propBackgroundColor15?: CSSProperties["backgroundColor"];
  propColor22?: CSSProperties["color"];
  propBackgroundColor16?: CSSProperties["backgroundColor"];
  propColor23?: CSSProperties["color"];
  propBackgroundColor17?: CSSProperties["backgroundColor"];
  propColor24?: CSSProperties["color"];
  propBackgroundColor18?: CSSProperties["backgroundColor"];
  propColor25?: CSSProperties["color"];
  propBackgroundColor19?: CSSProperties["backgroundColor"];
  propColor26?: CSSProperties["color"];
  propBackgroundColor20?: CSSProperties["backgroundColor"];
  propColor27?: CSSProperties["color"];
  propBackgroundColor21?: CSSProperties["backgroundColor"];
  propColor28?: CSSProperties["color"];
  propBackgroundColor22?: CSSProperties["backgroundColor"];
  propColor29?: CSSProperties["color"];
  propBackgroundColor23?: CSSProperties["backgroundColor"];
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
  propBackgroundColor,
  propColor,
  propColor1,
  propColor2,
  propBackgroundColor1,
  propBorder,
  propColor3,
  propColor4,
  icon,
  propColor5,
  icon1,
  propColor6,
  icon2,
  propColor7,
  icon3,
  propBackgroundColor2,
  icon4,
  propBackgroundColor3,
  icon5,
  propBackgroundColor4,
  propColor8,
  propColor9,
  propColor10,
  propBackgroundColor5,
  propBorder1,
  propColor11,
  propColor12,
  icon6,
  propBackgroundColor6,
  icon7,
  propBackgroundColor7,
  icon8,
  propBackgroundColor8,
  propColor13,
  propColor14,
  propColor15,
  propBackgroundColor9,
  propBorder2,
  propColor16,
  propColor17,
  icon9,
  propColor18,
  icon10,
  propColor19,
  icon11,
  propBackgroundColor10,
  icon12,
  propBackgroundColor11,
  icon13,
  propBackgroundColor12,
  propBackgroundColor13,
  propColor20,
  propBackgroundColor14,
  propColor21,
  propBackgroundColor15,
  propColor22,
  propBackgroundColor16,
  propColor23,
  propBackgroundColor17,
  propColor24,
  propBackgroundColor18,
  propColor25,
  propBackgroundColor19,
  propColor26,
  propBackgroundColor20,
  propColor27,
  propBackgroundColor21,
  propColor28,
  propBackgroundColor22,
  propColor29,
  propBackgroundColor23,
}) => {
  const [isPopoverOpen, setPopoverOpen] = useState(false);
  const tableRowStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const dataTypeStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const dataType1Style: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const dataType2Style: CSSProperties = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  const chipHolderStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
      border: propBorder,
    };
  }, [propBackgroundColor1, propBorder]);

  const dataType3Style: CSSProperties = useMemo(() => {
    return {
      color: propColor3,
    };
  }, [propColor3]);

  const labelTextStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor4,
    };
  }, [propColor4]);

  const labelText1Style: CSSProperties = useMemo(() => {
    return {
      color: propColor5,
    };
  }, [propColor5]);

  const labelText2Style: CSSProperties = useMemo(() => {
    return {
      color: propColor6,
    };
  }, [propColor6]);

  const labelText3Style: CSSProperties = useMemo(() => {
    return {
      color: propColor7,
    };
  }, [propColor7]);

  const labelStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor2,
    };
  }, [propBackgroundColor2]);

  const label1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor3,
    };
  }, [propBackgroundColor3]);

  const tableRow1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor4,
    };
  }, [propBackgroundColor4]);

  const dataType4Style: CSSProperties = useMemo(() => {
    return {
      color: propColor8,
    };
  }, [propColor8]);

  const dataType5Style: CSSProperties = useMemo(() => {
    return {
      color: propColor9,
    };
  }, [propColor9]);

  const dataType6Style: CSSProperties = useMemo(() => {
    return {
      color: propColor10,
    };
  }, [propColor10]);

  const chipHolder1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor5,
      border: propBorder1,
    };
  }, [propBackgroundColor5, propBorder1]);

  const dataType7Style: CSSProperties = useMemo(() => {
    return {
      color: propColor11,
    };
  }, [propColor11]);

  const labelText4Style: CSSProperties = useMemo(() => {
    return {
      color: propColor12,
    };
  }, [propColor12]);

  const label2Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor6,
    };
  }, [propBackgroundColor6]);

  const label3Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor7,
    };
  }, [propBackgroundColor7]);

  const tableRow2Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor8,
    };
  }, [propBackgroundColor8]);

  const dataType8Style: CSSProperties = useMemo(() => {
    return {
      color: propColor13,
    };
  }, [propColor13]);

  const dataType9Style: CSSProperties = useMemo(() => {
    return {
      color: propColor14,
    };
  }, [propColor14]);

  const dataType10Style: CSSProperties = useMemo(() => {
    return {
      color: propColor15,
    };
  }, [propColor15]);

  const chipHolder2Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor9,
      border: propBorder2,
    };
  }, [propBackgroundColor9, propBorder2]);

  const dataType11Style: CSSProperties = useMemo(() => {
    return {
      color: propColor16,
    };
  }, [propColor16]);

  const labelText5Style: CSSProperties = useMemo(() => {
    return {
      color: propColor17,
    };
  }, [propColor17]);

  const labelText6Style: CSSProperties = useMemo(() => {
    return {
      color: propColor18,
    };
  }, [propColor18]);

  const labelText7Style: CSSProperties = useMemo(() => {
    return {
      color: propColor19,
    };
  }, [propColor19]);

  const label4Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor10,
    };
  }, [propBackgroundColor10]);

  const label5Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor11,
    };
  }, [propBackgroundColor11]);

  const popoverStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor12,
    };
  }, [propBackgroundColor12]);

  const menuItemStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor13,
    };
  }, [propBackgroundColor13]);

  const titleStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor20,
    };
  }, [propColor20]);

  const menuItem1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor14,
    };
  }, [propBackgroundColor14]);

  const title1Style: CSSProperties = useMemo(() => {
    return {
      color: propColor21,
    };
  }, [propColor21]);

  const menuItem2Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor15,
    };
  }, [propBackgroundColor15]);

  const title2Style: CSSProperties = useMemo(() => {
    return {
      color: propColor22,
    };
  }, [propColor22]);

  const menuItem3Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor16,
    };
  }, [propBackgroundColor16]);

  const title3Style: CSSProperties = useMemo(() => {
    return {
      color: propColor23,
    };
  }, [propColor23]);

  const menuItem4Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor17,
    };
  }, [propBackgroundColor17]);

  const title4Style: CSSProperties = useMemo(() => {
    return {
      color: propColor24,
    };
  }, [propColor24]);

  const menuItem5Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor18,
    };
  }, [propBackgroundColor18]);

  const title5Style: CSSProperties = useMemo(() => {
    return {
      color: propColor25,
    };
  }, [propColor25]);

  const menuItem6Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor19,
    };
  }, [propBackgroundColor19]);

  const title6Style: CSSProperties = useMemo(() => {
    return {
      color: propColor26,
    };
  }, [propColor26]);

  const menuItem7Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor20,
    };
  }, [propBackgroundColor20]);

  const title7Style: CSSProperties = useMemo(() => {
    return {
      color: propColor27,
    };
  }, [propColor27]);

  const menuItem8Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor21,
    };
  }, [propBackgroundColor21]);

  const title8Style: CSSProperties = useMemo(() => {
    return {
      color: propColor28,
    };
  }, [propColor28]);

  const menuItem9Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor22,
    };
  }, [propBackgroundColor22]);

  const title9Style: CSSProperties = useMemo(() => {
    return {
      color: propColor29,
    };
  }, [propColor29]);

  const menuItem10Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor23,
    };
  }, [propBackgroundColor23]);

  const openPopover = useCallback(() => {
    setPopoverOpen(true);
  }, []);

  const closePopover = useCallback(() => {
    setPopoverOpen(false);
  }, []);

  return (
    <>
      <div className={[styles.tableRowParent, className].join(" ")}>
        <div className={styles.tableRow} style={tableRowStyle}>
          <div className={styles.checkbox}>
            <div className={styles.box} />
          </div>
          <div className={styles.dataColumns}>
            <div className={styles.dataTypeSet}>
              <div className={styles.dataType} style={dataTypeStyle}>
                03
              </div>
            </div>
            <div className={styles.dataTypeWrapper}>
              <a
                className={styles.dataType1}
                href="https://www.google.com"
                target="_blank"
                style={dataType1Style}
              >
                www.google.com
              </a>
            </div>
            <div className={styles.dataTypeContainer}>
              <div className={styles.dataType2} style={dataType2Style}>
                prefixsample
              </div>
            </div>
            <div className={styles.chipHolder} style={chipHolderStyle}>
              <div className={styles.dataType3} style={dataType3Style}>
                Select Tags
              </div>
              <div className={styles.button} onClick={openPopover}>
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
                <div className={styles.labelText} style={labelTextStyle}>
                  TAG 1
                </div>
                <img className={styles.icon} loading="lazy" alt="" src={icon} />
              </div>
              <div className={styles.label1}>
                <div className={styles.labelText1} style={labelText1Style}>
                  TAG 2
                </div>
                <img
                  className={styles.icon}
                  loading="lazy"
                  alt=""
                  src={icon1}
                />
              </div>
              <div className={styles.label1}>
                <div className={styles.labelText1} style={labelText2Style}>
                  TAG 3
                </div>
                <img className={styles.icon} alt="" src={icon2} />
              </div>
              <div className={styles.label}>
                <div className={styles.labelText3} style={labelText3Style}>
                  TAG 4
                </div>
                <img className={styles.icon} alt="" src={icon3} />
              </div>
              <div className={styles.label4} style={labelStyle}>
                <div className={styles.labelText4}>your label</div>
                <img className={styles.controlsIcon} alt="" src={icon4} />
              </div>
              <div className={styles.label4} style={label1Style}>
                <div className={styles.labelText4}>your label</div>
                <img className={styles.controlsIcon} alt="" src={icon5} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.tableRow1} style={tableRow1Style}>
          <div className={styles.checkbox}>
            <div className={styles.box} />
          </div>
          <div className={styles.dataColumns}>
            <div className={styles.dataTypeSet}>
              <div className={styles.dataType} style={dataType4Style}>
                04
              </div>
            </div>
            <div className={styles.dataTypeWrapper}>
              <a
                className={styles.dataType1}
                href="https://www.google.com"
                target="_blank"
                style={dataType5Style}
              >
                www.google.com
              </a>
            </div>
            <div className={styles.dataTypeContainer}>
              <div className={styles.dataType2} style={dataType6Style}>
                prefixsample
              </div>
            </div>
            <div className={styles.chipHolder} style={chipHolder1Style}>
              <div className={styles.dataType3} style={dataType7Style}>
                Select Tags
              </div>
              <div className={styles.button} onClick={openPopover}>
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
              <div className={styles.label}>
                <div className={styles.labelText} style={labelText4Style}>
                  TAG 1
                </div>
                <img
                  className={styles.icon}
                  loading="lazy"
                  alt=""
                  src={icon6}
                />
              </div>
              <div className={styles.label4} style={label2Style}>
                <div className={styles.labelText4}>your label</div>
                <img className={styles.controlsIcon} alt="" src={icon7} />
              </div>
              <div className={styles.label4} style={label3Style}>
                <div className={styles.labelText4}>your label</div>
                <img className={styles.controlsIcon} alt="" src={icon8} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.tableRow2} style={tableRow2Style}>
          <div className={styles.checkbox}>
            <div className={styles.box} />
          </div>
          <div className={styles.dataColumns}>
            <div className={styles.dataTypeSet}>
              <div className={styles.dataType} style={dataType8Style}>
                05
              </div>
            </div>
            <div className={styles.dataTypeWrapper}>
              <a
                className={styles.dataType1}
                href="https://www.google.com"
                target="_blank"
                style={dataType9Style}
              >
                www.google.com
              </a>
            </div>
            <div className={styles.dataTypeContainer}>
              <div className={styles.dataType2} style={dataType10Style}>
                prefixsample
              </div>
            </div>
            <div className={styles.chipHolder} style={chipHolder2Style}>
              <div className={styles.dataType3} style={dataType11Style}>
                Select Tags
              </div>
              <div className={styles.button} onClick={openPopover}>
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
              <div className={styles.label}>
                <div className={styles.labelText} style={labelText5Style}>
                  TAG 1
                </div>
                <img
                  className={styles.icon}
                  loading="lazy"
                  alt=""
                  src={icon9}
                />
              </div>
              <div className={styles.label1}>
                <div className={styles.labelText1} style={labelText6Style}>
                  TAG 2
                </div>
                <img
                  className={styles.icon}
                  loading="lazy"
                  alt=""
                  src={icon10}
                />
              </div>
              <div className={styles.label1}>
                <div className={styles.labelText1} style={labelText7Style}>
                  TAG 3
                </div>
                <img
                  className={styles.icon}
                  loading="lazy"
                  alt=""
                  src={icon11}
                />
              </div>
              <div className={styles.label4} style={label4Style}>
                <div className={styles.labelText4}>your label</div>
                <img className={styles.controlsIcon} alt="" src={icon12} />
              </div>
              <div className={styles.label4} style={label5Style}>
                <div className={styles.labelText4}>your label</div>
                <img className={styles.controlsIcon} alt="" src={icon13} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.popover} style={popoverStyle}>
          <div className={styles.menuItem} style={menuItemStyle}>
            <div className={styles.title} style={titleStyle}>
              Tag 1
            </div>
          </div>
          <div className={styles.menuItem1} style={menuItem1Style}>
            <div className={styles.title} style={title1Style}>
              Tag 2
            </div>
            <div className={styles.checkbox} />
          </div>
          <div className={styles.menuItem2} style={menuItem2Style}>
            <div className={styles.title} style={title2Style}>
              Tag 3
            </div>
          </div>
          <div className={styles.menuItem2} style={menuItem3Style}>
            <div className={styles.title} style={title3Style}>
              Tag 4
            </div>
          </div>
          <div className={styles.menuItem2} style={menuItem4Style}>
            <div className={styles.title} style={title4Style}>
              Tag 5
            </div>
          </div>
          <div className={styles.menuItem5} style={menuItem5Style}>
            <div className={styles.title5} style={title5Style}>
              Tag 6
            </div>
          </div>
          <div className={styles.menuItem5} style={menuItem6Style}>
            <div className={styles.title5} style={title6Style}>
              Tag 7
            </div>
          </div>
          <div className={styles.menuItem5} style={menuItem7Style}>
            <div className={styles.title5} style={title7Style}>
              Tag 8
            </div>
          </div>
          <div className={styles.menuItem5} style={menuItem8Style}>
            <div className={styles.title5} style={title8Style}>
              Tag 9
            </div>
          </div>
          <div className={styles.menuItem5} style={menuItem9Style}>
            <div className={styles.title5} style={title9Style}>
              Tag 10
            </div>
          </div>
          <div className={styles.menuItem10} style={menuItem10Style}>
            <div className={styles.title5}>Single line item</div>
            <div className={styles.radioButton1}>
              <div className={styles.circle} />
            </div>
          </div>
        </div>
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

export default FrameComponent3;
