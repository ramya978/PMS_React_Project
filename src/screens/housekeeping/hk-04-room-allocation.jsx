// GENERATED from public/housekeeping/hk-04-room-allocation/index.html by scripts/convert_legacy.py.
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
    "href": "/housekeeping/hk-04-room-allocation/hk-04-room-allocation.css",
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

export default function HousekeepingHk04RoomAllocation() {
  return (
    <ScreenShell title="Room Allocation" sheets={SHEETS} inlineCss={INLINE_CSS}>
      <div data-screen="HK-04" data-code="HK-04" data-static="1" className="legacy-body">
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
                  <Link className="nav__item is-active" data-nav="HK-04" aria-current="page" title="Allocation" to={"/housekeeping/hk-04-room-allocation"}>
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
            <main className="app__content" id="main" data-code="HK-04" tabIndex="-1">
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
                        <span aria-current="page">{"Room Allocation"}</span>
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="page-header__row">
                  <div className="page-header__text">
                    <h1 className="page-header__title">{"Room Allocation"}</h1>
                  </div>
                  <span className="code-chip" title="Screen code">{"HK-04"}</span>
                  <div className="page-header__actions">
                    <a className="btn" href="#hk-p05" data-flow="opener">{"Move rooms between attendants"}</a>
                    <Link className="btn" data-leads-to="HK-07" to={"/housekeeping/hk-07-duty-roster"}>
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#calendar" />
                      </svg>
                      {"Duty roster"}
                    </Link>
                    <Link className="btn ph-ic" data-leads-to="HK-O01" to={"/housekeeping/hk-o01-attendant-task-sheet"}>
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#printer" />
                      </svg>
                      {"Print all"}
                    </Link>
                    <a className="btn" href="#draft">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#check" />
                      </svg>
                      {"Save draft"}
                    </a>
                    <a className="btn btn--primary" href="#hk-p06" data-leads-to="HK-P06">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#send" />
                      </svg>
                      {"Publish"}
                    </a>
                  </div>
                </div>
              </header>
              <form className="ap-set" action="/housekeeping/hk-04-room-allocation/#allocated" method="get" aria-label="Planning settings" data-code="HK-04-settings">
                <div className="ap-set__f">
                  <label className="ap-f">
                    <span>{"Business date"}</span>
                    <input className="field__input" type="date" name="date" min="2026-10-22" max="2026-10-23" required={true} aria-describedby="ap-date-h" defaultValue={"2026-10-22"} />
                    <small id="ap-date-h">{"Today or tomorrow"}</small>
                  </label>
                  <label className="ap-f">
                    <span>
                      {"Shift "}
                      <b className="field__req">{"*"}</b>
                    </span>
                    <span className="field__wrap">
                      <select className="field__input field__input--select" name="shift" required={true} defaultValue={"Morning"}>
                        <option>{"Morning"}</option>
                        <option>{"Evening"}</option>
                        <option>{"Night"}</option>
                      </select>
                      <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#chevron-down" />
                      </svg>
                    </span>
                    <small>{"07:00–15:30"}</small>
                  </label>
                  <div className="ap-f">
                    <span>
                      {"Attendants on duty "}
                      <b className="field__req">{"*"}</b>
                    </span>
                    <Link className="ap-roster" data-leads-to="HK-07" to={"/housekeeping/hk-07-duty-roster"}>
                      <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#users" />
                      </svg>
                      <b>{"10"}</b>
                      {" from the roster"}
                    </Link>
                    <small>{"Sheeba T on the evening shift"}</small>
                  </div>
                  <fieldset className="ap-f ap-seg">
                    <legend>
                      {"Method "}
                      <b className="field__req">{"*"}</b>
                    </legend>
                    <label>
                      <input type="radio" name="method" value="section" required={true} />
                      <span>{"By section"}</span>
                    </label>
                    <label>
                      <input type="radio" name="method" value="credits" required={true} />
                      <span>{"By credits"}</span>
                    </label>
                    <label>
                      <input type="radio" name="method" value="mixed" required={true} defaultChecked={true} />
                      <span>{"Mixed"}</span>
                    </label>
                  </fieldset>
                  <div className="ap-f ap-f--n">
                    <span>{"Max credits"}</span>
                    <b className="num">{"16.0"}</b>
                    <small>{"HKS-10 · trainee 10"}</small>
                  </div>
                  <div className="ap-f ap-f--n">
                    <span>{"Floor travel"}</span>
                    <b className="num">{"0.5"}</b>
                    <small>{"per extra floor"}</small>
                  </div>
                </div>
                <fieldset className="ap-inc">
                  <legend>
                    {"Include rooms "}
                    <b className="field__req">{"*"}</b>
                  </legend>
                  <label className="ap-chip">
                    <input type="checkbox" name="include" value="dep" defaultChecked={true} />
                    <span>{"Departures"}</span>
                  </label>
                  <label className="ap-chip">
                    <input type="checkbox" name="include" value="sty" defaultChecked={true} />
                    <span>{"Stayovers"}</span>
                  </label>
                  <label className="ap-chip">
                    <input type="checkbox" name="include" value="vd" defaultChecked={true} />
                    <span>{"Vacant dirty"}</span>
                  </label>
                  <label className="ap-chip">
                    <input type="checkbox" name="include" value="arr" />
                    <span>{"Arrivals pre-check"}</span>
                  </label>
                  <label className="ap-chip">
                    <input type="checkbox" name="include" value="pu" />
                    <span>{"Pickup / touch-up"}</span>
                  </label>
                  <label className="ap-chip">
                    <input type="checkbox" name="include" value="dcl" />
                    <span>{"Deep clean due"}</span>
                  </label>
                  <label className="ap-chip">
                    <input type="checkbox" name="include" value="td" />
                    <span>{"Turndown (evening)"}</span>
                  </label>
                </fieldset>
                <div className="ap-set__acts">
                  <a className="btn" href="#hk-p04" data-leads-to="HK-P04">
                    <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#sliders" />
                    </svg>
                    {"Allocation rules"}
                  </a>
                  <button className="btn btn--primary" type="submit" data-leads-to="HK-X03">
                    <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#sparkles" />
                    </svg>
                    {"Auto-allocate"}
                  </button>
                </div>
              </form>
              <div className="ap-state" role="status">
                <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <span>
                  <strong>{"Published 07:05 by Sunita Ranjan"}</strong>
                  {" · 10 task sheets on the attendants’ phones · this board shows the live plan; changes are saved as a draft until you publish again."}
                </span>
                <Link className="fd-link" data-leads-to="HK-05" to={"/housekeeping/hk-05-task-sheets"}>{"Task sheets →"}</Link>
              </div>
              <div className="ap" data-code="HK-04-board">
                <aside className="ap-un" aria-labelledby="ap-un-t">
                  <h2 className="ap-h" id="ap-un-t">
                    {"Unassigned "}
                    <span className="ap-n">{"3"}</span>
                  </h2>
                  <div className="ap-grp">
                    <span className="ap-grp__t">{"No section · suites"}</span>
                    <ol className="acol__list">
                      <li className="ac ac--todo hk--oc" id="ac-515">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-515">{"515"}</a>
                        <span className="ac__ty">{"DLXS"}</span>
                        <span className="ac__task ac__task--sty">{"STY"}</span>
                        <span className="ac__cr num" title="Stayover · 36 min">{"1.2"}</span>
                        <a className="ac__mv" href="#p05-515" title="Move room 515 to another attendant" data-leads-to="HK-P05">
                          <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#arrow-left-right" />
                          </svg>
                          <span className="sr-only">{"Move"}</span>
                        </a>
                        <span className="ac__meta">
                          <span className="ac__st" title="Not started">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#play" />
                            </svg>
                            {"Not started"}
                          </span>
                        </span>
                      </li>
                      <li className="ac ac--todo hk--oc" id="ac-516">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-516">{"516"}</a>
                        <span className="ac__ty">{"DLXS"}</span>
                        <span className="ac__task ac__task--sty">{"STY"}</span>
                        <span className="ac__cr num" title="Stayover · 36 min">{"1.2"}</span>
                        <a className="ac__mv" href="#p05-516" title="Move room 516 to another attendant" data-leads-to="HK-P05">
                          <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#arrow-left-right" />
                          </svg>
                          <span className="sr-only">{"Move"}</span>
                        </a>
                        <span className="ac__meta">
                          <span className="ac__st" title="Not started">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#play" />
                            </svg>
                            {"Not started"}
                          </span>
                          <span className="ac-f ac-f--linen" title="Linen">
                            <svg className="icon" width="11" height="11" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#layers" />
                            </svg>
                            {"Linen"}
                          </span>
                        </span>
                      </li>
                      <li className="ac ac--todo hk--oc" id="ac-517">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-517">{"517"}</a>
                        <span className="ac__ty">{"PRMS"}</span>
                        <span className="ac__task ac__task--dep">{"DEP"}</span>
                        <span className="ac__cr num" title="Departure · no standard">{"–"}</span>
                        <a className="ac__mv" href="#p05-517" title="Move room 517 to another attendant" data-leads-to="HK-P05">
                          <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#arrow-left-right" />
                          </svg>
                          <span className="sr-only">{"Move"}</span>
                        </a>
                        <span className="ac__meta">
                          <span className="ac__st" title="Not started">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#play" />
                            </svg>
                            {"Not started"}
                          </span>
                          <span className="ac-f ac-f--vip" title="VIP 3">
                            <svg className="icon" width="11" height="11" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#star" />
                            </svg>
                            {"VIP 3"}
                          </span>
                          <span className="ac-f ac-f--arr" title="Arrival">
                            <svg className="icon" width="11" height="11" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#log-in" />
                            </svg>
                            {"Arrival"}
                          </span>
                        </span>
                      </li>
                    </ol>
                    <p className="ap-tip">
                      <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#info" />
                      </svg>
                      {"515–517 belong to no section yet (HKS-03). Suites go to a senior attendant – use the move button on a card."}
                    </p>
                  </div>
                  <h2 className="ap-h">{"Exceptions"}</h2>
                  <ul className="ap-ex">
                    <li>
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#shield-alert" />
                      </svg>
                      <span>
                        <b>{"DND now"}</b>
                        {"208, 402, 504 – service later (HK-12)"}
                      </span>
                    </li>
                    <li>
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#wrench" />
                      </svg>
                      <span>
                        <b>{"Out of order / service"}</b>
                        {"214, 513 – not allocated"}
                      </span>
                    </li>
                    <li>
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#check-circle" />
                      </svg>
                      <span>
                        <b>{"Already cleaned"}</b>
                        {"45 rooms done this morning"}
                      </span>
                    </li>
                  </ul>
                </aside>
                <div className="ap-cols" aria-label="Attendants on duty">
                  <section className="acol" id="col-TS-20261022-01" aria-label="Anitha P">
                    <header className="acol__h">
                      <span className="acol__av">{"AP"}</span>
                      <div className="acol__who">
                        <b>{"Anitha P"}</b>
                        <small>{"S1 · 01 · phone 08"}</small>
                      </div>
                      <a className="acol__ts" href="/housekeeping/hk-06-task-sheet-detail/#TS-20261022-01" title="Open task sheet TS-20261022-01" data-leads-to="HK-06">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#file-text" />
                        </svg>
                        <span className="sr-only">{"TS-20261022-01"}</span>
                      </a>
                    </header>
                    <div className="acol__cr acol__cr--ok">
                      <div className="acol__crn">
                        <b className="num">{"4.0"}</b>
                        {" / 16 credits"}
                        <span>{"6 rooms · 5 done"}</span>
                      </div>
                      <span className="acol__bar" role="img" aria-label="4.0 of 16 credits (25 %)">
                        <i style={{"width": "25%"}} />
                      </span>
                      <small>{"4.0 room credits · floor 1 only"}</small>
                    </div>
                    <ol className="acol__list">
                      <li className="ac ac--progress hk--vd" id="ac-111">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-111">{"111"}</a>
                        <span className="ac__ty">{"GDLX"}</span>
                        <span className="ac__task ac__task--dep">{"DEP"}</span>
                        <span className="ac__cr num" title="Departure · 30 min">{"1.0"}</span>
                        <span className="ac__meta">
                          <span className="ac__st" title="In progress">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#clock" />
                            </svg>
                            {"In progress · 11 min"}
                          </span>
                          <span className="ac-f ac-f--vip" title="VIP 1">
                            <svg className="icon" width="11" height="11" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#star" />
                            </svg>
                            {"VIP 1"}
                          </span>
                          <span className="ac-f ac-f--arr" title="Arrival 16:00">
                            <svg className="icon" width="11" height="11" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#log-in" />
                            </svg>
                            {"Arrival 16:00"}
                          </span>
                          <span className="ac-f ac-f--rush" title="Rush">
                            <svg className="icon" width="11" height="11" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#timer" />
                            </svg>
                            {"Rush"}
                          </span>
                        </span>
                      </li>
                      <li className="ac ac--done hk--oc" id="ac-101">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-101">{"101"}</a>
                        <span className="ac__ty">{"GDLX"}</span>
                        <span className="ac__task ac__task--sty">{"STY"}</span>
                        <span className="ac__cr num" title="Stayover · 18 min">{"0.6"}</span>
                        <span className="ac__meta">
                          <span className="ac__st" title="Done">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Done"}
                          </span>
                        </span>
                      </li>
                      <li className="ac ac--done hk--oc" id="ac-104">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-104">{"104"}</a>
                        <span className="ac__ty">{"GDLX"}</span>
                        <span className="ac__task ac__task--sty">{"STY"}</span>
                        <span className="ac__cr num" title="Stayover · 18 min">{"0.6"}</span>
                        <span className="ac__meta">
                          <span className="ac__st" title="Done">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Done"}
                          </span>
                        </span>
                      </li>
                      <li className="ac ac--done hk--oc" id="ac-107">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-107">{"107"}</a>
                        <span className="ac__ty">{"GDLX"}</span>
                        <span className="ac__task ac__task--sty">{"STY"}</span>
                        <span className="ac__cr num" title="Stayover · 18 min">{"0.6"}</span>
                        <span className="ac__meta">
                          <span className="ac__st" title="Done">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Done"}
                          </span>
                          <span className="ac-f ac-f--linen" title="Linen">
                            <svg className="icon" width="11" height="11" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#layers" />
                            </svg>
                            {"Linen"}
                          </span>
                        </span>
                      </li>
                      <li className="ac ac--done hk--oc" id="ac-109">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-109">{"109"}</a>
                        <span className="ac__ty">{"GDLX"}</span>
                        <span className="ac__task ac__task--sty">{"STY"}</span>
                        <span className="ac__cr num" title="Stayover · 18 min">{"0.6"}</span>
                        <span className="ac__meta">
                          <span className="ac__st" title="Done">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Done"}
                          </span>
                        </span>
                      </li>
                      <li className="ac ac--done hk--oc" id="ac-113">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-113">{"113"}</a>
                        <span className="ac__ty">{"GDLX"}</span>
                        <span className="ac__task ac__task--sty">{"STY"}</span>
                        <span className="ac__cr num" title="Stayover · 18 min">{"0.6"}</span>
                        <span className="ac__meta">
                          <span className="ac__st" title="Done">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Done"}
                          </span>
                          <span className="ac-f ac-f--linen" title="Linen">
                            <svg className="icon" width="11" height="11" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#layers" />
                            </svg>
                            {"Linen"}
                          </span>
                        </span>
                      </li>
                    </ol>
                  </section>
                  <section className="acol" id="col-TS-20261022-02" aria-label="Remya K">
                    <header className="acol__h">
                      <span className="acol__av">{"RK"}</span>
                      <div className="acol__who">
                        <b>{"Remya K"}</b>
                        <small>{"S1 · 02 · phone 09"}</small>
                      </div>
                      <a className="acol__ts" href="/housekeeping/hk-06-task-sheet-detail/#TS-20261022-02" title="Open task sheet TS-20261022-02" data-leads-to="HK-06">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#file-text" />
                        </svg>
                        <span className="sr-only">{"TS-20261022-02"}</span>
                      </a>
                    </header>
                    <div className="acol__cr acol__cr--ok">
                      <div className="acol__crn">
                        <b className="num">{"3.0"}</b>
                        {" / 16 credits"}
                        <span>{"5 rooms · 4 done"}</span>
                      </div>
                      <span className="acol__bar" role="img" aria-label="3.0 of 16 credits (19 %)">
                        <i style={{"width": "19%"}} />
                      </span>
                      <small>{"3.0 room credits · floor 1 only"}</small>
                    </div>
                    <ol className="acol__list">
                      <li className="ac ac--todo hk--od" id="ac-110">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-110">{"110"}</a>
                        <span className="ac__ty">{"GDLX"}</span>
                        <span className="ac__task ac__task--sty">{"STY"}</span>
                        <span className="ac__cr num" title="Stayover · 18 min">{"0.6"}</span>
                        <a className="ac__mv" href="#p05-110" title="Move room 110 to another attendant" data-leads-to="HK-P05">
                          <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#arrow-left-right" />
                          </svg>
                          <span className="sr-only">{"Move"}</span>
                        </a>
                        <span className="ac__meta">
                          <span className="ac__st" title="Not started">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#play" />
                            </svg>
                            {"Not started"}
                          </span>
                        </span>
                      </li>
                      <li className="ac ac--done hk--oc" id="ac-103">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-103">{"103"}</a>
                        <span className="ac__ty">{"GDLX"}</span>
                        <span className="ac__task ac__task--sty">{"STY"}</span>
                        <span className="ac__cr num" title="Stayover · 18 min">{"0.6"}</span>
                        <span className="ac__meta">
                          <span className="ac__st" title="Done">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Done"}
                          </span>
                        </span>
                      </li>
                      <li className="ac ac--done hk--oc" id="ac-105">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-105">{"105"}</a>
                        <span className="ac__ty">{"GDLX"}</span>
                        <span className="ac__task ac__task--sty">{"STY"}</span>
                        <span className="ac__cr num" title="Stayover · 18 min">{"0.6"}</span>
                        <span className="ac__meta">
                          <span className="ac__st" title="Done">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Done"}
                          </span>
                        </span>
                      </li>
                      <li className="ac ac--done hk--oc" id="ac-108">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-108">{"108"}</a>
                        <span className="ac__ty">{"GDLX"}</span>
                        <span className="ac__task ac__task--sty">{"STY"}</span>
                        <span className="ac__cr num" title="Stayover · 18 min">{"0.6"}</span>
                        <span className="ac__meta">
                          <span className="ac__st" title="Done">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Done"}
                          </span>
                          <span className="ac-f ac-f--green" title="Green">
                            <svg className="icon" width="11" height="11" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#leaf" />
                            </svg>
                            {"Green"}
                          </span>
                        </span>
                      </li>
                      <li className="ac ac--done hk--oc" id="ac-112">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-112">{"112"}</a>
                        <span className="ac__ty">{"GDLX"}</span>
                        <span className="ac__task ac__task--sty">{"STY"}</span>
                        <span className="ac__cr num" title="Stayover · 18 min">{"0.6"}</span>
                        <span className="ac__meta">
                          <span className="ac__st" title="Done">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Done"}
                          </span>
                        </span>
                      </li>
                    </ol>
                  </section>
                  <section className="acol" id="col-TS-20261022-03" aria-label="Divya M">
                    <header className="acol__h">
                      <span className="acol__av">{"DM"}</span>
                      <div className="acol__who">
                        <b>{"Divya M"}</b>
                        <small>{"S2 · 03 · phone 10"}</small>
                      </div>
                      <a className="acol__ts" href="/housekeeping/hk-06-task-sheet-detail/#TS-20261022-03" title="Open task sheet TS-20261022-03" data-leads-to="HK-06">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#file-text" />
                        </svg>
                        <span className="sr-only">{"TS-20261022-03"}</span>
                      </a>
                    </header>
                    <div className="acol__cr acol__cr--ok">
                      <div className="acol__crn">
                        <b className="num">{"7.1"}</b>
                        {" / 16 credits"}
                        <span>{"9 rooms · 6 done"}</span>
                      </div>
                      <span className="acol__bar" role="img" aria-label="7.1 of 16 credits (44 %)">
                        <i style={{"width": "44%"}} />
                      </span>
                      <small>{"6.6 room credits + 0.5 floor travel (floors 1, 2)"}</small>
                    </div>
                    <ol className="acol__list">
                      <li className="ac ac--todo hk--oc" id="ac-205">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-205">{"205"}</a>
                        <span className="ac__ty">{"GDLX"}</span>
                        <span className="ac__task ac__task--dep">{"DEP"}</span>
                        <span className="ac__cr num" title="Departure · 30 min">{"1.0"}</span>
                        <a className="ac__mv" href="#p05-205" title="Move room 205 to another attendant" data-leads-to="HK-P05">
                          <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#arrow-left-right" />
                          </svg>
                          <span className="sr-only">{"Move"}</span>
                        </a>
                        <span className="ac__meta">
                          <span className="ac__st" title="Not started">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#play" />
                            </svg>
                            {"Not started"}
                          </span>
                          <span className="ac-f ac-f--arr" title="Arrival">
                            <svg className="icon" width="11" height="11" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#log-in" />
                            </svg>
                            {"Arrival"}
                          </span>
                        </span>
                      </li>
                      <li className="ac ac--progress hk--vd" id="ac-118">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-118">{"118"}</a>
                        <span className="ac__ty">{"GDLX"}</span>
                        <span className="ac__task ac__task--dep">{"DEP"}</span>
                        <span className="ac__cr num" title="Departure · 30 min">{"1.0"}</span>
                        <span className="ac__meta">
                          <span className="ac__st" title="In progress">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#clock" />
                            </svg>
                            {"In progress · 14 min"}
                          </span>
                        </span>
                      </li>
                      <li className="ac ac--todo hk--oc" id="ac-207">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-207">{"207"}</a>
                        <span className="ac__ty">{"GDLX"}</span>
                        <span className="ac__task ac__task--dep">{"DEP"}</span>
                        <span className="ac__cr num" title="Departure · 30 min">{"1.0"}</span>
                        <a className="ac__mv" href="#p05-207" title="Move room 207 to another attendant" data-leads-to="HK-P05">
                          <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#arrow-left-right" />
                          </svg>
                          <span className="sr-only">{"Move"}</span>
                        </a>
                        <span className="ac__meta">
                          <span className="ac__st" title="Not started">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#play" />
                            </svg>
                            {"Not started"}
                          </span>
                        </span>
                      </li>
                      <li className="ac ac--done hk--oc" id="ac-114">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-114">{"114"}</a>
                        <span className="ac__ty">{"GDLX"}</span>
                        <span className="ac__task ac__task--sty">{"STY"}</span>
                        <span className="ac__cr num" title="Stayover · 18 min">{"0.6"}</span>
                        <span className="ac__meta">
                          <span className="ac__st" title="Done">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Done"}
                          </span>
                          <span className="ac-f ac-f--linen" title="Linen">
                            <svg className="icon" width="11" height="11" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#layers" />
                            </svg>
                            {"Linen"}
                          </span>
                        </span>
                      </li>
                      <li className="ac ac--done hk--oc" id="ac-115">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-115">{"115"}</a>
                        <span className="ac__ty">{"GDLX"}</span>
                        <span className="ac__task ac__task--sty">{"STY"}</span>
                        <span className="ac__cr num" title="Stayover · 18 min">{"0.6"}</span>
                        <span className="ac__meta">
                          <span className="ac__st" title="Done">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Done"}
                          </span>
                          <span className="ac-f ac-f--linen" title="Linen">
                            <svg className="icon" width="11" height="11" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#layers" />
                            </svg>
                            {"Linen"}
                          </span>
                        </span>
                      </li>
                      <li className="ac ac--done hk--oc" id="ac-116">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-116">{"116"}</a>
                        <span className="ac__ty">{"GDLX"}</span>
                        <span className="ac__task ac__task--sty">{"STY"}</span>
                        <span className="ac__cr num" title="Stayover · 18 min">{"0.6"}</span>
                        <span className="ac__meta">
                          <span className="ac__st" title="Done">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Done"}
                          </span>
                        </span>
                      </li>
                      <li className="ac ac--done hk--oc" id="ac-119">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-119">{"119"}</a>
                        <span className="ac__ty">{"GDLX"}</span>
                        <span className="ac__task ac__task--sty">{"STY"}</span>
                        <span className="ac__cr num" title="Stayover · 18 min">{"0.6"}</span>
                        <span className="ac__meta">
                          <span className="ac__st" title="Done">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Done"}
                          </span>
                        </span>
                      </li>
                      <li className="ac ac--done hk--oc" id="ac-201">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-201">{"201"}</a>
                        <span className="ac__ty">{"GDLX"}</span>
                        <span className="ac__task ac__task--sty">{"STY"}</span>
                        <span className="ac__cr num" title="Stayover · 18 min">{"0.6"}</span>
                        <span className="ac__meta">
                          <span className="ac__st" title="Done">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Done"}
                          </span>
                        </span>
                      </li>
                      <li className="ac ac--done hk--oc" id="ac-202">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-202">{"202"}</a>
                        <span className="ac__ty">{"GDLX"}</span>
                        <span className="ac__task ac__task--sty">{"STY"}</span>
                        <span className="ac__cr num" title="Stayover · 18 min">{"0.6"}</span>
                        <span className="ac__meta">
                          <span className="ac__st" title="Done">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Done"}
                          </span>
                          <span className="ac-f ac-f--linen" title="Linen">
                            <svg className="icon" width="11" height="11" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#layers" />
                            </svg>
                            {"Linen"}
                          </span>
                        </span>
                      </li>
                    </ol>
                  </section>
                  <section className="acol" id="col-TS-20261022-04" aria-label="Mariamma Varghese">
                    <header className="acol__h">
                      <span className="acol__av">{"MV"}</span>
                      <div className="acol__who">
                        <b>{"Mariamma Varghese"}</b>
                        <small>{"S3 · Senior · 04 · phone 06"}</small>
                      </div>
                      <a className="acol__ts" href="/housekeeping/hk-06-task-sheet-detail/#TS-20261022-04" title="Open task sheet TS-20261022-04" data-leads-to="HK-06">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#file-text" />
                        </svg>
                        <span className="sr-only">{"TS-20261022-04"}</span>
                      </a>
                    </header>
                    <div className="acol__cr acol__cr--ok">
                      <div className="acol__crn">
                        <b className="num">{"9.3"}</b>
                        {" / 16 credits"}
                        <span>{"12 rooms · 9 done"}</span>
                      </div>
                      <span className="acol__bar" role="img" aria-label="9.3 of 16 credits (58 %)">
                        <i style={{"width": "58%"}} />
                      </span>
                      <small>{"8.8 room credits + 0.5 floor travel (floors 2, 3)"}</small>
                    </div>
                    <ol className="acol__list">
                      <li className="ac ac--progress hk--vd" id="ac-209">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-209">{"209"}</a>
                        <span className="ac__ty">{"GDLX"}</span>
                        <span className="ac__task ac__task--dep">{"DEP"}</span>
                        <span className="ac__cr num" title="Departure · 30 min">{"1.0"}</span>
                        <span className="ac__meta">
                          <span className="ac__st" title="In progress">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#clock" />
                            </svg>
                            {"In progress · 22 min"}
                          </span>
                        </span>
                      </li>
                      <li className="ac ac--todo hk--oc" id="ac-216">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-216">{"216"}</a>
                        <span className="ac__ty">{"GDLX"}</span>
                        <span className="ac__task ac__task--dep">{"DEP"}</span>
                        <span className="ac__cr num" title="Departure · 30 min">{"1.0"}</span>
                        <a className="ac__mv" href="#p05-216" title="Move room 216 to another attendant" data-leads-to="HK-P05">
                          <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#arrow-left-right" />
                          </svg>
                          <span className="sr-only">{"Move"}</span>
                        </a>
                        <span className="ac__meta">
                          <span className="ac__st" title="Not started">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#play" />
                            </svg>
                            {"Not started"}
                          </span>
                        </span>
                      </li>
                      <li className="ac ac--paused hk--oc" id="ac-208">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-208">{"208"}</a>
                        <span className="ac__ty">{"GDLX"}</span>
                        <span className="ac__task ac__task--sty">{"STY"}</span>
                        <span className="ac__cr num" title="Stayover · 18 min">{"0.6"}</span>
                        <a className="ac__mv" href="#p05-208" title="Move room 208 to another attendant" data-leads-to="HK-P05">
                          <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#arrow-left-right" />
                          </svg>
                          <span className="sr-only">{"Move"}</span>
                        </a>
                        <span className="ac__meta">
                          <span className="ac__st" title="Paused – DND">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#pause" />
                            </svg>
                            {"Paused – DND"}
                          </span>
                          <span className="ac-f ac-f--dnd" title="DND">
                            <svg className="icon" width="11" height="11" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#shield-alert" />
                            </svg>
                            {"DND"}
                          </span>
                        </span>
                      </li>
                      <li className="ac ac--done hk--vc" id="ac-210">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-210">{"210"}</a>
                        <span className="ac__ty">{"GDLX"}</span>
                        <span className="ac__task ac__task--dep">{"DEP"}</span>
                        <span className="ac__cr num" title="Departure · 30 min">{"1.0"}</span>
                        <span className="ac__meta">
                          <span className="ac__st" title="Done">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Done"}
                          </span>
                        </span>
                      </li>
                      <li className="ac ac--done hk--oc" id="ac-211">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-211">{"211"}</a>
                        <span className="ac__ty">{"GDLX"}</span>
                        <span className="ac__task ac__task--sty">{"STY"}</span>
                        <span className="ac__cr num" title="Stayover · 18 min">{"0.6"}</span>
                        <span className="ac__meta">
                          <span className="ac__st" title="Done">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Done"}
                          </span>
                        </span>
                      </li>
                      <li className="ac ac--done hk--oc" id="ac-212">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-212">{"212"}</a>
                        <span className="ac__ty">{"GDLX"}</span>
                        <span className="ac__task ac__task--sty">{"STY"}</span>
                        <span className="ac__cr num" title="Stayover · 18 min">{"0.6"}</span>
                        <span className="ac__meta">
                          <span className="ac__st" title="Done">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Done"}
                          </span>
                          <span className="ac-f ac-f--linen" title="Linen">
                            <svg className="icon" width="11" height="11" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#layers" />
                            </svg>
                            {"Linen"}
                          </span>
                        </span>
                      </li>
                      <li className="ac ac--done hk--oc" id="ac-213">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-213">{"213"}</a>
                        <span className="ac__ty">{"GDLX"}</span>
                        <span className="ac__task ac__task--sty">{"STY"}</span>
                        <span className="ac__cr num" title="Stayover · 18 min">{"0.6"}</span>
                        <span className="ac__meta">
                          <span className="ac__st" title="Done">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Done"}
                          </span>
                        </span>
                      </li>
                      <li className="ac ac--done hk--vc" id="ac-215">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-215">{"215"}</a>
                        <span className="ac__ty">{"GDLX"}</span>
                        <span className="ac__task ac__task--dep">{"DEP"}</span>
                        <span className="ac__cr num" title="Departure · 30 min">{"1.0"}</span>
                        <span className="ac__meta">
                          <span className="ac__st" title="Done">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Done"}
                          </span>
                        </span>
                      </li>
                      <li className="ac ac--done hk--oc" id="ac-217">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-217">{"217"}</a>
                        <span className="ac__ty">{"GDLX"}</span>
                        <span className="ac__task ac__task--sty">{"STY"}</span>
                        <span className="ac__cr num" title="Stayover · 18 min">{"0.6"}</span>
                        <span className="ac__meta">
                          <span className="ac__st" title="Done">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Done"}
                          </span>
                        </span>
                      </li>
                      <li className="ac ac--done hk--oc" id="ac-218">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-218">{"218"}</a>
                        <span className="ac__ty">{"GDLX"}</span>
                        <span className="ac__task ac__task--sty">{"STY"}</span>
                        <span className="ac__cr num" title="Stayover · 18 min">{"0.6"}</span>
                        <span className="ac__meta">
                          <span className="ac__st" title="Done">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Done"}
                          </span>
                          <span className="ac-f ac-f--linen" title="Linen">
                            <svg className="icon" width="11" height="11" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#layers" />
                            </svg>
                            {"Linen"}
                          </span>
                        </span>
                      </li>
                      <li className="ac ac--done hk--oc" id="ac-219">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-219">{"219"}</a>
                        <span className="ac__ty">{"GDLX"}</span>
                        <span className="ac__task ac__task--sty">{"STY"}</span>
                        <span className="ac__cr num" title="Stayover · 18 min">{"0.6"}</span>
                        <span className="ac__meta">
                          <span className="ac__st" title="Done">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Done"}
                          </span>
                        </span>
                      </li>
                      <li className="ac ac--done hk--oc" id="ac-301">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-301">{"301"}</a>
                        <span className="ac__ty">{"GDLX"}</span>
                        <span className="ac__task ac__task--sty">{"STY"}</span>
                        <span className="ac__cr num" title="Stayover · 18 min">{"0.6"}</span>
                        <span className="ac__meta">
                          <span className="ac__st" title="Done">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Done"}
                          </span>
                        </span>
                      </li>
                    </ol>
                  </section>
                  <section className="acol" id="col-TS-20261022-05" aria-label="Shiny Joseph">
                    <header className="acol__h">
                      <span className="acol__av">{"SJ"}</span>
                      <div className="acol__who">
                        <b>{"Shiny Joseph"}</b>
                        <small>{"S4 · 05 · phone 11"}</small>
                      </div>
                      <a className="acol__ts" href="/housekeeping/hk-06-task-sheet-detail/#TS-20261022-05" title="Open task sheet TS-20261022-05" data-leads-to="HK-06">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#file-text" />
                        </svg>
                        <span className="sr-only">{"TS-20261022-05"}</span>
                      </a>
                    </header>
                    <div className="acol__cr acol__cr--ok">
                      <div className="acol__crn">
                        <b className="num">{"3.2"}</b>
                        {" / 16 credits"}
                        <span>{"4 rooms · 1 done"}</span>
                      </div>
                      <span className="acol__bar" role="img" aria-label="3.2 of 16 credits (20 %)">
                        <i style={{"width": "20%"}} />
                      </span>
                      <small>{"3.2 room credits · floor 3 only"}</small>
                    </div>
                    <ol className="acol__list">
                      <li className="ac ac--progress hk--vd" id="ac-308">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-308">{"308"}</a>
                        <span className="ac__ty">{"GDLX"}</span>
                        <span className="ac__task ac__task--dep">{"DEP"}</span>
                        <span className="ac__cr num" title="Departure · 30 min">{"1.0"}</span>
                        <span className="ac__meta">
                          <span className="ac__st" title="In progress">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#clock" />
                            </svg>
                            {"In progress · 52 min"}
                          </span>
                        </span>
                      </li>
                      <li className="ac ac--todo hk--oc" id="ac-305">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-305">{"305"}</a>
                        <span className="ac__ty">{"GDLX"}</span>
                        <span className="ac__task ac__task--dep">{"DEP"}</span>
                        <span className="ac__cr num" title="Departure · 30 min">{"1.0"}</span>
                        <a className="ac__mv" href="#p05-305" title="Move room 305 to another attendant" data-leads-to="HK-P05">
                          <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#arrow-left-right" />
                          </svg>
                          <span className="sr-only">{"Move"}</span>
                        </a>
                        <span className="ac__meta">
                          <span className="ac__st" title="Not started">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#play" />
                            </svg>
                            {"Not started"}
                          </span>
                        </span>
                      </li>
                      <li className="ac ac--todo hk--od" id="ac-310">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-310">{"310"}</a>
                        <span className="ac__ty">{"GDLX"}</span>
                        <span className="ac__task ac__task--sty">{"STY"}</span>
                        <span className="ac__cr num" title="Stayover · 18 min">{"0.6"}</span>
                        <a className="ac__mv" href="#p05-310" title="Move room 310 to another attendant" data-leads-to="HK-P05">
                          <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#arrow-left-right" />
                          </svg>
                          <span className="sr-only">{"Move"}</span>
                        </a>
                        <span className="ac__meta">
                          <span className="ac__st" title="Not started">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#play" />
                            </svg>
                            {"Not started"}
                          </span>
                          <span className="ac-f ac-f--linen" title="Linen">
                            <svg className="icon" width="11" height="11" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#layers" />
                            </svg>
                            {"Linen"}
                          </span>
                        </span>
                      </li>
                      <li className="ac ac--done hk--oc" id="ac-303">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-303">{"303"}</a>
                        <span className="ac__ty">{"GDLX"}</span>
                        <span className="ac__task ac__task--sty">{"STY"}</span>
                        <span className="ac__cr num" title="Stayover · 18 min">{"0.6"}</span>
                        <span className="ac__meta">
                          <span className="ac__st" title="Done">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Done"}
                          </span>
                          <span className="ac-f ac-f--linen" title="Linen">
                            <svg className="icon" width="11" height="11" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#layers" />
                            </svg>
                            {"Linen"}
                          </span>
                        </span>
                      </li>
                    </ol>
                  </section>
                  <section className="acol" id="col-TS-20261022-06" aria-label="Jincy Mathew">
                    <header className="acol__h">
                      <span className="acol__av">{"JM"}</span>
                      <div className="acol__who">
                        <b>{"Jincy Mathew"}</b>
                        <small>{"S4 · 06 · –"}</small>
                      </div>
                      <a className="acol__ts" href="/housekeeping/hk-06-task-sheet-detail/#TS-20261022-06" title="Open task sheet TS-20261022-06" data-leads-to="HK-06">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#file-text" />
                        </svg>
                        <span className="sr-only">{"TS-20261022-06"}</span>
                      </a>
                    </header>
                    <div className="acol__cr acol__cr--ok">
                      <div className="acol__crn">
                        <b className="num">{"2.4"}</b>
                        {" / 16 credits"}
                        <span>{"4 rooms · 4 done"}</span>
                      </div>
                      <span className="acol__bar" role="img" aria-label="2.4 of 16 credits (15 %)">
                        <i style={{"width": "15%"}} />
                      </span>
                      <small>{"2.4 room credits · floor 3 only"}</small>
                    </div>
                    <ol className="acol__list">
                      <li className="ac ac--done hk--oc" id="ac-304">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-304">{"304"}</a>
                        <span className="ac__ty">{"GDLX"}</span>
                        <span className="ac__task ac__task--sty">{"STY"}</span>
                        <span className="ac__cr num" title="Stayover · 18 min">{"0.6"}</span>
                        <span className="ac__meta">
                          <span className="ac__st" title="Done">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Done"}
                          </span>
                          <span className="ac-f ac-f--linen" title="Linen">
                            <svg className="icon" width="11" height="11" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#layers" />
                            </svg>
                            {"Linen"}
                          </span>
                        </span>
                      </li>
                      <li className="ac ac--done hk--oc" id="ac-306">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-306">{"306"}</a>
                        <span className="ac__ty">{"GDLX"}</span>
                        <span className="ac__task ac__task--sty">{"STY"}</span>
                        <span className="ac__cr num" title="Stayover · 18 min">{"0.6"}</span>
                        <span className="ac__meta">
                          <span className="ac__st" title="Done">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Done"}
                          </span>
                          <span className="ac-f ac-f--linen" title="Linen">
                            <svg className="icon" width="11" height="11" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#layers" />
                            </svg>
                            {"Linen"}
                          </span>
                        </span>
                      </li>
                      <li className="ac ac--done hk--oc" id="ac-309">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-309">{"309"}</a>
                        <span className="ac__ty">{"GDLX"}</span>
                        <span className="ac__task ac__task--sty">{"STY"}</span>
                        <span className="ac__cr num" title="Stayover · 18 min">{"0.6"}</span>
                        <span className="ac__meta">
                          <span className="ac__st" title="Done">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Done"}
                          </span>
                        </span>
                      </li>
                      <li className="ac ac--done hk--oc" id="ac-313">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-313">{"313"}</a>
                        <span className="ac__ty">{"PDLX"}</span>
                        <span className="ac__task ac__task--sty">{"STY"}</span>
                        <span className="ac__cr num" title="Stayover · 18 min">{"0.6"}</span>
                        <span className="ac__meta">
                          <span className="ac__st" title="Done">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Done"}
                          </span>
                        </span>
                      </li>
                    </ol>
                  </section>
                  <section className="acol" id="col-TS-20261022-07" aria-label="Rekha S">
                    <header className="acol__h">
                      <span className="acol__av">{"RS"}</span>
                      <div className="acol__who">
                        <b>{"Rekha S"}</b>
                        <small>{"S5 · 07 · phone 12"}</small>
                      </div>
                      <a className="acol__ts" href="/housekeeping/hk-06-task-sheet-detail/#TS-20261022-07" title="Open task sheet TS-20261022-07" data-leads-to="HK-06">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#file-text" />
                        </svg>
                        <span className="sr-only">{"TS-20261022-07"}</span>
                      </a>
                    </header>
                    <div className="acol__cr acol__cr--ok">
                      <div className="acol__crn">
                        <b className="num">{"10.1"}</b>
                        {" / 16 credits"}
                        <span>{"12 rooms · 7 done"}</span>
                      </div>
                      <span className="acol__bar" role="img" aria-label="10.1 of 16 credits (63 %)">
                        <i style={{"width": "63%"}} />
                      </span>
                      <small>{"9.6 room credits + 0.5 floor travel (floors 3, 4)"}</small>
                    </div>
                    <ol className="acol__list">
                      <li className="ac ac--todo hk--oc" id="ac-316">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-316">{"316"}</a>
                        <span className="ac__ty">{"PDLX"}</span>
                        <span className="ac__task ac__task--dep">{"DEP"}</span>
                        <span className="ac__cr num" title="Departure · 30 min">{"1.0"}</span>
                        <a className="ac__mv" href="#p05-316" title="Move room 316 to another attendant" data-leads-to="HK-P05">
                          <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#arrow-left-right" />
                          </svg>
                          <span className="sr-only">{"Move"}</span>
                        </a>
                        <span className="ac__meta">
                          <span className="ac__st" title="Not started">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#play" />
                            </svg>
                            {"Not started"}
                          </span>
                        </span>
                      </li>
                      <li className="ac ac--todo hk--oc" id="ac-319">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-319">{"319"}</a>
                        <span className="ac__ty">{"PDLX"}</span>
                        <span className="ac__task ac__task--dep">{"DEP"}</span>
                        <span className="ac__cr num" title="Departure · 30 min">{"1.0"}</span>
                        <a className="ac__mv" href="#p05-319" title="Move room 319 to another attendant" data-leads-to="HK-P05">
                          <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#arrow-left-right" />
                          </svg>
                          <span className="sr-only">{"Move"}</span>
                        </a>
                        <span className="ac__meta">
                          <span className="ac__st" title="Not started">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#play" />
                            </svg>
                            {"Not started"}
                          </span>
                        </span>
                      </li>
                      <li className="ac ac--todo hk--oc" id="ac-404">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-404">{"404"}</a>
                        <span className="ac__ty">{"PDLX"}</span>
                        <span className="ac__task ac__task--dep">{"DEP"}</span>
                        <span className="ac__cr num" title="Departure · 30 min">{"1.0"}</span>
                        <a className="ac__mv" href="#p05-404" title="Move room 404 to another attendant" data-leads-to="HK-P05">
                          <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#arrow-left-right" />
                          </svg>
                          <span className="sr-only">{"Move"}</span>
                        </a>
                        <span className="ac__meta">
                          <span className="ac__st" title="Not started">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#play" />
                            </svg>
                            {"Not started"}
                          </span>
                        </span>
                      </li>
                      <li className="ac ac--todo hk--oc" id="ac-406">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-406">{"406"}</a>
                        <span className="ac__ty">{"PDLX"}</span>
                        <span className="ac__task ac__task--dep">{"DEP"}</span>
                        <span className="ac__cr num" title="Departure · 30 min">{"1.0"}</span>
                        <a className="ac__mv" href="#p05-406" title="Move room 406 to another attendant" data-leads-to="HK-P05">
                          <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#arrow-left-right" />
                          </svg>
                          <span className="sr-only">{"Move"}</span>
                        </a>
                        <span className="ac__meta">
                          <span className="ac__st" title="Not started">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#play" />
                            </svg>
                            {"Not started"}
                          </span>
                        </span>
                      </li>
                      <li className="ac ac--paused hk--oc" id="ac-402">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-402">{"402"}</a>
                        <span className="ac__ty">{"PDLX"}</span>
                        <span className="ac__task ac__task--sty">{"STY"}</span>
                        <span className="ac__cr num" title="Stayover · 18 min">{"0.6"}</span>
                        <a className="ac__mv" href="#p05-402" title="Move room 402 to another attendant" data-leads-to="HK-P05">
                          <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#arrow-left-right" />
                          </svg>
                          <span className="sr-only">{"Move"}</span>
                        </a>
                        <span className="ac__meta">
                          <span className="ac__st" title="Paused – DND">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#pause" />
                            </svg>
                            {"Paused – DND"}
                          </span>
                          <span className="ac-f ac-f--dnd" title="DND">
                            <svg className="icon" width="11" height="11" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#shield-alert" />
                            </svg>
                            {"DND"}
                          </span>
                          <span className="ac-f ac-f--linen" title="Linen">
                            <svg className="icon" width="11" height="11" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#layers" />
                            </svg>
                            {"Linen"}
                          </span>
                        </span>
                      </li>
                      <li className="ac ac--done hk--vc" id="ac-315">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-315">{"315"}</a>
                        <span className="ac__ty">{"PDLX"}</span>
                        <span className="ac__task ac__task--dep">{"DEP"}</span>
                        <span className="ac__cr num" title="Departure · 30 min">{"1.0"}</span>
                        <span className="ac__meta">
                          <span className="ac__st" title="Done">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Done"}
                          </span>
                        </span>
                      </li>
                      <li className="ac ac--done hk--oc" id="ac-318">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-318">{"318"}</a>
                        <span className="ac__ty">{"PDLX"}</span>
                        <span className="ac__task ac__task--sty">{"STY"}</span>
                        <span className="ac__cr num" title="Stayover · 18 min">{"0.6"}</span>
                        <span className="ac__meta">
                          <span className="ac__st" title="Done">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Done"}
                          </span>
                          <span className="ac-f ac-f--linen" title="Linen">
                            <svg className="icon" width="11" height="11" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#layers" />
                            </svg>
                            {"Linen"}
                          </span>
                        </span>
                      </li>
                      <li className="ac ac--done hk--oc" id="ac-401">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-401">{"401"}</a>
                        <span className="ac__ty">{"PDLX"}</span>
                        <span className="ac__task ac__task--sty">{"STY"}</span>
                        <span className="ac__cr num" title="Stayover · 18 min">{"0.6"}</span>
                        <span className="ac__meta">
                          <span className="ac__st" title="Done">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Done"}
                          </span>
                        </span>
                      </li>
                      <li className="ac ac--done hk--oc" id="ac-403">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-403">{"403"}</a>
                        <span className="ac__ty">{"PDLX"}</span>
                        <span className="ac__task ac__task--sty">{"STY"}</span>
                        <span className="ac__cr num" title="Stayover · 18 min">{"0.6"}</span>
                        <span className="ac__meta">
                          <span className="ac__st" title="Done">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Done"}
                          </span>
                        </span>
                      </li>
                      <li className="ac ac--done hk--vc" id="ac-405">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-405">{"405"}</a>
                        <span className="ac__ty">{"PDLX"}</span>
                        <span className="ac__task ac__task--dep">{"DEP"}</span>
                        <span className="ac__cr num" title="Departure · 30 min">{"1.0"}</span>
                        <span className="ac__meta">
                          <span className="ac__st" title="Done">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Done"}
                          </span>
                        </span>
                      </li>
                      <li className="ac ac--done hk--oc" id="ac-407">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-407">{"407"}</a>
                        <span className="ac__ty">{"PDLX"}</span>
                        <span className="ac__task ac__task--sty">{"STY"}</span>
                        <span className="ac__cr num" title="Stayover · 18 min">{"0.6"}</span>
                        <span className="ac__meta">
                          <span className="ac__st" title="Done">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Done"}
                          </span>
                        </span>
                      </li>
                      <li className="ac ac--done hk--oc" id="ac-408">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-408">{"408"}</a>
                        <span className="ac__ty">{"PDLX"}</span>
                        <span className="ac__task ac__task--sty">{"STY"}</span>
                        <span className="ac__cr num" title="Stayover · 18 min">{"0.6"}</span>
                        <span className="ac__meta">
                          <span className="ac__st" title="Done">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Done"}
                          </span>
                          <span className="ac-f ac-f--linen" title="Linen">
                            <svg className="icon" width="11" height="11" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#layers" />
                            </svg>
                            {"Linen"}
                          </span>
                        </span>
                      </li>
                    </ol>
                  </section>
                  <section className="acol" id="col-TS-20261022-08" aria-label="Lissy George">
                    <header className="acol__h">
                      <span className="acol__av">{"LG"}</span>
                      <div className="acol__who">
                        <b>{"Lissy George"}</b>
                        <small>{"S6 · 08 · phone 13"}</small>
                      </div>
                      <a className="acol__ts" href="/housekeeping/hk-06-task-sheet-detail/#TS-20261022-08" title="Open task sheet TS-20261022-08" data-leads-to="HK-06">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#file-text" />
                        </svg>
                        <span className="sr-only">{"TS-20261022-08"}</span>
                      </a>
                    </header>
                    <div className="acol__cr acol__cr--ok">
                      <div className="acol__crn">
                        <b className="num">{"6.9"}</b>
                        {" / 16 credits"}
                        <span>{"8 rooms · 3 done"}</span>
                      </div>
                      <span className="acol__bar" role="img" aria-label="6.9 of 16 credits (43 %)">
                        <i style={{"width": "43%"}} />
                      </span>
                      <small>{"6.4 room credits + 0.5 floor travel (floors 4, 5)"}</small>
                    </div>
                    <ol className="acol__list">
                      <li className="ac ac--progress hk--vd" id="ac-418">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-418">{"418"}</a>
                        <span className="ac__ty">{"PDLX"}</span>
                        <span className="ac__task ac__task--dep">{"DEP"}</span>
                        <span className="ac__cr num" title="Departure · 30 min">{"1.0"}</span>
                        <span className="ac__meta">
                          <span className="ac__st" title="In progress">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#clock" />
                            </svg>
                            {"In progress · 9 min"}
                          </span>
                        </span>
                      </li>
                      <li className="ac ac--todo hk--od" id="ac-410">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-410">{"410"}</a>
                        <span className="ac__ty">{"PDLX"}</span>
                        <span className="ac__task ac__task--sty">{"STY"}</span>
                        <span className="ac__cr num" title="Stayover · 18 min">{"0.6"}</span>
                        <a className="ac__mv" href="#p05-410" title="Move room 410 to another attendant" data-leads-to="HK-P05">
                          <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#arrow-left-right" />
                          </svg>
                          <span className="sr-only">{"Move"}</span>
                        </a>
                        <span className="ac__meta">
                          <span className="ac__st" title="Not started">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#play" />
                            </svg>
                            {"Not started"}
                          </span>
                          <span className="ac-f ac-f--green" title="Green">
                            <svg className="icon" width="11" height="11" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#leaf" />
                            </svg>
                            {"Green"}
                          </span>
                        </span>
                      </li>
                      <li className="ac ac--todo hk--oc" id="ac-415">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-415">{"415"}</a>
                        <span className="ac__ty">{"PDLX"}</span>
                        <span className="ac__task ac__task--dep">{"DEP"}</span>
                        <span className="ac__cr num" title="Departure · 30 min">{"1.0"}</span>
                        <a className="ac__mv" href="#p05-415" title="Move room 415 to another attendant" data-leads-to="HK-P05">
                          <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#arrow-left-right" />
                          </svg>
                          <span className="sr-only">{"Move"}</span>
                        </a>
                        <span className="ac__meta">
                          <span className="ac__st" title="Not started">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#play" />
                            </svg>
                            {"Not started"}
                          </span>
                        </span>
                      </li>
                      <li className="ac ac--todo hk--oc" id="ac-416">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-416">{"416"}</a>
                        <span className="ac__ty">{"PDLX"}</span>
                        <span className="ac__task ac__task--dep">{"DEP"}</span>
                        <span className="ac__cr num" title="Departure · 30 min">{"1.0"}</span>
                        <a className="ac__mv" href="#p05-416" title="Move room 416 to another attendant" data-leads-to="HK-P05">
                          <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#arrow-left-right" />
                          </svg>
                          <span className="sr-only">{"Move"}</span>
                        </a>
                        <span className="ac__meta">
                          <span className="ac__st" title="Not started">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#play" />
                            </svg>
                            {"Not started"}
                          </span>
                        </span>
                      </li>
                      <li className="ac ac--todo hk--oc" id="ac-503">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-503">{"503"}</a>
                        <span className="ac__ty">{"PDLX"}</span>
                        <span className="ac__task ac__task--dep">{"DEP"}</span>
                        <span className="ac__cr num" title="Departure · 30 min">{"1.0"}</span>
                        <a className="ac__mv" href="#p05-503" title="Move room 503 to another attendant" data-leads-to="HK-P05">
                          <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#arrow-left-right" />
                          </svg>
                          <span className="sr-only">{"Move"}</span>
                        </a>
                        <span className="ac__meta">
                          <span className="ac__st" title="Not started">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#play" />
                            </svg>
                            {"Not started"}
                          </span>
                        </span>
                      </li>
                      <li className="ac ac--done hk--oc" id="ac-409">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-409">{"409"}</a>
                        <span className="ac__ty">{"PDLX"}</span>
                        <span className="ac__task ac__task--sty">{"STY"}</span>
                        <span className="ac__cr num" title="Stayover · 18 min">{"0.6"}</span>
                        <span className="ac__meta">
                          <span className="ac__st" title="Done">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Done"}
                          </span>
                          <span className="ac-f ac-f--linen" title="Linen">
                            <svg className="icon" width="11" height="11" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#layers" />
                            </svg>
                            {"Linen"}
                          </span>
                        </span>
                      </li>
                      <li className="ac ac--done hk--oc" id="ac-417">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-417">{"417"}</a>
                        <span className="ac__ty">{"PDLX"}</span>
                        <span className="ac__task ac__task--sty">{"STY"}</span>
                        <span className="ac__cr num" title="Stayover · 18 min">{"0.6"}</span>
                        <span className="ac__meta">
                          <span className="ac__st" title="Done">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Done"}
                          </span>
                        </span>
                      </li>
                      <li className="ac ac--done hk--oc" id="ac-501">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-501">{"501"}</a>
                        <span className="ac__ty">{"PDLX"}</span>
                        <span className="ac__task ac__task--sty">{"STY"}</span>
                        <span className="ac__cr num" title="Stayover · 18 min">{"0.6"}</span>
                        <span className="ac__meta">
                          <span className="ac__st" title="Done">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Done"}
                          </span>
                        </span>
                      </li>
                    </ol>
                  </section>
                  <section className="acol" id="col-TS-20261022-09" aria-label="Saritha K">
                    <header className="acol__h">
                      <span className="acol__av">{"SK"}</span>
                      <div className="acol__who">
                        <b>{"Saritha K"}</b>
                        <small>{"S7 · Senior · 09 · phone 07"}</small>
                      </div>
                      <a className="acol__ts" href="/housekeeping/hk-06-task-sheet-detail/#TS-20261022-09" title="Open task sheet TS-20261022-09" data-leads-to="HK-06">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#file-text" />
                        </svg>
                        <span className="sr-only">{"TS-20261022-09"}</span>
                      </a>
                    </header>
                    <div className="acol__cr acol__cr--ok">
                      <div className="acol__crn">
                        <b className="num">{"7.4"}</b>
                        {" / 16 credits"}
                        <span>{"10 rooms · 6 done"}</span>
                      </div>
                      <span className="acol__bar" role="img" aria-label="7.4 of 16 credits (46 %)">
                        <i style={{"width": "46%"}} />
                      </span>
                      <small>{"7.4 room credits · floor 5 only"}</small>
                    </div>
                    <ol className="acol__list">
                      <li className="ac ac--todo hk--vd" id="ac-512">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-512">{"512"}</a>
                        <span className="ac__ty">{"PDLX"}</span>
                        <span className="ac__task ac__task--dep">{"DEP"}</span>
                        <span className="ac__cr num" title="Departure · 30 min">{"1.0"}</span>
                        <a className="ac__mv" href="#p05-512" title="Move room 512 to another attendant" data-leads-to="HK-P05">
                          <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#arrow-left-right" />
                          </svg>
                          <span className="sr-only">{"Move"}</span>
                        </a>
                        <span className="ac__meta">
                          <span className="ac__st" title="Not started">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#play" />
                            </svg>
                            {"Not started"}
                          </span>
                          <span className="ac-f ac-f--vip" title="VIP 2">
                            <svg className="icon" width="11" height="11" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#star" />
                            </svg>
                            {"VIP 2"}
                          </span>
                          <span className="ac-f ac-f--arr" title="Arrival 17:30">
                            <svg className="icon" width="11" height="11" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#log-in" />
                            </svg>
                            {"Arrival 17:30"}
                          </span>
                        </span>
                      </li>
                      <li className="ac ac--todo hk--oc" id="ac-505">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-505">{"505"}</a>
                        <span className="ac__ty">{"PDLX"}</span>
                        <span className="ac__task ac__task--dep">{"DEP"}</span>
                        <span className="ac__cr num" title="Departure · 30 min">{"1.0"}</span>
                        <a className="ac__mv" href="#p05-505" title="Move room 505 to another attendant" data-leads-to="HK-P05">
                          <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#arrow-left-right" />
                          </svg>
                          <span className="sr-only">{"Move"}</span>
                        </a>
                        <span className="ac__meta">
                          <span className="ac__st" title="Not started">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#play" />
                            </svg>
                            {"Not started"}
                          </span>
                        </span>
                      </li>
                      <li className="ac ac--todo hk--od" id="ac-510">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-510">{"510"}</a>
                        <span className="ac__ty">{"PDLX"}</span>
                        <span className="ac__task ac__task--sty">{"STY"}</span>
                        <span className="ac__cr num" title="Stayover · 18 min">{"0.6"}</span>
                        <a className="ac__mv" href="#p05-510" title="Move room 510 to another attendant" data-leads-to="HK-P05">
                          <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#arrow-left-right" />
                          </svg>
                          <span className="sr-only">{"Move"}</span>
                        </a>
                        <span className="ac__meta">
                          <span className="ac__st" title="Not started">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#play" />
                            </svg>
                            {"Not started"}
                          </span>
                        </span>
                      </li>
                      <li className="ac ac--paused hk--oc" id="ac-504">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-504">{"504"}</a>
                        <span className="ac__ty">{"PDLX"}</span>
                        <span className="ac__task ac__task--sty">{"STY"}</span>
                        <span className="ac__cr num" title="Stayover · 18 min">{"0.6"}</span>
                        <a className="ac__mv" href="#p05-504" title="Move room 504 to another attendant" data-leads-to="HK-P05">
                          <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#arrow-left-right" />
                          </svg>
                          <span className="sr-only">{"Move"}</span>
                        </a>
                        <span className="ac__meta">
                          <span className="ac__st" title="Paused – DND">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#pause" />
                            </svg>
                            {"Paused – DND"}
                          </span>
                          <span className="ac-f ac-f--vip" title="VIP 1">
                            <svg className="icon" width="11" height="11" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#star" />
                            </svg>
                            {"VIP 1"}
                          </span>
                          <span className="ac-f ac-f--dnd" title="DND">
                            <svg className="icon" width="11" height="11" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#shield-alert" />
                            </svg>
                            {"DND"}
                          </span>
                          <span className="ac-f ac-f--linen" title="Linen">
                            <svg className="icon" width="11" height="11" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#layers" />
                            </svg>
                            {"Linen"}
                          </span>
                        </span>
                      </li>
                      <li className="ac ac--done hk--oc" id="ac-506">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-506">{"506"}</a>
                        <span className="ac__ty">{"PDLX"}</span>
                        <span className="ac__task ac__task--sty">{"STY"}</span>
                        <span className="ac__cr num" title="Stayover · 18 min">{"0.6"}</span>
                        <span className="ac__meta">
                          <span className="ac__st" title="Done">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Done"}
                          </span>
                          <span className="ac-f ac-f--linen" title="Linen">
                            <svg className="icon" width="11" height="11" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#layers" />
                            </svg>
                            {"Linen"}
                          </span>
                        </span>
                      </li>
                      <li className="ac ac--done hk--oc" id="ac-507">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-507">{"507"}</a>
                        <span className="ac__ty">{"PDLX"}</span>
                        <span className="ac__task ac__task--sty">{"STY"}</span>
                        <span className="ac__cr num" title="Stayover · 18 min">{"0.6"}</span>
                        <span className="ac__meta">
                          <span className="ac__st" title="Done">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Done"}
                          </span>
                        </span>
                      </li>
                      <li className="ac ac--done hk--oc" id="ac-508">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-508">{"508"}</a>
                        <span className="ac__ty">{"PDLX"}</span>
                        <span className="ac__task ac__task--sty">{"STY"}</span>
                        <span className="ac__cr num" title="Stayover · 18 min">{"0.6"}</span>
                        <span className="ac__meta">
                          <span className="ac__st" title="Done">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Done"}
                          </span>
                        </span>
                      </li>
                      <li className="ac ac--done hk--oc" id="ac-509">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-509">{"509"}</a>
                        <span className="ac__ty">{"PDLX"}</span>
                        <span className="ac__task ac__task--sty">{"STY"}</span>
                        <span className="ac__cr num" title="Stayover · 18 min">{"0.6"}</span>
                        <span className="ac__meta">
                          <span className="ac__st" title="Done">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Done"}
                          </span>
                        </span>
                      </li>
                      <li className="ac ac--done hk--oc" id="ac-511">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-511">{"511"}</a>
                        <span className="ac__ty">{"PDLX"}</span>
                        <span className="ac__task ac__task--sty">{"STY"}</span>
                        <span className="ac__cr num" title="Stayover · 18 min">{"0.6"}</span>
                        <span className="ac__meta">
                          <span className="ac__st" title="Done">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Done"}
                          </span>
                        </span>
                      </li>
                      <li className="ac ac--done hk--oc" id="ac-514">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-514">{"514"}</a>
                        <span className="ac__ty">{"DLXS"}</span>
                        <span className="ac__task ac__task--sty">{"STY"}</span>
                        <span className="ac__cr num" title="Stayover · 36 min">{"1.2"}</span>
                        <span className="ac__meta">
                          <span className="ac__st" title="Done">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Done"}
                          </span>
                        </span>
                      </li>
                    </ol>
                  </section>
                  <section className="acol" id="col-TS-20261022-10" aria-label="Rani V">
                    <header className="acol__h">
                      <span className="acol__av">{"RV"}</span>
                      <div className="acol__who">
                        <b>{"Rani V"}</b>
                        <small>{"S6 · Trainee · 10 · –"}</small>
                      </div>
                      <a className="acol__ts" href="/housekeeping/hk-06-task-sheet-detail/#TS-20261022-10" title="Open task sheet TS-20261022-10" data-leads-to="HK-06">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#file-text" />
                        </svg>
                        <span className="sr-only">{"TS-20261022-10"}</span>
                      </a>
                    </header>
                    <div className="acol__cr acol__cr--ok">
                      <div className="acol__crn">
                        <b className="num">{"1.0"}</b>
                        {" / 10 credits"}
                        <span>{"1 rooms · 0 done"}</span>
                      </div>
                      <span className="acol__bar" role="img" aria-label="1.0 of 10 credits (10 %)">
                        <i style={{"width": "10%"}} />
                      </span>
                      <small>{"1.0 room credits · floor 5 only"}</small>
                    </div>
                    <ol className="acol__list">
                      <li className="ac ac--progress hk--vd" id="ac-502">
                        <span className="ac__grip" aria-hidden="true">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#grip" />
                          </svg>
                        </span>
                        <a className="ac__no" href="/housekeeping/hk-03-room-detail/#room-502">{"502"}</a>
                        <span className="ac__ty">{"PDLX"}</span>
                        <span className="ac__task ac__task--dep">{"DEP"}</span>
                        <span className="ac__cr num" title="Departure · 30 min">{"1.0"}</span>
                        <span className="ac__meta">
                          <span className="ac__st" title="In progress">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#clock" />
                            </svg>
                            {"In progress · 18 min"}
                          </span>
                        </span>
                      </li>
                    </ol>
                  </section>
                </div>
                <aside className="ap-sum" aria-labelledby="ap-sum-t">
                  <h2 className="ap-h" id="ap-sum-t">{"Summary"}</h2>
                  <dl className="ap-tot">
                    <div>
                      <dt>{"Rooms"}</dt>
                      <dd className="num">{"74"}</dd>
                    </div>
                    <div>
                      <dt>{"Credits"}</dt>
                      <dd className="num">{"56.8"}</dd>
                    </div>
                    <div>
                      <dt>{"Attendants"}</dt>
                      <dd className="num">{"10"}</dd>
                    </div>
                    <div>
                      <dt>{"Average"}</dt>
                      <dd className="num">{"5.7"}</dd>
                    </div>
                    <div>
                      <dt>{"Not assigned"}</dt>
                      <dd className="num ap-warn">{"3"}</dd>
                    </div>
                    <div>
                      <dt>{"Above maximum"}</dt>
                      <dd className="num">{"0"}</dd>
                    </div>
                  </dl>
                  <h2 className="ap-h">{"Settings used"}</h2>
                  <ul className="ap-used">
                    <li>
                      {"Method "}
                      <b>{"Mixed"}</b>
                      {" (HKS-10)"}
                    </li>
                    <li>{"Departures with arrivals first"}</li>
                    <li>{"VIP rooms to senior attendants"}</li>
                    <li>{"Max 2 floors per sheet"}</li>
                    <li>{"Credits GDLX / PDLX 1.0 dep · 0.6 stay · DLXS 2.0 / 1.2 (HKS-05)"}</li>
                    <li>{"PRMS credits not set – 517 shows “–”"}</li>
                  </ul>
                  <div className="ap-leg">
                    <span>
                      <i className="ap-leg__ok" />
                      {"up to 90 %"}
                    </span>
                    <span>
                      <i className="ap-leg__amber" />
                      {"above 90 %"}
                    </span>
                    <span>
                      <i className="ap-leg__red" />
                      {"above 100 %"}
                    </span>
                  </div>
                  <Link className="fd-link" data-leads-to="HKS-10" to={"/housekeeping-setup/hks-10-allocation-rules"}>{"Open allocation rules (HKS-10) →"}</Link>
                </aside>
              </div>
              <div className="modal modal--lg" id="hk-p04" data-code="HK-P04" role="dialog" aria-modal="true" aria-labelledby="hk-p04-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping/hk-04-room-allocation/#allocated" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="hk-p04-t">{"Auto-allocate rules"}</h2>
                      <p className="modal__desc">{"Adjust the rules the automatic allocation uses today. Apply re-runs the allocation engine (HK-X03) and shows the result for review."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="p04-keep">
                          <input id="p04-keep" type="checkbox" role="switch" name="keep_sections" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Keep sections"}
                        </label>
                        <span className="field__hint">{"Attendants stay in their home sections (HKS-03)."}</span>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="p04-bal">
                          <input id="p04-bal" type="checkbox" role="switch" name="balance" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Balance credits"}
                        </label>
                        <span className="field__hint">{"Even out credits across attendants."}</span>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="p04-dep">
                          <input id="p04-dep" type="checkbox" role="switch" name="departures_first" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Departures first"}
                        </label>
                        <span className="field__hint">{"Departure rooms with arrivals today are put first in each list."}</span>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="p04-vip">
                          <input id="p04-vip" type="checkbox" role="switch" name="vip_senior" defaultChecked={true} />
                          <span className="sw__track" />
                          {"VIP rooms to senior attendants"}
                        </label>
                        <span className="field__hint">{"Uses the skill level from Staff & Shifts (HKS-04): Saritha K, Mariamma Varghese."}</span>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="p04-lang">
                          <input id="p04-lang" type="checkbox" role="switch" name="language" />
                          <span className="sw__track" />
                          {"Language match"}
                        </label>
                        <span className="field__hint">{"Match the guest’s language to the attendant’s language when recorded."}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="p04-floors">{"Maximum floors per attendant"}</label>
                        <input className="field__input" id="p04-floors" name="max_floors" type="number" min="1" max="5" step="1" inputMode="numeric" defaultValue={"2"} />
                        <span className="field__hint">{"1 to 5 · default 2 (HKS-10)"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="check">
                          <input className="check__input" type="checkbox" name="default" value="1" />
                          <span className="check__box" />
                          {"Apply as default – save these rules to Allocation Rules (HKS-10)"}
                        </label>
                        <span className="field__hint">{"Needs the settings permission (Sunita Ranjan, Meera Prem). Otherwise the rules apply to today only."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer fd-muted">{"Today only unless “Apply as default” is ticked."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Apply"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="hk-p05" data-code="HK-P05" role="dialog" aria-modal="true" aria-labelledby="hk-p05-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping/hk-04-room-allocation/#moved" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="hk-p05-t">{"Move rooms between attendants"}</h2>
                      <p className="modal__desc">{"Move rooms that are not started yet from one attendant to another in one step. Both columns and credits are recalculated."}</p>
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
                        <i className="pm" id="p05-110" />
                        <i className="pm" id="p05-205" />
                        <i className="pm" id="p05-207" />
                        <i className="pm" id="p05-208" />
                        <i className="pm" id="p05-216" />
                        <i className="pm" id="p05-305" />
                        <i className="pm" id="p05-310" />
                        <i className="pm" id="p05-316" />
                        <i className="pm" id="p05-319" />
                        <i className="pm" id="p05-402" />
                        <i className="pm" id="p05-404" />
                        <i className="pm" id="p05-406" />
                        <i className="pm" id="p05-410" />
                        <i className="pm" id="p05-415" />
                        <i className="pm" id="p05-416" />
                        <i className="pm" id="p05-503" />
                        <i className="pm" id="p05-504" />
                        <i className="pm" id="p05-505" />
                        <i className="pm" id="p05-510" />
                        <i className="pm" id="p05-512" />
                        <i className="pm" id="p05-515" />
                        <i className="pm" id="p05-516" />
                        <i className="pm" id="p05-517" />
                      </div>
                      <div className="field field--wide">
                        <span className="field__label">{"From attendant · room"}</span>
                        <div className="pr pr--def">
                          <span className="pr__no hk--oc">{"4"}</span>
                          <span className="pr__t">
                            <b>{"4 rooms of Rekha S not yet started"}</b>
                            <small>{"316 DEP, 319 DEP, 404 DEP, 406 DEP · 4.0 credits"}</small>
                          </span>
                        </div>
                        <div className="pr pr--110">
                          <span className="pr__no hk--od">{"110"}</span>
                          <span className="pr__t">
                            <b>{"Room 110 · GDLX · Stayover · 0.6 credits"}</b>
                            <small>{"From Remya K · Not started"}</small>
                          </span>
                        </div>
                        <div className="pr pr--205">
                          <span className="pr__no hk--oc">{"205"}</span>
                          <span className="pr__t">
                            <b>{"Room 205 · GDLX · Departure · 1.0 credits"}</b>
                            <small>{"From Divya M · Not started"}</small>
                          </span>
                        </div>
                        <div className="pr pr--207">
                          <span className="pr__no hk--oc">{"207"}</span>
                          <span className="pr__t">
                            <b>{"Room 207 · GDLX · Departure · 1.0 credits"}</b>
                            <small>{"From Divya M · Not started"}</small>
                          </span>
                        </div>
                        <div className="pr pr--208">
                          <span className="pr__no hk--oc">{"208"}</span>
                          <span className="pr__t">
                            <b>{"Room 208 · GDLX · Stayover · 0.6 credits"}</b>
                            <small>{"From Mariamma Varghese · Paused – DND"}</small>
                          </span>
                        </div>
                        <div className="pr pr--216">
                          <span className="pr__no hk--oc">{"216"}</span>
                          <span className="pr__t">
                            <b>{"Room 216 · GDLX · Departure · 1.0 credits"}</b>
                            <small>{"From Mariamma Varghese · Not started"}</small>
                          </span>
                        </div>
                        <div className="pr pr--305">
                          <span className="pr__no hk--oc">{"305"}</span>
                          <span className="pr__t">
                            <b>{"Room 305 · GDLX · Departure · 1.0 credits"}</b>
                            <small>{"From Shiny Joseph · Not started"}</small>
                          </span>
                        </div>
                        <div className="pr pr--310">
                          <span className="pr__no hk--od">{"310"}</span>
                          <span className="pr__t">
                            <b>{"Room 310 · GDLX · Stayover · 0.6 credits"}</b>
                            <small>{"From Shiny Joseph · Not started"}</small>
                          </span>
                        </div>
                        <div className="pr pr--316">
                          <span className="pr__no hk--oc">{"316"}</span>
                          <span className="pr__t">
                            <b>{"Room 316 · PDLX · Departure · 1.0 credits"}</b>
                            <small>{"From Rekha S · Not started"}</small>
                          </span>
                        </div>
                        <div className="pr pr--319">
                          <span className="pr__no hk--oc">{"319"}</span>
                          <span className="pr__t">
                            <b>{"Room 319 · PDLX · Departure · 1.0 credits"}</b>
                            <small>{"From Rekha S · Not started"}</small>
                          </span>
                        </div>
                        <div className="pr pr--402">
                          <span className="pr__no hk--oc">{"402"}</span>
                          <span className="pr__t">
                            <b>{"Room 402 · PDLX · Stayover · 0.6 credits"}</b>
                            <small>{"From Rekha S · Paused – DND"}</small>
                          </span>
                        </div>
                        <div className="pr pr--404">
                          <span className="pr__no hk--oc">{"404"}</span>
                          <span className="pr__t">
                            <b>{"Room 404 · PDLX · Departure · 1.0 credits"}</b>
                            <small>{"From Rekha S · Not started"}</small>
                          </span>
                        </div>
                        <div className="pr pr--406">
                          <span className="pr__no hk--oc">{"406"}</span>
                          <span className="pr__t">
                            <b>{"Room 406 · PDLX · Departure · 1.0 credits"}</b>
                            <small>{"From Rekha S · Not started"}</small>
                          </span>
                        </div>
                        <div className="pr pr--410">
                          <span className="pr__no hk--od">{"410"}</span>
                          <span className="pr__t">
                            <b>{"Room 410 · PDLX · Stayover · 0.6 credits"}</b>
                            <small>{"From Lissy George · Not started"}</small>
                          </span>
                        </div>
                        <div className="pr pr--415">
                          <span className="pr__no hk--oc">{"415"}</span>
                          <span className="pr__t">
                            <b>{"Room 415 · PDLX · Departure · 1.0 credits"}</b>
                            <small>{"From Lissy George · Not started"}</small>
                          </span>
                        </div>
                        <div className="pr pr--416">
                          <span className="pr__no hk--oc">{"416"}</span>
                          <span className="pr__t">
                            <b>{"Room 416 · PDLX · Departure · 1.0 credits"}</b>
                            <small>{"From Lissy George · Not started"}</small>
                          </span>
                        </div>
                        <div className="pr pr--503">
                          <span className="pr__no hk--oc">{"503"}</span>
                          <span className="pr__t">
                            <b>{"Room 503 · PDLX · Departure · 1.0 credits"}</b>
                            <small>{"From Lissy George · Not started"}</small>
                          </span>
                        </div>
                        <div className="pr pr--504">
                          <span className="pr__no hk--oc">{"504"}</span>
                          <span className="pr__t">
                            <b>{"Room 504 · PDLX · Stayover · 0.6 credits"}</b>
                            <small>{"From Saritha K · Paused – DND"}</small>
                          </span>
                        </div>
                        <div className="pr pr--505">
                          <span className="pr__no hk--oc">{"505"}</span>
                          <span className="pr__t">
                            <b>{"Room 505 · PDLX · Departure · 1.0 credits"}</b>
                            <small>{"From Saritha K · Not started"}</small>
                          </span>
                        </div>
                        <div className="pr pr--510">
                          <span className="pr__no hk--od">{"510"}</span>
                          <span className="pr__t">
                            <b>{"Room 510 · PDLX · Stayover · 0.6 credits"}</b>
                            <small>{"From Saritha K · Not started"}</small>
                          </span>
                        </div>
                        <div className="pr pr--512">
                          <span className="pr__no hk--vd">{"512"}</span>
                          <span className="pr__t">
                            <b>{"Room 512 · PDLX · Departure · 1.0 credits"}</b>
                            <small>{"From Saritha K · Not started"}</small>
                          </span>
                        </div>
                        <div className="pr pr--515">
                          <span className="pr__no hk--oc">{"515"}</span>
                          <span className="pr__t">
                            <b>{"Room 515 · DLXS · Stayover · 1.2 credits"}</b>
                            <small>{"From Unassigned (no section) · Not started"}</small>
                          </span>
                        </div>
                        <div className="pr pr--516">
                          <span className="pr__no hk--oc">{"516"}</span>
                          <span className="pr__t">
                            <b>{"Room 516 · DLXS · Stayover · 1.2 credits"}</b>
                            <small>{"From Unassigned (no section) · Not started"}</small>
                          </span>
                        </div>
                        <div className="pr pr--517">
                          <span className="pr__no hk--oc">{"517"}</span>
                          <span className="pr__t">
                            <b>{"Room 517 · PRMS · Departure · credits not set"}</b>
                            <small>{"From Unassigned (no section) · Not started"}</small>
                          </span>
                        </div>
                      </div>
                      <div className="field field--wide p5-also">
                        <div className="p5a p5a--1">
                          <span className="field__label">{"Also move other rooms of Remya K not yet started"}</span>
                          <div className="row fd-multi">
                            <label className="check p5c--110">
                              <input className="check__input" type="checkbox" name="rooms" value="110" />
                              <span className="check__box" />
                              {"110 · STY · 0.6 cr"}
                            </label>
                          </div>
                        </div>
                        <div className="p5a p5a--2">
                          <span className="field__label">{"Also move other rooms of Divya M not yet started"}</span>
                          <div className="row fd-multi">
                            <label className="check p5c--205">
                              <input className="check__input" type="checkbox" name="rooms" value="205" />
                              <span className="check__box" />
                              {"205 · DEP · 1.0 cr"}
                            </label>
                            <label className="check p5c--207">
                              <input className="check__input" type="checkbox" name="rooms" value="207" />
                              <span className="check__box" />
                              {"207 · DEP · 1.0 cr"}
                            </label>
                          </div>
                        </div>
                        <div className="p5a p5a--3">
                          <span className="field__label">{"Also move other rooms of Mariamma Varghese not yet started"}</span>
                          <div className="row fd-multi">
                            <label className="check p5c--208">
                              <input className="check__input" type="checkbox" name="rooms" value="208" />
                              <span className="check__box" />
                              {"208 · STY · 0.6 cr"}
                            </label>
                            <label className="check p5c--216">
                              <input className="check__input" type="checkbox" name="rooms" value="216" />
                              <span className="check__box" />
                              {"216 · DEP · 1.0 cr"}
                            </label>
                          </div>
                        </div>
                        <div className="p5a p5a--4">
                          <span className="field__label">{"Also move other rooms of Shiny Joseph not yet started"}</span>
                          <div className="row fd-multi">
                            <label className="check p5c--305">
                              <input className="check__input" type="checkbox" name="rooms" value="305" />
                              <span className="check__box" />
                              {"305 · DEP · 1.0 cr"}
                            </label>
                            <label className="check p5c--310">
                              <input className="check__input" type="checkbox" name="rooms" value="310" />
                              <span className="check__box" />
                              {"310 · STY · 0.6 cr"}
                            </label>
                          </div>
                        </div>
                        <div className="p5a p5a--6">
                          <span className="field__label">{"Also move other rooms of Rekha S not yet started"}</span>
                          <div className="row fd-multi">
                            <label className="check p5c--316">
                              <input className="check__input" type="checkbox" name="rooms" value="316" />
                              <span className="check__box" />
                              {"316 · DEP · 1.0 cr"}
                            </label>
                            <label className="check p5c--319">
                              <input className="check__input" type="checkbox" name="rooms" value="319" />
                              <span className="check__box" />
                              {"319 · DEP · 1.0 cr"}
                            </label>
                            <label className="check p5c--402">
                              <input className="check__input" type="checkbox" name="rooms" value="402" />
                              <span className="check__box" />
                              {"402 · STY · 0.6 cr"}
                            </label>
                            <label className="check p5c--404">
                              <input className="check__input" type="checkbox" name="rooms" value="404" />
                              <span className="check__box" />
                              {"404 · DEP · 1.0 cr"}
                            </label>
                            <label className="check p5c--406">
                              <input className="check__input" type="checkbox" name="rooms" value="406" />
                              <span className="check__box" />
                              {"406 · DEP · 1.0 cr"}
                            </label>
                          </div>
                        </div>
                        <div className="p5a p5a--7">
                          <span className="field__label">{"Also move other rooms of Lissy George not yet started"}</span>
                          <div className="row fd-multi">
                            <label className="check p5c--410">
                              <input className="check__input" type="checkbox" name="rooms" value="410" />
                              <span className="check__box" />
                              {"410 · STY · 0.6 cr"}
                            </label>
                            <label className="check p5c--415">
                              <input className="check__input" type="checkbox" name="rooms" value="415" />
                              <span className="check__box" />
                              {"415 · DEP · 1.0 cr"}
                            </label>
                            <label className="check p5c--416">
                              <input className="check__input" type="checkbox" name="rooms" value="416" />
                              <span className="check__box" />
                              {"416 · DEP · 1.0 cr"}
                            </label>
                            <label className="check p5c--503">
                              <input className="check__input" type="checkbox" name="rooms" value="503" />
                              <span className="check__box" />
                              {"503 · DEP · 1.0 cr"}
                            </label>
                          </div>
                        </div>
                        <div className="p5a p5a--8">
                          <span className="field__label">{"Also move other rooms of Saritha K not yet started"}</span>
                          <div className="row fd-multi">
                            <label className="check p5c--504">
                              <input className="check__input" type="checkbox" name="rooms" value="504" />
                              <span className="check__box" />
                              {"504 · STY · 0.6 cr"}
                            </label>
                            <label className="check p5c--505">
                              <input className="check__input" type="checkbox" name="rooms" value="505" />
                              <span className="check__box" />
                              {"505 · DEP · 1.0 cr"}
                            </label>
                            <label className="check p5c--510">
                              <input className="check__input" type="checkbox" name="rooms" value="510" />
                              <span className="check__box" />
                              {"510 · STY · 0.6 cr"}
                            </label>
                            <label className="check p5c--512">
                              <input className="check__input" type="checkbox" name="rooms" value="512" />
                              <span className="check__box" />
                              {"512 · DEP · 1.0 cr"}
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="p05-to">
                          {"To attendant "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="p05-to" name="to" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose an attendant"}</option>
                            <option value="Anitha P">{"Anitha P · S1 · now 4.0 of 16 credits · 1 rooms left"}</option>
                            <option value="Remya K">{"Remya K · S1 · now 3.0 of 16 credits · 1 rooms left"}</option>
                            <option value="Divya M">{"Divya M · S2 · now 7.1 of 16 credits · 3 rooms left"}</option>
                            <option value="Mariamma Varghese">{"Mariamma Varghese · S3 · now 9.3 of 16 credits · 2 rooms left"}</option>
                            <option value="Shiny Joseph">{"Shiny Joseph · S4 · now 3.2 of 16 credits · 3 rooms left"}</option>
                            <option value="Jincy Mathew">{"Jincy Mathew · S4 · now 2.4 of 16 credits · 0 rooms left"}</option>
                            <option value="Rekha S">{"Rekha S · S5 · now 10.1 of 16 credits · 4 rooms left"}</option>
                            <option value="Lissy George">{"Lissy George · S6 · now 6.9 of 16 credits · 5 rooms left"}</option>
                            <option value="Saritha K">{"Saritha K · S7 · now 7.4 of 16 credits · 3 rooms left"}</option>
                            <option value="Rani V">{"Rani V · S6 · now 1.0 of 10 credits · 1 rooms left"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Credits shown are before the move. Above 90 % of the maximum the column turns amber, above 100 % red (BR-16)."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer fd-muted">{"Rooms already in progress or done cannot be moved."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Move"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="hk-p06" data-code="HK-P06" role="dialog" aria-modal="true" aria-labelledby="hk-p06-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping/hk-05-task-sheets/#published" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="hk-p06-t">{"Publish task sheets"}</h2>
                      <p className="modal__desc">{"Confirm the plan before it goes to the attendants. Published sheets appear in Task Sheets (HK-05) and on the attendants’ phones."}</p>
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
                        <span className="field__label">{"Summary"}</span>
                        <ul className="p6-sum">
                          <li>
                            <b className="num">{"10"}</b>
                            {"attendants"}
                          </li>
                          <li>
                            <b className="num">{"71"}</b>
                            {"rooms on sheets"}
                          </li>
                          <li>
                            <b className="num">{"56.8"}</b>
                            {"credits incl. 2.0 travel"}
                          </li>
                          <li>
                            <b className="num">{"5.7"}</b>
                            {"average per attendant"}
                          </li>
                        </ul>
                      </div>
                      <div className="hks-note p6-warn field--wide">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#alert" />
                        </svg>
                        <span>
                          <strong>{"3 rooms are not on any sheet:"}</strong>
                          {" 515 (DLXS, STY), 516 (DLXS, STY), 517 (PRMS, DEP) – they are in no section (HKS-03). Move them to a senior attendant first, or publish and assign later. No attendant is above the maximum."}
                        </span>
                      </div>
                      <div className="field field--wide">
                        <label className="check">
                          <input className="check__input" type="checkbox" name="mobile" value="1" defaultChecked={true} />
                          <span className="check__box" />
                          {"Send to mobile – publish to each attendant’s phone app (HM)"}
                        </label>
                      </div>
                      <div className="field field--wide">
                        <label className="check">
                          <input className="check__input" type="checkbox" name="print" value="1" />
                          <span className="check__box" />
                          {"Print – print the task sheet (HK-O01) for each attendant"}
                        </label>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="p06-msg">{"Message to all"}</label>
                        <textarea className="field__input" id="p06-msg" name="message" rows="3" maxLength="250" defaultValue={"Fire drill at 11:00 – all attendants gather at the lobby."} />
                        <span className="field__hint">{"Shown at the top of every task sheet"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer fd-muted">{"Attendants are notified on the phone app."}</span>
                    <a className="btn" href="#main">{"Back"}</a>
                    <button className="btn btn--primary" type="submit">{"Publish 10 sheets"}</button>
                  </div>
                </form>
              </div>
              <div className="fd-toast" id="allocated" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#refresh" />
                </svg>
                <div className="fd-toast__text">
                  {"Allocation re-run with today’s rules"}
                  <small>{"Allocation engine (HK-X03): 71 rooms on 10 sheets · average 5.7 credits · no attendant above the maximum · 3 rooms in no section left unassigned. Review, then publish."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="moved" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#arrow-left-right" />
                </svg>
                <div className="fd-toast__text">
                  {"Rooms moved"}
                  <small>{"Both columns updated and credits recalculated. The change is in the draft until you publish – attendants already working are told on the phone app."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="absent" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#user-x" />
                </svg>
                <div className="fd-toast__text">
                  {"Marked absent – rooms back in Unassigned"}
                  <small>{"Her rooms not yet started are in the Unassigned column. Run Auto-allocate or move them with the arrows, then publish again. Roster updated (HK-07)."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="dcl-planned" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#calendar" />
                </svg>
                <div className="fd-toast__text">
                  {"Deep-clean jobs planned"}
                  <small>{"Mattress turning 117 and bed base 310 are planned for Sun 25 Oct with Manoj T – they appear on that day’s allocation as Deep clean (DCL) tasks."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="dcl-added" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#plus-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Deep-clean jobs added to today"}
                  <small>{"Planned jobs for today are on the board as Deep clean (DCL) tasks in the Unassigned column – move them to an attendant, then publish."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="draft" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Plan saved as draft"}
                  <small>{"Saved 09:44 by Anita Mohan · not sent to attendants yet. Publish to update the task sheets (HK-05) and the phones."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <details className="hk-sys" data-code="HK-X03">
                <summary>
                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#cog" />
                  </svg>
                  {"System – what runs automatically on this screen"}
                </summary>
                <ul>
                  <li data-code="HK-X03">
                    <b>{"HK-X03 · Credit calculator & allocation engine"}</b>
                    {" – Auto-allocate decides each room’s task type, credits and order from HKS-05 / HKS-10 and balances the attendants; the result is shown here for review before publishing."}
                  </li>
                </ul>
              </details>
            </main>
          </div>
        </div>
      </div>
    </ScreenShell>
  );
}
