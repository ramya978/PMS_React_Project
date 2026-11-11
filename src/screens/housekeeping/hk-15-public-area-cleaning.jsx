// GENERATED from public/housekeeping/hk-15-public-area-cleaning/index.html by scripts/convert_legacy.py.
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
    "href": "/housekeeping/hk-15-public-area-cleaning/hk-15-public-area-cleaning.css",
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

export default function HousekeepingHk15PublicAreaCleaning() {
  return (
    <ScreenShell title="Public Area Cleaning" sheets={SHEETS} inlineCss={INLINE_CSS}>
      <div data-screen="HK-15" data-code="HK-15" data-static="1" className="legacy-body">
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
              <details className="nav__sub" data-group="setup">
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
                  <Link className="nav__item" data-nav="HKS-01" title="Housekeeping Setup Home" to={"/housekeeping-setup/hks-01-housekeeping-setup-home"}>
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
              <details className="nav__sub" data-group="housekeeping" open={true}>
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
                  <Link className="nav__item is-active" data-nav="HK-15" aria-current="page" title="Public Areas" to={"/housekeeping/hk-15-public-area-cleaning"}>
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
            <main className="app__content" id="main" data-code="HK-15" tabIndex="-1">
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
                        <Link to={"/housekeeping/hk-01-housekeeping-dashboard"}>{"Housekeeping"}</Link>
                      </li>
                      <li>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-right" />
                        </svg>
                        <span aria-current="page">{"Public Area Cleaning"}</span>
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="page-header__row">
                  <div className="page-header__text">
                    <h1 className="page-header__title">{"Public Area Cleaning"}</h1>
                  </div>
                  <span className="code-chip" title="Screen code">{"HK-15"}</span>
                  <div className="page-header__filters">
                    <form className="hk7-week" action="/housekeeping/hk-15-public-area-cleaning/" method="get">
                      <label className="hf-f">
                        <span className="hf-f__l">{"Date"}</span>
                        <input className="hf-f__c" type="date" name="date" required={true} defaultValue={"2026-10-22"} />
                      </label>
                    </form>
                  </div>
                  <div className="page-header__actions">
                    <a className="btn" href="#pa-act" data-flow="opener">{"Public area task"}</a>
                    <Link className="btn ph-ic" data-leads-to="HK-O07" to={"/housekeeping/hk-o07-public-area-checklist"}>
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#printer" />
                      </svg>
                      {"Print checklists"}
                    </Link>
                    <a className="btn" href="/housekeeping/hk-09-room-inspection/#hk-p08" data-leads-to="HK-P08">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#wrench" />
                      </svg>
                      {"Raise work order"}
                    </a>
                    <a className="btn btn--primary" href="#hk-p13" data-leads-to="HK-P13">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#plus" />
                      </svg>
                      {"Add task"}
                    </a>
                  </div>
                </div>
              </header>
              <div className="paw" data-code="HK-15-board">
                <div className="hb-mks" aria-hidden="true">
                  <i className="pm" id="pa-added" />
                  <i className="pm" id="padone-PA-003" />
                  <i className="pm" id="pare-PA-003" />
                  <i className="pm" id="padone-PA-004" />
                  <i className="pm" id="pare-PA-004" />
                  <i className="pm" id="padone-PA-005" />
                  <i className="pm" id="pare-PA-005" />
                  <i className="pm" id="padone-PA-006" />
                  <i className="pm" id="pare-PA-006" />
                  <i className="pm" id="padone-PA-007" />
                  <i className="pm" id="pare-PA-007" />
                  <i className="pm" id="padone-PA-008" />
                  <i className="pm" id="pare-PA-008" />
                  <i className="pm" id="padone-PA-009" />
                  <i className="pm" id="pare-PA-009" />
                  <i className="pm" id="padone-PA-010" />
                  <i className="pm" id="pare-PA-010" />
                  <i className="pm" id="padone-PA-011" />
                  <i className="pm" id="pare-PA-011" />
                  <i className="pm" id="padone-PA-013" />
                  <i className="pm" id="pare-PA-013" />
                  <i className="pm" id="padone-PA-014" />
                  <i className="pm" id="pare-PA-014" />
                  <i className="pm" id="padone-PA-016" />
                  <i className="pm" id="pare-PA-016" />
                  <i className="pm" id="padone-PA-017" />
                  <i className="pm" id="pare-PA-017" />
                  <i className="pm" id="padone-PA-018" />
                  <i className="pm" id="pare-PA-018" />
                  <i className="pm" id="padone-PA-019" />
                  <i className="pm" id="pare-PA-019" />
                  <i className="pm" id="padone-PA-021" />
                  <i className="pm" id="pare-PA-021" />
                  <i className="pm" id="padone-PA-022" />
                  <i className="pm" id="pare-PA-022" />
                  <i className="pm" id="padone-PA-026" />
                  <i className="pm" id="pare-PA-026" />
                  <i className="pm" id="padone-PA-027" />
                  <i className="pm" id="pare-PA-027" />
                  <i className="pm" id="padone-PA-028" />
                  <i className="pm" id="pare-PA-028" />
                  <i className="pm" id="padone-PA-029" />
                  <i className="pm" id="pare-PA-029" />
                  <i className="pm" id="padone-PA-030" />
                  <i className="pm" id="pare-PA-030" />
                  <i className="pm" id="padone-PA-031" />
                  <i className="pm" id="pare-PA-031" />
                  <i className="pm" id="padone-PA-032" />
                  <i className="pm" id="pare-PA-032" />
                  <i className="pm" id="padone-PA-033" />
                  <i className="pm" id="pare-PA-033" />
                  <i className="pm" id="padone-PA-034" />
                  <i className="pm" id="pare-PA-034" />
                  <i className="pm" id="padone-PA-035" />
                  <i className="pm" id="pare-PA-035" />
                  <i className="pm" id="padone-PA-036" />
                  <i className="pm" id="pare-PA-036" />
                  <i className="pm" id="padone-PA-037" />
                  <i className="pm" id="pare-PA-037" />
                  <i className="pm" id="padone-PA-038" />
                  <i className="pm" id="pare-PA-038" />
                  <i className="pm" id="padone-PA-039" />
                  <i className="pm" id="pare-PA-039" />
                  <i className="pm" id="padone-PA-040" />
                  <i className="pm" id="pare-PA-040" />
                  <i className="pm" id="padone-PA-041" />
                  <i className="pm" id="pare-PA-041" />
                  <i className="pm" id="padone-PA-042" />
                  <i className="pm" id="pare-PA-042" />
                  <i className="pm" id="padone-PA-043" />
                  <i className="pm" id="pare-PA-043" />
                  <i className="pm" id="padone-PA-044" />
                  <i className="pm" id="pare-PA-044" />
                  <i className="pm" id="padone-PA-045" />
                  <i className="pm" id="pare-PA-045" />
                  <i className="pm" id="padone-PA-047" />
                  <i className="pm" id="pare-PA-047" />
                  <i className="pm" id="padone-PA-048" />
                  <i className="pm" id="pare-PA-048" />
                  <i className="pm" id="padone-PA-049" />
                  <i className="pm" id="pare-PA-049" />
                  <i className="pm" id="padone-PA-050" />
                  <i className="pm" id="pare-PA-050" />
                  <i className="pm" id="padone-PA-051" />
                  <i className="pm" id="pare-PA-051" />
                  <i className="pm" id="padone-PA-052" />
                  <i className="pm" id="pare-PA-052" />
                  <i className="pm" id="padone-PA-054" />
                  <i className="pm" id="pare-PA-054" />
                  <i className="pm" id="padone-PA-055" />
                  <i className="pm" id="pare-PA-055" />
                  <i className="pm" id="padone-PA-056" />
                  <i className="pm" id="pare-PA-056" />
                  <i className="pm" id="padone-PA-057" />
                  <i className="pm" id="pare-PA-057" />
                  <i className="pm" id="padone-PA-058" />
                  <i className="pm" id="pare-PA-058" />
                  <i className="pm" id="padone-PA-059" />
                  <i className="pm" id="pare-PA-059" />
                  <i className="pm" id="padone-PA-060" />
                  <i className="pm" id="pare-PA-060" />
                  <i className="pm" id="padone-PA-061" />
                  <i className="pm" id="pare-PA-061" />
                </div>
                <input className="hv__r" type="radio" name="pg" id="pg-0" aria-label="Show: All areas" defaultChecked={true} />
                <input className="hv__r" type="radio" name="pg" id="pg-1" aria-label="Show: Front of house" />
                <input className="hv__r" type="radio" name="pg" id="pg-2" aria-label="Show: F&B" />
                <input className="hv__r" type="radio" name="pg" id="pg-3" aria-label="Show: Washrooms" />
                <input className="hv__r" type="radio" name="pg" id="pg-4" aria-label="Show: Outdoor" />
                <input className="hv__r" type="radio" name="pg" id="pg-5" aria-label="Show: Back of house" />
                <section className="hkh" aria-label="Public areas today">
                  <div>
                    <span className="hkh__kick">{"Public areas · Thu 22 Oct · 61 tasks from 26 schedules (HKS-07)"}</span>
                    <p className="hkh__lead">
                      <b>{"Lobby glass doors"}</b>
                      {" are 42 minutes late and the "}
                      <b>{"entrance porch"}</b>
                      {" was missed at 07:00. The gym clean was skipped for the yoga class – it runs again at 17:00."}
                    </p>
                  </div>
                  <ul className="hkh__k">
                    <li>
                      <b>{"10"}</b>
                      {"done"}
                    </li>
                    <li>
                      <b>{"1"}</b>
                      {"late"}
                    </li>
                    <li>
                      <b>{"1"}</b>
                      {"missed"}
                    </li>
                    <li>
                      <b>{"48"}</b>
                      {"still due"}
                    </li>
                  </ul>
                </section>
                <div className="pt-bar">
                  <div className="hv" role="radiogroup" aria-label="Area group">
                    <label className="hv__v" htmlFor="pg-0">
                      <span>{"All areas"}</span>
                    </label>
                    <label className="hv__v" htmlFor="pg-1">
                      <span>{"Front of house"}</span>
                    </label>
                    <label className="hv__v" htmlFor="pg-2">
                      <span>{"F&B"}</span>
                    </label>
                    <label className="hv__v" htmlFor="pg-3">
                      <span>{"Washrooms"}</span>
                    </label>
                    <label className="hv__v" htmlFor="pg-4">
                      <span>{"Outdoor"}</span>
                    </label>
                    <label className="hv__v" htmlFor="pg-5">
                      <span>{"Back of house"}</span>
                    </label>
                  </div>
                  <div className="pt-legend">
                    <span className="pt-lg pt-lg--due">
                      <i />
                      {"Due "}
                      <b>{"48"}</b>
                    </span>
                    <span className="pt-lg pt-lg--done">
                      <i />
                      {"Done "}
                      <b>{"10"}</b>
                    </span>
                    <span className="pt-lg pt-lg--late">
                      <i />
                      {"Late "}
                      <b>{"1"}</b>
                    </span>
                    <span className="pt-lg pt-lg--missed">
                      <i />
                      {"Missed "}
                      <b>{"1"}</b>
                    </span>
                    <span className="pt-lg pt-lg--skip">
                      <i />
                      {"Skipped "}
                      <b>{"1"}</b>
                    </span>
                  </div>
                </div>
                <div className="pt-wrap">
                  <section className="pt" aria-label="Timeline board">
                    <div className="pt-head">
                      <div className="pt-area pt-area--h">{"Area"}</div>
                      <div className="pt-hours">
                        <span style={{"gridColumn": "1 / span 2"}}>{"07:00"}</span>
                        <span style={{"gridColumn": "3 / span 2"}}>{"08:00"}</span>
                        <span style={{"gridColumn": "5 / span 2"}}>{"09:00"}</span>
                        <span style={{"gridColumn": "7 / span 2"}}>{"10:00"}</span>
                        <span style={{"gridColumn": "9 / span 2"}}>{"11:00"}</span>
                        <span style={{"gridColumn": "11 / span 2"}}>{"12:00"}</span>
                        <span style={{"gridColumn": "13 / span 2"}}>{"13:00"}</span>
                        <span style={{"gridColumn": "15 / span 2"}}>{"14:00"}</span>
                        <span style={{"gridColumn": "17 / span 2"}}>{"15:00"}</span>
                        <span style={{"gridColumn": "19 / span 2"}}>{"16:00"}</span>
                        <span style={{"gridColumn": "21 / span 2"}}>{"17:00"}</span>
                        <span style={{"gridColumn": "23 / span 2"}}>{"18:00"}</span>
                        <span style={{"gridColumn": "25 / span 2"}}>{"19:00"}</span>
                        <span style={{"gridColumn": "27 / span 2"}}>{"20:00"}</span>
                        <span style={{"gridColumn": "29 / span 2"}}>{"21:00"}</span>
                        <span style={{"gridColumn": "31 / span 2"}}>{"22:00"}</span>
                        <span style={{"gridColumn": "33 / span 2"}}>{"23:00"}</span>
                      </div>
                    </div>
                    <div className="pt-body" style={{"--now": "15.88"}}>
                      <div className="pt-grp" data-grp="Front of house">
                        <span>{"Front of house"}</span>
                      </div>
                      <div className="pt-row" data-grp="Front of house">
                        <div className="pt-area">
                          <b>{"Lobby"}</b>
                          <small>{"Entrance level · photo"}</small>
                        </div>
                        <div className="pt-lane">
                          <a className="pb2 pb2--done" href="#pa-PA-001" style={{"gridColumn": "1 / span 1"}} title="07:00 · Floor mopping · Biju K · Done">
                            <b>{"07:00"}</b>
                            {" "}
                            <span>{"Floor mopping"}</span>
                          </a>
                          <a className="pb2 pb2--done" href="#pa-PA-002" style={{"gridColumn": "5 / span 1"}} title="09:00 · Floor mopping · Biju K · Done">
                            <b>{"09:00"}</b>
                            {" "}
                            <span>{"Floor mopping"}</span>
                          </a>
                          <a className="pb2 pb2--due" href="#pa-PA-003" style={{"gridColumn": "9 / span 1"}} title="11:00 · Floor mopping · Biju K · Due">
                            <b>{"11:00"}</b>
                            {" "}
                            <span>{"Floor mopping"}</span>
                          </a>
                          <a className="pb2 pb2--due" href="#pa-PA-004" style={{"gridColumn": "13 / span 1"}} title="13:00 · Floor mopping · Biju K · Due">
                            <b>{"13:00"}</b>
                            {" "}
                            <span>{"Floor mopping"}</span>
                          </a>
                          <a className="pb2 pb2--due" href="#pa-PA-005" style={{"gridColumn": "17 / span 1"}} title="15:00 · Floor mopping · Ajith M · Due">
                            <b>{"15:00"}</b>
                            {" "}
                            <span>{"Floor mopping"}</span>
                          </a>
                          <a className="pb2 pb2--due" href="#pa-PA-006" style={{"gridColumn": "21 / span 1"}} title="17:00 · Floor mopping · Ajith M · Due">
                            <b>{"17:00"}</b>
                            {" "}
                            <span>{"Floor mopping"}</span>
                          </a>
                          <a className="pb2 pb2--due" href="#pa-PA-007" style={{"gridColumn": "25 / span 1"}} title="19:00 · Floor mopping · Ajith M · Due">
                            <b>{"19:00"}</b>
                            {" "}
                            <span>{"Floor mopping"}</span>
                          </a>
                          <a className="pb2 pb2--due" href="#pa-PA-008" style={{"gridColumn": "29 / span 1"}} title="21:00 · Floor mopping · Ajith M · Due">
                            <b>{"21:00"}</b>
                            {" "}
                            <span>{"Floor mopping"}</span>
                          </a>
                          <a className="pb2 pb2--late" href="#pa-PA-009" style={{"gridColumn": "5 / span 1"}} title="09:00 · Glass doors · Biju K · Late">
                            <b>{"09:00"}</b>
                            {" "}
                            <span>{"Glass doors"}</span>
                          </a>
                          <a className="pb2 pb2--due" href="#pa-PA-010" style={{"gridColumn": "19 / span 1"}} title="16:00 · Glass doors · Biju K · Due">
                            <b>{"16:00"}</b>
                            {" "}
                            <span>{"Glass doors"}</span>
                          </a>
                          <a className="pb2 pb2--due" href="#pa-PA-011" style={{"gridColumn": "7 / span 2"}} title="10:00 · Furniture and brass polish · Biju K · Due">
                            <b>{"10:00"}</b>
                            {" "}
                            <span>{"Furniture and brass polish"}</span>
                          </a>
                          <a className="pb2 pb2--due pb2--new" href="#pa-new" style={{"gridColumn": "7 / span 1"}}>
                            <b>{"10:12"}</b>
                            {" "}
                            <span>{"Spillage near the lifts – urgent"}</span>
                          </a>
                        </div>
                      </div>
                      <div className="pt-row" data-grp="Front of house">
                        <div className="pt-area">
                          <b>{"Front desk"}</b>
                          <small>{"Entrance level"}</small>
                        </div>
                        <div className="pt-lane">
                          <a className="pb2 pb2--done" href="#pa-PA-012" style={{"gridColumn": "2 / span 1"}} title="07:30 · Counter and desk wipe · Biju K · Done">
                            <b>{"07:30"}</b>
                            {" "}
                            <span>{"Counter and desk wipe"}</span>
                          </a>
                          <a className="pb2 pb2--due" href="#pa-PA-013" style={{"gridColumn": "13 / span 1"}} title="13:00 · Counter and desk wipe · Biju K · Due">
                            <b>{"13:00"}</b>
                            {" "}
                            <span>{"Counter and desk wipe"}</span>
                          </a>
                          <a className="pb2 pb2--due" href="#pa-PA-014" style={{"gridColumn": "25 / span 1"}} title="19:00 · Counter and desk wipe · Biju K · Due">
                            <b>{"19:00"}</b>
                            {" "}
                            <span>{"Counter and desk wipe"}</span>
                          </a>
                        </div>
                      </div>
                      <div className="pt-row" data-grp="Front of house">
                        <div className="pt-area">
                          <b>{"Lifts"}</b>
                          <small>{"All floors (F1–F5) · photo"}</small>
                        </div>
                        <div className="pt-lane">
                          <a className="pb2 pb2--done" href="#pa-PA-015" style={{"gridColumn": "1 / span 1"}} title="07:00 · Lift car clean · Biju K · Done">
                            <b>{"07:00"}</b>
                            {" "}
                            <span>{"Lift car clean"}</span>
                          </a>
                          <a className="pb2 pb2--due" href="#pa-PA-016" style={{"gridColumn": "7 / span 1"}} title="10:00 · Lift car clean · Biju K · Due">
                            <b>{"10:00"}</b>
                            {" "}
                            <span>{"Lift car clean"}</span>
                          </a>
                          <a className="pb2 pb2--due" href="#pa-PA-017" style={{"gridColumn": "13 / span 1"}} title="13:00 · Lift car clean · Biju K · Due">
                            <b>{"13:00"}</b>
                            {" "}
                            <span>{"Lift car clean"}</span>
                          </a>
                          <a className="pb2 pb2--due" href="#pa-PA-018" style={{"gridColumn": "19 / span 1"}} title="16:00 · Lift car clean · Biju K · Due">
                            <b>{"16:00"}</b>
                            {" "}
                            <span>{"Lift car clean"}</span>
                          </a>
                          <a className="pb2 pb2--due" href="#pa-PA-019" style={{"gridColumn": "25 / span 1"}} title="19:00 · Lift car clean · Biju K · Due">
                            <b>{"19:00"}</b>
                            {" "}
                            <span>{"Lift car clean"}</span>
                          </a>
                        </div>
                      </div>
                      <div className="pt-row" data-grp="Front of house">
                        <div className="pt-area">
                          <b>{"Corridors"}</b>
                          <small>{"All floors (F1–F5)"}</small>
                        </div>
                        <div className="pt-lane">
                          <a className="pb2 pb2--done" href="#pa-PA-020" style={{"gridColumn": "3 / span 2"}} title="08:00 · Vacuum · Biju K · Done">
                            <b>{"08:00"}</b>
                            {" "}
                            <span>{"Vacuum"}</span>
                          </a>
                          <a className="pb2 pb2--due" href="#pa-PA-021" style={{"gridColumn": "9 / span 1"}} title="11:00 · Spot check · Biju K · Due">
                            <b>{"11:00"}</b>
                            {" "}
                            <span>{"Spot check"}</span>
                          </a>
                          <a className="pb2 pb2--due" href="#pa-PA-022" style={{"gridColumn": "21 / span 1"}} title="17:00 · Spot check · Biju K · Due">
                            <b>{"17:00"}</b>
                            {" "}
                            <span>{"Spot check"}</span>
                          </a>
                        </div>
                      </div>
                      <div className="pt-row" data-grp="Front of house">
                        <div className="pt-area">
                          <b>{"Business centre"}</b>
                          <small>{"F1 · First floor"}</small>
                        </div>
                        <div className="pt-lane">
                          <a className="pb2 pb2--due" href="#pa-PA-051" style={{"gridColumn": "7 / span 1"}} title="10:00 · Desk and floor clean · Biju K · Due">
                            <b>{"10:00"}</b>
                            {" "}
                            <span>{"Desk and floor clean"}</span>
                          </a>
                        </div>
                      </div>
                      <div className="pt-row" data-grp="Front of house">
                        <div className="pt-area">
                          <b>{"Gym"}</b>
                          <small>{"F1 · First floor"}</small>
                        </div>
                        <div className="pt-lane">
                          <a className="pb2 pb2--skip" href="#pa-PA-048" style={{"gridColumn": "5 / span 1"}} title="09:00 · Equipment wipe and floor · Satheesan · Skipped">
                            <b>{"09:00"}</b>
                            {" "}
                            <span>{"Equipment wipe and floor"}</span>
                          </a>
                          <a className="pb2 pb2--due" href="#pa-PA-049" style={{"gridColumn": "21 / span 1"}} title="17:00 · Equipment wipe and floor · Satheesan · Due">
                            <b>{"17:00"}</b>
                            {" "}
                            <span>{"Equipment wipe and floor"}</span>
                          </a>
                        </div>
                      </div>
                      <div className="pt-row" data-grp="Front of house">
                        <div className="pt-area">
                          <b>{"Spa"}</b>
                          <small>{"F2 · Second floor"}</small>
                        </div>
                        <div className="pt-lane">
                          <a className="pb2 pb2--due" href="#pa-PA-050" style={{"gridColumn": "6 / span 1"}} title="09:30 · Reception and corridor clean · Satheesan · Due">
                            <b>{"09:30"}</b>
                            {" "}
                            <span>{"Reception and corridor clean"}</span>
                          </a>
                        </div>
                      </div>
                      <div className="pt-row" data-grp="Front of house">
                        <div className="pt-area">
                          <b>{"Staircases"}</b>
                          <small>{"All floors (F1–F5)"}</small>
                        </div>
                        <div className="pt-lane">
                          <a className="pb2 pb2--due" href="#pa-PA-052" style={{"gridColumn": "8 / span 2"}} title="10:30 · Sweep and mop · Biju K · Due">
                            <b>{"10:30"}</b>
                            {" "}
                            <span>{"Sweep and mop"}</span>
                          </a>
                        </div>
                      </div>
                      <div className="pt-grp" data-grp="F&B">
                        <span>{"F&B"}</span>
                      </div>
                      <div className="pt-row" data-grp="F&B">
                        <div className="pt-area">
                          <b>{"Restaurant"}</b>
                          <small>{"Entrance level · photo"}</small>
                        </div>
                        <div className="pt-lane">
                          <a className="pb2 pb2--due" href="#pa-PA-040" style={{"gridColumn": "10 / span 1"}} title="11:30 · Clean after each meal · Satheesan · Due">
                            <b>{"11:30"}</b>
                            {" "}
                            <span>{"Clean after each meal"}</span>
                          </a>
                          <a className="pb2 pb2--due" href="#pa-PA-041" style={{"gridColumn": "18 / span 1"}} title="15:30 · Clean after each meal · Satheesan · Due">
                            <b>{"15:30"}</b>
                            {" "}
                            <span>{"Clean after each meal"}</span>
                          </a>
                          <a className="pb2 pb2--due" href="#pa-PA-042" style={{"gridColumn": "33 / span 1"}} title="23:00 · Clean after each meal · Satheesan · Due">
                            <b>{"23:00"}</b>
                            {" "}
                            <span>{"Clean after each meal"}</span>
                          </a>
                        </div>
                      </div>
                      <div className="pt-row" data-grp="F&B">
                        <div className="pt-area">
                          <b>{"Bar"}</b>
                          <small>{"Entrance level"}</small>
                        </div>
                        <div className="pt-lane">
                          <a className="pb2 pb2--due" href="#pa-PA-043" style={{"gridColumn": "34 / span 1"}} title="23:30 · Clean after service · Prasad V · Due">
                            <b>{"23:30"}</b>
                            {" "}
                            <span>{"Clean after service"}</span>
                          </a>
                        </div>
                      </div>
                      <div className="pt-row" data-grp="F&B">
                        <div className="pt-area">
                          <b>{"Banquet halls"}</b>
                          <small>{"F1 · First floor · photo"}</small>
                        </div>
                        <div className="pt-lane">
                          <a className="pb2 pb2--due" href="#pa-PA-044" style={{"gridColumn": "19 / span 3"}} title="16:00 · Clean after each event · Ajith M · Due">
                            <b>{"16:00"}</b>
                            {" "}
                            <span>{"Clean after each event"}</span>
                          </a>
                        </div>
                      </div>
                      <div className="pt-row" data-grp="F&B">
                        <div className="pt-area">
                          <b>{"Pre-function"}</b>
                          <small>{"F1 · First floor"}</small>
                        </div>
                        <div className="pt-lane">
                          <a className="pb2 pb2--due" href="#pa-PA-045" style={{"gridColumn": "20 / span 1"}} title="16:30 · Clean after each event · Ajith M · Due">
                            <b>{"16:30"}</b>
                            {" "}
                            <span>{"Clean after each event"}</span>
                          </a>
                        </div>
                      </div>
                      <div className="pt-grp" data-grp="Washrooms">
                        <span>{"Washrooms"}</span>
                      </div>
                      <div className="pt-row" data-grp="Washrooms">
                        <div className="pt-area">
                          <b>{"Public washrooms"}</b>
                          <small>{"All floors (F1–F5) · photo"}</small>
                        </div>
                        <div className="pt-lane">
                          <a className="pb2 pb2--done" href="#pa-PA-023" style={{"gridColumn": "1 / span 1"}} title="07:00 · Washroom check · Satheesan · Done">
                            <b>{"07:00"}</b>
                            {" "}
                            <span>{"Washroom check"}</span>
                          </a>
                          <a className="pb2 pb2--done" href="#pa-PA-024" style={{"gridColumn": "3 / span 1"}} title="08:00 · Washroom check · Satheesan · Done">
                            <b>{"08:00"}</b>
                            {" "}
                            <span>{"Washroom check"}</span>
                          </a>
                          <a className="pb2 pb2--done" href="#pa-PA-025" style={{"gridColumn": "5 / span 1"}} title="09:00 · Washroom check · Satheesan · Done">
                            <b>{"09:00"}</b>
                            {" "}
                            <span>{"Washroom check"}</span>
                          </a>
                          <a className="pb2 pb2--due" href="#pa-PA-026" style={{"gridColumn": "7 / span 1"}} title="10:00 · Washroom check · Satheesan · Due">
                            <b>{"10:00"}</b>
                            {" "}
                            <span>{"Washroom check"}</span>
                          </a>
                          <a className="pb2 pb2--due" href="#pa-PA-027" style={{"gridColumn": "9 / span 1"}} title="11:00 · Washroom check · Satheesan · Due">
                            <b>{"11:00"}</b>
                            {" "}
                            <span>{"Washroom check"}</span>
                          </a>
                          <a className="pb2 pb2--due" href="#pa-PA-028" style={{"gridColumn": "11 / span 1"}} title="12:00 · Washroom check · Satheesan · Due">
                            <b>{"12:00"}</b>
                            {" "}
                            <span>{"Washroom check"}</span>
                          </a>
                          <a className="pb2 pb2--due" href="#pa-PA-029" style={{"gridColumn": "13 / span 1"}} title="13:00 · Washroom check · Satheesan · Due">
                            <b>{"13:00"}</b>
                            {" "}
                            <span>{"Washroom check"}</span>
                          </a>
                          <a className="pb2 pb2--due" href="#pa-PA-030" style={{"gridColumn": "15 / span 1"}} title="14:00 · Washroom check · Satheesan · Due">
                            <b>{"14:00"}</b>
                            {" "}
                            <span>{"Washroom check"}</span>
                          </a>
                          <a className="pb2 pb2--due" href="#pa-PA-031" style={{"gridColumn": "17 / span 1"}} title="15:00 · Washroom check · Ajith M · Due">
                            <b>{"15:00"}</b>
                            {" "}
                            <span>{"Washroom check"}</span>
                          </a>
                          <a className="pb2 pb2--due" href="#pa-PA-032" style={{"gridColumn": "19 / span 1"}} title="16:00 · Washroom check · Ajith M · Due">
                            <b>{"16:00"}</b>
                            {" "}
                            <span>{"Washroom check"}</span>
                          </a>
                          <a className="pb2 pb2--due" href="#pa-PA-033" style={{"gridColumn": "21 / span 1"}} title="17:00 · Washroom check · Ajith M · Due">
                            <b>{"17:00"}</b>
                            {" "}
                            <span>{"Washroom check"}</span>
                          </a>
                          <a className="pb2 pb2--due" href="#pa-PA-034" style={{"gridColumn": "23 / span 1"}} title="18:00 · Washroom check · Ajith M · Due">
                            <b>{"18:00"}</b>
                            {" "}
                            <span>{"Washroom check"}</span>
                          </a>
                          <a className="pb2 pb2--due" href="#pa-PA-035" style={{"gridColumn": "25 / span 1"}} title="19:00 · Washroom check · Ajith M · Due">
                            <b>{"19:00"}</b>
                            {" "}
                            <span>{"Washroom check"}</span>
                          </a>
                          <a className="pb2 pb2--due" href="#pa-PA-036" style={{"gridColumn": "27 / span 1"}} title="20:00 · Washroom check · Ajith M · Due">
                            <b>{"20:00"}</b>
                            {" "}
                            <span>{"Washroom check"}</span>
                          </a>
                          <a className="pb2 pb2--due" href="#pa-PA-037" style={{"gridColumn": "29 / span 1"}} title="21:00 · Washroom check · Ajith M · Due">
                            <b>{"21:00"}</b>
                            {" "}
                            <span>{"Washroom check"}</span>
                          </a>
                          <a className="pb2 pb2--due" href="#pa-PA-038" style={{"gridColumn": "31 / span 1"}} title="22:00 · Washroom check · Ajith M · Due">
                            <b>{"22:00"}</b>
                            {" "}
                            <span>{"Washroom check"}</span>
                          </a>
                          <a className="pb2 pb2--due" href="#pa-PA-039" style={{"gridColumn": "32 / span 2"}} title="22:30 · Full wash and restock · Ajith M · Due">
                            <b>{"22:30"}</b>
                            {" "}
                            <span>{"Full wash and restock"}</span>
                          </a>
                        </div>
                      </div>
                      <div className="pt-grp" data-grp="Outdoor">
                        <span>{"Outdoor"}</span>
                      </div>
                      <div className="pt-row" data-grp="Outdoor">
                        <div className="pt-area">
                          <b>{"Pool deck"}</b>
                          <small>{"Outdoor · photo"}</small>
                        </div>
                        <div className="pt-lane">
                          <a className="pb2 pb2--done" href="#pa-PA-046" style={{"gridColumn": "4 / span 1"}} title="08:30 · Deck wash and furniture wipe · Biju K · Done">
                            <b>{"08:30"}</b>
                            {" "}
                            <span>{"Deck wash and furniture wipe"}</span>
                          </a>
                          <a className="pb2 pb2--due" href="#pa-PA-047" style={{"gridColumn": "18 / span 1"}} title="15:30 · Deck wash and furniture wipe · Biju K · Due">
                            <b>{"15:30"}</b>
                            {" "}
                            <span>{"Deck wash and furniture wipe"}</span>
                          </a>
                        </div>
                      </div>
                      <div className="pt-row" data-grp="Outdoor">
                        <div className="pt-area">
                          <b>{"Car park"}</b>
                          <small>{"Outdoor"}</small>
                        </div>
                        <div className="pt-lane">
                          <a className="pb2 pb2--done" href="#pa-PA-053" style={{"gridColumn": "2 / span 1"}} title="07:30 · Sweep and empty bins · Biju K · Done">
                            <b>{"07:30"}</b>
                            {" "}
                            <span>{"Sweep and empty bins"}</span>
                          </a>
                        </div>
                      </div>
                      <div className="pt-row" data-grp="Outdoor">
                        <div className="pt-area">
                          <b>{"Entrance and porch"}</b>
                          <small>{"Outdoor"}</small>
                        </div>
                        <div className="pt-lane">
                          <a className="pb2 pb2--missed" href="#pa-PA-054" style={{"gridColumn": "1 / span 1"}} title="07:00 · Sweep and wash porch · Biju K · Missed">
                            <b>{"07:00"}</b>
                            {" "}
                            <span>{"Sweep and wash porch"}</span>
                          </a>
                          <a className="pb2 pb2--due" href="#pa-PA-055" style={{"gridColumn": "9 / span 1"}} title="11:00 · Sweep and wash porch · Biju K · Due">
                            <b>{"11:00"}</b>
                            {" "}
                            <span>{"Sweep and wash porch"}</span>
                          </a>
                          <a className="pb2 pb2--due" href="#pa-PA-056" style={{"gridColumn": "17 / span 1"}} title="15:00 · Sweep and wash porch · Biju K · Due">
                            <b>{"15:00"}</b>
                            {" "}
                            <span>{"Sweep and wash porch"}</span>
                          </a>
                          <a className="pb2 pb2--due" href="#pa-PA-057" style={{"gridColumn": "25 / span 1"}} title="19:00 · Sweep and wash porch · Biju K · Due">
                            <b>{"19:00"}</b>
                            {" "}
                            <span>{"Sweep and wash porch"}</span>
                          </a>
                        </div>
                      </div>
                      <div className="pt-grp" data-grp="Back of house">
                        <span>{"Back of house"}</span>
                      </div>
                      <div className="pt-row" data-grp="Back of house">
                        <div className="pt-area">
                          <b>{"Staff cafeteria"}</b>
                          <small>{"Back of house"}</small>
                        </div>
                        <div className="pt-lane">
                          <a className="pb2 pb2--due" href="#pa-PA-058" style={{"gridColumn": "12 / span 1"}} title="12:30 · Clean after meals · Satheesan · Due">
                            <b>{"12:30"}</b>
                            {" "}
                            <span>{"Clean after meals"}</span>
                          </a>
                          <a className="pb2 pb2--due" href="#pa-PA-059" style={{"gridColumn": "28 / span 1"}} title="20:30 · Clean after meals · Satheesan · Due">
                            <b>{"20:30"}</b>
                            {" "}
                            <span>{"Clean after meals"}</span>
                          </a>
                        </div>
                      </div>
                      <div className="pt-row" data-grp="Back of house">
                        <div className="pt-area">
                          <b>{"Locker rooms"}</b>
                          <small>{"Back of house"}</small>
                        </div>
                        <div className="pt-lane">
                          <a className="pb2 pb2--due" href="#pa-PA-060" style={{"gridColumn": "9 / span 1"}} title="11:00 · Clean and restock · Satheesan · Due">
                            <b>{"11:00"}</b>
                            {" "}
                            <span>{"Clean and restock"}</span>
                          </a>
                        </div>
                      </div>
                      <div className="pt-row" data-grp="Back of house">
                        <div className="pt-area">
                          <b>{"Back-of-house corridors"}</b>
                          <small>{"Back of house"}</small>
                        </div>
                        <div className="pt-lane">
                          <a className="pb2 pb2--due" href="#pa-PA-061" style={{"gridColumn": "7 / span 2"}} title="10:00 · Sweep and mop · Biju K · Due">
                            <b>{"10:00"}</b>
                            {" "}
                            <span>{"Sweep and mop"}</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </section>
                  <aside className="pt-side" aria-label="PA attendants">
                    <h2 className="pt-side__t">{"PA attendants today"}</h2>
                    <ul className="pa-att">
                      <li>
                        <span className="pa-av">{"BK"}</span>
                        <span>
                          <b>{"Biju K"}</b>
                          <small>{"28 tasks · 9 h 30 min"}</small>
                        </span>
                      </li>
                      <li>
                        <span className="pa-av">{"AM"}</span>
                        <span>
                          <b>{"Ajith M"}</b>
                          <small>{"15 tasks · 6 h 00 min"}</small>
                        </span>
                      </li>
                      <li>
                        <span className="pa-av">{"S"}</span>
                        <span>
                          <b>{"Satheesan"}</b>
                          <small>{"17 tasks · 6 h 00 min"}</small>
                        </span>
                      </li>
                      <li>
                        <span className="pa-av">{"PV"}</span>
                        <span>
                          <b>{"Prasad V"}</b>
                          <small>{"1 tasks · 0 h 30 min"}</small>
                        </span>
                      </li>
                    </ul>
                    <p className="pa-ck">
                      <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#info" />
                      </svg>
                      {"Click a block to mark it done, reassign it or raise a work order. Washroom checks use the digital check sheet (photo + signature)."}
                    </p>
                  </aside>
                </div>
              </div>
              <div className="modal modal--lg" id="pa-act" data-code="HK-15-task" role="dialog" aria-modal="true" aria-labelledby="pa-act-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping/hk-15-public-area-cleaning/" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="pa-act-t">{"Public area task"}</h2>
                      <p className="modal__desc">{"Mark the task done with the time and a photo, or give it to another PA attendant. Repairs go to Engineering as a work order."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="pm-wrap field--wide">
                        <i className="pm" id="pa-PA-001" />
                        <i className="pm" id="pa-PA-002" />
                        <i className="pm" id="pa-PA-003" />
                        <i className="pm" id="pa-PA-004" />
                        <i className="pm" id="pa-PA-005" />
                        <i className="pm" id="pa-PA-006" />
                        <i className="pm" id="pa-PA-007" />
                        <i className="pm" id="pa-PA-008" />
                        <i className="pm" id="pa-PA-009" />
                        <i className="pm" id="pa-PA-010" />
                        <i className="pm" id="pa-PA-011" />
                        <i className="pm" id="pa-PA-012" />
                        <i className="pm" id="pa-PA-013" />
                        <i className="pm" id="pa-PA-014" />
                        <i className="pm" id="pa-PA-015" />
                        <i className="pm" id="pa-PA-016" />
                        <i className="pm" id="pa-PA-017" />
                        <i className="pm" id="pa-PA-018" />
                        <i className="pm" id="pa-PA-019" />
                        <i className="pm" id="pa-PA-020" />
                        <i className="pm" id="pa-PA-021" />
                        <i className="pm" id="pa-PA-022" />
                        <i className="pm" id="pa-PA-023" />
                        <i className="pm" id="pa-PA-024" />
                        <i className="pm" id="pa-PA-025" />
                        <i className="pm" id="pa-PA-026" />
                        <i className="pm" id="pa-PA-027" />
                        <i className="pm" id="pa-PA-028" />
                        <i className="pm" id="pa-PA-029" />
                        <i className="pm" id="pa-PA-030" />
                        <i className="pm" id="pa-PA-031" />
                        <i className="pm" id="pa-PA-032" />
                        <i className="pm" id="pa-PA-033" />
                        <i className="pm" id="pa-PA-034" />
                        <i className="pm" id="pa-PA-035" />
                        <i className="pm" id="pa-PA-036" />
                        <i className="pm" id="pa-PA-037" />
                        <i className="pm" id="pa-PA-038" />
                        <i className="pm" id="pa-PA-039" />
                        <i className="pm" id="pa-PA-040" />
                        <i className="pm" id="pa-PA-041" />
                        <i className="pm" id="pa-PA-042" />
                        <i className="pm" id="pa-PA-043" />
                        <i className="pm" id="pa-PA-044" />
                        <i className="pm" id="pa-PA-045" />
                        <i className="pm" id="pa-PA-046" />
                        <i className="pm" id="pa-PA-047" />
                        <i className="pm" id="pa-PA-048" />
                        <i className="pm" id="pa-PA-049" />
                        <i className="pm" id="pa-PA-050" />
                        <i className="pm" id="pa-PA-051" />
                        <i className="pm" id="pa-PA-052" />
                        <i className="pm" id="pa-PA-053" />
                        <i className="pm" id="pa-PA-054" />
                        <i className="pm" id="pa-PA-055" />
                        <i className="pm" id="pa-PA-056" />
                        <i className="pm" id="pa-PA-057" />
                        <i className="pm" id="pa-PA-058" />
                        <i className="pm" id="pa-PA-059" />
                        <i className="pm" id="pa-PA-060" />
                        <i className="pm" id="pa-PA-061" />
                      </div>
                      <div className="field field--wide">
                        <div className="pr pr--PA-001">
                          <span className="pr__no pa-st pa-st--done">{"07:00"}</span>
                          <span className="pr__t">
                            <b>{"Lobby · Floor mopping"}</b>
                            <small>
                              {"Every 2 h · 20 min · Biju K · "}
                              <b>{"Done"}</b>
                              {" – Done 07:18 · Biju K"}
                            </small>
                          </span>
                        </div>
                        <div className="pr pr--PA-002">
                          <span className="pr__no pa-st pa-st--done">{"09:00"}</span>
                          <span className="pr__t">
                            <b>{"Lobby · Floor mopping"}</b>
                            <small>
                              {"Every 2 h · 20 min · Biju K · "}
                              <b>{"Done"}</b>
                              {" – Done 09:18 · Biju K"}
                            </small>
                          </span>
                        </div>
                        <div className="pr pr--PA-003">
                          <span className="pr__no pa-st pa-st--due">{"11:00"}</span>
                          <span className="pr__t">
                            <b>{"Lobby · Floor mopping"}</b>
                            <small>
                              {"Every 2 h · 20 min · Biju K · "}
                              <b>{"Due"}</b>
                            </small>
                          </span>
                        </div>
                        <div className="pr pr--PA-004">
                          <span className="pr__no pa-st pa-st--due">{"13:00"}</span>
                          <span className="pr__t">
                            <b>{"Lobby · Floor mopping"}</b>
                            <small>
                              {"Every 2 h · 20 min · Biju K · "}
                              <b>{"Due"}</b>
                            </small>
                          </span>
                        </div>
                        <div className="pr pr--PA-005">
                          <span className="pr__no pa-st pa-st--due">{"15:00"}</span>
                          <span className="pr__t">
                            <b>{"Lobby · Floor mopping"}</b>
                            <small>
                              {"Every 2 h · 20 min · Ajith M · "}
                              <b>{"Due"}</b>
                            </small>
                          </span>
                        </div>
                        <div className="pr pr--PA-006">
                          <span className="pr__no pa-st pa-st--due">{"17:00"}</span>
                          <span className="pr__t">
                            <b>{"Lobby · Floor mopping"}</b>
                            <small>
                              {"Every 2 h · 20 min · Ajith M · "}
                              <b>{"Due"}</b>
                            </small>
                          </span>
                        </div>
                        <div className="pr pr--PA-007">
                          <span className="pr__no pa-st pa-st--due">{"19:00"}</span>
                          <span className="pr__t">
                            <b>{"Lobby · Floor mopping"}</b>
                            <small>
                              {"Every 2 h · 20 min · Ajith M · "}
                              <b>{"Due"}</b>
                            </small>
                          </span>
                        </div>
                        <div className="pr pr--PA-008">
                          <span className="pr__no pa-st pa-st--due">{"21:00"}</span>
                          <span className="pr__t">
                            <b>{"Lobby · Floor mopping"}</b>
                            <small>
                              {"Every 2 h · 20 min · Ajith M · "}
                              <b>{"Due"}</b>
                            </small>
                          </span>
                        </div>
                        <div className="pr pr--PA-009">
                          <span className="pr__no pa-st pa-st--late">{"09:00"}</span>
                          <span className="pr__t">
                            <b>{"Lobby · Glass doors"}</b>
                            <small>
                              {"Daily · 15 min · Biju K · "}
                              <b>{"Late"}</b>
                              {" – Due 09:00 – 42 min late"}
                            </small>
                          </span>
                        </div>
                        <div className="pr pr--PA-010">
                          <span className="pr__no pa-st pa-st--due">{"16:00"}</span>
                          <span className="pr__t">
                            <b>{"Lobby · Glass doors"}</b>
                            <small>
                              {"Daily · 15 min · Biju K · "}
                              <b>{"Due"}</b>
                            </small>
                          </span>
                        </div>
                        <div className="pr pr--PA-011">
                          <span className="pr__no pa-st pa-st--due">{"10:00"}</span>
                          <span className="pr__t">
                            <b>{"Lobby · Furniture and brass polish"}</b>
                            <small>
                              {"Weekly (Mon, Thu) · 45 min · Biju K · "}
                              <b>{"Due"}</b>
                            </small>
                          </span>
                        </div>
                        <div className="pr pr--PA-012">
                          <span className="pr__no pa-st pa-st--done">{"07:30"}</span>
                          <span className="pr__t">
                            <b>{"Front desk · Counter and desk wipe"}</b>
                            <small>
                              {"Daily · 10 min · Biju K · "}
                              <b>{"Done"}</b>
                              {" – Done 07:38 · Biju K"}
                            </small>
                          </span>
                        </div>
                        <div className="pr pr--PA-013">
                          <span className="pr__no pa-st pa-st--due">{"13:00"}</span>
                          <span className="pr__t">
                            <b>{"Front desk · Counter and desk wipe"}</b>
                            <small>
                              {"Daily · 10 min · Biju K · "}
                              <b>{"Due"}</b>
                            </small>
                          </span>
                        </div>
                        <div className="pr pr--PA-014">
                          <span className="pr__no pa-st pa-st--due">{"19:00"}</span>
                          <span className="pr__t">
                            <b>{"Front desk · Counter and desk wipe"}</b>
                            <small>
                              {"Daily · 10 min · Biju K · "}
                              <b>{"Due"}</b>
                            </small>
                          </span>
                        </div>
                        <div className="pr pr--PA-015">
                          <span className="pr__no pa-st pa-st--done">{"07:00"}</span>
                          <span className="pr__t">
                            <b>{"Lifts · Lift car clean"}</b>
                            <small>
                              {"Every 3 h · 10 min · Biju K · "}
                              <b>{"Done"}</b>
                              {" – Done 07:08 · Biju K"}
                            </small>
                          </span>
                        </div>
                        <div className="pr pr--PA-016">
                          <span className="pr__no pa-st pa-st--due">{"10:00"}</span>
                          <span className="pr__t">
                            <b>{"Lifts · Lift car clean"}</b>
                            <small>
                              {"Every 3 h · 10 min · Biju K · "}
                              <b>{"Due"}</b>
                            </small>
                          </span>
                        </div>
                        <div className="pr pr--PA-017">
                          <span className="pr__no pa-st pa-st--due">{"13:00"}</span>
                          <span className="pr__t">
                            <b>{"Lifts · Lift car clean"}</b>
                            <small>
                              {"Every 3 h · 10 min · Biju K · "}
                              <b>{"Due"}</b>
                            </small>
                          </span>
                        </div>
                        <div className="pr pr--PA-018">
                          <span className="pr__no pa-st pa-st--due">{"16:00"}</span>
                          <span className="pr__t">
                            <b>{"Lifts · Lift car clean"}</b>
                            <small>
                              {"Every 3 h · 10 min · Biju K · "}
                              <b>{"Due"}</b>
                            </small>
                          </span>
                        </div>
                        <div className="pr pr--PA-019">
                          <span className="pr__no pa-st pa-st--due">{"19:00"}</span>
                          <span className="pr__t">
                            <b>{"Lifts · Lift car clean"}</b>
                            <small>
                              {"Every 3 h · 10 min · Biju K · "}
                              <b>{"Due"}</b>
                            </small>
                          </span>
                        </div>
                        <div className="pr pr--PA-020">
                          <span className="pr__no pa-st pa-st--done">{"08:00"}</span>
                          <span className="pr__t">
                            <b>{"Corridors · Vacuum"}</b>
                            <small>
                              {"Daily · 60 min · Biju K · "}
                              <b>{"Done"}</b>
                              {" – Done 08:58 · Biju K"}
                            </small>
                          </span>
                        </div>
                        <div className="pr pr--PA-021">
                          <span className="pr__no pa-st pa-st--due">{"11:00"}</span>
                          <span className="pr__t">
                            <b>{"Corridors · Spot check"}</b>
                            <small>
                              {"Daily · 15 min · Biju K · "}
                              <b>{"Due"}</b>
                            </small>
                          </span>
                        </div>
                        <div className="pr pr--PA-022">
                          <span className="pr__no pa-st pa-st--due">{"17:00"}</span>
                          <span className="pr__t">
                            <b>{"Corridors · Spot check"}</b>
                            <small>
                              {"Daily · 15 min · Biju K · "}
                              <b>{"Due"}</b>
                            </small>
                          </span>
                        </div>
                        <div className="pr pr--PA-023">
                          <span className="pr__no pa-st pa-st--done">{"07:00"}</span>
                          <span className="pr__t">
                            <b>{"Public washrooms · Washroom check"}</b>
                            <small>
                              {"Every 1 h · 15 min · Satheesan · "}
                              <b>{"Done"}</b>
                              {" – Done 07:13 · Satheesan · checklist 12/12 · photo · signed"}
                            </small>
                          </span>
                        </div>
                        <div className="pr pr--PA-024">
                          <span className="pr__no pa-st pa-st--done">{"08:00"}</span>
                          <span className="pr__t">
                            <b>{"Public washrooms · Washroom check"}</b>
                            <small>
                              {"Every 1 h · 15 min · Satheesan · "}
                              <b>{"Done"}</b>
                              {" – Done 08:13 · Satheesan · checklist 12/12 · photo · signed"}
                            </small>
                          </span>
                        </div>
                        <div className="pr pr--PA-025">
                          <span className="pr__no pa-st pa-st--done">{"09:00"}</span>
                          <span className="pr__t">
                            <b>{"Public washrooms · Washroom check"}</b>
                            <small>
                              {"Every 1 h · 15 min · Satheesan · "}
                              <b>{"Done"}</b>
                              {" – Checklist 12/12 · photo · signed 09:12"}
                            </small>
                          </span>
                        </div>
                        <div className="pr pr--PA-026">
                          <span className="pr__no pa-st pa-st--due">{"10:00"}</span>
                          <span className="pr__t">
                            <b>{"Public washrooms · Washroom check"}</b>
                            <small>
                              {"Every 1 h · 15 min · Satheesan · "}
                              <b>{"Due"}</b>
                            </small>
                          </span>
                        </div>
                        <div className="pr pr--PA-027">
                          <span className="pr__no pa-st pa-st--due">{"11:00"}</span>
                          <span className="pr__t">
                            <b>{"Public washrooms · Washroom check"}</b>
                            <small>
                              {"Every 1 h · 15 min · Satheesan · "}
                              <b>{"Due"}</b>
                            </small>
                          </span>
                        </div>
                        <div className="pr pr--PA-028">
                          <span className="pr__no pa-st pa-st--due">{"12:00"}</span>
                          <span className="pr__t">
                            <b>{"Public washrooms · Washroom check"}</b>
                            <small>
                              {"Every 1 h · 15 min · Satheesan · "}
                              <b>{"Due"}</b>
                            </small>
                          </span>
                        </div>
                        <div className="pr pr--PA-029">
                          <span className="pr__no pa-st pa-st--due">{"13:00"}</span>
                          <span className="pr__t">
                            <b>{"Public washrooms · Washroom check"}</b>
                            <small>
                              {"Every 1 h · 15 min · Satheesan · "}
                              <b>{"Due"}</b>
                            </small>
                          </span>
                        </div>
                        <div className="pr pr--PA-030">
                          <span className="pr__no pa-st pa-st--due">{"14:00"}</span>
                          <span className="pr__t">
                            <b>{"Public washrooms · Washroom check"}</b>
                            <small>
                              {"Every 1 h · 15 min · Satheesan · "}
                              <b>{"Due"}</b>
                            </small>
                          </span>
                        </div>
                        <div className="pr pr--PA-031">
                          <span className="pr__no pa-st pa-st--due">{"15:00"}</span>
                          <span className="pr__t">
                            <b>{"Public washrooms · Washroom check"}</b>
                            <small>
                              {"Every 1 h · 15 min · Ajith M · "}
                              <b>{"Due"}</b>
                            </small>
                          </span>
                        </div>
                        <div className="pr pr--PA-032">
                          <span className="pr__no pa-st pa-st--due">{"16:00"}</span>
                          <span className="pr__t">
                            <b>{"Public washrooms · Washroom check"}</b>
                            <small>
                              {"Every 1 h · 15 min · Ajith M · "}
                              <b>{"Due"}</b>
                            </small>
                          </span>
                        </div>
                        <div className="pr pr--PA-033">
                          <span className="pr__no pa-st pa-st--due">{"17:00"}</span>
                          <span className="pr__t">
                            <b>{"Public washrooms · Washroom check"}</b>
                            <small>
                              {"Every 1 h · 15 min · Ajith M · "}
                              <b>{"Due"}</b>
                            </small>
                          </span>
                        </div>
                        <div className="pr pr--PA-034">
                          <span className="pr__no pa-st pa-st--due">{"18:00"}</span>
                          <span className="pr__t">
                            <b>{"Public washrooms · Washroom check"}</b>
                            <small>
                              {"Every 1 h · 15 min · Ajith M · "}
                              <b>{"Due"}</b>
                            </small>
                          </span>
                        </div>
                        <div className="pr pr--PA-035">
                          <span className="pr__no pa-st pa-st--due">{"19:00"}</span>
                          <span className="pr__t">
                            <b>{"Public washrooms · Washroom check"}</b>
                            <small>
                              {"Every 1 h · 15 min · Ajith M · "}
                              <b>{"Due"}</b>
                            </small>
                          </span>
                        </div>
                        <div className="pr pr--PA-036">
                          <span className="pr__no pa-st pa-st--due">{"20:00"}</span>
                          <span className="pr__t">
                            <b>{"Public washrooms · Washroom check"}</b>
                            <small>
                              {"Every 1 h · 15 min · Ajith M · "}
                              <b>{"Due"}</b>
                            </small>
                          </span>
                        </div>
                        <div className="pr pr--PA-037">
                          <span className="pr__no pa-st pa-st--due">{"21:00"}</span>
                          <span className="pr__t">
                            <b>{"Public washrooms · Washroom check"}</b>
                            <small>
                              {"Every 1 h · 15 min · Ajith M · "}
                              <b>{"Due"}</b>
                            </small>
                          </span>
                        </div>
                        <div className="pr pr--PA-038">
                          <span className="pr__no pa-st pa-st--due">{"22:00"}</span>
                          <span className="pr__t">
                            <b>{"Public washrooms · Washroom check"}</b>
                            <small>
                              {"Every 1 h · 15 min · Ajith M · "}
                              <b>{"Due"}</b>
                            </small>
                          </span>
                        </div>
                        <div className="pr pr--PA-039">
                          <span className="pr__no pa-st pa-st--due">{"22:30"}</span>
                          <span className="pr__t">
                            <b>{"Public washrooms · Full wash and restock"}</b>
                            <small>
                              {"Daily · 40 min · Ajith M · "}
                              <b>{"Due"}</b>
                            </small>
                          </span>
                        </div>
                        <div className="pr pr--PA-040">
                          <span className="pr__no pa-st pa-st--due">{"11:30"}</span>
                          <span className="pr__t">
                            <b>{"Restaurant · Clean after each meal"}</b>
                            <small>
                              {"Daily · 30 min · Satheesan · "}
                              <b>{"Due"}</b>
                            </small>
                          </span>
                        </div>
                        <div className="pr pr--PA-041">
                          <span className="pr__no pa-st pa-st--due">{"15:30"}</span>
                          <span className="pr__t">
                            <b>{"Restaurant · Clean after each meal"}</b>
                            <small>
                              {"Daily · 30 min · Satheesan · "}
                              <b>{"Due"}</b>
                            </small>
                          </span>
                        </div>
                        <div className="pr pr--PA-042">
                          <span className="pr__no pa-st pa-st--due">{"23:00"}</span>
                          <span className="pr__t">
                            <b>{"Restaurant · Clean after each meal"}</b>
                            <small>
                              {"Daily · 30 min · Satheesan · "}
                              <b>{"Due"}</b>
                            </small>
                          </span>
                        </div>
                        <div className="pr pr--PA-043">
                          <span className="pr__no pa-st pa-st--due">{"23:30"}</span>
                          <span className="pr__t">
                            <b>{"Bar · Clean after service"}</b>
                            <small>
                              {"Daily · 30 min · Prasad V · "}
                              <b>{"Due"}</b>
                            </small>
                          </span>
                        </div>
                        <div className="pr pr--PA-044">
                          <span className="pr__no pa-st pa-st--due">{"16:00"}</span>
                          <span className="pr__t">
                            <b>{"Banquet halls · Clean after each event"}</b>
                            <small>
                              {"Daily · 90 min · Ajith M · "}
                              <b>{"Due"}</b>
                            </small>
                          </span>
                        </div>
                        <div className="pr pr--PA-045">
                          <span className="pr__no pa-st pa-st--due">{"16:30"}</span>
                          <span className="pr__t">
                            <b>{"Pre-function · Clean after each event"}</b>
                            <small>
                              {"Daily · 30 min · Ajith M · "}
                              <b>{"Due"}</b>
                            </small>
                          </span>
                        </div>
                        <div className="pr pr--PA-046">
                          <span className="pr__no pa-st pa-st--done">{"08:30"}</span>
                          <span className="pr__t">
                            <b>{"Pool deck · Deck wash and furniture wipe"}</b>
                            <small>
                              {"Daily · 30 min · Biju K · "}
                              <b>{"Done"}</b>
                              {" – Done 08:58 · Biju K"}
                            </small>
                          </span>
                        </div>
                        <div className="pr pr--PA-047">
                          <span className="pr__no pa-st pa-st--due">{"15:30"}</span>
                          <span className="pr__t">
                            <b>{"Pool deck · Deck wash and furniture wipe"}</b>
                            <small>
                              {"Daily · 30 min · Biju K · "}
                              <b>{"Due"}</b>
                            </small>
                          </span>
                        </div>
                        <div className="pr pr--PA-048">
                          <span className="pr__no pa-st pa-st--skip">{"09:00"}</span>
                          <span className="pr__t">
                            <b>{"Gym · Equipment wipe and floor"}</b>
                            <small>
                              {"Daily · 20 min · Satheesan · "}
                              <b>{"Skipped"}</b>
                              {" – Event in the area – yoga class 08:45–10:00"}
                            </small>
                          </span>
                        </div>
                        <div className="pr pr--PA-049">
                          <span className="pr__no pa-st pa-st--due">{"17:00"}</span>
                          <span className="pr__t">
                            <b>{"Gym · Equipment wipe and floor"}</b>
                            <small>
                              {"Daily · 20 min · Satheesan · "}
                              <b>{"Due"}</b>
                            </small>
                          </span>
                        </div>
                        <div className="pr pr--PA-050">
                          <span className="pr__no pa-st pa-st--due">{"09:30"}</span>
                          <span className="pr__t">
                            <b>{"Spa · Reception and corridor clean"}</b>
                            <small>
                              {"Daily · 20 min · Satheesan · "}
                              <b>{"Due"}</b>
                            </small>
                          </span>
                        </div>
                        <div className="pr pr--PA-051">
                          <span className="pr__no pa-st pa-st--due">{"10:00"}</span>
                          <span className="pr__t">
                            <b>{"Business centre · Desk and floor clean"}</b>
                            <small>
                              {"Daily · 15 min · Biju K · "}
                              <b>{"Due"}</b>
                            </small>
                          </span>
                        </div>
                        <div className="pr pr--PA-052">
                          <span className="pr__no pa-st pa-st--due">{"10:30"}</span>
                          <span className="pr__t">
                            <b>{"Staircases · Sweep and mop"}</b>
                            <small>
                              {"Daily · 40 min · Biju K · "}
                              <b>{"Due"}</b>
                            </small>
                          </span>
                        </div>
                        <div className="pr pr--PA-053">
                          <span className="pr__no pa-st pa-st--done">{"07:30"}</span>
                          <span className="pr__t">
                            <b>{"Car park · Sweep and empty bins"}</b>
                            <small>
                              {"Daily · 30 min · Biju K · "}
                              <b>{"Done"}</b>
                              {" – Done 07:58 · Biju K"}
                            </small>
                          </span>
                        </div>
                        <div className="pr pr--PA-054">
                          <span className="pr__no pa-st pa-st--missed">{"07:00"}</span>
                          <span className="pr__t">
                            <b>{"Entrance and porch · Sweep and wash porch"}</b>
                            <small>
                              {"Every 4 h · 15 min · Biju K · "}
                              <b>{"Missed"}</b>
                              {" – Not done – Biju K was at the car park"}
                            </small>
                          </span>
                        </div>
                        <div className="pr pr--PA-055">
                          <span className="pr__no pa-st pa-st--due">{"11:00"}</span>
                          <span className="pr__t">
                            <b>{"Entrance and porch · Sweep and wash porch"}</b>
                            <small>
                              {"Every 4 h · 15 min · Biju K · "}
                              <b>{"Due"}</b>
                            </small>
                          </span>
                        </div>
                        <div className="pr pr--PA-056">
                          <span className="pr__no pa-st pa-st--due">{"15:00"}</span>
                          <span className="pr__t">
                            <b>{"Entrance and porch · Sweep and wash porch"}</b>
                            <small>
                              {"Every 4 h · 15 min · Biju K · "}
                              <b>{"Due"}</b>
                            </small>
                          </span>
                        </div>
                        <div className="pr pr--PA-057">
                          <span className="pr__no pa-st pa-st--due">{"19:00"}</span>
                          <span className="pr__t">
                            <b>{"Entrance and porch · Sweep and wash porch"}</b>
                            <small>
                              {"Every 4 h · 15 min · Biju K · "}
                              <b>{"Due"}</b>
                            </small>
                          </span>
                        </div>
                        <div className="pr pr--PA-058">
                          <span className="pr__no pa-st pa-st--due">{"12:30"}</span>
                          <span className="pr__t">
                            <b>{"Staff cafeteria · Clean after meals"}</b>
                            <small>
                              {"Daily · 30 min · Satheesan · "}
                              <b>{"Due"}</b>
                            </small>
                          </span>
                        </div>
                        <div className="pr pr--PA-059">
                          <span className="pr__no pa-st pa-st--due">{"20:30"}</span>
                          <span className="pr__t">
                            <b>{"Staff cafeteria · Clean after meals"}</b>
                            <small>
                              {"Daily · 30 min · Satheesan · "}
                              <b>{"Due"}</b>
                            </small>
                          </span>
                        </div>
                        <div className="pr pr--PA-060">
                          <span className="pr__no pa-st pa-st--due">{"11:00"}</span>
                          <span className="pr__t">
                            <b>{"Locker rooms · Clean and restock"}</b>
                            <small>
                              {"Daily · 30 min · Satheesan · "}
                              <b>{"Due"}</b>
                            </small>
                          </span>
                        </div>
                        <div className="pr pr--PA-061">
                          <span className="pr__no pa-st pa-st--due">{"10:00"}</span>
                          <span className="pr__t">
                            <b>{"Back-of-house corridors · Sweep and mop"}</b>
                            <small>
                              {"Daily · 40 min · Biju K · "}
                              <b>{"Due"}</b>
                            </small>
                          </span>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="pa-ph">{"Photo"}</label>
                        <input className="field__input" id="pa-ph" type="file" name="photo" accept="image/*" capture="environment" />
                        <span className="field__hint">{"Required for Lobby, Lifts, Restaurant, Banquet halls, Public washrooms, Pool deck (HKS-07)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="pa-who">{"Reassign to"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="pa-who" name="who">
                            <option value="">{"Keep the same attendant"}</option>
                            <option>{"Biju K · PA · morning"}</option>
                            <option>{"Satheesan · PA · morning"}</option>
                            <option>{"Ajith M · PA · evening"}</option>
                            <option>{"Prasad V · PA · night"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <span className="field__label">{"Checklist result"}</span>
                        <p className="pa-ck">
                          <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clipboard-check" />
                          </svg>
                          {"Public area inspection checklist (c5, 12 items) is ticked on the phone; the digital washroom check sheet is signed by the attendant."}
                        </p>
                      </div>
                      <div className="field field--wide">
                        <a className="btn btn--sm" href="/housekeeping/hk-09-room-inspection/#hk-p08" data-leads-to="HK-P08">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#wrench" />
                          </svg>
                          {"Raise work order for this area"}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                    <button className="btn btn--primary pb pb--PA-003" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#padone-PA-003">{"Mark done"}</button>
                    <button className="btn pb pb--PA-003" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#pare-PA-003" formNoValidate={true}>{"Reassign"}</button>
                    <button className="btn btn--primary pb pb--PA-004" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#padone-PA-004">{"Mark done"}</button>
                    <button className="btn pb pb--PA-004" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#pare-PA-004" formNoValidate={true}>{"Reassign"}</button>
                    <button className="btn btn--primary pb pb--PA-005" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#padone-PA-005">{"Mark done"}</button>
                    <button className="btn pb pb--PA-005" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#pare-PA-005" formNoValidate={true}>{"Reassign"}</button>
                    <button className="btn btn--primary pb pb--PA-006" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#padone-PA-006">{"Mark done"}</button>
                    <button className="btn pb pb--PA-006" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#pare-PA-006" formNoValidate={true}>{"Reassign"}</button>
                    <button className="btn btn--primary pb pb--PA-007" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#padone-PA-007">{"Mark done"}</button>
                    <button className="btn pb pb--PA-007" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#pare-PA-007" formNoValidate={true}>{"Reassign"}</button>
                    <button className="btn btn--primary pb pb--PA-008" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#padone-PA-008">{"Mark done"}</button>
                    <button className="btn pb pb--PA-008" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#pare-PA-008" formNoValidate={true}>{"Reassign"}</button>
                    <button className="btn btn--primary pb pb--PA-009" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#padone-PA-009">{"Mark done"}</button>
                    <button className="btn pb pb--PA-009" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#pare-PA-009" formNoValidate={true}>{"Reassign"}</button>
                    <button className="btn btn--primary pb pb--PA-010" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#padone-PA-010">{"Mark done"}</button>
                    <button className="btn pb pb--PA-010" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#pare-PA-010" formNoValidate={true}>{"Reassign"}</button>
                    <button className="btn btn--primary pb pb--PA-011" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#padone-PA-011">{"Mark done"}</button>
                    <button className="btn pb pb--PA-011" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#pare-PA-011" formNoValidate={true}>{"Reassign"}</button>
                    <button className="btn btn--primary pb pb--PA-013" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#padone-PA-013">{"Mark done"}</button>
                    <button className="btn pb pb--PA-013" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#pare-PA-013" formNoValidate={true}>{"Reassign"}</button>
                    <button className="btn btn--primary pb pb--PA-014" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#padone-PA-014">{"Mark done"}</button>
                    <button className="btn pb pb--PA-014" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#pare-PA-014" formNoValidate={true}>{"Reassign"}</button>
                    <button className="btn btn--primary pb pb--PA-016" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#padone-PA-016">{"Mark done"}</button>
                    <button className="btn pb pb--PA-016" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#pare-PA-016" formNoValidate={true}>{"Reassign"}</button>
                    <button className="btn btn--primary pb pb--PA-017" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#padone-PA-017">{"Mark done"}</button>
                    <button className="btn pb pb--PA-017" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#pare-PA-017" formNoValidate={true}>{"Reassign"}</button>
                    <button className="btn btn--primary pb pb--PA-018" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#padone-PA-018">{"Mark done"}</button>
                    <button className="btn pb pb--PA-018" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#pare-PA-018" formNoValidate={true}>{"Reassign"}</button>
                    <button className="btn btn--primary pb pb--PA-019" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#padone-PA-019">{"Mark done"}</button>
                    <button className="btn pb pb--PA-019" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#pare-PA-019" formNoValidate={true}>{"Reassign"}</button>
                    <button className="btn btn--primary pb pb--PA-021" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#padone-PA-021">{"Mark done"}</button>
                    <button className="btn pb pb--PA-021" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#pare-PA-021" formNoValidate={true}>{"Reassign"}</button>
                    <button className="btn btn--primary pb pb--PA-022" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#padone-PA-022">{"Mark done"}</button>
                    <button className="btn pb pb--PA-022" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#pare-PA-022" formNoValidate={true}>{"Reassign"}</button>
                    <button className="btn btn--primary pb pb--PA-026" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#padone-PA-026">{"Mark done"}</button>
                    <button className="btn pb pb--PA-026" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#pare-PA-026" formNoValidate={true}>{"Reassign"}</button>
                    <button className="btn btn--primary pb pb--PA-027" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#padone-PA-027">{"Mark done"}</button>
                    <button className="btn pb pb--PA-027" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#pare-PA-027" formNoValidate={true}>{"Reassign"}</button>
                    <button className="btn btn--primary pb pb--PA-028" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#padone-PA-028">{"Mark done"}</button>
                    <button className="btn pb pb--PA-028" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#pare-PA-028" formNoValidate={true}>{"Reassign"}</button>
                    <button className="btn btn--primary pb pb--PA-029" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#padone-PA-029">{"Mark done"}</button>
                    <button className="btn pb pb--PA-029" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#pare-PA-029" formNoValidate={true}>{"Reassign"}</button>
                    <button className="btn btn--primary pb pb--PA-030" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#padone-PA-030">{"Mark done"}</button>
                    <button className="btn pb pb--PA-030" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#pare-PA-030" formNoValidate={true}>{"Reassign"}</button>
                    <button className="btn btn--primary pb pb--PA-031" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#padone-PA-031">{"Mark done"}</button>
                    <button className="btn pb pb--PA-031" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#pare-PA-031" formNoValidate={true}>{"Reassign"}</button>
                    <button className="btn btn--primary pb pb--PA-032" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#padone-PA-032">{"Mark done"}</button>
                    <button className="btn pb pb--PA-032" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#pare-PA-032" formNoValidate={true}>{"Reassign"}</button>
                    <button className="btn btn--primary pb pb--PA-033" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#padone-PA-033">{"Mark done"}</button>
                    <button className="btn pb pb--PA-033" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#pare-PA-033" formNoValidate={true}>{"Reassign"}</button>
                    <button className="btn btn--primary pb pb--PA-034" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#padone-PA-034">{"Mark done"}</button>
                    <button className="btn pb pb--PA-034" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#pare-PA-034" formNoValidate={true}>{"Reassign"}</button>
                    <button className="btn btn--primary pb pb--PA-035" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#padone-PA-035">{"Mark done"}</button>
                    <button className="btn pb pb--PA-035" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#pare-PA-035" formNoValidate={true}>{"Reassign"}</button>
                    <button className="btn btn--primary pb pb--PA-036" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#padone-PA-036">{"Mark done"}</button>
                    <button className="btn pb pb--PA-036" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#pare-PA-036" formNoValidate={true}>{"Reassign"}</button>
                    <button className="btn btn--primary pb pb--PA-037" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#padone-PA-037">{"Mark done"}</button>
                    <button className="btn pb pb--PA-037" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#pare-PA-037" formNoValidate={true}>{"Reassign"}</button>
                    <button className="btn btn--primary pb pb--PA-038" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#padone-PA-038">{"Mark done"}</button>
                    <button className="btn pb pb--PA-038" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#pare-PA-038" formNoValidate={true}>{"Reassign"}</button>
                    <button className="btn btn--primary pb pb--PA-039" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#padone-PA-039">{"Mark done"}</button>
                    <button className="btn pb pb--PA-039" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#pare-PA-039" formNoValidate={true}>{"Reassign"}</button>
                    <button className="btn btn--primary pb pb--PA-040" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#padone-PA-040">{"Mark done"}</button>
                    <button className="btn pb pb--PA-040" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#pare-PA-040" formNoValidate={true}>{"Reassign"}</button>
                    <button className="btn btn--primary pb pb--PA-041" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#padone-PA-041">{"Mark done"}</button>
                    <button className="btn pb pb--PA-041" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#pare-PA-041" formNoValidate={true}>{"Reassign"}</button>
                    <button className="btn btn--primary pb pb--PA-042" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#padone-PA-042">{"Mark done"}</button>
                    <button className="btn pb pb--PA-042" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#pare-PA-042" formNoValidate={true}>{"Reassign"}</button>
                    <button className="btn btn--primary pb pb--PA-043" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#padone-PA-043">{"Mark done"}</button>
                    <button className="btn pb pb--PA-043" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#pare-PA-043" formNoValidate={true}>{"Reassign"}</button>
                    <button className="btn btn--primary pb pb--PA-044" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#padone-PA-044">{"Mark done"}</button>
                    <button className="btn pb pb--PA-044" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#pare-PA-044" formNoValidate={true}>{"Reassign"}</button>
                    <button className="btn btn--primary pb pb--PA-045" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#padone-PA-045">{"Mark done"}</button>
                    <button className="btn pb pb--PA-045" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#pare-PA-045" formNoValidate={true}>{"Reassign"}</button>
                    <button className="btn btn--primary pb pb--PA-047" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#padone-PA-047">{"Mark done"}</button>
                    <button className="btn pb pb--PA-047" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#pare-PA-047" formNoValidate={true}>{"Reassign"}</button>
                    <button className="btn btn--primary pb pb--PA-048" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#padone-PA-048">{"Mark done"}</button>
                    <button className="btn pb pb--PA-048" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#pare-PA-048" formNoValidate={true}>{"Reassign"}</button>
                    <button className="btn btn--primary pb pb--PA-049" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#padone-PA-049">{"Mark done"}</button>
                    <button className="btn pb pb--PA-049" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#pare-PA-049" formNoValidate={true}>{"Reassign"}</button>
                    <button className="btn btn--primary pb pb--PA-050" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#padone-PA-050">{"Mark done"}</button>
                    <button className="btn pb pb--PA-050" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#pare-PA-050" formNoValidate={true}>{"Reassign"}</button>
                    <button className="btn btn--primary pb pb--PA-051" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#padone-PA-051">{"Mark done"}</button>
                    <button className="btn pb pb--PA-051" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#pare-PA-051" formNoValidate={true}>{"Reassign"}</button>
                    <button className="btn btn--primary pb pb--PA-052" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#padone-PA-052">{"Mark done"}</button>
                    <button className="btn pb pb--PA-052" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#pare-PA-052" formNoValidate={true}>{"Reassign"}</button>
                    <button className="btn btn--primary pb pb--PA-054" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#padone-PA-054">{"Mark done"}</button>
                    <button className="btn pb pb--PA-054" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#pare-PA-054" formNoValidate={true}>{"Reassign"}</button>
                    <button className="btn btn--primary pb pb--PA-055" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#padone-PA-055">{"Mark done"}</button>
                    <button className="btn pb pb--PA-055" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#pare-PA-055" formNoValidate={true}>{"Reassign"}</button>
                    <button className="btn btn--primary pb pb--PA-056" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#padone-PA-056">{"Mark done"}</button>
                    <button className="btn pb pb--PA-056" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#pare-PA-056" formNoValidate={true}>{"Reassign"}</button>
                    <button className="btn btn--primary pb pb--PA-057" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#padone-PA-057">{"Mark done"}</button>
                    <button className="btn pb pb--PA-057" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#pare-PA-057" formNoValidate={true}>{"Reassign"}</button>
                    <button className="btn btn--primary pb pb--PA-058" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#padone-PA-058">{"Mark done"}</button>
                    <button className="btn pb pb--PA-058" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#pare-PA-058" formNoValidate={true}>{"Reassign"}</button>
                    <button className="btn btn--primary pb pb--PA-059" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#padone-PA-059">{"Mark done"}</button>
                    <button className="btn pb pb--PA-059" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#pare-PA-059" formNoValidate={true}>{"Reassign"}</button>
                    <button className="btn btn--primary pb pb--PA-060" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#padone-PA-060">{"Mark done"}</button>
                    <button className="btn pb pb--PA-060" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#pare-PA-060" formNoValidate={true}>{"Reassign"}</button>
                    <button className="btn btn--primary pb pb--PA-061" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#padone-PA-061">{"Mark done"}</button>
                    <button className="btn pb pb--PA-061" type="submit" formAction="/housekeeping/hk-15-public-area-cleaning/#pare-PA-061" formNoValidate={true}>{"Reassign"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="hk-p13" data-code="HK-P13" role="dialog" aria-modal="true" aria-labelledby="hk-p13-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping/hk-15-public-area-cleaning/#pa-added" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="hk-p13-t">{"PA task entry"}</h2>
                      <p className="modal__desc">{"Add a one-off public area task – a spillage, an event clean-up or a VIP walk-through. It goes to the attendant’s phone at once."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="p13-area">
                          {"Area "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="p13-area" name="area" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose an area"}</option>
                            <option value="Lobby">{"Lobby · Front of house"}</option>
                            <option value="Front desk">{"Front desk · Front of house"}</option>
                            <option value="Lifts">{"Lifts · Front of house"}</option>
                            <option value="Corridors">{"Corridors · Front of house"}</option>
                            <option value="Business centre">{"Business centre · Front of house"}</option>
                            <option value="Gym">{"Gym · Front of house"}</option>
                            <option value="Spa">{"Spa · Front of house"}</option>
                            <option value="Staircases">{"Staircases · Front of house"}</option>
                            <option value="Restaurant">{"Restaurant · F&B"}</option>
                            <option value="Bar">{"Bar · F&B"}</option>
                            <option value="Banquet halls">{"Banquet halls · F&B"}</option>
                            <option value="Pre-function">{"Pre-function · F&B"}</option>
                            <option value="Public washrooms">{"Public washrooms · Washrooms"}</option>
                            <option value="Pool deck">{"Pool deck · Outdoor"}</option>
                            <option value="Car park">{"Car park · Outdoor"}</option>
                            <option value="Entrance and porch">{"Entrance and porch · Outdoor"}</option>
                            <option value="Staff cafeteria">{"Staff cafeteria · Back of house"}</option>
                            <option value="Locker rooms">{"Locker rooms · Back of house"}</option>
                            <option value="Back-of-house corridors">{"Back-of-house corridors · Back of house"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="p13-task">
                          {"Task "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="p13-task" name="task" list="p13-tasks" required={true} maxLength="80" placeholder="Choose or type a task" />
                        <datalist id="p13-tasks">
                          <option value="Clean after each event">
                            <option value="Clean after each meal">
                              <option value="Clean after meals">
                                <option value="Clean after service">
                                  <option value="Clean and restock">
                                    <option value="Counter and desk wipe">
                                      <option value="Deck wash and furniture wipe">
                                        <option value="Desk and floor clean">
                                          <option value="Equipment wipe and floor">
                                            <option value="Event clean-up">
                                              <option value="Floor mopping">
                                                <option value="Full wash and restock">
                                                  <option value="Furniture and brass polish">
                                                    <option value="Glass doors">
                                                      <option value="Lift car clean">
                                                        <option value="Reception and corridor clean">
                                                          <option value="Spillage clean-up">
                                                            <option value="Spot check">
                                                              <option value="Sweep and empty bins">
                                                                <option value="Sweep and mop">
                                                                  <option value="Sweep and wash porch">
                                                                    <option value="VIP walk-through check">
                                                                      <option value="Vacuum">
                                                                        <option value="Washroom check" />
                                                                      </option>
                                                                    </option>
                                                                  </option>
                                                                </option>
                                                              </option>
                                                            </option>
                                                          </option>
                                                        </option>
                                                      </option>
                                                    </option>
                                                  </option>
                                                </option>
                                              </option>
                                            </option>
                                          </option>
                                        </option>
                                      </option>
                                    </option>
                                  </option>
                                </option>
                              </option>
                            </option>
                          </option>
                        </datalist>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="p13-due">
                          {"Due by "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="p13-due" name="due" type="datetime-local" required={true} min="2026-10-22T09:42" defaultValue={"2026-10-22T10:12"} />
                        <span className="field__hint">{"Now + 30 minutes"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="p13-who">
                          {"Assigned to "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="p13-who" name="who" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a PA attendant on duty"}</option>
                            <option>{"Biju K · PA · morning"}</option>
                            <option>{"Satheesan · PA · morning"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"PA attendants on duty now (HK-07)"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">
                          {"Priority "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="priority" value="normal" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Normal"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="priority" value="urgent" required={true} />
                            <span className="check__box" />
                            {"Urgent"}
                          </label>
                        </div>
                      </fieldset>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="pa-new" data-code="HK-15-new" role="dialog" aria-modal="true" aria-labelledby="pa-new-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping/hk-15-public-area-cleaning/#main" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="pa-new-t">{"Lobby · Spillage near the lifts"}</h2>
                      <p className="modal__desc">{"Added 09:42 by Anita Mohan · urgent · Biju K."}</p>
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
                        <p className="pa-ck">
                          <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#info" />
                          </svg>
                          {"Due by 10:12. The task is on Biju K’s phone with an urgent alert."}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                    <button className="btn btn--primary" type="submit">{"Mark done"}</button>
                  </div>
                </form>
              </div>
              <div className="fd-toast" id="t-added" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#plus-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"PA task added"}
                  <small>{"Lobby · spillage near the lifts · due 10:12 · urgent · on Biju K’s phone now. The new block is on the board."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-done" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"PA task done"}
                  <small>{"Recorded with the time, your name and the photo; compliance goes to the public area report (HK-R08)."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-re" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#users" />
                </svg>
                <div className="fd-toast__text">
                  {"PA task reassigned"}
                  <small>{"The task moved to the new attendant’s phone."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
            </main>
          </div>
        </div>
      </div>
    </ScreenShell>
  );
}
