import ThemeSwitch from "./ThemeSwitch";
import PropTypes from "prop-types";
import styles from "./CollapsibleSideBar.module.css";

const CollapsibleSideBar = ({ className = "" }) => {
  return (
    <div className={[styles.collapsibleSideBar, className].join(" ")}>
      <div className={styles.sideBarTop}>
        <div className={styles.sideBarTopLeft}>
          <div className={styles.sideBarBrandContainer}>
            <div className={styles.logoAndCompany}>
              <img className={styles.subtractIcon} alt="" src="/subtract.svg" />
              <img
                className={styles.subtractIcon1}
                loading="lazy"
                alt=""
                src="/subtract.svg"
              />
              <div className={styles.brandNameContainer}>
                <a className={styles.base}>Base</a>
              </div>
            </div>
            <div className={styles.sideBarToggle}>
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
          <div className={styles.menuItemDashboard}>
            <div className={styles.dashboard}>
              <div className={styles.dashboardItemIconContainer}>
                <div className={styles.iconlyboldcategoryParent}>
                  <img
                    className={styles.iconlyboldcategory}
                    loading="lazy"
                    alt=""
                    src="/iconlyboldcategory@2x.png"
                  />
                  <div className={styles.dashboardItemLabelContainer}>
                    <a className={styles.dashboard1}>Dashboard</a>
                  </div>
                </div>
              </div>
              <div className={styles.separator} />
            </div>
            <div className={styles.menuItemAnalytics}>
              <div className={styles.analytics}>
                <img
                  className={styles.chartIcon}
                  loading="lazy"
                  alt=""
                  src="/chart@2x.png"
                />
                <a className={styles.upload}>Upload</a>
              </div>
            </div>
          </div>
          <div className={styles.dashboardItemIconContainer}>
            <div className={styles.invoice}>
              <div className={styles.invoiceItemIconContainer}>
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
          <div className={styles.dashboardItemIconContainer}>
            <div className={styles.iconlyboldcategoryParent}>
              <img
                className={styles.iconlybolddocument}
                loading="lazy"
                alt=""
                src="/iconlybolddocument@2x.png"
              />
              <div className={styles.scheduleItemLabelContainer}>
                <a className={styles.schedule1}>Schedule</a>
              </div>
            </div>
          </div>
          <div className={styles.dashboardItemIconContainer}>
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
                    <a className={styles.calendar}>Calendar</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.dashboardItemIconContainer}>
            <div className={styles.iconlyboldcategoryParent}>
              <img
                className={styles.iconlybolddocument}
                loading="lazy"
                alt=""
                src="/iconlyboldnotification@2x.png"
              />
              <div className={styles.menuIconLabels}>
                <div className={styles.notification1}>Notification</div>
              </div>
            </div>
          </div>
          <div className={styles.dashboardItemIconContainer}>
            <div className={styles.iconlyboldcategoryParent}>
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
      <div className={styles.dashboardItemIconContainer}>
        <ThemeSwitch />
      </div>
    </div>
  );
};

CollapsibleSideBar.propTypes = {
  className: PropTypes.string,
};

export default CollapsibleSideBar;
