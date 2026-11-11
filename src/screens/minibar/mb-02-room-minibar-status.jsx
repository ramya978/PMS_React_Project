// GENERATED from public/minibar/mb-02-room-minibar-status/index.html by scripts/convert_legacy.py.
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
    "href": "/css/aviv/laundry.css",
    "media": null
  },
  {
    "href": "/css/aviv/minibar.css",
    "media": null
  },
  {
    "href": "/css/aviv/laundry.css",
    "media": null
  },
  {
    "href": "/minibar/mb-02-room-minibar-status/mb-02-room-minibar-status.css",
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

export default function MinibarMb02RoomMinibarStatus() {
  return (
    <ScreenShell title="Room Minibar Status" sheets={SHEETS} inlineCss={INLINE_CSS}>
      <div data-screen="MB-02" data-code="MB-02" data-static="1" className="legacy-body">
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
              <details className="nav__sub" data-group="minibar" open={true}>
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
                  <Link className="nav__item is-active" data-nav="MB-02" aria-current="page" title="Rooms" to={"/minibar/mb-02-room-minibar-status"}>
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
            <main className="app__content" id="main" data-code="MB-02" tabIndex="-1">
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
                        <Link to={"/minibar/mb-01-minibar-dashboard"}>{"Minibar"}</Link>
                      </li>
                      <li>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-right" />
                        </svg>
                        <span aria-current="page">{"Rooms"}</span>
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="page-header__row">
                  <div className="page-header__text">
                    <h1 className="page-header__title">{"Room Minibar Status"}</h1>
                  </div>
                  <span className="code-chip" title="Screen code">{"MB-02"}</span>
                  <div className="page-header__filters">
                    <div className="hctl">
                      <label className="hfilter__btn" htmlFor="mb-02-f" title="Show or hide the filters">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#filter" />
                        </svg>
                        <span>{"Filter"}</span>
                        <i className="hfilter__dot" aria-hidden="true" />
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </label>
                      <input className="hfilter__tg" type="checkbox" id="mb-02-f" aria-label="Show filters" />
                      <form className="hfilter" method="get" action="" role="search" aria-label="Filters">
                        <span className="hfilter__hic" title="Filters">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#filter" />
                          </svg>
                        </span>
                        <div className="hfilter__grid">
                          <label className="hf-f">
                            <span className="hf-f__l">{"Floor"}</span>
                            <select className="hf-f__c" name="floor">
                              <option>{"All"}</option>
                              <option>{"Floor 1"}</option>
                              <option>{"Floor 2"}</option>
                              <option>{"Floor 3"}</option>
                              <option>{"Floor 4"}</option>
                              <option>{"Floor 5"}</option>
                            </select>
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </label>
                          <label className="hf-f">
                            <span className="hf-f__l">{"Status"}</span>
                            <select className="hf-f__c" name="status">
                              <option>{"All"}</option>
                              <option>{"Occupied"}</option>
                              <option>{"Vacant"}</option>
                              <option>{"Checked"}</option>
                              <option>{"Missing items"}</option>
                            </select>
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </label>
                        </div>
                        <div className="hfilter__acts">
                          <button className="hfilter__clear" type="reset">
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#x" />
                            </svg>
                            <span>{"Clear"}</span>
                          </button>
                          <a className="hfilter__done" href="#flow-filter">
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check" />
                            </svg>
                            {"Apply"}
                          </a>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="page-header__actions">
                    <a className="btn" href="#mb-p01" data-flow="opener">{"Minibar count entry"}</a>
                    <a className="btn" href="#mb-p04" data-flow="opener">{"Lock / unlock minibar"}</a>
                    <a className="btn" href="#mb-p05" data-flow="opener">{"Room minibar history"}</a>
                    <Link className="btn ph-ic" data-leads-to="MB-04" to={"/minibar/mb-04-replenishment"}>
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#refresh" />
                      </svg>
                      {"Replenishment"}
                    </Link>
                    <a className="btn btn--primary" href="#p01-new" data-leads-to="MB-P01">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#plus" />
                      </svg>
                      {"New count"}
                    </a>
                  </div>
                </div>
              </header>
              <p className="field__hint" data-flow="mb02-sh">{"Each item has a shelf position and par from its layout (MBS-03); see the layout chart."}</p>
              <div className="law mr">
                <div className="hb-mks" aria-hidden="true">
                  <i className="pm" id="cd-all" />
                  <i className="pm" id="cd-dep" />
                  <i className="pm" id="cd-stay" />
                  <i className="pm" id="cd-24" />
                  <i className="pm" id="zero" />
                </div>
                <div className="mr-bar">
                  <nav className="hv la-views" aria-label="Views">
                    <a className="hv__v la-v--def" href="#cd-all" data-v="cd-all">
                      <span>{"All rooms"}</span>
                      <b className="num">{"92"}</b>
                    </a>
                    <a className="hv__v" href="#cd-dep" data-v="cd-dep">
                      <span>{"Departure today"}</span>
                      <b className="num">{"13"}</b>
                    </a>
                    <a className="hv__v" href="#cd-stay" data-v="cd-stay">
                      <span>{"Stayover"}</span>
                      <b className="num">{"50"}</b>
                    </a>
                    <a className="hv__v" href="#cd-24" data-v="cd-24">
                      <span>{"Not checked > 24 h"}</span>
                      <b className="num">{"5"}</b>
                    </a>
                  </nav>
                  <div className="mr-filt" role="group" aria-label="Floor and room type">
                    <span className="mr-filt__k">{"Floor"}</span>
                    <label className="mr-chip">
                      <input className="sr-only mr-fl" type="checkbox" id="fl1" name="floor" value="1" />
                      <span>{"Floor 1"}</span>
                    </label>
                    <label className="mr-chip">
                      <input className="sr-only mr-fl" type="checkbox" id="fl2" name="floor" value="2" />
                      <span>{"Floor 2"}</span>
                    </label>
                    <label className="mr-chip">
                      <input className="sr-only mr-fl" type="checkbox" id="fl3" name="floor" value="3" />
                      <span>{"Floor 3"}</span>
                    </label>
                    <label className="mr-chip">
                      <input className="sr-only mr-fl" type="checkbox" id="fl4" name="floor" value="4" />
                      <span>{"Floor 4"}</span>
                    </label>
                    <label className="mr-chip">
                      <input className="sr-only mr-fl" type="checkbox" id="fl5" name="floor" value="5" />
                      <span>{"Floor 5"}</span>
                    </label>
                    <span className="mr-filt__k">{"Type"}</span>
                    <label className="mr-chip">
                      <input className="sr-only mr-ty" type="checkbox" id="ty-GDLX" name="type" value="GDLX" />
                      <span>{"GDLX"}</span>
                    </label>
                    <label className="mr-chip">
                      <input className="sr-only mr-ty" type="checkbox" id="ty-PDLX" name="type" value="PDLX" />
                      <span>{"PDLX"}</span>
                    </label>
                    <label className="mr-chip">
                      <input className="sr-only mr-ty" type="checkbox" id="ty-DLXS" name="type" value="DLXS" />
                      <span>{"DLXS"}</span>
                    </label>
                    <label className="mr-chip">
                      <input className="sr-only mr-ty" type="checkbox" id="ty-PRMS" name="type" value="PRMS" />
                      <span>{"PRMS"}</span>
                    </label>
                  </div>
                </div>
                <details className="la-help">
                  <summary>
                    <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#help-circle" />
                    </svg>
                    {"How this works"}
                  </summary>
                  <div className="la-help__b">
                    <ol>
                      <li>
                        {"Count the minibar during cleaning or at departure: "}
                        <b>{"Count"}</b>
                        {" opens the count entry for the room."}
                      </li>
                      <li>{"Save puts the lines in the posting queue; they post after 30 minutes unless corrected."}</li>
                      <li>{"Departure rooms are red until they are checked – the front desk is warned at check-out."}</li>
                      <li>{"Lock / Unlock sets a lock or alcohol-free flag; History shows every check and posting of the room."}</li>
                    </ol>
                    <ul>
                      <li>{"Complimentary items (Minibar Setup) post at ₹0.00."}</li>
                      <li>{"Expired items swapped are not charged; damaged / opened items are charged (MBS-04)."}</li>
                      <li>{"Front desk agents see this list read-only."}</li>
                    </ul>
                  </div>
                </details>
                <div className="pgw">
                  <div className="s-scroll">
                    <table className="dt__table mr-t" data-code="MB-02-list" data-mc="">
                      <caption className="sr-only">{"Room minibar status – 92 rooms"}</caption>
                      <thead>
                        <tr>
                          <th scope="col">{"Room / guest status"}</th>
                          <th scope="col">{"Layout"}</th>
                          <th scope="col">{"Last check"}</th>
                          <th scope="col">{"Missing vs layout"}</th>
                          <th scope="col">{"Today’s consumption"}</th>
                          <th scope="col">{"Flags"}</th>
                          <th scope="col">
                            <span className="sr-only">{"Actions"}</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="mr-r f1 t-GDLX cd-stay is-occ" id="r101">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"101"}</span>
                              <span className="mr-g">
                                <b>{"Mr Rohit Neil"}</b>
                                <span className="fd-sub">{"GDLX · Occupied · until 26 Oct"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 18:47"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-101" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-101" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-101" data-leads-to="MB-P05" aria-label="History of room 101">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f1 t-GDLX cd-vac" id="r102">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"102"}</span>
                              <span className="mr-g">
                                <b>{"–"}</b>
                                <span className="fd-sub">{"GDLX · Vacant inspected"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td" colSpan="6">
                            <span className="fd-muted">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#info" />
                              </svg>
                              {" No minibar – accessible room, the fridge is kept free for the guest’s medicines (Minibar Setup MBS-03)"}
                            </span>
                          </td>
                        </tr>
                        <tr className="mr-r f1 t-GDLX cd-stay is-occ" id="r103">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"103"}</span>
                              <span className="mr-g">
                                <b>{"Mr Ajay Jatin"}</b>
                                <span className="fd-sub">{"GDLX · Occupied · until 24 Oct"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 20:01"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-103" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-103" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-103" data-leads-to="MB-P05" aria-label="History of room 103">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f1 t-GDLX cd-stay is-occ" id="r104">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"104"}</span>
                              <span className="mr-g">
                                <b>{"Mr Shibu Krish"}</b>
                                <span className="fd-sub">{"GDLX · Occupied · until 25 Oct"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"22 Oct 07:50"}
                            <span className="fd-sub">{"Joby Thomas · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout">{"Soft drink × 1, Chocolate × 1"}</td>
                          <td className="dt__td" data-label="Today’s consumption">
                            <span className="mr-c">
                              {"Soft drink × 1, Chocolate × 1"}
                              <b className="num">{"₹295.00"}</b>
                              <span className="pill hk-pill ml--disp">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#shield-alert" />
                                </svg>
                                {"Disputed"}
                              </span>
                            </span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-104" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-104" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-104" data-leads-to="MB-P05" aria-label="History of room 104">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f1 t-GDLX cd-stay is-occ" id="r105">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"105"}</span>
                              <span className="mr-g">
                                <b>{"Ms Noura Al Saud"}</b>
                                <span className="fd-sub">{"GDLX · Occupied · until 24 Oct"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 15:15"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-105" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-105" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-105" data-leads-to="MB-P05" aria-label="History of room 105">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f1 t-GDLX cd-vac" id="r106">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"106"}</span>
                              <span className="mr-g">
                                <b>{"–"}</b>
                                <span className="fd-sub">{"GDLX · Vacant inspected"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 16:22"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-106" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-106" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-106" data-leads-to="MB-P05" aria-label="History of room 106">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f1 t-GDLX cd-stay is-occ" id="r107">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"107"}</span>
                              <span className="mr-g">
                                <b>{"Mrs Jyoti Jatin"}</b>
                                <span className="fd-sub">{"GDLX · Occupied · until 23 Oct"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout">
                            {"Alcohol-free"}
                            <span className="fd-sub">{"L-03 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"22 Oct 08:02"}
                            <span className="fd-sub">{"Joby Thomas · Daily · nothing consumed"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-label="Today’s consumption" data-w2="">
                            <span className="fd-muted">{"Nothing consumed"}</span>
                          </td>
                          <td className="dt__td" data-label="Flags" data-w2="">
                            <span className="mr-f mr-f--af" title="Religious / dietary">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Alcohol-free"}
                            </span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-107" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-107" data-leads-to="MB-P04">{"Unlock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-107" data-leads-to="MB-P05" aria-label="History of room 107">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f1 t-GDLX cd-stay is-occ" id="r108">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"108"}</span>
                              <span className="mr-g">
                                <b>{"Mrs Shruti Shaan"}</b>
                                <span className="fd-sub">{"GDLX · Occupied · until 25 Oct"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"22 Oct 08:06"}
                            <span className="fd-sub">{"Joby Thomas · Daily · nothing consumed"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-label="Today’s consumption" data-w2="">
                            <span className="fd-muted">{"Nothing consumed"}</span>
                          </td>
                          <td className="dt__td" data-label="Flags" data-w2="">
                            <span className="mr-f mr-f--comp" title="CR-06 Aviv Club rate">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#gift" />
                              </svg>
                              {"Complimentary"}
                            </span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-108" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-108" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-108" data-leads-to="MB-P05" aria-label="History of room 108">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f1 t-GDLX cd-stay is-occ" id="r109">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"109"}</span>
                              <span className="mr-g">
                                <b>{"Mrs Priya Kabir"}</b>
                                <span className="fd-sub">{"GDLX · Occupied · until 25 Oct"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 19:43"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-109" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-109" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-109" data-leads-to="MB-P05" aria-label="History of room 109">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f1 t-GDLX cd-stay is-occ" id="r110">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"110"}</span>
                              <span className="mr-g">
                                <b>{"Mrs Priya Kabir"}</b>
                                <span className="fd-sub">{"GDLX · Occupied · until 25 Oct"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 20:50"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-110" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-110" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-110" data-leads-to="MB-P05" aria-label="History of room 110">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f1 t-GDLX cd-vac" id="r111">
                          <td className="dt__td" data-label="Room / guest status" data-w2="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"111"}</span>
                              <span className="mr-g">
                                <b>{"–"}</b>
                                <span className="fd-sub">{"GDLX · Vacant dirty"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 21:57"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-111" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-111" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-111" data-leads-to="MB-P05" aria-label="History of room 111">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f1 t-GDLX cd-stay is-occ" id="r112">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"112"}</span>
                              <span className="mr-g">
                                <b>{"Mr Ajay Jatin"}</b>
                                <span className="fd-sub">{"GDLX · Occupied · until 24 Oct"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 15:04"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-112" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-112" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-112" data-leads-to="MB-P05" aria-label="History of room 112">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f1 t-GDLX cd-stay is-occ" id="r113">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"113"}</span>
                              <span className="mr-g">
                                <b>{"Mrs Isha Vihaan"}</b>
                                <span className="fd-sub">{"GDLX · Occupied · until 24 Oct"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout">
                            {"Alcohol-free"}
                            <span className="fd-sub">{"L-03 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"22 Oct 08:15"}
                            <span className="fd-sub">{"Joby Thomas · Daily · nothing consumed"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-label="Today’s consumption" data-w2="">
                            <span className="fd-muted">{"Nothing consumed"}</span>
                          </td>
                          <td className="dt__td" data-label="Flags" data-w2="">
                            <span className="mr-f mr-f--af" title="Minor guests">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Alcohol-free"}
                            </span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-113" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-113" data-leads-to="MB-P04">{"Unlock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-113" data-leads-to="MB-P05" aria-label="History of room 113">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f1 t-GDLX cd-stay is-occ" id="r114">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"114"}</span>
                              <span className="mr-g">
                                <b>{"Mrs Fatima Al Mansoori"}</b>
                                <span className="fd-sub">{"GDLX · Occupied · until 25 Oct"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 17:18"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-114" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-114" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-114" data-leads-to="MB-P05" aria-label="History of room 114">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f1 t-GDLX cd-stay is-occ" id="r115">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"115"}</span>
                              <span className="mr-g">
                                <b>{"Ms Isha Dhruv"}</b>
                                <span className="fd-sub">{"GDLX · Occupied · until 23 Oct"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 18:25"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-115" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-115" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-115" data-leads-to="MB-P05" aria-label="History of room 115">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f1 t-GDLX cd-stay is-occ" id="r116">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"116"}</span>
                              <span className="mr-g">
                                <b>{"Mr Amit Bijoy"}</b>
                                <span className="fd-sub">{"GDLX · Occupied · until 26 Oct"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 19:32"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-label="Flags" data-w2="">
                            <span className="mr-f mr-f--comp" title="CR-08 Travel media">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#gift" />
                              </svg>
                              {"Complimentary"}
                            </span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-116" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-116" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-116" data-leads-to="MB-P05" aria-label="History of room 116">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f1 t-GDLX cd-vac" id="r117">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"117"}</span>
                              <span className="mr-g">
                                <b>{"–"}</b>
                                <span className="fd-sub">{"GDLX · Vacant inspected"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 20:39"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-117" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-117" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-117" data-leads-to="MB-P05" aria-label="History of room 117">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f1 t-GDLX cd-vac" id="r118">
                          <td className="dt__td" data-label="Room / guest status" data-w2="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"118"}</span>
                              <span className="mr-g">
                                <b>{"–"}</b>
                                <span className="fd-sub">{"GDLX · Vacant dirty"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 21:46"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-118" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-118" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-118" data-leads-to="MB-P05" aria-label="History of room 118">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f1 t-GDLX cd-stay is-occ" id="r119">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"119"}</span>
                              <span className="mr-g">
                                <b>{"Mrs Priya Kabir"}</b>
                                <span className="fd-sub">{"GDLX · Occupied · until 25 Oct"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 15:53"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-119" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-119" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-119" data-leads-to="MB-P05" aria-label="History of room 119">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f2 t-GDLX cd-stay is-occ" id="r201">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"201"}</span>
                              <span className="mr-g">
                                <b>{"Ms Kavita Siddharth"}</b>
                                <span className="fd-sub">{"GDLX · Occupied · until 24 Oct"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"22 Oct 08:24"}
                            <span className="fd-sub">{"Joby Thomas · Daily · nothing consumed"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-label="Today’s consumption" data-w2="">
                            <span className="fd-muted">{"Nothing consumed"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-201" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-201" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-201" data-leads-to="MB-P05" aria-label="History of room 201">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f2 t-GDLX cd-stay is-occ" id="r202">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"202"}</span>
                              <span className="mr-g">
                                <b>{"Dr Aswathy Vijay"}</b>
                                <span className="fd-sub">{"GDLX · Occupied · until 25 Oct"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 21:34"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-label="Flags" data-w2="">
                            <span className="mr-f mr-f--comp" title="CR-04 Government dignitary">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#gift" />
                              </svg>
                              {"Complimentary"}
                            </span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-202" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-202" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-202" data-leads-to="MB-P05" aria-label="History of room 202">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f2 t-GDLX cd-vac" id="r203">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"203"}</span>
                              <span className="mr-g">
                                <b>{"–"}</b>
                                <span className="fd-sub">{"GDLX · Vacant inspected"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 15:41"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-203" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-203" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-203" data-leads-to="MB-P05" aria-label="History of room 203">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f2 t-GDLX cd-vac" id="r204">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"204"}</span>
                              <span className="mr-g">
                                <b>{"–"}</b>
                                <span className="fd-sub">{"GDLX · Vacant inspected"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 16:48"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-204" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-204" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-204" data-leads-to="MB-P05" aria-label="History of room 204">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f2 t-GDLX cd-dep is-occ" id="r205">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room la-room--late">{"205"}</span>
                              <span className="mr-g">
                                <b>{"Ms Anna Schneider"}</b>
                                <span className="fd-sub">{"GDLX · Occupied · due out today"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 17:55"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-205" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-205" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-205" data-leads-to="MB-P05" aria-label="History of room 205">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f2 t-GDLX cd-vac" id="r206">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"206"}</span>
                              <span className="mr-g">
                                <b>{"–"}</b>
                                <span className="fd-sub">{"GDLX · Vacant inspected"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 18:02"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-206" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-206" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-206" data-leads-to="MB-P05" aria-label="History of room 206">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f2 t-GDLX cd-dep is-occ" id="r207">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"207"}</span>
                              <span className="mr-g">
                                <b>{"Mr Amit Chirag"}</b>
                                <span className="fd-sub">{"GDLX · Occupied · due out today"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"22 Oct 08:10"}
                            <span className="fd-sub">{"Joby Thomas · Departure"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-label="Today’s consumption">
                            <span className="mr-c">
                              {"Fruit juice × 1, Cookies × 1"}
                              <b className="num">{"₹306.80"}</b>
                              <span className="pill hk-pill ml--post">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"Posted"}
                              </span>
                            </span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-207" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-207" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-207" data-leads-to="MB-P05" aria-label="History of room 207">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f2 t-GDLX cd-stay is-occ" id="r208">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"208"}</span>
                              <span className="mr-g">
                                <b>{"Ms Elsa Lindberg"}</b>
                                <span className="fd-sub">{"GDLX · Occupied · until 26 Oct"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"22 Oct 08:31"}
                            <span className="fd-sub">{"Joby Thomas · Daily · nothing consumed"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">{"Water × 2"}</td>
                          <td className="dt__td" data-label="Today’s consumption" data-w2="">
                            <span className="fd-muted">{"Nothing consumed"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-208" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-208" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-208" data-leads-to="MB-P05" aria-label="History of room 208">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f2 t-GDLX cd-vac" id="r209">
                          <td className="dt__td" data-label="Room / guest status" data-w2="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"209"}</span>
                              <span className="mr-g">
                                <b>{"–"}</b>
                                <span className="fd-sub">{"GDLX · Vacant dirty"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 21:23"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-209" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-209" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-209" data-leads-to="MB-P05" aria-label="History of room 209">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f2 t-GDLX cd-vac" id="r210">
                          <td className="dt__td" data-label="Room / guest status" data-w2="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"210"}</span>
                              <span className="mr-g">
                                <b>{"–"}</b>
                                <span className="fd-sub">{"GDLX · Vacant clean"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 15:30"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-210" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-210" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-210" data-leads-to="MB-P05" aria-label="History of room 210">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f2 t-GDLX cd-stay is-occ" id="r211">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"211"}</span>
                              <span className="mr-g">
                                <b>{"Mr Marco Rossi"}</b>
                                <span className="fd-sub">{"GDLX · Occupied · until 23 Oct"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"22 Oct 09:38"}
                            <span className="fd-sub">{"Joby Thomas · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout">{"Fruit juice × 1, Banana chips × 1"}</td>
                          <td className="dt__td" data-label="Today’s consumption">
                            <span className="mr-c">
                              {"Fruit juice × 1, Banana chips × 1"}
                              <b className="num">{"₹318.60"}</b>
                              <span className="pill hk-pill ml--pend">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#clock" />
                                </svg>
                                {"Pending"}
                              </span>
                            </span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-211" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-211" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-211" data-leads-to="MB-P05" aria-label="History of room 211">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f2 t-GDLX cd-stay is-occ" id="r212">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"212"}</span>
                              <span className="mr-g">
                                <b>{"Mr Ethan Anderson"}</b>
                                <span className="fd-sub">{"GDLX · Occupied · until 23 Oct"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 17:44"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-212" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-212" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-212" data-leads-to="MB-P05" aria-label="History of room 212">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f2 t-GDLX cd-stay is-occ" id="r213">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"213"}</span>
                              <span className="mr-g">
                                <b>{"Mr Omar Al Farsi"}</b>
                                <span className="fd-sub">{"GDLX · Occupied · until 26 Oct"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 18:51"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-213" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-213" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-213" data-leads-to="MB-P05" aria-label="History of room 213">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f2 t-GDLX cd-vac cd-24" id="r214">
                          <td className="dt__td" data-label="Room / guest status" data-w2="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"214"}</span>
                              <span className="mr-g">
                                <b>{"–"}</b>
                                <span className="fd-sub">{"GDLX · Out of order"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"19 Oct 11:20"}
                            <span className="fd-sub">{"Joby Thomas · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-214" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-214" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-214" data-leads-to="MB-P05" aria-label="History of room 214">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f2 t-GDLX cd-vac" id="r215">
                          <td className="dt__td" data-label="Room / guest status" data-w2="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"215"}</span>
                              <span className="mr-g">
                                <b>{"–"}</b>
                                <span className="fd-sub">{"GDLX · Vacant clean"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 20:05"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-215" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-215" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-215" data-leads-to="MB-P05" aria-label="History of room 215">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f2 t-GDLX cd-dep is-occ" id="r216">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room la-room--late">{"216"}</span>
                              <span className="mr-g">
                                <b>{"Mrs Sindhu Wilson"}</b>
                                <span className="fd-sub">{"GDLX · Occupied · due out today"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 21:12"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-216" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-216" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-216" data-leads-to="MB-P05" aria-label="History of room 216">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f2 t-GDLX cd-stay is-occ" id="r217">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"217"}</span>
                              <span className="mr-g">
                                <b>{"Ms Sindhu Rahman"}</b>
                                <span className="fd-sub">{"GDLX · Occupied · until 24 Oct"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 15:19"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-217" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-217" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-217" data-leads-to="MB-P05" aria-label="History of room 217">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f2 t-GDLX cd-stay is-occ" id="r218">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"218"}</span>
                              <span className="mr-g">
                                <b>{"Dr Anjali Rahman"}</b>
                                <span className="fd-sub">{"GDLX · Occupied · until 25 Oct"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 16:26"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-218" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-218" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-218" data-leads-to="MB-P05" aria-label="History of room 218">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f2 t-GDLX cd-stay is-occ" id="r219">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"219"}</span>
                              <span className="mr-g">
                                <b>{"Mr Ajay Jatin"}</b>
                                <span className="fd-sub">{"GDLX · Occupied · until 24 Oct"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 17:33"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-219" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-219" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-219" data-leads-to="MB-P05" aria-label="History of room 219">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f3 t-GDLX cd-stay is-occ" id="r301">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"301"}</span>
                              <span className="mr-g">
                                <b>{"Mr Biju George"}</b>
                                <span className="fd-sub">{"GDLX · Occupied · until 23 Oct"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"22 Oct 08:52"}
                            <span className="fd-sub">{"Joby Thomas · Daily · nothing consumed"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">{"Water × 2"}</td>
                          <td className="dt__td" data-label="Today’s consumption" data-w2="">
                            <span className="fd-muted">{"Nothing consumed"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-301" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-301" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-301" data-leads-to="MB-P05" aria-label="History of room 301">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f3 t-GDLX cd-vac" id="r302">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"302"}</span>
                              <span className="mr-g">
                                <b>{"–"}</b>
                                <span className="fd-sub">{"GDLX · Vacant inspected"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 16:14"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-302" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-302" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-302" data-leads-to="MB-P05" aria-label="History of room 302">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f3 t-GDLX cd-stay is-occ" id="r303">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"303"}</span>
                              <span className="mr-g">
                                <b>{"Ms Charlotte Fraser"}</b>
                                <span className="fd-sub">{"GDLX · Occupied · until 23 Oct"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 17:21"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-303" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-303" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-303" data-leads-to="MB-P05" aria-label="History of room 303">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f3 t-GDLX cd-stay is-occ" id="r304">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"304"}</span>
                              <span className="mr-g">
                                <b>{"Mr Oliver Hughes"}</b>
                                <span className="fd-sub">{"GDLX · Occupied · until 25 Oct"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 18:28"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-304" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-304" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-304" data-leads-to="MB-P05" aria-label="History of room 304">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f3 t-GDLX cd-dep is-occ" id="r305">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room la-room--late">{"305"}</span>
                              <span className="mr-g">
                                <b>{"Mrs Sindhu Wilson"}</b>
                                <span className="fd-sub">{"GDLX · Occupied · due out today"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 19:35"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-305" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-305" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-305" data-leads-to="MB-P05" aria-label="History of room 305">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f3 t-GDLX cd-stay is-occ" id="r306">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"306"}</span>
                              <span className="mr-g">
                                <b>{"Ms Jyoti Kabir"}</b>
                                <span className="fd-sub">{"GDLX · Occupied · until 23 Oct"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 20:42"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-label="Flags" data-w2="">
                            <span className="mr-f mr-f--comp" title="CR-03 Owner / GM guest">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#gift" />
                              </svg>
                              {"Complimentary"}
                            </span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-306" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-306" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-306" data-leads-to="MB-P05" aria-label="History of room 306">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f3 t-GDLX cd-vac" id="r307">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"307"}</span>
                              <span className="mr-g">
                                <b>{"–"}</b>
                                <span className="fd-sub">{"GDLX · Vacant inspected"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 21:49"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-307" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-307" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-307" data-leads-to="MB-P05" aria-label="History of room 307">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f3 t-GDLX cd-vac" id="r308">
                          <td className="dt__td" data-label="Room / guest status" data-w2="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"308"}</span>
                              <span className="mr-g">
                                <b>{"–"}</b>
                                <span className="fd-sub">{"GDLX · Vacant dirty"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 15:56"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-308" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-308" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-308" data-leads-to="MB-P05" aria-label="History of room 308">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f3 t-GDLX cd-stay is-occ" id="r309">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"309"}</span>
                              <span className="mr-g">
                                <b>{"Ms Nandini Rishi"}</b>
                                <span className="fd-sub">{"GDLX · Occupied · until 23 Oct"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 16:03"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-309" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-309" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-309" data-leads-to="MB-P05" aria-label="History of room 309">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f3 t-GDLX cd-stay is-occ" id="r310">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"310"}</span>
                              <span className="mr-g">
                                <b>{"Mr Prasad Pavan"}</b>
                                <span className="fd-sub">{"GDLX · Occupied · until 25 Oct"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 17:10"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-310" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-310" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-310" data-leads-to="MB-P05" aria-label="History of room 310">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f3 t-PDLX cd-vac" id="r311">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"311"}</span>
                              <span className="mr-g">
                                <b>{"–"}</b>
                                <span className="fd-sub">{"PDLX · Vacant inspected"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 18:17"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-311" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-311" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-311" data-leads-to="MB-P05" aria-label="History of room 311">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f3 t-PDLX cd-vac" id="r312">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"312"}</span>
                              <span className="mr-g">
                                <b>{"–"}</b>
                                <span className="fd-sub">{"PDLX · Vacant inspected"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 19:24"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-312" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-312" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-312" data-leads-to="MB-P05" aria-label="History of room 312">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f3 t-PDLX cd-stay is-occ" id="r313">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"313"}</span>
                              <span className="mr-g">
                                <b>{"Ms Nandini Jatin"}</b>
                                <span className="fd-sub">{"PDLX · Occupied · until 25 Oct"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"22 Oct 09:25"}
                            <span className="fd-sub">{"Joby Thomas · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">{"Soft drink × 2, Water × 2"}</td>
                          <td className="dt__td" data-label="Today’s consumption">
                            <span className="mr-c">
                              {"Soft drink × 2, Water × 2 (complimentary)"}
                              <b className="num">{"₹306.80"}</b>
                              <span className="pill hk-pill ml--pend">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#clock" />
                                </svg>
                                {"Pending"}
                              </span>
                            </span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-313" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-313" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-313" data-leads-to="MB-P05" aria-label="History of room 313">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f3 t-PDLX cd-vac" id="r314">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"314"}</span>
                              <span className="mr-g">
                                <b>{"–"}</b>
                                <span className="fd-sub">{"PDLX · Vacant inspected"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 21:38"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-314" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-314" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-314" data-leads-to="MB-P05" aria-label="History of room 314">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f3 t-PDLX cd-vac" id="r315">
                          <td className="dt__td" data-label="Room / guest status" data-w2="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"315"}</span>
                              <span className="mr-g">
                                <b>{"–"}</b>
                                <span className="fd-sub">{"PDLX · Vacant clean"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 15:45"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-315" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-315" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-315" data-leads-to="MB-P05" aria-label="History of room 315">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f3 t-PDLX cd-dep is-occ" id="r316">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room la-room--late">{"316"}</span>
                              <span className="mr-g">
                                <b>{"Ms Shruti Siddharth"}</b>
                                <span className="fd-sub">{"PDLX · Occupied · due out today"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 16:52"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-316" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-316" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-316" data-leads-to="MB-P05" aria-label="History of room 316">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f3 t-PDLX cd-vac" id="r317">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"317"}</span>
                              <span className="mr-g">
                                <b>{"–"}</b>
                                <span className="fd-sub">{"PDLX · Vacant inspected"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 17:59"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-317" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-317" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-317" data-leads-to="MB-P05" aria-label="History of room 317">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f3 t-PDLX cd-stay cd-24 is-occ" id="r318">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"318"}</span>
                              <span className="mr-g">
                                <b>{"Dr Ayesha Chirag"}</b>
                                <span className="fd-sub">{"PDLX · Occupied · until 24 Oct"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"20 Oct 17:40"}
                            <span className="fd-sub">{"Anoop K · Lock set – items counted"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-label="Flags">
                            <span className="mr-f mr-f--lock" title="Credit / no deposit">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#lock" />
                              </svg>
                              {"Locked"}
                            </span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-318" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-318" data-leads-to="MB-P04">{"Unlock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-318" data-leads-to="MB-P05" aria-label="History of room 318">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f3 t-PDLX cd-dep is-occ" id="r319">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"319"}</span>
                              <span className="mr-g">
                                <b>{"Ms Remya Kurian"}</b>
                                <span className="fd-sub">{"PDLX · Occupied · due out today"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"22 Oct 08:40"}
                            <span className="fd-sub">{"Joby Thomas · Departure"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-label="Today’s consumption">
                            <span className="mr-c">
                              {"Beer × 2, Potato chips × 1"}
                              <b className="num">{"₹865.20"}</b>
                              <span className="pill hk-pill ml--post">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"Posted"}
                              </span>
                            </span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-319" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-319" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-319" data-leads-to="MB-P05" aria-label="History of room 319">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f4 t-PDLX cd-stay is-occ" id="r401">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"401"}</span>
                              <span className="mr-g">
                                <b>{"Mr Rahul Philip"}</b>
                                <span className="fd-sub">{"PDLX · Occupied · until 26 Oct"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 17:47"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-401" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-401" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-401" data-leads-to="MB-P05" aria-label="History of room 401">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f4 t-PDLX cd-stay is-occ" id="r402">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"402"}</span>
                              <span className="mr-g">
                                <b>{"Mrs Kavita Siddharth"}</b>
                                <span className="fd-sub">{"PDLX · Occupied · until 25 Oct"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 18:54"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-402" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-402" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-402" data-leads-to="MB-P05" aria-label="History of room 402">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f4 t-PDLX cd-stay is-occ" id="r403">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"403"}</span>
                              <span className="mr-g">
                                <b>{"Mr Luc Moreau"}</b>
                                <span className="fd-sub">{"PDLX · Occupied · until 25 Oct"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 19:01"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-403" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-403" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-403" data-leads-to="MB-P05" aria-label="History of room 403">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f4 t-PDLX cd-dep is-occ" id="r404">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room la-room--late">{"404"}</span>
                              <span className="mr-g">
                                <b>{"Mrs Kavita Ranjan"}</b>
                                <span className="fd-sub">{"PDLX · Occupied · due out today"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 20:08"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-404" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-404" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-404" data-leads-to="MB-P05" aria-label="History of room 404">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f4 t-PDLX cd-vac" id="r405">
                          <td className="dt__td" data-label="Room / guest status" data-w2="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"405"}</span>
                              <span className="mr-g">
                                <b>{"–"}</b>
                                <span className="fd-sub">{"PDLX · Vacant clean"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 21:15"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-405" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-405" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-405" data-leads-to="MB-P05" aria-label="History of room 405">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f4 t-PDLX cd-dep is-occ" id="r406">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room la-room--late">{"406"}</span>
                              <span className="mr-g">
                                <b>{"Mrs Kavita Ranjan"}</b>
                                <span className="fd-sub">{"PDLX · Occupied · due out today"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 15:22"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-406" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-406" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-406" data-leads-to="MB-P05" aria-label="History of room 406">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f4 t-PDLX cd-stay is-occ" id="r407">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"407"}</span>
                              <span className="mr-g">
                                <b>{"Ms Ayesha Sahil"}</b>
                                <span className="fd-sub">{"PDLX · Occupied · until 26 Oct"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 16:29"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-label="Flags" data-w2="">
                            <span className="mr-f mr-f--comp" title="CR-06 Aviv Club rate">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#gift" />
                              </svg>
                              {"Complimentary"}
                            </span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-407" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-407" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-407" data-leads-to="MB-P05" aria-label="History of room 407">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f4 t-PDLX cd-stay is-occ" id="r408">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"408"}</span>
                              <span className="mr-g">
                                <b>{"Ms Lakshmi Mathew"}</b>
                                <span className="fd-sub">{"PDLX · Occupied · until 25 Oct"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 17:36"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-408" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-408" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-408" data-leads-to="MB-P05" aria-label="History of room 408">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f4 t-PDLX cd-stay is-occ" id="r409">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"409"}</span>
                              <span className="mr-g">
                                <b>{"Mr Oliver Hughes"}</b>
                                <span className="fd-sub">{"PDLX · Occupied · until 24 Oct"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"22 Oct 09:32"}
                            <span className="fd-sub">{"Joby Thomas · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">{"Beer × 1, Cashew nuts × 1"}</td>
                          <td className="dt__td" data-label="Today’s consumption">
                            <span className="mr-c">
                              {"Beer × 1, Cashew nuts × 1"}
                              <b className="num">{"₹538.80"}</b>
                              <span className="pill hk-pill ml--pend">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#clock" />
                                </svg>
                                {"Pending"}
                              </span>
                            </span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-409" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-409" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-409" data-leads-to="MB-P05" aria-label="History of room 409">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f4 t-PDLX cd-stay is-occ" id="r410">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"410"}</span>
                              <span className="mr-g">
                                <b>{"Mr Naveen Chirag"}</b>
                                <span className="fd-sub">{"PDLX · Occupied · until 26 Oct"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 19:50"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-410" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-410" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-410" data-leads-to="MB-P05" aria-label="History of room 410">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f4 t-PDLX cd-vac" id="r411">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"411"}</span>
                              <span className="mr-g">
                                <b>{"–"}</b>
                                <span className="fd-sub">{"PDLX · Vacant inspected"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 20:57"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-411" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-411" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-411" data-leads-to="MB-P05" aria-label="History of room 411">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f4 t-PDLX cd-vac" id="r412">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"412"}</span>
                              <span className="mr-g">
                                <b>{"–"}</b>
                                <span className="fd-sub">{"PDLX · Vacant inspected"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 21:04"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-412" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-412" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-412" data-leads-to="MB-P05" aria-label="History of room 412">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f4 t-PDLX cd-vac" id="r413">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"413"}</span>
                              <span className="mr-g">
                                <b>{"–"}</b>
                                <span className="fd-sub">{"PDLX · Vacant inspected"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 15:11"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-413" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-413" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-413" data-leads-to="MB-P05" aria-label="History of room 413">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f4 t-PDLX cd-vac" id="r414">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"414"}</span>
                              <span className="mr-g">
                                <b>{"–"}</b>
                                <span className="fd-sub">{"PDLX · Vacant inspected"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 16:18"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-414" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-414" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-414" data-leads-to="MB-P05" aria-label="History of room 414">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f4 t-PDLX cd-dep is-occ" id="r415">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room la-room--late">{"415"}</span>
                              <span className="mr-g">
                                <b>{"Ms Shruti Siddharth"}</b>
                                <span className="fd-sub">{"PDLX · Occupied · due out today"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 17:25"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-415" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-415" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-415" data-leads-to="MB-P05" aria-label="History of room 415">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f4 t-PDLX cd-dep is-occ" id="r416">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room la-room--late">{"416"}</span>
                              <span className="mr-g">
                                <b>{"Mrs Isha Neil"}</b>
                                <span className="fd-sub">{"PDLX · Occupied · due out today"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 18:32"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-label="Flags" data-w2="">
                            <span className="mr-f mr-f--comp" title="CR-06 Aviv Club rate">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#gift" />
                              </svg>
                              {"Complimentary"}
                            </span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-416" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-416" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-416" data-leads-to="MB-P05" aria-label="History of room 416">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f4 t-PDLX cd-stay is-occ" id="r417">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"417"}</span>
                              <span className="mr-g">
                                <b>{"Mrs Kavita Siddharth"}</b>
                                <span className="fd-sub">{"PDLX · Occupied · until 23 Oct"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 19:39"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-417" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-417" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-417" data-leads-to="MB-P05" aria-label="History of room 417">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f4 t-PDLX cd-vac" id="r418">
                          <td className="dt__td" data-label="Room / guest status" data-w2="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"418"}</span>
                              <span className="mr-g">
                                <b>{"–"}</b>
                                <span className="fd-sub">{"PDLX · Vacant dirty"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 20:46"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-418" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-418" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-418" data-leads-to="MB-P05" aria-label="History of room 418">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f5 t-PDLX cd-stay is-occ" id="r501">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"501"}</span>
                              <span className="mr-g">
                                <b>{"Mr Prasad Manav"}</b>
                                <span className="fd-sub">{"PDLX · Occupied · until 26 Oct"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 19:27"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-501" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-501" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-501" data-leads-to="MB-P05" aria-label="History of room 501">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f5 t-PDLX cd-vac" id="r502">
                          <td className="dt__td" data-label="Room / guest status" data-w2="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"502"}</span>
                              <span className="mr-g">
                                <b>{"–"}</b>
                                <span className="fd-sub">{"PDLX · Vacant dirty"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 20:34"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-502" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-502" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-502" data-leads-to="MB-P05" aria-label="History of room 502">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f5 t-PDLX cd-dep is-occ" id="r503">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room la-room--late">{"503"}</span>
                              <span className="mr-g">
                                <b>{"Mrs Kavita Ranjan"}</b>
                                <span className="fd-sub">{"PDLX · Occupied · due out today"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 21:41"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-503" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-503" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-503" data-leads-to="MB-P05" aria-label="History of room 503">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f5 t-PDLX cd-stay is-occ" id="r504">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"504"}</span>
                              <span className="mr-g">
                                <b>{"Dr Claire Dubois"}</b>
                                <span className="fd-sub">{"PDLX · Occupied · until 26 Oct"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"22 Oct 09:20"}
                            <span className="fd-sub">{"Joby Thomas · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout">{"Sparkling water × 1, Chocolate × 1"}</td>
                          <td className="dt__td" data-label="Today’s consumption">
                            <span className="mr-c">
                              {"Sparkling water × 1, Chocolate × 1"}
                              <b className="num">{"₹354.00"}</b>
                              <span className="pill hk-pill ml--pend">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#clock" />
                                </svg>
                                {"Pending"}
                              </span>
                            </span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-504" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-504" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-504" data-leads-to="MB-P05" aria-label="History of room 504">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f5 t-PDLX cd-dep is-occ" id="r505">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room la-room--late">{"505"}</span>
                              <span className="mr-g">
                                <b>{"Mrs Isha Neil"}</b>
                                <span className="fd-sub">{"PDLX · Occupied · due out today · Mr Ravi Kabir arrives today"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 16:55"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-label="Flags" data-w2="">
                            <span className="mr-f mr-f--comp" title="CR-06 Aviv Club rate">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#gift" />
                              </svg>
                              {"Complimentary"}
                            </span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-505" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-505" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-505" data-leads-to="MB-P05" aria-label="History of room 505">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f5 t-PDLX cd-stay cd-24 is-occ" id="r506">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"506"}</span>
                              <span className="mr-g">
                                <b>{"Dr Ayesha Chirag"}</b>
                                <span className="fd-sub">{"PDLX · Occupied · until 24 Oct"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"20 Oct 17:40"}
                            <span className="fd-sub">{"Anoop K · Lock set – items counted"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-label="Flags">
                            <span className="mr-f mr-f--lock" title="Credit / no deposit">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#lock" />
                              </svg>
                              {"Locked"}
                            </span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-506" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-506" data-leads-to="MB-P04">{"Unlock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-506" data-leads-to="MB-P05" aria-label="History of room 506">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f5 t-PDLX cd-stay is-occ" id="r507">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"507"}</span>
                              <span className="mr-g">
                                <b>{"Mrs Pooja Kunal"}</b>
                                <span className="fd-sub">{"PDLX · Occupied · until 23 Oct"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 18:09"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-507" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-507" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-507" data-leads-to="MB-P05" aria-label="History of room 507">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f5 t-PDLX cd-stay is-occ" id="r508">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"508"}</span>
                              <span className="mr-g">
                                <b>{"Ms Sindhu Rahman"}</b>
                                <span className="fd-sub">{"PDLX · Occupied · until 24 Oct"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 19:16"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-508" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-508" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-508" data-leads-to="MB-P05" aria-label="History of room 508">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f5 t-PDLX cd-stay is-occ" id="r509">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"509"}</span>
                              <span className="mr-g">
                                <b>{"Mr Luc Moreau"}</b>
                                <span className="fd-sub">{"PDLX · Occupied · until 25 Oct"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 20:23"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-509" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-509" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-509" data-leads-to="MB-P05" aria-label="History of room 509">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f5 t-PDLX cd-stay is-occ" id="r510">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"510"}</span>
                              <span className="mr-g">
                                <b>{"Ms Sheela Nathan"}</b>
                                <span className="fd-sub">{"PDLX · Occupied · until 26 Oct"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 21:30"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-510" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-510" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-510" data-leads-to="MB-P05" aria-label="History of room 510">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f5 t-PDLX cd-stay is-occ" id="r511">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"511"}</span>
                              <span className="mr-g">
                                <b>{"Mr Naveen Chirag"}</b>
                                <span className="fd-sub">{"PDLX · Occupied · until 26 Oct"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 15:37"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-511" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-511" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-511" data-leads-to="MB-P05" aria-label="History of room 511">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f5 t-PDLX cd-vac" id="r512">
                          <td className="dt__td" data-label="Room / guest status" data-w2="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"512"}</span>
                              <span className="mr-g">
                                <b>{"–"}</b>
                                <span className="fd-sub">{"PDLX · Vacant dirty"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 16:44"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-512" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-512" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-512" data-leads-to="MB-P05" aria-label="History of room 512">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f5 t-PDLX cd-vac cd-24" id="r513">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"513"}</span>
                              <span className="mr-g">
                                <b>{"–"}</b>
                                <span className="fd-sub">{"PDLX · Out of service"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Standard"}
                            <span className="fd-sub">{"L-01 · 15 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"19 Oct 11:20"}
                            <span className="fd-sub">{"Joby Thomas · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-513" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-513" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-513" data-leads-to="MB-P05" aria-label="History of room 513">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f5 t-DLXS cd-stay is-occ" id="r514">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"514"}</span>
                              <span className="mr-g">
                                <b>{"Mr Jithin Mathew"}</b>
                                <span className="fd-sub">{"DLXS · Occupied · until 23 Oct"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Suite"}
                            <span className="fd-sub">{"L-02 · 32 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 18:58"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-label="Flags" data-w2="">
                            <span className="mr-f mr-f--comp" title="CR-02 Suite welcome">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#gift" />
                              </svg>
                              {"Complimentary"}
                            </span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-514" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-514" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-514" data-leads-to="MB-P05" aria-label="History of room 514">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f5 t-DLXS cd-stay is-occ" id="r515">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"515"}</span>
                              <span className="mr-g">
                                <b>{"Mrs Rekha Krish"}</b>
                                <span className="fd-sub">{"DLXS · Occupied · until 25 Oct"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Suite"}
                            <span className="fd-sub">{"L-02 · 32 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"21 Oct 19:05"}
                            <span className="fd-sub">{"Anoop K · Daily"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-label="Flags" data-w2="">
                            <span className="mr-f mr-f--comp" title="CR-02 Suite welcome">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#gift" />
                              </svg>
                              {"Complimentary"}
                            </span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-515" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-515" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-515" data-leads-to="MB-P05" aria-label="History of room 515">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f5 t-DLXS cd-stay cd-24 is-occ" id="r516">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"516"}</span>
                              <span className="mr-g">
                                <b>{"Ms Nandini Jatin"}</b>
                                <span className="fd-sub">{"DLXS · Occupied · until 25 Oct"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Suite"}
                            <span className="fd-sub">{"L-02 · 32 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"20 Oct 17:40"}
                            <span className="fd-sub">{"Anoop K · Lock set – items counted"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout" data-w2="">
                            <span className="la-ok">{"Full"}</span>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td" data-label="Flags" data-w2="">
                            <span className="mr-f mr-f--lock" title="Management">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#lock" />
                              </svg>
                              {"Locked"}
                            </span>
                            <span className="mr-f mr-f--comp" title="CR-02 Suite welcome">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#gift" />
                              </svg>
                              {"Complimentary"}
                            </span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-516" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-516" data-leads-to="MB-P04">{"Unlock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-516" data-leads-to="MB-P05" aria-label="History of room 516">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="mr-r f5 t-PRMS cd-dep is-occ" id="r517">
                          <td className="dt__td" data-label="Room / guest status" data-w="" data-t="">
                            <div className="mr-rm">
                              <span className="la-room">{"517"}</span>
                              <span className="mr-g">
                                <b>{"Mrs Maya Mohan"}</b>
                                <span className="fd-sub">{"PRMS · Occupied · due out today · Mrs Athira Nirav arrives today"}</span>
                              </span>
                            </div>
                          </td>
                          <td className="dt__td nw" data-label="Layout" data-w2="">
                            {"Suite"}
                            <span className="fd-sub">{"L-02 · 32 pcs"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Last check">
                            {"22 Oct 09:05"}
                            <span className="fd-sub">{"Joby Thomas · Departure"}</span>
                          </td>
                          <td className="dt__td" data-label="Missing vs layout">{"Soft drink × 2, Cashew nuts × 1, Spirits miniature × 1"}</td>
                          <td className="dt__td" data-label="Today’s consumption" data-w="">
                            <span className="mr-c">
                              {"Soft drink × 2 (complimentary), Cashew nuts × 1 (complimentary), Spirits miniature × 1"}
                              <b className="num">{"₹450.00"}</b>
                              <span className="pill hk-pill ml--post">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"Posted"}
                              </span>
                            </span>
                          </td>
                          <td className="dt__td" data-label="Flags" data-w2="">
                            <span className="mr-f mr-f--comp" title="CR-02 Suite welcome">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#gift" />
                              </svg>
                              {"Complimentary"}
                            </span>
                          </td>
                          <td className="dt__td" data-a="">
                            <div className="mr-acts">
                              <a className="btn btn--sm btn--primary" href="#p01-517" data-leads-to="MB-P01">{"Count"}</a>
                              <a className="btn btn--sm" href="#p04-517" data-leads-to="MB-P04">{"Lock"}</a>
                              <a className="btn btn--sm btn--ghost" href="#p05-517" data-leads-to="MB-P05" aria-label="History of room 517">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#history" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <details className="hk-sys">
                  <summary>
                    <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#cog" />
                    </svg>
                    {"System – what runs automatically on this screen"}
                  </summary>
                  <ul>
                    <li>{"Departure checks are created by MB-X02 at 07:00 for every guest due out; rooms turn green when checked."}</li>
                    <li>{"Missing vs layout is rebuilt after each check by MB-X04 – the same lines are on Replenishment (MB-04)."}</li>
                    <li>{"Flags come from Lock / Unlock (MB-P04) and the complimentary rules of the stay."}</li>
                  </ul>
                </details>
                <div className="modal modal--full" id="mb-p01" data-code="MB-P01" role="dialog" aria-modal="true" aria-labelledby="mb-p01-t">
                  <span className="hb-mks" aria-hidden="true">
                    <i className="pm" id="p01-101" />
                    <i className="pm" id="p01-103" />
                    <i className="pm" id="p01-104" />
                    <i className="pm" id="p01-105" />
                    <i className="pm" id="p01-106" />
                    <i className="pm" id="p01-107" />
                    <i className="pm" id="p01-108" />
                    <i className="pm" id="p01-109" />
                    <i className="pm" id="p01-110" />
                    <i className="pm" id="p01-111" />
                    <i className="pm" id="p01-112" />
                    <i className="pm" id="p01-113" />
                    <i className="pm" id="p01-114" />
                    <i className="pm" id="p01-115" />
                    <i className="pm" id="p01-116" />
                    <i className="pm" id="p01-117" />
                    <i className="pm" id="p01-118" />
                    <i className="pm" id="p01-119" />
                    <i className="pm" id="p01-201" />
                    <i className="pm" id="p01-202" />
                    <i className="pm" id="p01-203" />
                    <i className="pm" id="p01-204" />
                    <i className="pm" id="p01-205" />
                    <i className="pm" id="p01-206" />
                    <i className="pm" id="p01-207" />
                    <i className="pm" id="p01-208" />
                    <i className="pm" id="p01-209" />
                    <i className="pm" id="p01-210" />
                    <i className="pm" id="p01-211" />
                    <i className="pm" id="p01-212" />
                    <i className="pm" id="p01-213" />
                    <i className="pm" id="p01-214" />
                    <i className="pm" id="p01-215" />
                    <i className="pm" id="p01-216" />
                    <i className="pm" id="p01-217" />
                    <i className="pm" id="p01-218" />
                    <i className="pm" id="p01-219" />
                    <i className="pm" id="p01-301" />
                    <i className="pm" id="p01-302" />
                    <i className="pm" id="p01-303" />
                    <i className="pm" id="p01-304" />
                    <i className="pm" id="p01-305" />
                    <i className="pm" id="p01-306" />
                    <i className="pm" id="p01-307" />
                    <i className="pm" id="p01-308" />
                    <i className="pm" id="p01-309" />
                    <i className="pm" id="p01-310" />
                    <i className="pm" id="p01-311" />
                    <i className="pm" id="p01-312" />
                    <i className="pm" id="p01-313" />
                    <i className="pm" id="p01-314" />
                    <i className="pm" id="p01-315" />
                    <i className="pm" id="p01-316" />
                    <i className="pm" id="p01-317" />
                    <i className="pm" id="p01-318" />
                    <i className="pm" id="p01-319" />
                    <i className="pm" id="p01-401" />
                    <i className="pm" id="p01-402" />
                    <i className="pm" id="p01-403" />
                    <i className="pm" id="p01-404" />
                    <i className="pm" id="p01-405" />
                    <i className="pm" id="p01-406" />
                    <i className="pm" id="p01-407" />
                    <i className="pm" id="p01-408" />
                    <i className="pm" id="p01-409" />
                    <i className="pm" id="p01-410" />
                    <i className="pm" id="p01-411" />
                    <i className="pm" id="p01-412" />
                    <i className="pm" id="p01-413" />
                    <i className="pm" id="p01-414" />
                    <i className="pm" id="p01-415" />
                    <i className="pm" id="p01-416" />
                    <i className="pm" id="p01-417" />
                    <i className="pm" id="p01-418" />
                    <i className="pm" id="p01-501" />
                    <i className="pm" id="p01-502" />
                    <i className="pm" id="p01-503" />
                    <i className="pm" id="p01-504" />
                    <i className="pm" id="p01-505" />
                    <i className="pm" id="p01-506" />
                    <i className="pm" id="p01-507" />
                    <i className="pm" id="p01-508" />
                    <i className="pm" id="p01-509" />
                    <i className="pm" id="p01-510" />
                    <i className="pm" id="p01-511" />
                    <i className="pm" id="p01-512" />
                    <i className="pm" id="p01-513" />
                    <i className="pm" id="p01-514" />
                    <i className="pm" id="p01-515" />
                    <i className="pm" id="p01-516" />
                    <i className="pm" id="p01-517" />
                    <i className="pm" id="p01-new" />
                  </span>
                  <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                  <form className="modal__box" action="/minibar/mb-03-posting-queue/#counted" method="get">
                    <div className="modal__head">
                      <a className="modal__back" href="#main">{"← Back"}</a>
                      <div>
                        <h2 className="modal__title" id="mb-p01-t">
                          {"Minibar count entry "}
                          <span className="code-chip">{"MB-P01"}</span>
                        </h2>
                        <p className="modal__desc">{"Record what was consumed and refilled. Save puts the lines in the posting queue – they post after the 30-minute grace period (MB-X01). Post now posts at once (departure check, guest at the desk)."}</p>
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
                          <span className="field__label">{"Room"}</span>
                          <div className="pr pc pc--101">
                            <span className="pr__no">{"101"}</span>
                            <span className="pr__t">
                              <b>{"Mr Rohit Neil"}</b>
                              <small>{"GDLX · Standard layout · Occupied · until 26 Oct · folio FK-10082"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--103">
                            <span className="pr__no">{"103"}</span>
                            <span className="pr__t">
                              <b>{"Mr Ajay Jatin"}</b>
                              <small>{"GDLX · Standard layout · Occupied · until 24 Oct · folio FK-10008"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--104">
                            <span className="pr__no">{"104"}</span>
                            <span className="pr__t">
                              <b>{"Mr Shibu Krish"}</b>
                              <small>{"GDLX · Standard layout · Occupied · until 25 Oct · folio FK-10058"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--105">
                            <span className="pr__no">{"105"}</span>
                            <span className="pr__t">
                              <b>{"Ms Noura Al Saud"}</b>
                              <small>{"GDLX · Standard layout · Occupied · until 24 Oct · folio FK-10056"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--106">
                            <span className="pr__no">{"106"}</span>
                            <span className="pr__t">
                              <b>{"Vacant room"}</b>
                              <small>{"GDLX · Standard layout · Vacant inspected"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--107">
                            <span className="pr__no">{"107"}</span>
                            <span className="pr__t">
                              <b>{"Mrs Jyoti Jatin"}</b>
                              <small>{"GDLX · Alcohol-free layout · Occupied · until 23 Oct · folio FK-10002"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--108">
                            <span className="pr__no">{"108"}</span>
                            <span className="pr__t">
                              <b>{"Mrs Shruti Shaan"}</b>
                              <small>{"GDLX · Standard layout · Occupied · until 25 Oct · folio FK-10074"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01) · CR-06 Aviv Club rate"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--109">
                            <span className="pr__no">{"109"}</span>
                            <span className="pr__t">
                              <b>{"Mrs Priya Kabir"}</b>
                              <small>{"GDLX · Standard layout · Occupied · until 25 Oct · folio FK-10035"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--110">
                            <span className="pr__no">{"110"}</span>
                            <span className="pr__t">
                              <b>{"Mrs Priya Kabir"}</b>
                              <small>{"GDLX · Standard layout · Occupied · until 25 Oct · folio FK-10035"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--111">
                            <span className="pr__no">{"111"}</span>
                            <span className="pr__t">
                              <b>{"Vacant room"}</b>
                              <small>{"GDLX · Standard layout · Vacant dirty"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--112">
                            <span className="pr__no">{"112"}</span>
                            <span className="pr__t">
                              <b>{"Mr Ajay Jatin"}</b>
                              <small>{"GDLX · Standard layout · Occupied · until 24 Oct · folio FK-10008"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--113">
                            <span className="pr__no">{"113"}</span>
                            <span className="pr__t">
                              <b>{"Mrs Isha Vihaan"}</b>
                              <small>{"GDLX · Alcohol-free layout · Occupied · until 24 Oct · folio FK-10165"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--114">
                            <span className="pr__no">{"114"}</span>
                            <span className="pr__t">
                              <b>{"Mrs Fatima Al Mansoori"}</b>
                              <small>{"GDLX · Standard layout · Occupied · until 25 Oct · folio FK-10050"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--115">
                            <span className="pr__no">{"115"}</span>
                            <span className="pr__t">
                              <b>{"Ms Isha Dhruv"}</b>
                              <small>{"GDLX · Standard layout · Occupied · until 23 Oct · folio FK-10118"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--116">
                            <span className="pr__no">{"116"}</span>
                            <span className="pr__t">
                              <b>{"Mr Amit Bijoy"}</b>
                              <small>{"GDLX · Standard layout · Occupied · until 26 Oct · folio FK-10011"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01) · CR-08 Travel media"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--117">
                            <span className="pr__no">{"117"}</span>
                            <span className="pr__t">
                              <b>{"Vacant room"}</b>
                              <small>{"GDLX · Standard layout · Vacant inspected"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--118">
                            <span className="pr__no">{"118"}</span>
                            <span className="pr__t">
                              <b>{"Vacant room"}</b>
                              <small>{"GDLX · Standard layout · Vacant dirty"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--119">
                            <span className="pr__no">{"119"}</span>
                            <span className="pr__t">
                              <b>{"Mrs Priya Kabir"}</b>
                              <small>{"GDLX · Standard layout · Occupied · until 25 Oct · folio FK-10035"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--201">
                            <span className="pr__no">{"201"}</span>
                            <span className="pr__t">
                              <b>{"Ms Kavita Siddharth"}</b>
                              <small>{"GDLX · Standard layout · Occupied · until 24 Oct · folio FK-10101"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--202">
                            <span className="pr__no">{"202"}</span>
                            <span className="pr__t">
                              <b>{"Dr Aswathy Vijay"}</b>
                              <small>{"GDLX · Standard layout · Occupied · until 25 Oct · folio FK-10084"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01) · CR-04 Government dignitary"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--203">
                            <span className="pr__no">{"203"}</span>
                            <span className="pr__t">
                              <b>{"Vacant room"}</b>
                              <small>{"GDLX · Standard layout · Vacant inspected"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--204">
                            <span className="pr__no">{"204"}</span>
                            <span className="pr__t">
                              <b>{"Vacant room"}</b>
                              <small>{"GDLX · Standard layout · Vacant inspected"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--205">
                            <span className="pr__no">{"205"}</span>
                            <span className="pr__t">
                              <b>{"Ms Anna Schneider"}</b>
                              <small>{"GDLX · Standard layout · Occupied · due out today · folio FK-10108"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--206">
                            <span className="pr__no">{"206"}</span>
                            <span className="pr__t">
                              <b>{"Vacant room"}</b>
                              <small>{"GDLX · Standard layout · Vacant inspected"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--207">
                            <span className="pr__no">{"207"}</span>
                            <span className="pr__t">
                              <b>{"Mr Amit Chirag"}</b>
                              <small>{"GDLX · Standard layout · Occupied · due out today · folio FK-10104"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--208">
                            <span className="pr__no">{"208"}</span>
                            <span className="pr__t">
                              <b>{"Ms Elsa Lindberg"}</b>
                              <small>{"GDLX · Standard layout · Occupied · until 26 Oct · folio FK-10033"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--209">
                            <span className="pr__no">{"209"}</span>
                            <span className="pr__t">
                              <b>{"Vacant room"}</b>
                              <small>{"GDLX · Standard layout · Vacant dirty"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--210">
                            <span className="pr__no">{"210"}</span>
                            <span className="pr__t">
                              <b>{"Vacant room"}</b>
                              <small>{"GDLX · Standard layout · Vacant clean"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--211">
                            <span className="pr__no">{"211"}</span>
                            <span className="pr__t">
                              <b>{"Mr Marco Rossi"}</b>
                              <small>{"GDLX · Standard layout · Occupied · until 23 Oct · folio FK-10170"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--212">
                            <span className="pr__no">{"212"}</span>
                            <span className="pr__t">
                              <b>{"Mr Ethan Anderson"}</b>
                              <small>{"GDLX · Standard layout · Occupied · until 23 Oct · folio FK-10162"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--213">
                            <span className="pr__no">{"213"}</span>
                            <span className="pr__t">
                              <b>{"Mr Omar Al Farsi"}</b>
                              <small>{"GDLX · Standard layout · Occupied · until 26 Oct · folio FK-10140"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--214">
                            <span className="pr__no">{"214"}</span>
                            <span className="pr__t">
                              <b>{"Vacant room"}</b>
                              <small>{"GDLX · Standard layout · Out of order"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--215">
                            <span className="pr__no">{"215"}</span>
                            <span className="pr__t">
                              <b>{"Vacant room"}</b>
                              <small>{"GDLX · Standard layout · Vacant clean"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--216">
                            <span className="pr__no">{"216"}</span>
                            <span className="pr__t">
                              <b>{"Mrs Sindhu Wilson"}</b>
                              <small>{"GDLX · Standard layout · Occupied · due out today · folio FK-10193"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--217">
                            <span className="pr__no">{"217"}</span>
                            <span className="pr__t">
                              <b>{"Ms Sindhu Rahman"}</b>
                              <small>{"GDLX · Standard layout · Occupied · until 24 Oct · folio FK-10097"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--218">
                            <span className="pr__no">{"218"}</span>
                            <span className="pr__t">
                              <b>{"Dr Anjali Rahman"}</b>
                              <small>{"GDLX · Standard layout · Occupied · until 25 Oct · folio FK-10205"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--219">
                            <span className="pr__no">{"219"}</span>
                            <span className="pr__t">
                              <b>{"Mr Ajay Jatin"}</b>
                              <small>{"GDLX · Standard layout · Occupied · until 24 Oct · folio FK-10008"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--301">
                            <span className="pr__no">{"301"}</span>
                            <span className="pr__t">
                              <b>{"Mr Biju George"}</b>
                              <small>{"GDLX · Standard layout · Occupied · until 23 Oct · folio FK-10069"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--302">
                            <span className="pr__no">{"302"}</span>
                            <span className="pr__t">
                              <b>{"Vacant room"}</b>
                              <small>{"GDLX · Standard layout · Vacant inspected"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--303">
                            <span className="pr__no">{"303"}</span>
                            <span className="pr__t">
                              <b>{"Ms Charlotte Fraser"}</b>
                              <small>{"GDLX · Standard layout · Occupied · until 23 Oct · folio FK-10031"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--304">
                            <span className="pr__no">{"304"}</span>
                            <span className="pr__t">
                              <b>{"Mr Oliver Hughes"}</b>
                              <small>{"GDLX · Standard layout · Occupied · until 25 Oct · folio FK-10143"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--305">
                            <span className="pr__no">{"305"}</span>
                            <span className="pr__t">
                              <b>{"Mrs Sindhu Wilson"}</b>
                              <small>{"GDLX · Standard layout · Occupied · due out today · folio FK-10193"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--306">
                            <span className="pr__no">{"306"}</span>
                            <span className="pr__t">
                              <b>{"Ms Jyoti Kabir"}</b>
                              <small>{"GDLX · Standard layout · Occupied · until 23 Oct · folio FK-10105"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01) · CR-03 Owner / GM guest"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--307">
                            <span className="pr__no">{"307"}</span>
                            <span className="pr__t">
                              <b>{"Vacant room"}</b>
                              <small>{"GDLX · Standard layout · Vacant inspected"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--308">
                            <span className="pr__no">{"308"}</span>
                            <span className="pr__t">
                              <b>{"Vacant room"}</b>
                              <small>{"GDLX · Standard layout · Vacant dirty"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--309">
                            <span className="pr__no">{"309"}</span>
                            <span className="pr__t">
                              <b>{"Ms Nandini Rishi"}</b>
                              <small>{"GDLX · Standard layout · Occupied · until 23 Oct · folio FK-10061"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--310">
                            <span className="pr__no">{"310"}</span>
                            <span className="pr__t">
                              <b>{"Mr Prasad Pavan"}</b>
                              <small>{"GDLX · Standard layout · Occupied · until 25 Oct · folio FK-10103"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--311">
                            <span className="pr__no">{"311"}</span>
                            <span className="pr__t">
                              <b>{"Vacant room"}</b>
                              <small>{"PDLX · Standard layout · Vacant inspected"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--312">
                            <span className="pr__no">{"312"}</span>
                            <span className="pr__t">
                              <b>{"Vacant room"}</b>
                              <small>{"PDLX · Standard layout · Vacant inspected"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--313">
                            <span className="pr__no">{"313"}</span>
                            <span className="pr__t">
                              <b>{"Ms Nandini Jatin"}</b>
                              <small>{"PDLX · Standard layout · Occupied · until 25 Oct · folio FK-10106"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--314">
                            <span className="pr__no">{"314"}</span>
                            <span className="pr__t">
                              <b>{"Vacant room"}</b>
                              <small>{"PDLX · Standard layout · Vacant inspected"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--315">
                            <span className="pr__no">{"315"}</span>
                            <span className="pr__t">
                              <b>{"Vacant room"}</b>
                              <small>{"PDLX · Standard layout · Vacant clean"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--316">
                            <span className="pr__no">{"316"}</span>
                            <span className="pr__t">
                              <b>{"Ms Shruti Siddharth"}</b>
                              <small>{"PDLX · Standard layout · Occupied · due out today · folio FK-10172"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--317">
                            <span className="pr__no">{"317"}</span>
                            <span className="pr__t">
                              <b>{"Vacant room"}</b>
                              <small>{"PDLX · Standard layout · Vacant inspected"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--318">
                            <span className="pr__no">{"318"}</span>
                            <span className="pr__t">
                              <b>{"Dr Ayesha Chirag"}</b>
                              <small>{"PDLX · Standard layout · Occupied · until 24 Oct · folio FK-10159"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--319">
                            <span className="pr__no">{"319"}</span>
                            <span className="pr__t">
                              <b>{"Ms Remya Kurian"}</b>
                              <small>{"PDLX · Standard layout · Occupied · due out today · folio FK-10102"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--401">
                            <span className="pr__no">{"401"}</span>
                            <span className="pr__t">
                              <b>{"Mr Rahul Philip"}</b>
                              <small>{"PDLX · Standard layout · Occupied · until 26 Oct · folio FK-10197"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--402">
                            <span className="pr__no">{"402"}</span>
                            <span className="pr__t">
                              <b>{"Mrs Kavita Siddharth"}</b>
                              <small>{"PDLX · Standard layout · Occupied · until 25 Oct · folio FK-10048"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--403">
                            <span className="pr__no">{"403"}</span>
                            <span className="pr__t">
                              <b>{"Mr Luc Moreau"}</b>
                              <small>{"PDLX · Standard layout · Occupied · until 25 Oct · folio FK-10180"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--404">
                            <span className="pr__no">{"404"}</span>
                            <span className="pr__t">
                              <b>{"Mrs Kavita Ranjan"}</b>
                              <small>{"PDLX · Standard layout · Occupied · due out today · folio FK-10187"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--405">
                            <span className="pr__no">{"405"}</span>
                            <span className="pr__t">
                              <b>{"Vacant room"}</b>
                              <small>{"PDLX · Standard layout · Vacant clean"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--406">
                            <span className="pr__no">{"406"}</span>
                            <span className="pr__t">
                              <b>{"Mrs Kavita Ranjan"}</b>
                              <small>{"PDLX · Standard layout · Occupied · due out today · folio FK-10187"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--407">
                            <span className="pr__no">{"407"}</span>
                            <span className="pr__t">
                              <b>{"Ms Ayesha Sahil"}</b>
                              <small>{"PDLX · Standard layout · Occupied · until 26 Oct · folio FK-10120"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01) · CR-06 Aviv Club rate"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--408">
                            <span className="pr__no">{"408"}</span>
                            <span className="pr__t">
                              <b>{"Ms Lakshmi Mathew"}</b>
                              <small>{"PDLX · Standard layout · Occupied · until 25 Oct · folio FK-10161"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--409">
                            <span className="pr__no">{"409"}</span>
                            <span className="pr__t">
                              <b>{"Mr Oliver Hughes"}</b>
                              <small>{"PDLX · Standard layout · Occupied · until 24 Oct · folio FK-10200"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--410">
                            <span className="pr__no">{"410"}</span>
                            <span className="pr__t">
                              <b>{"Mr Naveen Chirag"}</b>
                              <small>{"PDLX · Standard layout · Occupied · until 26 Oct · folio FK-10109"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--411">
                            <span className="pr__no">{"411"}</span>
                            <span className="pr__t">
                              <b>{"Vacant room"}</b>
                              <small>{"PDLX · Standard layout · Vacant inspected"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--412">
                            <span className="pr__no">{"412"}</span>
                            <span className="pr__t">
                              <b>{"Vacant room"}</b>
                              <small>{"PDLX · Standard layout · Vacant inspected"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--413">
                            <span className="pr__no">{"413"}</span>
                            <span className="pr__t">
                              <b>{"Vacant room"}</b>
                              <small>{"PDLX · Standard layout · Vacant inspected"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--414">
                            <span className="pr__no">{"414"}</span>
                            <span className="pr__t">
                              <b>{"Vacant room"}</b>
                              <small>{"PDLX · Standard layout · Vacant inspected"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--415">
                            <span className="pr__no">{"415"}</span>
                            <span className="pr__t">
                              <b>{"Ms Shruti Siddharth"}</b>
                              <small>{"PDLX · Standard layout · Occupied · due out today · folio FK-10172"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--416">
                            <span className="pr__no">{"416"}</span>
                            <span className="pr__t">
                              <b>{"Mrs Isha Neil"}</b>
                              <small>{"PDLX · Standard layout · Occupied · due out today · folio FK-10123"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01) · CR-06 Aviv Club rate"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--417">
                            <span className="pr__no">{"417"}</span>
                            <span className="pr__t">
                              <b>{"Mrs Kavita Siddharth"}</b>
                              <small>{"PDLX · Standard layout · Occupied · until 23 Oct · folio FK-10203"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--418">
                            <span className="pr__no">{"418"}</span>
                            <span className="pr__t">
                              <b>{"Vacant room"}</b>
                              <small>{"PDLX · Standard layout · Vacant dirty"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--501">
                            <span className="pr__no">{"501"}</span>
                            <span className="pr__t">
                              <b>{"Mr Prasad Manav"}</b>
                              <small>{"PDLX · Standard layout · Occupied · until 26 Oct · folio FK-10178"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--502">
                            <span className="pr__no">{"502"}</span>
                            <span className="pr__t">
                              <b>{"Vacant room"}</b>
                              <small>{"PDLX · Standard layout · Vacant dirty"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--503">
                            <span className="pr__no">{"503"}</span>
                            <span className="pr__t">
                              <b>{"Mrs Kavita Ranjan"}</b>
                              <small>{"PDLX · Standard layout · Occupied · due out today · folio FK-10187"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--504">
                            <span className="pr__no">{"504"}</span>
                            <span className="pr__t">
                              <b>{"Dr Claire Dubois"}</b>
                              <small>{"PDLX · Standard layout · Occupied · until 26 Oct · folio FK-10027"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--505">
                            <span className="pr__no">{"505"}</span>
                            <span className="pr__t">
                              <b>{"Mrs Isha Neil"}</b>
                              <small>{"PDLX · Standard layout · Occupied · due out today · Mr Ravi Kabir arrives today · folio FK-10123"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01) · CR-06 Aviv Club rate"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--506">
                            <span className="pr__no">{"506"}</span>
                            <span className="pr__t">
                              <b>{"Dr Ayesha Chirag"}</b>
                              <small>{"PDLX · Standard layout · Occupied · until 24 Oct · folio FK-10159"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--507">
                            <span className="pr__no">{"507"}</span>
                            <span className="pr__t">
                              <b>{"Mrs Pooja Kunal"}</b>
                              <small>{"PDLX · Standard layout · Occupied · until 23 Oct · folio FK-10010"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--508">
                            <span className="pr__no">{"508"}</span>
                            <span className="pr__t">
                              <b>{"Ms Sindhu Rahman"}</b>
                              <small>{"PDLX · Standard layout · Occupied · until 24 Oct · folio FK-10097"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--509">
                            <span className="pr__no">{"509"}</span>
                            <span className="pr__t">
                              <b>{"Mr Luc Moreau"}</b>
                              <small>{"PDLX · Standard layout · Occupied · until 25 Oct · folio FK-10180"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--510">
                            <span className="pr__no">{"510"}</span>
                            <span className="pr__t">
                              <b>{"Ms Sheela Nathan"}</b>
                              <small>{"PDLX · Standard layout · Occupied · until 26 Oct · folio FK-10145"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--511">
                            <span className="pr__no">{"511"}</span>
                            <span className="pr__t">
                              <b>{"Mr Naveen Chirag"}</b>
                              <small>{"PDLX · Standard layout · Occupied · until 26 Oct · folio FK-10109"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--512">
                            <span className="pr__no">{"512"}</span>
                            <span className="pr__t">
                              <b>{"Vacant room"}</b>
                              <small>{"PDLX · Standard layout · Vacant dirty"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--513">
                            <span className="pr__no">{"513"}</span>
                            <span className="pr__t">
                              <b>{"Vacant room"}</b>
                              <small>{"PDLX · Standard layout · Out of service"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01)"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--514">
                            <span className="pr__no">{"514"}</span>
                            <span className="pr__t">
                              <b>{"Mr Jithin Mathew"}</b>
                              <small>{"DLXS · Suite layout · Occupied · until 23 Oct · folio FK-10232"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01) · CR-02 Suite welcome"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--515">
                            <span className="pr__no">{"515"}</span>
                            <span className="pr__t">
                              <b>{"Mrs Rekha Krish"}</b>
                              <small>{"DLXS · Suite layout · Occupied · until 25 Oct · folio FK-10029"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01) · CR-02 Suite welcome"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--516">
                            <span className="pr__no">{"516"}</span>
                            <span className="pr__t">
                              <b>{"Ms Nandini Jatin"}</b>
                              <small>{"DLXS · Suite layout · Occupied · until 25 Oct · folio FK-10042"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01) · CR-02 Suite welcome"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--517">
                            <span className="pr__no">{"517"}</span>
                            <span className="pr__t">
                              <b>{"Mrs Maya Mohan"}</b>
                              <small>{"PRMS · Suite layout · Occupied · due out today · Mrs Athira Nirav arrives today · folio FK-10142"}</small>
                              <small className="pc-comp">
                                <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#gift" />
                                </svg>
                                {"Complimentary for this stay: Mineral water 2 per guest per day (CR-01) · CR-02 Suite welcome"}
                              </small>
                            </span>
                          </div>
                          <div className="pr pc pc--new">
                            <span className="pr__no">
                              <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#scan" />
                              </svg>
                            </span>
                            <span className="pr__t">
                              <b>{"Scan or type the room"}</b>
                              <small>{"Opened from the dashboard – the room’s layout, par and prices load after the room is chosen"}</small>
                            </span>
                          </div>
                        </div>
                        <div className="field" data-fw="x">
                          <label className="field__label" htmlFor="p01-scan">{"Room (scan / change)"}</label>
                          <input className="field__input" id="p01-scan" name="room" type="text" pattern={"[1-5][0-9]{2}"} maxLength="3" placeholder="e.g. 402" />
                          <span className="field__hint">{"Scan the room QR or type the number – filled when opened from a room"}</span>
                        </div>
                        <fieldset className="field fd-fieldset field--wide ">
                          <legend className="field__label">
                            {"Check type "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </legend>
                          <div className="row fd-multi">
                            <label className="check check--radio">
                              <input className="check__input" type="radio" name="check_type" value="daily" required={true} defaultChecked={true} />
                              <span className="check__box" />
                              {"Daily"}
                            </label>
                            <label className="check check--radio">
                              <input className="check__input" type="radio" name="check_type" value="departure" required={true} />
                              <span className="check__box" />
                              {"Departure"}
                            </label>
                            <label className="check check--radio">
                              <input className="check__input" type="radio" name="check_type" value="arrival" required={true} />
                              <span className="check__box" />
                              {"Arrival (pre-check)"}
                            </label>
                            <label className="check check--radio">
                              <input className="check__input" type="radio" name="check_type" value="audit" required={true} />
                              <span className="check__box" />
                              {"Audit"}
                            </label>
                          </div>
                        </fieldset>
                        <div className="field field--wide">
                          <span className="field__label">
                            {"Item lines "}
                            <span className="fd-muted">{"(from the room’s layout – Minibar Setup)"}</span>
                          </span>
                          <div className="mc-grid mc-grid--l-01">
                            <div className="s-scroll">
                              <table className="dt__table dt--hug" data-mc="">
                                <caption className="sr-only">{"Items of the Standard layout"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Item"}</th>
                                    <th scope="col" className="dt__th--right">{"Par"}</th>
                                    <th scope="col" className="dt__th--right">{"Price"}</th>
                                    <th scope="col">{"Consumed"}</th>
                                    <th scope="col">{"Refilled now"}</th>
                                    <th scope="col">{"Expired swapped"}</th>
                                    <th scope="col">{"Damaged / opened"}</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                      <span className="mi-dot mi-dot--x" aria-hidden="true">
                                        <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#minibar" />
                                        </svg>
                                      </span>
                                      {"Mineral water 500 ml"}
                                    </td>
                                    <td className="dt__td dt__td--right num" data-label="Par">{"2"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Price">{"₹60.00"}</td>
                                    <td className="dt__td" data-label="Consumed" data-w2="">
                                      <label className="sr-only" htmlFor="L-01-MI-01-consumed">{"Consumed – Water"}</label>
                                      <input className="field__input num mc-in" id="L-01-MI-01-consumed" name="consumed_MI-01" type="number" min="0" max="2" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Refilled now" data-w2="">
                                      <label className="sr-only" htmlFor="L-01-MI-01-refilled">{"Refilled now – Water"}</label>
                                      <input className="field__input num mc-in" id="L-01-MI-01-refilled" name="refilled_MI-01" type="number" min="0" max="2" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Expired swapped" data-w2="">
                                      <label className="sr-only" htmlFor="L-01-MI-01-expired">{"Expired swapped – Water"}</label>
                                      <input className="field__input num mc-in" id="L-01-MI-01-expired" name="expired_MI-01" type="number" min="0" max="2" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Damaged / opened" data-w2="">
                                      <label className="sr-only" htmlFor="L-01-MI-01-damaged">{"Damaged / opened – Water"}</label>
                                      <input className="field__input num mc-in" id="L-01-MI-01-damaged" name="damaged_MI-01" type="number" min="0" max="2" defaultValue={"0"} />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                      <span className="mi-dot mi-dot--x" aria-hidden="true">
                                        <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#minibar" />
                                        </svg>
                                      </span>
                                      {"Soft drink can 330 ml"}
                                    </td>
                                    <td className="dt__td dt__td--right num" data-label="Par">{"2"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Price">{"₹130.00"}</td>
                                    <td className="dt__td" data-label="Consumed" data-w2="">
                                      <label className="sr-only" htmlFor="L-01-MI-03-consumed">{"Consumed – Soft drink"}</label>
                                      <input className="field__input num mc-in" id="L-01-MI-03-consumed" name="consumed_MI-03" type="number" min="0" max="2" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Refilled now" data-w2="">
                                      <label className="sr-only" htmlFor="L-01-MI-03-refilled">{"Refilled now – Soft drink"}</label>
                                      <input className="field__input num mc-in" id="L-01-MI-03-refilled" name="refilled_MI-03" type="number" min="0" max="2" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Expired swapped" data-w2="">
                                      <label className="sr-only" htmlFor="L-01-MI-03-expired">{"Expired swapped – Soft drink"}</label>
                                      <input className="field__input num mc-in" id="L-01-MI-03-expired" name="expired_MI-03" type="number" min="0" max="2" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Damaged / opened" data-w2="">
                                      <label className="sr-only" htmlFor="L-01-MI-03-damaged">{"Damaged / opened – Soft drink"}</label>
                                      <input className="field__input num mc-in" id="L-01-MI-03-damaged" name="damaged_MI-03" type="number" min="0" max="2" defaultValue={"0"} />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                      <span className="mi-dot mi-dot--x" aria-hidden="true">
                                        <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#minibar" />
                                        </svg>
                                      </span>
                                      {"Fruit juice 200 ml"}
                                    </td>
                                    <td className="dt__td dt__td--right num" data-label="Par">{"2"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Price">{"₹150.00"}</td>
                                    <td className="dt__td" data-label="Consumed" data-w2="">
                                      <label className="sr-only" htmlFor="L-01-MI-04-consumed">{"Consumed – Fruit juice"}</label>
                                      <input className="field__input num mc-in" id="L-01-MI-04-consumed" name="consumed_MI-04" type="number" min="0" max="2" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Refilled now" data-w2="">
                                      <label className="sr-only" htmlFor="L-01-MI-04-refilled">{"Refilled now – Fruit juice"}</label>
                                      <input className="field__input num mc-in" id="L-01-MI-04-refilled" name="refilled_MI-04" type="number" min="0" max="2" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Expired swapped" data-w2="">
                                      <label className="sr-only" htmlFor="L-01-MI-04-expired">{"Expired swapped – Fruit juice"}</label>
                                      <input className="field__input num mc-in" id="L-01-MI-04-expired" name="expired_MI-04" type="number" min="0" max="2" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Damaged / opened" data-w2="">
                                      <label className="sr-only" htmlFor="L-01-MI-04-damaged">{"Damaged / opened – Fruit juice"}</label>
                                      <input className="field__input num mc-in" id="L-01-MI-04-damaged" name="damaged_MI-04" type="number" min="0" max="2" defaultValue={"0"} />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                      <span className="mi-dot mi-dot--x" aria-hidden="true">
                                        <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#minibar" />
                                        </svg>
                                      </span>
                                      {"Sparkling water 330 ml"}
                                    </td>
                                    <td className="dt__td dt__td--right num" data-label="Par">{"1"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Price">{"₹180.00"}</td>
                                    <td className="dt__td" data-label="Consumed" data-w2="">
                                      <label className="sr-only" htmlFor="L-01-MI-02-consumed">{"Consumed – Sparkling water"}</label>
                                      <input className="field__input num mc-in" id="L-01-MI-02-consumed" name="consumed_MI-02" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Refilled now" data-w2="">
                                      <label className="sr-only" htmlFor="L-01-MI-02-refilled">{"Refilled now – Sparkling water"}</label>
                                      <input className="field__input num mc-in" id="L-01-MI-02-refilled" name="refilled_MI-02" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Expired swapped" data-w2="">
                                      <label className="sr-only" htmlFor="L-01-MI-02-expired">{"Expired swapped – Sparkling water"}</label>
                                      <input className="field__input num mc-in" id="L-01-MI-02-expired" name="expired_MI-02" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Damaged / opened" data-w2="">
                                      <label className="sr-only" htmlFor="L-01-MI-02-damaged">{"Damaged / opened – Sparkling water"}</label>
                                      <input className="field__input num mc-in" id="L-01-MI-02-damaged" name="damaged_MI-02" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                      <span className="mi-dot mi-dot--liq" aria-hidden="true">
                                        <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#minibar" />
                                        </svg>
                                      </span>
                                      {"Beer can 330 ml"}
                                    </td>
                                    <td className="dt__td dt__td--right num" data-label="Par">{"2"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Price">{"₹350.00"}</td>
                                    <td className="dt__td" data-label="Consumed" data-w2="">
                                      <label className="sr-only" htmlFor="L-01-MI-06-consumed">{"Consumed – Beer"}</label>
                                      <input className="field__input num mc-in" id="L-01-MI-06-consumed" name="consumed_MI-06" type="number" min="0" max="2" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Refilled now" data-w2="">
                                      <label className="sr-only" htmlFor="L-01-MI-06-refilled">{"Refilled now – Beer"}</label>
                                      <input className="field__input num mc-in" id="L-01-MI-06-refilled" name="refilled_MI-06" type="number" min="0" max="2" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Expired swapped" data-w2="">
                                      <label className="sr-only" htmlFor="L-01-MI-06-expired">{"Expired swapped – Beer"}</label>
                                      <input className="field__input num mc-in" id="L-01-MI-06-expired" name="expired_MI-06" type="number" min="0" max="2" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Damaged / opened" data-w2="">
                                      <label className="sr-only" htmlFor="L-01-MI-06-damaged">{"Damaged / opened – Beer"}</label>
                                      <input className="field__input num mc-in" id="L-01-MI-06-damaged" name="damaged_MI-06" type="number" min="0" max="2" defaultValue={"0"} />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                      <span className="mi-dot mi-dot--x" aria-hidden="true">
                                        <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#minibar" />
                                        </svg>
                                      </span>
                                      {"Potato chips 52 g"}
                                    </td>
                                    <td className="dt__td dt__td--right num" data-label="Par">{"1"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Price">{"₹140.00"}</td>
                                    <td className="dt__td" data-label="Consumed" data-w2="">
                                      <label className="sr-only" htmlFor="L-01-MI-08-consumed">{"Consumed – Potato chips"}</label>
                                      <input className="field__input num mc-in" id="L-01-MI-08-consumed" name="consumed_MI-08" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Refilled now" data-w2="">
                                      <label className="sr-only" htmlFor="L-01-MI-08-refilled">{"Refilled now – Potato chips"}</label>
                                      <input className="field__input num mc-in" id="L-01-MI-08-refilled" name="refilled_MI-08" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Expired swapped" data-w2="">
                                      <label className="sr-only" htmlFor="L-01-MI-08-expired">{"Expired swapped – Potato chips"}</label>
                                      <input className="field__input num mc-in" id="L-01-MI-08-expired" name="expired_MI-08" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Damaged / opened" data-w2="">
                                      <label className="sr-only" htmlFor="L-01-MI-08-damaged">{"Damaged / opened – Potato chips"}</label>
                                      <input className="field__input num mc-in" id="L-01-MI-08-damaged" name="damaged_MI-08" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                      <span className="mi-dot mi-dot--x" aria-hidden="true">
                                        <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#minibar" />
                                        </svg>
                                      </span>
                                      {"Salted cashew nuts 50 g"}
                                    </td>
                                    <td className="dt__td dt__td--right num" data-label="Par">{"1"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Price">{"₹160.00"}</td>
                                    <td className="dt__td" data-label="Consumed" data-w2="">
                                      <label className="sr-only" htmlFor="L-01-MI-09-consumed">{"Consumed – Cashew nuts"}</label>
                                      <input className="field__input num mc-in" id="L-01-MI-09-consumed" name="consumed_MI-09" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Refilled now" data-w2="">
                                      <label className="sr-only" htmlFor="L-01-MI-09-refilled">{"Refilled now – Cashew nuts"}</label>
                                      <input className="field__input num mc-in" id="L-01-MI-09-refilled" name="refilled_MI-09" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Expired swapped" data-w2="">
                                      <label className="sr-only" htmlFor="L-01-MI-09-expired">{"Expired swapped – Cashew nuts"}</label>
                                      <input className="field__input num mc-in" id="L-01-MI-09-expired" name="expired_MI-09" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Damaged / opened" data-w2="">
                                      <label className="sr-only" htmlFor="L-01-MI-09-damaged">{"Damaged / opened – Cashew nuts"}</label>
                                      <input className="field__input num mc-in" id="L-01-MI-09-damaged" name="damaged_MI-09" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                      <span className="mi-dot mi-dot--x" aria-hidden="true">
                                        <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#minibar" />
                                        </svg>
                                      </span>
                                      {"Banana chips 100 g"}
                                    </td>
                                    <td className="dt__td dt__td--right num" data-label="Par">{"1"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Price">{"₹120.00"}</td>
                                    <td className="dt__td" data-label="Consumed" data-w2="">
                                      <label className="sr-only" htmlFor="L-01-MI-10-consumed">{"Consumed – Banana chips"}</label>
                                      <input className="field__input num mc-in" id="L-01-MI-10-consumed" name="consumed_MI-10" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Refilled now" data-w2="">
                                      <label className="sr-only" htmlFor="L-01-MI-10-refilled">{"Refilled now – Banana chips"}</label>
                                      <input className="field__input num mc-in" id="L-01-MI-10-refilled" name="refilled_MI-10" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Expired swapped" data-w2="">
                                      <label className="sr-only" htmlFor="L-01-MI-10-expired">{"Expired swapped – Banana chips"}</label>
                                      <input className="field__input num mc-in" id="L-01-MI-10-expired" name="expired_MI-10" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Damaged / opened" data-w2="">
                                      <label className="sr-only" htmlFor="L-01-MI-10-damaged">{"Damaged / opened – Banana chips"}</label>
                                      <input className="field__input num mc-in" id="L-01-MI-10-damaged" name="damaged_MI-10" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                      <span className="mi-dot mi-dot--x" aria-hidden="true">
                                        <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#minibar" />
                                        </svg>
                                      </span>
                                      {"Chocolate bar 40 g"}
                                    </td>
                                    <td className="dt__td dt__td--right num" data-label="Par">{"1"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Price">{"₹120.00"}</td>
                                    <td className="dt__td" data-label="Consumed" data-w2="">
                                      <label className="sr-only" htmlFor="L-01-MI-11-consumed">{"Consumed – Chocolate"}</label>
                                      <input className="field__input num mc-in" id="L-01-MI-11-consumed" name="consumed_MI-11" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Refilled now" data-w2="">
                                      <label className="sr-only" htmlFor="L-01-MI-11-refilled">{"Refilled now – Chocolate"}</label>
                                      <input className="field__input num mc-in" id="L-01-MI-11-refilled" name="refilled_MI-11" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Expired swapped" data-w2="">
                                      <label className="sr-only" htmlFor="L-01-MI-11-expired">{"Expired swapped – Chocolate"}</label>
                                      <input className="field__input num mc-in" id="L-01-MI-11-expired" name="expired_MI-11" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Damaged / opened" data-w2="">
                                      <label className="sr-only" htmlFor="L-01-MI-11-damaged">{"Damaged / opened – Chocolate"}</label>
                                      <input className="field__input num mc-in" id="L-01-MI-11-damaged" name="damaged_MI-11" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                      <span className="mi-dot mi-dot--x" aria-hidden="true">
                                        <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#minibar" />
                                        </svg>
                                      </span>
                                      {"Cookies 75 g"}
                                    </td>
                                    <td className="dt__td dt__td--right num" data-label="Par">{"1"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Price">{"₹110.00"}</td>
                                    <td className="dt__td" data-label="Consumed" data-w2="">
                                      <label className="sr-only" htmlFor="L-01-MI-12-consumed">{"Consumed – Cookies"}</label>
                                      <input className="field__input num mc-in" id="L-01-MI-12-consumed" name="consumed_MI-12" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Refilled now" data-w2="">
                                      <label className="sr-only" htmlFor="L-01-MI-12-refilled">{"Refilled now – Cookies"}</label>
                                      <input className="field__input num mc-in" id="L-01-MI-12-refilled" name="refilled_MI-12" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Expired swapped" data-w2="">
                                      <label className="sr-only" htmlFor="L-01-MI-12-expired">{"Expired swapped – Cookies"}</label>
                                      <input className="field__input num mc-in" id="L-01-MI-12-expired" name="expired_MI-12" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Damaged / opened" data-w2="">
                                      <label className="sr-only" htmlFor="L-01-MI-12-damaged">{"Damaged / opened – Cookies"}</label>
                                      <input className="field__input num mc-in" id="L-01-MI-12-damaged" name="damaged_MI-12" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                      <span className="mi-dot mi-dot--x" aria-hidden="true">
                                        <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#minibar" />
                                        </svg>
                                      </span>
                                      {"Instant noodles cup"}
                                    </td>
                                    <td className="dt__td dt__td--right num" data-label="Par">{"1"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Price">{"₹180.00"}</td>
                                    <td className="dt__td" data-label="Consumed" data-w2="">
                                      <label className="sr-only" htmlFor="L-01-MI-13-consumed">{"Consumed – Noodles"}</label>
                                      <input className="field__input num mc-in" id="L-01-MI-13-consumed" name="consumed_MI-13" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Refilled now" data-w2="">
                                      <label className="sr-only" htmlFor="L-01-MI-13-refilled">{"Refilled now – Noodles"}</label>
                                      <input className="field__input num mc-in" id="L-01-MI-13-refilled" name="refilled_MI-13" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Expired swapped" data-w2="">
                                      <label className="sr-only" htmlFor="L-01-MI-13-expired">{"Expired swapped – Noodles"}</label>
                                      <input className="field__input num mc-in" id="L-01-MI-13-expired" name="expired_MI-13" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Damaged / opened" data-w2="">
                                      <label className="sr-only" htmlFor="L-01-MI-13-damaged">{"Damaged / opened – Noodles"}</label>
                                      <input className="field__input num mc-in" id="L-01-MI-13-damaged" name="damaged_MI-13" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="mc-grid mc-grid--l-02">
                            <div className="s-scroll">
                              <table className="dt__table dt--hug" data-mc="">
                                <caption className="sr-only">{"Items of the Suite layout"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Item"}</th>
                                    <th scope="col" className="dt__th--right">{"Par"}</th>
                                    <th scope="col" className="dt__th--right">{"Price"}</th>
                                    <th scope="col">{"Consumed"}</th>
                                    <th scope="col">{"Refilled now"}</th>
                                    <th scope="col">{"Expired swapped"}</th>
                                    <th scope="col">{"Damaged / opened"}</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                      <span className="mi-dot mi-dot--x" aria-hidden="true">
                                        <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#minibar" />
                                        </svg>
                                      </span>
                                      {"Mineral water 500 ml"}
                                    </td>
                                    <td className="dt__td dt__td--right num" data-label="Par">{"4"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Price">{"₹60.00"}</td>
                                    <td className="dt__td" data-label="Consumed" data-w2="">
                                      <label className="sr-only" htmlFor="L-02-MI-01-consumed">{"Consumed – Water"}</label>
                                      <input className="field__input num mc-in" id="L-02-MI-01-consumed" name="consumed_MI-01" type="number" min="0" max="4" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Refilled now" data-w2="">
                                      <label className="sr-only" htmlFor="L-02-MI-01-refilled">{"Refilled now – Water"}</label>
                                      <input className="field__input num mc-in" id="L-02-MI-01-refilled" name="refilled_MI-01" type="number" min="0" max="4" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Expired swapped" data-w2="">
                                      <label className="sr-only" htmlFor="L-02-MI-01-expired">{"Expired swapped – Water"}</label>
                                      <input className="field__input num mc-in" id="L-02-MI-01-expired" name="expired_MI-01" type="number" min="0" max="4" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Damaged / opened" data-w2="">
                                      <label className="sr-only" htmlFor="L-02-MI-01-damaged">{"Damaged / opened – Water"}</label>
                                      <input className="field__input num mc-in" id="L-02-MI-01-damaged" name="damaged_MI-01" type="number" min="0" max="4" defaultValue={"0"} />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                      <span className="mi-dot mi-dot--x" aria-hidden="true">
                                        <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#minibar" />
                                        </svg>
                                      </span>
                                      {"Soft drink can 330 ml"}
                                    </td>
                                    <td className="dt__td dt__td--right num" data-label="Par">{"3"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Price">{"₹130.00"}</td>
                                    <td className="dt__td" data-label="Consumed" data-w2="">
                                      <label className="sr-only" htmlFor="L-02-MI-03-consumed">{"Consumed – Soft drink"}</label>
                                      <input className="field__input num mc-in" id="L-02-MI-03-consumed" name="consumed_MI-03" type="number" min="0" max="3" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Refilled now" data-w2="">
                                      <label className="sr-only" htmlFor="L-02-MI-03-refilled">{"Refilled now – Soft drink"}</label>
                                      <input className="field__input num mc-in" id="L-02-MI-03-refilled" name="refilled_MI-03" type="number" min="0" max="3" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Expired swapped" data-w2="">
                                      <label className="sr-only" htmlFor="L-02-MI-03-expired">{"Expired swapped – Soft drink"}</label>
                                      <input className="field__input num mc-in" id="L-02-MI-03-expired" name="expired_MI-03" type="number" min="0" max="3" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Damaged / opened" data-w2="">
                                      <label className="sr-only" htmlFor="L-02-MI-03-damaged">{"Damaged / opened – Soft drink"}</label>
                                      <input className="field__input num mc-in" id="L-02-MI-03-damaged" name="damaged_MI-03" type="number" min="0" max="3" defaultValue={"0"} />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                      <span className="mi-dot mi-dot--x" aria-hidden="true">
                                        <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#minibar" />
                                        </svg>
                                      </span>
                                      {"Fruit juice 200 ml"}
                                    </td>
                                    <td className="dt__td dt__td--right num" data-label="Par">{"3"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Price">{"₹150.00"}</td>
                                    <td className="dt__td" data-label="Consumed" data-w2="">
                                      <label className="sr-only" htmlFor="L-02-MI-04-consumed">{"Consumed – Fruit juice"}</label>
                                      <input className="field__input num mc-in" id="L-02-MI-04-consumed" name="consumed_MI-04" type="number" min="0" max="3" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Refilled now" data-w2="">
                                      <label className="sr-only" htmlFor="L-02-MI-04-refilled">{"Refilled now – Fruit juice"}</label>
                                      <input className="field__input num mc-in" id="L-02-MI-04-refilled" name="refilled_MI-04" type="number" min="0" max="3" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Expired swapped" data-w2="">
                                      <label className="sr-only" htmlFor="L-02-MI-04-expired">{"Expired swapped – Fruit juice"}</label>
                                      <input className="field__input num mc-in" id="L-02-MI-04-expired" name="expired_MI-04" type="number" min="0" max="3" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Damaged / opened" data-w2="">
                                      <label className="sr-only" htmlFor="L-02-MI-04-damaged">{"Damaged / opened – Fruit juice"}</label>
                                      <input className="field__input num mc-in" id="L-02-MI-04-damaged" name="damaged_MI-04" type="number" min="0" max="3" defaultValue={"0"} />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                      <span className="mi-dot mi-dot--x" aria-hidden="true">
                                        <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#minibar" />
                                        </svg>
                                      </span>
                                      {"Sparkling water 330 ml"}
                                    </td>
                                    <td className="dt__td dt__td--right num" data-label="Par">{"2"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Price">{"₹180.00"}</td>
                                    <td className="dt__td" data-label="Consumed" data-w2="">
                                      <label className="sr-only" htmlFor="L-02-MI-02-consumed">{"Consumed – Sparkling water"}</label>
                                      <input className="field__input num mc-in" id="L-02-MI-02-consumed" name="consumed_MI-02" type="number" min="0" max="2" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Refilled now" data-w2="">
                                      <label className="sr-only" htmlFor="L-02-MI-02-refilled">{"Refilled now – Sparkling water"}</label>
                                      <input className="field__input num mc-in" id="L-02-MI-02-refilled" name="refilled_MI-02" type="number" min="0" max="2" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Expired swapped" data-w2="">
                                      <label className="sr-only" htmlFor="L-02-MI-02-expired">{"Expired swapped – Sparkling water"}</label>
                                      <input className="field__input num mc-in" id="L-02-MI-02-expired" name="expired_MI-02" type="number" min="0" max="2" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Damaged / opened" data-w2="">
                                      <label className="sr-only" htmlFor="L-02-MI-02-damaged">{"Damaged / opened – Sparkling water"}</label>
                                      <input className="field__input num mc-in" id="L-02-MI-02-damaged" name="damaged_MI-02" type="number" min="0" max="2" defaultValue={"0"} />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                      <span className="mi-dot mi-dot--x" aria-hidden="true">
                                        <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#minibar" />
                                        </svg>
                                      </span>
                                      {"Energy drink 250 ml"}
                                    </td>
                                    <td className="dt__td dt__td--right num" data-label="Par">{"2"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Price">{"₹190.00"}</td>
                                    <td className="dt__td" data-label="Consumed" data-w2="">
                                      <label className="sr-only" htmlFor="L-02-MI-05-consumed">{"Consumed – Energy drink"}</label>
                                      <input className="field__input num mc-in" id="L-02-MI-05-consumed" name="consumed_MI-05" type="number" min="0" max="2" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Refilled now" data-w2="">
                                      <label className="sr-only" htmlFor="L-02-MI-05-refilled">{"Refilled now – Energy drink"}</label>
                                      <input className="field__input num mc-in" id="L-02-MI-05-refilled" name="refilled_MI-05" type="number" min="0" max="2" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Expired swapped" data-w2="">
                                      <label className="sr-only" htmlFor="L-02-MI-05-expired">{"Expired swapped – Energy drink"}</label>
                                      <input className="field__input num mc-in" id="L-02-MI-05-expired" name="expired_MI-05" type="number" min="0" max="2" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Damaged / opened" data-w2="">
                                      <label className="sr-only" htmlFor="L-02-MI-05-damaged">{"Damaged / opened – Energy drink"}</label>
                                      <input className="field__input num mc-in" id="L-02-MI-05-damaged" name="damaged_MI-05" type="number" min="0" max="2" defaultValue={"0"} />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                      <span className="mi-dot mi-dot--liq" aria-hidden="true">
                                        <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#minibar" />
                                        </svg>
                                      </span>
                                      {"Beer can 330 ml"}
                                    </td>
                                    <td className="dt__td dt__td--right num" data-label="Par">{"3"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Price">{"₹350.00"}</td>
                                    <td className="dt__td" data-label="Consumed" data-w2="">
                                      <label className="sr-only" htmlFor="L-02-MI-06-consumed">{"Consumed – Beer"}</label>
                                      <input className="field__input num mc-in" id="L-02-MI-06-consumed" name="consumed_MI-06" type="number" min="0" max="3" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Refilled now" data-w2="">
                                      <label className="sr-only" htmlFor="L-02-MI-06-refilled">{"Refilled now – Beer"}</label>
                                      <input className="field__input num mc-in" id="L-02-MI-06-refilled" name="refilled_MI-06" type="number" min="0" max="3" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Expired swapped" data-w2="">
                                      <label className="sr-only" htmlFor="L-02-MI-06-expired">{"Expired swapped – Beer"}</label>
                                      <input className="field__input num mc-in" id="L-02-MI-06-expired" name="expired_MI-06" type="number" min="0" max="3" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Damaged / opened" data-w2="">
                                      <label className="sr-only" htmlFor="L-02-MI-06-damaged">{"Damaged / opened – Beer"}</label>
                                      <input className="field__input num mc-in" id="L-02-MI-06-damaged" name="damaged_MI-06" type="number" min="0" max="3" defaultValue={"0"} />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                      <span className="mi-dot mi-dot--liq" aria-hidden="true">
                                        <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#minibar" />
                                        </svg>
                                      </span>
                                      {"Miniature spirits 50 ml"}
                                    </td>
                                    <td className="dt__td dt__td--right num" data-label="Par">{"4"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Price">{"₹450.00"}</td>
                                    <td className="dt__td" data-label="Consumed" data-w2="">
                                      <label className="sr-only" htmlFor="L-02-MI-07-consumed">{"Consumed – Spirits miniature"}</label>
                                      <input className="field__input num mc-in" id="L-02-MI-07-consumed" name="consumed_MI-07" type="number" min="0" max="4" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Refilled now" data-w2="">
                                      <label className="sr-only" htmlFor="L-02-MI-07-refilled">{"Refilled now – Spirits miniature"}</label>
                                      <input className="field__input num mc-in" id="L-02-MI-07-refilled" name="refilled_MI-07" type="number" min="0" max="4" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Expired swapped" data-w2="">
                                      <label className="sr-only" htmlFor="L-02-MI-07-expired">{"Expired swapped – Spirits miniature"}</label>
                                      <input className="field__input num mc-in" id="L-02-MI-07-expired" name="expired_MI-07" type="number" min="0" max="4" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Damaged / opened" data-w2="">
                                      <label className="sr-only" htmlFor="L-02-MI-07-damaged">{"Damaged / opened – Spirits miniature"}</label>
                                      <input className="field__input num mc-in" id="L-02-MI-07-damaged" name="damaged_MI-07" type="number" min="0" max="4" defaultValue={"0"} />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                      <span className="mi-dot mi-dot--x" aria-hidden="true">
                                        <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#minibar" />
                                        </svg>
                                      </span>
                                      {"Potato chips 52 g"}
                                    </td>
                                    <td className="dt__td dt__td--right num" data-label="Par">{"2"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Price">{"₹140.00"}</td>
                                    <td className="dt__td" data-label="Consumed" data-w2="">
                                      <label className="sr-only" htmlFor="L-02-MI-08-consumed">{"Consumed – Potato chips"}</label>
                                      <input className="field__input num mc-in" id="L-02-MI-08-consumed" name="consumed_MI-08" type="number" min="0" max="2" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Refilled now" data-w2="">
                                      <label className="sr-only" htmlFor="L-02-MI-08-refilled">{"Refilled now – Potato chips"}</label>
                                      <input className="field__input num mc-in" id="L-02-MI-08-refilled" name="refilled_MI-08" type="number" min="0" max="2" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Expired swapped" data-w2="">
                                      <label className="sr-only" htmlFor="L-02-MI-08-expired">{"Expired swapped – Potato chips"}</label>
                                      <input className="field__input num mc-in" id="L-02-MI-08-expired" name="expired_MI-08" type="number" min="0" max="2" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Damaged / opened" data-w2="">
                                      <label className="sr-only" htmlFor="L-02-MI-08-damaged">{"Damaged / opened – Potato chips"}</label>
                                      <input className="field__input num mc-in" id="L-02-MI-08-damaged" name="damaged_MI-08" type="number" min="0" max="2" defaultValue={"0"} />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                      <span className="mi-dot mi-dot--x" aria-hidden="true">
                                        <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#minibar" />
                                        </svg>
                                      </span>
                                      {"Salted cashew nuts 50 g"}
                                    </td>
                                    <td className="dt__td dt__td--right num" data-label="Par">{"2"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Price">{"₹160.00"}</td>
                                    <td className="dt__td" data-label="Consumed" data-w2="">
                                      <label className="sr-only" htmlFor="L-02-MI-09-consumed">{"Consumed – Cashew nuts"}</label>
                                      <input className="field__input num mc-in" id="L-02-MI-09-consumed" name="consumed_MI-09" type="number" min="0" max="2" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Refilled now" data-w2="">
                                      <label className="sr-only" htmlFor="L-02-MI-09-refilled">{"Refilled now – Cashew nuts"}</label>
                                      <input className="field__input num mc-in" id="L-02-MI-09-refilled" name="refilled_MI-09" type="number" min="0" max="2" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Expired swapped" data-w2="">
                                      <label className="sr-only" htmlFor="L-02-MI-09-expired">{"Expired swapped – Cashew nuts"}</label>
                                      <input className="field__input num mc-in" id="L-02-MI-09-expired" name="expired_MI-09" type="number" min="0" max="2" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Damaged / opened" data-w2="">
                                      <label className="sr-only" htmlFor="L-02-MI-09-damaged">{"Damaged / opened – Cashew nuts"}</label>
                                      <input className="field__input num mc-in" id="L-02-MI-09-damaged" name="damaged_MI-09" type="number" min="0" max="2" defaultValue={"0"} />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                      <span className="mi-dot mi-dot--x" aria-hidden="true">
                                        <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#minibar" />
                                        </svg>
                                      </span>
                                      {"Banana chips 100 g"}
                                    </td>
                                    <td className="dt__td dt__td--right num" data-label="Par">{"1"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Price">{"₹120.00"}</td>
                                    <td className="dt__td" data-label="Consumed" data-w2="">
                                      <label className="sr-only" htmlFor="L-02-MI-10-consumed">{"Consumed – Banana chips"}</label>
                                      <input className="field__input num mc-in" id="L-02-MI-10-consumed" name="consumed_MI-10" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Refilled now" data-w2="">
                                      <label className="sr-only" htmlFor="L-02-MI-10-refilled">{"Refilled now – Banana chips"}</label>
                                      <input className="field__input num mc-in" id="L-02-MI-10-refilled" name="refilled_MI-10" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Expired swapped" data-w2="">
                                      <label className="sr-only" htmlFor="L-02-MI-10-expired">{"Expired swapped – Banana chips"}</label>
                                      <input className="field__input num mc-in" id="L-02-MI-10-expired" name="expired_MI-10" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Damaged / opened" data-w2="">
                                      <label className="sr-only" htmlFor="L-02-MI-10-damaged">{"Damaged / opened – Banana chips"}</label>
                                      <input className="field__input num mc-in" id="L-02-MI-10-damaged" name="damaged_MI-10" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                      <span className="mi-dot mi-dot--x" aria-hidden="true">
                                        <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#minibar" />
                                        </svg>
                                      </span>
                                      {"Chocolate bar 40 g"}
                                    </td>
                                    <td className="dt__td dt__td--right num" data-label="Par">{"2"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Price">{"₹120.00"}</td>
                                    <td className="dt__td" data-label="Consumed" data-w2="">
                                      <label className="sr-only" htmlFor="L-02-MI-11-consumed">{"Consumed – Chocolate"}</label>
                                      <input className="field__input num mc-in" id="L-02-MI-11-consumed" name="consumed_MI-11" type="number" min="0" max="2" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Refilled now" data-w2="">
                                      <label className="sr-only" htmlFor="L-02-MI-11-refilled">{"Refilled now – Chocolate"}</label>
                                      <input className="field__input num mc-in" id="L-02-MI-11-refilled" name="refilled_MI-11" type="number" min="0" max="2" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Expired swapped" data-w2="">
                                      <label className="sr-only" htmlFor="L-02-MI-11-expired">{"Expired swapped – Chocolate"}</label>
                                      <input className="field__input num mc-in" id="L-02-MI-11-expired" name="expired_MI-11" type="number" min="0" max="2" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Damaged / opened" data-w2="">
                                      <label className="sr-only" htmlFor="L-02-MI-11-damaged">{"Damaged / opened – Chocolate"}</label>
                                      <input className="field__input num mc-in" id="L-02-MI-11-damaged" name="damaged_MI-11" type="number" min="0" max="2" defaultValue={"0"} />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                      <span className="mi-dot mi-dot--x" aria-hidden="true">
                                        <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#minibar" />
                                        </svg>
                                      </span>
                                      {"Cookies 75 g"}
                                    </td>
                                    <td className="dt__td dt__td--right num" data-label="Par">{"1"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Price">{"₹110.00"}</td>
                                    <td className="dt__td" data-label="Consumed" data-w2="">
                                      <label className="sr-only" htmlFor="L-02-MI-12-consumed">{"Consumed – Cookies"}</label>
                                      <input className="field__input num mc-in" id="L-02-MI-12-consumed" name="consumed_MI-12" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Refilled now" data-w2="">
                                      <label className="sr-only" htmlFor="L-02-MI-12-refilled">{"Refilled now – Cookies"}</label>
                                      <input className="field__input num mc-in" id="L-02-MI-12-refilled" name="refilled_MI-12" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Expired swapped" data-w2="">
                                      <label className="sr-only" htmlFor="L-02-MI-12-expired">{"Expired swapped – Cookies"}</label>
                                      <input className="field__input num mc-in" id="L-02-MI-12-expired" name="expired_MI-12" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Damaged / opened" data-w2="">
                                      <label className="sr-only" htmlFor="L-02-MI-12-damaged">{"Damaged / opened – Cookies"}</label>
                                      <input className="field__input num mc-in" id="L-02-MI-12-damaged" name="damaged_MI-12" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                      <span className="mi-dot mi-dot--x" aria-hidden="true">
                                        <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#minibar" />
                                        </svg>
                                      </span>
                                      {"Masala peanuts 50 g"}
                                    </td>
                                    <td className="dt__td dt__td--right num" data-label="Par">{"1"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Price" data-w2="">{"no price"}</td>
                                    <td className="dt__td" data-label="Consumed" data-w2="">
                                      <label className="sr-only" htmlFor="L-02-MI-14-consumed">{"Consumed – Masala peanuts"}</label>
                                      <input className="field__input num mc-in" id="L-02-MI-14-consumed" name="consumed_MI-14" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Refilled now" data-w2="">
                                      <label className="sr-only" htmlFor="L-02-MI-14-refilled">{"Refilled now – Masala peanuts"}</label>
                                      <input className="field__input num mc-in" id="L-02-MI-14-refilled" name="refilled_MI-14" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Expired swapped" data-w2="">
                                      <label className="sr-only" htmlFor="L-02-MI-14-expired">{"Expired swapped – Masala peanuts"}</label>
                                      <input className="field__input num mc-in" id="L-02-MI-14-expired" name="expired_MI-14" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Damaged / opened" data-w2="">
                                      <label className="sr-only" htmlFor="L-02-MI-14-damaged">{"Damaged / opened – Masala peanuts"}</label>
                                      <input className="field__input num mc-in" id="L-02-MI-14-damaged" name="damaged_MI-14" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                      <span className="mi-dot mi-dot--x" aria-hidden="true">
                                        <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#minibar" />
                                        </svg>
                                      </span>
                                      {"Instant noodles cup"}
                                    </td>
                                    <td className="dt__td dt__td--right num" data-label="Par">{"2"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Price">{"₹180.00"}</td>
                                    <td className="dt__td" data-label="Consumed" data-w2="">
                                      <label className="sr-only" htmlFor="L-02-MI-13-consumed">{"Consumed – Noodles"}</label>
                                      <input className="field__input num mc-in" id="L-02-MI-13-consumed" name="consumed_MI-13" type="number" min="0" max="2" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Refilled now" data-w2="">
                                      <label className="sr-only" htmlFor="L-02-MI-13-refilled">{"Refilled now – Noodles"}</label>
                                      <input className="field__input num mc-in" id="L-02-MI-13-refilled" name="refilled_MI-13" type="number" min="0" max="2" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Expired swapped" data-w2="">
                                      <label className="sr-only" htmlFor="L-02-MI-13-expired">{"Expired swapped – Noodles"}</label>
                                      <input className="field__input num mc-in" id="L-02-MI-13-expired" name="expired_MI-13" type="number" min="0" max="2" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Damaged / opened" data-w2="">
                                      <label className="sr-only" htmlFor="L-02-MI-13-damaged">{"Damaged / opened – Noodles"}</label>
                                      <input className="field__input num mc-in" id="L-02-MI-13-damaged" name="damaged_MI-13" type="number" min="0" max="2" defaultValue={"0"} />
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="mc-grid mc-grid--l-03">
                            <div className="s-scroll">
                              <table className="dt__table dt--hug" data-mc="">
                                <caption className="sr-only">{"Items of the Alcohol-free layout"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Item"}</th>
                                    <th scope="col" className="dt__th--right">{"Par"}</th>
                                    <th scope="col" className="dt__th--right">{"Price"}</th>
                                    <th scope="col">{"Consumed"}</th>
                                    <th scope="col">{"Refilled now"}</th>
                                    <th scope="col">{"Expired swapped"}</th>
                                    <th scope="col">{"Damaged / opened"}</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                      <span className="mi-dot mi-dot--x" aria-hidden="true">
                                        <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#minibar" />
                                        </svg>
                                      </span>
                                      {"Mineral water 500 ml"}
                                    </td>
                                    <td className="dt__td dt__td--right num" data-label="Par">{"2"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Price">{"₹60.00"}</td>
                                    <td className="dt__td" data-label="Consumed" data-w2="">
                                      <label className="sr-only" htmlFor="L-03-MI-01-consumed">{"Consumed – Water"}</label>
                                      <input className="field__input num mc-in" id="L-03-MI-01-consumed" name="consumed_MI-01" type="number" min="0" max="2" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Refilled now" data-w2="">
                                      <label className="sr-only" htmlFor="L-03-MI-01-refilled">{"Refilled now – Water"}</label>
                                      <input className="field__input num mc-in" id="L-03-MI-01-refilled" name="refilled_MI-01" type="number" min="0" max="2" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Expired swapped" data-w2="">
                                      <label className="sr-only" htmlFor="L-03-MI-01-expired">{"Expired swapped – Water"}</label>
                                      <input className="field__input num mc-in" id="L-03-MI-01-expired" name="expired_MI-01" type="number" min="0" max="2" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Damaged / opened" data-w2="">
                                      <label className="sr-only" htmlFor="L-03-MI-01-damaged">{"Damaged / opened – Water"}</label>
                                      <input className="field__input num mc-in" id="L-03-MI-01-damaged" name="damaged_MI-01" type="number" min="0" max="2" defaultValue={"0"} />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                      <span className="mi-dot mi-dot--x" aria-hidden="true">
                                        <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#minibar" />
                                        </svg>
                                      </span>
                                      {"Soft drink can 330 ml"}
                                    </td>
                                    <td className="dt__td dt__td--right num" data-label="Par">{"3"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Price">{"₹130.00"}</td>
                                    <td className="dt__td" data-label="Consumed" data-w2="">
                                      <label className="sr-only" htmlFor="L-03-MI-03-consumed">{"Consumed – Soft drink"}</label>
                                      <input className="field__input num mc-in" id="L-03-MI-03-consumed" name="consumed_MI-03" type="number" min="0" max="3" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Refilled now" data-w2="">
                                      <label className="sr-only" htmlFor="L-03-MI-03-refilled">{"Refilled now – Soft drink"}</label>
                                      <input className="field__input num mc-in" id="L-03-MI-03-refilled" name="refilled_MI-03" type="number" min="0" max="3" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Expired swapped" data-w2="">
                                      <label className="sr-only" htmlFor="L-03-MI-03-expired">{"Expired swapped – Soft drink"}</label>
                                      <input className="field__input num mc-in" id="L-03-MI-03-expired" name="expired_MI-03" type="number" min="0" max="3" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Damaged / opened" data-w2="">
                                      <label className="sr-only" htmlFor="L-03-MI-03-damaged">{"Damaged / opened – Soft drink"}</label>
                                      <input className="field__input num mc-in" id="L-03-MI-03-damaged" name="damaged_MI-03" type="number" min="0" max="3" defaultValue={"0"} />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                      <span className="mi-dot mi-dot--x" aria-hidden="true">
                                        <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#minibar" />
                                        </svg>
                                      </span>
                                      {"Fruit juice 200 ml"}
                                    </td>
                                    <td className="dt__td dt__td--right num" data-label="Par">{"3"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Price">{"₹150.00"}</td>
                                    <td className="dt__td" data-label="Consumed" data-w2="">
                                      <label className="sr-only" htmlFor="L-03-MI-04-consumed">{"Consumed – Fruit juice"}</label>
                                      <input className="field__input num mc-in" id="L-03-MI-04-consumed" name="consumed_MI-04" type="number" min="0" max="3" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Refilled now" data-w2="">
                                      <label className="sr-only" htmlFor="L-03-MI-04-refilled">{"Refilled now – Fruit juice"}</label>
                                      <input className="field__input num mc-in" id="L-03-MI-04-refilled" name="refilled_MI-04" type="number" min="0" max="3" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Expired swapped" data-w2="">
                                      <label className="sr-only" htmlFor="L-03-MI-04-expired">{"Expired swapped – Fruit juice"}</label>
                                      <input className="field__input num mc-in" id="L-03-MI-04-expired" name="expired_MI-04" type="number" min="0" max="3" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Damaged / opened" data-w2="">
                                      <label className="sr-only" htmlFor="L-03-MI-04-damaged">{"Damaged / opened – Fruit juice"}</label>
                                      <input className="field__input num mc-in" id="L-03-MI-04-damaged" name="damaged_MI-04" type="number" min="0" max="3" defaultValue={"0"} />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                      <span className="mi-dot mi-dot--x" aria-hidden="true">
                                        <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#minibar" />
                                        </svg>
                                      </span>
                                      {"Sparkling water 330 ml"}
                                    </td>
                                    <td className="dt__td dt__td--right num" data-label="Par">{"1"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Price">{"₹180.00"}</td>
                                    <td className="dt__td" data-label="Consumed" data-w2="">
                                      <label className="sr-only" htmlFor="L-03-MI-02-consumed">{"Consumed – Sparkling water"}</label>
                                      <input className="field__input num mc-in" id="L-03-MI-02-consumed" name="consumed_MI-02" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Refilled now" data-w2="">
                                      <label className="sr-only" htmlFor="L-03-MI-02-refilled">{"Refilled now – Sparkling water"}</label>
                                      <input className="field__input num mc-in" id="L-03-MI-02-refilled" name="refilled_MI-02" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Expired swapped" data-w2="">
                                      <label className="sr-only" htmlFor="L-03-MI-02-expired">{"Expired swapped – Sparkling water"}</label>
                                      <input className="field__input num mc-in" id="L-03-MI-02-expired" name="expired_MI-02" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Damaged / opened" data-w2="">
                                      <label className="sr-only" htmlFor="L-03-MI-02-damaged">{"Damaged / opened – Sparkling water"}</label>
                                      <input className="field__input num mc-in" id="L-03-MI-02-damaged" name="damaged_MI-02" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                      <span className="mi-dot mi-dot--x" aria-hidden="true">
                                        <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#minibar" />
                                        </svg>
                                      </span>
                                      {"Potato chips 52 g"}
                                    </td>
                                    <td className="dt__td dt__td--right num" data-label="Par">{"1"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Price">{"₹140.00"}</td>
                                    <td className="dt__td" data-label="Consumed" data-w2="">
                                      <label className="sr-only" htmlFor="L-03-MI-08-consumed">{"Consumed – Potato chips"}</label>
                                      <input className="field__input num mc-in" id="L-03-MI-08-consumed" name="consumed_MI-08" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Refilled now" data-w2="">
                                      <label className="sr-only" htmlFor="L-03-MI-08-refilled">{"Refilled now – Potato chips"}</label>
                                      <input className="field__input num mc-in" id="L-03-MI-08-refilled" name="refilled_MI-08" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Expired swapped" data-w2="">
                                      <label className="sr-only" htmlFor="L-03-MI-08-expired">{"Expired swapped – Potato chips"}</label>
                                      <input className="field__input num mc-in" id="L-03-MI-08-expired" name="expired_MI-08" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Damaged / opened" data-w2="">
                                      <label className="sr-only" htmlFor="L-03-MI-08-damaged">{"Damaged / opened – Potato chips"}</label>
                                      <input className="field__input num mc-in" id="L-03-MI-08-damaged" name="damaged_MI-08" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                      <span className="mi-dot mi-dot--x" aria-hidden="true">
                                        <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#minibar" />
                                        </svg>
                                      </span>
                                      {"Salted cashew nuts 50 g"}
                                    </td>
                                    <td className="dt__td dt__td--right num" data-label="Par">{"1"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Price">{"₹160.00"}</td>
                                    <td className="dt__td" data-label="Consumed" data-w2="">
                                      <label className="sr-only" htmlFor="L-03-MI-09-consumed">{"Consumed – Cashew nuts"}</label>
                                      <input className="field__input num mc-in" id="L-03-MI-09-consumed" name="consumed_MI-09" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Refilled now" data-w2="">
                                      <label className="sr-only" htmlFor="L-03-MI-09-refilled">{"Refilled now – Cashew nuts"}</label>
                                      <input className="field__input num mc-in" id="L-03-MI-09-refilled" name="refilled_MI-09" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Expired swapped" data-w2="">
                                      <label className="sr-only" htmlFor="L-03-MI-09-expired">{"Expired swapped – Cashew nuts"}</label>
                                      <input className="field__input num mc-in" id="L-03-MI-09-expired" name="expired_MI-09" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Damaged / opened" data-w2="">
                                      <label className="sr-only" htmlFor="L-03-MI-09-damaged">{"Damaged / opened – Cashew nuts"}</label>
                                      <input className="field__input num mc-in" id="L-03-MI-09-damaged" name="damaged_MI-09" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                      <span className="mi-dot mi-dot--x" aria-hidden="true">
                                        <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#minibar" />
                                        </svg>
                                      </span>
                                      {"Banana chips 100 g"}
                                    </td>
                                    <td className="dt__td dt__td--right num" data-label="Par">{"1"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Price">{"₹120.00"}</td>
                                    <td className="dt__td" data-label="Consumed" data-w2="">
                                      <label className="sr-only" htmlFor="L-03-MI-10-consumed">{"Consumed – Banana chips"}</label>
                                      <input className="field__input num mc-in" id="L-03-MI-10-consumed" name="consumed_MI-10" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Refilled now" data-w2="">
                                      <label className="sr-only" htmlFor="L-03-MI-10-refilled">{"Refilled now – Banana chips"}</label>
                                      <input className="field__input num mc-in" id="L-03-MI-10-refilled" name="refilled_MI-10" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Expired swapped" data-w2="">
                                      <label className="sr-only" htmlFor="L-03-MI-10-expired">{"Expired swapped – Banana chips"}</label>
                                      <input className="field__input num mc-in" id="L-03-MI-10-expired" name="expired_MI-10" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Damaged / opened" data-w2="">
                                      <label className="sr-only" htmlFor="L-03-MI-10-damaged">{"Damaged / opened – Banana chips"}</label>
                                      <input className="field__input num mc-in" id="L-03-MI-10-damaged" name="damaged_MI-10" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                      <span className="mi-dot mi-dot--x" aria-hidden="true">
                                        <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#minibar" />
                                        </svg>
                                      </span>
                                      {"Chocolate bar 40 g"}
                                    </td>
                                    <td className="dt__td dt__td--right num" data-label="Par">{"1"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Price">{"₹120.00"}</td>
                                    <td className="dt__td" data-label="Consumed" data-w2="">
                                      <label className="sr-only" htmlFor="L-03-MI-11-consumed">{"Consumed – Chocolate"}</label>
                                      <input className="field__input num mc-in" id="L-03-MI-11-consumed" name="consumed_MI-11" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Refilled now" data-w2="">
                                      <label className="sr-only" htmlFor="L-03-MI-11-refilled">{"Refilled now – Chocolate"}</label>
                                      <input className="field__input num mc-in" id="L-03-MI-11-refilled" name="refilled_MI-11" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Expired swapped" data-w2="">
                                      <label className="sr-only" htmlFor="L-03-MI-11-expired">{"Expired swapped – Chocolate"}</label>
                                      <input className="field__input num mc-in" id="L-03-MI-11-expired" name="expired_MI-11" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Damaged / opened" data-w2="">
                                      <label className="sr-only" htmlFor="L-03-MI-11-damaged">{"Damaged / opened – Chocolate"}</label>
                                      <input className="field__input num mc-in" id="L-03-MI-11-damaged" name="damaged_MI-11" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                      <span className="mi-dot mi-dot--x" aria-hidden="true">
                                        <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#minibar" />
                                        </svg>
                                      </span>
                                      {"Cookies 75 g"}
                                    </td>
                                    <td className="dt__td dt__td--right num" data-label="Par">{"1"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Price">{"₹110.00"}</td>
                                    <td className="dt__td" data-label="Consumed" data-w2="">
                                      <label className="sr-only" htmlFor="L-03-MI-12-consumed">{"Consumed – Cookies"}</label>
                                      <input className="field__input num mc-in" id="L-03-MI-12-consumed" name="consumed_MI-12" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Refilled now" data-w2="">
                                      <label className="sr-only" htmlFor="L-03-MI-12-refilled">{"Refilled now – Cookies"}</label>
                                      <input className="field__input num mc-in" id="L-03-MI-12-refilled" name="refilled_MI-12" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Expired swapped" data-w2="">
                                      <label className="sr-only" htmlFor="L-03-MI-12-expired">{"Expired swapped – Cookies"}</label>
                                      <input className="field__input num mc-in" id="L-03-MI-12-expired" name="expired_MI-12" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Damaged / opened" data-w2="">
                                      <label className="sr-only" htmlFor="L-03-MI-12-damaged">{"Damaged / opened – Cookies"}</label>
                                      <input className="field__input num mc-in" id="L-03-MI-12-damaged" name="damaged_MI-12" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                      <span className="mi-dot mi-dot--x" aria-hidden="true">
                                        <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#minibar" />
                                        </svg>
                                      </span>
                                      {"Instant noodles cup"}
                                    </td>
                                    <td className="dt__td dt__td--right num" data-label="Par">{"1"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Price">{"₹180.00"}</td>
                                    <td className="dt__td" data-label="Consumed" data-w2="">
                                      <label className="sr-only" htmlFor="L-03-MI-13-consumed">{"Consumed – Noodles"}</label>
                                      <input className="field__input num mc-in" id="L-03-MI-13-consumed" name="consumed_MI-13" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Refilled now" data-w2="">
                                      <label className="sr-only" htmlFor="L-03-MI-13-refilled">{"Refilled now – Noodles"}</label>
                                      <input className="field__input num mc-in" id="L-03-MI-13-refilled" name="refilled_MI-13" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Expired swapped" data-w2="">
                                      <label className="sr-only" htmlFor="L-03-MI-13-expired">{"Expired swapped – Noodles"}</label>
                                      <input className="field__input num mc-in" id="L-03-MI-13-expired" name="expired_MI-13" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                    <td className="dt__td" data-label="Damaged / opened" data-w2="">
                                      <label className="sr-only" htmlFor="L-03-MI-13-damaged">{"Damaged / opened – Noodles"}</label>
                                      <input className="field__input num mc-in" id="L-03-MI-13-damaged" name="damaged_MI-13" type="number" min="0" max="1" defaultValue={"0"} />
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <span className="field__hint">{"Consumed 0 to par · Refilled now up to consumed + missing (default = consumed) · Expired swapped is not charged (expiry write-off) · Damaged / opened is charged (MBS-04 rule: Charge)"}</span>
                        </div>
                        <div className="field field--wide mc-comp">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#gift" />
                          </svg>
                          <span>
                            <b>{"Complimentary"}</b>
                            {" – items of the stay’s complimentary rules (Minibar Setup MBS-05) are posted at ₹0.00 and still refilled."}
                          </span>
                        </div>
                        <div className="field field--wide ">
                          <label className="field__label" htmlFor="p01-note">{"Note"}</label>
                          <input className="field__input" id="p01-note" name="note" type="text" maxLength="160" placeholder="e.g. seal of the beer can broken" defaultValue={""} />
                        </div>
                      </div>
                    </div>
                    <div className="modal__foot">
                      <a className="btn" href="#main">{"Cancel"}</a>
                      <button className="btn" type="submit" formAction="/minibar/mb-02-room-minibar-status/#zero" formNoValidate={true}>
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#check" />
                        </svg>
                        {"Nothing consumed"}
                      </button>
                      <button className="btn" type="submit" formAction="/minibar/mb-03-posting-queue/#posted-now">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#send" />
                        </svg>
                        {"Post now"}
                      </button>
                      <button className="btn btn--primary" type="submit">{"Save"}</button>
                    </div>
                  </form>
                </div>
                <div className="modal modal--lg" id="mb-p04" data-code="MB-P04" role="dialog" aria-modal="true" aria-labelledby="mb-p04-t">
                  <span className="hb-mks" aria-hidden="true">
                    <i className="pm" id="p04-101" />
                    <i className="pm" id="p04-103" />
                    <i className="pm" id="p04-104" />
                    <i className="pm" id="p04-105" />
                    <i className="pm" id="p04-106" />
                    <i className="pm" id="p04-107" />
                    <i className="pm" id="p04-108" />
                    <i className="pm" id="p04-109" />
                    <i className="pm" id="p04-110" />
                    <i className="pm" id="p04-111" />
                    <i className="pm" id="p04-112" />
                    <i className="pm" id="p04-113" />
                    <i className="pm" id="p04-114" />
                    <i className="pm" id="p04-115" />
                    <i className="pm" id="p04-116" />
                    <i className="pm" id="p04-117" />
                    <i className="pm" id="p04-118" />
                    <i className="pm" id="p04-119" />
                    <i className="pm" id="p04-201" />
                    <i className="pm" id="p04-202" />
                    <i className="pm" id="p04-203" />
                    <i className="pm" id="p04-204" />
                    <i className="pm" id="p04-205" />
                    <i className="pm" id="p04-206" />
                    <i className="pm" id="p04-207" />
                    <i className="pm" id="p04-208" />
                    <i className="pm" id="p04-209" />
                    <i className="pm" id="p04-210" />
                    <i className="pm" id="p04-211" />
                    <i className="pm" id="p04-212" />
                    <i className="pm" id="p04-213" />
                    <i className="pm" id="p04-214" />
                    <i className="pm" id="p04-215" />
                    <i className="pm" id="p04-216" />
                    <i className="pm" id="p04-217" />
                    <i className="pm" id="p04-218" />
                    <i className="pm" id="p04-219" />
                    <i className="pm" id="p04-301" />
                    <i className="pm" id="p04-302" />
                    <i className="pm" id="p04-303" />
                    <i className="pm" id="p04-304" />
                    <i className="pm" id="p04-305" />
                    <i className="pm" id="p04-306" />
                    <i className="pm" id="p04-307" />
                    <i className="pm" id="p04-308" />
                    <i className="pm" id="p04-309" />
                    <i className="pm" id="p04-310" />
                    <i className="pm" id="p04-311" />
                    <i className="pm" id="p04-312" />
                    <i className="pm" id="p04-313" />
                    <i className="pm" id="p04-314" />
                    <i className="pm" id="p04-315" />
                    <i className="pm" id="p04-316" />
                    <i className="pm" id="p04-317" />
                    <i className="pm" id="p04-318" />
                    <i className="pm" id="p04-319" />
                    <i className="pm" id="p04-401" />
                    <i className="pm" id="p04-402" />
                    <i className="pm" id="p04-403" />
                    <i className="pm" id="p04-404" />
                    <i className="pm" id="p04-405" />
                    <i className="pm" id="p04-406" />
                    <i className="pm" id="p04-407" />
                    <i className="pm" id="p04-408" />
                    <i className="pm" id="p04-409" />
                    <i className="pm" id="p04-410" />
                    <i className="pm" id="p04-411" />
                    <i className="pm" id="p04-412" />
                    <i className="pm" id="p04-413" />
                    <i className="pm" id="p04-414" />
                    <i className="pm" id="p04-415" />
                    <i className="pm" id="p04-416" />
                    <i className="pm" id="p04-417" />
                    <i className="pm" id="p04-418" />
                    <i className="pm" id="p04-501" />
                    <i className="pm" id="p04-502" />
                    <i className="pm" id="p04-503" />
                    <i className="pm" id="p04-504" />
                    <i className="pm" id="p04-505" />
                    <i className="pm" id="p04-506" />
                    <i className="pm" id="p04-507" />
                    <i className="pm" id="p04-508" />
                    <i className="pm" id="p04-509" />
                    <i className="pm" id="p04-510" />
                    <i className="pm" id="p04-511" />
                    <i className="pm" id="p04-512" />
                    <i className="pm" id="p04-513" />
                    <i className="pm" id="p04-514" />
                    <i className="pm" id="p04-515" />
                    <i className="pm" id="p04-516" />
                    <i className="pm" id="p04-517" />
                  </span>
                  <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                  <form className="modal__box" action="/minibar/mb-07-locked-and-alcohol-free-rooms/#saved" method="get">
                    <div className="modal__head">
                      <a className="modal__back" href="#main">{"← Back"}</a>
                      <div>
                        <h2 className="modal__title" id="mb-p04-t">
                          {"Lock / unlock minibar "}
                          <span className="code-chip">{"MB-P04"}</span>
                        </h2>
                        <p className="modal__desc">{"Lock a minibar (guest request, credit control, minors) or make the room alcohol-free."}</p>
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
                          <span className="field__label">{"Room"}</span>
                          <div className="pr pc pc--101">
                            <span className="pr__no">{"101"}</span>
                            <span className="pr__t">
                              <b>{"Mr Rohit Neil"}</b>
                              <small>{"GDLX · Occupied · until 26 Oct · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--103">
                            <span className="pr__no">{"103"}</span>
                            <span className="pr__t">
                              <b>{"Mr Ajay Jatin"}</b>
                              <small>{"GDLX · Occupied · until 24 Oct · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--104">
                            <span className="pr__no">{"104"}</span>
                            <span className="pr__t">
                              <b>{"Mr Shibu Krish"}</b>
                              <small>{"GDLX · Occupied · until 25 Oct · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--105">
                            <span className="pr__no">{"105"}</span>
                            <span className="pr__t">
                              <b>{"Ms Noura Al Saud"}</b>
                              <small>{"GDLX · Occupied · until 24 Oct · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--106">
                            <span className="pr__no">{"106"}</span>
                            <span className="pr__t">
                              <b>{"Vacant room"}</b>
                              <small>{"GDLX · Vacant inspected · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--107">
                            <span className="pr__no">{"107"}</span>
                            <span className="pr__t">
                              <b>{"Mrs Jyoti Jatin"}</b>
                              <small>{"GDLX · Occupied · until 23 Oct · now: Alcohol-free – Religious / dietary until 23 Oct 2026"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--108">
                            <span className="pr__no">{"108"}</span>
                            <span className="pr__t">
                              <b>{"Mrs Shruti Shaan"}</b>
                              <small>{"GDLX · Occupied · until 25 Oct · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--109">
                            <span className="pr__no">{"109"}</span>
                            <span className="pr__t">
                              <b>{"Mrs Priya Kabir"}</b>
                              <small>{"GDLX · Occupied · until 25 Oct · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--110">
                            <span className="pr__no">{"110"}</span>
                            <span className="pr__t">
                              <b>{"Mrs Priya Kabir"}</b>
                              <small>{"GDLX · Occupied · until 25 Oct · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--111">
                            <span className="pr__no">{"111"}</span>
                            <span className="pr__t">
                              <b>{"Vacant room"}</b>
                              <small>{"GDLX · Vacant dirty · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--112">
                            <span className="pr__no">{"112"}</span>
                            <span className="pr__t">
                              <b>{"Mr Ajay Jatin"}</b>
                              <small>{"GDLX · Occupied · until 24 Oct · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--113">
                            <span className="pr__no">{"113"}</span>
                            <span className="pr__t">
                              <b>{"Mrs Isha Vihaan"}</b>
                              <small>{"GDLX · Occupied · until 24 Oct · now: Alcohol-free – Minor guests until 24 Oct 2026"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--114">
                            <span className="pr__no">{"114"}</span>
                            <span className="pr__t">
                              <b>{"Mrs Fatima Al Mansoori"}</b>
                              <small>{"GDLX · Occupied · until 25 Oct · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--115">
                            <span className="pr__no">{"115"}</span>
                            <span className="pr__t">
                              <b>{"Ms Isha Dhruv"}</b>
                              <small>{"GDLX · Occupied · until 23 Oct · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--116">
                            <span className="pr__no">{"116"}</span>
                            <span className="pr__t">
                              <b>{"Mr Amit Bijoy"}</b>
                              <small>{"GDLX · Occupied · until 26 Oct · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--117">
                            <span className="pr__no">{"117"}</span>
                            <span className="pr__t">
                              <b>{"Vacant room"}</b>
                              <small>{"GDLX · Vacant inspected · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--118">
                            <span className="pr__no">{"118"}</span>
                            <span className="pr__t">
                              <b>{"Vacant room"}</b>
                              <small>{"GDLX · Vacant dirty · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--119">
                            <span className="pr__no">{"119"}</span>
                            <span className="pr__t">
                              <b>{"Mrs Priya Kabir"}</b>
                              <small>{"GDLX · Occupied · until 25 Oct · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--201">
                            <span className="pr__no">{"201"}</span>
                            <span className="pr__t">
                              <b>{"Ms Kavita Siddharth"}</b>
                              <small>{"GDLX · Occupied · until 24 Oct · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--202">
                            <span className="pr__no">{"202"}</span>
                            <span className="pr__t">
                              <b>{"Dr Aswathy Vijay"}</b>
                              <small>{"GDLX · Occupied · until 25 Oct · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--203">
                            <span className="pr__no">{"203"}</span>
                            <span className="pr__t">
                              <b>{"Vacant room"}</b>
                              <small>{"GDLX · Vacant inspected · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--204">
                            <span className="pr__no">{"204"}</span>
                            <span className="pr__t">
                              <b>{"Vacant room"}</b>
                              <small>{"GDLX · Vacant inspected · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--205">
                            <span className="pr__no">{"205"}</span>
                            <span className="pr__t">
                              <b>{"Ms Anna Schneider"}</b>
                              <small>{"GDLX · Occupied · due out today · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--206">
                            <span className="pr__no">{"206"}</span>
                            <span className="pr__t">
                              <b>{"Vacant room"}</b>
                              <small>{"GDLX · Vacant inspected · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--207">
                            <span className="pr__no">{"207"}</span>
                            <span className="pr__t">
                              <b>{"Mr Amit Chirag"}</b>
                              <small>{"GDLX · Occupied · due out today · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--208">
                            <span className="pr__no">{"208"}</span>
                            <span className="pr__t">
                              <b>{"Ms Elsa Lindberg"}</b>
                              <small>{"GDLX · Occupied · until 26 Oct · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--209">
                            <span className="pr__no">{"209"}</span>
                            <span className="pr__t">
                              <b>{"Vacant room"}</b>
                              <small>{"GDLX · Vacant dirty · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--210">
                            <span className="pr__no">{"210"}</span>
                            <span className="pr__t">
                              <b>{"Vacant room"}</b>
                              <small>{"GDLX · Vacant clean · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--211">
                            <span className="pr__no">{"211"}</span>
                            <span className="pr__t">
                              <b>{"Mr Marco Rossi"}</b>
                              <small>{"GDLX · Occupied · until 23 Oct · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--212">
                            <span className="pr__no">{"212"}</span>
                            <span className="pr__t">
                              <b>{"Mr Ethan Anderson"}</b>
                              <small>{"GDLX · Occupied · until 23 Oct · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--213">
                            <span className="pr__no">{"213"}</span>
                            <span className="pr__t">
                              <b>{"Mr Omar Al Farsi"}</b>
                              <small>{"GDLX · Occupied · until 26 Oct · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--214">
                            <span className="pr__no">{"214"}</span>
                            <span className="pr__t">
                              <b>{"Vacant room"}</b>
                              <small>{"GDLX · Out of order · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--215">
                            <span className="pr__no">{"215"}</span>
                            <span className="pr__t">
                              <b>{"Vacant room"}</b>
                              <small>{"GDLX · Vacant clean · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--216">
                            <span className="pr__no">{"216"}</span>
                            <span className="pr__t">
                              <b>{"Mrs Sindhu Wilson"}</b>
                              <small>{"GDLX · Occupied · due out today · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--217">
                            <span className="pr__no">{"217"}</span>
                            <span className="pr__t">
                              <b>{"Ms Sindhu Rahman"}</b>
                              <small>{"GDLX · Occupied · until 24 Oct · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--218">
                            <span className="pr__no">{"218"}</span>
                            <span className="pr__t">
                              <b>{"Dr Anjali Rahman"}</b>
                              <small>{"GDLX · Occupied · until 25 Oct · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--219">
                            <span className="pr__no">{"219"}</span>
                            <span className="pr__t">
                              <b>{"Mr Ajay Jatin"}</b>
                              <small>{"GDLX · Occupied · until 24 Oct · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--301">
                            <span className="pr__no">{"301"}</span>
                            <span className="pr__t">
                              <b>{"Mr Biju George"}</b>
                              <small>{"GDLX · Occupied · until 23 Oct · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--302">
                            <span className="pr__no">{"302"}</span>
                            <span className="pr__t">
                              <b>{"Vacant room"}</b>
                              <small>{"GDLX · Vacant inspected · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--303">
                            <span className="pr__no">{"303"}</span>
                            <span className="pr__t">
                              <b>{"Ms Charlotte Fraser"}</b>
                              <small>{"GDLX · Occupied · until 23 Oct · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--304">
                            <span className="pr__no">{"304"}</span>
                            <span className="pr__t">
                              <b>{"Mr Oliver Hughes"}</b>
                              <small>{"GDLX · Occupied · until 25 Oct · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--305">
                            <span className="pr__no">{"305"}</span>
                            <span className="pr__t">
                              <b>{"Mrs Sindhu Wilson"}</b>
                              <small>{"GDLX · Occupied · due out today · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--306">
                            <span className="pr__no">{"306"}</span>
                            <span className="pr__t">
                              <b>{"Ms Jyoti Kabir"}</b>
                              <small>{"GDLX · Occupied · until 23 Oct · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--307">
                            <span className="pr__no">{"307"}</span>
                            <span className="pr__t">
                              <b>{"Vacant room"}</b>
                              <small>{"GDLX · Vacant inspected · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--308">
                            <span className="pr__no">{"308"}</span>
                            <span className="pr__t">
                              <b>{"Vacant room"}</b>
                              <small>{"GDLX · Vacant dirty · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--309">
                            <span className="pr__no">{"309"}</span>
                            <span className="pr__t">
                              <b>{"Ms Nandini Rishi"}</b>
                              <small>{"GDLX · Occupied · until 23 Oct · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--310">
                            <span className="pr__no">{"310"}</span>
                            <span className="pr__t">
                              <b>{"Mr Prasad Pavan"}</b>
                              <small>{"GDLX · Occupied · until 25 Oct · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--311">
                            <span className="pr__no">{"311"}</span>
                            <span className="pr__t">
                              <b>{"Vacant room"}</b>
                              <small>{"PDLX · Vacant inspected · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--312">
                            <span className="pr__no">{"312"}</span>
                            <span className="pr__t">
                              <b>{"Vacant room"}</b>
                              <small>{"PDLX · Vacant inspected · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--313">
                            <span className="pr__no">{"313"}</span>
                            <span className="pr__t">
                              <b>{"Ms Nandini Jatin"}</b>
                              <small>{"PDLX · Occupied · until 25 Oct · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--314">
                            <span className="pr__no">{"314"}</span>
                            <span className="pr__t">
                              <b>{"Vacant room"}</b>
                              <small>{"PDLX · Vacant inspected · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--315">
                            <span className="pr__no">{"315"}</span>
                            <span className="pr__t">
                              <b>{"Vacant room"}</b>
                              <small>{"PDLX · Vacant clean · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--316">
                            <span className="pr__no">{"316"}</span>
                            <span className="pr__t">
                              <b>{"Ms Shruti Siddharth"}</b>
                              <small>{"PDLX · Occupied · due out today · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--317">
                            <span className="pr__no">{"317"}</span>
                            <span className="pr__t">
                              <b>{"Vacant room"}</b>
                              <small>{"PDLX · Vacant inspected · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--318">
                            <span className="pr__no">{"318"}</span>
                            <span className="pr__t">
                              <b>{"Dr Ayesha Chirag"}</b>
                              <small>{"PDLX · Occupied · until 24 Oct · now: Locked – Credit / no deposit until 24 Oct 2026"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--319">
                            <span className="pr__no">{"319"}</span>
                            <span className="pr__t">
                              <b>{"Ms Remya Kurian"}</b>
                              <small>{"PDLX · Occupied · due out today · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--401">
                            <span className="pr__no">{"401"}</span>
                            <span className="pr__t">
                              <b>{"Mr Rahul Philip"}</b>
                              <small>{"PDLX · Occupied · until 26 Oct · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--402">
                            <span className="pr__no">{"402"}</span>
                            <span className="pr__t">
                              <b>{"Mrs Kavita Siddharth"}</b>
                              <small>{"PDLX · Occupied · until 25 Oct · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--403">
                            <span className="pr__no">{"403"}</span>
                            <span className="pr__t">
                              <b>{"Mr Luc Moreau"}</b>
                              <small>{"PDLX · Occupied · until 25 Oct · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--404">
                            <span className="pr__no">{"404"}</span>
                            <span className="pr__t">
                              <b>{"Mrs Kavita Ranjan"}</b>
                              <small>{"PDLX · Occupied · due out today · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--405">
                            <span className="pr__no">{"405"}</span>
                            <span className="pr__t">
                              <b>{"Vacant room"}</b>
                              <small>{"PDLX · Vacant clean · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--406">
                            <span className="pr__no">{"406"}</span>
                            <span className="pr__t">
                              <b>{"Mrs Kavita Ranjan"}</b>
                              <small>{"PDLX · Occupied · due out today · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--407">
                            <span className="pr__no">{"407"}</span>
                            <span className="pr__t">
                              <b>{"Ms Ayesha Sahil"}</b>
                              <small>{"PDLX · Occupied · until 26 Oct · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--408">
                            <span className="pr__no">{"408"}</span>
                            <span className="pr__t">
                              <b>{"Ms Lakshmi Mathew"}</b>
                              <small>{"PDLX · Occupied · until 25 Oct · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--409">
                            <span className="pr__no">{"409"}</span>
                            <span className="pr__t">
                              <b>{"Mr Oliver Hughes"}</b>
                              <small>{"PDLX · Occupied · until 24 Oct · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--410">
                            <span className="pr__no">{"410"}</span>
                            <span className="pr__t">
                              <b>{"Mr Naveen Chirag"}</b>
                              <small>{"PDLX · Occupied · until 26 Oct · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--411">
                            <span className="pr__no">{"411"}</span>
                            <span className="pr__t">
                              <b>{"Vacant room"}</b>
                              <small>{"PDLX · Vacant inspected · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--412">
                            <span className="pr__no">{"412"}</span>
                            <span className="pr__t">
                              <b>{"Vacant room"}</b>
                              <small>{"PDLX · Vacant inspected · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--413">
                            <span className="pr__no">{"413"}</span>
                            <span className="pr__t">
                              <b>{"Vacant room"}</b>
                              <small>{"PDLX · Vacant inspected · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--414">
                            <span className="pr__no">{"414"}</span>
                            <span className="pr__t">
                              <b>{"Vacant room"}</b>
                              <small>{"PDLX · Vacant inspected · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--415">
                            <span className="pr__no">{"415"}</span>
                            <span className="pr__t">
                              <b>{"Ms Shruti Siddharth"}</b>
                              <small>{"PDLX · Occupied · due out today · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--416">
                            <span className="pr__no">{"416"}</span>
                            <span className="pr__t">
                              <b>{"Mrs Isha Neil"}</b>
                              <small>{"PDLX · Occupied · due out today · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--417">
                            <span className="pr__no">{"417"}</span>
                            <span className="pr__t">
                              <b>{"Mrs Kavita Siddharth"}</b>
                              <small>{"PDLX · Occupied · until 23 Oct · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--418">
                            <span className="pr__no">{"418"}</span>
                            <span className="pr__t">
                              <b>{"Vacant room"}</b>
                              <small>{"PDLX · Vacant dirty · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--501">
                            <span className="pr__no">{"501"}</span>
                            <span className="pr__t">
                              <b>{"Mr Prasad Manav"}</b>
                              <small>{"PDLX · Occupied · until 26 Oct · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--502">
                            <span className="pr__no">{"502"}</span>
                            <span className="pr__t">
                              <b>{"Vacant room"}</b>
                              <small>{"PDLX · Vacant dirty · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--503">
                            <span className="pr__no">{"503"}</span>
                            <span className="pr__t">
                              <b>{"Mrs Kavita Ranjan"}</b>
                              <small>{"PDLX · Occupied · due out today · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--504">
                            <span className="pr__no">{"504"}</span>
                            <span className="pr__t">
                              <b>{"Dr Claire Dubois"}</b>
                              <small>{"PDLX · Occupied · until 26 Oct · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--505">
                            <span className="pr__no">{"505"}</span>
                            <span className="pr__t">
                              <b>{"Mrs Isha Neil"}</b>
                              <small>{"PDLX · Occupied · due out today · Mr Ravi Kabir arrives today · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--506">
                            <span className="pr__no">{"506"}</span>
                            <span className="pr__t">
                              <b>{"Dr Ayesha Chirag"}</b>
                              <small>{"PDLX · Occupied · until 24 Oct · now: Locked – Credit / no deposit until 24 Oct 2026"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--507">
                            <span className="pr__no">{"507"}</span>
                            <span className="pr__t">
                              <b>{"Mrs Pooja Kunal"}</b>
                              <small>{"PDLX · Occupied · until 23 Oct · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--508">
                            <span className="pr__no">{"508"}</span>
                            <span className="pr__t">
                              <b>{"Ms Sindhu Rahman"}</b>
                              <small>{"PDLX · Occupied · until 24 Oct · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--509">
                            <span className="pr__no">{"509"}</span>
                            <span className="pr__t">
                              <b>{"Mr Luc Moreau"}</b>
                              <small>{"PDLX · Occupied · until 25 Oct · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--510">
                            <span className="pr__no">{"510"}</span>
                            <span className="pr__t">
                              <b>{"Ms Sheela Nathan"}</b>
                              <small>{"PDLX · Occupied · until 26 Oct · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--511">
                            <span className="pr__no">{"511"}</span>
                            <span className="pr__t">
                              <b>{"Mr Naveen Chirag"}</b>
                              <small>{"PDLX · Occupied · until 26 Oct · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--512">
                            <span className="pr__no">{"512"}</span>
                            <span className="pr__t">
                              <b>{"Vacant room"}</b>
                              <small>{"PDLX · Vacant dirty · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--513">
                            <span className="pr__no">{"513"}</span>
                            <span className="pr__t">
                              <b>{"Vacant room"}</b>
                              <small>{"PDLX · Out of service · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--514">
                            <span className="pr__no">{"514"}</span>
                            <span className="pr__t">
                              <b>{"Mr Jithin Mathew"}</b>
                              <small>{"DLXS · Occupied · until 23 Oct · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--515">
                            <span className="pr__no">{"515"}</span>
                            <span className="pr__t">
                              <b>{"Mrs Rekha Krish"}</b>
                              <small>{"DLXS · Occupied · until 25 Oct · now: open, all items"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--516">
                            <span className="pr__no">{"516"}</span>
                            <span className="pr__t">
                              <b>{"Ms Nandini Jatin"}</b>
                              <small>{"DLXS · Occupied · until 25 Oct · now: Locked – Management until 25 Oct 2026"}</small>
                            </span>
                          </div>
                          <div className="pr pc pc--517">
                            <span className="pr__no">{"517"}</span>
                            <span className="pr__t">
                              <b>{"Mrs Maya Mohan"}</b>
                              <small>{"PRMS · Occupied · due out today · Mrs Athira Nirav arrives today · now: open, all items"}</small>
                            </span>
                          </div>
                        </div>
                        <fieldset className="field fd-fieldset field--wide ">
                          <legend className="field__label">
                            {"Action "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </legend>
                          <div className="row fd-multi">
                            <label className="check check--radio">
                              <input className="check__input" type="radio" name="lock_action" value="lock" required={true} defaultChecked={true} />
                              <span className="check__box" />
                              {"Lock"}
                            </label>
                            <label className="check check--radio">
                              <input className="check__input" type="radio" name="lock_action" value="unlock" required={true} />
                              <span className="check__box" />
                              {"Unlock"}
                            </label>
                            <label className="check check--radio">
                              <input className="check__input" type="radio" name="lock_action" value="afree" required={true} />
                              <span className="check__box" />
                              {"Alcohol-free (remove alcohol)"}
                            </label>
                            <label className="check check--radio">
                              <input className="check__input" type="radio" name="lock_action" value="restore" required={true} />
                              <span className="check__box" />
                              {"Restore"}
                            </label>
                          </div>
                        </fieldset>
                        <div className="field " data-fw="s">
                          <label className="field__label" htmlFor="p04-r">
                            {"Reason "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="p04-r" name="reason" required={true} defaultValue={""}>
                              <option value="" disabled={true}>{"Choose a reason"}</option>
                              <option>{"Guest request"}</option>
                              <option>{"Credit / no deposit"}</option>
                              <option>{"Minor guests"}</option>
                              <option>{"Religious / dietary"}</option>
                              <option>{"Management"}</option>
                            </select>
                            <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <div className="field " data-fw="s">
                          <label className="field__label" htmlFor="p04-u">{"Until"}</label>
                          <input className="field__input" id="p04-u" name="until" type="date" defaultValue={""} />
                          <span className="field__hint">{"Default: the guest’s departure date"}</span>
                        </div>
                        <p className="field--wide mc-note">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#info" />
                          </svg>
                          {"Save sets the flag on this screen and on the Front Desk room board (FD-06) and creates a task for the minibar attendant to lock the minibar or remove the alcohol."}
                        </p>
                      </div>
                    </div>
                    <div className="modal__foot">
                      <a className="btn" href="#main">{"Cancel"}</a>
                      <button className="btn btn--primary" type="submit">{"Save"}</button>
                    </div>
                  </form>
                </div>
                <div className="modal modal--full" id="mb-p05" data-code="MB-P05" role="dialog" aria-modal="true" aria-labelledby="mb-p05-t">
                  <span className="hb-mks" aria-hidden="true">
                    <i className="pm" id="p05-101" />
                    <i className="pm" id="p05-103" />
                    <i className="pm" id="p05-104" />
                    <i className="pm" id="p05-105" />
                    <i className="pm" id="p05-106" />
                    <i className="pm" id="p05-107" />
                    <i className="pm" id="p05-108" />
                    <i className="pm" id="p05-109" />
                    <i className="pm" id="p05-110" />
                    <i className="pm" id="p05-111" />
                    <i className="pm" id="p05-112" />
                    <i className="pm" id="p05-113" />
                    <i className="pm" id="p05-114" />
                    <i className="pm" id="p05-115" />
                    <i className="pm" id="p05-116" />
                    <i className="pm" id="p05-117" />
                    <i className="pm" id="p05-118" />
                    <i className="pm" id="p05-119" />
                    <i className="pm" id="p05-201" />
                    <i className="pm" id="p05-202" />
                    <i className="pm" id="p05-203" />
                    <i className="pm" id="p05-204" />
                    <i className="pm" id="p05-205" />
                    <i className="pm" id="p05-206" />
                    <i className="pm" id="p05-207" />
                    <i className="pm" id="p05-208" />
                    <i className="pm" id="p05-209" />
                    <i className="pm" id="p05-210" />
                    <i className="pm" id="p05-211" />
                    <i className="pm" id="p05-212" />
                    <i className="pm" id="p05-213" />
                    <i className="pm" id="p05-214" />
                    <i className="pm" id="p05-215" />
                    <i className="pm" id="p05-216" />
                    <i className="pm" id="p05-217" />
                    <i className="pm" id="p05-218" />
                    <i className="pm" id="p05-219" />
                    <i className="pm" id="p05-301" />
                    <i className="pm" id="p05-302" />
                    <i className="pm" id="p05-303" />
                    <i className="pm" id="p05-304" />
                    <i className="pm" id="p05-305" />
                    <i className="pm" id="p05-306" />
                    <i className="pm" id="p05-307" />
                    <i className="pm" id="p05-308" />
                    <i className="pm" id="p05-309" />
                    <i className="pm" id="p05-310" />
                    <i className="pm" id="p05-311" />
                    <i className="pm" id="p05-312" />
                    <i className="pm" id="p05-313" />
                    <i className="pm" id="p05-314" />
                    <i className="pm" id="p05-315" />
                    <i className="pm" id="p05-316" />
                    <i className="pm" id="p05-317" />
                    <i className="pm" id="p05-318" />
                    <i className="pm" id="p05-319" />
                    <i className="pm" id="p05-401" />
                    <i className="pm" id="p05-402" />
                    <i className="pm" id="p05-403" />
                    <i className="pm" id="p05-404" />
                    <i className="pm" id="p05-405" />
                    <i className="pm" id="p05-406" />
                    <i className="pm" id="p05-407" />
                    <i className="pm" id="p05-408" />
                    <i className="pm" id="p05-409" />
                    <i className="pm" id="p05-410" />
                    <i className="pm" id="p05-411" />
                    <i className="pm" id="p05-412" />
                    <i className="pm" id="p05-413" />
                    <i className="pm" id="p05-414" />
                    <i className="pm" id="p05-415" />
                    <i className="pm" id="p05-416" />
                    <i className="pm" id="p05-417" />
                    <i className="pm" id="p05-418" />
                    <i className="pm" id="p05-501" />
                    <i className="pm" id="p05-502" />
                    <i className="pm" id="p05-503" />
                    <i className="pm" id="p05-504" />
                    <i className="pm" id="p05-505" />
                    <i className="pm" id="p05-506" />
                    <i className="pm" id="p05-507" />
                    <i className="pm" id="p05-508" />
                    <i className="pm" id="p05-509" />
                    <i className="pm" id="p05-510" />
                    <i className="pm" id="p05-511" />
                    <i className="pm" id="p05-512" />
                    <i className="pm" id="p05-513" />
                    <i className="pm" id="p05-514" />
                    <i className="pm" id="p05-515" />
                    <i className="pm" id="p05-516" />
                    <i className="pm" id="p05-517" />
                  </span>
                  <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                  <form className="modal__box" action="/minibar/mb-02-room-minibar-status/" method="get">
                    <div className="modal__head">
                      <a className="modal__back" href="#main">{"← Back"}</a>
                      <div>
                        <h2 className="modal__title" id="mb-p05-t">
                          {"Room minibar history "}
                          <span className="code-chip">{"MB-P05"}</span>
                        </h2>
                        <p className="modal__desc">{"Checks, postings and corrections of the room for the period."}</p>
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
                          <span className="field__label">
                            {"Period "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </span>
                          <div className="mh-per">
                            <label className="sr-only" htmlFor="p05-f">{"From"}</label>
                            <input className="field__input" id="p05-f" type="date" name="from" required={true} defaultValue={"2026-10-17"} />
                            <span>{"to"}</span>
                            <label className="sr-only" htmlFor="p05-t">{"To"}</label>
                            <input className="field__input" id="p05-t" type="date" name="to" required={true} defaultValue={"2026-10-22"} />
                            <span className="field__hint">{"Default: the current stay"}</span>
                          </div>
                        </div>
                        <div className="field field--wide">
                          <div className="ph ph--101">
                            <div className="pr">
                              <span className="pr__no">{"101"}</span>
                              <span className="pr__t">
                                <b>{"Mr Rohit Neil"}</b>
                                <small>{"GDLX · Standard layout · stay FK-10082 until 26 Oct"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 101"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 18:28"}</td>
                                    <td className="dt__td nw" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td nw" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items">{"Soft drink × 2, Noodles × 1, Potato chips × 1, Cashew nuts × 1"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Amount">{"₹873.20"}</td>
                                    <td className="dt__td nw" data-label="Posting status" data-w2="" data-s="">
                                      <span className="pill hk-pill ml--post">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"Posted"}
                                      </span>
                                    </td>
                                    <td className="dt__td nw" data-a="">
                                      <a className="btn btn--sm" href="/minibar/mb-03-posting-queue/#mb-p02-l20261021006" data-leads-to="MB-P02">{"Dispute a line"}</a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--103">
                            <div className="pr">
                              <span className="pr__no">{"103"}</span>
                              <span className="pr__t">
                                <b>{"Mr Ajay Jatin"}</b>
                                <small>{"GDLX · Standard layout · stay FK-10008 until 24 Oct"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 103"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 20:01"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--104">
                            <div className="pr">
                              <span className="pr__no">{"104"}</span>
                              <span className="pr__t">
                                <b>{"Mr Shibu Krish"}</b>
                                <small>{"GDLX · Standard layout · stay FK-10058 until 25 Oct"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 104"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"22 Oct 07:50"}</td>
                                    <td className="dt__td nw" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td nw" data-label="By" data-w2="">{"Joby Thomas"}</td>
                                    <td className="dt__td" data-label="Items">{"Soft drink × 1, Chocolate × 1"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Amount">{"₹295.00"}</td>
                                    <td className="dt__td nw" data-label="Posting status" data-w2="" data-s="">
                                      <span className="pill hk-pill ml--disp">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#shield-alert" />
                                        </svg>
                                        {"Disputed"}
                                      </span>
                                    </td>
                                    <td className="dt__td nw" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--105">
                            <div className="pr">
                              <span className="pr__no">{"105"}</span>
                              <span className="pr__t">
                                <b>{"Ms Noura Al Saud"}</b>
                                <small>{"GDLX · Standard layout · stay FK-10056 until 24 Oct"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 105"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 15:15"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--106">
                            <div className="pr">
                              <span className="pr__no">{"106"}</span>
                              <span className="pr__t">
                                <b>{"Vacant room"}</b>
                                <small>{"GDLX · Standard layout · no guest"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 106"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 16:22"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--107">
                            <div className="pr">
                              <span className="pr__no">{"107"}</span>
                              <span className="pr__t">
                                <b>{"Mrs Jyoti Jatin"}</b>
                                <small>{"GDLX · Alcohol-free layout · stay FK-10002 until 23 Oct"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 107"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"22 Oct 08:02"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By" data-w2="">{"Joby Thomas"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 16:20"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--108">
                            <div className="pr">
                              <span className="pr__no">{"108"}</span>
                              <span className="pr__t">
                                <b>{"Mrs Shruti Shaan"}</b>
                                <small>{"GDLX · Standard layout · stay FK-10074 until 25 Oct"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 108"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"20 Oct 10:15"}</td>
                                    <td className="dt__td nw" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td nw" data-label="By" data-w2="">{"Joby Thomas"}</td>
                                    <td className="dt__td" data-label="Items">{"Soft drink × 2, Potato chips × 1"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Amount">{"₹472.00"}</td>
                                    <td className="dt__td nw" data-label="Posting status" data-w2="" data-s="">
                                      <span className="pill hk-pill ml--late">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#receipt" />
                                        </svg>
                                        {"Late charge"}
                                      </span>
                                    </td>
                                    <td className="dt__td nw" data-e="" />
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"22 Oct 08:06"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By" data-w2="">{"Joby Thomas"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--109">
                            <div className="pr">
                              <span className="pr__no">{"109"}</span>
                              <span className="pr__t">
                                <b>{"Mrs Priya Kabir"}</b>
                                <small>{"GDLX · Standard layout · stay FK-10035 until 25 Oct"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 109"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 19:43"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--110">
                            <div className="pr">
                              <span className="pr__no">{"110"}</span>
                              <span className="pr__t">
                                <b>{"Mrs Priya Kabir"}</b>
                                <small>{"GDLX · Standard layout · stay FK-10035 until 25 Oct"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 110"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 20:50"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--111">
                            <div className="pr">
                              <span className="pr__no">{"111"}</span>
                              <span className="pr__t">
                                <b>{"Vacant room"}</b>
                                <small>{"GDLX · Standard layout · no guest"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 111"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 21:57"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--112">
                            <div className="pr">
                              <span className="pr__no">{"112"}</span>
                              <span className="pr__t">
                                <b>{"Mr Ajay Jatin"}</b>
                                <small>{"GDLX · Standard layout · stay FK-10008 until 24 Oct"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 112"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 15:04"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--113">
                            <div className="pr">
                              <span className="pr__no">{"113"}</span>
                              <span className="pr__t">
                                <b>{"Mrs Isha Vihaan"}</b>
                                <small>{"GDLX · Alcohol-free layout · stay FK-10165 until 24 Oct"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 113"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"22 Oct 08:15"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By" data-w2="">{"Joby Thomas"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 16:20"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--114">
                            <div className="pr">
                              <span className="pr__no">{"114"}</span>
                              <span className="pr__t">
                                <b>{"Mrs Fatima Al Mansoori"}</b>
                                <small>{"GDLX · Standard layout · stay FK-10050 until 25 Oct"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 114"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 15:40"}</td>
                                    <td className="dt__td nw" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td nw" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items">{"Sparkling water × 2, Noodles × 1, Cashew nuts × 1, Fruit juice × 1"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Amount" data-w2="">{"₹1,003.00"}</td>
                                    <td className="dt__td nw" data-label="Posting status" data-w2="" data-s="">
                                      <span className="pill hk-pill ml--rev">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#undo" />
                                        </svg>
                                        {"Reversed"}
                                      </span>
                                    </td>
                                    <td className="dt__td nw" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--115">
                            <div className="pr">
                              <span className="pr__no">{"115"}</span>
                              <span className="pr__t">
                                <b>{"Ms Isha Dhruv"}</b>
                                <small>{"GDLX · Standard layout · stay FK-10118 until 23 Oct"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 115"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"19 Oct 18:46"}</td>
                                    <td className="dt__td nw" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td nw" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w="">{"Soft drink × 2, Fruit juice × 2, Cashew nuts × 1, Water × 3 (2 complimentary)"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Amount">{"₹920.40"}</td>
                                    <td className="dt__td nw" data-label="Posting status" data-w2="" data-s="">
                                      <span className="pill hk-pill ml--post">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"Posted"}
                                      </span>
                                    </td>
                                    <td className="dt__td nw" data-a="">
                                      <a className="btn btn--sm" href="/minibar/mb-03-posting-queue/#mb-p02-l20261019007" data-leads-to="MB-P02">{"Dispute a line"}</a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 15:04"}</td>
                                    <td className="dt__td nw" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td nw" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w="">{"Sparkling water × 1, Noodles × 1, Fruit juice × 1, Cashew nuts × 1, Cookies × 1, Water × 3 (2 complimentary)"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Amount">{"₹991.20"}</td>
                                    <td className="dt__td nw" data-label="Posting status" data-w2="" data-s="">
                                      <span className="pill hk-pill ml--post">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"Posted"}
                                      </span>
                                    </td>
                                    <td className="dt__td nw" data-a="">
                                      <a className="btn btn--sm" href="/minibar/mb-03-posting-queue/#mb-p02-l20261021004" data-leads-to="MB-P02">{"Dispute a line"}</a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--116">
                            <div className="pr">
                              <span className="pr__no">{"116"}</span>
                              <span className="pr__t">
                                <b>{"Mr Amit Bijoy"}</b>
                                <small>{"GDLX · Standard layout · stay FK-10011 until 26 Oct"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 116"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 19:32"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--117">
                            <div className="pr">
                              <span className="pr__no">{"117"}</span>
                              <span className="pr__t">
                                <b>{"Vacant room"}</b>
                                <small>{"GDLX · Standard layout · no guest"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 117"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 20:39"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--118">
                            <div className="pr">
                              <span className="pr__no">{"118"}</span>
                              <span className="pr__t">
                                <b>{"Vacant room"}</b>
                                <small>{"GDLX · Standard layout · no guest"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 118"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 21:46"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--119">
                            <div className="pr">
                              <span className="pr__no">{"119"}</span>
                              <span className="pr__t">
                                <b>{"Mrs Priya Kabir"}</b>
                                <small>{"GDLX · Standard layout · stay FK-10035 until 25 Oct"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 119"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 15:53"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--201">
                            <div className="pr">
                              <span className="pr__no">{"201"}</span>
                              <span className="pr__t">
                                <b>{"Ms Kavita Siddharth"}</b>
                                <small>{"GDLX · Standard layout · stay FK-10101 until 24 Oct"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 201"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"22 Oct 08:24"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By" data-w2="">{"Joby Thomas"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 16:20"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--202">
                            <div className="pr">
                              <span className="pr__no">{"202"}</span>
                              <span className="pr__t">
                                <b>{"Dr Aswathy Vijay"}</b>
                                <small>{"GDLX · Standard layout · stay FK-10084 until 25 Oct"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 202"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 21:34"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--203">
                            <div className="pr">
                              <span className="pr__no">{"203"}</span>
                              <span className="pr__t">
                                <b>{"Vacant room"}</b>
                                <small>{"GDLX · Standard layout · no guest"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 203"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 15:41"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--204">
                            <div className="pr">
                              <span className="pr__no">{"204"}</span>
                              <span className="pr__t">
                                <b>{"Vacant room"}</b>
                                <small>{"GDLX · Standard layout · no guest"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 204"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 16:48"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--205">
                            <div className="pr">
                              <span className="pr__no">{"205"}</span>
                              <span className="pr__t">
                                <b>{"Ms Anna Schneider"}</b>
                                <small>{"GDLX · Standard layout · stay FK-10108 until 22 Oct"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 205"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"20 Oct 18:44"}</td>
                                    <td className="dt__td nw" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td nw" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w="">{"Sparkling water × 2, Cashew nuts × 1, Potato chips × 1, Fruit juice × 1, Water × 3 (2 complimentary)"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Amount" data-w2="">{"₹1,026.60"}</td>
                                    <td className="dt__td nw" data-label="Posting status" data-w2="" data-s="">
                                      <span className="pill hk-pill ml--post">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"Posted"}
                                      </span>
                                    </td>
                                    <td className="dt__td nw" data-a="">
                                      <a className="btn btn--sm" href="/minibar/mb-03-posting-queue/#mb-p02-l20261020005" data-leads-to="MB-P02">{"Dispute a line"}</a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--206">
                            <div className="pr">
                              <span className="pr__no">{"206"}</span>
                              <span className="pr__t">
                                <b>{"Vacant room"}</b>
                                <small>{"GDLX · Standard layout · no guest"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 206"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 18:02"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--207">
                            <div className="pr">
                              <span className="pr__no">{"207"}</span>
                              <span className="pr__t">
                                <b>{"Mr Amit Chirag"}</b>
                                <small>{"GDLX · Standard layout · stay FK-10104 until 22 Oct"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 207"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"22 Oct 08:10"}</td>
                                    <td className="dt__td nw" data-label="Check type" data-w2="">{"Departure"}</td>
                                    <td className="dt__td nw" data-label="By" data-w2="">{"Joby Thomas"}</td>
                                    <td className="dt__td" data-label="Items">{"Fruit juice × 1, Cookies × 1"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Amount">{"₹306.80"}</td>
                                    <td className="dt__td nw" data-label="Posting status" data-w2="" data-s="">
                                      <span className="pill hk-pill ml--post">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"Posted"}
                                      </span>
                                    </td>
                                    <td className="dt__td nw" data-a="">
                                      <a className="btn btn--sm" href="/minibar/mb-03-posting-queue/#mb-p02-l20261022002" data-leads-to="MB-P02">{"Dispute a line"}</a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--208">
                            <div className="pr">
                              <span className="pr__no">{"208"}</span>
                              <span className="pr__t">
                                <b>{"Ms Elsa Lindberg"}</b>
                                <small>{"GDLX · Standard layout · stay FK-10033 until 26 Oct"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 208"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"20 Oct 19:59"}</td>
                                    <td className="dt__td nw" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td nw" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items">{"Soft drink × 2, Fruit juice × 2, Cashew nuts × 1"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Amount">{"₹849.60"}</td>
                                    <td className="dt__td nw" data-label="Posting status" data-w2="" data-s="">
                                      <span className="pill hk-pill ml--post">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"Posted"}
                                      </span>
                                    </td>
                                    <td className="dt__td nw" data-a="">
                                      <a className="btn btn--sm" href="/minibar/mb-03-posting-queue/#mb-p02-l20261020006" data-leads-to="MB-P02">{"Dispute a line"}</a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"22 Oct 08:31"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By" data-w2="">{"Joby Thomas"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--209">
                            <div className="pr">
                              <span className="pr__no">{"209"}</span>
                              <span className="pr__t">
                                <b>{"Vacant room"}</b>
                                <small>{"GDLX · Standard layout · no guest"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 209"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 21:23"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--210">
                            <div className="pr">
                              <span className="pr__no">{"210"}</span>
                              <span className="pr__t">
                                <b>{"Vacant room"}</b>
                                <small>{"GDLX · Standard layout · no guest"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 210"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 15:30"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--211">
                            <div className="pr">
                              <span className="pr__no">{"211"}</span>
                              <span className="pr__t">
                                <b>{"Mr Marco Rossi"}</b>
                                <small>{"GDLX · Standard layout · stay FK-10170 until 23 Oct"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 211"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"22 Oct 09:38"}</td>
                                    <td className="dt__td nw" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td nw" data-label="By" data-w2="">{"Joby Thomas"}</td>
                                    <td className="dt__td" data-label="Items">{"Fruit juice × 1, Banana chips × 1"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Amount">{"₹318.60"}</td>
                                    <td className="dt__td nw" data-label="Posting status" data-w2="" data-s="">
                                      <span className="pill hk-pill ml--pend">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#clock" />
                                        </svg>
                                        {"Pending"}
                                      </span>
                                    </td>
                                    <td className="dt__td nw" data-a="">
                                      <a className="btn btn--sm" href="/minibar/mb-03-posting-queue/#mb-p02-l20261022008" data-leads-to="MB-P02">{"Dispute a line"}</a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--212">
                            <div className="pr">
                              <span className="pr__no">{"212"}</span>
                              <span className="pr__t">
                                <b>{"Mr Ethan Anderson"}</b>
                                <small>{"GDLX · Standard layout · stay FK-10162 until 23 Oct"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 212"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 17:44"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--213">
                            <div className="pr">
                              <span className="pr__no">{"213"}</span>
                              <span className="pr__t">
                                <b>{"Mr Omar Al Farsi"}</b>
                                <small>{"GDLX · Standard layout · stay FK-10140 until 26 Oct"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 213"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 18:51"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--214">
                            <div className="pr">
                              <span className="pr__no">{"214"}</span>
                              <span className="pr__t">
                                <b>{"Vacant room"}</b>
                                <small>{"GDLX · Standard layout · no guest"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 214"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"19 Oct 11:20"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--215">
                            <div className="pr">
                              <span className="pr__no">{"215"}</span>
                              <span className="pr__t">
                                <b>{"Vacant room"}</b>
                                <small>{"GDLX · Standard layout · no guest"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 215"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 20:05"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--216">
                            <div className="pr">
                              <span className="pr__no">{"216"}</span>
                              <span className="pr__t">
                                <b>{"Mrs Sindhu Wilson"}</b>
                                <small>{"GDLX · Standard layout · stay FK-10193 until 22 Oct"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 216"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 21:12"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--217">
                            <div className="pr">
                              <span className="pr__no">{"217"}</span>
                              <span className="pr__t">
                                <b>{"Ms Sindhu Rahman"}</b>
                                <small>{"GDLX · Standard layout · stay FK-10097 until 24 Oct"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 217"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 15:19"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--218">
                            <div className="pr">
                              <span className="pr__no">{"218"}</span>
                              <span className="pr__t">
                                <b>{"Dr Anjali Rahman"}</b>
                                <small>{"GDLX · Standard layout · stay FK-10205 until 25 Oct"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 218"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 16:26"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--219">
                            <div className="pr">
                              <span className="pr__no">{"219"}</span>
                              <span className="pr__t">
                                <b>{"Mr Ajay Jatin"}</b>
                                <small>{"GDLX · Standard layout · stay FK-10008 until 24 Oct"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 219"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 17:33"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--301">
                            <div className="pr">
                              <span className="pr__no">{"301"}</span>
                              <span className="pr__t">
                                <b>{"Mr Biju George"}</b>
                                <small>{"GDLX · Standard layout · stay FK-10069 until 23 Oct"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 301"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"22 Oct 08:52"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By" data-w2="">{"Joby Thomas"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 16:20"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--302">
                            <div className="pr">
                              <span className="pr__no">{"302"}</span>
                              <span className="pr__t">
                                <b>{"Vacant room"}</b>
                                <small>{"GDLX · Standard layout · no guest"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 302"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 16:14"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--303">
                            <div className="pr">
                              <span className="pr__no">{"303"}</span>
                              <span className="pr__t">
                                <b>{"Ms Charlotte Fraser"}</b>
                                <small>{"GDLX · Standard layout · stay FK-10031 until 23 Oct"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 303"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 11:37"}</td>
                                    <td className="dt__td nw" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td nw" data-label="By" data-w2="">{"Joby Thomas"}</td>
                                    <td className="dt__td" data-label="Items">{"Soft drink × 1, Cashew nuts × 1, Chocolate × 1"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Amount">{"₹483.80"}</td>
                                    <td className="dt__td nw" data-label="Posting status" data-w2="" data-s="">
                                      <span className="pill hk-pill ml--post">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"Posted"}
                                      </span>
                                    </td>
                                    <td className="dt__td nw" data-a="">
                                      <a className="btn btn--sm" href="/minibar/mb-03-posting-queue/#mb-p02-l20261021002" data-leads-to="MB-P02">{"Dispute a line"}</a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--304">
                            <div className="pr">
                              <span className="pr__no">{"304"}</span>
                              <span className="pr__t">
                                <b>{"Mr Oliver Hughes"}</b>
                                <small>{"GDLX · Standard layout · stay FK-10143 until 25 Oct"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 304"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 18:28"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--305">
                            <div className="pr">
                              <span className="pr__no">{"305"}</span>
                              <span className="pr__t">
                                <b>{"Mrs Sindhu Wilson"}</b>
                                <small>{"GDLX · Standard layout · stay FK-10193 until 22 Oct"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 305"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 19:35"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--306">
                            <div className="pr">
                              <span className="pr__no">{"306"}</span>
                              <span className="pr__t">
                                <b>{"Ms Jyoti Kabir"}</b>
                                <small>{"GDLX · Standard layout · stay FK-10105 until 23 Oct"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 306"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 20:42"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--307">
                            <div className="pr">
                              <span className="pr__no">{"307"}</span>
                              <span className="pr__t">
                                <b>{"Vacant room"}</b>
                                <small>{"GDLX · Standard layout · no guest"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 307"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 21:49"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--308">
                            <div className="pr">
                              <span className="pr__no">{"308"}</span>
                              <span className="pr__t">
                                <b>{"Vacant room"}</b>
                                <small>{"GDLX · Standard layout · no guest"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 308"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 15:56"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--309">
                            <div className="pr">
                              <span className="pr__no">{"309"}</span>
                              <span className="pr__t">
                                <b>{"Ms Nandini Rishi"}</b>
                                <small>{"GDLX · Standard layout · stay FK-10061 until 23 Oct"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 309"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"19 Oct 18:09"}</td>
                                    <td className="dt__td nw" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td nw" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items">{"Soft drink × 1, Banana chips × 1, Chocolate × 1"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Amount">{"₹436.60"}</td>
                                    <td className="dt__td nw" data-label="Posting status" data-w2="" data-s="">
                                      <span className="pill hk-pill ml--post">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"Posted"}
                                      </span>
                                    </td>
                                    <td className="dt__td nw" data-a="">
                                      <a className="btn btn--sm" href="/minibar/mb-03-posting-queue/#mb-p02-l20261019006" data-leads-to="MB-P02">{"Dispute a line"}</a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--310">
                            <div className="pr">
                              <span className="pr__no">{"310"}</span>
                              <span className="pr__t">
                                <b>{"Mr Prasad Pavan"}</b>
                                <small>{"GDLX · Standard layout · stay FK-10103 until 25 Oct"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 310"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"18 Oct 18:39"}</td>
                                    <td className="dt__td nw" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td nw" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items">{"Soft drink × 1, Potato chips × 1"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Amount">{"₹318.60"}</td>
                                    <td className="dt__td nw" data-label="Posting status" data-w2="" data-s="">
                                      <span className="pill hk-pill ml--post">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"Posted"}
                                      </span>
                                    </td>
                                    <td className="dt__td nw" data-a="">
                                      <a className="btn btn--sm" href="/minibar/mb-03-posting-queue/#mb-p02-l20261018004" data-leads-to="MB-P02">{"Dispute a line"}</a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--311">
                            <div className="pr">
                              <span className="pr__no">{"311"}</span>
                              <span className="pr__t">
                                <b>{"Vacant room"}</b>
                                <small>{"PDLX · Standard layout · no guest"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 311"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 18:17"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--312">
                            <div className="pr">
                              <span className="pr__no">{"312"}</span>
                              <span className="pr__t">
                                <b>{"Vacant room"}</b>
                                <small>{"PDLX · Standard layout · no guest"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 312"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 19:24"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--313">
                            <div className="pr">
                              <span className="pr__no">{"313"}</span>
                              <span className="pr__t">
                                <b>{"Ms Nandini Jatin"}</b>
                                <small>{"PDLX · Standard layout · stay FK-10106 until 25 Oct"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 313"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"22 Oct 09:25"}</td>
                                    <td className="dt__td nw" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td nw" data-label="By" data-w2="">{"Joby Thomas"}</td>
                                    <td className="dt__td" data-label="Items">{"Soft drink × 2, Water × 2 (complimentary)"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Amount">{"₹306.80"}</td>
                                    <td className="dt__td nw" data-label="Posting status" data-w2="" data-s="">
                                      <span className="pill hk-pill ml--pend">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#clock" />
                                        </svg>
                                        {"Pending"}
                                      </span>
                                    </td>
                                    <td className="dt__td nw" data-a="">
                                      <a className="btn btn--sm" href="/minibar/mb-03-posting-queue/#mb-p02-l20261022006" data-leads-to="MB-P02">{"Dispute a line"}</a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--314">
                            <div className="pr">
                              <span className="pr__no">{"314"}</span>
                              <span className="pr__t">
                                <b>{"Vacant room"}</b>
                                <small>{"PDLX · Standard layout · no guest"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 314"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 21:38"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--315">
                            <div className="pr">
                              <span className="pr__no">{"315"}</span>
                              <span className="pr__t">
                                <b>{"Vacant room"}</b>
                                <small>{"PDLX · Standard layout · no guest"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 315"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 15:45"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--316">
                            <div className="pr">
                              <span className="pr__no">{"316"}</span>
                              <span className="pr__t">
                                <b>{"Ms Shruti Siddharth"}</b>
                                <small>{"PDLX · Standard layout · stay FK-10172 until 22 Oct"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 316"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 16:52"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--317">
                            <div className="pr">
                              <span className="pr__no">{"317"}</span>
                              <span className="pr__t">
                                <b>{"Vacant room"}</b>
                                <small>{"PDLX · Standard layout · no guest"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 317"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 17:59"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--318">
                            <div className="pr">
                              <span className="pr__no">{"318"}</span>
                              <span className="pr__t">
                                <b>{"Dr Ayesha Chirag"}</b>
                                <small>{"PDLX · Standard layout · stay FK-10159 until 24 Oct"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 318"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"20 Oct 17:40"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--319">
                            <div className="pr">
                              <span className="pr__no">{"319"}</span>
                              <span className="pr__t">
                                <b>{"Ms Remya Kurian"}</b>
                                <small>{"PDLX · Standard layout · stay FK-10102 until 22 Oct"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 319"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"22 Oct 08:40"}</td>
                                    <td className="dt__td nw" data-label="Check type" data-w2="">{"Departure"}</td>
                                    <td className="dt__td nw" data-label="By" data-w2="">{"Joby Thomas"}</td>
                                    <td className="dt__td" data-label="Items">{"Beer × 2, Potato chips × 1"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Amount">{"₹865.20"}</td>
                                    <td className="dt__td nw" data-label="Posting status" data-w2="" data-s="">
                                      <span className="pill hk-pill ml--post">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"Posted"}
                                      </span>
                                    </td>
                                    <td className="dt__td nw" data-a="">
                                      <a className="btn btn--sm" href="/minibar/mb-03-posting-queue/#mb-p02-l20261022003" data-leads-to="MB-P02">{"Dispute a line"}</a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--401">
                            <div className="pr">
                              <span className="pr__no">{"401"}</span>
                              <span className="pr__t">
                                <b>{"Mr Rahul Philip"}</b>
                                <small>{"PDLX · Standard layout · stay FK-10197 until 26 Oct"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 401"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 17:47"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--402">
                            <div className="pr">
                              <span className="pr__no">{"402"}</span>
                              <span className="pr__t">
                                <b>{"Mrs Kavita Siddharth"}</b>
                                <small>{"PDLX · Standard layout · stay FK-10048 until 25 Oct"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 402"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 18:54"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--403">
                            <div className="pr">
                              <span className="pr__no">{"403"}</span>
                              <span className="pr__t">
                                <b>{"Mr Luc Moreau"}</b>
                                <small>{"PDLX · Standard layout · stay FK-10180 until 25 Oct"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 403"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 19:01"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--404">
                            <div className="pr">
                              <span className="pr__no">{"404"}</span>
                              <span className="pr__t">
                                <b>{"Mrs Kavita Ranjan"}</b>
                                <small>{"PDLX · Standard layout · stay FK-10187 until 22 Oct"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 404"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 20:08"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--405">
                            <div className="pr">
                              <span className="pr__no">{"405"}</span>
                              <span className="pr__t">
                                <b>{"Vacant room"}</b>
                                <small>{"PDLX · Standard layout · no guest"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 405"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 21:15"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--406">
                            <div className="pr">
                              <span className="pr__no">{"406"}</span>
                              <span className="pr__t">
                                <b>{"Mrs Kavita Ranjan"}</b>
                                <small>{"PDLX · Standard layout · stay FK-10187 until 22 Oct"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 406"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 15:22"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--407">
                            <div className="pr">
                              <span className="pr__no">{"407"}</span>
                              <span className="pr__t">
                                <b>{"Ms Ayesha Sahil"}</b>
                                <small>{"PDLX · Standard layout · stay FK-10120 until 26 Oct"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 407"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 16:29"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--408">
                            <div className="pr">
                              <span className="pr__no">{"408"}</span>
                              <span className="pr__t">
                                <b>{"Ms Lakshmi Mathew"}</b>
                                <small>{"PDLX · Standard layout · stay FK-10161 until 25 Oct"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 408"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"20 Oct 17:25"}</td>
                                    <td className="dt__td nw" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td nw" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w="">{"Noodles × 1, Sparkling water × 1, Potato chips × 1, Cashew nuts × 1, Chocolate × 1"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Amount">{"₹920.40"}</td>
                                    <td className="dt__td nw" data-label="Posting status" data-w2="" data-s="">
                                      <span className="pill hk-pill ml--post">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"Posted"}
                                      </span>
                                    </td>
                                    <td className="dt__td nw" data-a="">
                                      <a className="btn btn--sm" href="/minibar/mb-03-posting-queue/#mb-p02-l20261020003" data-leads-to="MB-P02">{"Dispute a line"}</a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--409">
                            <div className="pr">
                              <span className="pr__no">{"409"}</span>
                              <span className="pr__t">
                                <b>{"Mr Oliver Hughes"}</b>
                                <small>{"PDLX · Standard layout · stay FK-10200 until 24 Oct"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 409"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"22 Oct 09:32"}</td>
                                    <td className="dt__td nw" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td nw" data-label="By" data-w2="">{"Joby Thomas"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Beer × 1, Cashew nuts × 1"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Amount">{"₹538.80"}</td>
                                    <td className="dt__td nw" data-label="Posting status" data-w2="" data-s="">
                                      <span className="pill hk-pill ml--pend">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#clock" />
                                        </svg>
                                        {"Pending"}
                                      </span>
                                    </td>
                                    <td className="dt__td nw" data-a="">
                                      <a className="btn btn--sm" href="/minibar/mb-03-posting-queue/#mb-p02-l20261022007" data-leads-to="MB-P02">{"Dispute a line"}</a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--410">
                            <div className="pr">
                              <span className="pr__no">{"410"}</span>
                              <span className="pr__t">
                                <b>{"Mr Naveen Chirag"}</b>
                                <small>{"PDLX · Standard layout · stay FK-10109 until 26 Oct"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 410"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 19:50"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--411">
                            <div className="pr">
                              <span className="pr__no">{"411"}</span>
                              <span className="pr__t">
                                <b>{"Vacant room"}</b>
                                <small>{"PDLX · Standard layout · no guest"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 411"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 11:30"}</td>
                                    <td className="dt__td nw" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td nw" data-label="By" data-w2="">{"Joby Thomas"}</td>
                                    <td className="dt__td" data-label="Items">{"Beer × 1, Potato chips × 1"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Amount">{"₹515.20"}</td>
                                    <td className="dt__td nw" data-label="Posting status" data-w2="" data-s="">
                                      <span className="pill hk-pill ml--fail">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#x-circle" />
                                        </svg>
                                        {"Failed"}
                                      </span>
                                    </td>
                                    <td className="dt__td nw" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--412">
                            <div className="pr">
                              <span className="pr__no">{"412"}</span>
                              <span className="pr__t">
                                <b>{"Vacant room"}</b>
                                <small>{"PDLX · Standard layout · no guest"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 412"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 21:04"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--413">
                            <div className="pr">
                              <span className="pr__no">{"413"}</span>
                              <span className="pr__t">
                                <b>{"Vacant room"}</b>
                                <small>{"PDLX · Standard layout · no guest"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 413"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 15:11"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--414">
                            <div className="pr">
                              <span className="pr__no">{"414"}</span>
                              <span className="pr__t">
                                <b>{"Vacant room"}</b>
                                <small>{"PDLX · Standard layout · no guest"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 414"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 16:18"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--415">
                            <div className="pr">
                              <span className="pr__no">{"415"}</span>
                              <span className="pr__t">
                                <b>{"Ms Shruti Siddharth"}</b>
                                <small>{"PDLX · Standard layout · stay FK-10172 until 22 Oct"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 415"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 17:25"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--416">
                            <div className="pr">
                              <span className="pr__no">{"416"}</span>
                              <span className="pr__t">
                                <b>{"Mrs Isha Neil"}</b>
                                <small>{"PDLX · Standard layout · stay FK-10123 until 22 Oct"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 416"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 18:32"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--417">
                            <div className="pr">
                              <span className="pr__no">{"417"}</span>
                              <span className="pr__t">
                                <b>{"Mrs Kavita Siddharth"}</b>
                                <small>{"PDLX · Standard layout · stay FK-10203 until 23 Oct"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 417"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 19:39"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--418">
                            <div className="pr">
                              <span className="pr__no">{"418"}</span>
                              <span className="pr__t">
                                <b>{"Vacant room"}</b>
                                <small>{"PDLX · Standard layout · no guest"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 418"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 20:46"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--501">
                            <div className="pr">
                              <span className="pr__no">{"501"}</span>
                              <span className="pr__t">
                                <b>{"Mr Prasad Manav"}</b>
                                <small>{"PDLX · Standard layout · stay FK-10178 until 26 Oct"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 501"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 19:27"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--502">
                            <div className="pr">
                              <span className="pr__no">{"502"}</span>
                              <span className="pr__t">
                                <b>{"Vacant room"}</b>
                                <small>{"PDLX · Standard layout · no guest"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 502"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 20:34"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--503">
                            <div className="pr">
                              <span className="pr__no">{"503"}</span>
                              <span className="pr__t">
                                <b>{"Mrs Kavita Ranjan"}</b>
                                <small>{"PDLX · Standard layout · stay FK-10187 until 22 Oct"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 503"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 21:41"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--504">
                            <div className="pr">
                              <span className="pr__no">{"504"}</span>
                              <span className="pr__t">
                                <b>{"Dr Claire Dubois"}</b>
                                <small>{"PDLX · Standard layout · stay FK-10027 until 26 Oct"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 504"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"22 Oct 09:20"}</td>
                                    <td className="dt__td nw" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td nw" data-label="By" data-w2="">{"Joby Thomas"}</td>
                                    <td className="dt__td" data-label="Items">{"Sparkling water × 1, Chocolate × 1"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Amount">{"₹354.00"}</td>
                                    <td className="dt__td nw" data-label="Posting status" data-w2="" data-s="">
                                      <span className="pill hk-pill ml--pend">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#clock" />
                                        </svg>
                                        {"Pending"}
                                      </span>
                                    </td>
                                    <td className="dt__td nw" data-a="">
                                      <a className="btn btn--sm" href="/minibar/mb-03-posting-queue/#mb-p02-l20261022005" data-leads-to="MB-P02">{"Dispute a line"}</a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--505">
                            <div className="pr">
                              <span className="pr__no">{"505"}</span>
                              <span className="pr__t">
                                <b>{"Mrs Isha Neil"}</b>
                                <small>{"PDLX · Standard layout · stay FK-10123 until 22 Oct"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 505"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 16:55"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--506">
                            <div className="pr">
                              <span className="pr__no">{"506"}</span>
                              <span className="pr__t">
                                <b>{"Dr Ayesha Chirag"}</b>
                                <small>{"PDLX · Standard layout · stay FK-10159 until 24 Oct"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 506"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"20 Oct 17:40"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--507">
                            <div className="pr">
                              <span className="pr__no">{"507"}</span>
                              <span className="pr__t">
                                <b>{"Mrs Pooja Kunal"}</b>
                                <small>{"PDLX · Standard layout · stay FK-10010 until 23 Oct"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 507"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 18:09"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--508">
                            <div className="pr">
                              <span className="pr__no">{"508"}</span>
                              <span className="pr__t">
                                <b>{"Ms Sindhu Rahman"}</b>
                                <small>{"PDLX · Standard layout · stay FK-10097 until 24 Oct"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 508"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 12:41"}</td>
                                    <td className="dt__td nw" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td nw" data-label="By" data-w2="">{"Joby Thomas"}</td>
                                    <td className="dt__td" data-label="Items">{"Soft drink × 1, Potato chips × 1, Chocolate × 1"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Amount">{"₹460.20"}</td>
                                    <td className="dt__td nw" data-label="Posting status" data-w2="" data-s="">
                                      <span className="pill hk-pill ml--post">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"Posted"}
                                      </span>
                                    </td>
                                    <td className="dt__td nw" data-a="">
                                      <a className="btn btn--sm" href="/minibar/mb-03-posting-queue/#mb-p02-l20261021003" data-leads-to="MB-P02">{"Dispute a line"}</a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--509">
                            <div className="pr">
                              <span className="pr__no">{"509"}</span>
                              <span className="pr__t">
                                <b>{"Mr Luc Moreau"}</b>
                                <small>{"PDLX · Standard layout · stay FK-10180 until 25 Oct"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 509"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 20:23"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--510">
                            <div className="pr">
                              <span className="pr__no">{"510"}</span>
                              <span className="pr__t">
                                <b>{"Ms Sheela Nathan"}</b>
                                <small>{"PDLX · Standard layout · stay FK-10145 until 26 Oct"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 510"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 21:30"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--511">
                            <div className="pr">
                              <span className="pr__no">{"511"}</span>
                              <span className="pr__t">
                                <b>{"Mr Naveen Chirag"}</b>
                                <small>{"PDLX · Standard layout · stay FK-10109 until 26 Oct"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 511"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 15:37"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--512">
                            <div className="pr">
                              <span className="pr__no">{"512"}</span>
                              <span className="pr__t">
                                <b>{"Vacant room"}</b>
                                <small>{"PDLX · Standard layout · no guest"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 512"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"20 Oct 12:30"}</td>
                                    <td className="dt__td nw" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td nw" data-label="By" data-w2="">{"Joby Thomas"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Chocolate × 1"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Amount">{"₹141.60"}</td>
                                    <td className="dt__td nw" data-label="Posting status" data-w2="" data-s="">
                                      <span className="pill hk-pill ml--wo">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#file-minus" />
                                        </svg>
                                        {"Written off"}
                                      </span>
                                    </td>
                                    <td className="dt__td nw" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--513">
                            <div className="pr">
                              <span className="pr__no">{"513"}</span>
                              <span className="pr__t">
                                <b>{"Vacant room"}</b>
                                <small>{"PDLX · Standard layout · no guest"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 513"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"19 Oct 11:20"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--514">
                            <div className="pr">
                              <span className="pr__no">{"514"}</span>
                              <span className="pr__t">
                                <b>{"Mr Jithin Mathew"}</b>
                                <small>{"DLXS · Suite layout · stay FK-10232 until 23 Oct"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 514"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 18:58"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--515">
                            <div className="pr">
                              <span className="pr__no">{"515"}</span>
                              <span className="pr__t">
                                <b>{"Mrs Rekha Krish"}</b>
                                <small>{"DLXS · Suite layout · stay FK-10029 until 25 Oct"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 515"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"21 Oct 19:05"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--516">
                            <div className="pr">
                              <span className="pr__no">{"516"}</span>
                              <span className="pr__t">
                                <b>{"Ms Nandini Jatin"}</b>
                                <small>{"DLXS · Suite layout · stay FK-10042 until 25 Oct"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 516"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="mh-old">
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"20 Oct 17:40"}</td>
                                    <td className="dt__td" data-label="Check type" data-w2="">{"Daily"}</td>
                                    <td className="dt__td" data-label="By">{"Anoop K"}</td>
                                    <td className="dt__td" data-label="Items" data-w2="">{"Nothing consumed"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Amount">{"₹0.00"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="ph ph--517">
                            <div className="pr">
                              <span className="pr__no">{"517"}</span>
                              <span className="pr__t">
                                <b>{"Mrs Maya Mohan"}</b>
                                <small>{"PRMS · Suite layout · stay FK-10142 until 22 Oct"}</small>
                              </span>
                            </div>
                            <div className="s-scroll">
                              <table className="dt__table mh-t" data-mc="">
                                <caption className="sr-only">{"Checks and postings of room 517"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Date"}</th>
                                    <th scope="col">{"Check type"}</th>
                                    <th scope="col">{"By"}</th>
                                    <th scope="col">{"Items"}</th>
                                    <th scope="col" className="dt__th--right">{"Amount"}</th>
                                    <th scope="col">{"Posting status"}</th>
                                    <th scope="col">
                                      <span className="sr-only">{"Dispute"}</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="dt__td nw" data-label="Date" data-w2="" data-t="">{"22 Oct 09:05"}</td>
                                    <td className="dt__td nw" data-label="Check type" data-w2="">{"Departure"}</td>
                                    <td className="dt__td nw" data-label="By" data-w2="">{"Joby Thomas"}</td>
                                    <td className="dt__td" data-label="Items" data-w="">{"Soft drink × 2 (complimentary), Cashew nuts × 1 (complimentary), Spirits miniature × 1"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Amount">{"₹450.00"}</td>
                                    <td className="dt__td nw" data-label="Posting status" data-w2="" data-s="">
                                      <span className="pill hk-pill ml--post">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"Posted"}
                                      </span>
                                    </td>
                                    <td className="dt__td nw" data-a="">
                                      <a className="btn btn--sm" href="/minibar/mb-03-posting-queue/#mb-p02-l20261022004" data-leads-to="MB-P02">{"Dispute a line"}</a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="modal__foot">
                      <a className="btn btn--primary" href="#main">{"Close"}</a>
                    </div>
                  </form>
                </div>
                <div className="fd-toast" id="t-zero" role="status" aria-live="polite">
                  <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#check-circle" />
                  </svg>
                  <div className="fd-toast__text">
                    {"Zero check recorded"}
                    <small>{"Nothing consumed – the room’s last check is now 22 Oct 09:42 by Joby Thomas; nothing goes to the posting queue."}</small>
                  </div>
                  <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                    <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#x" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="modal modal--sm" id="flow-filter" data-flow="flow-filter" role="dialog" aria-modal="true" aria-labelledby="flow-filter-t">
                <a className="modal__backdrop" href="#" aria-label="Close" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="flow-filter-t">{"Filter applied"}</h2>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close" />
                  </div>
                  <div className="modal__body">
                    <p className="field__hint">{"In the live system the list now shows only what matches your choices. The demo rows stay as they are until the system is connected."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--primary" href="#">{"OK"}</a>
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
