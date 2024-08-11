import ThemeSwitch from "./ThemeSwitch";
import PropTypes from "prop-types";
import styles from "./CollapsibleSideBar.module.css";

const CollapsibleSideBar = ({ className = "" }) => {
  return (
    <div className={[styles.collapsibleSideBar, className].join(" ")}>
      <div className={styles.sideBarContentParent}>
        <div className={styles.sideBarContent}>
          <div className={styles.sideBarItems}>
            <div className={styles.logoAndCompany}>
              <img className={styles.subtractIcon} alt="" src="/subtract.svg" />
              <img
                className={styles.subtractIcon1}
                loading="lazy"
                alt=""
                src="/subtract.svg"
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
                <a className={styles.settings1}>Settings</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.dashboardContent}>
        <ThemeSwitch />
      </div>
    </div>
  );
};

CollapsibleSideBar.propTypes = {
  className: PropTypes.string,
};

export default CollapsibleSideBar;
