// GENERATED from public/housekeeping-setup/hks-05-task-types-and-credits/index.html by scripts/convert_legacy.py.
// Markup converted to JSX. Legacy page scripts and inline on* handlers are not ported yet.
import { Link } from '../../lib/router.jsx';
import ScreenShell from '../../components/ScreenShell.jsx';

const SHEETS = [
  {
    "href": "/css/aviv/aviv.css",
    "media": null
  },
  {
    "href": "/css/aviv/fd.css",
    "media": null
  },
  {
    "href": "/css/aviv/fds.css",
    "media": null
  },
  {
    "href": "/css/aviv/housekeeping.css",
    "media": null
  },
  {
    "href": "/housekeeping-setup/hks-05-task-types-and-credits/hks-05-task-types-and-credits.css",
    "media": null
  },
  {
    "href": "/css/aviv/refresh.css",
    "media": null
  },
  {
    "href": "/css/aviv/responsive.css",
    "media": null
  },
  {
    "href": "/css/aviv/theme.css",
    "media": null
  },
  {
    "href": "/css/aviv/print.css",
    "media": "print"
  }
];
const INLINE_CSS = null;

export default function HousekeepingSetupHks05TaskTypesAndCredits() {
  return (
    <ScreenShell title="Task Types & Credits" sheets={SHEETS} inlineCss={INLINE_CSS}>
      <div data-screen="HKS-05" data-code="HKS-05" data-static="1" className="legacy-body">
        <a className="skip-link" href="#main">{"Skip to content"}</a>
        <div className="app">
          <input className="navtoggle" type="checkbox" id="nav-toggle" aria-label="Menu" />
          <aside className="sidebar" aria-label="Sidebar">
            <div className="sidebar__brand">
              <Link className="sidebar__logo" aria-label="Aviv PMS home" to={"/common/cm-06-home-launcher"}>
                <span className="sidebar__mark">
                  <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#leaf" />
                  </svg>
                </span>
                <span className="sidebar__name">{"Aviv PMS"}</span>
              </Link>
              <label className="sidebar__close" htmlFor="nav-toggle" title="Close the menu" aria-hidden="true">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#x" />
                </svg>
              </label>
            </div>
            <nav className="nav" aria-label="Main">
              <div className="nav__section">
                <div className="nav__list">
                  <Link className="nav__item" data-nav="CM-06" title="Home Launcher" to={"/common/cm-06-home-launcher"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#home" />
                    </svg>
                    <span className="nav__label">{"Home Launcher"}</span>
                  </Link>
                </div>
              </div>
              <details className="nav__sub" data-group="setup" open={true}>
                <summary className="nav__item nav__group">
                  {"Setup"}
                  <svg className="icon nav__chev" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#chevron-down" />
                  </svg>
                </summary>
                <div className="nav__list">
                  <Link className="nav__item" data-nav="CM-07" title="Home Launcher Setup" to={"/common/cm-07-home-launcher-setup"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#image" />
                    </svg>
                    <span className="nav__label">{"Home Launcher Setup"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="RSS-01" title="Setup Home (checklist)" to={"/setup/rss-01-setup-home-checklist"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#clipboard-check" />
                    </svg>
                    <span className="nav__label">{"Reservation Setup"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="FDS-01" title="Front Desk Setup Home" to={"/front-desk-setup/fds-01-front-desk-setup-home"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#sliders" />
                    </svg>
                    <span className="nav__label">{"Front Desk Setup"}</span>
                  </Link>
                  <Link className="nav__item is-active" data-nav="HKS-01" aria-current="page" title="Housekeeping Setup Home" to={"/housekeeping-setup/hks-01-housekeeping-setup-home"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#broom" />
                    </svg>
                    <span className="nav__label">{"Housekeeping Setup"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="LAS-01" title="Laundry Setup Home" to={"/laundry-setup/las-01-laundry-setup-home"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#layers" />
                    </svg>
                    <span className="nav__label">{"Laundry Setup"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="MBS-01" title="Minibar Setup Home" to={"/minibar-setup/mbs-01-minibar-setup-home"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#minibar" />
                    </svg>
                    <span className="nav__label">{"Minibar Setup"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="LNS-01" title="Linen and Amenities Setup Home" to={"/linen-and-amenities-setup/lns-01-linen-and-amenities-setup-home"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#bed" />
                    </svg>
                    <span className="nav__label">{"Linen Setup"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="LFS-01" title="Lost and Found Setup Home" to={"/lost-and-found-setup/lfs-01-lost-and-found-setup-home"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#archive" />
                    </svg>
                    <span className="nav__label">{"Lost & Found Setup"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="MTS-01" title="Engineering Setup Home" to={"/engineering-setup/mts-01-engineering-setup-home"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#wrench" />
                    </svg>
                    <span className="nav__label">{"Engineering Setup"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="RTS-01" title="Restaurant POS Setup Home" to={"/restaurant-pos-setup/rts-01-pos-setup-home"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#utensils" />
                    </svg>
                    <span className="nav__label">{"Restaurant POS Setup"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="KTS-01" title="Kitchen Display Setup – Stations" to={"/kitchen-display-setup/kts-01-stations-and-screens"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#monitor" />
                    </svg>
                    <span className="nav__label">{"Kitchen Display Setup"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="BQS-01" title="Banquets & Events Setup – Venues" to={"/banquets-and-events-setup/bqs-01-venues-and-set-ups"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#calendar-range" />
                    </svg>
                    <span className="nav__label">{"Banquets Setup"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="PRS-01" title="Purchase Setup – Vendors" to={"/purchase-setup/prs-01-vendor-master"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#package" />
                    </svg>
                    <span className="nav__label">{"Purchase Setup"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="STS-01" title="Stores Setup – Items" to={"/stores-setup/sts-01-item-master"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#warehouse" />
                    </svg>
                    <span className="nav__label">{"Stores Setup"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="CCS-01" title="Cost Control Setup" to={"/cost-control-setup/ccs-01-targets-and-tolerances"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#percent" />
                    </svg>
                    <span className="nav__label">{"Cost Control Setup"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="FNS-01" title="Finance Setup" to={"/finance-setup/fns-01-bank-accounts"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#banknote" />
                    </svg>
                    <span className="nav__label">{"Finance Setup"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="ACS-01" title="General Ledger Setup" to={"/general-ledger-setup/acs-01-chart-of-accounts"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#book-open" />
                    </svg>
                    <span className="nav__label">{"General Ledger Setup"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="TXS-01" title="Tax Setup" to={"/tax-setup/txs-01-gst-registrations"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#percent" />
                    </svg>
                    <span className="nav__label">{"Tax Setup"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="HRS-01" title="HR & Payroll Setup" to={"/hr-and-payroll-setup/hrs-01-establishment"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#users" />
                    </svg>
                    <span className="nav__label">{"HR & Payroll Setup"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="RVS-01" title="Revenue Management Setup" to={"/revenue-management-setup/rvs-01-segments-and-channel-groups"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#trending-up" />
                    </svg>
                    <span className="nav__label">{"Revenue Setup"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="DAS-01" title="Dashboards & Approvals Setup" to={"/dashboards-and-approvals-setup/das-01-approval-types-and-escalation"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#clipboard-check" />
                    </svg>
                    <span className="nav__label">{"Approvals Setup"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="ANS-01" title="Analytics & Reports Setup" to={"/analytics-and-reports-setup/ans-01-report-registry"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#file-text" />
                    </svg>
                    <span className="nav__label">{"Reports Setup"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="MSS-01" title="MIS & Budgeting Setup" to={"/mis-and-budgeting-setup/mss-01-statement-lines-and-mapping"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#bar-chart" />
                    </svg>
                    <span className="nav__label">{"MIS Setup"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="OWS-01" title="Owner App & Multi-property Setup" to={"/owner-app-and-multi-property-setup/ows-01-property-groups"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#building-2" />
                    </svg>
                    <span className="nav__label">{"Owner App Setup"}</span>
                  </Link>
                </div>
              </details>
              <details className="nav__sub" data-group="housekeeping">
                <summary className="nav__item nav__group">
                  {"Housekeeping"}
                  <svg className="icon nav__chev" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#chevron-down" />
                  </svg>
                </summary>
                <div className="nav__list">
                  <Link className="nav__item" data-nav="HK-01" title="Dashboard" to={"/housekeeping/hk-01-housekeeping-dashboard"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#layout-dashboard" />
                    </svg>
                    <span className="nav__label">{"Dashboard"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="HK-02" title="Room Status" to={"/housekeeping/hk-02-room-status-board"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#door" />
                    </svg>
                    <span className="nav__label">{"Room Status"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="HK-04" title="Allocation" to={"/housekeeping/hk-04-room-allocation"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#users" />
                    </svg>
                    <span className="nav__label">{"Allocation"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="HK-08" title="Inspection" to={"/housekeeping/hk-08-inspection-queue"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#clipboard-check" />
                    </svg>
                    <span className="nav__label">{"Inspection"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="HK-10" title="Discrepancies" to={"/housekeeping/hk-10-room-discrepancies"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#alert" />
                    </svg>
                    <span className="nav__label">{"Discrepancies"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="HK-11" title="Out of Order" to={"/housekeeping/hk-11-out-of-order-out-of-service"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#wrench" />
                    </svg>
                    <span className="nav__label">{"Out of Order"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="HK-12" title="Guest Service" to={"/housekeeping/hk-12-guest-service-status"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#bell-ring" />
                    </svg>
                    <span className="nav__label">{"Guest Service"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="HK-15" title="Public Areas" to={"/housekeeping/hk-15-public-area-cleaning"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#map-pin" />
                    </svg>
                    <span className="nav__label">{"Public Areas"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="HK-16" title="Deep Cleaning" to={"/housekeeping/hk-16-deep-cleaning-and-projects"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#broom" />
                    </svg>
                    <span className="nav__label">{"Deep Cleaning"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="HK-17" title="Requests" to={"/housekeeping/hk-17-housekeeping-requests"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#message-square" />
                    </svg>
                    <span className="nav__label">{"Requests"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="HK-18" title="Planning" to={"/housekeeping/hk-18-occupancy-and-staffing-forecast"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#calendar-range" />
                    </svg>
                    <span className="nav__label">{"Planning"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="HK-19" title="Log Book" to={"/housekeeping/hk-19-log-book-and-handover"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#book-open" />
                    </svg>
                    <span className="nav__label">{"Log Book"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="HK-24" title="Shift Handover" to={"/housekeeping/hk-24-shift-handover"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#message-circle" />
                    </svg>
                    <span className="nav__label">{"Shift Handover"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="HK-21" title="Reports" to={"/housekeeping/hk-21-housekeeping-reports"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#bar-chart" />
                    </svg>
                    <span className="nav__label">{"Reports"}</span>
                  </Link>
                </div>
              </details>
              <details className="nav__sub" data-group="laundry">
                <summary className="nav__item nav__group">
                  {"Laundry"}
                  <svg className="icon nav__chev" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#chevron-down" />
                  </svg>
                </summary>
                <div className="nav__list">
                  <Link className="nav__item" data-nav="LA-01" title="Dashboard" to={"/laundry/la-01-laundry-dashboard"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#layout-dashboard" />
                    </svg>
                    <span className="nav__label">{"Dashboard"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="LA-02" title="Guest Laundry" to={"/laundry/la-02-guest-laundry-orders"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#package" />
                    </svg>
                    <span className="nav__label">{"Guest Laundry"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="LA-04" title="Production" to={"/laundry/la-04-production-board"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#layers" />
                    </svg>
                    <span className="nav__label">{"Production"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="LA-05" title="Delivery" to={"/laundry/la-05-delivery-and-billing"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#send" />
                    </svg>
                    <span className="nav__label">{"Delivery"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="LA-06" title="House Linen" to={"/laundry/la-06-house-linen-exchange"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#bed" />
                    </svg>
                    <span className="nav__label">{"House Linen"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="LA-08" title="Vendor Laundry" to={"/laundry/la-08-vendor-laundry-challans"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#building-2" />
                    </svg>
                    <span className="nav__label">{"Vendor Laundry"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="LA-09" title="Uniforms" to={"/laundry/la-09-uniform-exchange"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#id-card" />
                    </svg>
                    <span className="nav__label">{"Uniforms"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="LA-10" title="Machines" to={"/laundry/la-10-machines-and-run-log"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#gauge" />
                    </svg>
                    <span className="nav__label">{"Machines"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="LA-11" title="Reports" to={"/laundry/la-11-laundry-reports"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#bar-chart" />
                    </svg>
                    <span className="nav__label">{"Reports"}</span>
                  </Link>
                </div>
              </details>
              <details className="nav__sub" data-group="minibar">
                <summary className="nav__item nav__group">
                  {"Minibar"}
                  <svg className="icon nav__chev" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#chevron-down" />
                  </svg>
                </summary>
                <div className="nav__list">
                  <Link className="nav__item" data-nav="MB-01" title="Dashboard" to={"/minibar/mb-01-minibar-dashboard"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#layout-dashboard" />
                    </svg>
                    <span className="nav__label">{"Dashboard"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="MB-02" title="Rooms" to={"/minibar/mb-02-room-minibar-status"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#door" />
                    </svg>
                    <span className="nav__label">{"Rooms"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="MB-03" title="Posting Queue" to={"/minibar/mb-03-posting-queue"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#receipt" />
                    </svg>
                    <span className="nav__label">{"Posting Queue"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="MB-04" title="Replenishment" to={"/minibar/mb-04-replenishment"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#refresh" />
                    </svg>
                    <span className="nav__label">{"Replenishment"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="MB-05" title="Minibar Store" to={"/minibar/mb-05-minibar-store-and-cart-stock"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#archive" />
                    </svg>
                    <span className="nav__label">{"Minibar Store"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="MB-06" title="Expiry" to={"/minibar/mb-06-expiry-tracking"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#clock" />
                    </svg>
                    <span className="nav__label">{"Expiry"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="MB-07" title="Locks" to={"/minibar/mb-07-locked-and-alcohol-free-rooms"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#lock" />
                    </svg>
                    <span className="nav__label">{"Locks"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="MB-08" title="Stock Count" to={"/minibar/mb-08-minibar-stock-count"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#clipboard-list" />
                    </svg>
                    <span className="nav__label">{"Stock Count"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="MB-09" title="Reports" to={"/minibar/mb-09-minibar-reports"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#bar-chart" />
                    </svg>
                    <span className="nav__label">{"Reports"}</span>
                  </Link>
                </div>
              </details>
              <details className="nav__sub" data-group="linen">
                <summary className="nav__item nav__group">
                  {"Linen"}
                  <svg className="icon nav__chev" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#chevron-down" />
                  </svg>
                </summary>
                <div className="nav__list">
                  <Link className="nav__item" data-nav="LN-01" title="Dashboard" to={"/linen-and-amenities/ln-01-linen-and-amenities-dashboard"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#layout-dashboard" />
                    </svg>
                    <span className="nav__label">{"Dashboard"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="LN-02" title="Stock" to={"/linen-and-amenities/ln-02-stock-by-location"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#layers" />
                    </svg>
                    <span className="nav__label">{"Stock"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="LN-03" title="Pantry Issue" to={"/linen-and-amenities/ln-03-pantry-par-issue"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#send" />
                    </svg>
                    <span className="nav__label">{"Pantry Issue"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="LN-04" title="Amenities" to={"/linen-and-amenities/ln-04-amenity-issues"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#gift" />
                    </svg>
                    <span className="nav__label">{"Amenities"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="LN-05" title="Discard" to={"/linen-and-amenities/ln-05-linen-discard"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#file-minus" />
                    </svg>
                    <span className="nav__label">{"Discard"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="LN-06" title="Counts" to={"/linen-and-amenities/ln-06-physical-count"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#clipboard-list" />
                    </svg>
                    <span className="nav__label">{"Counts"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="LN-07" title="Par & Reorder" to={"/linen-and-amenities/ln-07-par-monitor-and-reorder"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#gauge" />
                    </svg>
                    <span className="nav__label">{"Par & Reorder"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="LN-08" title="Requisitions" to={"/linen-and-amenities/ln-08-store-requisitions"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#inbox" />
                    </svg>
                    <span className="nav__label">{"Requisitions"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="LN-09" title="Consumption" to={"/linen-and-amenities/ln-09-amenity-consumption"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#bar-chart" />
                    </svg>
                    <span className="nav__label">{"Consumption"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="LN-10" title="Uniform Room" to={"/linen-and-amenities/ln-10-uniform-room"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#id-card" />
                    </svg>
                    <span className="nav__label">{"Uniform Room"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="LN-11" title="Reports" to={"/linen-and-amenities/ln-11-linen-and-amenities-reports"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#file-text" />
                    </svg>
                    <span className="nav__label">{"Reports"}</span>
                  </Link>
                </div>
              </details>
              <details className="nav__sub" data-group="lostfound">
                <summary className="nav__item nav__group">
                  {"Lost & Found"}
                  <svg className="icon nav__chev" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#chevron-down" />
                  </svg>
                </summary>
                <div className="nav__list">
                  <Link className="nav__item" data-nav="LF-01" title="Dashboard" to={"/lost-and-found/lf-01-lost-and-found-dashboard"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#layout-dashboard" />
                    </svg>
                    <span className="nav__label">{"Dashboard"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="LF-02" title="Found Items" to={"/lost-and-found/lf-02-found-items-register"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#archive" />
                    </svg>
                    <span className="nav__label">{"Found Items"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="LF-04" title="Lost Reports" to={"/lost-and-found/lf-04-lost-reports"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#message-square" />
                    </svg>
                    <span className="nav__label">{"Lost Reports"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="LF-05" title="Matching" to={"/lost-and-found/lf-05-matching"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#link" />
                    </svg>
                    <span className="nav__label">{"Matching"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="LF-06" title="Storage" to={"/lost-and-found/lf-06-storage-and-locations"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#layers" />
                    </svg>
                    <span className="nav__label">{"Storage"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="LF-07" title="Disposal" to={"/lost-and-found/lf-07-disposal"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#file-minus" />
                    </svg>
                    <span className="nav__label">{"Disposal"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="LF-08" title="Safe Log" to={"/lost-and-found/lf-08-valuables-safe-log"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#lock" />
                    </svg>
                    <span className="nav__label">{"Safe Log"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="LF-09" title="Reports" to={"/lost-and-found/lf-09-lost-and-found-reports"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#file-text" />
                    </svg>
                    <span className="nav__label">{"Reports"}</span>
                  </Link>
                </div>
              </details>
              <details className="nav__sub" data-group="engineering">
                <summary className="nav__item nav__group">
                  {"Engineering"}
                  <svg className="icon nav__chev" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#chevron-down" />
                  </svg>
                </summary>
                <div className="nav__list">
                  <Link className="nav__item" data-nav="MT-01" title="Dashboard" to={"/engineering-and-maintenance/mt-01-engineering-dashboard"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#layout-dashboard" />
                    </svg>
                    <span className="nav__label">{"Dashboard"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="MT-02" title="Work Queue" to={"/engineering-and-maintenance/mt-02-work-queue"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#columns" />
                    </svg>
                    <span className="nav__label">{"Work Queue"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="MT-14" title="My Jobs" to={"/engineering-and-maintenance/mt-14-technician-my-jobs"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#smartphone" />
                    </svg>
                    <span className="nav__label">{"My Jobs"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="MT-04" title="Work Orders" to={"/engineering-and-maintenance/mt-04-work-orders"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#clipboard-list" />
                    </svg>
                    <span className="nav__label">{"Work Orders"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="MT-05" title="Preventive" to={"/engineering-and-maintenance/mt-05-preventive-maintenance-calendar"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#calendar" />
                    </svg>
                    <span className="nav__label">{"Preventive"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="MT-06" title="Room PM" to={"/engineering-and-maintenance/mt-06-guest-room-pm"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#bed" />
                    </svg>
                    <span className="nav__label">{"Room PM"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="MT-07" title="Assets" to={"/engineering-and-maintenance/mt-07-asset-register"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#wrench" />
                    </svg>
                    <span className="nav__label">{"Assets"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="MT-09" title="Meters" to={"/engineering-and-maintenance/mt-09-utility-meter-readings"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#gauge" />
                    </svg>
                    <span className="nav__label">{"Meters"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="MT-10" title="Contracts" to={"/engineering-and-maintenance/mt-10-contractors-and-amc"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#briefcase" />
                    </svg>
                    <span className="nav__label">{"Contracts"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="MT-11" title="Compliance" to={"/engineering-and-maintenance/mt-11-statutory-compliance-register"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#shield-check" />
                    </svg>
                    <span className="nav__label">{"Compliance"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="MT-12" title="Shift Log" to={"/engineering-and-maintenance/mt-12-engineering-shift-log"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#book-open" />
                    </svg>
                    <span className="nav__label">{"Shift Log"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="MT-15" title="Shift Handover" to={"/engineering-and-maintenance/mt-15-shift-handover"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#message-circle" />
                    </svg>
                    <span className="nav__label">{"Shift Handover"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="MT-13" title="Reports" to={"/engineering-and-maintenance/mt-13-engineering-reports"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#file-text" />
                    </svg>
                    <span className="nav__label">{"Reports"}</span>
                  </Link>
                </div>
              </details>
              <details className="nav__sub" data-group="restaurant">
                <summary className="nav__item nav__group">
                  {"Restaurant"}
                  <svg className="icon nav__chev" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#chevron-down" />
                  </svg>
                </summary>
                <div className="nav__list">
                  <Link className="nav__item" data-nav="RT-01" title="POS Home" to={"/restaurant-pos/rt-01-pos-home"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#home" />
                    </svg>
                    <span className="nav__label">{"POS Home"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="RT-02" title="Tables" to={"/restaurant-pos/rt-02-table-layout"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#layout-dashboard" />
                    </svg>
                    <span className="nav__label">{"Tables"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="RT-03" title="Order" to={"/restaurant-pos/rt-03-order-entry"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#utensils" />
                    </svg>
                    <span className="nav__label">{"Order"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="RT-05" title="Bills" to={"/restaurant-pos/rt-05-bill-and-settlement"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#receipt" />
                    </svg>
                    <span className="nav__label">{"Bills"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="RT-06" title="Room Service" to={"/restaurant-pos/rt-06-room-service-orders"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#bell-ring" />
                    </svg>
                    <span className="nav__label">{"Room Service"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="RT-07" title="Takeaway" to={"/restaurant-pos/rt-07-takeaway-counter-order"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#package" />
                    </svg>
                    <span className="nav__label">{"Takeaway"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="RT-08" title="Table Booking" to={"/restaurant-pos/rt-08-table-booking"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#calendar" />
                    </svg>
                    <span className="nav__label">{"Table Booking"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="RT-09" title="Open Checks" to={"/restaurant-pos/rt-09-open-checks"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#clipboard-list" />
                    </svg>
                    <span className="nav__label">{"Open Checks"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="RT-10" title="Day Close" to={"/restaurant-pos/rt-10-day-close"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#lock" />
                    </svg>
                    <span className="nav__label">{"Day Close"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="RT-12" title="Shift Handover" to={"/restaurant-pos/rt-12-shift-handover"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#message-circle" />
                    </svg>
                    <span className="nav__label">{"Shift Handover"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="RT-11" title="Reports" to={"/restaurant-pos/rt-11-outlet-reports"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#file-text" />
                    </svg>
                    <span className="nav__label">{"Reports"}</span>
                  </Link>
                </div>
              </details>
              <details className="nav__sub" data-group="kitchen">
                <summary className="nav__item nav__group">
                  {"Kitchen"}
                  <svg className="icon nav__chev" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#chevron-down" />
                  </svg>
                </summary>
                <div className="nav__list">
                  <Link className="nav__item" data-nav="KT-02" title="Station" to={"/kitchen-display/kt-02-station-display"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#monitor" />
                    </svg>
                    <span className="nav__label">{"Station"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="KT-03" title="Expo" to={"/kitchen-display/kt-03-expo-pass-display"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#check-circle" />
                    </svg>
                    <span className="nav__label">{"Expo"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="KT-04" title="All-day" to={"/kitchen-display/kt-04-all-day-count"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#list" />
                    </svg>
                    <span className="nav__label">{"All-day"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="KT-05" title="Availability" to={"/kitchen-display/kt-05-item-availability"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#x-circle" />
                    </svg>
                    <span className="nav__label">{"Availability"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="KT-06" title="Banquet Production" to={"/kitchen-display/kt-06-banquet-production-list"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#users" />
                    </svg>
                    <span className="nav__label">{"Banquet Production"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="KT-07" title="Recall" to={"/kitchen-display/kt-07-recall"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#undo" />
                    </svg>
                    <span className="nav__label">{"Recall"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="KT-08" title="Reports" to={"/kitchen-display/kt-08-kitchen-performance"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#bar-chart" />
                    </svg>
                    <span className="nav__label">{"Reports"}</span>
                  </Link>
                </div>
              </details>
              <details className="nav__sub" data-group="banquets">
                <summary className="nav__item nav__group">
                  {"Banquets"}
                  <svg className="icon nav__chev" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#chevron-down" />
                  </svg>
                </summary>
                <div className="nav__list">
                  <Link className="nav__item" data-nav="BQ-01" title="Dashboard" to={"/banquets-and-events/bq-01-banquet-dashboard"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#layout-dashboard" />
                    </svg>
                    <span className="nav__label">{"Dashboard"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="BQ-02" title="Enquiries" to={"/banquets-and-events/bq-02-enquiries"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#inbox" />
                    </svg>
                    <span className="nav__label">{"Enquiries"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="BQ-03" title="Diary" to={"/banquets-and-events/bq-03-venue-diary"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#calendar-range" />
                    </svg>
                    <span className="nav__label">{"Diary"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="BQ-04" title="Bookings" to={"/banquets-and-events/bq-04-event-bookings"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#list" />
                    </svg>
                    <span className="nav__label">{"Bookings"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="BQ-06" title="BEO" to={"/banquets-and-events/bq-06-banquet-event-orders"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#clipboard-list" />
                    </svg>
                    <span className="nav__label">{"BEO"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="BQ-07" title="Event Day" to={"/banquets-and-events/bq-07-event-day-sheet"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#clipboard-check" />
                    </svg>
                    <span className="nav__label">{"Event Day"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="BQ-08" title="Billing" to={"/banquets-and-events/bq-08-banquet-billing"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#receipt" />
                    </svg>
                    <span className="nav__label">{"Billing"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="BQ-09" title="Reports" to={"/banquets-and-events/bq-09-banquet-reports"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#bar-chart" />
                    </svg>
                    <span className="nav__label">{"Reports"}</span>
                  </Link>
                </div>
              </details>
              <details className="nav__sub" data-group="purchase">
                <summary className="nav__item nav__group">
                  {"Purchase"}
                  <svg className="icon nav__chev" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#chevron-down" />
                  </svg>
                </summary>
                <div className="nav__list">
                  <Link className="nav__item" data-nav="PR-01" title="Dashboard" to={"/purchase/pr-01-purchase-dashboard"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#layout-dashboard" />
                    </svg>
                    <span className="nav__label">{"Dashboard"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="PR-02" title="Requisitions" to={"/purchase/pr-02-purchase-requisitions"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#clipboard-list" />
                    </svg>
                    <span className="nav__label">{"Requisitions"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="PR-04" title="Approvals" to={"/purchase/pr-04-my-approvals"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#user-check" />
                    </svg>
                    <span className="nav__label">{"Approvals"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="PR-05" title="Quotations" to={"/purchase/pr-05-quotations-and-comparison"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#columns" />
                    </svg>
                    <span className="nav__label">{"Quotations"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="PR-06" title="Purchase Orders" to={"/purchase/pr-06-purchase-orders"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#file-text" />
                    </svg>
                    <span className="nav__label">{"Purchase Orders"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="PR-08" title="Rate Contracts" to={"/purchase/pr-08-rate-contracts"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#tag" />
                    </svg>
                    <span className="nav__label">{"Rate Contracts"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="PR-09" title="Service Billing" to={"/purchase/pr-09-service-billing"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#clipboard-check" />
                    </svg>
                    <span className="nav__label">{"Service Billing"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="PR-10" title="Status" to={"/purchase/pr-10-pr-mr-po-status"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#history" />
                    </svg>
                    <span className="nav__label">{"Status"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="PR-11" title="Analysis" to={"/purchase/pr-11-purchase-analysis"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#bar-chart" />
                    </svg>
                    <span className="nav__label">{"Analysis"}</span>
                  </Link>
                </div>
              </details>
              <details className="nav__sub" data-group="stores">
                <summary className="nav__item nav__group">
                  {"Stores"}
                  <svg className="icon nav__chev" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#chevron-down" />
                  </svg>
                </summary>
                <div className="nav__list">
                  <Link className="nav__item" data-nav="ST-01" title="Dashboard" to={"/stores-and-inventory/st-01-stores-dashboard"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#layout-dashboard" />
                    </svg>
                    <span className="nav__label">{"Dashboard"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="ST-02" title="Requisitions" to={"/stores-and-inventory/st-02-material-requisitions"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#clipboard-list" />
                    </svg>
                    <span className="nav__label">{"Requisitions"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="ST-03" title="Goods Received" to={"/stores-and-inventory/st-03-goods-received-note"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#package" />
                    </svg>
                    <span className="nav__label">{"Goods Received"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="ST-04" title="Issues" to={"/stores-and-inventory/st-04-issue"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#send" />
                    </svg>
                    <span className="nav__label">{"Issues"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="ST-05" title="Transfers & Returns" to={"/stores-and-inventory/st-05-transfers-and-returns"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#arrow-left-right" />
                    </svg>
                    <span className="nav__label">{"Transfers & Returns"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="ST-06" title="Stock" to={"/stores-and-inventory/st-06-stock-on-hand"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#layers" />
                    </svg>
                    <span className="nav__label">{"Stock"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="ST-07" title="Verification" to={"/stores-and-inventory/st-07-physical-verification"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#clipboard-check" />
                    </svg>
                    <span className="nav__label">{"Verification"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="ST-08" title="Cash Book" to={"/stores-and-inventory/st-08-stores-cash-book"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#banknote" />
                    </svg>
                    <span className="nav__label">{"Cash Book"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="ST-09" title="Documents" to={"/stores-and-inventory/st-09-document-detail-view"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#file-text" />
                    </svg>
                    <span className="nav__label">{"Documents"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="ST-10" title="Month Close" to={"/stores-and-inventory/st-10-inventory-month-close"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#lock" />
                    </svg>
                    <span className="nav__label">{"Month Close"}</span>
                  </Link>
                </div>
              </details>
              <details className="nav__sub" data-group="cost-control">
                <summary className="nav__item nav__group">
                  {"Cost Control"}
                  <svg className="icon nav__chev" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#chevron-down" />
                  </svg>
                </summary>
                <div className="nav__list">
                  <Link className="nav__item" data-nav="CC-01" title="Dashboard" to={"/cost-control/cc-01-cost-control-dashboard"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#layout-dashboard" />
                    </svg>
                    <span className="nav__label">{"Dashboard"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="CC-02" title="Recipes" to={"/cost-control/cc-02-recipe-cards"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#book-open" />
                    </svg>
                    <span className="nav__label">{"Recipes"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="CC-03" title="Daily Cost" to={"/cost-control/cc-03-daily-fandb-cost"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#calendar" />
                    </svg>
                    <span className="nav__label">{"Daily Cost"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="CC-04" title="Monthly Cost" to={"/cost-control/cc-04-monthly-fandb-cost"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#calendar-range" />
                    </svg>
                    <span className="nav__label">{"Monthly Cost"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="CC-05" title="Variance" to={"/cost-control/cc-05-consumption-variance"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#bar-chart" />
                    </svg>
                    <span className="nav__label">{"Variance"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="CC-06" title="Beverage" to={"/cost-control/cc-06-beverage-control"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#gauge" />
                    </svg>
                    <span className="nav__label">{"Beverage"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="CC-07" title="Wastage & Meals" to={"/cost-control/cc-07-wastage-staff-meals-and-transfers"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#utensils" />
                    </svg>
                    <span className="nav__label">{"Wastage & Meals"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="CC-08" title="Menu Engineering" to={"/cost-control/cc-08-menu-engineering"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#star" />
                    </svg>
                    <span className="nav__label">{"Menu Engineering"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="CC-09" title="Expenses" to={"/cost-control/cc-09-expense-analysis"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#wallet" />
                    </svg>
                    <span className="nav__label">{"Expenses"}</span>
                  </Link>
                </div>
              </details>
              <details className="nav__sub" data-group="finance">
                <summary className="nav__item nav__group">
                  {"Finance"}
                  <svg className="icon nav__chev" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#chevron-down" />
                  </svg>
                </summary>
                <div className="nav__list">
                  <Link className="nav__item" data-nav="FN-01" title="Dashboard" to={"/receivables-payables-and-banking/fn-01-finance-dashboard"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#layout-dashboard" />
                    </svg>
                    <span className="nav__label">{"Dashboard"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="FN-02" title="City Ledger" to={"/receivables-payables-and-banking/fn-02-city-ledger"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#building-2" />
                    </svg>
                    <span className="nav__label">{"City Ledger"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="FN-04" title="Receipts" to={"/receivables-payables-and-banking/fn-04-receipt"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#receipt" />
                    </svg>
                    <span className="nav__label">{"Receipts"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="FN-05" title="Bill Passing" to={"/receivables-payables-and-banking/fn-05-bill-passing"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#file-text" />
                    </svg>
                    <span className="nav__label">{"Bill Passing"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="FN-06" title="Payments" to={"/receivables-payables-and-banking/fn-06-payments"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#send" />
                    </svg>
                    <span className="nav__label">{"Payments"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="FN-07" title="Banking" to={"/receivables-payables-and-banking/fn-07-bank-reconciliation"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#banknote" />
                    </svg>
                    <span className="nav__label">{"Banking"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="FN-08" title="Petty Cash" to={"/receivables-payables-and-banking/fn-08-petty-cash-and-cash-handovers"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#wallet" />
                    </svg>
                    <span className="nav__label">{"Petty Cash"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="FN-09" title="Ageing" to={"/receivables-payables-and-banking/fn-09-ageing"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#clock" />
                    </svg>
                    <span className="nav__label">{"Ageing"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="FN-10" title="Reports" to={"/receivables-payables-and-banking/fn-10-finance-reports"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#bar-chart" />
                    </svg>
                    <span className="nav__label">{"Reports"}</span>
                  </Link>
                </div>
              </details>
              <details className="nav__sub" data-group="general-ledger">
                <summary className="nav__item nav__group">
                  {"General Ledger"}
                  <svg className="icon nav__chev" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#chevron-down" />
                  </svg>
                </summary>
                <div className="nav__list">
                  <Link className="nav__item" data-nav="AC-01" title="Dashboard" to={"/general-ledger/ac-01-gl-dashboard"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#layout-dashboard" />
                    </svg>
                    <span className="nav__label">{"Dashboard"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="AC-02" title="Postings" to={"/general-ledger/ac-02-automatic-postings"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#refresh" />
                    </svg>
                    <span className="nav__label">{"Postings"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="AC-03" title="Vouchers" to={"/general-ledger/ac-03-vouchers"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#file-text" />
                    </svg>
                    <span className="nav__label">{"Vouchers"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="AC-05" title="Adjustments" to={"/general-ledger/ac-05-ledger-adjustments"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#sliders" />
                    </svg>
                    <span className="nav__label">{"Adjustments"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="AC-06" title="Ledgers" to={"/general-ledger/ac-06-account-ledger-summary"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#book-open" />
                    </svg>
                    <span className="nav__label">{"Ledgers"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="AC-07" title="Trial Balance" to={"/general-ledger/ac-07-trial-balance"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#columns" />
                    </svg>
                    <span className="nav__label">{"Trial Balance"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="AC-08" title="Books" to={"/general-ledger/ac-08-day-book-cash-book-and-bank-book"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#list" />
                    </svg>
                    <span className="nav__label">{"Books"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="AC-09" title="Fixed Assets" to={"/general-ledger/ac-09-fixed-asset-register"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#building" />
                    </svg>
                    <span className="nav__label">{"Fixed Assets"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="AC-10" title="Period Lock" to={"/general-ledger/ac-10-transaction-lock-and-month-close"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#lock" />
                    </svg>
                    <span className="nav__label">{"Period Lock"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="AC-11" title="Year End" to={"/general-ledger/ac-11-financial-year-closing"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#calendar" />
                    </svg>
                    <span className="nav__label">{"Year End"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="AC-12" title="Export" to={"/general-ledger/ac-12-export-to-external-package"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#upload" />
                    </svg>
                    <span className="nav__label">{"Export"}</span>
                  </Link>
                </div>
              </details>
              <details className="nav__sub" data-group="tax">
                <summary className="nav__item nav__group">
                  {"Tax & Compliance"}
                  <svg className="icon nav__chev" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#chevron-down" />
                  </svg>
                </summary>
                <div className="nav__list">
                  <Link className="nav__item" data-nav="TX-01" title="Dashboard" to={"/tax-and-compliance/tx-01-tax-dashboard"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#layout-dashboard" />
                    </svg>
                    <span className="nav__label">{"Dashboard"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="TX-02" title="GST Sales" to={"/tax-and-compliance/tx-02-gst-outward-register"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#receipt" />
                    </svg>
                    <span className="nav__label">{"GST Sales"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="TX-03" title="GST Purchases" to={"/tax-and-compliance/tx-03-gst-inward-register"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#package" />
                    </svg>
                    <span className="nav__label">{"GST Purchases"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="TX-04" title="GSTR-1 / 3B" to={"/tax-and-compliance/tx-04-gstr-1-and-gstr-3b-data"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#file-text" />
                    </svg>
                    <span className="nav__label">{"GSTR-1 / 3B"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="TX-05" title="ITC Reconciliation" to={"/tax-and-compliance/tx-05-itc-reconciliation-gstr-2b"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#arrow-left-right" />
                    </svg>
                    <span className="nav__label">{"ITC Reconciliation"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="TX-06" title="E-invoices" to={"/tax-and-compliance/tx-06-e-invoice-register"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#qr-code" />
                    </svg>
                    <span className="nav__label">{"E-invoices"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="TX-07" title="TDS" to={"/tax-and-compliance/tx-07-tds-deducted-challans-and-returns"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#percent" />
                    </svg>
                    <span className="nav__label">{"TDS"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="TX-08" title="TDS Receivable" to={"/tax-and-compliance/tx-08-tds-receivable-26as-ais"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#coins" />
                    </svg>
                    <span className="nav__label">{"TDS Receivable"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="TX-09" title="Reports" to={"/tax-and-compliance/tx-09-tax-reports"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#bar-chart" />
                    </svg>
                    <span className="nav__label">{"Reports"}</span>
                  </Link>
                </div>
              </details>
              <details className="nav__sub" data-group="hr">
                <summary className="nav__item nav__group">
                  {"HR & Payroll"}
                  <svg className="icon nav__chev" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#chevron-down" />
                  </svg>
                </summary>
                <div className="nav__list">
                  <Link className="nav__item" data-nav="HR-01" title="Dashboard" to={"/hr-and-payroll/hr-01-hr-dashboard"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#layout-dashboard" />
                    </svg>
                    <span className="nav__label">{"Dashboard"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="HR-02" title="Employees" to={"/hr-and-payroll/hr-02-employees"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#users" />
                    </svg>
                    <span className="nav__label">{"Employees"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="HR-04" title="Joining & Exit" to={"/hr-and-payroll/hr-04-joining-and-exit"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#user-plus" />
                    </svg>
                    <span className="nav__label">{"Joining & Exit"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="HR-05" title="Roster" to={"/hr-and-payroll/hr-05-duty-roster"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#calendar-range" />
                    </svg>
                    <span className="nav__label">{"Roster"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="HR-06" title="Attendance" to={"/hr-and-payroll/hr-06-attendance"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#clock" />
                    </svg>
                    <span className="nav__label">{"Attendance"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="HR-07" title="Leave" to={"/hr-and-payroll/hr-07-leave"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#calendar" />
                    </svg>
                    <span className="nav__label">{"Leave"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="HR-08" title="Advances" to={"/hr-and-payroll/hr-08-advances-and-loans"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#wallet" />
                    </svg>
                    <span className="nav__label">{"Advances"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="HR-09" title="Payroll" to={"/hr-and-payroll/hr-09-payroll-run"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#banknote" />
                    </svg>
                    <span className="nav__label">{"Payroll"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="HR-10" title="Statutory" to={"/hr-and-payroll/hr-10-statutory"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#shield-check" />
                    </svg>
                    <span className="nav__label">{"Statutory"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="HR-11" title="Self-service" to={"/hr-and-payroll/hr-11-employee-self-service"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#smartphone" />
                    </svg>
                    <span className="nav__label">{"Self-service"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="HR-12" title="Reports" to={"/hr-and-payroll/hr-12-hr-reports"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#bar-chart" />
                    </svg>
                    <span className="nav__label">{"Reports"}</span>
                  </Link>
                </div>
              </details>
              <details className="nav__sub" data-group="rv">
                <summary className="nav__item nav__group">
                  {"Revenue Management"}
                  <svg className="icon nav__chev" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#chevron-down" />
                  </svg>
                </summary>
                <div className="nav__list">
                  <Link className="nav__item" data-nav="RV-01" title="Dashboard" to={"/revenue-management/rv-01-revenue-dashboard"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#layout-dashboard" />
                    </svg>
                    <span className="nav__label">{"Dashboard"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="RV-02" title="On the Books" to={"/revenue-management/rv-02-business-on-the-books"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#layers" />
                    </svg>
                    <span className="nav__label">{"On the Books"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="RV-03" title="Pickup & Pace" to={"/revenue-management/rv-03-pickup-and-pace"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#trending-up" />
                    </svg>
                    <span className="nav__label">{"Pickup & Pace"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="RV-04" title="Forecast" to={"/revenue-management/rv-04-forecast"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#gauge" />
                    </svg>
                    <span className="nav__label">{"Forecast"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="RV-05" title="Demand Calendar" to={"/revenue-management/rv-05-demand-calendar"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#calendar" />
                    </svg>
                    <span className="nav__label">{"Demand Calendar"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="RV-06" title="Rate Grid" to={"/revenue-management/rv-06-rate-grid"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#banknote" />
                    </svg>
                    <span className="nav__label">{"Rate Grid"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="RV-07" title="Restrictions" to={"/revenue-management/rv-07-restrictions-and-overbooking"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#sliders" />
                    </svg>
                    <span className="nav__label">{"Restrictions"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="RV-08" title="Competitors" to={"/revenue-management/rv-08-competitor-rates"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#building-2" />
                    </svg>
                    <span className="nav__label">{"Competitors"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="RV-09" title="Parity" to={"/revenue-management/rv-09-rate-parity"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#arrow-left-right" />
                    </svg>
                    <span className="nav__label">{"Parity"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="RV-10" title="Group Evaluation" to={"/revenue-management/rv-10-group-evaluation"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#users" />
                    </svg>
                    <span className="nav__label">{"Group Evaluation"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="RV-11" title="Recommendations" to={"/revenue-management/rv-11-pricing-recommendations"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#sparkles" />
                    </svg>
                    <span className="nav__label">{"Recommendations"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="RV-12" title="Reports" to={"/revenue-management/rv-12-revenue-reports"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#bar-chart" />
                    </svg>
                    <span className="nav__label">{"Reports"}</span>
                  </Link>
                </div>
              </details>
              <details className="nav__sub" data-group="da">
                <summary className="nav__item nav__group">
                  {"Dashboards & Approvals"}
                  <svg className="icon nav__chev" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#chevron-down" />
                  </svg>
                </summary>
                <div className="nav__list">
                  <Link className="nav__item" data-nav="DA-01" title="My Dashboard" to={"/dashboards-and-approvals/da-01-my-dashboard"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#layout-dashboard" />
                    </svg>
                    <span className="nav__label">{"My Dashboard"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="DA-02" title="GM Dashboard" to={"/dashboards-and-approvals/da-02-gm-dashboard"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#gauge" />
                    </svg>
                    <span className="nav__label">{"GM Dashboard"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="DA-03" title="Approvals" to={"/dashboards-and-approvals/da-03-approvals-inbox"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#clipboard-check" />
                    </svg>
                    <span className="nav__label">{"Approvals"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="DA-05" title="Alerts" to={"/dashboards-and-approvals/da-05-alerts"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#bell-ring" />
                    </svg>
                    <span className="nav__label">{"Alerts"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="DA-06" title="Scorecards" to={"/dashboards-and-approvals/da-06-kpi-scorecards"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#bar-chart" />
                    </svg>
                    <span className="nav__label">{"Scorecards"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="DA-07" title="Delegation" to={"/dashboards-and-approvals/da-07-delegation"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#users" />
                    </svg>
                    <span className="nav__label">{"Delegation"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="DA-08" title="Briefing" to={"/dashboards-and-approvals/da-08-daily-management-briefing"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#mail" />
                    </svg>
                    <span className="nav__label">{"Briefing"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="DA-09" title="Reports" to={"/dashboards-and-approvals/da-09-approval-reports"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#file-text" />
                    </svg>
                    <span className="nav__label">{"Reports"}</span>
                  </Link>
                </div>
              </details>
              <details className="nav__sub" data-group="an">
                <summary className="nav__item nav__group">
                  {"Analytics & Reports"}
                  <svg className="icon nav__chev" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#chevron-down" />
                  </svg>
                </summary>
                <div className="nav__list">
                  <Link className="nav__item" data-nav="AN-01" title="Library" to={"/analytics-and-reports/an-01-report-library"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#folder" />
                    </svg>
                    <span className="nav__label">{"Library"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="AN-02" title="Viewer" to={"/analytics-and-reports/an-02-report-viewer"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#file-text" />
                    </svg>
                    <span className="nav__label">{"Viewer"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="AN-03" title="Flash Report" to={"/analytics-and-reports/an-03-flash-report"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#sparkles" />
                    </svg>
                    <span className="nav__label">{"Flash Report"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="AN-04" title="Manager's Report" to={"/analytics-and-reports/an-04-manager-s-report"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#briefcase" />
                    </svg>
                    <span className="nav__label">{"Manager's Report"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="AN-05" title="Statistics" to={"/analytics-and-reports/an-05-occupancy-and-revenue-statistics"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#bar-chart" />
                    </svg>
                    <span className="nav__label">{"Statistics"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="AN-06" title="Guests" to={"/analytics-and-reports/an-06-guest-statistics"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#users" />
                    </svg>
                    <span className="nav__label">{"Guests"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="AN-07" title="Collections" to={"/analytics-and-reports/an-07-collections-and-outstanding"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#coins" />
                    </svg>
                    <span className="nav__label">{"Collections"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="AN-08" title="Audit Trail" to={"/analytics-and-reports/an-08-audit-trail-reports"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#history" />
                    </svg>
                    <span className="nav__label">{"Audit Trail"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="AN-09" title="Schedules" to={"/analytics-and-reports/an-09-my-scheduled-reports"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#clock" />
                    </svg>
                    <span className="nav__label">{"Schedules"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="AN-10" title="Analysis" to={"/analytics-and-reports/an-10-ad-hoc-analysis"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#layers" />
                    </svg>
                    <span className="nav__label">{"Analysis"}</span>
                  </Link>
                </div>
              </details>
              <details className="nav__sub" data-group="ms">
                <summary className="nav__item nav__group">
                  {"MIS & Budgeting"}
                  <svg className="icon nav__chev" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#chevron-down" />
                  </svg>
                </summary>
                <div className="nav__list">
                  <Link className="nav__item" data-nav="MS-01" title="MIS Dashboard" to={"/mis-and-budgeting/ms-01-mis-dashboard"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#layout-dashboard" />
                    </svg>
                    <span className="nav__label">{"MIS Dashboard"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="MS-02" title="Budget" to={"/mis-and-budgeting/ms-02-budget-versions"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#wallet" />
                    </svg>
                    <span className="nav__label">{"Budget"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="MS-04" title="Reforecast" to={"/mis-and-budgeting/ms-04-reforecast"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#trending-up" />
                    </svg>
                    <span className="nav__label">{"Reforecast"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="MS-05" title="Statements" to={"/mis-and-budgeting/ms-05-financial-statements"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#file-text" />
                    </svg>
                    <span className="nav__label">{"Statements"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="MS-06" title="Variance" to={"/mis-and-budgeting/ms-06-budget-vs-actual"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#bar-chart" />
                    </svg>
                    <span className="nav__label">{"Variance"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="MS-07" title="Ratios" to={"/mis-and-budgeting/ms-07-kpi-ratios"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#percent" />
                    </svg>
                    <span className="nav__label">{"Ratios"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="MS-08" title="MIS Pack" to={"/mis-and-budgeting/ms-08-monthly-mis-pack"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#send" />
                    </svg>
                    <span className="nav__label">{"MIS Pack"}</span>
                  </Link>
                </div>
              </details>
              <details className="nav__sub" data-group="ow">
                <summary className="nav__item nav__group">
                  {"Owner App"}
                  <svg className="icon nav__chev" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#chevron-down" />
                  </svg>
                </summary>
                <div className="nav__list">
                  <Link className="nav__item" data-nav="OW-01" title="Owner Home" to={"/owner-app-and-multi-property/ow-01-owner-home"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#home" />
                    </svg>
                    <span className="nav__label">{"Owner Home"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="OW-02" title="Revenue" to={"/owner-app-and-multi-property/ow-02-revenue-and-statistics"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#trending-up" />
                    </svg>
                    <span className="nav__label">{"Revenue"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="OW-03" title="On the Books" to={"/owner-app-and-multi-property/ow-03-business-on-the-books"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#calendar-range" />
                    </svg>
                    <span className="nav__label">{"On the Books"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="OW-04" title="Money" to={"/owner-app-and-multi-property/ow-04-money"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#wallet" />
                    </svg>
                    <span className="nav__label">{"Money"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="OW-05" title="Approvals" to={"/owner-app-and-multi-property/ow-05-owner-approvals"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#inbox" />
                    </svg>
                    <span className="nav__label">{"Approvals"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="OW-06" title="Alerts" to={"/owner-app-and-multi-property/ow-06-owner-alerts"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#bell-ring" />
                    </svg>
                    <span className="nav__label">{"Alerts"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="OW-07" title="Owner Pack" to={"/owner-app-and-multi-property/ow-07-owner-pack-and-documents"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#folder" />
                    </svg>
                    <span className="nav__label">{"Owner Pack"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="OW-08" title="Portfolio" to={"/owner-app-and-multi-property/ow-08-portfolio-view"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#building-2" />
                    </svg>
                    <span className="nav__label">{"Portfolio"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="OW-09" title="Group Reports" to={"/owner-app-and-multi-property/ow-09-group-reports"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#bar-chart" />
                    </svg>
                    <span className="nav__label">{"Group Reports"}</span>
                  </Link>
                </div>
              </details>
              <details className="nav__sub" data-group="lg">
                <summary className="nav__item nav__group">
                  {"User & Access"}
                  <svg className="icon nav__chev" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#chevron-down" />
                  </svg>
                </summary>
                <div className="nav__list">
                  <Link className="nav__item" data-nav="LG-01" title="Super Admin Home" to={"/user-and-access-management/lg-01-super-admin-home"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#shield" />
                    </svg>
                    <span className="nav__label">{"Super Admin Home"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="LG-02" title="Users" to={"/user-and-access-management/lg-02-users"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#users" />
                    </svg>
                    <span className="nav__label">{"Users"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="LG-04" title="Roles" to={"/user-and-access-management/lg-04-roles"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#id-card" />
                    </svg>
                    <span className="nav__label">{"Roles"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="LG-06" title="Limits" to={"/user-and-access-management/lg-06-limits-by-role"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#sliders" />
                    </svg>
                    <span className="nav__label">{"Limits"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="LG-07" title="Login Policy" to={"/user-and-access-management/lg-07-login-policy"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#lock" />
                    </svg>
                    <span className="nav__label">{"Login Policy"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="LG-08" title="Devices" to={"/user-and-access-management/lg-08-devices"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#smartphone" />
                    </svg>
                    <span className="nav__label">{"Devices"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="LG-09" title="Sessions" to={"/user-and-access-management/lg-09-active-sessions"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#monitor" />
                    </svg>
                    <span className="nav__label">{"Sessions"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="LG-10" title="Access Review" to={"/user-and-access-management/lg-10-access-review"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#shield-check" />
                    </svg>
                    <span className="nav__label">{"Access Review"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="LG-11" title="Activity" to={"/user-and-access-management/lg-11-login-and-activity-history"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#history" />
                    </svg>
                    <span className="nav__label">{"Activity"}</span>
                  </Link>
                </div>
              </details>
              <details className="nav__sub" data-group="ad">
                <summary className="nav__item nav__group">
                  {"Property Admin"}
                  <svg className="icon nav__chev" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#chevron-down" />
                  </svg>
                </summary>
                <div className="nav__list">
                  <Link className="nav__item" data-nav="AD-01" title="Properties" to={"/property-administration/ad-01-properties"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#building-2" />
                    </svg>
                    <span className="nav__label">{"Properties"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="AD-03" title="Parameters" to={"/property-administration/ad-03-property-parameters"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#sliders" />
                    </svg>
                    <span className="nav__label">{"Parameters"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="AD-04" title="Modules" to={"/property-administration/ad-04-modules-and-licence"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#layers" />
                    </svg>
                    <span className="nav__label">{"Modules"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="AD-05" title="Common Masters" to={"/property-administration/ad-05-common-masters"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#list" />
                    </svg>
                    <span className="nav__label">{"Common Masters"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="AD-06" title="Number Series" to={"/property-administration/ad-06-number-series-registry"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#hash" />
                    </svg>
                    <span className="nav__label">{"Number Series"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="AD-07" title="Templates" to={"/property-administration/ad-07-template-library"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#file-text" />
                    </svg>
                    <span className="nav__label">{"Templates"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="AD-08" title="Go-live" to={"/property-administration/ad-08-go-live-checklist"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#clipboard-check" />
                    </svg>
                    <span className="nav__label">{"Go-live"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="AD-09" title="Data Import" to={"/property-administration/ad-09-data-import-centre"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#upload" />
                    </svg>
                    <span className="nav__label">{"Data Import"}</span>
                  </Link>
                </div>
              </details>
              <details className="nav__sub" data-group="in">
                <summary className="nav__item nav__group">
                  {"Integrations"}
                  <svg className="icon nav__chev" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#chevron-down" />
                  </svg>
                </summary>
                <div className="nav__list">
                  <Link className="nav__item" data-nav="IN-01" title="Catalogue" to={"/integrations/in-01-integration-catalogue"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#layers" />
                    </svg>
                    <span className="nav__label">{"Catalogue"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="IN-02" title="Connection" to={"/integrations/in-02-connection-setup"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#link" />
                    </svg>
                    <span className="nav__label">{"Connection"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="IN-03" title="Mappings" to={"/integrations/in-03-code-mappings"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#arrow-left-right" />
                    </svg>
                    <span className="nav__label">{"Mappings"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="IN-04" title="Health" to={"/integrations/in-04-integration-health"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#gauge" />
                    </svg>
                    <span className="nav__label">{"Health"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="IN-05" title="Message Log" to={"/integrations/in-05-message-log"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#list" />
                    </svg>
                    <span className="nav__label">{"Message Log"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="IN-06" title="Error Queue" to={"/integrations/in-06-error-queue"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#alert" />
                    </svg>
                    <span className="nav__label">{"Error Queue"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="IN-07" title="API & Webhooks" to={"/integrations/in-07-api-keys-and-webhooks"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#key" />
                    </svg>
                    <span className="nav__label">{"API & Webhooks"}</span>
                  </Link>
                </div>
              </details>
              <details className="nav__sub" data-group="sy">
                <summary className="nav__item nav__group">
                  {"System & Audit"}
                  <svg className="icon nav__chev" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#chevron-down" />
                  </svg>
                </summary>
                <div className="nav__list">
                  <Link className="nav__item" data-nav="SY-01" title="Dashboard" to={"/system-and-audit/sy-01-system-dashboard"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#monitor" />
                    </svg>
                    <span className="nav__label">{"Dashboard"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="SY-02" title="Audit Log" to={"/system-and-audit/sy-02-audit-log-search"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#history" />
                    </svg>
                    <span className="nav__label">{"Audit Log"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="SY-03" title="Retention" to={"/system-and-audit/sy-03-retention-schedules"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#archive" />
                    </svg>
                    <span className="nav__label">{"Retention"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="SY-04" title="Privacy" to={"/system-and-audit/sy-04-privacy-centre"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#shield-check" />
                    </svg>
                    <span className="nav__label">{"Privacy"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="SY-05" title="Backups" to={"/system-and-audit/sy-05-backups"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#download" />
                    </svg>
                    <span className="nav__label">{"Backups"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="SY-06" title="Jobs" to={"/system-and-audit/sy-06-scheduled-jobs"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#timer" />
                    </svg>
                    <span className="nav__label">{"Jobs"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="SY-07" title="Licence & Releases" to={"/system-and-audit/sy-07-licence-and-releases"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#key" />
                    </svg>
                    <span className="nav__label">{"Licence & Releases"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="SY-08" title="Announcements" to={"/system-and-audit/sy-08-announcements"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#bell-ring" />
                    </svg>
                    <span className="nav__label">{"Announcements"}</span>
                  </Link>
                </div>
              </details>
              <details className="nav__sub" data-group="front-desk">
                <summary className="nav__item nav__group">
                  {"Front Desk"}
                  <svg className="icon nav__chev" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#chevron-down" />
                  </svg>
                </summary>
                <div className="nav__list">
                  <Link className="nav__item" data-nav="FD-01" title="Front Desk Home" to={"/front-desk/fd-01-front-desk-home"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#layout-dashboard" />
                    </svg>
                    <span className="nav__label">{"Home"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="FD-02" title="Arrivals" to={"/front-desk/fd-02-arrivals"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#log-in" />
                    </svg>
                    <span className="nav__label">{"Arrivals"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="FD-06" title="Room Board" to={"/front-desk/fd-06-room-board"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#door" />
                    </svg>
                    <span className="nav__label">{"Room Board"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="FD-07" title="In-house Guests" to={"/front-desk/fd-07-in-house-guests"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#bed" />
                    </svg>
                    <span className="nav__label">{"In-house"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="FD-14" title="Departures" to={"/front-desk/fd-14-departures"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#log-out" />
                    </svg>
                    <span className="nav__label">{"Departures"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="FD-32" title="House Status (Live)" to={"/front-desk/fd-32-house-status-live"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#gauge" />
                    </svg>
                    <span className="nav__label">{"House Status"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="FD-20" title="Form C / Form III Register" to={"/front-desk/fd-20-form-c-form-iii-register"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#id-card" />
                    </svg>
                    <span className="nav__label">{"Form III Register"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="FD-27" title="Front Office Log Book" to={"/front-desk/fd-27-front-office-log-book"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#book-open" />
                    </svg>
                    <span className="nav__label">{"Log Book"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="FD-39" title="Shift Handover" to={"/front-desk/fd-39-shift-handover"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#message-circle" />
                    </svg>
                    <span className="nav__label">{"Shift Handover"}</span>
                  </Link>
                </div>
              </details>
              <details className="nav__sub" data-group="guest-services">
                <summary className="nav__item nav__group">
                  {"Guest Services"}
                  <svg className="icon nav__chev" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#chevron-down" />
                  </svg>
                </summary>
                <div className="nav__list">
                  <Link className="nav__item" data-nav="FD-11" title="Requests & Complaints" to={"/front-desk/fd-11-requests-complaints"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#message-square" />
                    </svg>
                    <span className="nav__label">{"Requests & Complaints"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="FD-12" title="Messages & Wake-up Calls" to={"/front-desk/fd-12-messages-wake-up-calls"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#bell-ring" />
                    </svg>
                    <span className="nav__label">{"Messages & Wake-up"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="FD-28" title="Traces" to={"/front-desk/fd-28-traces"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#clipboard-list" />
                    </svg>
                    <span className="nav__label">{"Traces"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="FD-30" title="Concierge & Services" to={"/front-desk/fd-30-concierge-services"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#car" />
                    </svg>
                    <span className="nav__label">{"Concierge & Services"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="FD-31" title="Loyalty Desk" to={"/front-desk/fd-31-loyalty-desk"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#star" />
                    </svg>
                    <span className="nav__label">{"Loyalty Desk"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="FD-38" title="Guest Communication" to={"/front-desk/fd-38-guest-communication"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#send" />
                    </svg>
                    <span className="nav__label">{"Guest Communication"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="FD-23" title="Lost & Found" to={"/front-desk/fd-23-lost-found"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#search" />
                    </svg>
                    <span className="nav__label">{"Lost & Found"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="FD-24" title="Left Luggage" to={"/front-desk/fd-24-left-luggage"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#luggage" />
                    </svg>
                    <span className="nav__label">{"Left Luggage"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="FD-25" title="Safe Deposit Lockers" to={"/front-desk/fd-25-safe-deposit-lockers"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#lock" />
                    </svg>
                    <span className="nav__label">{"Lockers"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="FD-26" title="Visitor Register" to={"/front-desk/fd-26-visitor-register"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#users" />
                    </svg>
                    <span className="nav__label">{"Visitor Register"}</span>
                  </Link>
                </div>
              </details>
              <details className="nav__sub" data-group="cashier">
                <summary className="nav__item nav__group">
                  {"Cashier & Billing"}
                  <svg className="icon nav__chev" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#chevron-down" />
                  </svg>
                </summary>
                <div className="nav__list">
                  <Link className="nav__item" data-nav="FD-18" title="Cashier Shift" to={"/front-desk/fd-18-cashier-shift"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#wallet" />
                    </svg>
                    <span className="nav__label">{"Cashier Shift"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="FD-36" title="Front Desk Cash Book" to={"/front-desk/fd-36-front-desk-cash-book"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#banknote" />
                    </svg>
                    <span className="nav__label">{"Cash Book"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="FD-19" title="Foreign Exchange" to={"/front-desk/fd-19-foreign-exchange"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#coins" />
                    </svg>
                    <span className="nav__label">{"Foreign Exchange"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="FD-16" title="Invoices & Credit Notes" to={"/front-desk/fd-16-invoices-credit-notes"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#receipt" />
                    </svg>
                    <span className="nav__label">{"Invoices & Credit Notes"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="FD-17" title="Company Billing (City Ledger Transfer)" to={"/front-desk/fd-17-company-billing-city-ledger-transfer"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#building" />
                    </svg>
                    <span className="nav__label">{"Company Billing"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="FD-33" title="Paymaster (House Accounts)" to={"/front-desk/fd-33-paymaster-house-accounts"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#briefcase" />
                    </svg>
                    <span className="nav__label">{"Paymaster"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="FD-34" title="Folio History & Tracking" to={"/front-desk/fd-34-folio-history-tracking"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#history" />
                    </svg>
                    <span className="nav__label">{"Folio History"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="FD-35" title="Advance Deposit Ledger" to={"/front-desk/fd-35-advance-deposit-ledger"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#credit-card" />
                    </svg>
                    <span className="nav__label">{"Advance Deposits"}</span>
                  </Link>
                </div>
              </details>
              <details className="nav__sub" data-group="night-audit">
                <summary className="nav__item nav__group">
                  {"Night Audit"}
                  <svg className="icon nav__chev" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#chevron-down" />
                  </svg>
                </summary>
                <div className="nav__list">
                  <Link className="nav__item" data-nav="FD-21" title="Night Audit Console" to={"/front-desk/fd-21-night-audit-console"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#moon" />
                    </svg>
                    <span className="nav__label">{"Night Audit Console"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="FD-37" title="Account Posting" to={"/front-desk/fd-37-account-posting"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#send" />
                    </svg>
                    <span className="nav__label">{"Account Posting"}</span>
                  </Link>
                </div>
              </details>
              <details className="nav__sub" data-group="fd-reports">
                <summary className="nav__item nav__group">
                  {"Reports"}
                  <svg className="icon nav__chev" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#chevron-down" />
                  </svg>
                </summary>
                <div className="nav__list">
                  <Link className="nav__item" data-nav="FD-22" title="Front Desk Reports" to={"/front-desk/fd-22-front-desk-reports"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#bar-chart" />
                    </svg>
                    <span className="nav__label">{"Front Desk Reports"}</span>
                  </Link>
                </div>
              </details>
              <details className="nav__sub" data-group="reservations">
                <summary className="nav__item nav__group">
                  {"Reservations"}
                  <svg className="icon nav__chev" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#chevron-down" />
                  </svg>
                </summary>
                <div className="nav__list">
                  <Link className="nav__item" data-nav="RS-01" title="Reservation Dashboard" to={"/reservation/rs-01-reservation-dashboard"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#layout-dashboard" />
                    </svg>
                    <span className="nav__label">{"Dashboard"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="RS-06" title="Reservation Search / List" to={"/reservation/rs-06-reservation-search-list"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#list" />
                    </svg>
                    <span className="nav__label">{"Reservations"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="RS-26" title="Expected Arrivals" to={"/reservation/rs-26-expected-arrivals"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#log-in" />
                    </svg>
                    <span className="nav__label">{"Expected Arrivals"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="RS-25" title="Room Allocation" to={"/reservation/rs-25-room-allocation"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#door-open" />
                    </svg>
                    <span className="nav__label">{"Room Allocation"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="RS-04" title="Availability & Rate Search" to={"/reservation/rs-04-availability-and-rate-search"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#search" />
                    </svg>
                    <span className="nav__label">{"Availability"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="RS-17" title="Room Calendar (Tape Chart)" to={"/reservation/rs-17-room-calendar-tape-chart"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#calendar" />
                    </svg>
                    <span className="nav__label">{"Room Calendar"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="RS-24" title="Service View" to={"/reservation/rs-24-service-view"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#utensils" />
                    </svg>
                    <span className="nav__label">{"Service View"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="RS-03" title="Enquiry List" to={"/reservation/rs-03-enquiry-list"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#inbox" />
                    </svg>
                    <span className="nav__label">{"Enquiries"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="RS-14" title="Group Reservation" to={"/reservation/rs-14-group-reservation"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#users" />
                    </svg>
                    <span className="nav__label">{"Groups"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="RS-16" title="Waitlist" to={"/reservation/rs-16-waitlist"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#clock" />
                    </svg>
                    <span className="nav__label">{"Waitlist"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="RS-23" title="Channel Booking Queue" to={"/reservation/rs-23-channel-booking-queue"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#refresh" />
                    </svg>
                    <span className="nav__label">{"Channel Queue"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="RS-20" title="Approvals" to={"/reservation/rs-20-approvals"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#shield-check" />
                    </svg>
                    <span className="nav__label">{"Approvals"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="RS-18" title="Guest Profile" to={"/reservation/rs-18-guest-profile"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#user" />
                    </svg>
                    <span className="nav__label">{"Guests"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="RS-19" title="Corporate" to={"/reservation/rs-19-company-travel-agent-account"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#building-2" />
                    </svg>
                    <span className="nav__label">{"Corporate"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="RS-28" title="Shift Handover" to={"/reservation/rs-28-shift-handover"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#message-circle" />
                    </svg>
                    <span className="nav__label">{"Shift Handover"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="RS-27" title="Pick-up Performance" to={"/reservation/rs-27-pick-up-performance"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#trending-up" />
                    </svg>
                    <span className="nav__label">{"Pick-up Performance"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="RS-21" title="Reservation Reports" to={"/reservation/rs-21-reservation-reports"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#bar-chart" />
                    </svg>
                    <span className="nav__label">{"Reports"}</span>
                  </Link>
                </div>
              </details>
              <details className="nav__sub" data-group="tools">
                <summary className="nav__item nav__group">
                  {"Tools"}
                  <svg className="icon nav__chev" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#chevron-down" />
                  </svg>
                </summary>
                <div className="nav__list">
                  <Link className="nav__item" data-nav="CM-03" title="Address Book" to={"/common/cm-03-address-book"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#book-open" />
                    </svg>
                    <span className="nav__label">{"Address Book"}</span>
                  </Link>
                  <Link className="nav__item" data-nav="CM-04" title="Help & Support" to={"/common/cm-04-help-support"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#help" />
                    </svg>
                    <span className="nav__label">{"Help & Support"}</span>
                  </Link>
                </div>
              </details>
            </nav>
          </aside>
          <label className="nav-scrim" htmlFor="nav-toggle" aria-hidden="true" />
          <div className="app__body">
            <header className="topbar">
              <label className="topbar__menu" htmlFor="nav-toggle" title="Menu" aria-hidden="true">
                <svg className="icon" width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#menu" />
                </svg>
              </label>
              <button className="topbar__prop topbar__btn" type="button" popoverTarget="pv-prop" aria-label="Property: The Aviv Kochi. Switch property">
                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#building" />
                </svg>
                <span>{"The Aviv Kochi"}</span>
                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#chevron-down" />
                </svg>
              </button>
              <div className="topbar__date" title="Business date – the hotel's working date">
                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#calendar" />
                </svg>
                <time dateTime="2026-10-22">{"Thu 22 Oct 2026"}</time>
                <span className="topbar__clock" title="Clock">{"09:42"}</span>
              </div>
              <div className="topbar__spacer" />
              <form className="topbar__search" role="search" action="/common/cm-02-search/" method="get">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#search" />
                </svg>
                <input className="topbar__search-input" type="search" name="q" placeholder="Search bookings, guests, rooms…" aria-label="Search bookings, guests and rooms" autoComplete="off" />
              </form>
              <button className="topbar__new" type="button" popoverTarget="pv-new" aria-label="New: reservation, enquiry, walk-in or request">
                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#plus" />
                </svg>
                <span>{"New"}</span>
              </button>
              <button className="icon-link topbar__btn" type="button" popoverTarget="pv-notif" aria-label="Notifications, 5 new">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#bell" />
                </svg>
                <span className="topbar__bell-badge badge" aria-hidden="true">{"5"}</span>
              </button>
              <Link className="icon-link" aria-label="Help and support" to={"/common/cm-04-help-support"}>
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#help" />
                </svg>
              </Link>
              <button className="topbar__user topbar__btn" type="button" popoverTarget="pv-user" aria-label="User menu: Anita Mohan">
                <span className="avatar" style={{"--av-h": "150", "width": "32px", "height": "32px"}} aria-hidden="true">{"AM"}</span>
                <span className="topbar__user-text">
                  <span className="topbar__user-name">{"Anita Mohan"}</span>
                  <span className="topbar__user-role">{"Reservation Manager"}</span>
                </span>
              </button>
              <div className="pv pv--prop" id="pv-prop" popover="" data-code="CM-P09">
                <p className="pv__title">{"Property"}</p>
                <Link className="pv__item is-current" to={"/front-desk/fd-01-front-desk-home"}>
                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#building" />
                  </svg>
                  <span>
                    <strong>{"The Aviv Kochi"}</strong>
                    <small>{"Bristow Road, Willingdon Island · 92 rooms"}</small>
                  </span>
                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#check" />
                  </svg>
                </Link>
              </div>
              <div className="pv pv--new" id="pv-new" popover="">
                <p className="pv__title">{"Create new"}</p>
                <Link className="pv__item" to={"/reservation/rs-05-new-reservation"}>
                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#plus-circle" />
                  </svg>
                  <span>{"New Reservation"}</span>
                </Link>
                <Link className="pv__item" to={"/reservation/rs-02-enquiry-entry"}>
                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#message-square" />
                  </svg>
                  <span>{"New Enquiry"}</span>
                </Link>
                <Link className="pv__item" to={"/front-desk/fd-04-walk-in-check-in"}>
                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#log-in" />
                  </svg>
                  <span>{"Walk-in"}</span>
                </Link>
                <a className="pv__item" href="/front-desk/fd-11-requests-complaints/#FD-P20">
                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#bell-ring" />
                  </svg>
                  <span>{"New Request"}</span>
                </a>
                <a className="pv__item" href="/restaurant-pos/rt-06-room-service-orders/#new">
                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#bell-ring" />
                  </svg>
                  <span>{"Room Service Order"}</span>
                </a>
                <a className="pv__item" href="/engineering-and-maintenance/mt-02-work-queue/#mt-p01">
                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#wrench" />
                  </svg>
                  <span>{"Work Order"}</span>
                </a>
                <a className="pv__item" href="/lost-and-found/lf-02-found-items-register/#lf-p01">
                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#archive" />
                  </svg>
                  <span>{"Found Item"}</span>
                </a>
                <Link className="pv__item" data-leads-to="PR-03" to={"/purchase/pr-03-purchase-requisition"}>
                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#clipboard-list" />
                  </svg>
                  <span>{"Purchase Requisition"}</span>
                </Link>
              </div>
              <div className="pv pv--notif" id="pv-notif" popover="" data-code="CM-P03">
                <p className="pv__title">{"Notifications"}</p>
                <Link className="pv__item" to={"/reservation/rs-20-approvals"}>
                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#shield-check" />
                  </svg>
                  <span>
                    <strong>{"4 approvals waiting"}</strong>
                    <small>{"Discounts, refunds, overbooking"}</small>
                  </span>
                </Link>
                {" "}
                <Link className="pv__item" to={"/front-desk/fd-20-form-c-form-iii-register"}>
                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#id-card" />
                  </svg>
                  <span>
                    <strong>{"2 Form III reports due in 24 hours"}</strong>
                    <small>{"Foreign guests checked in today"}</small>
                  </span>
                </Link>
                {" "}
                <Link className="pv__item" to={"/front-desk/fd-07-in-house-guests"}>
                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#alert" />
                  </svg>
                  <span>
                    <strong>{"1 guest above credit limit"}</strong>
                    <small>{"Room 213 · check the folio"}</small>
                  </span>
                </Link>
                {" "}
                <Link className="pv__item" to={"/front-desk/fd-02-arrivals"}>
                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#clock" />
                  </svg>
                  <span>
                    <strong>{"2 guests waiting for a room"}</strong>
                    <small>{"Queue · rooms 505 and 217 not ready"}</small>
                  </span>
                </Link>
                {" "}
                <Link className="pv__item" to={"/front-desk/fd-11-requests-complaints"}>
                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#message-square" />
                  </svg>
                  <span>
                    <strong>{"1 request overdue"}</strong>
                    <small>{"Extra pillows · Housekeeping"}</small>
                  </span>
                </Link>
              </div>
              <div className="pv pv--user" id="pv-user" popover="">
                <p className="pv__title">{"Anita Mohan · Reservation Manager"}</p>
                <Link className="pv__item" to={"/common/cm-05-my-profile"}>
                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#user" />
                  </svg>
                  <span>{"My Profile"}</span>
                </Link>
                {" "}
                <a className="pv__item" href="/common/cm-05-my-profile/#CM-P12">
                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#lock" />
                  </svg>
                  <span>{"Change password"}</span>
                </a>
                {" "}
                <Link className="pv__item" to={"/common/cm-04-help-support"}>
                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#help" />
                  </svg>
                  <span>{"Help & Support"}</span>
                </Link>
                {" "}
                <Link className="pv__item" to={"/common/cm-01-login"}>
                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#log-out" />
                  </svg>
                  <span>{"Log out"}</span>
                </Link>
                <p className="pv__note">{"Close your cashier shift before you log out (FD-X23)."}</p>
              </div>
            </header>
            <main className="app__content" id="main" data-code="HKS-05" tabIndex="-1">
              <header className="page-header">
                <div className="page-header__top">
                  <nav className="breadcrumb" aria-label="Breadcrumb">
                    <ol>
                      <li>
                        <Link to={"/common/cm-06-home-launcher"}>{"Home"}</Link>
                      </li>
                      <li>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-right" />
                        </svg>
                        <Link to={"/housekeeping-setup/hks-01-housekeeping-setup-home"}>{"Housekeeping Setup"}</Link>
                      </li>
                      <li>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-right" />
                        </svg>
                        <span aria-current="page">{"Task types & credits"}</span>
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="page-header__row">
                  <div className="page-header__text">
                    <h1 className="page-header__title">{"Task Types & Credits"}</h1>
                  </div>
                  <span className="code-chip" title="Screen code">{"HKS-05"}</span>
                  <div className="page-header__actions">
                    <a className="btn" href="#preview" data-leads-to="HKS-05">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#bar-chart" />
                      </svg>
                      {"Preview workload"}
                    </a>
                    <a className="btn" href="#hks-copy" data-leads-to="HKS-05">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#copy" />
                      </svg>
                      {"Copy room type"}
                    </a>
                    <a className="btn btn--primary" href="#hks-p04-new" data-leads-to="HKS-P04">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#plus" />
                      </svg>
                      {"Add task type"}
                    </a>
                  </div>
                </div>
              </header>
              <div className="fd-banner fd-banner--warn hks-pending" data-code="HKS-05-pending" role="status">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#clock" />
                </svg>
                <div className="fd-banner__t">
                  <strong>{"Pending approval"}</strong>
                  {" The credit changes wait for Meera Prem (Rooms Division Manager) in the approvals inbox. Until they are approved, the old credits stay in use."}
                  <Link className="fd-link" data-leads-to="DA-03" to={"/reservation/rs-20-approvals"}>{"Open approvals (DA-03) →"}</Link>
                </div>
              </div>
              <div className="fd-banner fd-banner--warn hks-nocredit" role="status">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#alert" />
                </svg>
                <div className="fd-banner__t">
                  <strong>{"Premium Suite (PRMS) has no credits yet."}</strong>
                  {" Room 517 is left out of the workload until its credits are entered. Measure the time with your best attendant, or copy another room type and adjust it."}
                  <a className="fd-link" href="#hks-copy">{"Copy room type →"}</a>
                </div>
              </div>
              <nav className="fd-anchors" aria-label="Sections">
                <a href="#sec-a">{"A · Task types"}</a>
                <a href="#sec-b">{"B · Credits matrix"}</a>
                <a href="#sec-c">{"C · Linen change"}</a>
              </nav>
              <section className="fd-sec" id="sec-a" data-code="HKS-05-tasks">
                <h2 className="fd-sec__t">{"A · Task types"}</h2>
                <p className="fd-sec__d">{"The kinds of cleaning job, when each is created, and its order in the attendant’s list. 7 task types · 46 cleaning steps."}</p>
                <div className="pgw">
                  <div className="s-scroll">
                    <table className="srt dt__table" data-code="HKS-05-task-types" style={{"--srt-cols": "auto auto auto auto auto auto max-content"}} data-mc="">
                      <caption className="sr-only">{"Task types"}</caption>
                      <thead>
                        <tr>
                          <th scope="col">
                            <input className="srt-i srt-a0" type="radio" name="sthks050" id="sthks050-0a" aria-label="Sort by Code · name, lowest or A first" />
                            <input className="srt-i srt-d0" type="radio" name="sthks050" id="sthks050-0d" aria-label="Sort by Code · name, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="sthks050-0a">{"Code · name"}</label>
                            <label className="srt-l srt-l--d" htmlFor="sthks050-0d" aria-hidden="true">{"Code · name"}</label>
                          </th>
                          <th scope="col">
                            <input className="srt-i srt-a1" type="radio" name="sthks050" id="sthks050-1a" aria-label="Sort by Applies when, lowest or A first" />
                            <input className="srt-i srt-d1" type="radio" name="sthks050" id="sthks050-1d" aria-label="Sort by Applies when, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="sthks050-1a">{"Applies when"}</label>
                            <label className="srt-l srt-l--d" htmlFor="sthks050-1d" aria-hidden="true">{"Applies when"}</label>
                          </th>
                          <th scope="col" className="dt__th--right">
                            <input className="srt-i srt-a2" type="radio" name="sthks050" id="sthks050-2a" aria-label="Sort by Priority order, lowest or A first" />
                            <input className="srt-i srt-d2" type="radio" name="sthks050" id="sthks050-2d" aria-label="Sort by Priority order, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="sthks050-2a">{"Priority order"}</label>
                            <label className="srt-l srt-l--d" htmlFor="sthks050-2d" aria-hidden="true">{"Priority order"}</label>
                          </th>
                          <th scope="col">
                            <input className="srt-i srt-a3" type="radio" name="sthks050" id="sthks050-3a" aria-label="Sort by Cleaning steps, lowest or A first" />
                            <input className="srt-i srt-d3" type="radio" name="sthks050" id="sthks050-3d" aria-label="Sort by Cleaning steps, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="sthks050-3a">{"Cleaning steps"}</label>
                            <label className="srt-l srt-l--d" htmlFor="sthks050-3d" aria-hidden="true">{"Cleaning steps"}</label>
                          </th>
                          <th scope="col">
                            <input className="srt-i srt-a4" type="radio" name="sthks050" id="sthks050-4a" aria-label="Sort by Inspection checklist, lowest or A first" />
                            <input className="srt-i srt-d4" type="radio" name="sthks050" id="sthks050-4d" aria-label="Sort by Inspection checklist, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="sthks050-4a">{"Inspection checklist"}</label>
                            <label className="srt-l srt-l--d" htmlFor="sthks050-4d" aria-hidden="true">{"Inspection checklist"}</label>
                          </th>
                          <th scope="col">{"Status"}</th>
                          <th scope="col" />
                        </tr>
                      </thead>
                      <tbody>
                        <tr id="saved-dep" style={{"--k0": "3", "--k1": "4", "--k2": "1", "--k3": "3", "--k4": "2"}}>
                          <td className="dt__td nw" data-label="Code · name" data-w2="" data-t="">
                            <a className="fd-link" href="#hks-p04-dep">
                              <strong>{"DEP"}</strong>
                              {" · Departure clean"}
                            </a>
                          </td>
                          <td className="dt__td" data-label="Applies when">
                            {"Departure today"}
                            <span className="fd-sub">{"Trigger: Departure"}</span>
                          </td>
                          <td className="dt__td dt__td--right num nw" data-label="Priority order" data-w2="">{"1"}</td>
                          <td className="dt__td nw" data-label="Cleaning steps">
                            <Link className="fd-link" data-leads-to="HKS-13" to={"/housekeeping-setup/hks-13-attendant-cleaning-steps"}>{"Departure clean steps"}</Link>
                            <span className="fd-sub">{"14 steps"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Inspection checklist" data-w2="">
                            <Link className="fd-link" data-leads-to="HKS-08" to={"/housekeeping-setup/hks-08-inspection-checklists-and-rules"}>{"Standard room departure"}</Link>
                          </td>
                          <td className="dt__td" data-label="Status" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p04-dep" aria-label="Edit task type DEP Departure clean">{"Edit"}</a>
                          </td>
                        </tr>
                        <tr id="saved-arr" style={{"--k0": "1", "--k1": "2", "--k2": "2", "--k3": "1", "--k4": "4"}}>
                          <td className="dt__td nw" data-label="Code · name" data-w2="" data-t="">
                            <a className="fd-link" href="#hks-p04-arr">
                              <strong>{"ARR"}</strong>
                              {" · Arrival check"}
                            </a>
                          </td>
                          <td className="dt__td" data-label="Applies when">
                            {"Arrival today"}
                            <span className="fd-sub">{"Trigger: Arrival today"}</span>
                          </td>
                          <td className="dt__td dt__td--right num nw" data-label="Priority order" data-w2="">{"2"}</td>
                          <td className="dt__td nw" data-label="Cleaning steps">
                            <Link className="fd-link" data-leads-to="HKS-13" to={"/housekeeping-setup/hks-13-attendant-cleaning-steps"}>{"Arrival check steps"}</Link>
                            <span className="fd-sub">{"6 steps"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Inspection checklist" data-w2="">
                            <Link className="fd-link" data-leads-to="HKS-08" to={"/housekeeping-setup/hks-08-inspection-checklists-and-rules"}>{"VIP check (VIP rooms)"}</Link>
                          </td>
                          <td className="dt__td" data-label="Status" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p04-arr" aria-label="Edit task type ARR Arrival check">{"Edit"}</a>
                          </td>
                        </tr>
                        <tr id="saved-tch" style={{"--k0": "6", "--k1": "7", "--k2": "3", "--k3": "6", "--k4": "1"}}>
                          <td className="dt__td nw" data-label="Code · name" data-w2="" data-t="">
                            <a className="fd-link" href="#hks-p04-tch">
                              <strong>{"TCH"}</strong>
                              {" · Touch-up"}
                            </a>
                          </td>
                          <td className="dt__td" data-label="Applies when">
                            {"Vacant room waiting for a quick touch (Pickup)"}
                            <span className="fd-sub">{"Trigger: Vacant pickup"}</span>
                          </td>
                          <td className="dt__td dt__td--right num nw" data-label="Priority order" data-w2="">{"3"}</td>
                          <td className="dt__td nw" data-label="Cleaning steps" data-w2="">
                            <Link className="fd-link" data-leads-to="HKS-13" to={"/housekeeping-setup/hks-13-attendant-cleaning-steps"}>{"Touch-up steps"}</Link>
                            <span className="fd-sub">{"4 steps"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Inspection checklist" data-w2="">
                            <span className="fd-muted">{"By inspection rule"}</span>
                          </td>
                          <td className="dt__td" data-label="Status" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p04-tch" aria-label="Edit task type TCH Touch-up">{"Edit"}</a>
                          </td>
                        </tr>
                        <tr id="saved-sty" style={{"--k0": "5", "--k1": "6", "--k2": "4", "--k3": "5", "--k4": "3"}}>
                          <td className="dt__td nw" data-label="Code · name" data-w2="" data-t="">
                            <a className="fd-link" href="#hks-p04-sty">
                              <strong>{"STY"}</strong>
                              {" · Stayover"}
                            </a>
                          </td>
                          <td className="dt__td" data-label="Applies when">
                            {"Guest in house"}
                            <span className="fd-sub">{"Trigger: In-house"}</span>
                          </td>
                          <td className="dt__td dt__td--right num nw" data-label="Priority order" data-w2="">{"4"}</td>
                          <td className="dt__td nw" data-label="Cleaning steps" data-w2="">
                            <Link className="fd-link" data-leads-to="HKS-13" to={"/housekeeping-setup/hks-13-attendant-cleaning-steps"}>{"Stayover steps"}</Link>
                            <span className="fd-sub">{"9 steps"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Inspection checklist" data-w2="">
                            <Link className="fd-link" data-leads-to="HKS-08" to={"/housekeeping-setup/hks-08-inspection-checklists-and-rules"}>{"Standard room stayover"}</Link>
                          </td>
                          <td className="dt__td" data-label="Status" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p04-sty" aria-label="Edit task type STY Stayover">{"Edit"}</a>
                          </td>
                        </tr>
                        <tr id="saved-lch" style={{"--k0": "4", "--k1": "1", "--k2": "5", "--k3": "4", "--k4": "1"}}>
                          <td className="dt__td nw" data-label="Code · name" data-w2="" data-t="">
                            <a className="fd-link" href="#hks-p04-lch">
                              <strong>{"LCH"}</strong>
                              {" · Linen change"}
                            </a>
                          </td>
                          <td className="dt__td" data-label="Applies when">
                            {"Added to the stayover on the linen-change night"}
                            <span className="fd-sub">{"Trigger: In-house"}</span>
                          </td>
                          <td className="dt__td dt__td--right num nw" data-label="Priority order" data-w2="">{"5"}</td>
                          <td className="dt__td nw" data-label="Cleaning steps">
                            <Link className="fd-link" data-leads-to="HKS-13" to={"/housekeeping-setup/hks-13-attendant-cleaning-steps"}>{"Linen change steps"}</Link>
                            <span className="fd-sub">{"4 steps"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Inspection checklist" data-w2="">
                            <span className="fd-muted">{"By inspection rule"}</span>
                          </td>
                          <td className="dt__td" data-label="Status" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p04-lch" aria-label="Edit task type LCH Linen change">{"Edit"}</a>
                          </td>
                        </tr>
                        <tr id="saved-dcl" style={{"--k0": "2", "--k1": "3", "--k2": "6", "--k3": "2", "--k4": "1"}}>
                          <td className="dt__td nw" data-label="Code · name" data-w2="" data-t="">
                            <a className="fd-link" href="#hks-p04-dcl">
                              <strong>{"DCL"}</strong>
                              {" · Deep clean"}
                            </a>
                          </td>
                          <td className="dt__td" data-label="Applies when">
                            {"Deep-clean job due (HKS-06)"}
                            <span className="fd-sub">{"Trigger: Deep-clean due"}</span>
                          </td>
                          <td className="dt__td dt__td--right num nw" data-label="Priority order" data-w2="">{"6"}</td>
                          <td className="dt__td nw" data-label="Cleaning steps" data-w2="">
                            <Link className="fd-link" data-leads-to="HKS-13" to={"/housekeeping-setup/hks-13-attendant-cleaning-steps"}>{"Deep clean steps"}</Link>
                            <span className="fd-sub">{"5 steps"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Inspection checklist" data-w2="">
                            <span className="fd-muted">{"By inspection rule"}</span>
                          </td>
                          <td className="dt__td" data-label="Status" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p04-dcl" aria-label="Edit task type DCL Deep clean">{"Edit"}</a>
                          </td>
                        </tr>
                        <tr id="saved-tdn" style={{"--k0": "7", "--k1": "5", "--k2": "7", "--k3": "7", "--k4": "1"}}>
                          <td className="dt__td nw" data-label="Code · name" data-w2="" data-t="">
                            <a className="fd-link" href="#hks-p04-tdn">
                              <strong>{"TDN"}</strong>
                              {" · Turndown"}
                            </a>
                          </td>
                          <td className="dt__td" data-label="Applies when" data-w="">
                            {"Evening, rooms eligible for turndown (HKS-09)"}
                            <span className="fd-sub">{"Trigger: Evening eligible"}</span>
                          </td>
                          <td className="dt__td dt__td--right num nw" data-label="Priority order" data-w2="">{"7"}</td>
                          <td className="dt__td nw" data-label="Cleaning steps" data-w2="">
                            <Link className="fd-link" data-leads-to="HKS-13" to={"/housekeeping-setup/hks-13-attendant-cleaning-steps"}>{"Turndown steps"}</Link>
                            <span className="fd-sub">{"4 steps"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Inspection checklist" data-w2="">
                            <span className="fd-muted">{"By inspection rule"}</span>
                          </td>
                          <td className="dt__td" data-label="Status" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p04-tdn" aria-label="Edit task type TDN Turndown">{"Edit"}</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <nav className="pg pg--off" aria-label="Table pages" title="All rows fit on one page – paging switches on when the list has more than 10 rows">
                    <label className="pg-rpp">
                      <span>{"Rows per page"}</span>
                      <select className="pg-rpp__c" disabled={true} defaultValue={"10"}>
                        <option value="10">{"10"}</option>
                        <option value="15">{"15"}</option>
                        <option value="20">{"20"}</option>
                        <option value="25">{"25"}</option>
                        <option value="30">{"30"}</option>
                      </select>
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#chevron-down" />
                      </svg>
                    </label>
                    <div className="pg-set pg-set--10">
                      <input className="pg-in" type="radio" name="pghks05r10" id="pghks05r10p1" defaultChecked={true} />
                      <label className="pg-n" htmlFor="pghks05r10p1" aria-label="Page 1">{"1"}</label>
                      <span className="pg-info">
                        <span>
                          {"Showing "}
                          <b>{"1–7"}</b>
                          {" of 7"}
                        </span>
                      </span>
                      <span className="pg-prev">
                        <span className="pg-arr is-off">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-left" />
                          </svg>
                        </span>
                      </span>
                      <span className="pg-next">
                        <span className="pg-arr is-off">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-right" />
                          </svg>
                        </span>
                      </span>
                    </div>
                    <div className="pg-set pg-set--15">
                      <input className="pg-in" type="radio" name="pghks05r15" id="pghks05r15p1" defaultChecked={true} />
                      <label className="pg-n" htmlFor="pghks05r15p1" aria-label="Page 1">{"1"}</label>
                      <span className="pg-info">
                        <span>
                          {"Showing "}
                          <b>{"1–7"}</b>
                          {" of 7"}
                        </span>
                      </span>
                      <span className="pg-prev">
                        <span className="pg-arr is-off">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-left" />
                          </svg>
                        </span>
                      </span>
                      <span className="pg-next">
                        <span className="pg-arr is-off">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-right" />
                          </svg>
                        </span>
                      </span>
                    </div>
                    <div className="pg-set pg-set--20">
                      <input className="pg-in" type="radio" name="pghks05r20" id="pghks05r20p1" defaultChecked={true} />
                      <label className="pg-n" htmlFor="pghks05r20p1" aria-label="Page 1">{"1"}</label>
                      <span className="pg-info">
                        <span>
                          {"Showing "}
                          <b>{"1–7"}</b>
                          {" of 7"}
                        </span>
                      </span>
                      <span className="pg-prev">
                        <span className="pg-arr is-off">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-left" />
                          </svg>
                        </span>
                      </span>
                      <span className="pg-next">
                        <span className="pg-arr is-off">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-right" />
                          </svg>
                        </span>
                      </span>
                    </div>
                    <div className="pg-set pg-set--25">
                      <input className="pg-in" type="radio" name="pghks05r25" id="pghks05r25p1" defaultChecked={true} />
                      <label className="pg-n" htmlFor="pghks05r25p1" aria-label="Page 1">{"1"}</label>
                      <span className="pg-info">
                        <span>
                          {"Showing "}
                          <b>{"1–7"}</b>
                          {" of 7"}
                        </span>
                      </span>
                      <span className="pg-prev">
                        <span className="pg-arr is-off">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-left" />
                          </svg>
                        </span>
                      </span>
                      <span className="pg-next">
                        <span className="pg-arr is-off">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-right" />
                          </svg>
                        </span>
                      </span>
                    </div>
                    <div className="pg-set pg-set--30">
                      <input className="pg-in" type="radio" name="pghks05r30" id="pghks05r30p1" defaultChecked={true} />
                      <label className="pg-n" htmlFor="pghks05r30p1" aria-label="Page 1">{"1"}</label>
                      <span className="pg-info">
                        <span>
                          {"Showing "}
                          <b>{"1–7"}</b>
                          {" of 7"}
                        </span>
                      </span>
                      <span className="pg-prev">
                        <span className="pg-arr is-off">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-left" />
                          </svg>
                        </span>
                      </span>
                      <span className="pg-next">
                        <span className="pg-arr is-off">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-right" />
                          </svg>
                        </span>
                      </span>
                    </div>
                  </nav>
                </div>
              </section>
              <form className="fd-form hks-form" action="/housekeeping-setup/hks-05-task-types-and-credits/#pending" method="get">
                <section className="fd-sec" id="sec-b" data-code="HKS-05-matrix">
                  <h2 className="fd-sec__t">{"B · Credits matrix"}</h2>
                  <p className="fd-sec__d">{"Credits and standard minutes for each room type and task. 1 credit = about 30 minutes (hotel setting). Type in a cell to change it. Credits 0.1–10 with one decimal, minutes 5–240. Changes go to the Rooms Division Manager for approval."}</p>
                  <div className="pgw">
                    <div className="s-scroll">
                      <table className="dt__table hks-matrix" data-code="HKS-05-credits" data-mc="">
                        <caption className="sr-only">{"Credits and standard minutes by room type and task type"}</caption>
                        <thead>
                          <tr>
                            <th scope="col" className="hks-th hks-th--first">{"Room type"}</th>
                            <th scope="col" className="hks-th">
                              <strong>{"DEP"}</strong>
                              <span>{"Departure clean"}</span>
                              <small>{"credits · min"}</small>
                            </th>
                            <th scope="col" className="hks-th">
                              <strong>{"STY"}</strong>
                              <span>{"Stayover"}</span>
                              <small>{"credits · min"}</small>
                            </th>
                            <th scope="col" className="hks-th">
                              <strong>{"TCH"}</strong>
                              <span>{"Touch-up"}</span>
                              <small>{"credits · min"}</small>
                            </th>
                            <th scope="col" className="hks-th">
                              <strong>{"ARR"}</strong>
                              <span>{"Arrival check"}</span>
                              <small>{"credits · min"}</small>
                            </th>
                            <th scope="col" className="hks-th">
                              <strong>{"DCL"}</strong>
                              <span>{"Deep clean"}</span>
                              <small>{"credits · min"}</small>
                            </th>
                            <th scope="col" className="hks-th">
                              <strong>{"TDN"}</strong>
                              <span>{"Turndown"}</span>
                              <small>{"credits · min"}</small>
                            </th>
                            <th scope="col" className="hks-th">
                              <strong>{"LCH"}</strong>
                              <span>{"Linen change"}</span>
                              <small>{"credits · min"}</small>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row" className="dt__td hks-rt" data-label="Room type" data-w="" data-t="">
                              <strong>{"GDLX"}</strong>
                              {" Garden Deluxe Room"}
                              <span className="fd-sub">{"48 rooms"}</span>
                            </th>
                            <td className="dt__td hks-cell" data-label="DEP Departure clean credits · min" data-w2="">
                              <div className="hks-cell__in">
                                <input className="field__input num" type="number" name="cr_GDLX_DEP" min="0.1" max="10" step="0.1" aria-label="Credits, Garden Deluxe Room, Departure clean" placeholder="–" defaultValue={"1.0"} />
                                <input className="field__input num" type="number" name="min_GDLX_DEP" min="5" max="240" step="1" aria-label="Standard minutes, Garden Deluxe Room, Departure clean" placeholder="–" defaultValue={"30"} />
                              </div>
                            </td>
                            <td className="dt__td hks-cell" data-label="STY Stayover credits · min" data-w2="">
                              <div className="hks-cell__in">
                                <input className="field__input num" type="number" name="cr_GDLX_STY" min="0.1" max="10" step="0.1" aria-label="Credits, Garden Deluxe Room, Stayover" placeholder="–" defaultValue={"0.6"} />
                                <input className="field__input num" type="number" name="min_GDLX_STY" min="5" max="240" step="1" aria-label="Standard minutes, Garden Deluxe Room, Stayover" placeholder="–" defaultValue={"18"} />
                              </div>
                            </td>
                            <td className="dt__td hks-cell" data-label="TCH Touch-up credits · min" data-w2="">
                              <div className="hks-cell__in">
                                <input className="field__input num" type="number" name="cr_GDLX_TCH" min="0.1" max="10" step="0.1" aria-label="Credits, Garden Deluxe Room, Touch-up" placeholder="–" defaultValue={"0.2"} />
                                <input className="field__input num" type="number" name="min_GDLX_TCH" min="5" max="240" step="1" aria-label="Standard minutes, Garden Deluxe Room, Touch-up" placeholder="–" defaultValue={"6"} />
                              </div>
                            </td>
                            <td className="dt__td hks-cell" data-label="ARR Arrival check credits · min" data-w2="">
                              <div className="hks-cell__in">
                                <input className="field__input num" type="number" name="cr_GDLX_ARR" min="0.1" max="10" step="0.1" aria-label="Credits, Garden Deluxe Room, Arrival check" placeholder="–" defaultValue={"0.2"} />
                                <input className="field__input num" type="number" name="min_GDLX_ARR" min="5" max="240" step="1" aria-label="Standard minutes, Garden Deluxe Room, Arrival check" placeholder="–" defaultValue={"6"} />
                              </div>
                            </td>
                            <td className="dt__td hks-cell" data-label="DCL Deep clean credits · min" data-w2="">
                              <div className="hks-cell__in">
                                <input className="field__input num" type="number" name="cr_GDLX_DCL" min="0.1" max="10" step="0.1" aria-label="Credits, Garden Deluxe Room, Deep clean" placeholder="–" defaultValue={"1.5"} />
                                <input className="field__input num" type="number" name="min_GDLX_DCL" min="5" max="240" step="1" aria-label="Standard minutes, Garden Deluxe Room, Deep clean" placeholder="–" defaultValue={"45"} />
                              </div>
                            </td>
                            <td className="dt__td hks-cell" data-label="TDN Turndown credits · min" data-w2="">
                              <div className="hks-cell__in">
                                <input className="field__input num" type="number" name="cr_GDLX_TDN" min="0.1" max="10" step="0.1" aria-label="Credits, Garden Deluxe Room, Turndown" placeholder="–" defaultValue={"0.2"} />
                                <input className="field__input num" type="number" name="min_GDLX_TDN" min="5" max="240" step="1" aria-label="Standard minutes, Garden Deluxe Room, Turndown" placeholder="–" defaultValue={"6"} />
                              </div>
                            </td>
                            <td className="dt__td hks-cell" data-label="LCH Linen change credits · min" data-w2="" data-m="">
                              <div className="hks-cell__in">
                                <input className="field__input num" type="number" name="cr_GDLX_LCH" min="0.1" max="10" step="0.1" aria-label="Credits, Garden Deluxe Room, Linen change" placeholder="–" defaultValue={"0.2"} />
                                <input className="field__input num" type="number" name="min_GDLX_LCH" min="5" max="240" step="1" aria-label="Standard minutes, Garden Deluxe Room, Linen change" placeholder="–" defaultValue={"6"} />
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row" className="dt__td hks-rt" data-label="Room type" data-w="" data-t="">
                              <strong>{"PDLX"}</strong>
                              {" Pool Deluxe Room"}
                              <span className="fd-sub">{"40 rooms"}</span>
                            </th>
                            <td className="dt__td hks-cell" data-label="DEP Departure clean credits · min" data-w2="">
                              <div className="hks-cell__in">
                                <input className="field__input num" type="number" name="cr_PDLX_DEP" min="0.1" max="10" step="0.1" aria-label="Credits, Pool Deluxe Room, Departure clean" placeholder="–" defaultValue={"1.0"} />
                                <input className="field__input num" type="number" name="min_PDLX_DEP" min="5" max="240" step="1" aria-label="Standard minutes, Pool Deluxe Room, Departure clean" placeholder="–" defaultValue={"30"} />
                              </div>
                            </td>
                            <td className="dt__td hks-cell" data-label="STY Stayover credits · min" data-w2="">
                              <div className="hks-cell__in">
                                <input className="field__input num" type="number" name="cr_PDLX_STY" min="0.1" max="10" step="0.1" aria-label="Credits, Pool Deluxe Room, Stayover" placeholder="–" defaultValue={"0.6"} />
                                <input className="field__input num" type="number" name="min_PDLX_STY" min="5" max="240" step="1" aria-label="Standard minutes, Pool Deluxe Room, Stayover" placeholder="–" defaultValue={"18"} />
                              </div>
                            </td>
                            <td className="dt__td hks-cell" data-label="TCH Touch-up credits · min" data-w2="">
                              <div className="hks-cell__in">
                                <input className="field__input num" type="number" name="cr_PDLX_TCH" min="0.1" max="10" step="0.1" aria-label="Credits, Pool Deluxe Room, Touch-up" placeholder="–" defaultValue={"0.2"} />
                                <input className="field__input num" type="number" name="min_PDLX_TCH" min="5" max="240" step="1" aria-label="Standard minutes, Pool Deluxe Room, Touch-up" placeholder="–" defaultValue={"6"} />
                              </div>
                            </td>
                            <td className="dt__td hks-cell" data-label="ARR Arrival check credits · min" data-w2="">
                              <div className="hks-cell__in">
                                <input className="field__input num" type="number" name="cr_PDLX_ARR" min="0.1" max="10" step="0.1" aria-label="Credits, Pool Deluxe Room, Arrival check" placeholder="–" defaultValue={"0.2"} />
                                <input className="field__input num" type="number" name="min_PDLX_ARR" min="5" max="240" step="1" aria-label="Standard minutes, Pool Deluxe Room, Arrival check" placeholder="–" defaultValue={"6"} />
                              </div>
                            </td>
                            <td className="dt__td hks-cell" data-label="DCL Deep clean credits · min" data-w2="">
                              <div className="hks-cell__in">
                                <input className="field__input num" type="number" name="cr_PDLX_DCL" min="0.1" max="10" step="0.1" aria-label="Credits, Pool Deluxe Room, Deep clean" placeholder="–" defaultValue={"1.5"} />
                                <input className="field__input num" type="number" name="min_PDLX_DCL" min="5" max="240" step="1" aria-label="Standard minutes, Pool Deluxe Room, Deep clean" placeholder="–" defaultValue={"45"} />
                              </div>
                            </td>
                            <td className="dt__td hks-cell" data-label="TDN Turndown credits · min" data-w2="">
                              <div className="hks-cell__in">
                                <input className="field__input num" type="number" name="cr_PDLX_TDN" min="0.1" max="10" step="0.1" aria-label="Credits, Pool Deluxe Room, Turndown" placeholder="–" defaultValue={"0.2"} />
                                <input className="field__input num" type="number" name="min_PDLX_TDN" min="5" max="240" step="1" aria-label="Standard minutes, Pool Deluxe Room, Turndown" placeholder="–" defaultValue={"6"} />
                              </div>
                            </td>
                            <td className="dt__td hks-cell" data-label="LCH Linen change credits · min" data-w2="" data-m="">
                              <div className="hks-cell__in">
                                <input className="field__input num" type="number" name="cr_PDLX_LCH" min="0.1" max="10" step="0.1" aria-label="Credits, Pool Deluxe Room, Linen change" placeholder="–" defaultValue={"0.2"} />
                                <input className="field__input num" type="number" name="min_PDLX_LCH" min="5" max="240" step="1" aria-label="Standard minutes, Pool Deluxe Room, Linen change" placeholder="–" defaultValue={"6"} />
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row" className="dt__td hks-rt" data-label="Room type" data-w2="" data-t="">
                              <strong>{"DLXS"}</strong>
                              {" Deluxe Suite"}
                              <span className="fd-sub">{"3 rooms"}</span>
                            </th>
                            <td className="dt__td hks-cell" data-label="DEP Departure clean credits · min" data-w2="">
                              <div className="hks-cell__in">
                                <input className="field__input num" type="number" name="cr_DLXS_DEP" min="0.1" max="10" step="0.1" aria-label="Credits, Deluxe Suite, Departure clean" placeholder="–" defaultValue={"2.0"} />
                                <input className="field__input num" type="number" name="min_DLXS_DEP" min="5" max="240" step="1" aria-label="Standard minutes, Deluxe Suite, Departure clean" placeholder="–" defaultValue={"60"} />
                              </div>
                            </td>
                            <td className="dt__td hks-cell" data-label="STY Stayover credits · min" data-w2="">
                              <div className="hks-cell__in">
                                <input className="field__input num" type="number" name="cr_DLXS_STY" min="0.1" max="10" step="0.1" aria-label="Credits, Deluxe Suite, Stayover" placeholder="–" defaultValue={"1.2"} />
                                <input className="field__input num" type="number" name="min_DLXS_STY" min="5" max="240" step="1" aria-label="Standard minutes, Deluxe Suite, Stayover" placeholder="–" defaultValue={"36"} />
                              </div>
                            </td>
                            <td className="dt__td hks-cell" data-label="TCH Touch-up credits · min" data-w2="">
                              <div className="hks-cell__in">
                                <input className="field__input num" type="number" name="cr_DLXS_TCH" min="0.1" max="10" step="0.1" aria-label="Credits, Deluxe Suite, Touch-up" placeholder="–" defaultValue={"0.4"} />
                                <input className="field__input num" type="number" name="min_DLXS_TCH" min="5" max="240" step="1" aria-label="Standard minutes, Deluxe Suite, Touch-up" placeholder="–" defaultValue={"12"} />
                              </div>
                            </td>
                            <td className="dt__td hks-cell" data-label="ARR Arrival check credits · min" data-w2="">
                              <div className="hks-cell__in">
                                <input className="field__input num" type="number" name="cr_DLXS_ARR" min="0.1" max="10" step="0.1" aria-label="Credits, Deluxe Suite, Arrival check" placeholder="–" defaultValue={"0.4"} />
                                <input className="field__input num" type="number" name="min_DLXS_ARR" min="5" max="240" step="1" aria-label="Standard minutes, Deluxe Suite, Arrival check" placeholder="–" defaultValue={"12"} />
                              </div>
                            </td>
                            <td className="dt__td hks-cell" data-label="DCL Deep clean credits · min" data-w2="">
                              <div className="hks-cell__in">
                                <input className="field__input num" type="number" name="cr_DLXS_DCL" min="0.1" max="10" step="0.1" aria-label="Credits, Deluxe Suite, Deep clean" placeholder="–" defaultValue={"3.0"} />
                                <input className="field__input num" type="number" name="min_DLXS_DCL" min="5" max="240" step="1" aria-label="Standard minutes, Deluxe Suite, Deep clean" placeholder="–" defaultValue={"90"} />
                              </div>
                            </td>
                            <td className="dt__td hks-cell" data-label="TDN Turndown credits · min" data-w2="">
                              <div className="hks-cell__in">
                                <input className="field__input num" type="number" name="cr_DLXS_TDN" min="0.1" max="10" step="0.1" aria-label="Credits, Deluxe Suite, Turndown" placeholder="–" defaultValue={"0.4"} />
                                <input className="field__input num" type="number" name="min_DLXS_TDN" min="5" max="240" step="1" aria-label="Standard minutes, Deluxe Suite, Turndown" placeholder="–" defaultValue={"12"} />
                              </div>
                            </td>
                            <td className="dt__td hks-cell" data-label="LCH Linen change credits · min" data-w2="" data-m="">
                              <div className="hks-cell__in">
                                <input className="field__input num" type="number" name="cr_DLXS_LCH" min="0.1" max="10" step="0.1" aria-label="Credits, Deluxe Suite, Linen change" placeholder="–" defaultValue={"0.4"} />
                                <input className="field__input num" type="number" name="min_DLXS_LCH" min="5" max="240" step="1" aria-label="Standard minutes, Deluxe Suite, Linen change" placeholder="–" defaultValue={"12"} />
                              </div>
                            </td>
                          </tr>
                          <tr className="hks-prs hks-prs--empty">
                            <th scope="row" className="dt__td hks-rt" data-label="Room type" data-w="" data-t="">
                              <strong>{"PRMS"}</strong>
                              {" Premium Suite"}
                              <span className="fd-sub">{"1 room"}</span>
                              <span className="pill pill--tentative hks-prs__no">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#alert" />
                                </svg>
                                {"No credits yet"}
                              </span>
                            </th>
                            <td className="dt__td hks-cell" data-label="DEP Departure clean credits · min" data-w2="">
                              <div className="hks-cell__in">
                                <input className="field__input num" type="number" name="cr_PRMS_DEP" min="0.1" max="10" step="0.1" aria-label="Credits, Premium Suite, Departure clean" placeholder="–" defaultValue={""} />
                                <input className="field__input num" type="number" name="min_PRMS_DEP" min="5" max="240" step="1" aria-label="Standard minutes, Premium Suite, Departure clean" placeholder="–" defaultValue={""} />
                              </div>
                            </td>
                            <td className="dt__td hks-cell" data-label="STY Stayover credits · min" data-w2="">
                              <div className="hks-cell__in">
                                <input className="field__input num" type="number" name="cr_PRMS_STY" min="0.1" max="10" step="0.1" aria-label="Credits, Premium Suite, Stayover" placeholder="–" defaultValue={""} />
                                <input className="field__input num" type="number" name="min_PRMS_STY" min="5" max="240" step="1" aria-label="Standard minutes, Premium Suite, Stayover" placeholder="–" defaultValue={""} />
                              </div>
                            </td>
                            <td className="dt__td hks-cell" data-label="TCH Touch-up credits · min" data-w2="">
                              <div className="hks-cell__in">
                                <input className="field__input num" type="number" name="cr_PRMS_TCH" min="0.1" max="10" step="0.1" aria-label="Credits, Premium Suite, Touch-up" placeholder="–" defaultValue={""} />
                                <input className="field__input num" type="number" name="min_PRMS_TCH" min="5" max="240" step="1" aria-label="Standard minutes, Premium Suite, Touch-up" placeholder="–" defaultValue={""} />
                              </div>
                            </td>
                            <td className="dt__td hks-cell" data-label="ARR Arrival check credits · min" data-w2="">
                              <div className="hks-cell__in">
                                <input className="field__input num" type="number" name="cr_PRMS_ARR" min="0.1" max="10" step="0.1" aria-label="Credits, Premium Suite, Arrival check" placeholder="–" defaultValue={""} />
                                <input className="field__input num" type="number" name="min_PRMS_ARR" min="5" max="240" step="1" aria-label="Standard minutes, Premium Suite, Arrival check" placeholder="–" defaultValue={""} />
                              </div>
                            </td>
                            <td className="dt__td hks-cell" data-label="DCL Deep clean credits · min" data-w2="">
                              <div className="hks-cell__in">
                                <input className="field__input num" type="number" name="cr_PRMS_DCL" min="0.1" max="10" step="0.1" aria-label="Credits, Premium Suite, Deep clean" placeholder="–" defaultValue={""} />
                                <input className="field__input num" type="number" name="min_PRMS_DCL" min="5" max="240" step="1" aria-label="Standard minutes, Premium Suite, Deep clean" placeholder="–" defaultValue={""} />
                              </div>
                            </td>
                            <td className="dt__td hks-cell" data-label="TDN Turndown credits · min" data-w2="">
                              <div className="hks-cell__in">
                                <input className="field__input num" type="number" name="cr_PRMS_TDN" min="0.1" max="10" step="0.1" aria-label="Credits, Premium Suite, Turndown" placeholder="–" defaultValue={""} />
                                <input className="field__input num" type="number" name="min_PRMS_TDN" min="5" max="240" step="1" aria-label="Standard minutes, Premium Suite, Turndown" placeholder="–" defaultValue={""} />
                              </div>
                            </td>
                            <td className="dt__td hks-cell" data-label="LCH Linen change credits · min" data-w2="" data-m="">
                              <div className="hks-cell__in">
                                <input className="field__input num" type="number" name="cr_PRMS_LCH" min="0.1" max="10" step="0.1" aria-label="Credits, Premium Suite, Linen change" placeholder="–" defaultValue={""} />
                                <input className="field__input num" type="number" name="min_PRMS_LCH" min="5" max="240" step="1" aria-label="Standard minutes, Premium Suite, Linen change" placeholder="–" defaultValue={""} />
                              </div>
                            </td>
                          </tr>
                          <tr className="hks-prs hks-prs--copied">
                            <th scope="row" className="dt__td hks-rt" data-label="Room type" data-w="" data-t="">
                              <strong>{"PRMS"}</strong>
                              {" Premium Suite"}
                              <span className="fd-sub">{"1 room"}</span>
                              <span className="pill pill--ready hks-prs__ok">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"Copied from DLXS"}
                              </span>
                            </th>
                            <td className="dt__td hks-cell" data-label="DEP Departure clean credits · min" data-w2="">
                              <div className="hks-cell__in">
                                <input className="field__input num" type="number" name="cr_PRMS_DEP" min="0.1" max="10" step="0.1" aria-label="Credits, Premium Suite, Departure clean" placeholder="–" defaultValue={"2.0"} />
                                <input className="field__input num" type="number" name="min_PRMS_DEP" min="5" max="240" step="1" aria-label="Standard minutes, Premium Suite, Departure clean" placeholder="–" defaultValue={"60"} />
                              </div>
                            </td>
                            <td className="dt__td hks-cell" data-label="STY Stayover credits · min" data-w2="">
                              <div className="hks-cell__in">
                                <input className="field__input num" type="number" name="cr_PRMS_STY" min="0.1" max="10" step="0.1" aria-label="Credits, Premium Suite, Stayover" placeholder="–" defaultValue={"1.2"} />
                                <input className="field__input num" type="number" name="min_PRMS_STY" min="5" max="240" step="1" aria-label="Standard minutes, Premium Suite, Stayover" placeholder="–" defaultValue={"36"} />
                              </div>
                            </td>
                            <td className="dt__td hks-cell" data-label="TCH Touch-up credits · min" data-w2="">
                              <div className="hks-cell__in">
                                <input className="field__input num" type="number" name="cr_PRMS_TCH" min="0.1" max="10" step="0.1" aria-label="Credits, Premium Suite, Touch-up" placeholder="–" defaultValue={"0.4"} />
                                <input className="field__input num" type="number" name="min_PRMS_TCH" min="5" max="240" step="1" aria-label="Standard minutes, Premium Suite, Touch-up" placeholder="–" defaultValue={"12"} />
                              </div>
                            </td>
                            <td className="dt__td hks-cell" data-label="ARR Arrival check credits · min" data-w2="">
                              <div className="hks-cell__in">
                                <input className="field__input num" type="number" name="cr_PRMS_ARR" min="0.1" max="10" step="0.1" aria-label="Credits, Premium Suite, Arrival check" placeholder="–" defaultValue={"0.4"} />
                                <input className="field__input num" type="number" name="min_PRMS_ARR" min="5" max="240" step="1" aria-label="Standard minutes, Premium Suite, Arrival check" placeholder="–" defaultValue={"12"} />
                              </div>
                            </td>
                            <td className="dt__td hks-cell" data-label="DCL Deep clean credits · min" data-w2="">
                              <div className="hks-cell__in">
                                <input className="field__input num" type="number" name="cr_PRMS_DCL" min="0.1" max="10" step="0.1" aria-label="Credits, Premium Suite, Deep clean" placeholder="–" defaultValue={"3.0"} />
                                <input className="field__input num" type="number" name="min_PRMS_DCL" min="5" max="240" step="1" aria-label="Standard minutes, Premium Suite, Deep clean" placeholder="–" defaultValue={"90"} />
                              </div>
                            </td>
                            <td className="dt__td hks-cell" data-label="TDN Turndown credits · min" data-w2="">
                              <div className="hks-cell__in">
                                <input className="field__input num" type="number" name="cr_PRMS_TDN" min="0.1" max="10" step="0.1" aria-label="Credits, Premium Suite, Turndown" placeholder="–" defaultValue={"0.4"} />
                                <input className="field__input num" type="number" name="min_PRMS_TDN" min="5" max="240" step="1" aria-label="Standard minutes, Premium Suite, Turndown" placeholder="–" defaultValue={"12"} />
                              </div>
                            </td>
                            <td className="dt__td hks-cell" data-label="LCH Linen change credits · min" data-w2="" data-m="">
                              <div className="hks-cell__in">
                                <input className="field__input num" type="number" name="cr_PRMS_LCH" min="0.1" max="10" step="0.1" aria-label="Credits, Premium Suite, Linen change" placeholder="–" defaultValue={"0.4"} />
                                <input className="field__input num" type="number" name="min_PRMS_LCH" min="5" max="240" step="1" aria-label="Standard minutes, Premium Suite, Linen change" placeholder="–" defaultValue={"12"} />
                              </div>
                            </td>
                          </tr>
                          <tr className="fd-grouprow">
                            <th scope="colgroup" colSpan="8">{"Extra credits added to a task (all room types)"}</th>
                          </tr>
                          <tr>
                            <th scope="row" className="dt__td hks-rt" data-label="Room type" data-w="" data-t="">
                              <strong>{"VIP"}</strong>
                              {" Extra for VIP room"}
                              <span className="fd-sub">{"credits"}</span>
                            </th>
                            <td className="dt__td hks-cell hks-cell--one" data-label="DEP Departure clean credits · min" data-w2="">
                              <input className="field__input num" type="number" name="vip_DEP" min="0" max="5" step="0.1" aria-label="Extra credits for a VIP room, Departure clean" defaultValue={"0.5"} />
                            </td>
                            <td className="dt__td hks-cell hks-cell--one" data-label="STY Stayover credits · min" data-w2="">
                              <input className="field__input num" type="number" name="vip_STY" min="0" max="5" step="0.1" aria-label="Extra credits for a VIP room, Stayover" defaultValue={"0.3"} />
                            </td>
                            <td className="dt__td hks-cell hks-cell--one" data-label="TCH Touch-up credits · min" data-w2="">
                              <input className="field__input num" type="number" name="vip_TCH" min="0" max="5" step="0.1" aria-label="Extra credits for a VIP room, Touch-up" defaultValue={"0.0"} />
                            </td>
                            <td className="dt__td hks-cell hks-cell--one" data-label="ARR Arrival check credits · min" data-w2="">
                              <input className="field__input num" type="number" name="vip_ARR" min="0" max="5" step="0.1" aria-label="Extra credits for a VIP room, Arrival check" defaultValue={"0.2"} />
                            </td>
                            <td className="dt__td hks-cell hks-cell--one" data-label="DCL Deep clean credits · min" data-w2="">
                              <input className="field__input num" type="number" name="vip_DCL" min="0" max="5" step="0.1" aria-label="Extra credits for a VIP room, Deep clean" defaultValue={"0.0"} />
                            </td>
                            <td className="dt__td hks-cell hks-cell--one" data-label="TDN Turndown credits · min" data-w2="">
                              <input className="field__input num" type="number" name="vip_TDN" min="0" max="5" step="0.1" aria-label="Extra credits for a VIP room, Turndown" defaultValue={"0.1"} />
                            </td>
                            <td className="dt__td hks-cell hks-cell--one" data-label="LCH Linen change credits · min" data-w2="" data-m="">
                              <input className="field__input num" type="number" name="vip_LCH" min="0" max="5" step="0.1" aria-label="Extra credits for a VIP room, Linen change" defaultValue={"0.0"} />
                            </td>
                          </tr>
                          <tr>
                            <th scope="row" className="dt__td hks-rt" data-label="Room type" data-w="" data-t="">
                              <strong>{"EB"}</strong>
                              {" Extra bed / cot"}
                              <span className="fd-sub">{"credits"}</span>
                            </th>
                            <td className="dt__td hks-cell hks-cell--one" data-label="DEP Departure clean credits · min" data-w2="">
                              <input className="field__input num" type="number" name="bed_DEP" min="0" max="5" step="0.1" aria-label="Extra credits for an extra bed or cot, Departure clean" defaultValue={"0.2"} />
                            </td>
                            <td className="dt__td hks-cell hks-cell--one" data-label="STY Stayover credits · min" data-w2="">
                              <input className="field__input num" type="number" name="bed_STY" min="0" max="5" step="0.1" aria-label="Extra credits for an extra bed or cot, Stayover" defaultValue={"0.2"} />
                            </td>
                            <td className="dt__td hks-cell hks-cell--one" data-label="TCH Touch-up credits · min" data-w2="">
                              <input className="field__input num" type="number" name="bed_TCH" min="0" max="5" step="0.1" aria-label="Extra credits for an extra bed or cot, Touch-up" defaultValue={"0.0"} />
                            </td>
                            <td className="dt__td hks-cell hks-cell--one" data-label="ARR Arrival check credits · min" data-w2="">
                              <input className="field__input num" type="number" name="bed_ARR" min="0" max="5" step="0.1" aria-label="Extra credits for an extra bed or cot, Arrival check" defaultValue={"0.0"} />
                            </td>
                            <td className="dt__td hks-cell hks-cell--one" data-label="DCL Deep clean credits · min" data-w2="">
                              <input className="field__input num" type="number" name="bed_DCL" min="0" max="5" step="0.1" aria-label="Extra credits for an extra bed or cot, Deep clean" defaultValue={"0.0"} />
                            </td>
                            <td className="dt__td hks-cell hks-cell--one" data-label="TDN Turndown credits · min" data-w2="">
                              <input className="field__input num" type="number" name="bed_TDN" min="0" max="5" step="0.1" aria-label="Extra credits for an extra bed or cot, Turndown" defaultValue={"0.1"} />
                            </td>
                            <td className="dt__td hks-cell hks-cell--one" data-label="LCH Linen change credits · min" data-w2="" data-m="">
                              <input className="field__input num" type="number" name="bed_LCH" min="0" max="5" step="0.1" aria-label="Extra credits for an extra bed or cot, Linen change" defaultValue={"0.0"} />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <p className="hks-sum fd-muted">
                    <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#calculator" />
                    </svg>
                    <span>
                      {"Calculated: a full house of departures is "}
                      <strong>{"94.0"}</strong>
                      {" credits (48 Garden Deluxe + 40 Pool Deluxe × 1.0, 3 Deluxe Suites × 2.0). Premium Suite is not counted. With 7 attendants that is about 13.4 credits each (maximum 16.0, from Allocation rules)."}
                    </span>
                  </p>
                </section>
                <section className="fd-sec" id="sec-c" data-code="HKS-05-linen">
                  <h2 className="fd-sec__t">{"C · Linen change"}</h2>
                  <p className="fd-sec__d">{"How often linen and towels are changed for guests who stay several nights (GM approval: every 3rd night or on request)."}</p>
                  <div className="s-grid2">
                    <div className="field" data-fw="x">
                      <label className="field__label" htmlFor="hks05-linen">
                        {"Stayover linen change every (nights) "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input num" id="hks05-linen" type="number" name="linen_nights" required={true} min="1" max="7" defaultValue={"3"} />
                      <span className="field__hint">{"1–7 nights. On the linen-change night the LCH credits are added to the stayover."}</span>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="hks05-towel">
                        {"Towels change "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <div className="field__wrap">
                        <select className="field__input field__input--select" id="hks05-towel" name="towels" required={true} defaultValue={"On guest request (towel on floor)"}>
                          <option value="Daily">{"Daily"}</option>
                          <option value="On guest request (towel on floor)">{"On guest request (towel on floor)"}</option>
                          <option value="Every N nights">{"Every N nights"}</option>
                        </select>
                        <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </div>
                      <span className="field__hint">{"“Every N nights” uses the number of nights below."}</span>
                    </div>
                    <div className="field hks-towel-n" data-fw="x">
                      <label className="field__label" htmlFor="hks05-towel-n">{"Towels every (nights)"}</label>
                      <input className="field__input num" id="hks05-towel-n" type="number" name="towel_nights" min="1" max="7" defaultValue={"2"} />
                      <span className="field__hint">{"Only used when towels change “Every N nights”"}</span>
                    </div>
                    <div className="field field--toggle">
                      <label className="sw" htmlFor="hks05-req">
                        <input id="hks05-req" type="checkbox" role="switch" name="change_on_request" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Change on request"}
                      </label>
                      <span className="field__hint">{"The guest can ask for fresh linen on any day"}</span>
                    </div>
                  </div>
                </section>
                <div className="fd-formfoot">
                  <span className="fd-spacer">{"Last saved Wed 21 Oct 2026, 16:40 (credits for Deluxe Suite approved by Meera Prem). Credit changes wait for approval (DA-03); every change is written to the settings audit log (HKS-X02)."}</span>
                  <a className="btn" href="#cancelled">{"Cancel"}</a>
                  <button className="btn btn--primary" type="submit">{"Save matrix"}</button>
                </div>
              </form>
              <section className="fd-sec hks-preview" id="preview" data-code="HKS-05-preview" aria-labelledby="hks05-prev-t">
                <h2 className="fd-sec__t" id="hks05-prev-t">{"Preview workload – Friday 23 Oct 2026"}</h2>
                <p className="fd-sec__d">
                  {"Credits for tomorrow’s forecast with the values in the matrix. Calculated from the reservation forecast (sample figures); nothing is saved. "}
                  <a className="fd-link" href="#main">{"Close preview ×"}</a>
                </p>
                <div className="pgw">
                  <div className="s-scroll">
                    <table className="srt dt__table dt--hug" data-code="HKS-05-preview-table" style={{"--srt-cols": "auto auto auto auto"}} data-mc="">
                      <caption className="sr-only">{"Workload preview"}</caption>
                      <thead>
                        <tr>
                          <th scope="col">
                            <input className="srt-i srt-a0" type="radio" name="sthks051" id="sthks051-0a" aria-label="Sort by Task, lowest or A first" />
                            <input className="srt-i srt-d0" type="radio" name="sthks051" id="sthks051-0d" aria-label="Sort by Task, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="sthks051-0a">{"Task"}</label>
                            <label className="srt-l srt-l--d" htmlFor="sthks051-0d" aria-hidden="true">{"Task"}</label>
                          </th>
                          <th scope="col">
                            <input className="srt-i srt-a1" type="radio" name="sthks051" id="sthks051-1a" aria-label="Sort by How it is calculated, lowest or A first" />
                            <input className="srt-i srt-d1" type="radio" name="sthks051" id="sthks051-1d" aria-label="Sort by How it is calculated, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="sthks051-1a">{"How it is calculated"}</label>
                            <label className="srt-l srt-l--d" htmlFor="sthks051-1d" aria-hidden="true">{"How it is calculated"}</label>
                          </th>
                          <th scope="col">
                            <input className="srt-i srt-a2" type="radio" name="sthks051" id="sthks051-2a" aria-label="Sort by Shift, lowest or A first" />
                            <input className="srt-i srt-d2" type="radio" name="sthks051" id="sthks051-2d" aria-label="Sort by Shift, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="sthks051-2a">{"Shift"}</label>
                            <label className="srt-l srt-l--d" htmlFor="sthks051-2d" aria-hidden="true">{"Shift"}</label>
                          </th>
                          <th scope="col" className="dt__th--right">
                            <input className="srt-i srt-a3" type="radio" name="sthks051" id="sthks051-3a" aria-label="Sort by Credits, lowest or A first" />
                            <input className="srt-i srt-d3" type="radio" name="sthks051" id="sthks051-3d" aria-label="Sort by Credits, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="sthks051-3a">{"Credits"}</label>
                            <label className="srt-l srt-l--d" htmlFor="sthks051-3d" aria-hidden="true">{"Credits"}</label>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style={{"--k0": "3", "--k1": "2", "--k2": "2", "--k3": "4"}}>
                          <td className="dt__td nw" data-label="Task" data-w2="" data-t="">
                            <strong>{"DEP"}</strong>
                            {" · Departure clean"}
                          </td>
                          <td className="dt__td" data-label="How it is calculated">{"9 rooms: 8 standard × 1.0 + 1 Deluxe Suite × 2.0, + 2 VIP × 0.5"}</td>
                          <td className="dt__td nw" data-label="Shift">{"Morning"}</td>
                          <td className="dt__td dt__td--right num nw" data-label="Credits" data-w2="">{"11.0"}</td>
                        </tr>
                        <tr style={{"--k0": "5", "--k1": "5", "--k2": "2", "--k3": "5"}}>
                          <td className="dt__td nw" data-label="Task" data-w2="" data-t="">
                            <strong>{"STY"}</strong>
                            {" · Stayover"}
                          </td>
                          <td className="dt__td" data-label="How it is calculated">{"44 rooms: 42 standard × 0.6 + 2 Deluxe Suites × 1.2, + 3 VIP × 0.3"}</td>
                          <td className="dt__td nw" data-label="Shift">{"Morning"}</td>
                          <td className="dt__td dt__td--right num nw" data-label="Credits" data-w2="">{"28.5"}</td>
                        </tr>
                        <tr style={{"--k0": "1", "--k1": "3", "--k2": "2", "--k3": "1"}}>
                          <td className="dt__td nw" data-label="Task" data-w2="" data-t="">
                            <strong>{"ARR"}</strong>
                            {" · Arrival check"}
                          </td>
                          <td className="dt__td" data-label="How it is calculated">{"14 rooms: 13 standard × 0.2 + 1 Deluxe Suite × 0.4"}</td>
                          <td className="dt__td nw" data-label="Shift">{"Morning"}</td>
                          <td className="dt__td dt__td--right num nw" data-label="Credits" data-w2="">{"3.0"}</td>
                        </tr>
                        <tr style={{"--k0": "2", "--k1": "1", "--k2": "2", "--k3": "2"}}>
                          <td className="dt__td nw" data-label="Task" data-w2="" data-t="">
                            <strong>{"DCL"}</strong>
                            {" · Deep clean"}
                          </td>
                          <td className="dt__td" data-label="How it is calculated" data-w2="">{"3 standard rooms × 1.5"}</td>
                          <td className="dt__td nw" data-label="Shift">{"Morning"}</td>
                          <td className="dt__td dt__td--right num nw" data-label="Credits" data-w2="">{"4.5"}</td>
                        </tr>
                        <tr style={{"--k0": "4", "--k1": "3", "--k2": "2", "--k3": "1"}}>
                          <td className="dt__td nw" data-label="Task" data-w2="" data-t="">
                            <strong>{"LCH"}</strong>
                            {" · Linen change"}
                          </td>
                          <td className="dt__td" data-label="How it is calculated">{"14 stayovers on their 3rd night: 13 standard × 0.2 + 1 suite × 0.4"}</td>
                          <td className="dt__td nw" data-label="Shift">{"Morning"}</td>
                          <td className="dt__td dt__td--right num nw" data-label="Credits" data-w2="">{"3.0"}</td>
                        </tr>
                        <tr style={{"--k0": "6", "--k1": "4", "--k2": "1", "--k3": "3"}}>
                          <td className="dt__td nw" data-label="Task" data-w2="" data-t="">
                            <strong>{"TDN"}</strong>
                            {" · Turndown"}
                          </td>
                          <td className="dt__td" data-label="How it is calculated">{"31 rooms: 28 standard × 0.2 + 3 Deluxe Suites × 0.4"}</td>
                          <td className="dt__td nw" data-label="Shift">{"Evening"}</td>
                          <td className="dt__td dt__td--right num nw" data-label="Credits" data-w2="">{"6.8"}</td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <th scope="row" className="dt__td" colSpan="3">{"Morning shift total (calculated)"}</th>
                          <td className="dt__td dt__td--right num nw" data-label="Credits" data-w2="" data-t="">
                            <strong>{"50.0"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row" className="dt__td" colSpan="3">{"Evening shift total – turndown (calculated)"}</th>
                          <td className="dt__td dt__td--right num nw" data-label="Credits" data-w2="" data-t="">
                            <strong>{"6.8"}</strong>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
                <p className="hks-sum fd-muted">
                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#calculator" />
                  </svg>
                  <span>{"50.0 credits for 7 attendants on the morning shift = about 7.1 each, well under the maximum of 16.0. Premium Suite room 517 is not included (no credits)."}</span>
                </p>
              </section>
              <div className="modal modal--lg" id="hks-p04-new" data-code="HKS-P04" role="dialog" aria-modal="true" aria-labelledby="hks-p04-new-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-05-task-types-and-credits/#added" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p04-new-t">{"Add task type"}</h2>
                      <p className="modal__desc">{"A task type is a kind of cleaning job. The trigger decides when the allocation creates it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="hks-p04-new-code">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p04-new-code" type="text" name="code" required={true} minLength="2" maxLength="4" pattern={"[A-Za-z0-9]{2,4}"} defaultValue={""} />
                        <span className="field__hint">{"Unique, 2–4 characters"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p04-new-name">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p04-new-name" type="text" name="name" required={true} maxLength="40" defaultValue={""} />
                        <span className="field__hint">{"Shown on task sheets and the phone"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p04-new-trig">
                          {"Trigger "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p04-new-trig" name="trigger" required={true} defaultValue={""}>
                            <option value="">{"Choose a trigger"}</option>
                            <option value="Departure">{"Departure"}</option>
                            <option value="In-house">{"In-house"}</option>
                            <option value="Vacant pickup">{"Vacant pickup"}</option>
                            <option value="Arrival today">{"Arrival today"}</option>
                            <option value="Deep-clean due">{"Deep-clean due"}</option>
                            <option value="Evening eligible">{"Evening eligible"}</option>
                            <option value="Manual only">{"Manual only"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"When the task is created. “Manual only” tasks are added by a supervisor."}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="hks-p04-new-prio">
                          {"Priority "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input num" id="hks-p04-new-prio" type="number" name="priority" required={true} min="1" max="99" defaultValue={"8"} />
                        <span className="field__hint">{"1 = first in the attendant’s list"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="hks-p04-new-steps">{"Checklist (cleaning steps)"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p04-new-steps" name="steps" defaultValue={""}>
                            <option value="">{"None"}</option>
                            <option value="Departure clean steps">{"Departure clean steps"}</option>
                            <option value="Arrival check steps">{"Arrival check steps"}</option>
                            <option value="Touch-up steps">{"Touch-up steps"}</option>
                            <option value="Stayover steps">{"Stayover steps"}</option>
                            <option value="Linen change steps">{"Linen change steps"}</option>
                            <option value="Deep clean steps">{"Deep clean steps"}</option>
                            <option value="Turndown steps">{"Turndown steps"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"The steps the attendant sees on the phone – from Attendant Cleaning Steps (HKS-13)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p04-new-insp">{"Inspection checklist"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p04-new-insp" name="inspection" defaultValue={""}>
                            <option value="">{"None – by inspection rule"}</option>
                            <option value="Standard room departure">{"Standard room departure"}</option>
                            <option value="Standard room stayover">{"Standard room stayover"}</option>
                            <option value="Suite departure">{"Suite departure"}</option>
                            <option value="VIP check (VIP rooms)">{"VIP check (VIP rooms)"}</option>
                            <option value="Public area inspection">{"Public area inspection"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From Inspection Checklists (HKS-08)"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="hks-p04-new-act">
                          <input id="hks-p04-new-act" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Inactive task types are not created by the allocation"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer fd-muted">{"Written to the settings audit log (HKS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="hks-p04-dep" data-code="HKS-P04" role="dialog" aria-modal="true" aria-labelledby="hks-p04-dep-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-05-task-types-and-credits/#saved-dep" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p04-dep-t">{"Task type: DEP · Departure clean"}</h2>
                      <p className="modal__desc">{"A task type is a kind of cleaning job. The trigger decides when the allocation creates it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="hks-p04-dep-code">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p04-dep-code" type="text" name="code" required={true} minLength="2" maxLength="4" pattern={"[A-Za-z0-9]{2,4}"} defaultValue={"DEP"} />
                        <span className="field__hint">{"Unique, 2–4 characters"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p04-dep-name">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p04-dep-name" type="text" name="name" required={true} maxLength="40" defaultValue={"Departure clean"} />
                        <span className="field__hint">{"Shown on task sheets and the phone"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="hks-p04-dep-trig">
                          {"Trigger "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p04-dep-trig" name="trigger" required={true} defaultValue={"Departure"}>
                            <option value="Departure">{"Departure"}</option>
                            <option value="In-house">{"In-house"}</option>
                            <option value="Vacant pickup">{"Vacant pickup"}</option>
                            <option value="Arrival today">{"Arrival today"}</option>
                            <option value="Deep-clean due">{"Deep-clean due"}</option>
                            <option value="Evening eligible">{"Evening eligible"}</option>
                            <option value="Manual only">{"Manual only"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"When the task is created. “Manual only” tasks are added by a supervisor."}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="hks-p04-dep-prio">
                          {"Priority "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input num" id="hks-p04-dep-prio" type="number" name="priority" required={true} min="1" max="99" defaultValue={"1"} />
                        <span className="field__hint">{"1 = first in the attendant’s list"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p04-dep-steps">{"Checklist (cleaning steps)"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p04-dep-steps" name="steps" defaultValue={"Departure clean steps"}>
                            <option value="">{"None"}</option>
                            <option value="Departure clean steps">{"Departure clean steps"}</option>
                            <option value="Arrival check steps">{"Arrival check steps"}</option>
                            <option value="Touch-up steps">{"Touch-up steps"}</option>
                            <option value="Stayover steps">{"Stayover steps"}</option>
                            <option value="Linen change steps">{"Linen change steps"}</option>
                            <option value="Deep clean steps">{"Deep clean steps"}</option>
                            <option value="Turndown steps">{"Turndown steps"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"The steps the attendant sees on the phone – from Attendant Cleaning Steps (HKS-13)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p04-dep-insp">{"Inspection checklist"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p04-dep-insp" name="inspection" defaultValue={"Standard room departure"}>
                            <option value="">{"None – by inspection rule"}</option>
                            <option value="Standard room departure">{"Standard room departure"}</option>
                            <option value="Standard room stayover">{"Standard room stayover"}</option>
                            <option value="Suite departure">{"Suite departure"}</option>
                            <option value="VIP check (VIP rooms)">{"VIP check (VIP rooms)"}</option>
                            <option value="Public area inspection">{"Public area inspection"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From Inspection Checklists (HKS-08)"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="hks-p04-dep-act">
                          <input id="hks-p04-dep-act" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Inactive task types are not created by the allocation"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer fd-muted">{"Written to the settings audit log (HKS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="hks-p04-arr" data-code="HKS-P04" role="dialog" aria-modal="true" aria-labelledby="hks-p04-arr-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-05-task-types-and-credits/#saved-arr" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p04-arr-t">{"Task type: ARR · Arrival check"}</h2>
                      <p className="modal__desc">{"A task type is a kind of cleaning job. The trigger decides when the allocation creates it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="hks-p04-arr-code">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p04-arr-code" type="text" name="code" required={true} minLength="2" maxLength="4" pattern={"[A-Za-z0-9]{2,4}"} defaultValue={"ARR"} />
                        <span className="field__hint">{"Unique, 2–4 characters"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p04-arr-name">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p04-arr-name" type="text" name="name" required={true} maxLength="40" defaultValue={"Arrival check"} />
                        <span className="field__hint">{"Shown on task sheets and the phone"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="hks-p04-arr-trig">
                          {"Trigger "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p04-arr-trig" name="trigger" required={true} defaultValue={"Arrival today"}>
                            <option value="Departure">{"Departure"}</option>
                            <option value="In-house">{"In-house"}</option>
                            <option value="Vacant pickup">{"Vacant pickup"}</option>
                            <option value="Arrival today">{"Arrival today"}</option>
                            <option value="Deep-clean due">{"Deep-clean due"}</option>
                            <option value="Evening eligible">{"Evening eligible"}</option>
                            <option value="Manual only">{"Manual only"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"When the task is created. “Manual only” tasks are added by a supervisor."}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="hks-p04-arr-prio">
                          {"Priority "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input num" id="hks-p04-arr-prio" type="number" name="priority" required={true} min="1" max="99" defaultValue={"2"} />
                        <span className="field__hint">{"1 = first in the attendant’s list"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p04-arr-steps">{"Checklist (cleaning steps)"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p04-arr-steps" name="steps" defaultValue={"Arrival check steps"}>
                            <option value="">{"None"}</option>
                            <option value="Departure clean steps">{"Departure clean steps"}</option>
                            <option value="Arrival check steps">{"Arrival check steps"}</option>
                            <option value="Touch-up steps">{"Touch-up steps"}</option>
                            <option value="Stayover steps">{"Stayover steps"}</option>
                            <option value="Linen change steps">{"Linen change steps"}</option>
                            <option value="Deep clean steps">{"Deep clean steps"}</option>
                            <option value="Turndown steps">{"Turndown steps"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"The steps the attendant sees on the phone – from Attendant Cleaning Steps (HKS-13)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p04-arr-insp">{"Inspection checklist"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p04-arr-insp" name="inspection" defaultValue={"VIP check (VIP rooms)"}>
                            <option value="">{"None – by inspection rule"}</option>
                            <option value="Standard room departure">{"Standard room departure"}</option>
                            <option value="Standard room stayover">{"Standard room stayover"}</option>
                            <option value="Suite departure">{"Suite departure"}</option>
                            <option value="VIP check (VIP rooms)">{"VIP check (VIP rooms)"}</option>
                            <option value="Public area inspection">{"Public area inspection"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From Inspection Checklists (HKS-08)"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="hks-p04-arr-act">
                          <input id="hks-p04-arr-act" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Inactive task types are not created by the allocation"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer fd-muted">{"Written to the settings audit log (HKS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="hks-p04-tch" data-code="HKS-P04" role="dialog" aria-modal="true" aria-labelledby="hks-p04-tch-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-05-task-types-and-credits/#saved-tch" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p04-tch-t">{"Task type: TCH · Touch-up"}</h2>
                      <p className="modal__desc">{"A task type is a kind of cleaning job. The trigger decides when the allocation creates it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="hks-p04-tch-code">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p04-tch-code" type="text" name="code" required={true} minLength="2" maxLength="4" pattern={"[A-Za-z0-9]{2,4}"} defaultValue={"TCH"} />
                        <span className="field__hint">{"Unique, 2–4 characters"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p04-tch-name">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p04-tch-name" type="text" name="name" required={true} maxLength="40" defaultValue={"Touch-up"} />
                        <span className="field__hint">{"Shown on task sheets and the phone"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="hks-p04-tch-trig">
                          {"Trigger "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p04-tch-trig" name="trigger" required={true} defaultValue={"Vacant pickup"}>
                            <option value="Departure">{"Departure"}</option>
                            <option value="In-house">{"In-house"}</option>
                            <option value="Vacant pickup">{"Vacant pickup"}</option>
                            <option value="Arrival today">{"Arrival today"}</option>
                            <option value="Deep-clean due">{"Deep-clean due"}</option>
                            <option value="Evening eligible">{"Evening eligible"}</option>
                            <option value="Manual only">{"Manual only"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"When the task is created. “Manual only” tasks are added by a supervisor."}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="hks-p04-tch-prio">
                          {"Priority "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input num" id="hks-p04-tch-prio" type="number" name="priority" required={true} min="1" max="99" defaultValue={"3"} />
                        <span className="field__hint">{"1 = first in the attendant’s list"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="hks-p04-tch-steps">{"Checklist (cleaning steps)"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p04-tch-steps" name="steps" defaultValue={"Touch-up steps"}>
                            <option value="">{"None"}</option>
                            <option value="Departure clean steps">{"Departure clean steps"}</option>
                            <option value="Arrival check steps">{"Arrival check steps"}</option>
                            <option value="Touch-up steps">{"Touch-up steps"}</option>
                            <option value="Stayover steps">{"Stayover steps"}</option>
                            <option value="Linen change steps">{"Linen change steps"}</option>
                            <option value="Deep clean steps">{"Deep clean steps"}</option>
                            <option value="Turndown steps">{"Turndown steps"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"The steps the attendant sees on the phone – from Attendant Cleaning Steps (HKS-13)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p04-tch-insp">{"Inspection checklist"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p04-tch-insp" name="inspection" defaultValue={""}>
                            <option value="">{"None – by inspection rule"}</option>
                            <option value="Standard room departure">{"Standard room departure"}</option>
                            <option value="Standard room stayover">{"Standard room stayover"}</option>
                            <option value="Suite departure">{"Suite departure"}</option>
                            <option value="VIP check (VIP rooms)">{"VIP check (VIP rooms)"}</option>
                            <option value="Public area inspection">{"Public area inspection"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From Inspection Checklists (HKS-08)"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="hks-p04-tch-act">
                          <input id="hks-p04-tch-act" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Inactive task types are not created by the allocation"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer fd-muted">{"Written to the settings audit log (HKS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="hks-p04-sty" data-code="HKS-P04" role="dialog" aria-modal="true" aria-labelledby="hks-p04-sty-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-05-task-types-and-credits/#saved-sty" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p04-sty-t">{"Task type: STY · Stayover"}</h2>
                      <p className="modal__desc">{"A task type is a kind of cleaning job. The trigger decides when the allocation creates it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="hks-p04-sty-code">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p04-sty-code" type="text" name="code" required={true} minLength="2" maxLength="4" pattern={"[A-Za-z0-9]{2,4}"} defaultValue={"STY"} />
                        <span className="field__hint">{"Unique, 2–4 characters"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p04-sty-name">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p04-sty-name" type="text" name="name" required={true} maxLength="40" defaultValue={"Stayover"} />
                        <span className="field__hint">{"Shown on task sheets and the phone"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="hks-p04-sty-trig">
                          {"Trigger "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p04-sty-trig" name="trigger" required={true} defaultValue={"In-house"}>
                            <option value="Departure">{"Departure"}</option>
                            <option value="In-house">{"In-house"}</option>
                            <option value="Vacant pickup">{"Vacant pickup"}</option>
                            <option value="Arrival today">{"Arrival today"}</option>
                            <option value="Deep-clean due">{"Deep-clean due"}</option>
                            <option value="Evening eligible">{"Evening eligible"}</option>
                            <option value="Manual only">{"Manual only"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"When the task is created. “Manual only” tasks are added by a supervisor."}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="hks-p04-sty-prio">
                          {"Priority "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input num" id="hks-p04-sty-prio" type="number" name="priority" required={true} min="1" max="99" defaultValue={"4"} />
                        <span className="field__hint">{"1 = first in the attendant’s list"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="hks-p04-sty-steps">{"Checklist (cleaning steps)"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p04-sty-steps" name="steps" defaultValue={"Stayover steps"}>
                            <option value="">{"None"}</option>
                            <option value="Departure clean steps">{"Departure clean steps"}</option>
                            <option value="Arrival check steps">{"Arrival check steps"}</option>
                            <option value="Touch-up steps">{"Touch-up steps"}</option>
                            <option value="Stayover steps">{"Stayover steps"}</option>
                            <option value="Linen change steps">{"Linen change steps"}</option>
                            <option value="Deep clean steps">{"Deep clean steps"}</option>
                            <option value="Turndown steps">{"Turndown steps"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"The steps the attendant sees on the phone – from Attendant Cleaning Steps (HKS-13)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p04-sty-insp">{"Inspection checklist"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p04-sty-insp" name="inspection" defaultValue={"Standard room stayover"}>
                            <option value="">{"None – by inspection rule"}</option>
                            <option value="Standard room departure">{"Standard room departure"}</option>
                            <option value="Standard room stayover">{"Standard room stayover"}</option>
                            <option value="Suite departure">{"Suite departure"}</option>
                            <option value="VIP check (VIP rooms)">{"VIP check (VIP rooms)"}</option>
                            <option value="Public area inspection">{"Public area inspection"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From Inspection Checklists (HKS-08)"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="hks-p04-sty-act">
                          <input id="hks-p04-sty-act" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Inactive task types are not created by the allocation"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer fd-muted">{"Written to the settings audit log (HKS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="hks-p04-lch" data-code="HKS-P04" role="dialog" aria-modal="true" aria-labelledby="hks-p04-lch-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-05-task-types-and-credits/#saved-lch" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p04-lch-t">{"Task type: LCH · Linen change"}</h2>
                      <p className="modal__desc">{"A task type is a kind of cleaning job. The trigger decides when the allocation creates it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="hks-p04-lch-code">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p04-lch-code" type="text" name="code" required={true} minLength="2" maxLength="4" pattern={"[A-Za-z0-9]{2,4}"} defaultValue={"LCH"} />
                        <span className="field__hint">{"Unique, 2–4 characters"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p04-lch-name">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p04-lch-name" type="text" name="name" required={true} maxLength="40" defaultValue={"Linen change"} />
                        <span className="field__hint">{"Shown on task sheets and the phone"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="hks-p04-lch-trig">
                          {"Trigger "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p04-lch-trig" name="trigger" required={true} defaultValue={"In-house"}>
                            <option value="Departure">{"Departure"}</option>
                            <option value="In-house">{"In-house"}</option>
                            <option value="Vacant pickup">{"Vacant pickup"}</option>
                            <option value="Arrival today">{"Arrival today"}</option>
                            <option value="Deep-clean due">{"Deep-clean due"}</option>
                            <option value="Evening eligible">{"Evening eligible"}</option>
                            <option value="Manual only">{"Manual only"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"When the task is created. “Manual only” tasks are added by a supervisor."}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="hks-p04-lch-prio">
                          {"Priority "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input num" id="hks-p04-lch-prio" type="number" name="priority" required={true} min="1" max="99" defaultValue={"5"} />
                        <span className="field__hint">{"1 = first in the attendant’s list"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p04-lch-steps">{"Checklist (cleaning steps)"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p04-lch-steps" name="steps" defaultValue={"Linen change steps"}>
                            <option value="">{"None"}</option>
                            <option value="Departure clean steps">{"Departure clean steps"}</option>
                            <option value="Arrival check steps">{"Arrival check steps"}</option>
                            <option value="Touch-up steps">{"Touch-up steps"}</option>
                            <option value="Stayover steps">{"Stayover steps"}</option>
                            <option value="Linen change steps">{"Linen change steps"}</option>
                            <option value="Deep clean steps">{"Deep clean steps"}</option>
                            <option value="Turndown steps">{"Turndown steps"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"The steps the attendant sees on the phone – from Attendant Cleaning Steps (HKS-13)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p04-lch-insp">{"Inspection checklist"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p04-lch-insp" name="inspection" defaultValue={""}>
                            <option value="">{"None – by inspection rule"}</option>
                            <option value="Standard room departure">{"Standard room departure"}</option>
                            <option value="Standard room stayover">{"Standard room stayover"}</option>
                            <option value="Suite departure">{"Suite departure"}</option>
                            <option value="VIP check (VIP rooms)">{"VIP check (VIP rooms)"}</option>
                            <option value="Public area inspection">{"Public area inspection"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From Inspection Checklists (HKS-08)"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="hks-p04-lch-act">
                          <input id="hks-p04-lch-act" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Inactive task types are not created by the allocation"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer fd-muted">{"Written to the settings audit log (HKS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="hks-p04-dcl" data-code="HKS-P04" role="dialog" aria-modal="true" aria-labelledby="hks-p04-dcl-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-05-task-types-and-credits/#saved-dcl" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p04-dcl-t">{"Task type: DCL · Deep clean"}</h2>
                      <p className="modal__desc">{"A task type is a kind of cleaning job. The trigger decides when the allocation creates it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="hks-p04-dcl-code">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p04-dcl-code" type="text" name="code" required={true} minLength="2" maxLength="4" pattern={"[A-Za-z0-9]{2,4}"} defaultValue={"DCL"} />
                        <span className="field__hint">{"Unique, 2–4 characters"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p04-dcl-name">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p04-dcl-name" type="text" name="name" required={true} maxLength="40" defaultValue={"Deep clean"} />
                        <span className="field__hint">{"Shown on task sheets and the phone"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="hks-p04-dcl-trig">
                          {"Trigger "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p04-dcl-trig" name="trigger" required={true} defaultValue={"Deep-clean due"}>
                            <option value="Departure">{"Departure"}</option>
                            <option value="In-house">{"In-house"}</option>
                            <option value="Vacant pickup">{"Vacant pickup"}</option>
                            <option value="Arrival today">{"Arrival today"}</option>
                            <option value="Deep-clean due">{"Deep-clean due"}</option>
                            <option value="Evening eligible">{"Evening eligible"}</option>
                            <option value="Manual only">{"Manual only"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"When the task is created. “Manual only” tasks are added by a supervisor."}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="hks-p04-dcl-prio">
                          {"Priority "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input num" id="hks-p04-dcl-prio" type="number" name="priority" required={true} min="1" max="99" defaultValue={"6"} />
                        <span className="field__hint">{"1 = first in the attendant’s list"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p04-dcl-steps">{"Checklist (cleaning steps)"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p04-dcl-steps" name="steps" defaultValue={"Deep clean steps"}>
                            <option value="">{"None"}</option>
                            <option value="Departure clean steps">{"Departure clean steps"}</option>
                            <option value="Arrival check steps">{"Arrival check steps"}</option>
                            <option value="Touch-up steps">{"Touch-up steps"}</option>
                            <option value="Stayover steps">{"Stayover steps"}</option>
                            <option value="Linen change steps">{"Linen change steps"}</option>
                            <option value="Deep clean steps">{"Deep clean steps"}</option>
                            <option value="Turndown steps">{"Turndown steps"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"The steps the attendant sees on the phone – from Attendant Cleaning Steps (HKS-13)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p04-dcl-insp">{"Inspection checklist"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p04-dcl-insp" name="inspection" defaultValue={""}>
                            <option value="">{"None – by inspection rule"}</option>
                            <option value="Standard room departure">{"Standard room departure"}</option>
                            <option value="Standard room stayover">{"Standard room stayover"}</option>
                            <option value="Suite departure">{"Suite departure"}</option>
                            <option value="VIP check (VIP rooms)">{"VIP check (VIP rooms)"}</option>
                            <option value="Public area inspection">{"Public area inspection"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From Inspection Checklists (HKS-08)"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="hks-p04-dcl-act">
                          <input id="hks-p04-dcl-act" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Inactive task types are not created by the allocation"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer fd-muted">{"Written to the settings audit log (HKS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="hks-p04-tdn" data-code="HKS-P04" role="dialog" aria-modal="true" aria-labelledby="hks-p04-tdn-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-05-task-types-and-credits/#saved-tdn" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p04-tdn-t">{"Task type: TDN · Turndown"}</h2>
                      <p className="modal__desc">{"A task type is a kind of cleaning job. The trigger decides when the allocation creates it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="hks-p04-tdn-code">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p04-tdn-code" type="text" name="code" required={true} minLength="2" maxLength="4" pattern={"[A-Za-z0-9]{2,4}"} defaultValue={"TDN"} />
                        <span className="field__hint">{"Unique, 2–4 characters"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p04-tdn-name">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p04-tdn-name" type="text" name="name" required={true} maxLength="40" defaultValue={"Turndown"} />
                        <span className="field__hint">{"Shown on task sheets and the phone"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p04-tdn-trig">
                          {"Trigger "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p04-tdn-trig" name="trigger" required={true} defaultValue={"Evening eligible"}>
                            <option value="Departure">{"Departure"}</option>
                            <option value="In-house">{"In-house"}</option>
                            <option value="Vacant pickup">{"Vacant pickup"}</option>
                            <option value="Arrival today">{"Arrival today"}</option>
                            <option value="Deep-clean due">{"Deep-clean due"}</option>
                            <option value="Evening eligible">{"Evening eligible"}</option>
                            <option value="Manual only">{"Manual only"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"When the task is created. “Manual only” tasks are added by a supervisor."}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="hks-p04-tdn-prio">
                          {"Priority "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input num" id="hks-p04-tdn-prio" type="number" name="priority" required={true} min="1" max="99" defaultValue={"7"} />
                        <span className="field__hint">{"1 = first in the attendant’s list"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="hks-p04-tdn-steps">{"Checklist (cleaning steps)"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p04-tdn-steps" name="steps" defaultValue={"Turndown steps"}>
                            <option value="">{"None"}</option>
                            <option value="Departure clean steps">{"Departure clean steps"}</option>
                            <option value="Arrival check steps">{"Arrival check steps"}</option>
                            <option value="Touch-up steps">{"Touch-up steps"}</option>
                            <option value="Stayover steps">{"Stayover steps"}</option>
                            <option value="Linen change steps">{"Linen change steps"}</option>
                            <option value="Deep clean steps">{"Deep clean steps"}</option>
                            <option value="Turndown steps">{"Turndown steps"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"The steps the attendant sees on the phone – from Attendant Cleaning Steps (HKS-13)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p04-tdn-insp">{"Inspection checklist"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p04-tdn-insp" name="inspection" defaultValue={""}>
                            <option value="">{"None – by inspection rule"}</option>
                            <option value="Standard room departure">{"Standard room departure"}</option>
                            <option value="Standard room stayover">{"Standard room stayover"}</option>
                            <option value="Suite departure">{"Suite departure"}</option>
                            <option value="VIP check (VIP rooms)">{"VIP check (VIP rooms)"}</option>
                            <option value="Public area inspection">{"Public area inspection"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From Inspection Checklists (HKS-08)"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="hks-p04-tdn-act">
                          <input id="hks-p04-tdn-act" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Inactive task types are not created by the allocation"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer fd-muted">{"Written to the settings audit log (HKS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="hks-copy" data-code="HKS-05-copy" role="dialog" aria-modal="true" aria-labelledby="hks-copy-t">
                <a className="modal__backdrop" href="#main" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-05-task-types-and-credits/#copied" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-copy-t">{"Copy room type"}</h2>
                      <p className="modal__desc">{"Copies every credit and minute of one room type to another. You can change the values afterwards."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="field">
                      <label className="field__label" htmlFor="hks-copy-from">
                        {"Copy from "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <div className="field__wrap">
                        <select className="field__input field__input--select" id="hks-copy-from" name="from" required={true} defaultValue={"DLXS · Deluxe Suite"}>
                          <option value="GDLX · Garden Deluxe Room">{"GDLX · Garden Deluxe Room"}</option>
                          <option value="PDLX · Pool Deluxe Room">{"PDLX · Pool Deluxe Room"}</option>
                          <option value="DLXS · Deluxe Suite">{"DLXS · Deluxe Suite"}</option>
                        </select>
                        <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="hks-copy-to">
                        {"Copy to "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <div className="field__wrap">
                        <select className="field__input field__input--select" id="hks-copy-to" name="to" required={true} defaultValue={"PRMS · Premium Suite"}>
                          <option value="GDLX · Garden Deluxe Room">{"GDLX · Garden Deluxe Room"}</option>
                          <option value="PDLX · Pool Deluxe Room">{"PDLX · Pool Deluxe Room"}</option>
                          <option value="DLXS · Deluxe Suite">{"DLXS · Deluxe Suite"}</option>
                          <option value="PRMS · Premium Suite">{"PRMS · Premium Suite"}</option>
                        </select>
                        <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </div>
                      <span className="field__hint">{"Existing values of the target are replaced."}</span>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Copy"}</button>
                  </div>
                </form>
              </div>
              <div className="fd-toast" id="t-dep" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Task type DEP saved"}
                  <small>{"Departure clean · trigger Departure · priority 1. Logged in the settings audit (HKS-X02). The allocation uses the new order from the next business date."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-arr" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Task type ARR saved"}
                  <small>{"Arrival check · trigger Arrival today · priority 2. Logged in the settings audit (HKS-X02). The allocation uses the new order from the next business date."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-tch" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Task type TCH saved"}
                  <small>{"Touch-up · trigger Vacant pickup · priority 3. Logged in the settings audit (HKS-X02). The allocation uses the new order from the next business date."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-sty" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Task type STY saved"}
                  <small>{"Stayover · trigger In-house · priority 4. Logged in the settings audit (HKS-X02). The allocation uses the new order from the next business date."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-lch" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Task type LCH saved"}
                  <small>{"Linen change · trigger In-house · priority 5. Logged in the settings audit (HKS-X02). The allocation uses the new order from the next business date."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-dcl" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Task type DCL saved"}
                  <small>{"Deep clean · trigger Deep-clean due · priority 6. Logged in the settings audit (HKS-X02). The allocation uses the new order from the next business date."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-tdn" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Task type TDN saved"}
                  <small>{"Turndown · trigger Evening eligible · priority 7. Logged in the settings audit (HKS-X02). The allocation uses the new order from the next business date."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="added" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Task type added"}
                  <small>{"PICK · Pickup check · trigger Manual only · priority 8. Logged in the settings audit (HKS-X02)."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="pending" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Saved – credit changes sent for approval"}
                  <small>{"Premium Suite credits (7 tasks) wait for Meera Prem (DA-03). Linen-change settings are active now. Logged in the settings audit (HKS-X02) at 09:55."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="copied" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Deluxe Suite copied to Premium Suite"}
                  <small>{"7 tasks copied (departure 2.0 credits, 60 min …). Premium Suite usually needs more – change the values and press Save matrix."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast fd-toast--warn" id="cancelled" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#info" />
                </svg>
                <div className="fd-toast__text">
                  {"Changes discarded"}
                  <small>{"The matrix is back to the values saved on 21 Oct 16:40."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <details className="helpbox">
                <summary>
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#help" />
                  </svg>
                  {" Help for this screen "}
                  <span className="code-chip">{"HKS-05"}</span>
                </summary>
                <dl className="helpbox__body">
                  <dt>{"What it is for"}</dt>
                  <dd>{"The cleaning task types, the credits and standard minutes of each task for each room type, and the linen-change cycle. The allocation uses credits to share the work fairly."}</dd>
                  <dt>{"How it works"}</dt>
                  <dd>{"1. Add or edit a task type in section A. 2. Type credits and minutes into the matrix; use Copy room type to start a new room type. 3. Check Preview workload. 4. Press Save matrix – credit changes go to the Rooms Division Manager for approval."}</dd>
                  <dt>{"Opened from"}</dt>
                  <dd>{"Housekeeping Setup Home (HKS-01) › Task types & credits"}</dd>
                  <dt>{"Leads to"}</dt>
                  <dd>{"HKS-P04 Task Type Form, HKS-13 cleaning steps, HKS-08 inspection checklists, approvals (DA-03)"}</dd>
                  <dt>{"Sends to"}</dt>
                  <dd>{"Allocation engine (HK-X03), HK-X07, planning (HK-18)"}</dd>
                  <dt>{"Note"}</dt>
                  <dd>{"Static screen (HTML and CSS only): it shows the layout, fields and sample data. Totals marked “calculated” are pre-computed. Saving and live data come when the backend is connected."}</dd>
                </dl>
              </details>
            </main>
          </div>
        </div>
      </div>
    </ScreenShell>
  );
}
