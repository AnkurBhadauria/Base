import { FunctionComponent, useMemo, type CSSProperties } from "react";
import ThemeSwitch from "./ThemeSwitch";
import styles from "./CollapsibleSideBar.module.css";

export type CollapsibleSideBarType = {
  className?: string;

  /** Style props */
  companyNameHeight?: CSSProperties["height"];
  companyNamePosition?: CSSProperties["position"];
  companyNameMargin?: CSSProperties["margin"];
  companyNameTop?: CSSProperties["top"];
  companyNameBottom?: CSSProperties["bottom"];
  companyNameLeft?: CSSProperties["left"];
  companyNameMaxHeight?: CSSProperties["maxHeight"];
  baseHeight?: CSSProperties["height"];
  basePosition?: CSSProperties["position"];
  baseMargin?: CSSProperties["margin"];
  baseTop?: CSSProperties["top"];
  baseBottom?: CSSProperties["bottom"];
  baseLeft?: CSSProperties["left"];
  baseMaxHeight?: CSSProperties["maxHeight"];
  groupDivTextDecoration?: CSSProperties["textDecoration"];
  notificationTextDecoration?: CSSProperties["textDecoration"];
  themeSwitchTextDecoration?: CSSProperties["textDecoration"];
};

const CollapsibleSideBar: FunctionComponent<CollapsibleSideBarType> = ({
  className = "",
  companyNameHeight,
  companyNamePosition,
  companyNameMargin,
  companyNameTop,
  companyNameBottom,
  companyNameLeft,
  companyNameMaxHeight,
  baseHeight,
  basePosition,
  baseMargin,
  baseTop,
  baseBottom,
  baseLeft,
  baseMaxHeight,
  groupDivTextDecoration,
  notificationTextDecoration,
  themeSwitchTextDecoration,
}) => {
  const subtractIconStyle: CSSProperties = useMemo(() => {
    return {
      height: companyNameHeight,
      position: companyNamePosition,
      margin: companyNameMargin,
      top: companyNameTop,
      bottom: companyNameBottom,
      left: companyNameLeft,
      maxHeight: companyNameMaxHeight,
    };
  }, [
    companyNameHeight,
    companyNamePosition,
    companyNameMargin,
    companyNameTop,
    companyNameBottom,
    companyNameLeft,
    companyNameMaxHeight,
  ]);

  const subtractIcon1Style: CSSProperties = useMemo(() => {
    return {
      height: baseHeight,
      position: basePosition,
      margin: baseMargin,
      top: baseTop,
      bottom: baseBottom,
      left: baseLeft,
      maxHeight: baseMaxHeight,
    };
  }, [
    baseHeight,
    basePosition,
    baseMargin,
    baseTop,
    baseBottom,
    baseLeft,
    baseMaxHeight,
  ]);

  const scheduleStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: groupDivTextDecoration,
    };
  }, [groupDivTextDecoration]);

  const calendarStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: notificationTextDecoration,
    };
  }, [notificationTextDecoration]);

  const settingsStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: themeSwitchTextDecoration,
    };
  }, [themeSwitchTextDecoration]);

  return (
    <div className={[styles.collapsibleSideBar, className].join(" ")}>
      <div className={styles.sideBarContainer}>
        <div className={styles.sideBarElements}>
          <div className={styles.sideBarElement}>
            <div className={styles.logoAndCompany}>
              <img
                className={styles.subtractIcon}
                alt=""
                src="/subtract1.svg"
                style={subtractIconStyle}
              />
              <img
                className={styles.subtractIcon1}
                loading="lazy"
                alt=""
                src="/subtract1.svg"
                style={subtractIcon1Style}
              />
              <div className={styles.companyName}>
                <a className={styles.base}>Base</a>
              </div>
            </div>
            <div className={styles.sideBarIcon}>
              <img
                className={styles.tablerIconLayoutSidebarLef}
                loading="lazy"
                alt=""
                src="/tablericonlayoutsidebarleftexpand.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.menuName}>
          <div className={styles.dashboardParent}>
            <div className={styles.dashboard}>
              <div className={styles.dashboardContent}>
                <div className={styles.iconlyboldcategoryParent}>
                  <img
                    className={styles.iconlyboldcategory}
                    loading="lazy"
                    alt=""
                    src="/iconlyboldcategory@2x.png"
                  />
                  <div className={styles.dashboardName}>
                    <a className={styles.dashboard1}>Dashboard</a>
                  </div>
                </div>
              </div>
              <div className={styles.separator} />
            </div>
            <div className={styles.analyticsWrapper}>
              <div className={styles.analytics}>
                <img
                  className={styles.chartIcon}
                  loading="lazy"
                  alt=""
                  src="/chart@2x.png"
                />
                <div className={styles.upload}>Upload</div>
              </div>
            </div>
          </div>
          <div className={styles.dashboardContent}>
            <div className={styles.invoice}>
              <div className={styles.invoiceIcon}>
                <img
                  className={styles.iconlyboldticket}
                  loading="lazy"
                  alt=""
                  src="/iconlyboldticket1@2x.png"
                />
              </div>
              <div className={styles.invoice1}>Invoice</div>
            </div>
          </div>
          <div className={styles.dashboardContent}>
            <div className={styles.iconlyboldcategoryParent}>
              <img
                className={styles.iconlybolddocument}
                loading="lazy"
                alt=""
                src="/iconlybolddocument1@2x.png"
              />
              <div className={styles.scheduleName}>
                <div className={styles.schedule1} style={scheduleStyle}>
                  Schedule
                </div>
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
                  src="/calendar1@2x.png"
                />
                <div className={styles.messagesWrapper}>
                  <div className={styles.frameWrapper}>
                    <div className={styles.calendar} style={calendarStyle}>
                      Calendar
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.dashboardContent}>
            <div className={styles.iconlyboldcategoryParent}>
              <img
                className={styles.iconlybolddocument}
                loading="lazy"
                alt=""
                src="/iconlyboldnotification1@2x.png"
              />
              <div className={styles.notificationSettingsCount}>
                <div className={styles.notification1}>Notification</div>
              </div>
            </div>
          </div>
          <div className={styles.dashboardContent}>
            <div className={styles.iconlyboldcategoryParent}>
              <img
                className={styles.iconlybolddocument}
                loading="lazy"
                alt=""
                src="/iconlyboldsetting1@2x.png"
              />
              <div className={styles.settingsWrapper}>
                <div className={styles.settings1} style={settingsStyle}>
                  Settings
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.dashboardContent}>
        <ThemeSwitch
          propBackgroundColor="#f2f2f2"
          propBoxShadow="0px 6px 20px rgba(0, 0, 0, 0.03)"
          propBackgroundColor1="#fff"
          tablerIconSun="/tablericonsun1.svg"
          propBoxShadow1="unset"
          propBackgroundColor2="unset"
          tablerIconMoon="/tablericonmoon1.svg"
        />
      </div>
    </div>
  );
};

export default CollapsibleSideBar;
