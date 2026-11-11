// GENERATED from public/stores-setup/sts-05-reorder-and-par-levels/index.html by scripts/convert_legacy.py.
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
    "href": "/css/aviv/linen.css",
    "media": null
  },
  {
    "href": "/css/aviv/purchase.css",
    "media": null
  },
  {
    "href": "/css/aviv/stores.css",
    "media": null
  },
  {
    "href": "/stores-setup/sts-05-reorder-and-par-levels/sts-05-reorder-and-par-levels.css",
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

export default function StoresSetupSts05ReorderAndParLevels() {
  return (
    <ScreenShell title="Reorder & Par Levels" sheets={SHEETS} inlineCss={INLINE_CSS}>
      <div data-screen="STS-05" data-code="STS-05" data-static="1" className="legacy-body">
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
                  <Link className="nav__item is-active" data-nav="STS-01" aria-current="page" title="Stores Setup – Items" to={"/stores-setup/sts-01-item-master"}>
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
            <main className="app__content" id="main" data-code="STS-05" tabIndex="-1">
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
                        <Link to={"/stores-setup/sts-01-item-master"}>{"Stores Setup"}</Link>
                      </li>
                      <li>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-right" />
                        </svg>
                        <span aria-current="page">{"Levels"}</span>
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="page-header__row">
                  <div className="page-header__text">
                    <h1 className="page-header__title">{"Reorder & Par Levels"}</h1>
                  </div>
                  <span className="code-chip" title="Screen code">{"STS-05"}</span>
                  <div className="page-header__actions">
                    <label className="btn btn--primary add-btn" htmlFor="add-1" role="button">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#plus" />
                      </svg>
                      {"Add level"}
                    </label>
                    <label className="btn add-btn" htmlFor="add-2" role="button">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#alert" />
                      </svg>
                      {"29 active items have no level yet"}
                    </label>
                  </div>
                </div>
              </header>
              <nav className="sts-nav" aria-label="Stores Setup">
                <Link to={"/stores-setup/sts-01-item-master"}>{"Items"}</Link>
                <Link to={"/stores-setup/sts-02-categories-and-gl-mapping"}>{"Categories"}</Link>
                <Link to={"/stores-setup/sts-03-units-and-conversions"}>{"Units"}</Link>
                <Link to={"/stores-setup/sts-04-stores-and-sub-stores"}>{"Stores"}</Link>
                <Link aria-current="page" to={"/stores-setup/sts-05-reorder-and-par-levels"}>{"Levels"}</Link>
                <Link to={"/stores-setup/sts-06-valuation-tolerances-and-close"}>{"Valuation & Close"}</Link>
              </nav>
              <div className="hb-mks" aria-hidden="true">
                <i className="pm pm--v" id="v-all" />
                <i className="pm pm--v" id="v-main" />
                <i className="pm pm--v" id="v-kit" />
                <i className="pm pm--v" id="v-bar" />
                <i className="pm pm--v" id="v-mbr" />
                <i className="pm pm--v" id="v-eng" />
                <i className="pm pm--v" id="v-hkl" />
                <i className="pm" id="added" />
                <i className="pm" id="saved" />
              </div>
              <section className="st-tiles" data-n="4" aria-label="Level summary">
                <a className="st-tile" href="#v-all">
                  <span className="st-tile__ic">
                    <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#sliders" />
                    </svg>
                  </span>
                  <span className="st-tile__l">{"Levels set"}</span>
                  <span className="st-tile__v">
                    <b className="st-tile__n">{"111"}</b>
                    <small className="st-tile__u">{"store × item rows"}</small>
                  </span>
                </a>
                <Link className="st-tile" to={"/stores-setup/sts-04-stores-and-sub-stores"}>
                  <span className="st-tile__ic">
                    <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#warehouse" />
                    </svg>
                  </span>
                  <span className="st-tile__l">{"Stores with levels"}</span>
                  <span className="st-tile__v">
                    <b className="st-tile__n">{"6"}</b>
                    <small className="st-tile__u">{"of 6 stores"}</small>
                  </span>
                </Link>
                <Link className="st-tile" to={"/stores-setup/sts-01-item-master"}>
                  <span className="st-tile__ic">
                    <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#layers" />
                    </svg>
                  </span>
                  <span className="st-tile__l">{"Items with a level"}</span>
                  <span className="st-tile__v">
                    <b className="st-tile__n">{"89"}</b>
                    <small className="st-tile__u">{"of 123 items"}</small>
                  </span>
                </Link>
                <a className="st-tile st-tile--warn" href="#nolevel">
                  <span className="st-tile__ic">
                    <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#alert" />
                    </svg>
                  </span>
                  <span className="st-tile__l">{"No level yet"}</span>
                  <span className="st-tile__v">
                    <b className="st-tile__n">{"29"}</b>
                    <small className="st-tile__u">{"active items"}</small>
                  </span>
                </a>
              </section>
              <input className="add-sw" type="checkbox" id="add-1" aria-label="Show the form" />
              <div className="add-panel prs-add">
                <form className="prs-add__f" action="/stores-setup/sts-05-reorder-and-par-levels/#added" method="get">
                  <div className="s-grid2 la-cols la-cols--7">
                    <div className="field">
                      <label className="field__label" htmlFor="nl-store">
                        {"Store "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <div className="field__wrap">
                        <select className="field__input field__input--select" id="nl-store" name="nl-store" required={true} defaultValue={"MAIN"}>
                          <option value="MAIN">{"Main store (MAIN)"}</option>
                          <option value="KIT">{"Kitchen store (KIT)"}</option>
                          <option value="BAR">{"Bar store (BAR)"}</option>
                          <option value="MBR">{"Minibar store (MBR)"}</option>
                          <option value="ENG">{"Engineering store (ENG)"}</option>
                          <option value="HKL">{"Housekeeping / linen store (HKL)"}</option>
                        </select>
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="nl-item">
                        {"Item "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="nl-item" name="nl-item" type="text" required={true} list="dl-items" autoComplete="off" defaultValue={"ST-GRO-041 · Black tea powder (CTC) 1 kg"} />
                      <span className="field__hint">{"Type the code or the name"}</span>
                    </div>
                    <div className="field" data-fw="x">
                      <label className="field__label" htmlFor="nl-reorder">
                        {"Reorder level "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="nl-reorder" name="nl-reorder" type="number" required={true} min="0" step="1" inputMode="numeric" defaultValue={"40"} />
                      <span className="field__hint">{"A reorder PR is suggested when stock falls to this"}</span>
                    </div>
                    <div className="field" data-fw="x">
                      <label className="field__label" htmlFor="nl-min">
                        {"Minimum "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="nl-min" name="nl-min" type="number" required={true} min="0" step="1" inputMode="numeric" defaultValue={"25"} />
                      <span className="field__hint">{"Never plan to go below this"}</span>
                    </div>
                    <div className="field" data-fw="x">
                      <label className="field__label" htmlFor="nl-max">
                        {"Maximum "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="nl-max" name="nl-max" type="number" required={true} min="0" step="1" inputMode="numeric" defaultValue={"120"} />
                      <span className="field__hint">{"Order up to this"}</span>
                    </div>
                    <div className="field" data-fw="x">
                      <label className="field__label" htmlFor="nl-par">{"Par (outlet / bar)"}</label>
                      <input className="field__input" id="nl-par" name="nl-par" type="number" min="0" step="1" inputMode="numeric" />
                      <span className="field__hint">{"Quantity a sub-store is topped up to; leave empty for the Main store"}</span>
                    </div>
                    <div className="field" data-fw="x">
                      <label className="field__label" htmlFor="nl-lead">{"Lead time (days)"}</label>
                      <input className="field__input" id="nl-lead" name="nl-lead" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"3"} />
                    </div>
                  </div>
                  <div className="prs-add__a">
                    <span className="fd-muted">{"One row per store and item; the first save of the row sets the reorder alert"}</span>
                    <button className="btn btn--primary" type="submit">{"Add"}</button>
                  </div>
                </form>
              </div>
              <datalist id="dl-items">
                <option value="ST-FRP-001 · Onion" />
                <option value="ST-FRP-002 · Tomato" />
                <option value="ST-FRP-003 · Potato" />
                <option value="ST-FRP-004 · Green chilli" />
                <option value="ST-FRP-005 · Coconut" />
                <option value="ST-FRP-006 · Raw banana (nendran)" />
                <option value="ST-FRP-007 · Curry leaves" />
                <option value="ST-FRP-008 · Lemon" />
                <option value="ST-MSF-011 · Karimeen (pearl spot)" />
                <option value="ST-MSF-012 · Tiger prawns 16/20" />
                <option value="ST-MSF-013 · Chicken (curry cut)" />
                <option value="ST-MSF-014 · Mutton" />
                <option value="ST-MSF-015 · Seer fish (neymeen)" />
                <option value="ST-DRY-021 · Milk 1 litre pack" />
                <option value="ST-DRY-022 · Curd 1 kg pack" />
                <option value="ST-DRY-023 · Butter 500 g" />
                <option value="ST-DRY-024 · Paneer" />
                <option value="ST-DRY-025 · Fresh cream 1 litre" />
                <option value="ST-GRO-031 · Basmati rice 1121" />
                <option value="ST-GRO-032 · Toor dal" />
                <option value="ST-GRO-033 · Sunflower oil 15 litre tin" />
                <option value="ST-GRO-034 · Sugar" />
                <option value="ST-GRO-035 · Jaggery" />
                <option value="ST-GRO-036 · Coconut oil 15 litre tin" />
                <option value="ST-GRO-037 · Wheat flour (atta)" />
                <option value="ST-GRO-038 · Matta rice (Kerala red rice)" />
                <option value="ST-GRO-039 · Black pepper" />
                <option value="ST-GRO-040 · Cardamom (green)" />
                <option value="ST-SNK-201 · Potato chips 52 g" />
                <option value="ST-SNK-211 · Cashew nuts salted 50 g" />
                <option value="ST-SNK-221 · Kerala banana chips 100 g" />
                <option value="ST-SNK-231 · Milk chocolate bar 40 g" />
                <option value="ST-SNK-235 · Dark chocolate 100 g" />
                <option value="ST-SNK-241 · Butter cookies 75 g" />
                <option value="ST-SNK-251 · Instant noodles cup 70 g" />
                <option value="ST-SNK-261 · Masala peanuts 50 g" />
                <option value="ST-SNK-271 · Trail mix 50 g" />
                <option value="ST-BEV-011 · Packaged drinking water 500 ml" />
                <option value="ST-BEV-014 · Sparkling water 330 ml" />
                <option value="ST-BEV-021 · Soft drink can 330 ml (cola / lemon)" />
                <option value="ST-BEV-031 · Fruit juice tetra pack 200 ml" />
                <option value="ST-BEV-041 · Energy drink can 250 ml" />
                <option value="ST-LIQ-101 · Beer can 330 ml (lager)" />
                <option value="ST-LIQ-102 · Beer bottle 650 ml (lager)" />
                <option value="ST-LIQ-111 · Whisky miniature 50 ml" />
                <option value="ST-LIQ-121 · Red wine 750 ml" />
                <option value="ST-LIQ-131 · Brandy 750 ml" />
                <option value="ST-FBC-001 · Paper straws" />
                <option value="ST-FBC-002 · Cocktail napkins" />
                <option value="ST-FBC-003 · Coasters" />
                <option value="ST-TOB-501 · Cigarettes king size (pack of 20)" />
                <option value="ST-HKC-401 · Bathroom cleaner 5 litre" />
                <option value="ST-HKC-402 · Glass cleaner 5 litre" />
                <option value="ST-HKC-403 · Floor cleaner 5 litre" />
                <option value="ST-HKC-404 · Liquid detergent 20 litre" />
                <option value="ST-HKC-405 · Fabric softener 20 litre" />
                <option value="ST-SUP-301 · Toilet roll" />
                <option value="ST-SUP-302 · Facial tissue box" />
                <option value="ST-SUP-303 · Garbage bag 19 x 21 in" />
                <option value="ST-SUP-304 · Mop head (cotton)" />
                <option value="ST-SUP-305 · Disposable gloves (box of 100)" />
                <option value="ST-AMN-201 · Shampoo 30 ml bottle" />
                <option value="ST-AMN-202 · Conditioner 30 ml bottle" />
                <option value="ST-AMN-203 · Body wash 30 ml bottle" />
                <option value="ST-AMN-204 · Soap 40 g" />
                <option value="ST-AMN-205 · Dental kit" />
                <option value="ST-AMN-206 · Shaving kit" />
                <option value="ST-AMN-207 · Comb" />
                <option value="ST-AMN-208 · Sewing kit" />
                <option value="ST-AMN-209 · Shower cap" />
                <option value="ST-AMN-210 · Vanity kit" />
                <option value="ST-AMN-211 · Slippers (pair)" />
                <option value="ST-AMN-212 · Laundry bag" />
                <option value="ST-AMN-213 · Tea / coffee tray set" />
                <option value="ST-AMN-214 · Sugar sachet" />
                <option value="ST-AMN-215 · Creamer sachet" />
                <option value="ST-AMN-216 · Herbal soap 50 g" />
                <option value="ST-LIN-101 · Bath towel 70 x 140 cm" />
                <option value="ST-LIN-102 · Hand towel 50 x 90 cm" />
                <option value="ST-LIN-103 · Bath mat 50 x 80 cm" />
                <option value="ST-LIN-111 · Bathrobe (L / XL)" />
                <option value="ST-LIN-113 · Bed sheet king 274 x 297 cm" />
                <option value="ST-LIN-114 · Bed sheet single 183 x 274 cm" />
                <option value="ST-LIN-115 · Duvet cover king" />
                <option value="ST-LIN-116 · Duvet king (microfibre)" />
                <option value="ST-LIN-117 · Pillow case 50 x 75 cm" />
                <option value="ST-LIN-118 · Pillow (hollow fibre)" />
                <option value="ST-LIN-119 · Mattress protector king" />
                <option value="ST-LIN-120 · Face towel 30 x 30 cm" />
                <option value="ST-LIN-121 · Pool towel 90 x 180 cm" />
                <option value="ST-LIN-122 · Table cloth 180 x 180 cm" />
                <option value="ST-LIN-123 · Napkin 50 x 50 cm" />
                <option value="ST-LIN-125 · Kitchen apron (pool)" />
                <option value="ST-LIN-126 · Spa sheet single" />
                <option value="ST-LIN-127 · Bath towel – beige (old design)" />
                <option value="ST-PRN-001 · Key card RFID (blank)" />
                <option value="ST-PRN-002 · Registration card pad (100 sheets)" />
                <option value="ST-PRN-003 · Letterhead A4 (500 sheets)" />
                <option value="ST-PRN-004 · POS paper roll 80 mm" />
                <option value="ST-PRN-005 · Ball pen blue" />
                <option value="ST-PRN-006 · A4 copier paper 75 GSM (ream)" />
                <option value="ST-FUL-001 · Diesel (DG sets)" />
                <option value="ST-FUL-002 · LPG cylinder 19 kg (commercial)" />
                <option value="ST-ENG-009 · Bedside switch panel" />
                <option value="ST-ENG-018 · Refrigerant R-410A (kg)" />
                <option value="ST-ENG-027 · Flush valve kit" />
                <option value="ST-ENG-031 · Thermostat (VRV wired)" />
                <option value="ST-ENG-035 · Mixer cartridge 35 mm" />
                <option value="ST-ENG-036 · Solar / heat pump thermostat" />
                <option value="ST-ENG-044 · AA batteries (4)" />
                <option value="ST-ENG-047 · LED lamp 7 W E14" />
                <option value="ST-ENG-052 · Wi-Fi access point" />
                <option value="ST-ENG-061 · Curtain track bracket" />
                <option value="ST-ENG-074 · Gypsum board 6 x 4 ft" />
                <option value="ST-ENG-081 · Door gasket – cold room (m)" />
                <option value="ST-ENG-090 · Anti-skid floor tile 300 mm" />
                <option value="ST-ENG-101 · LED panel 2 x 2 ft 36 W" />
                <option value="ST-ENG-102 · Contactor 32 A 3-pole" />
                <option value="ST-ENG-103 · Brass burner 4 inch" />
                <option value="ST-ENG-104 · Thermocouple" />
                <option value="ST-ENG-105 · AHU pre-filter 24 x 24 in" />
                <option value="ST-ENG-106 · MCB 16 A 2-pole" />
                <option value="ST-ENG-107 · Ball valve 1/2 in (brass)" />
              </datalist>
              <form className="prs-form" action="/stores-setup/sts-05-reorder-and-par-levels/#saved" method="get">
                <nav className="hv vn-views" aria-label="Stores">
                  <a className="hv__v" href="#v-all" data-v="v-all">
                    <span>{"All stores"}</span>
                    <b className="num">{"111"}</b>
                  </a>
                  <a className="hv__v" href="#v-main" data-v="v-main">
                    <span>{"Main store"}</span>
                    <b className="num">{"40"}</b>
                  </a>
                  <a className="hv__v" href="#v-kit" data-v="v-kit">
                    <span>{"Kitchen store"}</span>
                    <b className="num">{"14"}</b>
                  </a>
                  <a className="hv__v" href="#v-bar" data-v="v-bar">
                    <span>{"Bar store"}</span>
                    <b className="num">{"11"}</b>
                  </a>
                  <a className="hv__v" href="#v-mbr" data-v="v-mbr">
                    <span>{"Minibar store"}</span>
                    <b className="num">{"14"}</b>
                  </a>
                  <a className="hv__v" href="#v-eng" data-v="v-eng">
                    <span>{"Engineering store"}</span>
                    <b className="num">{"20"}</b>
                  </a>
                  <a className="hv__v" href="#v-hkl" data-v="v-hkl">
                    <span>{"Housekeeping / linen store"}</span>
                    <b className="num">{"12"}</b>
                  </a>
                </nav>
                <div className="pgw">
                  <div className="s-scroll">
                    <table className="dt__table" data-code="STS-05-list" data-nosort="" data-mc="">
                      <caption className="sr-only">{"Reorder, minimum, maximum and par levels by store and item"}</caption>
                      <thead>
                        <tr>
                          <th scope="col">{"Item"}</th>
                          <th scope="col">{"Unit"}</th>
                          <th scope="col" className="dt__th--right">{"Reorder level"}</th>
                          <th scope="col" className="dt__th--right">{"Minimum"}</th>
                          <th scope="col" className="dt__th--right">{"Maximum"}</th>
                          <th scope="col" className="dt__th--right">{"Par"}</th>
                          <th scope="col" className="dt__th--right">{"Lead time (days)"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="lv-row lv-row--main lv-row--new" id="l-main-stgro041">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stgro041">{"Black tea powder (CTC) 1 kg"}</a>
                            <span className="fd-sub">{"ST-GRO-041 · Main store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"packet"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-main-stgro041">{"Reorder level – Black tea powder (CTC) 1 kg"}</label>
                            <input className="field__input prs-n" id="lr-main-stgro041" name="lr-main-stgro041" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"40"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-main-stgro041">{"Minimum – Black tea powder (CTC) 1 kg"}</label>
                            <input className="field__input prs-n" id="ln-main-stgro041" name="ln-main-stgro041" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"25"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-main-stgro041">{"Maximum – Black tea powder (CTC) 1 kg"}</label>
                            <input className="field__input prs-n" id="lx-main-stgro041" name="lx-main-stgro041" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"120"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-main-stgro041">{"Par – Black tea powder (CTC) 1 kg"}</label>
                            <input className="field__input prs-n" id="lp-main-stgro041" name="lp-main-stgro041" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={""} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-main-stgro041">{"Lead time (days) – Black tea powder (CTC) 1 kg"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-main-stgro041" name="ll-main-stgro041" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"3"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--main" id="l-main-stgro031">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stgro031">{"Basmati rice 1121"}</a>
                            <span className="fd-sub">{"ST-GRO-031 · Main store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"kg"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-main-stgro031">{"Reorder level – Basmati rice 1121"}</label>
                            <input className="field__input prs-n" id="lr-main-stgro031" name="lr-main-stgro031" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"150"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-main-stgro031">{"Minimum – Basmati rice 1121"}</label>
                            <input className="field__input prs-n" id="ln-main-stgro031" name="ln-main-stgro031" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"100"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-main-stgro031">{"Maximum – Basmati rice 1121"}</label>
                            <input className="field__input prs-n" id="lx-main-stgro031" name="lx-main-stgro031" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"600"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-main-stgro031">{"Par – Basmati rice 1121"}</label>
                            <input className="field__input prs-n" id="lp-main-stgro031" name="lp-main-stgro031" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={""} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-main-stgro031">{"Lead time (days) – Basmati rice 1121"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-main-stgro031" name="ll-main-stgro031" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"3"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--main" id="l-main-stgro032">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stgro032">{"Toor dal"}</a>
                            <span className="fd-sub">{"ST-GRO-032 · Main store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"kg"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-main-stgro032">{"Reorder level – Toor dal"}</label>
                            <input className="field__input prs-n" id="lr-main-stgro032" name="lr-main-stgro032" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"60"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-main-stgro032">{"Minimum – Toor dal"}</label>
                            <input className="field__input prs-n" id="ln-main-stgro032" name="ln-main-stgro032" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"40"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-main-stgro032">{"Maximum – Toor dal"}</label>
                            <input className="field__input prs-n" id="lx-main-stgro032" name="lx-main-stgro032" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"250"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-main-stgro032">{"Par – Toor dal"}</label>
                            <input className="field__input prs-n" id="lp-main-stgro032" name="lp-main-stgro032" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={""} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-main-stgro032">{"Lead time (days) – Toor dal"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-main-stgro032" name="ll-main-stgro032" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"3"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--main" id="l-main-stgro033">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stgro033">{"Sunflower oil 15 litre tin"}</a>
                            <span className="fd-sub">{"ST-GRO-033 · Main store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"can"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-main-stgro033">{"Reorder level – Sunflower oil 15 litre tin"}</label>
                            <input className="field__input prs-n" id="lr-main-stgro033" name="lr-main-stgro033" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"8"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-main-stgro033">{"Minimum – Sunflower oil 15 litre tin"}</label>
                            <input className="field__input prs-n" id="ln-main-stgro033" name="ln-main-stgro033" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"5"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-main-stgro033">{"Maximum – Sunflower oil 15 litre tin"}</label>
                            <input className="field__input prs-n" id="lx-main-stgro033" name="lx-main-stgro033" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"30"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-main-stgro033">{"Par – Sunflower oil 15 litre tin"}</label>
                            <input className="field__input prs-n" id="lp-main-stgro033" name="lp-main-stgro033" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={""} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-main-stgro033">{"Lead time (days) – Sunflower oil 15 litre tin"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-main-stgro033" name="ll-main-stgro033" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"3"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--main" id="l-main-stgro034">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stgro034">{"Sugar"}</a>
                            <span className="fd-sub">{"ST-GRO-034 · Main store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"kg"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-main-stgro034">{"Reorder level – Sugar"}</label>
                            <input className="field__input prs-n" id="lr-main-stgro034" name="lr-main-stgro034" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"80"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-main-stgro034">{"Minimum – Sugar"}</label>
                            <input className="field__input prs-n" id="ln-main-stgro034" name="ln-main-stgro034" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"50"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-main-stgro034">{"Maximum – Sugar"}</label>
                            <input className="field__input prs-n" id="lx-main-stgro034" name="lx-main-stgro034" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"300"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-main-stgro034">{"Par – Sugar"}</label>
                            <input className="field__input prs-n" id="lp-main-stgro034" name="lp-main-stgro034" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={""} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-main-stgro034">{"Lead time (days) – Sugar"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-main-stgro034" name="ll-main-stgro034" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"3"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--main" id="l-main-stgro035">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stgro035">{"Jaggery"}</a>
                            <span className="fd-sub">{"ST-GRO-035 · Main store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"kg"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-main-stgro035">{"Reorder level – Jaggery"}</label>
                            <input className="field__input prs-n" id="lr-main-stgro035" name="lr-main-stgro035" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"20"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-main-stgro035">{"Minimum – Jaggery"}</label>
                            <input className="field__input prs-n" id="ln-main-stgro035" name="ln-main-stgro035" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"10"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-main-stgro035">{"Maximum – Jaggery"}</label>
                            <input className="field__input prs-n" id="lx-main-stgro035" name="lx-main-stgro035" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"80"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-main-stgro035">{"Par – Jaggery"}</label>
                            <input className="field__input prs-n" id="lp-main-stgro035" name="lp-main-stgro035" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={""} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-main-stgro035">{"Lead time (days) – Jaggery"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-main-stgro035" name="ll-main-stgro035" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"3"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--main" id="l-main-stgro036">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stgro036">{"Coconut oil 15 litre tin"}</a>
                            <span className="fd-sub">{"ST-GRO-036 · Main store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"can"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-main-stgro036">{"Reorder level – Coconut oil 15 litre tin"}</label>
                            <input className="field__input prs-n" id="lr-main-stgro036" name="lr-main-stgro036" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"6"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-main-stgro036">{"Minimum – Coconut oil 15 litre tin"}</label>
                            <input className="field__input prs-n" id="ln-main-stgro036" name="ln-main-stgro036" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"4"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-main-stgro036">{"Maximum – Coconut oil 15 litre tin"}</label>
                            <input className="field__input prs-n" id="lx-main-stgro036" name="lx-main-stgro036" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"20"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-main-stgro036">{"Par – Coconut oil 15 litre tin"}</label>
                            <input className="field__input prs-n" id="lp-main-stgro036" name="lp-main-stgro036" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={""} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-main-stgro036">{"Lead time (days) – Coconut oil 15 litre tin"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-main-stgro036" name="ll-main-stgro036" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"3"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--main" id="l-main-stgro037">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stgro037">{"Wheat flour (atta)"}</a>
                            <span className="fd-sub">{"ST-GRO-037 · Main store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"kg"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-main-stgro037">{"Reorder level – Wheat flour (atta)"}</label>
                            <input className="field__input prs-n" id="lr-main-stgro037" name="lr-main-stgro037" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"60"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-main-stgro037">{"Minimum – Wheat flour (atta)"}</label>
                            <input className="field__input prs-n" id="ln-main-stgro037" name="ln-main-stgro037" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"40"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-main-stgro037">{"Maximum – Wheat flour (atta)"}</label>
                            <input className="field__input prs-n" id="lx-main-stgro037" name="lx-main-stgro037" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"200"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-main-stgro037">{"Par – Wheat flour (atta)"}</label>
                            <input className="field__input prs-n" id="lp-main-stgro037" name="lp-main-stgro037" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={""} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-main-stgro037">{"Lead time (days) – Wheat flour (atta)"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-main-stgro037" name="ll-main-stgro037" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"3"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--main" id="l-main-stgro038">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stgro038">{"Matta rice (Kerala red rice)"}</a>
                            <span className="fd-sub">{"ST-GRO-038 · Main store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"kg"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-main-stgro038">{"Reorder level – Matta rice (Kerala red rice)"}</label>
                            <input className="field__input prs-n" id="lr-main-stgro038" name="lr-main-stgro038" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"50"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-main-stgro038">{"Minimum – Matta rice (Kerala red rice)"}</label>
                            <input className="field__input prs-n" id="ln-main-stgro038" name="ln-main-stgro038" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"30"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-main-stgro038">{"Maximum – Matta rice (Kerala red rice)"}</label>
                            <input className="field__input prs-n" id="lx-main-stgro038" name="lx-main-stgro038" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"200"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-main-stgro038">{"Par – Matta rice (Kerala red rice)"}</label>
                            <input className="field__input prs-n" id="lp-main-stgro038" name="lp-main-stgro038" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={""} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-main-stgro038">{"Lead time (days) – Matta rice (Kerala red rice)"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-main-stgro038" name="ll-main-stgro038" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"3"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--main" id="l-main-stgro039">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stgro039">{"Black pepper"}</a>
                            <span className="fd-sub">{"ST-GRO-039 · Main store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"kg"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-main-stgro039">{"Reorder level – Black pepper"}</label>
                            <input className="field__input prs-n" id="lr-main-stgro039" name="lr-main-stgro039" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"5"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-main-stgro039">{"Minimum – Black pepper"}</label>
                            <input className="field__input prs-n" id="ln-main-stgro039" name="ln-main-stgro039" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"3"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-main-stgro039">{"Maximum – Black pepper"}</label>
                            <input className="field__input prs-n" id="lx-main-stgro039" name="lx-main-stgro039" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"20"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-main-stgro039">{"Par – Black pepper"}</label>
                            <input className="field__input prs-n" id="lp-main-stgro039" name="lp-main-stgro039" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={""} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-main-stgro039">{"Lead time (days) – Black pepper"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-main-stgro039" name="ll-main-stgro039" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"7"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--main" id="l-main-sthkc401">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-sthkc401">{"Bathroom cleaner 5 litre"}</a>
                            <span className="fd-sub">{"ST-HKC-401 · Main store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"can"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-main-sthkc401">{"Reorder level – Bathroom cleaner 5 litre"}</label>
                            <input className="field__input prs-n" id="lr-main-sthkc401" name="lr-main-sthkc401" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"12"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-main-sthkc401">{"Minimum – Bathroom cleaner 5 litre"}</label>
                            <input className="field__input prs-n" id="ln-main-sthkc401" name="ln-main-sthkc401" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"8"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-main-sthkc401">{"Maximum – Bathroom cleaner 5 litre"}</label>
                            <input className="field__input prs-n" id="lx-main-sthkc401" name="lx-main-sthkc401" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"40"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-main-sthkc401">{"Par – Bathroom cleaner 5 litre"}</label>
                            <input className="field__input prs-n" id="lp-main-sthkc401" name="lp-main-sthkc401" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={""} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-main-sthkc401">{"Lead time (days) – Bathroom cleaner 5 litre"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-main-sthkc401" name="ll-main-sthkc401" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"5"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--main" id="l-main-sthkc402">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-sthkc402">{"Glass cleaner 5 litre"}</a>
                            <span className="fd-sub">{"ST-HKC-402 · Main store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"can"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-main-sthkc402">{"Reorder level – Glass cleaner 5 litre"}</label>
                            <input className="field__input prs-n" id="lr-main-sthkc402" name="lr-main-sthkc402" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"8"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-main-sthkc402">{"Minimum – Glass cleaner 5 litre"}</label>
                            <input className="field__input prs-n" id="ln-main-sthkc402" name="ln-main-sthkc402" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"5"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-main-sthkc402">{"Maximum – Glass cleaner 5 litre"}</label>
                            <input className="field__input prs-n" id="lx-main-sthkc402" name="lx-main-sthkc402" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"30"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-main-sthkc402">{"Par – Glass cleaner 5 litre"}</label>
                            <input className="field__input prs-n" id="lp-main-sthkc402" name="lp-main-sthkc402" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={""} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-main-sthkc402">{"Lead time (days) – Glass cleaner 5 litre"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-main-sthkc402" name="ll-main-sthkc402" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"5"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--main" id="l-main-sthkc403">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-sthkc403">{"Floor cleaner 5 litre"}</a>
                            <span className="fd-sub">{"ST-HKC-403 · Main store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"can"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-main-sthkc403">{"Reorder level – Floor cleaner 5 litre"}</label>
                            <input className="field__input prs-n" id="lr-main-sthkc403" name="lr-main-sthkc403" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"10"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-main-sthkc403">{"Minimum – Floor cleaner 5 litre"}</label>
                            <input className="field__input prs-n" id="ln-main-sthkc403" name="ln-main-sthkc403" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"6"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-main-sthkc403">{"Maximum – Floor cleaner 5 litre"}</label>
                            <input className="field__input prs-n" id="lx-main-sthkc403" name="lx-main-sthkc403" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"40"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-main-sthkc403">{"Par – Floor cleaner 5 litre"}</label>
                            <input className="field__input prs-n" id="lp-main-sthkc403" name="lp-main-sthkc403" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={""} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-main-sthkc403">{"Lead time (days) – Floor cleaner 5 litre"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-main-sthkc403" name="ll-main-sthkc403" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"5"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--main" id="l-main-sthkc404">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-sthkc404">{"Liquid detergent 20 litre"}</a>
                            <span className="fd-sub">{"ST-HKC-404 · Main store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"can"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-main-sthkc404">{"Reorder level – Liquid detergent 20 litre"}</label>
                            <input className="field__input prs-n" id="lr-main-sthkc404" name="lr-main-sthkc404" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"4"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-main-sthkc404">{"Minimum – Liquid detergent 20 litre"}</label>
                            <input className="field__input prs-n" id="ln-main-sthkc404" name="ln-main-sthkc404" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"2"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-main-sthkc404">{"Maximum – Liquid detergent 20 litre"}</label>
                            <input className="field__input prs-n" id="lx-main-sthkc404" name="lx-main-sthkc404" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"12"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-main-sthkc404">{"Par – Liquid detergent 20 litre"}</label>
                            <input className="field__input prs-n" id="lp-main-sthkc404" name="lp-main-sthkc404" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={""} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-main-sthkc404">{"Lead time (days) – Liquid detergent 20 litre"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-main-sthkc404" name="ll-main-sthkc404" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"5"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--main" id="l-main-sthkc405">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-sthkc405">{"Fabric softener 20 litre"}</a>
                            <span className="fd-sub">{"ST-HKC-405 · Main store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"can"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-main-sthkc405">{"Reorder level – Fabric softener 20 litre"}</label>
                            <input className="field__input prs-n" id="lr-main-sthkc405" name="lr-main-sthkc405" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"3"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-main-sthkc405">{"Minimum – Fabric softener 20 litre"}</label>
                            <input className="field__input prs-n" id="ln-main-sthkc405" name="ln-main-sthkc405" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"2"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-main-sthkc405">{"Maximum – Fabric softener 20 litre"}</label>
                            <input className="field__input prs-n" id="lx-main-sthkc405" name="lx-main-sthkc405" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"10"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-main-sthkc405">{"Par – Fabric softener 20 litre"}</label>
                            <input className="field__input prs-n" id="lp-main-sthkc405" name="lp-main-sthkc405" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={""} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-main-sthkc405">{"Lead time (days) – Fabric softener 20 litre"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-main-sthkc405" name="ll-main-sthkc405" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"5"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--main" id="l-main-stsup301">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stsup301">{"Toilet roll"}</a>
                            <span className="fd-sub">{"ST-SUP-301 · Main store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"roll"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-main-stsup301">{"Reorder level – Toilet roll"}</label>
                            <input className="field__input prs-n" id="lr-main-stsup301" name="lr-main-stsup301" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"200"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-main-stsup301">{"Minimum – Toilet roll"}</label>
                            <input className="field__input prs-n" id="ln-main-stsup301" name="ln-main-stsup301" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"100"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-main-stsup301">{"Maximum – Toilet roll"}</label>
                            <input className="field__input prs-n" id="lx-main-stsup301" name="lx-main-stsup301" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"900"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-main-stsup301">{"Par – Toilet roll"}</label>
                            <input className="field__input prs-n" id="lp-main-stsup301" name="lp-main-stsup301" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={""} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-main-stsup301">{"Lead time (days) – Toilet roll"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-main-stsup301" name="ll-main-stsup301" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"5"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--main" id="l-main-stsup302">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stsup302">{"Facial tissue box"}</a>
                            <span className="fd-sub">{"ST-SUP-302 · Main store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"box"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-main-stsup302">{"Reorder level – Facial tissue box"}</label>
                            <input className="field__input prs-n" id="lr-main-stsup302" name="lr-main-stsup302" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"72"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-main-stsup302">{"Minimum – Facial tissue box"}</label>
                            <input className="field__input prs-n" id="ln-main-stsup302" name="ln-main-stsup302" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"36"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-main-stsup302">{"Maximum – Facial tissue box"}</label>
                            <input className="field__input prs-n" id="lx-main-stsup302" name="lx-main-stsup302" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"360"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-main-stsup302">{"Par – Facial tissue box"}</label>
                            <input className="field__input prs-n" id="lp-main-stsup302" name="lp-main-stsup302" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={""} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-main-stsup302">{"Lead time (days) – Facial tissue box"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-main-stsup302" name="ll-main-stsup302" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"5"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--main" id="l-main-stsup303">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stsup303">{"Garbage bag 19 x 21 in"}</a>
                            <span className="fd-sub">{"ST-SUP-303 · Main store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"nos"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-main-stsup303">{"Reorder level – Garbage bag 19 x 21 in"}</label>
                            <input className="field__input prs-n" id="lr-main-stsup303" name="lr-main-stsup303" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"600"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-main-stsup303">{"Minimum – Garbage bag 19 x 21 in"}</label>
                            <input className="field__input prs-n" id="ln-main-stsup303" name="ln-main-stsup303" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"300"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-main-stsup303">{"Maximum – Garbage bag 19 x 21 in"}</label>
                            <input className="field__input prs-n" id="lx-main-stsup303" name="lx-main-stsup303" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"2400"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-main-stsup303">{"Par – Garbage bag 19 x 21 in"}</label>
                            <input className="field__input prs-n" id="lp-main-stsup303" name="lp-main-stsup303" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={""} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-main-stsup303">{"Lead time (days) – Garbage bag 19 x 21 in"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-main-stsup303" name="ll-main-stsup303" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"5"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--main" id="l-main-stamn201">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stamn201">{"Shampoo 30 ml bottle"}</a>
                            <span className="fd-sub">{"ST-AMN-201 · Main store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"bottle"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-main-stamn201">{"Reorder level – Shampoo 30 ml bottle"}</label>
                            <input className="field__input prs-n" id="lr-main-stamn201" name="lr-main-stamn201" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"1600"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-main-stamn201">{"Minimum – Shampoo 30 ml bottle"}</label>
                            <input className="field__input prs-n" id="ln-main-stamn201" name="ln-main-stamn201" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"800"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-main-stamn201">{"Maximum – Shampoo 30 ml bottle"}</label>
                            <input className="field__input prs-n" id="lx-main-stamn201" name="lx-main-stamn201" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"4000"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-main-stamn201">{"Par – Shampoo 30 ml bottle"}</label>
                            <input className="field__input prs-n" id="lp-main-stamn201" name="lp-main-stamn201" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={""} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-main-stamn201">{"Lead time (days) – Shampoo 30 ml bottle"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-main-stamn201" name="ll-main-stamn201" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"7"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--main" id="l-main-stamn202">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stamn202">{"Conditioner 30 ml bottle"}</a>
                            <span className="fd-sub">{"ST-AMN-202 · Main store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"bottle"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-main-stamn202">{"Reorder level – Conditioner 30 ml bottle"}</label>
                            <input className="field__input prs-n" id="lr-main-stamn202" name="lr-main-stamn202" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"1600"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-main-stamn202">{"Minimum – Conditioner 30 ml bottle"}</label>
                            <input className="field__input prs-n" id="ln-main-stamn202" name="ln-main-stamn202" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"800"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-main-stamn202">{"Maximum – Conditioner 30 ml bottle"}</label>
                            <input className="field__input prs-n" id="lx-main-stamn202" name="lx-main-stamn202" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"4000"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-main-stamn202">{"Par – Conditioner 30 ml bottle"}</label>
                            <input className="field__input prs-n" id="lp-main-stamn202" name="lp-main-stamn202" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={""} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-main-stamn202">{"Lead time (days) – Conditioner 30 ml bottle"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-main-stamn202" name="ll-main-stamn202" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"7"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--main" id="l-main-stamn203">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stamn203">{"Body wash 30 ml bottle"}</a>
                            <span className="fd-sub">{"ST-AMN-203 · Main store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"bottle"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-main-stamn203">{"Reorder level – Body wash 30 ml bottle"}</label>
                            <input className="field__input prs-n" id="lr-main-stamn203" name="lr-main-stamn203" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"1600"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-main-stamn203">{"Minimum – Body wash 30 ml bottle"}</label>
                            <input className="field__input prs-n" id="ln-main-stamn203" name="ln-main-stamn203" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"800"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-main-stamn203">{"Maximum – Body wash 30 ml bottle"}</label>
                            <input className="field__input prs-n" id="lx-main-stamn203" name="lx-main-stamn203" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"4000"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-main-stamn203">{"Par – Body wash 30 ml bottle"}</label>
                            <input className="field__input prs-n" id="lp-main-stamn203" name="lp-main-stamn203" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={""} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-main-stamn203">{"Lead time (days) – Body wash 30 ml bottle"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-main-stamn203" name="ll-main-stamn203" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"7"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--main" id="l-main-stamn204">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stamn204">{"Soap 40 g"}</a>
                            <span className="fd-sub">{"ST-AMN-204 · Main store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"nos"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-main-stamn204">{"Reorder level – Soap 40 g"}</label>
                            <input className="field__input prs-n" id="lr-main-stamn204" name="lr-main-stamn204" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"2000"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-main-stamn204">{"Minimum – Soap 40 g"}</label>
                            <input className="field__input prs-n" id="ln-main-stamn204" name="ln-main-stamn204" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"1000"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-main-stamn204">{"Maximum – Soap 40 g"}</label>
                            <input className="field__input prs-n" id="lx-main-stamn204" name="lx-main-stamn204" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"5000"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-main-stamn204">{"Par – Soap 40 g"}</label>
                            <input className="field__input prs-n" id="lp-main-stamn204" name="lp-main-stamn204" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={""} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-main-stamn204">{"Lead time (days) – Soap 40 g"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-main-stamn204" name="ll-main-stamn204" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"7"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--main" id="l-main-stamn205">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stamn205">{"Dental kit"}</a>
                            <span className="fd-sub">{"ST-AMN-205 · Main store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"kit"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-main-stamn205">{"Reorder level – Dental kit"}</label>
                            <input className="field__input prs-n" id="lr-main-stamn205" name="lr-main-stamn205" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"600"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-main-stamn205">{"Minimum – Dental kit"}</label>
                            <input className="field__input prs-n" id="ln-main-stamn205" name="ln-main-stamn205" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"300"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-main-stamn205">{"Maximum – Dental kit"}</label>
                            <input className="field__input prs-n" id="lx-main-stamn205" name="lx-main-stamn205" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"1500"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-main-stamn205">{"Par – Dental kit"}</label>
                            <input className="field__input prs-n" id="lp-main-stamn205" name="lp-main-stamn205" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={""} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-main-stamn205">{"Lead time (days) – Dental kit"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-main-stamn205" name="ll-main-stamn205" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"7"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--main" id="l-main-stamn211">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stamn211">{"Slippers (pair)"}</a>
                            <span className="fd-sub">{"ST-AMN-211 · Main store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"pair"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-main-stamn211">{"Reorder level – Slippers (pair)"}</label>
                            <input className="field__input prs-n" id="lr-main-stamn211" name="lr-main-stamn211" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"300"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-main-stamn211">{"Minimum – Slippers (pair)"}</label>
                            <input className="field__input prs-n" id="ln-main-stamn211" name="ln-main-stamn211" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"150"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-main-stamn211">{"Maximum – Slippers (pair)"}</label>
                            <input className="field__input prs-n" id="lx-main-stamn211" name="lx-main-stamn211" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"900"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-main-stamn211">{"Par – Slippers (pair)"}</label>
                            <input className="field__input prs-n" id="lp-main-stamn211" name="lp-main-stamn211" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={""} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-main-stamn211">{"Lead time (days) – Slippers (pair)"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-main-stamn211" name="ll-main-stamn211" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"7"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--main" id="l-main-stamn213">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stamn213">{"Tea / coffee tray set"}</a>
                            <span className="fd-sub">{"ST-AMN-213 · Main store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"kit"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-main-stamn213">{"Reorder level – Tea / coffee tray set"}</label>
                            <input className="field__input prs-n" id="lr-main-stamn213" name="lr-main-stamn213" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"400"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-main-stamn213">{"Minimum – Tea / coffee tray set"}</label>
                            <input className="field__input prs-n" id="ln-main-stamn213" name="ln-main-stamn213" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"200"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-main-stamn213">{"Maximum – Tea / coffee tray set"}</label>
                            <input className="field__input prs-n" id="lx-main-stamn213" name="lx-main-stamn213" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"1000"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-main-stamn213">{"Par – Tea / coffee tray set"}</label>
                            <input className="field__input prs-n" id="lp-main-stamn213" name="lp-main-stamn213" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={""} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-main-stamn213">{"Lead time (days) – Tea / coffee tray set"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-main-stamn213" name="ll-main-stamn213" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"7"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--main" id="l-main-stprn001">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stprn001">{"Key card RFID (blank)"}</a>
                            <span className="fd-sub">{"ST-PRN-001 · Main store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"nos"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-main-stprn001">{"Reorder level – Key card RFID (blank)"}</label>
                            <input className="field__input prs-n" id="lr-main-stprn001" name="lr-main-stprn001" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"1000"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-main-stprn001">{"Minimum – Key card RFID (blank)"}</label>
                            <input className="field__input prs-n" id="ln-main-stprn001" name="ln-main-stprn001" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"500"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-main-stprn001">{"Maximum – Key card RFID (blank)"}</label>
                            <input className="field__input prs-n" id="lx-main-stprn001" name="lx-main-stprn001" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"3000"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-main-stprn001">{"Par – Key card RFID (blank)"}</label>
                            <input className="field__input prs-n" id="lp-main-stprn001" name="lp-main-stprn001" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={""} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-main-stprn001">{"Lead time (days) – Key card RFID (blank)"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-main-stprn001" name="ll-main-stprn001" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"10"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--main" id="l-main-stprn004">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stprn004">{"POS paper roll 80 mm"}</a>
                            <span className="fd-sub">{"ST-PRN-004 · Main store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"roll"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-main-stprn004">{"Reorder level – POS paper roll 80 mm"}</label>
                            <input className="field__input prs-n" id="lr-main-stprn004" name="lr-main-stprn004" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"100"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-main-stprn004">{"Minimum – POS paper roll 80 mm"}</label>
                            <input className="field__input prs-n" id="ln-main-stprn004" name="ln-main-stprn004" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"50"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-main-stprn004">{"Maximum – POS paper roll 80 mm"}</label>
                            <input className="field__input prs-n" id="lx-main-stprn004" name="lx-main-stprn004" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"300"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-main-stprn004">{"Par – POS paper roll 80 mm"}</label>
                            <input className="field__input prs-n" id="lp-main-stprn004" name="lp-main-stprn004" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={""} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-main-stprn004">{"Lead time (days) – POS paper roll 80 mm"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-main-stprn004" name="ll-main-stprn004" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"7"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--main" id="l-main-stful001">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stful001">{"Diesel (DG sets)"}</a>
                            <span className="fd-sub">{"ST-FUL-001 · Main store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"litre"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-main-stful001">{"Reorder level – Diesel (DG sets)"}</label>
                            <input className="field__input prs-n" id="lr-main-stful001" name="lr-main-stful001" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"3000"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-main-stful001">{"Minimum – Diesel (DG sets)"}</label>
                            <input className="field__input prs-n" id="ln-main-stful001" name="ln-main-stful001" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"2000"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-main-stful001">{"Maximum – Diesel (DG sets)"}</label>
                            <input className="field__input prs-n" id="lx-main-stful001" name="lx-main-stful001" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"12000"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-main-stful001">{"Par – Diesel (DG sets)"}</label>
                            <input className="field__input prs-n" id="lp-main-stful001" name="lp-main-stful001" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={""} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-main-stful001">{"Lead time (days) – Diesel (DG sets)"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-main-stful001" name="ll-main-stful001" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"2"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--main" id="l-main-stful002">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stful002">{"LPG cylinder 19 kg (commercial)"}</a>
                            <span className="fd-sub">{"ST-FUL-002 · Main store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"can"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-main-stful002">{"Reorder level – LPG cylinder 19 kg (commercial)"}</label>
                            <input className="field__input prs-n" id="lr-main-stful002" name="lr-main-stful002" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"10"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-main-stful002">{"Minimum – LPG cylinder 19 kg (commercial)"}</label>
                            <input className="field__input prs-n" id="ln-main-stful002" name="ln-main-stful002" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"6"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-main-stful002">{"Maximum – LPG cylinder 19 kg (commercial)"}</label>
                            <input className="field__input prs-n" id="lx-main-stful002" name="lx-main-stful002" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"24"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-main-stful002">{"Par – LPG cylinder 19 kg (commercial)"}</label>
                            <input className="field__input prs-n" id="lp-main-stful002" name="lp-main-stful002" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={""} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-main-stful002">{"Lead time (days) – LPG cylinder 19 kg (commercial)"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-main-stful002" name="ll-main-stful002" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"3"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--kit" id="l-kit-stfrp001">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stfrp001">{"Onion"}</a>
                            <span className="fd-sub">{"ST-FRP-001 · Kitchen store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"kg"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-kit-stfrp001">{"Reorder level – Onion"}</label>
                            <input className="field__input prs-n" id="lr-kit-stfrp001" name="lr-kit-stfrp001" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"40"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-kit-stfrp001">{"Minimum – Onion"}</label>
                            <input className="field__input prs-n" id="ln-kit-stfrp001" name="ln-kit-stfrp001" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"25"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-kit-stfrp001">{"Maximum – Onion"}</label>
                            <input className="field__input prs-n" id="lx-kit-stfrp001" name="lx-kit-stfrp001" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"120"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-kit-stfrp001">{"Par – Onion"}</label>
                            <input className="field__input prs-n" id="lp-kit-stfrp001" name="lp-kit-stfrp001" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={"80"} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-kit-stfrp001">{"Lead time (days) – Onion"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-kit-stfrp001" name="ll-kit-stfrp001" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"1"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--kit" id="l-kit-stfrp002">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stfrp002">{"Tomato"}</a>
                            <span className="fd-sub">{"ST-FRP-002 · Kitchen store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"kg"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-kit-stfrp002">{"Reorder level – Tomato"}</label>
                            <input className="field__input prs-n" id="lr-kit-stfrp002" name="lr-kit-stfrp002" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"25"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-kit-stfrp002">{"Minimum – Tomato"}</label>
                            <input className="field__input prs-n" id="ln-kit-stfrp002" name="ln-kit-stfrp002" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"15"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-kit-stfrp002">{"Maximum – Tomato"}</label>
                            <input className="field__input prs-n" id="lx-kit-stfrp002" name="lx-kit-stfrp002" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"80"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-kit-stfrp002">{"Par – Tomato"}</label>
                            <input className="field__input prs-n" id="lp-kit-stfrp002" name="lp-kit-stfrp002" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={"50"} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-kit-stfrp002">{"Lead time (days) – Tomato"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-kit-stfrp002" name="ll-kit-stfrp002" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"1"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--kit" id="l-kit-stfrp003">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stfrp003">{"Potato"}</a>
                            <span className="fd-sub">{"ST-FRP-003 · Kitchen store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"kg"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-kit-stfrp003">{"Reorder level – Potato"}</label>
                            <input className="field__input prs-n" id="lr-kit-stfrp003" name="lr-kit-stfrp003" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"40"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-kit-stfrp003">{"Minimum – Potato"}</label>
                            <input className="field__input prs-n" id="ln-kit-stfrp003" name="ln-kit-stfrp003" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"25"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-kit-stfrp003">{"Maximum – Potato"}</label>
                            <input className="field__input prs-n" id="lx-kit-stfrp003" name="lx-kit-stfrp003" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"120"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-kit-stfrp003">{"Par – Potato"}</label>
                            <input className="field__input prs-n" id="lp-kit-stfrp003" name="lp-kit-stfrp003" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={"80"} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-kit-stfrp003">{"Lead time (days) – Potato"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-kit-stfrp003" name="ll-kit-stfrp003" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"1"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--kit" id="l-kit-stfrp004">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stfrp004">{"Green chilli"}</a>
                            <span className="fd-sub">{"ST-FRP-004 · Kitchen store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"kg"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-kit-stfrp004">{"Reorder level – Green chilli"}</label>
                            <input className="field__input prs-n" id="lr-kit-stfrp004" name="lr-kit-stfrp004" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"4"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-kit-stfrp004">{"Minimum – Green chilli"}</label>
                            <input className="field__input prs-n" id="ln-kit-stfrp004" name="ln-kit-stfrp004" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"2"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-kit-stfrp004">{"Maximum – Green chilli"}</label>
                            <input className="field__input prs-n" id="lx-kit-stfrp004" name="lx-kit-stfrp004" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"12"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-kit-stfrp004">{"Par – Green chilli"}</label>
                            <input className="field__input prs-n" id="lp-kit-stfrp004" name="lp-kit-stfrp004" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={"8"} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-kit-stfrp004">{"Lead time (days) – Green chilli"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-kit-stfrp004" name="ll-kit-stfrp004" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"1"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--kit" id="l-kit-stfrp005">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stfrp005">{"Coconut"}</a>
                            <span className="fd-sub">{"ST-FRP-005 · Kitchen store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"nos"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-kit-stfrp005">{"Reorder level – Coconut"}</label>
                            <input className="field__input prs-n" id="lr-kit-stfrp005" name="lr-kit-stfrp005" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"60"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-kit-stfrp005">{"Minimum – Coconut"}</label>
                            <input className="field__input prs-n" id="ln-kit-stfrp005" name="ln-kit-stfrp005" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"40"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-kit-stfrp005">{"Maximum – Coconut"}</label>
                            <input className="field__input prs-n" id="lx-kit-stfrp005" name="lx-kit-stfrp005" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"200"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-kit-stfrp005">{"Par – Coconut"}</label>
                            <input className="field__input prs-n" id="lp-kit-stfrp005" name="lp-kit-stfrp005" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={"120"} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-kit-stfrp005">{"Lead time (days) – Coconut"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-kit-stfrp005" name="ll-kit-stfrp005" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"1"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--kit" id="l-kit-stdry021">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stdry021">{"Milk 1 litre pack"}</a>
                            <span className="fd-sub">{"ST-DRY-021 · Kitchen store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"packet"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-kit-stdry021">{"Reorder level – Milk 1 litre pack"}</label>
                            <input className="field__input prs-n" id="lr-kit-stdry021" name="lr-kit-stdry021" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"60"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-kit-stdry021">{"Minimum – Milk 1 litre pack"}</label>
                            <input className="field__input prs-n" id="ln-kit-stdry021" name="ln-kit-stdry021" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"40"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-kit-stdry021">{"Maximum – Milk 1 litre pack"}</label>
                            <input className="field__input prs-n" id="lx-kit-stdry021" name="lx-kit-stdry021" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"200"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-kit-stdry021">{"Par – Milk 1 litre pack"}</label>
                            <input className="field__input prs-n" id="lp-kit-stdry021" name="lp-kit-stdry021" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={"120"} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-kit-stdry021">{"Lead time (days) – Milk 1 litre pack"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-kit-stdry021" name="ll-kit-stdry021" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"1"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--kit" id="l-kit-stdry022">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stdry022">{"Curd 1 kg pack"}</a>
                            <span className="fd-sub">{"ST-DRY-022 · Kitchen store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"packet"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-kit-stdry022">{"Reorder level – Curd 1 kg pack"}</label>
                            <input className="field__input prs-n" id="lr-kit-stdry022" name="lr-kit-stdry022" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"20"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-kit-stdry022">{"Minimum – Curd 1 kg pack"}</label>
                            <input className="field__input prs-n" id="ln-kit-stdry022" name="ln-kit-stdry022" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"12"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-kit-stdry022">{"Maximum – Curd 1 kg pack"}</label>
                            <input className="field__input prs-n" id="lx-kit-stdry022" name="lx-kit-stdry022" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"60"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-kit-stdry022">{"Par – Curd 1 kg pack"}</label>
                            <input className="field__input prs-n" id="lp-kit-stdry022" name="lp-kit-stdry022" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={"40"} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-kit-stdry022">{"Lead time (days) – Curd 1 kg pack"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-kit-stdry022" name="ll-kit-stdry022" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"1"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--kit" id="l-kit-stdry023">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stdry023">{"Butter 500 g"}</a>
                            <span className="fd-sub">{"ST-DRY-023 · Kitchen store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"packet"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-kit-stdry023">{"Reorder level – Butter 500 g"}</label>
                            <input className="field__input prs-n" id="lr-kit-stdry023" name="lr-kit-stdry023" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"10"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-kit-stdry023">{"Minimum – Butter 500 g"}</label>
                            <input className="field__input prs-n" id="ln-kit-stdry023" name="ln-kit-stdry023" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"6"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-kit-stdry023">{"Maximum – Butter 500 g"}</label>
                            <input className="field__input prs-n" id="lx-kit-stdry023" name="lx-kit-stdry023" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"30"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-kit-stdry023">{"Par – Butter 500 g"}</label>
                            <input className="field__input prs-n" id="lp-kit-stdry023" name="lp-kit-stdry023" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={"20"} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-kit-stdry023">{"Lead time (days) – Butter 500 g"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-kit-stdry023" name="ll-kit-stdry023" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"2"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--kit" id="l-kit-stdry024">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stdry024">{"Paneer"}</a>
                            <span className="fd-sub">{"ST-DRY-024 · Kitchen store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"kg"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-kit-stdry024">{"Reorder level – Paneer"}</label>
                            <input className="field__input prs-n" id="lr-kit-stdry024" name="lr-kit-stdry024" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"8"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-kit-stdry024">{"Minimum – Paneer"}</label>
                            <input className="field__input prs-n" id="ln-kit-stdry024" name="ln-kit-stdry024" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"5"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-kit-stdry024">{"Maximum – Paneer"}</label>
                            <input className="field__input prs-n" id="lx-kit-stdry024" name="lx-kit-stdry024" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"25"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-kit-stdry024">{"Par – Paneer"}</label>
                            <input className="field__input prs-n" id="lp-kit-stdry024" name="lp-kit-stdry024" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={"15"} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-kit-stdry024">{"Lead time (days) – Paneer"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-kit-stdry024" name="ll-kit-stdry024" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"2"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--kit" id="l-kit-stmsf011">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stmsf011">{"Karimeen (pearl spot)"}</a>
                            <span className="fd-sub">{"ST-MSF-011 · Kitchen store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"kg"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-kit-stmsf011">{"Reorder level – Karimeen (pearl spot)"}</label>
                            <input className="field__input prs-n" id="lr-kit-stmsf011" name="lr-kit-stmsf011" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"10"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-kit-stmsf011">{"Minimum – Karimeen (pearl spot)"}</label>
                            <input className="field__input prs-n" id="ln-kit-stmsf011" name="ln-kit-stmsf011" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"6"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-kit-stmsf011">{"Maximum – Karimeen (pearl spot)"}</label>
                            <input className="field__input prs-n" id="lx-kit-stmsf011" name="lx-kit-stmsf011" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"30"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-kit-stmsf011">{"Par – Karimeen (pearl spot)"}</label>
                            <input className="field__input prs-n" id="lp-kit-stmsf011" name="lp-kit-stmsf011" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={"20"} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-kit-stmsf011">{"Lead time (days) – Karimeen (pearl spot)"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-kit-stmsf011" name="ll-kit-stmsf011" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"1"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--kit" id="l-kit-stmsf012">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stmsf012">{"Tiger prawns 16/20"}</a>
                            <span className="fd-sub">{"ST-MSF-012 · Kitchen store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"kg"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-kit-stmsf012">{"Reorder level – Tiger prawns 16/20"}</label>
                            <input className="field__input prs-n" id="lr-kit-stmsf012" name="lr-kit-stmsf012" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"8"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-kit-stmsf012">{"Minimum – Tiger prawns 16/20"}</label>
                            <input className="field__input prs-n" id="ln-kit-stmsf012" name="ln-kit-stmsf012" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"5"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-kit-stmsf012">{"Maximum – Tiger prawns 16/20"}</label>
                            <input className="field__input prs-n" id="lx-kit-stmsf012" name="lx-kit-stmsf012" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"25"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-kit-stmsf012">{"Par – Tiger prawns 16/20"}</label>
                            <input className="field__input prs-n" id="lp-kit-stmsf012" name="lp-kit-stmsf012" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={"15"} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-kit-stmsf012">{"Lead time (days) – Tiger prawns 16/20"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-kit-stmsf012" name="ll-kit-stmsf012" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"2"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--kit" id="l-kit-stmsf013">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stmsf013">{"Chicken (curry cut)"}</a>
                            <span className="fd-sub">{"ST-MSF-013 · Kitchen store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"kg"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-kit-stmsf013">{"Reorder level – Chicken (curry cut)"}</label>
                            <input className="field__input prs-n" id="lr-kit-stmsf013" name="lr-kit-stmsf013" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"30"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-kit-stmsf013">{"Minimum – Chicken (curry cut)"}</label>
                            <input className="field__input prs-n" id="ln-kit-stmsf013" name="ln-kit-stmsf013" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"20"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-kit-stmsf013">{"Maximum – Chicken (curry cut)"}</label>
                            <input className="field__input prs-n" id="lx-kit-stmsf013" name="lx-kit-stmsf013" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"90"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-kit-stmsf013">{"Par – Chicken (curry cut)"}</label>
                            <input className="field__input prs-n" id="lp-kit-stmsf013" name="lp-kit-stmsf013" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={"60"} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-kit-stmsf013">{"Lead time (days) – Chicken (curry cut)"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-kit-stmsf013" name="ll-kit-stmsf013" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"1"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--kit" id="l-kit-stmsf014">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stmsf014">{"Mutton"}</a>
                            <span className="fd-sub">{"ST-MSF-014 · Kitchen store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"kg"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-kit-stmsf014">{"Reorder level – Mutton"}</label>
                            <input className="field__input prs-n" id="lr-kit-stmsf014" name="lr-kit-stmsf014" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"15"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-kit-stmsf014">{"Minimum – Mutton"}</label>
                            <input className="field__input prs-n" id="ln-kit-stmsf014" name="ln-kit-stmsf014" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"10"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-kit-stmsf014">{"Maximum – Mutton"}</label>
                            <input className="field__input prs-n" id="lx-kit-stmsf014" name="lx-kit-stmsf014" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"45"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-kit-stmsf014">{"Par – Mutton"}</label>
                            <input className="field__input prs-n" id="lp-kit-stmsf014" name="lp-kit-stmsf014" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={"30"} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-kit-stmsf014">{"Lead time (days) – Mutton"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-kit-stmsf014" name="ll-kit-stmsf014" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"1"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--kit" id="l-kit-stgro031">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stgro031">{"Basmati rice 1121"}</a>
                            <span className="fd-sub">{"ST-GRO-031 · Kitchen store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"kg"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-kit-stgro031">{"Reorder level – Basmati rice 1121"}</label>
                            <input className="field__input prs-n" id="lr-kit-stgro031" name="lr-kit-stgro031" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"60"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-kit-stgro031">{"Minimum – Basmati rice 1121"}</label>
                            <input className="field__input prs-n" id="ln-kit-stgro031" name="ln-kit-stgro031" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"40"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-kit-stgro031">{"Maximum – Basmati rice 1121"}</label>
                            <input className="field__input prs-n" id="lx-kit-stgro031" name="lx-kit-stgro031" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"200"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-kit-stgro031">{"Par – Basmati rice 1121"}</label>
                            <input className="field__input prs-n" id="lp-kit-stgro031" name="lp-kit-stgro031" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={"120"} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-kit-stgro031">{"Lead time (days) – Basmati rice 1121"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-kit-stgro031" name="ll-kit-stgro031" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"1"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--bar" id="l-bar-stliq101">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stliq101">{"Beer can 330 ml (lager)"}</a>
                            <span className="fd-sub">{"ST-LIQ-101 · Bar store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"can"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-bar-stliq101">{"Reorder level – Beer can 330 ml (lager)"}</label>
                            <input className="field__input prs-n" id="lr-bar-stliq101" name="lr-bar-stliq101" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"48"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-bar-stliq101">{"Minimum – Beer can 330 ml (lager)"}</label>
                            <input className="field__input prs-n" id="ln-bar-stliq101" name="ln-bar-stliq101" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"24"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-bar-stliq101">{"Maximum – Beer can 330 ml (lager)"}</label>
                            <input className="field__input prs-n" id="lx-bar-stliq101" name="lx-bar-stliq101" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"240"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-bar-stliq101">{"Par – Beer can 330 ml (lager)"}</label>
                            <input className="field__input prs-n" id="lp-bar-stliq101" name="lp-bar-stliq101" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={"120"} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-bar-stliq101">{"Lead time (days) – Beer can 330 ml (lager)"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-bar-stliq101" name="ll-bar-stliq101" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"2"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--bar" id="l-bar-stliq102">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stliq102">{"Beer bottle 650 ml (lager)"}</a>
                            <span className="fd-sub">{"ST-LIQ-102 · Bar store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"bottle"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-bar-stliq102">{"Reorder level – Beer bottle 650 ml (lager)"}</label>
                            <input className="field__input prs-n" id="lr-bar-stliq102" name="lr-bar-stliq102" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"36"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-bar-stliq102">{"Minimum – Beer bottle 650 ml (lager)"}</label>
                            <input className="field__input prs-n" id="ln-bar-stliq102" name="ln-bar-stliq102" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"24"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-bar-stliq102">{"Maximum – Beer bottle 650 ml (lager)"}</label>
                            <input className="field__input prs-n" id="lx-bar-stliq102" name="lx-bar-stliq102" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"144"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-bar-stliq102">{"Par – Beer bottle 650 ml (lager)"}</label>
                            <input className="field__input prs-n" id="lp-bar-stliq102" name="lp-bar-stliq102" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={"96"} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-bar-stliq102">{"Lead time (days) – Beer bottle 650 ml (lager)"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-bar-stliq102" name="ll-bar-stliq102" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"2"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--bar" id="l-bar-stliq111">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stliq111">{"Whisky miniature 50 ml"}</a>
                            <span className="fd-sub">{"ST-LIQ-111 · Bar store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"bottle"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-bar-stliq111">{"Reorder level – Whisky miniature 50 ml"}</label>
                            <input className="field__input prs-n" id="lr-bar-stliq111" name="lr-bar-stliq111" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"36"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-bar-stliq111">{"Minimum – Whisky miniature 50 ml"}</label>
                            <input className="field__input prs-n" id="ln-bar-stliq111" name="ln-bar-stliq111" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"24"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-bar-stliq111">{"Maximum – Whisky miniature 50 ml"}</label>
                            <input className="field__input prs-n" id="lx-bar-stliq111" name="lx-bar-stliq111" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"120"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-bar-stliq111">{"Par – Whisky miniature 50 ml"}</label>
                            <input className="field__input prs-n" id="lp-bar-stliq111" name="lp-bar-stliq111" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={"72"} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-bar-stliq111">{"Lead time (days) – Whisky miniature 50 ml"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-bar-stliq111" name="ll-bar-stliq111" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"2"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--bar" id="l-bar-stliq121">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stliq121">{"Red wine 750 ml"}</a>
                            <span className="fd-sub">{"ST-LIQ-121 · Bar store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"bottle"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-bar-stliq121">{"Reorder level – Red wine 750 ml"}</label>
                            <input className="field__input prs-n" id="lr-bar-stliq121" name="lr-bar-stliq121" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"12"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-bar-stliq121">{"Minimum – Red wine 750 ml"}</label>
                            <input className="field__input prs-n" id="ln-bar-stliq121" name="ln-bar-stliq121" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"6"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-bar-stliq121">{"Maximum – Red wine 750 ml"}</label>
                            <input className="field__input prs-n" id="lx-bar-stliq121" name="lx-bar-stliq121" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"36"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-bar-stliq121">{"Par – Red wine 750 ml"}</label>
                            <input className="field__input prs-n" id="lp-bar-stliq121" name="lp-bar-stliq121" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={"24"} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-bar-stliq121">{"Lead time (days) – Red wine 750 ml"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-bar-stliq121" name="ll-bar-stliq121" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"3"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--bar" id="l-bar-stliq131">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stliq131">{"Brandy 750 ml"}</a>
                            <span className="fd-sub">{"ST-LIQ-131 · Bar store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"bottle"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-bar-stliq131">{"Reorder level – Brandy 750 ml"}</label>
                            <input className="field__input prs-n" id="lr-bar-stliq131" name="lr-bar-stliq131" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"6"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-bar-stliq131">{"Minimum – Brandy 750 ml"}</label>
                            <input className="field__input prs-n" id="ln-bar-stliq131" name="ln-bar-stliq131" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"3"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-bar-stliq131">{"Maximum – Brandy 750 ml"}</label>
                            <input className="field__input prs-n" id="lx-bar-stliq131" name="lx-bar-stliq131" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"24"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-bar-stliq131">{"Par – Brandy 750 ml"}</label>
                            <input className="field__input prs-n" id="lp-bar-stliq131" name="lp-bar-stliq131" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={"12"} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-bar-stliq131">{"Lead time (days) – Brandy 750 ml"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-bar-stliq131" name="ll-bar-stliq131" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"3"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--bar" id="l-bar-stbev011">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stbev011">{"Packaged drinking water 500 ml"}</a>
                            <span className="fd-sub">{"ST-BEV-011 · Bar store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"bottle"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-bar-stbev011">{"Reorder level – Packaged drinking water 500 ml"}</label>
                            <input className="field__input prs-n" id="lr-bar-stbev011" name="lr-bar-stbev011" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"120"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-bar-stbev011">{"Minimum – Packaged drinking water 500 ml"}</label>
                            <input className="field__input prs-n" id="ln-bar-stbev011" name="ln-bar-stbev011" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"72"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-bar-stbev011">{"Maximum – Packaged drinking water 500 ml"}</label>
                            <input className="field__input prs-n" id="lx-bar-stbev011" name="lx-bar-stbev011" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"480"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-bar-stbev011">{"Par – Packaged drinking water 500 ml"}</label>
                            <input className="field__input prs-n" id="lp-bar-stbev011" name="lp-bar-stbev011" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={"240"} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-bar-stbev011">{"Lead time (days) – Packaged drinking water 500 ml"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-bar-stbev011" name="ll-bar-stbev011" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"2"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--bar" id="l-bar-stbev021">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stbev021">{"Soft drink can 330 ml (cola / lemon)"}</a>
                            <span className="fd-sub">{"ST-BEV-021 · Bar store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"can"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-bar-stbev021">{"Reorder level – Soft drink can 330 ml (cola / lemon)"}</label>
                            <input className="field__input prs-n" id="lr-bar-stbev021" name="lr-bar-stbev021" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"96"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-bar-stbev021">{"Minimum – Soft drink can 330 ml (cola / lemon)"}</label>
                            <input className="field__input prs-n" id="ln-bar-stbev021" name="ln-bar-stbev021" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"48"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-bar-stbev021">{"Maximum – Soft drink can 330 ml (cola / lemon)"}</label>
                            <input className="field__input prs-n" id="lx-bar-stbev021" name="lx-bar-stbev021" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"288"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-bar-stbev021">{"Par – Soft drink can 330 ml (cola / lemon)"}</label>
                            <input className="field__input prs-n" id="lp-bar-stbev021" name="lp-bar-stbev021" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={"192"} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-bar-stbev021">{"Lead time (days) – Soft drink can 330 ml (cola / lemon)"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-bar-stbev021" name="ll-bar-stbev021" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"2"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--bar" id="l-bar-stbev031">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stbev031">{"Fruit juice tetra pack 200 ml"}</a>
                            <span className="fd-sub">{"ST-BEV-031 · Bar store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"packet"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-bar-stbev031">{"Reorder level – Fruit juice tetra pack 200 ml"}</label>
                            <input className="field__input prs-n" id="lr-bar-stbev031" name="lr-bar-stbev031" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"60"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-bar-stbev031">{"Minimum – Fruit juice tetra pack 200 ml"}</label>
                            <input className="field__input prs-n" id="ln-bar-stbev031" name="ln-bar-stbev031" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"36"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-bar-stbev031">{"Maximum – Fruit juice tetra pack 200 ml"}</label>
                            <input className="field__input prs-n" id="lx-bar-stbev031" name="lx-bar-stbev031" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"216"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-bar-stbev031">{"Par – Fruit juice tetra pack 200 ml"}</label>
                            <input className="field__input prs-n" id="lp-bar-stbev031" name="lp-bar-stbev031" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={"120"} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-bar-stbev031">{"Lead time (days) – Fruit juice tetra pack 200 ml"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-bar-stbev031" name="ll-bar-stbev031" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"2"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--bar" id="l-bar-stfbc001">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stfbc001">{"Paper straws"}</a>
                            <span className="fd-sub">{"ST-FBC-001 · Bar store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"nos"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-bar-stfbc001">{"Reorder level – Paper straws"}</label>
                            <input className="field__input prs-n" id="lr-bar-stfbc001" name="lr-bar-stfbc001" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"2000"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-bar-stfbc001">{"Minimum – Paper straws"}</label>
                            <input className="field__input prs-n" id="ln-bar-stfbc001" name="ln-bar-stfbc001" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"1000"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-bar-stfbc001">{"Maximum – Paper straws"}</label>
                            <input className="field__input prs-n" id="lx-bar-stfbc001" name="lx-bar-stfbc001" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"6000"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-bar-stfbc001">{"Par – Paper straws"}</label>
                            <input className="field__input prs-n" id="lp-bar-stfbc001" name="lp-bar-stfbc001" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={""} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-bar-stfbc001">{"Lead time (days) – Paper straws"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-bar-stfbc001" name="ll-bar-stfbc001" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"4"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--bar" id="l-bar-stfbc002">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stfbc002">{"Cocktail napkins"}</a>
                            <span className="fd-sub">{"ST-FBC-002 · Bar store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"nos"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-bar-stfbc002">{"Reorder level – Cocktail napkins"}</label>
                            <input className="field__input prs-n" id="lr-bar-stfbc002" name="lr-bar-stfbc002" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"2000"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-bar-stfbc002">{"Minimum – Cocktail napkins"}</label>
                            <input className="field__input prs-n" id="ln-bar-stfbc002" name="ln-bar-stfbc002" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"1000"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-bar-stfbc002">{"Maximum – Cocktail napkins"}</label>
                            <input className="field__input prs-n" id="lx-bar-stfbc002" name="lx-bar-stfbc002" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"6000"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-bar-stfbc002">{"Par – Cocktail napkins"}</label>
                            <input className="field__input prs-n" id="lp-bar-stfbc002" name="lp-bar-stfbc002" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={""} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-bar-stfbc002">{"Lead time (days) – Cocktail napkins"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-bar-stfbc002" name="ll-bar-stfbc002" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"4"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--bar" id="l-bar-stfbc003">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stfbc003">{"Coasters"}</a>
                            <span className="fd-sub">{"ST-FBC-003 · Bar store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"nos"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-bar-stfbc003">{"Reorder level – Coasters"}</label>
                            <input className="field__input prs-n" id="lr-bar-stfbc003" name="lr-bar-stfbc003" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"500"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-bar-stfbc003">{"Minimum – Coasters"}</label>
                            <input className="field__input prs-n" id="ln-bar-stfbc003" name="ln-bar-stfbc003" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"250"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-bar-stfbc003">{"Maximum – Coasters"}</label>
                            <input className="field__input prs-n" id="lx-bar-stfbc003" name="lx-bar-stfbc003" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"1500"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-bar-stfbc003">{"Par – Coasters"}</label>
                            <input className="field__input prs-n" id="lp-bar-stfbc003" name="lp-bar-stfbc003" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={""} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-bar-stfbc003">{"Lead time (days) – Coasters"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-bar-stfbc003" name="ll-bar-stfbc003" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"4"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--main" id="l-main-stbev011">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stbev011">{"Packaged drinking water 500 ml"}</a>
                            <span className="fd-sub">{"ST-BEV-011 · Main store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"bottle"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-main-stbev011">{"Reorder level – Packaged drinking water 500 ml"}</label>
                            <input className="field__input prs-n" id="lr-main-stbev011" name="lr-main-stbev011" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"600"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-main-stbev011">{"Minimum – Packaged drinking water 500 ml"}</label>
                            <input className="field__input prs-n" id="ln-main-stbev011" name="ln-main-stbev011" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"400"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-main-stbev011">{"Maximum – Packaged drinking water 500 ml"}</label>
                            <input className="field__input prs-n" id="lx-main-stbev011" name="lx-main-stbev011" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"2400"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-main-stbev011">{"Par – Packaged drinking water 500 ml"}</label>
                            <input className="field__input prs-n" id="lp-main-stbev011" name="lp-main-stbev011" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={""} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-main-stbev011">{"Lead time (days) – Packaged drinking water 500 ml"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-main-stbev011" name="ll-main-stbev011" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"2"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--main" id="l-main-stbev014">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stbev014">{"Sparkling water 330 ml"}</a>
                            <span className="fd-sub">{"ST-BEV-014 · Main store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"bottle"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-main-stbev014">{"Reorder level – Sparkling water 330 ml"}</label>
                            <input className="field__input prs-n" id="lr-main-stbev014" name="lr-main-stbev014" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"100"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-main-stbev014">{"Minimum – Sparkling water 330 ml"}</label>
                            <input className="field__input prs-n" id="ln-main-stbev014" name="ln-main-stbev014" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"60"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-main-stbev014">{"Maximum – Sparkling water 330 ml"}</label>
                            <input className="field__input prs-n" id="lx-main-stbev014" name="lx-main-stbev014" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"360"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-main-stbev014">{"Par – Sparkling water 330 ml"}</label>
                            <input className="field__input prs-n" id="lp-main-stbev014" name="lp-main-stbev014" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={""} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-main-stbev014">{"Lead time (days) – Sparkling water 330 ml"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-main-stbev014" name="ll-main-stbev014" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"3"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--main" id="l-main-stbev021">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stbev021">{"Soft drink can 330 ml (cola / lemon)"}</a>
                            <span className="fd-sub">{"ST-BEV-021 · Main store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"can"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-main-stbev021">{"Reorder level – Soft drink can 330 ml (cola / lemon)"}</label>
                            <input className="field__input prs-n" id="lr-main-stbev021" name="lr-main-stbev021" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"300"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-main-stbev021">{"Minimum – Soft drink can 330 ml (cola / lemon)"}</label>
                            <input className="field__input prs-n" id="ln-main-stbev021" name="ln-main-stbev021" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"200"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-main-stbev021">{"Maximum – Soft drink can 330 ml (cola / lemon)"}</label>
                            <input className="field__input prs-n" id="lx-main-stbev021" name="lx-main-stbev021" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"960"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-main-stbev021">{"Par – Soft drink can 330 ml (cola / lemon)"}</label>
                            <input className="field__input prs-n" id="lp-main-stbev021" name="lp-main-stbev021" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={""} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-main-stbev021">{"Lead time (days) – Soft drink can 330 ml (cola / lemon)"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-main-stbev021" name="ll-main-stbev021" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"3"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--main" id="l-main-stbev031">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stbev031">{"Fruit juice tetra pack 200 ml"}</a>
                            <span className="fd-sub">{"ST-BEV-031 · Main store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"packet"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-main-stbev031">{"Reorder level – Fruit juice tetra pack 200 ml"}</label>
                            <input className="field__input prs-n" id="lr-main-stbev031" name="lr-main-stbev031" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"240"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-main-stbev031">{"Minimum – Fruit juice tetra pack 200 ml"}</label>
                            <input className="field__input prs-n" id="ln-main-stbev031" name="ln-main-stbev031" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"160"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-main-stbev031">{"Maximum – Fruit juice tetra pack 200 ml"}</label>
                            <input className="field__input prs-n" id="lx-main-stbev031" name="lx-main-stbev031" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"720"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-main-stbev031">{"Par – Fruit juice tetra pack 200 ml"}</label>
                            <input className="field__input prs-n" id="lp-main-stbev031" name="lp-main-stbev031" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={""} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-main-stbev031">{"Lead time (days) – Fruit juice tetra pack 200 ml"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-main-stbev031" name="ll-main-stbev031" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"3"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--main" id="l-main-stbev041">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stbev041">{"Energy drink can 250 ml"}</a>
                            <span className="fd-sub">{"ST-BEV-041 · Main store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"can"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-main-stbev041">{"Reorder level – Energy drink can 250 ml"}</label>
                            <input className="field__input prs-n" id="lr-main-stbev041" name="lr-main-stbev041" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"40"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-main-stbev041">{"Minimum – Energy drink can 250 ml"}</label>
                            <input className="field__input prs-n" id="ln-main-stbev041" name="ln-main-stbev041" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"24"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-main-stbev041">{"Maximum – Energy drink can 250 ml"}</label>
                            <input className="field__input prs-n" id="lx-main-stbev041" name="lx-main-stbev041" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"120"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-main-stbev041">{"Par – Energy drink can 250 ml"}</label>
                            <input className="field__input prs-n" id="lp-main-stbev041" name="lp-main-stbev041" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={""} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-main-stbev041">{"Lead time (days) – Energy drink can 250 ml"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-main-stbev041" name="ll-main-stbev041" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"3"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--main" id="l-main-stsnk201">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stsnk201">{"Potato chips 52 g"}</a>
                            <span className="fd-sub">{"ST-SNK-201 · Main store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"packet"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-main-stsnk201">{"Reorder level – Potato chips 52 g"}</label>
                            <input className="field__input prs-n" id="lr-main-stsnk201" name="lr-main-stsnk201" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"240"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-main-stsnk201">{"Minimum – Potato chips 52 g"}</label>
                            <input className="field__input prs-n" id="ln-main-stsnk201" name="ln-main-stsnk201" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"160"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-main-stsnk201">{"Maximum – Potato chips 52 g"}</label>
                            <input className="field__input prs-n" id="lx-main-stsnk201" name="lx-main-stsnk201" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"720"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-main-stsnk201">{"Par – Potato chips 52 g"}</label>
                            <input className="field__input prs-n" id="lp-main-stsnk201" name="lp-main-stsnk201" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={""} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-main-stsnk201">{"Lead time (days) – Potato chips 52 g"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-main-stsnk201" name="ll-main-stsnk201" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"3"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--main" id="l-main-stsnk211">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stsnk211">{"Cashew nuts salted 50 g"}</a>
                            <span className="fd-sub">{"ST-SNK-211 · Main store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"packet"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-main-stsnk211">{"Reorder level – Cashew nuts salted 50 g"}</label>
                            <input className="field__input prs-n" id="lr-main-stsnk211" name="lr-main-stsnk211" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"240"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-main-stsnk211">{"Minimum – Cashew nuts salted 50 g"}</label>
                            <input className="field__input prs-n" id="ln-main-stsnk211" name="ln-main-stsnk211" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"160"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-main-stsnk211">{"Maximum – Cashew nuts salted 50 g"}</label>
                            <input className="field__input prs-n" id="lx-main-stsnk211" name="lx-main-stsnk211" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"720"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-main-stsnk211">{"Par – Cashew nuts salted 50 g"}</label>
                            <input className="field__input prs-n" id="lp-main-stsnk211" name="lp-main-stsnk211" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={""} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-main-stsnk211">{"Lead time (days) – Cashew nuts salted 50 g"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-main-stsnk211" name="ll-main-stsnk211" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"3"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--main" id="l-main-stsnk221">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stsnk221">{"Kerala banana chips 100 g"}</a>
                            <span className="fd-sub">{"ST-SNK-221 · Main store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"packet"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-main-stsnk221">{"Reorder level – Kerala banana chips 100 g"}</label>
                            <input className="field__input prs-n" id="lr-main-stsnk221" name="lr-main-stsnk221" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"180"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-main-stsnk221">{"Minimum – Kerala banana chips 100 g"}</label>
                            <input className="field__input prs-n" id="ln-main-stsnk221" name="ln-main-stsnk221" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"120"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-main-stsnk221">{"Maximum – Kerala banana chips 100 g"}</label>
                            <input className="field__input prs-n" id="lx-main-stsnk221" name="lx-main-stsnk221" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"540"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-main-stsnk221">{"Par – Kerala banana chips 100 g"}</label>
                            <input className="field__input prs-n" id="lp-main-stsnk221" name="lp-main-stsnk221" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={""} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-main-stsnk221">{"Lead time (days) – Kerala banana chips 100 g"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-main-stsnk221" name="ll-main-stsnk221" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"3"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--main" id="l-main-stsnk231">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stsnk231">{"Milk chocolate bar 40 g"}</a>
                            <span className="fd-sub">{"ST-SNK-231 · Main store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"nos"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-main-stsnk231">{"Reorder level – Milk chocolate bar 40 g"}</label>
                            <input className="field__input prs-n" id="lr-main-stsnk231" name="lr-main-stsnk231" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"240"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-main-stsnk231">{"Minimum – Milk chocolate bar 40 g"}</label>
                            <input className="field__input prs-n" id="ln-main-stsnk231" name="ln-main-stsnk231" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"160"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-main-stsnk231">{"Maximum – Milk chocolate bar 40 g"}</label>
                            <input className="field__input prs-n" id="lx-main-stsnk231" name="lx-main-stsnk231" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"720"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-main-stsnk231">{"Par – Milk chocolate bar 40 g"}</label>
                            <input className="field__input prs-n" id="lp-main-stsnk231" name="lp-main-stsnk231" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={""} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-main-stsnk231">{"Lead time (days) – Milk chocolate bar 40 g"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-main-stsnk231" name="ll-main-stsnk231" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"3"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--main" id="l-main-stsnk241">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stsnk241">{"Butter cookies 75 g"}</a>
                            <span className="fd-sub">{"ST-SNK-241 · Main store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"packet"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-main-stsnk241">{"Reorder level – Butter cookies 75 g"}</label>
                            <input className="field__input prs-n" id="lr-main-stsnk241" name="lr-main-stsnk241" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"240"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-main-stsnk241">{"Minimum – Butter cookies 75 g"}</label>
                            <input className="field__input prs-n" id="ln-main-stsnk241" name="ln-main-stsnk241" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"160"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-main-stsnk241">{"Maximum – Butter cookies 75 g"}</label>
                            <input className="field__input prs-n" id="lx-main-stsnk241" name="lx-main-stsnk241" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"720"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-main-stsnk241">{"Par – Butter cookies 75 g"}</label>
                            <input className="field__input prs-n" id="lp-main-stsnk241" name="lp-main-stsnk241" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={""} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-main-stsnk241">{"Lead time (days) – Butter cookies 75 g"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-main-stsnk241" name="ll-main-stsnk241" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"3"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--main" id="l-main-stsnk251">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stsnk251">{"Instant noodles cup 70 g"}</a>
                            <span className="fd-sub">{"ST-SNK-251 · Main store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"nos"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-main-stsnk251">{"Reorder level – Instant noodles cup 70 g"}</label>
                            <input className="field__input prs-n" id="lr-main-stsnk251" name="lr-main-stsnk251" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"120"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-main-stsnk251">{"Minimum – Instant noodles cup 70 g"}</label>
                            <input className="field__input prs-n" id="ln-main-stsnk251" name="ln-main-stsnk251" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"80"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-main-stsnk251">{"Maximum – Instant noodles cup 70 g"}</label>
                            <input className="field__input prs-n" id="lx-main-stsnk251" name="lx-main-stsnk251" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"360"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-main-stsnk251">{"Par – Instant noodles cup 70 g"}</label>
                            <input className="field__input prs-n" id="lp-main-stsnk251" name="lp-main-stsnk251" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={""} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-main-stsnk251">{"Lead time (days) – Instant noodles cup 70 g"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-main-stsnk251" name="ll-main-stsnk251" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"3"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--main" id="l-main-stsnk261">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stsnk261">{"Masala peanuts 50 g"}</a>
                            <span className="fd-sub">{"ST-SNK-261 · Main store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"packet"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-main-stsnk261">{"Reorder level – Masala peanuts 50 g"}</label>
                            <input className="field__input prs-n" id="lr-main-stsnk261" name="lr-main-stsnk261" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"90"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-main-stsnk261">{"Minimum – Masala peanuts 50 g"}</label>
                            <input className="field__input prs-n" id="ln-main-stsnk261" name="ln-main-stsnk261" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"60"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-main-stsnk261">{"Maximum – Masala peanuts 50 g"}</label>
                            <input className="field__input prs-n" id="lx-main-stsnk261" name="lx-main-stsnk261" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"270"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-main-stsnk261">{"Par – Masala peanuts 50 g"}</label>
                            <input className="field__input prs-n" id="lp-main-stsnk261" name="lp-main-stsnk261" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={""} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-main-stsnk261">{"Lead time (days) – Masala peanuts 50 g"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-main-stsnk261" name="ll-main-stsnk261" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"3"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--mbr" id="l-mbr-stbev011">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stbev011">{"Packaged drinking water 500 ml"}</a>
                            <span className="fd-sub">{"ST-BEV-011 · Minibar store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"bottle"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-mbr-stbev011">{"Reorder level – Packaged drinking water 500 ml"}</label>
                            <input className="field__input prs-n" id="lr-mbr-stbev011" name="lr-mbr-stbev011" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"300"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-mbr-stbev011">{"Minimum – Packaged drinking water 500 ml"}</label>
                            <input className="field__input prs-n" id="ln-mbr-stbev011" name="ln-mbr-stbev011" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"240"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-mbr-stbev011">{"Maximum – Packaged drinking water 500 ml"}</label>
                            <input className="field__input prs-n" id="lx-mbr-stbev011" name="lx-mbr-stbev011" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"600"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-mbr-stbev011">{"Par – Packaged drinking water 500 ml"}</label>
                            <input className="field__input prs-n" id="lp-mbr-stbev011" name="lp-mbr-stbev011" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={"480"} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-mbr-stbev011">{"Lead time (days) – Packaged drinking water 500 ml"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-mbr-stbev011" name="ll-mbr-stbev011" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"1"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--mbr" id="l-mbr-stbev014">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stbev014">{"Sparkling water 330 ml"}</a>
                            <span className="fd-sub">{"ST-BEV-014 · Minibar store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"bottle"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-mbr-stbev014">{"Reorder level – Sparkling water 330 ml"}</label>
                            <input className="field__input prs-n" id="lr-mbr-stbev014" name="lr-mbr-stbev014" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"50"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-mbr-stbev014">{"Minimum – Sparkling water 330 ml"}</label>
                            <input className="field__input prs-n" id="ln-mbr-stbev014" name="ln-mbr-stbev014" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"40"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-mbr-stbev014">{"Maximum – Sparkling water 330 ml"}</label>
                            <input className="field__input prs-n" id="lx-mbr-stbev014" name="lx-mbr-stbev014" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"120"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-mbr-stbev014">{"Par – Sparkling water 330 ml"}</label>
                            <input className="field__input prs-n" id="lp-mbr-stbev014" name="lp-mbr-stbev014" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={"100"} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-mbr-stbev014">{"Lead time (days) – Sparkling water 330 ml"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-mbr-stbev014" name="ll-mbr-stbev014" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"1"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--mbr" id="l-mbr-stbev021">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stbev021">{"Soft drink can 330 ml (cola / lemon)"}</a>
                            <span className="fd-sub">{"ST-BEV-021 · Minibar store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"can"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-mbr-stbev021">{"Reorder level – Soft drink can 330 ml (cola / lemon)"}</label>
                            <input className="field__input prs-n" id="lr-mbr-stbev021" name="lr-mbr-stbev021" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"150"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-mbr-stbev021">{"Minimum – Soft drink can 330 ml (cola / lemon)"}</label>
                            <input className="field__input prs-n" id="ln-mbr-stbev021" name="ln-mbr-stbev021" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"120"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-mbr-stbev021">{"Maximum – Soft drink can 330 ml (cola / lemon)"}</label>
                            <input className="field__input prs-n" id="lx-mbr-stbev021" name="lx-mbr-stbev021" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"360"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-mbr-stbev021">{"Par – Soft drink can 330 ml (cola / lemon)"}</label>
                            <input className="field__input prs-n" id="lp-mbr-stbev021" name="lp-mbr-stbev021" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={"300"} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-mbr-stbev021">{"Lead time (days) – Soft drink can 330 ml (cola / lemon)"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-mbr-stbev021" name="ll-mbr-stbev021" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"1"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--mbr" id="l-mbr-stbev031">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stbev031">{"Fruit juice tetra pack 200 ml"}</a>
                            <span className="fd-sub">{"ST-BEV-031 · Minibar store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"packet"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-mbr-stbev031">{"Reorder level – Fruit juice tetra pack 200 ml"}</label>
                            <input className="field__input prs-n" id="lr-mbr-stbev031" name="lr-mbr-stbev031" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"120"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-mbr-stbev031">{"Minimum – Fruit juice tetra pack 200 ml"}</label>
                            <input className="field__input prs-n" id="ln-mbr-stbev031" name="ln-mbr-stbev031" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"100"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-mbr-stbev031">{"Maximum – Fruit juice tetra pack 200 ml"}</label>
                            <input className="field__input prs-n" id="lx-mbr-stbev031" name="lx-mbr-stbev031" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"300"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-mbr-stbev031">{"Par – Fruit juice tetra pack 200 ml"}</label>
                            <input className="field__input prs-n" id="lp-mbr-stbev031" name="lp-mbr-stbev031" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={"250"} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-mbr-stbev031">{"Lead time (days) – Fruit juice tetra pack 200 ml"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-mbr-stbev031" name="ll-mbr-stbev031" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"1"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--mbr" id="l-mbr-stbev041">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stbev041">{"Energy drink can 250 ml"}</a>
                            <span className="fd-sub">{"ST-BEV-041 · Minibar store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"can"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-mbr-stbev041">{"Reorder level – Energy drink can 250 ml"}</label>
                            <input className="field__input prs-n" id="lr-mbr-stbev041" name="lr-mbr-stbev041" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"15"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-mbr-stbev041">{"Minimum – Energy drink can 250 ml"}</label>
                            <input className="field__input prs-n" id="ln-mbr-stbev041" name="ln-mbr-stbev041" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"12"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-mbr-stbev041">{"Maximum – Energy drink can 250 ml"}</label>
                            <input className="field__input prs-n" id="lx-mbr-stbev041" name="lx-mbr-stbev041" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"40"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-mbr-stbev041">{"Par – Energy drink can 250 ml"}</label>
                            <input className="field__input prs-n" id="lp-mbr-stbev041" name="lp-mbr-stbev041" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={"30"} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-mbr-stbev041">{"Lead time (days) – Energy drink can 250 ml"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-mbr-stbev041" name="ll-mbr-stbev041" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"1"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--mbr" id="l-mbr-stliq101">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stliq101">{"Beer can 330 ml (lager)"}</a>
                            <span className="fd-sub">{"ST-LIQ-101 · Minibar store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"can"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-mbr-stliq101">{"Reorder level – Beer can 330 ml (lager)"}</label>
                            <input className="field__input prs-n" id="lr-mbr-stliq101" name="lr-mbr-stliq101" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"75"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-mbr-stliq101">{"Minimum – Beer can 330 ml (lager)"}</label>
                            <input className="field__input prs-n" id="ln-mbr-stliq101" name="ln-mbr-stliq101" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"60"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-mbr-stliq101">{"Maximum – Beer can 330 ml (lager)"}</label>
                            <input className="field__input prs-n" id="lx-mbr-stliq101" name="lx-mbr-stliq101" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"180"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-mbr-stliq101">{"Par – Beer can 330 ml (lager)"}</label>
                            <input className="field__input prs-n" id="lp-mbr-stliq101" name="lp-mbr-stliq101" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={"150"} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-mbr-stliq101">{"Lead time (days) – Beer can 330 ml (lager)"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-mbr-stliq101" name="ll-mbr-stliq101" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"2"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--mbr" id="l-mbr-stliq111">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stliq111">{"Whisky miniature 50 ml"}</a>
                            <span className="fd-sub">{"ST-LIQ-111 · Minibar store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"bottle"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-mbr-stliq111">{"Reorder level – Whisky miniature 50 ml"}</label>
                            <input className="field__input prs-n" id="lr-mbr-stliq111" name="lr-mbr-stliq111" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"15"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-mbr-stliq111">{"Minimum – Whisky miniature 50 ml"}</label>
                            <input className="field__input prs-n" id="ln-mbr-stliq111" name="ln-mbr-stliq111" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"12"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-mbr-stliq111">{"Maximum – Whisky miniature 50 ml"}</label>
                            <input className="field__input prs-n" id="lx-mbr-stliq111" name="lx-mbr-stliq111" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"40"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-mbr-stliq111">{"Par – Whisky miniature 50 ml"}</label>
                            <input className="field__input prs-n" id="lp-mbr-stliq111" name="lp-mbr-stliq111" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={"30"} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-mbr-stliq111">{"Lead time (days) – Whisky miniature 50 ml"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-mbr-stliq111" name="ll-mbr-stliq111" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"2"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--mbr" id="l-mbr-stsnk201">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stsnk201">{"Potato chips 52 g"}</a>
                            <span className="fd-sub">{"ST-SNK-201 · Minibar store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"packet"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-mbr-stsnk201">{"Reorder level – Potato chips 52 g"}</label>
                            <input className="field__input prs-n" id="lr-mbr-stsnk201" name="lr-mbr-stsnk201" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"110"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-mbr-stsnk201">{"Minimum – Potato chips 52 g"}</label>
                            <input className="field__input prs-n" id="ln-mbr-stsnk201" name="ln-mbr-stsnk201" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"90"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-mbr-stsnk201">{"Maximum – Potato chips 52 g"}</label>
                            <input className="field__input prs-n" id="lx-mbr-stsnk201" name="lx-mbr-stsnk201" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"240"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-mbr-stsnk201">{"Par – Potato chips 52 g"}</label>
                            <input className="field__input prs-n" id="lp-mbr-stsnk201" name="lp-mbr-stsnk201" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={"200"} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-mbr-stsnk201">{"Lead time (days) – Potato chips 52 g"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-mbr-stsnk201" name="ll-mbr-stsnk201" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"1"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--mbr" id="l-mbr-stsnk211">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stsnk211">{"Cashew nuts salted 50 g"}</a>
                            <span className="fd-sub">{"ST-SNK-211 · Minibar store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"packet"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-mbr-stsnk211">{"Reorder level – Cashew nuts salted 50 g"}</label>
                            <input className="field__input prs-n" id="lr-mbr-stsnk211" name="lr-mbr-stsnk211" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"110"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-mbr-stsnk211">{"Minimum – Cashew nuts salted 50 g"}</label>
                            <input className="field__input prs-n" id="ln-mbr-stsnk211" name="ln-mbr-stsnk211" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"90"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-mbr-stsnk211">{"Maximum – Cashew nuts salted 50 g"}</label>
                            <input className="field__input prs-n" id="lx-mbr-stsnk211" name="lx-mbr-stsnk211" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"240"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-mbr-stsnk211">{"Par – Cashew nuts salted 50 g"}</label>
                            <input className="field__input prs-n" id="lp-mbr-stsnk211" name="lp-mbr-stsnk211" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={"200"} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-mbr-stsnk211">{"Lead time (days) – Cashew nuts salted 50 g"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-mbr-stsnk211" name="ll-mbr-stsnk211" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"1"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--mbr" id="l-mbr-stsnk221">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stsnk221">{"Kerala banana chips 100 g"}</a>
                            <span className="fd-sub">{"ST-SNK-221 · Minibar store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"packet"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-mbr-stsnk221">{"Reorder level – Kerala banana chips 100 g"}</label>
                            <input className="field__input prs-n" id="lr-mbr-stsnk221" name="lr-mbr-stsnk221" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"75"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-mbr-stsnk221">{"Minimum – Kerala banana chips 100 g"}</label>
                            <input className="field__input prs-n" id="ln-mbr-stsnk221" name="ln-mbr-stsnk221" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"60"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-mbr-stsnk221">{"Maximum – Kerala banana chips 100 g"}</label>
                            <input className="field__input prs-n" id="lx-mbr-stsnk221" name="lx-mbr-stsnk221" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"180"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-mbr-stsnk221">{"Par – Kerala banana chips 100 g"}</label>
                            <input className="field__input prs-n" id="lp-mbr-stsnk221" name="lp-mbr-stsnk221" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={"150"} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-mbr-stsnk221">{"Lead time (days) – Kerala banana chips 100 g"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-mbr-stsnk221" name="ll-mbr-stsnk221" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"1"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--mbr" id="l-mbr-stsnk231">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stsnk231">{"Milk chocolate bar 40 g"}</a>
                            <span className="fd-sub">{"ST-SNK-231 · Minibar store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"nos"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-mbr-stsnk231">{"Reorder level – Milk chocolate bar 40 g"}</label>
                            <input className="field__input prs-n" id="lr-mbr-stsnk231" name="lr-mbr-stsnk231" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"110"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-mbr-stsnk231">{"Minimum – Milk chocolate bar 40 g"}</label>
                            <input className="field__input prs-n" id="ln-mbr-stsnk231" name="ln-mbr-stsnk231" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"90"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-mbr-stsnk231">{"Maximum – Milk chocolate bar 40 g"}</label>
                            <input className="field__input prs-n" id="lx-mbr-stsnk231" name="lx-mbr-stsnk231" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"240"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-mbr-stsnk231">{"Par – Milk chocolate bar 40 g"}</label>
                            <input className="field__input prs-n" id="lp-mbr-stsnk231" name="lp-mbr-stsnk231" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={"200"} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-mbr-stsnk231">{"Lead time (days) – Milk chocolate bar 40 g"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-mbr-stsnk231" name="ll-mbr-stsnk231" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"1"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--mbr" id="l-mbr-stsnk241">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stsnk241">{"Butter cookies 75 g"}</a>
                            <span className="fd-sub">{"ST-SNK-241 · Minibar store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"packet"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-mbr-stsnk241">{"Reorder level – Butter cookies 75 g"}</label>
                            <input className="field__input prs-n" id="lr-mbr-stsnk241" name="lr-mbr-stsnk241" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"110"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-mbr-stsnk241">{"Minimum – Butter cookies 75 g"}</label>
                            <input className="field__input prs-n" id="ln-mbr-stsnk241" name="ln-mbr-stsnk241" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"90"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-mbr-stsnk241">{"Maximum – Butter cookies 75 g"}</label>
                            <input className="field__input prs-n" id="lx-mbr-stsnk241" name="lx-mbr-stsnk241" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"240"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-mbr-stsnk241">{"Par – Butter cookies 75 g"}</label>
                            <input className="field__input prs-n" id="lp-mbr-stsnk241" name="lp-mbr-stsnk241" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={"200"} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-mbr-stsnk241">{"Lead time (days) – Butter cookies 75 g"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-mbr-stsnk241" name="ll-mbr-stsnk241" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"1"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--mbr" id="l-mbr-stsnk251">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stsnk251">{"Instant noodles cup 70 g"}</a>
                            <span className="fd-sub">{"ST-SNK-251 · Minibar store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"nos"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-mbr-stsnk251">{"Reorder level – Instant noodles cup 70 g"}</label>
                            <input className="field__input prs-n" id="lr-mbr-stsnk251" name="lr-mbr-stsnk251" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"50"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-mbr-stsnk251">{"Minimum – Instant noodles cup 70 g"}</label>
                            <input className="field__input prs-n" id="ln-mbr-stsnk251" name="ln-mbr-stsnk251" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"40"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-mbr-stsnk251">{"Maximum – Instant noodles cup 70 g"}</label>
                            <input className="field__input prs-n" id="lx-mbr-stsnk251" name="lx-mbr-stsnk251" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"120"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-mbr-stsnk251">{"Par – Instant noodles cup 70 g"}</label>
                            <input className="field__input prs-n" id="lp-mbr-stsnk251" name="lp-mbr-stsnk251" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={"100"} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-mbr-stsnk251">{"Lead time (days) – Instant noodles cup 70 g"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-mbr-stsnk251" name="ll-mbr-stsnk251" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"1"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--mbr" id="l-mbr-stsnk261">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stsnk261">{"Masala peanuts 50 g"}</a>
                            <span className="fd-sub">{"ST-SNK-261 · Minibar store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"packet"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-mbr-stsnk261">{"Reorder level – Masala peanuts 50 g"}</label>
                            <input className="field__input prs-n" id="lr-mbr-stsnk261" name="lr-mbr-stsnk261" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"38"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-mbr-stsnk261">{"Minimum – Masala peanuts 50 g"}</label>
                            <input className="field__input prs-n" id="ln-mbr-stsnk261" name="ln-mbr-stsnk261" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"30"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-mbr-stsnk261">{"Maximum – Masala peanuts 50 g"}</label>
                            <input className="field__input prs-n" id="lx-mbr-stsnk261" name="lx-mbr-stsnk261" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"90"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-mbr-stsnk261">{"Par – Masala peanuts 50 g"}</label>
                            <input className="field__input prs-n" id="lp-mbr-stsnk261" name="lp-mbr-stsnk261" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={"75"} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-mbr-stsnk261">{"Lead time (days) – Masala peanuts 50 g"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-mbr-stsnk261" name="ll-mbr-stsnk261" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"1"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--eng" id="l-eng-steng009">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-steng009">{"Bedside switch panel"}</a>
                            <span className="fd-sub">{"ST-ENG-009 · Engineering store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"nos"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-eng-steng009">{"Reorder level – Bedside switch panel"}</label>
                            <input className="field__input prs-n" id="lr-eng-steng009" name="lr-eng-steng009" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"3"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-eng-steng009">{"Minimum – Bedside switch panel"}</label>
                            <input className="field__input prs-n" id="ln-eng-steng009" name="ln-eng-steng009" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"2"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-eng-steng009">{"Maximum – Bedside switch panel"}</label>
                            <input className="field__input prs-n" id="lx-eng-steng009" name="lx-eng-steng009" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"10"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-eng-steng009">{"Par – Bedside switch panel"}</label>
                            <input className="field__input prs-n" id="lp-eng-steng009" name="lp-eng-steng009" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={""} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-eng-steng009">{"Lead time (days) – Bedside switch panel"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-eng-steng009" name="ll-eng-steng009" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"7"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--eng" id="l-eng-steng018">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-steng018">{"Refrigerant R-410A (kg)"}</a>
                            <span className="fd-sub">{"ST-ENG-018 · Engineering store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"kg"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-eng-steng018">{"Reorder level – Refrigerant R-410A (kg)"}</label>
                            <input className="field__input prs-n" id="lr-eng-steng018" name="lr-eng-steng018" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"8"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-eng-steng018">{"Minimum – Refrigerant R-410A (kg)"}</label>
                            <input className="field__input prs-n" id="ln-eng-steng018" name="ln-eng-steng018" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"6"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-eng-steng018">{"Maximum – Refrigerant R-410A (kg)"}</label>
                            <input className="field__input prs-n" id="lx-eng-steng018" name="lx-eng-steng018" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"30"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-eng-steng018">{"Par – Refrigerant R-410A (kg)"}</label>
                            <input className="field__input prs-n" id="lp-eng-steng018" name="lp-eng-steng018" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={""} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-eng-steng018">{"Lead time (days) – Refrigerant R-410A (kg)"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-eng-steng018" name="ll-eng-steng018" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"7"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--eng" id="l-eng-steng027">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-steng027">{"Flush valve kit"}</a>
                            <span className="fd-sub">{"ST-ENG-027 · Engineering store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"nos"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-eng-steng027">{"Reorder level – Flush valve kit"}</label>
                            <input className="field__input prs-n" id="lr-eng-steng027" name="lr-eng-steng027" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"4"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-eng-steng027">{"Minimum – Flush valve kit"}</label>
                            <input className="field__input prs-n" id="ln-eng-steng027" name="ln-eng-steng027" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"3"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-eng-steng027">{"Maximum – Flush valve kit"}</label>
                            <input className="field__input prs-n" id="lx-eng-steng027" name="lx-eng-steng027" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"12"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-eng-steng027">{"Par – Flush valve kit"}</label>
                            <input className="field__input prs-n" id="lp-eng-steng027" name="lp-eng-steng027" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={""} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-eng-steng027">{"Lead time (days) – Flush valve kit"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-eng-steng027" name="ll-eng-steng027" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"5"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--eng" id="l-eng-steng031">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-steng031">{"Thermostat (VRV wired)"}</a>
                            <span className="fd-sub">{"ST-ENG-031 · Engineering store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"nos"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-eng-steng031">{"Reorder level – Thermostat (VRV wired)"}</label>
                            <input className="field__input prs-n" id="lr-eng-steng031" name="lr-eng-steng031" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"3"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-eng-steng031">{"Minimum – Thermostat (VRV wired)"}</label>
                            <input className="field__input prs-n" id="ln-eng-steng031" name="ln-eng-steng031" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"2"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-eng-steng031">{"Maximum – Thermostat (VRV wired)"}</label>
                            <input className="field__input prs-n" id="lx-eng-steng031" name="lx-eng-steng031" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"8"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-eng-steng031">{"Par – Thermostat (VRV wired)"}</label>
                            <input className="field__input prs-n" id="lp-eng-steng031" name="lp-eng-steng031" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={""} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-eng-steng031">{"Lead time (days) – Thermostat (VRV wired)"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-eng-steng031" name="ll-eng-steng031" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"10"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--eng" id="l-eng-steng035">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-steng035">{"Mixer cartridge 35 mm"}</a>
                            <span className="fd-sub">{"ST-ENG-035 · Engineering store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"nos"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-eng-steng035">{"Reorder level – Mixer cartridge 35 mm"}</label>
                            <input className="field__input prs-n" id="lr-eng-steng035" name="lr-eng-steng035" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"4"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-eng-steng035">{"Minimum – Mixer cartridge 35 mm"}</label>
                            <input className="field__input prs-n" id="ln-eng-steng035" name="ln-eng-steng035" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"3"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-eng-steng035">{"Maximum – Mixer cartridge 35 mm"}</label>
                            <input className="field__input prs-n" id="lx-eng-steng035" name="lx-eng-steng035" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"12"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-eng-steng035">{"Par – Mixer cartridge 35 mm"}</label>
                            <input className="field__input prs-n" id="lp-eng-steng035" name="lp-eng-steng035" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={""} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-eng-steng035">{"Lead time (days) – Mixer cartridge 35 mm"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-eng-steng035" name="ll-eng-steng035" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"5"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--eng" id="l-eng-steng036">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-steng036">{"Solar / heat pump thermostat"}</a>
                            <span className="fd-sub">{"ST-ENG-036 · Engineering store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"nos"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-eng-steng036">{"Reorder level – Solar / heat pump thermostat"}</label>
                            <input className="field__input prs-n" id="lr-eng-steng036" name="lr-eng-steng036" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"2"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-eng-steng036">{"Minimum – Solar / heat pump thermostat"}</label>
                            <input className="field__input prs-n" id="ln-eng-steng036" name="ln-eng-steng036" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"1"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-eng-steng036">{"Maximum – Solar / heat pump thermostat"}</label>
                            <input className="field__input prs-n" id="lx-eng-steng036" name="lx-eng-steng036" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"6"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-eng-steng036">{"Par – Solar / heat pump thermostat"}</label>
                            <input className="field__input prs-n" id="lp-eng-steng036" name="lp-eng-steng036" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={""} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-eng-steng036">{"Lead time (days) – Solar / heat pump thermostat"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-eng-steng036" name="ll-eng-steng036" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"10"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--eng" id="l-eng-steng044">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-steng044">{"AA batteries (4)"}</a>
                            <span className="fd-sub">{"ST-ENG-044 · Engineering store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"packet"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-eng-steng044">{"Reorder level – AA batteries (4)"}</label>
                            <input className="field__input prs-n" id="lr-eng-steng044" name="lr-eng-steng044" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"24"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-eng-steng044">{"Minimum – AA batteries (4)"}</label>
                            <input className="field__input prs-n" id="ln-eng-steng044" name="ln-eng-steng044" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"20"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-eng-steng044">{"Maximum – AA batteries (4)"}</label>
                            <input className="field__input prs-n" id="lx-eng-steng044" name="lx-eng-steng044" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"80"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-eng-steng044">{"Par – AA batteries (4)"}</label>
                            <input className="field__input prs-n" id="lp-eng-steng044" name="lp-eng-steng044" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={""} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-eng-steng044">{"Lead time (days) – AA batteries (4)"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-eng-steng044" name="ll-eng-steng044" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"3"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--eng" id="l-eng-steng047">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-steng047">{"LED lamp 7 W E14"}</a>
                            <span className="fd-sub">{"ST-ENG-047 · Engineering store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"nos"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-eng-steng047">{"Reorder level – LED lamp 7 W E14"}</label>
                            <input className="field__input prs-n" id="lr-eng-steng047" name="lr-eng-steng047" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"24"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-eng-steng047">{"Minimum – LED lamp 7 W E14"}</label>
                            <input className="field__input prs-n" id="ln-eng-steng047" name="ln-eng-steng047" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"20"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-eng-steng047">{"Maximum – LED lamp 7 W E14"}</label>
                            <input className="field__input prs-n" id="lx-eng-steng047" name="lx-eng-steng047" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"72"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-eng-steng047">{"Par – LED lamp 7 W E14"}</label>
                            <input className="field__input prs-n" id="lp-eng-steng047" name="lp-eng-steng047" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={""} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-eng-steng047">{"Lead time (days) – LED lamp 7 W E14"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-eng-steng047" name="ll-eng-steng047" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"3"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--eng" id="l-eng-steng052">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-steng052">{"Wi-Fi access point"}</a>
                            <span className="fd-sub">{"ST-ENG-052 · Engineering store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"nos"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-eng-steng052">{"Reorder level – Wi-Fi access point"}</label>
                            <input className="field__input prs-n" id="lr-eng-steng052" name="lr-eng-steng052" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"2"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-eng-steng052">{"Minimum – Wi-Fi access point"}</label>
                            <input className="field__input prs-n" id="ln-eng-steng052" name="ln-eng-steng052" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"1"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-eng-steng052">{"Maximum – Wi-Fi access point"}</label>
                            <input className="field__input prs-n" id="lx-eng-steng052" name="lx-eng-steng052" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"4"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-eng-steng052">{"Par – Wi-Fi access point"}</label>
                            <input className="field__input prs-n" id="lp-eng-steng052" name="lp-eng-steng052" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={""} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-eng-steng052">{"Lead time (days) – Wi-Fi access point"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-eng-steng052" name="ll-eng-steng052" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"10"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--eng" id="l-eng-steng061">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-steng061">{"Curtain track bracket"}</a>
                            <span className="fd-sub">{"ST-ENG-061 · Engineering store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"nos"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-eng-steng061">{"Reorder level – Curtain track bracket"}</label>
                            <input className="field__input prs-n" id="lr-eng-steng061" name="lr-eng-steng061" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"36"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-eng-steng061">{"Minimum – Curtain track bracket"}</label>
                            <input className="field__input prs-n" id="ln-eng-steng061" name="ln-eng-steng061" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"30"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-eng-steng061">{"Maximum – Curtain track bracket"}</label>
                            <input className="field__input prs-n" id="lx-eng-steng061" name="lx-eng-steng061" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"100"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-eng-steng061">{"Par – Curtain track bracket"}</label>
                            <input className="field__input prs-n" id="lp-eng-steng061" name="lp-eng-steng061" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={""} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-eng-steng061">{"Lead time (days) – Curtain track bracket"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-eng-steng061" name="ll-eng-steng061" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"7"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--eng" id="l-eng-steng074">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-steng074">{"Gypsum board 6 x 4 ft"}</a>
                            <span className="fd-sub">{"ST-ENG-074 · Engineering store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"nos"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-eng-steng074">{"Reorder level – Gypsum board 6 x 4 ft"}</label>
                            <input className="field__input prs-n" id="lr-eng-steng074" name="lr-eng-steng074" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"8"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-eng-steng074">{"Minimum – Gypsum board 6 x 4 ft"}</label>
                            <input className="field__input prs-n" id="ln-eng-steng074" name="ln-eng-steng074" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"6"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-eng-steng074">{"Maximum – Gypsum board 6 x 4 ft"}</label>
                            <input className="field__input prs-n" id="lx-eng-steng074" name="lx-eng-steng074" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"20"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-eng-steng074">{"Par – Gypsum board 6 x 4 ft"}</label>
                            <input className="field__input prs-n" id="lp-eng-steng074" name="lp-eng-steng074" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={""} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-eng-steng074">{"Lead time (days) – Gypsum board 6 x 4 ft"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-eng-steng074" name="ll-eng-steng074" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"7"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--eng" id="l-eng-steng081">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-steng081">{"Door gasket – cold room (m)"}</a>
                            <span className="fd-sub">{"ST-ENG-081 · Engineering store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"m"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-eng-steng081">{"Reorder level – Door gasket – cold room (m)"}</label>
                            <input className="field__input prs-n" id="lr-eng-steng081" name="lr-eng-steng081" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"8"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-eng-steng081">{"Minimum – Door gasket – cold room (m)"}</label>
                            <input className="field__input prs-n" id="ln-eng-steng081" name="ln-eng-steng081" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"5"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-eng-steng081">{"Maximum – Door gasket – cold room (m)"}</label>
                            <input className="field__input prs-n" id="lx-eng-steng081" name="lx-eng-steng081" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"30"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-eng-steng081">{"Par – Door gasket – cold room (m)"}</label>
                            <input className="field__input prs-n" id="lp-eng-steng081" name="lp-eng-steng081" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={""} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-eng-steng081">{"Lead time (days) – Door gasket – cold room (m)"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-eng-steng081" name="ll-eng-steng081" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"10"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--eng" id="l-eng-steng090">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-steng090">{"Anti-skid floor tile 300 mm"}</a>
                            <span className="fd-sub">{"ST-ENG-090 · Engineering store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"nos"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-eng-steng090">{"Reorder level – Anti-skid floor tile 300 mm"}</label>
                            <input className="field__input prs-n" id="lr-eng-steng090" name="lr-eng-steng090" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"50"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-eng-steng090">{"Minimum – Anti-skid floor tile 300 mm"}</label>
                            <input className="field__input prs-n" id="ln-eng-steng090" name="ln-eng-steng090" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"40"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-eng-steng090">{"Maximum – Anti-skid floor tile 300 mm"}</label>
                            <input className="field__input prs-n" id="lx-eng-steng090" name="lx-eng-steng090" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"200"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-eng-steng090">{"Par – Anti-skid floor tile 300 mm"}</label>
                            <input className="field__input prs-n" id="lp-eng-steng090" name="lp-eng-steng090" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={""} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-eng-steng090">{"Lead time (days) – Anti-skid floor tile 300 mm"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-eng-steng090" name="ll-eng-steng090" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"10"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--eng" id="l-eng-steng101">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-steng101">{"LED panel 2 x 2 ft 36 W"}</a>
                            <span className="fd-sub">{"ST-ENG-101 · Engineering store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"nos"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-eng-steng101">{"Reorder level – LED panel 2 x 2 ft 36 W"}</label>
                            <input className="field__input prs-n" id="lr-eng-steng101" name="lr-eng-steng101" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"10"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-eng-steng101">{"Minimum – LED panel 2 x 2 ft 36 W"}</label>
                            <input className="field__input prs-n" id="ln-eng-steng101" name="ln-eng-steng101" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"6"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-eng-steng101">{"Maximum – LED panel 2 x 2 ft 36 W"}</label>
                            <input className="field__input prs-n" id="lx-eng-steng101" name="lx-eng-steng101" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"24"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-eng-steng101">{"Par – LED panel 2 x 2 ft 36 W"}</label>
                            <input className="field__input prs-n" id="lp-eng-steng101" name="lp-eng-steng101" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={""} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-eng-steng101">{"Lead time (days) – LED panel 2 x 2 ft 36 W"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-eng-steng101" name="ll-eng-steng101" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"3"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--eng" id="l-eng-steng102">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-steng102">{"Contactor 32 A 3-pole"}</a>
                            <span className="fd-sub">{"ST-ENG-102 · Engineering store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"nos"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-eng-steng102">{"Reorder level – Contactor 32 A 3-pole"}</label>
                            <input className="field__input prs-n" id="lr-eng-steng102" name="lr-eng-steng102" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"4"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-eng-steng102">{"Minimum – Contactor 32 A 3-pole"}</label>
                            <input className="field__input prs-n" id="ln-eng-steng102" name="ln-eng-steng102" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"2"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-eng-steng102">{"Maximum – Contactor 32 A 3-pole"}</label>
                            <input className="field__input prs-n" id="lx-eng-steng102" name="lx-eng-steng102" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"10"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-eng-steng102">{"Par – Contactor 32 A 3-pole"}</label>
                            <input className="field__input prs-n" id="lp-eng-steng102" name="lp-eng-steng102" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={""} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-eng-steng102">{"Lead time (days) – Contactor 32 A 3-pole"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-eng-steng102" name="ll-eng-steng102" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"3"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--eng" id="l-eng-steng103">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-steng103">{"Brass burner 4 inch"}</a>
                            <span className="fd-sub">{"ST-ENG-103 · Engineering store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"nos"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-eng-steng103">{"Reorder level – Brass burner 4 inch"}</label>
                            <input className="field__input prs-n" id="lr-eng-steng103" name="lr-eng-steng103" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"3"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-eng-steng103">{"Minimum – Brass burner 4 inch"}</label>
                            <input className="field__input prs-n" id="ln-eng-steng103" name="ln-eng-steng103" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"2"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-eng-steng103">{"Maximum – Brass burner 4 inch"}</label>
                            <input className="field__input prs-n" id="lx-eng-steng103" name="lx-eng-steng103" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"8"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-eng-steng103">{"Par – Brass burner 4 inch"}</label>
                            <input className="field__input prs-n" id="lp-eng-steng103" name="lp-eng-steng103" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={""} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-eng-steng103">{"Lead time (days) – Brass burner 4 inch"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-eng-steng103" name="ll-eng-steng103" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"7"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--eng" id="l-eng-steng104">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-steng104">{"Thermocouple"}</a>
                            <span className="fd-sub">{"ST-ENG-104 · Engineering store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"nos"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-eng-steng104">{"Reorder level – Thermocouple"}</label>
                            <input className="field__input prs-n" id="lr-eng-steng104" name="lr-eng-steng104" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"6"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-eng-steng104">{"Minimum – Thermocouple"}</label>
                            <input className="field__input prs-n" id="ln-eng-steng104" name="ln-eng-steng104" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"4"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-eng-steng104">{"Maximum – Thermocouple"}</label>
                            <input className="field__input prs-n" id="lx-eng-steng104" name="lx-eng-steng104" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"16"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-eng-steng104">{"Par – Thermocouple"}</label>
                            <input className="field__input prs-n" id="lp-eng-steng104" name="lp-eng-steng104" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={""} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-eng-steng104">{"Lead time (days) – Thermocouple"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-eng-steng104" name="ll-eng-steng104" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"7"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--eng" id="l-eng-steng105">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-steng105">{"AHU pre-filter 24 x 24 in"}</a>
                            <span className="fd-sub">{"ST-ENG-105 · Engineering store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"nos"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-eng-steng105">{"Reorder level – AHU pre-filter 24 x 24 in"}</label>
                            <input className="field__input prs-n" id="lr-eng-steng105" name="lr-eng-steng105" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"12"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-eng-steng105">{"Minimum – AHU pre-filter 24 x 24 in"}</label>
                            <input className="field__input prs-n" id="ln-eng-steng105" name="ln-eng-steng105" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"8"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-eng-steng105">{"Maximum – AHU pre-filter 24 x 24 in"}</label>
                            <input className="field__input prs-n" id="lx-eng-steng105" name="lx-eng-steng105" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"40"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-eng-steng105">{"Par – AHU pre-filter 24 x 24 in"}</label>
                            <input className="field__input prs-n" id="lp-eng-steng105" name="lp-eng-steng105" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={""} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-eng-steng105">{"Lead time (days) – AHU pre-filter 24 x 24 in"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-eng-steng105" name="ll-eng-steng105" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"5"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--eng" id="l-eng-steng106">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-steng106">{"MCB 16 A 2-pole"}</a>
                            <span className="fd-sub">{"ST-ENG-106 · Engineering store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"nos"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-eng-steng106">{"Reorder level – MCB 16 A 2-pole"}</label>
                            <input className="field__input prs-n" id="lr-eng-steng106" name="lr-eng-steng106" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"12"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-eng-steng106">{"Minimum – MCB 16 A 2-pole"}</label>
                            <input className="field__input prs-n" id="ln-eng-steng106" name="ln-eng-steng106" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"8"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-eng-steng106">{"Maximum – MCB 16 A 2-pole"}</label>
                            <input className="field__input prs-n" id="lx-eng-steng106" name="lx-eng-steng106" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"36"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-eng-steng106">{"Par – MCB 16 A 2-pole"}</label>
                            <input className="field__input prs-n" id="lp-eng-steng106" name="lp-eng-steng106" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={""} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-eng-steng106">{"Lead time (days) – MCB 16 A 2-pole"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-eng-steng106" name="ll-eng-steng106" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"3"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--eng" id="l-eng-steng107">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-steng107">{"Ball valve 1/2 in (brass)"}</a>
                            <span className="fd-sub">{"ST-ENG-107 · Engineering store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"nos"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-eng-steng107">{"Reorder level – Ball valve 1/2 in (brass)"}</label>
                            <input className="field__input prs-n" id="lr-eng-steng107" name="lr-eng-steng107" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"12"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-eng-steng107">{"Minimum – Ball valve 1/2 in (brass)"}</label>
                            <input className="field__input prs-n" id="ln-eng-steng107" name="ln-eng-steng107" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"8"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-eng-steng107">{"Maximum – Ball valve 1/2 in (brass)"}</label>
                            <input className="field__input prs-n" id="lx-eng-steng107" name="lx-eng-steng107" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"40"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-eng-steng107">{"Par – Ball valve 1/2 in (brass)"}</label>
                            <input className="field__input prs-n" id="lp-eng-steng107" name="lp-eng-steng107" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={""} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-eng-steng107">{"Lead time (days) – Ball valve 1/2 in (brass)"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-eng-steng107" name="ll-eng-steng107" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"3"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--hkl" id="l-hkl-stlin113">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stlin113">{"Bed sheet king 274 x 297 cm"}</a>
                            <span className="fd-sub">{"ST-LIN-113 · Housekeeping / linen store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"nos"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-hkl-stlin113">{"Reorder level – Bed sheet king 274 x 297 cm"}</label>
                            <input className="field__input prs-n" id="lr-hkl-stlin113" name="lr-hkl-stlin113" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"541"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-hkl-stlin113">{"Minimum – Bed sheet king 274 x 297 cm"}</label>
                            <input className="field__input prs-n" id="ln-hkl-stlin113" name="ln-hkl-stlin113" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"497"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-hkl-stlin113">{"Maximum – Bed sheet king 274 x 297 cm"}</label>
                            <input className="field__input prs-n" id="lx-hkl-stlin113" name="lx-hkl-stlin113" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"607"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-hkl-stlin113">{"Par – Bed sheet king 274 x 297 cm"}</label>
                            <input className="field__input prs-n" id="lp-hkl-stlin113" name="lp-hkl-stlin113" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={"552"} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-hkl-stlin113">{"Lead time (days) – Bed sheet king 274 x 297 cm"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-hkl-stlin113" name="ll-hkl-stlin113" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"14"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--hkl" id="l-hkl-stlin117">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stlin117">{"Pillow case 50 x 75 cm"}</a>
                            <span className="fd-sub">{"ST-LIN-117 · Housekeeping / linen store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"nos"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-hkl-stlin117">{"Reorder level – Pillow case 50 x 75 cm"}</label>
                            <input className="field__input prs-n" id="lr-hkl-stlin117" name="lr-hkl-stlin117" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"1082"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-hkl-stlin117">{"Minimum – Pillow case 50 x 75 cm"}</label>
                            <input className="field__input prs-n" id="ln-hkl-stlin117" name="ln-hkl-stlin117" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"994"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-hkl-stlin117">{"Maximum – Pillow case 50 x 75 cm"}</label>
                            <input className="field__input prs-n" id="lx-hkl-stlin117" name="lx-hkl-stlin117" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"1214"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-hkl-stlin117">{"Par – Pillow case 50 x 75 cm"}</label>
                            <input className="field__input prs-n" id="lp-hkl-stlin117" name="lp-hkl-stlin117" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={"1104"} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-hkl-stlin117">{"Lead time (days) – Pillow case 50 x 75 cm"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-hkl-stlin117" name="ll-hkl-stlin117" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"14"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--hkl" id="l-hkl-stlin115">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stlin115">{"Duvet cover king"}</a>
                            <span className="fd-sub">{"ST-LIN-115 · Housekeeping / linen store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"nos"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-hkl-stlin115">{"Reorder level – Duvet cover king"}</label>
                            <input className="field__input prs-n" id="lr-hkl-stlin115" name="lr-hkl-stlin115" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"270"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-hkl-stlin115">{"Minimum – Duvet cover king"}</label>
                            <input className="field__input prs-n" id="ln-hkl-stlin115" name="ln-hkl-stlin115" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"248"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-hkl-stlin115">{"Maximum – Duvet cover king"}</label>
                            <input className="field__input prs-n" id="lx-hkl-stlin115" name="lx-hkl-stlin115" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"303"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-hkl-stlin115">{"Par – Duvet cover king"}</label>
                            <input className="field__input prs-n" id="lp-hkl-stlin115" name="lp-hkl-stlin115" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={"276"} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-hkl-stlin115">{"Lead time (days) – Duvet cover king"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-hkl-stlin115" name="ll-hkl-stlin115" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"14"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--hkl" id="l-hkl-stlin101">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stlin101">{"Bath towel 70 x 140 cm"}</a>
                            <span className="fd-sub">{"ST-LIN-101 · Housekeeping / linen store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"nos"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-hkl-stlin101">{"Reorder level – Bath towel 70 x 140 cm"}</label>
                            <input className="field__input prs-n" id="lr-hkl-stlin101" name="lr-hkl-stlin101" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"531"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-hkl-stlin101">{"Minimum – Bath towel 70 x 140 cm"}</label>
                            <input className="field__input prs-n" id="ln-hkl-stlin101" name="ln-hkl-stlin101" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"497"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-hkl-stlin101">{"Maximum – Bath towel 70 x 140 cm"}</label>
                            <input className="field__input prs-n" id="lx-hkl-stlin101" name="lx-hkl-stlin101" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"607"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-hkl-stlin101">{"Par – Bath towel 70 x 140 cm"}</label>
                            <input className="field__input prs-n" id="lp-hkl-stlin101" name="lp-hkl-stlin101" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={"552"} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-hkl-stlin101">{"Lead time (days) – Bath towel 70 x 140 cm"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-hkl-stlin101" name="ll-hkl-stlin101" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"14"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--hkl" id="l-hkl-stlin102">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stlin102">{"Hand towel 50 x 90 cm"}</a>
                            <span className="fd-sub">{"ST-LIN-102 · Housekeeping / linen store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"nos"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-hkl-stlin102">{"Reorder level – Hand towel 50 x 90 cm"}</label>
                            <input className="field__input prs-n" id="lr-hkl-stlin102" name="lr-hkl-stlin102" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"532"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-hkl-stlin102">{"Minimum – Hand towel 50 x 90 cm"}</label>
                            <input className="field__input prs-n" id="ln-hkl-stlin102" name="ln-hkl-stlin102" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"497"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-hkl-stlin102">{"Maximum – Hand towel 50 x 90 cm"}</label>
                            <input className="field__input prs-n" id="lx-hkl-stlin102" name="lx-hkl-stlin102" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"607"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-hkl-stlin102">{"Par – Hand towel 50 x 90 cm"}</label>
                            <input className="field__input prs-n" id="lp-hkl-stlin102" name="lp-hkl-stlin102" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={"552"} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-hkl-stlin102">{"Lead time (days) – Hand towel 50 x 90 cm"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-hkl-stlin102" name="ll-hkl-stlin102" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"14"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--hkl" id="l-hkl-stlin120">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stlin120">{"Face towel 30 x 30 cm"}</a>
                            <span className="fd-sub">{"ST-LIN-120 · Housekeeping / linen store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"nos"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-hkl-stlin120">{"Reorder level – Face towel 30 x 30 cm"}</label>
                            <input className="field__input prs-n" id="lr-hkl-stlin120" name="lr-hkl-stlin120" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"527"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-hkl-stlin120">{"Minimum – Face towel 30 x 30 cm"}</label>
                            <input className="field__input prs-n" id="ln-hkl-stlin120" name="ln-hkl-stlin120" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"497"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-hkl-stlin120">{"Maximum – Face towel 30 x 30 cm"}</label>
                            <input className="field__input prs-n" id="lx-hkl-stlin120" name="lx-hkl-stlin120" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"607"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-hkl-stlin120">{"Par – Face towel 30 x 30 cm"}</label>
                            <input className="field__input prs-n" id="lp-hkl-stlin120" name="lp-hkl-stlin120" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={"552"} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-hkl-stlin120">{"Lead time (days) – Face towel 30 x 30 cm"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-hkl-stlin120" name="ll-hkl-stlin120" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"14"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--hkl" id="l-hkl-stlin103">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stlin103">{"Bath mat 50 x 80 cm"}</a>
                            <span className="fd-sub">{"ST-LIN-103 · Housekeeping / linen store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"nos"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-hkl-stlin103">{"Reorder level – Bath mat 50 x 80 cm"}</label>
                            <input className="field__input prs-n" id="lr-hkl-stlin103" name="lr-hkl-stlin103" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"259"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-hkl-stlin103">{"Minimum – Bath mat 50 x 80 cm"}</label>
                            <input className="field__input prs-n" id="ln-hkl-stlin103" name="ln-hkl-stlin103" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"248"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-hkl-stlin103">{"Maximum – Bath mat 50 x 80 cm"}</label>
                            <input className="field__input prs-n" id="lx-hkl-stlin103" name="lx-hkl-stlin103" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"303"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-hkl-stlin103">{"Par – Bath mat 50 x 80 cm"}</label>
                            <input className="field__input prs-n" id="lp-hkl-stlin103" name="lp-hkl-stlin103" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={"276"} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-hkl-stlin103">{"Lead time (days) – Bath mat 50 x 80 cm"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-hkl-stlin103" name="ll-hkl-stlin103" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"14"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--hkl" id="l-hkl-stlin111">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stlin111">{"Bathrobe (L / XL)"}</a>
                            <span className="fd-sub">{"ST-LIN-111 · Housekeeping / linen store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"nos"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-hkl-stlin111">{"Reorder level – Bathrobe (L / XL)"}</label>
                            <input className="field__input prs-n" id="lr-hkl-stlin111" name="lr-hkl-stlin111" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"22"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-hkl-stlin111">{"Minimum – Bathrobe (L / XL)"}</label>
                            <input className="field__input prs-n" id="ln-hkl-stlin111" name="ln-hkl-stlin111" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"20"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-hkl-stlin111">{"Maximum – Bathrobe (L / XL)"}</label>
                            <input className="field__input prs-n" id="lx-hkl-stlin111" name="lx-hkl-stlin111" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"27"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-hkl-stlin111">{"Par – Bathrobe (L / XL)"}</label>
                            <input className="field__input prs-n" id="lp-hkl-stlin111" name="lp-hkl-stlin111" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={"24"} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-hkl-stlin111">{"Lead time (days) – Bathrobe (L / XL)"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-hkl-stlin111" name="ll-hkl-stlin111" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"21"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--hkl" id="l-hkl-stamn201">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stamn201">{"Shampoo 30 ml bottle"}</a>
                            <span className="fd-sub">{"ST-AMN-201 · Housekeeping / linen store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"bottle"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-hkl-stamn201">{"Reorder level – Shampoo 30 ml bottle"}</label>
                            <input className="field__input prs-n" id="lr-hkl-stamn201" name="lr-hkl-stamn201" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"900"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-hkl-stamn201">{"Minimum – Shampoo 30 ml bottle"}</label>
                            <input className="field__input prs-n" id="ln-hkl-stamn201" name="ln-hkl-stamn201" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"600"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-hkl-stamn201">{"Maximum – Shampoo 30 ml bottle"}</label>
                            <input className="field__input prs-n" id="lx-hkl-stamn201" name="lx-hkl-stamn201" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"2400"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-hkl-stamn201">{"Par – Shampoo 30 ml bottle"}</label>
                            <input className="field__input prs-n" id="lp-hkl-stamn201" name="lp-hkl-stamn201" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={"1200"} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-hkl-stamn201">{"Lead time (days) – Shampoo 30 ml bottle"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-hkl-stamn201" name="ll-hkl-stamn201" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"7"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--hkl" id="l-hkl-stamn204">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stamn204">{"Soap 40 g"}</a>
                            <span className="fd-sub">{"ST-AMN-204 · Housekeeping / linen store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"nos"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-hkl-stamn204">{"Reorder level – Soap 40 g"}</label>
                            <input className="field__input prs-n" id="lr-hkl-stamn204" name="lr-hkl-stamn204" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"1100"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-hkl-stamn204">{"Minimum – Soap 40 g"}</label>
                            <input className="field__input prs-n" id="ln-hkl-stamn204" name="ln-hkl-stamn204" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"800"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-hkl-stamn204">{"Maximum – Soap 40 g"}</label>
                            <input className="field__input prs-n" id="lx-hkl-stamn204" name="lx-hkl-stamn204" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"3000"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-hkl-stamn204">{"Par – Soap 40 g"}</label>
                            <input className="field__input prs-n" id="lp-hkl-stamn204" name="lp-hkl-stamn204" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={"1500"} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-hkl-stamn204">{"Lead time (days) – Soap 40 g"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-hkl-stamn204" name="ll-hkl-stamn204" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"7"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--hkl" id="l-hkl-stamn205">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stamn205">{"Dental kit"}</a>
                            <span className="fd-sub">{"ST-AMN-205 · Housekeeping / linen store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"kit"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-hkl-stamn205">{"Reorder level – Dental kit"}</label>
                            <input className="field__input prs-n" id="lr-hkl-stamn205" name="lr-hkl-stamn205" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"300"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-hkl-stamn205">{"Minimum – Dental kit"}</label>
                            <input className="field__input prs-n" id="ln-hkl-stamn205" name="ln-hkl-stamn205" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"200"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-hkl-stamn205">{"Maximum – Dental kit"}</label>
                            <input className="field__input prs-n" id="lx-hkl-stamn205" name="lx-hkl-stamn205" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"900"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-hkl-stamn205">{"Par – Dental kit"}</label>
                            <input className="field__input prs-n" id="lp-hkl-stamn205" name="lp-hkl-stamn205" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={"450"} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-hkl-stamn205">{"Lead time (days) – Dental kit"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-hkl-stamn205" name="ll-hkl-stamn205" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"7"} />
                          </td>
                        </tr>
                        <tr className="lv-row lv-row--hkl" id="l-hkl-stbev011">
                          <td className="dt__td" data-label="Item" data-w="" data-t="">
                            <a className="fd-link lv-name" href="/stores-setup/sts-01-item-master/#if-stbev011">{"Packaged drinking water 500 ml"}</a>
                            <span className="fd-sub">{"ST-BEV-011 · Housekeeping / linen store"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Unit">{"bottle"}</td>
                          <td className="dt__td" data-label="Reorder level" data-w2="">
                            <label className="sr-only" htmlFor="lr-hkl-stbev011">{"Reorder level – Packaged drinking water 500 ml"}</label>
                            <input className="field__input prs-n" id="lr-hkl-stbev011" name="lr-hkl-stbev011" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"480"} />
                          </td>
                          <td className="dt__td" data-label="Minimum" data-w2="">
                            <label className="sr-only" htmlFor="ln-hkl-stbev011">{"Minimum – Packaged drinking water 500 ml"}</label>
                            <input className="field__input prs-n" id="ln-hkl-stbev011" name="ln-hkl-stbev011" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"300"} />
                          </td>
                          <td className="dt__td" data-label="Maximum" data-w2="">
                            <label className="sr-only" htmlFor="lx-hkl-stbev011">{"Maximum – Packaged drinking water 500 ml"}</label>
                            <input className="field__input prs-n" id="lx-hkl-stbev011" name="lx-hkl-stbev011" type="number" min="0" step="1" required={true} inputMode="numeric" defaultValue={"1500"} />
                          </td>
                          <td className="dt__td" data-label="Par">
                            <label className="sr-only" htmlFor="lp-hkl-stbev011">{"Par – Packaged drinking water 500 ml"}</label>
                            <input className="field__input prs-n" id="lp-hkl-stbev011" name="lp-hkl-stbev011" type="number" min="0" step="1" inputMode="numeric" placeholder="–" defaultValue={"800"} />
                          </td>
                          <td className="dt__td" data-label="Lead time (days)" data-w2="">
                            <label className="sr-only" htmlFor="ll-hkl-stbev011">{"Lead time (days) – Packaged drinking water 500 ml"}</label>
                            <input className="field__input prs-n prs-n--s" id="ll-hkl-stbev011" name="ll-hkl-stbev011" type="number" min="0" max="60" step="1" inputMode="numeric" defaultValue={"2"} />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <p className="prs-note">
                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#info" />
                  </svg>
                  {"Rule: "}
                  <b>{"minimum ≤ reorder level ≤ maximum"}</b>
                  {", and the par of a sub-store is not above its maximum. Every night the reorder monitor (PR-X05) drafts a purchase requisition for items at or below the reorder level; the draft quantity is "}
                  <i>{"maximum − stock on hand − quantity on order"}</i>
                  {". Par is the level an outlet or bar is topped up to by its daily requisition."}
                </p>
                <input className="add-sw" type="checkbox" id="add-2" aria-label="Show the form" />
                <div className="add-panel prs-add">
                  <div className="prs-add__f">
                    <ul className="lv-none">
                      <li>
                        <a href="/stores-setup/sts-01-item-master/#if-stfrp006">{"Raw banana (nendran)"}</a>
                        {" "}
                        <span className="fd-sub">{"ST-FRP-006"}</span>
                      </li>
                      <li>
                        <a href="/stores-setup/sts-01-item-master/#if-stfrp007">{"Curry leaves"}</a>
                        {" "}
                        <span className="fd-sub">{"ST-FRP-007"}</span>
                      </li>
                      <li>
                        <a href="/stores-setup/sts-01-item-master/#if-stfrp008">{"Lemon"}</a>
                        {" "}
                        <span className="fd-sub">{"ST-FRP-008"}</span>
                      </li>
                      <li>
                        <a href="/stores-setup/sts-01-item-master/#if-stmsf015">{"Seer fish (neymeen)"}</a>
                        {" "}
                        <span className="fd-sub">{"ST-MSF-015"}</span>
                      </li>
                      <li>
                        <a href="/stores-setup/sts-01-item-master/#if-stdry025">{"Fresh cream 1 litre"}</a>
                        {" "}
                        <span className="fd-sub">{"ST-DRY-025"}</span>
                      </li>
                      <li>
                        <a href="/stores-setup/sts-01-item-master/#if-stsnk271">{"Trail mix 50 g"}</a>
                        {" "}
                        <span className="fd-sub">{"ST-SNK-271"}</span>
                      </li>
                      <li>
                        <a href="/stores-setup/sts-01-item-master/#if-stsup304">{"Mop head (cotton)"}</a>
                        {" "}
                        <span className="fd-sub">{"ST-SUP-304"}</span>
                      </li>
                      <li>
                        <a href="/stores-setup/sts-01-item-master/#if-stsup305">{"Disposable gloves (box of 100)"}</a>
                        {" "}
                        <span className="fd-sub">{"ST-SUP-305"}</span>
                      </li>
                      <li>
                        <a href="/stores-setup/sts-01-item-master/#if-stamn206">{"Shaving kit"}</a>
                        {" "}
                        <span className="fd-sub">{"ST-AMN-206"}</span>
                      </li>
                      <li>
                        <a href="/stores-setup/sts-01-item-master/#if-stamn207">{"Comb"}</a>
                        {" "}
                        <span className="fd-sub">{"ST-AMN-207"}</span>
                      </li>
                      <li>
                        <a href="/stores-setup/sts-01-item-master/#if-stamn208">{"Sewing kit"}</a>
                        {" "}
                        <span className="fd-sub">{"ST-AMN-208"}</span>
                      </li>
                      <li>
                        <a href="/stores-setup/sts-01-item-master/#if-stamn209">{"Shower cap"}</a>
                        {" "}
                        <span className="fd-sub">{"ST-AMN-209"}</span>
                      </li>
                      <li>
                        <a href="/stores-setup/sts-01-item-master/#if-stamn210">{"Vanity kit"}</a>
                        {" "}
                        <span className="fd-sub">{"ST-AMN-210"}</span>
                      </li>
                      <li>
                        <a href="/stores-setup/sts-01-item-master/#if-stamn212">{"Laundry bag"}</a>
                        {" "}
                        <span className="fd-sub">{"ST-AMN-212"}</span>
                      </li>
                      <li>
                        <a href="/stores-setup/sts-01-item-master/#if-stamn214">{"Sugar sachet"}</a>
                        {" "}
                        <span className="fd-sub">{"ST-AMN-214"}</span>
                      </li>
                      <li>
                        <a href="/stores-setup/sts-01-item-master/#if-stamn215">{"Creamer sachet"}</a>
                        {" "}
                        <span className="fd-sub">{"ST-AMN-215"}</span>
                      </li>
                      <li>
                        <a href="/stores-setup/sts-01-item-master/#if-stlin114">{"Bed sheet single 183 x 274 cm"}</a>
                        {" "}
                        <span className="fd-sub">{"ST-LIN-114"}</span>
                      </li>
                      <li>
                        <a href="/stores-setup/sts-01-item-master/#if-stlin116">{"Duvet king (microfibre)"}</a>
                        {" "}
                        <span className="fd-sub">{"ST-LIN-116"}</span>
                      </li>
                      <li>
                        <a href="/stores-setup/sts-01-item-master/#if-stlin118">{"Pillow (hollow fibre)"}</a>
                        {" "}
                        <span className="fd-sub">{"ST-LIN-118"}</span>
                      </li>
                      <li>
                        <a href="/stores-setup/sts-01-item-master/#if-stlin119">{"Mattress protector king"}</a>
                        {" "}
                        <span className="fd-sub">{"ST-LIN-119"}</span>
                      </li>
                      <li>
                        <a href="/stores-setup/sts-01-item-master/#if-stlin121">{"Pool towel 90 x 180 cm"}</a>
                        {" "}
                        <span className="fd-sub">{"ST-LIN-121"}</span>
                      </li>
                      <li>
                        <a href="/stores-setup/sts-01-item-master/#if-stlin122">{"Table cloth 180 x 180 cm"}</a>
                        {" "}
                        <span className="fd-sub">{"ST-LIN-122"}</span>
                      </li>
                      <li>
                        <a href="/stores-setup/sts-01-item-master/#if-stlin123">{"Napkin 50 x 50 cm"}</a>
                        {" "}
                        <span className="fd-sub">{"ST-LIN-123"}</span>
                      </li>
                      <li>
                        <a href="/stores-setup/sts-01-item-master/#if-stlin125">{"Kitchen apron (pool)"}</a>
                        {" "}
                        <span className="fd-sub">{"ST-LIN-125"}</span>
                      </li>
                      <li>
                        <a href="/stores-setup/sts-01-item-master/#if-stlin126">{"Spa sheet single"}</a>
                        {" "}
                        <span className="fd-sub">{"ST-LIN-126"}</span>
                      </li>
                      <li>
                        <a href="/stores-setup/sts-01-item-master/#if-stprn002">{"Registration card pad (100 sheets)"}</a>
                        {" "}
                        <span className="fd-sub">{"ST-PRN-002"}</span>
                      </li>
                      <li>
                        <a href="/stores-setup/sts-01-item-master/#if-stprn003">{"Letterhead A4 (500 sheets)"}</a>
                        {" "}
                        <span className="fd-sub">{"ST-PRN-003"}</span>
                      </li>
                      <li>
                        <a href="/stores-setup/sts-01-item-master/#if-stprn005">{"Ball pen blue"}</a>
                        {" "}
                        <span className="fd-sub">{"ST-PRN-005"}</span>
                      </li>
                      <li>
                        <a href="/stores-setup/sts-01-item-master/#if-stprn006">{"A4 copier paper 75 GSM (ream)"}</a>
                        {" "}
                        <span className="fd-sub">{"ST-PRN-006"}</span>
                      </li>
                    </ul>
                    <p className="fd-muted">{"Items bought only on request (no stock held) need no level."}</p>
                  </div>
                </div>
                <details className="hk-sys" data-code="STS-X02">
                  <summary>
                    <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#cog" />
                    </svg>
                    {"System – what runs automatically on this screen"}
                  </summary>
                  <ul>
                    <li data-code="STS-X02">
                      <b>{"STS-X02 · Setup audit logger"}</b>
                      {" – Every new level and every changed reorder, minimum, maximum, par or lead time is written to the audit log with user, time, old and new values."}
                    </li>
                    <li data-code="PR-X05">
                      <b>{"PR-X05 · Reorder monitor (Purchase)"}</b>
                      {" – Reads these levels every night and drafts requisitions for items at or below the reorder level."}
                    </li>
                  </ul>
                </details>
                <div className="fd-formfoot">
                  <span className="fd-spacer">{"Last saved 22 Oct 2026, 08:50 by Joseph Chacko (Stores Manager). Written to the setup audit log with the old and new values (STS-X02)."}</span>
                  <a className="btn" href="#cancelled">{"Cancel"}</a>
                  <button className="btn btn--primary" type="submit">{"Save"}</button>
                </div>
              </form>
              <div className="fd-toast" id="t-added" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#plus-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Level added – Main store · Black tea powder (CTC) 1 kg"}
                  <small>{"Reorder 40, minimum 25, maximum 120, lead time 3 days. The row is shown first below. Written to the setup audit log with the old and new values (STS-X02)."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-saved" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Levels saved"}
                  <small>{"111 rows saved. The reorder monitor uses the new levels from tonight's run. Written to the setup audit log with the old and new values (STS-X02)."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="cancelled" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#x-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"No changes saved"}
                  <small>{"The page shows the saved settings again."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="modal modal--lg" id="nolevel" data-flow="nolevel" role="dialog" aria-modal="true" aria-labelledby="nolevel-t">
                <a className="modal__backdrop" href="#" aria-label="Close" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="nolevel-t">{"No level yet"}</h2>
                      <p className="modal__desc">{"29 active items with no reorder level in any store. Use Add level at the top of this screen to set one."}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="pgw">
                      <div className="s-scroll">
                        <table className="dt__table dt--hug" data-nosort="" data-mc="">
                          <caption className="sr-only">{"Active items with no reorder level"}</caption>
                          <thead>
                            <tr>
                              <th scope="col">{"Item"}</th>
                              <th scope="col">{"Group"}</th>
                              <th scope="col">{"Unit"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="dt__td" data-label="Item" data-t="">
                                <b>{"Raw banana (nendran)"}</b>
                                <br />
                                <small>{"ST-FRP-006"}</small>
                              </td>
                              <td className="dt__td" data-label="Group">{"Vegetables & fruits › Vegetables"}</td>
                              <td className="dt__td nw" data-label="Unit">{"kg"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Item" data-t="">
                                <b>{"Curry leaves"}</b>
                                <br />
                                <small>{"ST-FRP-007"}</small>
                              </td>
                              <td className="dt__td" data-label="Group">{"Vegetables & fruits › Fruit, coconut & herbs"}</td>
                              <td className="dt__td nw" data-label="Unit">{"kg"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Item" data-t="">
                                <b>{"Lemon"}</b>
                                <br />
                                <small>{"ST-FRP-008"}</small>
                              </td>
                              <td className="dt__td" data-label="Group">{"Vegetables & fruits › Fruit, coconut & herbs"}</td>
                              <td className="dt__td nw" data-label="Unit">{"kg"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Item" data-t="">
                                <b>{"Seer fish (neymeen)"}</b>
                                <br />
                                <small>{"ST-MSF-015"}</small>
                              </td>
                              <td className="dt__td" data-label="Group">{"Meat & seafood › Fish & prawns"}</td>
                              <td className="dt__td nw" data-label="Unit">{"kg"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Item" data-t="">
                                <b>{"Fresh cream 1 litre"}</b>
                                <br />
                                <small>{"ST-DRY-025"}</small>
                              </td>
                              <td className="dt__td" data-label="Group">{"Dairy › Butter, cream & paneer"}</td>
                              <td className="dt__td nw" data-label="Unit">{"packet"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Item" data-t="">
                                <b>{"Trail mix 50 g"}</b>
                                <br />
                                <small>{"ST-SNK-271"}</small>
                              </td>
                              <td className="dt__td" data-label="Group">{"Snacks & confectionery › Nuts"}</td>
                              <td className="dt__td nw" data-label="Unit">{"packet"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Item" data-t="">
                                <b>{"Mop head (cotton)"}</b>
                                <br />
                                <small>{"ST-SUP-304"}</small>
                              </td>
                              <td className="dt__td" data-label="Group">{"Room & washroom supplies › Cleaning tools"}</td>
                              <td className="dt__td nw" data-label="Unit">{"nos"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Item" data-t="">
                                <b>{"Disposable gloves (box of 100)"}</b>
                                <br />
                                <small>{"ST-SUP-305"}</small>
                              </td>
                              <td className="dt__td" data-label="Group">{"Room & washroom supplies › Paper & disposables"}</td>
                              <td className="dt__td nw" data-label="Unit">{"box"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Item" data-t="">
                                <b>{"Shaving kit"}</b>
                                <br />
                                <small>{"ST-AMN-206"}</small>
                              </td>
                              <td className="dt__td" data-label="Group">{"Guest amenities › Kits"}</td>
                              <td className="dt__td nw" data-label="Unit">{"kit"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Item" data-t="">
                                <b>{"Comb"}</b>
                                <br />
                                <small>{"ST-AMN-207"}</small>
                              </td>
                              <td className="dt__td" data-label="Group">{"Guest amenities › Room accessories"}</td>
                              <td className="dt__td nw" data-label="Unit">{"nos"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Item" data-t="">
                                <b>{"Sewing kit"}</b>
                                <br />
                                <small>{"ST-AMN-208"}</small>
                              </td>
                              <td className="dt__td" data-label="Group">{"Guest amenities › Kits"}</td>
                              <td className="dt__td nw" data-label="Unit">{"kit"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Item" data-t="">
                                <b>{"Shower cap"}</b>
                                <br />
                                <small>{"ST-AMN-209"}</small>
                              </td>
                              <td className="dt__td" data-label="Group">{"Guest amenities › Room accessories"}</td>
                              <td className="dt__td nw" data-label="Unit">{"nos"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Item" data-t="">
                                <b>{"Vanity kit"}</b>
                                <br />
                                <small>{"ST-AMN-210"}</small>
                              </td>
                              <td className="dt__td" data-label="Group">{"Guest amenities › Kits"}</td>
                              <td className="dt__td nw" data-label="Unit">{"kit"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Item" data-t="">
                                <b>{"Laundry bag"}</b>
                                <br />
                                <small>{"ST-AMN-212"}</small>
                              </td>
                              <td className="dt__td" data-label="Group">{"Guest amenities › Room accessories"}</td>
                              <td className="dt__td nw" data-label="Unit">{"nos"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Item" data-t="">
                                <b>{"Sugar sachet"}</b>
                                <br />
                                <small>{"ST-AMN-214"}</small>
                              </td>
                              <td className="dt__td" data-label="Group">{"Guest amenities › Tea & coffee"}</td>
                              <td className="dt__td nw" data-label="Unit">{"sachet"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Item" data-t="">
                                <b>{"Creamer sachet"}</b>
                                <br />
                                <small>{"ST-AMN-215"}</small>
                              </td>
                              <td className="dt__td" data-label="Group">{"Guest amenities › Tea & coffee"}</td>
                              <td className="dt__td nw" data-label="Unit">{"sachet"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Item" data-t="">
                                <b>{"Bed sheet single 183 x 274 cm"}</b>
                                <br />
                                <small>{"ST-LIN-114"}</small>
                              </td>
                              <td className="dt__td" data-label="Group">{"Linen › Bed linen"}</td>
                              <td className="dt__td nw" data-label="Unit">{"nos"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Item" data-t="">
                                <b>{"Duvet king (microfibre)"}</b>
                                <br />
                                <small>{"ST-LIN-116"}</small>
                              </td>
                              <td className="dt__td" data-label="Group">{"Linen › Duvets & pillows"}</td>
                              <td className="dt__td nw" data-label="Unit">{"nos"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Item" data-t="">
                                <b>{"Pillow (hollow fibre)"}</b>
                                <br />
                                <small>{"ST-LIN-118"}</small>
                              </td>
                              <td className="dt__td" data-label="Group">{"Linen › Duvets & pillows"}</td>
                              <td className="dt__td nw" data-label="Unit">{"nos"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Item" data-t="">
                                <b>{"Mattress protector king"}</b>
                                <br />
                                <small>{"ST-LIN-119"}</small>
                              </td>
                              <td className="dt__td" data-label="Group">{"Linen › Duvets & pillows"}</td>
                              <td className="dt__td nw" data-label="Unit">{"nos"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Item" data-t="">
                                <b>{"Pool towel 90 x 180 cm"}</b>
                                <br />
                                <small>{"ST-LIN-121"}</small>
                              </td>
                              <td className="dt__td" data-label="Group">{"Linen › Towels, mats & robes"}</td>
                              <td className="dt__td nw" data-label="Unit">{"nos"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Item" data-t="">
                                <b>{"Table cloth 180 x 180 cm"}</b>
                                <br />
                                <small>{"ST-LIN-122"}</small>
                              </td>
                              <td className="dt__td" data-label="Group">{"Linen › F&B linen"}</td>
                              <td className="dt__td nw" data-label="Unit">{"nos"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Item" data-t="">
                                <b>{"Napkin 50 x 50 cm"}</b>
                                <br />
                                <small>{"ST-LIN-123"}</small>
                              </td>
                              <td className="dt__td" data-label="Group">{"Linen › F&B linen"}</td>
                              <td className="dt__td nw" data-label="Unit">{"nos"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Item" data-t="">
                                <b>{"Kitchen apron (pool)"}</b>
                                <br />
                                <small>{"ST-LIN-125"}</small>
                              </td>
                              <td className="dt__td" data-label="Group">{"Linen › F&B linen"}</td>
                              <td className="dt__td nw" data-label="Unit">{"nos"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Item" data-t="">
                                <b>{"Spa sheet single"}</b>
                                <br />
                                <small>{"ST-LIN-126"}</small>
                              </td>
                              <td className="dt__td" data-label="Group">{"Linen › Bed linen"}</td>
                              <td className="dt__td nw" data-label="Unit">{"nos"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Item" data-t="">
                                <b>{"Registration card pad (100 sheets)"}</b>
                                <br />
                                <small>{"ST-PRN-002"}</small>
                              </td>
                              <td className="dt__td" data-label="Group">{"Printing & stationery › Cards & forms"}</td>
                              <td className="dt__td nw" data-label="Unit">{"packet"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Item" data-t="">
                                <b>{"Letterhead A4 (500 sheets)"}</b>
                                <br />
                                <small>{"ST-PRN-003"}</small>
                              </td>
                              <td className="dt__td" data-label="Group">{"Printing & stationery › Cards & forms"}</td>
                              <td className="dt__td nw" data-label="Unit">{"packet"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Item" data-t="">
                                <b>{"Ball pen blue"}</b>
                                <br />
                                <small>{"ST-PRN-005"}</small>
                              </td>
                              <td className="dt__td" data-label="Group">{"Printing & stationery › Paper & stationery"}</td>
                              <td className="dt__td nw" data-label="Unit">{"nos"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Item" data-t="">
                                <b>{"A4 copier paper 75 GSM (ream)"}</b>
                                <br />
                                <small>{"ST-PRN-006"}</small>
                              </td>
                              <td className="dt__td" data-label="Group">{"Printing & stationery › Paper & stationery Cannot be put on a PO until the HSN is entered"}</td>
                              <td className="dt__td nw" data-label="Unit">{"packet"}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <Link className="btn" to={"/stores-setup/sts-01-item-master"}>{"Item Master"}</Link>
                    <a className="btn btn--primary" href="#">{"Close"}</a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </ScreenShell>
  );
}
