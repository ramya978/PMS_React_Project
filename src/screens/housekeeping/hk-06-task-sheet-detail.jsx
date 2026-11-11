// GENERATED from public/housekeeping/hk-06-task-sheet-detail/index.html by scripts/convert_legacy.py.
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
    "href": "/housekeeping/hk-06-task-sheet-detail/hk-06-task-sheet-detail.css",
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

export default function HousekeepingHk06TaskSheetDetail() {
  return (
    <ScreenShell title="Task Sheet Detail" sheets={SHEETS} inlineCss={INLINE_CSS}>
      <div data-screen="HK-06" data-code="HK-06" data-static="1" className="legacy-body">
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
            <main className="app__content" id="main" data-code="HK-06" tabIndex="-1">
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
                        <Link to={"/housekeeping/hk-05-task-sheets"}>{"Task Sheets"}</Link>
                      </li>
                      <li>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-right" />
                        </svg>
                        <span aria-current="page">{"Task Sheet Detail"}</span>
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="page-header__row">
                  <div className="page-header__text">
                    <h1 className="page-header__title">{"Task Sheet Detail"}</h1>
                  </div>
                  <span className="code-chip" title="Screen code">{"HK-06"}</span>
                  <div className="page-header__actions">
                    <a className="btn" href="#hk06-add" data-flow="opener">{"Add room to this sheet"}</a>
                    <a className="btn" href="#hk06-rm" data-flow="opener">{"Remove room from the sheet"}</a>
                    <details className="rd-jump">
                      <summary className="btn">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#users" />
                        </svg>
                        {"Other sheets"}
                      </summary>
                      <nav className="rd-jump__g ts-jump" aria-label="Open another sheet">
                        <a className="rd-jump__a" href="#TS-20261022-01">{"01 · Anitha"}</a>
                        <a className="rd-jump__a" href="#TS-20261022-02">{"02 · Remya"}</a>
                        <a className="rd-jump__a" href="#TS-20261022-03">{"03 · Divya"}</a>
                        <a className="rd-jump__a" href="#TS-20261022-04">{"04 · Mariamma"}</a>
                        <a className="rd-jump__a" href="#TS-20261022-05">{"05 · Shiny"}</a>
                        <a className="rd-jump__a" href="#TS-20261022-06">{"06 · Jincy"}</a>
                        <a className="rd-jump__a" href="#TS-20261022-07">{"07 · Rekha"}</a>
                        <a className="rd-jump__a" href="#TS-20261022-08">{"08 · Lissy"}</a>
                        <a className="rd-jump__a" href="#TS-20261022-09">{"09 · Saritha"}</a>
                        <a className="rd-jump__a" href="#TS-20261022-10">{"10 · Rani"}</a>
                        <a className="rd-jump__a" href="#TS-20261022-11">{"11 · Leena"}</a>
                      </nav>
                    </details>
                    <Link className="btn pb-back" data-leads-to="HK-O01" to={"/housekeeping/hk-o01-attendant-task-sheet"}>
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#printer" />
                      </svg>
                      {"Print"}
                    </Link>
                    <Link className="btn" data-leads-to="HK-05" to={"/housekeeping/hk-05-task-sheets"}>
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#arrow-left" />
                      </svg>
                      {"Back to task sheets"}
                    </Link>
                  </div>
                </div>
              </header>
              <p className="field__hint" data-flow="hk06-qr">{"If the phone app setting is on, the attendant scans the room QR code to start (HKS-14)."}</p>
              <div className="tsd" data-code="HK-06-view">
                <article className="ts" id="TS-20261022-01" aria-label="Task sheet TS-20261022-01">
                  <i className="ts-mk" id="TS-20261022-01-reordered" />
                  <i className="ts-mk" id="TS-20261022-01-added" />
                  <i className="ts-mk" id="TS-20261022-01-removed" />
                  <i className="ts-mk" id="TS-20261022-01-moved" />
                  <section className="ts-hero">
                    <span className="ts-hero__av">{"AP"}</span>
                    <div className="ts-hero__who">
                      <span className="ts-kick">{"TS-20261022-01 · 22 Oct 2026 · Morning 07:00–15:30"}</span>
                      <h2 className="ts-hero__t">{"Anitha P"}</h2>
                      <ul className="rd-facts">
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#map-pin" />
                          </svg>
                          {"S1"}
                        </li>
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#smartphone" />
                          </svg>
                          {"Phone 08"}
                        </li>
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#message-circle" />
                          </svg>
                          {"Malayalam, English"}
                        </li>
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"On duty 2 h 42 min"}
                        </li>
                      </ul>
                    </div>
                    <div className="ts-hero__nums">
                      <div>
                        <b className="num">
                          {"5"}
                          <small>{"/6"}</small>
                        </b>
                        <span>{"rooms done"}</span>
                      </div>
                      <div>
                        <b className="num">
                          {"3.0"}
                          <small>{"/4.0"}</small>
                        </b>
                        <span>{"credits"}</span>
                      </div>
                      <div>
                        <b className="num">{"18"}</b>
                        <span>{"avg min / room"}</span>
                      </div>
                      <div>
                        <span className="pill pill--dirty">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"In progress"}
                        </span>
                        <span>{"sheet status"}</span>
                      </div>
                    </div>
                    <span className="ts-hero__bar" aria-hidden="true">
                      <i style={{"width": "75%"}} />
                    </span>
                  </section>
                  <p className="ts-msg">
                    <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#info" />
                    </svg>
                    <b>{"Message:"}</b>
                    {" Fire drill at 11:00 – all attendants gather at the lobby."}
                  </p>
                  <div className="ts-body">
                    <section className="ts-list" aria-label="Rooms in order">
                      <header className="ts-list__h">
                        <h3>{"Rooms in order"}</h3>
                        <span className="fd-muted">{"Use the arrows to re-order – the phone list updates."}</span>
                        <a className="btn btn--sm" href="#add-TS-20261022-01">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#plus" />
                          </svg>
                          {"Add room"}
                        </a>
                      </header>
                      <ol className="ts-lines">
                        <li className="tsl tsl--ip">
                          <span className="tsl__n num">{"1"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-01-reordered" aria-label="Move room 111 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-01-reordered" aria-label="Move room 111 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-111">
                              <b>{"111"}</b>
                            </a>
                            <span>{"GDLX · Departure clean"}</span>
                            <small>{"1.0 cr · std 30 min"}</small>
                          </div>
                          <div className="tsl__g">{"Arrival 16:00 · Mueller · VIP 1"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"In progress"}
                            </span>
                            <small>
                              {"09:31 → now · "}
                              <span className="tsl__m">{"11 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"–"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"2"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-01-reordered" aria-label="Move room 101 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-01-reordered" aria-label="Move room 101 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-101">
                              <b>{"101"}</b>
                            </a>
                            <span>{"GDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departs 26 Oct"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"07:17 → 07:37 · "}
                              <span className="tsl__m is-over">{"20 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"3"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-01-reordered" aria-label="Move room 104 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-01-reordered" aria-label="Move room 104 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-104">
                              <b>{"104"}</b>
                            </a>
                            <span>{"GDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departs 25 Oct"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"07:30 → 07:53 · "}
                              <span className="tsl__m is-over">{"23 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"4"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-01-reordered" aria-label="Move room 107 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-01-reordered" aria-label="Move room 107 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-107">
                              <b>{"107"}</b>
                            </a>
                            <span>{"GDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departs 23 Oct · Linen change due"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"07:52 → 08:09 · "}
                              <span className="tsl__m">{"17 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up · bed linen set ×1"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"5"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-01-reordered" aria-label="Move room 109 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-01-reordered" aria-label="Move room 109 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-109">
                              <b>{"109"}</b>
                            </a>
                            <span>{"GDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departs 25 Oct"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"07:26 → 07:48 · "}
                              <span className="tsl__m is-over">{"22 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"6"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-01-reordered" aria-label="Move room 113 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-01-reordered" aria-label="Move room 113 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-113">
                              <b>{"113"}</b>
                            </a>
                            <span>{"GDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departs 24 Oct · Linen change due"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"07:00 → 07:06 · "}
                              <span className="tsl__m">{"6 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up · bed linen set ×1"}</small>
                            <small className="tsl__rem">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#message-square" />
                              </svg>
                              {"Minibar: 2 soft drinks used (MB-1053)"}
                            </small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                      </ol>
                    </section>
                    <aside className="ts-side" aria-label="Selected room">
                      <span className="ts-kick ts-kick--ink">{"Selected room"}</span>
                      <div className="ts-side__h">
                        <span className="pr__no hk--vd">{"111"}</span>
                        <div>
                          <b>{"Departure clean"}</b>
                          <small>{"GDLX · Vacant dirty · In progress"}</small>
                        </div>
                      </div>
                      <dl className="rd-dl">
                        <div>
                          <dt>{"Guest"}</dt>
                          <dd>{"Mueller"}</dd>
                        </div>
                        <div>
                          <dt>{"Info"}</dt>
                          <dd>{"Arrival 16:00 · Mueller · VIP 1"}</dd>
                        </div>
                        <div>
                          <dt>{"Times"}</dt>
                          <dd>{"09:31 · 11 min"}</dd>
                        </div>
                        <div>
                          <dt>{"Standard"}</dt>
                          <dd>{"30 min · 1.0 credits"}</dd>
                        </div>
                        <div>
                          <dt>{"Supplies"}</dt>
                          <dd>{"–"}</dd>
                        </div>
                      </dl>
                      <a className="fd-link" href="/housekeeping/hk-03-room-detail/#room-111" data-leads-to="HK-03">{"Open room 111 →"}</a>
                    </aside>
                  </div>
                </article>
                <article className="ts" id="TS-20261022-02" aria-label="Task sheet TS-20261022-02">
                  <i className="ts-mk" id="TS-20261022-02-reordered" />
                  <i className="ts-mk" id="TS-20261022-02-added" />
                  <i className="ts-mk" id="TS-20261022-02-removed" />
                  <i className="ts-mk" id="TS-20261022-02-moved" />
                  <section className="ts-hero">
                    <span className="ts-hero__av">{"RK"}</span>
                    <div className="ts-hero__who">
                      <span className="ts-kick">{"TS-20261022-02 · 22 Oct 2026 · Morning 07:00–15:30"}</span>
                      <h2 className="ts-hero__t">{"Remya K"}</h2>
                      <ul className="rd-facts">
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#map-pin" />
                          </svg>
                          {"S1"}
                        </li>
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#smartphone" />
                          </svg>
                          {"Phone 09"}
                        </li>
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#message-circle" />
                          </svg>
                          {"Malayalam"}
                        </li>
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"On duty 2 h 42 min"}
                        </li>
                      </ul>
                    </div>
                    <div className="ts-hero__nums">
                      <div>
                        <b className="num">
                          {"4"}
                          <small>{"/5"}</small>
                        </b>
                        <span>{"rooms done"}</span>
                      </div>
                      <div>
                        <b className="num">
                          {"2.4"}
                          <small>{"/3.0"}</small>
                        </b>
                        <span>{"credits"}</span>
                      </div>
                      <div>
                        <b className="num">{"16"}</b>
                        <span>{"avg min / room"}</span>
                      </div>
                      <div>
                        <span className="pill pill--dirty">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"In progress"}
                        </span>
                        <span>{"sheet status"}</span>
                      </div>
                    </div>
                    <span className="ts-hero__bar" aria-hidden="true">
                      <i style={{"width": "80%"}} />
                    </span>
                  </section>
                  <p className="ts-msg">
                    <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#info" />
                    </svg>
                    <b>{"Message:"}</b>
                    {" Fire drill at 11:00 – all attendants gather at the lobby."}
                  </p>
                  <div className="ts-body">
                    <section className="ts-list" aria-label="Rooms in order">
                      <header className="ts-list__h">
                        <h3>{"Rooms in order"}</h3>
                        <span className="fd-muted">{"Use the arrows to re-order – the phone list updates."}</span>
                        <a className="btn btn--sm" href="#add-TS-20261022-02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#plus" />
                          </svg>
                          {"Add room"}
                        </a>
                      </header>
                      <ol className="ts-lines">
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"1"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-02-reordered" aria-label="Move room 103 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-02-reordered" aria-label="Move room 103 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-103">
                              <b>{"103"}</b>
                            </a>
                            <span>{"GDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departs 24 Oct"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"07:00 → 07:16 · "}
                              <span className="tsl__m">{"16 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"2"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-02-reordered" aria-label="Move room 105 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-02-reordered" aria-label="Move room 105 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-105">
                              <b>{"105"}</b>
                            </a>
                            <span>{"GDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departs 24 Oct"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"08:09 → 08:30 · "}
                              <span className="tsl__m is-over">{"21 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"3"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-02-reordered" aria-label="Move room 108 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-02-reordered" aria-label="Move room 108 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-108">
                              <b>{"108"}</b>
                            </a>
                            <span>{"GDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departs 25 Oct · Green choice – no linen change"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"07:00 → 07:11 · "}
                              <span className="tsl__m">{"11 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ns">
                          <span className="tsl__n num">{"4"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-02-reordered" aria-label="Move room 110 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-02-reordered" aria-label="Move room 110 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-110">
                              <b>{"110"}</b>
                            </a>
                            <span>{"GDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departs 25 Oct"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#play" />
                              </svg>
                              {"Not started"}
                            </span>
                          </div>
                          <div className="tsl__sup">
                            <small>{"–"}</small>
                            <small className="tsl__rem">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#message-square" />
                              </svg>
                              {"Guest in room – back at 11:00"}
                            </small>
                          </div>
                          <div className="tsl__a">
                            <a className="btn btn--sm" href="/housekeeping/hk-02-room-status-board/#p18-110" data-leads-to="HK-P18">{"Reassign"}</a>
                            <a className="btn btn--sm" href="#rm-110" aria-label="Remove room 110">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#trash" />
                              </svg>
                            </a>
                          </div>
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"5"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-02-reordered" aria-label="Move room 112 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-02-reordered" aria-label="Move room 112 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-112">
                              <b>{"112"}</b>
                            </a>
                            <span>{"GDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departs 24 Oct"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"07:48 → 08:04 · "}
                              <span className="tsl__m">{"16 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                      </ol>
                    </section>
                    <aside className="ts-side" aria-label="Selected room">
                      <span className="ts-kick ts-kick--ink">{"Selected room"}</span>
                      <div className="ts-side__h">
                        <span className="pr__no hk--od">{"110"}</span>
                        <div>
                          <b>{"Stayover"}</b>
                          <small>{"GDLX · Occupied dirty · Not started"}</small>
                        </div>
                      </div>
                      <dl className="rd-dl">
                        <div>
                          <dt>{"Guest"}</dt>
                          <dd>{"Kabir"}</dd>
                        </div>
                        <div>
                          <dt>{"Info"}</dt>
                          <dd>{"Departs 25 Oct"}</dd>
                        </div>
                        <div>
                          <dt>{"Times"}</dt>
                          <dd>{"–"}</dd>
                        </div>
                        <div>
                          <dt>{"Standard"}</dt>
                          <dd>{"18 min · 0.6 credits"}</dd>
                        </div>
                        <div>
                          <dt>{"Supplies"}</dt>
                          <dd>{"–"}</dd>
                        </div>
                      </dl>
                      <a className="fd-link" href="/housekeeping/hk-03-room-detail/#room-110" data-leads-to="HK-03">{"Open room 110 →"}</a>
                    </aside>
                  </div>
                </article>
                <article className="ts" id="TS-20261022-03" aria-label="Task sheet TS-20261022-03">
                  <i className="ts-mk" id="TS-20261022-03-reordered" />
                  <i className="ts-mk" id="TS-20261022-03-added" />
                  <i className="ts-mk" id="TS-20261022-03-removed" />
                  <i className="ts-mk" id="TS-20261022-03-moved" />
                  <section className="ts-hero">
                    <span className="ts-hero__av">{"DM"}</span>
                    <div className="ts-hero__who">
                      <span className="ts-kick">{"TS-20261022-03 · 22 Oct 2026 · Morning 07:00–15:30"}</span>
                      <h2 className="ts-hero__t">{"Divya M"}</h2>
                      <ul className="rd-facts">
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#map-pin" />
                          </svg>
                          {"S2"}
                        </li>
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#smartphone" />
                          </svg>
                          {"Phone 10"}
                        </li>
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#message-circle" />
                          </svg>
                          {"Malayalam, Hindi"}
                        </li>
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"On duty 2 h 42 min"}
                        </li>
                      </ul>
                    </div>
                    <div className="ts-hero__nums">
                      <div>
                        <b className="num">
                          {"6"}
                          <small>{"/9"}</small>
                        </b>
                        <span>{"rooms done"}</span>
                      </div>
                      <div>
                        <b className="num">
                          {"3.6"}
                          <small>{"/7.1"}</small>
                        </b>
                        <span>{"credits incl. 0.5 travel"}</span>
                      </div>
                      <div>
                        <b className="num">{"18"}</b>
                        <span>{"avg min / room"}</span>
                      </div>
                      <div>
                        <span className="pill pill--dirty">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"In progress"}
                        </span>
                        <span>{"sheet status"}</span>
                      </div>
                    </div>
                    <span className="ts-hero__bar" aria-hidden="true">
                      <i style={{"width": "51%"}} />
                    </span>
                  </section>
                  <p className="ts-msg">
                    <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#info" />
                    </svg>
                    <b>{"Message:"}</b>
                    {" Fire drill at 11:00 – all attendants gather at the lobby."}
                  </p>
                  <div className="ts-body">
                    <section className="ts-list" aria-label="Rooms in order">
                      <header className="ts-list__h">
                        <h3>{"Rooms in order"}</h3>
                        <span className="fd-muted">{"Use the arrows to re-order – the phone list updates."}</span>
                        <a className="btn btn--sm" href="#add-TS-20261022-03">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#plus" />
                          </svg>
                          {"Add room"}
                        </a>
                      </header>
                      <ol className="ts-lines">
                        <li className="tsl tsl--ns">
                          <span className="tsl__n num">{"1"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-03-reordered" aria-label="Move room 205 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-03-reordered" aria-label="Move room 205 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-205">
                              <b>{"205"}</b>
                            </a>
                            <span>{"GDLX · Departure clean"}</span>
                            <small>{"1.0 cr · std 30 min"}</small>
                          </div>
                          <div className="tsl__g">{"Arrival today · Schneider"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#play" />
                              </svg>
                              {"Not started"}
                            </span>
                          </div>
                          <div className="tsl__sup">
                            <small>{"–"}</small>
                          </div>
                          <div className="tsl__a">
                            <a className="btn btn--sm" href="/housekeeping/hk-02-room-status-board/#p18-205" data-leads-to="HK-P18">{"Reassign"}</a>
                            <a className="btn btn--sm" href="#rm-205" aria-label="Remove room 205">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#trash" />
                              </svg>
                            </a>
                          </div>
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"2"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-03-reordered" aria-label="Move room 114 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-03-reordered" aria-label="Move room 114 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-114">
                              <b>{"114"}</b>
                            </a>
                            <span>{"GDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departs 25 Oct · Linen change due"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"07:22 → 07:43 · "}
                              <span className="tsl__m is-over">{"21 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up · bed linen set ×1"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"3"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-03-reordered" aria-label="Move room 115 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-03-reordered" aria-label="Move room 115 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-115">
                              <b>{"115"}</b>
                            </a>
                            <span>{"GDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departs 23 Oct · Linen change due"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"08:01 → 08:20 · "}
                              <span className="tsl__m is-over">{"19 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up · bed linen set ×1"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"4"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-03-reordered" aria-label="Move room 116 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-03-reordered" aria-label="Move room 116 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-116">
                              <b>{"116"}</b>
                            </a>
                            <span>{"GDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departs 26 Oct"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"07:05 → 07:22 · "}
                              <span className="tsl__m">{"17 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ip">
                          <span className="tsl__n num">{"5"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-03-reordered" aria-label="Move room 118 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-03-reordered" aria-label="Move room 118 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-118">
                              <b>{"118"}</b>
                            </a>
                            <span>{"GDLX · Departure clean"}</span>
                            <small>{"1.0 cr · std 30 min"}</small>
                          </div>
                          <div className="tsl__g">{"–"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"In progress"}
                            </span>
                            <small>
                              {"09:28 → now · "}
                              <span className="tsl__m">{"14 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"–"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"6"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-03-reordered" aria-label="Move room 119 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-03-reordered" aria-label="Move room 119 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-119">
                              <b>{"119"}</b>
                            </a>
                            <span>{"GDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departs 25 Oct"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"07:18 → 07:38 · "}
                              <span className="tsl__m is-over">{"20 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"7"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-03-reordered" aria-label="Move room 201 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-03-reordered" aria-label="Move room 201 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-201">
                              <b>{"201"}</b>
                            </a>
                            <span>{"GDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departs 24 Oct"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"07:14 → 07:32 · "}
                              <span className="tsl__m">{"18 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"8"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-03-reordered" aria-label="Move room 202 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-03-reordered" aria-label="Move room 202 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-202">
                              <b>{"202"}</b>
                            </a>
                            <span>{"GDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departs 25 Oct · Linen change due"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"07:53 → 08:09 · "}
                              <span className="tsl__m">{"16 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up · bed linen set ×1"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ns">
                          <span className="tsl__n num">{"9"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-03-reordered" aria-label="Move room 207 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-03-reordered" aria-label="Move room 207 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-207">
                              <b>{"207"}</b>
                            </a>
                            <span>{"GDLX · Departure clean"}</span>
                            <small>{"1.0 cr · std 30 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departs 22 Oct"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#play" />
                              </svg>
                              {"Not started"}
                            </span>
                          </div>
                          <div className="tsl__sup">
                            <small>{"–"}</small>
                          </div>
                          <div className="tsl__a">
                            <a className="btn btn--sm" href="/housekeeping/hk-02-room-status-board/#p18-207" data-leads-to="HK-P18">{"Reassign"}</a>
                            <a className="btn btn--sm" href="#rm-207" aria-label="Remove room 207">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#trash" />
                              </svg>
                            </a>
                          </div>
                        </li>
                      </ol>
                    </section>
                    <aside className="ts-side" aria-label="Selected room">
                      <span className="ts-kick ts-kick--ink">{"Selected room"}</span>
                      <div className="ts-side__h">
                        <span className="pr__no hk--vd">{"118"}</span>
                        <div>
                          <b>{"Departure clean"}</b>
                          <small>{"GDLX · Vacant dirty · In progress"}</small>
                        </div>
                      </div>
                      <dl className="rd-dl">
                        <div>
                          <dt>{"Guest"}</dt>
                          <dd>{"–"}</dd>
                        </div>
                        <div>
                          <dt>{"Info"}</dt>
                          <dd>{"–"}</dd>
                        </div>
                        <div>
                          <dt>{"Times"}</dt>
                          <dd>{"09:28 · 14 min"}</dd>
                        </div>
                        <div>
                          <dt>{"Standard"}</dt>
                          <dd>{"30 min · 1.0 credits"}</dd>
                        </div>
                        <div>
                          <dt>{"Supplies"}</dt>
                          <dd>{"–"}</dd>
                        </div>
                      </dl>
                      <a className="fd-link" href="/housekeeping/hk-03-room-detail/#room-118" data-leads-to="HK-03">{"Open room 118 →"}</a>
                    </aside>
                  </div>
                </article>
                <article className="ts" id="TS-20261022-04" aria-label="Task sheet TS-20261022-04">
                  <i className="ts-mk" id="TS-20261022-04-reordered" />
                  <i className="ts-mk" id="TS-20261022-04-added" />
                  <i className="ts-mk" id="TS-20261022-04-removed" />
                  <i className="ts-mk" id="TS-20261022-04-moved" />
                  <section className="ts-hero">
                    <span className="ts-hero__av">{"MV"}</span>
                    <div className="ts-hero__who">
                      <span className="ts-kick">{"TS-20261022-04 · 22 Oct 2026 · Morning 07:00–15:30"}</span>
                      <h2 className="ts-hero__t">{"Mariamma Varghese"}</h2>
                      <ul className="rd-facts">
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#map-pin" />
                          </svg>
                          {"S3"}
                        </li>
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#smartphone" />
                          </svg>
                          {"Phone 06"}
                        </li>
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#message-circle" />
                          </svg>
                          {"Malayalam, English"}
                        </li>
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"On duty 2 h 42 min"}
                        </li>
                      </ul>
                    </div>
                    <div className="ts-hero__nums">
                      <div>
                        <b className="num">
                          {"9"}
                          <small>{"/12"}</small>
                        </b>
                        <span>{"rooms done"}</span>
                      </div>
                      <div>
                        <b className="num">
                          {"6.2"}
                          <small>{"/9.3"}</small>
                        </b>
                        <span>{"credits incl. 0.5 travel"}</span>
                      </div>
                      <div>
                        <b className="num">{"22"}</b>
                        <span>{"avg min / room"}</span>
                      </div>
                      <div>
                        <span className="pill pill--dirty">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"In progress"}
                        </span>
                        <span>{"sheet status"}</span>
                      </div>
                    </div>
                    <span className="ts-hero__bar" aria-hidden="true">
                      <i style={{"width": "67%"}} />
                    </span>
                  </section>
                  <p className="ts-msg">
                    <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#info" />
                    </svg>
                    <b>{"Message:"}</b>
                    {" Fire drill at 11:00 – all attendants gather at the lobby."}
                  </p>
                  <div className="ts-body">
                    <section className="ts-list" aria-label="Rooms in order">
                      <header className="ts-list__h">
                        <h3>{"Rooms in order"}</h3>
                        <span className="fd-muted">{"Use the arrows to re-order – the phone list updates."}</span>
                        <a className="btn btn--sm" href="#add-TS-20261022-04">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#plus" />
                          </svg>
                          {"Add room"}
                        </a>
                      </header>
                      <ol className="ts-lines">
                        <li className="tsl tsl--pa">
                          <span className="tsl__n num">{"1"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-04-reordered" aria-label="Move room 208 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-04-reordered" aria-label="Move room 208 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-208">
                              <b>{"208"}</b>
                            </a>
                            <span>{"GDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departs 26 Oct"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pause" />
                              </svg>
                              {"Paused – DND"}
                            </span>
                          </div>
                          <div className="tsl__sup">
                            <small>{"–"}</small>
                            <small className="tsl__rem">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#message-square" />
                              </svg>
                              {"DND – service later"}
                            </small>
                          </div>
                          <div className="tsl__a">
                            <a className="btn btn--sm" href="/housekeeping/hk-02-room-status-board/#p18-208" data-leads-to="HK-P18">{"Reassign"}</a>
                            <a className="btn btn--sm" href="#rm-208" aria-label="Remove room 208">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#trash" />
                              </svg>
                            </a>
                          </div>
                        </li>
                        <li className="tsl tsl--ip">
                          <span className="tsl__n num">{"2"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-04-reordered" aria-label="Move room 209 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-04-reordered" aria-label="Move room 209 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-209">
                              <b>{"209"}</b>
                            </a>
                            <span>{"GDLX · Departure clean"}</span>
                            <small>{"1.0 cr · std 30 min"}</small>
                          </div>
                          <div className="tsl__g">{"–"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"In progress"}
                            </span>
                            <small>
                              {"09:20 → now · "}
                              <span className="tsl__m">{"22 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"–"}</small>
                            <small className="tsl__rem">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#message-square" />
                              </svg>
                              {"Phone charger found under the bed → Lost & Found LF-1009"}
                            </small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--dn">
                          <span className="tsl__n num">{"3"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-04-reordered" aria-label="Move room 210 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-04-reordered" aria-label="Move room 210 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-210">
                              <b>{"210"}</b>
                            </a>
                            <span>{"GDLX · Departure clean"}</span>
                            <small>{"1.0 cr · std 30 min"}</small>
                          </div>
                          <div className="tsl__g">{"–"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check" />
                              </svg>
                              {"Done – waiting inspection"}
                            </span>
                            <small>
                              {"07:38 → 08:10 · "}
                              <span className="tsl__m is-over">{"32 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bed linen set ×1 · bath towels ×2 · hand towels ×2 · amenity kit ×1"}</small>
                          </div>
                          <div className="tsl__a">
                            <a className="btn btn--sm btn--primary" href="/housekeeping/hk-09-room-inspection/#room-210" data-leads-to="HK-09">{"Inspect"}</a>
                          </div>
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"4"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-04-reordered" aria-label="Move room 211 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-04-reordered" aria-label="Move room 211 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-211">
                              <b>{"211"}</b>
                            </a>
                            <span>{"GDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departs 23 Oct"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"07:06 → 07:22 · "}
                              <span className="tsl__m">{"16 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up"}</small>
                            <small className="tsl__rem">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#message-square" />
                              </svg>
                              {"Guest asked for an extra pillow (RQ-0422-01)"}
                            </small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"5"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-04-reordered" aria-label="Move room 212 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-04-reordered" aria-label="Move room 212 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-212">
                              <b>{"212"}</b>
                            </a>
                            <span>{"GDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departs 23 Oct · Linen change due"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"07:36 → 07:59 · "}
                              <span className="tsl__m is-over">{"23 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up · bed linen set ×1"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"6"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-04-reordered" aria-label="Move room 213 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-04-reordered" aria-label="Move room 213 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-213">
                              <b>{"213"}</b>
                            </a>
                            <span>{"GDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departs 26 Oct"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"08:15 → 08:36 · "}
                              <span className="tsl__m is-over">{"21 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--dn">
                          <span className="tsl__n num">{"7"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-04-reordered" aria-label="Move room 215 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-04-reordered" aria-label="Move room 215 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-215">
                              <b>{"215"}</b>
                            </a>
                            <span>{"GDLX · Departure clean"}</span>
                            <small>{"1.0 cr · std 30 min"}</small>
                          </div>
                          <div className="tsl__g">{"–"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check" />
                              </svg>
                              {"Done – waiting inspection"}
                            </span>
                            <small>
                              {"08:22 → 08:55 · "}
                              <span className="tsl__m is-over">{"33 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bed linen set ×1 · bath towels ×2 · hand towels ×2 · amenity kit ×1"}</small>
                          </div>
                          <div className="tsl__a">
                            <a className="btn btn--sm btn--primary" href="/housekeeping/hk-09-room-inspection/#room-215" data-leads-to="HK-09">{"Inspect"}</a>
                          </div>
                        </li>
                        <li className="tsl tsl--ns">
                          <span className="tsl__n num">{"8"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-04-reordered" aria-label="Move room 216 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-04-reordered" aria-label="Move room 216 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-216">
                              <b>{"216"}</b>
                            </a>
                            <span>{"GDLX · Departure clean"}</span>
                            <small>{"1.0 cr · std 30 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departs 22 Oct"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#play" />
                              </svg>
                              {"Not started"}
                            </span>
                          </div>
                          <div className="tsl__sup">
                            <small>{"–"}</small>
                          </div>
                          <div className="tsl__a">
                            <a className="btn btn--sm" href="/housekeeping/hk-02-room-status-board/#p18-216" data-leads-to="HK-P18">{"Reassign"}</a>
                            <a className="btn btn--sm" href="#rm-216" aria-label="Remove room 216">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#trash" />
                              </svg>
                            </a>
                          </div>
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"9"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-04-reordered" aria-label="Move room 217 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-04-reordered" aria-label="Move room 217 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-217">
                              <b>{"217"}</b>
                            </a>
                            <span>{"GDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departs 24 Oct"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"07:32 → 07:54 · "}
                              <span className="tsl__m is-over">{"22 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"10"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-04-reordered" aria-label="Move room 218 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-04-reordered" aria-label="Move room 218 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-218">
                              <b>{"218"}</b>
                            </a>
                            <span>{"GDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departs 25 Oct · Linen change due"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"08:11 → 08:31 · "}
                              <span className="tsl__m is-over">{"20 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up · bed linen set ×1"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"11"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-04-reordered" aria-label="Move room 219 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-04-reordered" aria-label="Move room 219 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-219">
                              <b>{"219"}</b>
                            </a>
                            <span>{"GDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departs 24 Oct"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"07:15 → 07:33 · "}
                              <span className="tsl__m">{"18 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"12"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-04-reordered" aria-label="Move room 301 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-04-reordered" aria-label="Move room 301 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-301">
                              <b>{"301"}</b>
                            </a>
                            <span>{"GDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departs 23 Oct"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"07:11 → 07:27 · "}
                              <span className="tsl__m">{"16 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                      </ol>
                    </section>
                    <aside className="ts-side" aria-label="Selected room">
                      <span className="ts-kick ts-kick--ink">{"Selected room"}</span>
                      <div className="ts-side__h">
                        <span className="pr__no hk--vd">{"209"}</span>
                        <div>
                          <b>{"Departure clean"}</b>
                          <small>{"GDLX · Vacant dirty · In progress"}</small>
                        </div>
                      </div>
                      <dl className="rd-dl">
                        <div>
                          <dt>{"Guest"}</dt>
                          <dd>{"–"}</dd>
                        </div>
                        <div>
                          <dt>{"Info"}</dt>
                          <dd>{"–"}</dd>
                        </div>
                        <div>
                          <dt>{"Times"}</dt>
                          <dd>{"09:20 · 22 min"}</dd>
                        </div>
                        <div>
                          <dt>{"Standard"}</dt>
                          <dd>{"30 min · 1.0 credits"}</dd>
                        </div>
                        <div>
                          <dt>{"Supplies"}</dt>
                          <dd>{"–"}</dd>
                        </div>
                      </dl>
                      <a className="fd-link" href="/housekeeping/hk-03-room-detail/#room-209" data-leads-to="HK-03">{"Open room 209 →"}</a>
                    </aside>
                  </div>
                </article>
                <article className="ts" id="TS-20261022-05" aria-label="Task sheet TS-20261022-05">
                  <i className="ts-mk" id="TS-20261022-05-reordered" />
                  <i className="ts-mk" id="TS-20261022-05-added" />
                  <i className="ts-mk" id="TS-20261022-05-removed" />
                  <i className="ts-mk" id="TS-20261022-05-moved" />
                  <section className="ts-hero">
                    <span className="ts-hero__av">{"SJ"}</span>
                    <div className="ts-hero__who">
                      <span className="ts-kick">{"TS-20261022-05 · 22 Oct 2026 · Morning 07:00–15:30"}</span>
                      <h2 className="ts-hero__t">{"Shiny Joseph"}</h2>
                      <ul className="rd-facts">
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#map-pin" />
                          </svg>
                          {"S4"}
                        </li>
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#smartphone" />
                          </svg>
                          {"Phone 11"}
                        </li>
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#message-circle" />
                          </svg>
                          {"Malayalam, English"}
                        </li>
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"On duty 2 h 42 min"}
                        </li>
                      </ul>
                    </div>
                    <div className="ts-hero__nums">
                      <div>
                        <b className="num">
                          {"1"}
                          <small>{"/4"}</small>
                        </b>
                        <span>{"rooms done"}</span>
                      </div>
                      <div>
                        <b className="num">
                          {"0.6"}
                          <small>{"/3.2"}</small>
                        </b>
                        <span>{"credits"}</span>
                      </div>
                      <div>
                        <b className="num">{"6"}</b>
                        <span>{"avg min / room"}</span>
                      </div>
                      <div>
                        <span className="pill pill--dirty">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"In progress"}
                        </span>
                        <span>{"sheet status"}</span>
                      </div>
                    </div>
                    <span className="ts-hero__bar" aria-hidden="true">
                      <i style={{"width": "19%"}} />
                    </span>
                  </section>
                  <p className="ts-msg">
                    <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#info" />
                    </svg>
                    <b>{"Message:"}</b>
                    {" Fire drill at 11:00 – all attendants gather at the lobby."}
                  </p>
                  <div className="ts-body">
                    <section className="ts-list" aria-label="Rooms in order">
                      <header className="ts-list__h">
                        <h3>{"Rooms in order"}</h3>
                        <span className="fd-muted">{"Use the arrows to re-order – the phone list updates."}</span>
                        <a className="btn btn--sm" href="#add-TS-20261022-05">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#plus" />
                          </svg>
                          {"Add room"}
                        </a>
                      </header>
                      <ol className="ts-lines">
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"1"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-05-reordered" aria-label="Move room 303 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-05-reordered" aria-label="Move room 303 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-303">
                              <b>{"303"}</b>
                            </a>
                            <span>{"GDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departs 23 Oct · Linen change due"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"07:00 → 07:06 · "}
                              <span className="tsl__m">{"6 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up · bed linen set ×1"}</small>
                            <small className="tsl__rem">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#message-square" />
                              </svg>
                              {"Extra towels requested (RQ-0422-02)"}
                            </small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ns">
                          <span className="tsl__n num">{"2"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-05-reordered" aria-label="Move room 305 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-05-reordered" aria-label="Move room 305 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-305">
                              <b>{"305"}</b>
                            </a>
                            <span>{"GDLX · Departure clean"}</span>
                            <small>{"1.0 cr · std 30 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departs 22 Oct"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#play" />
                              </svg>
                              {"Not started"}
                            </span>
                          </div>
                          <div className="tsl__sup">
                            <small>{"–"}</small>
                          </div>
                          <div className="tsl__a">
                            <a className="btn btn--sm" href="/housekeeping/hk-02-room-status-board/#p18-305" data-leads-to="HK-P18">{"Reassign"}</a>
                            <a className="btn btn--sm" href="#rm-305" aria-label="Remove room 305">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#trash" />
                              </svg>
                            </a>
                          </div>
                        </li>
                        <li className="tsl tsl--ip">
                          <span className="tsl__n num">{"3"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-05-reordered" aria-label="Move room 308 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-05-reordered" aria-label="Move room 308 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-308">
                              <b>{"308"}</b>
                            </a>
                            <span>{"GDLX · Departure clean"}</span>
                            <small>{"1.0 cr · std 30 min"}</small>
                          </div>
                          <div className="tsl__g">{"–"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"In progress"}
                            </span>
                            <small>
                              {"08:50 → now · "}
                              <span className="tsl__m is-over">{"52 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"–"}</small>
                            <small className="tsl__rem">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#message-square" />
                              </svg>
                              {"Heavy room after a family stay – extra 20 min agreed (Joseph Paul)"}
                            </small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--rf">
                          <span className="tsl__n num">{"4"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-05-reordered" aria-label="Move room 310 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-05-reordered" aria-label="Move room 310 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-310">
                              <b>{"310"}</b>
                            </a>
                            <span>{"GDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departs 25 Oct · Linen change due"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#user-x" />
                              </svg>
                              {"Refused service"}
                            </span>
                          </div>
                          <div className="tsl__sup">
                            <small>{"–"}</small>
                            <small className="tsl__rem">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#message-square" />
                              </svg>
                              {"Guest declined service at 09:15 – “not needed today” (HK-12)"}
                            </small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                      </ol>
                    </section>
                    <aside className="ts-side" aria-label="Selected room">
                      <span className="ts-kick ts-kick--ink">{"Selected room"}</span>
                      <div className="ts-side__h">
                        <span className="pr__no hk--vd">{"308"}</span>
                        <div>
                          <b>{"Departure clean"}</b>
                          <small>{"GDLX · Vacant dirty · In progress"}</small>
                        </div>
                      </div>
                      <dl className="rd-dl">
                        <div>
                          <dt>{"Guest"}</dt>
                          <dd>{"–"}</dd>
                        </div>
                        <div>
                          <dt>{"Info"}</dt>
                          <dd>{"–"}</dd>
                        </div>
                        <div>
                          <dt>{"Times"}</dt>
                          <dd>{"08:50 · 52 min"}</dd>
                        </div>
                        <div>
                          <dt>{"Standard"}</dt>
                          <dd>{"30 min · 1.0 credits"}</dd>
                        </div>
                        <div>
                          <dt>{"Supplies"}</dt>
                          <dd>{"–"}</dd>
                        </div>
                      </dl>
                      <a className="fd-link" href="/housekeeping/hk-03-room-detail/#room-308" data-leads-to="HK-03">{"Open room 308 →"}</a>
                    </aside>
                  </div>
                </article>
                <article className="ts" id="TS-20261022-06" aria-label="Task sheet TS-20261022-06">
                  <i className="ts-mk" id="TS-20261022-06-reordered" />
                  <i className="ts-mk" id="TS-20261022-06-added" />
                  <i className="ts-mk" id="TS-20261022-06-removed" />
                  <i className="ts-mk" id="TS-20261022-06-moved" />
                  <section className="ts-hero">
                    <span className="ts-hero__av">{"JM"}</span>
                    <div className="ts-hero__who">
                      <span className="ts-kick">{"TS-20261022-06 · 22 Oct 2026 · Morning 07:00–15:30"}</span>
                      <h2 className="ts-hero__t">{"Jincy Mathew"}</h2>
                      <ul className="rd-facts">
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#map-pin" />
                          </svg>
                          {"S4"}
                        </li>
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#smartphone" />
                          </svg>
                          {"–"}
                        </li>
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#message-circle" />
                          </svg>
                          {"Malayalam"}
                        </li>
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"On duty 2 h 42 min"}
                        </li>
                      </ul>
                    </div>
                    <div className="ts-hero__nums">
                      <div>
                        <b className="num">
                          {"4"}
                          <small>{"/4"}</small>
                        </b>
                        <span>{"rooms done"}</span>
                      </div>
                      <div>
                        <b className="num">
                          {"2.4"}
                          <small>{"/2.4"}</small>
                        </b>
                        <span>{"credits"}</span>
                      </div>
                      <div>
                        <b className="num">{"18"}</b>
                        <span>{"avg min / room"}</span>
                      </div>
                      <div>
                        <span className="pill pill--ready">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#check-circle" />
                          </svg>
                          {"Completed"}
                        </span>
                        <span>{"sheet status"}</span>
                      </div>
                    </div>
                    <span className="ts-hero__bar" aria-hidden="true">
                      <i style={{"width": "100%"}} />
                    </span>
                  </section>
                  <p className="ts-msg">
                    <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#info" />
                    </svg>
                    <b>{"Message:"}</b>
                    {" Fire drill at 11:00 – all attendants gather at the lobby."}
                  </p>
                  <div className="ts-body">
                    <section className="ts-list" aria-label="Rooms in order">
                      <header className="ts-list__h">
                        <h3>{"Rooms in order"}</h3>
                        <span className="fd-muted">{"Use the arrows to re-order – the phone list updates."}</span>
                        <a className="btn btn--sm" href="#add-TS-20261022-06">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#plus" />
                          </svg>
                          {"Add room"}
                        </a>
                      </header>
                      <ol className="ts-lines">
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"1"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-06-reordered" aria-label="Move room 304 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-06-reordered" aria-label="Move room 304 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-304">
                              <b>{"304"}</b>
                            </a>
                            <span>{"GDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departs 25 Oct · Linen change due"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"07:24 → 07:43 · "}
                              <span className="tsl__m is-over">{"19 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up · bed linen set ×1"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"2"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-06-reordered" aria-label="Move room 306 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-06-reordered" aria-label="Move room 306 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-306">
                              <b>{"306"}</b>
                            </a>
                            <span>{"GDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departs 23 Oct · Linen change due"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"07:07 → 07:22 · "}
                              <span className="tsl__m">{"15 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up · bed linen set ×1"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"3"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-06-reordered" aria-label="Move room 309 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-06-reordered" aria-label="Move room 309 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-309">
                              <b>{"309"}</b>
                            </a>
                            <span>{"GDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departs 23 Oct"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"07:20 → 07:38 · "}
                              <span className="tsl__m">{"18 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"4"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-06-reordered" aria-label="Move room 313 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-06-reordered" aria-label="Move room 313 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-313">
                              <b>{"313"}</b>
                            </a>
                            <span>{"PDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departs 25 Oct · Guest slept out last night (sleep-out) – check with the front desk before service"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"08:12 → 08:31 · "}
                              <span className="tsl__m is-over">{"19 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                      </ol>
                    </section>
                    <aside className="ts-side" aria-label="Selected room">
                      <span className="ts-kick ts-kick--ink">{"Selected room"}</span>
                      <div className="ts-side__h">
                        <span className="pr__no hk--oc">{"304"}</span>
                        <div>
                          <b>{"Stayover"}</b>
                          <small>{"GDLX · Occupied clean · Inspected – passed"}</small>
                        </div>
                      </div>
                      <dl className="rd-dl">
                        <div>
                          <dt>{"Guest"}</dt>
                          <dd>{"Hughes"}</dd>
                        </div>
                        <div>
                          <dt>{"Info"}</dt>
                          <dd>{"Departs 25 Oct · Linen change due"}</dd>
                        </div>
                        <div>
                          <dt>{"Times"}</dt>
                          <dd>{"07:24 → 07:43 · 19 min"}</dd>
                        </div>
                        <div>
                          <dt>{"Standard"}</dt>
                          <dd>{"18 min · 0.6 credits"}</dd>
                        </div>
                        <div>
                          <dt>{"Supplies"}</dt>
                          <dd>{"Bath towels ×2 · amenity top-up · bed linen set ×1"}</dd>
                        </div>
                      </dl>
                      <a className="fd-link" href="/housekeeping/hk-03-room-detail/#room-304" data-leads-to="HK-03">{"Open room 304 →"}</a>
                    </aside>
                  </div>
                </article>
                <article className="ts" id="TS-20261022-07" aria-label="Task sheet TS-20261022-07">
                  <i className="ts-mk" id="TS-20261022-07-reordered" />
                  <i className="ts-mk" id="TS-20261022-07-added" />
                  <i className="ts-mk" id="TS-20261022-07-removed" />
                  <i className="ts-mk" id="TS-20261022-07-moved" />
                  <section className="ts-hero">
                    <span className="ts-hero__av">{"RS"}</span>
                    <div className="ts-hero__who">
                      <span className="ts-kick">{"TS-20261022-07 · 22 Oct 2026 · Morning 07:00–15:30"}</span>
                      <h2 className="ts-hero__t">{"Rekha S"}</h2>
                      <ul className="rd-facts">
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#map-pin" />
                          </svg>
                          {"S5"}
                        </li>
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#smartphone" />
                          </svg>
                          {"Phone 12"}
                        </li>
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#message-circle" />
                          </svg>
                          {"Malayalam, Tamil"}
                        </li>
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"On duty 2 h 42 min"}
                        </li>
                      </ul>
                    </div>
                    <div className="ts-hero__nums">
                      <div>
                        <b className="num">
                          {"7"}
                          <small>{"/12"}</small>
                        </b>
                        <span>{"rooms done"}</span>
                      </div>
                      <div>
                        <b className="num">
                          {"5.0"}
                          <small>{"/10.1"}</small>
                        </b>
                        <span>{"credits incl. 0.5 travel"}</span>
                      </div>
                      <div>
                        <b className="num">{"23"}</b>
                        <span>{"avg min / room"}</span>
                      </div>
                      <div>
                        <span className="pill pill--dirty">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"In progress"}
                        </span>
                        <span>{"sheet status"}</span>
                      </div>
                    </div>
                    <span className="ts-hero__bar" aria-hidden="true">
                      <i style={{"width": "50%"}} />
                    </span>
                  </section>
                  <p className="ts-msg">
                    <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#info" />
                    </svg>
                    <b>{"Message:"}</b>
                    {" Fire drill at 11:00 – all attendants gather at the lobby."}
                  </p>
                  <div className="ts-body">
                    <section className="ts-list" aria-label="Rooms in order">
                      <header className="ts-list__h">
                        <h3>{"Rooms in order"}</h3>
                        <span className="fd-muted">{"Use the arrows to re-order – the phone list updates."}</span>
                        <a className="btn btn--sm" href="#add-TS-20261022-07">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#plus" />
                          </svg>
                          {"Add room"}
                        </a>
                      </header>
                      <ol className="ts-lines">
                        <li className="tsl tsl--dn">
                          <span className="tsl__n num">{"1"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-07-reordered" aria-label="Move room 315 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-07-reordered" aria-label="Move room 315 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-315">
                              <b>{"315"}</b>
                            </a>
                            <span>{"PDLX · Departure clean"}</span>
                            <small>{"1.0 cr · std 30 min"}</small>
                          </div>
                          <div className="tsl__g">{"–"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check" />
                              </svg>
                              {"Done – waiting inspection"}
                            </span>
                            <small>
                              {"08:51 → 09:20 · "}
                              <span className="tsl__m">{"29 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bed linen set ×1 · bath towels ×2 · hand towels ×2 · amenity kit ×1"}</small>
                          </div>
                          <div className="tsl__a">
                            <a className="btn btn--sm btn--primary" href="/housekeeping/hk-09-room-inspection/#room-315" data-leads-to="HK-09">{"Inspect"}</a>
                          </div>
                        </li>
                        <li className="tsl tsl--ns">
                          <span className="tsl__n num">{"2"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-07-reordered" aria-label="Move room 316 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-07-reordered" aria-label="Move room 316 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-316">
                              <b>{"316"}</b>
                            </a>
                            <span>{"PDLX · Departure clean"}</span>
                            <small>{"1.0 cr · std 30 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departs 22 Oct"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#play" />
                              </svg>
                              {"Not started"}
                            </span>
                          </div>
                          <div className="tsl__sup">
                            <small>{"–"}</small>
                          </div>
                          <div className="tsl__a">
                            <a className="btn btn--sm" href="/housekeeping/hk-02-room-status-board/#p18-316" data-leads-to="HK-P18">{"Reassign"}</a>
                            <a className="btn btn--sm" href="#rm-316" aria-label="Remove room 316">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#trash" />
                              </svg>
                            </a>
                          </div>
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"3"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-07-reordered" aria-label="Move room 318 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-07-reordered" aria-label="Move room 318 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-318">
                              <b>{"318"}</b>
                            </a>
                            <span>{"PDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departs 24 Oct · Linen change due"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"08:08 → 08:26 · "}
                              <span className="tsl__m">{"18 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up · bed linen set ×1"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ns">
                          <span className="tsl__n num">{"4"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-07-reordered" aria-label="Move room 319 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-07-reordered" aria-label="Move room 319 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-319">
                              <b>{"319"}</b>
                            </a>
                            <span>{"PDLX · Departure clean"}</span>
                            <small>{"1.0 cr · std 30 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departs 22 Oct"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#play" />
                              </svg>
                              {"Not started"}
                            </span>
                          </div>
                          <div className="tsl__sup">
                            <small>{"–"}</small>
                          </div>
                          <div className="tsl__a">
                            <a className="btn btn--sm" href="/housekeeping/hk-02-room-status-board/#p18-319" data-leads-to="HK-P18">{"Reassign"}</a>
                            <a className="btn btn--sm" href="#rm-319" aria-label="Remove room 319">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#trash" />
                              </svg>
                            </a>
                          </div>
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"5"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-07-reordered" aria-label="Move room 401 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-07-reordered" aria-label="Move room 401 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-401">
                              <b>{"401"}</b>
                            </a>
                            <span>{"PDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departs 26 Oct"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"07:00 → 07:22 · "}
                              <span className="tsl__m is-over">{"22 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--pa">
                          <span className="tsl__n num">{"6"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-07-reordered" aria-label="Move room 402 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-07-reordered" aria-label="Move room 402 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-402">
                              <b>{"402"}</b>
                            </a>
                            <span>{"PDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departs 25 Oct · Linen change due"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pause" />
                              </svg>
                              {"Paused – DND"}
                            </span>
                          </div>
                          <div className="tsl__sup">
                            <small>{"–"}</small>
                            <small className="tsl__rem">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#message-square" />
                              </svg>
                              {"DND – service later"}
                            </small>
                          </div>
                          <div className="tsl__a">
                            <a className="btn btn--sm" href="/housekeeping/hk-02-room-status-board/#p18-402" data-leads-to="HK-P18">{"Reassign"}</a>
                            <a className="btn btn--sm" href="#rm-402" aria-label="Remove room 402">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#trash" />
                              </svg>
                            </a>
                          </div>
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"7"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-07-reordered" aria-label="Move room 403 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-07-reordered" aria-label="Move room 403 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-403">
                              <b>{"403"}</b>
                            </a>
                            <span>{"PDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departs 25 Oct"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"08:17 → 08:36 · "}
                              <span className="tsl__m is-over">{"19 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ns">
                          <span className="tsl__n num">{"8"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-07-reordered" aria-label="Move room 404 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-07-reordered" aria-label="Move room 404 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-404">
                              <b>{"404"}</b>
                            </a>
                            <span>{"PDLX · Departure clean"}</span>
                            <small>{"1.0 cr · std 30 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departs 22 Oct"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#play" />
                              </svg>
                              {"Not started"}
                            </span>
                          </div>
                          <div className="tsl__sup">
                            <small>{"–"}</small>
                          </div>
                          <div className="tsl__a">
                            <a className="btn btn--sm" href="/housekeeping/hk-02-room-status-board/#p18-404" data-leads-to="HK-P18">{"Reassign"}</a>
                            <a className="btn btn--sm" href="#rm-404" aria-label="Remove room 404">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#trash" />
                              </svg>
                            </a>
                          </div>
                        </li>
                        <li className="tsl tsl--dn">
                          <span className="tsl__n num">{"9"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-07-reordered" aria-label="Move room 405 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-07-reordered" aria-label="Move room 405 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-405">
                              <b>{"405"}</b>
                            </a>
                            <span>{"PDLX · Departure clean"}</span>
                            <small>{"1.0 cr · std 30 min"}</small>
                          </div>
                          <div className="tsl__g">{"–"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check" />
                              </svg>
                              {"Done – waiting inspection"}
                            </span>
                            <small>
                              {"08:55 → 09:30 · "}
                              <span className="tsl__m is-over">{"35 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bed linen set ×1 · bath towels ×2 · hand towels ×2 · amenity kit ×1"}</small>
                            <small className="tsl__rem">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#message-square" />
                              </svg>
                              {"Child’s jacket found in the wardrobe → Lost & Found LF-1005"}
                            </small>
                          </div>
                          <div className="tsl__a">
                            <a className="btn btn--sm btn--primary" href="/housekeeping/hk-09-room-inspection/#room-405" data-leads-to="HK-09">{"Inspect"}</a>
                          </div>
                        </li>
                        <li className="tsl tsl--ns">
                          <span className="tsl__n num">{"10"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-07-reordered" aria-label="Move room 406 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-07-reordered" aria-label="Move room 406 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-406">
                              <b>{"406"}</b>
                            </a>
                            <span>{"PDLX · Departure clean"}</span>
                            <small>{"1.0 cr · std 30 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departs 22 Oct"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#play" />
                              </svg>
                              {"Not started"}
                            </span>
                          </div>
                          <div className="tsl__sup">
                            <small>{"–"}</small>
                          </div>
                          <div className="tsl__a">
                            <a className="btn btn--sm" href="/housekeeping/hk-02-room-status-board/#p18-406" data-leads-to="HK-P18">{"Reassign"}</a>
                            <a className="btn btn--sm" href="#rm-406" aria-label="Remove room 406">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#trash" />
                              </svg>
                            </a>
                          </div>
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"11"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-07-reordered" aria-label="Move room 407 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-07-reordered" aria-label="Move room 407 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-407">
                              <b>{"407"}</b>
                            </a>
                            <span>{"PDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departs 26 Oct"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"07:34 → 07:54 · "}
                              <span className="tsl__m is-over">{"20 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"12"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-07-reordered" aria-label="Move room 408 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-07-reordered" aria-label="Move room 408 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-408">
                              <b>{"408"}</b>
                            </a>
                            <span>{"PDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departs 25 Oct · Linen change due"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"08:13 → 08:31 · "}
                              <span className="tsl__m">{"18 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up · bed linen set ×1"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                      </ol>
                    </section>
                    <aside className="ts-side" aria-label="Selected room">
                      <span className="ts-kick ts-kick--ink">{"Selected room"}</span>
                      <div className="ts-side__h">
                        <span className="pr__no hk--oc">{"316"}</span>
                        <div>
                          <b>{"Departure clean"}</b>
                          <small>{"PDLX · Occupied clean · Not started"}</small>
                        </div>
                      </div>
                      <dl className="rd-dl">
                        <div>
                          <dt>{"Guest"}</dt>
                          <dd>{"Siddharth"}</dd>
                        </div>
                        <div>
                          <dt>{"Info"}</dt>
                          <dd>{"Departs 22 Oct"}</dd>
                        </div>
                        <div>
                          <dt>{"Times"}</dt>
                          <dd>{"–"}</dd>
                        </div>
                        <div>
                          <dt>{"Standard"}</dt>
                          <dd>{"30 min · 1.0 credits"}</dd>
                        </div>
                        <div>
                          <dt>{"Supplies"}</dt>
                          <dd>{"–"}</dd>
                        </div>
                      </dl>
                      <a className="fd-link" href="/housekeeping/hk-03-room-detail/#room-316" data-leads-to="HK-03">{"Open room 316 →"}</a>
                    </aside>
                  </div>
                </article>
                <article className="ts" id="TS-20261022-08" aria-label="Task sheet TS-20261022-08">
                  <i className="ts-mk" id="TS-20261022-08-reordered" />
                  <i className="ts-mk" id="TS-20261022-08-added" />
                  <i className="ts-mk" id="TS-20261022-08-removed" />
                  <i className="ts-mk" id="TS-20261022-08-moved" />
                  <section className="ts-hero">
                    <span className="ts-hero__av">{"LG"}</span>
                    <div className="ts-hero__who">
                      <span className="ts-kick">{"TS-20261022-08 · 22 Oct 2026 · Morning 07:00–15:30"}</span>
                      <h2 className="ts-hero__t">{"Lissy George"}</h2>
                      <ul className="rd-facts">
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#map-pin" />
                          </svg>
                          {"S6"}
                        </li>
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#smartphone" />
                          </svg>
                          {"Phone 13"}
                        </li>
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#message-circle" />
                          </svg>
                          {"Malayalam, English"}
                        </li>
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"On duty 2 h 42 min"}
                        </li>
                      </ul>
                    </div>
                    <div className="ts-hero__nums">
                      <div>
                        <b className="num">
                          {"3"}
                          <small>{"/8"}</small>
                        </b>
                        <span>{"rooms done"}</span>
                      </div>
                      <div>
                        <b className="num">
                          {"1.8"}
                          <small>{"/6.9"}</small>
                        </b>
                        <span>{"credits incl. 0.5 travel"}</span>
                      </div>
                      <div>
                        <b className="num">{"17"}</b>
                        <span>{"avg min / room"}</span>
                      </div>
                      <div>
                        <span className="pill pill--dirty">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"In progress"}
                        </span>
                        <span>{"sheet status"}</span>
                      </div>
                    </div>
                    <span className="ts-hero__bar" aria-hidden="true">
                      <i style={{"width": "26%"}} />
                    </span>
                  </section>
                  <p className="ts-msg">
                    <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#info" />
                    </svg>
                    <b>{"Message:"}</b>
                    {" Fire drill at 11:00 – all attendants gather at the lobby."}
                  </p>
                  <div className="ts-body">
                    <section className="ts-list" aria-label="Rooms in order">
                      <header className="ts-list__h">
                        <h3>{"Rooms in order"}</h3>
                        <span className="fd-muted">{"Use the arrows to re-order – the phone list updates."}</span>
                        <a className="btn btn--sm" href="#add-TS-20261022-08">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#plus" />
                          </svg>
                          {"Add room"}
                        </a>
                      </header>
                      <ol className="ts-lines">
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"1"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-08-reordered" aria-label="Move room 409 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-08-reordered" aria-label="Move room 409 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-409">
                              <b>{"409"}</b>
                            </a>
                            <span>{"PDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departs 24 Oct · Linen change due"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"07:17 → 07:33 · "}
                              <span className="tsl__m">{"16 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up · bed linen set ×1"}</small>
                            <small className="tsl__rem">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#message-square" />
                              </svg>
                              {"Bathroom tap dripping – work order WO-2214 raised 08:15"}
                            </small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ns">
                          <span className="tsl__n num">{"2"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-08-reordered" aria-label="Move room 410 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-08-reordered" aria-label="Move room 410 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-410">
                              <b>{"410"}</b>
                            </a>
                            <span>{"PDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departs 26 Oct · Green choice – no linen change"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#play" />
                              </svg>
                              {"Not started"}
                            </span>
                          </div>
                          <div className="tsl__sup">
                            <small>{"–"}</small>
                          </div>
                          <div className="tsl__a">
                            <a className="btn btn--sm" href="/housekeeping/hk-02-room-status-board/#p18-410" data-leads-to="HK-P18">{"Reassign"}</a>
                            <a className="btn btn--sm" href="#rm-410" aria-label="Remove room 410">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#trash" />
                              </svg>
                            </a>
                          </div>
                        </li>
                        <li className="tsl tsl--ns">
                          <span className="tsl__n num">{"3"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-08-reordered" aria-label="Move room 415 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-08-reordered" aria-label="Move room 415 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-415">
                              <b>{"415"}</b>
                            </a>
                            <span>{"PDLX · Departure clean"}</span>
                            <small>{"1.0 cr · std 30 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departs 22 Oct"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#play" />
                              </svg>
                              {"Not started"}
                            </span>
                          </div>
                          <div className="tsl__sup">
                            <small>{"–"}</small>
                          </div>
                          <div className="tsl__a">
                            <a className="btn btn--sm" href="/housekeeping/hk-02-room-status-board/#p18-415" data-leads-to="HK-P18">{"Reassign"}</a>
                            <a className="btn btn--sm" href="#rm-415" aria-label="Remove room 415">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#trash" />
                              </svg>
                            </a>
                          </div>
                        </li>
                        <li className="tsl tsl--ns">
                          <span className="tsl__n num">{"4"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-08-reordered" aria-label="Move room 416 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-08-reordered" aria-label="Move room 416 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-416">
                              <b>{"416"}</b>
                            </a>
                            <span>{"PDLX · Departure clean"}</span>
                            <small>{"1.0 cr · std 30 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departs 22 Oct"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#play" />
                              </svg>
                              {"Not started"}
                            </span>
                          </div>
                          <div className="tsl__sup">
                            <small>{"–"}</small>
                          </div>
                          <div className="tsl__a">
                            <a className="btn btn--sm" href="/housekeeping/hk-02-room-status-board/#p18-416" data-leads-to="HK-P18">{"Reassign"}</a>
                            <a className="btn btn--sm" href="#rm-416" aria-label="Remove room 416">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#trash" />
                              </svg>
                            </a>
                          </div>
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"5"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-08-reordered" aria-label="Move room 417 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-08-reordered" aria-label="Move room 417 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-417">
                              <b>{"417"}</b>
                            </a>
                            <span>{"PDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departs 23 Oct"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"07:26 → 07:44 · "}
                              <span className="tsl__m">{"18 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ip">
                          <span className="tsl__n num">{"6"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-08-reordered" aria-label="Move room 418 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-08-reordered" aria-label="Move room 418 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-418">
                              <b>{"418"}</b>
                            </a>
                            <span>{"PDLX · Departure clean"}</span>
                            <small>{"1.0 cr · std 30 min"}</small>
                          </div>
                          <div className="tsl__g">{"–"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"In progress"}
                            </span>
                            <small>
                              {"09:33 → now · "}
                              <span className="tsl__m">{"9 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"–"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"7"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-08-reordered" aria-label="Move room 501 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-08-reordered" aria-label="Move room 501 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-501">
                              <b>{"501"}</b>
                            </a>
                            <span>{"PDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departs 26 Oct"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"07:00 → 07:17 · "}
                              <span className="tsl__m">{"17 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ns">
                          <span className="tsl__n num">{"8"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-08-reordered" aria-label="Move room 503 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-08-reordered" aria-label="Move room 503 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-503">
                              <b>{"503"}</b>
                            </a>
                            <span>{"PDLX · Departure clean"}</span>
                            <small>{"1.0 cr · std 30 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departs 22 Oct"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#play" />
                              </svg>
                              {"Not started"}
                            </span>
                          </div>
                          <div className="tsl__sup">
                            <small>{"–"}</small>
                          </div>
                          <div className="tsl__a">
                            <a className="btn btn--sm" href="/housekeeping/hk-02-room-status-board/#p18-503" data-leads-to="HK-P18">{"Reassign"}</a>
                            <a className="btn btn--sm" href="#rm-503" aria-label="Remove room 503">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#trash" />
                              </svg>
                            </a>
                          </div>
                        </li>
                      </ol>
                    </section>
                    <aside className="ts-side" aria-label="Selected room">
                      <span className="ts-kick ts-kick--ink">{"Selected room"}</span>
                      <div className="ts-side__h">
                        <span className="pr__no hk--vd">{"418"}</span>
                        <div>
                          <b>{"Departure clean"}</b>
                          <small>{"PDLX · Vacant dirty · In progress"}</small>
                        </div>
                      </div>
                      <dl className="rd-dl">
                        <div>
                          <dt>{"Guest"}</dt>
                          <dd>{"–"}</dd>
                        </div>
                        <div>
                          <dt>{"Info"}</dt>
                          <dd>{"–"}</dd>
                        </div>
                        <div>
                          <dt>{"Times"}</dt>
                          <dd>{"09:33 · 9 min"}</dd>
                        </div>
                        <div>
                          <dt>{"Standard"}</dt>
                          <dd>{"30 min · 1.0 credits"}</dd>
                        </div>
                        <div>
                          <dt>{"Supplies"}</dt>
                          <dd>{"–"}</dd>
                        </div>
                      </dl>
                      <a className="fd-link" href="/housekeeping/hk-03-room-detail/#room-418" data-leads-to="HK-03">{"Open room 418 →"}</a>
                    </aside>
                  </div>
                </article>
                <article className="ts" id="TS-20261022-09" aria-label="Task sheet TS-20261022-09">
                  <i className="ts-mk" id="TS-20261022-09-reordered" />
                  <i className="ts-mk" id="TS-20261022-09-added" />
                  <i className="ts-mk" id="TS-20261022-09-removed" />
                  <i className="ts-mk" id="TS-20261022-09-moved" />
                  <section className="ts-hero">
                    <span className="ts-hero__av">{"SK"}</span>
                    <div className="ts-hero__who">
                      <span className="ts-kick">{"TS-20261022-09 · 22 Oct 2026 · Morning 07:00–15:30"}</span>
                      <h2 className="ts-hero__t">{"Saritha K"}</h2>
                      <ul className="rd-facts">
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#map-pin" />
                          </svg>
                          {"S7"}
                        </li>
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#smartphone" />
                          </svg>
                          {"Phone 07"}
                        </li>
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#message-circle" />
                          </svg>
                          {"Malayalam, English, Hindi"}
                        </li>
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"On duty 2 h 42 min"}
                        </li>
                      </ul>
                    </div>
                    <div className="ts-hero__nums">
                      <div>
                        <b className="num">
                          {"6"}
                          <small>{"/10"}</small>
                        </b>
                        <span>{"rooms done"}</span>
                      </div>
                      <div>
                        <b className="num">
                          {"4.2"}
                          <small>{"/7.4"}</small>
                        </b>
                        <span>{"credits"}</span>
                      </div>
                      <div>
                        <b className="num">{"16"}</b>
                        <span>{"avg min / room"}</span>
                      </div>
                      <div>
                        <span className="pill pill--dirty">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"In progress"}
                        </span>
                        <span>{"sheet status"}</span>
                      </div>
                    </div>
                    <span className="ts-hero__bar" aria-hidden="true">
                      <i style={{"width": "57%"}} />
                    </span>
                  </section>
                  <p className="ts-msg">
                    <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#info" />
                    </svg>
                    <b>{"Message:"}</b>
                    {" Fire drill at 11:00 – all attendants gather at the lobby."}
                  </p>
                  <div className="ts-body">
                    <section className="ts-list" aria-label="Rooms in order">
                      <header className="ts-list__h">
                        <h3>{"Rooms in order"}</h3>
                        <span className="fd-muted">{"Use the arrows to re-order – the phone list updates."}</span>
                        <a className="btn btn--sm" href="#add-TS-20261022-09">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#plus" />
                          </svg>
                          {"Add room"}
                        </a>
                      </header>
                      <ol className="ts-lines">
                        <li className="tsl tsl--ns">
                          <span className="tsl__n num">{"1"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-09-reordered" aria-label="Move room 512 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-09-reordered" aria-label="Move room 512 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-512">
                              <b>{"512"}</b>
                            </a>
                            <span>{"PDLX · Departure clean"}</span>
                            <small>{"1.0 cr · std 30 min"}</small>
                          </div>
                          <div className="tsl__g">{"Arrival 17:30 · Jatin · VIP 2"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#play" />
                              </svg>
                              {"Not started"}
                            </span>
                          </div>
                          <div className="tsl__sup">
                            <small>{"–"}</small>
                          </div>
                          <div className="tsl__a">
                            <a className="btn btn--sm" href="/housekeeping/hk-02-room-status-board/#p18-512" data-leads-to="HK-P18">{"Reassign"}</a>
                            <a className="btn btn--sm" href="#rm-512" aria-label="Remove room 512">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#trash" />
                              </svg>
                            </a>
                          </div>
                        </li>
                        <li className="tsl tsl--pa">
                          <span className="tsl__n num">{"2"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-09-reordered" aria-label="Move room 504 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-09-reordered" aria-label="Move room 504 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-504">
                              <b>{"504"}</b>
                            </a>
                            <span>{"PDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departs 26 Oct · VIP 1 · Linen change due · Guest allergic to feather pillows – use the hypo-allergenic set"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pause" />
                              </svg>
                              {"Paused – DND"}
                            </span>
                          </div>
                          <div className="tsl__sup">
                            <small>{"–"}</small>
                            <small className="tsl__rem">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#message-square" />
                              </svg>
                              {"DND since 07:30 – try again after 11:00"}
                            </small>
                          </div>
                          <div className="tsl__a">
                            <a className="btn btn--sm" href="/housekeeping/hk-02-room-status-board/#p18-504" data-leads-to="HK-P18">{"Reassign"}</a>
                            <a className="btn btn--sm" href="#rm-504" aria-label="Remove room 504">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#trash" />
                              </svg>
                            </a>
                          </div>
                        </li>
                        <li className="tsl tsl--ns">
                          <span className="tsl__n num">{"3"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-09-reordered" aria-label="Move room 505 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-09-reordered" aria-label="Move room 505 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-505">
                              <b>{"505"}</b>
                            </a>
                            <span>{"PDLX · Departure clean"}</span>
                            <small>{"1.0 cr · std 30 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departs 22 Oct"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#play" />
                              </svg>
                              {"Not started"}
                            </span>
                          </div>
                          <div className="tsl__sup">
                            <small>{"–"}</small>
                          </div>
                          <div className="tsl__a">
                            <a className="btn btn--sm" href="/housekeeping/hk-02-room-status-board/#p18-505" data-leads-to="HK-P18">{"Reassign"}</a>
                            <a className="btn btn--sm" href="#rm-505" aria-label="Remove room 505">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#trash" />
                              </svg>
                            </a>
                          </div>
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"4"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-09-reordered" aria-label="Move room 506 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-09-reordered" aria-label="Move room 506 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-506">
                              <b>{"506"}</b>
                            </a>
                            <span>{"PDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departs 24 Oct · Linen change due"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"07:00 → 07:12 · "}
                              <span className="tsl__m">{"12 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up · bed linen set ×1"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"5"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-09-reordered" aria-label="Move room 507 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-09-reordered" aria-label="Move room 507 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-507">
                              <b>{"507"}</b>
                            </a>
                            <span>{"PDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departs 23 Oct"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"07:31 → 07:49 · "}
                              <span className="tsl__m">{"18 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"6"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-09-reordered" aria-label="Move room 508 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-09-reordered" aria-label="Move room 508 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-508">
                              <b>{"508"}</b>
                            </a>
                            <span>{"PDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departs 24 Oct"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"08:10 → 08:26 · "}
                              <span className="tsl__m">{"16 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"7"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-09-reordered" aria-label="Move room 509 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-09-reordered" aria-label="Move room 509 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-509">
                              <b>{"509"}</b>
                            </a>
                            <span>{"PDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departs 25 Oct"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"07:05 → 07:28 · "}
                              <span className="tsl__m is-over">{"23 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ns">
                          <span className="tsl__n num">{"8"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-09-reordered" aria-label="Move room 510 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-09-reordered" aria-label="Move room 510 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-510">
                              <b>{"510"}</b>
                            </a>
                            <span>{"PDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departs 26 Oct"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#play" />
                              </svg>
                              {"Not started"}
                            </span>
                          </div>
                          <div className="tsl__sup">
                            <small>{"–"}</small>
                          </div>
                          <div className="tsl__a">
                            <a className="btn btn--sm" href="/housekeeping/hk-02-room-status-board/#p18-510" data-leads-to="HK-P18">{"Reassign"}</a>
                            <a className="btn btn--sm" href="#rm-510" aria-label="Remove room 510">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#trash" />
                              </svg>
                            </a>
                          </div>
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"9"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-09-reordered" aria-label="Move room 511 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-09-reordered" aria-label="Move room 511 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-511">
                              <b>{"511"}</b>
                            </a>
                            <span>{"PDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departs 26 Oct"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"07:00 → 07:07 · "}
                              <span className="tsl__m">{"7 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"10"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-09-reordered" aria-label="Move room 514 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-09-reordered" aria-label="Move room 514 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-514">
                              <b>{"514"}</b>
                            </a>
                            <span>{"DLXS · Stayover"}</span>
                            <small>{"1.2 cr · std 36 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departs 23 Oct"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"07:00 → 07:23 · "}
                              <span className="tsl__m">{"23 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                      </ol>
                    </section>
                    <aside className="ts-side" aria-label="Selected room">
                      <span className="ts-kick ts-kick--ink">{"Selected room"}</span>
                      <div className="ts-side__h">
                        <span className="pr__no hk--vd">{"512"}</span>
                        <div>
                          <b>{"Departure clean"}</b>
                          <small>{"PDLX · Vacant dirty · Not started"}</small>
                        </div>
                      </div>
                      <dl className="rd-dl">
                        <div>
                          <dt>{"Guest"}</dt>
                          <dd>{"Jatin"}</dd>
                        </div>
                        <div>
                          <dt>{"Info"}</dt>
                          <dd>{"Arrival 17:30 · Jatin · VIP 2"}</dd>
                        </div>
                        <div>
                          <dt>{"Times"}</dt>
                          <dd>{"–"}</dd>
                        </div>
                        <div>
                          <dt>{"Standard"}</dt>
                          <dd>{"30 min · 1.0 credits"}</dd>
                        </div>
                        <div>
                          <dt>{"Supplies"}</dt>
                          <dd>{"–"}</dd>
                        </div>
                      </dl>
                      <a className="fd-link" href="/housekeeping/hk-03-room-detail/#room-512" data-leads-to="HK-03">{"Open room 512 →"}</a>
                    </aside>
                  </div>
                </article>
                <article className="ts" id="TS-20261022-10" aria-label="Task sheet TS-20261022-10">
                  <i className="ts-mk" id="TS-20261022-10-reordered" />
                  <i className="ts-mk" id="TS-20261022-10-added" />
                  <i className="ts-mk" id="TS-20261022-10-removed" />
                  <i className="ts-mk" id="TS-20261022-10-moved" />
                  <section className="ts-hero">
                    <span className="ts-hero__av">{"RV"}</span>
                    <div className="ts-hero__who">
                      <span className="ts-kick">{"TS-20261022-10 · 22 Oct 2026 · Morning 07:00–15:30"}</span>
                      <h2 className="ts-hero__t">{"Rani V"}</h2>
                      <ul className="rd-facts">
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#map-pin" />
                          </svg>
                          {"S6"}
                        </li>
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#smartphone" />
                          </svg>
                          {"–"}
                        </li>
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#message-circle" />
                          </svg>
                          {"Malayalam"}
                        </li>
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"On duty 2 h 42 min"}
                        </li>
                      </ul>
                    </div>
                    <div className="ts-hero__nums">
                      <div>
                        <b className="num">
                          {"0"}
                          <small>{"/1"}</small>
                        </b>
                        <span>{"rooms done"}</span>
                      </div>
                      <div>
                        <b className="num">
                          {"0.0"}
                          <small>{"/1.0"}</small>
                        </b>
                        <span>{"credits"}</span>
                      </div>
                      <div>
                        <b className="num">{"–"}</b>
                        <span>{"avg min / room"}</span>
                      </div>
                      <div>
                        <span className="pill pill--dirty">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"In progress"}
                        </span>
                        <span>{"sheet status"}</span>
                      </div>
                    </div>
                    <span className="ts-hero__bar" aria-hidden="true">
                      <i style={{"width": "0%"}} />
                    </span>
                  </section>
                  <p className="ts-msg">
                    <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#info" />
                    </svg>
                    <b>{"Message:"}</b>
                    {" Fire drill at 11:00 – all attendants gather at the lobby."}
                  </p>
                  <div className="ts-body">
                    <section className="ts-list" aria-label="Rooms in order">
                      <header className="ts-list__h">
                        <h3>{"Rooms in order"}</h3>
                        <span className="fd-muted">{"Use the arrows to re-order – the phone list updates."}</span>
                        <a className="btn btn--sm" href="#add-TS-20261022-10">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#plus" />
                          </svg>
                          {"Add room"}
                        </a>
                      </header>
                      <ol className="ts-lines">
                        <li className="tsl tsl--ip">
                          <span className="tsl__n num">{"1"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-10-reordered" aria-label="Move room 502 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-10-reordered" aria-label="Move room 502 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-502">
                              <b>{"502"}</b>
                            </a>
                            <span>{"PDLX · Departure clean"}</span>
                            <small>{"1.0 cr · std 30 min"}</small>
                          </div>
                          <div className="tsl__g">{"–"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"In progress"}
                            </span>
                            <small>
                              {"09:24 → now · "}
                              <span className="tsl__m">{"18 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"–"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                      </ol>
                    </section>
                    <aside className="ts-side" aria-label="Selected room">
                      <span className="ts-kick ts-kick--ink">{"Selected room"}</span>
                      <div className="ts-side__h">
                        <span className="pr__no hk--vd">{"502"}</span>
                        <div>
                          <b>{"Departure clean"}</b>
                          <small>{"PDLX · Vacant dirty · In progress"}</small>
                        </div>
                      </div>
                      <dl className="rd-dl">
                        <div>
                          <dt>{"Guest"}</dt>
                          <dd>{"–"}</dd>
                        </div>
                        <div>
                          <dt>{"Info"}</dt>
                          <dd>{"–"}</dd>
                        </div>
                        <div>
                          <dt>{"Times"}</dt>
                          <dd>{"09:24 · 18 min"}</dd>
                        </div>
                        <div>
                          <dt>{"Standard"}</dt>
                          <dd>{"30 min · 1.0 credits"}</dd>
                        </div>
                        <div>
                          <dt>{"Supplies"}</dt>
                          <dd>{"–"}</dd>
                        </div>
                      </dl>
                      <a className="fd-link" href="/housekeeping/hk-03-room-detail/#room-502" data-leads-to="HK-03">{"Open room 502 →"}</a>
                    </aside>
                  </div>
                </article>
                <article className="ts" id="TS-20261022-11" aria-label="Task sheet TS-20261022-11">
                  <i className="ts-mk" id="TS-20261022-11-reordered" />
                  <i className="ts-mk" id="TS-20261022-11-added" />
                  <i className="ts-mk" id="TS-20261022-11-removed" />
                  <i className="ts-mk" id="TS-20261022-11-moved" />
                  <section className="ts-hero">
                    <span className="ts-hero__av">{"LD"}</span>
                    <div className="ts-hero__who">
                      <span className="ts-kick">{"TS-20261022-11 · 22 Oct 2026 · Evening 15:00–23:30"}</span>
                      <h2 className="ts-hero__t">{"Leena D"}</h2>
                      <ul className="rd-facts">
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#map-pin" />
                          </svg>
                          {"Turndown · F1, F5"}
                        </li>
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#smartphone" />
                          </svg>
                          {"Phone 14"}
                        </li>
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#message-circle" />
                          </svg>
                          {"Malayalam, English"}
                        </li>
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"On duty starts 15:00"}
                        </li>
                      </ul>
                    </div>
                    <div className="ts-hero__nums">
                      <div>
                        <b className="num">
                          {"0"}
                          <small>{"/7"}</small>
                        </b>
                        <span>{"rooms done"}</span>
                      </div>
                      <div>
                        <b className="num">
                          {"0.0"}
                          <small>{"/2.1"}</small>
                        </b>
                        <span>{"credits"}</span>
                      </div>
                      <div>
                        <b className="num">{"–"}</b>
                        <span>{"avg min / room"}</span>
                      </div>
                      <div>
                        <span className="pill pill--tentative">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#pen-line" />
                          </svg>
                          {"Draft"}
                        </span>
                        <span>{"sheet status"}</span>
                      </div>
                    </div>
                    <span className="ts-hero__bar" aria-hidden="true">
                      <i style={{"width": "0%"}} />
                    </span>
                  </section>
                  <p className="ts-msg">
                    <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#info" />
                    </svg>
                    <b>{"Message:"}</b>
                    {" Turndown 18:00–21:00 · list printed at 17:00 (HKS-09) · chocolate + breakfast door-knob card."}
                  </p>
                  <div className="ts-body">
                    <section className="ts-list" aria-label="Rooms in order">
                      <header className="ts-list__h">
                        <h3>{"Rooms in order"}</h3>
                        <span className="fd-muted">{"Use the arrows to re-order – the phone list updates."}</span>
                        <a className="btn btn--sm" href="#add-TS-20261022-11">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#plus" />
                          </svg>
                          {"Add room"}
                        </a>
                      </header>
                      <ol className="ts-lines">
                        <li className="tsl tsl--ns">
                          <span className="tsl__n num">{"1"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-11-reordered" aria-label="Move room 111 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-11-reordered" aria-label="Move room 111 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-111">
                              <b>{"111"}</b>
                            </a>
                            <span>{"GDLX · Turndown"}</span>
                            <small>{"0.3 cr · std 6 min"}</small>
                          </div>
                          <div className="tsl__g">{"Arrival 16:00 · Mueller · VIP 1"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#play" />
                              </svg>
                              {"Not started"}
                            </span>
                          </div>
                          <div className="tsl__sup">
                            <small>{"–"}</small>
                          </div>
                          <div className="tsl__a">
                            <a className="btn btn--sm" href="/housekeeping/hk-02-room-status-board/#p18-111" data-leads-to="HK-P18">{"Reassign"}</a>
                            <a className="btn btn--sm" href="#rm-111" aria-label="Remove room 111">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#trash" />
                              </svg>
                            </a>
                          </div>
                        </li>
                        <li className="tsl tsl--ns">
                          <span className="tsl__n num">{"2"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-11-reordered" aria-label="Move room 504 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-11-reordered" aria-label="Move room 504 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-504">
                              <b>{"504"}</b>
                            </a>
                            <span>{"PDLX · Turndown"}</span>
                            <small>{"0.3 cr · std 6 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departs 26 Oct · VIP 1 · Linen change due · Guest allergic to feather pillows – use the hypo-allergenic set"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#play" />
                              </svg>
                              {"Not started"}
                            </span>
                          </div>
                          <div className="tsl__sup">
                            <small>{"–"}</small>
                            <small className="tsl__rem">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#message-square" />
                              </svg>
                              {"DND since 07:30 – try again after 11:00"}
                            </small>
                          </div>
                          <div className="tsl__a">
                            <a className="btn btn--sm" href="/housekeeping/hk-02-room-status-board/#p18-504" data-leads-to="HK-P18">{"Reassign"}</a>
                            <a className="btn btn--sm" href="#rm-504" aria-label="Remove room 504">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#trash" />
                              </svg>
                            </a>
                          </div>
                        </li>
                        <li className="tsl tsl--ns">
                          <span className="tsl__n num">{"3"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-11-reordered" aria-label="Move room 512 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-11-reordered" aria-label="Move room 512 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-512">
                              <b>{"512"}</b>
                            </a>
                            <span>{"PDLX · Turndown"}</span>
                            <small>{"0.3 cr · std 6 min"}</small>
                          </div>
                          <div className="tsl__g">{"Arrival 17:30 · Jatin · VIP 2"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#play" />
                              </svg>
                              {"Not started"}
                            </span>
                          </div>
                          <div className="tsl__sup">
                            <small>{"–"}</small>
                          </div>
                          <div className="tsl__a">
                            <a className="btn btn--sm" href="/housekeeping/hk-02-room-status-board/#p18-512" data-leads-to="HK-P18">{"Reassign"}</a>
                            <a className="btn btn--sm" href="#rm-512" aria-label="Remove room 512">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#trash" />
                              </svg>
                            </a>
                          </div>
                        </li>
                        <li className="tsl tsl--ns">
                          <span className="tsl__n num">{"4"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-11-reordered" aria-label="Move room 514 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-11-reordered" aria-label="Move room 514 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-514">
                              <b>{"514"}</b>
                            </a>
                            <span>{"DLXS · Turndown"}</span>
                            <small>{"0.4 cr · std 12 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departs 23 Oct"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#play" />
                              </svg>
                              {"Not started"}
                            </span>
                          </div>
                          <div className="tsl__sup">
                            <small>{"–"}</small>
                          </div>
                          <div className="tsl__a">
                            <a className="btn btn--sm" href="/housekeeping/hk-02-room-status-board/#p18-514" data-leads-to="HK-P18">{"Reassign"}</a>
                            <a className="btn btn--sm" href="#rm-514" aria-label="Remove room 514">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#trash" />
                              </svg>
                            </a>
                          </div>
                        </li>
                        <li className="tsl tsl--ns">
                          <span className="tsl__n num">{"5"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-11-reordered" aria-label="Move room 515 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-11-reordered" aria-label="Move room 515 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-515">
                              <b>{"515"}</b>
                            </a>
                            <span>{"DLXS · Turndown"}</span>
                            <small>{"0.4 cr · std 12 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departs 25 Oct"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#play" />
                              </svg>
                              {"Not started"}
                            </span>
                          </div>
                          <div className="tsl__sup">
                            <small>{"–"}</small>
                          </div>
                          <div className="tsl__a">
                            <a className="btn btn--sm" href="/housekeeping/hk-02-room-status-board/#p18-515" data-leads-to="HK-P18">{"Reassign"}</a>
                            <a className="btn btn--sm" href="#rm-515" aria-label="Remove room 515">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#trash" />
                              </svg>
                            </a>
                          </div>
                        </li>
                        <li className="tsl tsl--ns">
                          <span className="tsl__n num">{"6"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-11-reordered" aria-label="Move room 516 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-11-reordered" aria-label="Move room 516 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-516">
                              <b>{"516"}</b>
                            </a>
                            <span>{"DLXS · Turndown"}</span>
                            <small>{"0.4 cr · std 12 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departs 25 Oct · Linen change due"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#play" />
                              </svg>
                              {"Not started"}
                            </span>
                          </div>
                          <div className="tsl__sup">
                            <small>{"–"}</small>
                          </div>
                          <div className="tsl__a">
                            <a className="btn btn--sm" href="/housekeeping/hk-02-room-status-board/#p18-516" data-leads-to="HK-P18">{"Reassign"}</a>
                            <a className="btn btn--sm" href="#rm-516" aria-label="Remove room 516">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#trash" />
                              </svg>
                            </a>
                          </div>
                        </li>
                        <li className="tsl tsl--ns">
                          <span className="tsl__n num">{"7"}</span>
                          <span className="tsl__ord">
                            <a href="#TS-20261022-11-reordered" aria-label="Move room 517 up">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-up" />
                              </svg>
                            </a>
                            <a href="#TS-20261022-11-reordered" aria-label="Move room 517 down">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </a>
                          </span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-517">
                              <b>{"517"}</b>
                            </a>
                            <span>{"PRMS · Turndown"}</span>
                            <small>{"credits not set · std – min"}</small>
                          </div>
                          <div className="tsl__g">{"Arrival today · Mohan · VIP 3 · Fresh flowers daily, GM welcome note on arrival"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#play" />
                              </svg>
                              {"Not started"}
                            </span>
                          </div>
                          <div className="tsl__sup">
                            <small>{"–"}</small>
                          </div>
                          <div className="tsl__a">
                            <a className="btn btn--sm" href="/housekeeping/hk-02-room-status-board/#p18-517" data-leads-to="HK-P18">{"Reassign"}</a>
                            <a className="btn btn--sm" href="#rm-517" aria-label="Remove room 517">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#trash" />
                              </svg>
                            </a>
                          </div>
                        </li>
                      </ol>
                    </section>
                    <aside className="ts-side" aria-label="Selected room">
                      <span className="ts-kick ts-kick--ink">{"Selected room"}</span>
                      <div className="ts-side__h">
                        <span className="pr__no hk--vd">{"111"}</span>
                        <div>
                          <b>{"Turndown"}</b>
                          <small>{"GDLX · Vacant dirty · Not started"}</small>
                        </div>
                      </div>
                      <dl className="rd-dl">
                        <div>
                          <dt>{"Guest"}</dt>
                          <dd>{"Mueller"}</dd>
                        </div>
                        <div>
                          <dt>{"Info"}</dt>
                          <dd>{"Arrival 16:00 · Mueller · VIP 1"}</dd>
                        </div>
                        <div>
                          <dt>{"Times"}</dt>
                          <dd>{"–"}</dd>
                        </div>
                        <div>
                          <dt>{"Standard"}</dt>
                          <dd>{"6 min · 0.3 credits"}</dd>
                        </div>
                        <div>
                          <dt>{"Supplies"}</dt>
                          <dd>{"–"}</dd>
                        </div>
                      </dl>
                      <a className="fd-link" href="/housekeeping/hk-03-room-detail/#room-111" data-leads-to="HK-03">{"Open room 111 →"}</a>
                    </aside>
                  </div>
                </article>
                <article className="ts" id="TS-20261021-01" aria-label="Task sheet TS-20261021-01">
                  <i className="ts-mk" id="TS-20261021-01-reordered" />
                  <i className="ts-mk" id="TS-20261021-01-added" />
                  <i className="ts-mk" id="TS-20261021-01-removed" />
                  <i className="ts-mk" id="TS-20261021-01-moved" />
                  <section className="ts-hero">
                    <span className="ts-hero__av">{"AP"}</span>
                    <div className="ts-hero__who">
                      <span className="ts-kick">{"TS-20261021-01 · 21 Oct 2026 · Morning 07:00–15:30"}</span>
                      <h2 className="ts-hero__t">{"Anitha P"}</h2>
                      <ul className="rd-facts">
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#map-pin" />
                          </svg>
                          {"S1"}
                        </li>
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#smartphone" />
                          </svg>
                          {"Phone 08"}
                        </li>
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#message-circle" />
                          </svg>
                          {"Malayalam, English"}
                        </li>
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"On duty 8 h 30 min"}
                        </li>
                      </ul>
                    </div>
                    <div className="ts-hero__nums">
                      <div>
                        <b className="num">
                          {"6"}
                          <small>{"/6"}</small>
                        </b>
                        <span>{"rooms done"}</span>
                      </div>
                      <div>
                        <b className="num">
                          {"4.4"}
                          <small>{"/4.4"}</small>
                        </b>
                        <span>{"credits"}</span>
                      </div>
                      <div>
                        <b className="num">{"24"}</b>
                        <span>{"avg min / room"}</span>
                      </div>
                      <div>
                        <span className="pill pill--ooo">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#lock" />
                          </svg>
                          {"Closed"}
                        </span>
                        <span>{"sheet status"}</span>
                      </div>
                    </div>
                    <span className="ts-hero__bar" aria-hidden="true">
                      <i style={{"width": "100%"}} />
                    </span>
                  </section>
                  <p className="ts-msg">
                    <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#info" />
                    </svg>
                    <b>{"Message:"}</b>
                    {" Linen count in the pantries at 14:30."}
                  </p>
                  <div className="ts-body">
                    <section className="ts-list" aria-label="Rooms in order">
                      <header className="ts-list__h">
                        <h3>{"Rooms in order"}</h3>
                        <span className="fd-muted">{"Closed sheet – read only."}</span>
                      </header>
                      <ol className="ts-lines">
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"1"}</span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-101">
                              <b>{"101"}</b>
                            </a>
                            <span>{"GDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Stayover"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"08:05 → 08:28 · "}
                              <span className="tsl__m is-over">{"23 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"2"}</span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-103">
                              <b>{"103"}</b>
                            </a>
                            <span>{"GDLX · Departure clean"}</span>
                            <small>{"1.0 cr · std 30 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departure"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"08:39 → 09:13 · "}
                              <span className="tsl__m is-over">{"34 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bed linen set ×1 · bath towels ×2 · hand towels ×2 · amenity kit ×1"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"3"}</span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-105">
                              <b>{"105"}</b>
                            </a>
                            <span>{"GDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Stayover"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"09:13 → 09:34 · "}
                              <span className="tsl__m is-over">{"21 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"4"}</span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-107">
                              <b>{"107"}</b>
                            </a>
                            <span>{"GDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Stayover"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"09:47 → 10:07 · "}
                              <span className="tsl__m is-over">{"20 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up · bed linen set ×1"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"5"}</span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-109">
                              <b>{"109"}</b>
                            </a>
                            <span>{"GDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Stayover"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"10:21 → 10:40 · "}
                              <span className="tsl__m is-over">{"19 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"6"}</span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-111">
                              <b>{"111"}</b>
                            </a>
                            <span>{"GDLX · Departure clean"}</span>
                            <small>{"1.0 cr · std 30 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departure"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"10:55 → 11:25 · "}
                              <span className="tsl__m">{"30 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bed linen set ×1 · bath towels ×2 · hand towels ×2 · amenity kit ×1"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                      </ol>
                    </section>
                    <aside className="ts-side" aria-label="Selected room">
                      <span className="ts-kick ts-kick--ink">{"Selected room"}</span>
                      <div className="ts-side__h">
                        <span className="pr__no hk--oc">{"101"}</span>
                        <div>
                          <b>{"Stayover"}</b>
                          <small>{"GDLX · Occupied clean · Inspected – passed"}</small>
                        </div>
                      </div>
                      <dl className="rd-dl">
                        <div>
                          <dt>{"Guest"}</dt>
                          <dd>{"–"}</dd>
                        </div>
                        <div>
                          <dt>{"Info"}</dt>
                          <dd>{"–"}</dd>
                        </div>
                        <div>
                          <dt>{"Times"}</dt>
                          <dd>{"08:05 → 08:28 · 23 min"}</dd>
                        </div>
                        <div>
                          <dt>{"Standard"}</dt>
                          <dd>{"18 min · 0.6 credits"}</dd>
                        </div>
                        <div>
                          <dt>{"Supplies"}</dt>
                          <dd>{"Bath towels ×2 · amenity top-up"}</dd>
                        </div>
                      </dl>
                      <a className="fd-link" href="/housekeeping/hk-03-room-detail/#room-101" data-leads-to="HK-03">{"Open room 101 →"}</a>
                    </aside>
                  </div>
                </article>
                <article className="ts" id="TS-20261021-02" aria-label="Task sheet TS-20261021-02">
                  <i className="ts-mk" id="TS-20261021-02-reordered" />
                  <i className="ts-mk" id="TS-20261021-02-added" />
                  <i className="ts-mk" id="TS-20261021-02-removed" />
                  <i className="ts-mk" id="TS-20261021-02-moved" />
                  <section className="ts-hero">
                    <span className="ts-hero__av">{"RK"}</span>
                    <div className="ts-hero__who">
                      <span className="ts-kick">{"TS-20261021-02 · 21 Oct 2026 · Morning 07:00–15:30"}</span>
                      <h2 className="ts-hero__t">{"Remya K"}</h2>
                      <ul className="rd-facts">
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#map-pin" />
                          </svg>
                          {"S1"}
                        </li>
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#smartphone" />
                          </svg>
                          {"Phone 09"}
                        </li>
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#message-circle" />
                          </svg>
                          {"Malayalam"}
                        </li>
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"On duty 8 h 30 min"}
                        </li>
                      </ul>
                    </div>
                    <div className="ts-hero__nums">
                      <div>
                        <b className="num">
                          {"6"}
                          <small>{"/6"}</small>
                        </b>
                        <span>{"rooms done"}</span>
                      </div>
                      <div>
                        <b className="num">
                          {"4.0"}
                          <small>{"/4.0"}</small>
                        </b>
                        <span>{"credits"}</span>
                      </div>
                      <div>
                        <b className="num">{"22"}</b>
                        <span>{"avg min / room"}</span>
                      </div>
                      <div>
                        <span className="pill pill--ooo">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#lock" />
                          </svg>
                          {"Closed"}
                        </span>
                        <span>{"sheet status"}</span>
                      </div>
                    </div>
                    <span className="ts-hero__bar" aria-hidden="true">
                      <i style={{"width": "100%"}} />
                    </span>
                  </section>
                  <p className="ts-msg">
                    <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#info" />
                    </svg>
                    <b>{"Message:"}</b>
                    {" Linen count in the pantries at 14:30."}
                  </p>
                  <div className="ts-body">
                    <section className="ts-list" aria-label="Rooms in order">
                      <header className="ts-list__h">
                        <h3>{"Rooms in order"}</h3>
                        <span className="fd-muted">{"Closed sheet – read only."}</span>
                      </header>
                      <ol className="ts-lines">
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"1"}</span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-102">
                              <b>{"102"}</b>
                            </a>
                            <span>{"GDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Stayover"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"08:08 → 08:26 · "}
                              <span className="tsl__m">{"18 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"2"}</span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-104">
                              <b>{"104"}</b>
                            </a>
                            <span>{"GDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Stayover"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"08:42 → 08:59 · "}
                              <span className="tsl__m">{"17 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"3"}</span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-106">
                              <b>{"106"}</b>
                            </a>
                            <span>{"GDLX · Departure clean"}</span>
                            <small>{"1.0 cr · std 30 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departure"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"09:16 → 09:44 · "}
                              <span className="tsl__m">{"28 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bed linen set ×1 · bath towels ×2 · hand towels ×2 · amenity kit ×1"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"4"}</span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-108">
                              <b>{"108"}</b>
                            </a>
                            <span>{"GDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Stayover"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"09:50 → 10:13 · "}
                              <span className="tsl__m is-over">{"23 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"5"}</span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-110">
                              <b>{"110"}</b>
                            </a>
                            <span>{"GDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Stayover"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"10:24 → 10:46 · "}
                              <span className="tsl__m is-over">{"22 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"6"}</span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-112">
                              <b>{"112"}</b>
                            </a>
                            <span>{"GDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Stayover"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"10:58 → 11:19 · "}
                              <span className="tsl__m is-over">{"21 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                      </ol>
                    </section>
                    <aside className="ts-side" aria-label="Selected room">
                      <span className="ts-kick ts-kick--ink">{"Selected room"}</span>
                      <div className="ts-side__h">
                        <span className="pr__no hk--vi">{"102"}</span>
                        <div>
                          <b>{"Stayover"}</b>
                          <small>{"GDLX · Vacant inspected · Inspected – passed"}</small>
                        </div>
                      </div>
                      <dl className="rd-dl">
                        <div>
                          <dt>{"Guest"}</dt>
                          <dd>{"–"}</dd>
                        </div>
                        <div>
                          <dt>{"Info"}</dt>
                          <dd>{"–"}</dd>
                        </div>
                        <div>
                          <dt>{"Times"}</dt>
                          <dd>{"08:08 → 08:26 · 18 min"}</dd>
                        </div>
                        <div>
                          <dt>{"Standard"}</dt>
                          <dd>{"18 min · 0.6 credits"}</dd>
                        </div>
                        <div>
                          <dt>{"Supplies"}</dt>
                          <dd>{"Bath towels ×2 · amenity top-up"}</dd>
                        </div>
                      </dl>
                      <a className="fd-link" href="/housekeeping/hk-03-room-detail/#room-102" data-leads-to="HK-03">{"Open room 102 →"}</a>
                    </aside>
                  </div>
                </article>
                <article className="ts" id="TS-20261021-03" aria-label="Task sheet TS-20261021-03">
                  <i className="ts-mk" id="TS-20261021-03-reordered" />
                  <i className="ts-mk" id="TS-20261021-03-added" />
                  <i className="ts-mk" id="TS-20261021-03-removed" />
                  <i className="ts-mk" id="TS-20261021-03-moved" />
                  <section className="ts-hero">
                    <span className="ts-hero__av">{"DM"}</span>
                    <div className="ts-hero__who">
                      <span className="ts-kick">{"TS-20261021-03 · 21 Oct 2026 · Morning 07:00–15:30"}</span>
                      <h2 className="ts-hero__t">{"Divya M"}</h2>
                      <ul className="rd-facts">
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#map-pin" />
                          </svg>
                          {"S2"}
                        </li>
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#smartphone" />
                          </svg>
                          {"Phone 10"}
                        </li>
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#message-circle" />
                          </svg>
                          {"Malayalam, Hindi"}
                        </li>
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"On duty 8 h 30 min"}
                        </li>
                      </ul>
                    </div>
                    <div className="ts-hero__nums">
                      <div>
                        <b className="num">
                          {"6"}
                          <small>{"/6"}</small>
                        </b>
                        <span>{"rooms done"}</span>
                      </div>
                      <div>
                        <b className="num">
                          {"4.4"}
                          <small>{"/4.4"}</small>
                        </b>
                        <span>{"credits"}</span>
                      </div>
                      <div>
                        <b className="num">{"24"}</b>
                        <span>{"avg min / room"}</span>
                      </div>
                      <div>
                        <span className="pill pill--ooo">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#lock" />
                          </svg>
                          {"Closed"}
                        </span>
                        <span>{"sheet status"}</span>
                      </div>
                    </div>
                    <span className="ts-hero__bar" aria-hidden="true">
                      <i style={{"width": "100%"}} />
                    </span>
                  </section>
                  <p className="ts-msg">
                    <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#info" />
                    </svg>
                    <b>{"Message:"}</b>
                    {" Linen count in the pantries at 14:30."}
                  </p>
                  <div className="ts-body">
                    <section className="ts-list" aria-label="Rooms in order">
                      <header className="ts-list__h">
                        <h3>{"Rooms in order"}</h3>
                        <span className="fd-muted">{"Closed sheet – read only."}</span>
                      </header>
                      <ol className="ts-lines">
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"1"}</span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-116">
                              <b>{"116"}</b>
                            </a>
                            <span>{"GDLX · Departure clean"}</span>
                            <small>{"1.0 cr · std 30 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departure"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"08:11 → 08:43 · "}
                              <span className="tsl__m is-over">{"32 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bed linen set ×1 · bath towels ×2 · hand towels ×2 · amenity kit ×1"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"2"}</span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-118">
                              <b>{"118"}</b>
                            </a>
                            <span>{"GDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Stayover"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"08:45 → 09:04 · "}
                              <span className="tsl__m is-over">{"19 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"3"}</span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-201">
                              <b>{"201"}</b>
                            </a>
                            <span>{"GDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Stayover"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"09:19 → 09:40 · "}
                              <span className="tsl__m is-over">{"21 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"4"}</span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-203">
                              <b>{"203"}</b>
                            </a>
                            <span>{"GDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Stayover"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"09:53 → 10:13 · "}
                              <span className="tsl__m is-over">{"20 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"5"}</span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-205">
                              <b>{"205"}</b>
                            </a>
                            <span>{"GDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Stayover"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"10:27 → 10:46 · "}
                              <span className="tsl__m is-over">{"19 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"6"}</span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-207">
                              <b>{"207"}</b>
                            </a>
                            <span>{"GDLX · Departure clean"}</span>
                            <small>{"1.0 cr · std 30 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departure"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"11:01 → 11:31 · "}
                              <span className="tsl__m">{"30 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bed linen set ×1 · bath towels ×2 · hand towels ×2 · amenity kit ×1"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                      </ol>
                    </section>
                    <aside className="ts-side" aria-label="Selected room">
                      <span className="ts-kick ts-kick--ink">{"Selected room"}</span>
                      <div className="ts-side__h">
                        <span className="pr__no hk--oc">{"116"}</span>
                        <div>
                          <b>{"Departure clean"}</b>
                          <small>{"GDLX · Occupied clean · Inspected – passed"}</small>
                        </div>
                      </div>
                      <dl className="rd-dl">
                        <div>
                          <dt>{"Guest"}</dt>
                          <dd>{"–"}</dd>
                        </div>
                        <div>
                          <dt>{"Info"}</dt>
                          <dd>{"–"}</dd>
                        </div>
                        <div>
                          <dt>{"Times"}</dt>
                          <dd>{"08:11 → 08:43 · 32 min"}</dd>
                        </div>
                        <div>
                          <dt>{"Standard"}</dt>
                          <dd>{"30 min · 1.0 credits"}</dd>
                        </div>
                        <div>
                          <dt>{"Supplies"}</dt>
                          <dd>{"Bed linen set ×1 · bath towels ×2 · hand towels ×2 · amenity kit ×1"}</dd>
                        </div>
                      </dl>
                      <a className="fd-link" href="/housekeeping/hk-03-room-detail/#room-116" data-leads-to="HK-03">{"Open room 116 →"}</a>
                    </aside>
                  </div>
                </article>
                <article className="ts" id="TS-20261021-04" aria-label="Task sheet TS-20261021-04">
                  <i className="ts-mk" id="TS-20261021-04-reordered" />
                  <i className="ts-mk" id="TS-20261021-04-added" />
                  <i className="ts-mk" id="TS-20261021-04-removed" />
                  <i className="ts-mk" id="TS-20261021-04-moved" />
                  <section className="ts-hero">
                    <span className="ts-hero__av">{"MV"}</span>
                    <div className="ts-hero__who">
                      <span className="ts-kick">{"TS-20261021-04 · 21 Oct 2026 · Morning 07:00–15:30"}</span>
                      <h2 className="ts-hero__t">{"Mariamma Varghese"}</h2>
                      <ul className="rd-facts">
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#map-pin" />
                          </svg>
                          {"S3"}
                        </li>
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#smartphone" />
                          </svg>
                          {"Phone 06"}
                        </li>
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#message-circle" />
                          </svg>
                          {"Malayalam, English"}
                        </li>
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"On duty 8 h 30 min"}
                        </li>
                      </ul>
                    </div>
                    <div className="ts-hero__nums">
                      <div>
                        <b className="num">
                          {"6"}
                          <small>{"/6"}</small>
                        </b>
                        <span>{"rooms done"}</span>
                      </div>
                      <div>
                        <b className="num">
                          {"4.4"}
                          <small>{"/4.4"}</small>
                        </b>
                        <span>{"credits"}</span>
                      </div>
                      <div>
                        <b className="num">{"24"}</b>
                        <span>{"avg min / room"}</span>
                      </div>
                      <div>
                        <span className="pill pill--ooo">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#lock" />
                          </svg>
                          {"Closed"}
                        </span>
                        <span>{"sheet status"}</span>
                      </div>
                    </div>
                    <span className="ts-hero__bar" aria-hidden="true">
                      <i style={{"width": "100%"}} />
                    </span>
                  </section>
                  <p className="ts-msg">
                    <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#info" />
                    </svg>
                    <b>{"Message:"}</b>
                    {" Linen count in the pantries at 14:30."}
                  </p>
                  <div className="ts-body">
                    <section className="ts-list" aria-label="Rooms in order">
                      <header className="ts-list__h">
                        <h3>{"Rooms in order"}</h3>
                        <span className="fd-muted">{"Closed sheet – read only."}</span>
                      </header>
                      <ol className="ts-lines">
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"1"}</span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-208">
                              <b>{"208"}</b>
                            </a>
                            <span>{"GDLX · Departure clean"}</span>
                            <small>{"1.0 cr · std 30 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departure"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"08:14 → 08:42 · "}
                              <span className="tsl__m">{"28 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bed linen set ×1 · bath towels ×2 · hand towels ×2 · amenity kit ×1"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"2"}</span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-210">
                              <b>{"210"}</b>
                            </a>
                            <span>{"GDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Stayover"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"08:48 → 09:11 · "}
                              <span className="tsl__m is-over">{"23 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"3"}</span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-212">
                              <b>{"212"}</b>
                            </a>
                            <span>{"GDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Stayover"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"09:22 → 09:44 · "}
                              <span className="tsl__m is-over">{"22 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up · bed linen set ×1"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"4"}</span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-215">
                              <b>{"215"}</b>
                            </a>
                            <span>{"GDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Stayover"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"09:56 → 10:12 · "}
                              <span className="tsl__m">{"16 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"5"}</span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-217">
                              <b>{"217"}</b>
                            </a>
                            <span>{"GDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Stayover"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"10:30 → 10:53 · "}
                              <span className="tsl__m is-over">{"23 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"6"}</span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-219">
                              <b>{"219"}</b>
                            </a>
                            <span>{"GDLX · Departure clean"}</span>
                            <small>{"1.0 cr · std 30 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departure"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"11:04 → 11:38 · "}
                              <span className="tsl__m is-over">{"34 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bed linen set ×1 · bath towels ×2 · hand towels ×2 · amenity kit ×1"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                      </ol>
                    </section>
                    <aside className="ts-side" aria-label="Selected room">
                      <span className="ts-kick ts-kick--ink">{"Selected room"}</span>
                      <div className="ts-side__h">
                        <span className="pr__no hk--oc">{"208"}</span>
                        <div>
                          <b>{"Departure clean"}</b>
                          <small>{"GDLX · Occupied clean · Inspected – passed"}</small>
                        </div>
                      </div>
                      <dl className="rd-dl">
                        <div>
                          <dt>{"Guest"}</dt>
                          <dd>{"–"}</dd>
                        </div>
                        <div>
                          <dt>{"Info"}</dt>
                          <dd>{"–"}</dd>
                        </div>
                        <div>
                          <dt>{"Times"}</dt>
                          <dd>{"08:14 → 08:42 · 28 min"}</dd>
                        </div>
                        <div>
                          <dt>{"Standard"}</dt>
                          <dd>{"30 min · 1.0 credits"}</dd>
                        </div>
                        <div>
                          <dt>{"Supplies"}</dt>
                          <dd>{"Bed linen set ×1 · bath towels ×2 · hand towels ×2 · amenity kit ×1"}</dd>
                        </div>
                      </dl>
                      <a className="fd-link" href="/housekeeping/hk-03-room-detail/#room-208" data-leads-to="HK-03">{"Open room 208 →"}</a>
                    </aside>
                  </div>
                </article>
                <article className="ts" id="TS-20261021-05" aria-label="Task sheet TS-20261021-05">
                  <i className="ts-mk" id="TS-20261021-05-reordered" />
                  <i className="ts-mk" id="TS-20261021-05-added" />
                  <i className="ts-mk" id="TS-20261021-05-removed" />
                  <i className="ts-mk" id="TS-20261021-05-moved" />
                  <section className="ts-hero">
                    <span className="ts-hero__av">{"SJ"}</span>
                    <div className="ts-hero__who">
                      <span className="ts-kick">{"TS-20261021-05 · 21 Oct 2026 · Morning 07:00–15:30"}</span>
                      <h2 className="ts-hero__t">{"Shiny Joseph"}</h2>
                      <ul className="rd-facts">
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#map-pin" />
                          </svg>
                          {"S4"}
                        </li>
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#smartphone" />
                          </svg>
                          {"Phone 11"}
                        </li>
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#message-circle" />
                          </svg>
                          {"Malayalam, English"}
                        </li>
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"On duty 8 h 30 min"}
                        </li>
                      </ul>
                    </div>
                    <div className="ts-hero__nums">
                      <div>
                        <b className="num">
                          {"6"}
                          <small>{"/6"}</small>
                        </b>
                        <span>{"rooms done"}</span>
                      </div>
                      <div>
                        <b className="num">
                          {"4.0"}
                          <small>{"/4.0"}</small>
                        </b>
                        <span>{"credits"}</span>
                      </div>
                      <div>
                        <b className="num">{"20"}</b>
                        <span>{"avg min / room"}</span>
                      </div>
                      <div>
                        <span className="pill pill--ooo">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#lock" />
                          </svg>
                          {"Closed"}
                        </span>
                        <span>{"sheet status"}</span>
                      </div>
                    </div>
                    <span className="ts-hero__bar" aria-hidden="true">
                      <i style={{"width": "100%"}} />
                    </span>
                  </section>
                  <p className="ts-msg">
                    <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#info" />
                    </svg>
                    <b>{"Message:"}</b>
                    {" Linen count in the pantries at 14:30."}
                  </p>
                  <div className="ts-body">
                    <section className="ts-list" aria-label="Rooms in order">
                      <header className="ts-list__h">
                        <h3>{"Rooms in order"}</h3>
                        <span className="fd-muted">{"Closed sheet – read only."}</span>
                      </header>
                      <ol className="ts-lines">
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"1"}</span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-303">
                              <b>{"303"}</b>
                            </a>
                            <span>{"GDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Stayover"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"08:17 → 08:38 · "}
                              <span className="tsl__m is-over">{"21 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up · bed linen set ×1"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"2"}</span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-305">
                              <b>{"305"}</b>
                            </a>
                            <span>{"GDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Stayover"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"08:51 → 09:11 · "}
                              <span className="tsl__m is-over">{"20 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"3"}</span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-307">
                              <b>{"307"}</b>
                            </a>
                            <span>{"GDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Stayover"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"09:25 → 09:44 · "}
                              <span className="tsl__m is-over">{"19 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"4"}</span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-309">
                              <b>{"309"}</b>
                            </a>
                            <span>{"GDLX · Departure clean"}</span>
                            <small>{"1.0 cr · std 30 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departure"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"09:59 → 10:29 · "}
                              <span className="tsl__m">{"30 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bed linen set ×1 · bath towels ×2 · hand towels ×2 · amenity kit ×1"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"5"}</span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-311">
                              <b>{"311"}</b>
                            </a>
                            <span>{"PDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Stayover"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"10:33 → 10:50 · "}
                              <span className="tsl__m">{"17 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"6"}</span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-313">
                              <b>{"313"}</b>
                            </a>
                            <span>{"PDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Stayover"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"11:07 → 11:23 · "}
                              <span className="tsl__m">{"16 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                      </ol>
                    </section>
                    <aside className="ts-side" aria-label="Selected room">
                      <span className="ts-kick ts-kick--ink">{"Selected room"}</span>
                      <div className="ts-side__h">
                        <span className="pr__no hk--oc">{"303"}</span>
                        <div>
                          <b>{"Stayover"}</b>
                          <small>{"GDLX · Occupied clean · Inspected – passed"}</small>
                        </div>
                      </div>
                      <dl className="rd-dl">
                        <div>
                          <dt>{"Guest"}</dt>
                          <dd>{"–"}</dd>
                        </div>
                        <div>
                          <dt>{"Info"}</dt>
                          <dd>{"–"}</dd>
                        </div>
                        <div>
                          <dt>{"Times"}</dt>
                          <dd>{"08:17 → 08:38 · 21 min"}</dd>
                        </div>
                        <div>
                          <dt>{"Standard"}</dt>
                          <dd>{"18 min · 0.6 credits"}</dd>
                        </div>
                        <div>
                          <dt>{"Supplies"}</dt>
                          <dd>{"Bath towels ×2 · amenity top-up · bed linen set ×1"}</dd>
                        </div>
                      </dl>
                      <a className="fd-link" href="/housekeeping/hk-03-room-detail/#room-303" data-leads-to="HK-03">{"Open room 303 →"}</a>
                    </aside>
                  </div>
                </article>
                <article className="ts" id="TS-20261021-06" aria-label="Task sheet TS-20261021-06">
                  <i className="ts-mk" id="TS-20261021-06-reordered" />
                  <i className="ts-mk" id="TS-20261021-06-added" />
                  <i className="ts-mk" id="TS-20261021-06-removed" />
                  <i className="ts-mk" id="TS-20261021-06-moved" />
                  <section className="ts-hero">
                    <span className="ts-hero__av">{"JM"}</span>
                    <div className="ts-hero__who">
                      <span className="ts-kick">{"TS-20261021-06 · 21 Oct 2026 · Morning 07:00–15:30"}</span>
                      <h2 className="ts-hero__t">{"Jincy Mathew"}</h2>
                      <ul className="rd-facts">
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#map-pin" />
                          </svg>
                          {"S4"}
                        </li>
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#smartphone" />
                          </svg>
                          {"–"}
                        </li>
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#message-circle" />
                          </svg>
                          {"Malayalam"}
                        </li>
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"On duty 8 h 30 min"}
                        </li>
                      </ul>
                    </div>
                    <div className="ts-hero__nums">
                      <div>
                        <b className="num">
                          {"6"}
                          <small>{"/6"}</small>
                        </b>
                        <span>{"rooms done"}</span>
                      </div>
                      <div>
                        <b className="num">
                          {"4.4"}
                          <small>{"/4.4"}</small>
                        </b>
                        <span>{"credits"}</span>
                      </div>
                      <div>
                        <b className="num">{"24"}</b>
                        <span>{"avg min / room"}</span>
                      </div>
                      <div>
                        <span className="pill pill--ooo">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#lock" />
                          </svg>
                          {"Closed"}
                        </span>
                        <span>{"sheet status"}</span>
                      </div>
                    </div>
                    <span className="ts-hero__bar" aria-hidden="true">
                      <i style={{"width": "100%"}} />
                    </span>
                  </section>
                  <p className="ts-msg">
                    <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#info" />
                    </svg>
                    <b>{"Message:"}</b>
                    {" Linen count in the pantries at 14:30."}
                  </p>
                  <div className="ts-body">
                    <section className="ts-list" aria-label="Rooms in order">
                      <header className="ts-list__h">
                        <h3>{"Rooms in order"}</h3>
                        <span className="fd-muted">{"Closed sheet – read only."}</span>
                      </header>
                      <ol className="ts-lines">
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"1"}</span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-304">
                              <b>{"304"}</b>
                            </a>
                            <span>{"GDLX · Departure clean"}</span>
                            <small>{"1.0 cr · std 30 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departure"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"08:20 → 08:48 · "}
                              <span className="tsl__m">{"28 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bed linen set ×1 · bath towels ×2 · hand towels ×2 · amenity kit ×1"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"2"}</span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-306">
                              <b>{"306"}</b>
                            </a>
                            <span>{"GDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Stayover"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"08:54 → 09:17 · "}
                              <span className="tsl__m is-over">{"23 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up · bed linen set ×1"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"3"}</span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-308">
                              <b>{"308"}</b>
                            </a>
                            <span>{"GDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Stayover"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"09:28 → 09:50 · "}
                              <span className="tsl__m is-over">{"22 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"4"}</span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-310">
                              <b>{"310"}</b>
                            </a>
                            <span>{"GDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Stayover"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"10:02 → 10:23 · "}
                              <span className="tsl__m is-over">{"21 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up · bed linen set ×1"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"5"}</span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-312">
                              <b>{"312"}</b>
                            </a>
                            <span>{"PDLX · Departure clean"}</span>
                            <small>{"1.0 cr · std 30 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departure"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"10:36 → 11:08 · "}
                              <span className="tsl__m is-over">{"32 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bed linen set ×1 · bath towels ×2 · hand towels ×2 · amenity kit ×1"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"6"}</span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-314">
                              <b>{"314"}</b>
                            </a>
                            <span>{"PDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Stayover"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"11:10 → 11:29 · "}
                              <span className="tsl__m is-over">{"19 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                      </ol>
                    </section>
                    <aside className="ts-side" aria-label="Selected room">
                      <span className="ts-kick ts-kick--ink">{"Selected room"}</span>
                      <div className="ts-side__h">
                        <span className="pr__no hk--oc">{"304"}</span>
                        <div>
                          <b>{"Departure clean"}</b>
                          <small>{"GDLX · Occupied clean · Inspected – passed"}</small>
                        </div>
                      </div>
                      <dl className="rd-dl">
                        <div>
                          <dt>{"Guest"}</dt>
                          <dd>{"–"}</dd>
                        </div>
                        <div>
                          <dt>{"Info"}</dt>
                          <dd>{"–"}</dd>
                        </div>
                        <div>
                          <dt>{"Times"}</dt>
                          <dd>{"08:20 → 08:48 · 28 min"}</dd>
                        </div>
                        <div>
                          <dt>{"Standard"}</dt>
                          <dd>{"30 min · 1.0 credits"}</dd>
                        </div>
                        <div>
                          <dt>{"Supplies"}</dt>
                          <dd>{"Bed linen set ×1 · bath towels ×2 · hand towels ×2 · amenity kit ×1"}</dd>
                        </div>
                      </dl>
                      <a className="fd-link" href="/housekeeping/hk-03-room-detail/#room-304" data-leads-to="HK-03">{"Open room 304 →"}</a>
                    </aside>
                  </div>
                </article>
                <article className="ts" id="TS-20261021-07" aria-label="Task sheet TS-20261021-07">
                  <i className="ts-mk" id="TS-20261021-07-reordered" />
                  <i className="ts-mk" id="TS-20261021-07-added" />
                  <i className="ts-mk" id="TS-20261021-07-removed" />
                  <i className="ts-mk" id="TS-20261021-07-moved" />
                  <section className="ts-hero">
                    <span className="ts-hero__av">{"RS"}</span>
                    <div className="ts-hero__who">
                      <span className="ts-kick">{"TS-20261021-07 · 21 Oct 2026 · Morning 07:00–15:30"}</span>
                      <h2 className="ts-hero__t">{"Rekha S"}</h2>
                      <ul className="rd-facts">
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#map-pin" />
                          </svg>
                          {"S5"}
                        </li>
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#smartphone" />
                          </svg>
                          {"Phone 12"}
                        </li>
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#message-circle" />
                          </svg>
                          {"Malayalam, Tamil"}
                        </li>
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"On duty 8 h 30 min"}
                        </li>
                      </ul>
                    </div>
                    <div className="ts-hero__nums">
                      <div>
                        <b className="num">
                          {"4"}
                          <small>{"/7"}</small>
                        </b>
                        <span>{"rooms done"}</span>
                      </div>
                      <div>
                        <b className="num">
                          {"2.8"}
                          <small>{"/4.0"}</small>
                        </b>
                        <span>{"credits"}</span>
                      </div>
                      <div>
                        <b className="num">{"22"}</b>
                        <span>{"avg min / room"}</span>
                      </div>
                      <div>
                        <span className="pill pill--ooo">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#lock" />
                          </svg>
                          {"Closed"}
                        </span>
                        <span>{"sheet status"}</span>
                      </div>
                    </div>
                    <span className="ts-hero__bar" aria-hidden="true">
                      <i style={{"width": "70%"}} />
                    </span>
                  </section>
                  <p className="ts-msg">
                    <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#info" />
                    </svg>
                    <b>{"Message:"}</b>
                    {" Linen count in the pantries at 14:30."}
                  </p>
                  <div className="ts-body">
                    <section className="ts-list" aria-label="Rooms in order">
                      <header className="ts-list__h">
                        <h3>{"Rooms in order"}</h3>
                        <span className="fd-muted">{"Closed sheet – read only."}</span>
                      </header>
                      <ol className="ts-lines">
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"1"}</span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-315">
                              <b>{"315"}</b>
                            </a>
                            <span>{"PDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Stayover"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"08:23 → 08:40 · "}
                              <span className="tsl__m">{"17 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--fl">
                          <span className="tsl__n num">{"2"}</span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-317">
                              <b>{"317"}</b>
                            </a>
                            <span>{"PDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Stayover"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#x-circle" />
                              </svg>
                              {"Failed – rework"}
                            </span>
                            <small>
                              {"08:57 → 09:13 · "}
                              <span className="tsl__m is-over">{"27 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up"}</small>
                            <small className="tsl__rem">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#message-square" />
                              </svg>
                              {"Spot check 78 % – hair in the shower, mirror smears (Joseph Paul). Rework done 10:34, passed."}
                            </small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"3"}</span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-317">
                              <b>{"317"}</b>
                            </a>
                            <span>{"PDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Stayover"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"10:20 → 10:34 · "}
                              <span className="tsl__m">{"14 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up"}</small>
                            <small className="tsl__rem">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#message-square" />
                              </svg>
                              {"Rework after the failed spot check – passed 10:34 (92 %)"}
                            </small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--rf">
                          <span className="tsl__n num">{"4"}</span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-319">
                              <b>{"319"}</b>
                            </a>
                            <span>{"PDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Stayover"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#user-x" />
                              </svg>
                              {"Refused service"}
                            </span>
                          </div>
                          <div className="tsl__sup">
                            <small>{"–"}</small>
                            <small className="tsl__rem">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#message-square" />
                              </svg>
                              {"Guest declined service at 10:50 – reason: “not needed today” (refused-service code RS-01)"}
                            </small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--sk">
                          <span className="tsl__n num">{"5"}</span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-402">
                              <b>{"402"}</b>
                            </a>
                            <span>{"PDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Stayover"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevrons-right" />
                              </svg>
                              {"Skipped"}
                            </span>
                          </div>
                          <div className="tsl__sup">
                            <small>{"–"}</small>
                            <small className="tsl__rem">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#message-square" />
                              </svg>
                              {"Sleep-out room – front desk asked to wait; not serviced (code SK-02)"}
                            </small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"6"}</span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-404">
                              <b>{"404"}</b>
                            </a>
                            <span>{"PDLX · Departure clean"}</span>
                            <small>{"1.0 cr · std 30 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departure"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"10:39 → 11:07 · "}
                              <span className="tsl__m">{"28 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bed linen set ×1 · bath towels ×2 · hand towels ×2 · amenity kit ×1"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"7"}</span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-406">
                              <b>{"406"}</b>
                            </a>
                            <span>{"PDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Stayover"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"11:13 → 11:36 · "}
                              <span className="tsl__m is-over">{"23 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                      </ol>
                    </section>
                    <aside className="ts-side" aria-label="Selected room">
                      <span className="ts-kick ts-kick--ink">{"Selected room"}</span>
                      <div className="ts-side__h">
                        <span className="pr__no hk--vi">{"317"}</span>
                        <div>
                          <b>{"Stayover"}</b>
                          <small>{"PDLX · Vacant inspected · Failed – rework"}</small>
                        </div>
                      </div>
                      <dl className="rd-dl">
                        <div>
                          <dt>{"Guest"}</dt>
                          <dd>{"–"}</dd>
                        </div>
                        <div>
                          <dt>{"Info"}</dt>
                          <dd>{"–"}</dd>
                        </div>
                        <div>
                          <dt>{"Times"}</dt>
                          <dd>{"08:57 → 09:13 · 27 min"}</dd>
                        </div>
                        <div>
                          <dt>{"Standard"}</dt>
                          <dd>{"18 min · 0.6 credits"}</dd>
                        </div>
                        <div>
                          <dt>{"Supplies"}</dt>
                          <dd>{"Bath towels ×2 · amenity top-up"}</dd>
                        </div>
                      </dl>
                      <a className="fd-link" href="/housekeeping/hk-03-room-detail/#room-317" data-leads-to="HK-03">{"Open room 317 →"}</a>
                    </aside>
                  </div>
                </article>
                <article className="ts" id="TS-20261021-08" aria-label="Task sheet TS-20261021-08">
                  <i className="ts-mk" id="TS-20261021-08-reordered" />
                  <i className="ts-mk" id="TS-20261021-08-added" />
                  <i className="ts-mk" id="TS-20261021-08-removed" />
                  <i className="ts-mk" id="TS-20261021-08-moved" />
                  <section className="ts-hero">
                    <span className="ts-hero__av">{"LG"}</span>
                    <div className="ts-hero__who">
                      <span className="ts-kick">{"TS-20261021-08 · 21 Oct 2026 · Morning 07:00–15:30"}</span>
                      <h2 className="ts-hero__t">{"Lissy George"}</h2>
                      <ul className="rd-facts">
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#map-pin" />
                          </svg>
                          {"S6"}
                        </li>
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#smartphone" />
                          </svg>
                          {"Phone 13"}
                        </li>
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#message-circle" />
                          </svg>
                          {"Malayalam, English"}
                        </li>
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"On duty 8 h 30 min"}
                        </li>
                      </ul>
                    </div>
                    <div className="ts-hero__nums">
                      <div>
                        <b className="num">
                          {"6"}
                          <small>{"/6"}</small>
                        </b>
                        <span>{"rooms done"}</span>
                      </div>
                      <div>
                        <b className="num">
                          {"4.0"}
                          <small>{"/4.0"}</small>
                        </b>
                        <span>{"credits"}</span>
                      </div>
                      <div>
                        <b className="num">{"22"}</b>
                        <span>{"avg min / room"}</span>
                      </div>
                      <div>
                        <span className="pill pill--ooo">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#lock" />
                          </svg>
                          {"Closed"}
                        </span>
                        <span>{"sheet status"}</span>
                      </div>
                    </div>
                    <span className="ts-hero__bar" aria-hidden="true">
                      <i style={{"width": "100%"}} />
                    </span>
                  </section>
                  <p className="ts-msg">
                    <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#info" />
                    </svg>
                    <b>{"Message:"}</b>
                    {" Linen count in the pantries at 14:30."}
                  </p>
                  <div className="ts-body">
                    <section className="ts-list" aria-label="Rooms in order">
                      <header className="ts-list__h">
                        <h3>{"Rooms in order"}</h3>
                        <span className="fd-muted">{"Closed sheet – read only."}</span>
                      </header>
                      <ol className="ts-lines">
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"1"}</span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-410">
                              <b>{"410"}</b>
                            </a>
                            <span>{"PDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Stayover"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"08:26 → 08:48 · "}
                              <span className="tsl__m is-over">{"22 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"2"}</span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-412">
                              <b>{"412"}</b>
                            </a>
                            <span>{"PDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Stayover"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"09:00 → 09:21 · "}
                              <span className="tsl__m is-over">{"21 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"3"}</span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-414">
                              <b>{"414"}</b>
                            </a>
                            <span>{"PDLX · Departure clean"}</span>
                            <small>{"1.0 cr · std 30 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departure"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"09:34 → 10:06 · "}
                              <span className="tsl__m is-over">{"32 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bed linen set ×1 · bath towels ×2 · hand towels ×2 · amenity kit ×1"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"4"}</span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-416">
                              <b>{"416"}</b>
                            </a>
                            <span>{"PDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Stayover"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"10:08 → 10:27 · "}
                              <span className="tsl__m is-over">{"19 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"5"}</span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-418">
                              <b>{"418"}</b>
                            </a>
                            <span>{"PDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Stayover"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"10:42 → 11:00 · "}
                              <span className="tsl__m">{"18 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"6"}</span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-502">
                              <b>{"502"}</b>
                            </a>
                            <span>{"PDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Stayover"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"11:16 → 11:39 · "}
                              <span className="tsl__m is-over">{"23 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                      </ol>
                    </section>
                    <aside className="ts-side" aria-label="Selected room">
                      <span className="ts-kick ts-kick--ink">{"Selected room"}</span>
                      <div className="ts-side__h">
                        <span className="pr__no hk--od">{"410"}</span>
                        <div>
                          <b>{"Stayover"}</b>
                          <small>{"PDLX · Occupied dirty · Inspected – passed"}</small>
                        </div>
                      </div>
                      <dl className="rd-dl">
                        <div>
                          <dt>{"Guest"}</dt>
                          <dd>{"–"}</dd>
                        </div>
                        <div>
                          <dt>{"Info"}</dt>
                          <dd>{"–"}</dd>
                        </div>
                        <div>
                          <dt>{"Times"}</dt>
                          <dd>{"08:26 → 08:48 · 22 min"}</dd>
                        </div>
                        <div>
                          <dt>{"Standard"}</dt>
                          <dd>{"18 min · 0.6 credits"}</dd>
                        </div>
                        <div>
                          <dt>{"Supplies"}</dt>
                          <dd>{"Bath towels ×2 · amenity top-up"}</dd>
                        </div>
                      </dl>
                      <a className="fd-link" href="/housekeeping/hk-03-room-detail/#room-410" data-leads-to="HK-03">{"Open room 410 →"}</a>
                    </aside>
                  </div>
                </article>
                <article className="ts" id="TS-20261021-09" aria-label="Task sheet TS-20261021-09">
                  <i className="ts-mk" id="TS-20261021-09-reordered" />
                  <i className="ts-mk" id="TS-20261021-09-added" />
                  <i className="ts-mk" id="TS-20261021-09-removed" />
                  <i className="ts-mk" id="TS-20261021-09-moved" />
                  <section className="ts-hero">
                    <span className="ts-hero__av">{"SK"}</span>
                    <div className="ts-hero__who">
                      <span className="ts-kick">{"TS-20261021-09 · 21 Oct 2026 · Morning 07:00–15:30"}</span>
                      <h2 className="ts-hero__t">{"Saritha K"}</h2>
                      <ul className="rd-facts">
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#map-pin" />
                          </svg>
                          {"S7"}
                        </li>
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#smartphone" />
                          </svg>
                          {"Phone 07"}
                        </li>
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#message-circle" />
                          </svg>
                          {"Malayalam, English, Hindi"}
                        </li>
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"On duty 8 h 30 min"}
                        </li>
                      </ul>
                    </div>
                    <div className="ts-hero__nums">
                      <div>
                        <b className="num">
                          {"4"}
                          <small>{"/4"}</small>
                        </b>
                        <span>{"rooms done"}</span>
                      </div>
                      <div>
                        <b className="num">
                          {"2.8"}
                          <small>{"/2.8"}</small>
                        </b>
                        <span>{"credits"}</span>
                      </div>
                      <div>
                        <b className="num">{"24"}</b>
                        <span>{"avg min / room"}</span>
                      </div>
                      <div>
                        <span className="pill pill--ooo">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#lock" />
                          </svg>
                          {"Closed"}
                        </span>
                        <span>{"sheet status"}</span>
                      </div>
                    </div>
                    <span className="ts-hero__bar" aria-hidden="true">
                      <i style={{"width": "100%"}} />
                    </span>
                  </section>
                  <p className="ts-msg">
                    <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#info" />
                    </svg>
                    <b>{"Message:"}</b>
                    {" Linen count in the pantries at 14:30."}
                  </p>
                  <div className="ts-body">
                    <section className="ts-list" aria-label="Rooms in order">
                      <header className="ts-list__h">
                        <h3>{"Rooms in order"}</h3>
                        <span className="fd-muted">{"Closed sheet – read only."}</span>
                      </header>
                      <ol className="ts-lines">
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"1"}</span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-506">
                              <b>{"506"}</b>
                            </a>
                            <span>{"PDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Stayover"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"08:29 → 08:51 · "}
                              <span className="tsl__m is-over">{"22 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up · bed linen set ×1"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"2"}</span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-508">
                              <b>{"508"}</b>
                            </a>
                            <span>{"PDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Stayover"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"09:03 → 09:24 · "}
                              <span className="tsl__m is-over">{"21 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"3"}</span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-510">
                              <b>{"510"}</b>
                            </a>
                            <span>{"PDLX · Departure clean"}</span>
                            <small>{"1.0 cr · std 30 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departure"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"09:37 → 10:09 · "}
                              <span className="tsl__m is-over">{"32 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bed linen set ×1 · bath towels ×2 · hand towels ×2 · amenity kit ×1"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"4"}</span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-512">
                              <b>{"512"}</b>
                            </a>
                            <span>{"PDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Stayover"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"10:11 → 10:30 · "}
                              <span className="tsl__m is-over">{"19 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                      </ol>
                    </section>
                    <aside className="ts-side" aria-label="Selected room">
                      <span className="ts-kick ts-kick--ink">{"Selected room"}</span>
                      <div className="ts-side__h">
                        <span className="pr__no hk--oc">{"506"}</span>
                        <div>
                          <b>{"Stayover"}</b>
                          <small>{"PDLX · Occupied clean · Inspected – passed"}</small>
                        </div>
                      </div>
                      <dl className="rd-dl">
                        <div>
                          <dt>{"Guest"}</dt>
                          <dd>{"–"}</dd>
                        </div>
                        <div>
                          <dt>{"Info"}</dt>
                          <dd>{"–"}</dd>
                        </div>
                        <div>
                          <dt>{"Times"}</dt>
                          <dd>{"08:29 → 08:51 · 22 min"}</dd>
                        </div>
                        <div>
                          <dt>{"Standard"}</dt>
                          <dd>{"18 min · 0.6 credits"}</dd>
                        </div>
                        <div>
                          <dt>{"Supplies"}</dt>
                          <dd>{"Bath towels ×2 · amenity top-up · bed linen set ×1"}</dd>
                        </div>
                      </dl>
                      <a className="fd-link" href="/housekeeping/hk-03-room-detail/#room-506" data-leads-to="HK-03">{"Open room 506 →"}</a>
                    </aside>
                  </div>
                </article>
                <article className="ts" id="TS-20261021-10" aria-label="Task sheet TS-20261021-10">
                  <i className="ts-mk" id="TS-20261021-10-reordered" />
                  <i className="ts-mk" id="TS-20261021-10-added" />
                  <i className="ts-mk" id="TS-20261021-10-removed" />
                  <i className="ts-mk" id="TS-20261021-10-moved" />
                  <section className="ts-hero">
                    <span className="ts-hero__av">{"RV"}</span>
                    <div className="ts-hero__who">
                      <span className="ts-kick">{"TS-20261021-10 · 21 Oct 2026 · Morning 07:00–15:30"}</span>
                      <h2 className="ts-hero__t">{"Rani V"}</h2>
                      <ul className="rd-facts">
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#map-pin" />
                          </svg>
                          {"S6"}
                        </li>
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#smartphone" />
                          </svg>
                          {"–"}
                        </li>
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#message-circle" />
                          </svg>
                          {"Malayalam"}
                        </li>
                        <li>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"On duty 8 h 30 min"}
                        </li>
                      </ul>
                    </div>
                    <div className="ts-hero__nums">
                      <div>
                        <b className="num">
                          {"3"}
                          <small>{"/3"}</small>
                        </b>
                        <span>{"rooms done"}</span>
                      </div>
                      <div>
                        <b className="num">
                          {"2.6"}
                          <small>{"/2.6"}</small>
                        </b>
                        <span>{"credits"}</span>
                      </div>
                      <div>
                        <b className="num">{"27"}</b>
                        <span>{"avg min / room"}</span>
                      </div>
                      <div>
                        <span className="pill pill--ooo">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#lock" />
                          </svg>
                          {"Closed"}
                        </span>
                        <span>{"sheet status"}</span>
                      </div>
                    </div>
                    <span className="ts-hero__bar" aria-hidden="true">
                      <i style={{"width": "100%"}} />
                    </span>
                  </section>
                  <p className="ts-msg">
                    <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#info" />
                    </svg>
                    <b>{"Message:"}</b>
                    {" Linen count in the pantries at 14:30."}
                  </p>
                  <div className="ts-body">
                    <section className="ts-list" aria-label="Rooms in order">
                      <header className="ts-list__h">
                        <h3>{"Rooms in order"}</h3>
                        <span className="fd-muted">{"Closed sheet – read only."}</span>
                      </header>
                      <ol className="ts-lines">
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"1"}</span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-412">
                              <b>{"412"}</b>
                            </a>
                            <span>{"PDLX · Departure clean"}</span>
                            <small>{"1.0 cr · std 30 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departure"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"08:32 → 09:04 · "}
                              <span className="tsl__m is-over">{"32 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bed linen set ×1 · bath towels ×2 · hand towels ×2 · amenity kit ×1"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"2"}</span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-413">
                              <b>{"413"}</b>
                            </a>
                            <span>{"PDLX · Stayover"}</span>
                            <small>{"0.6 cr · std 18 min"}</small>
                          </div>
                          <div className="tsl__g">{"Stayover"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"09:06 → 09:22 · "}
                              <span className="tsl__m">{"16 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bath towels ×2 · amenity top-up"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                        <li className="tsl tsl--ok">
                          <span className="tsl__n num">{"3"}</span>
                          <div className="tsl__room">
                            <a href="/housekeeping/hk-03-room-detail/#room-414">
                              <b>{"414"}</b>
                            </a>
                            <span>{"PDLX · Departure clean"}</span>
                            <small>{"1.0 cr · std 30 min"}</small>
                          </div>
                          <div className="tsl__g">{"Departure"}</div>
                          <div className="tsl__st">
                            <span className="tsl__s">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Inspected – passed"}
                            </span>
                            <small>
                              {"09:40 → 10:12 · "}
                              <span className="tsl__m is-over">{"32 min"}</span>
                            </small>
                          </div>
                          <div className="tsl__sup">
                            <small>{"Bed linen set ×1 · bath towels ×2 · hand towels ×2 · amenity kit ×1"}</small>
                          </div>
                          <div className="tsl__a" />
                        </li>
                      </ol>
                    </section>
                    <aside className="ts-side" aria-label="Selected room">
                      <span className="ts-kick ts-kick--ink">{"Selected room"}</span>
                      <div className="ts-side__h">
                        <span className="pr__no hk--vi">{"412"}</span>
                        <div>
                          <b>{"Departure clean"}</b>
                          <small>{"PDLX · Vacant inspected · Inspected – passed"}</small>
                        </div>
                      </div>
                      <dl className="rd-dl">
                        <div>
                          <dt>{"Guest"}</dt>
                          <dd>{"–"}</dd>
                        </div>
                        <div>
                          <dt>{"Info"}</dt>
                          <dd>{"–"}</dd>
                        </div>
                        <div>
                          <dt>{"Times"}</dt>
                          <dd>{"08:32 → 09:04 · 32 min"}</dd>
                        </div>
                        <div>
                          <dt>{"Standard"}</dt>
                          <dd>{"30 min · 1.0 credits"}</dd>
                        </div>
                        <div>
                          <dt>{"Supplies"}</dt>
                          <dd>{"Bed linen set ×1 · bath towels ×2 · hand towels ×2 · amenity kit ×1"}</dd>
                        </div>
                      </dl>
                      <a className="fd-link" href="/housekeeping/hk-03-room-detail/#room-412" data-leads-to="HK-03">{"Open room 412 →"}</a>
                    </aside>
                  </div>
                </article>
              </div>
              <div className="modal modal--sm" id="hk06-add" data-code="HK-06-add" role="dialog" aria-modal="true" aria-labelledby="hk06-add-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping/hk-06-task-sheet-detail/" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="hk06-add-t">{"Add room to this sheet"}</h2>
                      <p className="modal__desc">{"Rooms not on any sheet today. The credits of the sheet are recalculated and the attendant’s phone list is updated."}</p>
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
                        <i className="pm" id="add-TS-20261022-01" />
                        <i className="pm" id="add-TS-20261022-02" />
                        <i className="pm" id="add-TS-20261022-03" />
                        <i className="pm" id="add-TS-20261022-04" />
                        <i className="pm" id="add-TS-20261022-05" />
                        <i className="pm" id="add-TS-20261022-06" />
                        <i className="pm" id="add-TS-20261022-07" />
                        <i className="pm" id="add-TS-20261022-08" />
                        <i className="pm" id="add-TS-20261022-09" />
                        <i className="pm" id="add-TS-20261022-10" />
                        <i className="pm" id="add-TS-20261022-11" />
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hk06-add-room">
                          {"Room "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hk06-add-room" name="room" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose an unassigned room"}</option>
                            <option value="515">{"515 · DLXS · Stayover · 1.2 credits · no section"}</option>
                            <option value="516">{"516 · DLXS · Stayover · 1.2 credits · no section"}</option>
                            <option value="517">{"517 · PRMS · Departure · credits not set · no section"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Suites go to a senior attendant (HKS-10)."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary pb pb--TS-20261022-01" type="submit" formAction="/housekeeping/hk-06-task-sheet-detail/#TS-20261022-01-added">{"Add room"}</button>
                    <button className="btn btn--primary pb pb--TS-20261022-02" type="submit" formAction="/housekeeping/hk-06-task-sheet-detail/#TS-20261022-02-added">{"Add room"}</button>
                    <button className="btn btn--primary pb pb--TS-20261022-03" type="submit" formAction="/housekeeping/hk-06-task-sheet-detail/#TS-20261022-03-added">{"Add room"}</button>
                    <button className="btn btn--primary pb pb--TS-20261022-04" type="submit" formAction="/housekeeping/hk-06-task-sheet-detail/#TS-20261022-04-added">{"Add room"}</button>
                    <button className="btn btn--primary pb pb--TS-20261022-05" type="submit" formAction="/housekeeping/hk-06-task-sheet-detail/#TS-20261022-05-added">{"Add room"}</button>
                    <button className="btn btn--primary pb pb--TS-20261022-06" type="submit" formAction="/housekeeping/hk-06-task-sheet-detail/#TS-20261022-06-added">{"Add room"}</button>
                    <button className="btn btn--primary pb pb--TS-20261022-07" type="submit" formAction="/housekeeping/hk-06-task-sheet-detail/#TS-20261022-07-added">{"Add room"}</button>
                    <button className="btn btn--primary pb pb--TS-20261022-08" type="submit" formAction="/housekeeping/hk-06-task-sheet-detail/#TS-20261022-08-added">{"Add room"}</button>
                    <button className="btn btn--primary pb pb--TS-20261022-09" type="submit" formAction="/housekeeping/hk-06-task-sheet-detail/#TS-20261022-09-added">{"Add room"}</button>
                    <button className="btn btn--primary pb pb--TS-20261022-10" type="submit" formAction="/housekeeping/hk-06-task-sheet-detail/#TS-20261022-10-added">{"Add room"}</button>
                    <button className="btn btn--primary pb pb--TS-20261022-11" type="submit" formAction="/housekeeping/hk-06-task-sheet-detail/#TS-20261022-11-added">{"Add room"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="hk06-rm" data-code="HK-06-remove" role="dialog" aria-modal="true" aria-labelledby="hk06-rm-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/housekeeping/hk-06-task-sheet-detail/" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="hk06-rm-t">{"Remove room from the sheet"}</h2>
                      <p className="modal__desc">{"The room goes back to the unassigned list in Room Allocation (HK-04)."}</p>
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
                        <i className="pm" id="rm-110" />
                        <i className="pm" id="rm-205" />
                        <i className="pm" id="rm-207" />
                        <i className="pm" id="rm-208" />
                        <i className="pm" id="rm-216" />
                        <i className="pm" id="rm-305" />
                        <i className="pm" id="rm-316" />
                        <i className="pm" id="rm-319" />
                        <i className="pm" id="rm-402" />
                        <i className="pm" id="rm-404" />
                        <i className="pm" id="rm-406" />
                        <i className="pm" id="rm-410" />
                        <i className="pm" id="rm-415" />
                        <i className="pm" id="rm-416" />
                        <i className="pm" id="rm-503" />
                        <i className="pm" id="rm-512" />
                        <i className="pm" id="rm-504" />
                        <i className="pm" id="rm-505" />
                        <i className="pm" id="rm-510" />
                        <i className="pm" id="rm-111" />
                        <i className="pm" id="rm-504" />
                        <i className="pm" id="rm-512" />
                        <i className="pm" id="rm-514" />
                        <i className="pm" id="rm-515" />
                        <i className="pm" id="rm-516" />
                        <i className="pm" id="rm-517" />
                      </div>
                      <div className="field field--wide">
                        <div className="pr pr--110">
                          <span className="pr__no hk--od">{"110"}</span>
                          <span className="pr__t">
                            <b>{"Room 110 · Stayover"}</b>
                            <small>{"From Remya K · TS-20261022-02"}</small>
                          </span>
                        </div>
                        <div className="pr pr--205">
                          <span className="pr__no hk--oc">{"205"}</span>
                          <span className="pr__t">
                            <b>{"Room 205 · Departure clean"}</b>
                            <small>{"From Divya M · TS-20261022-03"}</small>
                          </span>
                        </div>
                        <div className="pr pr--207">
                          <span className="pr__no hk--oc">{"207"}</span>
                          <span className="pr__t">
                            <b>{"Room 207 · Departure clean"}</b>
                            <small>{"From Divya M · TS-20261022-03"}</small>
                          </span>
                        </div>
                        <div className="pr pr--208">
                          <span className="pr__no hk--oc">{"208"}</span>
                          <span className="pr__t">
                            <b>{"Room 208 · Stayover"}</b>
                            <small>{"From Mariamma Varghese · TS-20261022-04"}</small>
                          </span>
                        </div>
                        <div className="pr pr--216">
                          <span className="pr__no hk--oc">{"216"}</span>
                          <span className="pr__t">
                            <b>{"Room 216 · Departure clean"}</b>
                            <small>{"From Mariamma Varghese · TS-20261022-04"}</small>
                          </span>
                        </div>
                        <div className="pr pr--305">
                          <span className="pr__no hk--oc">{"305"}</span>
                          <span className="pr__t">
                            <b>{"Room 305 · Departure clean"}</b>
                            <small>{"From Shiny Joseph · TS-20261022-05"}</small>
                          </span>
                        </div>
                        <div className="pr pr--316">
                          <span className="pr__no hk--oc">{"316"}</span>
                          <span className="pr__t">
                            <b>{"Room 316 · Departure clean"}</b>
                            <small>{"From Rekha S · TS-20261022-07"}</small>
                          </span>
                        </div>
                        <div className="pr pr--319">
                          <span className="pr__no hk--oc">{"319"}</span>
                          <span className="pr__t">
                            <b>{"Room 319 · Departure clean"}</b>
                            <small>{"From Rekha S · TS-20261022-07"}</small>
                          </span>
                        </div>
                        <div className="pr pr--402">
                          <span className="pr__no hk--oc">{"402"}</span>
                          <span className="pr__t">
                            <b>{"Room 402 · Stayover"}</b>
                            <small>{"From Rekha S · TS-20261022-07"}</small>
                          </span>
                        </div>
                        <div className="pr pr--404">
                          <span className="pr__no hk--oc">{"404"}</span>
                          <span className="pr__t">
                            <b>{"Room 404 · Departure clean"}</b>
                            <small>{"From Rekha S · TS-20261022-07"}</small>
                          </span>
                        </div>
                        <div className="pr pr--406">
                          <span className="pr__no hk--oc">{"406"}</span>
                          <span className="pr__t">
                            <b>{"Room 406 · Departure clean"}</b>
                            <small>{"From Rekha S · TS-20261022-07"}</small>
                          </span>
                        </div>
                        <div className="pr pr--410">
                          <span className="pr__no hk--od">{"410"}</span>
                          <span className="pr__t">
                            <b>{"Room 410 · Stayover"}</b>
                            <small>{"From Lissy George · TS-20261022-08"}</small>
                          </span>
                        </div>
                        <div className="pr pr--415">
                          <span className="pr__no hk--oc">{"415"}</span>
                          <span className="pr__t">
                            <b>{"Room 415 · Departure clean"}</b>
                            <small>{"From Lissy George · TS-20261022-08"}</small>
                          </span>
                        </div>
                        <div className="pr pr--416">
                          <span className="pr__no hk--oc">{"416"}</span>
                          <span className="pr__t">
                            <b>{"Room 416 · Departure clean"}</b>
                            <small>{"From Lissy George · TS-20261022-08"}</small>
                          </span>
                        </div>
                        <div className="pr pr--503">
                          <span className="pr__no hk--oc">{"503"}</span>
                          <span className="pr__t">
                            <b>{"Room 503 · Departure clean"}</b>
                            <small>{"From Lissy George · TS-20261022-08"}</small>
                          </span>
                        </div>
                        <div className="pr pr--512">
                          <span className="pr__no hk--vd">{"512"}</span>
                          <span className="pr__t">
                            <b>{"Room 512 · Departure clean"}</b>
                            <small>{"From Saritha K · TS-20261022-09"}</small>
                          </span>
                        </div>
                        <div className="pr pr--504">
                          <span className="pr__no hk--oc">{"504"}</span>
                          <span className="pr__t">
                            <b>{"Room 504 · Stayover"}</b>
                            <small>{"From Saritha K · TS-20261022-09"}</small>
                          </span>
                        </div>
                        <div className="pr pr--505">
                          <span className="pr__no hk--oc">{"505"}</span>
                          <span className="pr__t">
                            <b>{"Room 505 · Departure clean"}</b>
                            <small>{"From Saritha K · TS-20261022-09"}</small>
                          </span>
                        </div>
                        <div className="pr pr--510">
                          <span className="pr__no hk--od">{"510"}</span>
                          <span className="pr__t">
                            <b>{"Room 510 · Stayover"}</b>
                            <small>{"From Saritha K · TS-20261022-09"}</small>
                          </span>
                        </div>
                        <div className="pr pr--111">
                          <span className="pr__no hk--vd">{"111"}</span>
                          <span className="pr__t">
                            <b>{"Room 111 · Turndown"}</b>
                            <small>{"From Leena D · TS-20261022-11"}</small>
                          </span>
                        </div>
                        <div className="pr pr--504">
                          <span className="pr__no hk--oc">{"504"}</span>
                          <span className="pr__t">
                            <b>{"Room 504 · Turndown"}</b>
                            <small>{"From Leena D · TS-20261022-11"}</small>
                          </span>
                        </div>
                        <div className="pr pr--512">
                          <span className="pr__no hk--vd">{"512"}</span>
                          <span className="pr__t">
                            <b>{"Room 512 · Turndown"}</b>
                            <small>{"From Leena D · TS-20261022-11"}</small>
                          </span>
                        </div>
                        <div className="pr pr--514">
                          <span className="pr__no hk--oc">{"514"}</span>
                          <span className="pr__t">
                            <b>{"Room 514 · Turndown"}</b>
                            <small>{"From Leena D · TS-20261022-11"}</small>
                          </span>
                        </div>
                        <div className="pr pr--515">
                          <span className="pr__no hk--oc">{"515"}</span>
                          <span className="pr__t">
                            <b>{"Room 515 · Turndown"}</b>
                            <small>{"From Leena D · TS-20261022-11"}</small>
                          </span>
                        </div>
                        <div className="pr pr--516">
                          <span className="pr__no hk--oc">{"516"}</span>
                          <span className="pr__t">
                            <b>{"Room 516 · Turndown"}</b>
                            <small>{"From Leena D · TS-20261022-11"}</small>
                          </span>
                        </div>
                        <div className="pr pr--517">
                          <span className="pr__no hk--oc">{"517"}</span>
                          <span className="pr__t">
                            <b>{"Room 517 · Turndown"}</b>
                            <small>{"From Leena D · TS-20261022-11"}</small>
                          </span>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="hk06-rm-r">
                          {"Reason "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hk06-rm-r" name="reason" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a reason"}</option>
                            <option>{"Guest refused service"}</option>
                            <option>{"Room taken out of order"}</option>
                            <option>{"Moved to evening shift"}</option>
                            <option>{"Attendant overloaded"}</option>
                            <option>{"Other"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary pb pb--110" type="submit" formAction="/housekeeping/hk-06-task-sheet-detail/#TS-20261022-02-removed">{"Remove"}</button>
                    <button className="btn btn--primary pb pb--205" type="submit" formAction="/housekeeping/hk-06-task-sheet-detail/#TS-20261022-03-removed">{"Remove"}</button>
                    <button className="btn btn--primary pb pb--207" type="submit" formAction="/housekeeping/hk-06-task-sheet-detail/#TS-20261022-03-removed">{"Remove"}</button>
                    <button className="btn btn--primary pb pb--208" type="submit" formAction="/housekeeping/hk-06-task-sheet-detail/#TS-20261022-04-removed">{"Remove"}</button>
                    <button className="btn btn--primary pb pb--216" type="submit" formAction="/housekeeping/hk-06-task-sheet-detail/#TS-20261022-04-removed">{"Remove"}</button>
                    <button className="btn btn--primary pb pb--305" type="submit" formAction="/housekeeping/hk-06-task-sheet-detail/#TS-20261022-05-removed">{"Remove"}</button>
                    <button className="btn btn--primary pb pb--316" type="submit" formAction="/housekeeping/hk-06-task-sheet-detail/#TS-20261022-07-removed">{"Remove"}</button>
                    <button className="btn btn--primary pb pb--319" type="submit" formAction="/housekeeping/hk-06-task-sheet-detail/#TS-20261022-07-removed">{"Remove"}</button>
                    <button className="btn btn--primary pb pb--402" type="submit" formAction="/housekeeping/hk-06-task-sheet-detail/#TS-20261022-07-removed">{"Remove"}</button>
                    <button className="btn btn--primary pb pb--404" type="submit" formAction="/housekeeping/hk-06-task-sheet-detail/#TS-20261022-07-removed">{"Remove"}</button>
                    <button className="btn btn--primary pb pb--406" type="submit" formAction="/housekeeping/hk-06-task-sheet-detail/#TS-20261022-07-removed">{"Remove"}</button>
                    <button className="btn btn--primary pb pb--410" type="submit" formAction="/housekeeping/hk-06-task-sheet-detail/#TS-20261022-08-removed">{"Remove"}</button>
                    <button className="btn btn--primary pb pb--415" type="submit" formAction="/housekeeping/hk-06-task-sheet-detail/#TS-20261022-08-removed">{"Remove"}</button>
                    <button className="btn btn--primary pb pb--416" type="submit" formAction="/housekeeping/hk-06-task-sheet-detail/#TS-20261022-08-removed">{"Remove"}</button>
                    <button className="btn btn--primary pb pb--503" type="submit" formAction="/housekeeping/hk-06-task-sheet-detail/#TS-20261022-08-removed">{"Remove"}</button>
                    <button className="btn btn--primary pb pb--512" type="submit" formAction="/housekeeping/hk-06-task-sheet-detail/#TS-20261022-09-removed">{"Remove"}</button>
                    <button className="btn btn--primary pb pb--504" type="submit" formAction="/housekeeping/hk-06-task-sheet-detail/#TS-20261022-09-removed">{"Remove"}</button>
                    <button className="btn btn--primary pb pb--505" type="submit" formAction="/housekeeping/hk-06-task-sheet-detail/#TS-20261022-09-removed">{"Remove"}</button>
                    <button className="btn btn--primary pb pb--510" type="submit" formAction="/housekeeping/hk-06-task-sheet-detail/#TS-20261022-09-removed">{"Remove"}</button>
                    <button className="btn btn--primary pb pb--111" type="submit" formAction="/housekeeping/hk-06-task-sheet-detail/#TS-20261022-11-removed">{"Remove"}</button>
                    <button className="btn btn--primary pb pb--504" type="submit" formAction="/housekeeping/hk-06-task-sheet-detail/#TS-20261022-11-removed">{"Remove"}</button>
                    <button className="btn btn--primary pb pb--512" type="submit" formAction="/housekeeping/hk-06-task-sheet-detail/#TS-20261022-11-removed">{"Remove"}</button>
                    <button className="btn btn--primary pb pb--514" type="submit" formAction="/housekeeping/hk-06-task-sheet-detail/#TS-20261022-11-removed">{"Remove"}</button>
                    <button className="btn btn--primary pb pb--515" type="submit" formAction="/housekeeping/hk-06-task-sheet-detail/#TS-20261022-11-removed">{"Remove"}</button>
                    <button className="btn btn--primary pb pb--516" type="submit" formAction="/housekeeping/hk-06-task-sheet-detail/#TS-20261022-11-removed">{"Remove"}</button>
                    <button className="btn btn--primary pb pb--517" type="submit" formAction="/housekeeping/hk-06-task-sheet-detail/#TS-20261022-11-removed">{"Remove"}</button>
                  </div>
                </form>
              </div>
              <div className="ts-toasts">
                <div className="fd-toast" id="t-reordered" role="status" aria-live="polite">
                  <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#check-circle" />
                  </svg>
                  <div className="fd-toast__text">
                    {"Order saved"}
                    <small>{"The new order is on the attendant’s phone list (HM)."}</small>
                  </div>
                  <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                    <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#x" />
                    </svg>
                  </a>
                </div>
                <div className="fd-toast" id="t-added" role="status" aria-live="polite">
                  <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#check-circle" />
                  </svg>
                  <div className="fd-toast__text">
                    {"Room added to the sheet"}
                    <small>{"Credits recalculated · the room left the unassigned list in Room Allocation · the attendant is told on the phone."}</small>
                  </div>
                  <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                    <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#x" />
                    </svg>
                  </a>
                </div>
                <div className="fd-toast" id="t-removed" role="status" aria-live="polite">
                  <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#check-circle" />
                  </svg>
                  <div className="fd-toast__text">
                    {"Room removed"}
                    <small>{"Back on the unassigned list in Room Allocation (HK-04) with your reason."}</small>
                  </div>
                  <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                    <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#x" />
                    </svg>
                  </a>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </ScreenShell>
  );
}
