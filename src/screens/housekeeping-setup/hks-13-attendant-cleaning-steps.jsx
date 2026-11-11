// GENERATED from public/housekeeping-setup/hks-13-attendant-cleaning-steps/index.html by scripts/convert_legacy.py.
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
    "href": "/css/aviv/choices.css",
    "media": null
  },
  {
    "href": "/housekeeping-setup/hks-13-attendant-cleaning-steps/hks-13-attendant-cleaning-steps.css",
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

export default function HousekeepingSetupHks13AttendantCleaningSteps() {
  return (
    <ScreenShell title="Attendant Cleaning Steps" sheets={SHEETS} inlineCss={INLINE_CSS}>
      <div data-screen="HKS-13" data-code="HKS-13" data-static="1" className="legacy-body">
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
            <main className="app__content" id="main" data-code="HKS-13" tabIndex="-1">
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
                        <span aria-current="page">{"Cleaning steps"}</span>
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="page-header__row">
                  <div className="page-header__text">
                    <h1 className="page-header__title">{"Attendant Cleaning Steps"}</h1>
                  </div>
                  <span className="code-chip" title="Screen code">{"HKS-13"}</span>
                  <div className="page-header__filters">
                    <div className="hctl">
                      <div className="hsearch">
                        <input className="hsearch__input" id="hks13-s" type="search" name="q" placeholder="Search step text" aria-label="Search step text" autoComplete="off" />
                        <label className="hsearch__ic" htmlFor="hks13-s" title="Search">
                          <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#search" />
                          </svg>
                          <span className="sr-only">{"Search"}</span>
                        </label>
                      </div>
                      <label className="hfilter__btn" htmlFor="hks13-f" title="Show or hide the filters">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#filter" />
                        </svg>
                        <span>{"Filter"}</span>
                        <i className="hfilter__dot" aria-hidden="true" />
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </label>
                      <input className="hfilter__tg" type="checkbox" id="hks13-f" aria-label="Show filters" />
                      <form className="hfilter" method="get" role="search" aria-label="Filters">
                        <span className="hfilter__hic" title="Filters">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#filter" />
                          </svg>
                        </span>
                        <div className="hfilter__grid">
                          <label className="hf-f">
                            <span className="hf-f__l">{"Task type"}</span>
                            <select className="hf-f__c">
                              <option>{"All task types"}</option>
                              <option>{"DEP"}</option>
                              <option>{"ARR"}</option>
                              <option>{"TCH"}</option>
                              <option>{"STY"}</option>
                              <option>{"LCH"}</option>
                              <option>{"DCL"}</option>
                              <option>{"TDN"}</option>
                            </select>
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </label>
                          <label className="hf-f">
                            <span className="hf-f__l">{"Mandatory tick"}</span>
                            <select className="hf-f__c">
                              <option>{"All"}</option>
                              <option>{"Yes"}</option>
                              <option>{"No"}</option>
                            </select>
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </label>
                          <label className="hf-f">
                            <span className="hf-f__l">{"Count entry"}</span>
                            <select className="hf-f__c">
                              <option>{"All"}</option>
                              <option>{"Asks for a count"}</option>
                              <option>{"No count"}</option>
                            </select>
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </label>
                          <label className="hf-f">
                            <span className="hf-f__l">{"Photo"}</span>
                            <select className="hf-f__c">
                              <option>{"All"}</option>
                              <option>{"None"}</option>
                              <option>{"Optional"}</option>
                              <option>{"Required"}</option>
                            </select>
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </label>
                        </div>
                        <div className="hfilter__acts">
                          <button className="hfilter__clear" type="reset" title="Clear all filters">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#x" />
                            </svg>
                            <span>{"Clear"}</span>
                          </button>
                          <label className="hfilter__done" htmlFor="hks13-f">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check" />
                            </svg>
                            {"Done"}
                          </label>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="page-header__actions" />
                </div>
              </header>
              <div className="dd-m no-print">
                <button className="dd-btn" type="button" popoverTarget="dd-leaning-steps-index-html-1">{"Task types"}</button>
                <div className="dd-list" popover="" id="dd-leaning-steps-index-html-1">
                  <a className="hks-view hks-view--dep" href="#list-dep">
                    {"DEP · Departure clean "}
                    <span className="hks-view__n">{"14"}</span>
                  </a>
                  <a className="hks-view hks-view--arr" href="#list-arr">
                    {"ARR · Arrival check "}
                    <span className="hks-view__n">{"6"}</span>
                  </a>
                  <a className="hks-view hks-view--tch" href="#list-tch">
                    {"TCH · Touch-up "}
                    <span className="hks-view__n">{"4"}</span>
                  </a>
                  <a className="hks-view hks-view--sty" href="#list-sty">
                    {"STY · Stayover "}
                    <span className="hks-view__n">{"9"}</span>
                  </a>
                  <a className="hks-view hks-view--lch" href="#list-lch">
                    {"LCH · Linen change "}
                    <span className="hks-view__n">{"4"}</span>
                  </a>
                  <a className="hks-view hks-view--dcl" href="#list-dcl">
                    {"DCL · Deep clean "}
                    <span className="hks-view__n">{"5"}</span>
                  </a>
                  <a className="hks-view hks-view--tdn" href="#list-tdn">
                    {"TDN · Turndown "}
                    <span className="hks-view__n">{"4"}</span>
                  </a>
                  <span className="hks-views__sum fd-muted">{"46 steps · 17 mandatory · 10 ask for a count (calculated)"}</span>
                </div>
              </div>
              <div className="hks-views" role="navigation" aria-label="Task types">
                <a className="hks-view hks-view--dep" href="#list-dep">
                  {"DEP · Departure clean "}
                  <span className="hks-view__n">{"14"}</span>
                </a>
                <a className="hks-view hks-view--arr" href="#list-arr">
                  {"ARR · Arrival check "}
                  <span className="hks-view__n">{"6"}</span>
                </a>
                <a className="hks-view hks-view--tch" href="#list-tch">
                  {"TCH · Touch-up "}
                  <span className="hks-view__n">{"4"}</span>
                </a>
                <a className="hks-view hks-view--sty" href="#list-sty">
                  {"STY · Stayover "}
                  <span className="hks-view__n">{"9"}</span>
                </a>
                <a className="hks-view hks-view--lch" href="#list-lch">
                  {"LCH · Linen change "}
                  <span className="hks-view__n">{"4"}</span>
                </a>
                <a className="hks-view hks-view--dcl" href="#list-dcl">
                  {"DCL · Deep clean "}
                  <span className="hks-view__n">{"5"}</span>
                </a>
                <a className="hks-view hks-view--tdn" href="#list-tdn">
                  {"TDN · Turndown "}
                  <span className="hks-view__n">{"4"}</span>
                </a>
                <span className="hks-views__sum fd-muted">{"46 steps · 17 mandatory · 10 ask for a count (calculated)"}</span>
              </div>
              <section className="hks-list" id="list-dep" data-code="HKS-13-DEP" aria-labelledby="list-dep-t">
                <div className="row row--between fd-tabbar">
                  <div>
                    <h2 className="s-card-title" id="list-dep-t">{"DEP · Departure clean"}</h2>
                    <span className="fd-muted">{"14 steps · 5 must be ticked before the task can be finished"}</span>
                  </div>
                  <div className="hks-bar-act">
                    <a className="btn" href="#hks-reorder">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#arrow-up-down" />
                      </svg>
                      {"Re-order"}
                    </a>
                    <a className="btn btn--primary" href="#hks-p15-dep-new" data-leads-to="HKS-P15">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#plus" />
                      </svg>
                      {"Add step"}
                    </a>
                  </div>
                </div>
                <div className="pgw">
                  <div className="s-scroll">
                    <table className="srt dt__table dt--hug" data-code="HKS-13-table-DEP" style={{"--srt-cols": "auto auto auto auto auto max-content"}} data-mc="">
                      <caption className="sr-only">{"Cleaning steps of Departure clean"}</caption>
                      <thead>
                        <tr>
                          <th scope="col" className="dt__th--right">
                            <input className="srt-i srt-a0" type="radio" name="sthks130" id="sthks130-0a" aria-label="Sort by Step, lowest or A first" />
                            <input className="srt-i srt-d0" type="radio" name="sthks130" id="sthks130-0d" aria-label="Sort by Step, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="sthks130-0a">{"Step"}</label>
                            <label className="srt-l srt-l--d" htmlFor="sthks130-0d" aria-hidden="true">{"Step"}</label>
                          </th>
                          <th scope="col">
                            <input className="srt-i srt-a1" type="radio" name="sthks130" id="sthks130-1a" aria-label="Sort by Instruction on the phone, lowest or A first" />
                            <input className="srt-i srt-d1" type="radio" name="sthks130" id="sthks130-1d" aria-label="Sort by Instruction on the phone, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="sthks130-1a">{"Instruction on the phone"}</label>
                            <label className="srt-l srt-l--d" htmlFor="sthks130-1d" aria-hidden="true">{"Instruction on the phone"}</label>
                          </th>
                          <th scope="col">
                            <input className="srt-i srt-a2" type="radio" name="sthks130" id="sthks130-2a" aria-label="Sort by Mandatory tick, lowest or A first" />
                            <input className="srt-i srt-d2" type="radio" name="sthks130" id="sthks130-2d" aria-label="Sort by Mandatory tick, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="sthks130-2a">{"Mandatory tick"}</label>
                            <label className="srt-l srt-l--d" htmlFor="sthks130-2d" aria-hidden="true">{"Mandatory tick"}</label>
                          </th>
                          <th scope="col">
                            <input className="srt-i srt-a3" type="radio" name="sthks130" id="sthks130-3a" aria-label="Sort by Count entry, lowest or A first" />
                            <input className="srt-i srt-d3" type="radio" name="sthks130" id="sthks130-3d" aria-label="Sort by Count entry, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="sthks130-3a">{"Count entry"}</label>
                            <label className="srt-l srt-l--d" htmlFor="sthks130-3d" aria-hidden="true">{"Count entry"}</label>
                          </th>
                          <th scope="col">
                            <input className="srt-i srt-a4" type="radio" name="sthks130" id="sthks130-4a" aria-label="Sort by Photo, lowest or A first" />
                            <input className="srt-i srt-d4" type="radio" name="sthks130" id="sthks130-4d" aria-label="Sort by Photo, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="sthks130-4a">{"Photo"}</label>
                            <label className="srt-l srt-l--d" htmlFor="sthks130-4d" aria-hidden="true">{"Photo"}</label>
                          </th>
                          <th scope="col" />
                        </tr>
                      </thead>
                      <tbody>
                        <tr id="saved-dep1" style={{"--k0": "1", "--k1": "6", "--k2": "2", "--k3": "4", "--k4": "1"}}>
                          <td className="dt__td dt__td--right num nw" data-label="Step" data-t="">
                            <span className="hks-grip" title="Drag to re-order (use Re-order in this static page)">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#grip" />
                              </svg>
                            </span>
                            {"1"}
                          </td>
                          <td className="dt__td" data-label="Instruction on the phone">
                            <a className="fd-link" href="#hks-p15-dep1">{"Knock, announce “Housekeeping” and enter"}</a>
                            <span className="fd-sub">{"English · Malayalam"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Mandatory tick" data-w2="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td" title="" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Photo">
                            <span className="fd-muted">{"None"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p15-dep1" aria-label="Edit step 1 of DEP">{"Edit"}</a>
                          </td>
                        </tr>
                        <tr id="saved-dep2" style={{"--k0": "2", "--k1": "8", "--k2": "2", "--k3": "4", "--k4": "1"}}>
                          <td className="dt__td dt__td--right num nw" data-label="Step" data-t="">
                            <span className="hks-grip" title="Drag to re-order (use Re-order in this static page)">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#grip" />
                              </svg>
                            </span>
                            {"2"}
                          </td>
                          <td className="dt__td" data-label="Instruction on the phone">
                            <a className="fd-link" href="#hks-p15-dep2">{"Open curtains and windows to air the room"}</a>
                            <span className="fd-sub">{"English · Malayalam"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Mandatory tick" data-w2="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td" title="" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Photo">
                            <span className="fd-muted">{"None"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p15-dep2" aria-label="Edit step 2 of DEP">{"Edit"}</a>
                          </td>
                        </tr>
                        <tr id="saved-dep3" style={{"--k0": "3", "--k1": "1", "--k2": "1", "--k3": "4", "--k4": "1"}}>
                          <td className="dt__td dt__td--right num nw" data-label="Step" data-t="">
                            <span className="hks-grip" title="Drag to re-order (use Re-order in this static page)">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#grip" />
                              </svg>
                            </span>
                            {"3"}
                          </td>
                          <td className="dt__td" data-label="Instruction on the phone">
                            <a className="fd-link" href="#hks-p15-dep3">{"Check for guest belongings; report any found item"}</a>
                            <span className="fd-sub">{"English · Malayalam"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Mandatory tick" data-w2="" data-s="">
                            <span className="pill pill--tentative">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check" />
                              </svg>
                              {"Must tick"}
                            </span>
                          </td>
                          <td className="dt__td" title="" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Photo">
                            <span className="fd-muted">{"None"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p15-dep3" aria-label="Edit step 3 of DEP">{"Edit"}</a>
                          </td>
                        </tr>
                        <tr id="saved-dep4" style={{"--k0": "4", "--k1": "12", "--k2": "2", "--k3": "2", "--k4": "1"}}>
                          <td className="dt__td dt__td--right num nw" data-label="Step" data-t="">
                            <span className="hks-grip" title="Drag to re-order (use Re-order in this static page)">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#grip" />
                              </svg>
                            </span>
                            {"4"}
                          </td>
                          <td className="dt__td" data-label="Instruction on the phone" data-w="">
                            <a className="fd-link" href="#hks-p15-dep4">{"Strip the bed and put the linen in the trolley bag"}</a>
                            <span className="fd-sub">{"English · Malayalam"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Mandatory tick" data-w2="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td" title="Bed linen set, Pillow case" data-label="Count entry" data-s="">
                            <span className="pill pill--occupied">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#package" />
                              </svg>
                              {"Count"}
                            </span>
                            {" "}
                            <span className="fd-sub">{"Bed linen set, Pillow case"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Photo">
                            <span className="fd-muted">{"None"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p15-dep4" aria-label="Edit step 4 of DEP">{"Edit"}</a>
                          </td>
                        </tr>
                        <tr id="saved-dep5" style={{"--k0": "5", "--k1": "9", "--k2": "2", "--k3": "4", "--k4": "1"}}>
                          <td className="dt__td dt__td--right num nw" data-label="Step" data-t="">
                            <span className="hks-grip" title="Drag to re-order (use Re-order in this static page)">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#grip" />
                              </svg>
                            </span>
                            {"5"}
                          </td>
                          <td className="dt__td" data-label="Instruction on the phone">
                            <a className="fd-link" href="#hks-p15-dep5">{"Remove trash and empty the bins"}</a>
                            <span className="fd-sub">{"English · Malayalam"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Mandatory tick" data-w2="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td" title="" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Photo">
                            <span className="fd-muted">{"None"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p15-dep5" aria-label="Edit step 5 of DEP">{"Edit"}</a>
                          </td>
                        </tr>
                        <tr id="saved-dep6" style={{"--k0": "6", "--k1": "3", "--k2": "1", "--k3": "4", "--k4": "1"}}>
                          <td className="dt__td dt__td--right num nw" data-label="Step" data-t="">
                            <span className="hks-grip" title="Drag to re-order (use Re-order in this static page)">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#grip" />
                              </svg>
                            </span>
                            {"6"}
                          </td>
                          <td className="dt__td" data-label="Instruction on the phone" data-w="">
                            <a className="fd-link" href="#hks-p15-dep6">{"Clean the bathroom: toilet incl. under the rim, basin, shower"}</a>
                            <span className="fd-sub">{"English · Malayalam"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Mandatory tick" data-w2="" data-s="">
                            <span className="pill pill--tentative">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check" />
                              </svg>
                              {"Must tick"}
                            </span>
                          </td>
                          <td className="dt__td" title="" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Photo">
                            <span className="fd-muted">{"None"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p15-dep6" aria-label="Edit step 6 of DEP">{"Edit"}</a>
                          </td>
                        </tr>
                        <tr id="saved-dep7" style={{"--k0": "7", "--k1": "14", "--k2": "2", "--k3": "4", "--k4": "1"}}>
                          <td className="dt__td dt__td--right num nw" data-label="Step" data-t="">
                            <span className="hks-grip" title="Drag to re-order (use Re-order in this static page)">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#grip" />
                              </svg>
                            </span>
                            {"7"}
                          </td>
                          <td className="dt__td" data-label="Instruction on the phone">
                            <a className="fd-link" href="#hks-p15-dep7">{"Wipe mirrors and glass"}</a>
                            <span className="fd-sub">{"English · Malayalam"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Mandatory tick" data-w2="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td" title="" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Photo">
                            <span className="fd-muted">{"None"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p15-dep7" aria-label="Edit step 7 of DEP">{"Edit"}</a>
                          </td>
                        </tr>
                        <tr id="saved-dep8" style={{"--k0": "8", "--k1": "4", "--k2": "2", "--k3": "4", "--k4": "1"}}>
                          <td className="dt__td dt__td--right num nw" data-label="Step" data-t="">
                            <span className="hks-grip" title="Drag to re-order (use Re-order in this static page)">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#grip" />
                              </svg>
                            </span>
                            {"8"}
                          </td>
                          <td className="dt__td" data-label="Instruction on the phone">
                            <a className="fd-link" href="#hks-p15-dep8">{"Dust furniture, fittings and the TV"}</a>
                            <span className="fd-sub">{"English · Malayalam"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Mandatory tick" data-w2="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td" title="" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Photo">
                            <span className="fd-muted">{"None"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p15-dep8" aria-label="Edit step 8 of DEP">{"Edit"}</a>
                          </td>
                        </tr>
                        <tr id="saved-dep9" style={{"--k0": "9", "--k1": "7", "--k2": "1", "--k3": "2", "--k4": "1"}}>
                          <td className="dt__td dt__td--right num nw" data-label="Step" data-t="">
                            <span className="hks-grip" title="Drag to re-order (use Re-order in this static page)">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#grip" />
                              </svg>
                            </span>
                            {"9"}
                          </td>
                          <td className="dt__td" data-label="Instruction on the phone">
                            <a className="fd-link" href="#hks-p15-dep9">{"Make the bed with fresh linen"}</a>
                            <span className="fd-sub">{"English · Malayalam"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Mandatory tick" data-w2="" data-s="">
                            <span className="pill pill--tentative">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check" />
                              </svg>
                              {"Must tick"}
                            </span>
                          </td>
                          <td className="dt__td" title="Bed linen set, Pillow case" data-label="Count entry">
                            <span className="pill pill--occupied">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#package" />
                              </svg>
                              {"Count"}
                            </span>
                            {" "}
                            <span className="fd-sub">{"Bed linen set, Pillow case"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Photo">
                            <span className="fd-muted">{"None"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p15-dep9" aria-label="Edit step 9 of DEP">{"Edit"}</a>
                          </td>
                        </tr>
                        <tr id="saved-dep10" style={{"--k0": "10", "--k1": "10", "--k2": "1", "--k3": "1", "--k4": "1"}}>
                          <td className="dt__td dt__td--right num nw" data-label="Step" data-t="">
                            <span className="hks-grip" title="Drag to re-order (use Re-order in this static page)">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#grip" />
                              </svg>
                            </span>
                            {"10"}
                          </td>
                          <td className="dt__td" data-label="Instruction on the phone">
                            <a className="fd-link" href="#hks-p15-dep10">{"Replace towels and replenish amenities"}</a>
                            <span className="fd-sub">{"English · Malayalam"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Mandatory tick" data-w2="" data-s="">
                            <span className="pill pill--tentative">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check" />
                              </svg>
                              {"Must tick"}
                            </span>
                          </td>
                          <td className="dt__td" title="Bath towel, Hand towel, Bath mat, Shampoo, Conditioner, Body wash, Soap" data-label="Count entry">
                            <span className="pill pill--occupied">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#package" />
                              </svg>
                              {"Count"}
                            </span>
                            {" "}
                            <span className="fd-sub">{"Bath towel, Hand towel +5"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Photo">
                            <span className="fd-muted">{"None"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p15-dep10" aria-label="Edit step 10 of DEP">{"Edit"}</a>
                          </td>
                        </tr>
                        <tr id="saved-dep11" style={{"--k0": "11", "--k1": "2", "--k2": "2", "--k3": "3", "--k4": "1"}}>
                          <td className="dt__td dt__td--right num nw" data-label="Step" data-t="">
                            <span className="hks-grip" title="Drag to re-order (use Re-order in this static page)">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#grip" />
                              </svg>
                            </span>
                            {"11"}
                          </td>
                          <td className="dt__td" data-label="Instruction on the phone" data-w="">
                            <a className="fd-link" href="#hks-p15-dep11">{"Check the minibar and tea / coffee tray; report what is missing"}</a>
                            <span className="fd-sub">{"English · Malayalam"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Mandatory tick" data-w2="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td" title="Water bottle, Tea / coffee sachets" data-label="Count entry" data-s="">
                            <span className="pill pill--occupied">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#package" />
                              </svg>
                              {"Count"}
                            </span>
                            {" "}
                            <span className="fd-sub">{"Water bottle, Tea / coffee sachets"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Photo">
                            <span className="fd-muted">{"None"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p15-dep11" aria-label="Edit step 11 of DEP">{"Edit"}</a>
                          </td>
                        </tr>
                        <tr id="saved-dep12" style={{"--k0": "12", "--k1": "13", "--k2": "2", "--k3": "4", "--k4": "1"}}>
                          <td className="dt__td dt__td--right num nw" data-label="Step" data-t="">
                            <span className="hks-grip" title="Drag to re-order (use Re-order in this static page)">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#grip" />
                              </svg>
                            </span>
                            {"12"}
                          </td>
                          <td className="dt__td" data-label="Instruction on the phone">
                            <a className="fd-link" href="#hks-p15-dep12">{"Vacuum the floor and carpet"}</a>
                            <span className="fd-sub">{"English · Malayalam"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Mandatory tick" data-w2="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td" title="" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Photo">
                            <span className="fd-muted">{"None"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p15-dep12" aria-label="Edit step 12 of DEP">{"Edit"}</a>
                          </td>
                        </tr>
                        <tr id="saved-dep13" style={{"--k0": "13", "--k1": "5", "--k2": "1", "--k3": "4", "--k4": "2"}}>
                          <td className="dt__td dt__td--right num nw" data-label="Step" data-t="">
                            <span className="hks-grip" title="Drag to re-order (use Re-order in this static page)">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#grip" />
                              </svg>
                            </span>
                            {"13"}
                          </td>
                          <td className="dt__td" data-label="Instruction on the phone">
                            <a className="fd-link" href="#hks-p15-dep13">{"Final check from the door and switch the light on"}</a>
                            <span className="fd-sub">{"English · Malayalam"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Mandatory tick" data-w2="" data-s="">
                            <span className="pill pill--tentative">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check" />
                              </svg>
                              {"Must tick"}
                            </span>
                          </td>
                          <td className="dt__td" title="" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Photo" data-w2="">{"Optional"}</td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p15-dep13" aria-label="Edit step 13 of DEP">{"Edit"}</a>
                          </td>
                        </tr>
                        <tr id="saved-dep14" style={{"--k0": "14", "--k1": "11", "--k2": "2", "--k3": "4", "--k4": "2"}}>
                          <td className="dt__td dt__td--right num nw" data-label="Step" data-t="">
                            <span className="hks-grip" title="Drag to re-order (use Re-order in this static page)">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#grip" />
                              </svg>
                            </span>
                            {"14"}
                          </td>
                          <td className="dt__td" data-label="Instruction on the phone">
                            <a className="fd-link" href="#hks-p15-dep14">{"Report any damage or repair needed"}</a>
                            <span className="fd-sub">{"English · Malayalam"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Mandatory tick" data-w2="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td" title="" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Photo" data-w2="">{"Optional"}</td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p15-dep14" aria-label="Edit step 14 of DEP">{"Edit"}</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
              <section className="hks-list" id="list-arr" data-code="HKS-13-ARR" aria-labelledby="list-arr-t">
                <div className="row row--between fd-tabbar">
                  <div>
                    <h2 className="s-card-title" id="list-arr-t">{"ARR · Arrival check"}</h2>
                    <span className="fd-muted">{"6 steps · 3 must be ticked before the task can be finished"}</span>
                  </div>
                  <div className="hks-bar-act">
                    <a className="btn" href="#hks-reorder">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#arrow-up-down" />
                      </svg>
                      {"Re-order"}
                    </a>
                    <a className="btn btn--primary" href="#hks-p15-arr-new" data-leads-to="HKS-P15">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#plus" />
                      </svg>
                      {"Add step"}
                    </a>
                  </div>
                </div>
                <div className="pgw">
                  <div className="s-scroll">
                    <table className="srt dt__table dt--hug" data-code="HKS-13-table-ARR" style={{"--srt-cols": "auto auto auto auto auto max-content"}} data-mc="">
                      <caption className="sr-only">{"Cleaning steps of Arrival check"}</caption>
                      <thead>
                        <tr>
                          <th scope="col" className="dt__th--right">
                            <input className="srt-i srt-a0" type="radio" name="sthks131" id="sthks131-0a" aria-label="Sort by Step, lowest or A first" />
                            <input className="srt-i srt-d0" type="radio" name="sthks131" id="sthks131-0d" aria-label="Sort by Step, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="sthks131-0a">{"Step"}</label>
                            <label className="srt-l srt-l--d" htmlFor="sthks131-0d" aria-hidden="true">{"Step"}</label>
                          </th>
                          <th scope="col">
                            <input className="srt-i srt-a1" type="radio" name="sthks131" id="sthks131-1a" aria-label="Sort by Instruction on the phone, lowest or A first" />
                            <input className="srt-i srt-d1" type="radio" name="sthks131" id="sthks131-1d" aria-label="Sort by Instruction on the phone, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="sthks131-1a">{"Instruction on the phone"}</label>
                            <label className="srt-l srt-l--d" htmlFor="sthks131-1d" aria-hidden="true">{"Instruction on the phone"}</label>
                          </th>
                          <th scope="col">
                            <input className="srt-i srt-a2" type="radio" name="sthks131" id="sthks131-2a" aria-label="Sort by Mandatory tick, lowest or A first" />
                            <input className="srt-i srt-d2" type="radio" name="sthks131" id="sthks131-2d" aria-label="Sort by Mandatory tick, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="sthks131-2a">{"Mandatory tick"}</label>
                            <label className="srt-l srt-l--d" htmlFor="sthks131-2d" aria-hidden="true">{"Mandatory tick"}</label>
                          </th>
                          <th scope="col">
                            <input className="srt-i srt-a3" type="radio" name="sthks131" id="sthks131-3a" aria-label="Sort by Count entry, lowest or A first" />
                            <input className="srt-i srt-d3" type="radio" name="sthks131" id="sthks131-3d" aria-label="Sort by Count entry, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="sthks131-3a">{"Count entry"}</label>
                            <label className="srt-l srt-l--d" htmlFor="sthks131-3d" aria-hidden="true">{"Count entry"}</label>
                          </th>
                          <th scope="col">
                            <input className="srt-i srt-a4" type="radio" name="sthks131" id="sthks131-4a" aria-label="Sort by Photo, lowest or A first" />
                            <input className="srt-i srt-d4" type="radio" name="sthks131" id="sthks131-4d" aria-label="Sort by Photo, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="sthks131-4a">{"Photo"}</label>
                            <label className="srt-l srt-l--d" htmlFor="sthks131-4d" aria-hidden="true">{"Photo"}</label>
                          </th>
                          <th scope="col" />
                        </tr>
                      </thead>
                      <tbody>
                        <tr id="saved-arr1" style={{"--k0": "1", "--k1": "2", "--k2": "1", "--k3": "2", "--k4": "1"}}>
                          <td className="dt__td dt__td--right num nw" data-label="Step" data-t="">
                            <span className="hks-grip" title="Drag to re-order (use Re-order in this static page)">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#grip" />
                              </svg>
                            </span>
                            {"1"}
                          </td>
                          <td className="dt__td" data-label="Instruction on the phone">
                            <a className="fd-link" href="#hks-p15-arr1">{"Check the room against the set-up standard"}</a>
                            <span className="fd-sub">{"English · Malayalam"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Mandatory tick" data-w2="" data-s="">
                            <span className="pill pill--tentative">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check" />
                              </svg>
                              {"Must tick"}
                            </span>
                          </td>
                          <td className="dt__td" title="" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Photo">
                            <span className="fd-muted">{"None"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p15-arr1" aria-label="Edit step 1 of ARR">{"Edit"}</a>
                          </td>
                        </tr>
                        <tr id="saved-arr2" style={{"--k0": "2", "--k1": "6", "--k2": "1", "--k3": "2", "--k4": "1"}}>
                          <td className="dt__td dt__td--right num nw" data-label="Step" data-t="">
                            <span className="hks-grip" title="Drag to re-order (use Re-order in this static page)">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#grip" />
                              </svg>
                            </span>
                            {"2"}
                          </td>
                          <td className="dt__td" data-label="Instruction on the phone">
                            <a className="fd-link" href="#hks-p15-arr2">{"Test lights, TV and AC"}</a>
                            <span className="fd-sub">{"English · Malayalam"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Mandatory tick" data-w2="" data-s="">
                            <span className="pill pill--tentative">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check" />
                              </svg>
                              {"Must tick"}
                            </span>
                          </td>
                          <td className="dt__td" title="" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Photo">
                            <span className="fd-muted">{"None"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p15-arr2" aria-label="Edit step 2 of ARR">{"Edit"}</a>
                          </td>
                        </tr>
                        <tr id="saved-arr3" style={{"--k0": "3", "--k1": "1", "--k2": "2", "--k3": "1", "--k4": "1"}}>
                          <td className="dt__td dt__td--right num nw" data-label="Step" data-t="">
                            <span className="hks-grip" title="Drag to re-order (use Re-order in this static page)">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#grip" />
                              </svg>
                            </span>
                            {"3"}
                          </td>
                          <td className="dt__td" data-label="Instruction on the phone">
                            <a className="fd-link" href="#hks-p15-arr3">{"Check bathroom amenities and towels"}</a>
                            <span className="fd-sub">{"English · Malayalam"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Mandatory tick" data-w2="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td" title="Bath towel, Hand towel, Soap, Shampoo" data-label="Count entry" data-s="">
                            <span className="pill pill--occupied">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#package" />
                              </svg>
                              {"Count"}
                            </span>
                            {" "}
                            <span className="fd-sub">{"Bath towel, Hand towel +2"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Photo">
                            <span className="fd-muted">{"None"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p15-arr3" aria-label="Edit step 3 of ARR">{"Edit"}</a>
                          </td>
                        </tr>
                        <tr id="saved-arr4" style={{"--k0": "4", "--k1": "5", "--k2": "2", "--k3": "2", "--k4": "1"}}>
                          <td className="dt__td dt__td--right num nw" data-label="Step" data-t="">
                            <span className="hks-grip" title="Drag to re-order (use Re-order in this static page)">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#grip" />
                              </svg>
                            </span>
                            {"4"}
                          </td>
                          <td className="dt__td" data-label="Instruction on the phone">
                            <a className="fd-link" href="#hks-p15-arr4">{"Place VIP amenities if the room has any"}</a>
                            <span className="fd-sub">{"English · Malayalam"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Mandatory tick" data-w2="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td" title="" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Photo">
                            <span className="fd-muted">{"None"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p15-arr4" aria-label="Edit step 4 of ARR">{"Edit"}</a>
                          </td>
                        </tr>
                        <tr id="saved-arr5" style={{"--k0": "5", "--k1": "3", "--k2": "2", "--k3": "2", "--k4": "1"}}>
                          <td className="dt__td dt__td--right num nw" data-label="Step" data-t="">
                            <span className="hks-grip" title="Drag to re-order (use Re-order in this static page)">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#grip" />
                              </svg>
                            </span>
                            {"5"}
                          </td>
                          <td className="dt__td" data-label="Instruction on the phone">
                            <a className="fd-link" href="#hks-p15-arr5">{"Check the smell and set the room temperature"}</a>
                            <span className="fd-sub">{"English · Malayalam"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Mandatory tick" data-w2="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td" title="" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Photo">
                            <span className="fd-muted">{"None"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p15-arr5" aria-label="Edit step 5 of ARR">{"Edit"}</a>
                          </td>
                        </tr>
                        <tr id="saved-arr6" style={{"--k0": "6", "--k1": "4", "--k2": "1", "--k3": "2", "--k4": "2"}}>
                          <td className="dt__td dt__td--right num nw" data-label="Step" data-t="">
                            <span className="hks-grip" title="Drag to re-order (use Re-order in this static page)">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#grip" />
                              </svg>
                            </span>
                            {"6"}
                          </td>
                          <td className="dt__td" data-label="Instruction on the phone">
                            <a className="fd-link" href="#hks-p15-arr6">{"Final check"}</a>
                            <span className="fd-sub">{"English · Malayalam"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Mandatory tick" data-w2="" data-s="">
                            <span className="pill pill--tentative">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check" />
                              </svg>
                              {"Must tick"}
                            </span>
                          </td>
                          <td className="dt__td" title="" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Photo" data-w2="">{"Optional"}</td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p15-arr6" aria-label="Edit step 6 of ARR">{"Edit"}</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
              <section className="hks-list" id="list-tch" data-code="HKS-13-TCH" aria-labelledby="list-tch-t">
                <div className="row row--between fd-tabbar">
                  <div>
                    <h2 className="s-card-title" id="list-tch-t">{"TCH · Touch-up"}</h2>
                    <span className="fd-muted">{"4 steps · 1 must be ticked before the task can be finished"}</span>
                  </div>
                  <div className="hks-bar-act">
                    <a className="btn" href="#hks-reorder">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#arrow-up-down" />
                      </svg>
                      {"Re-order"}
                    </a>
                    <a className="btn btn--primary" href="#hks-p15-tch-new" data-leads-to="HKS-P15">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#plus" />
                      </svg>
                      {"Add step"}
                    </a>
                  </div>
                </div>
                <div className="pgw">
                  <div className="s-scroll">
                    <table className="srt dt__table dt--hug" data-code="HKS-13-table-TCH" style={{"--srt-cols": "auto auto auto auto auto max-content"}} data-mc="">
                      <caption className="sr-only">{"Cleaning steps of Touch-up"}</caption>
                      <thead>
                        <tr>
                          <th scope="col" className="dt__th--right">
                            <input className="srt-i srt-a0" type="radio" name="sthks132" id="sthks132-0a" aria-label="Sort by Step, lowest or A first" />
                            <input className="srt-i srt-d0" type="radio" name="sthks132" id="sthks132-0d" aria-label="Sort by Step, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="sthks132-0a">{"Step"}</label>
                            <label className="srt-l srt-l--d" htmlFor="sthks132-0d" aria-hidden="true">{"Step"}</label>
                          </th>
                          <th scope="col">
                            <input className="srt-i srt-a1" type="radio" name="sthks132" id="sthks132-1a" aria-label="Sort by Instruction on the phone, lowest or A first" />
                            <input className="srt-i srt-d1" type="radio" name="sthks132" id="sthks132-1d" aria-label="Sort by Instruction on the phone, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="sthks132-1a">{"Instruction on the phone"}</label>
                            <label className="srt-l srt-l--d" htmlFor="sthks132-1d" aria-hidden="true">{"Instruction on the phone"}</label>
                          </th>
                          <th scope="col">
                            <input className="srt-i srt-a2" type="radio" name="sthks132" id="sthks132-2a" aria-label="Sort by Mandatory tick, lowest or A first" />
                            <input className="srt-i srt-d2" type="radio" name="sthks132" id="sthks132-2d" aria-label="Sort by Mandatory tick, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="sthks132-2a">{"Mandatory tick"}</label>
                            <label className="srt-l srt-l--d" htmlFor="sthks132-2d" aria-hidden="true">{"Mandatory tick"}</label>
                          </th>
                          <th scope="col">{"Count entry"}</th>
                          <th scope="col">{"Photo"}</th>
                          <th scope="col" />
                        </tr>
                      </thead>
                      <tbody>
                        <tr id="saved-tch1" style={{"--k0": "1", "--k1": "2", "--k2": "2"}}>
                          <td className="dt__td dt__td--right num nw" data-label="Step" data-t="">
                            <span className="hks-grip" title="Drag to re-order (use Re-order in this static page)">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#grip" />
                              </svg>
                            </span>
                            {"1"}
                          </td>
                          <td className="dt__td" data-label="Instruction on the phone">
                            <a className="fd-link" href="#hks-p15-tch1">{"Knock, announce and enter"}</a>
                            <span className="fd-sub">{"English · Malayalam"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Mandatory tick" data-w2="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td" title="" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Photo">
                            <span className="fd-muted">{"None"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p15-tch1" aria-label="Edit step 1 of TCH">{"Edit"}</a>
                          </td>
                        </tr>
                        <tr id="saved-tch2" style={{"--k0": "2", "--k1": "3", "--k2": "2"}}>
                          <td className="dt__td dt__td--right num nw" data-label="Step" data-t="">
                            <span className="hks-grip" title="Drag to re-order (use Re-order in this static page)">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#grip" />
                              </svg>
                            </span>
                            {"2"}
                          </td>
                          <td className="dt__td" data-label="Instruction on the phone">
                            <a className="fd-link" href="#hks-p15-tch2">{"Straighten the bed and cushions"}</a>
                            <span className="fd-sub">{"English · Malayalam"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Mandatory tick" data-w2="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td" title="" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Photo">
                            <span className="fd-muted">{"None"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p15-tch2" aria-label="Edit step 2 of TCH">{"Edit"}</a>
                          </td>
                        </tr>
                        <tr id="saved-tch3" style={{"--k0": "3", "--k1": "4", "--k2": "2"}}>
                          <td className="dt__td dt__td--right num nw" data-label="Step" data-t="">
                            <span className="hks-grip" title="Drag to re-order (use Re-order in this static page)">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#grip" />
                              </svg>
                            </span>
                            {"3"}
                          </td>
                          <td className="dt__td" data-label="Instruction on the phone">
                            <a className="fd-link" href="#hks-p15-tch3">{"Wipe the bathroom surfaces and empty the bin"}</a>
                            <span className="fd-sub">{"English · Malayalam"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Mandatory tick" data-w2="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td" title="" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Photo">
                            <span className="fd-muted">{"None"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p15-tch3" aria-label="Edit step 3 of TCH">{"Edit"}</a>
                          </td>
                        </tr>
                        <tr id="saved-tch4" style={{"--k0": "4", "--k1": "1", "--k2": "1"}}>
                          <td className="dt__td dt__td--right num nw" data-label="Step" data-t="">
                            <span className="hks-grip" title="Drag to re-order (use Re-order in this static page)">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#grip" />
                              </svg>
                            </span>
                            {"4"}
                          </td>
                          <td className="dt__td" data-label="Instruction on the phone">
                            <a className="fd-link" href="#hks-p15-tch4">{"Final check"}</a>
                            <span className="fd-sub">{"English · Malayalam"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Mandatory tick" data-w2="" data-s="">
                            <span className="pill pill--tentative">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check" />
                              </svg>
                              {"Must tick"}
                            </span>
                          </td>
                          <td className="dt__td" title="" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Photo">
                            <span className="fd-muted">{"None"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p15-tch4" aria-label="Edit step 4 of TCH">{"Edit"}</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
              <section className="hks-list" id="list-sty" data-code="HKS-13-STY" aria-labelledby="list-sty-t">
                <div className="row row--between fd-tabbar">
                  <div>
                    <h2 className="s-card-title" id="list-sty-t">{"STY · Stayover"}</h2>
                    <span className="fd-muted">{"9 steps · 4 must be ticked before the task can be finished"}</span>
                  </div>
                  <div className="hks-bar-act">
                    <a className="btn" href="#hks-reorder">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#arrow-up-down" />
                      </svg>
                      {"Re-order"}
                    </a>
                    <a className="btn btn--primary" href="#hks-p15-sty-new" data-leads-to="HKS-P15">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#plus" />
                      </svg>
                      {"Add step"}
                    </a>
                  </div>
                </div>
                <div className="pgw">
                  <div className="s-scroll">
                    <table className="srt dt__table dt--hug" data-code="HKS-13-table-STY" style={{"--srt-cols": "auto auto auto auto auto max-content"}} data-mc="">
                      <caption className="sr-only">{"Cleaning steps of Stayover"}</caption>
                      <thead>
                        <tr>
                          <th scope="col" className="dt__th--right">
                            <input className="srt-i srt-a0" type="radio" name="sthks133" id="sthks133-0a" aria-label="Sort by Step, lowest or A first" />
                            <input className="srt-i srt-d0" type="radio" name="sthks133" id="sthks133-0d" aria-label="Sort by Step, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="sthks133-0a">{"Step"}</label>
                            <label className="srt-l srt-l--d" htmlFor="sthks133-0d" aria-hidden="true">{"Step"}</label>
                          </th>
                          <th scope="col">
                            <input className="srt-i srt-a1" type="radio" name="sthks133" id="sthks133-1a" aria-label="Sort by Instruction on the phone, lowest or A first" />
                            <input className="srt-i srt-d1" type="radio" name="sthks133" id="sthks133-1d" aria-label="Sort by Instruction on the phone, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="sthks133-1a">{"Instruction on the phone"}</label>
                            <label className="srt-l srt-l--d" htmlFor="sthks133-1d" aria-hidden="true">{"Instruction on the phone"}</label>
                          </th>
                          <th scope="col">
                            <input className="srt-i srt-a2" type="radio" name="sthks133" id="sthks133-2a" aria-label="Sort by Mandatory tick, lowest or A first" />
                            <input className="srt-i srt-d2" type="radio" name="sthks133" id="sthks133-2d" aria-label="Sort by Mandatory tick, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="sthks133-2a">{"Mandatory tick"}</label>
                            <label className="srt-l srt-l--d" htmlFor="sthks133-2d" aria-hidden="true">{"Mandatory tick"}</label>
                          </th>
                          <th scope="col">
                            <input className="srt-i srt-a3" type="radio" name="sthks133" id="sthks133-3a" aria-label="Sort by Count entry, lowest or A first" />
                            <input className="srt-i srt-d3" type="radio" name="sthks133" id="sthks133-3d" aria-label="Sort by Count entry, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="sthks133-3a">{"Count entry"}</label>
                            <label className="srt-l srt-l--d" htmlFor="sthks133-3d" aria-hidden="true">{"Count entry"}</label>
                          </th>
                          <th scope="col">{"Photo"}</th>
                          <th scope="col" />
                        </tr>
                      </thead>
                      <tbody>
                        <tr id="saved-sty1" style={{"--k0": "1", "--k1": "4", "--k2": "1", "--k3": "3"}}>
                          <td className="dt__td dt__td--right num nw" data-label="Step" data-t="">
                            <span className="hks-grip" title="Drag to re-order (use Re-order in this static page)">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#grip" />
                              </svg>
                            </span>
                            {"1"}
                          </td>
                          <td className="dt__td" data-label="Instruction on the phone" data-w="">
                            <a className="fd-link" href="#hks-p15-sty1">{"Knock and announce; if the DND sign is on, do not enter and report it"}</a>
                            <span className="fd-sub">{"English · Malayalam"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Mandatory tick" data-w2="" data-s="">
                            <span className="pill pill--tentative">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check" />
                              </svg>
                              {"Must tick"}
                            </span>
                          </td>
                          <td className="dt__td" title="" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Photo">
                            <span className="fd-muted">{"None"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p15-sty1" aria-label="Edit step 1 of STY">{"Edit"}</a>
                          </td>
                        </tr>
                        <tr id="saved-sty2" style={{"--k0": "2", "--k1": "6", "--k2": "2", "--k3": "3"}}>
                          <td className="dt__td dt__td--right num nw" data-label="Step" data-t="">
                            <span className="hks-grip" title="Drag to re-order (use Re-order in this static page)">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#grip" />
                              </svg>
                            </span>
                            {"2"}
                          </td>
                          <td className="dt__td" data-label="Instruction on the phone">
                            <a className="fd-link" href="#hks-p15-sty2">{"Open the curtains"}</a>
                            <span className="fd-sub">{"English · Malayalam"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Mandatory tick" data-w2="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td" title="" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Photo">
                            <span className="fd-muted">{"None"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p15-sty2" aria-label="Edit step 2 of STY">{"Edit"}</a>
                          </td>
                        </tr>
                        <tr id="saved-sty3" style={{"--k0": "3", "--k1": "7", "--k2": "2", "--k3": "3"}}>
                          <td className="dt__td dt__td--right num nw" data-label="Step" data-t="">
                            <span className="hks-grip" title="Drag to re-order (use Re-order in this static page)">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#grip" />
                              </svg>
                            </span>
                            {"3"}
                          </td>
                          <td className="dt__td" data-label="Instruction on the phone">
                            <a className="fd-link" href="#hks-p15-sty3">{"Remove trash and empty the bins"}</a>
                            <span className="fd-sub">{"English · Malayalam"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Mandatory tick" data-w2="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td" title="" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Photo">
                            <span className="fd-muted">{"None"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p15-sty3" aria-label="Edit step 3 of STY">{"Edit"}</a>
                          </td>
                        </tr>
                        <tr id="saved-sty4" style={{"--k0": "4", "--k1": "5", "--k2": "1", "--k3": "3"}}>
                          <td className="dt__td dt__td--right num nw" data-label="Step" data-t="">
                            <span className="hks-grip" title="Drag to re-order (use Re-order in this static page)">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#grip" />
                              </svg>
                            </span>
                            {"4"}
                          </td>
                          <td className="dt__td" data-label="Instruction on the phone">
                            <a className="fd-link" href="#hks-p15-sty4">{"Make or tidy the bed"}</a>
                            <span className="fd-sub">{"English · Malayalam"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Mandatory tick" data-w2="" data-s="">
                            <span className="pill pill--tentative">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check" />
                              </svg>
                              {"Must tick"}
                            </span>
                          </td>
                          <td className="dt__td" title="" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Photo">
                            <span className="fd-muted">{"None"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p15-sty4" aria-label="Edit step 4 of STY">{"Edit"}</a>
                          </td>
                        </tr>
                        <tr id="saved-sty5" style={{"--k0": "5", "--k1": "1", "--k2": "1", "--k3": "3"}}>
                          <td className="dt__td dt__td--right num nw" data-label="Step" data-t="">
                            <span className="hks-grip" title="Drag to re-order (use Re-order in this static page)">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#grip" />
                              </svg>
                            </span>
                            {"5"}
                          </td>
                          <td className="dt__td" data-label="Instruction on the phone">
                            <a className="fd-link" href="#hks-p15-sty5">{"Clean the bathroom"}</a>
                            <span className="fd-sub">{"English · Malayalam"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Mandatory tick" data-w2="" data-s="">
                            <span className="pill pill--tentative">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check" />
                              </svg>
                              {"Must tick"}
                            </span>
                          </td>
                          <td className="dt__td" title="" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Photo">
                            <span className="fd-muted">{"None"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p15-sty5" aria-label="Edit step 5 of STY">{"Edit"}</a>
                          </td>
                        </tr>
                        <tr id="saved-sty6" style={{"--k0": "6", "--k1": "8", "--k2": "2", "--k3": "1"}}>
                          <td className="dt__td dt__td--right num nw" data-label="Step" data-t="">
                            <span className="hks-grip" title="Drag to re-order (use Re-order in this static page)">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#grip" />
                              </svg>
                            </span>
                            {"6"}
                          </td>
                          <td className="dt__td" data-label="Instruction on the phone">
                            <a className="fd-link" href="#hks-p15-sty6">{"Replace towels the guest left on the floor"}</a>
                            <span className="fd-sub">{"English · Malayalam"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Mandatory tick" data-w2="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td" title="Bath towel, Hand towel" data-label="Count entry" data-s="">
                            <span className="pill pill--occupied">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#package" />
                              </svg>
                              {"Count"}
                            </span>
                            {" "}
                            <span className="fd-sub">{"Bath towel, Hand towel"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Photo">
                            <span className="fd-muted">{"None"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p15-sty6" aria-label="Edit step 6 of STY">{"Edit"}</a>
                          </td>
                        </tr>
                        <tr id="saved-sty7" style={{"--k0": "7", "--k1": "2", "--k2": "2", "--k3": "3"}}>
                          <td className="dt__td dt__td--right num nw" data-label="Step" data-t="">
                            <span className="hks-grip" title="Drag to re-order (use Re-order in this static page)">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#grip" />
                              </svg>
                            </span>
                            {"7"}
                          </td>
                          <td className="dt__td" data-label="Instruction on the phone">
                            <a className="fd-link" href="#hks-p15-sty7">{"Dust and vacuum"}</a>
                            <span className="fd-sub">{"English · Malayalam"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Mandatory tick" data-w2="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td" title="" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Photo">
                            <span className="fd-muted">{"None"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p15-sty7" aria-label="Edit step 7 of STY">{"Edit"}</a>
                          </td>
                        </tr>
                        <tr id="saved-sty8" style={{"--k0": "8", "--k1": "9", "--k2": "2", "--k3": "2"}}>
                          <td className="dt__td dt__td--right num nw" data-label="Step" data-t="">
                            <span className="hks-grip" title="Drag to re-order (use Re-order in this static page)">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#grip" />
                              </svg>
                            </span>
                            {"8"}
                          </td>
                          <td className="dt__td" data-label="Instruction on the phone">
                            <a className="fd-link" href="#hks-p15-sty8">{"Replenish amenities and water"}</a>
                            <span className="fd-sub">{"English · Malayalam"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Mandatory tick" data-w2="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td" title="Water bottle, Tea / coffee sachets, Soap, Shampoo" data-label="Count entry">
                            <span className="pill pill--occupied">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#package" />
                              </svg>
                              {"Count"}
                            </span>
                            {" "}
                            <span className="fd-sub">{"Water bottle, Tea / coffee sachets +2"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Photo">
                            <span className="fd-muted">{"None"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p15-sty8" aria-label="Edit step 8 of STY">{"Edit"}</a>
                          </td>
                        </tr>
                        <tr id="saved-sty9" style={{"--k0": "9", "--k1": "3", "--k2": "1", "--k3": "3"}}>
                          <td className="dt__td dt__td--right num nw" data-label="Step" data-t="">
                            <span className="hks-grip" title="Drag to re-order (use Re-order in this static page)">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#grip" />
                              </svg>
                            </span>
                            {"9"}
                          </td>
                          <td className="dt__td" data-label="Instruction on the phone">
                            <a className="fd-link" href="#hks-p15-sty9">{"Final check"}</a>
                            <span className="fd-sub">{"English · Malayalam"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Mandatory tick" data-w2="" data-s="">
                            <span className="pill pill--tentative">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check" />
                              </svg>
                              {"Must tick"}
                            </span>
                          </td>
                          <td className="dt__td" title="" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Photo">
                            <span className="fd-muted">{"None"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p15-sty9" aria-label="Edit step 9 of STY">{"Edit"}</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
              <section className="hks-list" id="list-lch" data-code="HKS-13-LCH" aria-labelledby="list-lch-t">
                <div className="row row--between fd-tabbar">
                  <div>
                    <h2 className="s-card-title" id="list-lch-t">{"LCH · Linen change"}</h2>
                    <span className="fd-muted">{"4 steps · 1 must be ticked before the task can be finished"}</span>
                  </div>
                  <div className="hks-bar-act">
                    <a className="btn" href="#hks-reorder">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#arrow-up-down" />
                      </svg>
                      {"Re-order"}
                    </a>
                    <a className="btn btn--primary" href="#hks-p15-lch-new" data-leads-to="HKS-P15">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#plus" />
                      </svg>
                      {"Add step"}
                    </a>
                  </div>
                </div>
                <div className="pgw">
                  <div className="s-scroll">
                    <table className="srt dt__table dt--hug" data-code="HKS-13-table-LCH" style={{"--srt-cols": "auto auto auto auto auto max-content"}} data-mc="">
                      <caption className="sr-only">{"Cleaning steps of Linen change"}</caption>
                      <thead>
                        <tr>
                          <th scope="col" className="dt__th--right">
                            <input className="srt-i srt-a0" type="radio" name="sthks134" id="sthks134-0a" aria-label="Sort by Step, lowest or A first" />
                            <input className="srt-i srt-d0" type="radio" name="sthks134" id="sthks134-0d" aria-label="Sort by Step, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="sthks134-0a">{"Step"}</label>
                            <label className="srt-l srt-l--d" htmlFor="sthks134-0d" aria-hidden="true">{"Step"}</label>
                          </th>
                          <th scope="col">
                            <input className="srt-i srt-a1" type="radio" name="sthks134" id="sthks134-1a" aria-label="Sort by Instruction on the phone, lowest or A first" />
                            <input className="srt-i srt-d1" type="radio" name="sthks134" id="sthks134-1d" aria-label="Sort by Instruction on the phone, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="sthks134-1a">{"Instruction on the phone"}</label>
                            <label className="srt-l srt-l--d" htmlFor="sthks134-1d" aria-hidden="true">{"Instruction on the phone"}</label>
                          </th>
                          <th scope="col">
                            <input className="srt-i srt-a2" type="radio" name="sthks134" id="sthks134-2a" aria-label="Sort by Mandatory tick, lowest or A first" />
                            <input className="srt-i srt-d2" type="radio" name="sthks134" id="sthks134-2d" aria-label="Sort by Mandatory tick, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="sthks134-2a">{"Mandatory tick"}</label>
                            <label className="srt-l srt-l--d" htmlFor="sthks134-2d" aria-hidden="true">{"Mandatory tick"}</label>
                          </th>
                          <th scope="col">
                            <input className="srt-i srt-a3" type="radio" name="sthks134" id="sthks134-3a" aria-label="Sort by Count entry, lowest or A first" />
                            <input className="srt-i srt-d3" type="radio" name="sthks134" id="sthks134-3d" aria-label="Sort by Count entry, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="sthks134-3a">{"Count entry"}</label>
                            <label className="srt-l srt-l--d" htmlFor="sthks134-3d" aria-hidden="true">{"Count entry"}</label>
                          </th>
                          <th scope="col">{"Photo"}</th>
                          <th scope="col" />
                        </tr>
                      </thead>
                      <tbody>
                        <tr id="saved-lch1" style={{"--k0": "1", "--k1": "4", "--k2": "2", "--k3": "3"}}>
                          <td className="dt__td dt__td--right num nw" data-label="Step" data-t="">
                            <span className="hks-grip" title="Drag to re-order (use Re-order in this static page)">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#grip" />
                              </svg>
                            </span>
                            {"1"}
                          </td>
                          <td className="dt__td" data-label="Instruction on the phone">
                            <a className="fd-link" href="#hks-p15-lch1">{"Strip the bed linen"}</a>
                            <span className="fd-sub">{"English · Malayalam"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Mandatory tick" data-w2="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td" title="" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Photo">
                            <span className="fd-muted">{"None"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p15-lch1" aria-label="Edit step 1 of LCH">{"Edit"}</a>
                          </td>
                        </tr>
                        <tr id="saved-lch2" style={{"--k0": "2", "--k1": "2", "--k2": "1", "--k3": "2"}}>
                          <td className="dt__td dt__td--right num nw" data-label="Step" data-t="">
                            <span className="hks-grip" title="Drag to re-order (use Re-order in this static page)">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#grip" />
                              </svg>
                            </span>
                            {"2"}
                          </td>
                          <td className="dt__td" data-label="Instruction on the phone">
                            <a className="fd-link" href="#hks-p15-lch2">{"Make the bed with fresh linen"}</a>
                            <span className="fd-sub">{"English · Malayalam"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Mandatory tick" data-w2="" data-s="">
                            <span className="pill pill--tentative">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check" />
                              </svg>
                              {"Must tick"}
                            </span>
                          </td>
                          <td className="dt__td" title="Bed linen set, Pillow case" data-label="Count entry">
                            <span className="pill pill--occupied">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#package" />
                              </svg>
                              {"Count"}
                            </span>
                            {" "}
                            <span className="fd-sub">{"Bed linen set, Pillow case"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Photo">
                            <span className="fd-muted">{"None"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p15-lch2" aria-label="Edit step 2 of LCH">{"Edit"}</a>
                          </td>
                        </tr>
                        <tr id="saved-lch3" style={{"--k0": "3", "--k1": "1", "--k2": "2", "--k3": "1"}}>
                          <td className="dt__td dt__td--right num nw" data-label="Step" data-t="">
                            <span className="hks-grip" title="Drag to re-order (use Re-order in this static page)">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#grip" />
                              </svg>
                            </span>
                            {"3"}
                          </td>
                          <td className="dt__td" data-label="Instruction on the phone">
                            <a className="fd-link" href="#hks-p15-lch3">{"Change bath and hand towels"}</a>
                            <span className="fd-sub">{"English · Malayalam"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Mandatory tick" data-w2="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td" title="Bath towel, Hand towel, Bath mat" data-label="Count entry" data-s="">
                            <span className="pill pill--occupied">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#package" />
                              </svg>
                              {"Count"}
                            </span>
                            {" "}
                            <span className="fd-sub">{"Bath towel, Hand towel +1"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Photo">
                            <span className="fd-muted">{"None"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p15-lch3" aria-label="Edit step 3 of LCH">{"Edit"}</a>
                          </td>
                        </tr>
                        <tr id="saved-lch4" style={{"--k0": "4", "--k1": "3", "--k2": "2", "--k3": "3"}}>
                          <td className="dt__td dt__td--right num nw" data-label="Step" data-t="">
                            <span className="hks-grip" title="Drag to re-order (use Re-order in this static page)">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#grip" />
                              </svg>
                            </span>
                            {"4"}
                          </td>
                          <td className="dt__td" data-label="Instruction on the phone">
                            <a className="fd-link" href="#hks-p15-lch4">{"Report the number of soiled items"}</a>
                            <span className="fd-sub">{"English · Malayalam"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Mandatory tick" data-w2="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td" title="" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Photo">
                            <span className="fd-muted">{"None"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p15-lch4" aria-label="Edit step 4 of LCH">{"Edit"}</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
              <section className="hks-list" id="list-dcl" data-code="HKS-13-DCL" aria-labelledby="list-dcl-t">
                <div className="row row--between fd-tabbar">
                  <div>
                    <h2 className="s-card-title" id="list-dcl-t">{"DCL · Deep clean"}</h2>
                    <span className="fd-muted">{"5 steps · 2 must be ticked before the task can be finished"}</span>
                  </div>
                  <div className="hks-bar-act">
                    <a className="btn" href="#hks-reorder">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#arrow-up-down" />
                      </svg>
                      {"Re-order"}
                    </a>
                    <a className="btn btn--primary" href="#hks-p15-dcl-new" data-leads-to="HKS-P15">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#plus" />
                      </svg>
                      {"Add step"}
                    </a>
                  </div>
                </div>
                <div className="pgw">
                  <div className="s-scroll">
                    <table className="srt dt__table dt--hug" data-code="HKS-13-table-DCL" style={{"--srt-cols": "auto auto auto auto auto max-content"}} data-mc="">
                      <caption className="sr-only">{"Cleaning steps of Deep clean"}</caption>
                      <thead>
                        <tr>
                          <th scope="col" className="dt__th--right">
                            <input className="srt-i srt-a0" type="radio" name="sthks135" id="sthks135-0a" aria-label="Sort by Step, lowest or A first" />
                            <input className="srt-i srt-d0" type="radio" name="sthks135" id="sthks135-0d" aria-label="Sort by Step, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="sthks135-0a">{"Step"}</label>
                            <label className="srt-l srt-l--d" htmlFor="sthks135-0d" aria-hidden="true">{"Step"}</label>
                          </th>
                          <th scope="col">
                            <input className="srt-i srt-a1" type="radio" name="sthks135" id="sthks135-1a" aria-label="Sort by Instruction on the phone, lowest or A first" />
                            <input className="srt-i srt-d1" type="radio" name="sthks135" id="sthks135-1d" aria-label="Sort by Instruction on the phone, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="sthks135-1a">{"Instruction on the phone"}</label>
                            <label className="srt-l srt-l--d" htmlFor="sthks135-1d" aria-hidden="true">{"Instruction on the phone"}</label>
                          </th>
                          <th scope="col">
                            <input className="srt-i srt-a2" type="radio" name="sthks135" id="sthks135-2a" aria-label="Sort by Mandatory tick, lowest or A first" />
                            <input className="srt-i srt-d2" type="radio" name="sthks135" id="sthks135-2d" aria-label="Sort by Mandatory tick, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="sthks135-2a">{"Mandatory tick"}</label>
                            <label className="srt-l srt-l--d" htmlFor="sthks135-2d" aria-hidden="true">{"Mandatory tick"}</label>
                          </th>
                          <th scope="col">{"Count entry"}</th>
                          <th scope="col">
                            <input className="srt-i srt-a4" type="radio" name="sthks135" id="sthks135-4a" aria-label="Sort by Photo, lowest or A first" />
                            <input className="srt-i srt-d4" type="radio" name="sthks135" id="sthks135-4d" aria-label="Sort by Photo, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="sthks135-4a">{"Photo"}</label>
                            <label className="srt-l srt-l--d" htmlFor="sthks135-4d" aria-hidden="true">{"Photo"}</label>
                          </th>
                          <th scope="col" />
                        </tr>
                      </thead>
                      <tbody>
                        <tr id="saved-dcl1" style={{"--k0": "1", "--k1": "4", "--k2": "2", "--k4": "1"}}>
                          <td className="dt__td dt__td--right num nw" data-label="Step" data-t="">
                            <span className="hks-grip" title="Drag to re-order (use Re-order in this static page)">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#grip" />
                              </svg>
                            </span>
                            {"1"}
                          </td>
                          <td className="dt__td" data-label="Instruction on the phone">
                            <a className="fd-link" href="#hks-p15-dcl1">{"Move furniture and protect the fittings"}</a>
                            <span className="fd-sub">{"English · Malayalam"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Mandatory tick" data-w2="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td" title="" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Photo">
                            <span className="fd-muted">{"None"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p15-dcl1" aria-label="Edit step 1 of DCL">{"Edit"}</a>
                          </td>
                        </tr>
                        <tr id="saved-dcl2" style={{"--k0": "2", "--k1": "2", "--k2": "1", "--k4": "2"}}>
                          <td className="dt__td dt__td--right num nw" data-label="Step" data-t="">
                            <span className="hks-grip" title="Drag to re-order (use Re-order in this static page)">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#grip" />
                              </svg>
                            </span>
                            {"2"}
                          </td>
                          <td className="dt__td" data-label="Instruction on the phone" data-w="">
                            <a className="fd-link" href="#hks-p15-dcl2">{"Do the deep-clean job of the day (see Deep Cleaning Rotation)"}</a>
                            <span className="fd-sub">{"English · Malayalam"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Mandatory tick" data-w2="" data-s="">
                            <span className="pill pill--tentative">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check" />
                              </svg>
                              {"Must tick"}
                            </span>
                          </td>
                          <td className="dt__td" title="" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Photo" data-w2="">{"Required"}</td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p15-dcl2" aria-label="Edit step 2 of DCL">{"Edit"}</a>
                          </td>
                        </tr>
                        <tr id="saved-dcl3" style={{"--k0": "3", "--k1": "1", "--k2": "2", "--k4": "1"}}>
                          <td className="dt__td dt__td--right num nw" data-label="Step" data-t="">
                            <span className="hks-grip" title="Drag to re-order (use Re-order in this static page)">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#grip" />
                              </svg>
                            </span>
                            {"3"}
                          </td>
                          <td className="dt__td" data-label="Instruction on the phone">
                            <a className="fd-link" href="#hks-p15-dcl3">{"Clean behind and under the furniture"}</a>
                            <span className="fd-sub">{"English · Malayalam"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Mandatory tick" data-w2="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td" title="" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Photo">
                            <span className="fd-muted">{"None"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p15-dcl3" aria-label="Edit step 3 of DCL">{"Edit"}</a>
                          </td>
                        </tr>
                        <tr id="saved-dcl4" style={{"--k0": "4", "--k1": "5", "--k2": "2", "--k4": "1"}}>
                          <td className="dt__td dt__td--right num nw" data-label="Step" data-t="">
                            <span className="hks-grip" title="Drag to re-order (use Re-order in this static page)">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#grip" />
                              </svg>
                            </span>
                            {"4"}
                          </td>
                          <td className="dt__td" data-label="Instruction on the phone">
                            <a className="fd-link" href="#hks-p15-dcl4">{"Put the furniture back"}</a>
                            <span className="fd-sub">{"English · Malayalam"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Mandatory tick" data-w2="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td" title="" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Photo">
                            <span className="fd-muted">{"None"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p15-dcl4" aria-label="Edit step 4 of DCL">{"Edit"}</a>
                          </td>
                        </tr>
                        <tr id="saved-dcl5" style={{"--k0": "5", "--k1": "3", "--k2": "1", "--k4": "2"}}>
                          <td className="dt__td dt__td--right num nw" data-label="Step" data-t="">
                            <span className="hks-grip" title="Drag to re-order (use Re-order in this static page)">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#grip" />
                              </svg>
                            </span>
                            {"5"}
                          </td>
                          <td className="dt__td" data-label="Instruction on the phone">
                            <a className="fd-link" href="#hks-p15-dcl5">{"Final check"}</a>
                            <span className="fd-sub">{"English · Malayalam"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Mandatory tick" data-w2="" data-s="">
                            <span className="pill pill--tentative">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check" />
                              </svg>
                              {"Must tick"}
                            </span>
                          </td>
                          <td className="dt__td" title="" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Photo" data-w2="">{"Required"}</td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p15-dcl5" aria-label="Edit step 5 of DCL">{"Edit"}</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
              <section className="hks-list" id="list-tdn" data-code="HKS-13-TDN" aria-labelledby="list-tdn-t">
                <div className="row row--between fd-tabbar">
                  <div>
                    <h2 className="s-card-title" id="list-tdn-t">{"TDN · Turndown"}</h2>
                    <span className="fd-muted">{"4 steps · 1 must be ticked before the task can be finished"}</span>
                  </div>
                  <div className="hks-bar-act">
                    <a className="btn" href="#hks-reorder">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#arrow-up-down" />
                      </svg>
                      {"Re-order"}
                    </a>
                    <a className="btn btn--primary" href="#hks-p15-tdn-new" data-leads-to="HKS-P15">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#plus" />
                      </svg>
                      {"Add step"}
                    </a>
                  </div>
                </div>
                <div className="pgw">
                  <div className="s-scroll">
                    <table className="srt dt__table dt--hug" data-code="HKS-13-table-TDN" style={{"--srt-cols": "auto auto auto auto auto max-content"}} data-mc="">
                      <caption className="sr-only">{"Cleaning steps of Turndown"}</caption>
                      <thead>
                        <tr>
                          <th scope="col" className="dt__th--right">
                            <input className="srt-i srt-a0" type="radio" name="sthks136" id="sthks136-0a" aria-label="Sort by Step, lowest or A first" />
                            <input className="srt-i srt-d0" type="radio" name="sthks136" id="sthks136-0d" aria-label="Sort by Step, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="sthks136-0a">{"Step"}</label>
                            <label className="srt-l srt-l--d" htmlFor="sthks136-0d" aria-hidden="true">{"Step"}</label>
                          </th>
                          <th scope="col">
                            <input className="srt-i srt-a1" type="radio" name="sthks136" id="sthks136-1a" aria-label="Sort by Instruction on the phone, lowest or A first" />
                            <input className="srt-i srt-d1" type="radio" name="sthks136" id="sthks136-1d" aria-label="Sort by Instruction on the phone, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="sthks136-1a">{"Instruction on the phone"}</label>
                            <label className="srt-l srt-l--d" htmlFor="sthks136-1d" aria-hidden="true">{"Instruction on the phone"}</label>
                          </th>
                          <th scope="col">
                            <input className="srt-i srt-a2" type="radio" name="sthks136" id="sthks136-2a" aria-label="Sort by Mandatory tick, lowest or A first" />
                            <input className="srt-i srt-d2" type="radio" name="sthks136" id="sthks136-2d" aria-label="Sort by Mandatory tick, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="sthks136-2a">{"Mandatory tick"}</label>
                            <label className="srt-l srt-l--d" htmlFor="sthks136-2d" aria-hidden="true">{"Mandatory tick"}</label>
                          </th>
                          <th scope="col">
                            <input className="srt-i srt-a3" type="radio" name="sthks136" id="sthks136-3a" aria-label="Sort by Count entry, lowest or A first" />
                            <input className="srt-i srt-d3" type="radio" name="sthks136" id="sthks136-3d" aria-label="Sort by Count entry, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="sthks136-3a">{"Count entry"}</label>
                            <label className="srt-l srt-l--d" htmlFor="sthks136-3d" aria-hidden="true">{"Count entry"}</label>
                          </th>
                          <th scope="col">{"Photo"}</th>
                          <th scope="col" />
                        </tr>
                      </thead>
                      <tbody>
                        <tr id="saved-tdn1" style={{"--k0": "1", "--k1": "2", "--k2": "2", "--k3": "2"}}>
                          <td className="dt__td dt__td--right num nw" data-label="Step" data-t="">
                            <span className="hks-grip" title="Drag to re-order (use Re-order in this static page)">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#grip" />
                              </svg>
                            </span>
                            {"1"}
                          </td>
                          <td className="dt__td" data-label="Instruction on the phone">
                            <a className="fd-link" href="#hks-p15-tdn1">{"Knock and announce"}</a>
                            <span className="fd-sub">{"English · Malayalam"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Mandatory tick" data-w2="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td" title="" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Photo">
                            <span className="fd-muted">{"None"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p15-tdn1" aria-label="Edit step 1 of TDN">{"Edit"}</a>
                          </td>
                        </tr>
                        <tr id="saved-tdn2" style={{"--k0": "2", "--k1": "4", "--k2": "1", "--k3": "1"}}>
                          <td className="dt__td dt__td--right num nw" data-label="Step" data-t="">
                            <span className="hks-grip" title="Drag to re-order (use Re-order in this static page)">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#grip" />
                              </svg>
                            </span>
                            {"2"}
                          </td>
                          <td className="dt__td" data-label="Instruction on the phone">
                            <a className="fd-link" href="#hks-p15-tdn2">{"Turn down the bed and place the amenity"}</a>
                            <span className="fd-sub">{"English · Malayalam"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Mandatory tick" data-w2="" data-s="">
                            <span className="pill pill--tentative">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check" />
                              </svg>
                              {"Must tick"}
                            </span>
                          </td>
                          <td className="dt__td" title="Chocolate" data-label="Count entry" data-w2="">
                            <span className="pill pill--occupied">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#package" />
                              </svg>
                              {"Count"}
                            </span>
                            {" "}
                            <span className="fd-sub">{"Chocolate"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Photo">
                            <span className="fd-muted">{"None"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p15-tdn2" aria-label="Edit step 2 of TDN">{"Edit"}</a>
                          </td>
                        </tr>
                        <tr id="saved-tdn3" style={{"--k0": "3", "--k1": "1", "--k2": "2", "--k3": "2"}}>
                          <td className="dt__td dt__td--right num nw" data-label="Step" data-t="">
                            <span className="hks-grip" title="Drag to re-order (use Re-order in this static page)">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#grip" />
                              </svg>
                            </span>
                            {"3"}
                          </td>
                          <td className="dt__td" data-label="Instruction on the phone">
                            <a className="fd-link" href="#hks-p15-tdn3">{"Empty the trash and tidy the bathroom"}</a>
                            <span className="fd-sub">{"English · Malayalam"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Mandatory tick" data-w2="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td" title="" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Photo">
                            <span className="fd-muted">{"None"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p15-tdn3" aria-label="Edit step 3 of TDN">{"Edit"}</a>
                          </td>
                        </tr>
                        <tr id="saved-tdn4" style={{"--k0": "4", "--k1": "3", "--k2": "2", "--k3": "2"}}>
                          <td className="dt__td dt__td--right num nw" data-label="Step" data-t="">
                            <span className="hks-grip" title="Drag to re-order (use Re-order in this static page)">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#grip" />
                              </svg>
                            </span>
                            {"4"}
                          </td>
                          <td className="dt__td" data-label="Instruction on the phone" data-w="">
                            <a className="fd-link" href="#hks-p15-tdn4">{"Switch on the bedside lights and close the curtains"}</a>
                            <span className="fd-sub">{"English · Malayalam"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Mandatory tick" data-w2="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td" title="" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Photo">
                            <span className="fd-muted">{"None"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p15-tdn4" aria-label="Edit step 4 of TDN">{"Edit"}</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
              <div className="modal modal--lg" id="hks-p15-dep1" data-code="HKS-P15" role="dialog" aria-modal="true" aria-labelledby="hks-p15-dep1-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-13-attendant-cleaning-steps/#saved-dep1" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p15-dep1-t">{"Step 1 of DEP"}</h2>
                      <p className="modal__desc">{"A step the attendant sees on the phone. This is separate from the supervisor’s inspection checklist."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-dep1-tt">
                          {"Task type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-dep1-tt" name="task_type" required={true} defaultValue={"DEP · Departure clean"}>
                            <option value="DEP · Departure clean">{"DEP · Departure clean"}</option>
                            <option value="ARR · Arrival check">{"ARR · Arrival check"}</option>
                            <option value="TCH · Touch-up">{"TCH · Touch-up"}</option>
                            <option value="STY · Stayover">{"STY · Stayover"}</option>
                            <option value="LCH · Linen change">{"LCH · Linen change"}</option>
                            <option value="DCL · Deep clean">{"DCL · Deep clean"}</option>
                            <option value="TDN · Turndown">{"TDN · Turndown"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"The step belongs to this task type"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-dep1-tx">
                          {"Step text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p15-dep1-tx" type="text" name="text" maxLength="150" required={true} defaultValue={"Knock, announce “Housekeeping” and enter"} />
                        <span className="field__hint">{"In English, up to 150 characters"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-dep1-ml">{"Malayalam (optional)"}</label>
                        <input className="field__input" id="hks-p15-dep1-ml" type="text" name="text_ml" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Malayalam"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-dep1-hi">{"Hindi (optional)"}</label>
                        <input className="field__input" id="hks-p15-dep1-hi" type="text" name="text_hi" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Hindi"}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p15-dep1-m">
                          <input id="hks-p15-dep1-m" type="checkbox" role="switch" name="mandatory" />
                          <span className="sw__track" />
                          {"Mandatory tick"}
                        </label>
                        <span className="field__hint">{"The attendant cannot finish the task without ticking this step"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">{"Asks for count of"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath towel" />
                            <span className="check__box" />
                            {"Bath towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Hand towel" />
                            <span className="check__box" />
                            {"Hand towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath mat" />
                            <span className="check__box" />
                            {"Bath mat"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bed linen set" />
                            <span className="check__box" />
                            {"Bed linen set"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Pillow case" />
                            <span className="check__box" />
                            {"Pillow case"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Shampoo" />
                            <span className="check__box" />
                            {"Shampoo"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Conditioner" />
                            <span className="check__box" />
                            {"Conditioner"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Body wash" />
                            <span className="check__box" />
                            {"Body wash"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Soap" />
                            <span className="check__box" />
                            {"Soap"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Dental kit" />
                            <span className="check__box" />
                            {"Dental kit"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Water bottle" />
                            <span className="check__box" />
                            {"Water bottle"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Tea / coffee sachets" />
                            <span className="check__box" />
                            {"Tea / coffee sachets"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bathrobe" />
                            <span className="check__box" />
                            {"Bathrobe"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Slippers" />
                            <span className="check__box" />
                            {"Slippers"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Chocolate" />
                            <span className="check__box" />
                            {"Chocolate"}
                          </label>
                        </div>
                        <span className="field__hint">{"The phone asks for the quantity of the items you tick (linen and amenity items from LNS). Leave empty for no count."}</span>
                      </fieldset>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="hks-p15-dep1-ph">
                          {"Photo "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-dep1-ph" name="photo" required={true} defaultValue={"None"}>
                            <option value="None">{"None"}</option>
                            <option value="Optional">{"Optional"}</option>
                            <option value="Required">{"Required"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"None, optional or required at this step"}</span>
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
              <div className="modal modal--lg" id="hks-p15-dep2" data-code="HKS-P15" role="dialog" aria-modal="true" aria-labelledby="hks-p15-dep2-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-13-attendant-cleaning-steps/#saved-dep2" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p15-dep2-t">{"Step 2 of DEP"}</h2>
                      <p className="modal__desc">{"A step the attendant sees on the phone. This is separate from the supervisor’s inspection checklist."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-dep2-tt">
                          {"Task type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-dep2-tt" name="task_type" required={true} defaultValue={"DEP · Departure clean"}>
                            <option value="DEP · Departure clean">{"DEP · Departure clean"}</option>
                            <option value="ARR · Arrival check">{"ARR · Arrival check"}</option>
                            <option value="TCH · Touch-up">{"TCH · Touch-up"}</option>
                            <option value="STY · Stayover">{"STY · Stayover"}</option>
                            <option value="LCH · Linen change">{"LCH · Linen change"}</option>
                            <option value="DCL · Deep clean">{"DCL · Deep clean"}</option>
                            <option value="TDN · Turndown">{"TDN · Turndown"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"The step belongs to this task type"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-dep2-tx">
                          {"Step text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p15-dep2-tx" type="text" name="text" maxLength="150" required={true} defaultValue={"Open curtains and windows to air the room"} />
                        <span className="field__hint">{"In English, up to 150 characters"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-dep2-ml">{"Malayalam (optional)"}</label>
                        <input className="field__input" id="hks-p15-dep2-ml" type="text" name="text_ml" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Malayalam"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-dep2-hi">{"Hindi (optional)"}</label>
                        <input className="field__input" id="hks-p15-dep2-hi" type="text" name="text_hi" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Hindi"}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p15-dep2-m">
                          <input id="hks-p15-dep2-m" type="checkbox" role="switch" name="mandatory" />
                          <span className="sw__track" />
                          {"Mandatory tick"}
                        </label>
                        <span className="field__hint">{"The attendant cannot finish the task without ticking this step"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">{"Asks for count of"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath towel" />
                            <span className="check__box" />
                            {"Bath towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Hand towel" />
                            <span className="check__box" />
                            {"Hand towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath mat" />
                            <span className="check__box" />
                            {"Bath mat"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bed linen set" />
                            <span className="check__box" />
                            {"Bed linen set"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Pillow case" />
                            <span className="check__box" />
                            {"Pillow case"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Shampoo" />
                            <span className="check__box" />
                            {"Shampoo"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Conditioner" />
                            <span className="check__box" />
                            {"Conditioner"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Body wash" />
                            <span className="check__box" />
                            {"Body wash"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Soap" />
                            <span className="check__box" />
                            {"Soap"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Dental kit" />
                            <span className="check__box" />
                            {"Dental kit"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Water bottle" />
                            <span className="check__box" />
                            {"Water bottle"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Tea / coffee sachets" />
                            <span className="check__box" />
                            {"Tea / coffee sachets"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bathrobe" />
                            <span className="check__box" />
                            {"Bathrobe"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Slippers" />
                            <span className="check__box" />
                            {"Slippers"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Chocolate" />
                            <span className="check__box" />
                            {"Chocolate"}
                          </label>
                        </div>
                        <span className="field__hint">{"The phone asks for the quantity of the items you tick (linen and amenity items from LNS). Leave empty for no count."}</span>
                      </fieldset>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="hks-p15-dep2-ph">
                          {"Photo "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-dep2-ph" name="photo" required={true} defaultValue={"None"}>
                            <option value="None">{"None"}</option>
                            <option value="Optional">{"Optional"}</option>
                            <option value="Required">{"Required"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"None, optional or required at this step"}</span>
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
              <div className="modal modal--lg" id="hks-p15-dep3" data-code="HKS-P15" role="dialog" aria-modal="true" aria-labelledby="hks-p15-dep3-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-13-attendant-cleaning-steps/#saved-dep3" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p15-dep3-t">{"Step 3 of DEP"}</h2>
                      <p className="modal__desc">{"A step the attendant sees on the phone. This is separate from the supervisor’s inspection checklist."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-dep3-tt">
                          {"Task type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-dep3-tt" name="task_type" required={true} defaultValue={"DEP · Departure clean"}>
                            <option value="DEP · Departure clean">{"DEP · Departure clean"}</option>
                            <option value="ARR · Arrival check">{"ARR · Arrival check"}</option>
                            <option value="TCH · Touch-up">{"TCH · Touch-up"}</option>
                            <option value="STY · Stayover">{"STY · Stayover"}</option>
                            <option value="LCH · Linen change">{"LCH · Linen change"}</option>
                            <option value="DCL · Deep clean">{"DCL · Deep clean"}</option>
                            <option value="TDN · Turndown">{"TDN · Turndown"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"The step belongs to this task type"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-dep3-tx">
                          {"Step text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p15-dep3-tx" type="text" name="text" maxLength="150" required={true} defaultValue={"Check for guest belongings; report any found item"} />
                        <span className="field__hint">{"In English, up to 150 characters"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-dep3-ml">{"Malayalam (optional)"}</label>
                        <input className="field__input" id="hks-p15-dep3-ml" type="text" name="text_ml" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Malayalam"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-dep3-hi">{"Hindi (optional)"}</label>
                        <input className="field__input" id="hks-p15-dep3-hi" type="text" name="text_hi" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Hindi"}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p15-dep3-m">
                          <input id="hks-p15-dep3-m" type="checkbox" role="switch" name="mandatory" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Mandatory tick"}
                        </label>
                        <span className="field__hint">{"The attendant cannot finish the task without ticking this step"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">{"Asks for count of"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath towel" />
                            <span className="check__box" />
                            {"Bath towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Hand towel" />
                            <span className="check__box" />
                            {"Hand towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath mat" />
                            <span className="check__box" />
                            {"Bath mat"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bed linen set" />
                            <span className="check__box" />
                            {"Bed linen set"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Pillow case" />
                            <span className="check__box" />
                            {"Pillow case"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Shampoo" />
                            <span className="check__box" />
                            {"Shampoo"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Conditioner" />
                            <span className="check__box" />
                            {"Conditioner"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Body wash" />
                            <span className="check__box" />
                            {"Body wash"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Soap" />
                            <span className="check__box" />
                            {"Soap"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Dental kit" />
                            <span className="check__box" />
                            {"Dental kit"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Water bottle" />
                            <span className="check__box" />
                            {"Water bottle"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Tea / coffee sachets" />
                            <span className="check__box" />
                            {"Tea / coffee sachets"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bathrobe" />
                            <span className="check__box" />
                            {"Bathrobe"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Slippers" />
                            <span className="check__box" />
                            {"Slippers"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Chocolate" />
                            <span className="check__box" />
                            {"Chocolate"}
                          </label>
                        </div>
                        <span className="field__hint">{"The phone asks for the quantity of the items you tick (linen and amenity items from LNS). Leave empty for no count."}</span>
                      </fieldset>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="hks-p15-dep3-ph">
                          {"Photo "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-dep3-ph" name="photo" required={true} defaultValue={"None"}>
                            <option value="None">{"None"}</option>
                            <option value="Optional">{"Optional"}</option>
                            <option value="Required">{"Required"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"None, optional or required at this step"}</span>
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
              <div className="modal modal--lg" id="hks-p15-dep4" data-code="HKS-P15" role="dialog" aria-modal="true" aria-labelledby="hks-p15-dep4-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-13-attendant-cleaning-steps/#saved-dep4" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p15-dep4-t">{"Step 4 of DEP"}</h2>
                      <p className="modal__desc">{"A step the attendant sees on the phone. This is separate from the supervisor’s inspection checklist."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-dep4-tt">
                          {"Task type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-dep4-tt" name="task_type" required={true} defaultValue={"DEP · Departure clean"}>
                            <option value="DEP · Departure clean">{"DEP · Departure clean"}</option>
                            <option value="ARR · Arrival check">{"ARR · Arrival check"}</option>
                            <option value="TCH · Touch-up">{"TCH · Touch-up"}</option>
                            <option value="STY · Stayover">{"STY · Stayover"}</option>
                            <option value="LCH · Linen change">{"LCH · Linen change"}</option>
                            <option value="DCL · Deep clean">{"DCL · Deep clean"}</option>
                            <option value="TDN · Turndown">{"TDN · Turndown"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"The step belongs to this task type"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-dep4-tx">
                          {"Step text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p15-dep4-tx" type="text" name="text" maxLength="150" required={true} defaultValue={"Strip the bed and put the linen in the trolley bag"} />
                        <span className="field__hint">{"In English, up to 150 characters"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-dep4-ml">{"Malayalam (optional)"}</label>
                        <input className="field__input" id="hks-p15-dep4-ml" type="text" name="text_ml" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Malayalam"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-dep4-hi">{"Hindi (optional)"}</label>
                        <input className="field__input" id="hks-p15-dep4-hi" type="text" name="text_hi" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Hindi"}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p15-dep4-m">
                          <input id="hks-p15-dep4-m" type="checkbox" role="switch" name="mandatory" />
                          <span className="sw__track" />
                          {"Mandatory tick"}
                        </label>
                        <span className="field__hint">{"The attendant cannot finish the task without ticking this step"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">{"Asks for count of"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath towel" />
                            <span className="check__box" />
                            {"Bath towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Hand towel" />
                            <span className="check__box" />
                            {"Hand towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath mat" />
                            <span className="check__box" />
                            {"Bath mat"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bed linen set" defaultChecked={true} />
                            <span className="check__box" />
                            {"Bed linen set"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Pillow case" defaultChecked={true} />
                            <span className="check__box" />
                            {"Pillow case"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Shampoo" />
                            <span className="check__box" />
                            {"Shampoo"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Conditioner" />
                            <span className="check__box" />
                            {"Conditioner"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Body wash" />
                            <span className="check__box" />
                            {"Body wash"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Soap" />
                            <span className="check__box" />
                            {"Soap"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Dental kit" />
                            <span className="check__box" />
                            {"Dental kit"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Water bottle" />
                            <span className="check__box" />
                            {"Water bottle"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Tea / coffee sachets" />
                            <span className="check__box" />
                            {"Tea / coffee sachets"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bathrobe" />
                            <span className="check__box" />
                            {"Bathrobe"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Slippers" />
                            <span className="check__box" />
                            {"Slippers"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Chocolate" />
                            <span className="check__box" />
                            {"Chocolate"}
                          </label>
                        </div>
                        <span className="field__hint">{"The phone asks for the quantity of the items you tick (linen and amenity items from LNS). Leave empty for no count."}</span>
                      </fieldset>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="hks-p15-dep4-ph">
                          {"Photo "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-dep4-ph" name="photo" required={true} defaultValue={"None"}>
                            <option value="None">{"None"}</option>
                            <option value="Optional">{"Optional"}</option>
                            <option value="Required">{"Required"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"None, optional or required at this step"}</span>
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
              <div className="modal modal--lg" id="hks-p15-dep5" data-code="HKS-P15" role="dialog" aria-modal="true" aria-labelledby="hks-p15-dep5-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-13-attendant-cleaning-steps/#saved-dep5" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p15-dep5-t">{"Step 5 of DEP"}</h2>
                      <p className="modal__desc">{"A step the attendant sees on the phone. This is separate from the supervisor’s inspection checklist."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-dep5-tt">
                          {"Task type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-dep5-tt" name="task_type" required={true} defaultValue={"DEP · Departure clean"}>
                            <option value="DEP · Departure clean">{"DEP · Departure clean"}</option>
                            <option value="ARR · Arrival check">{"ARR · Arrival check"}</option>
                            <option value="TCH · Touch-up">{"TCH · Touch-up"}</option>
                            <option value="STY · Stayover">{"STY · Stayover"}</option>
                            <option value="LCH · Linen change">{"LCH · Linen change"}</option>
                            <option value="DCL · Deep clean">{"DCL · Deep clean"}</option>
                            <option value="TDN · Turndown">{"TDN · Turndown"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"The step belongs to this task type"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-dep5-tx">
                          {"Step text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p15-dep5-tx" type="text" name="text" maxLength="150" required={true} defaultValue={"Remove trash and empty the bins"} />
                        <span className="field__hint">{"In English, up to 150 characters"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-dep5-ml">{"Malayalam (optional)"}</label>
                        <input className="field__input" id="hks-p15-dep5-ml" type="text" name="text_ml" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Malayalam"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-dep5-hi">{"Hindi (optional)"}</label>
                        <input className="field__input" id="hks-p15-dep5-hi" type="text" name="text_hi" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Hindi"}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p15-dep5-m">
                          <input id="hks-p15-dep5-m" type="checkbox" role="switch" name="mandatory" />
                          <span className="sw__track" />
                          {"Mandatory tick"}
                        </label>
                        <span className="field__hint">{"The attendant cannot finish the task without ticking this step"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">{"Asks for count of"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath towel" />
                            <span className="check__box" />
                            {"Bath towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Hand towel" />
                            <span className="check__box" />
                            {"Hand towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath mat" />
                            <span className="check__box" />
                            {"Bath mat"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bed linen set" />
                            <span className="check__box" />
                            {"Bed linen set"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Pillow case" />
                            <span className="check__box" />
                            {"Pillow case"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Shampoo" />
                            <span className="check__box" />
                            {"Shampoo"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Conditioner" />
                            <span className="check__box" />
                            {"Conditioner"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Body wash" />
                            <span className="check__box" />
                            {"Body wash"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Soap" />
                            <span className="check__box" />
                            {"Soap"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Dental kit" />
                            <span className="check__box" />
                            {"Dental kit"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Water bottle" />
                            <span className="check__box" />
                            {"Water bottle"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Tea / coffee sachets" />
                            <span className="check__box" />
                            {"Tea / coffee sachets"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bathrobe" />
                            <span className="check__box" />
                            {"Bathrobe"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Slippers" />
                            <span className="check__box" />
                            {"Slippers"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Chocolate" />
                            <span className="check__box" />
                            {"Chocolate"}
                          </label>
                        </div>
                        <span className="field__hint">{"The phone asks for the quantity of the items you tick (linen and amenity items from LNS). Leave empty for no count."}</span>
                      </fieldset>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="hks-p15-dep5-ph">
                          {"Photo "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-dep5-ph" name="photo" required={true} defaultValue={"None"}>
                            <option value="None">{"None"}</option>
                            <option value="Optional">{"Optional"}</option>
                            <option value="Required">{"Required"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"None, optional or required at this step"}</span>
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
              <div className="modal modal--lg" id="hks-p15-dep6" data-code="HKS-P15" role="dialog" aria-modal="true" aria-labelledby="hks-p15-dep6-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-13-attendant-cleaning-steps/#saved-dep6" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p15-dep6-t">{"Step 6 of DEP"}</h2>
                      <p className="modal__desc">{"A step the attendant sees on the phone. This is separate from the supervisor’s inspection checklist."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-dep6-tt">
                          {"Task type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-dep6-tt" name="task_type" required={true} defaultValue={"DEP · Departure clean"}>
                            <option value="DEP · Departure clean">{"DEP · Departure clean"}</option>
                            <option value="ARR · Arrival check">{"ARR · Arrival check"}</option>
                            <option value="TCH · Touch-up">{"TCH · Touch-up"}</option>
                            <option value="STY · Stayover">{"STY · Stayover"}</option>
                            <option value="LCH · Linen change">{"LCH · Linen change"}</option>
                            <option value="DCL · Deep clean">{"DCL · Deep clean"}</option>
                            <option value="TDN · Turndown">{"TDN · Turndown"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"The step belongs to this task type"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-dep6-tx">
                          {"Step text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p15-dep6-tx" type="text" name="text" maxLength="150" required={true} defaultValue={"Clean the bathroom: toilet incl. under the rim, basin, shower"} />
                        <span className="field__hint">{"In English, up to 150 characters"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-dep6-ml">{"Malayalam (optional)"}</label>
                        <input className="field__input" id="hks-p15-dep6-ml" type="text" name="text_ml" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Malayalam"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-dep6-hi">{"Hindi (optional)"}</label>
                        <input className="field__input" id="hks-p15-dep6-hi" type="text" name="text_hi" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Hindi"}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p15-dep6-m">
                          <input id="hks-p15-dep6-m" type="checkbox" role="switch" name="mandatory" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Mandatory tick"}
                        </label>
                        <span className="field__hint">{"The attendant cannot finish the task without ticking this step"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">{"Asks for count of"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath towel" />
                            <span className="check__box" />
                            {"Bath towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Hand towel" />
                            <span className="check__box" />
                            {"Hand towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath mat" />
                            <span className="check__box" />
                            {"Bath mat"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bed linen set" />
                            <span className="check__box" />
                            {"Bed linen set"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Pillow case" />
                            <span className="check__box" />
                            {"Pillow case"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Shampoo" />
                            <span className="check__box" />
                            {"Shampoo"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Conditioner" />
                            <span className="check__box" />
                            {"Conditioner"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Body wash" />
                            <span className="check__box" />
                            {"Body wash"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Soap" />
                            <span className="check__box" />
                            {"Soap"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Dental kit" />
                            <span className="check__box" />
                            {"Dental kit"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Water bottle" />
                            <span className="check__box" />
                            {"Water bottle"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Tea / coffee sachets" />
                            <span className="check__box" />
                            {"Tea / coffee sachets"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bathrobe" />
                            <span className="check__box" />
                            {"Bathrobe"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Slippers" />
                            <span className="check__box" />
                            {"Slippers"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Chocolate" />
                            <span className="check__box" />
                            {"Chocolate"}
                          </label>
                        </div>
                        <span className="field__hint">{"The phone asks for the quantity of the items you tick (linen and amenity items from LNS). Leave empty for no count."}</span>
                      </fieldset>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="hks-p15-dep6-ph">
                          {"Photo "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-dep6-ph" name="photo" required={true} defaultValue={"None"}>
                            <option value="None">{"None"}</option>
                            <option value="Optional">{"Optional"}</option>
                            <option value="Required">{"Required"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"None, optional or required at this step"}</span>
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
              <div className="modal modal--lg" id="hks-p15-dep7" data-code="HKS-P15" role="dialog" aria-modal="true" aria-labelledby="hks-p15-dep7-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-13-attendant-cleaning-steps/#saved-dep7" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p15-dep7-t">{"Step 7 of DEP"}</h2>
                      <p className="modal__desc">{"A step the attendant sees on the phone. This is separate from the supervisor’s inspection checklist."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-dep7-tt">
                          {"Task type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-dep7-tt" name="task_type" required={true} defaultValue={"DEP · Departure clean"}>
                            <option value="DEP · Departure clean">{"DEP · Departure clean"}</option>
                            <option value="ARR · Arrival check">{"ARR · Arrival check"}</option>
                            <option value="TCH · Touch-up">{"TCH · Touch-up"}</option>
                            <option value="STY · Stayover">{"STY · Stayover"}</option>
                            <option value="LCH · Linen change">{"LCH · Linen change"}</option>
                            <option value="DCL · Deep clean">{"DCL · Deep clean"}</option>
                            <option value="TDN · Turndown">{"TDN · Turndown"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"The step belongs to this task type"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-dep7-tx">
                          {"Step text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p15-dep7-tx" type="text" name="text" maxLength="150" required={true} defaultValue={"Wipe mirrors and glass"} />
                        <span className="field__hint">{"In English, up to 150 characters"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-dep7-ml">{"Malayalam (optional)"}</label>
                        <input className="field__input" id="hks-p15-dep7-ml" type="text" name="text_ml" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Malayalam"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-dep7-hi">{"Hindi (optional)"}</label>
                        <input className="field__input" id="hks-p15-dep7-hi" type="text" name="text_hi" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Hindi"}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p15-dep7-m">
                          <input id="hks-p15-dep7-m" type="checkbox" role="switch" name="mandatory" />
                          <span className="sw__track" />
                          {"Mandatory tick"}
                        </label>
                        <span className="field__hint">{"The attendant cannot finish the task without ticking this step"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">{"Asks for count of"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath towel" />
                            <span className="check__box" />
                            {"Bath towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Hand towel" />
                            <span className="check__box" />
                            {"Hand towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath mat" />
                            <span className="check__box" />
                            {"Bath mat"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bed linen set" />
                            <span className="check__box" />
                            {"Bed linen set"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Pillow case" />
                            <span className="check__box" />
                            {"Pillow case"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Shampoo" />
                            <span className="check__box" />
                            {"Shampoo"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Conditioner" />
                            <span className="check__box" />
                            {"Conditioner"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Body wash" />
                            <span className="check__box" />
                            {"Body wash"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Soap" />
                            <span className="check__box" />
                            {"Soap"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Dental kit" />
                            <span className="check__box" />
                            {"Dental kit"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Water bottle" />
                            <span className="check__box" />
                            {"Water bottle"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Tea / coffee sachets" />
                            <span className="check__box" />
                            {"Tea / coffee sachets"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bathrobe" />
                            <span className="check__box" />
                            {"Bathrobe"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Slippers" />
                            <span className="check__box" />
                            {"Slippers"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Chocolate" />
                            <span className="check__box" />
                            {"Chocolate"}
                          </label>
                        </div>
                        <span className="field__hint">{"The phone asks for the quantity of the items you tick (linen and amenity items from LNS). Leave empty for no count."}</span>
                      </fieldset>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="hks-p15-dep7-ph">
                          {"Photo "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-dep7-ph" name="photo" required={true} defaultValue={"None"}>
                            <option value="None">{"None"}</option>
                            <option value="Optional">{"Optional"}</option>
                            <option value="Required">{"Required"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"None, optional or required at this step"}</span>
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
              <div className="modal modal--lg" id="hks-p15-dep8" data-code="HKS-P15" role="dialog" aria-modal="true" aria-labelledby="hks-p15-dep8-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-13-attendant-cleaning-steps/#saved-dep8" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p15-dep8-t">{"Step 8 of DEP"}</h2>
                      <p className="modal__desc">{"A step the attendant sees on the phone. This is separate from the supervisor’s inspection checklist."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-dep8-tt">
                          {"Task type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-dep8-tt" name="task_type" required={true} defaultValue={"DEP · Departure clean"}>
                            <option value="DEP · Departure clean">{"DEP · Departure clean"}</option>
                            <option value="ARR · Arrival check">{"ARR · Arrival check"}</option>
                            <option value="TCH · Touch-up">{"TCH · Touch-up"}</option>
                            <option value="STY · Stayover">{"STY · Stayover"}</option>
                            <option value="LCH · Linen change">{"LCH · Linen change"}</option>
                            <option value="DCL · Deep clean">{"DCL · Deep clean"}</option>
                            <option value="TDN · Turndown">{"TDN · Turndown"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"The step belongs to this task type"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-dep8-tx">
                          {"Step text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p15-dep8-tx" type="text" name="text" maxLength="150" required={true} defaultValue={"Dust furniture, fittings and the TV"} />
                        <span className="field__hint">{"In English, up to 150 characters"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-dep8-ml">{"Malayalam (optional)"}</label>
                        <input className="field__input" id="hks-p15-dep8-ml" type="text" name="text_ml" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Malayalam"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-dep8-hi">{"Hindi (optional)"}</label>
                        <input className="field__input" id="hks-p15-dep8-hi" type="text" name="text_hi" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Hindi"}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p15-dep8-m">
                          <input id="hks-p15-dep8-m" type="checkbox" role="switch" name="mandatory" />
                          <span className="sw__track" />
                          {"Mandatory tick"}
                        </label>
                        <span className="field__hint">{"The attendant cannot finish the task without ticking this step"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">{"Asks for count of"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath towel" />
                            <span className="check__box" />
                            {"Bath towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Hand towel" />
                            <span className="check__box" />
                            {"Hand towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath mat" />
                            <span className="check__box" />
                            {"Bath mat"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bed linen set" />
                            <span className="check__box" />
                            {"Bed linen set"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Pillow case" />
                            <span className="check__box" />
                            {"Pillow case"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Shampoo" />
                            <span className="check__box" />
                            {"Shampoo"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Conditioner" />
                            <span className="check__box" />
                            {"Conditioner"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Body wash" />
                            <span className="check__box" />
                            {"Body wash"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Soap" />
                            <span className="check__box" />
                            {"Soap"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Dental kit" />
                            <span className="check__box" />
                            {"Dental kit"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Water bottle" />
                            <span className="check__box" />
                            {"Water bottle"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Tea / coffee sachets" />
                            <span className="check__box" />
                            {"Tea / coffee sachets"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bathrobe" />
                            <span className="check__box" />
                            {"Bathrobe"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Slippers" />
                            <span className="check__box" />
                            {"Slippers"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Chocolate" />
                            <span className="check__box" />
                            {"Chocolate"}
                          </label>
                        </div>
                        <span className="field__hint">{"The phone asks for the quantity of the items you tick (linen and amenity items from LNS). Leave empty for no count."}</span>
                      </fieldset>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="hks-p15-dep8-ph">
                          {"Photo "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-dep8-ph" name="photo" required={true} defaultValue={"None"}>
                            <option value="None">{"None"}</option>
                            <option value="Optional">{"Optional"}</option>
                            <option value="Required">{"Required"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"None, optional or required at this step"}</span>
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
              <div className="modal modal--lg" id="hks-p15-dep9" data-code="HKS-P15" role="dialog" aria-modal="true" aria-labelledby="hks-p15-dep9-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-13-attendant-cleaning-steps/#saved-dep9" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p15-dep9-t">{"Step 9 of DEP"}</h2>
                      <p className="modal__desc">{"A step the attendant sees on the phone. This is separate from the supervisor’s inspection checklist."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-dep9-tt">
                          {"Task type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-dep9-tt" name="task_type" required={true} defaultValue={"DEP · Departure clean"}>
                            <option value="DEP · Departure clean">{"DEP · Departure clean"}</option>
                            <option value="ARR · Arrival check">{"ARR · Arrival check"}</option>
                            <option value="TCH · Touch-up">{"TCH · Touch-up"}</option>
                            <option value="STY · Stayover">{"STY · Stayover"}</option>
                            <option value="LCH · Linen change">{"LCH · Linen change"}</option>
                            <option value="DCL · Deep clean">{"DCL · Deep clean"}</option>
                            <option value="TDN · Turndown">{"TDN · Turndown"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"The step belongs to this task type"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-dep9-tx">
                          {"Step text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p15-dep9-tx" type="text" name="text" maxLength="150" required={true} defaultValue={"Make the bed with fresh linen"} />
                        <span className="field__hint">{"In English, up to 150 characters"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-dep9-ml">{"Malayalam (optional)"}</label>
                        <input className="field__input" id="hks-p15-dep9-ml" type="text" name="text_ml" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Malayalam"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-dep9-hi">{"Hindi (optional)"}</label>
                        <input className="field__input" id="hks-p15-dep9-hi" type="text" name="text_hi" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Hindi"}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p15-dep9-m">
                          <input id="hks-p15-dep9-m" type="checkbox" role="switch" name="mandatory" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Mandatory tick"}
                        </label>
                        <span className="field__hint">{"The attendant cannot finish the task without ticking this step"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">{"Asks for count of"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath towel" />
                            <span className="check__box" />
                            {"Bath towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Hand towel" />
                            <span className="check__box" />
                            {"Hand towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath mat" />
                            <span className="check__box" />
                            {"Bath mat"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bed linen set" defaultChecked={true} />
                            <span className="check__box" />
                            {"Bed linen set"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Pillow case" defaultChecked={true} />
                            <span className="check__box" />
                            {"Pillow case"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Shampoo" />
                            <span className="check__box" />
                            {"Shampoo"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Conditioner" />
                            <span className="check__box" />
                            {"Conditioner"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Body wash" />
                            <span className="check__box" />
                            {"Body wash"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Soap" />
                            <span className="check__box" />
                            {"Soap"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Dental kit" />
                            <span className="check__box" />
                            {"Dental kit"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Water bottle" />
                            <span className="check__box" />
                            {"Water bottle"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Tea / coffee sachets" />
                            <span className="check__box" />
                            {"Tea / coffee sachets"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bathrobe" />
                            <span className="check__box" />
                            {"Bathrobe"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Slippers" />
                            <span className="check__box" />
                            {"Slippers"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Chocolate" />
                            <span className="check__box" />
                            {"Chocolate"}
                          </label>
                        </div>
                        <span className="field__hint">{"The phone asks for the quantity of the items you tick (linen and amenity items from LNS). Leave empty for no count."}</span>
                      </fieldset>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="hks-p15-dep9-ph">
                          {"Photo "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-dep9-ph" name="photo" required={true} defaultValue={"None"}>
                            <option value="None">{"None"}</option>
                            <option value="Optional">{"Optional"}</option>
                            <option value="Required">{"Required"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"None, optional or required at this step"}</span>
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
              <div className="modal modal--lg" id="hks-p15-dep10" data-code="HKS-P15" role="dialog" aria-modal="true" aria-labelledby="hks-p15-dep10-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-13-attendant-cleaning-steps/#saved-dep10" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p15-dep10-t">{"Step 10 of DEP"}</h2>
                      <p className="modal__desc">{"A step the attendant sees on the phone. This is separate from the supervisor’s inspection checklist."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-dep10-tt">
                          {"Task type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-dep10-tt" name="task_type" required={true} defaultValue={"DEP · Departure clean"}>
                            <option value="DEP · Departure clean">{"DEP · Departure clean"}</option>
                            <option value="ARR · Arrival check">{"ARR · Arrival check"}</option>
                            <option value="TCH · Touch-up">{"TCH · Touch-up"}</option>
                            <option value="STY · Stayover">{"STY · Stayover"}</option>
                            <option value="LCH · Linen change">{"LCH · Linen change"}</option>
                            <option value="DCL · Deep clean">{"DCL · Deep clean"}</option>
                            <option value="TDN · Turndown">{"TDN · Turndown"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"The step belongs to this task type"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-dep10-tx">
                          {"Step text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p15-dep10-tx" type="text" name="text" maxLength="150" required={true} defaultValue={"Replace towels and replenish amenities"} />
                        <span className="field__hint">{"In English, up to 150 characters"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-dep10-ml">{"Malayalam (optional)"}</label>
                        <input className="field__input" id="hks-p15-dep10-ml" type="text" name="text_ml" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Malayalam"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-dep10-hi">{"Hindi (optional)"}</label>
                        <input className="field__input" id="hks-p15-dep10-hi" type="text" name="text_hi" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Hindi"}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p15-dep10-m">
                          <input id="hks-p15-dep10-m" type="checkbox" role="switch" name="mandatory" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Mandatory tick"}
                        </label>
                        <span className="field__hint">{"The attendant cannot finish the task without ticking this step"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">{"Asks for count of"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath towel" defaultChecked={true} />
                            <span className="check__box" />
                            {"Bath towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Hand towel" defaultChecked={true} />
                            <span className="check__box" />
                            {"Hand towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath mat" defaultChecked={true} />
                            <span className="check__box" />
                            {"Bath mat"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bed linen set" />
                            <span className="check__box" />
                            {"Bed linen set"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Pillow case" />
                            <span className="check__box" />
                            {"Pillow case"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Shampoo" defaultChecked={true} />
                            <span className="check__box" />
                            {"Shampoo"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Conditioner" defaultChecked={true} />
                            <span className="check__box" />
                            {"Conditioner"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Body wash" defaultChecked={true} />
                            <span className="check__box" />
                            {"Body wash"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Soap" defaultChecked={true} />
                            <span className="check__box" />
                            {"Soap"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Dental kit" />
                            <span className="check__box" />
                            {"Dental kit"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Water bottle" />
                            <span className="check__box" />
                            {"Water bottle"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Tea / coffee sachets" />
                            <span className="check__box" />
                            {"Tea / coffee sachets"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bathrobe" />
                            <span className="check__box" />
                            {"Bathrobe"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Slippers" />
                            <span className="check__box" />
                            {"Slippers"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Chocolate" />
                            <span className="check__box" />
                            {"Chocolate"}
                          </label>
                        </div>
                        <span className="field__hint">{"The phone asks for the quantity of the items you tick (linen and amenity items from LNS). Leave empty for no count."}</span>
                      </fieldset>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="hks-p15-dep10-ph">
                          {"Photo "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-dep10-ph" name="photo" required={true} defaultValue={"None"}>
                            <option value="None">{"None"}</option>
                            <option value="Optional">{"Optional"}</option>
                            <option value="Required">{"Required"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"None, optional or required at this step"}</span>
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
              <div className="modal modal--lg" id="hks-p15-dep11" data-code="HKS-P15" role="dialog" aria-modal="true" aria-labelledby="hks-p15-dep11-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-13-attendant-cleaning-steps/#saved-dep11" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p15-dep11-t">{"Step 11 of DEP"}</h2>
                      <p className="modal__desc">{"A step the attendant sees on the phone. This is separate from the supervisor’s inspection checklist."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-dep11-tt">
                          {"Task type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-dep11-tt" name="task_type" required={true} defaultValue={"DEP · Departure clean"}>
                            <option value="DEP · Departure clean">{"DEP · Departure clean"}</option>
                            <option value="ARR · Arrival check">{"ARR · Arrival check"}</option>
                            <option value="TCH · Touch-up">{"TCH · Touch-up"}</option>
                            <option value="STY · Stayover">{"STY · Stayover"}</option>
                            <option value="LCH · Linen change">{"LCH · Linen change"}</option>
                            <option value="DCL · Deep clean">{"DCL · Deep clean"}</option>
                            <option value="TDN · Turndown">{"TDN · Turndown"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"The step belongs to this task type"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-dep11-tx">
                          {"Step text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p15-dep11-tx" type="text" name="text" maxLength="150" required={true} defaultValue={"Check the minibar and tea / coffee tray; report what is missing"} />
                        <span className="field__hint">{"In English, up to 150 characters"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-dep11-ml">{"Malayalam (optional)"}</label>
                        <input className="field__input" id="hks-p15-dep11-ml" type="text" name="text_ml" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Malayalam"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-dep11-hi">{"Hindi (optional)"}</label>
                        <input className="field__input" id="hks-p15-dep11-hi" type="text" name="text_hi" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Hindi"}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p15-dep11-m">
                          <input id="hks-p15-dep11-m" type="checkbox" role="switch" name="mandatory" />
                          <span className="sw__track" />
                          {"Mandatory tick"}
                        </label>
                        <span className="field__hint">{"The attendant cannot finish the task without ticking this step"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">{"Asks for count of"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath towel" />
                            <span className="check__box" />
                            {"Bath towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Hand towel" />
                            <span className="check__box" />
                            {"Hand towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath mat" />
                            <span className="check__box" />
                            {"Bath mat"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bed linen set" />
                            <span className="check__box" />
                            {"Bed linen set"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Pillow case" />
                            <span className="check__box" />
                            {"Pillow case"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Shampoo" />
                            <span className="check__box" />
                            {"Shampoo"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Conditioner" />
                            <span className="check__box" />
                            {"Conditioner"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Body wash" />
                            <span className="check__box" />
                            {"Body wash"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Soap" />
                            <span className="check__box" />
                            {"Soap"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Dental kit" />
                            <span className="check__box" />
                            {"Dental kit"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Water bottle" defaultChecked={true} />
                            <span className="check__box" />
                            {"Water bottle"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Tea / coffee sachets" defaultChecked={true} />
                            <span className="check__box" />
                            {"Tea / coffee sachets"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bathrobe" />
                            <span className="check__box" />
                            {"Bathrobe"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Slippers" />
                            <span className="check__box" />
                            {"Slippers"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Chocolate" />
                            <span className="check__box" />
                            {"Chocolate"}
                          </label>
                        </div>
                        <span className="field__hint">{"The phone asks for the quantity of the items you tick (linen and amenity items from LNS). Leave empty for no count."}</span>
                      </fieldset>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="hks-p15-dep11-ph">
                          {"Photo "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-dep11-ph" name="photo" required={true} defaultValue={"None"}>
                            <option value="None">{"None"}</option>
                            <option value="Optional">{"Optional"}</option>
                            <option value="Required">{"Required"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"None, optional or required at this step"}</span>
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
              <div className="modal modal--lg" id="hks-p15-dep12" data-code="HKS-P15" role="dialog" aria-modal="true" aria-labelledby="hks-p15-dep12-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-13-attendant-cleaning-steps/#saved-dep12" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p15-dep12-t">{"Step 12 of DEP"}</h2>
                      <p className="modal__desc">{"A step the attendant sees on the phone. This is separate from the supervisor’s inspection checklist."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-dep12-tt">
                          {"Task type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-dep12-tt" name="task_type" required={true} defaultValue={"DEP · Departure clean"}>
                            <option value="DEP · Departure clean">{"DEP · Departure clean"}</option>
                            <option value="ARR · Arrival check">{"ARR · Arrival check"}</option>
                            <option value="TCH · Touch-up">{"TCH · Touch-up"}</option>
                            <option value="STY · Stayover">{"STY · Stayover"}</option>
                            <option value="LCH · Linen change">{"LCH · Linen change"}</option>
                            <option value="DCL · Deep clean">{"DCL · Deep clean"}</option>
                            <option value="TDN · Turndown">{"TDN · Turndown"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"The step belongs to this task type"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-dep12-tx">
                          {"Step text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p15-dep12-tx" type="text" name="text" maxLength="150" required={true} defaultValue={"Vacuum the floor and carpet"} />
                        <span className="field__hint">{"In English, up to 150 characters"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-dep12-ml">{"Malayalam (optional)"}</label>
                        <input className="field__input" id="hks-p15-dep12-ml" type="text" name="text_ml" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Malayalam"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-dep12-hi">{"Hindi (optional)"}</label>
                        <input className="field__input" id="hks-p15-dep12-hi" type="text" name="text_hi" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Hindi"}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p15-dep12-m">
                          <input id="hks-p15-dep12-m" type="checkbox" role="switch" name="mandatory" />
                          <span className="sw__track" />
                          {"Mandatory tick"}
                        </label>
                        <span className="field__hint">{"The attendant cannot finish the task without ticking this step"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">{"Asks for count of"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath towel" />
                            <span className="check__box" />
                            {"Bath towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Hand towel" />
                            <span className="check__box" />
                            {"Hand towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath mat" />
                            <span className="check__box" />
                            {"Bath mat"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bed linen set" />
                            <span className="check__box" />
                            {"Bed linen set"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Pillow case" />
                            <span className="check__box" />
                            {"Pillow case"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Shampoo" />
                            <span className="check__box" />
                            {"Shampoo"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Conditioner" />
                            <span className="check__box" />
                            {"Conditioner"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Body wash" />
                            <span className="check__box" />
                            {"Body wash"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Soap" />
                            <span className="check__box" />
                            {"Soap"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Dental kit" />
                            <span className="check__box" />
                            {"Dental kit"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Water bottle" />
                            <span className="check__box" />
                            {"Water bottle"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Tea / coffee sachets" />
                            <span className="check__box" />
                            {"Tea / coffee sachets"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bathrobe" />
                            <span className="check__box" />
                            {"Bathrobe"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Slippers" />
                            <span className="check__box" />
                            {"Slippers"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Chocolate" />
                            <span className="check__box" />
                            {"Chocolate"}
                          </label>
                        </div>
                        <span className="field__hint">{"The phone asks for the quantity of the items you tick (linen and amenity items from LNS). Leave empty for no count."}</span>
                      </fieldset>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="hks-p15-dep12-ph">
                          {"Photo "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-dep12-ph" name="photo" required={true} defaultValue={"None"}>
                            <option value="None">{"None"}</option>
                            <option value="Optional">{"Optional"}</option>
                            <option value="Required">{"Required"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"None, optional or required at this step"}</span>
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
              <div className="modal modal--lg" id="hks-p15-dep13" data-code="HKS-P15" role="dialog" aria-modal="true" aria-labelledby="hks-p15-dep13-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-13-attendant-cleaning-steps/#saved-dep13" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p15-dep13-t">{"Step 13 of DEP"}</h2>
                      <p className="modal__desc">{"A step the attendant sees on the phone. This is separate from the supervisor’s inspection checklist."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-dep13-tt">
                          {"Task type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-dep13-tt" name="task_type" required={true} defaultValue={"DEP · Departure clean"}>
                            <option value="DEP · Departure clean">{"DEP · Departure clean"}</option>
                            <option value="ARR · Arrival check">{"ARR · Arrival check"}</option>
                            <option value="TCH · Touch-up">{"TCH · Touch-up"}</option>
                            <option value="STY · Stayover">{"STY · Stayover"}</option>
                            <option value="LCH · Linen change">{"LCH · Linen change"}</option>
                            <option value="DCL · Deep clean">{"DCL · Deep clean"}</option>
                            <option value="TDN · Turndown">{"TDN · Turndown"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"The step belongs to this task type"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-dep13-tx">
                          {"Step text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p15-dep13-tx" type="text" name="text" maxLength="150" required={true} defaultValue={"Final check from the door and switch the light on"} />
                        <span className="field__hint">{"In English, up to 150 characters"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-dep13-ml">{"Malayalam (optional)"}</label>
                        <input className="field__input" id="hks-p15-dep13-ml" type="text" name="text_ml" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Malayalam"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-dep13-hi">{"Hindi (optional)"}</label>
                        <input className="field__input" id="hks-p15-dep13-hi" type="text" name="text_hi" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Hindi"}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p15-dep13-m">
                          <input id="hks-p15-dep13-m" type="checkbox" role="switch" name="mandatory" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Mandatory tick"}
                        </label>
                        <span className="field__hint">{"The attendant cannot finish the task without ticking this step"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">{"Asks for count of"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath towel" />
                            <span className="check__box" />
                            {"Bath towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Hand towel" />
                            <span className="check__box" />
                            {"Hand towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath mat" />
                            <span className="check__box" />
                            {"Bath mat"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bed linen set" />
                            <span className="check__box" />
                            {"Bed linen set"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Pillow case" />
                            <span className="check__box" />
                            {"Pillow case"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Shampoo" />
                            <span className="check__box" />
                            {"Shampoo"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Conditioner" />
                            <span className="check__box" />
                            {"Conditioner"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Body wash" />
                            <span className="check__box" />
                            {"Body wash"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Soap" />
                            <span className="check__box" />
                            {"Soap"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Dental kit" />
                            <span className="check__box" />
                            {"Dental kit"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Water bottle" />
                            <span className="check__box" />
                            {"Water bottle"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Tea / coffee sachets" />
                            <span className="check__box" />
                            {"Tea / coffee sachets"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bathrobe" />
                            <span className="check__box" />
                            {"Bathrobe"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Slippers" />
                            <span className="check__box" />
                            {"Slippers"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Chocolate" />
                            <span className="check__box" />
                            {"Chocolate"}
                          </label>
                        </div>
                        <span className="field__hint">{"The phone asks for the quantity of the items you tick (linen and amenity items from LNS). Leave empty for no count."}</span>
                      </fieldset>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="hks-p15-dep13-ph">
                          {"Photo "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-dep13-ph" name="photo" required={true} defaultValue={"Optional"}>
                            <option value="None">{"None"}</option>
                            <option value="Optional">{"Optional"}</option>
                            <option value="Required">{"Required"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"None, optional or required at this step"}</span>
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
              <div className="modal modal--lg" id="hks-p15-dep14" data-code="HKS-P15" role="dialog" aria-modal="true" aria-labelledby="hks-p15-dep14-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-13-attendant-cleaning-steps/#saved-dep14" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p15-dep14-t">{"Step 14 of DEP"}</h2>
                      <p className="modal__desc">{"A step the attendant sees on the phone. This is separate from the supervisor’s inspection checklist."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-dep14-tt">
                          {"Task type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-dep14-tt" name="task_type" required={true} defaultValue={"DEP · Departure clean"}>
                            <option value="DEP · Departure clean">{"DEP · Departure clean"}</option>
                            <option value="ARR · Arrival check">{"ARR · Arrival check"}</option>
                            <option value="TCH · Touch-up">{"TCH · Touch-up"}</option>
                            <option value="STY · Stayover">{"STY · Stayover"}</option>
                            <option value="LCH · Linen change">{"LCH · Linen change"}</option>
                            <option value="DCL · Deep clean">{"DCL · Deep clean"}</option>
                            <option value="TDN · Turndown">{"TDN · Turndown"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"The step belongs to this task type"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-dep14-tx">
                          {"Step text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p15-dep14-tx" type="text" name="text" maxLength="150" required={true} defaultValue={"Report any damage or repair needed"} />
                        <span className="field__hint">{"In English, up to 150 characters"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-dep14-ml">{"Malayalam (optional)"}</label>
                        <input className="field__input" id="hks-p15-dep14-ml" type="text" name="text_ml" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Malayalam"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-dep14-hi">{"Hindi (optional)"}</label>
                        <input className="field__input" id="hks-p15-dep14-hi" type="text" name="text_hi" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Hindi"}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p15-dep14-m">
                          <input id="hks-p15-dep14-m" type="checkbox" role="switch" name="mandatory" />
                          <span className="sw__track" />
                          {"Mandatory tick"}
                        </label>
                        <span className="field__hint">{"The attendant cannot finish the task without ticking this step"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">{"Asks for count of"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath towel" />
                            <span className="check__box" />
                            {"Bath towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Hand towel" />
                            <span className="check__box" />
                            {"Hand towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath mat" />
                            <span className="check__box" />
                            {"Bath mat"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bed linen set" />
                            <span className="check__box" />
                            {"Bed linen set"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Pillow case" />
                            <span className="check__box" />
                            {"Pillow case"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Shampoo" />
                            <span className="check__box" />
                            {"Shampoo"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Conditioner" />
                            <span className="check__box" />
                            {"Conditioner"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Body wash" />
                            <span className="check__box" />
                            {"Body wash"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Soap" />
                            <span className="check__box" />
                            {"Soap"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Dental kit" />
                            <span className="check__box" />
                            {"Dental kit"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Water bottle" />
                            <span className="check__box" />
                            {"Water bottle"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Tea / coffee sachets" />
                            <span className="check__box" />
                            {"Tea / coffee sachets"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bathrobe" />
                            <span className="check__box" />
                            {"Bathrobe"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Slippers" />
                            <span className="check__box" />
                            {"Slippers"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Chocolate" />
                            <span className="check__box" />
                            {"Chocolate"}
                          </label>
                        </div>
                        <span className="field__hint">{"The phone asks for the quantity of the items you tick (linen and amenity items from LNS). Leave empty for no count."}</span>
                      </fieldset>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="hks-p15-dep14-ph">
                          {"Photo "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-dep14-ph" name="photo" required={true} defaultValue={"Optional"}>
                            <option value="None">{"None"}</option>
                            <option value="Optional">{"Optional"}</option>
                            <option value="Required">{"Required"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"None, optional or required at this step"}</span>
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
              <div className="modal modal--lg" id="hks-p15-arr1" data-code="HKS-P15" role="dialog" aria-modal="true" aria-labelledby="hks-p15-arr1-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-13-attendant-cleaning-steps/#saved-arr1" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p15-arr1-t">{"Step 1 of ARR"}</h2>
                      <p className="modal__desc">{"A step the attendant sees on the phone. This is separate from the supervisor’s inspection checklist."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-arr1-tt">
                          {"Task type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-arr1-tt" name="task_type" required={true} defaultValue={"ARR · Arrival check"}>
                            <option value="DEP · Departure clean">{"DEP · Departure clean"}</option>
                            <option value="ARR · Arrival check">{"ARR · Arrival check"}</option>
                            <option value="TCH · Touch-up">{"TCH · Touch-up"}</option>
                            <option value="STY · Stayover">{"STY · Stayover"}</option>
                            <option value="LCH · Linen change">{"LCH · Linen change"}</option>
                            <option value="DCL · Deep clean">{"DCL · Deep clean"}</option>
                            <option value="TDN · Turndown">{"TDN · Turndown"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"The step belongs to this task type"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-arr1-tx">
                          {"Step text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p15-arr1-tx" type="text" name="text" maxLength="150" required={true} defaultValue={"Check the room against the set-up standard"} />
                        <span className="field__hint">{"In English, up to 150 characters"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-arr1-ml">{"Malayalam (optional)"}</label>
                        <input className="field__input" id="hks-p15-arr1-ml" type="text" name="text_ml" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Malayalam"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-arr1-hi">{"Hindi (optional)"}</label>
                        <input className="field__input" id="hks-p15-arr1-hi" type="text" name="text_hi" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Hindi"}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p15-arr1-m">
                          <input id="hks-p15-arr1-m" type="checkbox" role="switch" name="mandatory" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Mandatory tick"}
                        </label>
                        <span className="field__hint">{"The attendant cannot finish the task without ticking this step"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">{"Asks for count of"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath towel" />
                            <span className="check__box" />
                            {"Bath towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Hand towel" />
                            <span className="check__box" />
                            {"Hand towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath mat" />
                            <span className="check__box" />
                            {"Bath mat"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bed linen set" />
                            <span className="check__box" />
                            {"Bed linen set"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Pillow case" />
                            <span className="check__box" />
                            {"Pillow case"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Shampoo" />
                            <span className="check__box" />
                            {"Shampoo"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Conditioner" />
                            <span className="check__box" />
                            {"Conditioner"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Body wash" />
                            <span className="check__box" />
                            {"Body wash"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Soap" />
                            <span className="check__box" />
                            {"Soap"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Dental kit" />
                            <span className="check__box" />
                            {"Dental kit"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Water bottle" />
                            <span className="check__box" />
                            {"Water bottle"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Tea / coffee sachets" />
                            <span className="check__box" />
                            {"Tea / coffee sachets"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bathrobe" />
                            <span className="check__box" />
                            {"Bathrobe"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Slippers" />
                            <span className="check__box" />
                            {"Slippers"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Chocolate" />
                            <span className="check__box" />
                            {"Chocolate"}
                          </label>
                        </div>
                        <span className="field__hint">{"The phone asks for the quantity of the items you tick (linen and amenity items from LNS). Leave empty for no count."}</span>
                      </fieldset>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="hks-p15-arr1-ph">
                          {"Photo "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-arr1-ph" name="photo" required={true} defaultValue={"None"}>
                            <option value="None">{"None"}</option>
                            <option value="Optional">{"Optional"}</option>
                            <option value="Required">{"Required"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"None, optional or required at this step"}</span>
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
              <div className="modal modal--lg" id="hks-p15-arr2" data-code="HKS-P15" role="dialog" aria-modal="true" aria-labelledby="hks-p15-arr2-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-13-attendant-cleaning-steps/#saved-arr2" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p15-arr2-t">{"Step 2 of ARR"}</h2>
                      <p className="modal__desc">{"A step the attendant sees on the phone. This is separate from the supervisor’s inspection checklist."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-arr2-tt">
                          {"Task type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-arr2-tt" name="task_type" required={true} defaultValue={"ARR · Arrival check"}>
                            <option value="DEP · Departure clean">{"DEP · Departure clean"}</option>
                            <option value="ARR · Arrival check">{"ARR · Arrival check"}</option>
                            <option value="TCH · Touch-up">{"TCH · Touch-up"}</option>
                            <option value="STY · Stayover">{"STY · Stayover"}</option>
                            <option value="LCH · Linen change">{"LCH · Linen change"}</option>
                            <option value="DCL · Deep clean">{"DCL · Deep clean"}</option>
                            <option value="TDN · Turndown">{"TDN · Turndown"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"The step belongs to this task type"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-arr2-tx">
                          {"Step text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p15-arr2-tx" type="text" name="text" maxLength="150" required={true} defaultValue={"Test lights, TV and AC"} />
                        <span className="field__hint">{"In English, up to 150 characters"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-arr2-ml">{"Malayalam (optional)"}</label>
                        <input className="field__input" id="hks-p15-arr2-ml" type="text" name="text_ml" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Malayalam"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-arr2-hi">{"Hindi (optional)"}</label>
                        <input className="field__input" id="hks-p15-arr2-hi" type="text" name="text_hi" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Hindi"}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p15-arr2-m">
                          <input id="hks-p15-arr2-m" type="checkbox" role="switch" name="mandatory" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Mandatory tick"}
                        </label>
                        <span className="field__hint">{"The attendant cannot finish the task without ticking this step"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">{"Asks for count of"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath towel" />
                            <span className="check__box" />
                            {"Bath towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Hand towel" />
                            <span className="check__box" />
                            {"Hand towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath mat" />
                            <span className="check__box" />
                            {"Bath mat"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bed linen set" />
                            <span className="check__box" />
                            {"Bed linen set"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Pillow case" />
                            <span className="check__box" />
                            {"Pillow case"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Shampoo" />
                            <span className="check__box" />
                            {"Shampoo"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Conditioner" />
                            <span className="check__box" />
                            {"Conditioner"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Body wash" />
                            <span className="check__box" />
                            {"Body wash"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Soap" />
                            <span className="check__box" />
                            {"Soap"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Dental kit" />
                            <span className="check__box" />
                            {"Dental kit"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Water bottle" />
                            <span className="check__box" />
                            {"Water bottle"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Tea / coffee sachets" />
                            <span className="check__box" />
                            {"Tea / coffee sachets"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bathrobe" />
                            <span className="check__box" />
                            {"Bathrobe"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Slippers" />
                            <span className="check__box" />
                            {"Slippers"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Chocolate" />
                            <span className="check__box" />
                            {"Chocolate"}
                          </label>
                        </div>
                        <span className="field__hint">{"The phone asks for the quantity of the items you tick (linen and amenity items from LNS). Leave empty for no count."}</span>
                      </fieldset>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="hks-p15-arr2-ph">
                          {"Photo "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-arr2-ph" name="photo" required={true} defaultValue={"None"}>
                            <option value="None">{"None"}</option>
                            <option value="Optional">{"Optional"}</option>
                            <option value="Required">{"Required"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"None, optional or required at this step"}</span>
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
              <div className="modal modal--lg" id="hks-p15-arr3" data-code="HKS-P15" role="dialog" aria-modal="true" aria-labelledby="hks-p15-arr3-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-13-attendant-cleaning-steps/#saved-arr3" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p15-arr3-t">{"Step 3 of ARR"}</h2>
                      <p className="modal__desc">{"A step the attendant sees on the phone. This is separate from the supervisor’s inspection checklist."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-arr3-tt">
                          {"Task type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-arr3-tt" name="task_type" required={true} defaultValue={"ARR · Arrival check"}>
                            <option value="DEP · Departure clean">{"DEP · Departure clean"}</option>
                            <option value="ARR · Arrival check">{"ARR · Arrival check"}</option>
                            <option value="TCH · Touch-up">{"TCH · Touch-up"}</option>
                            <option value="STY · Stayover">{"STY · Stayover"}</option>
                            <option value="LCH · Linen change">{"LCH · Linen change"}</option>
                            <option value="DCL · Deep clean">{"DCL · Deep clean"}</option>
                            <option value="TDN · Turndown">{"TDN · Turndown"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"The step belongs to this task type"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-arr3-tx">
                          {"Step text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p15-arr3-tx" type="text" name="text" maxLength="150" required={true} defaultValue={"Check bathroom amenities and towels"} />
                        <span className="field__hint">{"In English, up to 150 characters"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-arr3-ml">{"Malayalam (optional)"}</label>
                        <input className="field__input" id="hks-p15-arr3-ml" type="text" name="text_ml" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Malayalam"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-arr3-hi">{"Hindi (optional)"}</label>
                        <input className="field__input" id="hks-p15-arr3-hi" type="text" name="text_hi" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Hindi"}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p15-arr3-m">
                          <input id="hks-p15-arr3-m" type="checkbox" role="switch" name="mandatory" />
                          <span className="sw__track" />
                          {"Mandatory tick"}
                        </label>
                        <span className="field__hint">{"The attendant cannot finish the task without ticking this step"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">{"Asks for count of"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath towel" defaultChecked={true} />
                            <span className="check__box" />
                            {"Bath towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Hand towel" defaultChecked={true} />
                            <span className="check__box" />
                            {"Hand towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath mat" />
                            <span className="check__box" />
                            {"Bath mat"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bed linen set" />
                            <span className="check__box" />
                            {"Bed linen set"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Pillow case" />
                            <span className="check__box" />
                            {"Pillow case"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Shampoo" defaultChecked={true} />
                            <span className="check__box" />
                            {"Shampoo"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Conditioner" />
                            <span className="check__box" />
                            {"Conditioner"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Body wash" />
                            <span className="check__box" />
                            {"Body wash"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Soap" defaultChecked={true} />
                            <span className="check__box" />
                            {"Soap"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Dental kit" />
                            <span className="check__box" />
                            {"Dental kit"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Water bottle" />
                            <span className="check__box" />
                            {"Water bottle"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Tea / coffee sachets" />
                            <span className="check__box" />
                            {"Tea / coffee sachets"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bathrobe" />
                            <span className="check__box" />
                            {"Bathrobe"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Slippers" />
                            <span className="check__box" />
                            {"Slippers"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Chocolate" />
                            <span className="check__box" />
                            {"Chocolate"}
                          </label>
                        </div>
                        <span className="field__hint">{"The phone asks for the quantity of the items you tick (linen and amenity items from LNS). Leave empty for no count."}</span>
                      </fieldset>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="hks-p15-arr3-ph">
                          {"Photo "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-arr3-ph" name="photo" required={true} defaultValue={"None"}>
                            <option value="None">{"None"}</option>
                            <option value="Optional">{"Optional"}</option>
                            <option value="Required">{"Required"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"None, optional or required at this step"}</span>
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
              <div className="modal modal--lg" id="hks-p15-arr4" data-code="HKS-P15" role="dialog" aria-modal="true" aria-labelledby="hks-p15-arr4-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-13-attendant-cleaning-steps/#saved-arr4" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p15-arr4-t">{"Step 4 of ARR"}</h2>
                      <p className="modal__desc">{"A step the attendant sees on the phone. This is separate from the supervisor’s inspection checklist."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-arr4-tt">
                          {"Task type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-arr4-tt" name="task_type" required={true} defaultValue={"ARR · Arrival check"}>
                            <option value="DEP · Departure clean">{"DEP · Departure clean"}</option>
                            <option value="ARR · Arrival check">{"ARR · Arrival check"}</option>
                            <option value="TCH · Touch-up">{"TCH · Touch-up"}</option>
                            <option value="STY · Stayover">{"STY · Stayover"}</option>
                            <option value="LCH · Linen change">{"LCH · Linen change"}</option>
                            <option value="DCL · Deep clean">{"DCL · Deep clean"}</option>
                            <option value="TDN · Turndown">{"TDN · Turndown"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"The step belongs to this task type"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-arr4-tx">
                          {"Step text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p15-arr4-tx" type="text" name="text" maxLength="150" required={true} defaultValue={"Place VIP amenities if the room has any"} />
                        <span className="field__hint">{"In English, up to 150 characters"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-arr4-ml">{"Malayalam (optional)"}</label>
                        <input className="field__input" id="hks-p15-arr4-ml" type="text" name="text_ml" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Malayalam"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-arr4-hi">{"Hindi (optional)"}</label>
                        <input className="field__input" id="hks-p15-arr4-hi" type="text" name="text_hi" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Hindi"}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p15-arr4-m">
                          <input id="hks-p15-arr4-m" type="checkbox" role="switch" name="mandatory" />
                          <span className="sw__track" />
                          {"Mandatory tick"}
                        </label>
                        <span className="field__hint">{"The attendant cannot finish the task without ticking this step"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">{"Asks for count of"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath towel" />
                            <span className="check__box" />
                            {"Bath towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Hand towel" />
                            <span className="check__box" />
                            {"Hand towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath mat" />
                            <span className="check__box" />
                            {"Bath mat"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bed linen set" />
                            <span className="check__box" />
                            {"Bed linen set"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Pillow case" />
                            <span className="check__box" />
                            {"Pillow case"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Shampoo" />
                            <span className="check__box" />
                            {"Shampoo"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Conditioner" />
                            <span className="check__box" />
                            {"Conditioner"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Body wash" />
                            <span className="check__box" />
                            {"Body wash"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Soap" />
                            <span className="check__box" />
                            {"Soap"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Dental kit" />
                            <span className="check__box" />
                            {"Dental kit"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Water bottle" />
                            <span className="check__box" />
                            {"Water bottle"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Tea / coffee sachets" />
                            <span className="check__box" />
                            {"Tea / coffee sachets"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bathrobe" />
                            <span className="check__box" />
                            {"Bathrobe"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Slippers" />
                            <span className="check__box" />
                            {"Slippers"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Chocolate" />
                            <span className="check__box" />
                            {"Chocolate"}
                          </label>
                        </div>
                        <span className="field__hint">{"The phone asks for the quantity of the items you tick (linen and amenity items from LNS). Leave empty for no count."}</span>
                      </fieldset>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="hks-p15-arr4-ph">
                          {"Photo "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-arr4-ph" name="photo" required={true} defaultValue={"None"}>
                            <option value="None">{"None"}</option>
                            <option value="Optional">{"Optional"}</option>
                            <option value="Required">{"Required"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"None, optional or required at this step"}</span>
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
              <div className="modal modal--lg" id="hks-p15-arr5" data-code="HKS-P15" role="dialog" aria-modal="true" aria-labelledby="hks-p15-arr5-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-13-attendant-cleaning-steps/#saved-arr5" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p15-arr5-t">{"Step 5 of ARR"}</h2>
                      <p className="modal__desc">{"A step the attendant sees on the phone. This is separate from the supervisor’s inspection checklist."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-arr5-tt">
                          {"Task type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-arr5-tt" name="task_type" required={true} defaultValue={"ARR · Arrival check"}>
                            <option value="DEP · Departure clean">{"DEP · Departure clean"}</option>
                            <option value="ARR · Arrival check">{"ARR · Arrival check"}</option>
                            <option value="TCH · Touch-up">{"TCH · Touch-up"}</option>
                            <option value="STY · Stayover">{"STY · Stayover"}</option>
                            <option value="LCH · Linen change">{"LCH · Linen change"}</option>
                            <option value="DCL · Deep clean">{"DCL · Deep clean"}</option>
                            <option value="TDN · Turndown">{"TDN · Turndown"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"The step belongs to this task type"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-arr5-tx">
                          {"Step text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p15-arr5-tx" type="text" name="text" maxLength="150" required={true} defaultValue={"Check the smell and set the room temperature"} />
                        <span className="field__hint">{"In English, up to 150 characters"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-arr5-ml">{"Malayalam (optional)"}</label>
                        <input className="field__input" id="hks-p15-arr5-ml" type="text" name="text_ml" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Malayalam"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-arr5-hi">{"Hindi (optional)"}</label>
                        <input className="field__input" id="hks-p15-arr5-hi" type="text" name="text_hi" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Hindi"}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p15-arr5-m">
                          <input id="hks-p15-arr5-m" type="checkbox" role="switch" name="mandatory" />
                          <span className="sw__track" />
                          {"Mandatory tick"}
                        </label>
                        <span className="field__hint">{"The attendant cannot finish the task without ticking this step"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">{"Asks for count of"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath towel" />
                            <span className="check__box" />
                            {"Bath towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Hand towel" />
                            <span className="check__box" />
                            {"Hand towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath mat" />
                            <span className="check__box" />
                            {"Bath mat"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bed linen set" />
                            <span className="check__box" />
                            {"Bed linen set"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Pillow case" />
                            <span className="check__box" />
                            {"Pillow case"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Shampoo" />
                            <span className="check__box" />
                            {"Shampoo"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Conditioner" />
                            <span className="check__box" />
                            {"Conditioner"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Body wash" />
                            <span className="check__box" />
                            {"Body wash"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Soap" />
                            <span className="check__box" />
                            {"Soap"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Dental kit" />
                            <span className="check__box" />
                            {"Dental kit"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Water bottle" />
                            <span className="check__box" />
                            {"Water bottle"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Tea / coffee sachets" />
                            <span className="check__box" />
                            {"Tea / coffee sachets"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bathrobe" />
                            <span className="check__box" />
                            {"Bathrobe"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Slippers" />
                            <span className="check__box" />
                            {"Slippers"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Chocolate" />
                            <span className="check__box" />
                            {"Chocolate"}
                          </label>
                        </div>
                        <span className="field__hint">{"The phone asks for the quantity of the items you tick (linen and amenity items from LNS). Leave empty for no count."}</span>
                      </fieldset>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="hks-p15-arr5-ph">
                          {"Photo "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-arr5-ph" name="photo" required={true} defaultValue={"None"}>
                            <option value="None">{"None"}</option>
                            <option value="Optional">{"Optional"}</option>
                            <option value="Required">{"Required"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"None, optional or required at this step"}</span>
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
              <div className="modal modal--lg" id="hks-p15-arr6" data-code="HKS-P15" role="dialog" aria-modal="true" aria-labelledby="hks-p15-arr6-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-13-attendant-cleaning-steps/#saved-arr6" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p15-arr6-t">{"Step 6 of ARR"}</h2>
                      <p className="modal__desc">{"A step the attendant sees on the phone. This is separate from the supervisor’s inspection checklist."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-arr6-tt">
                          {"Task type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-arr6-tt" name="task_type" required={true} defaultValue={"ARR · Arrival check"}>
                            <option value="DEP · Departure clean">{"DEP · Departure clean"}</option>
                            <option value="ARR · Arrival check">{"ARR · Arrival check"}</option>
                            <option value="TCH · Touch-up">{"TCH · Touch-up"}</option>
                            <option value="STY · Stayover">{"STY · Stayover"}</option>
                            <option value="LCH · Linen change">{"LCH · Linen change"}</option>
                            <option value="DCL · Deep clean">{"DCL · Deep clean"}</option>
                            <option value="TDN · Turndown">{"TDN · Turndown"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"The step belongs to this task type"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-arr6-tx">
                          {"Step text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p15-arr6-tx" type="text" name="text" maxLength="150" required={true} defaultValue={"Final check"} />
                        <span className="field__hint">{"In English, up to 150 characters"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-arr6-ml">{"Malayalam (optional)"}</label>
                        <input className="field__input" id="hks-p15-arr6-ml" type="text" name="text_ml" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Malayalam"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-arr6-hi">{"Hindi (optional)"}</label>
                        <input className="field__input" id="hks-p15-arr6-hi" type="text" name="text_hi" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Hindi"}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p15-arr6-m">
                          <input id="hks-p15-arr6-m" type="checkbox" role="switch" name="mandatory" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Mandatory tick"}
                        </label>
                        <span className="field__hint">{"The attendant cannot finish the task without ticking this step"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">{"Asks for count of"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath towel" />
                            <span className="check__box" />
                            {"Bath towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Hand towel" />
                            <span className="check__box" />
                            {"Hand towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath mat" />
                            <span className="check__box" />
                            {"Bath mat"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bed linen set" />
                            <span className="check__box" />
                            {"Bed linen set"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Pillow case" />
                            <span className="check__box" />
                            {"Pillow case"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Shampoo" />
                            <span className="check__box" />
                            {"Shampoo"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Conditioner" />
                            <span className="check__box" />
                            {"Conditioner"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Body wash" />
                            <span className="check__box" />
                            {"Body wash"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Soap" />
                            <span className="check__box" />
                            {"Soap"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Dental kit" />
                            <span className="check__box" />
                            {"Dental kit"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Water bottle" />
                            <span className="check__box" />
                            {"Water bottle"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Tea / coffee sachets" />
                            <span className="check__box" />
                            {"Tea / coffee sachets"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bathrobe" />
                            <span className="check__box" />
                            {"Bathrobe"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Slippers" />
                            <span className="check__box" />
                            {"Slippers"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Chocolate" />
                            <span className="check__box" />
                            {"Chocolate"}
                          </label>
                        </div>
                        <span className="field__hint">{"The phone asks for the quantity of the items you tick (linen and amenity items from LNS). Leave empty for no count."}</span>
                      </fieldset>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="hks-p15-arr6-ph">
                          {"Photo "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-arr6-ph" name="photo" required={true} defaultValue={"Optional"}>
                            <option value="None">{"None"}</option>
                            <option value="Optional">{"Optional"}</option>
                            <option value="Required">{"Required"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"None, optional or required at this step"}</span>
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
              <div className="modal modal--lg" id="hks-p15-tch1" data-code="HKS-P15" role="dialog" aria-modal="true" aria-labelledby="hks-p15-tch1-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-13-attendant-cleaning-steps/#saved-tch1" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p15-tch1-t">{"Step 1 of TCH"}</h2>
                      <p className="modal__desc">{"A step the attendant sees on the phone. This is separate from the supervisor’s inspection checklist."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-tch1-tt">
                          {"Task type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-tch1-tt" name="task_type" required={true} defaultValue={"TCH · Touch-up"}>
                            <option value="DEP · Departure clean">{"DEP · Departure clean"}</option>
                            <option value="ARR · Arrival check">{"ARR · Arrival check"}</option>
                            <option value="TCH · Touch-up">{"TCH · Touch-up"}</option>
                            <option value="STY · Stayover">{"STY · Stayover"}</option>
                            <option value="LCH · Linen change">{"LCH · Linen change"}</option>
                            <option value="DCL · Deep clean">{"DCL · Deep clean"}</option>
                            <option value="TDN · Turndown">{"TDN · Turndown"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"The step belongs to this task type"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-tch1-tx">
                          {"Step text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p15-tch1-tx" type="text" name="text" maxLength="150" required={true} defaultValue={"Knock, announce and enter"} />
                        <span className="field__hint">{"In English, up to 150 characters"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-tch1-ml">{"Malayalam (optional)"}</label>
                        <input className="field__input" id="hks-p15-tch1-ml" type="text" name="text_ml" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Malayalam"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-tch1-hi">{"Hindi (optional)"}</label>
                        <input className="field__input" id="hks-p15-tch1-hi" type="text" name="text_hi" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Hindi"}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p15-tch1-m">
                          <input id="hks-p15-tch1-m" type="checkbox" role="switch" name="mandatory" />
                          <span className="sw__track" />
                          {"Mandatory tick"}
                        </label>
                        <span className="field__hint">{"The attendant cannot finish the task without ticking this step"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">{"Asks for count of"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath towel" />
                            <span className="check__box" />
                            {"Bath towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Hand towel" />
                            <span className="check__box" />
                            {"Hand towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath mat" />
                            <span className="check__box" />
                            {"Bath mat"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bed linen set" />
                            <span className="check__box" />
                            {"Bed linen set"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Pillow case" />
                            <span className="check__box" />
                            {"Pillow case"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Shampoo" />
                            <span className="check__box" />
                            {"Shampoo"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Conditioner" />
                            <span className="check__box" />
                            {"Conditioner"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Body wash" />
                            <span className="check__box" />
                            {"Body wash"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Soap" />
                            <span className="check__box" />
                            {"Soap"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Dental kit" />
                            <span className="check__box" />
                            {"Dental kit"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Water bottle" />
                            <span className="check__box" />
                            {"Water bottle"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Tea / coffee sachets" />
                            <span className="check__box" />
                            {"Tea / coffee sachets"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bathrobe" />
                            <span className="check__box" />
                            {"Bathrobe"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Slippers" />
                            <span className="check__box" />
                            {"Slippers"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Chocolate" />
                            <span className="check__box" />
                            {"Chocolate"}
                          </label>
                        </div>
                        <span className="field__hint">{"The phone asks for the quantity of the items you tick (linen and amenity items from LNS). Leave empty for no count."}</span>
                      </fieldset>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="hks-p15-tch1-ph">
                          {"Photo "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-tch1-ph" name="photo" required={true} defaultValue={"None"}>
                            <option value="None">{"None"}</option>
                            <option value="Optional">{"Optional"}</option>
                            <option value="Required">{"Required"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"None, optional or required at this step"}</span>
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
              <div className="modal modal--lg" id="hks-p15-tch2" data-code="HKS-P15" role="dialog" aria-modal="true" aria-labelledby="hks-p15-tch2-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-13-attendant-cleaning-steps/#saved-tch2" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p15-tch2-t">{"Step 2 of TCH"}</h2>
                      <p className="modal__desc">{"A step the attendant sees on the phone. This is separate from the supervisor’s inspection checklist."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-tch2-tt">
                          {"Task type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-tch2-tt" name="task_type" required={true} defaultValue={"TCH · Touch-up"}>
                            <option value="DEP · Departure clean">{"DEP · Departure clean"}</option>
                            <option value="ARR · Arrival check">{"ARR · Arrival check"}</option>
                            <option value="TCH · Touch-up">{"TCH · Touch-up"}</option>
                            <option value="STY · Stayover">{"STY · Stayover"}</option>
                            <option value="LCH · Linen change">{"LCH · Linen change"}</option>
                            <option value="DCL · Deep clean">{"DCL · Deep clean"}</option>
                            <option value="TDN · Turndown">{"TDN · Turndown"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"The step belongs to this task type"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-tch2-tx">
                          {"Step text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p15-tch2-tx" type="text" name="text" maxLength="150" required={true} defaultValue={"Straighten the bed and cushions"} />
                        <span className="field__hint">{"In English, up to 150 characters"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-tch2-ml">{"Malayalam (optional)"}</label>
                        <input className="field__input" id="hks-p15-tch2-ml" type="text" name="text_ml" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Malayalam"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-tch2-hi">{"Hindi (optional)"}</label>
                        <input className="field__input" id="hks-p15-tch2-hi" type="text" name="text_hi" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Hindi"}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p15-tch2-m">
                          <input id="hks-p15-tch2-m" type="checkbox" role="switch" name="mandatory" />
                          <span className="sw__track" />
                          {"Mandatory tick"}
                        </label>
                        <span className="field__hint">{"The attendant cannot finish the task without ticking this step"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">{"Asks for count of"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath towel" />
                            <span className="check__box" />
                            {"Bath towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Hand towel" />
                            <span className="check__box" />
                            {"Hand towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath mat" />
                            <span className="check__box" />
                            {"Bath mat"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bed linen set" />
                            <span className="check__box" />
                            {"Bed linen set"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Pillow case" />
                            <span className="check__box" />
                            {"Pillow case"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Shampoo" />
                            <span className="check__box" />
                            {"Shampoo"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Conditioner" />
                            <span className="check__box" />
                            {"Conditioner"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Body wash" />
                            <span className="check__box" />
                            {"Body wash"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Soap" />
                            <span className="check__box" />
                            {"Soap"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Dental kit" />
                            <span className="check__box" />
                            {"Dental kit"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Water bottle" />
                            <span className="check__box" />
                            {"Water bottle"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Tea / coffee sachets" />
                            <span className="check__box" />
                            {"Tea / coffee sachets"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bathrobe" />
                            <span className="check__box" />
                            {"Bathrobe"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Slippers" />
                            <span className="check__box" />
                            {"Slippers"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Chocolate" />
                            <span className="check__box" />
                            {"Chocolate"}
                          </label>
                        </div>
                        <span className="field__hint">{"The phone asks for the quantity of the items you tick (linen and amenity items from LNS). Leave empty for no count."}</span>
                      </fieldset>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="hks-p15-tch2-ph">
                          {"Photo "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-tch2-ph" name="photo" required={true} defaultValue={"None"}>
                            <option value="None">{"None"}</option>
                            <option value="Optional">{"Optional"}</option>
                            <option value="Required">{"Required"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"None, optional or required at this step"}</span>
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
              <div className="modal modal--lg" id="hks-p15-tch3" data-code="HKS-P15" role="dialog" aria-modal="true" aria-labelledby="hks-p15-tch3-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-13-attendant-cleaning-steps/#saved-tch3" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p15-tch3-t">{"Step 3 of TCH"}</h2>
                      <p className="modal__desc">{"A step the attendant sees on the phone. This is separate from the supervisor’s inspection checklist."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-tch3-tt">
                          {"Task type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-tch3-tt" name="task_type" required={true} defaultValue={"TCH · Touch-up"}>
                            <option value="DEP · Departure clean">{"DEP · Departure clean"}</option>
                            <option value="ARR · Arrival check">{"ARR · Arrival check"}</option>
                            <option value="TCH · Touch-up">{"TCH · Touch-up"}</option>
                            <option value="STY · Stayover">{"STY · Stayover"}</option>
                            <option value="LCH · Linen change">{"LCH · Linen change"}</option>
                            <option value="DCL · Deep clean">{"DCL · Deep clean"}</option>
                            <option value="TDN · Turndown">{"TDN · Turndown"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"The step belongs to this task type"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-tch3-tx">
                          {"Step text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p15-tch3-tx" type="text" name="text" maxLength="150" required={true} defaultValue={"Wipe the bathroom surfaces and empty the bin"} />
                        <span className="field__hint">{"In English, up to 150 characters"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-tch3-ml">{"Malayalam (optional)"}</label>
                        <input className="field__input" id="hks-p15-tch3-ml" type="text" name="text_ml" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Malayalam"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-tch3-hi">{"Hindi (optional)"}</label>
                        <input className="field__input" id="hks-p15-tch3-hi" type="text" name="text_hi" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Hindi"}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p15-tch3-m">
                          <input id="hks-p15-tch3-m" type="checkbox" role="switch" name="mandatory" />
                          <span className="sw__track" />
                          {"Mandatory tick"}
                        </label>
                        <span className="field__hint">{"The attendant cannot finish the task without ticking this step"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">{"Asks for count of"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath towel" />
                            <span className="check__box" />
                            {"Bath towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Hand towel" />
                            <span className="check__box" />
                            {"Hand towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath mat" />
                            <span className="check__box" />
                            {"Bath mat"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bed linen set" />
                            <span className="check__box" />
                            {"Bed linen set"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Pillow case" />
                            <span className="check__box" />
                            {"Pillow case"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Shampoo" />
                            <span className="check__box" />
                            {"Shampoo"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Conditioner" />
                            <span className="check__box" />
                            {"Conditioner"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Body wash" />
                            <span className="check__box" />
                            {"Body wash"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Soap" />
                            <span className="check__box" />
                            {"Soap"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Dental kit" />
                            <span className="check__box" />
                            {"Dental kit"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Water bottle" />
                            <span className="check__box" />
                            {"Water bottle"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Tea / coffee sachets" />
                            <span className="check__box" />
                            {"Tea / coffee sachets"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bathrobe" />
                            <span className="check__box" />
                            {"Bathrobe"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Slippers" />
                            <span className="check__box" />
                            {"Slippers"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Chocolate" />
                            <span className="check__box" />
                            {"Chocolate"}
                          </label>
                        </div>
                        <span className="field__hint">{"The phone asks for the quantity of the items you tick (linen and amenity items from LNS). Leave empty for no count."}</span>
                      </fieldset>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="hks-p15-tch3-ph">
                          {"Photo "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-tch3-ph" name="photo" required={true} defaultValue={"None"}>
                            <option value="None">{"None"}</option>
                            <option value="Optional">{"Optional"}</option>
                            <option value="Required">{"Required"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"None, optional or required at this step"}</span>
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
              <div className="modal modal--lg" id="hks-p15-tch4" data-code="HKS-P15" role="dialog" aria-modal="true" aria-labelledby="hks-p15-tch4-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-13-attendant-cleaning-steps/#saved-tch4" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p15-tch4-t">{"Step 4 of TCH"}</h2>
                      <p className="modal__desc">{"A step the attendant sees on the phone. This is separate from the supervisor’s inspection checklist."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-tch4-tt">
                          {"Task type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-tch4-tt" name="task_type" required={true} defaultValue={"TCH · Touch-up"}>
                            <option value="DEP · Departure clean">{"DEP · Departure clean"}</option>
                            <option value="ARR · Arrival check">{"ARR · Arrival check"}</option>
                            <option value="TCH · Touch-up">{"TCH · Touch-up"}</option>
                            <option value="STY · Stayover">{"STY · Stayover"}</option>
                            <option value="LCH · Linen change">{"LCH · Linen change"}</option>
                            <option value="DCL · Deep clean">{"DCL · Deep clean"}</option>
                            <option value="TDN · Turndown">{"TDN · Turndown"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"The step belongs to this task type"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-tch4-tx">
                          {"Step text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p15-tch4-tx" type="text" name="text" maxLength="150" required={true} defaultValue={"Final check"} />
                        <span className="field__hint">{"In English, up to 150 characters"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-tch4-ml">{"Malayalam (optional)"}</label>
                        <input className="field__input" id="hks-p15-tch4-ml" type="text" name="text_ml" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Malayalam"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-tch4-hi">{"Hindi (optional)"}</label>
                        <input className="field__input" id="hks-p15-tch4-hi" type="text" name="text_hi" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Hindi"}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p15-tch4-m">
                          <input id="hks-p15-tch4-m" type="checkbox" role="switch" name="mandatory" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Mandatory tick"}
                        </label>
                        <span className="field__hint">{"The attendant cannot finish the task without ticking this step"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">{"Asks for count of"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath towel" />
                            <span className="check__box" />
                            {"Bath towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Hand towel" />
                            <span className="check__box" />
                            {"Hand towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath mat" />
                            <span className="check__box" />
                            {"Bath mat"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bed linen set" />
                            <span className="check__box" />
                            {"Bed linen set"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Pillow case" />
                            <span className="check__box" />
                            {"Pillow case"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Shampoo" />
                            <span className="check__box" />
                            {"Shampoo"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Conditioner" />
                            <span className="check__box" />
                            {"Conditioner"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Body wash" />
                            <span className="check__box" />
                            {"Body wash"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Soap" />
                            <span className="check__box" />
                            {"Soap"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Dental kit" />
                            <span className="check__box" />
                            {"Dental kit"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Water bottle" />
                            <span className="check__box" />
                            {"Water bottle"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Tea / coffee sachets" />
                            <span className="check__box" />
                            {"Tea / coffee sachets"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bathrobe" />
                            <span className="check__box" />
                            {"Bathrobe"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Slippers" />
                            <span className="check__box" />
                            {"Slippers"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Chocolate" />
                            <span className="check__box" />
                            {"Chocolate"}
                          </label>
                        </div>
                        <span className="field__hint">{"The phone asks for the quantity of the items you tick (linen and amenity items from LNS). Leave empty for no count."}</span>
                      </fieldset>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="hks-p15-tch4-ph">
                          {"Photo "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-tch4-ph" name="photo" required={true} defaultValue={"None"}>
                            <option value="None">{"None"}</option>
                            <option value="Optional">{"Optional"}</option>
                            <option value="Required">{"Required"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"None, optional or required at this step"}</span>
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
              <div className="modal modal--lg" id="hks-p15-sty1" data-code="HKS-P15" role="dialog" aria-modal="true" aria-labelledby="hks-p15-sty1-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-13-attendant-cleaning-steps/#saved-sty1" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p15-sty1-t">{"Step 1 of STY"}</h2>
                      <p className="modal__desc">{"A step the attendant sees on the phone. This is separate from the supervisor’s inspection checklist."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-sty1-tt">
                          {"Task type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-sty1-tt" name="task_type" required={true} defaultValue={"STY · Stayover"}>
                            <option value="DEP · Departure clean">{"DEP · Departure clean"}</option>
                            <option value="ARR · Arrival check">{"ARR · Arrival check"}</option>
                            <option value="TCH · Touch-up">{"TCH · Touch-up"}</option>
                            <option value="STY · Stayover">{"STY · Stayover"}</option>
                            <option value="LCH · Linen change">{"LCH · Linen change"}</option>
                            <option value="DCL · Deep clean">{"DCL · Deep clean"}</option>
                            <option value="TDN · Turndown">{"TDN · Turndown"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"The step belongs to this task type"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-sty1-tx">
                          {"Step text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p15-sty1-tx" type="text" name="text" maxLength="150" required={true} defaultValue={"Knock and announce; if the DND sign is on, do not enter and report it"} />
                        <span className="field__hint">{"In English, up to 150 characters"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-sty1-ml">{"Malayalam (optional)"}</label>
                        <input className="field__input" id="hks-p15-sty1-ml" type="text" name="text_ml" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Malayalam"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-sty1-hi">{"Hindi (optional)"}</label>
                        <input className="field__input" id="hks-p15-sty1-hi" type="text" name="text_hi" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Hindi"}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p15-sty1-m">
                          <input id="hks-p15-sty1-m" type="checkbox" role="switch" name="mandatory" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Mandatory tick"}
                        </label>
                        <span className="field__hint">{"The attendant cannot finish the task without ticking this step"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">{"Asks for count of"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath towel" />
                            <span className="check__box" />
                            {"Bath towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Hand towel" />
                            <span className="check__box" />
                            {"Hand towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath mat" />
                            <span className="check__box" />
                            {"Bath mat"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bed linen set" />
                            <span className="check__box" />
                            {"Bed linen set"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Pillow case" />
                            <span className="check__box" />
                            {"Pillow case"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Shampoo" />
                            <span className="check__box" />
                            {"Shampoo"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Conditioner" />
                            <span className="check__box" />
                            {"Conditioner"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Body wash" />
                            <span className="check__box" />
                            {"Body wash"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Soap" />
                            <span className="check__box" />
                            {"Soap"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Dental kit" />
                            <span className="check__box" />
                            {"Dental kit"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Water bottle" />
                            <span className="check__box" />
                            {"Water bottle"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Tea / coffee sachets" />
                            <span className="check__box" />
                            {"Tea / coffee sachets"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bathrobe" />
                            <span className="check__box" />
                            {"Bathrobe"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Slippers" />
                            <span className="check__box" />
                            {"Slippers"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Chocolate" />
                            <span className="check__box" />
                            {"Chocolate"}
                          </label>
                        </div>
                        <span className="field__hint">{"The phone asks for the quantity of the items you tick (linen and amenity items from LNS). Leave empty for no count."}</span>
                      </fieldset>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="hks-p15-sty1-ph">
                          {"Photo "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-sty1-ph" name="photo" required={true} defaultValue={"None"}>
                            <option value="None">{"None"}</option>
                            <option value="Optional">{"Optional"}</option>
                            <option value="Required">{"Required"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"None, optional or required at this step"}</span>
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
              <div className="modal modal--lg" id="hks-p15-sty2" data-code="HKS-P15" role="dialog" aria-modal="true" aria-labelledby="hks-p15-sty2-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-13-attendant-cleaning-steps/#saved-sty2" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p15-sty2-t">{"Step 2 of STY"}</h2>
                      <p className="modal__desc">{"A step the attendant sees on the phone. This is separate from the supervisor’s inspection checklist."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-sty2-tt">
                          {"Task type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-sty2-tt" name="task_type" required={true} defaultValue={"STY · Stayover"}>
                            <option value="DEP · Departure clean">{"DEP · Departure clean"}</option>
                            <option value="ARR · Arrival check">{"ARR · Arrival check"}</option>
                            <option value="TCH · Touch-up">{"TCH · Touch-up"}</option>
                            <option value="STY · Stayover">{"STY · Stayover"}</option>
                            <option value="LCH · Linen change">{"LCH · Linen change"}</option>
                            <option value="DCL · Deep clean">{"DCL · Deep clean"}</option>
                            <option value="TDN · Turndown">{"TDN · Turndown"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"The step belongs to this task type"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-sty2-tx">
                          {"Step text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p15-sty2-tx" type="text" name="text" maxLength="150" required={true} defaultValue={"Open the curtains"} />
                        <span className="field__hint">{"In English, up to 150 characters"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-sty2-ml">{"Malayalam (optional)"}</label>
                        <input className="field__input" id="hks-p15-sty2-ml" type="text" name="text_ml" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Malayalam"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-sty2-hi">{"Hindi (optional)"}</label>
                        <input className="field__input" id="hks-p15-sty2-hi" type="text" name="text_hi" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Hindi"}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p15-sty2-m">
                          <input id="hks-p15-sty2-m" type="checkbox" role="switch" name="mandatory" />
                          <span className="sw__track" />
                          {"Mandatory tick"}
                        </label>
                        <span className="field__hint">{"The attendant cannot finish the task without ticking this step"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">{"Asks for count of"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath towel" />
                            <span className="check__box" />
                            {"Bath towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Hand towel" />
                            <span className="check__box" />
                            {"Hand towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath mat" />
                            <span className="check__box" />
                            {"Bath mat"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bed linen set" />
                            <span className="check__box" />
                            {"Bed linen set"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Pillow case" />
                            <span className="check__box" />
                            {"Pillow case"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Shampoo" />
                            <span className="check__box" />
                            {"Shampoo"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Conditioner" />
                            <span className="check__box" />
                            {"Conditioner"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Body wash" />
                            <span className="check__box" />
                            {"Body wash"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Soap" />
                            <span className="check__box" />
                            {"Soap"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Dental kit" />
                            <span className="check__box" />
                            {"Dental kit"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Water bottle" />
                            <span className="check__box" />
                            {"Water bottle"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Tea / coffee sachets" />
                            <span className="check__box" />
                            {"Tea / coffee sachets"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bathrobe" />
                            <span className="check__box" />
                            {"Bathrobe"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Slippers" />
                            <span className="check__box" />
                            {"Slippers"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Chocolate" />
                            <span className="check__box" />
                            {"Chocolate"}
                          </label>
                        </div>
                        <span className="field__hint">{"The phone asks for the quantity of the items you tick (linen and amenity items from LNS). Leave empty for no count."}</span>
                      </fieldset>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="hks-p15-sty2-ph">
                          {"Photo "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-sty2-ph" name="photo" required={true} defaultValue={"None"}>
                            <option value="None">{"None"}</option>
                            <option value="Optional">{"Optional"}</option>
                            <option value="Required">{"Required"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"None, optional or required at this step"}</span>
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
              <div className="modal modal--lg" id="hks-p15-sty3" data-code="HKS-P15" role="dialog" aria-modal="true" aria-labelledby="hks-p15-sty3-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-13-attendant-cleaning-steps/#saved-sty3" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p15-sty3-t">{"Step 3 of STY"}</h2>
                      <p className="modal__desc">{"A step the attendant sees on the phone. This is separate from the supervisor’s inspection checklist."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-sty3-tt">
                          {"Task type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-sty3-tt" name="task_type" required={true} defaultValue={"STY · Stayover"}>
                            <option value="DEP · Departure clean">{"DEP · Departure clean"}</option>
                            <option value="ARR · Arrival check">{"ARR · Arrival check"}</option>
                            <option value="TCH · Touch-up">{"TCH · Touch-up"}</option>
                            <option value="STY · Stayover">{"STY · Stayover"}</option>
                            <option value="LCH · Linen change">{"LCH · Linen change"}</option>
                            <option value="DCL · Deep clean">{"DCL · Deep clean"}</option>
                            <option value="TDN · Turndown">{"TDN · Turndown"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"The step belongs to this task type"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-sty3-tx">
                          {"Step text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p15-sty3-tx" type="text" name="text" maxLength="150" required={true} defaultValue={"Remove trash and empty the bins"} />
                        <span className="field__hint">{"In English, up to 150 characters"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-sty3-ml">{"Malayalam (optional)"}</label>
                        <input className="field__input" id="hks-p15-sty3-ml" type="text" name="text_ml" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Malayalam"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-sty3-hi">{"Hindi (optional)"}</label>
                        <input className="field__input" id="hks-p15-sty3-hi" type="text" name="text_hi" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Hindi"}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p15-sty3-m">
                          <input id="hks-p15-sty3-m" type="checkbox" role="switch" name="mandatory" />
                          <span className="sw__track" />
                          {"Mandatory tick"}
                        </label>
                        <span className="field__hint">{"The attendant cannot finish the task without ticking this step"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">{"Asks for count of"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath towel" />
                            <span className="check__box" />
                            {"Bath towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Hand towel" />
                            <span className="check__box" />
                            {"Hand towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath mat" />
                            <span className="check__box" />
                            {"Bath mat"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bed linen set" />
                            <span className="check__box" />
                            {"Bed linen set"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Pillow case" />
                            <span className="check__box" />
                            {"Pillow case"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Shampoo" />
                            <span className="check__box" />
                            {"Shampoo"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Conditioner" />
                            <span className="check__box" />
                            {"Conditioner"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Body wash" />
                            <span className="check__box" />
                            {"Body wash"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Soap" />
                            <span className="check__box" />
                            {"Soap"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Dental kit" />
                            <span className="check__box" />
                            {"Dental kit"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Water bottle" />
                            <span className="check__box" />
                            {"Water bottle"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Tea / coffee sachets" />
                            <span className="check__box" />
                            {"Tea / coffee sachets"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bathrobe" />
                            <span className="check__box" />
                            {"Bathrobe"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Slippers" />
                            <span className="check__box" />
                            {"Slippers"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Chocolate" />
                            <span className="check__box" />
                            {"Chocolate"}
                          </label>
                        </div>
                        <span className="field__hint">{"The phone asks for the quantity of the items you tick (linen and amenity items from LNS). Leave empty for no count."}</span>
                      </fieldset>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="hks-p15-sty3-ph">
                          {"Photo "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-sty3-ph" name="photo" required={true} defaultValue={"None"}>
                            <option value="None">{"None"}</option>
                            <option value="Optional">{"Optional"}</option>
                            <option value="Required">{"Required"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"None, optional or required at this step"}</span>
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
              <div className="modal modal--lg" id="hks-p15-sty4" data-code="HKS-P15" role="dialog" aria-modal="true" aria-labelledby="hks-p15-sty4-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-13-attendant-cleaning-steps/#saved-sty4" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p15-sty4-t">{"Step 4 of STY"}</h2>
                      <p className="modal__desc">{"A step the attendant sees on the phone. This is separate from the supervisor’s inspection checklist."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-sty4-tt">
                          {"Task type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-sty4-tt" name="task_type" required={true} defaultValue={"STY · Stayover"}>
                            <option value="DEP · Departure clean">{"DEP · Departure clean"}</option>
                            <option value="ARR · Arrival check">{"ARR · Arrival check"}</option>
                            <option value="TCH · Touch-up">{"TCH · Touch-up"}</option>
                            <option value="STY · Stayover">{"STY · Stayover"}</option>
                            <option value="LCH · Linen change">{"LCH · Linen change"}</option>
                            <option value="DCL · Deep clean">{"DCL · Deep clean"}</option>
                            <option value="TDN · Turndown">{"TDN · Turndown"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"The step belongs to this task type"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-sty4-tx">
                          {"Step text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p15-sty4-tx" type="text" name="text" maxLength="150" required={true} defaultValue={"Make or tidy the bed"} />
                        <span className="field__hint">{"In English, up to 150 characters"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-sty4-ml">{"Malayalam (optional)"}</label>
                        <input className="field__input" id="hks-p15-sty4-ml" type="text" name="text_ml" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Malayalam"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-sty4-hi">{"Hindi (optional)"}</label>
                        <input className="field__input" id="hks-p15-sty4-hi" type="text" name="text_hi" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Hindi"}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p15-sty4-m">
                          <input id="hks-p15-sty4-m" type="checkbox" role="switch" name="mandatory" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Mandatory tick"}
                        </label>
                        <span className="field__hint">{"The attendant cannot finish the task without ticking this step"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">{"Asks for count of"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath towel" />
                            <span className="check__box" />
                            {"Bath towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Hand towel" />
                            <span className="check__box" />
                            {"Hand towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath mat" />
                            <span className="check__box" />
                            {"Bath mat"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bed linen set" />
                            <span className="check__box" />
                            {"Bed linen set"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Pillow case" />
                            <span className="check__box" />
                            {"Pillow case"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Shampoo" />
                            <span className="check__box" />
                            {"Shampoo"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Conditioner" />
                            <span className="check__box" />
                            {"Conditioner"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Body wash" />
                            <span className="check__box" />
                            {"Body wash"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Soap" />
                            <span className="check__box" />
                            {"Soap"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Dental kit" />
                            <span className="check__box" />
                            {"Dental kit"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Water bottle" />
                            <span className="check__box" />
                            {"Water bottle"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Tea / coffee sachets" />
                            <span className="check__box" />
                            {"Tea / coffee sachets"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bathrobe" />
                            <span className="check__box" />
                            {"Bathrobe"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Slippers" />
                            <span className="check__box" />
                            {"Slippers"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Chocolate" />
                            <span className="check__box" />
                            {"Chocolate"}
                          </label>
                        </div>
                        <span className="field__hint">{"The phone asks for the quantity of the items you tick (linen and amenity items from LNS). Leave empty for no count."}</span>
                      </fieldset>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="hks-p15-sty4-ph">
                          {"Photo "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-sty4-ph" name="photo" required={true} defaultValue={"None"}>
                            <option value="None">{"None"}</option>
                            <option value="Optional">{"Optional"}</option>
                            <option value="Required">{"Required"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"None, optional or required at this step"}</span>
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
              <div className="modal modal--lg" id="hks-p15-sty5" data-code="HKS-P15" role="dialog" aria-modal="true" aria-labelledby="hks-p15-sty5-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-13-attendant-cleaning-steps/#saved-sty5" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p15-sty5-t">{"Step 5 of STY"}</h2>
                      <p className="modal__desc">{"A step the attendant sees on the phone. This is separate from the supervisor’s inspection checklist."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-sty5-tt">
                          {"Task type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-sty5-tt" name="task_type" required={true} defaultValue={"STY · Stayover"}>
                            <option value="DEP · Departure clean">{"DEP · Departure clean"}</option>
                            <option value="ARR · Arrival check">{"ARR · Arrival check"}</option>
                            <option value="TCH · Touch-up">{"TCH · Touch-up"}</option>
                            <option value="STY · Stayover">{"STY · Stayover"}</option>
                            <option value="LCH · Linen change">{"LCH · Linen change"}</option>
                            <option value="DCL · Deep clean">{"DCL · Deep clean"}</option>
                            <option value="TDN · Turndown">{"TDN · Turndown"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"The step belongs to this task type"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-sty5-tx">
                          {"Step text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p15-sty5-tx" type="text" name="text" maxLength="150" required={true} defaultValue={"Clean the bathroom"} />
                        <span className="field__hint">{"In English, up to 150 characters"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-sty5-ml">{"Malayalam (optional)"}</label>
                        <input className="field__input" id="hks-p15-sty5-ml" type="text" name="text_ml" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Malayalam"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-sty5-hi">{"Hindi (optional)"}</label>
                        <input className="field__input" id="hks-p15-sty5-hi" type="text" name="text_hi" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Hindi"}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p15-sty5-m">
                          <input id="hks-p15-sty5-m" type="checkbox" role="switch" name="mandatory" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Mandatory tick"}
                        </label>
                        <span className="field__hint">{"The attendant cannot finish the task without ticking this step"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">{"Asks for count of"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath towel" />
                            <span className="check__box" />
                            {"Bath towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Hand towel" />
                            <span className="check__box" />
                            {"Hand towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath mat" />
                            <span className="check__box" />
                            {"Bath mat"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bed linen set" />
                            <span className="check__box" />
                            {"Bed linen set"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Pillow case" />
                            <span className="check__box" />
                            {"Pillow case"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Shampoo" />
                            <span className="check__box" />
                            {"Shampoo"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Conditioner" />
                            <span className="check__box" />
                            {"Conditioner"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Body wash" />
                            <span className="check__box" />
                            {"Body wash"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Soap" />
                            <span className="check__box" />
                            {"Soap"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Dental kit" />
                            <span className="check__box" />
                            {"Dental kit"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Water bottle" />
                            <span className="check__box" />
                            {"Water bottle"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Tea / coffee sachets" />
                            <span className="check__box" />
                            {"Tea / coffee sachets"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bathrobe" />
                            <span className="check__box" />
                            {"Bathrobe"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Slippers" />
                            <span className="check__box" />
                            {"Slippers"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Chocolate" />
                            <span className="check__box" />
                            {"Chocolate"}
                          </label>
                        </div>
                        <span className="field__hint">{"The phone asks for the quantity of the items you tick (linen and amenity items from LNS). Leave empty for no count."}</span>
                      </fieldset>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="hks-p15-sty5-ph">
                          {"Photo "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-sty5-ph" name="photo" required={true} defaultValue={"None"}>
                            <option value="None">{"None"}</option>
                            <option value="Optional">{"Optional"}</option>
                            <option value="Required">{"Required"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"None, optional or required at this step"}</span>
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
              <div className="modal modal--lg" id="hks-p15-sty6" data-code="HKS-P15" role="dialog" aria-modal="true" aria-labelledby="hks-p15-sty6-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-13-attendant-cleaning-steps/#saved-sty6" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p15-sty6-t">{"Step 6 of STY"}</h2>
                      <p className="modal__desc">{"A step the attendant sees on the phone. This is separate from the supervisor’s inspection checklist."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-sty6-tt">
                          {"Task type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-sty6-tt" name="task_type" required={true} defaultValue={"STY · Stayover"}>
                            <option value="DEP · Departure clean">{"DEP · Departure clean"}</option>
                            <option value="ARR · Arrival check">{"ARR · Arrival check"}</option>
                            <option value="TCH · Touch-up">{"TCH · Touch-up"}</option>
                            <option value="STY · Stayover">{"STY · Stayover"}</option>
                            <option value="LCH · Linen change">{"LCH · Linen change"}</option>
                            <option value="DCL · Deep clean">{"DCL · Deep clean"}</option>
                            <option value="TDN · Turndown">{"TDN · Turndown"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"The step belongs to this task type"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-sty6-tx">
                          {"Step text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p15-sty6-tx" type="text" name="text" maxLength="150" required={true} defaultValue={"Replace towels the guest left on the floor"} />
                        <span className="field__hint">{"In English, up to 150 characters"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-sty6-ml">{"Malayalam (optional)"}</label>
                        <input className="field__input" id="hks-p15-sty6-ml" type="text" name="text_ml" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Malayalam"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-sty6-hi">{"Hindi (optional)"}</label>
                        <input className="field__input" id="hks-p15-sty6-hi" type="text" name="text_hi" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Hindi"}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p15-sty6-m">
                          <input id="hks-p15-sty6-m" type="checkbox" role="switch" name="mandatory" />
                          <span className="sw__track" />
                          {"Mandatory tick"}
                        </label>
                        <span className="field__hint">{"The attendant cannot finish the task without ticking this step"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">{"Asks for count of"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath towel" defaultChecked={true} />
                            <span className="check__box" />
                            {"Bath towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Hand towel" defaultChecked={true} />
                            <span className="check__box" />
                            {"Hand towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath mat" />
                            <span className="check__box" />
                            {"Bath mat"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bed linen set" />
                            <span className="check__box" />
                            {"Bed linen set"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Pillow case" />
                            <span className="check__box" />
                            {"Pillow case"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Shampoo" />
                            <span className="check__box" />
                            {"Shampoo"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Conditioner" />
                            <span className="check__box" />
                            {"Conditioner"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Body wash" />
                            <span className="check__box" />
                            {"Body wash"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Soap" />
                            <span className="check__box" />
                            {"Soap"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Dental kit" />
                            <span className="check__box" />
                            {"Dental kit"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Water bottle" />
                            <span className="check__box" />
                            {"Water bottle"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Tea / coffee sachets" />
                            <span className="check__box" />
                            {"Tea / coffee sachets"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bathrobe" />
                            <span className="check__box" />
                            {"Bathrobe"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Slippers" />
                            <span className="check__box" />
                            {"Slippers"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Chocolate" />
                            <span className="check__box" />
                            {"Chocolate"}
                          </label>
                        </div>
                        <span className="field__hint">{"The phone asks for the quantity of the items you tick (linen and amenity items from LNS). Leave empty for no count."}</span>
                      </fieldset>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="hks-p15-sty6-ph">
                          {"Photo "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-sty6-ph" name="photo" required={true} defaultValue={"None"}>
                            <option value="None">{"None"}</option>
                            <option value="Optional">{"Optional"}</option>
                            <option value="Required">{"Required"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"None, optional or required at this step"}</span>
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
              <div className="modal modal--lg" id="hks-p15-sty7" data-code="HKS-P15" role="dialog" aria-modal="true" aria-labelledby="hks-p15-sty7-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-13-attendant-cleaning-steps/#saved-sty7" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p15-sty7-t">{"Step 7 of STY"}</h2>
                      <p className="modal__desc">{"A step the attendant sees on the phone. This is separate from the supervisor’s inspection checklist."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-sty7-tt">
                          {"Task type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-sty7-tt" name="task_type" required={true} defaultValue={"STY · Stayover"}>
                            <option value="DEP · Departure clean">{"DEP · Departure clean"}</option>
                            <option value="ARR · Arrival check">{"ARR · Arrival check"}</option>
                            <option value="TCH · Touch-up">{"TCH · Touch-up"}</option>
                            <option value="STY · Stayover">{"STY · Stayover"}</option>
                            <option value="LCH · Linen change">{"LCH · Linen change"}</option>
                            <option value="DCL · Deep clean">{"DCL · Deep clean"}</option>
                            <option value="TDN · Turndown">{"TDN · Turndown"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"The step belongs to this task type"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-sty7-tx">
                          {"Step text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p15-sty7-tx" type="text" name="text" maxLength="150" required={true} defaultValue={"Dust and vacuum"} />
                        <span className="field__hint">{"In English, up to 150 characters"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-sty7-ml">{"Malayalam (optional)"}</label>
                        <input className="field__input" id="hks-p15-sty7-ml" type="text" name="text_ml" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Malayalam"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-sty7-hi">{"Hindi (optional)"}</label>
                        <input className="field__input" id="hks-p15-sty7-hi" type="text" name="text_hi" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Hindi"}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p15-sty7-m">
                          <input id="hks-p15-sty7-m" type="checkbox" role="switch" name="mandatory" />
                          <span className="sw__track" />
                          {"Mandatory tick"}
                        </label>
                        <span className="field__hint">{"The attendant cannot finish the task without ticking this step"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">{"Asks for count of"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath towel" />
                            <span className="check__box" />
                            {"Bath towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Hand towel" />
                            <span className="check__box" />
                            {"Hand towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath mat" />
                            <span className="check__box" />
                            {"Bath mat"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bed linen set" />
                            <span className="check__box" />
                            {"Bed linen set"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Pillow case" />
                            <span className="check__box" />
                            {"Pillow case"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Shampoo" />
                            <span className="check__box" />
                            {"Shampoo"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Conditioner" />
                            <span className="check__box" />
                            {"Conditioner"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Body wash" />
                            <span className="check__box" />
                            {"Body wash"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Soap" />
                            <span className="check__box" />
                            {"Soap"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Dental kit" />
                            <span className="check__box" />
                            {"Dental kit"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Water bottle" />
                            <span className="check__box" />
                            {"Water bottle"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Tea / coffee sachets" />
                            <span className="check__box" />
                            {"Tea / coffee sachets"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bathrobe" />
                            <span className="check__box" />
                            {"Bathrobe"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Slippers" />
                            <span className="check__box" />
                            {"Slippers"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Chocolate" />
                            <span className="check__box" />
                            {"Chocolate"}
                          </label>
                        </div>
                        <span className="field__hint">{"The phone asks for the quantity of the items you tick (linen and amenity items from LNS). Leave empty for no count."}</span>
                      </fieldset>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="hks-p15-sty7-ph">
                          {"Photo "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-sty7-ph" name="photo" required={true} defaultValue={"None"}>
                            <option value="None">{"None"}</option>
                            <option value="Optional">{"Optional"}</option>
                            <option value="Required">{"Required"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"None, optional or required at this step"}</span>
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
              <div className="modal modal--lg" id="hks-p15-sty8" data-code="HKS-P15" role="dialog" aria-modal="true" aria-labelledby="hks-p15-sty8-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-13-attendant-cleaning-steps/#saved-sty8" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p15-sty8-t">{"Step 8 of STY"}</h2>
                      <p className="modal__desc">{"A step the attendant sees on the phone. This is separate from the supervisor’s inspection checklist."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-sty8-tt">
                          {"Task type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-sty8-tt" name="task_type" required={true} defaultValue={"STY · Stayover"}>
                            <option value="DEP · Departure clean">{"DEP · Departure clean"}</option>
                            <option value="ARR · Arrival check">{"ARR · Arrival check"}</option>
                            <option value="TCH · Touch-up">{"TCH · Touch-up"}</option>
                            <option value="STY · Stayover">{"STY · Stayover"}</option>
                            <option value="LCH · Linen change">{"LCH · Linen change"}</option>
                            <option value="DCL · Deep clean">{"DCL · Deep clean"}</option>
                            <option value="TDN · Turndown">{"TDN · Turndown"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"The step belongs to this task type"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-sty8-tx">
                          {"Step text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p15-sty8-tx" type="text" name="text" maxLength="150" required={true} defaultValue={"Replenish amenities and water"} />
                        <span className="field__hint">{"In English, up to 150 characters"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-sty8-ml">{"Malayalam (optional)"}</label>
                        <input className="field__input" id="hks-p15-sty8-ml" type="text" name="text_ml" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Malayalam"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-sty8-hi">{"Hindi (optional)"}</label>
                        <input className="field__input" id="hks-p15-sty8-hi" type="text" name="text_hi" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Hindi"}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p15-sty8-m">
                          <input id="hks-p15-sty8-m" type="checkbox" role="switch" name="mandatory" />
                          <span className="sw__track" />
                          {"Mandatory tick"}
                        </label>
                        <span className="field__hint">{"The attendant cannot finish the task without ticking this step"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">{"Asks for count of"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath towel" />
                            <span className="check__box" />
                            {"Bath towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Hand towel" />
                            <span className="check__box" />
                            {"Hand towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath mat" />
                            <span className="check__box" />
                            {"Bath mat"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bed linen set" />
                            <span className="check__box" />
                            {"Bed linen set"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Pillow case" />
                            <span className="check__box" />
                            {"Pillow case"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Shampoo" defaultChecked={true} />
                            <span className="check__box" />
                            {"Shampoo"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Conditioner" />
                            <span className="check__box" />
                            {"Conditioner"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Body wash" />
                            <span className="check__box" />
                            {"Body wash"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Soap" defaultChecked={true} />
                            <span className="check__box" />
                            {"Soap"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Dental kit" />
                            <span className="check__box" />
                            {"Dental kit"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Water bottle" defaultChecked={true} />
                            <span className="check__box" />
                            {"Water bottle"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Tea / coffee sachets" defaultChecked={true} />
                            <span className="check__box" />
                            {"Tea / coffee sachets"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bathrobe" />
                            <span className="check__box" />
                            {"Bathrobe"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Slippers" />
                            <span className="check__box" />
                            {"Slippers"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Chocolate" />
                            <span className="check__box" />
                            {"Chocolate"}
                          </label>
                        </div>
                        <span className="field__hint">{"The phone asks for the quantity of the items you tick (linen and amenity items from LNS). Leave empty for no count."}</span>
                      </fieldset>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="hks-p15-sty8-ph">
                          {"Photo "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-sty8-ph" name="photo" required={true} defaultValue={"None"}>
                            <option value="None">{"None"}</option>
                            <option value="Optional">{"Optional"}</option>
                            <option value="Required">{"Required"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"None, optional or required at this step"}</span>
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
              <div className="modal modal--lg" id="hks-p15-sty9" data-code="HKS-P15" role="dialog" aria-modal="true" aria-labelledby="hks-p15-sty9-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-13-attendant-cleaning-steps/#saved-sty9" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p15-sty9-t">{"Step 9 of STY"}</h2>
                      <p className="modal__desc">{"A step the attendant sees on the phone. This is separate from the supervisor’s inspection checklist."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-sty9-tt">
                          {"Task type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-sty9-tt" name="task_type" required={true} defaultValue={"STY · Stayover"}>
                            <option value="DEP · Departure clean">{"DEP · Departure clean"}</option>
                            <option value="ARR · Arrival check">{"ARR · Arrival check"}</option>
                            <option value="TCH · Touch-up">{"TCH · Touch-up"}</option>
                            <option value="STY · Stayover">{"STY · Stayover"}</option>
                            <option value="LCH · Linen change">{"LCH · Linen change"}</option>
                            <option value="DCL · Deep clean">{"DCL · Deep clean"}</option>
                            <option value="TDN · Turndown">{"TDN · Turndown"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"The step belongs to this task type"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-sty9-tx">
                          {"Step text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p15-sty9-tx" type="text" name="text" maxLength="150" required={true} defaultValue={"Final check"} />
                        <span className="field__hint">{"In English, up to 150 characters"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-sty9-ml">{"Malayalam (optional)"}</label>
                        <input className="field__input" id="hks-p15-sty9-ml" type="text" name="text_ml" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Malayalam"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-sty9-hi">{"Hindi (optional)"}</label>
                        <input className="field__input" id="hks-p15-sty9-hi" type="text" name="text_hi" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Hindi"}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p15-sty9-m">
                          <input id="hks-p15-sty9-m" type="checkbox" role="switch" name="mandatory" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Mandatory tick"}
                        </label>
                        <span className="field__hint">{"The attendant cannot finish the task without ticking this step"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">{"Asks for count of"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath towel" />
                            <span className="check__box" />
                            {"Bath towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Hand towel" />
                            <span className="check__box" />
                            {"Hand towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath mat" />
                            <span className="check__box" />
                            {"Bath mat"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bed linen set" />
                            <span className="check__box" />
                            {"Bed linen set"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Pillow case" />
                            <span className="check__box" />
                            {"Pillow case"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Shampoo" />
                            <span className="check__box" />
                            {"Shampoo"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Conditioner" />
                            <span className="check__box" />
                            {"Conditioner"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Body wash" />
                            <span className="check__box" />
                            {"Body wash"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Soap" />
                            <span className="check__box" />
                            {"Soap"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Dental kit" />
                            <span className="check__box" />
                            {"Dental kit"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Water bottle" />
                            <span className="check__box" />
                            {"Water bottle"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Tea / coffee sachets" />
                            <span className="check__box" />
                            {"Tea / coffee sachets"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bathrobe" />
                            <span className="check__box" />
                            {"Bathrobe"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Slippers" />
                            <span className="check__box" />
                            {"Slippers"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Chocolate" />
                            <span className="check__box" />
                            {"Chocolate"}
                          </label>
                        </div>
                        <span className="field__hint">{"The phone asks for the quantity of the items you tick (linen and amenity items from LNS). Leave empty for no count."}</span>
                      </fieldset>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="hks-p15-sty9-ph">
                          {"Photo "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-sty9-ph" name="photo" required={true} defaultValue={"None"}>
                            <option value="None">{"None"}</option>
                            <option value="Optional">{"Optional"}</option>
                            <option value="Required">{"Required"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"None, optional or required at this step"}</span>
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
              <div className="modal modal--lg" id="hks-p15-lch1" data-code="HKS-P15" role="dialog" aria-modal="true" aria-labelledby="hks-p15-lch1-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-13-attendant-cleaning-steps/#saved-lch1" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p15-lch1-t">{"Step 1 of LCH"}</h2>
                      <p className="modal__desc">{"A step the attendant sees on the phone. This is separate from the supervisor’s inspection checklist."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-lch1-tt">
                          {"Task type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-lch1-tt" name="task_type" required={true} defaultValue={"LCH · Linen change"}>
                            <option value="DEP · Departure clean">{"DEP · Departure clean"}</option>
                            <option value="ARR · Arrival check">{"ARR · Arrival check"}</option>
                            <option value="TCH · Touch-up">{"TCH · Touch-up"}</option>
                            <option value="STY · Stayover">{"STY · Stayover"}</option>
                            <option value="LCH · Linen change">{"LCH · Linen change"}</option>
                            <option value="DCL · Deep clean">{"DCL · Deep clean"}</option>
                            <option value="TDN · Turndown">{"TDN · Turndown"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"The step belongs to this task type"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-lch1-tx">
                          {"Step text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p15-lch1-tx" type="text" name="text" maxLength="150" required={true} defaultValue={"Strip the bed linen"} />
                        <span className="field__hint">{"In English, up to 150 characters"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-lch1-ml">{"Malayalam (optional)"}</label>
                        <input className="field__input" id="hks-p15-lch1-ml" type="text" name="text_ml" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Malayalam"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-lch1-hi">{"Hindi (optional)"}</label>
                        <input className="field__input" id="hks-p15-lch1-hi" type="text" name="text_hi" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Hindi"}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p15-lch1-m">
                          <input id="hks-p15-lch1-m" type="checkbox" role="switch" name="mandatory" />
                          <span className="sw__track" />
                          {"Mandatory tick"}
                        </label>
                        <span className="field__hint">{"The attendant cannot finish the task without ticking this step"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">{"Asks for count of"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath towel" />
                            <span className="check__box" />
                            {"Bath towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Hand towel" />
                            <span className="check__box" />
                            {"Hand towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath mat" />
                            <span className="check__box" />
                            {"Bath mat"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bed linen set" />
                            <span className="check__box" />
                            {"Bed linen set"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Pillow case" />
                            <span className="check__box" />
                            {"Pillow case"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Shampoo" />
                            <span className="check__box" />
                            {"Shampoo"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Conditioner" />
                            <span className="check__box" />
                            {"Conditioner"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Body wash" />
                            <span className="check__box" />
                            {"Body wash"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Soap" />
                            <span className="check__box" />
                            {"Soap"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Dental kit" />
                            <span className="check__box" />
                            {"Dental kit"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Water bottle" />
                            <span className="check__box" />
                            {"Water bottle"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Tea / coffee sachets" />
                            <span className="check__box" />
                            {"Tea / coffee sachets"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bathrobe" />
                            <span className="check__box" />
                            {"Bathrobe"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Slippers" />
                            <span className="check__box" />
                            {"Slippers"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Chocolate" />
                            <span className="check__box" />
                            {"Chocolate"}
                          </label>
                        </div>
                        <span className="field__hint">{"The phone asks for the quantity of the items you tick (linen and amenity items from LNS). Leave empty for no count."}</span>
                      </fieldset>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="hks-p15-lch1-ph">
                          {"Photo "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-lch1-ph" name="photo" required={true} defaultValue={"None"}>
                            <option value="None">{"None"}</option>
                            <option value="Optional">{"Optional"}</option>
                            <option value="Required">{"Required"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"None, optional or required at this step"}</span>
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
              <div className="modal modal--lg" id="hks-p15-lch2" data-code="HKS-P15" role="dialog" aria-modal="true" aria-labelledby="hks-p15-lch2-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-13-attendant-cleaning-steps/#saved-lch2" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p15-lch2-t">{"Step 2 of LCH"}</h2>
                      <p className="modal__desc">{"A step the attendant sees on the phone. This is separate from the supervisor’s inspection checklist."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-lch2-tt">
                          {"Task type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-lch2-tt" name="task_type" required={true} defaultValue={"LCH · Linen change"}>
                            <option value="DEP · Departure clean">{"DEP · Departure clean"}</option>
                            <option value="ARR · Arrival check">{"ARR · Arrival check"}</option>
                            <option value="TCH · Touch-up">{"TCH · Touch-up"}</option>
                            <option value="STY · Stayover">{"STY · Stayover"}</option>
                            <option value="LCH · Linen change">{"LCH · Linen change"}</option>
                            <option value="DCL · Deep clean">{"DCL · Deep clean"}</option>
                            <option value="TDN · Turndown">{"TDN · Turndown"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"The step belongs to this task type"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-lch2-tx">
                          {"Step text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p15-lch2-tx" type="text" name="text" maxLength="150" required={true} defaultValue={"Make the bed with fresh linen"} />
                        <span className="field__hint">{"In English, up to 150 characters"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-lch2-ml">{"Malayalam (optional)"}</label>
                        <input className="field__input" id="hks-p15-lch2-ml" type="text" name="text_ml" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Malayalam"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-lch2-hi">{"Hindi (optional)"}</label>
                        <input className="field__input" id="hks-p15-lch2-hi" type="text" name="text_hi" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Hindi"}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p15-lch2-m">
                          <input id="hks-p15-lch2-m" type="checkbox" role="switch" name="mandatory" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Mandatory tick"}
                        </label>
                        <span className="field__hint">{"The attendant cannot finish the task without ticking this step"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">{"Asks for count of"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath towel" />
                            <span className="check__box" />
                            {"Bath towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Hand towel" />
                            <span className="check__box" />
                            {"Hand towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath mat" />
                            <span className="check__box" />
                            {"Bath mat"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bed linen set" defaultChecked={true} />
                            <span className="check__box" />
                            {"Bed linen set"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Pillow case" defaultChecked={true} />
                            <span className="check__box" />
                            {"Pillow case"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Shampoo" />
                            <span className="check__box" />
                            {"Shampoo"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Conditioner" />
                            <span className="check__box" />
                            {"Conditioner"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Body wash" />
                            <span className="check__box" />
                            {"Body wash"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Soap" />
                            <span className="check__box" />
                            {"Soap"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Dental kit" />
                            <span className="check__box" />
                            {"Dental kit"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Water bottle" />
                            <span className="check__box" />
                            {"Water bottle"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Tea / coffee sachets" />
                            <span className="check__box" />
                            {"Tea / coffee sachets"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bathrobe" />
                            <span className="check__box" />
                            {"Bathrobe"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Slippers" />
                            <span className="check__box" />
                            {"Slippers"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Chocolate" />
                            <span className="check__box" />
                            {"Chocolate"}
                          </label>
                        </div>
                        <span className="field__hint">{"The phone asks for the quantity of the items you tick (linen and amenity items from LNS). Leave empty for no count."}</span>
                      </fieldset>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="hks-p15-lch2-ph">
                          {"Photo "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-lch2-ph" name="photo" required={true} defaultValue={"None"}>
                            <option value="None">{"None"}</option>
                            <option value="Optional">{"Optional"}</option>
                            <option value="Required">{"Required"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"None, optional or required at this step"}</span>
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
              <div className="modal modal--lg" id="hks-p15-lch3" data-code="HKS-P15" role="dialog" aria-modal="true" aria-labelledby="hks-p15-lch3-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-13-attendant-cleaning-steps/#saved-lch3" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p15-lch3-t">{"Step 3 of LCH"}</h2>
                      <p className="modal__desc">{"A step the attendant sees on the phone. This is separate from the supervisor’s inspection checklist."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-lch3-tt">
                          {"Task type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-lch3-tt" name="task_type" required={true} defaultValue={"LCH · Linen change"}>
                            <option value="DEP · Departure clean">{"DEP · Departure clean"}</option>
                            <option value="ARR · Arrival check">{"ARR · Arrival check"}</option>
                            <option value="TCH · Touch-up">{"TCH · Touch-up"}</option>
                            <option value="STY · Stayover">{"STY · Stayover"}</option>
                            <option value="LCH · Linen change">{"LCH · Linen change"}</option>
                            <option value="DCL · Deep clean">{"DCL · Deep clean"}</option>
                            <option value="TDN · Turndown">{"TDN · Turndown"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"The step belongs to this task type"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-lch3-tx">
                          {"Step text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p15-lch3-tx" type="text" name="text" maxLength="150" required={true} defaultValue={"Change bath and hand towels"} />
                        <span className="field__hint">{"In English, up to 150 characters"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-lch3-ml">{"Malayalam (optional)"}</label>
                        <input className="field__input" id="hks-p15-lch3-ml" type="text" name="text_ml" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Malayalam"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-lch3-hi">{"Hindi (optional)"}</label>
                        <input className="field__input" id="hks-p15-lch3-hi" type="text" name="text_hi" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Hindi"}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p15-lch3-m">
                          <input id="hks-p15-lch3-m" type="checkbox" role="switch" name="mandatory" />
                          <span className="sw__track" />
                          {"Mandatory tick"}
                        </label>
                        <span className="field__hint">{"The attendant cannot finish the task without ticking this step"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">{"Asks for count of"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath towel" defaultChecked={true} />
                            <span className="check__box" />
                            {"Bath towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Hand towel" defaultChecked={true} />
                            <span className="check__box" />
                            {"Hand towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath mat" defaultChecked={true} />
                            <span className="check__box" />
                            {"Bath mat"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bed linen set" />
                            <span className="check__box" />
                            {"Bed linen set"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Pillow case" />
                            <span className="check__box" />
                            {"Pillow case"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Shampoo" />
                            <span className="check__box" />
                            {"Shampoo"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Conditioner" />
                            <span className="check__box" />
                            {"Conditioner"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Body wash" />
                            <span className="check__box" />
                            {"Body wash"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Soap" />
                            <span className="check__box" />
                            {"Soap"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Dental kit" />
                            <span className="check__box" />
                            {"Dental kit"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Water bottle" />
                            <span className="check__box" />
                            {"Water bottle"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Tea / coffee sachets" />
                            <span className="check__box" />
                            {"Tea / coffee sachets"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bathrobe" />
                            <span className="check__box" />
                            {"Bathrobe"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Slippers" />
                            <span className="check__box" />
                            {"Slippers"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Chocolate" />
                            <span className="check__box" />
                            {"Chocolate"}
                          </label>
                        </div>
                        <span className="field__hint">{"The phone asks for the quantity of the items you tick (linen and amenity items from LNS). Leave empty for no count."}</span>
                      </fieldset>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="hks-p15-lch3-ph">
                          {"Photo "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-lch3-ph" name="photo" required={true} defaultValue={"None"}>
                            <option value="None">{"None"}</option>
                            <option value="Optional">{"Optional"}</option>
                            <option value="Required">{"Required"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"None, optional or required at this step"}</span>
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
              <div className="modal modal--lg" id="hks-p15-lch4" data-code="HKS-P15" role="dialog" aria-modal="true" aria-labelledby="hks-p15-lch4-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-13-attendant-cleaning-steps/#saved-lch4" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p15-lch4-t">{"Step 4 of LCH"}</h2>
                      <p className="modal__desc">{"A step the attendant sees on the phone. This is separate from the supervisor’s inspection checklist."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-lch4-tt">
                          {"Task type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-lch4-tt" name="task_type" required={true} defaultValue={"LCH · Linen change"}>
                            <option value="DEP · Departure clean">{"DEP · Departure clean"}</option>
                            <option value="ARR · Arrival check">{"ARR · Arrival check"}</option>
                            <option value="TCH · Touch-up">{"TCH · Touch-up"}</option>
                            <option value="STY · Stayover">{"STY · Stayover"}</option>
                            <option value="LCH · Linen change">{"LCH · Linen change"}</option>
                            <option value="DCL · Deep clean">{"DCL · Deep clean"}</option>
                            <option value="TDN · Turndown">{"TDN · Turndown"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"The step belongs to this task type"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-lch4-tx">
                          {"Step text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p15-lch4-tx" type="text" name="text" maxLength="150" required={true} defaultValue={"Report the number of soiled items"} />
                        <span className="field__hint">{"In English, up to 150 characters"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-lch4-ml">{"Malayalam (optional)"}</label>
                        <input className="field__input" id="hks-p15-lch4-ml" type="text" name="text_ml" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Malayalam"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-lch4-hi">{"Hindi (optional)"}</label>
                        <input className="field__input" id="hks-p15-lch4-hi" type="text" name="text_hi" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Hindi"}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p15-lch4-m">
                          <input id="hks-p15-lch4-m" type="checkbox" role="switch" name="mandatory" />
                          <span className="sw__track" />
                          {"Mandatory tick"}
                        </label>
                        <span className="field__hint">{"The attendant cannot finish the task without ticking this step"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">{"Asks for count of"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath towel" />
                            <span className="check__box" />
                            {"Bath towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Hand towel" />
                            <span className="check__box" />
                            {"Hand towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath mat" />
                            <span className="check__box" />
                            {"Bath mat"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bed linen set" />
                            <span className="check__box" />
                            {"Bed linen set"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Pillow case" />
                            <span className="check__box" />
                            {"Pillow case"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Shampoo" />
                            <span className="check__box" />
                            {"Shampoo"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Conditioner" />
                            <span className="check__box" />
                            {"Conditioner"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Body wash" />
                            <span className="check__box" />
                            {"Body wash"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Soap" />
                            <span className="check__box" />
                            {"Soap"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Dental kit" />
                            <span className="check__box" />
                            {"Dental kit"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Water bottle" />
                            <span className="check__box" />
                            {"Water bottle"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Tea / coffee sachets" />
                            <span className="check__box" />
                            {"Tea / coffee sachets"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bathrobe" />
                            <span className="check__box" />
                            {"Bathrobe"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Slippers" />
                            <span className="check__box" />
                            {"Slippers"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Chocolate" />
                            <span className="check__box" />
                            {"Chocolate"}
                          </label>
                        </div>
                        <span className="field__hint">{"The phone asks for the quantity of the items you tick (linen and amenity items from LNS). Leave empty for no count."}</span>
                      </fieldset>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="hks-p15-lch4-ph">
                          {"Photo "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-lch4-ph" name="photo" required={true} defaultValue={"None"}>
                            <option value="None">{"None"}</option>
                            <option value="Optional">{"Optional"}</option>
                            <option value="Required">{"Required"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"None, optional or required at this step"}</span>
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
              <div className="modal modal--lg" id="hks-p15-dcl1" data-code="HKS-P15" role="dialog" aria-modal="true" aria-labelledby="hks-p15-dcl1-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-13-attendant-cleaning-steps/#saved-dcl1" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p15-dcl1-t">{"Step 1 of DCL"}</h2>
                      <p className="modal__desc">{"A step the attendant sees on the phone. This is separate from the supervisor’s inspection checklist."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-dcl1-tt">
                          {"Task type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-dcl1-tt" name="task_type" required={true} defaultValue={"DCL · Deep clean"}>
                            <option value="DEP · Departure clean">{"DEP · Departure clean"}</option>
                            <option value="ARR · Arrival check">{"ARR · Arrival check"}</option>
                            <option value="TCH · Touch-up">{"TCH · Touch-up"}</option>
                            <option value="STY · Stayover">{"STY · Stayover"}</option>
                            <option value="LCH · Linen change">{"LCH · Linen change"}</option>
                            <option value="DCL · Deep clean">{"DCL · Deep clean"}</option>
                            <option value="TDN · Turndown">{"TDN · Turndown"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"The step belongs to this task type"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-dcl1-tx">
                          {"Step text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p15-dcl1-tx" type="text" name="text" maxLength="150" required={true} defaultValue={"Move furniture and protect the fittings"} />
                        <span className="field__hint">{"In English, up to 150 characters"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-dcl1-ml">{"Malayalam (optional)"}</label>
                        <input className="field__input" id="hks-p15-dcl1-ml" type="text" name="text_ml" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Malayalam"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-dcl1-hi">{"Hindi (optional)"}</label>
                        <input className="field__input" id="hks-p15-dcl1-hi" type="text" name="text_hi" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Hindi"}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p15-dcl1-m">
                          <input id="hks-p15-dcl1-m" type="checkbox" role="switch" name="mandatory" />
                          <span className="sw__track" />
                          {"Mandatory tick"}
                        </label>
                        <span className="field__hint">{"The attendant cannot finish the task without ticking this step"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">{"Asks for count of"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath towel" />
                            <span className="check__box" />
                            {"Bath towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Hand towel" />
                            <span className="check__box" />
                            {"Hand towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath mat" />
                            <span className="check__box" />
                            {"Bath mat"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bed linen set" />
                            <span className="check__box" />
                            {"Bed linen set"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Pillow case" />
                            <span className="check__box" />
                            {"Pillow case"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Shampoo" />
                            <span className="check__box" />
                            {"Shampoo"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Conditioner" />
                            <span className="check__box" />
                            {"Conditioner"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Body wash" />
                            <span className="check__box" />
                            {"Body wash"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Soap" />
                            <span className="check__box" />
                            {"Soap"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Dental kit" />
                            <span className="check__box" />
                            {"Dental kit"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Water bottle" />
                            <span className="check__box" />
                            {"Water bottle"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Tea / coffee sachets" />
                            <span className="check__box" />
                            {"Tea / coffee sachets"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bathrobe" />
                            <span className="check__box" />
                            {"Bathrobe"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Slippers" />
                            <span className="check__box" />
                            {"Slippers"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Chocolate" />
                            <span className="check__box" />
                            {"Chocolate"}
                          </label>
                        </div>
                        <span className="field__hint">{"The phone asks for the quantity of the items you tick (linen and amenity items from LNS). Leave empty for no count."}</span>
                      </fieldset>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="hks-p15-dcl1-ph">
                          {"Photo "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-dcl1-ph" name="photo" required={true} defaultValue={"None"}>
                            <option value="None">{"None"}</option>
                            <option value="Optional">{"Optional"}</option>
                            <option value="Required">{"Required"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"None, optional or required at this step"}</span>
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
              <div className="modal modal--lg" id="hks-p15-dcl2" data-code="HKS-P15" role="dialog" aria-modal="true" aria-labelledby="hks-p15-dcl2-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-13-attendant-cleaning-steps/#saved-dcl2" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p15-dcl2-t">{"Step 2 of DCL"}</h2>
                      <p className="modal__desc">{"A step the attendant sees on the phone. This is separate from the supervisor’s inspection checklist."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-dcl2-tt">
                          {"Task type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-dcl2-tt" name="task_type" required={true} defaultValue={"DCL · Deep clean"}>
                            <option value="DEP · Departure clean">{"DEP · Departure clean"}</option>
                            <option value="ARR · Arrival check">{"ARR · Arrival check"}</option>
                            <option value="TCH · Touch-up">{"TCH · Touch-up"}</option>
                            <option value="STY · Stayover">{"STY · Stayover"}</option>
                            <option value="LCH · Linen change">{"LCH · Linen change"}</option>
                            <option value="DCL · Deep clean">{"DCL · Deep clean"}</option>
                            <option value="TDN · Turndown">{"TDN · Turndown"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"The step belongs to this task type"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-dcl2-tx">
                          {"Step text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p15-dcl2-tx" type="text" name="text" maxLength="150" required={true} defaultValue={"Do the deep-clean job of the day (see Deep Cleaning Rotation)"} />
                        <span className="field__hint">{"In English, up to 150 characters"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-dcl2-ml">{"Malayalam (optional)"}</label>
                        <input className="field__input" id="hks-p15-dcl2-ml" type="text" name="text_ml" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Malayalam"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-dcl2-hi">{"Hindi (optional)"}</label>
                        <input className="field__input" id="hks-p15-dcl2-hi" type="text" name="text_hi" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Hindi"}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p15-dcl2-m">
                          <input id="hks-p15-dcl2-m" type="checkbox" role="switch" name="mandatory" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Mandatory tick"}
                        </label>
                        <span className="field__hint">{"The attendant cannot finish the task without ticking this step"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">{"Asks for count of"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath towel" />
                            <span className="check__box" />
                            {"Bath towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Hand towel" />
                            <span className="check__box" />
                            {"Hand towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath mat" />
                            <span className="check__box" />
                            {"Bath mat"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bed linen set" />
                            <span className="check__box" />
                            {"Bed linen set"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Pillow case" />
                            <span className="check__box" />
                            {"Pillow case"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Shampoo" />
                            <span className="check__box" />
                            {"Shampoo"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Conditioner" />
                            <span className="check__box" />
                            {"Conditioner"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Body wash" />
                            <span className="check__box" />
                            {"Body wash"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Soap" />
                            <span className="check__box" />
                            {"Soap"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Dental kit" />
                            <span className="check__box" />
                            {"Dental kit"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Water bottle" />
                            <span className="check__box" />
                            {"Water bottle"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Tea / coffee sachets" />
                            <span className="check__box" />
                            {"Tea / coffee sachets"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bathrobe" />
                            <span className="check__box" />
                            {"Bathrobe"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Slippers" />
                            <span className="check__box" />
                            {"Slippers"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Chocolate" />
                            <span className="check__box" />
                            {"Chocolate"}
                          </label>
                        </div>
                        <span className="field__hint">{"The phone asks for the quantity of the items you tick (linen and amenity items from LNS). Leave empty for no count."}</span>
                      </fieldset>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="hks-p15-dcl2-ph">
                          {"Photo "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-dcl2-ph" name="photo" required={true} defaultValue={"Required"}>
                            <option value="None">{"None"}</option>
                            <option value="Optional">{"Optional"}</option>
                            <option value="Required">{"Required"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"None, optional or required at this step"}</span>
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
              <div className="modal modal--lg" id="hks-p15-dcl3" data-code="HKS-P15" role="dialog" aria-modal="true" aria-labelledby="hks-p15-dcl3-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-13-attendant-cleaning-steps/#saved-dcl3" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p15-dcl3-t">{"Step 3 of DCL"}</h2>
                      <p className="modal__desc">{"A step the attendant sees on the phone. This is separate from the supervisor’s inspection checklist."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-dcl3-tt">
                          {"Task type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-dcl3-tt" name="task_type" required={true} defaultValue={"DCL · Deep clean"}>
                            <option value="DEP · Departure clean">{"DEP · Departure clean"}</option>
                            <option value="ARR · Arrival check">{"ARR · Arrival check"}</option>
                            <option value="TCH · Touch-up">{"TCH · Touch-up"}</option>
                            <option value="STY · Stayover">{"STY · Stayover"}</option>
                            <option value="LCH · Linen change">{"LCH · Linen change"}</option>
                            <option value="DCL · Deep clean">{"DCL · Deep clean"}</option>
                            <option value="TDN · Turndown">{"TDN · Turndown"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"The step belongs to this task type"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-dcl3-tx">
                          {"Step text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p15-dcl3-tx" type="text" name="text" maxLength="150" required={true} defaultValue={"Clean behind and under the furniture"} />
                        <span className="field__hint">{"In English, up to 150 characters"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-dcl3-ml">{"Malayalam (optional)"}</label>
                        <input className="field__input" id="hks-p15-dcl3-ml" type="text" name="text_ml" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Malayalam"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-dcl3-hi">{"Hindi (optional)"}</label>
                        <input className="field__input" id="hks-p15-dcl3-hi" type="text" name="text_hi" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Hindi"}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p15-dcl3-m">
                          <input id="hks-p15-dcl3-m" type="checkbox" role="switch" name="mandatory" />
                          <span className="sw__track" />
                          {"Mandatory tick"}
                        </label>
                        <span className="field__hint">{"The attendant cannot finish the task without ticking this step"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">{"Asks for count of"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath towel" />
                            <span className="check__box" />
                            {"Bath towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Hand towel" />
                            <span className="check__box" />
                            {"Hand towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath mat" />
                            <span className="check__box" />
                            {"Bath mat"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bed linen set" />
                            <span className="check__box" />
                            {"Bed linen set"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Pillow case" />
                            <span className="check__box" />
                            {"Pillow case"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Shampoo" />
                            <span className="check__box" />
                            {"Shampoo"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Conditioner" />
                            <span className="check__box" />
                            {"Conditioner"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Body wash" />
                            <span className="check__box" />
                            {"Body wash"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Soap" />
                            <span className="check__box" />
                            {"Soap"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Dental kit" />
                            <span className="check__box" />
                            {"Dental kit"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Water bottle" />
                            <span className="check__box" />
                            {"Water bottle"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Tea / coffee sachets" />
                            <span className="check__box" />
                            {"Tea / coffee sachets"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bathrobe" />
                            <span className="check__box" />
                            {"Bathrobe"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Slippers" />
                            <span className="check__box" />
                            {"Slippers"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Chocolate" />
                            <span className="check__box" />
                            {"Chocolate"}
                          </label>
                        </div>
                        <span className="field__hint">{"The phone asks for the quantity of the items you tick (linen and amenity items from LNS). Leave empty for no count."}</span>
                      </fieldset>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="hks-p15-dcl3-ph">
                          {"Photo "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-dcl3-ph" name="photo" required={true} defaultValue={"None"}>
                            <option value="None">{"None"}</option>
                            <option value="Optional">{"Optional"}</option>
                            <option value="Required">{"Required"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"None, optional or required at this step"}</span>
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
              <div className="modal modal--lg" id="hks-p15-dcl4" data-code="HKS-P15" role="dialog" aria-modal="true" aria-labelledby="hks-p15-dcl4-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-13-attendant-cleaning-steps/#saved-dcl4" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p15-dcl4-t">{"Step 4 of DCL"}</h2>
                      <p className="modal__desc">{"A step the attendant sees on the phone. This is separate from the supervisor’s inspection checklist."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-dcl4-tt">
                          {"Task type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-dcl4-tt" name="task_type" required={true} defaultValue={"DCL · Deep clean"}>
                            <option value="DEP · Departure clean">{"DEP · Departure clean"}</option>
                            <option value="ARR · Arrival check">{"ARR · Arrival check"}</option>
                            <option value="TCH · Touch-up">{"TCH · Touch-up"}</option>
                            <option value="STY · Stayover">{"STY · Stayover"}</option>
                            <option value="LCH · Linen change">{"LCH · Linen change"}</option>
                            <option value="DCL · Deep clean">{"DCL · Deep clean"}</option>
                            <option value="TDN · Turndown">{"TDN · Turndown"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"The step belongs to this task type"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-dcl4-tx">
                          {"Step text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p15-dcl4-tx" type="text" name="text" maxLength="150" required={true} defaultValue={"Put the furniture back"} />
                        <span className="field__hint">{"In English, up to 150 characters"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-dcl4-ml">{"Malayalam (optional)"}</label>
                        <input className="field__input" id="hks-p15-dcl4-ml" type="text" name="text_ml" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Malayalam"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-dcl4-hi">{"Hindi (optional)"}</label>
                        <input className="field__input" id="hks-p15-dcl4-hi" type="text" name="text_hi" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Hindi"}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p15-dcl4-m">
                          <input id="hks-p15-dcl4-m" type="checkbox" role="switch" name="mandatory" />
                          <span className="sw__track" />
                          {"Mandatory tick"}
                        </label>
                        <span className="field__hint">{"The attendant cannot finish the task without ticking this step"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">{"Asks for count of"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath towel" />
                            <span className="check__box" />
                            {"Bath towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Hand towel" />
                            <span className="check__box" />
                            {"Hand towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath mat" />
                            <span className="check__box" />
                            {"Bath mat"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bed linen set" />
                            <span className="check__box" />
                            {"Bed linen set"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Pillow case" />
                            <span className="check__box" />
                            {"Pillow case"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Shampoo" />
                            <span className="check__box" />
                            {"Shampoo"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Conditioner" />
                            <span className="check__box" />
                            {"Conditioner"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Body wash" />
                            <span className="check__box" />
                            {"Body wash"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Soap" />
                            <span className="check__box" />
                            {"Soap"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Dental kit" />
                            <span className="check__box" />
                            {"Dental kit"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Water bottle" />
                            <span className="check__box" />
                            {"Water bottle"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Tea / coffee sachets" />
                            <span className="check__box" />
                            {"Tea / coffee sachets"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bathrobe" />
                            <span className="check__box" />
                            {"Bathrobe"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Slippers" />
                            <span className="check__box" />
                            {"Slippers"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Chocolate" />
                            <span className="check__box" />
                            {"Chocolate"}
                          </label>
                        </div>
                        <span className="field__hint">{"The phone asks for the quantity of the items you tick (linen and amenity items from LNS). Leave empty for no count."}</span>
                      </fieldset>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="hks-p15-dcl4-ph">
                          {"Photo "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-dcl4-ph" name="photo" required={true} defaultValue={"None"}>
                            <option value="None">{"None"}</option>
                            <option value="Optional">{"Optional"}</option>
                            <option value="Required">{"Required"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"None, optional or required at this step"}</span>
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
              <div className="modal modal--lg" id="hks-p15-dcl5" data-code="HKS-P15" role="dialog" aria-modal="true" aria-labelledby="hks-p15-dcl5-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-13-attendant-cleaning-steps/#saved-dcl5" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p15-dcl5-t">{"Step 5 of DCL"}</h2>
                      <p className="modal__desc">{"A step the attendant sees on the phone. This is separate from the supervisor’s inspection checklist."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-dcl5-tt">
                          {"Task type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-dcl5-tt" name="task_type" required={true} defaultValue={"DCL · Deep clean"}>
                            <option value="DEP · Departure clean">{"DEP · Departure clean"}</option>
                            <option value="ARR · Arrival check">{"ARR · Arrival check"}</option>
                            <option value="TCH · Touch-up">{"TCH · Touch-up"}</option>
                            <option value="STY · Stayover">{"STY · Stayover"}</option>
                            <option value="LCH · Linen change">{"LCH · Linen change"}</option>
                            <option value="DCL · Deep clean">{"DCL · Deep clean"}</option>
                            <option value="TDN · Turndown">{"TDN · Turndown"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"The step belongs to this task type"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-dcl5-tx">
                          {"Step text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p15-dcl5-tx" type="text" name="text" maxLength="150" required={true} defaultValue={"Final check"} />
                        <span className="field__hint">{"In English, up to 150 characters"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-dcl5-ml">{"Malayalam (optional)"}</label>
                        <input className="field__input" id="hks-p15-dcl5-ml" type="text" name="text_ml" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Malayalam"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-dcl5-hi">{"Hindi (optional)"}</label>
                        <input className="field__input" id="hks-p15-dcl5-hi" type="text" name="text_hi" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Hindi"}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p15-dcl5-m">
                          <input id="hks-p15-dcl5-m" type="checkbox" role="switch" name="mandatory" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Mandatory tick"}
                        </label>
                        <span className="field__hint">{"The attendant cannot finish the task without ticking this step"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">{"Asks for count of"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath towel" />
                            <span className="check__box" />
                            {"Bath towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Hand towel" />
                            <span className="check__box" />
                            {"Hand towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath mat" />
                            <span className="check__box" />
                            {"Bath mat"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bed linen set" />
                            <span className="check__box" />
                            {"Bed linen set"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Pillow case" />
                            <span className="check__box" />
                            {"Pillow case"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Shampoo" />
                            <span className="check__box" />
                            {"Shampoo"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Conditioner" />
                            <span className="check__box" />
                            {"Conditioner"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Body wash" />
                            <span className="check__box" />
                            {"Body wash"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Soap" />
                            <span className="check__box" />
                            {"Soap"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Dental kit" />
                            <span className="check__box" />
                            {"Dental kit"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Water bottle" />
                            <span className="check__box" />
                            {"Water bottle"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Tea / coffee sachets" />
                            <span className="check__box" />
                            {"Tea / coffee sachets"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bathrobe" />
                            <span className="check__box" />
                            {"Bathrobe"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Slippers" />
                            <span className="check__box" />
                            {"Slippers"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Chocolate" />
                            <span className="check__box" />
                            {"Chocolate"}
                          </label>
                        </div>
                        <span className="field__hint">{"The phone asks for the quantity of the items you tick (linen and amenity items from LNS). Leave empty for no count."}</span>
                      </fieldset>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="hks-p15-dcl5-ph">
                          {"Photo "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-dcl5-ph" name="photo" required={true} defaultValue={"Required"}>
                            <option value="None">{"None"}</option>
                            <option value="Optional">{"Optional"}</option>
                            <option value="Required">{"Required"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"None, optional or required at this step"}</span>
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
              <div className="modal modal--lg" id="hks-p15-tdn1" data-code="HKS-P15" role="dialog" aria-modal="true" aria-labelledby="hks-p15-tdn1-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-13-attendant-cleaning-steps/#saved-tdn1" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p15-tdn1-t">{"Step 1 of TDN"}</h2>
                      <p className="modal__desc">{"A step the attendant sees on the phone. This is separate from the supervisor’s inspection checklist."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-tdn1-tt">
                          {"Task type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-tdn1-tt" name="task_type" required={true} defaultValue={"TDN · Turndown"}>
                            <option value="DEP · Departure clean">{"DEP · Departure clean"}</option>
                            <option value="ARR · Arrival check">{"ARR · Arrival check"}</option>
                            <option value="TCH · Touch-up">{"TCH · Touch-up"}</option>
                            <option value="STY · Stayover">{"STY · Stayover"}</option>
                            <option value="LCH · Linen change">{"LCH · Linen change"}</option>
                            <option value="DCL · Deep clean">{"DCL · Deep clean"}</option>
                            <option value="TDN · Turndown">{"TDN · Turndown"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"The step belongs to this task type"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-tdn1-tx">
                          {"Step text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p15-tdn1-tx" type="text" name="text" maxLength="150" required={true} defaultValue={"Knock and announce"} />
                        <span className="field__hint">{"In English, up to 150 characters"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-tdn1-ml">{"Malayalam (optional)"}</label>
                        <input className="field__input" id="hks-p15-tdn1-ml" type="text" name="text_ml" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Malayalam"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-tdn1-hi">{"Hindi (optional)"}</label>
                        <input className="field__input" id="hks-p15-tdn1-hi" type="text" name="text_hi" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Hindi"}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p15-tdn1-m">
                          <input id="hks-p15-tdn1-m" type="checkbox" role="switch" name="mandatory" />
                          <span className="sw__track" />
                          {"Mandatory tick"}
                        </label>
                        <span className="field__hint">{"The attendant cannot finish the task without ticking this step"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">{"Asks for count of"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath towel" />
                            <span className="check__box" />
                            {"Bath towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Hand towel" />
                            <span className="check__box" />
                            {"Hand towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath mat" />
                            <span className="check__box" />
                            {"Bath mat"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bed linen set" />
                            <span className="check__box" />
                            {"Bed linen set"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Pillow case" />
                            <span className="check__box" />
                            {"Pillow case"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Shampoo" />
                            <span className="check__box" />
                            {"Shampoo"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Conditioner" />
                            <span className="check__box" />
                            {"Conditioner"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Body wash" />
                            <span className="check__box" />
                            {"Body wash"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Soap" />
                            <span className="check__box" />
                            {"Soap"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Dental kit" />
                            <span className="check__box" />
                            {"Dental kit"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Water bottle" />
                            <span className="check__box" />
                            {"Water bottle"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Tea / coffee sachets" />
                            <span className="check__box" />
                            {"Tea / coffee sachets"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bathrobe" />
                            <span className="check__box" />
                            {"Bathrobe"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Slippers" />
                            <span className="check__box" />
                            {"Slippers"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Chocolate" />
                            <span className="check__box" />
                            {"Chocolate"}
                          </label>
                        </div>
                        <span className="field__hint">{"The phone asks for the quantity of the items you tick (linen and amenity items from LNS). Leave empty for no count."}</span>
                      </fieldset>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="hks-p15-tdn1-ph">
                          {"Photo "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-tdn1-ph" name="photo" required={true} defaultValue={"None"}>
                            <option value="None">{"None"}</option>
                            <option value="Optional">{"Optional"}</option>
                            <option value="Required">{"Required"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"None, optional or required at this step"}</span>
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
              <div className="modal modal--lg" id="hks-p15-tdn2" data-code="HKS-P15" role="dialog" aria-modal="true" aria-labelledby="hks-p15-tdn2-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-13-attendant-cleaning-steps/#saved-tdn2" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p15-tdn2-t">{"Step 2 of TDN"}</h2>
                      <p className="modal__desc">{"A step the attendant sees on the phone. This is separate from the supervisor’s inspection checklist."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-tdn2-tt">
                          {"Task type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-tdn2-tt" name="task_type" required={true} defaultValue={"TDN · Turndown"}>
                            <option value="DEP · Departure clean">{"DEP · Departure clean"}</option>
                            <option value="ARR · Arrival check">{"ARR · Arrival check"}</option>
                            <option value="TCH · Touch-up">{"TCH · Touch-up"}</option>
                            <option value="STY · Stayover">{"STY · Stayover"}</option>
                            <option value="LCH · Linen change">{"LCH · Linen change"}</option>
                            <option value="DCL · Deep clean">{"DCL · Deep clean"}</option>
                            <option value="TDN · Turndown">{"TDN · Turndown"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"The step belongs to this task type"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-tdn2-tx">
                          {"Step text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p15-tdn2-tx" type="text" name="text" maxLength="150" required={true} defaultValue={"Turn down the bed and place the amenity"} />
                        <span className="field__hint">{"In English, up to 150 characters"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-tdn2-ml">{"Malayalam (optional)"}</label>
                        <input className="field__input" id="hks-p15-tdn2-ml" type="text" name="text_ml" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Malayalam"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-tdn2-hi">{"Hindi (optional)"}</label>
                        <input className="field__input" id="hks-p15-tdn2-hi" type="text" name="text_hi" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Hindi"}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p15-tdn2-m">
                          <input id="hks-p15-tdn2-m" type="checkbox" role="switch" name="mandatory" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Mandatory tick"}
                        </label>
                        <span className="field__hint">{"The attendant cannot finish the task without ticking this step"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">{"Asks for count of"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath towel" />
                            <span className="check__box" />
                            {"Bath towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Hand towel" />
                            <span className="check__box" />
                            {"Hand towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath mat" />
                            <span className="check__box" />
                            {"Bath mat"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bed linen set" />
                            <span className="check__box" />
                            {"Bed linen set"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Pillow case" />
                            <span className="check__box" />
                            {"Pillow case"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Shampoo" />
                            <span className="check__box" />
                            {"Shampoo"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Conditioner" />
                            <span className="check__box" />
                            {"Conditioner"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Body wash" />
                            <span className="check__box" />
                            {"Body wash"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Soap" />
                            <span className="check__box" />
                            {"Soap"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Dental kit" />
                            <span className="check__box" />
                            {"Dental kit"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Water bottle" />
                            <span className="check__box" />
                            {"Water bottle"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Tea / coffee sachets" />
                            <span className="check__box" />
                            {"Tea / coffee sachets"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bathrobe" />
                            <span className="check__box" />
                            {"Bathrobe"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Slippers" />
                            <span className="check__box" />
                            {"Slippers"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Chocolate" defaultChecked={true} />
                            <span className="check__box" />
                            {"Chocolate"}
                          </label>
                        </div>
                        <span className="field__hint">{"The phone asks for the quantity of the items you tick (linen and amenity items from LNS). Leave empty for no count."}</span>
                      </fieldset>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="hks-p15-tdn2-ph">
                          {"Photo "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-tdn2-ph" name="photo" required={true} defaultValue={"None"}>
                            <option value="None">{"None"}</option>
                            <option value="Optional">{"Optional"}</option>
                            <option value="Required">{"Required"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"None, optional or required at this step"}</span>
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
              <div className="modal modal--lg" id="hks-p15-tdn3" data-code="HKS-P15" role="dialog" aria-modal="true" aria-labelledby="hks-p15-tdn3-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-13-attendant-cleaning-steps/#saved-tdn3" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p15-tdn3-t">{"Step 3 of TDN"}</h2>
                      <p className="modal__desc">{"A step the attendant sees on the phone. This is separate from the supervisor’s inspection checklist."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-tdn3-tt">
                          {"Task type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-tdn3-tt" name="task_type" required={true} defaultValue={"TDN · Turndown"}>
                            <option value="DEP · Departure clean">{"DEP · Departure clean"}</option>
                            <option value="ARR · Arrival check">{"ARR · Arrival check"}</option>
                            <option value="TCH · Touch-up">{"TCH · Touch-up"}</option>
                            <option value="STY · Stayover">{"STY · Stayover"}</option>
                            <option value="LCH · Linen change">{"LCH · Linen change"}</option>
                            <option value="DCL · Deep clean">{"DCL · Deep clean"}</option>
                            <option value="TDN · Turndown">{"TDN · Turndown"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"The step belongs to this task type"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-tdn3-tx">
                          {"Step text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p15-tdn3-tx" type="text" name="text" maxLength="150" required={true} defaultValue={"Empty the trash and tidy the bathroom"} />
                        <span className="field__hint">{"In English, up to 150 characters"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-tdn3-ml">{"Malayalam (optional)"}</label>
                        <input className="field__input" id="hks-p15-tdn3-ml" type="text" name="text_ml" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Malayalam"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-tdn3-hi">{"Hindi (optional)"}</label>
                        <input className="field__input" id="hks-p15-tdn3-hi" type="text" name="text_hi" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Hindi"}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p15-tdn3-m">
                          <input id="hks-p15-tdn3-m" type="checkbox" role="switch" name="mandatory" />
                          <span className="sw__track" />
                          {"Mandatory tick"}
                        </label>
                        <span className="field__hint">{"The attendant cannot finish the task without ticking this step"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">{"Asks for count of"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath towel" />
                            <span className="check__box" />
                            {"Bath towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Hand towel" />
                            <span className="check__box" />
                            {"Hand towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath mat" />
                            <span className="check__box" />
                            {"Bath mat"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bed linen set" />
                            <span className="check__box" />
                            {"Bed linen set"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Pillow case" />
                            <span className="check__box" />
                            {"Pillow case"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Shampoo" />
                            <span className="check__box" />
                            {"Shampoo"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Conditioner" />
                            <span className="check__box" />
                            {"Conditioner"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Body wash" />
                            <span className="check__box" />
                            {"Body wash"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Soap" />
                            <span className="check__box" />
                            {"Soap"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Dental kit" />
                            <span className="check__box" />
                            {"Dental kit"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Water bottle" />
                            <span className="check__box" />
                            {"Water bottle"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Tea / coffee sachets" />
                            <span className="check__box" />
                            {"Tea / coffee sachets"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bathrobe" />
                            <span className="check__box" />
                            {"Bathrobe"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Slippers" />
                            <span className="check__box" />
                            {"Slippers"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Chocolate" />
                            <span className="check__box" />
                            {"Chocolate"}
                          </label>
                        </div>
                        <span className="field__hint">{"The phone asks for the quantity of the items you tick (linen and amenity items from LNS). Leave empty for no count."}</span>
                      </fieldset>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="hks-p15-tdn3-ph">
                          {"Photo "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-tdn3-ph" name="photo" required={true} defaultValue={"None"}>
                            <option value="None">{"None"}</option>
                            <option value="Optional">{"Optional"}</option>
                            <option value="Required">{"Required"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"None, optional or required at this step"}</span>
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
              <div className="modal modal--lg" id="hks-p15-tdn4" data-code="HKS-P15" role="dialog" aria-modal="true" aria-labelledby="hks-p15-tdn4-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-13-attendant-cleaning-steps/#saved-tdn4" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p15-tdn4-t">{"Step 4 of TDN"}</h2>
                      <p className="modal__desc">{"A step the attendant sees on the phone. This is separate from the supervisor’s inspection checklist."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-tdn4-tt">
                          {"Task type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-tdn4-tt" name="task_type" required={true} defaultValue={"TDN · Turndown"}>
                            <option value="DEP · Departure clean">{"DEP · Departure clean"}</option>
                            <option value="ARR · Arrival check">{"ARR · Arrival check"}</option>
                            <option value="TCH · Touch-up">{"TCH · Touch-up"}</option>
                            <option value="STY · Stayover">{"STY · Stayover"}</option>
                            <option value="LCH · Linen change">{"LCH · Linen change"}</option>
                            <option value="DCL · Deep clean">{"DCL · Deep clean"}</option>
                            <option value="TDN · Turndown">{"TDN · Turndown"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"The step belongs to this task type"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-tdn4-tx">
                          {"Step text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p15-tdn4-tx" type="text" name="text" maxLength="150" required={true} defaultValue={"Switch on the bedside lights and close the curtains"} />
                        <span className="field__hint">{"In English, up to 150 characters"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-tdn4-ml">{"Malayalam (optional)"}</label>
                        <input className="field__input" id="hks-p15-tdn4-ml" type="text" name="text_ml" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Malayalam"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-tdn4-hi">{"Hindi (optional)"}</label>
                        <input className="field__input" id="hks-p15-tdn4-hi" type="text" name="text_hi" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Hindi"}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p15-tdn4-m">
                          <input id="hks-p15-tdn4-m" type="checkbox" role="switch" name="mandatory" />
                          <span className="sw__track" />
                          {"Mandatory tick"}
                        </label>
                        <span className="field__hint">{"The attendant cannot finish the task without ticking this step"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">{"Asks for count of"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath towel" />
                            <span className="check__box" />
                            {"Bath towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Hand towel" />
                            <span className="check__box" />
                            {"Hand towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath mat" />
                            <span className="check__box" />
                            {"Bath mat"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bed linen set" />
                            <span className="check__box" />
                            {"Bed linen set"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Pillow case" />
                            <span className="check__box" />
                            {"Pillow case"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Shampoo" />
                            <span className="check__box" />
                            {"Shampoo"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Conditioner" />
                            <span className="check__box" />
                            {"Conditioner"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Body wash" />
                            <span className="check__box" />
                            {"Body wash"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Soap" />
                            <span className="check__box" />
                            {"Soap"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Dental kit" />
                            <span className="check__box" />
                            {"Dental kit"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Water bottle" />
                            <span className="check__box" />
                            {"Water bottle"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Tea / coffee sachets" />
                            <span className="check__box" />
                            {"Tea / coffee sachets"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bathrobe" />
                            <span className="check__box" />
                            {"Bathrobe"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Slippers" />
                            <span className="check__box" />
                            {"Slippers"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Chocolate" />
                            <span className="check__box" />
                            {"Chocolate"}
                          </label>
                        </div>
                        <span className="field__hint">{"The phone asks for the quantity of the items you tick (linen and amenity items from LNS). Leave empty for no count."}</span>
                      </fieldset>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="hks-p15-tdn4-ph">
                          {"Photo "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-tdn4-ph" name="photo" required={true} defaultValue={"None"}>
                            <option value="None">{"None"}</option>
                            <option value="Optional">{"Optional"}</option>
                            <option value="Required">{"Required"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"None, optional or required at this step"}</span>
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
              <div className="modal modal--lg" id="hks-p15-dep-new" data-code="HKS-P15" role="dialog" aria-modal="true" aria-labelledby="hks-p15-dep-new-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-13-attendant-cleaning-steps/#added" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p15-dep-new-t">{"Add cleaning step"}</h2>
                      <p className="modal__desc">{"A step the attendant sees on the phone. This is separate from the supervisor’s inspection checklist."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-dep-new-tt">
                          {"Task type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-dep-new-tt" name="task_type" required={true} defaultValue={"DEP · Departure clean"}>
                            <option value="DEP · Departure clean">{"DEP · Departure clean"}</option>
                            <option value="ARR · Arrival check">{"ARR · Arrival check"}</option>
                            <option value="TCH · Touch-up">{"TCH · Touch-up"}</option>
                            <option value="STY · Stayover">{"STY · Stayover"}</option>
                            <option value="LCH · Linen change">{"LCH · Linen change"}</option>
                            <option value="DCL · Deep clean">{"DCL · Deep clean"}</option>
                            <option value="TDN · Turndown">{"TDN · Turndown"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"The step belongs to this task type"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-dep-new-tx">
                          {"Step text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p15-dep-new-tx" type="text" name="text" maxLength="150" required={true} defaultValue={""} />
                        <span className="field__hint">{"In English, up to 150 characters"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-dep-new-ml">{"Malayalam (optional)"}</label>
                        <input className="field__input" id="hks-p15-dep-new-ml" type="text" name="text_ml" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Malayalam"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-dep-new-hi">{"Hindi (optional)"}</label>
                        <input className="field__input" id="hks-p15-dep-new-hi" type="text" name="text_hi" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Hindi"}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p15-dep-new-m">
                          <input id="hks-p15-dep-new-m" type="checkbox" role="switch" name="mandatory" />
                          <span className="sw__track" />
                          {"Mandatory tick"}
                        </label>
                        <span className="field__hint">{"The attendant cannot finish the task without ticking this step"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">{"Asks for count of"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath towel" />
                            <span className="check__box" />
                            {"Bath towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Hand towel" />
                            <span className="check__box" />
                            {"Hand towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath mat" />
                            <span className="check__box" />
                            {"Bath mat"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bed linen set" />
                            <span className="check__box" />
                            {"Bed linen set"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Pillow case" />
                            <span className="check__box" />
                            {"Pillow case"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Shampoo" />
                            <span className="check__box" />
                            {"Shampoo"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Conditioner" />
                            <span className="check__box" />
                            {"Conditioner"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Body wash" />
                            <span className="check__box" />
                            {"Body wash"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Soap" />
                            <span className="check__box" />
                            {"Soap"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Dental kit" />
                            <span className="check__box" />
                            {"Dental kit"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Water bottle" />
                            <span className="check__box" />
                            {"Water bottle"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Tea / coffee sachets" />
                            <span className="check__box" />
                            {"Tea / coffee sachets"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bathrobe" />
                            <span className="check__box" />
                            {"Bathrobe"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Slippers" />
                            <span className="check__box" />
                            {"Slippers"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Chocolate" />
                            <span className="check__box" />
                            {"Chocolate"}
                          </label>
                        </div>
                        <span className="field__hint">{"The phone asks for the quantity of the items you tick (linen and amenity items from LNS). Leave empty for no count."}</span>
                      </fieldset>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="hks-p15-dep-new-ph">
                          {"Photo "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-dep-new-ph" name="photo" required={true} defaultValue={"None"}>
                            <option value="None">{"None"}</option>
                            <option value="Optional">{"Optional"}</option>
                            <option value="Required">{"Required"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"None, optional or required at this step"}</span>
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
              <div className="modal modal--lg" id="hks-p15-arr-new" data-code="HKS-P15" role="dialog" aria-modal="true" aria-labelledby="hks-p15-arr-new-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-13-attendant-cleaning-steps/#added" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p15-arr-new-t">{"Add cleaning step"}</h2>
                      <p className="modal__desc">{"A step the attendant sees on the phone. This is separate from the supervisor’s inspection checklist."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-arr-new-tt">
                          {"Task type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-arr-new-tt" name="task_type" required={true} defaultValue={"ARR · Arrival check"}>
                            <option value="DEP · Departure clean">{"DEP · Departure clean"}</option>
                            <option value="ARR · Arrival check">{"ARR · Arrival check"}</option>
                            <option value="TCH · Touch-up">{"TCH · Touch-up"}</option>
                            <option value="STY · Stayover">{"STY · Stayover"}</option>
                            <option value="LCH · Linen change">{"LCH · Linen change"}</option>
                            <option value="DCL · Deep clean">{"DCL · Deep clean"}</option>
                            <option value="TDN · Turndown">{"TDN · Turndown"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"The step belongs to this task type"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-arr-new-tx">
                          {"Step text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p15-arr-new-tx" type="text" name="text" maxLength="150" required={true} defaultValue={""} />
                        <span className="field__hint">{"In English, up to 150 characters"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-arr-new-ml">{"Malayalam (optional)"}</label>
                        <input className="field__input" id="hks-p15-arr-new-ml" type="text" name="text_ml" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Malayalam"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-arr-new-hi">{"Hindi (optional)"}</label>
                        <input className="field__input" id="hks-p15-arr-new-hi" type="text" name="text_hi" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Hindi"}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p15-arr-new-m">
                          <input id="hks-p15-arr-new-m" type="checkbox" role="switch" name="mandatory" />
                          <span className="sw__track" />
                          {"Mandatory tick"}
                        </label>
                        <span className="field__hint">{"The attendant cannot finish the task without ticking this step"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">{"Asks for count of"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath towel" />
                            <span className="check__box" />
                            {"Bath towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Hand towel" />
                            <span className="check__box" />
                            {"Hand towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath mat" />
                            <span className="check__box" />
                            {"Bath mat"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bed linen set" />
                            <span className="check__box" />
                            {"Bed linen set"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Pillow case" />
                            <span className="check__box" />
                            {"Pillow case"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Shampoo" />
                            <span className="check__box" />
                            {"Shampoo"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Conditioner" />
                            <span className="check__box" />
                            {"Conditioner"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Body wash" />
                            <span className="check__box" />
                            {"Body wash"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Soap" />
                            <span className="check__box" />
                            {"Soap"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Dental kit" />
                            <span className="check__box" />
                            {"Dental kit"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Water bottle" />
                            <span className="check__box" />
                            {"Water bottle"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Tea / coffee sachets" />
                            <span className="check__box" />
                            {"Tea / coffee sachets"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bathrobe" />
                            <span className="check__box" />
                            {"Bathrobe"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Slippers" />
                            <span className="check__box" />
                            {"Slippers"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Chocolate" />
                            <span className="check__box" />
                            {"Chocolate"}
                          </label>
                        </div>
                        <span className="field__hint">{"The phone asks for the quantity of the items you tick (linen and amenity items from LNS). Leave empty for no count."}</span>
                      </fieldset>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="hks-p15-arr-new-ph">
                          {"Photo "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-arr-new-ph" name="photo" required={true} defaultValue={"None"}>
                            <option value="None">{"None"}</option>
                            <option value="Optional">{"Optional"}</option>
                            <option value="Required">{"Required"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"None, optional or required at this step"}</span>
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
              <div className="modal modal--lg" id="hks-p15-tch-new" data-code="HKS-P15" role="dialog" aria-modal="true" aria-labelledby="hks-p15-tch-new-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-13-attendant-cleaning-steps/#added" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p15-tch-new-t">{"Add cleaning step"}</h2>
                      <p className="modal__desc">{"A step the attendant sees on the phone. This is separate from the supervisor’s inspection checklist."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-tch-new-tt">
                          {"Task type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-tch-new-tt" name="task_type" required={true} defaultValue={"TCH · Touch-up"}>
                            <option value="DEP · Departure clean">{"DEP · Departure clean"}</option>
                            <option value="ARR · Arrival check">{"ARR · Arrival check"}</option>
                            <option value="TCH · Touch-up">{"TCH · Touch-up"}</option>
                            <option value="STY · Stayover">{"STY · Stayover"}</option>
                            <option value="LCH · Linen change">{"LCH · Linen change"}</option>
                            <option value="DCL · Deep clean">{"DCL · Deep clean"}</option>
                            <option value="TDN · Turndown">{"TDN · Turndown"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"The step belongs to this task type"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-tch-new-tx">
                          {"Step text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p15-tch-new-tx" type="text" name="text" maxLength="150" required={true} defaultValue={""} />
                        <span className="field__hint">{"In English, up to 150 characters"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-tch-new-ml">{"Malayalam (optional)"}</label>
                        <input className="field__input" id="hks-p15-tch-new-ml" type="text" name="text_ml" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Malayalam"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-tch-new-hi">{"Hindi (optional)"}</label>
                        <input className="field__input" id="hks-p15-tch-new-hi" type="text" name="text_hi" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Hindi"}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p15-tch-new-m">
                          <input id="hks-p15-tch-new-m" type="checkbox" role="switch" name="mandatory" />
                          <span className="sw__track" />
                          {"Mandatory tick"}
                        </label>
                        <span className="field__hint">{"The attendant cannot finish the task without ticking this step"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">{"Asks for count of"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath towel" />
                            <span className="check__box" />
                            {"Bath towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Hand towel" />
                            <span className="check__box" />
                            {"Hand towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath mat" />
                            <span className="check__box" />
                            {"Bath mat"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bed linen set" />
                            <span className="check__box" />
                            {"Bed linen set"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Pillow case" />
                            <span className="check__box" />
                            {"Pillow case"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Shampoo" />
                            <span className="check__box" />
                            {"Shampoo"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Conditioner" />
                            <span className="check__box" />
                            {"Conditioner"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Body wash" />
                            <span className="check__box" />
                            {"Body wash"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Soap" />
                            <span className="check__box" />
                            {"Soap"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Dental kit" />
                            <span className="check__box" />
                            {"Dental kit"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Water bottle" />
                            <span className="check__box" />
                            {"Water bottle"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Tea / coffee sachets" />
                            <span className="check__box" />
                            {"Tea / coffee sachets"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bathrobe" />
                            <span className="check__box" />
                            {"Bathrobe"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Slippers" />
                            <span className="check__box" />
                            {"Slippers"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Chocolate" />
                            <span className="check__box" />
                            {"Chocolate"}
                          </label>
                        </div>
                        <span className="field__hint">{"The phone asks for the quantity of the items you tick (linen and amenity items from LNS). Leave empty for no count."}</span>
                      </fieldset>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="hks-p15-tch-new-ph">
                          {"Photo "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-tch-new-ph" name="photo" required={true} defaultValue={"None"}>
                            <option value="None">{"None"}</option>
                            <option value="Optional">{"Optional"}</option>
                            <option value="Required">{"Required"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"None, optional or required at this step"}</span>
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
              <div className="modal modal--lg" id="hks-p15-sty-new" data-code="HKS-P15" role="dialog" aria-modal="true" aria-labelledby="hks-p15-sty-new-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-13-attendant-cleaning-steps/#added" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p15-sty-new-t">{"Add cleaning step"}</h2>
                      <p className="modal__desc">{"A step the attendant sees on the phone. This is separate from the supervisor’s inspection checklist."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-sty-new-tt">
                          {"Task type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-sty-new-tt" name="task_type" required={true} defaultValue={"STY · Stayover"}>
                            <option value="DEP · Departure clean">{"DEP · Departure clean"}</option>
                            <option value="ARR · Arrival check">{"ARR · Arrival check"}</option>
                            <option value="TCH · Touch-up">{"TCH · Touch-up"}</option>
                            <option value="STY · Stayover">{"STY · Stayover"}</option>
                            <option value="LCH · Linen change">{"LCH · Linen change"}</option>
                            <option value="DCL · Deep clean">{"DCL · Deep clean"}</option>
                            <option value="TDN · Turndown">{"TDN · Turndown"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"The step belongs to this task type"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-sty-new-tx">
                          {"Step text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p15-sty-new-tx" type="text" name="text" maxLength="150" required={true} defaultValue={""} />
                        <span className="field__hint">{"In English, up to 150 characters"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-sty-new-ml">{"Malayalam (optional)"}</label>
                        <input className="field__input" id="hks-p15-sty-new-ml" type="text" name="text_ml" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Malayalam"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-sty-new-hi">{"Hindi (optional)"}</label>
                        <input className="field__input" id="hks-p15-sty-new-hi" type="text" name="text_hi" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Hindi"}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p15-sty-new-m">
                          <input id="hks-p15-sty-new-m" type="checkbox" role="switch" name="mandatory" />
                          <span className="sw__track" />
                          {"Mandatory tick"}
                        </label>
                        <span className="field__hint">{"The attendant cannot finish the task without ticking this step"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">{"Asks for count of"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath towel" />
                            <span className="check__box" />
                            {"Bath towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Hand towel" />
                            <span className="check__box" />
                            {"Hand towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath mat" />
                            <span className="check__box" />
                            {"Bath mat"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bed linen set" />
                            <span className="check__box" />
                            {"Bed linen set"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Pillow case" />
                            <span className="check__box" />
                            {"Pillow case"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Shampoo" />
                            <span className="check__box" />
                            {"Shampoo"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Conditioner" />
                            <span className="check__box" />
                            {"Conditioner"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Body wash" />
                            <span className="check__box" />
                            {"Body wash"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Soap" />
                            <span className="check__box" />
                            {"Soap"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Dental kit" />
                            <span className="check__box" />
                            {"Dental kit"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Water bottle" />
                            <span className="check__box" />
                            {"Water bottle"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Tea / coffee sachets" />
                            <span className="check__box" />
                            {"Tea / coffee sachets"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bathrobe" />
                            <span className="check__box" />
                            {"Bathrobe"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Slippers" />
                            <span className="check__box" />
                            {"Slippers"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Chocolate" />
                            <span className="check__box" />
                            {"Chocolate"}
                          </label>
                        </div>
                        <span className="field__hint">{"The phone asks for the quantity of the items you tick (linen and amenity items from LNS). Leave empty for no count."}</span>
                      </fieldset>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="hks-p15-sty-new-ph">
                          {"Photo "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-sty-new-ph" name="photo" required={true} defaultValue={"None"}>
                            <option value="None">{"None"}</option>
                            <option value="Optional">{"Optional"}</option>
                            <option value="Required">{"Required"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"None, optional or required at this step"}</span>
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
              <div className="modal modal--lg" id="hks-p15-lch-new" data-code="HKS-P15" role="dialog" aria-modal="true" aria-labelledby="hks-p15-lch-new-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-13-attendant-cleaning-steps/#added" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p15-lch-new-t">{"Add cleaning step"}</h2>
                      <p className="modal__desc">{"A step the attendant sees on the phone. This is separate from the supervisor’s inspection checklist."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-lch-new-tt">
                          {"Task type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-lch-new-tt" name="task_type" required={true} defaultValue={"LCH · Linen change"}>
                            <option value="DEP · Departure clean">{"DEP · Departure clean"}</option>
                            <option value="ARR · Arrival check">{"ARR · Arrival check"}</option>
                            <option value="TCH · Touch-up">{"TCH · Touch-up"}</option>
                            <option value="STY · Stayover">{"STY · Stayover"}</option>
                            <option value="LCH · Linen change">{"LCH · Linen change"}</option>
                            <option value="DCL · Deep clean">{"DCL · Deep clean"}</option>
                            <option value="TDN · Turndown">{"TDN · Turndown"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"The step belongs to this task type"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-lch-new-tx">
                          {"Step text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p15-lch-new-tx" type="text" name="text" maxLength="150" required={true} defaultValue={""} />
                        <span className="field__hint">{"In English, up to 150 characters"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-lch-new-ml">{"Malayalam (optional)"}</label>
                        <input className="field__input" id="hks-p15-lch-new-ml" type="text" name="text_ml" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Malayalam"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-lch-new-hi">{"Hindi (optional)"}</label>
                        <input className="field__input" id="hks-p15-lch-new-hi" type="text" name="text_hi" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Hindi"}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p15-lch-new-m">
                          <input id="hks-p15-lch-new-m" type="checkbox" role="switch" name="mandatory" />
                          <span className="sw__track" />
                          {"Mandatory tick"}
                        </label>
                        <span className="field__hint">{"The attendant cannot finish the task without ticking this step"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">{"Asks for count of"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath towel" />
                            <span className="check__box" />
                            {"Bath towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Hand towel" />
                            <span className="check__box" />
                            {"Hand towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath mat" />
                            <span className="check__box" />
                            {"Bath mat"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bed linen set" />
                            <span className="check__box" />
                            {"Bed linen set"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Pillow case" />
                            <span className="check__box" />
                            {"Pillow case"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Shampoo" />
                            <span className="check__box" />
                            {"Shampoo"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Conditioner" />
                            <span className="check__box" />
                            {"Conditioner"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Body wash" />
                            <span className="check__box" />
                            {"Body wash"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Soap" />
                            <span className="check__box" />
                            {"Soap"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Dental kit" />
                            <span className="check__box" />
                            {"Dental kit"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Water bottle" />
                            <span className="check__box" />
                            {"Water bottle"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Tea / coffee sachets" />
                            <span className="check__box" />
                            {"Tea / coffee sachets"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bathrobe" />
                            <span className="check__box" />
                            {"Bathrobe"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Slippers" />
                            <span className="check__box" />
                            {"Slippers"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Chocolate" />
                            <span className="check__box" />
                            {"Chocolate"}
                          </label>
                        </div>
                        <span className="field__hint">{"The phone asks for the quantity of the items you tick (linen and amenity items from LNS). Leave empty for no count."}</span>
                      </fieldset>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="hks-p15-lch-new-ph">
                          {"Photo "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-lch-new-ph" name="photo" required={true} defaultValue={"None"}>
                            <option value="None">{"None"}</option>
                            <option value="Optional">{"Optional"}</option>
                            <option value="Required">{"Required"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"None, optional or required at this step"}</span>
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
              <div className="modal modal--lg" id="hks-p15-dcl-new" data-code="HKS-P15" role="dialog" aria-modal="true" aria-labelledby="hks-p15-dcl-new-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-13-attendant-cleaning-steps/#added" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p15-dcl-new-t">{"Add cleaning step"}</h2>
                      <p className="modal__desc">{"A step the attendant sees on the phone. This is separate from the supervisor’s inspection checklist."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-dcl-new-tt">
                          {"Task type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-dcl-new-tt" name="task_type" required={true} defaultValue={"DCL · Deep clean"}>
                            <option value="DEP · Departure clean">{"DEP · Departure clean"}</option>
                            <option value="ARR · Arrival check">{"ARR · Arrival check"}</option>
                            <option value="TCH · Touch-up">{"TCH · Touch-up"}</option>
                            <option value="STY · Stayover">{"STY · Stayover"}</option>
                            <option value="LCH · Linen change">{"LCH · Linen change"}</option>
                            <option value="DCL · Deep clean">{"DCL · Deep clean"}</option>
                            <option value="TDN · Turndown">{"TDN · Turndown"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"The step belongs to this task type"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-dcl-new-tx">
                          {"Step text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p15-dcl-new-tx" type="text" name="text" maxLength="150" required={true} defaultValue={""} />
                        <span className="field__hint">{"In English, up to 150 characters"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-dcl-new-ml">{"Malayalam (optional)"}</label>
                        <input className="field__input" id="hks-p15-dcl-new-ml" type="text" name="text_ml" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Malayalam"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-dcl-new-hi">{"Hindi (optional)"}</label>
                        <input className="field__input" id="hks-p15-dcl-new-hi" type="text" name="text_hi" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Hindi"}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p15-dcl-new-m">
                          <input id="hks-p15-dcl-new-m" type="checkbox" role="switch" name="mandatory" />
                          <span className="sw__track" />
                          {"Mandatory tick"}
                        </label>
                        <span className="field__hint">{"The attendant cannot finish the task without ticking this step"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">{"Asks for count of"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath towel" />
                            <span className="check__box" />
                            {"Bath towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Hand towel" />
                            <span className="check__box" />
                            {"Hand towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath mat" />
                            <span className="check__box" />
                            {"Bath mat"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bed linen set" />
                            <span className="check__box" />
                            {"Bed linen set"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Pillow case" />
                            <span className="check__box" />
                            {"Pillow case"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Shampoo" />
                            <span className="check__box" />
                            {"Shampoo"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Conditioner" />
                            <span className="check__box" />
                            {"Conditioner"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Body wash" />
                            <span className="check__box" />
                            {"Body wash"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Soap" />
                            <span className="check__box" />
                            {"Soap"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Dental kit" />
                            <span className="check__box" />
                            {"Dental kit"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Water bottle" />
                            <span className="check__box" />
                            {"Water bottle"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Tea / coffee sachets" />
                            <span className="check__box" />
                            {"Tea / coffee sachets"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bathrobe" />
                            <span className="check__box" />
                            {"Bathrobe"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Slippers" />
                            <span className="check__box" />
                            {"Slippers"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Chocolate" />
                            <span className="check__box" />
                            {"Chocolate"}
                          </label>
                        </div>
                        <span className="field__hint">{"The phone asks for the quantity of the items you tick (linen and amenity items from LNS). Leave empty for no count."}</span>
                      </fieldset>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="hks-p15-dcl-new-ph">
                          {"Photo "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-dcl-new-ph" name="photo" required={true} defaultValue={"None"}>
                            <option value="None">{"None"}</option>
                            <option value="Optional">{"Optional"}</option>
                            <option value="Required">{"Required"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"None, optional or required at this step"}</span>
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
              <div className="modal modal--lg" id="hks-p15-tdn-new" data-code="HKS-P15" role="dialog" aria-modal="true" aria-labelledby="hks-p15-tdn-new-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-13-attendant-cleaning-steps/#added" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-p15-tdn-new-t">{"Add cleaning step"}</h2>
                      <p className="modal__desc">{"A step the attendant sees on the phone. This is separate from the supervisor’s inspection checklist."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-tdn-new-tt">
                          {"Task type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-tdn-new-tt" name="task_type" required={true} defaultValue={"TDN · Turndown"}>
                            <option value="DEP · Departure clean">{"DEP · Departure clean"}</option>
                            <option value="ARR · Arrival check">{"ARR · Arrival check"}</option>
                            <option value="TCH · Touch-up">{"TCH · Touch-up"}</option>
                            <option value="STY · Stayover">{"STY · Stayover"}</option>
                            <option value="LCH · Linen change">{"LCH · Linen change"}</option>
                            <option value="DCL · Deep clean">{"DCL · Deep clean"}</option>
                            <option value="TDN · Turndown">{"TDN · Turndown"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"The step belongs to this task type"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hks-p15-tdn-new-tx">
                          {"Step text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="hks-p15-tdn-new-tx" type="text" name="text" maxLength="150" required={true} defaultValue={""} />
                        <span className="field__hint">{"In English, up to 150 characters"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-tdn-new-ml">{"Malayalam (optional)"}</label>
                        <input className="field__input" id="hks-p15-tdn-new-ml" type="text" name="text_ml" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Malayalam"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p15-tdn-new-hi">{"Hindi (optional)"}</label>
                        <input className="field__input" id="hks-p15-tdn-new-hi" type="text" name="text_hi" maxLength="150" defaultValue={""} />
                        <span className="field__hint">{"Shown to attendants whose phone is set to Hindi"}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p15-tdn-new-m">
                          <input id="hks-p15-tdn-new-m" type="checkbox" role="switch" name="mandatory" />
                          <span className="sw__track" />
                          {"Mandatory tick"}
                        </label>
                        <span className="field__hint">{"The attendant cannot finish the task without ticking this step"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">{"Asks for count of"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath towel" />
                            <span className="check__box" />
                            {"Bath towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Hand towel" />
                            <span className="check__box" />
                            {"Hand towel"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bath mat" />
                            <span className="check__box" />
                            {"Bath mat"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bed linen set" />
                            <span className="check__box" />
                            {"Bed linen set"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Pillow case" />
                            <span className="check__box" />
                            {"Pillow case"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Shampoo" />
                            <span className="check__box" />
                            {"Shampoo"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Conditioner" />
                            <span className="check__box" />
                            {"Conditioner"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Body wash" />
                            <span className="check__box" />
                            {"Body wash"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Soap" />
                            <span className="check__box" />
                            {"Soap"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Dental kit" />
                            <span className="check__box" />
                            {"Dental kit"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Water bottle" />
                            <span className="check__box" />
                            {"Water bottle"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Tea / coffee sachets" />
                            <span className="check__box" />
                            {"Tea / coffee sachets"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Bathrobe" />
                            <span className="check__box" />
                            {"Bathrobe"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Slippers" />
                            <span className="check__box" />
                            {"Slippers"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="counts" value="Chocolate" />
                            <span className="check__box" />
                            {"Chocolate"}
                          </label>
                        </div>
                        <span className="field__hint">{"The phone asks for the quantity of the items you tick (linen and amenity items from LNS). Leave empty for no count."}</span>
                      </fieldset>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="hks-p15-tdn-new-ph">
                          {"Photo "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p15-tdn-new-ph" name="photo" required={true} defaultValue={"None"}>
                            <option value="None">{"None"}</option>
                            <option value="Optional">{"Optional"}</option>
                            <option value="Required">{"Required"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"None, optional or required at this step"}</span>
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
              <div className="modal modal--sm" id="hks-reorder" data-code="HKS-13-reorder" role="dialog" aria-modal="true" aria-labelledby="hks-reorder-t">
                <a className="modal__backdrop" href="#main" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping-setup/hks-13-attendant-cleaning-steps/#moved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-reorder-t">{"Re-order steps"}</h2>
                      <p className="modal__desc">{"Move a step to another position. (On a computer with scripts you would drag it; this pop-up does the same.)"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="field">
                      <label className="field__label" htmlFor="hks-ro-step">
                        {"Step to move "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <div className="field__wrap">
                        <select className="field__input field__input--select" id="hks-ro-step" name="step" required={true}>
                          <optgroup label="DEP · Departure clean">
                            <option>{"DEP 1 · Knock, announce “Housekeeping” and enter"}</option>
                            <option>{"DEP 2 · Open curtains and windows to air the room"}</option>
                            <option>{"DEP 3 · Check for guest belongings; report any found item"}</option>
                            <option>{"DEP 4 · Strip the bed and put the linen in the trolley bag"}</option>
                            <option>{"DEP 5 · Remove trash and empty the bins"}</option>
                            <option>{"DEP 6 · Clean the bathroom: toilet incl. under the rim, basin, showe"}</option>
                            <option>{"DEP 7 · Wipe mirrors and glass"}</option>
                            <option>{"DEP 8 · Dust furniture, fittings and the TV"}</option>
                            <option>{"DEP 9 · Make the bed with fresh linen"}</option>
                            <option>{"DEP 10 · Replace towels and replenish amenities"}</option>
                            <option>{"DEP 11 · Check the minibar and tea / coffee tray; report what is miss"}</option>
                            <option>{"DEP 12 · Vacuum the floor and carpet"}</option>
                            <option>{"DEP 13 · Final check from the door and switch the light on"}</option>
                            <option>{"DEP 14 · Report any damage or repair needed"}</option>
                          </optgroup>
                          <optgroup label="ARR · Arrival check">
                            <option>{"ARR 1 · Check the room against the set-up standard"}</option>
                            <option>{"ARR 2 · Test lights, TV and AC"}</option>
                            <option>{"ARR 3 · Check bathroom amenities and towels"}</option>
                            <option>{"ARR 4 · Place VIP amenities if the room has any"}</option>
                            <option>{"ARR 5 · Check the smell and set the room temperature"}</option>
                            <option>{"ARR 6 · Final check"}</option>
                          </optgroup>
                          <optgroup label="TCH · Touch-up">
                            <option>{"TCH 1 · Knock, announce and enter"}</option>
                            <option>{"TCH 2 · Straighten the bed and cushions"}</option>
                            <option>{"TCH 3 · Wipe the bathroom surfaces and empty the bin"}</option>
                            <option>{"TCH 4 · Final check"}</option>
                          </optgroup>
                          <optgroup label="STY · Stayover">
                            <option>{"STY 1 · Knock and announce; if the DND sign is on, do not enter and "}</option>
                            <option>{"STY 2 · Open the curtains"}</option>
                            <option>{"STY 3 · Remove trash and empty the bins"}</option>
                            <option>{"STY 4 · Make or tidy the bed"}</option>
                            <option>{"STY 5 · Clean the bathroom"}</option>
                            <option>{"STY 6 · Replace towels the guest left on the floor"}</option>
                            <option>{"STY 7 · Dust and vacuum"}</option>
                            <option>{"STY 8 · Replenish amenities and water"}</option>
                            <option>{"STY 9 · Final check"}</option>
                          </optgroup>
                          <optgroup label="LCH · Linen change">
                            <option>{"LCH 1 · Strip the bed linen"}</option>
                            <option>{"LCH 2 · Make the bed with fresh linen"}</option>
                            <option>{"LCH 3 · Change bath and hand towels"}</option>
                            <option>{"LCH 4 · Report the number of soiled items"}</option>
                          </optgroup>
                          <optgroup label="DCL · Deep clean">
                            <option>{"DCL 1 · Move furniture and protect the fittings"}</option>
                            <option>{"DCL 2 · Do the deep-clean job of the day (see Deep Cleaning Rotation"}</option>
                            <option>{"DCL 3 · Clean behind and under the furniture"}</option>
                            <option>{"DCL 4 · Put the furniture back"}</option>
                            <option>{"DCL 5 · Final check"}</option>
                          </optgroup>
                          <optgroup label="TDN · Turndown">
                            <option>{"TDN 1 · Knock and announce"}</option>
                            <option>{"TDN 2 · Turn down the bed and place the amenity"}</option>
                            <option>{"TDN 3 · Empty the trash and tidy the bathroom"}</option>
                            <option>{"TDN 4 · Switch on the bedside lights and close the curtains"}</option>
                          </optgroup>
                        </select>
                        <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </div>
                    </div>
                    <div className="field" data-fw="x">
                      <label className="field__label" htmlFor="hks-ro-pos">
                        {"New position "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input num" id="hks-ro-pos" type="number" name="position" required={true} min="1" max="14" defaultValue={"1"} />
                      <span className="field__hint">{"1 = first step the attendant sees"}</span>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Move step"}</button>
                  </div>
                </form>
              </div>
              <div className="fd-toast" id="t-dep1" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Step saved: DEP step 1"}
                  <small>{"Knock, announce “Housekeeping” and enter. Logged in the settings audit (HKS-X02). The phone app picks it up at the next sync."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-dep2" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Step saved: DEP step 2"}
                  <small>{"Open curtains and windows to air the room. Logged in the settings audit (HKS-X02). The phone app picks it up at the next sync."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-dep3" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Step saved: DEP step 3"}
                  <small>{"Check for guest belongings; report any found item · must be ticked. Logged in the settings audit (HKS-X02). The phone app picks it up at the next sync."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-dep4" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Step saved: DEP step 4"}
                  <small>{"Strip the bed and put the linen in the trolley bag. Logged in the settings audit (HKS-X02). The phone app picks it up at the next sync."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-dep5" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Step saved: DEP step 5"}
                  <small>{"Remove trash and empty the bins. Logged in the settings audit (HKS-X02). The phone app picks it up at the next sync."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-dep6" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Step saved: DEP step 6"}
                  <small>{"Clean the bathroom: toilet incl. under the rim, basin, shower · must be ticked. Logged in the settings audit (HKS-X02). The phone app picks it up at the next sync."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-dep7" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Step saved: DEP step 7"}
                  <small>{"Wipe mirrors and glass. Logged in the settings audit (HKS-X02). The phone app picks it up at the next sync."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-dep8" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Step saved: DEP step 8"}
                  <small>{"Dust furniture, fittings and the TV. Logged in the settings audit (HKS-X02). The phone app picks it up at the next sync."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-dep9" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Step saved: DEP step 9"}
                  <small>{"Make the bed with fresh linen · must be ticked. Logged in the settings audit (HKS-X02). The phone app picks it up at the next sync."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-dep10" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Step saved: DEP step 10"}
                  <small>{"Replace towels and replenish amenities · must be ticked. Logged in the settings audit (HKS-X02). The phone app picks it up at the next sync."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-dep11" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Step saved: DEP step 11"}
                  <small>{"Check the minibar and tea / coffee tray; report what is missing. Logged in the settings audit (HKS-X02). The phone app picks it up at the next sync."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-dep12" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Step saved: DEP step 12"}
                  <small>{"Vacuum the floor and carpet. Logged in the settings audit (HKS-X02). The phone app picks it up at the next sync."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-dep13" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Step saved: DEP step 13"}
                  <small>{"Final check from the door and switch the light on · must be ticked. Logged in the settings audit (HKS-X02). The phone app picks it up at the next sync."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-dep14" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Step saved: DEP step 14"}
                  <small>{"Report any damage or repair needed. Logged in the settings audit (HKS-X02). The phone app picks it up at the next sync."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-arr1" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Step saved: ARR step 1"}
                  <small>{"Check the room against the set-up standard · must be ticked. Logged in the settings audit (HKS-X02). The phone app picks it up at the next sync."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-arr2" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Step saved: ARR step 2"}
                  <small>{"Test lights, TV and AC · must be ticked. Logged in the settings audit (HKS-X02). The phone app picks it up at the next sync."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-arr3" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Step saved: ARR step 3"}
                  <small>{"Check bathroom amenities and towels. Logged in the settings audit (HKS-X02). The phone app picks it up at the next sync."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-arr4" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Step saved: ARR step 4"}
                  <small>{"Place VIP amenities if the room has any. Logged in the settings audit (HKS-X02). The phone app picks it up at the next sync."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-arr5" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Step saved: ARR step 5"}
                  <small>{"Check the smell and set the room temperature. Logged in the settings audit (HKS-X02). The phone app picks it up at the next sync."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-arr6" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Step saved: ARR step 6"}
                  <small>{"Final check · must be ticked. Logged in the settings audit (HKS-X02). The phone app picks it up at the next sync."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-tch1" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Step saved: TCH step 1"}
                  <small>{"Knock, announce and enter. Logged in the settings audit (HKS-X02). The phone app picks it up at the next sync."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-tch2" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Step saved: TCH step 2"}
                  <small>{"Straighten the bed and cushions. Logged in the settings audit (HKS-X02). The phone app picks it up at the next sync."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-tch3" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Step saved: TCH step 3"}
                  <small>{"Wipe the bathroom surfaces and empty the bin. Logged in the settings audit (HKS-X02). The phone app picks it up at the next sync."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-tch4" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Step saved: TCH step 4"}
                  <small>{"Final check · must be ticked. Logged in the settings audit (HKS-X02). The phone app picks it up at the next sync."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-sty1" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Step saved: STY step 1"}
                  <small>{"Knock and announce; if the DND sign is on, do not enter and report it · must be ticked. Logged in the settings audit (HKS-X02). The phone app picks it up at the next sync."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-sty2" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Step saved: STY step 2"}
                  <small>{"Open the curtains. Logged in the settings audit (HKS-X02). The phone app picks it up at the next sync."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-sty3" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Step saved: STY step 3"}
                  <small>{"Remove trash and empty the bins. Logged in the settings audit (HKS-X02). The phone app picks it up at the next sync."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-sty4" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Step saved: STY step 4"}
                  <small>{"Make or tidy the bed · must be ticked. Logged in the settings audit (HKS-X02). The phone app picks it up at the next sync."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-sty5" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Step saved: STY step 5"}
                  <small>{"Clean the bathroom · must be ticked. Logged in the settings audit (HKS-X02). The phone app picks it up at the next sync."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-sty6" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Step saved: STY step 6"}
                  <small>{"Replace towels the guest left on the floor. Logged in the settings audit (HKS-X02). The phone app picks it up at the next sync."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-sty7" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Step saved: STY step 7"}
                  <small>{"Dust and vacuum. Logged in the settings audit (HKS-X02). The phone app picks it up at the next sync."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-sty8" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Step saved: STY step 8"}
                  <small>{"Replenish amenities and water. Logged in the settings audit (HKS-X02). The phone app picks it up at the next sync."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-sty9" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Step saved: STY step 9"}
                  <small>{"Final check · must be ticked. Logged in the settings audit (HKS-X02). The phone app picks it up at the next sync."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-lch1" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Step saved: LCH step 1"}
                  <small>{"Strip the bed linen. Logged in the settings audit (HKS-X02). The phone app picks it up at the next sync."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-lch2" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Step saved: LCH step 2"}
                  <small>{"Make the bed with fresh linen · must be ticked. Logged in the settings audit (HKS-X02). The phone app picks it up at the next sync."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-lch3" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Step saved: LCH step 3"}
                  <small>{"Change bath and hand towels. Logged in the settings audit (HKS-X02). The phone app picks it up at the next sync."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-lch4" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Step saved: LCH step 4"}
                  <small>{"Report the number of soiled items. Logged in the settings audit (HKS-X02). The phone app picks it up at the next sync."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-dcl1" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Step saved: DCL step 1"}
                  <small>{"Move furniture and protect the fittings. Logged in the settings audit (HKS-X02). The phone app picks it up at the next sync."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-dcl2" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Step saved: DCL step 2"}
                  <small>{"Do the deep-clean job of the day (see Deep Cleaning Rotation) · must be ticked. Logged in the settings audit (HKS-X02). The phone app picks it up at the next sync."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-dcl3" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Step saved: DCL step 3"}
                  <small>{"Clean behind and under the furniture. Logged in the settings audit (HKS-X02). The phone app picks it up at the next sync."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-dcl4" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Step saved: DCL step 4"}
                  <small>{"Put the furniture back. Logged in the settings audit (HKS-X02). The phone app picks it up at the next sync."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-dcl5" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Step saved: DCL step 5"}
                  <small>{"Final check · must be ticked. Logged in the settings audit (HKS-X02). The phone app picks it up at the next sync."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-tdn1" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Step saved: TDN step 1"}
                  <small>{"Knock and announce. Logged in the settings audit (HKS-X02). The phone app picks it up at the next sync."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-tdn2" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Step saved: TDN step 2"}
                  <small>{"Turn down the bed and place the amenity · must be ticked. Logged in the settings audit (HKS-X02). The phone app picks it up at the next sync."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-tdn3" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Step saved: TDN step 3"}
                  <small>{"Empty the trash and tidy the bathroom. Logged in the settings audit (HKS-X02). The phone app picks it up at the next sync."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-tdn4" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Step saved: TDN step 4"}
                  <small>{"Switch on the bedside lights and close the curtains. Logged in the settings audit (HKS-X02). The phone app picks it up at the next sync."}</small>
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
                  {"Step added"}
                  <small>{"Sample: “Check the balcony door lock” added at the end of the Departure clean steps. The phone app picks it up at the next sync."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="moved" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Step moved"}
                  <small>{"Departure clean: “Check for guest belongings” moved from position 3 to position 1. The phone list updates at the next sync."}</small>
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
                  <span className="code-chip">{"HKS-13"}</span>
                </summary>
                <dl className="helpbox__body">
                  <dt>{"What it is for"}</dt>
                  <dd>{"The step-by-step list an attendant sees on the phone for each kind of task – separate from the supervisor’s inspection checklist."}</dd>
                  <dt>{"How it works"}</dt>
                  <dd>{"1. Choose a task type. 2. Press Add step, or Edit on a step. 3. Tick “Mandatory” for steps that must be done, and choose a count or photo if the phone should ask. 4. Use Re-order to change the order."}</dd>
                  <dt>{"Opened from"}</dt>
                  <dd>{"Housekeeping Setup Home (HKS-01) › Task types & credits"}</dd>
                  <dt>{"Leads to"}</dt>
                  <dd>{"HKS-P15 Cleaning Step Form"}</dd>
                  <dt>{"Sends to"}</dt>
                  <dd>{"Housekeeping phone app – Room Task (HM-04)"}</dd>
                  <dt>{"Note"}</dt>
                  <dd>{"Static screen (HTML and CSS only): it shows the layout, fields and sample data. Saving and live data come when the backend is connected."}</dd>
                </dl>
              </details>
            </main>
          </div>
        </div>
      </div>
    </ScreenShell>
  );
}
