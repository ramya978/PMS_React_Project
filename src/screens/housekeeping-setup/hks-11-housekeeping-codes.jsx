// GENERATED from public/housekeeping-setup/hks-11-housekeeping-codes/index.html by scripts/convert_legacy.py.
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
    "href": "/housekeeping-setup/hks-11-housekeeping-codes/hks-11-housekeeping-codes.css",
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

export default function HousekeepingSetupHks11HousekeepingCodes() {
  return (
    <ScreenShell title="Housekeeping Codes" sheets={SHEETS} inlineCss={INLINE_CSS}>
      <div data-screen="HKS-11" data-code="HKS-11" data-static="1" className="legacy-body">
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
            <main className="app__content" id="main" data-code="HKS-11" tabIndex="-1">
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
                        <span aria-current="page">{"Codes"}</span>
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="page-header__row">
                  <div className="page-header__text">
                    <h1 className="page-header__title">{"Housekeeping Codes"}</h1>
                  </div>
                  <span className="code-chip" title="Screen code">{"HKS-11"}</span>
                  <div className="page-header__actions ph-icons">
                    <Link className="btn ph-ic" data-leads-to="HKS-X02" to={"/housekeeping-setup/hks-o01-settings-audit-report"}>
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#history" />
                      </svg>
                      {"Change log"}
                    </Link>
                  </div>
                </div>
              </header>
              <div className="dd-m no-print">
                <button className="dd-btn" type="button" popoverTarget="dd-keeping-codes-index-html-1">{"Code lists"}</button>
                <div className="dd-list" popover="" id="dd-keeping-codes-index-html-1">
                  <a className="hks-view hks-view--status" href="#list-status">
                    {"Status change reasons "}
                    <span className="hks-view__n">{"5"}</span>
                  </a>
                  <a className="hks-view hks-view--ooo" href="#list-ooo">
                    {"OOO / OOS reasons "}
                    <span className="hks-view__n">{"9"}</span>
                  </a>
                  <a className="hks-view hks-view--cond" href="#list-cond">
                    {"Room conditions "}
                    <span className="hks-view__n">{"6"}</span>
                  </a>
                  <a className="hks-view hks-view--refused" href="#list-refused">
                    {"Refused-service reasons "}
                    <span className="hks-view__n">{"5"}</span>
                  </a>
                  <a className="hks-view hks-view--log" href="#list-log">
                    {"Log categories "}
                    <span className="hks-view__n">{"6"}</span>
                  </a>
                  <a className="hks-view hks-view--disc" href="#list-disc">
                    {"Discrepancy outcomes "}
                    <span className="hks-view__n">{"5"}</span>
                  </a>
                  <span className="hks-views__sum fd-muted">{"36 codes in 6 lists · 35 active · 1 inactive"}</span>
                </div>
              </div>
              <div className="hks-views" role="navigation" aria-label="Code lists">
                <a className="hks-view hks-view--status" href="#list-status">
                  {"Status change reasons "}
                  <span className="hks-view__n">{"5"}</span>
                </a>
                <a className="hks-view hks-view--ooo" href="#list-ooo">
                  {"OOO / OOS reasons "}
                  <span className="hks-view__n">{"9"}</span>
                </a>
                <a className="hks-view hks-view--cond" href="#list-cond">
                  {"Room conditions "}
                  <span className="hks-view__n">{"6"}</span>
                </a>
                <a className="hks-view hks-view--refused" href="#list-refused">
                  {"Refused-service reasons "}
                  <span className="hks-view__n">{"5"}</span>
                </a>
                <a className="hks-view hks-view--log" href="#list-log">
                  {"Log categories "}
                  <span className="hks-view__n">{"6"}</span>
                </a>
                <a className="hks-view hks-view--disc" href="#list-disc">
                  {"Discrepancy outcomes "}
                  <span className="hks-view__n">{"5"}</span>
                </a>
                <span className="hks-views__sum fd-muted">{"36 codes in 6 lists · 35 active · 1 inactive"}</span>
              </div>
              <section className="hks-list" id="list-status" data-code="HKS-11-status" aria-labelledby="list-status-t">
                <div className="row row--between fd-tabbar">
                  <div>
                    <h2 className="s-card-title" id="list-status-t">{"Status change reasons"}</h2>
                    <span className="fd-muted">{"Why a room status was changed back or by a non-housekeeping user. 5 codes · 4 active"}</span>
                  </div>
                  <a className="btn btn--primary" href="#hks-p13-status-new" data-leads-to="HKS-P13">
                    <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#plus" />
                    </svg>
                    {"Add code"}
                  </a>
                </div>
                <div className="pgw">
                  <div className="s-scroll">
                    <table className="srt dt__table dt--hug" data-code="HKS-11-table-status" style={{"--srt-cols": "auto auto auto auto max-content"}} data-mc="">
                      <caption className="sr-only">{"Status change reasons"}</caption>
                      <thead>
                        <tr>
                          <th scope="col">
                            <input className="srt-i srt-a0" type="radio" name="sthks110" id="sthks110-0a" aria-label="Sort by Code, lowest or A first" />
                            <input className="srt-i srt-d0" type="radio" name="sthks110" id="sthks110-0d" aria-label="Sort by Code, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="sthks110-0a">{"Code"}</label>
                            <label className="srt-l srt-l--d" htmlFor="sthks110-0d" aria-hidden="true">{"Code"}</label>
                          </th>
                          <th scope="col">
                            <input className="srt-i srt-a1" type="radio" name="sthks110" id="sthks110-1a" aria-label="Sort by Description, lowest or A first" />
                            <input className="srt-i srt-d1" type="radio" name="sthks110" id="sthks110-1d" aria-label="Sort by Description, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="sthks110-1a">{"Description"}</label>
                            <label className="srt-l srt-l--d" htmlFor="sthks110-1d" aria-hidden="true">{"Description"}</label>
                          </th>
                          <th scope="col">
                            <input className="srt-i srt-a2" type="radio" name="sthks110" id="sthks110-2a" aria-label="Sort by Needs note, lowest or A first" />
                            <input className="srt-i srt-d2" type="radio" name="sthks110" id="sthks110-2d" aria-label="Sort by Needs note, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="sthks110-2a">{"Needs note"}</label>
                            <label className="srt-l srt-l--d" htmlFor="sthks110-2d" aria-hidden="true">{"Needs note"}</label>
                          </th>
                          <th scope="col">
                            <input className="srt-i srt-a3" type="radio" name="sthks110" id="sthks110-3a" aria-label="Sort by Status, lowest or A first" />
                            <input className="srt-i srt-d3" type="radio" name="sthks110" id="sthks110-3d" aria-label="Sort by Status, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="sthks110-3a">{"Status"}</label>
                            <label className="srt-l srt-l--d" htmlFor="sthks110-3d" aria-hidden="true">{"Status"}</label>
                          </th>
                          <th scope="col" />
                        </tr>
                      </thead>
                      <tbody>
                        <tr id="saved-status1" style={{"--k0": "1", "--k1": "1", "--k2": "2", "--k3": "1"}}>
                          <td className="dt__td nw" data-label="Code" data-w2="" data-t="">
                            <span className="hks-anchor" id="deact-status1" />
                            <a className="fd-link" href="#hks-p13-status1">
                              <strong>{"GUESTCMP"}</strong>
                            </a>
                          </td>
                          <td className="dt__td" data-label="Description" data-w2="">{"Guest complaint"}</td>
                          <td className="dt__td nw" data-label="Needs note" data-w2="" data-s="">
                            <span className="pill pill--tentative">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pen-line" />
                              </svg>
                              {"Yes"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Status">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p13-status1" aria-label="Edit Guest complaint">{"Edit"}</a>
                            {" "}
                            <a className="btn" href="#hks-deact-status1" aria-label="Deactivate Guest complaint">{"Deactivate"}</a>
                          </td>
                        </tr>
                        <tr id="saved-status2" style={{"--k0": "4", "--k1": "4", "--k2": "1", "--k3": "1"}}>
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <span className="hks-anchor" id="deact-status2" />
                            <a className="fd-link" href="#hks-p13-status2">
                              <strong>{"RECLEAN"}</strong>
                            </a>
                          </td>
                          <td className="dt__td" data-label="Description" data-w2="">{"Re-clean"}</td>
                          <td className="dt__td nw" data-label="Needs note" data-w2="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p13-status2" aria-label="Edit Re-clean">{"Edit"}</a>
                            {" "}
                            <a className="btn" href="#hks-deact-status2" aria-label="Deactivate Re-clean">{"Deactivate"}</a>
                          </td>
                        </tr>
                        <tr id="saved-status3" style={{"--k0": "5", "--k1": "5", "--k2": "2", "--k3": "1"}}>
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <span className="hks-anchor" id="deact-status3" />
                            <a className="fd-link" href="#hks-p13-status3">
                              <strong>{"WRONGST"}</strong>
                            </a>
                          </td>
                          <td className="dt__td" data-label="Description" data-w2="">{"Wrong status"}</td>
                          <td className="dt__td nw" data-label="Needs note" data-w2="" data-s="">
                            <span className="pill pill--tentative">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pen-line" />
                              </svg>
                              {"Yes"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Status">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p13-status3" aria-label="Edit Wrong status">{"Edit"}</a>
                            {" "}
                            <a className="btn" href="#hks-deact-status3" aria-label="Deactivate Wrong status">{"Deactivate"}</a>
                          </td>
                        </tr>
                        <tr id="saved-status4" style={{"--k0": "3", "--k1": "3", "--k2": "1", "--k3": "2"}}>
                          <td className="dt__td nw" data-label="Code" data-w2="" data-t="">
                            <span className="hks-anchor" id="deact-status4" />
                            <a className="fd-link" href="#hks-p13-status4">
                              <strong>{"POWERCUT"}</strong>
                            </a>
                          </td>
                          <td className="dt__td" data-label="Description" data-w2="">{"Power cut"}</td>
                          <td className="dt__td nw" data-label="Needs note" data-w2="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill pill--ooo">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pause" />
                              </svg>
                              {"Inactive"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p13-status4" aria-label="Edit Power cut">{"Edit"}</a>
                          </td>
                        </tr>
                        <tr id="saved-status5" style={{"--k0": "2", "--k1": "2", "--k2": "2", "--k3": "1"}}>
                          <td className="dt__td nw" data-label="Code" data-w2="" data-t="">
                            <span className="hks-anchor" id="deact-status5" />
                            <a className="fd-link" href="#hks-p13-status5">
                              <strong>{"PESTSEEN"}</strong>
                            </a>
                          </td>
                          <td className="dt__td" data-label="Description" data-w2="">{"Pest seen"}</td>
                          <td className="dt__td nw" data-label="Needs note" data-w2="" data-s="">
                            <span className="pill pill--tentative">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pen-line" />
                              </svg>
                              {"Yes"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Status">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p13-status5" aria-label="Edit Pest seen">{"Edit"}</a>
                            {" "}
                            <a className="btn" href="#hks-deact-status5" aria-label="Deactivate Pest seen">{"Deactivate"}</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
              <section className="hks-list" id="list-ooo" data-code="HKS-11-ooo" aria-labelledby="list-ooo-t">
                <div className="row row--between fd-tabbar">
                  <div>
                    <h2 className="s-card-title" id="list-ooo-t">{"Out of order / out of service reasons"}</h2>
                    <span className="fd-muted">{"Why a room is taken out of order or out of service. 9 codes · 9 active"}</span>
                  </div>
                  <a className="btn btn--primary" href="#hks-p13-ooo-new" data-leads-to="HKS-P13">
                    <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#plus" />
                    </svg>
                    {"Add code"}
                  </a>
                </div>
                <div className="pgw">
                  <div className="s-scroll">
                    <table className="srt dt__table dt--hug" data-code="HKS-11-table-ooo" style={{"--srt-cols": "auto auto auto auto auto max-content"}} data-mc="">
                      <caption className="sr-only">{"Out of order / out of service reasons"}</caption>
                      <thead>
                        <tr>
                          <th scope="col">
                            <input className="srt-i srt-a0" type="radio" name="sthks111" id="sthks111-0a" aria-label="Sort by Code, lowest or A first" />
                            <input className="srt-i srt-d0" type="radio" name="sthks111" id="sthks111-0d" aria-label="Sort by Code, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="sthks111-0a">{"Code"}</label>
                            <label className="srt-l srt-l--d" htmlFor="sthks111-0d" aria-hidden="true">{"Code"}</label>
                          </th>
                          <th scope="col">
                            <input className="srt-i srt-a1" type="radio" name="sthks111" id="sthks111-1a" aria-label="Sort by Description, lowest or A first" />
                            <input className="srt-i srt-d1" type="radio" name="sthks111" id="sthks111-1d" aria-label="Sort by Description, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="sthks111-1a">{"Description"}</label>
                            <label className="srt-l srt-l--d" htmlFor="sthks111-1d" aria-hidden="true">{"Description"}</label>
                          </th>
                          <th scope="col">
                            <input className="srt-i srt-a2" type="radio" name="sthks111" id="sthks111-2a" aria-label="Sort by Needs note, lowest or A first" />
                            <input className="srt-i srt-d2" type="radio" name="sthks111" id="sthks111-2d" aria-label="Sort by Needs note, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="sthks111-2a">{"Needs note"}</label>
                            <label className="srt-l srt-l--d" htmlFor="sthks111-2d" aria-hidden="true">{"Needs note"}</label>
                          </th>
                          <th scope="col">
                            <input className="srt-i srt-a3" type="radio" name="sthks111" id="sthks111-3a" aria-label="Sort by Default for OOO, lowest or A first" />
                            <input className="srt-i srt-d3" type="radio" name="sthks111" id="sthks111-3d" aria-label="Sort by Default for OOO, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="sthks111-3a">{"Default for OOO"}</label>
                            <label className="srt-l srt-l--d" htmlFor="sthks111-3d" aria-hidden="true">{"Default for OOO"}</label>
                          </th>
                          <th scope="col">{"Status"}</th>
                          <th scope="col" />
                        </tr>
                      </thead>
                      <tbody>
                        <tr id="saved-ooo1" style={{"--k0": "7", "--k1": "7", "--k2": "2", "--k3": "1"}}>
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <span className="hks-anchor" id="deact-ooo1" />
                            <a className="fd-link" href="#hks-p13-ooo1">
                              <strong>{"REPAIR"}</strong>
                            </a>
                          </td>
                          <td className="dt__td" data-label="Description" data-w2="">{"Repair"}</td>
                          <td className="dt__td nw" data-label="Needs note" data-w2="" data-s="">
                            <span className="pill pill--tentative">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pen-line" />
                              </svg>
                              {"Yes"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Default for OOO" data-w2="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Default"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Status">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p13-ooo1" aria-label="Edit Repair">{"Edit"}</a>
                            {" "}
                            <a className="btn" href="#hks-deact-ooo1" aria-label="Deactivate Repair">{"Deactivate"}</a>
                          </td>
                        </tr>
                        <tr id="saved-ooo2" style={{"--k0": "6", "--k1": "6", "--k2": "1", "--k3": "2"}}>
                          <td className="dt__td nw" data-label="Code" data-w2="" data-t="">
                            <span className="hks-anchor" id="deact-ooo2" />
                            <a className="fd-link" href="#hks-p13-ooo2">
                              <strong>{"RENOVATE"}</strong>
                            </a>
                          </td>
                          <td className="dt__td" data-label="Description" data-w2="">{"Renovation"}</td>
                          <td className="dt__td nw" data-label="Needs note" data-w2="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td nw" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p13-ooo2" aria-label="Edit Renovation">{"Edit"}</a>
                            {" "}
                            <a className="btn" href="#hks-deact-ooo2" aria-label="Deactivate Renovation">{"Deactivate"}</a>
                          </td>
                        </tr>
                        <tr id="saved-ooo3" style={{"--k0": "1", "--k1": "1", "--k2": "1", "--k3": "2"}}>
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <span className="hks-anchor" id="deact-ooo3" />
                            <a className="fd-link" href="#hks-p13-ooo3">
                              <strong>{"DEEPCLN"}</strong>
                            </a>
                          </td>
                          <td className="dt__td" data-label="Description" data-w2="">{"Deep cleaning"}</td>
                          <td className="dt__td nw" data-label="Needs note" data-w2="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td nw" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p13-ooo3" aria-label="Edit Deep cleaning">{"Edit"}</a>
                            {" "}
                            <a className="btn" href="#hks-deact-ooo3" aria-label="Deactivate Deep cleaning">{"Deactivate"}</a>
                          </td>
                        </tr>
                        <tr id="saved-ooo4" style={{"--k0": "5", "--k1": "5", "--k2": "1", "--k3": "2"}}>
                          <td className="dt__td nw" data-label="Code" data-w2="" data-t="">
                            <span className="hks-anchor" id="deact-ooo4" />
                            <a className="fd-link" href="#hks-p13-ooo4">
                              <strong>{"PESTCTRL"}</strong>
                            </a>
                          </td>
                          <td className="dt__td" data-label="Description" data-w2="">{"Pest control"}</td>
                          <td className="dt__td nw" data-label="Needs note" data-w2="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td nw" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p13-ooo4" aria-label="Edit Pest control">{"Edit"}</a>
                            {" "}
                            <a className="btn" href="#hks-deact-ooo4" aria-label="Deactivate Pest control">{"Deactivate"}</a>
                          </td>
                        </tr>
                        <tr id="saved-ooo5" style={{"--k0": "4", "--k1": "4", "--k2": "1", "--k3": "2"}}>
                          <td className="dt__td nw" data-label="Code" data-w2="" data-t="">
                            <span className="hks-anchor" id="deact-ooo5" />
                            <a className="fd-link" href="#hks-p13-ooo5">
                              <strong>{"PAINTING"}</strong>
                            </a>
                          </td>
                          <td className="dt__td" data-label="Description" data-w2="">{"Painting"}</td>
                          <td className="dt__td nw" data-label="Needs note" data-w2="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td nw" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p13-ooo5" aria-label="Edit Painting">{"Edit"}</a>
                            {" "}
                            <a className="btn" href="#hks-deact-ooo5" aria-label="Deactivate Painting">{"Deactivate"}</a>
                          </td>
                        </tr>
                        <tr id="saved-ooo6" style={{"--k0": "9", "--k1": "9", "--k2": "2", "--k3": "2"}}>
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <span className="hks-anchor" id="deact-ooo6" />
                            <a className="fd-link" href="#hks-p13-ooo6">
                              <strong>{"WATERLK"}</strong>
                            </a>
                          </td>
                          <td className="dt__td" data-label="Description" data-w2="">{"Water leakage"}</td>
                          <td className="dt__td nw" data-label="Needs note" data-w2="" data-s="">
                            <span className="pill pill--tentative">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pen-line" />
                              </svg>
                              {"Yes"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Status">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p13-ooo6" aria-label="Edit Water leakage">{"Edit"}</a>
                            {" "}
                            <a className="btn" href="#hks-deact-ooo6" aria-label="Deactivate Water leakage">{"Deactivate"}</a>
                          </td>
                        </tr>
                        <tr id="saved-ooo7" style={{"--k0": "2", "--k1": "2", "--k2": "1", "--k3": "2"}}>
                          <td className="dt__td nw" data-label="Code" data-w2="" data-t="">
                            <span className="hks-anchor" id="deact-ooo7" />
                            <a className="fd-link" href="#hks-p13-ooo7">
                              <strong>{"ELECTRIC"}</strong>
                            </a>
                          </td>
                          <td className="dt__td" data-label="Description" data-w2="">{"Electrical"}</td>
                          <td className="dt__td nw" data-label="Needs note" data-w2="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td nw" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p13-ooo7" aria-label="Edit Electrical">{"Edit"}</a>
                            {" "}
                            <a className="btn" href="#hks-deact-ooo7" aria-label="Deactivate Electrical">{"Deactivate"}</a>
                          </td>
                        </tr>
                        <tr id="saved-ooo8" style={{"--k0": "8", "--k1": "8", "--k2": "1", "--k3": "2"}}>
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <span className="hks-anchor" id="deact-ooo8" />
                            <a className="fd-link" href="#hks-p13-ooo8">
                              <strong>{"SHOWRM"}</strong>
                            </a>
                          </td>
                          <td className="dt__td" data-label="Description" data-w2="">{"Show room"}</td>
                          <td className="dt__td nw" data-label="Needs note" data-w2="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td nw" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p13-ooo8" aria-label="Edit Show room">{"Edit"}</a>
                            {" "}
                            <a className="btn" href="#hks-deact-ooo8" aria-label="Deactivate Show room">{"Deactivate"}</a>
                          </td>
                        </tr>
                        <tr id="saved-ooo9" style={{"--k0": "3", "--k1": "3", "--k2": "2", "--k3": "2"}}>
                          <td className="dt__td nw" data-label="Code" data-w2="" data-t="">
                            <span className="hks-anchor" id="deact-ooo9" />
                            <a className="fd-link" href="#hks-p13-ooo9">
                              <strong>{"MGMTHOLD"}</strong>
                            </a>
                          </td>
                          <td className="dt__td" data-label="Description" data-w2="">{"Management hold"}</td>
                          <td className="dt__td nw" data-label="Needs note" data-w2="" data-s="">
                            <span className="pill pill--tentative">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pen-line" />
                              </svg>
                              {"Yes"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Status">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p13-ooo9" aria-label="Edit Management hold">{"Edit"}</a>
                            {" "}
                            <a className="btn" href="#hks-deact-ooo9" aria-label="Deactivate Management hold">{"Deactivate"}</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
              <section className="hks-list" id="list-cond" data-code="HKS-11-cond" aria-labelledby="list-cond-t">
                <div className="row row--between fd-tabbar">
                  <div>
                    <h2 className="s-card-title" id="list-cond-t">{"Room conditions"}</h2>
                    <span className="fd-muted">{"What the front desk is told about a room that can still be assigned. 6 codes · 6 active"}</span>
                  </div>
                  <a className="btn btn--primary" href="#hks-p13-cond-new" data-leads-to="HKS-P13">
                    <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#plus" />
                    </svg>
                    {"Add code"}
                  </a>
                </div>
                <div className="pgw">
                  <div className="s-scroll">
                    <table className="srt dt__table dt--hug" data-code="HKS-11-table-cond" style={{"--srt-cols": "auto auto auto auto max-content"}} data-mc="">
                      <caption className="sr-only">{"Room conditions"}</caption>
                      <thead>
                        <tr>
                          <th scope="col">
                            <input className="srt-i srt-a0" type="radio" name="sthks112" id="sthks112-0a" aria-label="Sort by Code, lowest or A first" />
                            <input className="srt-i srt-d0" type="radio" name="sthks112" id="sthks112-0d" aria-label="Sort by Code, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="sthks112-0a">{"Code"}</label>
                            <label className="srt-l srt-l--d" htmlFor="sthks112-0d" aria-hidden="true">{"Code"}</label>
                          </th>
                          <th scope="col">
                            <input className="srt-i srt-a1" type="radio" name="sthks112" id="sthks112-1a" aria-label="Sort by Description, lowest or A first" />
                            <input className="srt-i srt-d1" type="radio" name="sthks112" id="sthks112-1d" aria-label="Sort by Description, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="sthks112-1a">{"Description"}</label>
                            <label className="srt-l srt-l--d" htmlFor="sthks112-1d" aria-hidden="true">{"Description"}</label>
                          </th>
                          <th scope="col">
                            <input className="srt-i srt-a2" type="radio" name="sthks112" id="sthks112-2a" aria-label="Sort by Needs note, lowest or A first" />
                            <input className="srt-i srt-d2" type="radio" name="sthks112" id="sthks112-2d" aria-label="Sort by Needs note, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="sthks112-2a">{"Needs note"}</label>
                            <label className="srt-l srt-l--d" htmlFor="sthks112-2d" aria-hidden="true">{"Needs note"}</label>
                          </th>
                          <th scope="col">{"Status"}</th>
                          <th scope="col" />
                        </tr>
                      </thead>
                      <tbody>
                        <tr id="saved-cond1" style={{"--k0": "5", "--k1": "5", "--k2": "1"}}>
                          <td className="dt__td nw" data-label="Code" data-w2="" data-t="">
                            <span className="hks-anchor" id="deact-cond1" />
                            <a className="fd-link" href="#hks-p13-cond1">
                              <strong>{"TWINKING"}</strong>
                            </a>
                          </td>
                          <td className="dt__td" data-label="Description" data-w2="">{"Twin made as king"}</td>
                          <td className="dt__td nw" data-label="Needs note" data-w2="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p13-cond1" aria-label="Edit Twin made as king">{"Edit"}</a>
                            {" "}
                            <a className="btn" href="#hks-deact-cond1" aria-label="Deactivate Twin made as king">{"Deactivate"}</a>
                          </td>
                        </tr>
                        <tr id="saved-cond2" style={{"--k0": "2", "--k1": "2", "--k2": "1"}}>
                          <td className="dt__td nw" data-label="Code" data-w2="" data-t="">
                            <span className="hks-anchor" id="deact-cond2" />
                            <a className="fd-link" href="#hks-p13-cond2">
                              <strong>{"EXTRABED"}</strong>
                            </a>
                          </td>
                          <td className="dt__td" data-label="Description" data-w2="">{"Extra bed in room"}</td>
                          <td className="dt__td nw" data-label="Needs note" data-w2="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p13-cond2" aria-label="Edit Extra bed in room">{"Edit"}</a>
                            {" "}
                            <a className="btn" href="#hks-deact-cond2" aria-label="Deactivate Extra bed in room">{"Deactivate"}</a>
                          </td>
                        </tr>
                        <tr id="saved-cond3" style={{"--k0": "1", "--k1": "1", "--k2": "1"}}>
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <span className="hks-anchor" id="deact-cond3" />
                            <a className="fd-link" href="#hks-p13-cond3">
                              <strong>{"BABYCOT"}</strong>
                            </a>
                          </td>
                          <td className="dt__td" data-label="Description" data-w2="">{"Baby cot in room"}</td>
                          <td className="dt__td nw" data-label="Needs note" data-w2="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p13-cond3" aria-label="Edit Baby cot in room">{"Edit"}</a>
                            {" "}
                            <a className="btn" href="#hks-deact-cond3" aria-label="Deactivate Baby cot in room">{"Deactivate"}</a>
                          </td>
                        </tr>
                        <tr id="saved-cond4" style={{"--k0": "3", "--k1": "3", "--k2": "1"}}>
                          <td className="dt__td nw" data-label="Code" data-w2="" data-t="">
                            <span className="hks-anchor" id="deact-cond4" />
                            <a className="fd-link" href="#hks-p13-cond4">
                              <strong>{"SHOWROOM"}</strong>
                            </a>
                          </td>
                          <td className="dt__td" data-label="Description" data-w2="">{"Show room"}</td>
                          <td className="dt__td nw" data-label="Needs note" data-w2="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p13-cond4" aria-label="Edit Show room">{"Edit"}</a>
                            {" "}
                            <a className="btn" href="#hks-deact-cond4" aria-label="Deactivate Show room">{"Deactivate"}</a>
                          </td>
                        </tr>
                        <tr id="saved-cond5" style={{"--k0": "4", "--k1": "4", "--k2": "2"}}>
                          <td className="dt__td nw" data-label="Code" data-w2="" data-t="">
                            <span className="hks-anchor" id="deact-cond5" />
                            <a className="fd-link" href="#hks-p13-cond5">
                              <strong>{"SMELLPNT"}</strong>
                            </a>
                          </td>
                          <td className="dt__td" data-label="Description" data-w2="">{"Smell / paint"}</td>
                          <td className="dt__td nw" data-label="Needs note" data-w2="" data-s="">
                            <span className="pill pill--tentative">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pen-line" />
                              </svg>
                              {"Yes"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Status">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p13-cond5" aria-label="Edit Smell / paint">{"Edit"}</a>
                            {" "}
                            <a className="btn" href="#hks-deact-cond5" aria-label="Deactivate Smell / paint">{"Deactivate"}</a>
                          </td>
                        </tr>
                        <tr id="saved-cond6" style={{"--k0": "6", "--k1": "6", "--k2": "1"}}>
                          <td className="dt__td nw" data-label="Code" data-w2="" data-t="">
                            <span className="hks-anchor" id="deact-cond6" />
                            <a className="fd-link" href="#hks-p13-cond6">
                              <strong>{"UNDERINS"}</strong>
                            </a>
                          </td>
                          <td className="dt__td" data-label="Description" data-w2="">{"Under inspection"}</td>
                          <td className="dt__td nw" data-label="Needs note" data-w2="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p13-cond6" aria-label="Edit Under inspection">{"Edit"}</a>
                            {" "}
                            <a className="btn" href="#hks-deact-cond6" aria-label="Deactivate Under inspection">{"Deactivate"}</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
              <section className="hks-list" id="list-refused" data-code="HKS-11-refused" aria-labelledby="list-refused-t">
                <div className="row row--between fd-tabbar">
                  <div>
                    <h2 className="s-card-title" id="list-refused-t">{"Refused-service reasons"}</h2>
                    <span className="fd-muted">{"Why a guest did not want the room serviced. 5 codes · 5 active"}</span>
                  </div>
                  <a className="btn btn--primary" href="#hks-p13-refused-new" data-leads-to="HKS-P13">
                    <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#plus" />
                    </svg>
                    {"Add code"}
                  </a>
                </div>
                <div className="pgw">
                  <div className="s-scroll">
                    <table className="srt dt__table dt--hug" data-code="HKS-11-table-refused" style={{"--srt-cols": "auto auto auto auto max-content"}} data-mc="">
                      <caption className="sr-only">{"Refused-service reasons"}</caption>
                      <thead>
                        <tr>
                          <th scope="col">
                            <input className="srt-i srt-a0" type="radio" name="sthks113" id="sthks113-0a" aria-label="Sort by Code, lowest or A first" />
                            <input className="srt-i srt-d0" type="radio" name="sthks113" id="sthks113-0d" aria-label="Sort by Code, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="sthks113-0a">{"Code"}</label>
                            <label className="srt-l srt-l--d" htmlFor="sthks113-0d" aria-hidden="true">{"Code"}</label>
                          </th>
                          <th scope="col">
                            <input className="srt-i srt-a1" type="radio" name="sthks113" id="sthks113-1a" aria-label="Sort by Description, lowest or A first" />
                            <input className="srt-i srt-d1" type="radio" name="sthks113" id="sthks113-1d" aria-label="Sort by Description, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="sthks113-1a">{"Description"}</label>
                            <label className="srt-l srt-l--d" htmlFor="sthks113-1d" aria-hidden="true">{"Description"}</label>
                          </th>
                          <th scope="col">
                            <input className="srt-i srt-a2" type="radio" name="sthks113" id="sthks113-2a" aria-label="Sort by Needs note, lowest or A first" />
                            <input className="srt-i srt-d2" type="radio" name="sthks113" id="sthks113-2d" aria-label="Sort by Needs note, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="sthks113-2a">{"Needs note"}</label>
                            <label className="srt-l srt-l--d" htmlFor="sthks113-2d" aria-hidden="true">{"Needs note"}</label>
                          </th>
                          <th scope="col">{"Status"}</th>
                          <th scope="col" />
                        </tr>
                      </thead>
                      <tbody>
                        <tr id="saved-refused1" style={{"--k0": "3", "--k1": "1", "--k2": "1"}}>
                          <td className="dt__td nw" data-label="Code" data-w2="" data-t="">
                            <span className="hks-anchor" id="deact-refused1" />
                            <a className="fd-link" href="#hks-p13-refused1">
                              <strong>{"SLEEPING"}</strong>
                            </a>
                          </td>
                          <td className="dt__td" data-label="Description" data-w2="">{"Guest sleeping"}</td>
                          <td className="dt__td nw" data-label="Needs note" data-w2="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p13-refused1" aria-label="Edit Guest sleeping">{"Edit"}</a>
                            {" "}
                            <a className="btn" href="#hks-deact-refused1" aria-label="Deactivate Guest sleeping">{"Deactivate"}</a>
                          </td>
                        </tr>
                        <tr id="saved-refused2" style={{"--k0": "5", "--k1": "3", "--k2": "1"}}>
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <span className="hks-anchor" id="deact-refused2" />
                            <a className="fd-link" href="#hks-p13-refused2">
                              <strong>{"WORKING"}</strong>
                            </a>
                          </td>
                          <td className="dt__td" data-label="Description" data-w2="">{"Guest working"}</td>
                          <td className="dt__td nw" data-label="Needs note" data-w2="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p13-refused2" aria-label="Edit Guest working">{"Edit"}</a>
                            {" "}
                            <a className="btn" href="#hks-deact-refused2" aria-label="Deactivate Guest working">{"Deactivate"}</a>
                          </td>
                        </tr>
                        <tr id="saved-refused3" style={{"--k0": "4", "--k1": "2", "--k2": "2"}}>
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <span className="hks-anchor" id="deact-refused3" />
                            <a className="fd-link" href="#hks-p13-refused3">
                              <strong>{"UNWELL"}</strong>
                            </a>
                          </td>
                          <td className="dt__td" data-label="Description" data-w2="">{"Guest unwell"}</td>
                          <td className="dt__td nw" data-label="Needs note" data-w2="" data-s="">
                            <span className="pill pill--tentative">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pen-line" />
                              </svg>
                              {"Yes"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Status">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p13-refused3" aria-label="Edit Guest unwell">{"Edit"}</a>
                            {" "}
                            <a className="btn" href="#hks-deact-refused3" aria-label="Deactivate Guest unwell">{"Deactivate"}</a>
                          </td>
                        </tr>
                        <tr id="saved-refused4" style={{"--k0": "2", "--k1": "5", "--k2": "1"}}>
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <span className="hks-anchor" id="deact-refused4" />
                            <a className="fd-link" href="#hks-p13-refused4">
                              <strong>{"PRIVACY"}</strong>
                            </a>
                          </td>
                          <td className="dt__td" data-label="Description" data-w2="">{"Privacy"}</td>
                          <td className="dt__td nw" data-label="Needs note" data-w2="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p13-refused4" aria-label="Edit Privacy">{"Edit"}</a>
                            {" "}
                            <a className="btn" href="#hks-deact-refused4" aria-label="Deactivate Privacy">{"Deactivate"}</a>
                          </td>
                        </tr>
                        <tr id="saved-refused5" style={{"--k0": "1", "--k1": "4", "--k2": "1"}}>
                          <td className="dt__td nw" data-label="Code" data-w2="" data-t="">
                            <span className="hks-anchor" id="deact-refused5" />
                            <a className="fd-link" href="#hks-p13-refused5">
                              <strong>{"NOREASON"}</strong>
                            </a>
                          </td>
                          <td className="dt__td" data-label="Description" data-w2="">{"No reason given"}</td>
                          <td className="dt__td nw" data-label="Needs note" data-w2="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p13-refused5" aria-label="Edit No reason given">{"Edit"}</a>
                            {" "}
                            <a className="btn" href="#hks-deact-refused5" aria-label="Deactivate No reason given">{"Deactivate"}</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
              <section className="hks-list" id="list-log" data-code="HKS-11-log" aria-labelledby="list-log-t">
                <div className="row row--between fd-tabbar">
                  <div>
                    <h2 className="s-card-title" id="list-log-t">{"Log categories"}</h2>
                    <span className="fd-muted">{"Categories of the housekeeping log book. 6 codes · 6 active"}</span>
                  </div>
                  <a className="btn btn--primary" href="#hks-p13-log-new" data-leads-to="HKS-P13">
                    <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#plus" />
                    </svg>
                    {"Add code"}
                  </a>
                </div>
                <div className="pgw">
                  <div className="s-scroll">
                    <table className="srt dt__table dt--hug" data-code="HKS-11-table-log" style={{"--srt-cols": "auto auto auto auto max-content"}} data-mc="">
                      <caption className="sr-only">{"Log categories"}</caption>
                      <thead>
                        <tr>
                          <th scope="col">
                            <input className="srt-i srt-a0" type="radio" name="sthks114" id="sthks114-0a" aria-label="Sort by Code, lowest or A first" />
                            <input className="srt-i srt-d0" type="radio" name="sthks114" id="sthks114-0d" aria-label="Sort by Code, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="sthks114-0a">{"Code"}</label>
                            <label className="srt-l srt-l--d" htmlFor="sthks114-0d" aria-hidden="true">{"Code"}</label>
                          </th>
                          <th scope="col">
                            <input className="srt-i srt-a1" type="radio" name="sthks114" id="sthks114-1a" aria-label="Sort by Description, lowest or A first" />
                            <input className="srt-i srt-d1" type="radio" name="sthks114" id="sthks114-1d" aria-label="Sort by Description, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="sthks114-1a">{"Description"}</label>
                            <label className="srt-l srt-l--d" htmlFor="sthks114-1d" aria-hidden="true">{"Description"}</label>
                          </th>
                          <th scope="col">
                            <input className="srt-i srt-a2" type="radio" name="sthks114" id="sthks114-2a" aria-label="Sort by Needs note, lowest or A first" />
                            <input className="srt-i srt-d2" type="radio" name="sthks114" id="sthks114-2d" aria-label="Sort by Needs note, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="sthks114-2a">{"Needs note"}</label>
                            <label className="srt-l srt-l--d" htmlFor="sthks114-2d" aria-hidden="true">{"Needs note"}</label>
                          </th>
                          <th scope="col">{"Status"}</th>
                          <th scope="col" />
                        </tr>
                      </thead>
                      <tbody>
                        <tr id="saved-log1" style={{"--k0": "3", "--k1": "3", "--k2": "1"}}>
                          <td className="dt__td nw" data-label="Code" data-w2="" data-t="">
                            <span className="hks-anchor" id="deact-log1" />
                            <a className="fd-link" href="#hks-p13-log1">
                              <strong>{"INSTRUCT"}</strong>
                            </a>
                          </td>
                          <td className="dt__td" data-label="Description" data-w2="">{"Instruction"}</td>
                          <td className="dt__td nw" data-label="Needs note" data-w2="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p13-log1" aria-label="Edit Instruction">{"Edit"}</a>
                            {" "}
                            <a className="btn" href="#hks-deact-log1" aria-label="Deactivate Instruction">{"Deactivate"}</a>
                          </td>
                        </tr>
                        <tr id="saved-log2" style={{"--k0": "2", "--k1": "2", "--k2": "2"}}>
                          <td className="dt__td nw" data-label="Code" data-w2="" data-t="">
                            <span className="hks-anchor" id="deact-log2" />
                            <a className="fd-link" href="#hks-p13-log2">
                              <strong>{"INCIDENT"}</strong>
                            </a>
                          </td>
                          <td className="dt__td" data-label="Description" data-w2="">{"Incident"}</td>
                          <td className="dt__td nw" data-label="Needs note" data-w2="" data-s="">
                            <span className="pill pill--tentative">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pen-line" />
                              </svg>
                              {"Yes"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Status">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p13-log2" aria-label="Edit Incident">{"Edit"}</a>
                            {" "}
                            <a className="btn" href="#hks-deact-log2" aria-label="Deactivate Incident">{"Deactivate"}</a>
                          </td>
                        </tr>
                        <tr id="saved-log3" style={{"--k0": "1", "--k1": "1", "--k2": "1"}}>
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <span className="hks-anchor" id="deact-log3" />
                            <a className="fd-link" href="#hks-p13-log3">
                              <strong>{"GUESTFB"}</strong>
                            </a>
                          </td>
                          <td className="dt__td" data-label="Description" data-w2="">{"Guest feedback"}</td>
                          <td className="dt__td nw" data-label="Needs note" data-w2="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p13-log3" aria-label="Edit Guest feedback">{"Edit"}</a>
                            {" "}
                            <a className="btn" href="#hks-deact-log3" aria-label="Deactivate Guest feedback">{"Deactivate"}</a>
                          </td>
                        </tr>
                        <tr id="saved-log4" style={{"--k0": "5", "--k1": "5", "--k2": "1"}}>
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <span className="hks-anchor" id="deact-log4" />
                            <a className="fd-link" href="#hks-p13-log4">
                              <strong>{"MAINT"}</strong>
                            </a>
                          </td>
                          <td className="dt__td" data-label="Description" data-w2="">{"Maintenance"}</td>
                          <td className="dt__td nw" data-label="Needs note" data-w2="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p13-log4" aria-label="Edit Maintenance">{"Edit"}</a>
                            {" "}
                            <a className="btn" href="#hks-deact-log4" aria-label="Deactivate Maintenance">{"Deactivate"}</a>
                          </td>
                        </tr>
                        <tr id="saved-log5" style={{"--k0": "6", "--k1": "6", "--k2": "1"}}>
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <span className="hks-anchor" id="deact-log5" />
                            <a className="fd-link" href="#hks-p13-log5">
                              <strong>{"STAFF"}</strong>
                            </a>
                          </td>
                          <td className="dt__td" data-label="Description" data-w2="">{"Staff"}</td>
                          <td className="dt__td nw" data-label="Needs note" data-w2="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p13-log5" aria-label="Edit Staff">{"Edit"}</a>
                            {" "}
                            <a className="btn" href="#hks-deact-log5" aria-label="Deactivate Staff">{"Deactivate"}</a>
                          </td>
                        </tr>
                        <tr id="saved-log6" style={{"--k0": "4", "--k1": "4", "--k2": "2"}}>
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <span className="hks-anchor" id="deact-log6" />
                            <a className="fd-link" href="#hks-p13-log6">
                              <strong>{"LOSTKEY"}</strong>
                            </a>
                          </td>
                          <td className="dt__td" data-label="Description" data-w2="">{"Lost key"}</td>
                          <td className="dt__td nw" data-label="Needs note" data-w2="" data-s="">
                            <span className="pill pill--tentative">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pen-line" />
                              </svg>
                              {"Yes"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Status">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p13-log6" aria-label="Edit Lost key">{"Edit"}</a>
                            {" "}
                            <a className="btn" href="#hks-deact-log6" aria-label="Deactivate Lost key">{"Deactivate"}</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
              <section className="hks-list" id="list-disc" data-code="HKS-11-disc" aria-labelledby="list-disc-t">
                <div className="row row--between fd-tabbar">
                  <div>
                    <h2 className="s-card-title" id="list-disc-t">{"Discrepancy outcomes"}</h2>
                    <span className="fd-muted">{"How a room-status difference between the front desk and housekeeping was settled. 5 codes · 5 active"}</span>
                  </div>
                  <a className="btn btn--primary" href="#hks-p13-disc-new" data-leads-to="HKS-P13">
                    <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#plus" />
                    </svg>
                    {"Add code"}
                  </a>
                </div>
                <div className="pgw">
                  <div className="s-scroll">
                    <table className="srt dt__table dt--hug" data-code="HKS-11-table-disc" style={{"--srt-cols": "auto auto auto auto max-content"}} data-mc="">
                      <caption className="sr-only">{"Discrepancy outcomes"}</caption>
                      <thead>
                        <tr>
                          <th scope="col">
                            <input className="srt-i srt-a0" type="radio" name="sthks115" id="sthks115-0a" aria-label="Sort by Code, lowest or A first" />
                            <input className="srt-i srt-d0" type="radio" name="sthks115" id="sthks115-0d" aria-label="Sort by Code, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="sthks115-0a">{"Code"}</label>
                            <label className="srt-l srt-l--d" htmlFor="sthks115-0d" aria-hidden="true">{"Code"}</label>
                          </th>
                          <th scope="col">
                            <input className="srt-i srt-a1" type="radio" name="sthks115" id="sthks115-1a" aria-label="Sort by Description, lowest or A first" />
                            <input className="srt-i srt-d1" type="radio" name="sthks115" id="sthks115-1d" aria-label="Sort by Description, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="sthks115-1a">{"Description"}</label>
                            <label className="srt-l srt-l--d" htmlFor="sthks115-1d" aria-hidden="true">{"Description"}</label>
                          </th>
                          <th scope="col">{"Needs note"}</th>
                          <th scope="col">{"Status"}</th>
                          <th scope="col" />
                        </tr>
                      </thead>
                      <tbody>
                        <tr id="saved-disc1" style={{"--k0": "3", "--k1": "3"}}>
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <span className="hks-anchor" id="deact-disc1" />
                            <a className="fd-link" href="#hks-p13-disc1">
                              <strong>{"HKERROR"}</strong>
                            </a>
                          </td>
                          <td className="dt__td" data-label="Description" data-w2="">{"Housekeeping error"}</td>
                          <td className="dt__td nw" data-label="Needs note" data-w2="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p13-disc1" aria-label="Edit Housekeeping error">{"Edit"}</a>
                            {" "}
                            <a className="btn" href="#hks-deact-disc1" aria-label="Deactivate Housekeeping error">{"Deactivate"}</a>
                          </td>
                        </tr>
                        <tr id="saved-disc2" style={{"--k0": "2", "--k1": "2"}}>
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <span className="hks-anchor" id="deact-disc2" />
                            <a className="fd-link" href="#hks-p13-disc2">
                              <strong>{"FOERROR"}</strong>
                            </a>
                          </td>
                          <td className="dt__td" data-label="Description" data-w2="">{"Front office error"}</td>
                          <td className="dt__td nw" data-label="Needs note" data-w2="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p13-disc2" aria-label="Edit Front office error">{"Edit"}</a>
                            {" "}
                            <a className="btn" href="#hks-deact-disc2" aria-label="Deactivate Front office error">{"Deactivate"}</a>
                          </td>
                        </tr>
                        <tr id="saved-disc3" style={{"--k0": "4", "--k1": "4"}}>
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <span className="hks-anchor" id="deact-disc3" />
                            <a className="fd-link" href="#hks-p13-disc3">
                              <strong>{"SKIP"}</strong>
                            </a>
                          </td>
                          <td className="dt__td" data-label="Description" data-w2="">{"Skip"}</td>
                          <td className="dt__td nw" data-label="Needs note" data-w2="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p13-disc3" aria-label="Edit Skip">{"Edit"}</a>
                            {" "}
                            <a className="btn" href="#hks-deact-disc3" aria-label="Deactivate Skip">{"Deactivate"}</a>
                          </td>
                        </tr>
                        <tr id="saved-disc4" style={{"--k0": "5", "--k1": "5"}}>
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <span className="hks-anchor" id="deact-disc4" />
                            <a className="fd-link" href="#hks-p13-disc4">
                              <strong>{"SLEEPER"}</strong>
                            </a>
                          </td>
                          <td className="dt__td" data-label="Description" data-w2="">{"Sleeper"}</td>
                          <td className="dt__td nw" data-label="Needs note" data-w2="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p13-disc4" aria-label="Edit Sleeper">{"Edit"}</a>
                            {" "}
                            <a className="btn" href="#hks-deact-disc4" aria-label="Deactivate Sleeper">{"Deactivate"}</a>
                          </td>
                        </tr>
                        <tr id="saved-disc5" style={{"--k0": "1", "--k1": "1"}}>
                          <td className="dt__td nw" data-label="Code" data-w2="" data-t="">
                            <span className="hks-anchor" id="deact-disc5" />
                            <a className="fd-link" href="#hks-p13-disc5">
                              <strong>{"EXTRAPER"}</strong>
                            </a>
                          </td>
                          <td className="dt__td" data-label="Description" data-w2="">{"Extra person"}</td>
                          <td className="dt__td nw" data-label="Needs note" data-w2="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p13-disc5" aria-label="Edit Extra person">{"Edit"}</a>
                            {" "}
                            <a className="btn" href="#hks-deact-disc5" aria-label="Deactivate Extra person">{"Deactivate"}</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
              <div className="modal" id="hks-p13-status1" data-code="HKS-P13" role="dialog" aria-modal="true" aria-labelledby="hks-p13-status1-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#saved-status1" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p13-status1-t">{"Code: GUESTCMP"}</h2>
                      <p className="modal__desc">{"A code in the list “Status change reasons”."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="field">
                      <span className="field__label">{"List"}</span>
                      <div className="fd-display">{"Status change reasons"}</div>
                    </div>
                    <div className="field" data-fw="x">
                      <label className="field__label" htmlFor="hks-p13-status1-c">
                        {"Code "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-status1-c" type="text" name="code" maxLength="8" pattern={"[A-Za-z0-9]{2,8}"} required={true} defaultValue={"GUESTCMP"} />
                      <span className="field__hint">{"Unique in the list, 2–8 letters or numbers"}</span>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="hks-p13-status1-ds">
                        {"Description "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-status1-ds" type="text" name="description" maxLength="60" required={true} defaultValue={"Guest complaint"} />
                      <span className="field__hint">{"Shown in the drop-down lists"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="s">
                      <label className="sw" htmlFor="hks-p13-status1-n">
                        <input id="hks-p13-status1-n" type="checkbox" role="switch" name="needs_note" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Needs note"}
                      </label>
                      <span className="field__hint">{"An entry with this code must have a note"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="x">
                      <label className="sw" htmlFor="hks-p13-status1-a">
                        <input id="hks-p13-status1-a" type="checkbox" role="switch" name="active" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Active"}
                      </label>
                      <span className="field__hint">{"Inactive codes are hidden from new entries; old entries keep them"}</span>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer fd-muted">{"Written to the settings audit log (HKS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="hks-p13-status2" data-code="HKS-P13" role="dialog" aria-modal="true" aria-labelledby="hks-p13-status2-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#saved-status2" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p13-status2-t">{"Code: RECLEAN"}</h2>
                      <p className="modal__desc">{"A code in the list “Status change reasons”."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="field">
                      <span className="field__label">{"List"}</span>
                      <div className="fd-display">{"Status change reasons"}</div>
                    </div>
                    <div className="field" data-fw="x">
                      <label className="field__label" htmlFor="hks-p13-status2-c">
                        {"Code "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-status2-c" type="text" name="code" maxLength="8" pattern={"[A-Za-z0-9]{2,8}"} required={true} defaultValue={"RECLEAN"} />
                      <span className="field__hint">{"Unique in the list, 2–8 letters or numbers"}</span>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="hks-p13-status2-ds">
                        {"Description "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-status2-ds" type="text" name="description" maxLength="60" required={true} defaultValue={"Re-clean"} />
                      <span className="field__hint">{"Shown in the drop-down lists"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="s">
                      <label className="sw" htmlFor="hks-p13-status2-n">
                        <input id="hks-p13-status2-n" type="checkbox" role="switch" name="needs_note" />
                        <span className="sw__track" />
                        {"Needs note"}
                      </label>
                      <span className="field__hint">{"An entry with this code must have a note"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="x">
                      <label className="sw" htmlFor="hks-p13-status2-a">
                        <input id="hks-p13-status2-a" type="checkbox" role="switch" name="active" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Active"}
                      </label>
                      <span className="field__hint">{"Inactive codes are hidden from new entries; old entries keep them"}</span>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer fd-muted">{"Written to the settings audit log (HKS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="hks-p13-status3" data-code="HKS-P13" role="dialog" aria-modal="true" aria-labelledby="hks-p13-status3-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#saved-status3" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p13-status3-t">{"Code: WRONGST"}</h2>
                      <p className="modal__desc">{"A code in the list “Status change reasons”."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="field">
                      <span className="field__label">{"List"}</span>
                      <div className="fd-display">{"Status change reasons"}</div>
                    </div>
                    <div className="field" data-fw="x">
                      <label className="field__label" htmlFor="hks-p13-status3-c">
                        {"Code "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-status3-c" type="text" name="code" maxLength="8" pattern={"[A-Za-z0-9]{2,8}"} required={true} defaultValue={"WRONGST"} />
                      <span className="field__hint">{"Unique in the list, 2–8 letters or numbers"}</span>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="hks-p13-status3-ds">
                        {"Description "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-status3-ds" type="text" name="description" maxLength="60" required={true} defaultValue={"Wrong status"} />
                      <span className="field__hint">{"Shown in the drop-down lists"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="s">
                      <label className="sw" htmlFor="hks-p13-status3-n">
                        <input id="hks-p13-status3-n" type="checkbox" role="switch" name="needs_note" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Needs note"}
                      </label>
                      <span className="field__hint">{"An entry with this code must have a note"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="x">
                      <label className="sw" htmlFor="hks-p13-status3-a">
                        <input id="hks-p13-status3-a" type="checkbox" role="switch" name="active" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Active"}
                      </label>
                      <span className="field__hint">{"Inactive codes are hidden from new entries; old entries keep them"}</span>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer fd-muted">{"Written to the settings audit log (HKS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="hks-p13-status4" data-code="HKS-P13" role="dialog" aria-modal="true" aria-labelledby="hks-p13-status4-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#saved-status4" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p13-status4-t">{"Code: POWERCUT"}</h2>
                      <p className="modal__desc">{"A code in the list “Status change reasons”."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="field">
                      <span className="field__label">{"List"}</span>
                      <div className="fd-display">{"Status change reasons"}</div>
                    </div>
                    <div className="field" data-fw="x">
                      <label className="field__label" htmlFor="hks-p13-status4-c">
                        {"Code "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-status4-c" type="text" name="code" maxLength="8" pattern={"[A-Za-z0-9]{2,8}"} required={true} defaultValue={"POWERCUT"} />
                      <span className="field__hint">{"Unique in the list, 2–8 letters or numbers"}</span>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="hks-p13-status4-ds">
                        {"Description "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-status4-ds" type="text" name="description" maxLength="60" required={true} defaultValue={"Power cut"} />
                      <span className="field__hint">{"Shown in the drop-down lists"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="s">
                      <label className="sw" htmlFor="hks-p13-status4-n">
                        <input id="hks-p13-status4-n" type="checkbox" role="switch" name="needs_note" />
                        <span className="sw__track" />
                        {"Needs note"}
                      </label>
                      <span className="field__hint">{"An entry with this code must have a note"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="x">
                      <label className="sw" htmlFor="hks-p13-status4-a">
                        <input id="hks-p13-status4-a" type="checkbox" role="switch" name="active" />
                        <span className="sw__track" />
                        {"Active"}
                      </label>
                      <span className="field__hint">{"Inactive codes are hidden from new entries; old entries keep them"}</span>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer fd-muted">{"Written to the settings audit log (HKS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="hks-p13-status5" data-code="HKS-P13" role="dialog" aria-modal="true" aria-labelledby="hks-p13-status5-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#saved-status5" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p13-status5-t">{"Code: PESTSEEN"}</h2>
                      <p className="modal__desc">{"A code in the list “Status change reasons”."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="field">
                      <span className="field__label">{"List"}</span>
                      <div className="fd-display">{"Status change reasons"}</div>
                    </div>
                    <div className="field" data-fw="x">
                      <label className="field__label" htmlFor="hks-p13-status5-c">
                        {"Code "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-status5-c" type="text" name="code" maxLength="8" pattern={"[A-Za-z0-9]{2,8}"} required={true} defaultValue={"PESTSEEN"} />
                      <span className="field__hint">{"Unique in the list, 2–8 letters or numbers"}</span>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="hks-p13-status5-ds">
                        {"Description "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-status5-ds" type="text" name="description" maxLength="60" required={true} defaultValue={"Pest seen"} />
                      <span className="field__hint">{"Shown in the drop-down lists"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="s">
                      <label className="sw" htmlFor="hks-p13-status5-n">
                        <input id="hks-p13-status5-n" type="checkbox" role="switch" name="needs_note" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Needs note"}
                      </label>
                      <span className="field__hint">{"An entry with this code must have a note"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="x">
                      <label className="sw" htmlFor="hks-p13-status5-a">
                        <input id="hks-p13-status5-a" type="checkbox" role="switch" name="active" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Active"}
                      </label>
                      <span className="field__hint">{"Inactive codes are hidden from new entries; old entries keep them"}</span>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer fd-muted">{"Written to the settings audit log (HKS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="hks-p13-ooo1" data-code="HKS-P13" role="dialog" aria-modal="true" aria-labelledby="hks-p13-ooo1-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#saved-ooo1" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p13-ooo1-t">{"Code: REPAIR"}</h2>
                      <p className="modal__desc">{"A code in the list “Out of order / out of service reasons”."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="field">
                      <span className="field__label">{"List"}</span>
                      <div className="fd-display">{"Out of order / out of service reasons"}</div>
                    </div>
                    <div className="field" data-fw="x">
                      <label className="field__label" htmlFor="hks-p13-ooo1-c">
                        {"Code "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-ooo1-c" type="text" name="code" maxLength="8" pattern={"[A-Za-z0-9]{2,8}"} required={true} defaultValue={"REPAIR"} />
                      <span className="field__hint">{"Unique in the list, 2–8 letters or numbers"}</span>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="hks-p13-ooo1-ds">
                        {"Description "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-ooo1-ds" type="text" name="description" maxLength="60" required={true} defaultValue={"Repair"} />
                      <span className="field__hint">{"Shown in the drop-down lists"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="s">
                      <label className="sw" htmlFor="hks-p13-ooo1-n">
                        <input id="hks-p13-ooo1-n" type="checkbox" role="switch" name="needs_note" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Needs note"}
                      </label>
                      <span className="field__hint">{"An entry with this code must have a note"}</span>
                    </div>
                    <div className="field field--toggle">
                      <label className="sw" htmlFor="hks-p13-ooo1-d">
                        <input id="hks-p13-ooo1-d" type="checkbox" role="switch" name="default_ooo" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Default for OOO"}
                      </label>
                      <span className="field__hint">{"The reason that is pre-selected when a room is set out of order. Only one reason can be the default."}</span>
                    </div>
                    <div className="field field--toggle" data-fw="x">
                      <label className="sw" htmlFor="hks-p13-ooo1-a">
                        <input id="hks-p13-ooo1-a" type="checkbox" role="switch" name="active" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Active"}
                      </label>
                      <span className="field__hint">{"Inactive codes are hidden from new entries; old entries keep them"}</span>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer fd-muted">{"Written to the settings audit log (HKS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="hks-p13-ooo2" data-code="HKS-P13" role="dialog" aria-modal="true" aria-labelledby="hks-p13-ooo2-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#saved-ooo2" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p13-ooo2-t">{"Code: RENOVATE"}</h2>
                      <p className="modal__desc">{"A code in the list “Out of order / out of service reasons”."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="field">
                      <span className="field__label">{"List"}</span>
                      <div className="fd-display">{"Out of order / out of service reasons"}</div>
                    </div>
                    <div className="field" data-fw="x">
                      <label className="field__label" htmlFor="hks-p13-ooo2-c">
                        {"Code "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-ooo2-c" type="text" name="code" maxLength="8" pattern={"[A-Za-z0-9]{2,8}"} required={true} defaultValue={"RENOVATE"} />
                      <span className="field__hint">{"Unique in the list, 2–8 letters or numbers"}</span>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="hks-p13-ooo2-ds">
                        {"Description "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-ooo2-ds" type="text" name="description" maxLength="60" required={true} defaultValue={"Renovation"} />
                      <span className="field__hint">{"Shown in the drop-down lists"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="s">
                      <label className="sw" htmlFor="hks-p13-ooo2-n">
                        <input id="hks-p13-ooo2-n" type="checkbox" role="switch" name="needs_note" />
                        <span className="sw__track" />
                        {"Needs note"}
                      </label>
                      <span className="field__hint">{"An entry with this code must have a note"}</span>
                    </div>
                    <div className="field field--toggle">
                      <label className="sw" htmlFor="hks-p13-ooo2-d">
                        <input id="hks-p13-ooo2-d" type="checkbox" role="switch" name="default_ooo" />
                        <span className="sw__track" />
                        {"Default for OOO"}
                      </label>
                      <span className="field__hint">{"The reason that is pre-selected when a room is set out of order. Only one reason can be the default."}</span>
                    </div>
                    <div className="field field--toggle" data-fw="x">
                      <label className="sw" htmlFor="hks-p13-ooo2-a">
                        <input id="hks-p13-ooo2-a" type="checkbox" role="switch" name="active" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Active"}
                      </label>
                      <span className="field__hint">{"Inactive codes are hidden from new entries; old entries keep them"}</span>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer fd-muted">{"Written to the settings audit log (HKS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="hks-p13-ooo3" data-code="HKS-P13" role="dialog" aria-modal="true" aria-labelledby="hks-p13-ooo3-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#saved-ooo3" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p13-ooo3-t">{"Code: DEEPCLN"}</h2>
                      <p className="modal__desc">{"A code in the list “Out of order / out of service reasons”."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="field">
                      <span className="field__label">{"List"}</span>
                      <div className="fd-display">{"Out of order / out of service reasons"}</div>
                    </div>
                    <div className="field" data-fw="x">
                      <label className="field__label" htmlFor="hks-p13-ooo3-c">
                        {"Code "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-ooo3-c" type="text" name="code" maxLength="8" pattern={"[A-Za-z0-9]{2,8}"} required={true} defaultValue={"DEEPCLN"} />
                      <span className="field__hint">{"Unique in the list, 2–8 letters or numbers"}</span>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="hks-p13-ooo3-ds">
                        {"Description "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-ooo3-ds" type="text" name="description" maxLength="60" required={true} defaultValue={"Deep cleaning"} />
                      <span className="field__hint">{"Shown in the drop-down lists"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="s">
                      <label className="sw" htmlFor="hks-p13-ooo3-n">
                        <input id="hks-p13-ooo3-n" type="checkbox" role="switch" name="needs_note" />
                        <span className="sw__track" />
                        {"Needs note"}
                      </label>
                      <span className="field__hint">{"An entry with this code must have a note"}</span>
                    </div>
                    <div className="field field--toggle">
                      <label className="sw" htmlFor="hks-p13-ooo3-d">
                        <input id="hks-p13-ooo3-d" type="checkbox" role="switch" name="default_ooo" />
                        <span className="sw__track" />
                        {"Default for OOO"}
                      </label>
                      <span className="field__hint">{"The reason that is pre-selected when a room is set out of order. Only one reason can be the default."}</span>
                    </div>
                    <div className="field field--toggle" data-fw="x">
                      <label className="sw" htmlFor="hks-p13-ooo3-a">
                        <input id="hks-p13-ooo3-a" type="checkbox" role="switch" name="active" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Active"}
                      </label>
                      <span className="field__hint">{"Inactive codes are hidden from new entries; old entries keep them"}</span>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer fd-muted">{"Written to the settings audit log (HKS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="hks-p13-ooo4" data-code="HKS-P13" role="dialog" aria-modal="true" aria-labelledby="hks-p13-ooo4-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#saved-ooo4" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p13-ooo4-t">{"Code: PESTCTRL"}</h2>
                      <p className="modal__desc">{"A code in the list “Out of order / out of service reasons”."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="field">
                      <span className="field__label">{"List"}</span>
                      <div className="fd-display">{"Out of order / out of service reasons"}</div>
                    </div>
                    <div className="field" data-fw="x">
                      <label className="field__label" htmlFor="hks-p13-ooo4-c">
                        {"Code "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-ooo4-c" type="text" name="code" maxLength="8" pattern={"[A-Za-z0-9]{2,8}"} required={true} defaultValue={"PESTCTRL"} />
                      <span className="field__hint">{"Unique in the list, 2–8 letters or numbers"}</span>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="hks-p13-ooo4-ds">
                        {"Description "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-ooo4-ds" type="text" name="description" maxLength="60" required={true} defaultValue={"Pest control"} />
                      <span className="field__hint">{"Shown in the drop-down lists"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="s">
                      <label className="sw" htmlFor="hks-p13-ooo4-n">
                        <input id="hks-p13-ooo4-n" type="checkbox" role="switch" name="needs_note" />
                        <span className="sw__track" />
                        {"Needs note"}
                      </label>
                      <span className="field__hint">{"An entry with this code must have a note"}</span>
                    </div>
                    <div className="field field--toggle">
                      <label className="sw" htmlFor="hks-p13-ooo4-d">
                        <input id="hks-p13-ooo4-d" type="checkbox" role="switch" name="default_ooo" />
                        <span className="sw__track" />
                        {"Default for OOO"}
                      </label>
                      <span className="field__hint">{"The reason that is pre-selected when a room is set out of order. Only one reason can be the default."}</span>
                    </div>
                    <div className="field field--toggle" data-fw="x">
                      <label className="sw" htmlFor="hks-p13-ooo4-a">
                        <input id="hks-p13-ooo4-a" type="checkbox" role="switch" name="active" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Active"}
                      </label>
                      <span className="field__hint">{"Inactive codes are hidden from new entries; old entries keep them"}</span>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer fd-muted">{"Written to the settings audit log (HKS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="hks-p13-ooo5" data-code="HKS-P13" role="dialog" aria-modal="true" aria-labelledby="hks-p13-ooo5-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#saved-ooo5" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p13-ooo5-t">{"Code: PAINTING"}</h2>
                      <p className="modal__desc">{"A code in the list “Out of order / out of service reasons”."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="field">
                      <span className="field__label">{"List"}</span>
                      <div className="fd-display">{"Out of order / out of service reasons"}</div>
                    </div>
                    <div className="field" data-fw="x">
                      <label className="field__label" htmlFor="hks-p13-ooo5-c">
                        {"Code "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-ooo5-c" type="text" name="code" maxLength="8" pattern={"[A-Za-z0-9]{2,8}"} required={true} defaultValue={"PAINTING"} />
                      <span className="field__hint">{"Unique in the list, 2–8 letters or numbers"}</span>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="hks-p13-ooo5-ds">
                        {"Description "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-ooo5-ds" type="text" name="description" maxLength="60" required={true} defaultValue={"Painting"} />
                      <span className="field__hint">{"Shown in the drop-down lists"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="s">
                      <label className="sw" htmlFor="hks-p13-ooo5-n">
                        <input id="hks-p13-ooo5-n" type="checkbox" role="switch" name="needs_note" />
                        <span className="sw__track" />
                        {"Needs note"}
                      </label>
                      <span className="field__hint">{"An entry with this code must have a note"}</span>
                    </div>
                    <div className="field field--toggle">
                      <label className="sw" htmlFor="hks-p13-ooo5-d">
                        <input id="hks-p13-ooo5-d" type="checkbox" role="switch" name="default_ooo" />
                        <span className="sw__track" />
                        {"Default for OOO"}
                      </label>
                      <span className="field__hint">{"The reason that is pre-selected when a room is set out of order. Only one reason can be the default."}</span>
                    </div>
                    <div className="field field--toggle" data-fw="x">
                      <label className="sw" htmlFor="hks-p13-ooo5-a">
                        <input id="hks-p13-ooo5-a" type="checkbox" role="switch" name="active" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Active"}
                      </label>
                      <span className="field__hint">{"Inactive codes are hidden from new entries; old entries keep them"}</span>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer fd-muted">{"Written to the settings audit log (HKS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="hks-p13-ooo6" data-code="HKS-P13" role="dialog" aria-modal="true" aria-labelledby="hks-p13-ooo6-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#saved-ooo6" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p13-ooo6-t">{"Code: WATERLK"}</h2>
                      <p className="modal__desc">{"A code in the list “Out of order / out of service reasons”."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="field">
                      <span className="field__label">{"List"}</span>
                      <div className="fd-display">{"Out of order / out of service reasons"}</div>
                    </div>
                    <div className="field" data-fw="x">
                      <label className="field__label" htmlFor="hks-p13-ooo6-c">
                        {"Code "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-ooo6-c" type="text" name="code" maxLength="8" pattern={"[A-Za-z0-9]{2,8}"} required={true} defaultValue={"WATERLK"} />
                      <span className="field__hint">{"Unique in the list, 2–8 letters or numbers"}</span>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="hks-p13-ooo6-ds">
                        {"Description "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-ooo6-ds" type="text" name="description" maxLength="60" required={true} defaultValue={"Water leakage"} />
                      <span className="field__hint">{"Shown in the drop-down lists"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="s">
                      <label className="sw" htmlFor="hks-p13-ooo6-n">
                        <input id="hks-p13-ooo6-n" type="checkbox" role="switch" name="needs_note" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Needs note"}
                      </label>
                      <span className="field__hint">{"An entry with this code must have a note"}</span>
                    </div>
                    <div className="field field--toggle">
                      <label className="sw" htmlFor="hks-p13-ooo6-d">
                        <input id="hks-p13-ooo6-d" type="checkbox" role="switch" name="default_ooo" />
                        <span className="sw__track" />
                        {"Default for OOO"}
                      </label>
                      <span className="field__hint">{"The reason that is pre-selected when a room is set out of order. Only one reason can be the default."}</span>
                    </div>
                    <div className="field field--toggle" data-fw="x">
                      <label className="sw" htmlFor="hks-p13-ooo6-a">
                        <input id="hks-p13-ooo6-a" type="checkbox" role="switch" name="active" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Active"}
                      </label>
                      <span className="field__hint">{"Inactive codes are hidden from new entries; old entries keep them"}</span>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer fd-muted">{"Written to the settings audit log (HKS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="hks-p13-ooo7" data-code="HKS-P13" role="dialog" aria-modal="true" aria-labelledby="hks-p13-ooo7-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#saved-ooo7" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p13-ooo7-t">{"Code: ELECTRIC"}</h2>
                      <p className="modal__desc">{"A code in the list “Out of order / out of service reasons”."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="field">
                      <span className="field__label">{"List"}</span>
                      <div className="fd-display">{"Out of order / out of service reasons"}</div>
                    </div>
                    <div className="field" data-fw="x">
                      <label className="field__label" htmlFor="hks-p13-ooo7-c">
                        {"Code "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-ooo7-c" type="text" name="code" maxLength="8" pattern={"[A-Za-z0-9]{2,8}"} required={true} defaultValue={"ELECTRIC"} />
                      <span className="field__hint">{"Unique in the list, 2–8 letters or numbers"}</span>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="hks-p13-ooo7-ds">
                        {"Description "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-ooo7-ds" type="text" name="description" maxLength="60" required={true} defaultValue={"Electrical"} />
                      <span className="field__hint">{"Shown in the drop-down lists"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="s">
                      <label className="sw" htmlFor="hks-p13-ooo7-n">
                        <input id="hks-p13-ooo7-n" type="checkbox" role="switch" name="needs_note" />
                        <span className="sw__track" />
                        {"Needs note"}
                      </label>
                      <span className="field__hint">{"An entry with this code must have a note"}</span>
                    </div>
                    <div className="field field--toggle">
                      <label className="sw" htmlFor="hks-p13-ooo7-d">
                        <input id="hks-p13-ooo7-d" type="checkbox" role="switch" name="default_ooo" />
                        <span className="sw__track" />
                        {"Default for OOO"}
                      </label>
                      <span className="field__hint">{"The reason that is pre-selected when a room is set out of order. Only one reason can be the default."}</span>
                    </div>
                    <div className="field field--toggle" data-fw="x">
                      <label className="sw" htmlFor="hks-p13-ooo7-a">
                        <input id="hks-p13-ooo7-a" type="checkbox" role="switch" name="active" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Active"}
                      </label>
                      <span className="field__hint">{"Inactive codes are hidden from new entries; old entries keep them"}</span>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer fd-muted">{"Written to the settings audit log (HKS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="hks-p13-ooo8" data-code="HKS-P13" role="dialog" aria-modal="true" aria-labelledby="hks-p13-ooo8-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#saved-ooo8" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p13-ooo8-t">{"Code: SHOWRM"}</h2>
                      <p className="modal__desc">{"A code in the list “Out of order / out of service reasons”."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="field">
                      <span className="field__label">{"List"}</span>
                      <div className="fd-display">{"Out of order / out of service reasons"}</div>
                    </div>
                    <div className="field" data-fw="x">
                      <label className="field__label" htmlFor="hks-p13-ooo8-c">
                        {"Code "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-ooo8-c" type="text" name="code" maxLength="8" pattern={"[A-Za-z0-9]{2,8}"} required={true} defaultValue={"SHOWRM"} />
                      <span className="field__hint">{"Unique in the list, 2–8 letters or numbers"}</span>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="hks-p13-ooo8-ds">
                        {"Description "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-ooo8-ds" type="text" name="description" maxLength="60" required={true} defaultValue={"Show room"} />
                      <span className="field__hint">{"Shown in the drop-down lists"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="s">
                      <label className="sw" htmlFor="hks-p13-ooo8-n">
                        <input id="hks-p13-ooo8-n" type="checkbox" role="switch" name="needs_note" />
                        <span className="sw__track" />
                        {"Needs note"}
                      </label>
                      <span className="field__hint">{"An entry with this code must have a note"}</span>
                    </div>
                    <div className="field field--toggle">
                      <label className="sw" htmlFor="hks-p13-ooo8-d">
                        <input id="hks-p13-ooo8-d" type="checkbox" role="switch" name="default_ooo" />
                        <span className="sw__track" />
                        {"Default for OOO"}
                      </label>
                      <span className="field__hint">{"The reason that is pre-selected when a room is set out of order. Only one reason can be the default."}</span>
                    </div>
                    <div className="field field--toggle" data-fw="x">
                      <label className="sw" htmlFor="hks-p13-ooo8-a">
                        <input id="hks-p13-ooo8-a" type="checkbox" role="switch" name="active" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Active"}
                      </label>
                      <span className="field__hint">{"Inactive codes are hidden from new entries; old entries keep them"}</span>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer fd-muted">{"Written to the settings audit log (HKS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="hks-p13-ooo9" data-code="HKS-P13" role="dialog" aria-modal="true" aria-labelledby="hks-p13-ooo9-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#saved-ooo9" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p13-ooo9-t">{"Code: MGMTHOLD"}</h2>
                      <p className="modal__desc">{"A code in the list “Out of order / out of service reasons”."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="field">
                      <span className="field__label">{"List"}</span>
                      <div className="fd-display">{"Out of order / out of service reasons"}</div>
                    </div>
                    <div className="field" data-fw="x">
                      <label className="field__label" htmlFor="hks-p13-ooo9-c">
                        {"Code "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-ooo9-c" type="text" name="code" maxLength="8" pattern={"[A-Za-z0-9]{2,8}"} required={true} defaultValue={"MGMTHOLD"} />
                      <span className="field__hint">{"Unique in the list, 2–8 letters or numbers"}</span>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="hks-p13-ooo9-ds">
                        {"Description "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-ooo9-ds" type="text" name="description" maxLength="60" required={true} defaultValue={"Management hold"} />
                      <span className="field__hint">{"Shown in the drop-down lists"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="s">
                      <label className="sw" htmlFor="hks-p13-ooo9-n">
                        <input id="hks-p13-ooo9-n" type="checkbox" role="switch" name="needs_note" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Needs note"}
                      </label>
                      <span className="field__hint">{"An entry with this code must have a note"}</span>
                    </div>
                    <div className="field field--toggle">
                      <label className="sw" htmlFor="hks-p13-ooo9-d">
                        <input id="hks-p13-ooo9-d" type="checkbox" role="switch" name="default_ooo" />
                        <span className="sw__track" />
                        {"Default for OOO"}
                      </label>
                      <span className="field__hint">{"The reason that is pre-selected when a room is set out of order. Only one reason can be the default."}</span>
                    </div>
                    <div className="field field--toggle" data-fw="x">
                      <label className="sw" htmlFor="hks-p13-ooo9-a">
                        <input id="hks-p13-ooo9-a" type="checkbox" role="switch" name="active" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Active"}
                      </label>
                      <span className="field__hint">{"Inactive codes are hidden from new entries; old entries keep them"}</span>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer fd-muted">{"Written to the settings audit log (HKS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="hks-p13-cond1" data-code="HKS-P13" role="dialog" aria-modal="true" aria-labelledby="hks-p13-cond1-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#saved-cond1" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p13-cond1-t">{"Code: TWINKING"}</h2>
                      <p className="modal__desc">{"A code in the list “Room conditions”."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="field">
                      <span className="field__label">{"List"}</span>
                      <div className="fd-display">{"Room conditions"}</div>
                    </div>
                    <div className="field" data-fw="x">
                      <label className="field__label" htmlFor="hks-p13-cond1-c">
                        {"Code "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-cond1-c" type="text" name="code" maxLength="8" pattern={"[A-Za-z0-9]{2,8}"} required={true} defaultValue={"TWINKING"} />
                      <span className="field__hint">{"Unique in the list, 2–8 letters or numbers"}</span>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="hks-p13-cond1-ds">
                        {"Description "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-cond1-ds" type="text" name="description" maxLength="60" required={true} defaultValue={"Twin made as king"} />
                      <span className="field__hint">{"Shown in the drop-down lists"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="s">
                      <label className="sw" htmlFor="hks-p13-cond1-n">
                        <input id="hks-p13-cond1-n" type="checkbox" role="switch" name="needs_note" />
                        <span className="sw__track" />
                        {"Needs note"}
                      </label>
                      <span className="field__hint">{"An entry with this code must have a note"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="x">
                      <label className="sw" htmlFor="hks-p13-cond1-a">
                        <input id="hks-p13-cond1-a" type="checkbox" role="switch" name="active" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Active"}
                      </label>
                      <span className="field__hint">{"Inactive codes are hidden from new entries; old entries keep them"}</span>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer fd-muted">{"Written to the settings audit log (HKS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="hks-p13-cond2" data-code="HKS-P13" role="dialog" aria-modal="true" aria-labelledby="hks-p13-cond2-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#saved-cond2" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p13-cond2-t">{"Code: EXTRABED"}</h2>
                      <p className="modal__desc">{"A code in the list “Room conditions”."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="field">
                      <span className="field__label">{"List"}</span>
                      <div className="fd-display">{"Room conditions"}</div>
                    </div>
                    <div className="field" data-fw="x">
                      <label className="field__label" htmlFor="hks-p13-cond2-c">
                        {"Code "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-cond2-c" type="text" name="code" maxLength="8" pattern={"[A-Za-z0-9]{2,8}"} required={true} defaultValue={"EXTRABED"} />
                      <span className="field__hint">{"Unique in the list, 2–8 letters or numbers"}</span>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="hks-p13-cond2-ds">
                        {"Description "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-cond2-ds" type="text" name="description" maxLength="60" required={true} defaultValue={"Extra bed in room"} />
                      <span className="field__hint">{"Shown in the drop-down lists"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="s">
                      <label className="sw" htmlFor="hks-p13-cond2-n">
                        <input id="hks-p13-cond2-n" type="checkbox" role="switch" name="needs_note" />
                        <span className="sw__track" />
                        {"Needs note"}
                      </label>
                      <span className="field__hint">{"An entry with this code must have a note"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="x">
                      <label className="sw" htmlFor="hks-p13-cond2-a">
                        <input id="hks-p13-cond2-a" type="checkbox" role="switch" name="active" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Active"}
                      </label>
                      <span className="field__hint">{"Inactive codes are hidden from new entries; old entries keep them"}</span>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer fd-muted">{"Written to the settings audit log (HKS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="hks-p13-cond3" data-code="HKS-P13" role="dialog" aria-modal="true" aria-labelledby="hks-p13-cond3-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#saved-cond3" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p13-cond3-t">{"Code: BABYCOT"}</h2>
                      <p className="modal__desc">{"A code in the list “Room conditions”."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="field">
                      <span className="field__label">{"List"}</span>
                      <div className="fd-display">{"Room conditions"}</div>
                    </div>
                    <div className="field" data-fw="x">
                      <label className="field__label" htmlFor="hks-p13-cond3-c">
                        {"Code "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-cond3-c" type="text" name="code" maxLength="8" pattern={"[A-Za-z0-9]{2,8}"} required={true} defaultValue={"BABYCOT"} />
                      <span className="field__hint">{"Unique in the list, 2–8 letters or numbers"}</span>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="hks-p13-cond3-ds">
                        {"Description "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-cond3-ds" type="text" name="description" maxLength="60" required={true} defaultValue={"Baby cot in room"} />
                      <span className="field__hint">{"Shown in the drop-down lists"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="s">
                      <label className="sw" htmlFor="hks-p13-cond3-n">
                        <input id="hks-p13-cond3-n" type="checkbox" role="switch" name="needs_note" />
                        <span className="sw__track" />
                        {"Needs note"}
                      </label>
                      <span className="field__hint">{"An entry with this code must have a note"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="x">
                      <label className="sw" htmlFor="hks-p13-cond3-a">
                        <input id="hks-p13-cond3-a" type="checkbox" role="switch" name="active" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Active"}
                      </label>
                      <span className="field__hint">{"Inactive codes are hidden from new entries; old entries keep them"}</span>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer fd-muted">{"Written to the settings audit log (HKS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="hks-p13-cond4" data-code="HKS-P13" role="dialog" aria-modal="true" aria-labelledby="hks-p13-cond4-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#saved-cond4" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p13-cond4-t">{"Code: SHOWROOM"}</h2>
                      <p className="modal__desc">{"A code in the list “Room conditions”."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="field">
                      <span className="field__label">{"List"}</span>
                      <div className="fd-display">{"Room conditions"}</div>
                    </div>
                    <div className="field" data-fw="x">
                      <label className="field__label" htmlFor="hks-p13-cond4-c">
                        {"Code "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-cond4-c" type="text" name="code" maxLength="8" pattern={"[A-Za-z0-9]{2,8}"} required={true} defaultValue={"SHOWROOM"} />
                      <span className="field__hint">{"Unique in the list, 2–8 letters or numbers"}</span>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="hks-p13-cond4-ds">
                        {"Description "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-cond4-ds" type="text" name="description" maxLength="60" required={true} defaultValue={"Show room"} />
                      <span className="field__hint">{"Shown in the drop-down lists"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="s">
                      <label className="sw" htmlFor="hks-p13-cond4-n">
                        <input id="hks-p13-cond4-n" type="checkbox" role="switch" name="needs_note" />
                        <span className="sw__track" />
                        {"Needs note"}
                      </label>
                      <span className="field__hint">{"An entry with this code must have a note"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="x">
                      <label className="sw" htmlFor="hks-p13-cond4-a">
                        <input id="hks-p13-cond4-a" type="checkbox" role="switch" name="active" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Active"}
                      </label>
                      <span className="field__hint">{"Inactive codes are hidden from new entries; old entries keep them"}</span>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer fd-muted">{"Written to the settings audit log (HKS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="hks-p13-cond5" data-code="HKS-P13" role="dialog" aria-modal="true" aria-labelledby="hks-p13-cond5-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#saved-cond5" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p13-cond5-t">{"Code: SMELLPNT"}</h2>
                      <p className="modal__desc">{"A code in the list “Room conditions”."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="field">
                      <span className="field__label">{"List"}</span>
                      <div className="fd-display">{"Room conditions"}</div>
                    </div>
                    <div className="field" data-fw="x">
                      <label className="field__label" htmlFor="hks-p13-cond5-c">
                        {"Code "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-cond5-c" type="text" name="code" maxLength="8" pattern={"[A-Za-z0-9]{2,8}"} required={true} defaultValue={"SMELLPNT"} />
                      <span className="field__hint">{"Unique in the list, 2–8 letters or numbers"}</span>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="hks-p13-cond5-ds">
                        {"Description "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-cond5-ds" type="text" name="description" maxLength="60" required={true} defaultValue={"Smell / paint"} />
                      <span className="field__hint">{"Shown in the drop-down lists"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="s">
                      <label className="sw" htmlFor="hks-p13-cond5-n">
                        <input id="hks-p13-cond5-n" type="checkbox" role="switch" name="needs_note" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Needs note"}
                      </label>
                      <span className="field__hint">{"An entry with this code must have a note"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="x">
                      <label className="sw" htmlFor="hks-p13-cond5-a">
                        <input id="hks-p13-cond5-a" type="checkbox" role="switch" name="active" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Active"}
                      </label>
                      <span className="field__hint">{"Inactive codes are hidden from new entries; old entries keep them"}</span>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer fd-muted">{"Written to the settings audit log (HKS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="hks-p13-cond6" data-code="HKS-P13" role="dialog" aria-modal="true" aria-labelledby="hks-p13-cond6-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#saved-cond6" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p13-cond6-t">{"Code: UNDERINS"}</h2>
                      <p className="modal__desc">{"A code in the list “Room conditions”."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="field">
                      <span className="field__label">{"List"}</span>
                      <div className="fd-display">{"Room conditions"}</div>
                    </div>
                    <div className="field" data-fw="x">
                      <label className="field__label" htmlFor="hks-p13-cond6-c">
                        {"Code "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-cond6-c" type="text" name="code" maxLength="8" pattern={"[A-Za-z0-9]{2,8}"} required={true} defaultValue={"UNDERINS"} />
                      <span className="field__hint">{"Unique in the list, 2–8 letters or numbers"}</span>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="hks-p13-cond6-ds">
                        {"Description "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-cond6-ds" type="text" name="description" maxLength="60" required={true} defaultValue={"Under inspection"} />
                      <span className="field__hint">{"Shown in the drop-down lists"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="s">
                      <label className="sw" htmlFor="hks-p13-cond6-n">
                        <input id="hks-p13-cond6-n" type="checkbox" role="switch" name="needs_note" />
                        <span className="sw__track" />
                        {"Needs note"}
                      </label>
                      <span className="field__hint">{"An entry with this code must have a note"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="x">
                      <label className="sw" htmlFor="hks-p13-cond6-a">
                        <input id="hks-p13-cond6-a" type="checkbox" role="switch" name="active" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Active"}
                      </label>
                      <span className="field__hint">{"Inactive codes are hidden from new entries; old entries keep them"}</span>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer fd-muted">{"Written to the settings audit log (HKS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="hks-p13-refused1" data-code="HKS-P13" role="dialog" aria-modal="true" aria-labelledby="hks-p13-refused1-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#saved-refused1" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p13-refused1-t">{"Code: SLEEPING"}</h2>
                      <p className="modal__desc">{"A code in the list “Refused-service reasons”."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="field">
                      <span className="field__label">{"List"}</span>
                      <div className="fd-display">{"Refused-service reasons"}</div>
                    </div>
                    <div className="field" data-fw="x">
                      <label className="field__label" htmlFor="hks-p13-refused1-c">
                        {"Code "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-refused1-c" type="text" name="code" maxLength="8" pattern={"[A-Za-z0-9]{2,8}"} required={true} defaultValue={"SLEEPING"} />
                      <span className="field__hint">{"Unique in the list, 2–8 letters or numbers"}</span>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="hks-p13-refused1-ds">
                        {"Description "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-refused1-ds" type="text" name="description" maxLength="60" required={true} defaultValue={"Guest sleeping"} />
                      <span className="field__hint">{"Shown in the drop-down lists"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="s">
                      <label className="sw" htmlFor="hks-p13-refused1-n">
                        <input id="hks-p13-refused1-n" type="checkbox" role="switch" name="needs_note" />
                        <span className="sw__track" />
                        {"Needs note"}
                      </label>
                      <span className="field__hint">{"An entry with this code must have a note"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="x">
                      <label className="sw" htmlFor="hks-p13-refused1-a">
                        <input id="hks-p13-refused1-a" type="checkbox" role="switch" name="active" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Active"}
                      </label>
                      <span className="field__hint">{"Inactive codes are hidden from new entries; old entries keep them"}</span>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer fd-muted">{"Written to the settings audit log (HKS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="hks-p13-refused2" data-code="HKS-P13" role="dialog" aria-modal="true" aria-labelledby="hks-p13-refused2-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#saved-refused2" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p13-refused2-t">{"Code: WORKING"}</h2>
                      <p className="modal__desc">{"A code in the list “Refused-service reasons”."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="field">
                      <span className="field__label">{"List"}</span>
                      <div className="fd-display">{"Refused-service reasons"}</div>
                    </div>
                    <div className="field" data-fw="x">
                      <label className="field__label" htmlFor="hks-p13-refused2-c">
                        {"Code "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-refused2-c" type="text" name="code" maxLength="8" pattern={"[A-Za-z0-9]{2,8}"} required={true} defaultValue={"WORKING"} />
                      <span className="field__hint">{"Unique in the list, 2–8 letters or numbers"}</span>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="hks-p13-refused2-ds">
                        {"Description "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-refused2-ds" type="text" name="description" maxLength="60" required={true} defaultValue={"Guest working"} />
                      <span className="field__hint">{"Shown in the drop-down lists"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="s">
                      <label className="sw" htmlFor="hks-p13-refused2-n">
                        <input id="hks-p13-refused2-n" type="checkbox" role="switch" name="needs_note" />
                        <span className="sw__track" />
                        {"Needs note"}
                      </label>
                      <span className="field__hint">{"An entry with this code must have a note"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="x">
                      <label className="sw" htmlFor="hks-p13-refused2-a">
                        <input id="hks-p13-refused2-a" type="checkbox" role="switch" name="active" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Active"}
                      </label>
                      <span className="field__hint">{"Inactive codes are hidden from new entries; old entries keep them"}</span>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer fd-muted">{"Written to the settings audit log (HKS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="hks-p13-refused3" data-code="HKS-P13" role="dialog" aria-modal="true" aria-labelledby="hks-p13-refused3-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#saved-refused3" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p13-refused3-t">{"Code: UNWELL"}</h2>
                      <p className="modal__desc">{"A code in the list “Refused-service reasons”."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="field">
                      <span className="field__label">{"List"}</span>
                      <div className="fd-display">{"Refused-service reasons"}</div>
                    </div>
                    <div className="field" data-fw="x">
                      <label className="field__label" htmlFor="hks-p13-refused3-c">
                        {"Code "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-refused3-c" type="text" name="code" maxLength="8" pattern={"[A-Za-z0-9]{2,8}"} required={true} defaultValue={"UNWELL"} />
                      <span className="field__hint">{"Unique in the list, 2–8 letters or numbers"}</span>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="hks-p13-refused3-ds">
                        {"Description "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-refused3-ds" type="text" name="description" maxLength="60" required={true} defaultValue={"Guest unwell"} />
                      <span className="field__hint">{"Shown in the drop-down lists"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="s">
                      <label className="sw" htmlFor="hks-p13-refused3-n">
                        <input id="hks-p13-refused3-n" type="checkbox" role="switch" name="needs_note" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Needs note"}
                      </label>
                      <span className="field__hint">{"An entry with this code must have a note"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="x">
                      <label className="sw" htmlFor="hks-p13-refused3-a">
                        <input id="hks-p13-refused3-a" type="checkbox" role="switch" name="active" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Active"}
                      </label>
                      <span className="field__hint">{"Inactive codes are hidden from new entries; old entries keep them"}</span>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer fd-muted">{"Written to the settings audit log (HKS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="hks-p13-refused4" data-code="HKS-P13" role="dialog" aria-modal="true" aria-labelledby="hks-p13-refused4-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#saved-refused4" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p13-refused4-t">{"Code: PRIVACY"}</h2>
                      <p className="modal__desc">{"A code in the list “Refused-service reasons”."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="field">
                      <span className="field__label">{"List"}</span>
                      <div className="fd-display">{"Refused-service reasons"}</div>
                    </div>
                    <div className="field" data-fw="x">
                      <label className="field__label" htmlFor="hks-p13-refused4-c">
                        {"Code "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-refused4-c" type="text" name="code" maxLength="8" pattern={"[A-Za-z0-9]{2,8}"} required={true} defaultValue={"PRIVACY"} />
                      <span className="field__hint">{"Unique in the list, 2–8 letters or numbers"}</span>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="hks-p13-refused4-ds">
                        {"Description "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-refused4-ds" type="text" name="description" maxLength="60" required={true} defaultValue={"Privacy"} />
                      <span className="field__hint">{"Shown in the drop-down lists"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="s">
                      <label className="sw" htmlFor="hks-p13-refused4-n">
                        <input id="hks-p13-refused4-n" type="checkbox" role="switch" name="needs_note" />
                        <span className="sw__track" />
                        {"Needs note"}
                      </label>
                      <span className="field__hint">{"An entry with this code must have a note"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="x">
                      <label className="sw" htmlFor="hks-p13-refused4-a">
                        <input id="hks-p13-refused4-a" type="checkbox" role="switch" name="active" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Active"}
                      </label>
                      <span className="field__hint">{"Inactive codes are hidden from new entries; old entries keep them"}</span>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer fd-muted">{"Written to the settings audit log (HKS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="hks-p13-refused5" data-code="HKS-P13" role="dialog" aria-modal="true" aria-labelledby="hks-p13-refused5-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#saved-refused5" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p13-refused5-t">{"Code: NOREASON"}</h2>
                      <p className="modal__desc">{"A code in the list “Refused-service reasons”."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="field">
                      <span className="field__label">{"List"}</span>
                      <div className="fd-display">{"Refused-service reasons"}</div>
                    </div>
                    <div className="field" data-fw="x">
                      <label className="field__label" htmlFor="hks-p13-refused5-c">
                        {"Code "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-refused5-c" type="text" name="code" maxLength="8" pattern={"[A-Za-z0-9]{2,8}"} required={true} defaultValue={"NOREASON"} />
                      <span className="field__hint">{"Unique in the list, 2–8 letters or numbers"}</span>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="hks-p13-refused5-ds">
                        {"Description "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-refused5-ds" type="text" name="description" maxLength="60" required={true} defaultValue={"No reason given"} />
                      <span className="field__hint">{"Shown in the drop-down lists"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="s">
                      <label className="sw" htmlFor="hks-p13-refused5-n">
                        <input id="hks-p13-refused5-n" type="checkbox" role="switch" name="needs_note" />
                        <span className="sw__track" />
                        {"Needs note"}
                      </label>
                      <span className="field__hint">{"An entry with this code must have a note"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="x">
                      <label className="sw" htmlFor="hks-p13-refused5-a">
                        <input id="hks-p13-refused5-a" type="checkbox" role="switch" name="active" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Active"}
                      </label>
                      <span className="field__hint">{"Inactive codes are hidden from new entries; old entries keep them"}</span>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer fd-muted">{"Written to the settings audit log (HKS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="hks-p13-log1" data-code="HKS-P13" role="dialog" aria-modal="true" aria-labelledby="hks-p13-log1-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#saved-log1" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p13-log1-t">{"Code: INSTRUCT"}</h2>
                      <p className="modal__desc">{"A code in the list “Log categories”."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="field">
                      <span className="field__label">{"List"}</span>
                      <div className="fd-display">{"Log categories"}</div>
                    </div>
                    <div className="field" data-fw="x">
                      <label className="field__label" htmlFor="hks-p13-log1-c">
                        {"Code "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-log1-c" type="text" name="code" maxLength="8" pattern={"[A-Za-z0-9]{2,8}"} required={true} defaultValue={"INSTRUCT"} />
                      <span className="field__hint">{"Unique in the list, 2–8 letters or numbers"}</span>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="hks-p13-log1-ds">
                        {"Description "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-log1-ds" type="text" name="description" maxLength="60" required={true} defaultValue={"Instruction"} />
                      <span className="field__hint">{"Shown in the drop-down lists"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="s">
                      <label className="sw" htmlFor="hks-p13-log1-n">
                        <input id="hks-p13-log1-n" type="checkbox" role="switch" name="needs_note" />
                        <span className="sw__track" />
                        {"Needs note"}
                      </label>
                      <span className="field__hint">{"An entry with this code must have a note"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="x">
                      <label className="sw" htmlFor="hks-p13-log1-a">
                        <input id="hks-p13-log1-a" type="checkbox" role="switch" name="active" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Active"}
                      </label>
                      <span className="field__hint">{"Inactive codes are hidden from new entries; old entries keep them"}</span>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer fd-muted">{"Written to the settings audit log (HKS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="hks-p13-log2" data-code="HKS-P13" role="dialog" aria-modal="true" aria-labelledby="hks-p13-log2-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#saved-log2" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p13-log2-t">{"Code: INCIDENT"}</h2>
                      <p className="modal__desc">{"A code in the list “Log categories”."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="field">
                      <span className="field__label">{"List"}</span>
                      <div className="fd-display">{"Log categories"}</div>
                    </div>
                    <div className="field" data-fw="x">
                      <label className="field__label" htmlFor="hks-p13-log2-c">
                        {"Code "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-log2-c" type="text" name="code" maxLength="8" pattern={"[A-Za-z0-9]{2,8}"} required={true} defaultValue={"INCIDENT"} />
                      <span className="field__hint">{"Unique in the list, 2–8 letters or numbers"}</span>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="hks-p13-log2-ds">
                        {"Description "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-log2-ds" type="text" name="description" maxLength="60" required={true} defaultValue={"Incident"} />
                      <span className="field__hint">{"Shown in the drop-down lists"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="s">
                      <label className="sw" htmlFor="hks-p13-log2-n">
                        <input id="hks-p13-log2-n" type="checkbox" role="switch" name="needs_note" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Needs note"}
                      </label>
                      <span className="field__hint">{"An entry with this code must have a note"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="x">
                      <label className="sw" htmlFor="hks-p13-log2-a">
                        <input id="hks-p13-log2-a" type="checkbox" role="switch" name="active" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Active"}
                      </label>
                      <span className="field__hint">{"Inactive codes are hidden from new entries; old entries keep them"}</span>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer fd-muted">{"Written to the settings audit log (HKS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="hks-p13-log3" data-code="HKS-P13" role="dialog" aria-modal="true" aria-labelledby="hks-p13-log3-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#saved-log3" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p13-log3-t">{"Code: GUESTFB"}</h2>
                      <p className="modal__desc">{"A code in the list “Log categories”."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="field">
                      <span className="field__label">{"List"}</span>
                      <div className="fd-display">{"Log categories"}</div>
                    </div>
                    <div className="field" data-fw="x">
                      <label className="field__label" htmlFor="hks-p13-log3-c">
                        {"Code "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-log3-c" type="text" name="code" maxLength="8" pattern={"[A-Za-z0-9]{2,8}"} required={true} defaultValue={"GUESTFB"} />
                      <span className="field__hint">{"Unique in the list, 2–8 letters or numbers"}</span>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="hks-p13-log3-ds">
                        {"Description "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-log3-ds" type="text" name="description" maxLength="60" required={true} defaultValue={"Guest feedback"} />
                      <span className="field__hint">{"Shown in the drop-down lists"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="s">
                      <label className="sw" htmlFor="hks-p13-log3-n">
                        <input id="hks-p13-log3-n" type="checkbox" role="switch" name="needs_note" />
                        <span className="sw__track" />
                        {"Needs note"}
                      </label>
                      <span className="field__hint">{"An entry with this code must have a note"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="x">
                      <label className="sw" htmlFor="hks-p13-log3-a">
                        <input id="hks-p13-log3-a" type="checkbox" role="switch" name="active" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Active"}
                      </label>
                      <span className="field__hint">{"Inactive codes are hidden from new entries; old entries keep them"}</span>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer fd-muted">{"Written to the settings audit log (HKS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="hks-p13-log4" data-code="HKS-P13" role="dialog" aria-modal="true" aria-labelledby="hks-p13-log4-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#saved-log4" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p13-log4-t">{"Code: MAINT"}</h2>
                      <p className="modal__desc">{"A code in the list “Log categories”."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="field">
                      <span className="field__label">{"List"}</span>
                      <div className="fd-display">{"Log categories"}</div>
                    </div>
                    <div className="field" data-fw="x">
                      <label className="field__label" htmlFor="hks-p13-log4-c">
                        {"Code "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-log4-c" type="text" name="code" maxLength="8" pattern={"[A-Za-z0-9]{2,8}"} required={true} defaultValue={"MAINT"} />
                      <span className="field__hint">{"Unique in the list, 2–8 letters or numbers"}</span>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="hks-p13-log4-ds">
                        {"Description "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-log4-ds" type="text" name="description" maxLength="60" required={true} defaultValue={"Maintenance"} />
                      <span className="field__hint">{"Shown in the drop-down lists"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="s">
                      <label className="sw" htmlFor="hks-p13-log4-n">
                        <input id="hks-p13-log4-n" type="checkbox" role="switch" name="needs_note" />
                        <span className="sw__track" />
                        {"Needs note"}
                      </label>
                      <span className="field__hint">{"An entry with this code must have a note"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="x">
                      <label className="sw" htmlFor="hks-p13-log4-a">
                        <input id="hks-p13-log4-a" type="checkbox" role="switch" name="active" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Active"}
                      </label>
                      <span className="field__hint">{"Inactive codes are hidden from new entries; old entries keep them"}</span>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer fd-muted">{"Written to the settings audit log (HKS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="hks-p13-log5" data-code="HKS-P13" role="dialog" aria-modal="true" aria-labelledby="hks-p13-log5-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#saved-log5" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p13-log5-t">{"Code: STAFF"}</h2>
                      <p className="modal__desc">{"A code in the list “Log categories”."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="field">
                      <span className="field__label">{"List"}</span>
                      <div className="fd-display">{"Log categories"}</div>
                    </div>
                    <div className="field" data-fw="x">
                      <label className="field__label" htmlFor="hks-p13-log5-c">
                        {"Code "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-log5-c" type="text" name="code" maxLength="8" pattern={"[A-Za-z0-9]{2,8}"} required={true} defaultValue={"STAFF"} />
                      <span className="field__hint">{"Unique in the list, 2–8 letters or numbers"}</span>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="hks-p13-log5-ds">
                        {"Description "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-log5-ds" type="text" name="description" maxLength="60" required={true} defaultValue={"Staff"} />
                      <span className="field__hint">{"Shown in the drop-down lists"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="s">
                      <label className="sw" htmlFor="hks-p13-log5-n">
                        <input id="hks-p13-log5-n" type="checkbox" role="switch" name="needs_note" />
                        <span className="sw__track" />
                        {"Needs note"}
                      </label>
                      <span className="field__hint">{"An entry with this code must have a note"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="x">
                      <label className="sw" htmlFor="hks-p13-log5-a">
                        <input id="hks-p13-log5-a" type="checkbox" role="switch" name="active" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Active"}
                      </label>
                      <span className="field__hint">{"Inactive codes are hidden from new entries; old entries keep them"}</span>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer fd-muted">{"Written to the settings audit log (HKS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="hks-p13-log6" data-code="HKS-P13" role="dialog" aria-modal="true" aria-labelledby="hks-p13-log6-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#saved-log6" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p13-log6-t">{"Code: LOSTKEY"}</h2>
                      <p className="modal__desc">{"A code in the list “Log categories”."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="field">
                      <span className="field__label">{"List"}</span>
                      <div className="fd-display">{"Log categories"}</div>
                    </div>
                    <div className="field" data-fw="x">
                      <label className="field__label" htmlFor="hks-p13-log6-c">
                        {"Code "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-log6-c" type="text" name="code" maxLength="8" pattern={"[A-Za-z0-9]{2,8}"} required={true} defaultValue={"LOSTKEY"} />
                      <span className="field__hint">{"Unique in the list, 2–8 letters or numbers"}</span>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="hks-p13-log6-ds">
                        {"Description "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-log6-ds" type="text" name="description" maxLength="60" required={true} defaultValue={"Lost key"} />
                      <span className="field__hint">{"Shown in the drop-down lists"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="s">
                      <label className="sw" htmlFor="hks-p13-log6-n">
                        <input id="hks-p13-log6-n" type="checkbox" role="switch" name="needs_note" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Needs note"}
                      </label>
                      <span className="field__hint">{"An entry with this code must have a note"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="x">
                      <label className="sw" htmlFor="hks-p13-log6-a">
                        <input id="hks-p13-log6-a" type="checkbox" role="switch" name="active" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Active"}
                      </label>
                      <span className="field__hint">{"Inactive codes are hidden from new entries; old entries keep them"}</span>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer fd-muted">{"Written to the settings audit log (HKS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="hks-p13-disc1" data-code="HKS-P13" role="dialog" aria-modal="true" aria-labelledby="hks-p13-disc1-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#saved-disc1" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p13-disc1-t">{"Code: HKERROR"}</h2>
                      <p className="modal__desc">{"A code in the list “Discrepancy outcomes”."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="field">
                      <span className="field__label">{"List"}</span>
                      <div className="fd-display">{"Discrepancy outcomes"}</div>
                    </div>
                    <div className="field" data-fw="x">
                      <label className="field__label" htmlFor="hks-p13-disc1-c">
                        {"Code "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-disc1-c" type="text" name="code" maxLength="8" pattern={"[A-Za-z0-9]{2,8}"} required={true} defaultValue={"HKERROR"} />
                      <span className="field__hint">{"Unique in the list, 2–8 letters or numbers"}</span>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="hks-p13-disc1-ds">
                        {"Description "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-disc1-ds" type="text" name="description" maxLength="60" required={true} defaultValue={"Housekeeping error"} />
                      <span className="field__hint">{"Shown in the drop-down lists"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="s">
                      <label className="sw" htmlFor="hks-p13-disc1-n">
                        <input id="hks-p13-disc1-n" type="checkbox" role="switch" name="needs_note" />
                        <span className="sw__track" />
                        {"Needs note"}
                      </label>
                      <span className="field__hint">{"An entry with this code must have a note"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="x">
                      <label className="sw" htmlFor="hks-p13-disc1-a">
                        <input id="hks-p13-disc1-a" type="checkbox" role="switch" name="active" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Active"}
                      </label>
                      <span className="field__hint">{"Inactive codes are hidden from new entries; old entries keep them"}</span>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer fd-muted">{"Written to the settings audit log (HKS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="hks-p13-disc2" data-code="HKS-P13" role="dialog" aria-modal="true" aria-labelledby="hks-p13-disc2-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#saved-disc2" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p13-disc2-t">{"Code: FOERROR"}</h2>
                      <p className="modal__desc">{"A code in the list “Discrepancy outcomes”."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="field">
                      <span className="field__label">{"List"}</span>
                      <div className="fd-display">{"Discrepancy outcomes"}</div>
                    </div>
                    <div className="field" data-fw="x">
                      <label className="field__label" htmlFor="hks-p13-disc2-c">
                        {"Code "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-disc2-c" type="text" name="code" maxLength="8" pattern={"[A-Za-z0-9]{2,8}"} required={true} defaultValue={"FOERROR"} />
                      <span className="field__hint">{"Unique in the list, 2–8 letters or numbers"}</span>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="hks-p13-disc2-ds">
                        {"Description "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-disc2-ds" type="text" name="description" maxLength="60" required={true} defaultValue={"Front office error"} />
                      <span className="field__hint">{"Shown in the drop-down lists"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="s">
                      <label className="sw" htmlFor="hks-p13-disc2-n">
                        <input id="hks-p13-disc2-n" type="checkbox" role="switch" name="needs_note" />
                        <span className="sw__track" />
                        {"Needs note"}
                      </label>
                      <span className="field__hint">{"An entry with this code must have a note"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="x">
                      <label className="sw" htmlFor="hks-p13-disc2-a">
                        <input id="hks-p13-disc2-a" type="checkbox" role="switch" name="active" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Active"}
                      </label>
                      <span className="field__hint">{"Inactive codes are hidden from new entries; old entries keep them"}</span>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer fd-muted">{"Written to the settings audit log (HKS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="hks-p13-disc3" data-code="HKS-P13" role="dialog" aria-modal="true" aria-labelledby="hks-p13-disc3-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#saved-disc3" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p13-disc3-t">{"Code: SKIP"}</h2>
                      <p className="modal__desc">{"A code in the list “Discrepancy outcomes”."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="field">
                      <span className="field__label">{"List"}</span>
                      <div className="fd-display">{"Discrepancy outcomes"}</div>
                    </div>
                    <div className="field" data-fw="x">
                      <label className="field__label" htmlFor="hks-p13-disc3-c">
                        {"Code "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-disc3-c" type="text" name="code" maxLength="8" pattern={"[A-Za-z0-9]{2,8}"} required={true} defaultValue={"SKIP"} />
                      <span className="field__hint">{"Unique in the list, 2–8 letters or numbers"}</span>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="hks-p13-disc3-ds">
                        {"Description "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-disc3-ds" type="text" name="description" maxLength="60" required={true} defaultValue={"Skip"} />
                      <span className="field__hint">{"Shown in the drop-down lists"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="s">
                      <label className="sw" htmlFor="hks-p13-disc3-n">
                        <input id="hks-p13-disc3-n" type="checkbox" role="switch" name="needs_note" />
                        <span className="sw__track" />
                        {"Needs note"}
                      </label>
                      <span className="field__hint">{"An entry with this code must have a note"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="x">
                      <label className="sw" htmlFor="hks-p13-disc3-a">
                        <input id="hks-p13-disc3-a" type="checkbox" role="switch" name="active" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Active"}
                      </label>
                      <span className="field__hint">{"Inactive codes are hidden from new entries; old entries keep them"}</span>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer fd-muted">{"Written to the settings audit log (HKS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="hks-p13-disc4" data-code="HKS-P13" role="dialog" aria-modal="true" aria-labelledby="hks-p13-disc4-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#saved-disc4" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p13-disc4-t">{"Code: SLEEPER"}</h2>
                      <p className="modal__desc">{"A code in the list “Discrepancy outcomes”."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="field">
                      <span className="field__label">{"List"}</span>
                      <div className="fd-display">{"Discrepancy outcomes"}</div>
                    </div>
                    <div className="field" data-fw="x">
                      <label className="field__label" htmlFor="hks-p13-disc4-c">
                        {"Code "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-disc4-c" type="text" name="code" maxLength="8" pattern={"[A-Za-z0-9]{2,8}"} required={true} defaultValue={"SLEEPER"} />
                      <span className="field__hint">{"Unique in the list, 2–8 letters or numbers"}</span>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="hks-p13-disc4-ds">
                        {"Description "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-disc4-ds" type="text" name="description" maxLength="60" required={true} defaultValue={"Sleeper"} />
                      <span className="field__hint">{"Shown in the drop-down lists"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="s">
                      <label className="sw" htmlFor="hks-p13-disc4-n">
                        <input id="hks-p13-disc4-n" type="checkbox" role="switch" name="needs_note" />
                        <span className="sw__track" />
                        {"Needs note"}
                      </label>
                      <span className="field__hint">{"An entry with this code must have a note"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="x">
                      <label className="sw" htmlFor="hks-p13-disc4-a">
                        <input id="hks-p13-disc4-a" type="checkbox" role="switch" name="active" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Active"}
                      </label>
                      <span className="field__hint">{"Inactive codes are hidden from new entries; old entries keep them"}</span>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer fd-muted">{"Written to the settings audit log (HKS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="hks-p13-disc5" data-code="HKS-P13" role="dialog" aria-modal="true" aria-labelledby="hks-p13-disc5-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#saved-disc5" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p13-disc5-t">{"Code: EXTRAPER"}</h2>
                      <p className="modal__desc">{"A code in the list “Discrepancy outcomes”."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="field">
                      <span className="field__label">{"List"}</span>
                      <div className="fd-display">{"Discrepancy outcomes"}</div>
                    </div>
                    <div className="field" data-fw="x">
                      <label className="field__label" htmlFor="hks-p13-disc5-c">
                        {"Code "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-disc5-c" type="text" name="code" maxLength="8" pattern={"[A-Za-z0-9]{2,8}"} required={true} defaultValue={"EXTRAPER"} />
                      <span className="field__hint">{"Unique in the list, 2–8 letters or numbers"}</span>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="hks-p13-disc5-ds">
                        {"Description "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-disc5-ds" type="text" name="description" maxLength="60" required={true} defaultValue={"Extra person"} />
                      <span className="field__hint">{"Shown in the drop-down lists"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="s">
                      <label className="sw" htmlFor="hks-p13-disc5-n">
                        <input id="hks-p13-disc5-n" type="checkbox" role="switch" name="needs_note" />
                        <span className="sw__track" />
                        {"Needs note"}
                      </label>
                      <span className="field__hint">{"An entry with this code must have a note"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="x">
                      <label className="sw" htmlFor="hks-p13-disc5-a">
                        <input id="hks-p13-disc5-a" type="checkbox" role="switch" name="active" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Active"}
                      </label>
                      <span className="field__hint">{"Inactive codes are hidden from new entries; old entries keep them"}</span>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer fd-muted">{"Written to the settings audit log (HKS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="hks-p13-status-new" data-code="HKS-P13" role="dialog" aria-modal="true" aria-labelledby="hks-p13-status-new-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#added-status" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p13-status-new-t">{"Add code"}</h2>
                      <p className="modal__desc">{"A code in the list “Status change reasons”."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="field">
                      <span className="field__label">{"List"}</span>
                      <div className="fd-display">{"Status change reasons"}</div>
                    </div>
                    <div className="field" data-fw="x">
                      <label className="field__label" htmlFor="hks-p13-status-new-c">
                        {"Code "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-status-new-c" type="text" name="code" maxLength="8" pattern={"[A-Za-z0-9]{2,8}"} required={true} defaultValue={""} />
                      <span className="field__hint">{"Unique in the list, 2–8 letters or numbers"}</span>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="hks-p13-status-new-ds">
                        {"Description "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-status-new-ds" type="text" name="description" maxLength="60" required={true} defaultValue={""} />
                      <span className="field__hint">{"Shown in the drop-down lists"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="s">
                      <label className="sw" htmlFor="hks-p13-status-new-n">
                        <input id="hks-p13-status-new-n" type="checkbox" role="switch" name="needs_note" />
                        <span className="sw__track" />
                        {"Needs note"}
                      </label>
                      <span className="field__hint">{"An entry with this code must have a note"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="x">
                      <label className="sw" htmlFor="hks-p13-status-new-a">
                        <input id="hks-p13-status-new-a" type="checkbox" role="switch" name="active" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Active"}
                      </label>
                      <span className="field__hint">{"Inactive codes are hidden from new entries; old entries keep them"}</span>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer fd-muted">{"Written to the settings audit log (HKS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="hks-p13-ooo-new" data-code="HKS-P13" role="dialog" aria-modal="true" aria-labelledby="hks-p13-ooo-new-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#added-ooo" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p13-ooo-new-t">{"Add code"}</h2>
                      <p className="modal__desc">{"A code in the list “Out of order / out of service reasons”."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="field">
                      <span className="field__label">{"List"}</span>
                      <div className="fd-display">{"Out of order / out of service reasons"}</div>
                    </div>
                    <div className="field" data-fw="x">
                      <label className="field__label" htmlFor="hks-p13-ooo-new-c">
                        {"Code "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-ooo-new-c" type="text" name="code" maxLength="8" pattern={"[A-Za-z0-9]{2,8}"} required={true} defaultValue={""} />
                      <span className="field__hint">{"Unique in the list, 2–8 letters or numbers"}</span>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="hks-p13-ooo-new-ds">
                        {"Description "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-ooo-new-ds" type="text" name="description" maxLength="60" required={true} defaultValue={""} />
                      <span className="field__hint">{"Shown in the drop-down lists"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="s">
                      <label className="sw" htmlFor="hks-p13-ooo-new-n">
                        <input id="hks-p13-ooo-new-n" type="checkbox" role="switch" name="needs_note" />
                        <span className="sw__track" />
                        {"Needs note"}
                      </label>
                      <span className="field__hint">{"An entry with this code must have a note"}</span>
                    </div>
                    <div className="field field--toggle">
                      <label className="sw" htmlFor="hks-p13-ooo-new-d">
                        <input id="hks-p13-ooo-new-d" type="checkbox" role="switch" name="default_ooo" />
                        <span className="sw__track" />
                        {"Default for OOO"}
                      </label>
                      <span className="field__hint">{"The reason that is pre-selected when a room is set out of order. Only one reason can be the default."}</span>
                    </div>
                    <div className="field field--toggle" data-fw="x">
                      <label className="sw" htmlFor="hks-p13-ooo-new-a">
                        <input id="hks-p13-ooo-new-a" type="checkbox" role="switch" name="active" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Active"}
                      </label>
                      <span className="field__hint">{"Inactive codes are hidden from new entries; old entries keep them"}</span>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer fd-muted">{"Written to the settings audit log (HKS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="hks-p13-cond-new" data-code="HKS-P13" role="dialog" aria-modal="true" aria-labelledby="hks-p13-cond-new-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#added-cond" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p13-cond-new-t">{"Add code"}</h2>
                      <p className="modal__desc">{"A code in the list “Room conditions”."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="field">
                      <span className="field__label">{"List"}</span>
                      <div className="fd-display">{"Room conditions"}</div>
                    </div>
                    <div className="field" data-fw="x">
                      <label className="field__label" htmlFor="hks-p13-cond-new-c">
                        {"Code "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-cond-new-c" type="text" name="code" maxLength="8" pattern={"[A-Za-z0-9]{2,8}"} required={true} defaultValue={""} />
                      <span className="field__hint">{"Unique in the list, 2–8 letters or numbers"}</span>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="hks-p13-cond-new-ds">
                        {"Description "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-cond-new-ds" type="text" name="description" maxLength="60" required={true} defaultValue={""} />
                      <span className="field__hint">{"Shown in the drop-down lists"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="s">
                      <label className="sw" htmlFor="hks-p13-cond-new-n">
                        <input id="hks-p13-cond-new-n" type="checkbox" role="switch" name="needs_note" />
                        <span className="sw__track" />
                        {"Needs note"}
                      </label>
                      <span className="field__hint">{"An entry with this code must have a note"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="x">
                      <label className="sw" htmlFor="hks-p13-cond-new-a">
                        <input id="hks-p13-cond-new-a" type="checkbox" role="switch" name="active" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Active"}
                      </label>
                      <span className="field__hint">{"Inactive codes are hidden from new entries; old entries keep them"}</span>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer fd-muted">{"Written to the settings audit log (HKS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="hks-p13-refused-new" data-code="HKS-P13" role="dialog" aria-modal="true" aria-labelledby="hks-p13-refused-new-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#added-refused" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p13-refused-new-t">{"Add code"}</h2>
                      <p className="modal__desc">{"A code in the list “Refused-service reasons”."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="field">
                      <span className="field__label">{"List"}</span>
                      <div className="fd-display">{"Refused-service reasons"}</div>
                    </div>
                    <div className="field" data-fw="x">
                      <label className="field__label" htmlFor="hks-p13-refused-new-c">
                        {"Code "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-refused-new-c" type="text" name="code" maxLength="8" pattern={"[A-Za-z0-9]{2,8}"} required={true} defaultValue={""} />
                      <span className="field__hint">{"Unique in the list, 2–8 letters or numbers"}</span>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="hks-p13-refused-new-ds">
                        {"Description "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-refused-new-ds" type="text" name="description" maxLength="60" required={true} defaultValue={""} />
                      <span className="field__hint">{"Shown in the drop-down lists"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="s">
                      <label className="sw" htmlFor="hks-p13-refused-new-n">
                        <input id="hks-p13-refused-new-n" type="checkbox" role="switch" name="needs_note" />
                        <span className="sw__track" />
                        {"Needs note"}
                      </label>
                      <span className="field__hint">{"An entry with this code must have a note"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="x">
                      <label className="sw" htmlFor="hks-p13-refused-new-a">
                        <input id="hks-p13-refused-new-a" type="checkbox" role="switch" name="active" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Active"}
                      </label>
                      <span className="field__hint">{"Inactive codes are hidden from new entries; old entries keep them"}</span>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer fd-muted">{"Written to the settings audit log (HKS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="hks-p13-log-new" data-code="HKS-P13" role="dialog" aria-modal="true" aria-labelledby="hks-p13-log-new-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#added-log" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p13-log-new-t">{"Add code"}</h2>
                      <p className="modal__desc">{"A code in the list “Log categories”."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="field">
                      <span className="field__label">{"List"}</span>
                      <div className="fd-display">{"Log categories"}</div>
                    </div>
                    <div className="field" data-fw="x">
                      <label className="field__label" htmlFor="hks-p13-log-new-c">
                        {"Code "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-log-new-c" type="text" name="code" maxLength="8" pattern={"[A-Za-z0-9]{2,8}"} required={true} defaultValue={""} />
                      <span className="field__hint">{"Unique in the list, 2–8 letters or numbers"}</span>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="hks-p13-log-new-ds">
                        {"Description "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-log-new-ds" type="text" name="description" maxLength="60" required={true} defaultValue={""} />
                      <span className="field__hint">{"Shown in the drop-down lists"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="s">
                      <label className="sw" htmlFor="hks-p13-log-new-n">
                        <input id="hks-p13-log-new-n" type="checkbox" role="switch" name="needs_note" />
                        <span className="sw__track" />
                        {"Needs note"}
                      </label>
                      <span className="field__hint">{"An entry with this code must have a note"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="x">
                      <label className="sw" htmlFor="hks-p13-log-new-a">
                        <input id="hks-p13-log-new-a" type="checkbox" role="switch" name="active" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Active"}
                      </label>
                      <span className="field__hint">{"Inactive codes are hidden from new entries; old entries keep them"}</span>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer fd-muted">{"Written to the settings audit log (HKS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="hks-p13-disc-new" data-code="HKS-P13" role="dialog" aria-modal="true" aria-labelledby="hks-p13-disc-new-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#added-disc" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p13-disc-new-t">{"Add code"}</h2>
                      <p className="modal__desc">{"A code in the list “Discrepancy outcomes”."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="field">
                      <span className="field__label">{"List"}</span>
                      <div className="fd-display">{"Discrepancy outcomes"}</div>
                    </div>
                    <div className="field" data-fw="x">
                      <label className="field__label" htmlFor="hks-p13-disc-new-c">
                        {"Code "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-disc-new-c" type="text" name="code" maxLength="8" pattern={"[A-Za-z0-9]{2,8}"} required={true} defaultValue={""} />
                      <span className="field__hint">{"Unique in the list, 2–8 letters or numbers"}</span>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="hks-p13-disc-new-ds">
                        {"Description "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="hks-p13-disc-new-ds" type="text" name="description" maxLength="60" required={true} defaultValue={""} />
                      <span className="field__hint">{"Shown in the drop-down lists"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="s">
                      <label className="sw" htmlFor="hks-p13-disc-new-n">
                        <input id="hks-p13-disc-new-n" type="checkbox" role="switch" name="needs_note" />
                        <span className="sw__track" />
                        {"Needs note"}
                      </label>
                      <span className="field__hint">{"An entry with this code must have a note"}</span>
                    </div>
                    <div className="field field--toggle" data-fw="x">
                      <label className="sw" htmlFor="hks-p13-disc-new-a">
                        <input id="hks-p13-disc-new-a" type="checkbox" role="switch" name="active" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Active"}
                      </label>
                      <span className="field__hint">{"Inactive codes are hidden from new entries; old entries keep them"}</span>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer fd-muted">{"Written to the settings audit log (HKS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="hks-deact-status1" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="hks-deact-status1-t">
                <a className="modal__backdrop" href="#main" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#deact-status1" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-deact-status1-t">{"Deactivate Guest complaint?"}</h2>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"GUESTCMP will no longer be offered on new entries. Entries that already use it keep it, and you can switch it on again later."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="hks-deact-status2" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="hks-deact-status2-t">
                <a className="modal__backdrop" href="#main" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#deact-status2" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-deact-status2-t">{"Deactivate Re-clean?"}</h2>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"RECLEAN will no longer be offered on new entries. Entries that already use it keep it, and you can switch it on again later."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="hks-deact-status3" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="hks-deact-status3-t">
                <a className="modal__backdrop" href="#main" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#deact-status3" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-deact-status3-t">{"Deactivate Wrong status?"}</h2>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"WRONGST will no longer be offered on new entries. Entries that already use it keep it, and you can switch it on again later."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="hks-deact-status5" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="hks-deact-status5-t">
                <a className="modal__backdrop" href="#main" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#deact-status5" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-deact-status5-t">{"Deactivate Pest seen?"}</h2>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"PESTSEEN will no longer be offered on new entries. Entries that already use it keep it, and you can switch it on again later."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="hks-deact-ooo1" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="hks-deact-ooo1-t">
                <a className="modal__backdrop" href="#main" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#deact-ooo1" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-deact-ooo1-t">{"Deactivate Repair?"}</h2>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"REPAIR will no longer be offered on new entries. Entries that already use it keep it, and you can switch it on again later."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="hks-deact-ooo2" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="hks-deact-ooo2-t">
                <a className="modal__backdrop" href="#main" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#deact-ooo2" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-deact-ooo2-t">{"Deactivate Renovation?"}</h2>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"RENOVATE will no longer be offered on new entries. Entries that already use it keep it, and you can switch it on again later."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="hks-deact-ooo3" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="hks-deact-ooo3-t">
                <a className="modal__backdrop" href="#main" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#deact-ooo3" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-deact-ooo3-t">{"Deactivate Deep cleaning?"}</h2>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"DEEPCLN will no longer be offered on new entries. Entries that already use it keep it, and you can switch it on again later."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="hks-deact-ooo4" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="hks-deact-ooo4-t">
                <a className="modal__backdrop" href="#main" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#deact-ooo4" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-deact-ooo4-t">{"Deactivate Pest control?"}</h2>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"PESTCTRL will no longer be offered on new entries. Entries that already use it keep it, and you can switch it on again later."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="hks-deact-ooo5" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="hks-deact-ooo5-t">
                <a className="modal__backdrop" href="#main" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#deact-ooo5" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-deact-ooo5-t">{"Deactivate Painting?"}</h2>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"PAINTING will no longer be offered on new entries. Entries that already use it keep it, and you can switch it on again later."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="hks-deact-ooo6" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="hks-deact-ooo6-t">
                <a className="modal__backdrop" href="#main" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#deact-ooo6" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-deact-ooo6-t">{"Deactivate Water leakage?"}</h2>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"WATERLK will no longer be offered on new entries. Entries that already use it keep it, and you can switch it on again later."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="hks-deact-ooo7" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="hks-deact-ooo7-t">
                <a className="modal__backdrop" href="#main" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#deact-ooo7" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-deact-ooo7-t">{"Deactivate Electrical?"}</h2>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"ELECTRIC will no longer be offered on new entries. Entries that already use it keep it, and you can switch it on again later."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="hks-deact-ooo8" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="hks-deact-ooo8-t">
                <a className="modal__backdrop" href="#main" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#deact-ooo8" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-deact-ooo8-t">{"Deactivate Show room?"}</h2>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"SHOWRM will no longer be offered on new entries. Entries that already use it keep it, and you can switch it on again later."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="hks-deact-ooo9" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="hks-deact-ooo9-t">
                <a className="modal__backdrop" href="#main" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#deact-ooo9" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-deact-ooo9-t">{"Deactivate Management hold?"}</h2>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"MGMTHOLD will no longer be offered on new entries. Entries that already use it keep it, and you can switch it on again later."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="hks-deact-cond1" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="hks-deact-cond1-t">
                <a className="modal__backdrop" href="#main" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#deact-cond1" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-deact-cond1-t">{"Deactivate Twin made as king?"}</h2>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"TWINKING will no longer be offered on new entries. Entries that already use it keep it, and you can switch it on again later."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="hks-deact-cond2" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="hks-deact-cond2-t">
                <a className="modal__backdrop" href="#main" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#deact-cond2" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-deact-cond2-t">{"Deactivate Extra bed in room?"}</h2>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"EXTRABED will no longer be offered on new entries. Entries that already use it keep it, and you can switch it on again later."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="hks-deact-cond3" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="hks-deact-cond3-t">
                <a className="modal__backdrop" href="#main" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#deact-cond3" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-deact-cond3-t">{"Deactivate Baby cot in room?"}</h2>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"BABYCOT will no longer be offered on new entries. Entries that already use it keep it, and you can switch it on again later."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="hks-deact-cond4" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="hks-deact-cond4-t">
                <a className="modal__backdrop" href="#main" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#deact-cond4" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-deact-cond4-t">{"Deactivate Show room?"}</h2>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"SHOWROOM will no longer be offered on new entries. Entries that already use it keep it, and you can switch it on again later."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="hks-deact-cond5" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="hks-deact-cond5-t">
                <a className="modal__backdrop" href="#main" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#deact-cond5" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-deact-cond5-t">{"Deactivate Smell / paint?"}</h2>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"SMELLPNT will no longer be offered on new entries. Entries that already use it keep it, and you can switch it on again later."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="hks-deact-cond6" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="hks-deact-cond6-t">
                <a className="modal__backdrop" href="#main" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#deact-cond6" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-deact-cond6-t">{"Deactivate Under inspection?"}</h2>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"UNDERINS will no longer be offered on new entries. Entries that already use it keep it, and you can switch it on again later."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="hks-deact-refused1" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="hks-deact-refused1-t">
                <a className="modal__backdrop" href="#main" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#deact-refused1" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-deact-refused1-t">{"Deactivate Guest sleeping?"}</h2>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"SLEEPING will no longer be offered on new entries. Entries that already use it keep it, and you can switch it on again later."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="hks-deact-refused2" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="hks-deact-refused2-t">
                <a className="modal__backdrop" href="#main" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#deact-refused2" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-deact-refused2-t">{"Deactivate Guest working?"}</h2>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"WORKING will no longer be offered on new entries. Entries that already use it keep it, and you can switch it on again later."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="hks-deact-refused3" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="hks-deact-refused3-t">
                <a className="modal__backdrop" href="#main" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#deact-refused3" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-deact-refused3-t">{"Deactivate Guest unwell?"}</h2>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"UNWELL will no longer be offered on new entries. Entries that already use it keep it, and you can switch it on again later."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="hks-deact-refused4" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="hks-deact-refused4-t">
                <a className="modal__backdrop" href="#main" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#deact-refused4" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-deact-refused4-t">{"Deactivate Privacy?"}</h2>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"PRIVACY will no longer be offered on new entries. Entries that already use it keep it, and you can switch it on again later."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="hks-deact-refused5" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="hks-deact-refused5-t">
                <a className="modal__backdrop" href="#main" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#deact-refused5" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-deact-refused5-t">{"Deactivate No reason given?"}</h2>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"NOREASON will no longer be offered on new entries. Entries that already use it keep it, and you can switch it on again later."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="hks-deact-log1" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="hks-deact-log1-t">
                <a className="modal__backdrop" href="#main" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#deact-log1" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-deact-log1-t">{"Deactivate Instruction?"}</h2>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"INSTRUCT will no longer be offered on new entries. Entries that already use it keep it, and you can switch it on again later."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="hks-deact-log2" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="hks-deact-log2-t">
                <a className="modal__backdrop" href="#main" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#deact-log2" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-deact-log2-t">{"Deactivate Incident?"}</h2>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"INCIDENT will no longer be offered on new entries. Entries that already use it keep it, and you can switch it on again later."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="hks-deact-log3" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="hks-deact-log3-t">
                <a className="modal__backdrop" href="#main" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#deact-log3" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-deact-log3-t">{"Deactivate Guest feedback?"}</h2>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"GUESTFB will no longer be offered on new entries. Entries that already use it keep it, and you can switch it on again later."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="hks-deact-log4" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="hks-deact-log4-t">
                <a className="modal__backdrop" href="#main" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#deact-log4" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-deact-log4-t">{"Deactivate Maintenance?"}</h2>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"MAINT will no longer be offered on new entries. Entries that already use it keep it, and you can switch it on again later."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="hks-deact-log5" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="hks-deact-log5-t">
                <a className="modal__backdrop" href="#main" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#deact-log5" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-deact-log5-t">{"Deactivate Staff?"}</h2>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"STAFF will no longer be offered on new entries. Entries that already use it keep it, and you can switch it on again later."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="hks-deact-log6" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="hks-deact-log6-t">
                <a className="modal__backdrop" href="#main" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#deact-log6" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-deact-log6-t">{"Deactivate Lost key?"}</h2>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"LOSTKEY will no longer be offered on new entries. Entries that already use it keep it, and you can switch it on again later."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="hks-deact-disc1" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="hks-deact-disc1-t">
                <a className="modal__backdrop" href="#main" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#deact-disc1" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-deact-disc1-t">{"Deactivate Housekeeping error?"}</h2>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"HKERROR will no longer be offered on new entries. Entries that already use it keep it, and you can switch it on again later."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="hks-deact-disc2" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="hks-deact-disc2-t">
                <a className="modal__backdrop" href="#main" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#deact-disc2" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-deact-disc2-t">{"Deactivate Front office error?"}</h2>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"FOERROR will no longer be offered on new entries. Entries that already use it keep it, and you can switch it on again later."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="hks-deact-disc3" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="hks-deact-disc3-t">
                <a className="modal__backdrop" href="#main" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#deact-disc3" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-deact-disc3-t">{"Deactivate Skip?"}</h2>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"SKIP will no longer be offered on new entries. Entries that already use it keep it, and you can switch it on again later."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="hks-deact-disc4" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="hks-deact-disc4-t">
                <a className="modal__backdrop" href="#main" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#deact-disc4" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-deact-disc4-t">{"Deactivate Sleeper?"}</h2>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"SLEEPER will no longer be offered on new entries. Entries that already use it keep it, and you can switch it on again later."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="hks-deact-disc5" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="hks-deact-disc5-t">
                <a className="modal__backdrop" href="#main" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-11-housekeeping-codes/#deact-disc5" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-deact-disc5-t">{"Deactivate Extra person?"}</h2>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"EXTRAPER will no longer be offered on new entries. Entries that already use it keep it, and you can switch it on again later."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="fd-toast" id="t-status1" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Code GUESTCMP saved"}
                  <small>{"Guest complaint in “Status change reasons” · needs a note. Logged in the settings audit (HKS-X02). The row is highlighted."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-status2" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Code RECLEAN saved"}
                  <small>{"Re-clean in “Status change reasons”. Logged in the settings audit (HKS-X02). The row is highlighted."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-status3" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Code WRONGST saved"}
                  <small>{"Wrong status in “Status change reasons” · needs a note. Logged in the settings audit (HKS-X02). The row is highlighted."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-status4" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Code POWERCUT saved"}
                  <small>{"Power cut in “Status change reasons”. Logged in the settings audit (HKS-X02). The row is highlighted."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-status5" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Code PESTSEEN saved"}
                  <small>{"Pest seen in “Status change reasons” · needs a note. Logged in the settings audit (HKS-X02). The row is highlighted."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-ooo1" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Code REPAIR saved"}
                  <small>{"Repair in “Out of order / out of service reasons” · needs a note. Logged in the settings audit (HKS-X02). The row is highlighted."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-ooo2" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Code RENOVATE saved"}
                  <small>{"Renovation in “Out of order / out of service reasons”. Logged in the settings audit (HKS-X02). The row is highlighted."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-ooo3" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Code DEEPCLN saved"}
                  <small>{"Deep cleaning in “Out of order / out of service reasons”. Logged in the settings audit (HKS-X02). The row is highlighted."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-ooo4" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Code PESTCTRL saved"}
                  <small>{"Pest control in “Out of order / out of service reasons”. Logged in the settings audit (HKS-X02). The row is highlighted."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-ooo5" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Code PAINTING saved"}
                  <small>{"Painting in “Out of order / out of service reasons”. Logged in the settings audit (HKS-X02). The row is highlighted."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-ooo6" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Code WATERLK saved"}
                  <small>{"Water leakage in “Out of order / out of service reasons” · needs a note. Logged in the settings audit (HKS-X02). The row is highlighted."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-ooo7" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Code ELECTRIC saved"}
                  <small>{"Electrical in “Out of order / out of service reasons”. Logged in the settings audit (HKS-X02). The row is highlighted."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-ooo8" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Code SHOWRM saved"}
                  <small>{"Show room in “Out of order / out of service reasons”. Logged in the settings audit (HKS-X02). The row is highlighted."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-ooo9" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Code MGMTHOLD saved"}
                  <small>{"Management hold in “Out of order / out of service reasons” · needs a note. Logged in the settings audit (HKS-X02). The row is highlighted."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-cond1" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Code TWINKING saved"}
                  <small>{"Twin made as king in “Room conditions”. Logged in the settings audit (HKS-X02). The row is highlighted."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-cond2" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Code EXTRABED saved"}
                  <small>{"Extra bed in room in “Room conditions”. Logged in the settings audit (HKS-X02). The row is highlighted."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-cond3" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Code BABYCOT saved"}
                  <small>{"Baby cot in room in “Room conditions”. Logged in the settings audit (HKS-X02). The row is highlighted."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-cond4" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Code SHOWROOM saved"}
                  <small>{"Show room in “Room conditions”. Logged in the settings audit (HKS-X02). The row is highlighted."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-cond5" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Code SMELLPNT saved"}
                  <small>{"Smell / paint in “Room conditions” · needs a note. Logged in the settings audit (HKS-X02). The row is highlighted."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-cond6" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Code UNDERINS saved"}
                  <small>{"Under inspection in “Room conditions”. Logged in the settings audit (HKS-X02). The row is highlighted."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-refused1" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Code SLEEPING saved"}
                  <small>{"Guest sleeping in “Refused-service reasons”. Logged in the settings audit (HKS-X02). The row is highlighted."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-refused2" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Code WORKING saved"}
                  <small>{"Guest working in “Refused-service reasons”. Logged in the settings audit (HKS-X02). The row is highlighted."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-refused3" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Code UNWELL saved"}
                  <small>{"Guest unwell in “Refused-service reasons” · needs a note. Logged in the settings audit (HKS-X02). The row is highlighted."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-refused4" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Code PRIVACY saved"}
                  <small>{"Privacy in “Refused-service reasons”. Logged in the settings audit (HKS-X02). The row is highlighted."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-refused5" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Code NOREASON saved"}
                  <small>{"No reason given in “Refused-service reasons”. Logged in the settings audit (HKS-X02). The row is highlighted."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-log1" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Code INSTRUCT saved"}
                  <small>{"Instruction in “Log categories”. Logged in the settings audit (HKS-X02). The row is highlighted."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-log2" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Code INCIDENT saved"}
                  <small>{"Incident in “Log categories” · needs a note. Logged in the settings audit (HKS-X02). The row is highlighted."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-log3" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Code GUESTFB saved"}
                  <small>{"Guest feedback in “Log categories”. Logged in the settings audit (HKS-X02). The row is highlighted."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-log4" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Code MAINT saved"}
                  <small>{"Maintenance in “Log categories”. Logged in the settings audit (HKS-X02). The row is highlighted."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-log5" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Code STAFF saved"}
                  <small>{"Staff in “Log categories”. Logged in the settings audit (HKS-X02). The row is highlighted."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-log6" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Code LOSTKEY saved"}
                  <small>{"Lost key in “Log categories” · needs a note. Logged in the settings audit (HKS-X02). The row is highlighted."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-disc1" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Code HKERROR saved"}
                  <small>{"Housekeeping error in “Discrepancy outcomes”. Logged in the settings audit (HKS-X02). The row is highlighted."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-disc2" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Code FOERROR saved"}
                  <small>{"Front office error in “Discrepancy outcomes”. Logged in the settings audit (HKS-X02). The row is highlighted."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-disc3" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Code SKIP saved"}
                  <small>{"Skip in “Discrepancy outcomes”. Logged in the settings audit (HKS-X02). The row is highlighted."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-disc4" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Code SLEEPER saved"}
                  <small>{"Sleeper in “Discrepancy outcomes”. Logged in the settings audit (HKS-X02). The row is highlighted."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-disc5" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Code EXTRAPER saved"}
                  <small>{"Extra person in “Discrepancy outcomes”. Logged in the settings audit (HKS-X02). The row is highlighted."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast fd-toast--warn" id="t-deact-status1" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#info" />
                </svg>
                <div className="fd-toast__text">
                  {"Code GUESTCMP deactivated"}
                  <small>{"Guest complaint is hidden from new entries in “Status change reasons”. Entries that use it keep it. Logged in the settings audit (HKS-X02)."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast fd-toast--warn" id="t-deact-status2" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#info" />
                </svg>
                <div className="fd-toast__text">
                  {"Code RECLEAN deactivated"}
                  <small>{"Re-clean is hidden from new entries in “Status change reasons”. Entries that use it keep it. Logged in the settings audit (HKS-X02)."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast fd-toast--warn" id="t-deact-status3" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#info" />
                </svg>
                <div className="fd-toast__text">
                  {"Code WRONGST deactivated"}
                  <small>{"Wrong status is hidden from new entries in “Status change reasons”. Entries that use it keep it. Logged in the settings audit (HKS-X02)."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast fd-toast--warn" id="t-deact-status5" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#info" />
                </svg>
                <div className="fd-toast__text">
                  {"Code PESTSEEN deactivated"}
                  <small>{"Pest seen is hidden from new entries in “Status change reasons”. Entries that use it keep it. Logged in the settings audit (HKS-X02)."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast fd-toast--warn" id="t-deact-ooo1" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#info" />
                </svg>
                <div className="fd-toast__text">
                  {"Code REPAIR deactivated"}
                  <small>{"Repair is hidden from new entries in “Out of order / out of service reasons”. Entries that use it keep it. Logged in the settings audit (HKS-X02)."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast fd-toast--warn" id="t-deact-ooo2" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#info" />
                </svg>
                <div className="fd-toast__text">
                  {"Code RENOVATE deactivated"}
                  <small>{"Renovation is hidden from new entries in “Out of order / out of service reasons”. Entries that use it keep it. Logged in the settings audit (HKS-X02)."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast fd-toast--warn" id="t-deact-ooo3" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#info" />
                </svg>
                <div className="fd-toast__text">
                  {"Code DEEPCLN deactivated"}
                  <small>{"Deep cleaning is hidden from new entries in “Out of order / out of service reasons”. Entries that use it keep it. Logged in the settings audit (HKS-X02)."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast fd-toast--warn" id="t-deact-ooo4" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#info" />
                </svg>
                <div className="fd-toast__text">
                  {"Code PESTCTRL deactivated"}
                  <small>{"Pest control is hidden from new entries in “Out of order / out of service reasons”. Entries that use it keep it. Logged in the settings audit (HKS-X02)."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast fd-toast--warn" id="t-deact-ooo5" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#info" />
                </svg>
                <div className="fd-toast__text">
                  {"Code PAINTING deactivated"}
                  <small>{"Painting is hidden from new entries in “Out of order / out of service reasons”. Entries that use it keep it. Logged in the settings audit (HKS-X02)."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast fd-toast--warn" id="t-deact-ooo6" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#info" />
                </svg>
                <div className="fd-toast__text">
                  {"Code WATERLK deactivated"}
                  <small>{"Water leakage is hidden from new entries in “Out of order / out of service reasons”. Entries that use it keep it. Logged in the settings audit (HKS-X02)."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast fd-toast--warn" id="t-deact-ooo7" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#info" />
                </svg>
                <div className="fd-toast__text">
                  {"Code ELECTRIC deactivated"}
                  <small>{"Electrical is hidden from new entries in “Out of order / out of service reasons”. Entries that use it keep it. Logged in the settings audit (HKS-X02)."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast fd-toast--warn" id="t-deact-ooo8" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#info" />
                </svg>
                <div className="fd-toast__text">
                  {"Code SHOWRM deactivated"}
                  <small>{"Show room is hidden from new entries in “Out of order / out of service reasons”. Entries that use it keep it. Logged in the settings audit (HKS-X02)."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast fd-toast--warn" id="t-deact-ooo9" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#info" />
                </svg>
                <div className="fd-toast__text">
                  {"Code MGMTHOLD deactivated"}
                  <small>{"Management hold is hidden from new entries in “Out of order / out of service reasons”. Entries that use it keep it. Logged in the settings audit (HKS-X02)."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast fd-toast--warn" id="t-deact-cond1" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#info" />
                </svg>
                <div className="fd-toast__text">
                  {"Code TWINKING deactivated"}
                  <small>{"Twin made as king is hidden from new entries in “Room conditions”. Entries that use it keep it. Logged in the settings audit (HKS-X02)."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast fd-toast--warn" id="t-deact-cond2" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#info" />
                </svg>
                <div className="fd-toast__text">
                  {"Code EXTRABED deactivated"}
                  <small>{"Extra bed in room is hidden from new entries in “Room conditions”. Entries that use it keep it. Logged in the settings audit (HKS-X02)."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast fd-toast--warn" id="t-deact-cond3" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#info" />
                </svg>
                <div className="fd-toast__text">
                  {"Code BABYCOT deactivated"}
                  <small>{"Baby cot in room is hidden from new entries in “Room conditions”. Entries that use it keep it. Logged in the settings audit (HKS-X02)."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast fd-toast--warn" id="t-deact-cond4" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#info" />
                </svg>
                <div className="fd-toast__text">
                  {"Code SHOWROOM deactivated"}
                  <small>{"Show room is hidden from new entries in “Room conditions”. Entries that use it keep it. Logged in the settings audit (HKS-X02)."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast fd-toast--warn" id="t-deact-cond5" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#info" />
                </svg>
                <div className="fd-toast__text">
                  {"Code SMELLPNT deactivated"}
                  <small>{"Smell / paint is hidden from new entries in “Room conditions”. Entries that use it keep it. Logged in the settings audit (HKS-X02)."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast fd-toast--warn" id="t-deact-cond6" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#info" />
                </svg>
                <div className="fd-toast__text">
                  {"Code UNDERINS deactivated"}
                  <small>{"Under inspection is hidden from new entries in “Room conditions”. Entries that use it keep it. Logged in the settings audit (HKS-X02)."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast fd-toast--warn" id="t-deact-refused1" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#info" />
                </svg>
                <div className="fd-toast__text">
                  {"Code SLEEPING deactivated"}
                  <small>{"Guest sleeping is hidden from new entries in “Refused-service reasons”. Entries that use it keep it. Logged in the settings audit (HKS-X02)."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast fd-toast--warn" id="t-deact-refused2" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#info" />
                </svg>
                <div className="fd-toast__text">
                  {"Code WORKING deactivated"}
                  <small>{"Guest working is hidden from new entries in “Refused-service reasons”. Entries that use it keep it. Logged in the settings audit (HKS-X02)."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast fd-toast--warn" id="t-deact-refused3" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#info" />
                </svg>
                <div className="fd-toast__text">
                  {"Code UNWELL deactivated"}
                  <small>{"Guest unwell is hidden from new entries in “Refused-service reasons”. Entries that use it keep it. Logged in the settings audit (HKS-X02)."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast fd-toast--warn" id="t-deact-refused4" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#info" />
                </svg>
                <div className="fd-toast__text">
                  {"Code PRIVACY deactivated"}
                  <small>{"Privacy is hidden from new entries in “Refused-service reasons”. Entries that use it keep it. Logged in the settings audit (HKS-X02)."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast fd-toast--warn" id="t-deact-refused5" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#info" />
                </svg>
                <div className="fd-toast__text">
                  {"Code NOREASON deactivated"}
                  <small>{"No reason given is hidden from new entries in “Refused-service reasons”. Entries that use it keep it. Logged in the settings audit (HKS-X02)."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast fd-toast--warn" id="t-deact-log1" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#info" />
                </svg>
                <div className="fd-toast__text">
                  {"Code INSTRUCT deactivated"}
                  <small>{"Instruction is hidden from new entries in “Log categories”. Entries that use it keep it. Logged in the settings audit (HKS-X02)."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast fd-toast--warn" id="t-deact-log2" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#info" />
                </svg>
                <div className="fd-toast__text">
                  {"Code INCIDENT deactivated"}
                  <small>{"Incident is hidden from new entries in “Log categories”. Entries that use it keep it. Logged in the settings audit (HKS-X02)."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast fd-toast--warn" id="t-deact-log3" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#info" />
                </svg>
                <div className="fd-toast__text">
                  {"Code GUESTFB deactivated"}
                  <small>{"Guest feedback is hidden from new entries in “Log categories”. Entries that use it keep it. Logged in the settings audit (HKS-X02)."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast fd-toast--warn" id="t-deact-log4" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#info" />
                </svg>
                <div className="fd-toast__text">
                  {"Code MAINT deactivated"}
                  <small>{"Maintenance is hidden from new entries in “Log categories”. Entries that use it keep it. Logged in the settings audit (HKS-X02)."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast fd-toast--warn" id="t-deact-log5" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#info" />
                </svg>
                <div className="fd-toast__text">
                  {"Code STAFF deactivated"}
                  <small>{"Staff is hidden from new entries in “Log categories”. Entries that use it keep it. Logged in the settings audit (HKS-X02)."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast fd-toast--warn" id="t-deact-log6" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#info" />
                </svg>
                <div className="fd-toast__text">
                  {"Code LOSTKEY deactivated"}
                  <small>{"Lost key is hidden from new entries in “Log categories”. Entries that use it keep it. Logged in the settings audit (HKS-X02)."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast fd-toast--warn" id="t-deact-disc1" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#info" />
                </svg>
                <div className="fd-toast__text">
                  {"Code HKERROR deactivated"}
                  <small>{"Housekeeping error is hidden from new entries in “Discrepancy outcomes”. Entries that use it keep it. Logged in the settings audit (HKS-X02)."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast fd-toast--warn" id="t-deact-disc2" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#info" />
                </svg>
                <div className="fd-toast__text">
                  {"Code FOERROR deactivated"}
                  <small>{"Front office error is hidden from new entries in “Discrepancy outcomes”. Entries that use it keep it. Logged in the settings audit (HKS-X02)."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast fd-toast--warn" id="t-deact-disc3" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#info" />
                </svg>
                <div className="fd-toast__text">
                  {"Code SKIP deactivated"}
                  <small>{"Skip is hidden from new entries in “Discrepancy outcomes”. Entries that use it keep it. Logged in the settings audit (HKS-X02)."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast fd-toast--warn" id="t-deact-disc4" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#info" />
                </svg>
                <div className="fd-toast__text">
                  {"Code SLEEPER deactivated"}
                  <small>{"Sleeper is hidden from new entries in “Discrepancy outcomes”. Entries that use it keep it. Logged in the settings audit (HKS-X02)."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast fd-toast--warn" id="t-deact-disc5" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#info" />
                </svg>
                <div className="fd-toast__text">
                  {"Code EXTRAPER deactivated"}
                  <small>{"Extra person is hidden from new entries in “Discrepancy outcomes”. Entries that use it keep it. Logged in the settings audit (HKS-X02)."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="added-status" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Code added"}
                  <small>{"New code added to “Status change reasons” (sample: OTHER · Other reason). Logged in the settings audit (HKS-X02)."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="added-ooo" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Code added"}
                  <small>{"New code added to “Out of order / out of service reasons” (sample: OTHER · Other reason). Logged in the settings audit (HKS-X02)."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="added-cond" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Code added"}
                  <small>{"New code added to “Room conditions” (sample: OTHER · Other reason). Logged in the settings audit (HKS-X02)."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="added-refused" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Code added"}
                  <small>{"New code added to “Refused-service reasons” (sample: OTHER · Other reason). Logged in the settings audit (HKS-X02)."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="added-log" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Code added"}
                  <small>{"New code added to “Log categories” (sample: OTHER · Other reason). Logged in the settings audit (HKS-X02)."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="added-disc" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Code added"}
                  <small>{"New code added to “Discrepancy outcomes” (sample: OTHER · Other reason). Logged in the settings audit (HKS-X02)."}</small>
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
                  <span className="code-chip">{"HKS-11"}</span>
                </summary>
                <dl className="helpbox__body">
                  <dt>{"What it is for"}</dt>
                  <dd>{"The code lists used in housekeeping: status change reasons, out of order / out of service reasons, room conditions, refused-service reasons, log book categories and discrepancy outcomes."}</dd>
                  <dt>{"How it works"}</dt>
                  <dd>{"1. Choose a list above. 2. Press Add code, or Edit on a row. 3. To stop a code being used, press Deactivate – old entries keep it."}</dd>
                  <dt>{"Opened from"}</dt>
                  <dd>{"Housekeeping Setup Home (HKS-01) › Codes & keys"}</dd>
                  <dt>{"Leads to"}</dt>
                  <dd>{"HKS-P13 Code Form; Key Register (HKS-12) is the other half of Codes & keys"}</dd>
                  <dt>{"Sends to"}</dt>
                  <dd>{"Every drop-down list in Housekeeping (HK) and the phone app"}</dd>
                  <dt>{"Note"}</dt>
                  <dd>{"Static screen (HTML and CSS only): it shows the layout, fields and sample data. Saving and live data come when the backend is connected."}</dd>
                </dl>
              </details>
              <section className="card" data-flow="lists-used" style={{"marginTop": "16px"}}>
                <h2 className="s-card-title">{"Lists used on other screens"}</h2>
                <p className="field__hint">{"The dropdowns on those screens read these lists. Add or remove a value here."}</p>
                <div className="s-scroll">
                  <table className="dt__table dt--hug" data-nosort="" data-mc="">
                    <caption className="sr-only">{"Lists used on other screens"}</caption>
                    <thead>
                      <tr>
                        <th scope="col">{"List"}</th>
                        <th scope="col">{"Values"}</th>
                        <th scope="col">{"Used on"}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="dt__td" data-label="List" data-w2="" data-t="">{"Change of room status"}</td>
                        <td className="dt__td" data-label="Values" data-w2="">{"Power / water failure, Failed spot check, Guest used the room again, Wrong status entered, Front desk request"}</td>
                        <td className="dt__td" data-label="Used on" data-w2="">{"HK-02"}</td>
                      </tr>
                      <tr>
                        <td className="dt__td" data-label="List" data-w2="" data-t="">{"Move rooms between attendants"}</td>
                        <td className="dt__td" data-label="Values" data-w2="">{"Attendant absent, Workload balance, Guest refused service, Room taken out of order, Moved to evening shift, Attendant overloaded"}</td>
                        <td className="dt__td" data-label="Used on" data-w2="">{"HK-02, HK-06, HK-13"}</td>
                      </tr>
                      <tr>
                        <td className="dt__td" data-label="List" data-w2="" data-t="">{"Attendance on the day"}</td>
                        <td className="dt__td" data-label="Values" data-w2="">{"Did not report, Emergency leave, Sent home"}</td>
                        <td className="dt__td" data-label="Used on" data-w2="">{"HK-07"}</td>
                      </tr>
                      <tr>
                        <td className="dt__td" data-label="List" data-w2="" data-t="">{"Release without inspection"}</td>
                        <td className="dt__td" data-label="Values" data-w2="">{"Trusted senior attendant, Spot check already done today"}</td>
                        <td className="dt__td" data-label="Used on" data-w2="">{"HK-08"}</td>
                      </tr>
                      <tr>
                        <td className="dt__td" data-label="List" data-w2="" data-t="">{"Inspection problems"}</td>
                        <td className="dt__td" data-label="Values" data-w2="">{"Light not working, Tap dripping, Drawer broken, Wi-Fi weak, Chair broken, Bed squeaks, Wall stain, Tile cracked"}</td>
                        <td className="dt__td" data-label="Used on" data-w2="">{"HK-09"}</td>
                      </tr>
                      <tr>
                        <td className="dt__td" data-label="List" data-w2="" data-t="">{"Discrepancy action"}</td>
                        <td className="dt__td" data-label="Values" data-w2="">{"FO status corrected, HK status corrected, Charge posted for extra person, Security informed, Reported to manager"}</td>
                        <td className="dt__td" data-label="Used on" data-w2="">{"HK-10"}</td>
                      </tr>
                      <tr>
                        <td className="dt__td" data-label="List" data-w2="" data-t="">{"Close out of order early"}</td>
                        <td className="dt__td" data-label="Values" data-w2="">{"Work postponed, Work done without closing the room, Entered by mistake"}</td>
                        <td className="dt__td" data-label="Used on" data-w2="">{"HK-11"}</td>
                      </tr>
                      <tr>
                        <td className="dt__td" data-label="List" data-w2="" data-t="">{"Service flags"}</td>
                        <td className="dt__td" data-label="Values" data-w2="">{"Make-up room, Turndown required, Rush, Double lock, Do not disturb"}</td>
                        <td className="dt__td" data-label="Used on" data-w2="">{"HK-02, HK-12"}</td>
                      </tr>
                      <tr>
                        <td className="dt__td" data-label="List" data-w2="" data-t="">{"Clear a service flag"}</td>
                        <td className="dt__td" data-label="Values" data-w2="">{"Guest removed the sign, Guest asked for service, Guest checked out, Set by mistake"}</td>
                        <td className="dt__td" data-label="Used on" data-w2="">{"HK-12"}</td>
                      </tr>
                      <tr>
                        <td className="dt__td" data-label="List" data-w2="" data-t="">{"Source of a flag"}</td>
                        <td className="dt__td" data-label="Values" data-w2="">{"Guest call, Door sign, Attendant"}</td>
                        <td className="dt__td" data-label="Used on" data-w2="">{"HK-12"}</td>
                      </tr>
                      <tr>
                        <td className="dt__td" data-label="List" data-w2="" data-t="">{"Staff agencies"}</td>
                        <td className="dt__td" data-label="Values" data-w2="">{"Cochin Hospitality Staffing, Cross-trained – Laundry, Cross-trained – F&B"}</td>
                        <td className="dt__td" data-label="Used on" data-w2="">{"HK-07"}</td>
                      </tr>
                      <tr>
                        <td className="dt__td" data-label="List" data-w2="" data-t="">{"Other choices"}</td>
                        <td className="dt__td" data-label="Values" data-w2="">{"Key type: Section key (HKS-12) · Discrepancy type: Person count, Occupied vs vacant, Skip / sleep · Deep-clean job: Minibar clean"}</td>
                        <td className="dt__td" data-label="Used on" data-w2="">{"HK-10, HK-16, HK-22, HK-R04"}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    </ScreenShell>
  );
}
