// GENERATED from public/housekeeping/hk-09-room-inspection/index.html by scripts/convert_legacy.py.
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
    "href": "/housekeeping/hk-09-room-inspection/hk-09-room-inspection.css",
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

export default function HousekeepingHk09RoomInspection() {
  return (
    <ScreenShell title="Room Inspection" sheets={SHEETS} inlineCss={INLINE_CSS}>
      <div data-screen="HK-09" data-code="HK-09" data-static="1" className="legacy-body">
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
            <main className="app__content" id="main" data-code="HK-09" tabIndex="-1">
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
                        <Link to={"/housekeeping/hk-08-inspection-queue"}>{"Inspection Queue"}</Link>
                      </li>
                      <li>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-right" />
                        </svg>
                        <span aria-current="page">{"Room Inspection"}</span>
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="page-header__row">
                  <div className="page-header__text">
                    <h1 className="page-header__title">{"Room Inspection"}</h1>
                  </div>
                  <span className="code-chip" title="Screen code">{"HK-09"}</span>
                  <div className="page-header__actions">
                    <Link className="btn" data-leads-to="HK-08" to={"/housekeeping/hk-08-inspection-queue"}>
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#arrow-left" />
                      </svg>
                      {"Inspection queue"}
                    </Link>
                  </div>
                </div>
              </header>
              <div className="riw" data-code="HK-09-form">
                <nav className="ri-pick" aria-label="Rooms waiting">
                  <a href="#room-210" className="ri-pick__a hk--vc">
                    {"210"}
                    <small>{"92 min"}</small>
                  </a>
                  <a href="#room-215" className="ri-pick__a hk--vc">
                    {"215"}
                    <small>{"47 min"}</small>
                  </a>
                  <a href="#room-315" className="ri-pick__a hk--vc">
                    {"315"}
                    <small>{"22 min"}</small>
                  </a>
                  <a href="#room-405" className="ri-pick__a hk--vc">
                    {"405"}
                    <small>{"12 min"}</small>
                  </a>
                  <a href="#room-302" className="ri-pick__a hk--vi">
                    {"302"}
                    <small>{"VIP check"}</small>
                  </a>
                  <a href="#room-308" className="ri-pick__a hk--vd">
                    {"308"}
                    <small>{"being cleaned"}</small>
                  </a>
                </nav>
                <article className="ri" id="room-210" aria-label="Room 210">
                  <form className="ri-form" action="/housekeeping/hk-08-inspection-queue/#released-210" method="get">
                    <section className="ri-head">
                      <span className="ri-no hk--vc">
                        {"210"}
                        <small>{"GDLX"}</small>
                      </span>
                      <div>
                        <span className="iq-kick">{"Departure clean · finished 08:10 · waiting 92 min"}</span>
                        <h2 className="ri-t">{"Room 210 · Garden Deluxe Room"}</h2>
                        <p>
                          {"Cleaned by "}
                          <b>{"Mariamma Varghese"}</b>
                          {" · section S3 · checklist "}
                          <b>{"Standard room departure v2"}</b>
                          {" (24 items, 4 critical, pass mark 85 %)"}
                        </p>
                      </div>
                    </section>
                    <fieldset className="ri-type">
                      <legend>
                        {"Inspection type "}
                        <span className="field__req">{"*"}</span>
                      </legend>
                      <label>
                        <input type="radio" name="type" value="full" required={true} defaultChecked={true} />
                        <span>{"Full"}</span>
                      </label>
                      <label>
                        <input type="radio" name="type" value="spot" required={true} />
                        <span>{"Spot check"}</span>
                      </label>
                      <label>
                        <input type="radio" name="type" value="re" required={true} />
                        <span>{"Re-inspection"}</span>
                      </label>
                      <label>
                        <input type="radio" name="type" value="vip" required={true} />
                        <span>{"VIP check"}</span>
                      </label>
                      <label>
                        <input type="radio" name="type" value="complaint" required={true} />
                        <span>{"Guest complaint check"}</span>
                      </label>
                      <small>{"From rule R2 – departures get the full checklist."}</small>
                    </fieldset>
                    <div className="ri-check">
                      <details className="ck-area" open={true}>
                        <summary>
                          {"Entrance"}
                          <span>{"3 items"}</span>
                        </summary>
                        <ol className="ck-list">
                          <li className="ck w1">
                            <div className="ck__t">
                              <b>{"E1"}</b>
                              {" Door, lock and peephole clean and working"}
                              <small>{"Weight 1"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="E1 Door, lock and peephole clean and working">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-210-E1" value="pass" required={true} defaultChecked={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-210-E1" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-210-E1" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-210-E1-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on E1"}</span>
                                <input className="field__input" type="text" name="i-210-E1-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w1">
                            <div className="ck__t">
                              <b>{"E2"}</b>
                              {" DND sign, safety card and light switches in place"}
                              <small>{"Weight 1"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="E2 DND sign, safety card and light switches in place">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-210-E2" value="pass" required={true} defaultChecked={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-210-E2" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-210-E2" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-210-E2-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on E2"}</span>
                                <input className="field__input" type="text" name="i-210-E2-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w5 ck--crit">
                            <div className="ck__t">
                              <b>{"E3"}</b>
                              {" No smell in the room"}
                              <small>{"Weight 5 · critical"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="E3 No smell in the room">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-210-E3" value="pass" required={true} defaultChecked={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-210-E3" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-210-E3" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo (required)"}
                                </span>
                                <input type="file" name="i-210-E3-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on E3"}</span>
                                <input className="field__input" type="text" name="i-210-E3-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                        </ol>
                      </details>
                      <details className="ck-area" open={true}>
                        <summary>
                          {"Bedroom"}
                          <span>{"6 items"}</span>
                        </summary>
                        <ol className="ck-list">
                          <li className="ck w5 ck--crit">
                            <div className="ck__t">
                              <b>{"B1"}</b>
                              {" Bed made tight; linen clean, no stains or hair"}
                              <small>{"Weight 5 · critical"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="B1 Bed made tight; linen clean, no stains or hair">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-210-B1" value="pass" required={true} defaultChecked={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-210-B1" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-210-B1" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo (required)"}
                                </span>
                                <input type="file" name="i-210-B1-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on B1"}</span>
                                <input className="field__input" type="text" name="i-210-B1-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w2">
                            <div className="ck__t">
                              <b>{"B2"}</b>
                              {" Furniture dusted, drawers clean"}
                              <small>{"Weight 2"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="B2 Furniture dusted, drawers clean">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-210-B2" value="pass" required={true} defaultChecked={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-210-B2" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-210-B2" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-210-B2-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on B2"}</span>
                                <input className="field__input" type="text" name="i-210-B2-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w2">
                            <div className="ck__t">
                              <b>{"B3"}</b>
                              {" TV and remote working and clean"}
                              <small>{"Weight 2"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="B3 TV and remote working and clean">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-210-B3" value="pass" required={true} defaultChecked={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-210-B3" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-210-B3" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-210-B3-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on B3"}</span>
                                <input className="field__input" type="text" name="i-210-B3-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w2">
                            <div className="ck__t">
                              <b>{"B4"}</b>
                              {" AC working, vents clean"}
                              <small>{"Weight 2"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="B4 AC working, vents clean">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-210-B4" value="pass" required={true} defaultChecked={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-210-B4" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-210-B4" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-210-B4-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on B4"}</span>
                                <input className="field__input" type="text" name="i-210-B4-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w2">
                            <div className="ck__t">
                              <b>{"B5"}</b>
                              {" Curtains clean and hanging straight"}
                              <small>{"Weight 2"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="B5 Curtains clean and hanging straight">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-210-B5" value="pass" required={true} defaultChecked={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-210-B5" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-210-B5" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-210-B5-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on B5"}</span>
                                <input className="field__input" type="text" name="i-210-B5-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w3">
                            <div className="ck__t">
                              <b>{"B6"}</b>
                              {" Carpet or floor vacuumed, no stains"}
                              <small>{"Weight 3"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="B6 Carpet or floor vacuumed, no stains">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-210-B6" value="pass" required={true} defaultChecked={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-210-B6" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-210-B6" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-210-B6-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on B6"}</span>
                                <input className="field__input" type="text" name="i-210-B6-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                        </ol>
                      </details>
                      <details className="ck-area" open={true}>
                        <summary>
                          {"Bathroom"}
                          <span>{"7 items"}</span>
                        </summary>
                        <ol className="ck-list">
                          <li className="ck w5 ck--crit">
                            <div className="ck__t">
                              <b>{"T1"}</b>
                              {" Toilet bowl clean incl. under rim"}
                              <small>{"Weight 5 · critical"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="T1 Toilet bowl clean incl. under rim">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-210-T1" value="pass" required={true} defaultChecked={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-210-T1" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-210-T1" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo (required)"}
                                </span>
                                <input type="file" name="i-210-T1-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on T1"}</span>
                                <input className="field__input" type="text" name="i-210-T1-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w3">
                            <div className="ck__t">
                              <b>{"T2"}</b>
                              {" Wash basin and taps clean"}
                              <small>{"Weight 3"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="T2 Wash basin and taps clean">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-210-T2" value="pass" required={true} defaultChecked={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-210-T2" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-210-T2" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-210-T2-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on T2"}</span>
                                <input className="field__input" type="text" name="i-210-T2-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w3">
                            <div className="ck__t">
                              <b>{"T3"}</b>
                              {" Shower glass and drain clean"}
                              <small>{"Weight 3"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="T3 Shower glass and drain clean">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-210-T3" value="pass" required={true} defaultChecked={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-210-T3" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-210-T3" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-210-T3-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on T3"}</span>
                                <input className="field__input" type="text" name="i-210-T3-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w2">
                            <div className="ck__t">
                              <b>{"T4"}</b>
                              {" Bathroom mirror clean, no marks"}
                              <small>{"Weight 2"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="T4 Bathroom mirror clean, no marks">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-210-T4" value="pass" required={true} defaultChecked={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-210-T4" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-210-T4" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-210-T4-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on T4"}</span>
                                <input className="field__input" type="text" name="i-210-T4-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w3">
                            <div className="ck__t">
                              <b>{"T5"}</b>
                              {" Floor clean and dry"}
                              <small>{"Weight 3"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="T5 Floor clean and dry">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-210-T5" value="pass" required={true} defaultChecked={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-210-T5" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-210-T5" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-210-T5-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on T5"}</span>
                                <input className="field__input" type="text" name="i-210-T5-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w3">
                            <div className="ck__t">
                              <b>{"T6"}</b>
                              {" Towels and amenities set as per the room standard"}
                              <small>{"Weight 3"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="T6 Towels and amenities set as per the room standard">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-210-T6" value="pass" required={true} defaultChecked={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-210-T6" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-210-T6" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-210-T6-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on T6"}</span>
                                <input className="field__input" type="text" name="i-210-T6-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w5 ck--crit">
                            <div className="ck__t">
                              <b>{"T7"}</b>
                              {" No hair on the floor, basin or in the shower"}
                              <small>{"Weight 5 · critical"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="T7 No hair on the floor, basin or in the shower">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-210-T7" value="pass" required={true} defaultChecked={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-210-T7" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-210-T7" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo (required)"}
                                </span>
                                <input type="file" name="i-210-T7-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on T7"}</span>
                                <input className="field__input" type="text" name="i-210-T7-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                        </ol>
                      </details>
                      <details className="ck-area" open={true}>
                        <summary>
                          {"Wardrobe"}
                          <span>{"3 items"}</span>
                        </summary>
                        <ol className="ck-list">
                          <li className="ck w1">
                            <div className="ck__t">
                              <b>{"W1"}</b>
                              {" Hangers, laundry bag and list in place"}
                              <small>{"Weight 1"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="W1 Hangers, laundry bag and list in place">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-210-W1" value="pass" required={true} defaultChecked={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-210-W1" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-210-W1" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-210-W1-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on W1"}</span>
                                <input className="field__input" type="text" name="i-210-W1-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w1">
                            <div className="ck__t">
                              <b>{"W2"}</b>
                              {" Slippers and iron (on request) in place"}
                              <small>{"Weight 1"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="W2 Slippers and iron (on request) in place">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-210-W2" value="pass" required={true} defaultChecked={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-210-W2" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-210-W2" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-210-W2-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on W2"}</span>
                                <input className="field__input" type="text" name="i-210-W2-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w3">
                            <div className="ck__t">
                              <b>{"W3"}</b>
                              {" Safe open and working"}
                              <small>{"Weight 3"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="W3 Safe open and working">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-210-W3" value="pass" required={true} defaultChecked={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-210-W3" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-210-W3" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-210-W3-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on W3"}</span>
                                <input className="field__input" type="text" name="i-210-W3-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                        </ol>
                      </details>
                      <details className="ck-area" open={true}>
                        <summary>
                          {"Minibar & amenities"}
                          <span>{"2 items"}</span>
                        </summary>
                        <ol className="ck-list">
                          <li className="ck w3">
                            <div className="ck__t">
                              <b>{"M1"}</b>
                              {" Minibar stocked and clean"}
                              <small>{"Weight 3"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="M1 Minibar stocked and clean">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-210-M1" value="pass" required={true} defaultChecked={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-210-M1" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-210-M1" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-210-M1-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on M1"}</span>
                                <input className="field__input" type="text" name="i-210-M1-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w2">
                            <div className="ck__t">
                              <b>{"M2"}</b>
                              {" Water bottles, tea and coffee tray set"}
                              <small>{"Weight 2"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="M2 Water bottles, tea and coffee tray set">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-210-M2" value="pass" required={true} defaultChecked={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-210-M2" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-210-M2" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-210-M2-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on M2"}</span>
                                <input className="field__input" type="text" name="i-210-M2-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                        </ol>
                      </details>
                      <details className="ck-area" open={true}>
                        <summary>
                          {"Windows & balcony"}
                          <span>{"2 items"}</span>
                        </summary>
                        <ol className="ck-list">
                          <li className="ck w2">
                            <div className="ck__t">
                              <b>{"N1"}</b>
                              {" Window glass clean"}
                              <small>{"Weight 2"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="N1 Window glass clean">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-210-N1" value="pass" required={true} defaultChecked={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-210-N1" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-210-N1" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-210-N1-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on N1"}</span>
                                <input className="field__input" type="text" name="i-210-N1-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w2">
                            <div className="ck__t">
                              <b>{"N2"}</b>
                              {" Balcony clean (if any)"}
                              <small>{"Weight 2"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="N2 Balcony clean (if any)">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-210-N2" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-210-N2" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-210-N2" value="na" required={true} defaultChecked={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-210-N2-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on N2"}</span>
                                <input className="field__input" type="text" name="i-210-N2-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                        </ol>
                      </details>
                      <details className="ck-area" open={true}>
                        <summary>
                          {"Technical"}
                          <span>{"1 items"}</span>
                        </summary>
                        <ol className="ck-list">
                          <li className="ck w2">
                            <div className="ck__t">
                              <b>{"X1"}</b>
                              {" All lights working"}
                              <small>{"Weight 2"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="X1 All lights working">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-210-X1" value="pass" required={true} defaultChecked={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-210-X1" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-210-X1" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-210-X1-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on X1"}</span>
                                <input className="field__input" type="text" name="i-210-X1-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                        </ol>
                      </details>
                    </div>
                    <section className="ri-res" aria-label="Result">
                      <div className="ri-live">
                        <span>{"Live count"}</span>
                        <b className="ri-live__p" />
                        <small>{"passed weight"}</small>
                        <b className="ri-live__a" />
                        <small>{"applicable weight"}</small>
                        <b className="ri-live__f" />
                        <small>{"items failed"}</small>
                      </div>
                      <p className="ri-rule ri-rule--crit">
                        <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#x-circle" />
                        </svg>
                        <b>{"Failed"}</b>
                        {" – a critical item failed. Send the room back for rework."}
                      </p>
                      <p className="ri-rule ri-rule--ok">
                        <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#shield-check" />
                        </svg>
                        {"No critical item failed – the room passes when the score is 85 % or more (passed ÷ applicable weight)."}
                      </p>
                      <p className="ri-calc">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#calculator" />
                        </svg>
                        {"Calculated from the answers: "}
                        <b>{"61 of 61"}</b>
                        {" applicable weight = "}
                        <b>{"100 %"}</b>
                        {" → "}
                        <b className="is-pass">{"Passed"}</b>
                      </p>
                      <div className="ri-opts">
                        <label className="check">
                          <input className="check__input" type="checkbox" name="amenities" value="1" defaultChecked={true} />
                          <span className="check__box" />
                          {"Amenities and minibar checked (room standard GDLX, HKS-09)"}
                        </label>
                        <label className="check">
                          <input className="check__input" type="checkbox" name="maint" value="1" />
                          <span className="check__box" />
                          {"Maintenance issue found – raise a work order before releasing"}
                        </label>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="ri-c-210">{"Overall comment"}</label>
                        <textarea className="field__input" id="ri-c-210" name="comment" rows="3" maxLength="250" defaultValue={"Room ready – good finish on the bathroom."} />
                      </div>
                      <p className="ri-by">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#user-check" />
                        </svg>
                        {"Inspected by Anita Mohan · Thu 22 Oct 2026 09:42 (set when you save)"}
                      </p>
                    </section>
                    <div className="ri-bar">
                      <button className="btn btn--primary" type="submit" data-leads-to="HK-X05">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#check-circle" />
                        </svg>
                        {"Release room"}
                      </button>
                      <a className="btn ri-bar__fail" href="#p07-210" data-leads-to="HK-P07">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#refresh" />
                        </svg>
                        {"Send back for rework"}
                      </a>
                      <a className="btn" href="#p08-210" data-leads-to="HK-P08">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#wrench" />
                        </svg>
                        {"Raise work order"}
                      </a>
                      <a className="btn" href="/housekeeping/hk-11-out-of-order-out-of-service/#hk-p10" data-leads-to="HK-P10">{"Set out of order"}</a>
                      <button className="btn" type="submit" formAction="/housekeeping/hk-09-room-inspection/#draft-210" formNoValidate={true}>{"Save draft"}</button>
                      <a className="btn" href="/housekeeping/hk-o06-inspection-report/#room-210" data-leads-to="HK-O06">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#printer" />
                        </svg>
                        {"Print report"}
                      </a>
                    </div>
                  </form>
                </article>
                <article className="ri" id="room-215" aria-label="Room 215">
                  <form className="ri-form" action="/housekeeping/hk-08-inspection-queue/#released-215" method="get">
                    <section className="ri-head">
                      <span className="ri-no hk--vc">
                        {"215"}
                        <small>{"GDLX"}</small>
                      </span>
                      <div>
                        <span className="iq-kick">{"Departure clean · finished 08:55 · waiting 47 min"}</span>
                        <h2 className="ri-t">{"Room 215 · Garden Deluxe Room"}</h2>
                        <p>
                          {"Cleaned by "}
                          <b>{"Mariamma Varghese"}</b>
                          {" · section S3 · checklist "}
                          <b>{"Standard room departure v2"}</b>
                          {" (24 items, 4 critical, pass mark 85 %)"}
                        </p>
                      </div>
                    </section>
                    <fieldset className="ri-type">
                      <legend>
                        {"Inspection type "}
                        <span className="field__req">{"*"}</span>
                      </legend>
                      <label>
                        <input type="radio" name="type" value="full" required={true} defaultChecked={true} />
                        <span>{"Full"}</span>
                      </label>
                      <label>
                        <input type="radio" name="type" value="spot" required={true} />
                        <span>{"Spot check"}</span>
                      </label>
                      <label>
                        <input type="radio" name="type" value="re" required={true} />
                        <span>{"Re-inspection"}</span>
                      </label>
                      <label>
                        <input type="radio" name="type" value="vip" required={true} />
                        <span>{"VIP check"}</span>
                      </label>
                      <label>
                        <input type="radio" name="type" value="complaint" required={true} />
                        <span>{"Guest complaint check"}</span>
                      </label>
                      <small>{"From rule R2 – departures get the full checklist."}</small>
                    </fieldset>
                    <div className="ri-check">
                      <details className="ck-area" open={true}>
                        <summary>
                          {"Entrance"}
                          <span>{"3 items"}</span>
                        </summary>
                        <ol className="ck-list">
                          <li className="ck w1">
                            <div className="ck__t">
                              <b>{"E1"}</b>
                              {" Door, lock and peephole clean and working"}
                              <small>{"Weight 1"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="E1 Door, lock and peephole clean and working">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-215-E1" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-215-E1" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-215-E1" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-215-E1-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on E1"}</span>
                                <input className="field__input" type="text" name="i-215-E1-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w1">
                            <div className="ck__t">
                              <b>{"E2"}</b>
                              {" DND sign, safety card and light switches in place"}
                              <small>{"Weight 1"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="E2 DND sign, safety card and light switches in place">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-215-E2" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-215-E2" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-215-E2" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-215-E2-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on E2"}</span>
                                <input className="field__input" type="text" name="i-215-E2-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w5 ck--crit">
                            <div className="ck__t">
                              <b>{"E3"}</b>
                              {" No smell in the room"}
                              <small>{"Weight 5 · critical"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="E3 No smell in the room">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-215-E3" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-215-E3" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-215-E3" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo (required)"}
                                </span>
                                <input type="file" name="i-215-E3-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on E3"}</span>
                                <input className="field__input" type="text" name="i-215-E3-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                        </ol>
                      </details>
                      <details className="ck-area" open={true}>
                        <summary>
                          {"Bedroom"}
                          <span>{"6 items"}</span>
                        </summary>
                        <ol className="ck-list">
                          <li className="ck w5 ck--crit">
                            <div className="ck__t">
                              <b>{"B1"}</b>
                              {" Bed made tight; linen clean, no stains or hair"}
                              <small>{"Weight 5 · critical"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="B1 Bed made tight; linen clean, no stains or hair">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-215-B1" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-215-B1" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-215-B1" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo (required)"}
                                </span>
                                <input type="file" name="i-215-B1-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on B1"}</span>
                                <input className="field__input" type="text" name="i-215-B1-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w2">
                            <div className="ck__t">
                              <b>{"B2"}</b>
                              {" Furniture dusted, drawers clean"}
                              <small>{"Weight 2"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="B2 Furniture dusted, drawers clean">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-215-B2" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-215-B2" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-215-B2" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-215-B2-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on B2"}</span>
                                <input className="field__input" type="text" name="i-215-B2-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w2">
                            <div className="ck__t">
                              <b>{"B3"}</b>
                              {" TV and remote working and clean"}
                              <small>{"Weight 2"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="B3 TV and remote working and clean">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-215-B3" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-215-B3" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-215-B3" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-215-B3-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on B3"}</span>
                                <input className="field__input" type="text" name="i-215-B3-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w2">
                            <div className="ck__t">
                              <b>{"B4"}</b>
                              {" AC working, vents clean"}
                              <small>{"Weight 2"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="B4 AC working, vents clean">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-215-B4" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-215-B4" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-215-B4" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-215-B4-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on B4"}</span>
                                <input className="field__input" type="text" name="i-215-B4-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w2">
                            <div className="ck__t">
                              <b>{"B5"}</b>
                              {" Curtains clean and hanging straight"}
                              <small>{"Weight 2"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="B5 Curtains clean and hanging straight">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-215-B5" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-215-B5" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-215-B5" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-215-B5-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on B5"}</span>
                                <input className="field__input" type="text" name="i-215-B5-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w3">
                            <div className="ck__t">
                              <b>{"B6"}</b>
                              {" Carpet or floor vacuumed, no stains"}
                              <small>{"Weight 3"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="B6 Carpet or floor vacuumed, no stains">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-215-B6" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-215-B6" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-215-B6" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-215-B6-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on B6"}</span>
                                <input className="field__input" type="text" name="i-215-B6-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                        </ol>
                      </details>
                      <details className="ck-area" open={true}>
                        <summary>
                          {"Bathroom"}
                          <span>{"7 items"}</span>
                        </summary>
                        <ol className="ck-list">
                          <li className="ck w5 ck--crit">
                            <div className="ck__t">
                              <b>{"T1"}</b>
                              {" Toilet bowl clean incl. under rim"}
                              <small>{"Weight 5 · critical"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="T1 Toilet bowl clean incl. under rim">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-215-T1" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-215-T1" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-215-T1" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo (required)"}
                                </span>
                                <input type="file" name="i-215-T1-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on T1"}</span>
                                <input className="field__input" type="text" name="i-215-T1-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w3">
                            <div className="ck__t">
                              <b>{"T2"}</b>
                              {" Wash basin and taps clean"}
                              <small>{"Weight 3"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="T2 Wash basin and taps clean">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-215-T2" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-215-T2" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-215-T2" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-215-T2-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on T2"}</span>
                                <input className="field__input" type="text" name="i-215-T2-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w3">
                            <div className="ck__t">
                              <b>{"T3"}</b>
                              {" Shower glass and drain clean"}
                              <small>{"Weight 3"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="T3 Shower glass and drain clean">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-215-T3" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-215-T3" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-215-T3" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-215-T3-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on T3"}</span>
                                <input className="field__input" type="text" name="i-215-T3-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w2">
                            <div className="ck__t">
                              <b>{"T4"}</b>
                              {" Bathroom mirror clean, no marks"}
                              <small>{"Weight 2"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="T4 Bathroom mirror clean, no marks">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-215-T4" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-215-T4" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-215-T4" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-215-T4-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on T4"}</span>
                                <input className="field__input" type="text" name="i-215-T4-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w3">
                            <div className="ck__t">
                              <b>{"T5"}</b>
                              {" Floor clean and dry"}
                              <small>{"Weight 3"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="T5 Floor clean and dry">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-215-T5" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-215-T5" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-215-T5" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-215-T5-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on T5"}</span>
                                <input className="field__input" type="text" name="i-215-T5-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w3">
                            <div className="ck__t">
                              <b>{"T6"}</b>
                              {" Towels and amenities set as per the room standard"}
                              <small>{"Weight 3"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="T6 Towels and amenities set as per the room standard">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-215-T6" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-215-T6" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-215-T6" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-215-T6-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on T6"}</span>
                                <input className="field__input" type="text" name="i-215-T6-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w5 ck--crit">
                            <div className="ck__t">
                              <b>{"T7"}</b>
                              {" No hair on the floor, basin or in the shower"}
                              <small>{"Weight 5 · critical"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="T7 No hair on the floor, basin or in the shower">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-215-T7" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-215-T7" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-215-T7" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo (required)"}
                                </span>
                                <input type="file" name="i-215-T7-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on T7"}</span>
                                <input className="field__input" type="text" name="i-215-T7-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                        </ol>
                      </details>
                      <details className="ck-area" open={true}>
                        <summary>
                          {"Wardrobe"}
                          <span>{"3 items"}</span>
                        </summary>
                        <ol className="ck-list">
                          <li className="ck w1">
                            <div className="ck__t">
                              <b>{"W1"}</b>
                              {" Hangers, laundry bag and list in place"}
                              <small>{"Weight 1"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="W1 Hangers, laundry bag and list in place">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-215-W1" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-215-W1" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-215-W1" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-215-W1-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on W1"}</span>
                                <input className="field__input" type="text" name="i-215-W1-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w1">
                            <div className="ck__t">
                              <b>{"W2"}</b>
                              {" Slippers and iron (on request) in place"}
                              <small>{"Weight 1"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="W2 Slippers and iron (on request) in place">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-215-W2" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-215-W2" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-215-W2" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-215-W2-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on W2"}</span>
                                <input className="field__input" type="text" name="i-215-W2-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w3">
                            <div className="ck__t">
                              <b>{"W3"}</b>
                              {" Safe open and working"}
                              <small>{"Weight 3"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="W3 Safe open and working">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-215-W3" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-215-W3" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-215-W3" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-215-W3-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on W3"}</span>
                                <input className="field__input" type="text" name="i-215-W3-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                        </ol>
                      </details>
                      <details className="ck-area" open={true}>
                        <summary>
                          {"Minibar & amenities"}
                          <span>{"2 items"}</span>
                        </summary>
                        <ol className="ck-list">
                          <li className="ck w3">
                            <div className="ck__t">
                              <b>{"M1"}</b>
                              {" Minibar stocked and clean"}
                              <small>{"Weight 3"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="M1 Minibar stocked and clean">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-215-M1" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-215-M1" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-215-M1" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-215-M1-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on M1"}</span>
                                <input className="field__input" type="text" name="i-215-M1-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w2">
                            <div className="ck__t">
                              <b>{"M2"}</b>
                              {" Water bottles, tea and coffee tray set"}
                              <small>{"Weight 2"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="M2 Water bottles, tea and coffee tray set">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-215-M2" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-215-M2" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-215-M2" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-215-M2-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on M2"}</span>
                                <input className="field__input" type="text" name="i-215-M2-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                        </ol>
                      </details>
                      <details className="ck-area" open={true}>
                        <summary>
                          {"Windows & balcony"}
                          <span>{"2 items"}</span>
                        </summary>
                        <ol className="ck-list">
                          <li className="ck w2">
                            <div className="ck__t">
                              <b>{"N1"}</b>
                              {" Window glass clean"}
                              <small>{"Weight 2"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="N1 Window glass clean">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-215-N1" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-215-N1" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-215-N1" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-215-N1-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on N1"}</span>
                                <input className="field__input" type="text" name="i-215-N1-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w2">
                            <div className="ck__t">
                              <b>{"N2"}</b>
                              {" Balcony clean (if any)"}
                              <small>{"Weight 2"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="N2 Balcony clean (if any)">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-215-N2" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-215-N2" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-215-N2" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-215-N2-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on N2"}</span>
                                <input className="field__input" type="text" name="i-215-N2-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                        </ol>
                      </details>
                      <details className="ck-area" open={true}>
                        <summary>
                          {"Technical"}
                          <span>{"1 items"}</span>
                        </summary>
                        <ol className="ck-list">
                          <li className="ck w2">
                            <div className="ck__t">
                              <b>{"X1"}</b>
                              {" All lights working"}
                              <small>{"Weight 2"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="X1 All lights working">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-215-X1" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-215-X1" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-215-X1" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-215-X1-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on X1"}</span>
                                <input className="field__input" type="text" name="i-215-X1-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                        </ol>
                      </details>
                    </div>
                    <section className="ri-res" aria-label="Result">
                      <div className="ri-live">
                        <span>{"Live count"}</span>
                        <b className="ri-live__p" />
                        <small>{"passed weight"}</small>
                        <b className="ri-live__a" />
                        <small>{"applicable weight"}</small>
                        <b className="ri-live__f" />
                        <small>{"items failed"}</small>
                      </div>
                      <p className="ri-rule ri-rule--crit">
                        <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#x-circle" />
                        </svg>
                        <b>{"Failed"}</b>
                        {" – a critical item failed. Send the room back for rework."}
                      </p>
                      <p className="ri-rule ri-rule--ok">
                        <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#shield-check" />
                        </svg>
                        {"No critical item failed – the room passes when the score is 85 % or more (passed ÷ applicable weight)."}
                      </p>
                      <div className="ri-opts">
                        <label className="check">
                          <input className="check__input" type="checkbox" name="amenities" value="1" />
                          <span className="check__box" />
                          {"Amenities and minibar checked (room standard GDLX, HKS-09)"}
                        </label>
                        <label className="check">
                          <input className="check__input" type="checkbox" name="maint" value="1" />
                          <span className="check__box" />
                          {"Maintenance issue found – raise a work order before releasing"}
                        </label>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="ri-c-215">{"Overall comment"}</label>
                        <textarea className="field__input" id="ri-c-215" name="comment" rows="3" maxLength="250" defaultValue={""} />
                      </div>
                      <p className="ri-by">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#user-check" />
                        </svg>
                        {"Inspected by Anita Mohan · Thu 22 Oct 2026 09:42 (set when you save)"}
                      </p>
                    </section>
                    <div className="ri-bar">
                      <button className="btn btn--primary" type="submit" data-leads-to="HK-X05">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#check-circle" />
                        </svg>
                        {"Release room"}
                      </button>
                      <a className="btn ri-bar__fail" href="#p07-215" data-leads-to="HK-P07">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#refresh" />
                        </svg>
                        {"Send back for rework"}
                      </a>
                      <a className="btn" href="#p08-215" data-leads-to="HK-P08">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#wrench" />
                        </svg>
                        {"Raise work order"}
                      </a>
                      <a className="btn" href="/housekeeping/hk-11-out-of-order-out-of-service/#hk-p10" data-leads-to="HK-P10">{"Set out of order"}</a>
                      <button className="btn" type="submit" formAction="/housekeeping/hk-09-room-inspection/#draft-215" formNoValidate={true}>{"Save draft"}</button>
                      <span className="btn is-disabled" aria-disabled="true" title="The report is available after the result">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#printer" />
                        </svg>
                        {"Print report"}
                      </span>
                    </div>
                  </form>
                </article>
                <article className="ri" id="room-315" aria-label="Room 315">
                  <form className="ri-form" action="/housekeeping/hk-08-inspection-queue/#released-315" method="get">
                    <section className="ri-head">
                      <span className="ri-no hk--vc">
                        {"315"}
                        <small>{"PDLX"}</small>
                      </span>
                      <div>
                        <span className="iq-kick">{"Departure clean · finished 09:20 · waiting 22 min"}</span>
                        <h2 className="ri-t">{"Room 315 · Pool Deluxe Room"}</h2>
                        <p>
                          {"Cleaned by "}
                          <b>{"Rekha S"}</b>
                          {" · section S5 · checklist "}
                          <b>{"Standard room departure v2"}</b>
                          {" (24 items, 4 critical, pass mark 85 %)"}
                        </p>
                      </div>
                    </section>
                    <p className="ri-draft">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#pen-line" />
                      </svg>
                      {"Draft saved 09:38 by Joseph Paul – 2 items failed so far."}
                    </p>
                    <fieldset className="ri-type">
                      <legend>
                        {"Inspection type "}
                        <span className="field__req">{"*"}</span>
                      </legend>
                      <label>
                        <input type="radio" name="type" value="full" required={true} defaultChecked={true} />
                        <span>{"Full"}</span>
                      </label>
                      <label>
                        <input type="radio" name="type" value="spot" required={true} />
                        <span>{"Spot check"}</span>
                      </label>
                      <label>
                        <input type="radio" name="type" value="re" required={true} />
                        <span>{"Re-inspection"}</span>
                      </label>
                      <label>
                        <input type="radio" name="type" value="vip" required={true} />
                        <span>{"VIP check"}</span>
                      </label>
                      <label>
                        <input type="radio" name="type" value="complaint" required={true} />
                        <span>{"Guest complaint check"}</span>
                      </label>
                      <small>{"From rule R2 – departures get the full checklist."}</small>
                    </fieldset>
                    <div className="ri-check">
                      <details className="ck-area" open={true}>
                        <summary>
                          {"Entrance"}
                          <span>{"3 items"}</span>
                        </summary>
                        <ol className="ck-list">
                          <li className="ck w1">
                            <div className="ck__t">
                              <b>{"E1"}</b>
                              {" Door, lock and peephole clean and working"}
                              <small>{"Weight 1"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="E1 Door, lock and peephole clean and working">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-315-E1" value="pass" required={true} defaultChecked={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-315-E1" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-315-E1" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-315-E1-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on E1"}</span>
                                <input className="field__input" type="text" name="i-315-E1-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w1">
                            <div className="ck__t">
                              <b>{"E2"}</b>
                              {" DND sign, safety card and light switches in place"}
                              <small>{"Weight 1"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="E2 DND sign, safety card and light switches in place">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-315-E2" value="pass" required={true} defaultChecked={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-315-E2" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-315-E2" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-315-E2-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on E2"}</span>
                                <input className="field__input" type="text" name="i-315-E2-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w5 ck--crit">
                            <div className="ck__t">
                              <b>{"E3"}</b>
                              {" No smell in the room"}
                              <small>{"Weight 5 · critical"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="E3 No smell in the room">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-315-E3" value="pass" required={true} defaultChecked={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-315-E3" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-315-E3" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo (required)"}
                                </span>
                                <input type="file" name="i-315-E3-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on E3"}</span>
                                <input className="field__input" type="text" name="i-315-E3-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                        </ol>
                      </details>
                      <details className="ck-area" open={true}>
                        <summary>
                          {"Bedroom"}
                          <span>{"6 items"}</span>
                        </summary>
                        <ol className="ck-list">
                          <li className="ck w5 ck--crit">
                            <div className="ck__t">
                              <b>{"B1"}</b>
                              {" Bed made tight; linen clean, no stains or hair"}
                              <small>{"Weight 5 · critical"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="B1 Bed made tight; linen clean, no stains or hair">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-315-B1" value="pass" required={true} defaultChecked={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-315-B1" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-315-B1" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo (required)"}
                                </span>
                                <input type="file" name="i-315-B1-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on B1"}</span>
                                <input className="field__input" type="text" name="i-315-B1-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w2">
                            <div className="ck__t">
                              <b>{"B2"}</b>
                              {" Furniture dusted, drawers clean"}
                              <small>{"Weight 2"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="B2 Furniture dusted, drawers clean">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-315-B2" value="pass" required={true} defaultChecked={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-315-B2" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-315-B2" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-315-B2-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on B2"}</span>
                                <input className="field__input" type="text" name="i-315-B2-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w2">
                            <div className="ck__t">
                              <b>{"B3"}</b>
                              {" TV and remote working and clean"}
                              <small>{"Weight 2"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="B3 TV and remote working and clean">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-315-B3" value="pass" required={true} defaultChecked={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-315-B3" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-315-B3" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-315-B3-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on B3"}</span>
                                <input className="field__input" type="text" name="i-315-B3-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w2">
                            <div className="ck__t">
                              <b>{"B4"}</b>
                              {" AC working, vents clean"}
                              <small>{"Weight 2"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="B4 AC working, vents clean">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-315-B4" value="pass" required={true} defaultChecked={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-315-B4" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-315-B4" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-315-B4-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on B4"}</span>
                                <input className="field__input" type="text" name="i-315-B4-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w2">
                            <div className="ck__t">
                              <b>{"B5"}</b>
                              {" Curtains clean and hanging straight"}
                              <small>{"Weight 2"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="B5 Curtains clean and hanging straight">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-315-B5" value="pass" required={true} defaultChecked={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-315-B5" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-315-B5" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-315-B5-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on B5"}</span>
                                <input className="field__input" type="text" name="i-315-B5-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w3">
                            <div className="ck__t">
                              <b>{"B6"}</b>
                              {" Carpet or floor vacuumed, no stains"}
                              <small>{"Weight 3"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="B6 Carpet or floor vacuumed, no stains">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-315-B6" value="pass" required={true} defaultChecked={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-315-B6" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-315-B6" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-315-B6-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on B6"}</span>
                                <input className="field__input" type="text" name="i-315-B6-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                        </ol>
                      </details>
                      <details className="ck-area" open={true}>
                        <summary>
                          {"Bathroom"}
                          <span>{"7 items"}</span>
                        </summary>
                        <ol className="ck-list">
                          <li className="ck w5 ck--crit">
                            <div className="ck__t">
                              <b>{"T1"}</b>
                              {" Toilet bowl clean incl. under rim"}
                              <small>{"Weight 5 · critical"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="T1 Toilet bowl clean incl. under rim">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-315-T1" value="pass" required={true} defaultChecked={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-315-T1" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-315-T1" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo (required)"}
                                </span>
                                <input type="file" name="i-315-T1-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on T1"}</span>
                                <input className="field__input" type="text" name="i-315-T1-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w3">
                            <div className="ck__t">
                              <b>{"T2"}</b>
                              {" Wash basin and taps clean"}
                              <small>{"Weight 3"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="T2 Wash basin and taps clean">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-315-T2" value="pass" required={true} defaultChecked={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-315-T2" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-315-T2" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-315-T2-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on T2"}</span>
                                <input className="field__input" type="text" name="i-315-T2-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w3">
                            <div className="ck__t">
                              <b>{"T3"}</b>
                              {" Shower glass and drain clean"}
                              <small>{"Weight 3"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="T3 Shower glass and drain clean">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-315-T3" value="pass" required={true} defaultChecked={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-315-T3" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-315-T3" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-315-T3-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on T3"}</span>
                                <input className="field__input" type="text" name="i-315-T3-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w2">
                            <div className="ck__t">
                              <b>{"T4"}</b>
                              {" Bathroom mirror clean, no marks"}
                              <small>{"Weight 2"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="T4 Bathroom mirror clean, no marks">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-315-T4" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-315-T4" value="fail" required={true} defaultChecked={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-315-T4" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-315-T4-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on T4"}</span>
                                <input className="field__input" type="text" name="i-315-T4-note" maxLength="120" placeholder="Comment" defaultValue={"Smears at the bottom edge"} />
                              </label>
                            </div>
                          </li>
                          <li className="ck w3">
                            <div className="ck__t">
                              <b>{"T5"}</b>
                              {" Floor clean and dry"}
                              <small>{"Weight 3"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="T5 Floor clean and dry">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-315-T5" value="pass" required={true} defaultChecked={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-315-T5" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-315-T5" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-315-T5-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on T5"}</span>
                                <input className="field__input" type="text" name="i-315-T5-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w3">
                            <div className="ck__t">
                              <b>{"T6"}</b>
                              {" Towels and amenities set as per the room standard"}
                              <small>{"Weight 3"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="T6 Towels and amenities set as per the room standard">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-315-T6" value="pass" required={true} defaultChecked={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-315-T6" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-315-T6" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-315-T6-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on T6"}</span>
                                <input className="field__input" type="text" name="i-315-T6-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w5 ck--crit">
                            <div className="ck__t">
                              <b>{"T7"}</b>
                              {" No hair on the floor, basin or in the shower"}
                              <small>{"Weight 5 · critical"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="T7 No hair on the floor, basin or in the shower">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-315-T7" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-315-T7" value="fail" required={true} defaultChecked={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-315-T7" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo (required)"}
                                </span>
                                <input type="file" name="i-315-T7-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on T7"}</span>
                                <input className="field__input" type="text" name="i-315-T7-note" maxLength="120" placeholder="Comment" defaultValue={"Hair on the shower floor and drain – photo taken"} />
                              </label>
                            </div>
                          </li>
                        </ol>
                      </details>
                      <details className="ck-area" open={true}>
                        <summary>
                          {"Wardrobe"}
                          <span>{"3 items"}</span>
                        </summary>
                        <ol className="ck-list">
                          <li className="ck w1">
                            <div className="ck__t">
                              <b>{"W1"}</b>
                              {" Hangers, laundry bag and list in place"}
                              <small>{"Weight 1"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="W1 Hangers, laundry bag and list in place">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-315-W1" value="pass" required={true} defaultChecked={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-315-W1" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-315-W1" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-315-W1-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on W1"}</span>
                                <input className="field__input" type="text" name="i-315-W1-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w1">
                            <div className="ck__t">
                              <b>{"W2"}</b>
                              {" Slippers and iron (on request) in place"}
                              <small>{"Weight 1"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="W2 Slippers and iron (on request) in place">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-315-W2" value="pass" required={true} defaultChecked={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-315-W2" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-315-W2" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-315-W2-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on W2"}</span>
                                <input className="field__input" type="text" name="i-315-W2-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w3">
                            <div className="ck__t">
                              <b>{"W3"}</b>
                              {" Safe open and working"}
                              <small>{"Weight 3"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="W3 Safe open and working">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-315-W3" value="pass" required={true} defaultChecked={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-315-W3" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-315-W3" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-315-W3-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on W3"}</span>
                                <input className="field__input" type="text" name="i-315-W3-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                        </ol>
                      </details>
                      <details className="ck-area" open={true}>
                        <summary>
                          {"Minibar & amenities"}
                          <span>{"2 items"}</span>
                        </summary>
                        <ol className="ck-list">
                          <li className="ck w3">
                            <div className="ck__t">
                              <b>{"M1"}</b>
                              {" Minibar stocked and clean"}
                              <small>{"Weight 3"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="M1 Minibar stocked and clean">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-315-M1" value="pass" required={true} defaultChecked={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-315-M1" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-315-M1" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-315-M1-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on M1"}</span>
                                <input className="field__input" type="text" name="i-315-M1-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w2">
                            <div className="ck__t">
                              <b>{"M2"}</b>
                              {" Water bottles, tea and coffee tray set"}
                              <small>{"Weight 2"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="M2 Water bottles, tea and coffee tray set">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-315-M2" value="pass" required={true} defaultChecked={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-315-M2" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-315-M2" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-315-M2-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on M2"}</span>
                                <input className="field__input" type="text" name="i-315-M2-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                        </ol>
                      </details>
                      <details className="ck-area" open={true}>
                        <summary>
                          {"Windows & balcony"}
                          <span>{"2 items"}</span>
                        </summary>
                        <ol className="ck-list">
                          <li className="ck w2">
                            <div className="ck__t">
                              <b>{"N1"}</b>
                              {" Window glass clean"}
                              <small>{"Weight 2"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="N1 Window glass clean">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-315-N1" value="pass" required={true} defaultChecked={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-315-N1" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-315-N1" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-315-N1-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on N1"}</span>
                                <input className="field__input" type="text" name="i-315-N1-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w2">
                            <div className="ck__t">
                              <b>{"N2"}</b>
                              {" Balcony clean (if any)"}
                              <small>{"Weight 2"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="N2 Balcony clean (if any)">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-315-N2" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-315-N2" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-315-N2" value="na" required={true} defaultChecked={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-315-N2-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on N2"}</span>
                                <input className="field__input" type="text" name="i-315-N2-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                        </ol>
                      </details>
                      <details className="ck-area" open={true}>
                        <summary>
                          {"Technical"}
                          <span>{"1 items"}</span>
                        </summary>
                        <ol className="ck-list">
                          <li className="ck w2">
                            <div className="ck__t">
                              <b>{"X1"}</b>
                              {" All lights working"}
                              <small>{"Weight 2"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="X1 All lights working">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-315-X1" value="pass" required={true} defaultChecked={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-315-X1" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-315-X1" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-315-X1-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on X1"}</span>
                                <input className="field__input" type="text" name="i-315-X1-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                        </ol>
                      </details>
                    </div>
                    <section className="ri-res" aria-label="Result">
                      <div className="ri-live">
                        <span>{"Live count"}</span>
                        <b className="ri-live__p" />
                        <small>{"passed weight"}</small>
                        <b className="ri-live__a" />
                        <small>{"applicable weight"}</small>
                        <b className="ri-live__f" />
                        <small>{"items failed"}</small>
                      </div>
                      <p className="ri-rule ri-rule--crit">
                        <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#x-circle" />
                        </svg>
                        <b>{"Failed"}</b>
                        {" – a critical item failed. Send the room back for rework."}
                      </p>
                      <p className="ri-rule ri-rule--ok">
                        <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#shield-check" />
                        </svg>
                        {"No critical item failed – the room passes when the score is 85 % or more (passed ÷ applicable weight)."}
                      </p>
                      <p className="ri-calc">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#calculator" />
                        </svg>
                        {"As saved in the draft at 09:38: "}
                        <b>{"54 of 61"}</b>
                        {" applicable weight = "}
                        <b>{"89 %"}</b>
                        {" → "}
                        <b className="is-fail">{"Failed – critical item failed"}</b>
                      </p>
                      <div className="ri-opts">
                        <label className="check">
                          <input className="check__input" type="checkbox" name="amenities" value="1" />
                          <span className="check__box" />
                          {"Amenities and minibar checked (room standard PDLX, HKS-09)"}
                        </label>
                        <label className="check">
                          <input className="check__input" type="checkbox" name="maint" value="1" />
                          <span className="check__box" />
                          {"Maintenance issue found – raise a work order before releasing"}
                        </label>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="ri-c-315">{"Overall comment"}</label>
                        <textarea className="field__input" id="ri-c-315" name="comment" rows="3" maxLength="250" defaultValue={"Hair in the shower and mirror smears – back to Rekha S."} />
                      </div>
                      <p className="ri-by">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#user-check" />
                        </svg>
                        {"Inspected by Anita Mohan · Thu 22 Oct 2026 09:42 (set when you save)"}
                      </p>
                    </section>
                    <div className="ri-bar">
                      <button className="btn btn--primary" type="submit" data-leads-to="HK-X05">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#check-circle" />
                        </svg>
                        {"Release room"}
                      </button>
                      <a className="btn ri-bar__fail" href="#p07-315" data-leads-to="HK-P07">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#refresh" />
                        </svg>
                        {"Send back for rework"}
                      </a>
                      <a className="btn" href="#p08-315" data-leads-to="HK-P08">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#wrench" />
                        </svg>
                        {"Raise work order"}
                      </a>
                      <a className="btn" href="/housekeeping/hk-11-out-of-order-out-of-service/#hk-p10" data-leads-to="HK-P10">{"Set out of order"}</a>
                      <button className="btn" type="submit" formAction="/housekeeping/hk-09-room-inspection/#draft-315" formNoValidate={true}>{"Save draft"}</button>
                      <a className="btn" href="/housekeeping/hk-o06-inspection-report/#room-315" data-leads-to="HK-O06">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#printer" />
                        </svg>
                        {"Print report"}
                      </a>
                    </div>
                  </form>
                </article>
                <article className="ri" id="room-405" aria-label="Room 405">
                  <form className="ri-form" action="/housekeeping/hk-08-inspection-queue/#released-405" method="get">
                    <section className="ri-head">
                      <span className="ri-no hk--vc">
                        {"405"}
                        <small>{"PDLX"}</small>
                      </span>
                      <div>
                        <span className="iq-kick">{"Departure clean · finished 09:30 · waiting 12 min"}</span>
                        <h2 className="ri-t">{"Room 405 · Pool Deluxe Room"}</h2>
                        <p>
                          {"Cleaned by "}
                          <b>{"Rekha S"}</b>
                          {" · section S5 · checklist "}
                          <b>{"Standard room departure v2"}</b>
                          {" (24 items, 4 critical, pass mark 85 %)"}
                        </p>
                      </div>
                    </section>
                    <fieldset className="ri-type">
                      <legend>
                        {"Inspection type "}
                        <span className="field__req">{"*"}</span>
                      </legend>
                      <label>
                        <input type="radio" name="type" value="full" required={true} defaultChecked={true} />
                        <span>{"Full"}</span>
                      </label>
                      <label>
                        <input type="radio" name="type" value="spot" required={true} />
                        <span>{"Spot check"}</span>
                      </label>
                      <label>
                        <input type="radio" name="type" value="re" required={true} />
                        <span>{"Re-inspection"}</span>
                      </label>
                      <label>
                        <input type="radio" name="type" value="vip" required={true} />
                        <span>{"VIP check"}</span>
                      </label>
                      <label>
                        <input type="radio" name="type" value="complaint" required={true} />
                        <span>{"Guest complaint check"}</span>
                      </label>
                      <small>{"From rule R2 – departures get the full checklist."}</small>
                    </fieldset>
                    <div className="ri-check">
                      <details className="ck-area" open={true}>
                        <summary>
                          {"Entrance"}
                          <span>{"3 items"}</span>
                        </summary>
                        <ol className="ck-list">
                          <li className="ck w1">
                            <div className="ck__t">
                              <b>{"E1"}</b>
                              {" Door, lock and peephole clean and working"}
                              <small>{"Weight 1"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="E1 Door, lock and peephole clean and working">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-405-E1" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-405-E1" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-405-E1" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-405-E1-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on E1"}</span>
                                <input className="field__input" type="text" name="i-405-E1-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w1">
                            <div className="ck__t">
                              <b>{"E2"}</b>
                              {" DND sign, safety card and light switches in place"}
                              <small>{"Weight 1"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="E2 DND sign, safety card and light switches in place">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-405-E2" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-405-E2" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-405-E2" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-405-E2-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on E2"}</span>
                                <input className="field__input" type="text" name="i-405-E2-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w5 ck--crit">
                            <div className="ck__t">
                              <b>{"E3"}</b>
                              {" No smell in the room"}
                              <small>{"Weight 5 · critical"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="E3 No smell in the room">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-405-E3" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-405-E3" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-405-E3" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo (required)"}
                                </span>
                                <input type="file" name="i-405-E3-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on E3"}</span>
                                <input className="field__input" type="text" name="i-405-E3-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                        </ol>
                      </details>
                      <details className="ck-area" open={true}>
                        <summary>
                          {"Bedroom"}
                          <span>{"6 items"}</span>
                        </summary>
                        <ol className="ck-list">
                          <li className="ck w5 ck--crit">
                            <div className="ck__t">
                              <b>{"B1"}</b>
                              {" Bed made tight; linen clean, no stains or hair"}
                              <small>{"Weight 5 · critical"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="B1 Bed made tight; linen clean, no stains or hair">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-405-B1" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-405-B1" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-405-B1" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo (required)"}
                                </span>
                                <input type="file" name="i-405-B1-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on B1"}</span>
                                <input className="field__input" type="text" name="i-405-B1-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w2">
                            <div className="ck__t">
                              <b>{"B2"}</b>
                              {" Furniture dusted, drawers clean"}
                              <small>{"Weight 2"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="B2 Furniture dusted, drawers clean">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-405-B2" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-405-B2" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-405-B2" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-405-B2-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on B2"}</span>
                                <input className="field__input" type="text" name="i-405-B2-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w2">
                            <div className="ck__t">
                              <b>{"B3"}</b>
                              {" TV and remote working and clean"}
                              <small>{"Weight 2"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="B3 TV and remote working and clean">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-405-B3" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-405-B3" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-405-B3" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-405-B3-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on B3"}</span>
                                <input className="field__input" type="text" name="i-405-B3-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w2">
                            <div className="ck__t">
                              <b>{"B4"}</b>
                              {" AC working, vents clean"}
                              <small>{"Weight 2"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="B4 AC working, vents clean">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-405-B4" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-405-B4" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-405-B4" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-405-B4-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on B4"}</span>
                                <input className="field__input" type="text" name="i-405-B4-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w2">
                            <div className="ck__t">
                              <b>{"B5"}</b>
                              {" Curtains clean and hanging straight"}
                              <small>{"Weight 2"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="B5 Curtains clean and hanging straight">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-405-B5" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-405-B5" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-405-B5" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-405-B5-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on B5"}</span>
                                <input className="field__input" type="text" name="i-405-B5-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w3">
                            <div className="ck__t">
                              <b>{"B6"}</b>
                              {" Carpet or floor vacuumed, no stains"}
                              <small>{"Weight 3"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="B6 Carpet or floor vacuumed, no stains">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-405-B6" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-405-B6" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-405-B6" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-405-B6-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on B6"}</span>
                                <input className="field__input" type="text" name="i-405-B6-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                        </ol>
                      </details>
                      <details className="ck-area" open={true}>
                        <summary>
                          {"Bathroom"}
                          <span>{"7 items"}</span>
                        </summary>
                        <ol className="ck-list">
                          <li className="ck w5 ck--crit">
                            <div className="ck__t">
                              <b>{"T1"}</b>
                              {" Toilet bowl clean incl. under rim"}
                              <small>{"Weight 5 · critical"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="T1 Toilet bowl clean incl. under rim">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-405-T1" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-405-T1" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-405-T1" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo (required)"}
                                </span>
                                <input type="file" name="i-405-T1-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on T1"}</span>
                                <input className="field__input" type="text" name="i-405-T1-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w3">
                            <div className="ck__t">
                              <b>{"T2"}</b>
                              {" Wash basin and taps clean"}
                              <small>{"Weight 3"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="T2 Wash basin and taps clean">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-405-T2" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-405-T2" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-405-T2" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-405-T2-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on T2"}</span>
                                <input className="field__input" type="text" name="i-405-T2-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w3">
                            <div className="ck__t">
                              <b>{"T3"}</b>
                              {" Shower glass and drain clean"}
                              <small>{"Weight 3"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="T3 Shower glass and drain clean">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-405-T3" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-405-T3" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-405-T3" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-405-T3-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on T3"}</span>
                                <input className="field__input" type="text" name="i-405-T3-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w2">
                            <div className="ck__t">
                              <b>{"T4"}</b>
                              {" Bathroom mirror clean, no marks"}
                              <small>{"Weight 2"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="T4 Bathroom mirror clean, no marks">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-405-T4" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-405-T4" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-405-T4" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-405-T4-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on T4"}</span>
                                <input className="field__input" type="text" name="i-405-T4-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w3">
                            <div className="ck__t">
                              <b>{"T5"}</b>
                              {" Floor clean and dry"}
                              <small>{"Weight 3"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="T5 Floor clean and dry">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-405-T5" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-405-T5" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-405-T5" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-405-T5-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on T5"}</span>
                                <input className="field__input" type="text" name="i-405-T5-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w3">
                            <div className="ck__t">
                              <b>{"T6"}</b>
                              {" Towels and amenities set as per the room standard"}
                              <small>{"Weight 3"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="T6 Towels and amenities set as per the room standard">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-405-T6" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-405-T6" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-405-T6" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-405-T6-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on T6"}</span>
                                <input className="field__input" type="text" name="i-405-T6-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w5 ck--crit">
                            <div className="ck__t">
                              <b>{"T7"}</b>
                              {" No hair on the floor, basin or in the shower"}
                              <small>{"Weight 5 · critical"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="T7 No hair on the floor, basin or in the shower">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-405-T7" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-405-T7" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-405-T7" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo (required)"}
                                </span>
                                <input type="file" name="i-405-T7-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on T7"}</span>
                                <input className="field__input" type="text" name="i-405-T7-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                        </ol>
                      </details>
                      <details className="ck-area" open={true}>
                        <summary>
                          {"Wardrobe"}
                          <span>{"3 items"}</span>
                        </summary>
                        <ol className="ck-list">
                          <li className="ck w1">
                            <div className="ck__t">
                              <b>{"W1"}</b>
                              {" Hangers, laundry bag and list in place"}
                              <small>{"Weight 1"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="W1 Hangers, laundry bag and list in place">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-405-W1" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-405-W1" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-405-W1" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-405-W1-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on W1"}</span>
                                <input className="field__input" type="text" name="i-405-W1-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w1">
                            <div className="ck__t">
                              <b>{"W2"}</b>
                              {" Slippers and iron (on request) in place"}
                              <small>{"Weight 1"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="W2 Slippers and iron (on request) in place">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-405-W2" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-405-W2" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-405-W2" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-405-W2-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on W2"}</span>
                                <input className="field__input" type="text" name="i-405-W2-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w3">
                            <div className="ck__t">
                              <b>{"W3"}</b>
                              {" Safe open and working"}
                              <small>{"Weight 3"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="W3 Safe open and working">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-405-W3" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-405-W3" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-405-W3" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-405-W3-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on W3"}</span>
                                <input className="field__input" type="text" name="i-405-W3-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                        </ol>
                      </details>
                      <details className="ck-area" open={true}>
                        <summary>
                          {"Minibar & amenities"}
                          <span>{"2 items"}</span>
                        </summary>
                        <ol className="ck-list">
                          <li className="ck w3">
                            <div className="ck__t">
                              <b>{"M1"}</b>
                              {" Minibar stocked and clean"}
                              <small>{"Weight 3"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="M1 Minibar stocked and clean">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-405-M1" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-405-M1" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-405-M1" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-405-M1-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on M1"}</span>
                                <input className="field__input" type="text" name="i-405-M1-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w2">
                            <div className="ck__t">
                              <b>{"M2"}</b>
                              {" Water bottles, tea and coffee tray set"}
                              <small>{"Weight 2"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="M2 Water bottles, tea and coffee tray set">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-405-M2" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-405-M2" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-405-M2" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-405-M2-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on M2"}</span>
                                <input className="field__input" type="text" name="i-405-M2-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                        </ol>
                      </details>
                      <details className="ck-area" open={true}>
                        <summary>
                          {"Windows & balcony"}
                          <span>{"2 items"}</span>
                        </summary>
                        <ol className="ck-list">
                          <li className="ck w2">
                            <div className="ck__t">
                              <b>{"N1"}</b>
                              {" Window glass clean"}
                              <small>{"Weight 2"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="N1 Window glass clean">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-405-N1" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-405-N1" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-405-N1" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-405-N1-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on N1"}</span>
                                <input className="field__input" type="text" name="i-405-N1-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w2">
                            <div className="ck__t">
                              <b>{"N2"}</b>
                              {" Balcony clean (if any)"}
                              <small>{"Weight 2"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="N2 Balcony clean (if any)">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-405-N2" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-405-N2" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-405-N2" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-405-N2-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on N2"}</span>
                                <input className="field__input" type="text" name="i-405-N2-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                        </ol>
                      </details>
                      <details className="ck-area" open={true}>
                        <summary>
                          {"Technical"}
                          <span>{"1 items"}</span>
                        </summary>
                        <ol className="ck-list">
                          <li className="ck w2">
                            <div className="ck__t">
                              <b>{"X1"}</b>
                              {" All lights working"}
                              <small>{"Weight 2"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="X1 All lights working">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-405-X1" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-405-X1" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-405-X1" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-405-X1-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on X1"}</span>
                                <input className="field__input" type="text" name="i-405-X1-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                        </ol>
                      </details>
                    </div>
                    <section className="ri-res" aria-label="Result">
                      <div className="ri-live">
                        <span>{"Live count"}</span>
                        <b className="ri-live__p" />
                        <small>{"passed weight"}</small>
                        <b className="ri-live__a" />
                        <small>{"applicable weight"}</small>
                        <b className="ri-live__f" />
                        <small>{"items failed"}</small>
                      </div>
                      <p className="ri-rule ri-rule--crit">
                        <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#x-circle" />
                        </svg>
                        <b>{"Failed"}</b>
                        {" – a critical item failed. Send the room back for rework."}
                      </p>
                      <p className="ri-rule ri-rule--ok">
                        <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#shield-check" />
                        </svg>
                        {"No critical item failed – the room passes when the score is 85 % or more (passed ÷ applicable weight)."}
                      </p>
                      <div className="ri-opts">
                        <label className="check">
                          <input className="check__input" type="checkbox" name="amenities" value="1" />
                          <span className="check__box" />
                          {"Amenities and minibar checked (room standard PDLX, HKS-09)"}
                        </label>
                        <label className="check">
                          <input className="check__input" type="checkbox" name="maint" value="1" />
                          <span className="check__box" />
                          {"Maintenance issue found – raise a work order before releasing"}
                        </label>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="ri-c-405">{"Overall comment"}</label>
                        <textarea className="field__input" id="ri-c-405" name="comment" rows="3" maxLength="250" defaultValue={""} />
                      </div>
                      <p className="ri-by">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#user-check" />
                        </svg>
                        {"Inspected by Anita Mohan · Thu 22 Oct 2026 09:42 (set when you save)"}
                      </p>
                    </section>
                    <div className="ri-bar">
                      <button className="btn btn--primary" type="submit" data-leads-to="HK-X05">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#check-circle" />
                        </svg>
                        {"Release room"}
                      </button>
                      <a className="btn ri-bar__fail" href="#p07-405" data-leads-to="HK-P07">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#refresh" />
                        </svg>
                        {"Send back for rework"}
                      </a>
                      <a className="btn" href="#p08-405" data-leads-to="HK-P08">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#wrench" />
                        </svg>
                        {"Raise work order"}
                      </a>
                      <a className="btn" href="/housekeeping/hk-11-out-of-order-out-of-service/#hk-p10" data-leads-to="HK-P10">{"Set out of order"}</a>
                      <button className="btn" type="submit" formAction="/housekeeping/hk-09-room-inspection/#draft-405" formNoValidate={true}>{"Save draft"}</button>
                      <span className="btn is-disabled" aria-disabled="true" title="The report is available after the result">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#printer" />
                        </svg>
                        {"Print report"}
                      </span>
                    </div>
                  </form>
                </article>
                <article className="ri" id="room-302" aria-label="Room 302">
                  <form className="ri-form" action="/housekeeping/hk-23-vip-and-special-preparations/#vipok" method="get">
                    <section className="ri-head">
                      <span className="ri-no hk--vi">
                        {"302"}
                        <small>{"GDLX"}</small>
                      </span>
                      <div>
                        <span className="iq-kick">{"VIP check · prepared 09:35 for the Mueller family (arrival 16:00)"}</span>
                        <h2 className="ri-t">{"Room 302 · Garden Deluxe Room"}</h2>
                        <p>
                          {"Prepared by "}
                          <b>{"Shiny Joseph"}</b>
                          {" · section S4 · checklist "}
                          <b>{"VIP check v1"}</b>
                          {" (18 items, 4 critical, pass mark 85 %)"}
                        </p>
                      </div>
                    </section>
                    <fieldset className="ri-type">
                      <legend>
                        {"Inspection type "}
                        <span className="field__req">{"*"}</span>
                      </legend>
                      <label>
                        <input type="radio" name="type" value="full" required={true} />
                        <span>{"Full"}</span>
                      </label>
                      <label>
                        <input type="radio" name="type" value="spot" required={true} />
                        <span>{"Spot check"}</span>
                      </label>
                      <label>
                        <input type="radio" name="type" value="re" required={true} />
                        <span>{"Re-inspection"}</span>
                      </label>
                      <label>
                        <input type="radio" name="type" value="vip" required={true} defaultChecked={true} />
                        <span>{"VIP check"}</span>
                      </label>
                      <label>
                        <input type="radio" name="type" value="complaint" required={true} />
                        <span>{"Guest complaint check"}</span>
                      </label>
                      <small>{"Opened from VIP & Special Preparations (HK-23) – VIP check after the room was prepared."}</small>
                    </fieldset>
                    <div className="ri-check">
                      <details className="ck-area" open={true}>
                        <summary>
                          {"Entrance"}
                          <span>{"2 items"}</span>
                        </summary>
                        <ol className="ck-list">
                          <li className="ck w5 ck--crit">
                            <div className="ck__t">
                              <b>{"V1"}</b>
                              {" Welcome card in place, guest name spelt correctly"}
                              <small>{"Weight 5 · critical"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="V1 Welcome card in place, guest name spelt correctly">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-302-V1" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-302-V1" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-302-V1" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo (required)"}
                                </span>
                                <input type="file" name="i-302-V1-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on V1"}</span>
                                <input className="field__input" type="text" name="i-302-V1-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w5 ck--crit">
                            <div className="ck__t">
                              <b>{"E3"}</b>
                              {" No smell in the room"}
                              <small>{"Weight 5 · critical"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="E3 No smell in the room">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-302-E3" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-302-E3" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-302-E3" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo (required)"}
                                </span>
                                <input type="file" name="i-302-E3-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on E3"}</span>
                                <input className="field__input" type="text" name="i-302-E3-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                        </ol>
                      </details>
                      <details className="ck-area" open={true}>
                        <summary>
                          {"Bedroom"}
                          <span>{"5 items"}</span>
                        </summary>
                        <ol className="ck-list">
                          <li className="ck w3">
                            <div className="ck__t">
                              <b>{"V3"}</b>
                              {" Flowers fresh, in a clean vase"}
                              <small>{"Weight 3"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="V3 Flowers fresh, in a clean vase">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-302-V3" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-302-V3" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-302-V3" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-302-V3-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on V3"}</span>
                                <input className="field__input" type="text" name="i-302-V3-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w5 ck--crit">
                            <div className="ck__t">
                              <b>{"B1"}</b>
                              {" Bed made tight; linen clean, no stains or hair"}
                              <small>{"Weight 5 · critical"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="B1 Bed made tight; linen clean, no stains or hair">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-302-B1" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-302-B1" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-302-B1" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo (required)"}
                                </span>
                                <input type="file" name="i-302-B1-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on B1"}</span>
                                <input className="field__input" type="text" name="i-302-B1-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w2">
                            <div className="ck__t">
                              <b>{"B2"}</b>
                              {" Furniture dusted, drawers clean"}
                              <small>{"Weight 2"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="B2 Furniture dusted, drawers clean">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-302-B2" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-302-B2" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-302-B2" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-302-B2-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on B2"}</span>
                                <input className="field__input" type="text" name="i-302-B2-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w2">
                            <div className="ck__t">
                              <b>{"B3"}</b>
                              {" TV and remote working and clean"}
                              <small>{"Weight 2"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="B3 TV and remote working and clean">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-302-B3" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-302-B3" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-302-B3" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-302-B3-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on B3"}</span>
                                <input className="field__input" type="text" name="i-302-B3-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w2">
                            <div className="ck__t">
                              <b>{"B4"}</b>
                              {" AC working, vents clean"}
                              <small>{"Weight 2"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="B4 AC working, vents clean">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-302-B4" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-302-B4" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-302-B4" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-302-B4-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on B4"}</span>
                                <input className="field__input" type="text" name="i-302-B4-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                        </ol>
                      </details>
                      <details className="ck-area" open={true}>
                        <summary>
                          {"Bathroom"}
                          <span>{"5 items"}</span>
                        </summary>
                        <ol className="ck-list">
                          <li className="ck w3">
                            <div className="ck__t">
                              <b>{"V4"}</b>
                              {" Bathrobes and slippers set"}
                              <small>{"Weight 3"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="V4 Bathrobes and slippers set">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-302-V4" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-302-V4" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-302-V4" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-302-V4-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on V4"}</span>
                                <input className="field__input" type="text" name="i-302-V4-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w5 ck--crit">
                            <div className="ck__t">
                              <b>{"T1"}</b>
                              {" Toilet bowl clean incl. under rim"}
                              <small>{"Weight 5 · critical"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="T1 Toilet bowl clean incl. under rim">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-302-T1" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-302-T1" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-302-T1" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo (required)"}
                                </span>
                                <input type="file" name="i-302-T1-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on T1"}</span>
                                <input className="field__input" type="text" name="i-302-T1-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w3">
                            <div className="ck__t">
                              <b>{"T2"}</b>
                              {" Wash basin and taps clean"}
                              <small>{"Weight 3"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="T2 Wash basin and taps clean">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-302-T2" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-302-T2" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-302-T2" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-302-T2-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on T2"}</span>
                                <input className="field__input" type="text" name="i-302-T2-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w3">
                            <div className="ck__t">
                              <b>{"T3"}</b>
                              {" Shower glass and drain clean"}
                              <small>{"Weight 3"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="T3 Shower glass and drain clean">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-302-T3" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-302-T3" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-302-T3" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-302-T3-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on T3"}</span>
                                <input className="field__input" type="text" name="i-302-T3-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w3">
                            <div className="ck__t">
                              <b>{"T6"}</b>
                              {" Towels and amenities set as per the room standard"}
                              <small>{"Weight 3"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="T6 Towels and amenities set as per the room standard">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-302-T6" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-302-T6" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-302-T6" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-302-T6-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on T6"}</span>
                                <input className="field__input" type="text" name="i-302-T6-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                        </ol>
                      </details>
                      <details className="ck-area" open={true}>
                        <summary>
                          {"Minibar & amenities"}
                          <span>{"3 items"}</span>
                        </summary>
                        <ol className="ck-list">
                          <li className="ck w3">
                            <div className="ck__t">
                              <b>{"V2"}</b>
                              {" Fruit basket and cookies placed as per the VIP level"}
                              <small>{"Weight 3"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="V2 Fruit basket and cookies placed as per the VIP level">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-302-V2" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-302-V2" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-302-V2" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-302-V2-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on V2"}</span>
                                <input className="field__input" type="text" name="i-302-V2-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w3">
                            <div className="ck__t">
                              <b>{"M1"}</b>
                              {" Minibar stocked and clean"}
                              <small>{"Weight 3"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="M1 Minibar stocked and clean">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-302-M1" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-302-M1" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-302-M1" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-302-M1-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on M1"}</span>
                                <input className="field__input" type="text" name="i-302-M1-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w2">
                            <div className="ck__t">
                              <b>{"M2"}</b>
                              {" Water bottles, tea and coffee tray set"}
                              <small>{"Weight 2"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="M2 Water bottles, tea and coffee tray set">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-302-M2" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-302-M2" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-302-M2" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-302-M2-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on M2"}</span>
                                <input className="field__input" type="text" name="i-302-M2-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                        </ol>
                      </details>
                      <details className="ck-area" open={true}>
                        <summary>
                          {"Windows & balcony"}
                          <span>{"1 items"}</span>
                        </summary>
                        <ol className="ck-list">
                          <li className="ck w2">
                            <div className="ck__t">
                              <b>{"N1"}</b>
                              {" Window glass clean"}
                              <small>{"Weight 2"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="N1 Window glass clean">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-302-N1" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-302-N1" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-302-N1" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-302-N1-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on N1"}</span>
                                <input className="field__input" type="text" name="i-302-N1-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                        </ol>
                      </details>
                      <details className="ck-area" open={true}>
                        <summary>
                          {"Technical"}
                          <span>{"2 items"}</span>
                        </summary>
                        <ol className="ck-list">
                          <li className="ck w3">
                            <div className="ck__t">
                              <b>{"V5"}</b>
                              {" Safe tested with the VIP card"}
                              <small>{"Weight 3"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="V5 Safe tested with the VIP card">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-302-V5" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-302-V5" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-302-V5" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-302-V5-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on V5"}</span>
                                <input className="field__input" type="text" name="i-302-V5-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                          <li className="ck w2">
                            <div className="ck__t">
                              <b>{"X1"}</b>
                              {" All lights working"}
                              <small>{"Weight 2"}</small>
                            </div>
                            <div className="ck__r" role="radiogroup" aria-label="X1 All lights working">
                              <label className="ck__o ck__o--pass">
                                <input type="radio" name="i-302-X1" value="pass" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Pass"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--fail">
                                <input type="radio" name="i-302-X1" value="fail" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x" />
                                  </svg>
                                  {"Fail"}
                                </span>
                              </label>
                              <label className="ck__o ck__o--na">
                                <input type="radio" name="i-302-X1" value="na" required={true} />
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#minus" />
                                  </svg>
                                  {"N.A."}
                                </span>
                              </label>
                            </div>
                            <div className="ck__more">
                              <label className="ck__ph">
                                <span>
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#camera" />
                                  </svg>
                                  {"Photo"}
                                </span>
                                <input type="file" name="i-302-X1-photo" accept="image/*" capture="environment" />
                              </label>
                              <label className="ck__cm">
                                <span className="sr-only">{"Comment on X1"}</span>
                                <input className="field__input" type="text" name="i-302-X1-note" maxLength="120" placeholder="Comment" />
                              </label>
                            </div>
                          </li>
                        </ol>
                      </details>
                    </div>
                    <section className="ri-res" aria-label="Result">
                      <div className="ri-live">
                        <span>{"Live count"}</span>
                        <b className="ri-live__p" />
                        <small>{"passed weight"}</small>
                        <b className="ri-live__a" />
                        <small>{"applicable weight"}</small>
                        <b className="ri-live__f" />
                        <small>{"items failed"}</small>
                      </div>
                      <p className="ri-rule ri-rule--crit">
                        <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#x-circle" />
                        </svg>
                        <b>{"Failed"}</b>
                        {" – a critical item failed. Send the room back for rework."}
                      </p>
                      <p className="ri-rule ri-rule--ok">
                        <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#shield-check" />
                        </svg>
                        {"No critical item failed – the room passes when the score is 85 % or more (passed ÷ applicable weight)."}
                      </p>
                      <div className="ri-opts">
                        <label className="check">
                          <input className="check__input" type="checkbox" name="amenities" value="1" />
                          <span className="check__box" />
                          {"Amenities and minibar checked (room standard GDLX, HKS-09)"}
                        </label>
                        <label className="check">
                          <input className="check__input" type="checkbox" name="maint" value="1" />
                          <span className="check__box" />
                          {"Maintenance issue found – raise a work order before releasing"}
                        </label>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="ri-c-302">{"Overall comment"}</label>
                        <textarea className="field__input" id="ri-c-302" name="comment" rows="3" maxLength="250" defaultValue={""} />
                      </div>
                      <p className="ri-by">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#user-check" />
                        </svg>
                        {"Inspected by Anita Mohan · Thu 22 Oct 2026 09:42 (set when you save)"}
                      </p>
                    </section>
                    <div className="ri-bar">
                      <button className="btn btn--primary" type="submit" data-leads-to="HK-X05">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#check-circle" />
                        </svg>
                        {"Release room"}
                      </button>
                      <a className="btn ri-bar__fail" href="#p07-302" data-leads-to="HK-P07">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#refresh" />
                        </svg>
                        {"Send back for rework"}
                      </a>
                      <a className="btn" href="#p08-302" data-leads-to="HK-P08">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#wrench" />
                        </svg>
                        {"Raise work order"}
                      </a>
                      <a className="btn" href="/housekeeping/hk-11-out-of-order-out-of-service/#hk-p10" data-leads-to="HK-P10">{"Set out of order"}</a>
                      <button className="btn" type="submit" formAction="/housekeeping/hk-09-room-inspection/#draft-302" formNoValidate={true}>{"Save draft"}</button>
                      <span className="btn is-disabled" aria-disabled="true" title="The report is available after the result">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#printer" />
                        </svg>
                        {"Print report"}
                      </span>
                    </div>
                  </form>
                </article>
                <article className="ri" id="room-308" aria-label="Room 308">
                  <section className="ri-head">
                    <span className="ri-no hk--vd">
                      {"308"}
                      <small>{"GDLX"}</small>
                    </span>
                    <div>
                      <span className="iq-kick">{"Departure clean · Shiny Joseph"}</span>
                      <h2 className="ri-t">{"Room 308 is still being cleaned"}</h2>
                      <p>{"Started 08:50 · 52 min so far (standard 30 min, +50 % = 45 min). The checklist opens when the attendant taps Finish and the room is Vacant clean."}</p>
                    </div>
                  </section>
                  <div className="ri-blocked">
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#clock" />
                    </svg>
                    <div>
                      <b>{"Not ready for inspection"}</b>
                      <p>{"Joseph Paul agreed an extra 20 minutes (heavy room after a family stay). You will get a phone alert when it joins the inspection queue."}</p>
                    </div>
                    <Link className="btn" data-leads-to="HK-08" to={"/housekeeping/hk-08-inspection-queue"}>{"Back to the queue"}</Link>
                    <a className="btn" href="/housekeeping/hk-06-task-sheet-detail/#TS-20261022-05" data-leads-to="HK-06">{"Task sheet of Shiny Joseph"}</a>
                  </div>
                </article>
              </div>
              <div className="modal modal--lg" id="p07-210" data-code="HK-P07-210" role="dialog" aria-modal="true" aria-labelledby="p07-210-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping/hk-08-inspection-queue/#rework-210" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="p07-210-t">{"Send room 210 back for rework"}</h2>
                      <p className="modal__desc">{"The task becomes Failed – rework, the room stays dirty and the attendant gets the failed items with photos on the phone."}</p>
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
                        <span className="field__label">{"Failed items"}</span>
                        <ul className="p7-list">
                          <li className="fd-muted">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#info" />
                            </svg>
                            {"Mark the failed items in the checklist first – they are listed here with their photos."}
                          </li>
                        </ul>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="p07-a-210">
                          {"Rework by "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="p07-a-210" name="attendant" required={true} defaultValue={"Mariamma Varghese"}>
                            <option value="Anitha P">{"Anitha P · S1"}</option>
                            <option value="Remya K">{"Remya K · S1"}</option>
                            <option value="Divya M">{"Divya M · S2"}</option>
                            <option value="Mariamma Varghese">{"Mariamma Varghese · S3 (cleaned the room)"}</option>
                            <option value="Shiny Joseph">{"Shiny Joseph · S4"}</option>
                            <option value="Jincy Mathew">{"Jincy Mathew · S4"}</option>
                            <option value="Rekha S">{"Rekha S · S5"}</option>
                            <option value="Lissy George">{"Lissy George · S6"}</option>
                            <option value="Saritha K">{"Saritha K · S7"}</option>
                            <option value="Rani V">{"Rani V · S6"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Same attendant by default"}</span>
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
                            <input className="check__input" type="radio" name="priority" value="rush" required={true} />
                            <span className="check__box" />
                            {"Rush"}
                            <small>{"Use when an arrival is waiting"}</small>
                          </label>
                        </div>
                      </fieldset>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="p07-n-210">{"Note"}</label>
                        <textarea className="field__input" id="p07-n-210" name="note" rows="3" maxLength="250" defaultValue={""} />
                        <span className="field__hint">{"Shown on the attendant’s phone"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#room-210">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Send"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="p07-215" data-code="HK-P07-215" role="dialog" aria-modal="true" aria-labelledby="p07-215-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping/hk-08-inspection-queue/#rework-215" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="p07-215-t">{"Send room 215 back for rework"}</h2>
                      <p className="modal__desc">{"The task becomes Failed – rework, the room stays dirty and the attendant gets the failed items with photos on the phone."}</p>
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
                        <span className="field__label">{"Failed items"}</span>
                        <ul className="p7-list">
                          <li className="fd-muted">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#info" />
                            </svg>
                            {"Mark the failed items in the checklist first – they are listed here with their photos."}
                          </li>
                        </ul>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="p07-a-215">
                          {"Rework by "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="p07-a-215" name="attendant" required={true} defaultValue={"Mariamma Varghese"}>
                            <option value="Anitha P">{"Anitha P · S1"}</option>
                            <option value="Remya K">{"Remya K · S1"}</option>
                            <option value="Divya M">{"Divya M · S2"}</option>
                            <option value="Mariamma Varghese">{"Mariamma Varghese · S3 (cleaned the room)"}</option>
                            <option value="Shiny Joseph">{"Shiny Joseph · S4"}</option>
                            <option value="Jincy Mathew">{"Jincy Mathew · S4"}</option>
                            <option value="Rekha S">{"Rekha S · S5"}</option>
                            <option value="Lissy George">{"Lissy George · S6"}</option>
                            <option value="Saritha K">{"Saritha K · S7"}</option>
                            <option value="Rani V">{"Rani V · S6"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Same attendant by default"}</span>
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
                            <input className="check__input" type="radio" name="priority" value="rush" required={true} />
                            <span className="check__box" />
                            {"Rush"}
                            <small>{"Use when an arrival is waiting"}</small>
                          </label>
                        </div>
                      </fieldset>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="p07-n-215">{"Note"}</label>
                        <textarea className="field__input" id="p07-n-215" name="note" rows="3" maxLength="250" defaultValue={""} />
                        <span className="field__hint">{"Shown on the attendant’s phone"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#room-215">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Send"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="p07-315" data-code="HK-P07" role="dialog" aria-modal="true" aria-labelledby="p07-315-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping/hk-08-inspection-queue/#rework-315" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="p07-315-t">{"Send room 315 back for rework"}</h2>
                      <p className="modal__desc">{"The task becomes Failed – rework, the room stays dirty and the attendant gets the failed items with photos on the phone."}</p>
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
                        <span className="field__label">{"Failed items"}</span>
                        <ul className="p7-list">
                          <li>
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#x-circle" />
                            </svg>
                            <b>{"T4"}</b>
                            {" Bathroom mirror clean, no marks"}
                            <span className="p7-ph">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#camera" />
                              </svg>
                              {"photo 09:35"}
                            </span>
                          </li>
                          <li>
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#x-circle" />
                            </svg>
                            <b>{"T7"}</b>
                            {" No hair on the floor, basin or in the shower · critical"}
                            <span className="p7-ph">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#camera" />
                              </svg>
                              {"photo 09:36"}
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="p07-a-315">
                          {"Rework by "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="p07-a-315" name="attendant" required={true} defaultValue={"Rekha S"}>
                            <option value="Anitha P">{"Anitha P · S1"}</option>
                            <option value="Remya K">{"Remya K · S1"}</option>
                            <option value="Divya M">{"Divya M · S2"}</option>
                            <option value="Mariamma Varghese">{"Mariamma Varghese · S3"}</option>
                            <option value="Shiny Joseph">{"Shiny Joseph · S4"}</option>
                            <option value="Jincy Mathew">{"Jincy Mathew · S4"}</option>
                            <option value="Rekha S">{"Rekha S · S5 (cleaned the room)"}</option>
                            <option value="Lissy George">{"Lissy George · S6"}</option>
                            <option value="Saritha K">{"Saritha K · S7"}</option>
                            <option value="Rani V">{"Rani V · S6"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Same attendant by default"}</span>
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
                            <input className="check__input" type="radio" name="priority" value="rush" required={true} />
                            <span className="check__box" />
                            {"Rush"}
                            <small>{"Use when an arrival is waiting"}</small>
                          </label>
                        </div>
                      </fieldset>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="p07-n-315">{"Note"}</label>
                        <textarea className="field__input" id="p07-n-315" name="note" rows="3" maxLength="250" defaultValue={"Please redo the shower and the mirror – call me when done."} />
                        <span className="field__hint">{"Shown on the attendant’s phone"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#room-315">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Send"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="p07-405" data-code="HK-P07-405" role="dialog" aria-modal="true" aria-labelledby="p07-405-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping/hk-08-inspection-queue/#rework-405" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="p07-405-t">{"Send room 405 back for rework"}</h2>
                      <p className="modal__desc">{"The task becomes Failed – rework, the room stays dirty and the attendant gets the failed items with photos on the phone."}</p>
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
                        <span className="field__label">{"Failed items"}</span>
                        <ul className="p7-list">
                          <li className="fd-muted">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#info" />
                            </svg>
                            {"Mark the failed items in the checklist first – they are listed here with their photos."}
                          </li>
                        </ul>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="p07-a-405">
                          {"Rework by "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="p07-a-405" name="attendant" required={true} defaultValue={"Rekha S"}>
                            <option value="Anitha P">{"Anitha P · S1"}</option>
                            <option value="Remya K">{"Remya K · S1"}</option>
                            <option value="Divya M">{"Divya M · S2"}</option>
                            <option value="Mariamma Varghese">{"Mariamma Varghese · S3"}</option>
                            <option value="Shiny Joseph">{"Shiny Joseph · S4"}</option>
                            <option value="Jincy Mathew">{"Jincy Mathew · S4"}</option>
                            <option value="Rekha S">{"Rekha S · S5 (cleaned the room)"}</option>
                            <option value="Lissy George">{"Lissy George · S6"}</option>
                            <option value="Saritha K">{"Saritha K · S7"}</option>
                            <option value="Rani V">{"Rani V · S6"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Same attendant by default"}</span>
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
                            <input className="check__input" type="radio" name="priority" value="rush" required={true} />
                            <span className="check__box" />
                            {"Rush"}
                            <small>{"Use when an arrival is waiting"}</small>
                          </label>
                        </div>
                      </fieldset>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="p07-n-405">{"Note"}</label>
                        <textarea className="field__input" id="p07-n-405" name="note" rows="3" maxLength="250" defaultValue={""} />
                        <span className="field__hint">{"Shown on the attendant’s phone"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#room-405">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Send"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="p07-302" data-code="HK-P07-302" role="dialog" aria-modal="true" aria-labelledby="p07-302-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping/hk-23-vip-and-special-preparations/#viprework" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="p07-302-t">{"Send room 302 back for rework"}</h2>
                      <p className="modal__desc">{"The task becomes Failed – rework, the room stays dirty and the attendant gets the failed items with photos on the phone."}</p>
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
                        <span className="field__label">{"Failed items"}</span>
                        <ul className="p7-list">
                          <li className="fd-muted">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#info" />
                            </svg>
                            {"Mark the failed items in the checklist first – they are listed here with their photos."}
                          </li>
                        </ul>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="p07-a-302">
                          {"Rework by "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="p07-a-302" name="attendant" required={true} defaultValue={"Shiny Joseph"}>
                            <option value="Anitha P">{"Anitha P · S1"}</option>
                            <option value="Remya K">{"Remya K · S1"}</option>
                            <option value="Divya M">{"Divya M · S2"}</option>
                            <option value="Mariamma Varghese">{"Mariamma Varghese · S3"}</option>
                            <option value="Shiny Joseph">{"Shiny Joseph · S4 (cleaned the room)"}</option>
                            <option value="Jincy Mathew">{"Jincy Mathew · S4"}</option>
                            <option value="Rekha S">{"Rekha S · S5"}</option>
                            <option value="Lissy George">{"Lissy George · S6"}</option>
                            <option value="Saritha K">{"Saritha K · S7"}</option>
                            <option value="Rani V">{"Rani V · S6"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Same attendant by default"}</span>
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
                            <input className="check__input" type="radio" name="priority" value="rush" required={true} />
                            <span className="check__box" />
                            {"Rush"}
                            <small>{"Use when an arrival is waiting"}</small>
                          </label>
                        </div>
                      </fieldset>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="p07-n-302">{"Note"}</label>
                        <textarea className="field__input" id="p07-n-302" name="note" rows="3" maxLength="250" defaultValue={""} />
                        <span className="field__hint">{"Shown on the attendant’s phone"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#room-302">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Send"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="hk-p08" data-code="HK-P08" role="dialog" aria-modal="true" aria-labelledby="hk-p08-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/engineering-and-maintenance/mt-02-work-queue/" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="hk-p08-t">{"Raise work order"}</h2>
                      <p className="modal__desc">{"Report a repair need to Engineering. The work order opens in Engineering (MT-03) with status Open."}</p>
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
                        <label className="field__label" htmlFor="p08-loc">
                          {"Room / location "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="p08-loc" name="location" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a room or public area"}</option>
                            <option value="101">{"Room 101 · GDLX · Occupied clean"}</option>
                            <option value="102">{"Room 102 · GDLX · Vacant inspected"}</option>
                            <option value="103">{"Room 103 · GDLX · Occupied clean"}</option>
                            <option value="104">{"Room 104 · GDLX · Occupied clean"}</option>
                            <option value="105">{"Room 105 · GDLX · Occupied clean"}</option>
                            <option value="106">{"Room 106 · GDLX · Vacant inspected"}</option>
                            <option value="107">{"Room 107 · GDLX · Occupied clean"}</option>
                            <option value="108">{"Room 108 · GDLX · Occupied clean"}</option>
                            <option value="109">{"Room 109 · GDLX · Occupied clean"}</option>
                            <option value="110">{"Room 110 · GDLX · Occupied dirty"}</option>
                            <option value="111">{"Room 111 · GDLX · Vacant dirty"}</option>
                            <option value="112">{"Room 112 · GDLX · Occupied clean"}</option>
                            <option value="113">{"Room 113 · GDLX · Occupied clean"}</option>
                            <option value="114">{"Room 114 · GDLX · Occupied clean"}</option>
                            <option value="115">{"Room 115 · GDLX · Occupied clean"}</option>
                            <option value="116">{"Room 116 · GDLX · Occupied clean"}</option>
                            <option value="117">{"Room 117 · GDLX · Vacant inspected"}</option>
                            <option value="118">{"Room 118 · GDLX · Vacant dirty"}</option>
                            <option value="119">{"Room 119 · GDLX · Occupied clean"}</option>
                            <option value="201">{"Room 201 · GDLX · Occupied clean"}</option>
                            <option value="202">{"Room 202 · GDLX · Occupied clean"}</option>
                            <option value="203">{"Room 203 · GDLX · Vacant inspected"}</option>
                            <option value="204">{"Room 204 · GDLX · Vacant inspected"}</option>
                            <option value="205">{"Room 205 · GDLX · Occupied clean"}</option>
                            <option value="206">{"Room 206 · GDLX · Vacant inspected"}</option>
                            <option value="207">{"Room 207 · GDLX · Occupied clean"}</option>
                            <option value="208">{"Room 208 · GDLX · Occupied clean"}</option>
                            <option value="209">{"Room 209 · GDLX · Vacant dirty"}</option>
                            <option value="210">{"Room 210 · GDLX · Vacant clean"}</option>
                            <option value="211">{"Room 211 · GDLX · Occupied clean"}</option>
                            <option value="212">{"Room 212 · GDLX · Occupied clean"}</option>
                            <option value="213">{"Room 213 · GDLX · Occupied clean"}</option>
                            <option value="214">{"Room 214 · GDLX · Out of order"}</option>
                            <option value="215">{"Room 215 · GDLX · Vacant clean"}</option>
                            <option value="216">{"Room 216 · GDLX · Occupied clean"}</option>
                            <option value="217">{"Room 217 · GDLX · Occupied clean"}</option>
                            <option value="218">{"Room 218 · GDLX · Occupied clean"}</option>
                            <option value="219">{"Room 219 · GDLX · Occupied clean"}</option>
                            <option value="301">{"Room 301 · GDLX · Occupied clean"}</option>
                            <option value="302">{"Room 302 · GDLX · Vacant inspected"}</option>
                            <option value="303">{"Room 303 · GDLX · Occupied clean"}</option>
                            <option value="304">{"Room 304 · GDLX · Occupied clean"}</option>
                            <option value="305">{"Room 305 · GDLX · Occupied clean"}</option>
                            <option value="306">{"Room 306 · GDLX · Occupied clean"}</option>
                            <option value="307">{"Room 307 · GDLX · Vacant inspected"}</option>
                            <option value="308">{"Room 308 · GDLX · Vacant dirty"}</option>
                            <option value="309">{"Room 309 · GDLX · Occupied clean"}</option>
                            <option value="310">{"Room 310 · GDLX · Occupied dirty"}</option>
                            <option value="311">{"Room 311 · PDLX · Vacant inspected"}</option>
                            <option value="312">{"Room 312 · PDLX · Vacant inspected"}</option>
                            <option value="313">{"Room 313 · PDLX · Occupied clean"}</option>
                            <option value="314">{"Room 314 · PDLX · Vacant inspected"}</option>
                            <option value="315">{"Room 315 · PDLX · Vacant clean"}</option>
                            <option value="316">{"Room 316 · PDLX · Occupied clean"}</option>
                            <option value="317">{"Room 317 · PDLX · Vacant inspected"}</option>
                            <option value="318">{"Room 318 · PDLX · Occupied clean"}</option>
                            <option value="319">{"Room 319 · PDLX · Occupied clean"}</option>
                            <option value="401">{"Room 401 · PDLX · Occupied clean"}</option>
                            <option value="402">{"Room 402 · PDLX · Occupied clean"}</option>
                            <option value="403">{"Room 403 · PDLX · Occupied clean"}</option>
                            <option value="404">{"Room 404 · PDLX · Occupied clean"}</option>
                            <option value="405">{"Room 405 · PDLX · Vacant clean"}</option>
                            <option value="406">{"Room 406 · PDLX · Occupied clean"}</option>
                            <option value="407">{"Room 407 · PDLX · Occupied clean"}</option>
                            <option value="408">{"Room 408 · PDLX · Occupied clean"}</option>
                            <option value="409">{"Room 409 · PDLX · Occupied clean"}</option>
                            <option value="410">{"Room 410 · PDLX · Occupied dirty"}</option>
                            <option value="411">{"Room 411 · PDLX · Vacant inspected"}</option>
                            <option value="412">{"Room 412 · PDLX · Vacant inspected"}</option>
                            <option value="413">{"Room 413 · PDLX · Vacant inspected"}</option>
                            <option value="414">{"Room 414 · PDLX · Vacant inspected"}</option>
                            <option value="415">{"Room 415 · PDLX · Occupied clean"}</option>
                            <option value="416">{"Room 416 · PDLX · Occupied clean"}</option>
                            <option value="417">{"Room 417 · PDLX · Occupied clean"}</option>
                            <option value="418">{"Room 418 · PDLX · Vacant dirty"}</option>
                            <option value="501">{"Room 501 · PDLX · Occupied clean"}</option>
                            <option value="502">{"Room 502 · PDLX · Vacant dirty"}</option>
                            <option value="503">{"Room 503 · PDLX · Occupied clean"}</option>
                            <option value="504">{"Room 504 · PDLX · Occupied clean"}</option>
                            <option value="505">{"Room 505 · PDLX · Occupied clean"}</option>
                            <option value="506">{"Room 506 · PDLX · Occupied clean"}</option>
                            <option value="507">{"Room 507 · PDLX · Occupied clean"}</option>
                            <option value="508">{"Room 508 · PDLX · Occupied clean"}</option>
                            <option value="509">{"Room 509 · PDLX · Occupied clean"}</option>
                            <option value="510">{"Room 510 · PDLX · Occupied dirty"}</option>
                            <option value="511">{"Room 511 · PDLX · Occupied clean"}</option>
                            <option value="512">{"Room 512 · PDLX · Vacant dirty"}</option>
                            <option value="513">{"Room 513 · PDLX · Out of service"}</option>
                            <option value="514">{"Room 514 · DLXS · Occupied clean"}</option>
                            <option value="515">{"Room 515 · DLXS · Occupied clean"}</option>
                            <option value="516">{"Room 516 · DLXS · Occupied clean"}</option>
                            <option value="517">{"Room 517 · PRMS · Occupied clean"}</option>
                            <option value="Lobby">{"Public area · Lobby"}</option>
                            <option value="Restaurant">{"Public area · Restaurant"}</option>
                            <option value="Lifts">{"Public area · Lifts"}</option>
                            <option value="Corridors F1–F5">{"Public area · Corridors F1–F5"}</option>
                            <option value="Pool deck">{"Public area · Pool deck"}</option>
                            <option value="Public washrooms">{"Public area · Public washrooms"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Pre-filled with the current room when opened from a room; public areas from HKS-07."}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hk-p08-cat">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hk-p08-cat" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
                            <option>{"Electrical"}</option>
                            <option>{"Plumbing"}</option>
                            <option>{"HVAC"}</option>
                            <option>{"Carpentry"}</option>
                            <option>{"Civil / painting"}</option>
                            <option>{"IT / TV / Wi-Fi"}</option>
                            <option>{"Kitchen equipment"}</option>
                            <option>{"Laundry equipment"}</option>
                            <option>{"Lifts"}</option>
                            <option>{"Fire & safety"}</option>
                            <option>{"Pest control"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">
                          {"Trades and problem codes of Engineering Setup ("}
                          <Link className="fd-link" to={"/engineering-setup/mts-02-categories-and-problem-codes"}>{"MTS-02"}</Link>
                          {") – the problem sets the priority"}
                        </span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hk-p08-prob">
                          {"Problem "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hk-p08-prob" name="problem" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a problem"}</option>
                            <optgroup label="Electrical">
                              <option value="EL-01">{"Light fused (EL-01)"}</option>
                              <option value="EL-02">{"Socket loose (EL-02)"}</option>
                              <option value="EL-03">{"Switch broken (EL-03)"}</option>
                              <option value="EL-04">{"No power in room (EL-04)"}</option>
                              <option value="EL-05">{"Door lock battery (EL-05)"}</option>
                              <option value="EL-06">{"Safe not opening (EL-06)"}</option>
                            </optgroup>
                            <optgroup label="Plumbing">
                              <option value="PL-01">{"Tap leaking (PL-01)"}</option>
                              <option value="PL-02">{"WC flush not working (PL-02)"}</option>
                              <option value="PL-03">{"No hot water (PL-03)"}</option>
                              <option value="PL-04">{"Drain blocked (PL-04)"}</option>
                              <option value="PL-05">{"Low water pressure (PL-05)"}</option>
                              <option value="PL-06">{"Water leak / flooding (PL-06)"}</option>
                            </optgroup>
                            <optgroup label="HVAC">
                              <option value="AC-01">{"AC not cooling (AC-01)"}</option>
                              <option value="AC-02">{"AC noisy (AC-02)"}</option>
                              <option value="AC-03">{"AC water leaking (AC-03)"}</option>
                              <option value="AC-04">{"Kitchen exhaust weak (AC-04)"}</option>
                            </optgroup>
                            <optgroup label="Carpentry">
                              <option value="CP-01">{"Curtain track broken (CP-01)"}</option>
                              <option value="CP-02">{"Door not closing (CP-02)"}</option>
                              <option value="CP-03">{"Drawer / wardrobe hinge (CP-03)"}</option>
                              <option value="CP-04">{"Furniture broken (CP-04)"}</option>
                            </optgroup>
                            <optgroup label="Civil / painting">
                              <option value="CV-01">{"Seepage (CV-01)"}</option>
                              <option value="CV-02">{"Paint peeling (CV-02)"}</option>
                              <option value="CV-03">{"Tile or grout damaged (CV-03)"}</option>
                            </optgroup>
                            <optgroup label="IT / TV / Wi-Fi">
                              <option value="IT-01">{"TV no signal (IT-01)"}</option>
                              <option value="IT-02">{"Remote not working (IT-02)"}</option>
                              <option value="IT-03">{"Wi-Fi not working (IT-03)"}</option>
                            </optgroup>
                            <optgroup label="Kitchen equipment">
                              <option value="KE-01">{"Cold room temperature high (KE-01)"}</option>
                              <option value="KE-02">{"Dishwasher not working (KE-02)"}</option>
                            </optgroup>
                            <optgroup label="Laundry equipment">
                              <option value="LE-01">{"Washer not draining (LE-01)"}</option>
                            </optgroup>
                            <optgroup label="Lifts">
                              <option value="LT-01">{"Lift stuck (LT-01)"}</option>
                              <option value="LT-02">{"Lift noisy / jerky (LT-02)"}</option>
                            </optgroup>
                            <optgroup label="Fire & safety">
                              <option value="FS-01">{"Fire alarm sounding (FS-01)"}</option>
                              <option value="FS-02">{"Smoke detector beeping (FS-02)"}</option>
                            </optgroup>
                            <optgroup label="Pest control">
                              <option value="PC-01">{"Insects seen (PC-01)"}</option>
                              <option value="PC-02">{"Rodent sign (PC-02)"}</option>
                            </optgroup>
                            <option>{"Other – describe below"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hk-p08-txt">{"Describe the problem"}</label>
                        <textarea className="field__input" id="hk-p08-txt" name="text" rows="3" maxLength="250" defaultValue={""} />
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">
                          {"Priority "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="priority" value="low" required={true} />
                            <span className="check__box" />
                            {"Low"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="priority" value="normal" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Normal"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="priority" value="high" required={true} />
                            <span className="check__box" />
                            {"High"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="priority" value="emergency" required={true} />
                            <span className="check__box" />
                            {"Emergency"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <label className="field__label" htmlFor="hk-p08-ph">{"Photo (up to 3)"}</label>
                        <input className="field__input" id="hk-p08-ph" type="file" name="photo" accept="image/*" multiple={true} capture="environment" />
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">
                          {"Room usable? "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="usable" value="yes" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Yes – guest can stay / room can be sold"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="usable" value="no" required={true} />
                            <span className="check__box" />
                            {"No – needs out of order"}
                          </label>
                        </div>
                      </fieldset>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer fd-muted">{"If the room is not usable, continue to Out of Order (HK-P10)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn" type="submit" formAction="/housekeeping/hk-11-out-of-order-out-of-service/#hk-p10" data-leads-to="HK-P10">{"Submit and set out of order"}</button>
                    <button className="btn btn--primary" type="submit" data-leads-to="MT-03">{"Submit"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="p08-210" data-code="HK-P08-210" role="dialog" aria-modal="true" aria-labelledby="p08-210-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/engineering-and-maintenance/mt-02-work-queue/" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="p08-210-t">{"Raise work order"}</h2>
                      <p className="modal__desc">{"Report a repair need to Engineering. The work order opens in Engineering (MT-03) with status Open."}</p>
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
                        <span className="field__label">{"Room / location"}</span>
                        <div className="pr pr--show">
                          <span className="pr__no hk--vc">{"210"}</span>
                          <span className="pr__t">
                            <b>{"Room 210 · Garden Deluxe Room"}</b>
                            <small>{"Vacant clean · from the inspection"}</small>
                          </span>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="p08-210-cat">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="p08-210-cat" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
                            <option>{"Electrical"}</option>
                            <option>{"Plumbing"}</option>
                            <option>{"AC"}</option>
                            <option>{"Carpentry"}</option>
                            <option>{"IT / TV / Wi-Fi"}</option>
                            <option>{"Furniture"}</option>
                            <option>{"Painting"}</option>
                            <option>{"Civil"}</option>
                            <option>{"Pest"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">
                          {"Trades and problem codes of Engineering Setup ("}
                          <Link className="fd-link" to={"/engineering-setup/mts-02-categories-and-problem-codes"}>{"MTS-02"}</Link>
                          {") – the problem sets the priority"}
                        </span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="p08-210-prob">
                          {"Problem "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="p08-210-prob" name="problem" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a problem"}</option>
                            <optgroup label="Electrical">
                              <option>{"Light not working"}</option>
                              <option>{"Socket loose"}</option>
                              <option>{"Switch broken"}</option>
                            </optgroup>
                            <optgroup label="Plumbing">
                              <option>{"Tap dripping"}</option>
                              <option>{"Drain blocked"}</option>
                              <option>{"Flush not working"}</option>
                              <option>{"Low water pressure"}</option>
                            </optgroup>
                            <optgroup label="AC">
                              <option>{"Not cooling"}</option>
                              <option>{"Noisy"}</option>
                              <option>{"Water leaking"}</option>
                            </optgroup>
                            <optgroup label="Carpentry">
                              <option>{"Door not closing"}</option>
                              <option>{"Drawer broken"}</option>
                              <option>{"Wardrobe hinge"}</option>
                            </optgroup>
                            <optgroup label="TV / IT">
                              <option>{"TV no signal"}</option>
                              <option>{"Remote not working"}</option>
                              <option>{"Wi-Fi weak"}</option>
                            </optgroup>
                            <optgroup label="Furniture">
                              <option>{"Chair broken"}</option>
                              <option>{"Bed squeaks"}</option>
                            </optgroup>
                            <optgroup label="Painting">
                              <option>{"Wall stain"}</option>
                              <option>{"Paint peeling"}</option>
                            </optgroup>
                            <optgroup label="Civil">
                              <option>{"Tile cracked"}</option>
                              <option>{"Grout damaged"}</option>
                            </optgroup>
                            <optgroup label="Pest">
                              <option>{"Insects seen"}</option>
                              <option>{"Rodent sign"}</option>
                            </optgroup>
                            <option>{"Other – describe below"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="p08-210-txt">{"Describe the problem"}</label>
                        <textarea className="field__input" id="p08-210-txt" name="text" rows="3" maxLength="250" defaultValue={""} />
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">
                          {"Priority "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="priority" value="low" required={true} />
                            <span className="check__box" />
                            {"Low"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="priority" value="normal" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Normal"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="priority" value="high" required={true} />
                            <span className="check__box" />
                            {"High"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="priority" value="emergency" required={true} />
                            <span className="check__box" />
                            {"Emergency"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <label className="field__label" htmlFor="p08-210-ph">{"Photo (up to 3)"}</label>
                        <input className="field__input" id="p08-210-ph" type="file" name="photo" accept="image/*" multiple={true} capture="environment" />
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">
                          {"Room usable? "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="usable" value="yes" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Yes – guest can stay / room can be sold"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="usable" value="no" required={true} />
                            <span className="check__box" />
                            {"No – needs out of order"}
                          </label>
                        </div>
                      </fieldset>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer fd-muted">{"If the room is not usable, continue to Out of Order (HK-P10)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn" type="submit" formAction="/housekeeping/hk-11-out-of-order-out-of-service/#hk-p10" data-leads-to="HK-P10">{"Submit and set out of order"}</button>
                    <button className="btn btn--primary" type="submit" data-leads-to="MT-03">{"Submit"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="p08-215" data-code="HK-P08-215" role="dialog" aria-modal="true" aria-labelledby="p08-215-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/engineering-and-maintenance/mt-02-work-queue/" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="p08-215-t">{"Raise work order"}</h2>
                      <p className="modal__desc">{"Report a repair need to Engineering. The work order opens in Engineering (MT-03) with status Open."}</p>
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
                        <span className="field__label">{"Room / location"}</span>
                        <div className="pr pr--show">
                          <span className="pr__no hk--vc">{"215"}</span>
                          <span className="pr__t">
                            <b>{"Room 215 · Garden Deluxe Room"}</b>
                            <small>{"Vacant clean · from the inspection"}</small>
                          </span>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="p08-215-cat">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="p08-215-cat" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
                            <option>{"Electrical"}</option>
                            <option>{"Plumbing"}</option>
                            <option>{"AC"}</option>
                            <option>{"Carpentry"}</option>
                            <option>{"IT / TV / Wi-Fi"}</option>
                            <option>{"Furniture"}</option>
                            <option>{"Painting"}</option>
                            <option>{"Civil"}</option>
                            <option>{"Pest"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">
                          {"Trades and problem codes of Engineering Setup ("}
                          <Link className="fd-link" to={"/engineering-setup/mts-02-categories-and-problem-codes"}>{"MTS-02"}</Link>
                          {") – the problem sets the priority"}
                        </span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="p08-215-prob">
                          {"Problem "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="p08-215-prob" name="problem" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a problem"}</option>
                            <optgroup label="Electrical">
                              <option>{"Light not working"}</option>
                              <option>{"Socket loose"}</option>
                              <option>{"Switch broken"}</option>
                            </optgroup>
                            <optgroup label="Plumbing">
                              <option>{"Tap dripping"}</option>
                              <option>{"Drain blocked"}</option>
                              <option>{"Flush not working"}</option>
                              <option>{"Low water pressure"}</option>
                            </optgroup>
                            <optgroup label="AC">
                              <option>{"Not cooling"}</option>
                              <option>{"Noisy"}</option>
                              <option>{"Water leaking"}</option>
                            </optgroup>
                            <optgroup label="Carpentry">
                              <option>{"Door not closing"}</option>
                              <option>{"Drawer broken"}</option>
                              <option>{"Wardrobe hinge"}</option>
                            </optgroup>
                            <optgroup label="TV / IT">
                              <option>{"TV no signal"}</option>
                              <option>{"Remote not working"}</option>
                              <option>{"Wi-Fi weak"}</option>
                            </optgroup>
                            <optgroup label="Furniture">
                              <option>{"Chair broken"}</option>
                              <option>{"Bed squeaks"}</option>
                            </optgroup>
                            <optgroup label="Painting">
                              <option>{"Wall stain"}</option>
                              <option>{"Paint peeling"}</option>
                            </optgroup>
                            <optgroup label="Civil">
                              <option>{"Tile cracked"}</option>
                              <option>{"Grout damaged"}</option>
                            </optgroup>
                            <optgroup label="Pest">
                              <option>{"Insects seen"}</option>
                              <option>{"Rodent sign"}</option>
                            </optgroup>
                            <option>{"Other – describe below"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="p08-215-txt">{"Describe the problem"}</label>
                        <textarea className="field__input" id="p08-215-txt" name="text" rows="3" maxLength="250" defaultValue={""} />
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">
                          {"Priority "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="priority" value="low" required={true} />
                            <span className="check__box" />
                            {"Low"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="priority" value="normal" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Normal"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="priority" value="high" required={true} />
                            <span className="check__box" />
                            {"High"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="priority" value="emergency" required={true} />
                            <span className="check__box" />
                            {"Emergency"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <label className="field__label" htmlFor="p08-215-ph">{"Photo (up to 3)"}</label>
                        <input className="field__input" id="p08-215-ph" type="file" name="photo" accept="image/*" multiple={true} capture="environment" />
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">
                          {"Room usable? "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="usable" value="yes" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Yes – guest can stay / room can be sold"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="usable" value="no" required={true} />
                            <span className="check__box" />
                            {"No – needs out of order"}
                          </label>
                        </div>
                      </fieldset>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer fd-muted">{"If the room is not usable, continue to Out of Order (HK-P10)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn" type="submit" formAction="/housekeeping/hk-11-out-of-order-out-of-service/#hk-p10" data-leads-to="HK-P10">{"Submit and set out of order"}</button>
                    <button className="btn btn--primary" type="submit" data-leads-to="MT-03">{"Submit"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="p08-315" data-code="HK-P08-315" role="dialog" aria-modal="true" aria-labelledby="p08-315-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/engineering-and-maintenance/mt-02-work-queue/" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="p08-315-t">{"Raise work order"}</h2>
                      <p className="modal__desc">{"Report a repair need to Engineering. The work order opens in Engineering (MT-03) with status Open."}</p>
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
                        <span className="field__label">{"Room / location"}</span>
                        <div className="pr pr--show">
                          <span className="pr__no hk--vc">{"315"}</span>
                          <span className="pr__t">
                            <b>{"Room 315 · Pool Deluxe Room"}</b>
                            <small>{"Vacant clean · from the inspection"}</small>
                          </span>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="p08-315-cat">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="p08-315-cat" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
                            <option>{"Electrical"}</option>
                            <option>{"Plumbing"}</option>
                            <option>{"AC"}</option>
                            <option>{"Carpentry"}</option>
                            <option>{"IT / TV / Wi-Fi"}</option>
                            <option>{"Furniture"}</option>
                            <option>{"Painting"}</option>
                            <option>{"Civil"}</option>
                            <option>{"Pest"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">
                          {"Trades and problem codes of Engineering Setup ("}
                          <Link className="fd-link" to={"/engineering-setup/mts-02-categories-and-problem-codes"}>{"MTS-02"}</Link>
                          {") – the problem sets the priority"}
                        </span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="p08-315-prob">
                          {"Problem "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="p08-315-prob" name="problem" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a problem"}</option>
                            <optgroup label="Electrical">
                              <option>{"Light not working"}</option>
                              <option>{"Socket loose"}</option>
                              <option>{"Switch broken"}</option>
                            </optgroup>
                            <optgroup label="Plumbing">
                              <option>{"Tap dripping"}</option>
                              <option>{"Drain blocked"}</option>
                              <option>{"Flush not working"}</option>
                              <option>{"Low water pressure"}</option>
                            </optgroup>
                            <optgroup label="AC">
                              <option>{"Not cooling"}</option>
                              <option>{"Noisy"}</option>
                              <option>{"Water leaking"}</option>
                            </optgroup>
                            <optgroup label="Carpentry">
                              <option>{"Door not closing"}</option>
                              <option>{"Drawer broken"}</option>
                              <option>{"Wardrobe hinge"}</option>
                            </optgroup>
                            <optgroup label="TV / IT">
                              <option>{"TV no signal"}</option>
                              <option>{"Remote not working"}</option>
                              <option>{"Wi-Fi weak"}</option>
                            </optgroup>
                            <optgroup label="Furniture">
                              <option>{"Chair broken"}</option>
                              <option>{"Bed squeaks"}</option>
                            </optgroup>
                            <optgroup label="Painting">
                              <option>{"Wall stain"}</option>
                              <option>{"Paint peeling"}</option>
                            </optgroup>
                            <optgroup label="Civil">
                              <option>{"Tile cracked"}</option>
                              <option>{"Grout damaged"}</option>
                            </optgroup>
                            <optgroup label="Pest">
                              <option>{"Insects seen"}</option>
                              <option>{"Rodent sign"}</option>
                            </optgroup>
                            <option>{"Other – describe below"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="p08-315-txt">{"Describe the problem"}</label>
                        <textarea className="field__input" id="p08-315-txt" name="text" rows="3" maxLength="250" defaultValue={""} />
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">
                          {"Priority "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="priority" value="low" required={true} />
                            <span className="check__box" />
                            {"Low"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="priority" value="normal" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Normal"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="priority" value="high" required={true} />
                            <span className="check__box" />
                            {"High"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="priority" value="emergency" required={true} />
                            <span className="check__box" />
                            {"Emergency"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <label className="field__label" htmlFor="p08-315-ph">{"Photo (up to 3)"}</label>
                        <input className="field__input" id="p08-315-ph" type="file" name="photo" accept="image/*" multiple={true} capture="environment" />
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">
                          {"Room usable? "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="usable" value="yes" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Yes – guest can stay / room can be sold"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="usable" value="no" required={true} />
                            <span className="check__box" />
                            {"No – needs out of order"}
                          </label>
                        </div>
                      </fieldset>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer fd-muted">{"If the room is not usable, continue to Out of Order (HK-P10)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn" type="submit" formAction="/housekeeping/hk-11-out-of-order-out-of-service/#hk-p10" data-leads-to="HK-P10">{"Submit and set out of order"}</button>
                    <button className="btn btn--primary" type="submit" data-leads-to="MT-03">{"Submit"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="p08-405" data-code="HK-P08-405" role="dialog" aria-modal="true" aria-labelledby="p08-405-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/engineering-and-maintenance/mt-02-work-queue/" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="p08-405-t">{"Raise work order"}</h2>
                      <p className="modal__desc">{"Report a repair need to Engineering. The work order opens in Engineering (MT-03) with status Open."}</p>
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
                        <span className="field__label">{"Room / location"}</span>
                        <div className="pr pr--show">
                          <span className="pr__no hk--vc">{"405"}</span>
                          <span className="pr__t">
                            <b>{"Room 405 · Pool Deluxe Room"}</b>
                            <small>{"Vacant clean · from the inspection"}</small>
                          </span>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="p08-405-cat">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="p08-405-cat" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
                            <option>{"Electrical"}</option>
                            <option>{"Plumbing"}</option>
                            <option>{"AC"}</option>
                            <option>{"Carpentry"}</option>
                            <option>{"IT / TV / Wi-Fi"}</option>
                            <option>{"Furniture"}</option>
                            <option>{"Painting"}</option>
                            <option>{"Civil"}</option>
                            <option>{"Pest"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">
                          {"Trades and problem codes of Engineering Setup ("}
                          <Link className="fd-link" to={"/engineering-setup/mts-02-categories-and-problem-codes"}>{"MTS-02"}</Link>
                          {") – the problem sets the priority"}
                        </span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="p08-405-prob">
                          {"Problem "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="p08-405-prob" name="problem" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a problem"}</option>
                            <optgroup label="Electrical">
                              <option>{"Light not working"}</option>
                              <option>{"Socket loose"}</option>
                              <option>{"Switch broken"}</option>
                            </optgroup>
                            <optgroup label="Plumbing">
                              <option>{"Tap dripping"}</option>
                              <option>{"Drain blocked"}</option>
                              <option>{"Flush not working"}</option>
                              <option>{"Low water pressure"}</option>
                            </optgroup>
                            <optgroup label="AC">
                              <option>{"Not cooling"}</option>
                              <option>{"Noisy"}</option>
                              <option>{"Water leaking"}</option>
                            </optgroup>
                            <optgroup label="Carpentry">
                              <option>{"Door not closing"}</option>
                              <option>{"Drawer broken"}</option>
                              <option>{"Wardrobe hinge"}</option>
                            </optgroup>
                            <optgroup label="TV / IT">
                              <option>{"TV no signal"}</option>
                              <option>{"Remote not working"}</option>
                              <option>{"Wi-Fi weak"}</option>
                            </optgroup>
                            <optgroup label="Furniture">
                              <option>{"Chair broken"}</option>
                              <option>{"Bed squeaks"}</option>
                            </optgroup>
                            <optgroup label="Painting">
                              <option>{"Wall stain"}</option>
                              <option>{"Paint peeling"}</option>
                            </optgroup>
                            <optgroup label="Civil">
                              <option>{"Tile cracked"}</option>
                              <option>{"Grout damaged"}</option>
                            </optgroup>
                            <optgroup label="Pest">
                              <option>{"Insects seen"}</option>
                              <option>{"Rodent sign"}</option>
                            </optgroup>
                            <option>{"Other – describe below"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="p08-405-txt">{"Describe the problem"}</label>
                        <textarea className="field__input" id="p08-405-txt" name="text" rows="3" maxLength="250" defaultValue={""} />
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">
                          {"Priority "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="priority" value="low" required={true} />
                            <span className="check__box" />
                            {"Low"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="priority" value="normal" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Normal"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="priority" value="high" required={true} />
                            <span className="check__box" />
                            {"High"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="priority" value="emergency" required={true} />
                            <span className="check__box" />
                            {"Emergency"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <label className="field__label" htmlFor="p08-405-ph">{"Photo (up to 3)"}</label>
                        <input className="field__input" id="p08-405-ph" type="file" name="photo" accept="image/*" multiple={true} capture="environment" />
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">
                          {"Room usable? "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="usable" value="yes" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Yes – guest can stay / room can be sold"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="usable" value="no" required={true} />
                            <span className="check__box" />
                            {"No – needs out of order"}
                          </label>
                        </div>
                      </fieldset>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer fd-muted">{"If the room is not usable, continue to Out of Order (HK-P10)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn" type="submit" formAction="/housekeeping/hk-11-out-of-order-out-of-service/#hk-p10" data-leads-to="HK-P10">{"Submit and set out of order"}</button>
                    <button className="btn btn--primary" type="submit" data-leads-to="MT-03">{"Submit"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="p08-302" data-code="HK-P08-302" role="dialog" aria-modal="true" aria-labelledby="p08-302-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/engineering-and-maintenance/mt-02-work-queue/" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="p08-302-t">{"Raise work order"}</h2>
                      <p className="modal__desc">{"Report a repair need to Engineering. The work order opens in Engineering (MT-03) with status Open."}</p>
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
                        <span className="field__label">{"Room / location"}</span>
                        <div className="pr pr--show">
                          <span className="pr__no hk--vi">{"302"}</span>
                          <span className="pr__t">
                            <b>{"Room 302 · Garden Deluxe Room"}</b>
                            <small>{"Vacant inspected · from the inspection"}</small>
                          </span>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="p08-302-cat">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="p08-302-cat" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
                            <option>{"Electrical"}</option>
                            <option>{"Plumbing"}</option>
                            <option>{"AC"}</option>
                            <option>{"Carpentry"}</option>
                            <option>{"IT / TV / Wi-Fi"}</option>
                            <option>{"Furniture"}</option>
                            <option>{"Painting"}</option>
                            <option>{"Civil"}</option>
                            <option>{"Pest"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">
                          {"Trades and problem codes of Engineering Setup ("}
                          <Link className="fd-link" to={"/engineering-setup/mts-02-categories-and-problem-codes"}>{"MTS-02"}</Link>
                          {") – the problem sets the priority"}
                        </span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="p08-302-prob">
                          {"Problem "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="p08-302-prob" name="problem" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a problem"}</option>
                            <optgroup label="Electrical">
                              <option>{"Light not working"}</option>
                              <option>{"Socket loose"}</option>
                              <option>{"Switch broken"}</option>
                            </optgroup>
                            <optgroup label="Plumbing">
                              <option>{"Tap dripping"}</option>
                              <option>{"Drain blocked"}</option>
                              <option>{"Flush not working"}</option>
                              <option>{"Low water pressure"}</option>
                            </optgroup>
                            <optgroup label="AC">
                              <option>{"Not cooling"}</option>
                              <option>{"Noisy"}</option>
                              <option>{"Water leaking"}</option>
                            </optgroup>
                            <optgroup label="Carpentry">
                              <option>{"Door not closing"}</option>
                              <option>{"Drawer broken"}</option>
                              <option>{"Wardrobe hinge"}</option>
                            </optgroup>
                            <optgroup label="TV / IT">
                              <option>{"TV no signal"}</option>
                              <option>{"Remote not working"}</option>
                              <option>{"Wi-Fi weak"}</option>
                            </optgroup>
                            <optgroup label="Furniture">
                              <option>{"Chair broken"}</option>
                              <option>{"Bed squeaks"}</option>
                            </optgroup>
                            <optgroup label="Painting">
                              <option>{"Wall stain"}</option>
                              <option>{"Paint peeling"}</option>
                            </optgroup>
                            <optgroup label="Civil">
                              <option>{"Tile cracked"}</option>
                              <option>{"Grout damaged"}</option>
                            </optgroup>
                            <optgroup label="Pest">
                              <option>{"Insects seen"}</option>
                              <option>{"Rodent sign"}</option>
                            </optgroup>
                            <option>{"Other – describe below"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="p08-302-txt">{"Describe the problem"}</label>
                        <textarea className="field__input" id="p08-302-txt" name="text" rows="3" maxLength="250" defaultValue={""} />
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">
                          {"Priority "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="priority" value="low" required={true} />
                            <span className="check__box" />
                            {"Low"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="priority" value="normal" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Normal"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="priority" value="high" required={true} />
                            <span className="check__box" />
                            {"High"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="priority" value="emergency" required={true} />
                            <span className="check__box" />
                            {"Emergency"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <label className="field__label" htmlFor="p08-302-ph">{"Photo (up to 3)"}</label>
                        <input className="field__input" id="p08-302-ph" type="file" name="photo" accept="image/*" multiple={true} capture="environment" />
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">
                          {"Room usable? "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="usable" value="yes" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Yes – guest can stay / room can be sold"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="usable" value="no" required={true} />
                            <span className="check__box" />
                            {"No – needs out of order"}
                          </label>
                        </div>
                      </fieldset>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer fd-muted">{"If the room is not usable, continue to Out of Order (HK-P10)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn" type="submit" formAction="/housekeeping/hk-11-out-of-order-out-of-service/#hk-p10" data-leads-to="HK-P10">{"Submit and set out of order"}</button>
                    <button className="btn btn--primary" type="submit" data-leads-to="MT-03">{"Submit"}</button>
                  </div>
                </form>
              </div>
              <div className="hb-mks" aria-hidden="true">
                <i className="pm" id="draft-210" />
                <i className="pm" id="draft-215" />
                <i className="pm" id="draft-315" />
                <i className="pm" id="draft-405" />
                <i className="pm" id="draft-302" />
                <i className="pm" id="draft-308" />
              </div>
              <div className="fd-toast" id="t-draft" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#pen-line" />
                </svg>
                <div className="fd-toast__text">
                  {"Draft saved"}
                  <small>{"Your answers are kept – finish the checklist later from the inspection queue. No result yet."}</small>
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
