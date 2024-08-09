import { FunctionComponent, useMemo, type CSSProperties } from "react";
import ThemeSwitch from "./ThemeSwitch";
import styles from "./CollapsibleSideBar1.module.css";

export type CollapsibleSideBar1Type = {
  className?: string;

  /** Style props */
  frameDivMarginTop?: CSSProperties["marginTop"];
  subtractIconHeight?: CSSProperties["height"];
  subtractIconPosition?: CSSProperties["position"];
  subtractIconMargin?: CSSProperties["margin"];
  subtractIconTop?: CSSProperties["top"];
  subtractIconBottom?: CSSProperties["bottom"];
  subtractIconLeft?: CSSProperties["left"];
  subtractIconMaxHeight?: CSSProperties["maxHeight"];
  logoContainerHeight?: CSSProperties["height"];
  logoContainerPosition?: CSSProperties["position"];
  logoContainerMargin?: CSSProperties["margin"];
  logoContainerTop?: CSSProperties["top"];
  logoContainerBottom?: CSSProperties["bottom"];
  logoContainerLeft?: CSSProperties["left"];
  logoContainerMaxHeight?: CSSProperties["maxHeight"];
};

const CollapsibleSideBar1: FunctionComponent<CollapsibleSideBar1Type> = ({
  className = "",
  frameDivMarginTop,
  subtractIconHeight,
  subtractIconPosition,
  subtractIconMargin,
  subtractIconTop,
  subtractIconBottom,
  subtractIconLeft,
  subtractIconMaxHeight,
  logoContainerHeight,
  logoContainerPosition,
  logoContainerMargin,
  logoContainerTop,
  logoContainerBottom,
  logoContainerLeft,
  logoContainerMaxHeight,
}) => {
  const collapsibleSideBarStyle: CSSProperties = useMemo(() => {
    return {
      marginTop: frameDivMarginTop,
    };
  }, [frameDivMarginTop]);

  const subtractIcon2Style: CSSProperties = useMemo(() => {
    return {
      height: subtractIconHeight,
      position: subtractIconPosition,
      margin: subtractIconMargin,
      top: subtractIconTop,
      bottom: subtractIconBottom,
      left: subtractIconLeft,
      maxHeight: subtractIconMaxHeight,
    };
  }, [
    subtractIconHeight,
    subtractIconPosition,
    subtractIconMargin,
    subtractIconTop,
    subtractIconBottom,
    subtractIconLeft,
    subtractIconMaxHeight,
  ]);

  const subtractIcon3Style: CSSProperties = useMemo(() => {
    return {
      height: logoContainerHeight,
      position: logoContainerPosition,
      margin: logoContainerMargin,
      top: logoContainerTop,
      bottom: logoContainerBottom,
      left: logoContainerLeft,
      maxHeight: logoContainerMaxHeight,
    };
  }, [
    logoContainerHeight,
    logoContainerPosition,
    logoContainerMargin,
    logoContainerTop,
    logoContainerBottom,
    logoContainerLeft,
    logoContainerMaxHeight,
  ]);

  return (
    <div
      className={[styles.collapsibleSideBar, className].join(" ")}
      style={collapsibleSideBarStyle}
    >
      <div className={styles.sideBarContentParent}>
        <div className={styles.sideBarContent}>
          <div className={styles.sideBarItems}>
            <div className={styles.logoAndCompany}>
              <img
                className={styles.subtractIcon}
                alt=""
                src="/subtract.svg"
                style={subtractIcon2Style}
              />
              <img
                className={styles.subtractIcon1}
                loading="lazy"
                alt=""
                src="/subtract.svg"
                style={subtractIcon3Style}
              />
              <div className={styles.logoContainer}>
                <a className={styles.base}>Base</a>
              </div>
            </div>
            <input className={styles.sideBarExpand} type="checkbox" />
          </div>
        </div>
        <div className={styles.menuName}>
          <div className={styles.dashboardItem}>
            <div className={styles.dashboard}>
              <div className={styles.dashboardContent}>
                <div className={styles.dashboardIconLabel}>
                  <img
                    className={styles.iconlyboldcategory}
                    loading="lazy"
                    alt=""
                    src="/iconlyboldcategory@2x.png"
                  />
                  <div className={styles.dashboardLabel}>
                    <a className={styles.dashboard1}>Dashboard</a>
                  </div>
                </div>
              </div>
              <div className={styles.itemDivider} />
            </div>
            <div className={styles.analyticsItem}>
              <div className={styles.analytics}>
                <input className={styles.chart} type="checkbox" />
                <div className={styles.upload}>Upload</div>
              </div>
            </div>
          </div>
          <div className={styles.dashboardContent}>
            <div className={styles.dashboardIconLabel}>
              <div className={styles.invoiceIconLabel}>
                <img
                  className={styles.iconlyboldticket}
                  loading="lazy"
                  alt=""
                  src="/iconlyboldticket@2x.png"
                />
              </div>
              <div className={styles.invoice1}>Invoice</div>
            </div>
          </div>
          <div className={styles.dashboardContent}>
            <div className={styles.dashboardIconLabel}>
              <img
                className={styles.iconlybolddocument}
                loading="lazy"
                alt=""
                src="/iconlybolddocument@2x.png"
              />
              <div className={styles.scheduleWrapper}>
                <div className={styles.schedule1}>Schedule</div>
              </div>
            </div>
          </div>
          <div className={styles.dashboardContent}>
            <div className={styles.frameWrapper}>
              <div className={styles.calendarParent}>
                <img
                  className={styles.iconlybolddocument}
                  loading="lazy"
                  alt=""
                  src="/calendar@2x.png"
                />
                <div className={styles.messagesWrapper}>
                  <div className={styles.frameWrapper}>
                    <div className={styles.calendar}>Calendar</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.dashboardContent}>
            <div className={styles.dashboardIconLabel}>
              <img
                className={styles.iconlybolddocument}
                loading="lazy"
                alt=""
                src="/iconlyboldnotification@2x.png"
              />
              <div className={styles.notificationWrapper}>
                <div className={styles.notification1}>Notification</div>
              </div>
            </div>
          </div>
          <div className={styles.dashboardContent}>
            <div className={styles.dashboardIconLabel}>
              <img
                className={styles.iconlybolddocument}
                loading="lazy"
                alt=""
                src="/iconlyboldsetting@2x.png"
              />
              <div className={styles.settingsWrapper}>
                <div className={styles.settings1}>Settings</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.dashboardContent}>
        <ThemeSwitch
          propBackgroundColor="#3d3d3d"
          propBoxShadow="unset"
          propBackgroundColor1="unset"
          tablerIconSun="/tablericonsun.svg"
          propBoxShadow1="0px 6px 20px rgba(0, 0, 0, 0.03)"
          propBackgroundColor2="#1f1f1f"
          tablerIconMoon="/tablericonmoon.svg"
        />
      </div>
    </div>
  );
};

export default CollapsibleSideBar1;
