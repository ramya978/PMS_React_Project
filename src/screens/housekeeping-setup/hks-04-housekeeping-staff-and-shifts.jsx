// GENERATED from public/housekeeping-setup/hks-04-housekeeping-staff-and-shifts/index.html by scripts/convert_legacy.py.
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
    "href": "/housekeeping-setup/hks-04-housekeeping-staff-and-shifts/hks-04-housekeeping-staff-and-shifts.css",
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

export default function HousekeepingSetupHks04HousekeepingStaffAndShifts() {
  return (
    <ScreenShell title="Housekeeping Staff & Shifts" sheets={SHEETS} inlineCss={INLINE_CSS}>
      <div data-screen="HKS-04" data-code="HKS-04" data-static="1" className="legacy-body">
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
            <main className="app__content" id="main" data-code="HKS-04" tabIndex="-1">
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
                        <span aria-current="page">{"Staff profiles"}</span>
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="page-header__row">
                  <div className="page-header__text">
                    <h1 className="page-header__title">{"Housekeeping Staff & Shifts"}</h1>
                  </div>
                  <span className="code-chip" title="Screen code">{"HKS-04"}</span>
                  <div className="page-header__filters">
                    <div className="hctl">
                      <div className="hsearch">
                        <input className="hsearch__input" id="hks04-s" type="search" name="q" placeholder="Search name, employee no. or section" aria-label="Search name, employee no. or section" autoComplete="off" />
                        <label className="hsearch__ic" htmlFor="hks04-s" title="Search">
                          <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#search" />
                          </svg>
                          <span className="sr-only">{"Search"}</span>
                        </label>
                      </div>
                      <label className="hfilter__btn" htmlFor="hks04-f" title="Show or hide the filters">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#filter" />
                        </svg>
                        <span>{"Filter"}</span>
                        <i className="hfilter__dot" aria-hidden="true" />
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </label>
                      <input className="hfilter__tg" type="checkbox" id="hks04-f" aria-label="Show filters" />
                      <form className="hfilter" method="get" role="search" aria-label="Filters">
                        <span className="hfilter__hic" title="Filters">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#filter" />
                          </svg>
                        </span>
                        <div className="hfilter__grid">
                          <label className="hf-f">
                            <span className="hf-f__l">{"HK role"}</span>
                            <select className="hf-f__c">
                              <option>{"All roles"}</option>
                              <option>{"Room attendant"}</option>
                              <option>{"Senior attendant"}</option>
                              <option>{"PA attendant"}</option>
                              <option>{"Houseman"}</option>
                              <option>{"Turndown attendant"}</option>
                              <option>{"Linen room attendant"}</option>
                              <option>{"Floor supervisor"}</option>
                              <option>{"Assistant housekeeper"}</option>
                              <option>{"Executive housekeeper"}</option>
                            </select>
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </label>
                          <label className="hf-f">
                            <span className="hf-f__l">{"Home section"}</span>
                            <select className="hf-f__c">
                              <option>{"All sections"}</option>
                              <option>{"No home section"}</option>
                              <option>{"S1"}</option>
                              <option>{"S2"}</option>
                              <option>{"S3"}</option>
                              <option>{"S4"}</option>
                              <option>{"S5"}</option>
                              <option>{"S6"}</option>
                              <option>{"S7"}</option>
                            </select>
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </label>
                          <label className="hf-f">
                            <span className="hf-f__l">{"Mobile login"}</span>
                            <select className="hf-f__c">
                              <option>{"All"}</option>
                              <option>{"Active"}</option>
                              <option>{"Not set"}</option>
                            </select>
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </label>
                          <label className="hf-f">
                            <span className="hf-f__l">{"Inspection right"}</span>
                            <select className="hf-f__c">
                              <option>{"All"}</option>
                              <option>{"Yes"}</option>
                              <option>{"No"}</option>
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
                          <label className="hfilter__done" htmlFor="hks04-f">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check" />
                            </svg>
                            {"Done"}
                          </label>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="page-header__actions">
                    <Link className="btn btn--primary" data-leads-to="HR-02" to={"/hr-and-payroll/hr-02-employees"}>
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#refresh" />
                      </svg>
                      {"Sync from HR"}
                    </Link>
                  </div>
                </div>
              </header>
              <nav className="ltabs" aria-label="Sections">
                <div className="ltabs__list">
                  <Link aria-current="page" data-leads-to="HKS-04-1" to={"/housekeeping-setup/hks-04-housekeeping-staff-and-shifts"}>
                    <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#users" />
                    </svg>
                    {"Staff profiles"}
                    <span className="ltabs__n">{"26"}</span>
                  </Link>
                  <Link data-leads-to="HKS-04-2" to={"/housekeeping-setup/hks-04-housekeeping-staff-and-shifts/shift-codes"}>
                    <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#clock" />
                    </svg>
                    {"Shift codes"}
                    <span className="ltabs__n">{"6"}</span>
                  </Link>
                </div>
              </nav>
              <section data-code="HKS-04-1" aria-label="Staff profiles">
                <div className="fd-banner fd-banner--warn" role="status">
                  <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#alert" />
                  </svg>
                  <div className="fd-banner__t">
                    <strong>{"2 staff have no mobile login: Jincy Mathew and Rani V."}</strong>
                    {" Rani V also has no home section. Every attendant needs a login before go-live."}
                    <a className="fd-link" href="#hks-p02-e2016">{"Edit Rani V →"}</a>
                    {" "}
                    <a className="fd-link" href="#hks-p02-e2012">{"Edit Jincy Mathew →"}</a>
                  </div>
                </div>
                <p className="hks-sync fd-muted">
                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#refresh" />
                  </svg>
                  {" Staff list synced from HR & Payroll on Thu 22 Oct 2026, 07:30 · 26 housekeeping staff · 0 new · 0 left. Names, employee numbers and photos come from HR."}
                </p>
                <div className="s-toolbar" data-flow="add-row">
                  <a className="btn btn--sm" href="#hks-04-add-staff" data-flow="opener-add">
                    <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#plus" />
                    </svg>
                    {"Add staff"}
                  </a>
                </div>
                <div className="pgw">
                  <div className="s-scroll">
                    <table className="srt dt__table" data-code="HKS-04-staff" style={{"--srt-cols": "auto auto auto auto auto auto auto auto auto max-content"}} data-mc="">
                      <caption className="sr-only">{"Housekeeping staff profiles"}</caption>
                      <thead>
                        <tr>
                          <th scope="col">
                            <input className="srt-i srt-a0" type="radio" name="sthks040" id="sthks040-0a" aria-label="Sort by Staff, lowest or A first" />
                            <input className="srt-i srt-d0" type="radio" name="sthks040" id="sthks040-0d" aria-label="Sort by Staff, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="sthks040-0a">{"Staff"}</label>
                            <label className="srt-l srt-l--d" htmlFor="sthks040-0d" aria-hidden="true">{"Staff"}</label>
                          </th>
                          <th scope="col">
                            <input className="srt-i srt-a1" type="radio" name="sthks040" id="sthks040-1a" aria-label="Sort by HK role, lowest or A first" />
                            <input className="srt-i srt-d1" type="radio" name="sthks040" id="sthks040-1d" aria-label="Sort by HK role, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="sthks040-1a">{"HK role"}</label>
                            <label className="srt-l srt-l--d" htmlFor="sthks040-1d" aria-hidden="true">{"HK role"}</label>
                          </th>
                          <th scope="col" className="dt__th--right">
                            <input className="srt-i srt-a2" type="radio" name="sthks040" id="sthks040-2a" aria-label="Sort by Skill level, lowest or A first" />
                            <input className="srt-i srt-d2" type="radio" name="sthks040" id="sthks040-2d" aria-label="Sort by Skill level, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="sthks040-2a">{"Skill level"}</label>
                            <label className="srt-l srt-l--d" htmlFor="sthks040-2d" aria-hidden="true">{"Skill level"}</label>
                          </th>
                          <th scope="col">
                            <input className="srt-i srt-a3" type="radio" name="sthks040" id="sthks040-3a" aria-label="Sort by Languages, lowest or A first" />
                            <input className="srt-i srt-d3" type="radio" name="sthks040" id="sthks040-3d" aria-label="Sort by Languages, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="sthks040-3a">{"Languages"}</label>
                            <label className="srt-l srt-l--d" htmlFor="sthks040-3d" aria-hidden="true">{"Languages"}</label>
                          </th>
                          <th scope="col">
                            <input className="srt-i srt-a4" type="radio" name="sthks040" id="sthks040-4a" aria-label="Sort by Home section, lowest or A first" />
                            <input className="srt-i srt-d4" type="radio" name="sthks040" id="sthks040-4d" aria-label="Sort by Home section, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="sthks040-4a">{"Home section"}</label>
                            <label className="srt-l srt-l--d" htmlFor="sthks040-4d" aria-hidden="true">{"Home section"}</label>
                          </th>
                          <th scope="col">
                            <input className="srt-i srt-a5" type="radio" name="sthks040" id="sthks040-5a" aria-label="Sort by Default shift, lowest or A first" />
                            <input className="srt-i srt-d5" type="radio" name="sthks040" id="sthks040-5d" aria-label="Sort by Default shift, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="sthks040-5a">{"Default shift"}</label>
                            <label className="srt-l srt-l--d" htmlFor="sthks040-5d" aria-hidden="true">{"Default shift"}</label>
                          </th>
                          <th scope="col">
                            <input className="srt-i srt-a6" type="radio" name="sthks040" id="sthks040-6a" aria-label="Sort by Mobile login, lowest or A first" />
                            <input className="srt-i srt-d6" type="radio" name="sthks040" id="sthks040-6d" aria-label="Sort by Mobile login, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="sthks040-6a">{"Mobile login"}</label>
                            <label className="srt-l srt-l--d" htmlFor="sthks040-6d" aria-hidden="true">{"Mobile login"}</label>
                          </th>
                          <th scope="col">
                            <input className="srt-i srt-a7" type="radio" name="sthks040" id="sthks040-7a" aria-label="Sort by Inspection right, lowest or A first" />
                            <input className="srt-i srt-d7" type="radio" name="sthks040" id="sthks040-7d" aria-label="Sort by Inspection right, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="sthks040-7a">{"Inspection right"}</label>
                            <label className="srt-l srt-l--d" htmlFor="sthks040-7d" aria-hidden="true">{"Inspection right"}</label>
                          </th>
                          <th scope="col" className="dt__th--right">
                            <input className="srt-i srt-a8" type="radio" name="sthks040" id="sthks040-8a" aria-label="Sort by Max credits override, lowest or A first" />
                            <input className="srt-i srt-d8" type="radio" name="sthks040" id="sthks040-8d" aria-label="Sort by Max credits override, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="sthks040-8a">{"Max credits override"}</label>
                            <label className="srt-l srt-l--d" htmlFor="sthks040-8d" aria-hidden="true">{"Max credits override"}</label>
                          </th>
                          <th scope="col" />
                        </tr>
                      </thead>
                      <tbody>
                        <tr id="saved-e2001" style={{"--k0": "25", "--k1": "2", "--k2": "3", "--k3": "2", "--k4": "8", "--k5": "2", "--k6": "1", "--k7": "2", "--k8": "2"}}>
                          <td className="dt__td nw" data-label="Staff" data-w2="" data-t="">
                            <input className="mc-more" type="checkbox" aria-label="Show all details" />
                            <span className="hks-who">
                              <span className="avatar" style={{"--av-h": "230"}} aria-hidden="true">{"SR"}</span>
                              <span>
                                <a className="fd-link" href="#hks-p02-e2001">
                                  <strong>{"Sunita Ranjan"}</strong>
                                </a>
                                <span className="fd-sub">{"EMP-2001"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="HK role" data-w2="">{"Executive housekeeper"}</td>
                          <td className="dt__td dt__td--right num nw" data-label="Skill level" data-w2="">{"3"}</td>
                          <td className="dt__td" data-label="Languages" data-w2="">{"English, Malayalam, Hindi"}</td>
                          <td className="dt__td nw" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Default shift" data-w2="">
                            <span className="hks-shift">
                              <i style={{"background": "#B7791F"}} aria-hidden="true" />
                              {"G"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Mobile login" data-w2="" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                            <span className="fd-sub">{"Phone 01"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Inspection right" data-w2="" data-m="">
                            <span className="hks-yes">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check" />
                              </svg>
                              {"Yes"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right num nw" data-label="Max credits override" data-w2="" data-m="">
                            <span className="fd-muted">{"16 (default)"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p02-e2001" aria-label="Edit profile of Sunita Ranjan">{"Edit profile"}</a>
                          </td>
                        </tr>
                        <tr id="saved-e2002" style={{"--k0": "18", "--k1": "1", "--k2": "3", "--k3": "1", "--k4": "8", "--k5": "2", "--k6": "2", "--k7": "2", "--k8": "2"}}>
                          <td className="dt__td nw" data-label="Staff" data-w2="" data-t="">
                            <input className="mc-more" type="checkbox" aria-label="Show all details" />
                            <span className="hks-who">
                              <span className="avatar" style={{"--av-h": "314"}} aria-hidden="true">{"RN"}</span>
                              <span>
                                <a className="fd-link" href="#hks-p02-e2002">
                                  <strong>{"Reshma Nathan"}</strong>
                                </a>
                                <span className="fd-sub">{"EMP-2002"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="HK role" data-w2="">{"Assistant housekeeper"}</td>
                          <td className="dt__td dt__td--right num nw" data-label="Skill level" data-w2="">{"3"}</td>
                          <td className="dt__td" data-label="Languages" data-w2="">{"English, Malayalam"}</td>
                          <td className="dt__td nw" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Default shift" data-w2="">
                            <span className="hks-shift">
                              <i style={{"background": "#B7791F"}} aria-hidden="true" />
                              {"G"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Mobile login" data-w2="" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                            <span className="fd-sub">{"Phone 02"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Inspection right" data-w2="" data-m="">
                            <span className="hks-yes">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check" />
                              </svg>
                              {"Yes"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right num nw" data-label="Max credits override" data-w2="" data-m="">
                            <span className="fd-muted">{"16 (default)"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p02-e2002" aria-label="Edit profile of Reshma Nathan">{"Edit profile"}</a>
                          </td>
                        </tr>
                        <tr id="saved-e2003" style={{"--k0": "5", "--k1": "3", "--k2": "3", "--k3": "1", "--k4": "1", "--k5": "3", "--k6": "3", "--k7": "2", "--k8": "2"}}>
                          <td className="dt__td nw" data-label="Staff" data-w2="" data-t="">
                            <input className="mc-more" type="checkbox" aria-label="Show all details" />
                            <span className="hks-who">
                              <span className="avatar" style={{"--av-h": "47"}} aria-hidden="true">{"BT"}</span>
                              <span>
                                <a className="fd-link" href="#hks-p02-e2003">
                                  <strong>{"Beena Thomas"}</strong>
                                </a>
                                <span className="fd-sub">{"EMP-2003"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="HK role" data-w2="">{"Floor supervisor"}</td>
                          <td className="dt__td dt__td--right num nw" data-label="Skill level" data-w2="">{"3"}</td>
                          <td className="dt__td" data-label="Languages" data-w2="">{"English, Malayalam"}</td>
                          <td className="dt__td nw" data-label="Home section" data-w2="">{"S1"}</td>
                          <td className="dt__td nw" data-label="Default shift" data-w2="">
                            <span className="hks-shift">
                              <i style={{"background": "#2F855A"}} aria-hidden="true" />
                              {"M"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Mobile login" data-w2="" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                            <span className="fd-sub">{"Phone 03"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Inspection right" data-w2="" data-m="">
                            <span className="hks-yes">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check" />
                              </svg>
                              {"Yes"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right num nw" data-label="Max credits override" data-w2="" data-m="">
                            <span className="fd-muted">{"16 (default)"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p02-e2003" aria-label="Edit profile of Beena Thomas">{"Edit profile"}</a>
                          </td>
                        </tr>
                        <tr id="saved-e2004" style={{"--k0": "9", "--k1": "3", "--k2": "3", "--k3": "2", "--k4": "4", "--k5": "3", "--k6": "4", "--k7": "2", "--k8": "2"}}>
                          <td className="dt__td nw" data-label="Staff" data-w2="" data-t="">
                            <input className="mc-more" type="checkbox" aria-label="Show all details" />
                            <span className="hks-who">
                              <span className="avatar" style={{"--av-h": "331"}} aria-hidden="true">{"JP"}</span>
                              <span>
                                <a className="fd-link" href="#hks-p02-e2004">
                                  <strong>{"Joseph Paul"}</strong>
                                </a>
                                <span className="fd-sub">{"EMP-2004"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="HK role" data-w2="">{"Floor supervisor"}</td>
                          <td className="dt__td dt__td--right num nw" data-label="Skill level" data-w2="">{"3"}</td>
                          <td className="dt__td" data-label="Languages" data-w2="">{"English, Malayalam, Hindi"}</td>
                          <td className="dt__td nw" data-label="Home section" data-w2="">{"S4"}</td>
                          <td className="dt__td nw" data-label="Default shift" data-w2="">
                            <span className="hks-shift">
                              <i style={{"background": "#2F855A"}} aria-hidden="true" />
                              {"M"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Mobile login" data-w2="" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                            <span className="fd-sub">{"Phone 04"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Inspection right" data-w2="" data-m="">
                            <span className="hks-yes">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check" />
                              </svg>
                              {"Yes"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right num nw" data-label="Max credits override" data-w2="" data-m="">
                            <span className="fd-muted">{"16 (default)"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p02-e2004" aria-label="Edit profile of Joseph Paul">{"Edit profile"}</a>
                          </td>
                        </tr>
                        <tr id="saved-e2005" style={{"--k0": "12", "--k1": "3", "--k2": "3", "--k3": "1", "--k4": "7", "--k5": "1", "--k6": "5", "--k7": "2", "--k8": "2"}}>
                          <td className="dt__td nw" data-label="Staff" data-w2="" data-t="">
                            <input className="mc-more" type="checkbox" aria-label="Show all details" />
                            <span className="hks-who">
                              <span className="avatar" style={{"--av-h": "196"}} aria-hidden="true">{"LN"}</span>
                              <span>
                                <a className="fd-link" href="#hks-p02-e2005">
                                  <strong>{"Latha Nathan"}</strong>
                                </a>
                                <span className="fd-sub">{"EMP-2005"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="HK role" data-w2="">{"Floor supervisor"}</td>
                          <td className="dt__td dt__td--right num nw" data-label="Skill level" data-w2="">{"3"}</td>
                          <td className="dt__td" data-label="Languages" data-w2="">{"English, Malayalam"}</td>
                          <td className="dt__td nw" data-label="Home section" data-w2="">{"S7"}</td>
                          <td className="dt__td nw" data-label="Default shift" data-w2="">
                            <span className="hks-shift">
                              <i style={{"background": "#2B6CB0"}} aria-hidden="true" />
                              {"E"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Mobile login" data-w2="" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                            <span className="fd-sub">{"Phone 05"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Inspection right" data-w2="" data-m="">
                            <span className="hks-yes">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check" />
                              </svg>
                              {"Yes"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right num nw" data-label="Max credits override" data-w2="" data-m="">
                            <span className="fd-muted">{"16 (default)"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p02-e2005" aria-label="Edit profile of Latha Nathan">{"Edit profile"}</a>
                          </td>
                        </tr>
                        <tr id="saved-e2006" style={{"--k0": "15", "--k1": "9", "--k2": "3", "--k3": "3", "--k4": "3", "--k5": "3", "--k6": "6", "--k7": "1", "--k8": "2"}}>
                          <td className="dt__td nw" data-label="Staff" data-w="" data-t="">
                            <input className="mc-more" type="checkbox" aria-label="Show all details" />
                            <span className="hks-who">
                              <span className="avatar" style={{"--av-h": "218"}} aria-hidden="true">{"MV"}</span>
                              <span>
                                <a className="fd-link" href="#hks-p02-e2006">
                                  <strong>{"Mariamma Varghese"}</strong>
                                </a>
                                <span className="fd-sub">{"EMP-2006"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="HK role" data-w2="">{"Senior attendant"}</td>
                          <td className="dt__td dt__td--right num nw" data-label="Skill level" data-w2="">{"3"}</td>
                          <td className="dt__td" data-label="Languages" data-w2="">{"English, Malayalam, Tamil"}</td>
                          <td className="dt__td nw" data-label="Home section" data-w2="">{"S3"}</td>
                          <td className="dt__td nw" data-label="Default shift" data-w2="">
                            <span className="hks-shift">
                              <i style={{"background": "#2F855A"}} aria-hidden="true" />
                              {"M"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Mobile login" data-w2="" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                            <span className="fd-sub">{"Phone 06"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Inspection right" data-w2="" data-m="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td dt__td--right num nw" data-label="Max credits override" data-w2="" data-m="">
                            <span className="fd-muted">{"16 (default)"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p02-e2006" aria-label="Edit profile of Mariamma Varghese">{"Edit profile"}</a>
                          </td>
                        </tr>
                        <tr id="saved-e2007" style={{"--k0": "23", "--k1": "9", "--k2": "3", "--k3": "1", "--k4": "7", "--k5": "3", "--k6": "7", "--k7": "1", "--k8": "2"}}>
                          <td className="dt__td nw" data-label="Staff" data-w2="" data-t="">
                            <input className="mc-more" type="checkbox" aria-label="Show all details" />
                            <span className="hks-who">
                              <span className="avatar" style={{"--av-h": "103"}} aria-hidden="true">{"SK"}</span>
                              <span>
                                <a className="fd-link" href="#hks-p02-e2007">
                                  <strong>{"Saritha K"}</strong>
                                </a>
                                <span className="fd-sub">{"EMP-2007"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="HK role" data-w2="">{"Senior attendant"}</td>
                          <td className="dt__td dt__td--right num nw" data-label="Skill level" data-w2="">{"3"}</td>
                          <td className="dt__td" data-label="Languages" data-w2="">{"English, Malayalam"}</td>
                          <td className="dt__td nw" data-label="Home section" data-w2="">{"S7"}</td>
                          <td className="dt__td nw" data-label="Default shift" data-w2="">
                            <span className="hks-shift">
                              <i style={{"background": "#2F855A"}} aria-hidden="true" />
                              {"M"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Mobile login" data-w2="" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                            <span className="fd-sub">{"Phone 07"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Inspection right" data-w2="" data-m="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td dt__td--right num nw" data-label="Max credits override" data-w2="" data-m="">
                            <span className="fd-muted">{"16 (default)"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p02-e2007" aria-label="Edit profile of Saritha K">{"Edit profile"}</a>
                          </td>
                        </tr>
                        <tr id="saved-e2008" style={{"--k0": "2", "--k1": "8", "--k2": "2", "--k3": "1", "--k4": "1", "--k5": "3", "--k6": "8", "--k7": "1", "--k8": "2"}}>
                          <td className="dt__td nw" data-label="Staff" data-w2="" data-t="">
                            <input className="mc-more" type="checkbox" aria-label="Show all details" />
                            <span className="hks-who">
                              <span className="avatar" style={{"--av-h": "349"}} aria-hidden="true">{"AP"}</span>
                              <span>
                                <a className="fd-link" href="#hks-p02-e2008">
                                  <strong>{"Anitha P"}</strong>
                                </a>
                                <span className="fd-sub">{"EMP-2008"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="HK role" data-w2="">{"Room attendant"}</td>
                          <td className="dt__td dt__td--right num nw" data-label="Skill level" data-w2="">{"2"}</td>
                          <td className="dt__td" data-label="Languages" data-w2="">{"English, Malayalam"}</td>
                          <td className="dt__td nw" data-label="Home section" data-w2="">{"S1"}</td>
                          <td className="dt__td nw" data-label="Default shift" data-w2="">
                            <span className="hks-shift">
                              <i style={{"background": "#2F855A"}} aria-hidden="true" />
                              {"M"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Mobile login" data-w2="" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                            <span className="fd-sub">{"Phone 08"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Inspection right" data-w2="" data-m="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td dt__td--right num nw" data-label="Max credits override" data-w2="" data-m="">
                            <span className="fd-muted">{"16 (default)"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p02-e2008" aria-label="Edit profile of Anitha P">{"Edit profile"}</a>
                          </td>
                        </tr>
                        <tr id="saved-e2009" style={{"--k0": "17", "--k1": "8", "--k2": "2", "--k3": "2", "--k4": "1", "--k5": "3", "--k6": "9", "--k7": "1", "--k8": "2"}}>
                          <td className="dt__td nw" data-label="Staff" data-w2="" data-t="">
                            <input className="mc-more" type="checkbox" aria-label="Show all details" />
                            <span className="hks-who">
                              <span className="avatar" style={{"--av-h": "257"}} aria-hidden="true">{"RK"}</span>
                              <span>
                                <a className="fd-link" href="#hks-p02-e2009">
                                  <strong>{"Remya K"}</strong>
                                </a>
                                <span className="fd-sub">{"EMP-2009"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="HK role" data-w2="">{"Room attendant"}</td>
                          <td className="dt__td dt__td--right num nw" data-label="Skill level" data-w2="">{"2"}</td>
                          <td className="dt__td" data-label="Languages" data-w2="">{"English, Malayalam, Hindi"}</td>
                          <td className="dt__td nw" data-label="Home section" data-w2="">{"S1"}</td>
                          <td className="dt__td nw" data-label="Default shift" data-w2="">
                            <span className="hks-shift">
                              <i style={{"background": "#2F855A"}} aria-hidden="true" />
                              {"M"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Mobile login" data-w2="" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                            <span className="fd-sub">{"Phone 09"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Inspection right" data-w2="" data-m="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td dt__td--right num nw" data-label="Max credits override" data-w2="" data-m="">
                            <span className="fd-muted">{"16 (default)"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p02-e2009" aria-label="Edit profile of Remya K">{"Edit profile"}</a>
                          </td>
                        </tr>
                        <tr id="saved-e2010" style={{"--k0": "6", "--k1": "8", "--k2": "2", "--k3": "1", "--k4": "2", "--k5": "3", "--k6": "10", "--k7": "1", "--k8": "2"}}>
                          <td className="dt__td nw" data-label="Staff" data-w2="" data-t="">
                            <input className="mc-more" type="checkbox" aria-label="Show all details" />
                            <span className="hks-who">
                              <span className="avatar" style={{"--av-h": "258"}} aria-hidden="true">{"DM"}</span>
                              <span>
                                <a className="fd-link" href="#hks-p02-e2010">
                                  <strong>{"Divya M"}</strong>
                                </a>
                                <span className="fd-sub">{"EMP-2010"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="HK role" data-w2="">{"Room attendant"}</td>
                          <td className="dt__td dt__td--right num nw" data-label="Skill level" data-w2="">{"2"}</td>
                          <td className="dt__td" data-label="Languages" data-w2="">{"English, Malayalam"}</td>
                          <td className="dt__td nw" data-label="Home section" data-w2="">{"S2"}</td>
                          <td className="dt__td nw" data-label="Default shift" data-w2="">
                            <span className="hks-shift">
                              <i style={{"background": "#2F855A"}} aria-hidden="true" />
                              {"M"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Mobile login" data-w2="" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                            <span className="fd-sub">{"Phone 10"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Inspection right" data-w2="" data-m="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td dt__td--right num nw" data-label="Max credits override" data-w2="" data-m="">
                            <span className="fd-muted">{"16 (default)"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p02-e2010" aria-label="Edit profile of Divya M">{"Edit profile"}</a>
                          </td>
                        </tr>
                        <tr id="saved-e2011" style={{"--k0": "22", "--k1": "8", "--k2": "2", "--k3": "1", "--k4": "4", "--k5": "3", "--k6": "11", "--k7": "1", "--k8": "2"}}>
                          <td className="dt__td nw" data-label="Staff" data-w2="" data-t="">
                            <input className="mc-more" type="checkbox" aria-label="Show all details" />
                            <span className="hks-who">
                              <span className="avatar" style={{"--av-h": "92"}} aria-hidden="true">{"SJ"}</span>
                              <span>
                                <a className="fd-link" href="#hks-p02-e2011">
                                  <strong>{"Shiny Joseph"}</strong>
                                </a>
                                <span className="fd-sub">{"EMP-2011"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="HK role" data-w2="">{"Room attendant"}</td>
                          <td className="dt__td dt__td--right num nw" data-label="Skill level" data-w2="">{"2"}</td>
                          <td className="dt__td" data-label="Languages" data-w2="">{"English, Malayalam"}</td>
                          <td className="dt__td nw" data-label="Home section" data-w2="">{"S4"}</td>
                          <td className="dt__td nw" data-label="Default shift" data-w2="">
                            <span className="hks-shift">
                              <i style={{"background": "#2F855A"}} aria-hidden="true" />
                              {"M"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Mobile login" data-w2="" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                            <span className="fd-sub">{"Phone 11"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Inspection right" data-w2="" data-m="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td dt__td--right num nw" data-label="Max credits override" data-w2="" data-m="">
                            <span className="fd-muted">{"16 (default)"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p02-e2011" aria-label="Edit profile of Shiny Joseph">{"Edit profile"}</a>
                          </td>
                        </tr>
                        <tr id="saved-e2012" style={{"--k0": "8", "--k1": "8", "--k2": "1", "--k3": "4", "--k4": "4", "--k5": "3", "--k6": "25", "--k7": "1", "--k8": "2"}}>
                          <td className="dt__td nw" data-label="Staff" data-w2="" data-t="">
                            <input className="mc-more" type="checkbox" aria-label="Show all details" />
                            <span className="hks-who">
                              <span className="avatar" style={{"--av-h": "75"}} aria-hidden="true">{"JM"}</span>
                              <span>
                                <a className="fd-link" href="#hks-p02-e2012">
                                  <strong>{"Jincy Mathew"}</strong>
                                </a>
                                <span className="fd-sub">{"EMP-2012"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="HK role" data-w2="">{"Room attendant"}</td>
                          <td className="dt__td dt__td--right num nw" data-label="Skill level" data-w2="">{"1"}</td>
                          <td className="dt__td" data-label="Languages" data-w2="">{"Malayalam"}</td>
                          <td className="dt__td nw" data-label="Home section" data-w2="">{"S4"}</td>
                          <td className="dt__td nw" data-label="Default shift" data-w2="">
                            <span className="hks-shift">
                              <i style={{"background": "#2F855A"}} aria-hidden="true" />
                              {"M"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Mobile login" data-w2="" data-s="">
                            <span className="pill pill--tentative">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#alert" />
                              </svg>
                              {"Not set"}
                            </span>
                            <span className="fd-sub">{"No device"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Inspection right" data-w2="" data-m="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td dt__td--right num nw" data-label="Max credits override" data-w2="" data-m="">
                            <span className="fd-muted">{"16 (default)"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p02-e2012" aria-label="Edit profile of Jincy Mathew">{"Edit profile"}</a>
                          </td>
                        </tr>
                        <tr id="saved-e2013" style={{"--k0": "19", "--k1": "8", "--k2": "2", "--k3": "7", "--k4": "5", "--k5": "3", "--k6": "12", "--k7": "1", "--k8": "2"}}>
                          <td className="dt__td nw" data-label="Staff" data-w2="" data-t="">
                            <input className="mc-more" type="checkbox" aria-label="Show all details" />
                            <span className="hks-who">
                              <span className="avatar" style={{"--av-h": "246"}} aria-hidden="true">{"RS"}</span>
                              <span>
                                <a className="fd-link" href="#hks-p02-e2013">
                                  <strong>{"Rekha S"}</strong>
                                </a>
                                <span className="fd-sub">{"EMP-2013"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="HK role" data-w2="">{"Room attendant"}</td>
                          <td className="dt__td dt__td--right num nw" data-label="Skill level" data-w2="">{"2"}</td>
                          <td className="dt__td" data-label="Languages" data-w2="">{"Malayalam, Tamil"}</td>
                          <td className="dt__td nw" data-label="Home section" data-w2="">{"S5"}</td>
                          <td className="dt__td nw" data-label="Default shift" data-w2="">
                            <span className="hks-shift">
                              <i style={{"background": "#2F855A"}} aria-hidden="true" />
                              {"M"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Mobile login" data-w2="" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                            <span className="fd-sub">{"Phone 12"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Inspection right" data-w2="" data-m="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td dt__td--right num nw" data-label="Max credits override" data-w2="" data-m="">
                            <span className="fd-muted">{"16 (default)"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p02-e2013" aria-label="Edit profile of Rekha S">{"Edit profile"}</a>
                          </td>
                        </tr>
                        <tr id="saved-e2014" style={{"--k0": "11", "--k1": "8", "--k2": "2", "--k3": "1", "--k4": "6", "--k5": "3", "--k6": "13", "--k7": "1", "--k8": "2"}}>
                          <td className="dt__td nw" data-label="Staff" data-w2="" data-t="">
                            <input className="mc-more" type="checkbox" aria-label="Show all details" />
                            <span className="hks-who">
                              <span className="avatar" style={{"--av-h": "85"}} aria-hidden="true">{"LG"}</span>
                              <span>
                                <a className="fd-link" href="#hks-p02-e2014">
                                  <strong>{"Lissy George"}</strong>
                                </a>
                                <span className="fd-sub">{"EMP-2014"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="HK role" data-w2="">{"Room attendant"}</td>
                          <td className="dt__td dt__td--right num nw" data-label="Skill level" data-w2="">{"2"}</td>
                          <td className="dt__td" data-label="Languages" data-w2="">{"English, Malayalam"}</td>
                          <td className="dt__td nw" data-label="Home section" data-w2="">{"S6"}</td>
                          <td className="dt__td nw" data-label="Default shift" data-w2="">
                            <span className="hks-shift">
                              <i style={{"background": "#2F855A"}} aria-hidden="true" />
                              {"M"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Mobile login" data-w2="" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                            <span className="fd-sub">{"Phone 13"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Inspection right" data-w2="" data-m="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td dt__td--right num nw" data-label="Max credits override" data-w2="" data-m="">
                            <span className="fd-muted">{"16 (default)"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p02-e2014" aria-label="Edit profile of Lissy George">{"Edit profile"}</a>
                          </td>
                        </tr>
                        <tr id="saved-e2015" style={{"--k0": "26", "--k1": "8", "--k2": "1", "--k3": "4", "--k4": "6", "--k5": "1", "--k6": "14", "--k7": "1", "--k8": "2"}}>
                          <td className="dt__td nw" data-label="Staff" data-w2="" data-t="">
                            <input className="mc-more" type="checkbox" aria-label="Show all details" />
                            <span className="hks-who">
                              <span className="avatar" style={{"--av-h": "340"}} aria-hidden="true">{"ST"}</span>
                              <span>
                                <a className="fd-link" href="#hks-p02-e2015">
                                  <strong>{"Sheeba T"}</strong>
                                </a>
                                <span className="fd-sub">{"EMP-2015"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="HK role" data-w2="">{"Room attendant"}</td>
                          <td className="dt__td dt__td--right num nw" data-label="Skill level" data-w2="">{"1"}</td>
                          <td className="dt__td" data-label="Languages" data-w2="">{"Malayalam"}</td>
                          <td className="dt__td nw" data-label="Home section" data-w2="">{"S6"}</td>
                          <td className="dt__td nw" data-label="Default shift" data-w2="">
                            <span className="hks-shift">
                              <i style={{"background": "#2B6CB0"}} aria-hidden="true" />
                              {"E"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Mobile login" data-w2="" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                            <span className="fd-sub">{"Phone 14"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Inspection right" data-w2="" data-m="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td dt__td--right num nw" data-label="Max credits override" data-w2="" data-m="">
                            <span className="fd-muted">{"16 (default)"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p02-e2015" aria-label="Edit profile of Sheeba T">{"Edit profile"}</a>
                          </td>
                        </tr>
                        <tr id="saved-e2016" style={{"--k0": "20", "--k1": "8", "--k2": "1", "--k3": "5", "--k4": "8", "--k5": "3", "--k6": "25", "--k7": "1", "--k8": "1"}}>
                          <td className="dt__td nw" data-label="Staff" data-w2="" data-t="">
                            <input className="mc-more" type="checkbox" aria-label="Show all details" />
                            <span className="hks-who">
                              <span className="avatar" style={{"--av-h": "152"}} aria-hidden="true">{"RV"}</span>
                              <span>
                                <a className="fd-link" href="#hks-p02-e2016">
                                  <strong>{"Rani V"}</strong>
                                </a>
                                <span className="fd-sub">{"EMP-2016"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="HK role" data-w2="">{"Room attendant"}</td>
                          <td className="dt__td dt__td--right num nw" data-label="Skill level" data-w2="">{"1"}</td>
                          <td className="dt__td" data-label="Languages" data-w2="">{"Malayalam, English"}</td>
                          <td className="dt__td nw" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Default shift" data-w2="">
                            <span className="hks-shift">
                              <i style={{"background": "#2F855A"}} aria-hidden="true" />
                              {"M"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Mobile login" data-w2="" data-s="">
                            <span className="pill pill--tentative">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#alert" />
                              </svg>
                              {"Not set"}
                            </span>
                            <span className="fd-sub">{"No device"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Inspection right" data-w2="" data-m="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td dt__td--right num nw" data-label="Max credits override" data-w2="" data-m="">{"10"}</td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p02-e2016" aria-label="Edit profile of Rani V">{"Edit profile"}</a>
                          </td>
                        </tr>
                        <tr id="saved-e2017" style={{"--k0": "4", "--k1": "6", "--k2": "2", "--k3": "6", "--k4": "8", "--k5": "3", "--k6": "15", "--k7": "1", "--k8": "2"}}>
                          <td className="dt__td nw" data-label="Staff" data-w2="" data-t="">
                            <input className="mc-more" type="checkbox" aria-label="Show all details" />
                            <span className="hks-who">
                              <span className="avatar" style={{"--av-h": "141"}} aria-hidden="true">{"BK"}</span>
                              <span>
                                <a className="fd-link" href="#hks-p02-e2017">
                                  <strong>{"Biju K"}</strong>
                                </a>
                                <span className="fd-sub">{"EMP-2017"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="HK role" data-w2="">{"PA attendant"}</td>
                          <td className="dt__td dt__td--right num nw" data-label="Skill level" data-w2="">{"2"}</td>
                          <td className="dt__td" data-label="Languages" data-w2="">{"Malayalam, Hindi"}</td>
                          <td className="dt__td nw" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Default shift" data-w2="">
                            <span className="hks-shift">
                              <i style={{"background": "#2F855A"}} aria-hidden="true" />
                              {"M"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Mobile login" data-w2="" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                            <span className="fd-sub">{"Phone 15"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Inspection right" data-w2="" data-m="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td dt__td--right num nw" data-label="Max credits override" data-w2="" data-m="">
                            <span className="fd-muted">{"16 (default)"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p02-e2017" aria-label="Edit profile of Biju K">{"Edit profile"}</a>
                          </td>
                        </tr>
                        <tr id="saved-e2018" style={{"--k0": "21", "--k1": "6", "--k2": "1", "--k3": "4", "--k4": "8", "--k5": "1", "--k6": "16", "--k7": "1", "--k8": "2"}}>
                          <td className="dt__td nw" data-label="Staff" data-w2="" data-t="">
                            <input className="mc-more" type="checkbox" aria-label="Show all details" />
                            <span className="hks-who">
                              <span className="avatar" style={{"--av-h": "204"}} aria-hidden="true">{"SA"}</span>
                              <span>
                                <a className="fd-link" href="#hks-p02-e2018">
                                  <strong>{"Satheesan"}</strong>
                                </a>
                                <span className="fd-sub">{"EMP-2018"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="HK role" data-w2="">{"PA attendant"}</td>
                          <td className="dt__td dt__td--right num nw" data-label="Skill level" data-w2="">{"1"}</td>
                          <td className="dt__td" data-label="Languages" data-w2="">{"Malayalam"}</td>
                          <td className="dt__td nw" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Default shift" data-w2="">
                            <span className="hks-shift">
                              <i style={{"background": "#2B6CB0"}} aria-hidden="true" />
                              {"E"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Mobile login" data-w2="" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                            <span className="fd-sub">{"Phone 16"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Inspection right" data-w2="" data-m="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td dt__td--right num nw" data-label="Max credits override" data-w2="" data-m="">
                            <span className="fd-muted">{"16 (default)"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p02-e2018" aria-label="Edit profile of Satheesan">{"Edit profile"}</a>
                          </td>
                        </tr>
                        <tr id="saved-e2019" style={{"--k0": "1", "--k1": "6", "--k2": "1", "--k3": "6", "--k4": "8", "--k5": "4", "--k6": "17", "--k7": "1", "--k8": "2"}}>
                          <td className="dt__td nw" data-label="Staff" data-w2="" data-t="">
                            <input className="mc-more" type="checkbox" aria-label="Show all details" />
                            <span className="hks-who">
                              <span className="avatar" style={{"--av-h": "245"}} aria-hidden="true">{"AM"}</span>
                              <span>
                                <a className="fd-link" href="#hks-p02-e2019">
                                  <strong>{"Ajith M"}</strong>
                                </a>
                                <span className="fd-sub">{"EMP-2019"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="HK role" data-w2="">{"PA attendant"}</td>
                          <td className="dt__td dt__td--right num nw" data-label="Skill level" data-w2="">{"1"}</td>
                          <td className="dt__td" data-label="Languages" data-w2="">{"Malayalam, Hindi"}</td>
                          <td className="dt__td nw" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Default shift" data-w2="">
                            <span className="hks-shift">
                              <i style={{"background": "#4A5568"}} aria-hidden="true" />
                              {"N"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Mobile login" data-w2="" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                            <span className="fd-sub">{"Phone 17"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Inspection right" data-w2="" data-m="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td dt__td--right num nw" data-label="Max credits override" data-w2="" data-m="">
                            <span className="fd-muted">{"16 (default)"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p02-e2019" aria-label="Edit profile of Ajith M">{"Edit profile"}</a>
                          </td>
                        </tr>
                        <tr id="saved-e2020" style={{"--k0": "16", "--k1": "7", "--k2": "1", "--k3": "4", "--k4": "8", "--k5": "3", "--k6": "18", "--k7": "1", "--k8": "2"}}>
                          <td className="dt__td nw" data-label="Staff" data-w="" data-t="">
                            <input className="mc-more" type="checkbox" aria-label="Show all details" />
                            <span className="hks-who">
                              <span className="avatar" style={{"--av-h": "1"}} aria-hidden="true">{"PV"}</span>
                              <span>
                                <a className="fd-link" href="#hks-p02-e2020">
                                  <strong>{"Prasad V"}</strong>
                                </a>
                                <span className="fd-sub">{"EMP-2020 · Agency"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="HK role">
                            {"PA attendant"}
                            <span className="fd-sub">{"Agency: Kochi Facility Services"}</span>
                          </td>
                          <td className="dt__td dt__td--right num nw" data-label="Skill level" data-w2="">{"1"}</td>
                          <td className="dt__td" data-label="Languages" data-w2="">{"Malayalam"}</td>
                          <td className="dt__td nw" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Default shift" data-w2="">
                            <span className="hks-shift">
                              <i style={{"background": "#2F855A"}} aria-hidden="true" />
                              {"M"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Mobile login" data-w2="" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                            <span className="fd-sub">{"Phone 18"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Inspection right" data-w2="" data-m="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td dt__td--right num nw" data-label="Max credits override" data-w2="" data-m="">
                            <span className="fd-muted">{"16 (default)"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p02-e2020" aria-label="Edit profile of Prasad V">{"Edit profile"}</a>
                          </td>
                        </tr>
                        <tr id="saved-e2021" style={{"--k0": "14", "--k1": "4", "--k2": "2", "--k3": "6", "--k4": "8", "--k5": "3", "--k6": "19", "--k7": "1", "--k8": "2"}}>
                          <td className="dt__td nw" data-label="Staff" data-w2="" data-t="">
                            <input className="mc-more" type="checkbox" aria-label="Show all details" />
                            <span className="hks-who">
                              <span className="avatar" style={{"--av-h": "257"}} aria-hidden="true">{"MT"}</span>
                              <span>
                                <a className="fd-link" href="#hks-p02-e2021">
                                  <strong>{"Manoj T"}</strong>
                                </a>
                                <span className="fd-sub">{"EMP-2021"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="HK role" data-w2="">{"Houseman"}</td>
                          <td className="dt__td dt__td--right num nw" data-label="Skill level" data-w2="">{"2"}</td>
                          <td className="dt__td" data-label="Languages" data-w2="">{"Malayalam, Hindi"}</td>
                          <td className="dt__td nw" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Default shift" data-w2="">
                            <span className="hks-shift">
                              <i style={{"background": "#2F855A"}} aria-hidden="true" />
                              {"M"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Mobile login" data-w2="" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                            <span className="fd-sub">{"Phone 19"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Inspection right" data-w2="" data-m="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td dt__td--right num nw" data-label="Max credits override" data-w2="" data-m="">
                            <span className="fd-muted">{"16 (default)"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p02-e2021" aria-label="Edit profile of Manoj T">{"Edit profile"}</a>
                          </td>
                        </tr>
                        <tr id="saved-e2022" style={{"--k0": "24", "--k1": "4", "--k2": "1", "--k3": "4", "--k4": "8", "--k5": "1", "--k6": "20", "--k7": "1", "--k8": "2"}}>
                          <td className="dt__td nw" data-label="Staff" data-w2="" data-t="">
                            <input className="mc-more" type="checkbox" aria-label="Show all details" />
                            <span className="hks-who">
                              <span className="avatar" style={{"--av-h": "147"}} aria-hidden="true">{"SP"}</span>
                              <span>
                                <a className="fd-link" href="#hks-p02-e2022">
                                  <strong>{"Sabu P"}</strong>
                                </a>
                                <span className="fd-sub">{"EMP-2022"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="HK role" data-w2="">{"Houseman"}</td>
                          <td className="dt__td dt__td--right num nw" data-label="Skill level" data-w2="">{"1"}</td>
                          <td className="dt__td" data-label="Languages" data-w2="">{"Malayalam"}</td>
                          <td className="dt__td nw" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Default shift" data-w2="">
                            <span className="hks-shift">
                              <i style={{"background": "#2B6CB0"}} aria-hidden="true" />
                              {"E"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Mobile login" data-w2="" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                            <span className="fd-sub">{"Phone 20"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Inspection right" data-w2="" data-m="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td dt__td--right num nw" data-label="Max credits override" data-w2="" data-m="">
                            <span className="fd-muted">{"16 (default)"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p02-e2022" aria-label="Edit profile of Sabu P">{"Edit profile"}</a>
                          </td>
                        </tr>
                        <tr id="saved-e2023" style={{"--k0": "10", "--k1": "10", "--k2": "2", "--k3": "1", "--k4": "8", "--k5": "1", "--k6": "21", "--k7": "1", "--k8": "2"}}>
                          <td className="dt__td nw" data-label="Staff" data-w2="" data-t="">
                            <input className="mc-more" type="checkbox" aria-label="Show all details" />
                            <span className="hks-who">
                              <span className="avatar" style={{"--av-h": "225"}} aria-hidden="true">{"LD"}</span>
                              <span>
                                <a className="fd-link" href="#hks-p02-e2023">
                                  <strong>{"Leena D"}</strong>
                                </a>
                                <span className="fd-sub">{"EMP-2023"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="HK role" data-w2="">{"Turndown attendant"}</td>
                          <td className="dt__td dt__td--right num nw" data-label="Skill level" data-w2="">{"2"}</td>
                          <td className="dt__td" data-label="Languages" data-w2="">{"English, Malayalam"}</td>
                          <td className="dt__td nw" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Default shift" data-w2="">
                            <span className="hks-shift">
                              <i style={{"background": "#2B6CB0"}} aria-hidden="true" />
                              {"E"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Mobile login" data-w2="" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                            <span className="fd-sub">{"Phone 21"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Inspection right" data-w2="" data-m="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td dt__td--right num nw" data-label="Max credits override" data-w2="" data-m="">
                            <span className="fd-muted">{"16 (default)"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p02-e2023" aria-label="Edit profile of Leena D">{"Edit profile"}</a>
                          </td>
                        </tr>
                        <tr id="saved-e2024" style={{"--k0": "3", "--k1": "10", "--k2": "1", "--k3": "4", "--k4": "8", "--k5": "1", "--k6": "22", "--k7": "1", "--k8": "2"}}>
                          <td className="dt__td nw" data-label="Staff" data-w2="" data-t="">
                            <input className="mc-more" type="checkbox" aria-label="Show all details" />
                            <span className="hks-who">
                              <span className="avatar" style={{"--av-h": "135"}} aria-hidden="true">{"AR"}</span>
                              <span>
                                <a className="fd-link" href="#hks-p02-e2024">
                                  <strong>{"Asha R"}</strong>
                                </a>
                                <span className="fd-sub">{"EMP-2024"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="HK role" data-w2="">{"Turndown attendant"}</td>
                          <td className="dt__td dt__td--right num nw" data-label="Skill level" data-w2="">{"1"}</td>
                          <td className="dt__td" data-label="Languages" data-w2="">{"Malayalam"}</td>
                          <td className="dt__td nw" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Default shift" data-w2="">
                            <span className="hks-shift">
                              <i style={{"background": "#2B6CB0"}} aria-hidden="true" />
                              {"E"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Mobile login" data-w2="" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                            <span className="fd-sub">{"Phone 22"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Inspection right" data-w2="" data-m="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td dt__td--right num nw" data-label="Max credits override" data-w2="" data-m="">
                            <span className="fd-muted">{"16 (default)"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p02-e2024" aria-label="Edit profile of Asha R">{"Edit profile"}</a>
                          </td>
                        </tr>
                        <tr id="saved-e2025" style={{"--k0": "7", "--k1": "5", "--k2": "2", "--k3": "4", "--k4": "8", "--k5": "3", "--k6": "23", "--k7": "1", "--k8": "2"}}>
                          <td className="dt__td nw" data-label="Staff" data-w2="" data-t="">
                            <input className="mc-more" type="checkbox" aria-label="Show all details" />
                            <span className="hks-who">
                              <span className="avatar" style={{"--av-h": "348"}} aria-hidden="true">{"GN"}</span>
                              <span>
                                <a className="fd-link" href="#hks-p02-e2025">
                                  <strong>{"Girija N"}</strong>
                                </a>
                                <span className="fd-sub">{"EMP-2025"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="HK role" data-w2="">{"Linen room attendant"}</td>
                          <td className="dt__td dt__td--right num nw" data-label="Skill level" data-w2="">{"2"}</td>
                          <td className="dt__td" data-label="Languages" data-w2="">{"Malayalam"}</td>
                          <td className="dt__td nw" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Default shift" data-w2="">
                            <span className="hks-shift">
                              <i style={{"background": "#2F855A"}} aria-hidden="true" />
                              {"M"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Mobile login" data-w2="" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                            <span className="fd-sub">{"Phone 23"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Inspection right" data-w2="" data-m="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td dt__td--right num nw" data-label="Max credits override" data-w2="" data-m="">
                            <span className="fd-muted">{"16 (default)"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p02-e2025" aria-label="Edit profile of Girija N">{"Edit profile"}</a>
                          </td>
                        </tr>
                        <tr id="saved-e2026" style={{"--k0": "13", "--k1": "5", "--k2": "1", "--k3": "7", "--k4": "8", "--k5": "1", "--k6": "24", "--k7": "1", "--k8": "2"}}>
                          <td className="dt__td nw" data-label="Staff" data-w2="" data-t="">
                            <input className="mc-more" type="checkbox" aria-label="Show all details" />
                            <span className="hks-who">
                              <span className="avatar" style={{"--av-h": "136"}} aria-hidden="true">{"MC"}</span>
                              <span>
                                <a className="fd-link" href="#hks-p02-e2026">
                                  <strong>{"Mini C"}</strong>
                                </a>
                                <span className="fd-sub">{"EMP-2026"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="HK role" data-w2="">{"Linen room attendant"}</td>
                          <td className="dt__td dt__td--right num nw" data-label="Skill level" data-w2="">{"1"}</td>
                          <td className="dt__td" data-label="Languages" data-w2="">{"Malayalam, Tamil"}</td>
                          <td className="dt__td nw" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Default shift" data-w2="">
                            <span className="hks-shift">
                              <i style={{"background": "#2B6CB0"}} aria-hidden="true" />
                              {"E"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Mobile login" data-w2="" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                            <span className="fd-sub">{"Phone 24"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Inspection right" data-w2="" data-m="">
                            <span className="fd-muted">{"No"}</span>
                          </td>
                          <td className="dt__td dt__td--right num nw" data-label="Max credits override" data-w2="" data-m="">
                            <span className="fd-muted">{"16 (default)"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#hks-p02-e2026" aria-label="Edit profile of Mini C">{"Edit profile"}</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <nav className="pg" aria-label="Table pages">
                    <label className="pg-rpp">
                      <span>{"Rows per page"}</span>
                      <select className="pg-rpp__c" defaultValue={"10"}>
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
                      <input className="pg-in" type="radio" name="pghks04r10" id="pghks04r10p1" defaultChecked={true} />
                      <label className="pg-n" htmlFor="pghks04r10p1" aria-label="Page 1">{"1"}</label>
                      <input className="pg-in" type="radio" name="pghks04r10" id="pghks04r10p2" />
                      <label className="pg-n" htmlFor="pghks04r10p2" aria-label="Page 2">{"2"}</label>
                      <input className="pg-in" type="radio" name="pghks04r10" id="pghks04r10p3" />
                      <label className="pg-n" htmlFor="pghks04r10p3" aria-label="Page 3">{"3"}</label>
                      <span className="pg-info">
                        <span>
                          {"Showing "}
                          <b>{"1–10"}</b>
                          {" of 26"}
                        </span>
                        <span>
                          {"Showing "}
                          <b>{"11–20"}</b>
                          {" of 26"}
                        </span>
                        <span>
                          {"Showing "}
                          <b>{"21–26"}</b>
                          {" of 26"}
                        </span>
                      </span>
                      <span className="pg-prev">
                        <span className="pg-arr is-off">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-left" />
                          </svg>
                        </span>
                        <label className="pg-arr" htmlFor="pghks04r10p1" title="Previous page">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-left" />
                          </svg>
                        </label>
                        <label className="pg-arr" htmlFor="pghks04r10p2" title="Previous page">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-left" />
                          </svg>
                        </label>
                      </span>
                      <span className="pg-next">
                        <label className="pg-arr" htmlFor="pghks04r10p2" title="Next page">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-right" />
                          </svg>
                        </label>
                        <label className="pg-arr" htmlFor="pghks04r10p3" title="Next page">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-right" />
                          </svg>
                        </label>
                        <span className="pg-arr is-off">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-right" />
                          </svg>
                        </span>
                      </span>
                    </div>
                    <div className="pg-set pg-set--15">
                      <input className="pg-in" type="radio" name="pghks04r15" id="pghks04r15p1" defaultChecked={true} />
                      <label className="pg-n" htmlFor="pghks04r15p1" aria-label="Page 1">{"1"}</label>
                      <input className="pg-in" type="radio" name="pghks04r15" id="pghks04r15p2" />
                      <label className="pg-n" htmlFor="pghks04r15p2" aria-label="Page 2">{"2"}</label>
                      <span className="pg-info">
                        <span>
                          {"Showing "}
                          <b>{"1–15"}</b>
                          {" of 26"}
                        </span>
                        <span>
                          {"Showing "}
                          <b>{"16–26"}</b>
                          {" of 26"}
                        </span>
                      </span>
                      <span className="pg-prev">
                        <span className="pg-arr is-off">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-left" />
                          </svg>
                        </span>
                        <label className="pg-arr" htmlFor="pghks04r15p1" title="Previous page">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-left" />
                          </svg>
                        </label>
                      </span>
                      <span className="pg-next">
                        <label className="pg-arr" htmlFor="pghks04r15p2" title="Next page">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-right" />
                          </svg>
                        </label>
                        <span className="pg-arr is-off">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-right" />
                          </svg>
                        </span>
                      </span>
                    </div>
                    <div className="pg-set pg-set--20">
                      <input className="pg-in" type="radio" name="pghks04r20" id="pghks04r20p1" defaultChecked={true} />
                      <label className="pg-n" htmlFor="pghks04r20p1" aria-label="Page 1">{"1"}</label>
                      <input className="pg-in" type="radio" name="pghks04r20" id="pghks04r20p2" />
                      <label className="pg-n" htmlFor="pghks04r20p2" aria-label="Page 2">{"2"}</label>
                      <span className="pg-info">
                        <span>
                          {"Showing "}
                          <b>{"1–20"}</b>
                          {" of 26"}
                        </span>
                        <span>
                          {"Showing "}
                          <b>{"21–26"}</b>
                          {" of 26"}
                        </span>
                      </span>
                      <span className="pg-prev">
                        <span className="pg-arr is-off">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-left" />
                          </svg>
                        </span>
                        <label className="pg-arr" htmlFor="pghks04r20p1" title="Previous page">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-left" />
                          </svg>
                        </label>
                      </span>
                      <span className="pg-next">
                        <label className="pg-arr" htmlFor="pghks04r20p2" title="Next page">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-right" />
                          </svg>
                        </label>
                        <span className="pg-arr is-off">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-right" />
                          </svg>
                        </span>
                      </span>
                    </div>
                    <div className="pg-set pg-set--25">
                      <input className="pg-in" type="radio" name="pghks04r25" id="pghks04r25p1" defaultChecked={true} />
                      <label className="pg-n" htmlFor="pghks04r25p1" aria-label="Page 1">{"1"}</label>
                      <input className="pg-in" type="radio" name="pghks04r25" id="pghks04r25p2" />
                      <label className="pg-n" htmlFor="pghks04r25p2" aria-label="Page 2">{"2"}</label>
                      <span className="pg-info">
                        <span>
                          {"Showing "}
                          <b>{"1–25"}</b>
                          {" of 26"}
                        </span>
                        <span>
                          {"Showing "}
                          <b>{"26–26"}</b>
                          {" of 26"}
                        </span>
                      </span>
                      <span className="pg-prev">
                        <span className="pg-arr is-off">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-left" />
                          </svg>
                        </span>
                        <label className="pg-arr" htmlFor="pghks04r25p1" title="Previous page">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-left" />
                          </svg>
                        </label>
                      </span>
                      <span className="pg-next">
                        <label className="pg-arr" htmlFor="pghks04r25p2" title="Next page">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-right" />
                          </svg>
                        </label>
                        <span className="pg-arr is-off">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-right" />
                          </svg>
                        </span>
                      </span>
                    </div>
                    <div className="pg-set pg-set--30">
                      <input className="pg-in" type="radio" name="pghks04r30" id="pghks04r30p1" defaultChecked={true} />
                      <label className="pg-n" htmlFor="pghks04r30p1" aria-label="Page 1">{"1"}</label>
                      <span className="pg-info">
                        <span>
                          {"Showing "}
                          <b>{"1–26"}</b>
                          {" of 26"}
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
              <div className="modal modal--full" id="hks-p02-e2001" data-code="HKS-P02" role="dialog" aria-modal="true" aria-labelledby="hks-p02-e2001-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box hks-form" action="/housekeeping-setup/hks-04-housekeeping-staff-and-shifts/#saved-e2001" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="hks-p02-e2001-t">{"Housekeeping profile: Sunita Ranjan"}</h2>
                      <p className="modal__desc">{"Role, skill, languages, home section and shift of one staff member. The name and employee number come from HR and cannot be changed here."}</p>
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
                        <span className="field__label">{"Staff"}</span>
                        <div className="hks-who hks-who--big">
                          <span className="avatar" style={{"--av-h": "230"}} aria-hidden="true">{"SR"}</span>
                          <span>
                            <strong>{"Sunita Ranjan"}</strong>
                            <span className="fd-sub">{"EMP-2001 · Housekeeping · from HR & Payroll"}</span>
                          </span>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2001-role">
                          {"HK role "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2001-role" name="role" required={true} defaultValue={"Executive housekeeper"}>
                            <option value="Room attendant">{"Room attendant"}</option>
                            <option value="Senior attendant">{"Senior attendant"}</option>
                            <option value="PA attendant">{"PA attendant"}</option>
                            <option value="Houseman">{"Houseman"}</option>
                            <option value="Turndown attendant">{"Turndown attendant"}</option>
                            <option value="Linen room attendant">{"Linen room attendant"}</option>
                            <option value="Floor supervisor">{"Floor supervisor"}</option>
                            <option value="Assistant housekeeper">{"Assistant housekeeper"}</option>
                            <option value="Executive housekeeper">{"Executive housekeeper"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Roles used in housekeeping"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2001-skill">
                          {"Skill level "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2001-skill" name="skill" required={true} defaultValue={"3"}>
                            <option value="1">{"Level 1"}</option>
                            <option value="2">{"Level 2"}</option>
                            <option value="3">{"Level 3 – VIP and suite rooms"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Level 3 may clean VIP and suite rooms when that allocation rule is on"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="hks-p02-e2001-sec">{"Home section"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2001-sec" name="home_section" defaultValue={""}>
                            <option value="">{"No home section"}</option>
                            <option value="S1">{"S1"}</option>
                            <option value="S2">{"S2"}</option>
                            <option value="S3">{"S3"}</option>
                            <option value="S4">{"S4"}</option>
                            <option value="S5">{"S5"}</option>
                            <option value="S6">{"S6"}</option>
                            <option value="S7">{"S7"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Required for attendants and floor supervisors. Sections are set in HKS-03."}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2001-shift">
                          {"Default shift "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2001-shift" name="default_shift" required={true} defaultValue={"G"}>
                            <option value="M">{"M · Morning 07:00–15:30"}</option>
                            <option value="E">{"E · Evening 15:00–23:30"}</option>
                            <option value="N">{"N · Night 23:00–07:30"}</option>
                            <option value="G">{"G · General 09:00–18:00"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Shift codes from the Shift codes tab; the duty roster starts from it"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Languages"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="English" defaultChecked={true} />
                            <span className="check__box" />
                            {"English"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Malayalam" defaultChecked={true} />
                            <span className="check__box" />
                            {"Malayalam"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Hindi" defaultChecked={true} />
                            <span className="check__box" />
                            {"Hindi"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Tamil" />
                            <span className="check__box" />
                            {"Tamil"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Arabic" />
                            <span className="check__box" />
                            {"Arabic"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Other" />
                            <span className="check__box" />
                            {"Other"}
                          </label>
                        </div>
                        <span className="field__hint">{"Used to match the guest’s language when that allocation rule is on"}</span>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="hks-p02-e2001-insp">
                          <input id="hks-p02-e2001-insp" type="checkbox" role="switch" name="inspection_right" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Inspection right"}
                        </label>
                        <span className="field__hint">{"Only for supervisor roles (floor supervisor, assistant and executive housekeeper)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2001-max">{"Max credits override"}</label>
                        <input className="field__input num" id="hks-p02-e2001-max" type="number" name="max_credits" min="1" max="30" placeholder="16 (hotel default)" defaultValue={""} />
                        <span className="field__hint">{"1–30. A personal limit, for example 10 for a trainee. Empty = the hotel limit from Allocation rules."}</span>
                      </div>
                      <div className="field field--wide">
                        <span className="field__label">{"Mobile login"}</span>
                        <div className="hks-login">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                          {" "}
                          <span className="fd-muted">{"Hotel phone: Phone 01 · last sync today 09:10"}</span>
                        </div>
                        <span className="field__hint">{"“Create login” opens the user in Super Admin user management. Attendants need a login to use the phone app."}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p02-e2001-ag">
                          <input id="hks-p02-e2001-ag" type="checkbox" role="switch" name="agency" />
                          <span className="sw__track" />
                          {"Agency staff"}
                        </label>
                        <span className="field__hint">{"Outsourced staff: give the agency name and the contract end date"}</span>
                      </div>
                      <div className="field hks-agency">
                        <label className="field__label" htmlFor="hks-p02-e2001-agn">{"Agency name"}</label>
                        <input className="field__input" id="hks-p02-e2001-agn" type="text" name="agency_name" maxLength="60" defaultValue={""} />
                      </div>
                      <div className="field hks-agency" data-fw="s">
                        <label className="field__label" htmlFor="hks-p02-e2001-agd">{"Contract end date"}</label>
                        <input className="field__input num" id="hks-p02-e2001-agd" type="date" name="agency_end" defaultValue={""} />
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
              <div className="modal modal--full" id="hks-p02-e2002" data-code="HKS-P02" role="dialog" aria-modal="true" aria-labelledby="hks-p02-e2002-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box hks-form" action="/housekeeping-setup/hks-04-housekeeping-staff-and-shifts/#saved-e2002" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="hks-p02-e2002-t">{"Housekeeping profile: Reshma Nathan"}</h2>
                      <p className="modal__desc">{"Role, skill, languages, home section and shift of one staff member. The name and employee number come from HR and cannot be changed here."}</p>
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
                        <span className="field__label">{"Staff"}</span>
                        <div className="hks-who hks-who--big">
                          <span className="avatar" style={{"--av-h": "314"}} aria-hidden="true">{"RN"}</span>
                          <span>
                            <strong>{"Reshma Nathan"}</strong>
                            <span className="fd-sub">{"EMP-2002 · Housekeeping · from HR & Payroll"}</span>
                          </span>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2002-role">
                          {"HK role "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2002-role" name="role" required={true} defaultValue={"Assistant housekeeper"}>
                            <option value="Room attendant">{"Room attendant"}</option>
                            <option value="Senior attendant">{"Senior attendant"}</option>
                            <option value="PA attendant">{"PA attendant"}</option>
                            <option value="Houseman">{"Houseman"}</option>
                            <option value="Turndown attendant">{"Turndown attendant"}</option>
                            <option value="Linen room attendant">{"Linen room attendant"}</option>
                            <option value="Floor supervisor">{"Floor supervisor"}</option>
                            <option value="Assistant housekeeper">{"Assistant housekeeper"}</option>
                            <option value="Executive housekeeper">{"Executive housekeeper"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Roles used in housekeeping"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2002-skill">
                          {"Skill level "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2002-skill" name="skill" required={true} defaultValue={"3"}>
                            <option value="1">{"Level 1"}</option>
                            <option value="2">{"Level 2"}</option>
                            <option value="3">{"Level 3 – VIP and suite rooms"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Level 3 may clean VIP and suite rooms when that allocation rule is on"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="hks-p02-e2002-sec">{"Home section"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2002-sec" name="home_section" defaultValue={""}>
                            <option value="">{"No home section"}</option>
                            <option value="S1">{"S1"}</option>
                            <option value="S2">{"S2"}</option>
                            <option value="S3">{"S3"}</option>
                            <option value="S4">{"S4"}</option>
                            <option value="S5">{"S5"}</option>
                            <option value="S6">{"S6"}</option>
                            <option value="S7">{"S7"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Required for attendants and floor supervisors. Sections are set in HKS-03."}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2002-shift">
                          {"Default shift "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2002-shift" name="default_shift" required={true} defaultValue={"G"}>
                            <option value="M">{"M · Morning 07:00–15:30"}</option>
                            <option value="E">{"E · Evening 15:00–23:30"}</option>
                            <option value="N">{"N · Night 23:00–07:30"}</option>
                            <option value="G">{"G · General 09:00–18:00"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Shift codes from the Shift codes tab; the duty roster starts from it"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Languages"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="English" defaultChecked={true} />
                            <span className="check__box" />
                            {"English"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Malayalam" defaultChecked={true} />
                            <span className="check__box" />
                            {"Malayalam"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Hindi" />
                            <span className="check__box" />
                            {"Hindi"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Tamil" />
                            <span className="check__box" />
                            {"Tamil"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Arabic" />
                            <span className="check__box" />
                            {"Arabic"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Other" />
                            <span className="check__box" />
                            {"Other"}
                          </label>
                        </div>
                        <span className="field__hint">{"Used to match the guest’s language when that allocation rule is on"}</span>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="hks-p02-e2002-insp">
                          <input id="hks-p02-e2002-insp" type="checkbox" role="switch" name="inspection_right" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Inspection right"}
                        </label>
                        <span className="field__hint">{"Only for supervisor roles (floor supervisor, assistant and executive housekeeper)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2002-max">{"Max credits override"}</label>
                        <input className="field__input num" id="hks-p02-e2002-max" type="number" name="max_credits" min="1" max="30" placeholder="16 (hotel default)" defaultValue={""} />
                        <span className="field__hint">{"1–30. A personal limit, for example 10 for a trainee. Empty = the hotel limit from Allocation rules."}</span>
                      </div>
                      <div className="field field--wide">
                        <span className="field__label">{"Mobile login"}</span>
                        <div className="hks-login">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                          {" "}
                          <span className="fd-muted">{"Hotel phone: Phone 02 · last sync today 09:10"}</span>
                        </div>
                        <span className="field__hint">{"“Create login” opens the user in Super Admin user management. Attendants need a login to use the phone app."}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p02-e2002-ag">
                          <input id="hks-p02-e2002-ag" type="checkbox" role="switch" name="agency" />
                          <span className="sw__track" />
                          {"Agency staff"}
                        </label>
                        <span className="field__hint">{"Outsourced staff: give the agency name and the contract end date"}</span>
                      </div>
                      <div className="field hks-agency">
                        <label className="field__label" htmlFor="hks-p02-e2002-agn">{"Agency name"}</label>
                        <input className="field__input" id="hks-p02-e2002-agn" type="text" name="agency_name" maxLength="60" defaultValue={""} />
                      </div>
                      <div className="field hks-agency" data-fw="s">
                        <label className="field__label" htmlFor="hks-p02-e2002-agd">{"Contract end date"}</label>
                        <input className="field__input num" id="hks-p02-e2002-agd" type="date" name="agency_end" defaultValue={""} />
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
              <div className="modal modal--full" id="hks-p02-e2003" data-code="HKS-P02" role="dialog" aria-modal="true" aria-labelledby="hks-p02-e2003-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box hks-form" action="/housekeeping-setup/hks-04-housekeeping-staff-and-shifts/#saved-e2003" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="hks-p02-e2003-t">{"Housekeeping profile: Beena Thomas"}</h2>
                      <p className="modal__desc">{"Role, skill, languages, home section and shift of one staff member. The name and employee number come from HR and cannot be changed here."}</p>
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
                        <span className="field__label">{"Staff"}</span>
                        <div className="hks-who hks-who--big">
                          <span className="avatar" style={{"--av-h": "47"}} aria-hidden="true">{"BT"}</span>
                          <span>
                            <strong>{"Beena Thomas"}</strong>
                            <span className="fd-sub">{"EMP-2003 · Housekeeping · from HR & Payroll"}</span>
                          </span>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2003-role">
                          {"HK role "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2003-role" name="role" required={true} defaultValue={"Floor supervisor"}>
                            <option value="Room attendant">{"Room attendant"}</option>
                            <option value="Senior attendant">{"Senior attendant"}</option>
                            <option value="PA attendant">{"PA attendant"}</option>
                            <option value="Houseman">{"Houseman"}</option>
                            <option value="Turndown attendant">{"Turndown attendant"}</option>
                            <option value="Linen room attendant">{"Linen room attendant"}</option>
                            <option value="Floor supervisor">{"Floor supervisor"}</option>
                            <option value="Assistant housekeeper">{"Assistant housekeeper"}</option>
                            <option value="Executive housekeeper">{"Executive housekeeper"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Roles used in housekeeping"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2003-skill">
                          {"Skill level "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2003-skill" name="skill" required={true} defaultValue={"3"}>
                            <option value="1">{"Level 1"}</option>
                            <option value="2">{"Level 2"}</option>
                            <option value="3">{"Level 3 – VIP and suite rooms"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Level 3 may clean VIP and suite rooms when that allocation rule is on"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="hks-p02-e2003-sec">
                          {"Home section "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2003-sec" name="home_section" required={true} defaultValue={"S1"}>
                            <option value="">{"No home section"}</option>
                            <option value="S1">{"S1"}</option>
                            <option value="S2">{"S2"}</option>
                            <option value="S3">{"S3"}</option>
                            <option value="S4">{"S4"}</option>
                            <option value="S5">{"S5"}</option>
                            <option value="S6">{"S6"}</option>
                            <option value="S7">{"S7"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Required for attendants and floor supervisors. Sections are set in HKS-03."}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2003-shift">
                          {"Default shift "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2003-shift" name="default_shift" required={true} defaultValue={"M"}>
                            <option value="M">{"M · Morning 07:00–15:30"}</option>
                            <option value="E">{"E · Evening 15:00–23:30"}</option>
                            <option value="N">{"N · Night 23:00–07:30"}</option>
                            <option value="G">{"G · General 09:00–18:00"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Shift codes from the Shift codes tab; the duty roster starts from it"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Languages"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="English" defaultChecked={true} />
                            <span className="check__box" />
                            {"English"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Malayalam" defaultChecked={true} />
                            <span className="check__box" />
                            {"Malayalam"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Hindi" />
                            <span className="check__box" />
                            {"Hindi"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Tamil" />
                            <span className="check__box" />
                            {"Tamil"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Arabic" />
                            <span className="check__box" />
                            {"Arabic"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Other" />
                            <span className="check__box" />
                            {"Other"}
                          </label>
                        </div>
                        <span className="field__hint">{"Used to match the guest’s language when that allocation rule is on"}</span>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="hks-p02-e2003-insp">
                          <input id="hks-p02-e2003-insp" type="checkbox" role="switch" name="inspection_right" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Inspection right"}
                        </label>
                        <span className="field__hint">{"Only for supervisor roles (floor supervisor, assistant and executive housekeeper)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2003-max">{"Max credits override"}</label>
                        <input className="field__input num" id="hks-p02-e2003-max" type="number" name="max_credits" min="1" max="30" placeholder="16 (hotel default)" defaultValue={""} />
                        <span className="field__hint">{"1–30. A personal limit, for example 10 for a trainee. Empty = the hotel limit from Allocation rules."}</span>
                      </div>
                      <div className="field field--wide">
                        <span className="field__label">{"Mobile login"}</span>
                        <div className="hks-login">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                          {" "}
                          <span className="fd-muted">{"Hotel phone: Phone 03 · last sync today 09:10"}</span>
                        </div>
                        <span className="field__hint">{"“Create login” opens the user in Super Admin user management. Attendants need a login to use the phone app."}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p02-e2003-ag">
                          <input id="hks-p02-e2003-ag" type="checkbox" role="switch" name="agency" />
                          <span className="sw__track" />
                          {"Agency staff"}
                        </label>
                        <span className="field__hint">{"Outsourced staff: give the agency name and the contract end date"}</span>
                      </div>
                      <div className="field hks-agency">
                        <label className="field__label" htmlFor="hks-p02-e2003-agn">{"Agency name"}</label>
                        <input className="field__input" id="hks-p02-e2003-agn" type="text" name="agency_name" maxLength="60" defaultValue={""} />
                      </div>
                      <div className="field hks-agency" data-fw="s">
                        <label className="field__label" htmlFor="hks-p02-e2003-agd">{"Contract end date"}</label>
                        <input className="field__input num" id="hks-p02-e2003-agd" type="date" name="agency_end" defaultValue={""} />
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
              <div className="modal modal--full" id="hks-p02-e2004" data-code="HKS-P02" role="dialog" aria-modal="true" aria-labelledby="hks-p02-e2004-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box hks-form" action="/housekeeping-setup/hks-04-housekeeping-staff-and-shifts/#saved-e2004" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="hks-p02-e2004-t">{"Housekeeping profile: Joseph Paul"}</h2>
                      <p className="modal__desc">{"Role, skill, languages, home section and shift of one staff member. The name and employee number come from HR and cannot be changed here."}</p>
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
                        <span className="field__label">{"Staff"}</span>
                        <div className="hks-who hks-who--big">
                          <span className="avatar" style={{"--av-h": "331"}} aria-hidden="true">{"JP"}</span>
                          <span>
                            <strong>{"Joseph Paul"}</strong>
                            <span className="fd-sub">{"EMP-2004 · Housekeeping · from HR & Payroll"}</span>
                          </span>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2004-role">
                          {"HK role "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2004-role" name="role" required={true} defaultValue={"Floor supervisor"}>
                            <option value="Room attendant">{"Room attendant"}</option>
                            <option value="Senior attendant">{"Senior attendant"}</option>
                            <option value="PA attendant">{"PA attendant"}</option>
                            <option value="Houseman">{"Houseman"}</option>
                            <option value="Turndown attendant">{"Turndown attendant"}</option>
                            <option value="Linen room attendant">{"Linen room attendant"}</option>
                            <option value="Floor supervisor">{"Floor supervisor"}</option>
                            <option value="Assistant housekeeper">{"Assistant housekeeper"}</option>
                            <option value="Executive housekeeper">{"Executive housekeeper"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Roles used in housekeeping"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2004-skill">
                          {"Skill level "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2004-skill" name="skill" required={true} defaultValue={"3"}>
                            <option value="1">{"Level 1"}</option>
                            <option value="2">{"Level 2"}</option>
                            <option value="3">{"Level 3 – VIP and suite rooms"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Level 3 may clean VIP and suite rooms when that allocation rule is on"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="hks-p02-e2004-sec">
                          {"Home section "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2004-sec" name="home_section" required={true} defaultValue={"S4"}>
                            <option value="">{"No home section"}</option>
                            <option value="S1">{"S1"}</option>
                            <option value="S2">{"S2"}</option>
                            <option value="S3">{"S3"}</option>
                            <option value="S4">{"S4"}</option>
                            <option value="S5">{"S5"}</option>
                            <option value="S6">{"S6"}</option>
                            <option value="S7">{"S7"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Required for attendants and floor supervisors. Sections are set in HKS-03."}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2004-shift">
                          {"Default shift "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2004-shift" name="default_shift" required={true} defaultValue={"M"}>
                            <option value="M">{"M · Morning 07:00–15:30"}</option>
                            <option value="E">{"E · Evening 15:00–23:30"}</option>
                            <option value="N">{"N · Night 23:00–07:30"}</option>
                            <option value="G">{"G · General 09:00–18:00"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Shift codes from the Shift codes tab; the duty roster starts from it"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Languages"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="English" defaultChecked={true} />
                            <span className="check__box" />
                            {"English"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Malayalam" defaultChecked={true} />
                            <span className="check__box" />
                            {"Malayalam"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Hindi" defaultChecked={true} />
                            <span className="check__box" />
                            {"Hindi"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Tamil" />
                            <span className="check__box" />
                            {"Tamil"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Arabic" />
                            <span className="check__box" />
                            {"Arabic"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Other" />
                            <span className="check__box" />
                            {"Other"}
                          </label>
                        </div>
                        <span className="field__hint">{"Used to match the guest’s language when that allocation rule is on"}</span>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="hks-p02-e2004-insp">
                          <input id="hks-p02-e2004-insp" type="checkbox" role="switch" name="inspection_right" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Inspection right"}
                        </label>
                        <span className="field__hint">{"Only for supervisor roles (floor supervisor, assistant and executive housekeeper)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2004-max">{"Max credits override"}</label>
                        <input className="field__input num" id="hks-p02-e2004-max" type="number" name="max_credits" min="1" max="30" placeholder="16 (hotel default)" defaultValue={""} />
                        <span className="field__hint">{"1–30. A personal limit, for example 10 for a trainee. Empty = the hotel limit from Allocation rules."}</span>
                      </div>
                      <div className="field field--wide">
                        <span className="field__label">{"Mobile login"}</span>
                        <div className="hks-login">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                          {" "}
                          <span className="fd-muted">{"Hotel phone: Phone 04 · last sync today 09:10"}</span>
                        </div>
                        <span className="field__hint">{"“Create login” opens the user in Super Admin user management. Attendants need a login to use the phone app."}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p02-e2004-ag">
                          <input id="hks-p02-e2004-ag" type="checkbox" role="switch" name="agency" />
                          <span className="sw__track" />
                          {"Agency staff"}
                        </label>
                        <span className="field__hint">{"Outsourced staff: give the agency name and the contract end date"}</span>
                      </div>
                      <div className="field hks-agency">
                        <label className="field__label" htmlFor="hks-p02-e2004-agn">{"Agency name"}</label>
                        <input className="field__input" id="hks-p02-e2004-agn" type="text" name="agency_name" maxLength="60" defaultValue={""} />
                      </div>
                      <div className="field hks-agency" data-fw="s">
                        <label className="field__label" htmlFor="hks-p02-e2004-agd">{"Contract end date"}</label>
                        <input className="field__input num" id="hks-p02-e2004-agd" type="date" name="agency_end" defaultValue={""} />
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
              <div className="modal modal--full" id="hks-p02-e2005" data-code="HKS-P02" role="dialog" aria-modal="true" aria-labelledby="hks-p02-e2005-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box hks-form" action="/housekeeping-setup/hks-04-housekeeping-staff-and-shifts/#saved-e2005" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="hks-p02-e2005-t">{"Housekeeping profile: Latha Nathan"}</h2>
                      <p className="modal__desc">{"Role, skill, languages, home section and shift of one staff member. The name and employee number come from HR and cannot be changed here."}</p>
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
                        <span className="field__label">{"Staff"}</span>
                        <div className="hks-who hks-who--big">
                          <span className="avatar" style={{"--av-h": "196"}} aria-hidden="true">{"LN"}</span>
                          <span>
                            <strong>{"Latha Nathan"}</strong>
                            <span className="fd-sub">{"EMP-2005 · Housekeeping · from HR & Payroll"}</span>
                          </span>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2005-role">
                          {"HK role "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2005-role" name="role" required={true} defaultValue={"Floor supervisor"}>
                            <option value="Room attendant">{"Room attendant"}</option>
                            <option value="Senior attendant">{"Senior attendant"}</option>
                            <option value="PA attendant">{"PA attendant"}</option>
                            <option value="Houseman">{"Houseman"}</option>
                            <option value="Turndown attendant">{"Turndown attendant"}</option>
                            <option value="Linen room attendant">{"Linen room attendant"}</option>
                            <option value="Floor supervisor">{"Floor supervisor"}</option>
                            <option value="Assistant housekeeper">{"Assistant housekeeper"}</option>
                            <option value="Executive housekeeper">{"Executive housekeeper"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Roles used in housekeeping"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2005-skill">
                          {"Skill level "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2005-skill" name="skill" required={true} defaultValue={"3"}>
                            <option value="1">{"Level 1"}</option>
                            <option value="2">{"Level 2"}</option>
                            <option value="3">{"Level 3 – VIP and suite rooms"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Level 3 may clean VIP and suite rooms when that allocation rule is on"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="hks-p02-e2005-sec">
                          {"Home section "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2005-sec" name="home_section" required={true} defaultValue={"S7"}>
                            <option value="">{"No home section"}</option>
                            <option value="S1">{"S1"}</option>
                            <option value="S2">{"S2"}</option>
                            <option value="S3">{"S3"}</option>
                            <option value="S4">{"S4"}</option>
                            <option value="S5">{"S5"}</option>
                            <option value="S6">{"S6"}</option>
                            <option value="S7">{"S7"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Required for attendants and floor supervisors. Sections are set in HKS-03."}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2005-shift">
                          {"Default shift "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2005-shift" name="default_shift" required={true} defaultValue={"E"}>
                            <option value="M">{"M · Morning 07:00–15:30"}</option>
                            <option value="E">{"E · Evening 15:00–23:30"}</option>
                            <option value="N">{"N · Night 23:00–07:30"}</option>
                            <option value="G">{"G · General 09:00–18:00"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Shift codes from the Shift codes tab; the duty roster starts from it"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Languages"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="English" defaultChecked={true} />
                            <span className="check__box" />
                            {"English"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Malayalam" defaultChecked={true} />
                            <span className="check__box" />
                            {"Malayalam"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Hindi" />
                            <span className="check__box" />
                            {"Hindi"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Tamil" />
                            <span className="check__box" />
                            {"Tamil"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Arabic" />
                            <span className="check__box" />
                            {"Arabic"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Other" />
                            <span className="check__box" />
                            {"Other"}
                          </label>
                        </div>
                        <span className="field__hint">{"Used to match the guest’s language when that allocation rule is on"}</span>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="hks-p02-e2005-insp">
                          <input id="hks-p02-e2005-insp" type="checkbox" role="switch" name="inspection_right" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Inspection right"}
                        </label>
                        <span className="field__hint">{"Only for supervisor roles (floor supervisor, assistant and executive housekeeper)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2005-max">{"Max credits override"}</label>
                        <input className="field__input num" id="hks-p02-e2005-max" type="number" name="max_credits" min="1" max="30" placeholder="16 (hotel default)" defaultValue={""} />
                        <span className="field__hint">{"1–30. A personal limit, for example 10 for a trainee. Empty = the hotel limit from Allocation rules."}</span>
                      </div>
                      <div className="field field--wide">
                        <span className="field__label">{"Mobile login"}</span>
                        <div className="hks-login">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                          {" "}
                          <span className="fd-muted">{"Hotel phone: Phone 05 · last sync today 09:10"}</span>
                        </div>
                        <span className="field__hint">{"“Create login” opens the user in Super Admin user management. Attendants need a login to use the phone app."}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p02-e2005-ag">
                          <input id="hks-p02-e2005-ag" type="checkbox" role="switch" name="agency" />
                          <span className="sw__track" />
                          {"Agency staff"}
                        </label>
                        <span className="field__hint">{"Outsourced staff: give the agency name and the contract end date"}</span>
                      </div>
                      <div className="field hks-agency">
                        <label className="field__label" htmlFor="hks-p02-e2005-agn">{"Agency name"}</label>
                        <input className="field__input" id="hks-p02-e2005-agn" type="text" name="agency_name" maxLength="60" defaultValue={""} />
                      </div>
                      <div className="field hks-agency" data-fw="s">
                        <label className="field__label" htmlFor="hks-p02-e2005-agd">{"Contract end date"}</label>
                        <input className="field__input num" id="hks-p02-e2005-agd" type="date" name="agency_end" defaultValue={""} />
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
              <div className="modal modal--full" id="hks-p02-e2006" data-code="HKS-P02" role="dialog" aria-modal="true" aria-labelledby="hks-p02-e2006-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box hks-form" action="/housekeeping-setup/hks-04-housekeeping-staff-and-shifts/#saved-e2006" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="hks-p02-e2006-t">{"Housekeeping profile: Mariamma Varghese"}</h2>
                      <p className="modal__desc">{"Role, skill, languages, home section and shift of one staff member. The name and employee number come from HR and cannot be changed here."}</p>
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
                        <span className="field__label">{"Staff"}</span>
                        <div className="hks-who hks-who--big">
                          <span className="avatar" style={{"--av-h": "218"}} aria-hidden="true">{"MV"}</span>
                          <span>
                            <strong>{"Mariamma Varghese"}</strong>
                            <span className="fd-sub">{"EMP-2006 · Housekeeping · from HR & Payroll"}</span>
                          </span>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2006-role">
                          {"HK role "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2006-role" name="role" required={true} defaultValue={"Senior attendant"}>
                            <option value="Room attendant">{"Room attendant"}</option>
                            <option value="Senior attendant">{"Senior attendant"}</option>
                            <option value="PA attendant">{"PA attendant"}</option>
                            <option value="Houseman">{"Houseman"}</option>
                            <option value="Turndown attendant">{"Turndown attendant"}</option>
                            <option value="Linen room attendant">{"Linen room attendant"}</option>
                            <option value="Floor supervisor">{"Floor supervisor"}</option>
                            <option value="Assistant housekeeper">{"Assistant housekeeper"}</option>
                            <option value="Executive housekeeper">{"Executive housekeeper"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Roles used in housekeeping"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2006-skill">
                          {"Skill level "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2006-skill" name="skill" required={true} defaultValue={"3"}>
                            <option value="1">{"Level 1"}</option>
                            <option value="2">{"Level 2"}</option>
                            <option value="3">{"Level 3 – VIP and suite rooms"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Level 3 may clean VIP and suite rooms when that allocation rule is on"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="hks-p02-e2006-sec">
                          {"Home section "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2006-sec" name="home_section" required={true} defaultValue={"S3"}>
                            <option value="">{"No home section"}</option>
                            <option value="S1">{"S1"}</option>
                            <option value="S2">{"S2"}</option>
                            <option value="S3">{"S3"}</option>
                            <option value="S4">{"S4"}</option>
                            <option value="S5">{"S5"}</option>
                            <option value="S6">{"S6"}</option>
                            <option value="S7">{"S7"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Required for attendants and floor supervisors. Sections are set in HKS-03."}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2006-shift">
                          {"Default shift "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2006-shift" name="default_shift" required={true} defaultValue={"M"}>
                            <option value="M">{"M · Morning 07:00–15:30"}</option>
                            <option value="E">{"E · Evening 15:00–23:30"}</option>
                            <option value="N">{"N · Night 23:00–07:30"}</option>
                            <option value="G">{"G · General 09:00–18:00"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Shift codes from the Shift codes tab; the duty roster starts from it"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Languages"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="English" defaultChecked={true} />
                            <span className="check__box" />
                            {"English"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Malayalam" defaultChecked={true} />
                            <span className="check__box" />
                            {"Malayalam"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Hindi" />
                            <span className="check__box" />
                            {"Hindi"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Tamil" defaultChecked={true} />
                            <span className="check__box" />
                            {"Tamil"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Arabic" />
                            <span className="check__box" />
                            {"Arabic"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Other" />
                            <span className="check__box" />
                            {"Other"}
                          </label>
                        </div>
                        <span className="field__hint">{"Used to match the guest’s language when that allocation rule is on"}</span>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="hks-p02-e2006-insp">
                          <input id="hks-p02-e2006-insp" type="checkbox" role="switch" name="inspection_right" disabled={true} />
                          <span className="sw__track" />
                          {"Inspection right"}
                        </label>
                        <span className="field__hint">{"Only for supervisor roles (floor supervisor, assistant and executive housekeeper)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2006-max">{"Max credits override"}</label>
                        <input className="field__input num" id="hks-p02-e2006-max" type="number" name="max_credits" min="1" max="30" placeholder="16 (hotel default)" defaultValue={""} />
                        <span className="field__hint">{"1–30. A personal limit, for example 10 for a trainee. Empty = the hotel limit from Allocation rules."}</span>
                      </div>
                      <div className="field field--wide">
                        <span className="field__label">{"Mobile login"}</span>
                        <div className="hks-login">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                          {" "}
                          <span className="fd-muted">{"Hotel phone: Phone 06 · last sync today 09:10"}</span>
                        </div>
                        <span className="field__hint">{"“Create login” opens the user in Super Admin user management. Attendants need a login to use the phone app."}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p02-e2006-ag">
                          <input id="hks-p02-e2006-ag" type="checkbox" role="switch" name="agency" />
                          <span className="sw__track" />
                          {"Agency staff"}
                        </label>
                        <span className="field__hint">{"Outsourced staff: give the agency name and the contract end date"}</span>
                      </div>
                      <div className="field hks-agency">
                        <label className="field__label" htmlFor="hks-p02-e2006-agn">{"Agency name"}</label>
                        <input className="field__input" id="hks-p02-e2006-agn" type="text" name="agency_name" maxLength="60" defaultValue={""} />
                      </div>
                      <div className="field hks-agency" data-fw="s">
                        <label className="field__label" htmlFor="hks-p02-e2006-agd">{"Contract end date"}</label>
                        <input className="field__input num" id="hks-p02-e2006-agd" type="date" name="agency_end" defaultValue={""} />
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
              <div className="modal modal--full" id="hks-p02-e2007" data-code="HKS-P02" role="dialog" aria-modal="true" aria-labelledby="hks-p02-e2007-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box hks-form" action="/housekeeping-setup/hks-04-housekeeping-staff-and-shifts/#saved-e2007" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="hks-p02-e2007-t">{"Housekeeping profile: Saritha K"}</h2>
                      <p className="modal__desc">{"Role, skill, languages, home section and shift of one staff member. The name and employee number come from HR and cannot be changed here."}</p>
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
                        <span className="field__label">{"Staff"}</span>
                        <div className="hks-who hks-who--big">
                          <span className="avatar" style={{"--av-h": "103"}} aria-hidden="true">{"SK"}</span>
                          <span>
                            <strong>{"Saritha K"}</strong>
                            <span className="fd-sub">{"EMP-2007 · Housekeeping · from HR & Payroll"}</span>
                          </span>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2007-role">
                          {"HK role "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2007-role" name="role" required={true} defaultValue={"Senior attendant"}>
                            <option value="Room attendant">{"Room attendant"}</option>
                            <option value="Senior attendant">{"Senior attendant"}</option>
                            <option value="PA attendant">{"PA attendant"}</option>
                            <option value="Houseman">{"Houseman"}</option>
                            <option value="Turndown attendant">{"Turndown attendant"}</option>
                            <option value="Linen room attendant">{"Linen room attendant"}</option>
                            <option value="Floor supervisor">{"Floor supervisor"}</option>
                            <option value="Assistant housekeeper">{"Assistant housekeeper"}</option>
                            <option value="Executive housekeeper">{"Executive housekeeper"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Roles used in housekeeping"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2007-skill">
                          {"Skill level "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2007-skill" name="skill" required={true} defaultValue={"3"}>
                            <option value="1">{"Level 1"}</option>
                            <option value="2">{"Level 2"}</option>
                            <option value="3">{"Level 3 – VIP and suite rooms"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Level 3 may clean VIP and suite rooms when that allocation rule is on"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="hks-p02-e2007-sec">
                          {"Home section "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2007-sec" name="home_section" required={true} defaultValue={"S7"}>
                            <option value="">{"No home section"}</option>
                            <option value="S1">{"S1"}</option>
                            <option value="S2">{"S2"}</option>
                            <option value="S3">{"S3"}</option>
                            <option value="S4">{"S4"}</option>
                            <option value="S5">{"S5"}</option>
                            <option value="S6">{"S6"}</option>
                            <option value="S7">{"S7"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Required for attendants and floor supervisors. Sections are set in HKS-03."}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2007-shift">
                          {"Default shift "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2007-shift" name="default_shift" required={true} defaultValue={"M"}>
                            <option value="M">{"M · Morning 07:00–15:30"}</option>
                            <option value="E">{"E · Evening 15:00–23:30"}</option>
                            <option value="N">{"N · Night 23:00–07:30"}</option>
                            <option value="G">{"G · General 09:00–18:00"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Shift codes from the Shift codes tab; the duty roster starts from it"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Languages"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="English" defaultChecked={true} />
                            <span className="check__box" />
                            {"English"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Malayalam" defaultChecked={true} />
                            <span className="check__box" />
                            {"Malayalam"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Hindi" />
                            <span className="check__box" />
                            {"Hindi"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Tamil" />
                            <span className="check__box" />
                            {"Tamil"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Arabic" />
                            <span className="check__box" />
                            {"Arabic"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Other" />
                            <span className="check__box" />
                            {"Other"}
                          </label>
                        </div>
                        <span className="field__hint">{"Used to match the guest’s language when that allocation rule is on"}</span>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="hks-p02-e2007-insp">
                          <input id="hks-p02-e2007-insp" type="checkbox" role="switch" name="inspection_right" disabled={true} />
                          <span className="sw__track" />
                          {"Inspection right"}
                        </label>
                        <span className="field__hint">{"Only for supervisor roles (floor supervisor, assistant and executive housekeeper)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2007-max">{"Max credits override"}</label>
                        <input className="field__input num" id="hks-p02-e2007-max" type="number" name="max_credits" min="1" max="30" placeholder="16 (hotel default)" defaultValue={""} />
                        <span className="field__hint">{"1–30. A personal limit, for example 10 for a trainee. Empty = the hotel limit from Allocation rules."}</span>
                      </div>
                      <div className="field field--wide">
                        <span className="field__label">{"Mobile login"}</span>
                        <div className="hks-login">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                          {" "}
                          <span className="fd-muted">{"Hotel phone: Phone 07 · last sync today 09:10"}</span>
                        </div>
                        <span className="field__hint">{"“Create login” opens the user in Super Admin user management. Attendants need a login to use the phone app."}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p02-e2007-ag">
                          <input id="hks-p02-e2007-ag" type="checkbox" role="switch" name="agency" />
                          <span className="sw__track" />
                          {"Agency staff"}
                        </label>
                        <span className="field__hint">{"Outsourced staff: give the agency name and the contract end date"}</span>
                      </div>
                      <div className="field hks-agency">
                        <label className="field__label" htmlFor="hks-p02-e2007-agn">{"Agency name"}</label>
                        <input className="field__input" id="hks-p02-e2007-agn" type="text" name="agency_name" maxLength="60" defaultValue={""} />
                      </div>
                      <div className="field hks-agency" data-fw="s">
                        <label className="field__label" htmlFor="hks-p02-e2007-agd">{"Contract end date"}</label>
                        <input className="field__input num" id="hks-p02-e2007-agd" type="date" name="agency_end" defaultValue={""} />
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
              <div className="modal modal--full" id="hks-p02-e2008" data-code="HKS-P02" role="dialog" aria-modal="true" aria-labelledby="hks-p02-e2008-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box hks-form" action="/housekeeping-setup/hks-04-housekeeping-staff-and-shifts/#saved-e2008" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="hks-p02-e2008-t">{"Housekeeping profile: Anitha P"}</h2>
                      <p className="modal__desc">{"Role, skill, languages, home section and shift of one staff member. The name and employee number come from HR and cannot be changed here."}</p>
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
                        <span className="field__label">{"Staff"}</span>
                        <div className="hks-who hks-who--big">
                          <span className="avatar" style={{"--av-h": "349"}} aria-hidden="true">{"AP"}</span>
                          <span>
                            <strong>{"Anitha P"}</strong>
                            <span className="fd-sub">{"EMP-2008 · Housekeeping · from HR & Payroll"}</span>
                          </span>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="hks-p02-e2008-role">
                          {"HK role "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2008-role" name="role" required={true} defaultValue={"Room attendant"}>
                            <option value="Room attendant">{"Room attendant"}</option>
                            <option value="Senior attendant">{"Senior attendant"}</option>
                            <option value="PA attendant">{"PA attendant"}</option>
                            <option value="Houseman">{"Houseman"}</option>
                            <option value="Turndown attendant">{"Turndown attendant"}</option>
                            <option value="Linen room attendant">{"Linen room attendant"}</option>
                            <option value="Floor supervisor">{"Floor supervisor"}</option>
                            <option value="Assistant housekeeper">{"Assistant housekeeper"}</option>
                            <option value="Executive housekeeper">{"Executive housekeeper"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Roles used in housekeeping"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2008-skill">
                          {"Skill level "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2008-skill" name="skill" required={true} defaultValue={"2"}>
                            <option value="1">{"Level 1"}</option>
                            <option value="2">{"Level 2"}</option>
                            <option value="3">{"Level 3 – VIP and suite rooms"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Level 3 may clean VIP and suite rooms when that allocation rule is on"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="hks-p02-e2008-sec">
                          {"Home section "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2008-sec" name="home_section" required={true} defaultValue={"S1"}>
                            <option value="">{"No home section"}</option>
                            <option value="S1">{"S1"}</option>
                            <option value="S2">{"S2"}</option>
                            <option value="S3">{"S3"}</option>
                            <option value="S4">{"S4"}</option>
                            <option value="S5">{"S5"}</option>
                            <option value="S6">{"S6"}</option>
                            <option value="S7">{"S7"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Required for attendants and floor supervisors. Sections are set in HKS-03."}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2008-shift">
                          {"Default shift "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2008-shift" name="default_shift" required={true} defaultValue={"M"}>
                            <option value="M">{"M · Morning 07:00–15:30"}</option>
                            <option value="E">{"E · Evening 15:00–23:30"}</option>
                            <option value="N">{"N · Night 23:00–07:30"}</option>
                            <option value="G">{"G · General 09:00–18:00"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Shift codes from the Shift codes tab; the duty roster starts from it"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Languages"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="English" defaultChecked={true} />
                            <span className="check__box" />
                            {"English"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Malayalam" defaultChecked={true} />
                            <span className="check__box" />
                            {"Malayalam"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Hindi" />
                            <span className="check__box" />
                            {"Hindi"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Tamil" />
                            <span className="check__box" />
                            {"Tamil"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Arabic" />
                            <span className="check__box" />
                            {"Arabic"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Other" />
                            <span className="check__box" />
                            {"Other"}
                          </label>
                        </div>
                        <span className="field__hint">{"Used to match the guest’s language when that allocation rule is on"}</span>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="hks-p02-e2008-insp">
                          <input id="hks-p02-e2008-insp" type="checkbox" role="switch" name="inspection_right" disabled={true} />
                          <span className="sw__track" />
                          {"Inspection right"}
                        </label>
                        <span className="field__hint">{"Only for supervisor roles (floor supervisor, assistant and executive housekeeper)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2008-max">{"Max credits override"}</label>
                        <input className="field__input num" id="hks-p02-e2008-max" type="number" name="max_credits" min="1" max="30" placeholder="16 (hotel default)" defaultValue={""} />
                        <span className="field__hint">{"1–30. A personal limit, for example 10 for a trainee. Empty = the hotel limit from Allocation rules."}</span>
                      </div>
                      <div className="field field--wide">
                        <span className="field__label">{"Mobile login"}</span>
                        <div className="hks-login">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                          {" "}
                          <span className="fd-muted">{"Hotel phone: Phone 08 · last sync today 09:10"}</span>
                        </div>
                        <span className="field__hint">{"“Create login” opens the user in Super Admin user management. Attendants need a login to use the phone app."}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p02-e2008-ag">
                          <input id="hks-p02-e2008-ag" type="checkbox" role="switch" name="agency" />
                          <span className="sw__track" />
                          {"Agency staff"}
                        </label>
                        <span className="field__hint">{"Outsourced staff: give the agency name and the contract end date"}</span>
                      </div>
                      <div className="field hks-agency">
                        <label className="field__label" htmlFor="hks-p02-e2008-agn">{"Agency name"}</label>
                        <input className="field__input" id="hks-p02-e2008-agn" type="text" name="agency_name" maxLength="60" defaultValue={""} />
                      </div>
                      <div className="field hks-agency" data-fw="s">
                        <label className="field__label" htmlFor="hks-p02-e2008-agd">{"Contract end date"}</label>
                        <input className="field__input num" id="hks-p02-e2008-agd" type="date" name="agency_end" defaultValue={""} />
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
              <div className="modal modal--full" id="hks-p02-e2009" data-code="HKS-P02" role="dialog" aria-modal="true" aria-labelledby="hks-p02-e2009-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box hks-form" action="/housekeeping-setup/hks-04-housekeeping-staff-and-shifts/#saved-e2009" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="hks-p02-e2009-t">{"Housekeeping profile: Remya K"}</h2>
                      <p className="modal__desc">{"Role, skill, languages, home section and shift of one staff member. The name and employee number come from HR and cannot be changed here."}</p>
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
                        <span className="field__label">{"Staff"}</span>
                        <div className="hks-who hks-who--big">
                          <span className="avatar" style={{"--av-h": "257"}} aria-hidden="true">{"RK"}</span>
                          <span>
                            <strong>{"Remya K"}</strong>
                            <span className="fd-sub">{"EMP-2009 · Housekeeping · from HR & Payroll"}</span>
                          </span>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="hks-p02-e2009-role">
                          {"HK role "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2009-role" name="role" required={true} defaultValue={"Room attendant"}>
                            <option value="Room attendant">{"Room attendant"}</option>
                            <option value="Senior attendant">{"Senior attendant"}</option>
                            <option value="PA attendant">{"PA attendant"}</option>
                            <option value="Houseman">{"Houseman"}</option>
                            <option value="Turndown attendant">{"Turndown attendant"}</option>
                            <option value="Linen room attendant">{"Linen room attendant"}</option>
                            <option value="Floor supervisor">{"Floor supervisor"}</option>
                            <option value="Assistant housekeeper">{"Assistant housekeeper"}</option>
                            <option value="Executive housekeeper">{"Executive housekeeper"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Roles used in housekeeping"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2009-skill">
                          {"Skill level "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2009-skill" name="skill" required={true} defaultValue={"2"}>
                            <option value="1">{"Level 1"}</option>
                            <option value="2">{"Level 2"}</option>
                            <option value="3">{"Level 3 – VIP and suite rooms"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Level 3 may clean VIP and suite rooms when that allocation rule is on"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="hks-p02-e2009-sec">
                          {"Home section "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2009-sec" name="home_section" required={true} defaultValue={"S1"}>
                            <option value="">{"No home section"}</option>
                            <option value="S1">{"S1"}</option>
                            <option value="S2">{"S2"}</option>
                            <option value="S3">{"S3"}</option>
                            <option value="S4">{"S4"}</option>
                            <option value="S5">{"S5"}</option>
                            <option value="S6">{"S6"}</option>
                            <option value="S7">{"S7"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Required for attendants and floor supervisors. Sections are set in HKS-03."}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2009-shift">
                          {"Default shift "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2009-shift" name="default_shift" required={true} defaultValue={"M"}>
                            <option value="M">{"M · Morning 07:00–15:30"}</option>
                            <option value="E">{"E · Evening 15:00–23:30"}</option>
                            <option value="N">{"N · Night 23:00–07:30"}</option>
                            <option value="G">{"G · General 09:00–18:00"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Shift codes from the Shift codes tab; the duty roster starts from it"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Languages"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="English" defaultChecked={true} />
                            <span className="check__box" />
                            {"English"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Malayalam" defaultChecked={true} />
                            <span className="check__box" />
                            {"Malayalam"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Hindi" defaultChecked={true} />
                            <span className="check__box" />
                            {"Hindi"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Tamil" />
                            <span className="check__box" />
                            {"Tamil"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Arabic" />
                            <span className="check__box" />
                            {"Arabic"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Other" />
                            <span className="check__box" />
                            {"Other"}
                          </label>
                        </div>
                        <span className="field__hint">{"Used to match the guest’s language when that allocation rule is on"}</span>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="hks-p02-e2009-insp">
                          <input id="hks-p02-e2009-insp" type="checkbox" role="switch" name="inspection_right" disabled={true} />
                          <span className="sw__track" />
                          {"Inspection right"}
                        </label>
                        <span className="field__hint">{"Only for supervisor roles (floor supervisor, assistant and executive housekeeper)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2009-max">{"Max credits override"}</label>
                        <input className="field__input num" id="hks-p02-e2009-max" type="number" name="max_credits" min="1" max="30" placeholder="16 (hotel default)" defaultValue={""} />
                        <span className="field__hint">{"1–30. A personal limit, for example 10 for a trainee. Empty = the hotel limit from Allocation rules."}</span>
                      </div>
                      <div className="field field--wide">
                        <span className="field__label">{"Mobile login"}</span>
                        <div className="hks-login">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                          {" "}
                          <span className="fd-muted">{"Hotel phone: Phone 09 · last sync today 09:10"}</span>
                        </div>
                        <span className="field__hint">{"“Create login” opens the user in Super Admin user management. Attendants need a login to use the phone app."}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p02-e2009-ag">
                          <input id="hks-p02-e2009-ag" type="checkbox" role="switch" name="agency" />
                          <span className="sw__track" />
                          {"Agency staff"}
                        </label>
                        <span className="field__hint">{"Outsourced staff: give the agency name and the contract end date"}</span>
                      </div>
                      <div className="field hks-agency">
                        <label className="field__label" htmlFor="hks-p02-e2009-agn">{"Agency name"}</label>
                        <input className="field__input" id="hks-p02-e2009-agn" type="text" name="agency_name" maxLength="60" defaultValue={""} />
                      </div>
                      <div className="field hks-agency" data-fw="s">
                        <label className="field__label" htmlFor="hks-p02-e2009-agd">{"Contract end date"}</label>
                        <input className="field__input num" id="hks-p02-e2009-agd" type="date" name="agency_end" defaultValue={""} />
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
              <div className="modal modal--full" id="hks-p02-e2010" data-code="HKS-P02" role="dialog" aria-modal="true" aria-labelledby="hks-p02-e2010-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box hks-form" action="/housekeeping-setup/hks-04-housekeeping-staff-and-shifts/#saved-e2010" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="hks-p02-e2010-t">{"Housekeeping profile: Divya M"}</h2>
                      <p className="modal__desc">{"Role, skill, languages, home section and shift of one staff member. The name and employee number come from HR and cannot be changed here."}</p>
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
                        <span className="field__label">{"Staff"}</span>
                        <div className="hks-who hks-who--big">
                          <span className="avatar" style={{"--av-h": "258"}} aria-hidden="true">{"DM"}</span>
                          <span>
                            <strong>{"Divya M"}</strong>
                            <span className="fd-sub">{"EMP-2010 · Housekeeping · from HR & Payroll"}</span>
                          </span>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="hks-p02-e2010-role">
                          {"HK role "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2010-role" name="role" required={true} defaultValue={"Room attendant"}>
                            <option value="Room attendant">{"Room attendant"}</option>
                            <option value="Senior attendant">{"Senior attendant"}</option>
                            <option value="PA attendant">{"PA attendant"}</option>
                            <option value="Houseman">{"Houseman"}</option>
                            <option value="Turndown attendant">{"Turndown attendant"}</option>
                            <option value="Linen room attendant">{"Linen room attendant"}</option>
                            <option value="Floor supervisor">{"Floor supervisor"}</option>
                            <option value="Assistant housekeeper">{"Assistant housekeeper"}</option>
                            <option value="Executive housekeeper">{"Executive housekeeper"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Roles used in housekeeping"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2010-skill">
                          {"Skill level "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2010-skill" name="skill" required={true} defaultValue={"2"}>
                            <option value="1">{"Level 1"}</option>
                            <option value="2">{"Level 2"}</option>
                            <option value="3">{"Level 3 – VIP and suite rooms"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Level 3 may clean VIP and suite rooms when that allocation rule is on"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="hks-p02-e2010-sec">
                          {"Home section "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2010-sec" name="home_section" required={true} defaultValue={"S2"}>
                            <option value="">{"No home section"}</option>
                            <option value="S1">{"S1"}</option>
                            <option value="S2">{"S2"}</option>
                            <option value="S3">{"S3"}</option>
                            <option value="S4">{"S4"}</option>
                            <option value="S5">{"S5"}</option>
                            <option value="S6">{"S6"}</option>
                            <option value="S7">{"S7"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Required for attendants and floor supervisors. Sections are set in HKS-03."}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2010-shift">
                          {"Default shift "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2010-shift" name="default_shift" required={true} defaultValue={"M"}>
                            <option value="M">{"M · Morning 07:00–15:30"}</option>
                            <option value="E">{"E · Evening 15:00–23:30"}</option>
                            <option value="N">{"N · Night 23:00–07:30"}</option>
                            <option value="G">{"G · General 09:00–18:00"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Shift codes from the Shift codes tab; the duty roster starts from it"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Languages"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="English" defaultChecked={true} />
                            <span className="check__box" />
                            {"English"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Malayalam" defaultChecked={true} />
                            <span className="check__box" />
                            {"Malayalam"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Hindi" />
                            <span className="check__box" />
                            {"Hindi"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Tamil" />
                            <span className="check__box" />
                            {"Tamil"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Arabic" />
                            <span className="check__box" />
                            {"Arabic"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Other" />
                            <span className="check__box" />
                            {"Other"}
                          </label>
                        </div>
                        <span className="field__hint">{"Used to match the guest’s language when that allocation rule is on"}</span>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="hks-p02-e2010-insp">
                          <input id="hks-p02-e2010-insp" type="checkbox" role="switch" name="inspection_right" disabled={true} />
                          <span className="sw__track" />
                          {"Inspection right"}
                        </label>
                        <span className="field__hint">{"Only for supervisor roles (floor supervisor, assistant and executive housekeeper)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2010-max">{"Max credits override"}</label>
                        <input className="field__input num" id="hks-p02-e2010-max" type="number" name="max_credits" min="1" max="30" placeholder="16 (hotel default)" defaultValue={""} />
                        <span className="field__hint">{"1–30. A personal limit, for example 10 for a trainee. Empty = the hotel limit from Allocation rules."}</span>
                      </div>
                      <div className="field field--wide">
                        <span className="field__label">{"Mobile login"}</span>
                        <div className="hks-login">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                          {" "}
                          <span className="fd-muted">{"Hotel phone: Phone 10 · last sync today 09:10"}</span>
                        </div>
                        <span className="field__hint">{"“Create login” opens the user in Super Admin user management. Attendants need a login to use the phone app."}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p02-e2010-ag">
                          <input id="hks-p02-e2010-ag" type="checkbox" role="switch" name="agency" />
                          <span className="sw__track" />
                          {"Agency staff"}
                        </label>
                        <span className="field__hint">{"Outsourced staff: give the agency name and the contract end date"}</span>
                      </div>
                      <div className="field hks-agency">
                        <label className="field__label" htmlFor="hks-p02-e2010-agn">{"Agency name"}</label>
                        <input className="field__input" id="hks-p02-e2010-agn" type="text" name="agency_name" maxLength="60" defaultValue={""} />
                      </div>
                      <div className="field hks-agency" data-fw="s">
                        <label className="field__label" htmlFor="hks-p02-e2010-agd">{"Contract end date"}</label>
                        <input className="field__input num" id="hks-p02-e2010-agd" type="date" name="agency_end" defaultValue={""} />
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
              <div className="modal modal--full" id="hks-p02-e2011" data-code="HKS-P02" role="dialog" aria-modal="true" aria-labelledby="hks-p02-e2011-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box hks-form" action="/housekeeping-setup/hks-04-housekeeping-staff-and-shifts/#saved-e2011" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="hks-p02-e2011-t">{"Housekeeping profile: Shiny Joseph"}</h2>
                      <p className="modal__desc">{"Role, skill, languages, home section and shift of one staff member. The name and employee number come from HR and cannot be changed here."}</p>
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
                        <span className="field__label">{"Staff"}</span>
                        <div className="hks-who hks-who--big">
                          <span className="avatar" style={{"--av-h": "92"}} aria-hidden="true">{"SJ"}</span>
                          <span>
                            <strong>{"Shiny Joseph"}</strong>
                            <span className="fd-sub">{"EMP-2011 · Housekeeping · from HR & Payroll"}</span>
                          </span>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="hks-p02-e2011-role">
                          {"HK role "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2011-role" name="role" required={true} defaultValue={"Room attendant"}>
                            <option value="Room attendant">{"Room attendant"}</option>
                            <option value="Senior attendant">{"Senior attendant"}</option>
                            <option value="PA attendant">{"PA attendant"}</option>
                            <option value="Houseman">{"Houseman"}</option>
                            <option value="Turndown attendant">{"Turndown attendant"}</option>
                            <option value="Linen room attendant">{"Linen room attendant"}</option>
                            <option value="Floor supervisor">{"Floor supervisor"}</option>
                            <option value="Assistant housekeeper">{"Assistant housekeeper"}</option>
                            <option value="Executive housekeeper">{"Executive housekeeper"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Roles used in housekeeping"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2011-skill">
                          {"Skill level "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2011-skill" name="skill" required={true} defaultValue={"2"}>
                            <option value="1">{"Level 1"}</option>
                            <option value="2">{"Level 2"}</option>
                            <option value="3">{"Level 3 – VIP and suite rooms"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Level 3 may clean VIP and suite rooms when that allocation rule is on"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="hks-p02-e2011-sec">
                          {"Home section "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2011-sec" name="home_section" required={true} defaultValue={"S4"}>
                            <option value="">{"No home section"}</option>
                            <option value="S1">{"S1"}</option>
                            <option value="S2">{"S2"}</option>
                            <option value="S3">{"S3"}</option>
                            <option value="S4">{"S4"}</option>
                            <option value="S5">{"S5"}</option>
                            <option value="S6">{"S6"}</option>
                            <option value="S7">{"S7"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Required for attendants and floor supervisors. Sections are set in HKS-03."}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2011-shift">
                          {"Default shift "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2011-shift" name="default_shift" required={true} defaultValue={"M"}>
                            <option value="M">{"M · Morning 07:00–15:30"}</option>
                            <option value="E">{"E · Evening 15:00–23:30"}</option>
                            <option value="N">{"N · Night 23:00–07:30"}</option>
                            <option value="G">{"G · General 09:00–18:00"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Shift codes from the Shift codes tab; the duty roster starts from it"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Languages"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="English" defaultChecked={true} />
                            <span className="check__box" />
                            {"English"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Malayalam" defaultChecked={true} />
                            <span className="check__box" />
                            {"Malayalam"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Hindi" />
                            <span className="check__box" />
                            {"Hindi"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Tamil" />
                            <span className="check__box" />
                            {"Tamil"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Arabic" />
                            <span className="check__box" />
                            {"Arabic"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Other" />
                            <span className="check__box" />
                            {"Other"}
                          </label>
                        </div>
                        <span className="field__hint">{"Used to match the guest’s language when that allocation rule is on"}</span>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="hks-p02-e2011-insp">
                          <input id="hks-p02-e2011-insp" type="checkbox" role="switch" name="inspection_right" disabled={true} />
                          <span className="sw__track" />
                          {"Inspection right"}
                        </label>
                        <span className="field__hint">{"Only for supervisor roles (floor supervisor, assistant and executive housekeeper)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2011-max">{"Max credits override"}</label>
                        <input className="field__input num" id="hks-p02-e2011-max" type="number" name="max_credits" min="1" max="30" placeholder="16 (hotel default)" defaultValue={""} />
                        <span className="field__hint">{"1–30. A personal limit, for example 10 for a trainee. Empty = the hotel limit from Allocation rules."}</span>
                      </div>
                      <div className="field field--wide">
                        <span className="field__label">{"Mobile login"}</span>
                        <div className="hks-login">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                          {" "}
                          <span className="fd-muted">{"Hotel phone: Phone 11 · last sync today 09:10"}</span>
                        </div>
                        <span className="field__hint">{"“Create login” opens the user in Super Admin user management. Attendants need a login to use the phone app."}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p02-e2011-ag">
                          <input id="hks-p02-e2011-ag" type="checkbox" role="switch" name="agency" />
                          <span className="sw__track" />
                          {"Agency staff"}
                        </label>
                        <span className="field__hint">{"Outsourced staff: give the agency name and the contract end date"}</span>
                      </div>
                      <div className="field hks-agency">
                        <label className="field__label" htmlFor="hks-p02-e2011-agn">{"Agency name"}</label>
                        <input className="field__input" id="hks-p02-e2011-agn" type="text" name="agency_name" maxLength="60" defaultValue={""} />
                      </div>
                      <div className="field hks-agency" data-fw="s">
                        <label className="field__label" htmlFor="hks-p02-e2011-agd">{"Contract end date"}</label>
                        <input className="field__input num" id="hks-p02-e2011-agd" type="date" name="agency_end" defaultValue={""} />
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
              <div className="modal modal--full" id="hks-p02-e2012" data-code="HKS-P02" role="dialog" aria-modal="true" aria-labelledby="hks-p02-e2012-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box hks-form" action="/housekeeping-setup/hks-04-housekeeping-staff-and-shifts/#saved-e2012" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="hks-p02-e2012-t">{"Housekeeping profile: Jincy Mathew"}</h2>
                      <p className="modal__desc">{"Role, skill, languages, home section and shift of one staff member. The name and employee number come from HR and cannot be changed here."}</p>
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
                        <span className="field__label">{"Staff"}</span>
                        <div className="hks-who hks-who--big">
                          <span className="avatar" style={{"--av-h": "75"}} aria-hidden="true">{"JM"}</span>
                          <span>
                            <strong>{"Jincy Mathew"}</strong>
                            <span className="fd-sub">{"EMP-2012 · Housekeeping · from HR & Payroll"}</span>
                          </span>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="hks-p02-e2012-role">
                          {"HK role "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2012-role" name="role" required={true} defaultValue={"Room attendant"}>
                            <option value="Room attendant">{"Room attendant"}</option>
                            <option value="Senior attendant">{"Senior attendant"}</option>
                            <option value="PA attendant">{"PA attendant"}</option>
                            <option value="Houseman">{"Houseman"}</option>
                            <option value="Turndown attendant">{"Turndown attendant"}</option>
                            <option value="Linen room attendant">{"Linen room attendant"}</option>
                            <option value="Floor supervisor">{"Floor supervisor"}</option>
                            <option value="Assistant housekeeper">{"Assistant housekeeper"}</option>
                            <option value="Executive housekeeper">{"Executive housekeeper"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Roles used in housekeeping"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2012-skill">
                          {"Skill level "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2012-skill" name="skill" required={true} defaultValue={"1"}>
                            <option value="1">{"Level 1"}</option>
                            <option value="2">{"Level 2"}</option>
                            <option value="3">{"Level 3 – VIP and suite rooms"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Level 3 may clean VIP and suite rooms when that allocation rule is on"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="hks-p02-e2012-sec">
                          {"Home section "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2012-sec" name="home_section" required={true} defaultValue={"S4"}>
                            <option value="">{"No home section"}</option>
                            <option value="S1">{"S1"}</option>
                            <option value="S2">{"S2"}</option>
                            <option value="S3">{"S3"}</option>
                            <option value="S4">{"S4"}</option>
                            <option value="S5">{"S5"}</option>
                            <option value="S6">{"S6"}</option>
                            <option value="S7">{"S7"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Required for attendants and floor supervisors. Sections are set in HKS-03."}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2012-shift">
                          {"Default shift "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2012-shift" name="default_shift" required={true} defaultValue={"M"}>
                            <option value="M">{"M · Morning 07:00–15:30"}</option>
                            <option value="E">{"E · Evening 15:00–23:30"}</option>
                            <option value="N">{"N · Night 23:00–07:30"}</option>
                            <option value="G">{"G · General 09:00–18:00"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Shift codes from the Shift codes tab; the duty roster starts from it"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Languages"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="English" />
                            <span className="check__box" />
                            {"English"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Malayalam" defaultChecked={true} />
                            <span className="check__box" />
                            {"Malayalam"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Hindi" />
                            <span className="check__box" />
                            {"Hindi"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Tamil" />
                            <span className="check__box" />
                            {"Tamil"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Arabic" />
                            <span className="check__box" />
                            {"Arabic"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Other" />
                            <span className="check__box" />
                            {"Other"}
                          </label>
                        </div>
                        <span className="field__hint">{"Used to match the guest’s language when that allocation rule is on"}</span>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="hks-p02-e2012-insp">
                          <input id="hks-p02-e2012-insp" type="checkbox" role="switch" name="inspection_right" disabled={true} />
                          <span className="sw__track" />
                          {"Inspection right"}
                        </label>
                        <span className="field__hint">{"Only for supervisor roles (floor supervisor, assistant and executive housekeeper)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2012-max">{"Max credits override"}</label>
                        <input className="field__input num" id="hks-p02-e2012-max" type="number" name="max_credits" min="1" max="30" placeholder="16 (hotel default)" defaultValue={""} />
                        <span className="field__hint">{"1–30. A personal limit, for example 10 for a trainee. Empty = the hotel limit from Allocation rules."}</span>
                      </div>
                      <div className="field field--wide">
                        <span className="field__label">{"Mobile login"}</span>
                        <div className="hks-login">
                          <span className="pill pill--tentative">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#alert" />
                            </svg>
                            {"Not set"}
                          </span>
                          {" "}
                          <Link className="btn" data-leads-to="SA-USERS" to={"/user-and-access-management/lg-03-user-form"}>
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#user-plus" />
                            </svg>
                            {"Create login"}
                          </Link>
                        </div>
                        <span className="field__hint">{"“Create login” opens the user in Super Admin user management. Attendants need a login to use the phone app."}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p02-e2012-ag">
                          <input id="hks-p02-e2012-ag" type="checkbox" role="switch" name="agency" />
                          <span className="sw__track" />
                          {"Agency staff"}
                        </label>
                        <span className="field__hint">{"Outsourced staff: give the agency name and the contract end date"}</span>
                      </div>
                      <div className="field hks-agency">
                        <label className="field__label" htmlFor="hks-p02-e2012-agn">{"Agency name"}</label>
                        <input className="field__input" id="hks-p02-e2012-agn" type="text" name="agency_name" maxLength="60" defaultValue={""} />
                      </div>
                      <div className="field hks-agency" data-fw="s">
                        <label className="field__label" htmlFor="hks-p02-e2012-agd">{"Contract end date"}</label>
                        <input className="field__input num" id="hks-p02-e2012-agd" type="date" name="agency_end" defaultValue={""} />
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
              <div className="modal modal--full" id="hks-p02-e2013" data-code="HKS-P02" role="dialog" aria-modal="true" aria-labelledby="hks-p02-e2013-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box hks-form" action="/housekeeping-setup/hks-04-housekeeping-staff-and-shifts/#saved-e2013" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="hks-p02-e2013-t">{"Housekeeping profile: Rekha S"}</h2>
                      <p className="modal__desc">{"Role, skill, languages, home section and shift of one staff member. The name and employee number come from HR and cannot be changed here."}</p>
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
                        <span className="field__label">{"Staff"}</span>
                        <div className="hks-who hks-who--big">
                          <span className="avatar" style={{"--av-h": "246"}} aria-hidden="true">{"RS"}</span>
                          <span>
                            <strong>{"Rekha S"}</strong>
                            <span className="fd-sub">{"EMP-2013 · Housekeeping · from HR & Payroll"}</span>
                          </span>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="hks-p02-e2013-role">
                          {"HK role "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2013-role" name="role" required={true} defaultValue={"Room attendant"}>
                            <option value="Room attendant">{"Room attendant"}</option>
                            <option value="Senior attendant">{"Senior attendant"}</option>
                            <option value="PA attendant">{"PA attendant"}</option>
                            <option value="Houseman">{"Houseman"}</option>
                            <option value="Turndown attendant">{"Turndown attendant"}</option>
                            <option value="Linen room attendant">{"Linen room attendant"}</option>
                            <option value="Floor supervisor">{"Floor supervisor"}</option>
                            <option value="Assistant housekeeper">{"Assistant housekeeper"}</option>
                            <option value="Executive housekeeper">{"Executive housekeeper"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Roles used in housekeeping"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2013-skill">
                          {"Skill level "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2013-skill" name="skill" required={true} defaultValue={"2"}>
                            <option value="1">{"Level 1"}</option>
                            <option value="2">{"Level 2"}</option>
                            <option value="3">{"Level 3 – VIP and suite rooms"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Level 3 may clean VIP and suite rooms when that allocation rule is on"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="hks-p02-e2013-sec">
                          {"Home section "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2013-sec" name="home_section" required={true} defaultValue={"S5"}>
                            <option value="">{"No home section"}</option>
                            <option value="S1">{"S1"}</option>
                            <option value="S2">{"S2"}</option>
                            <option value="S3">{"S3"}</option>
                            <option value="S4">{"S4"}</option>
                            <option value="S5">{"S5"}</option>
                            <option value="S6">{"S6"}</option>
                            <option value="S7">{"S7"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Required for attendants and floor supervisors. Sections are set in HKS-03."}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2013-shift">
                          {"Default shift "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2013-shift" name="default_shift" required={true} defaultValue={"M"}>
                            <option value="M">{"M · Morning 07:00–15:30"}</option>
                            <option value="E">{"E · Evening 15:00–23:30"}</option>
                            <option value="N">{"N · Night 23:00–07:30"}</option>
                            <option value="G">{"G · General 09:00–18:00"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Shift codes from the Shift codes tab; the duty roster starts from it"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Languages"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="English" />
                            <span className="check__box" />
                            {"English"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Malayalam" defaultChecked={true} />
                            <span className="check__box" />
                            {"Malayalam"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Hindi" />
                            <span className="check__box" />
                            {"Hindi"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Tamil" defaultChecked={true} />
                            <span className="check__box" />
                            {"Tamil"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Arabic" />
                            <span className="check__box" />
                            {"Arabic"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Other" />
                            <span className="check__box" />
                            {"Other"}
                          </label>
                        </div>
                        <span className="field__hint">{"Used to match the guest’s language when that allocation rule is on"}</span>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="hks-p02-e2013-insp">
                          <input id="hks-p02-e2013-insp" type="checkbox" role="switch" name="inspection_right" disabled={true} />
                          <span className="sw__track" />
                          {"Inspection right"}
                        </label>
                        <span className="field__hint">{"Only for supervisor roles (floor supervisor, assistant and executive housekeeper)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2013-max">{"Max credits override"}</label>
                        <input className="field__input num" id="hks-p02-e2013-max" type="number" name="max_credits" min="1" max="30" placeholder="16 (hotel default)" defaultValue={""} />
                        <span className="field__hint">{"1–30. A personal limit, for example 10 for a trainee. Empty = the hotel limit from Allocation rules."}</span>
                      </div>
                      <div className="field field--wide">
                        <span className="field__label">{"Mobile login"}</span>
                        <div className="hks-login">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                          {" "}
                          <span className="fd-muted">{"Hotel phone: Phone 12 · last sync today 09:10"}</span>
                        </div>
                        <span className="field__hint">{"“Create login” opens the user in Super Admin user management. Attendants need a login to use the phone app."}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p02-e2013-ag">
                          <input id="hks-p02-e2013-ag" type="checkbox" role="switch" name="agency" />
                          <span className="sw__track" />
                          {"Agency staff"}
                        </label>
                        <span className="field__hint">{"Outsourced staff: give the agency name and the contract end date"}</span>
                      </div>
                      <div className="field hks-agency">
                        <label className="field__label" htmlFor="hks-p02-e2013-agn">{"Agency name"}</label>
                        <input className="field__input" id="hks-p02-e2013-agn" type="text" name="agency_name" maxLength="60" defaultValue={""} />
                      </div>
                      <div className="field hks-agency" data-fw="s">
                        <label className="field__label" htmlFor="hks-p02-e2013-agd">{"Contract end date"}</label>
                        <input className="field__input num" id="hks-p02-e2013-agd" type="date" name="agency_end" defaultValue={""} />
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
              <div className="modal modal--full" id="hks-p02-e2014" data-code="HKS-P02" role="dialog" aria-modal="true" aria-labelledby="hks-p02-e2014-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box hks-form" action="/housekeeping-setup/hks-04-housekeeping-staff-and-shifts/#saved-e2014" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="hks-p02-e2014-t">{"Housekeeping profile: Lissy George"}</h2>
                      <p className="modal__desc">{"Role, skill, languages, home section and shift of one staff member. The name and employee number come from HR and cannot be changed here."}</p>
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
                        <span className="field__label">{"Staff"}</span>
                        <div className="hks-who hks-who--big">
                          <span className="avatar" style={{"--av-h": "85"}} aria-hidden="true">{"LG"}</span>
                          <span>
                            <strong>{"Lissy George"}</strong>
                            <span className="fd-sub">{"EMP-2014 · Housekeeping · from HR & Payroll"}</span>
                          </span>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="hks-p02-e2014-role">
                          {"HK role "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2014-role" name="role" required={true} defaultValue={"Room attendant"}>
                            <option value="Room attendant">{"Room attendant"}</option>
                            <option value="Senior attendant">{"Senior attendant"}</option>
                            <option value="PA attendant">{"PA attendant"}</option>
                            <option value="Houseman">{"Houseman"}</option>
                            <option value="Turndown attendant">{"Turndown attendant"}</option>
                            <option value="Linen room attendant">{"Linen room attendant"}</option>
                            <option value="Floor supervisor">{"Floor supervisor"}</option>
                            <option value="Assistant housekeeper">{"Assistant housekeeper"}</option>
                            <option value="Executive housekeeper">{"Executive housekeeper"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Roles used in housekeeping"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2014-skill">
                          {"Skill level "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2014-skill" name="skill" required={true} defaultValue={"2"}>
                            <option value="1">{"Level 1"}</option>
                            <option value="2">{"Level 2"}</option>
                            <option value="3">{"Level 3 – VIP and suite rooms"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Level 3 may clean VIP and suite rooms when that allocation rule is on"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="hks-p02-e2014-sec">
                          {"Home section "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2014-sec" name="home_section" required={true} defaultValue={"S6"}>
                            <option value="">{"No home section"}</option>
                            <option value="S1">{"S1"}</option>
                            <option value="S2">{"S2"}</option>
                            <option value="S3">{"S3"}</option>
                            <option value="S4">{"S4"}</option>
                            <option value="S5">{"S5"}</option>
                            <option value="S6">{"S6"}</option>
                            <option value="S7">{"S7"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Required for attendants and floor supervisors. Sections are set in HKS-03."}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2014-shift">
                          {"Default shift "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2014-shift" name="default_shift" required={true} defaultValue={"M"}>
                            <option value="M">{"M · Morning 07:00–15:30"}</option>
                            <option value="E">{"E · Evening 15:00–23:30"}</option>
                            <option value="N">{"N · Night 23:00–07:30"}</option>
                            <option value="G">{"G · General 09:00–18:00"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Shift codes from the Shift codes tab; the duty roster starts from it"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Languages"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="English" defaultChecked={true} />
                            <span className="check__box" />
                            {"English"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Malayalam" defaultChecked={true} />
                            <span className="check__box" />
                            {"Malayalam"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Hindi" />
                            <span className="check__box" />
                            {"Hindi"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Tamil" />
                            <span className="check__box" />
                            {"Tamil"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Arabic" />
                            <span className="check__box" />
                            {"Arabic"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Other" />
                            <span className="check__box" />
                            {"Other"}
                          </label>
                        </div>
                        <span className="field__hint">{"Used to match the guest’s language when that allocation rule is on"}</span>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="hks-p02-e2014-insp">
                          <input id="hks-p02-e2014-insp" type="checkbox" role="switch" name="inspection_right" disabled={true} />
                          <span className="sw__track" />
                          {"Inspection right"}
                        </label>
                        <span className="field__hint">{"Only for supervisor roles (floor supervisor, assistant and executive housekeeper)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2014-max">{"Max credits override"}</label>
                        <input className="field__input num" id="hks-p02-e2014-max" type="number" name="max_credits" min="1" max="30" placeholder="16 (hotel default)" defaultValue={""} />
                        <span className="field__hint">{"1–30. A personal limit, for example 10 for a trainee. Empty = the hotel limit from Allocation rules."}</span>
                      </div>
                      <div className="field field--wide">
                        <span className="field__label">{"Mobile login"}</span>
                        <div className="hks-login">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                          {" "}
                          <span className="fd-muted">{"Hotel phone: Phone 13 · last sync today 09:10"}</span>
                        </div>
                        <span className="field__hint">{"“Create login” opens the user in Super Admin user management. Attendants need a login to use the phone app."}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p02-e2014-ag">
                          <input id="hks-p02-e2014-ag" type="checkbox" role="switch" name="agency" />
                          <span className="sw__track" />
                          {"Agency staff"}
                        </label>
                        <span className="field__hint">{"Outsourced staff: give the agency name and the contract end date"}</span>
                      </div>
                      <div className="field hks-agency">
                        <label className="field__label" htmlFor="hks-p02-e2014-agn">{"Agency name"}</label>
                        <input className="field__input" id="hks-p02-e2014-agn" type="text" name="agency_name" maxLength="60" defaultValue={""} />
                      </div>
                      <div className="field hks-agency" data-fw="s">
                        <label className="field__label" htmlFor="hks-p02-e2014-agd">{"Contract end date"}</label>
                        <input className="field__input num" id="hks-p02-e2014-agd" type="date" name="agency_end" defaultValue={""} />
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
              <div className="modal modal--full" id="hks-p02-e2015" data-code="HKS-P02" role="dialog" aria-modal="true" aria-labelledby="hks-p02-e2015-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box hks-form" action="/housekeeping-setup/hks-04-housekeeping-staff-and-shifts/#saved-e2015" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="hks-p02-e2015-t">{"Housekeeping profile: Sheeba T"}</h2>
                      <p className="modal__desc">{"Role, skill, languages, home section and shift of one staff member. The name and employee number come from HR and cannot be changed here."}</p>
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
                        <span className="field__label">{"Staff"}</span>
                        <div className="hks-who hks-who--big">
                          <span className="avatar" style={{"--av-h": "340"}} aria-hidden="true">{"ST"}</span>
                          <span>
                            <strong>{"Sheeba T"}</strong>
                            <span className="fd-sub">{"EMP-2015 · Housekeeping · from HR & Payroll"}</span>
                          </span>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="hks-p02-e2015-role">
                          {"HK role "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2015-role" name="role" required={true} defaultValue={"Room attendant"}>
                            <option value="Room attendant">{"Room attendant"}</option>
                            <option value="Senior attendant">{"Senior attendant"}</option>
                            <option value="PA attendant">{"PA attendant"}</option>
                            <option value="Houseman">{"Houseman"}</option>
                            <option value="Turndown attendant">{"Turndown attendant"}</option>
                            <option value="Linen room attendant">{"Linen room attendant"}</option>
                            <option value="Floor supervisor">{"Floor supervisor"}</option>
                            <option value="Assistant housekeeper">{"Assistant housekeeper"}</option>
                            <option value="Executive housekeeper">{"Executive housekeeper"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Roles used in housekeeping"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2015-skill">
                          {"Skill level "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2015-skill" name="skill" required={true} defaultValue={"1"}>
                            <option value="1">{"Level 1"}</option>
                            <option value="2">{"Level 2"}</option>
                            <option value="3">{"Level 3 – VIP and suite rooms"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Level 3 may clean VIP and suite rooms when that allocation rule is on"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="hks-p02-e2015-sec">
                          {"Home section "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2015-sec" name="home_section" required={true} defaultValue={"S6"}>
                            <option value="">{"No home section"}</option>
                            <option value="S1">{"S1"}</option>
                            <option value="S2">{"S2"}</option>
                            <option value="S3">{"S3"}</option>
                            <option value="S4">{"S4"}</option>
                            <option value="S5">{"S5"}</option>
                            <option value="S6">{"S6"}</option>
                            <option value="S7">{"S7"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Required for attendants and floor supervisors. Sections are set in HKS-03."}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2015-shift">
                          {"Default shift "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2015-shift" name="default_shift" required={true} defaultValue={"E"}>
                            <option value="M">{"M · Morning 07:00–15:30"}</option>
                            <option value="E">{"E · Evening 15:00–23:30"}</option>
                            <option value="N">{"N · Night 23:00–07:30"}</option>
                            <option value="G">{"G · General 09:00–18:00"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Shift codes from the Shift codes tab; the duty roster starts from it"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Languages"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="English" />
                            <span className="check__box" />
                            {"English"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Malayalam" defaultChecked={true} />
                            <span className="check__box" />
                            {"Malayalam"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Hindi" />
                            <span className="check__box" />
                            {"Hindi"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Tamil" />
                            <span className="check__box" />
                            {"Tamil"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Arabic" />
                            <span className="check__box" />
                            {"Arabic"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Other" />
                            <span className="check__box" />
                            {"Other"}
                          </label>
                        </div>
                        <span className="field__hint">{"Used to match the guest’s language when that allocation rule is on"}</span>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="hks-p02-e2015-insp">
                          <input id="hks-p02-e2015-insp" type="checkbox" role="switch" name="inspection_right" disabled={true} />
                          <span className="sw__track" />
                          {"Inspection right"}
                        </label>
                        <span className="field__hint">{"Only for supervisor roles (floor supervisor, assistant and executive housekeeper)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2015-max">{"Max credits override"}</label>
                        <input className="field__input num" id="hks-p02-e2015-max" type="number" name="max_credits" min="1" max="30" placeholder="16 (hotel default)" defaultValue={""} />
                        <span className="field__hint">{"1–30. A personal limit, for example 10 for a trainee. Empty = the hotel limit from Allocation rules."}</span>
                      </div>
                      <div className="field field--wide">
                        <span className="field__label">{"Mobile login"}</span>
                        <div className="hks-login">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                          {" "}
                          <span className="fd-muted">{"Hotel phone: Phone 14 · last sync today 09:10"}</span>
                        </div>
                        <span className="field__hint">{"“Create login” opens the user in Super Admin user management. Attendants need a login to use the phone app."}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p02-e2015-ag">
                          <input id="hks-p02-e2015-ag" type="checkbox" role="switch" name="agency" />
                          <span className="sw__track" />
                          {"Agency staff"}
                        </label>
                        <span className="field__hint">{"Outsourced staff: give the agency name and the contract end date"}</span>
                      </div>
                      <div className="field hks-agency">
                        <label className="field__label" htmlFor="hks-p02-e2015-agn">{"Agency name"}</label>
                        <input className="field__input" id="hks-p02-e2015-agn" type="text" name="agency_name" maxLength="60" defaultValue={""} />
                      </div>
                      <div className="field hks-agency" data-fw="s">
                        <label className="field__label" htmlFor="hks-p02-e2015-agd">{"Contract end date"}</label>
                        <input className="field__input num" id="hks-p02-e2015-agd" type="date" name="agency_end" defaultValue={""} />
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
              <div className="modal modal--full" id="hks-p02-e2016" data-code="HKS-P02" role="dialog" aria-modal="true" aria-labelledby="hks-p02-e2016-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box hks-form" action="/housekeeping-setup/hks-04-housekeeping-staff-and-shifts/#saved-e2016" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="hks-p02-e2016-t">{"Housekeeping profile: Rani V"}</h2>
                      <p className="modal__desc">{"Role, skill, languages, home section and shift of one staff member. The name and employee number come from HR and cannot be changed here."}</p>
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
                        <span className="field__label">{"Staff"}</span>
                        <div className="hks-who hks-who--big">
                          <span className="avatar" style={{"--av-h": "152"}} aria-hidden="true">{"RV"}</span>
                          <span>
                            <strong>{"Rani V"}</strong>
                            <span className="fd-sub">{"EMP-2016 · Housekeeping · from HR & Payroll"}</span>
                          </span>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="hks-p02-e2016-role">
                          {"HK role "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2016-role" name="role" required={true} defaultValue={"Room attendant"}>
                            <option value="Room attendant">{"Room attendant"}</option>
                            <option value="Senior attendant">{"Senior attendant"}</option>
                            <option value="PA attendant">{"PA attendant"}</option>
                            <option value="Houseman">{"Houseman"}</option>
                            <option value="Turndown attendant">{"Turndown attendant"}</option>
                            <option value="Linen room attendant">{"Linen room attendant"}</option>
                            <option value="Floor supervisor">{"Floor supervisor"}</option>
                            <option value="Assistant housekeeper">{"Assistant housekeeper"}</option>
                            <option value="Executive housekeeper">{"Executive housekeeper"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Roles used in housekeeping"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2016-skill">
                          {"Skill level "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2016-skill" name="skill" required={true} defaultValue={"1"}>
                            <option value="1">{"Level 1"}</option>
                            <option value="2">{"Level 2"}</option>
                            <option value="3">{"Level 3 – VIP and suite rooms"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Level 3 may clean VIP and suite rooms when that allocation rule is on"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="hks-p02-e2016-sec">
                          {"Home section "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2016-sec" name="home_section" required={true} defaultValue={""}>
                            <option value="">{"No home section"}</option>
                            <option value="S1">{"S1"}</option>
                            <option value="S2">{"S2"}</option>
                            <option value="S3">{"S3"}</option>
                            <option value="S4">{"S4"}</option>
                            <option value="S5">{"S5"}</option>
                            <option value="S6">{"S6"}</option>
                            <option value="S7">{"S7"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Required for attendants and floor supervisors. Sections are set in HKS-03."}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2016-shift">
                          {"Default shift "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2016-shift" name="default_shift" required={true} defaultValue={"M"}>
                            <option value="M">{"M · Morning 07:00–15:30"}</option>
                            <option value="E">{"E · Evening 15:00–23:30"}</option>
                            <option value="N">{"N · Night 23:00–07:30"}</option>
                            <option value="G">{"G · General 09:00–18:00"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Shift codes from the Shift codes tab; the duty roster starts from it"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Languages"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="English" defaultChecked={true} />
                            <span className="check__box" />
                            {"English"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Malayalam" defaultChecked={true} />
                            <span className="check__box" />
                            {"Malayalam"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Hindi" />
                            <span className="check__box" />
                            {"Hindi"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Tamil" />
                            <span className="check__box" />
                            {"Tamil"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Arabic" />
                            <span className="check__box" />
                            {"Arabic"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Other" />
                            <span className="check__box" />
                            {"Other"}
                          </label>
                        </div>
                        <span className="field__hint">{"Used to match the guest’s language when that allocation rule is on"}</span>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="hks-p02-e2016-insp">
                          <input id="hks-p02-e2016-insp" type="checkbox" role="switch" name="inspection_right" disabled={true} />
                          <span className="sw__track" />
                          {"Inspection right"}
                        </label>
                        <span className="field__hint">{"Only for supervisor roles (floor supervisor, assistant and executive housekeeper)"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="hks-p02-e2016-max">{"Max credits override"}</label>
                        <input className="field__input num" id="hks-p02-e2016-max" type="number" name="max_credits" min="1" max="30" placeholder="16 (hotel default)" defaultValue={"10"} />
                        <span className="field__hint">{"1–30. A personal limit, for example 10 for a trainee. Empty = the hotel limit from Allocation rules."}</span>
                      </div>
                      <div className="field field--wide">
                        <span className="field__label">{"Mobile login"}</span>
                        <div className="hks-login">
                          <span className="pill pill--tentative">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#alert" />
                            </svg>
                            {"Not set"}
                          </span>
                          {" "}
                          <Link className="btn" data-leads-to="SA-USERS" to={"/user-and-access-management/lg-03-user-form"}>
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#user-plus" />
                            </svg>
                            {"Create login"}
                          </Link>
                        </div>
                        <span className="field__hint">{"“Create login” opens the user in Super Admin user management. Attendants need a login to use the phone app."}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p02-e2016-ag">
                          <input id="hks-p02-e2016-ag" type="checkbox" role="switch" name="agency" />
                          <span className="sw__track" />
                          {"Agency staff"}
                        </label>
                        <span className="field__hint">{"Outsourced staff: give the agency name and the contract end date"}</span>
                      </div>
                      <div className="field hks-agency">
                        <label className="field__label" htmlFor="hks-p02-e2016-agn">{"Agency name"}</label>
                        <input className="field__input" id="hks-p02-e2016-agn" type="text" name="agency_name" maxLength="60" defaultValue={""} />
                      </div>
                      <div className="field hks-agency" data-fw="s">
                        <label className="field__label" htmlFor="hks-p02-e2016-agd">{"Contract end date"}</label>
                        <input className="field__input num" id="hks-p02-e2016-agd" type="date" name="agency_end" defaultValue={""} />
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
              <div className="modal modal--full" id="hks-p02-e2017" data-code="HKS-P02" role="dialog" aria-modal="true" aria-labelledby="hks-p02-e2017-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box hks-form" action="/housekeeping-setup/hks-04-housekeeping-staff-and-shifts/#saved-e2017" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="hks-p02-e2017-t">{"Housekeeping profile: Biju K"}</h2>
                      <p className="modal__desc">{"Role, skill, languages, home section and shift of one staff member. The name and employee number come from HR and cannot be changed here."}</p>
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
                        <span className="field__label">{"Staff"}</span>
                        <div className="hks-who hks-who--big">
                          <span className="avatar" style={{"--av-h": "141"}} aria-hidden="true">{"BK"}</span>
                          <span>
                            <strong>{"Biju K"}</strong>
                            <span className="fd-sub">{"EMP-2017 · Housekeeping · from HR & Payroll"}</span>
                          </span>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="hks-p02-e2017-role">
                          {"HK role "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2017-role" name="role" required={true} defaultValue={"PA attendant"}>
                            <option value="Room attendant">{"Room attendant"}</option>
                            <option value="Senior attendant">{"Senior attendant"}</option>
                            <option value="PA attendant">{"PA attendant"}</option>
                            <option value="Houseman">{"Houseman"}</option>
                            <option value="Turndown attendant">{"Turndown attendant"}</option>
                            <option value="Linen room attendant">{"Linen room attendant"}</option>
                            <option value="Floor supervisor">{"Floor supervisor"}</option>
                            <option value="Assistant housekeeper">{"Assistant housekeeper"}</option>
                            <option value="Executive housekeeper">{"Executive housekeeper"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Roles used in housekeeping"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2017-skill">
                          {"Skill level "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2017-skill" name="skill" required={true} defaultValue={"2"}>
                            <option value="1">{"Level 1"}</option>
                            <option value="2">{"Level 2"}</option>
                            <option value="3">{"Level 3 – VIP and suite rooms"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Level 3 may clean VIP and suite rooms when that allocation rule is on"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="hks-p02-e2017-sec">{"Home section"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2017-sec" name="home_section" defaultValue={""}>
                            <option value="">{"No home section"}</option>
                            <option value="S1">{"S1"}</option>
                            <option value="S2">{"S2"}</option>
                            <option value="S3">{"S3"}</option>
                            <option value="S4">{"S4"}</option>
                            <option value="S5">{"S5"}</option>
                            <option value="S6">{"S6"}</option>
                            <option value="S7">{"S7"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Required for attendants and floor supervisors. Sections are set in HKS-03."}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2017-shift">
                          {"Default shift "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2017-shift" name="default_shift" required={true} defaultValue={"M"}>
                            <option value="M">{"M · Morning 07:00–15:30"}</option>
                            <option value="E">{"E · Evening 15:00–23:30"}</option>
                            <option value="N">{"N · Night 23:00–07:30"}</option>
                            <option value="G">{"G · General 09:00–18:00"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Shift codes from the Shift codes tab; the duty roster starts from it"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Languages"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="English" />
                            <span className="check__box" />
                            {"English"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Malayalam" defaultChecked={true} />
                            <span className="check__box" />
                            {"Malayalam"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Hindi" defaultChecked={true} />
                            <span className="check__box" />
                            {"Hindi"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Tamil" />
                            <span className="check__box" />
                            {"Tamil"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Arabic" />
                            <span className="check__box" />
                            {"Arabic"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Other" />
                            <span className="check__box" />
                            {"Other"}
                          </label>
                        </div>
                        <span className="field__hint">{"Used to match the guest’s language when that allocation rule is on"}</span>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="hks-p02-e2017-insp">
                          <input id="hks-p02-e2017-insp" type="checkbox" role="switch" name="inspection_right" disabled={true} />
                          <span className="sw__track" />
                          {"Inspection right"}
                        </label>
                        <span className="field__hint">{"Only for supervisor roles (floor supervisor, assistant and executive housekeeper)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2017-max">{"Max credits override"}</label>
                        <input className="field__input num" id="hks-p02-e2017-max" type="number" name="max_credits" min="1" max="30" placeholder="16 (hotel default)" defaultValue={""} />
                        <span className="field__hint">{"1–30. A personal limit, for example 10 for a trainee. Empty = the hotel limit from Allocation rules."}</span>
                      </div>
                      <div className="field field--wide">
                        <span className="field__label">{"Mobile login"}</span>
                        <div className="hks-login">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                          {" "}
                          <span className="fd-muted">{"Hotel phone: Phone 15 · last sync today 09:10"}</span>
                        </div>
                        <span className="field__hint">{"“Create login” opens the user in Super Admin user management. Attendants need a login to use the phone app."}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p02-e2017-ag">
                          <input id="hks-p02-e2017-ag" type="checkbox" role="switch" name="agency" />
                          <span className="sw__track" />
                          {"Agency staff"}
                        </label>
                        <span className="field__hint">{"Outsourced staff: give the agency name and the contract end date"}</span>
                      </div>
                      <div className="field hks-agency">
                        <label className="field__label" htmlFor="hks-p02-e2017-agn">{"Agency name"}</label>
                        <input className="field__input" id="hks-p02-e2017-agn" type="text" name="agency_name" maxLength="60" defaultValue={""} />
                      </div>
                      <div className="field hks-agency" data-fw="s">
                        <label className="field__label" htmlFor="hks-p02-e2017-agd">{"Contract end date"}</label>
                        <input className="field__input num" id="hks-p02-e2017-agd" type="date" name="agency_end" defaultValue={""} />
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
              <div className="modal modal--full" id="hks-p02-e2018" data-code="HKS-P02" role="dialog" aria-modal="true" aria-labelledby="hks-p02-e2018-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box hks-form" action="/housekeeping-setup/hks-04-housekeeping-staff-and-shifts/#saved-e2018" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="hks-p02-e2018-t">{"Housekeeping profile: Satheesan"}</h2>
                      <p className="modal__desc">{"Role, skill, languages, home section and shift of one staff member. The name and employee number come from HR and cannot be changed here."}</p>
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
                        <span className="field__label">{"Staff"}</span>
                        <div className="hks-who hks-who--big">
                          <span className="avatar" style={{"--av-h": "204"}} aria-hidden="true">{"SA"}</span>
                          <span>
                            <strong>{"Satheesan"}</strong>
                            <span className="fd-sub">{"EMP-2018 · Housekeeping · from HR & Payroll"}</span>
                          </span>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="hks-p02-e2018-role">
                          {"HK role "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2018-role" name="role" required={true} defaultValue={"PA attendant"}>
                            <option value="Room attendant">{"Room attendant"}</option>
                            <option value="Senior attendant">{"Senior attendant"}</option>
                            <option value="PA attendant">{"PA attendant"}</option>
                            <option value="Houseman">{"Houseman"}</option>
                            <option value="Turndown attendant">{"Turndown attendant"}</option>
                            <option value="Linen room attendant">{"Linen room attendant"}</option>
                            <option value="Floor supervisor">{"Floor supervisor"}</option>
                            <option value="Assistant housekeeper">{"Assistant housekeeper"}</option>
                            <option value="Executive housekeeper">{"Executive housekeeper"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Roles used in housekeeping"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2018-skill">
                          {"Skill level "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2018-skill" name="skill" required={true} defaultValue={"1"}>
                            <option value="1">{"Level 1"}</option>
                            <option value="2">{"Level 2"}</option>
                            <option value="3">{"Level 3 – VIP and suite rooms"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Level 3 may clean VIP and suite rooms when that allocation rule is on"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="hks-p02-e2018-sec">{"Home section"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2018-sec" name="home_section" defaultValue={""}>
                            <option value="">{"No home section"}</option>
                            <option value="S1">{"S1"}</option>
                            <option value="S2">{"S2"}</option>
                            <option value="S3">{"S3"}</option>
                            <option value="S4">{"S4"}</option>
                            <option value="S5">{"S5"}</option>
                            <option value="S6">{"S6"}</option>
                            <option value="S7">{"S7"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Required for attendants and floor supervisors. Sections are set in HKS-03."}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2018-shift">
                          {"Default shift "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2018-shift" name="default_shift" required={true} defaultValue={"E"}>
                            <option value="M">{"M · Morning 07:00–15:30"}</option>
                            <option value="E">{"E · Evening 15:00–23:30"}</option>
                            <option value="N">{"N · Night 23:00–07:30"}</option>
                            <option value="G">{"G · General 09:00–18:00"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Shift codes from the Shift codes tab; the duty roster starts from it"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Languages"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="English" />
                            <span className="check__box" />
                            {"English"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Malayalam" defaultChecked={true} />
                            <span className="check__box" />
                            {"Malayalam"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Hindi" />
                            <span className="check__box" />
                            {"Hindi"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Tamil" />
                            <span className="check__box" />
                            {"Tamil"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Arabic" />
                            <span className="check__box" />
                            {"Arabic"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Other" />
                            <span className="check__box" />
                            {"Other"}
                          </label>
                        </div>
                        <span className="field__hint">{"Used to match the guest’s language when that allocation rule is on"}</span>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="hks-p02-e2018-insp">
                          <input id="hks-p02-e2018-insp" type="checkbox" role="switch" name="inspection_right" disabled={true} />
                          <span className="sw__track" />
                          {"Inspection right"}
                        </label>
                        <span className="field__hint">{"Only for supervisor roles (floor supervisor, assistant and executive housekeeper)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2018-max">{"Max credits override"}</label>
                        <input className="field__input num" id="hks-p02-e2018-max" type="number" name="max_credits" min="1" max="30" placeholder="16 (hotel default)" defaultValue={""} />
                        <span className="field__hint">{"1–30. A personal limit, for example 10 for a trainee. Empty = the hotel limit from Allocation rules."}</span>
                      </div>
                      <div className="field field--wide">
                        <span className="field__label">{"Mobile login"}</span>
                        <div className="hks-login">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                          {" "}
                          <span className="fd-muted">{"Hotel phone: Phone 16 · last sync today 09:10"}</span>
                        </div>
                        <span className="field__hint">{"“Create login” opens the user in Super Admin user management. Attendants need a login to use the phone app."}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p02-e2018-ag">
                          <input id="hks-p02-e2018-ag" type="checkbox" role="switch" name="agency" />
                          <span className="sw__track" />
                          {"Agency staff"}
                        </label>
                        <span className="field__hint">{"Outsourced staff: give the agency name and the contract end date"}</span>
                      </div>
                      <div className="field hks-agency">
                        <label className="field__label" htmlFor="hks-p02-e2018-agn">{"Agency name"}</label>
                        <input className="field__input" id="hks-p02-e2018-agn" type="text" name="agency_name" maxLength="60" defaultValue={""} />
                      </div>
                      <div className="field hks-agency" data-fw="s">
                        <label className="field__label" htmlFor="hks-p02-e2018-agd">{"Contract end date"}</label>
                        <input className="field__input num" id="hks-p02-e2018-agd" type="date" name="agency_end" defaultValue={""} />
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
              <div className="modal modal--full" id="hks-p02-e2019" data-code="HKS-P02" role="dialog" aria-modal="true" aria-labelledby="hks-p02-e2019-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box hks-form" action="/housekeeping-setup/hks-04-housekeeping-staff-and-shifts/#saved-e2019" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="hks-p02-e2019-t">{"Housekeeping profile: Ajith M"}</h2>
                      <p className="modal__desc">{"Role, skill, languages, home section and shift of one staff member. The name and employee number come from HR and cannot be changed here."}</p>
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
                        <span className="field__label">{"Staff"}</span>
                        <div className="hks-who hks-who--big">
                          <span className="avatar" style={{"--av-h": "245"}} aria-hidden="true">{"AM"}</span>
                          <span>
                            <strong>{"Ajith M"}</strong>
                            <span className="fd-sub">{"EMP-2019 · Housekeeping · from HR & Payroll"}</span>
                          </span>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="hks-p02-e2019-role">
                          {"HK role "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2019-role" name="role" required={true} defaultValue={"PA attendant"}>
                            <option value="Room attendant">{"Room attendant"}</option>
                            <option value="Senior attendant">{"Senior attendant"}</option>
                            <option value="PA attendant">{"PA attendant"}</option>
                            <option value="Houseman">{"Houseman"}</option>
                            <option value="Turndown attendant">{"Turndown attendant"}</option>
                            <option value="Linen room attendant">{"Linen room attendant"}</option>
                            <option value="Floor supervisor">{"Floor supervisor"}</option>
                            <option value="Assistant housekeeper">{"Assistant housekeeper"}</option>
                            <option value="Executive housekeeper">{"Executive housekeeper"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Roles used in housekeeping"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2019-skill">
                          {"Skill level "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2019-skill" name="skill" required={true} defaultValue={"1"}>
                            <option value="1">{"Level 1"}</option>
                            <option value="2">{"Level 2"}</option>
                            <option value="3">{"Level 3 – VIP and suite rooms"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Level 3 may clean VIP and suite rooms when that allocation rule is on"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="hks-p02-e2019-sec">{"Home section"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2019-sec" name="home_section" defaultValue={""}>
                            <option value="">{"No home section"}</option>
                            <option value="S1">{"S1"}</option>
                            <option value="S2">{"S2"}</option>
                            <option value="S3">{"S3"}</option>
                            <option value="S4">{"S4"}</option>
                            <option value="S5">{"S5"}</option>
                            <option value="S6">{"S6"}</option>
                            <option value="S7">{"S7"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Required for attendants and floor supervisors. Sections are set in HKS-03."}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2019-shift">
                          {"Default shift "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2019-shift" name="default_shift" required={true} defaultValue={"N"}>
                            <option value="M">{"M · Morning 07:00–15:30"}</option>
                            <option value="E">{"E · Evening 15:00–23:30"}</option>
                            <option value="N">{"N · Night 23:00–07:30"}</option>
                            <option value="G">{"G · General 09:00–18:00"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Shift codes from the Shift codes tab; the duty roster starts from it"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Languages"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="English" />
                            <span className="check__box" />
                            {"English"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Malayalam" defaultChecked={true} />
                            <span className="check__box" />
                            {"Malayalam"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Hindi" defaultChecked={true} />
                            <span className="check__box" />
                            {"Hindi"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Tamil" />
                            <span className="check__box" />
                            {"Tamil"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Arabic" />
                            <span className="check__box" />
                            {"Arabic"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Other" />
                            <span className="check__box" />
                            {"Other"}
                          </label>
                        </div>
                        <span className="field__hint">{"Used to match the guest’s language when that allocation rule is on"}</span>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="hks-p02-e2019-insp">
                          <input id="hks-p02-e2019-insp" type="checkbox" role="switch" name="inspection_right" disabled={true} />
                          <span className="sw__track" />
                          {"Inspection right"}
                        </label>
                        <span className="field__hint">{"Only for supervisor roles (floor supervisor, assistant and executive housekeeper)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2019-max">{"Max credits override"}</label>
                        <input className="field__input num" id="hks-p02-e2019-max" type="number" name="max_credits" min="1" max="30" placeholder="16 (hotel default)" defaultValue={""} />
                        <span className="field__hint">{"1–30. A personal limit, for example 10 for a trainee. Empty = the hotel limit from Allocation rules."}</span>
                      </div>
                      <div className="field field--wide">
                        <span className="field__label">{"Mobile login"}</span>
                        <div className="hks-login">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                          {" "}
                          <span className="fd-muted">{"Hotel phone: Phone 17 · last sync today 09:10"}</span>
                        </div>
                        <span className="field__hint">{"“Create login” opens the user in Super Admin user management. Attendants need a login to use the phone app."}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p02-e2019-ag">
                          <input id="hks-p02-e2019-ag" type="checkbox" role="switch" name="agency" />
                          <span className="sw__track" />
                          {"Agency staff"}
                        </label>
                        <span className="field__hint">{"Outsourced staff: give the agency name and the contract end date"}</span>
                      </div>
                      <div className="field hks-agency">
                        <label className="field__label" htmlFor="hks-p02-e2019-agn">{"Agency name"}</label>
                        <input className="field__input" id="hks-p02-e2019-agn" type="text" name="agency_name" maxLength="60" defaultValue={""} />
                      </div>
                      <div className="field hks-agency" data-fw="s">
                        <label className="field__label" htmlFor="hks-p02-e2019-agd">{"Contract end date"}</label>
                        <input className="field__input num" id="hks-p02-e2019-agd" type="date" name="agency_end" defaultValue={""} />
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
              <div className="modal modal--full" id="hks-p02-e2020" data-code="HKS-P02" role="dialog" aria-modal="true" aria-labelledby="hks-p02-e2020-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box hks-form" action="/housekeeping-setup/hks-04-housekeeping-staff-and-shifts/#saved-e2020" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="hks-p02-e2020-t">{"Housekeeping profile: Prasad V"}</h2>
                      <p className="modal__desc">{"Role, skill, languages, home section and shift of one staff member. The name and employee number come from HR and cannot be changed here."}</p>
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
                        <span className="field__label">{"Staff"}</span>
                        <div className="hks-who hks-who--big">
                          <span className="avatar" style={{"--av-h": "1"}} aria-hidden="true">{"PV"}</span>
                          <span>
                            <strong>{"Prasad V"}</strong>
                            <span className="fd-sub">{"EMP-2020 · Housekeeping · from HR & Payroll"}</span>
                          </span>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="hks-p02-e2020-role">
                          {"HK role "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2020-role" name="role" required={true} defaultValue={"PA attendant"}>
                            <option value="Room attendant">{"Room attendant"}</option>
                            <option value="Senior attendant">{"Senior attendant"}</option>
                            <option value="PA attendant">{"PA attendant"}</option>
                            <option value="Houseman">{"Houseman"}</option>
                            <option value="Turndown attendant">{"Turndown attendant"}</option>
                            <option value="Linen room attendant">{"Linen room attendant"}</option>
                            <option value="Floor supervisor">{"Floor supervisor"}</option>
                            <option value="Assistant housekeeper">{"Assistant housekeeper"}</option>
                            <option value="Executive housekeeper">{"Executive housekeeper"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Roles used in housekeeping"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2020-skill">
                          {"Skill level "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2020-skill" name="skill" required={true} defaultValue={"1"}>
                            <option value="1">{"Level 1"}</option>
                            <option value="2">{"Level 2"}</option>
                            <option value="3">{"Level 3 – VIP and suite rooms"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Level 3 may clean VIP and suite rooms when that allocation rule is on"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="hks-p02-e2020-sec">{"Home section"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2020-sec" name="home_section" defaultValue={""}>
                            <option value="">{"No home section"}</option>
                            <option value="S1">{"S1"}</option>
                            <option value="S2">{"S2"}</option>
                            <option value="S3">{"S3"}</option>
                            <option value="S4">{"S4"}</option>
                            <option value="S5">{"S5"}</option>
                            <option value="S6">{"S6"}</option>
                            <option value="S7">{"S7"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Required for attendants and floor supervisors. Sections are set in HKS-03."}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2020-shift">
                          {"Default shift "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2020-shift" name="default_shift" required={true} defaultValue={"M"}>
                            <option value="M">{"M · Morning 07:00–15:30"}</option>
                            <option value="E">{"E · Evening 15:00–23:30"}</option>
                            <option value="N">{"N · Night 23:00–07:30"}</option>
                            <option value="G">{"G · General 09:00–18:00"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Shift codes from the Shift codes tab; the duty roster starts from it"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Languages"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="English" />
                            <span className="check__box" />
                            {"English"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Malayalam" defaultChecked={true} />
                            <span className="check__box" />
                            {"Malayalam"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Hindi" />
                            <span className="check__box" />
                            {"Hindi"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Tamil" />
                            <span className="check__box" />
                            {"Tamil"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Arabic" />
                            <span className="check__box" />
                            {"Arabic"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Other" />
                            <span className="check__box" />
                            {"Other"}
                          </label>
                        </div>
                        <span className="field__hint">{"Used to match the guest’s language when that allocation rule is on"}</span>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="hks-p02-e2020-insp">
                          <input id="hks-p02-e2020-insp" type="checkbox" role="switch" name="inspection_right" disabled={true} />
                          <span className="sw__track" />
                          {"Inspection right"}
                        </label>
                        <span className="field__hint">{"Only for supervisor roles (floor supervisor, assistant and executive housekeeper)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2020-max">{"Max credits override"}</label>
                        <input className="field__input num" id="hks-p02-e2020-max" type="number" name="max_credits" min="1" max="30" placeholder="16 (hotel default)" defaultValue={""} />
                        <span className="field__hint">{"1–30. A personal limit, for example 10 for a trainee. Empty = the hotel limit from Allocation rules."}</span>
                      </div>
                      <div className="field field--wide">
                        <span className="field__label">{"Mobile login"}</span>
                        <div className="hks-login">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                          {" "}
                          <span className="fd-muted">{"Hotel phone: Phone 18 · last sync today 09:10"}</span>
                        </div>
                        <span className="field__hint">{"“Create login” opens the user in Super Admin user management. Attendants need a login to use the phone app."}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p02-e2020-ag">
                          <input id="hks-p02-e2020-ag" type="checkbox" role="switch" name="agency" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Agency staff"}
                        </label>
                        <span className="field__hint">{"Outsourced staff: give the agency name and the contract end date"}</span>
                      </div>
                      <div className="field hks-agency">
                        <label className="field__label" htmlFor="hks-p02-e2020-agn">{"Agency name"}</label>
                        <input className="field__input" id="hks-p02-e2020-agn" type="text" name="agency_name" maxLength="60" defaultValue={"Kochi Facility Services"} />
                      </div>
                      <div className="field hks-agency" data-fw="s">
                        <label className="field__label" htmlFor="hks-p02-e2020-agd">{"Contract end date"}</label>
                        <input className="field__input num" id="hks-p02-e2020-agd" type="date" name="agency_end" defaultValue={"2027-03-31"} />
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
              <div className="modal modal--full" id="hks-p02-e2021" data-code="HKS-P02" role="dialog" aria-modal="true" aria-labelledby="hks-p02-e2021-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box hks-form" action="/housekeeping-setup/hks-04-housekeeping-staff-and-shifts/#saved-e2021" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="hks-p02-e2021-t">{"Housekeeping profile: Manoj T"}</h2>
                      <p className="modal__desc">{"Role, skill, languages, home section and shift of one staff member. The name and employee number come from HR and cannot be changed here."}</p>
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
                        <span className="field__label">{"Staff"}</span>
                        <div className="hks-who hks-who--big">
                          <span className="avatar" style={{"--av-h": "257"}} aria-hidden="true">{"MT"}</span>
                          <span>
                            <strong>{"Manoj T"}</strong>
                            <span className="fd-sub">{"EMP-2021 · Housekeeping · from HR & Payroll"}</span>
                          </span>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="hks-p02-e2021-role">
                          {"HK role "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2021-role" name="role" required={true} defaultValue={"Houseman"}>
                            <option value="Room attendant">{"Room attendant"}</option>
                            <option value="Senior attendant">{"Senior attendant"}</option>
                            <option value="PA attendant">{"PA attendant"}</option>
                            <option value="Houseman">{"Houseman"}</option>
                            <option value="Turndown attendant">{"Turndown attendant"}</option>
                            <option value="Linen room attendant">{"Linen room attendant"}</option>
                            <option value="Floor supervisor">{"Floor supervisor"}</option>
                            <option value="Assistant housekeeper">{"Assistant housekeeper"}</option>
                            <option value="Executive housekeeper">{"Executive housekeeper"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Roles used in housekeeping"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2021-skill">
                          {"Skill level "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2021-skill" name="skill" required={true} defaultValue={"2"}>
                            <option value="1">{"Level 1"}</option>
                            <option value="2">{"Level 2"}</option>
                            <option value="3">{"Level 3 – VIP and suite rooms"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Level 3 may clean VIP and suite rooms when that allocation rule is on"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="hks-p02-e2021-sec">{"Home section"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2021-sec" name="home_section" defaultValue={""}>
                            <option value="">{"No home section"}</option>
                            <option value="S1">{"S1"}</option>
                            <option value="S2">{"S2"}</option>
                            <option value="S3">{"S3"}</option>
                            <option value="S4">{"S4"}</option>
                            <option value="S5">{"S5"}</option>
                            <option value="S6">{"S6"}</option>
                            <option value="S7">{"S7"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Required for attendants and floor supervisors. Sections are set in HKS-03."}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2021-shift">
                          {"Default shift "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2021-shift" name="default_shift" required={true} defaultValue={"M"}>
                            <option value="M">{"M · Morning 07:00–15:30"}</option>
                            <option value="E">{"E · Evening 15:00–23:30"}</option>
                            <option value="N">{"N · Night 23:00–07:30"}</option>
                            <option value="G">{"G · General 09:00–18:00"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Shift codes from the Shift codes tab; the duty roster starts from it"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Languages"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="English" />
                            <span className="check__box" />
                            {"English"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Malayalam" defaultChecked={true} />
                            <span className="check__box" />
                            {"Malayalam"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Hindi" defaultChecked={true} />
                            <span className="check__box" />
                            {"Hindi"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Tamil" />
                            <span className="check__box" />
                            {"Tamil"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Arabic" />
                            <span className="check__box" />
                            {"Arabic"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Other" />
                            <span className="check__box" />
                            {"Other"}
                          </label>
                        </div>
                        <span className="field__hint">{"Used to match the guest’s language when that allocation rule is on"}</span>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="hks-p02-e2021-insp">
                          <input id="hks-p02-e2021-insp" type="checkbox" role="switch" name="inspection_right" disabled={true} />
                          <span className="sw__track" />
                          {"Inspection right"}
                        </label>
                        <span className="field__hint">{"Only for supervisor roles (floor supervisor, assistant and executive housekeeper)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2021-max">{"Max credits override"}</label>
                        <input className="field__input num" id="hks-p02-e2021-max" type="number" name="max_credits" min="1" max="30" placeholder="16 (hotel default)" defaultValue={""} />
                        <span className="field__hint">{"1–30. A personal limit, for example 10 for a trainee. Empty = the hotel limit from Allocation rules."}</span>
                      </div>
                      <div className="field field--wide">
                        <span className="field__label">{"Mobile login"}</span>
                        <div className="hks-login">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                          {" "}
                          <span className="fd-muted">{"Hotel phone: Phone 19 · last sync today 09:10"}</span>
                        </div>
                        <span className="field__hint">{"“Create login” opens the user in Super Admin user management. Attendants need a login to use the phone app."}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p02-e2021-ag">
                          <input id="hks-p02-e2021-ag" type="checkbox" role="switch" name="agency" />
                          <span className="sw__track" />
                          {"Agency staff"}
                        </label>
                        <span className="field__hint">{"Outsourced staff: give the agency name and the contract end date"}</span>
                      </div>
                      <div className="field hks-agency">
                        <label className="field__label" htmlFor="hks-p02-e2021-agn">{"Agency name"}</label>
                        <input className="field__input" id="hks-p02-e2021-agn" type="text" name="agency_name" maxLength="60" defaultValue={""} />
                      </div>
                      <div className="field hks-agency" data-fw="s">
                        <label className="field__label" htmlFor="hks-p02-e2021-agd">{"Contract end date"}</label>
                        <input className="field__input num" id="hks-p02-e2021-agd" type="date" name="agency_end" defaultValue={""} />
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
              <div className="modal modal--full" id="hks-p02-e2022" data-code="HKS-P02" role="dialog" aria-modal="true" aria-labelledby="hks-p02-e2022-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box hks-form" action="/housekeeping-setup/hks-04-housekeeping-staff-and-shifts/#saved-e2022" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="hks-p02-e2022-t">{"Housekeeping profile: Sabu P"}</h2>
                      <p className="modal__desc">{"Role, skill, languages, home section and shift of one staff member. The name and employee number come from HR and cannot be changed here."}</p>
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
                        <span className="field__label">{"Staff"}</span>
                        <div className="hks-who hks-who--big">
                          <span className="avatar" style={{"--av-h": "147"}} aria-hidden="true">{"SP"}</span>
                          <span>
                            <strong>{"Sabu P"}</strong>
                            <span className="fd-sub">{"EMP-2022 · Housekeeping · from HR & Payroll"}</span>
                          </span>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="hks-p02-e2022-role">
                          {"HK role "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2022-role" name="role" required={true} defaultValue={"Houseman"}>
                            <option value="Room attendant">{"Room attendant"}</option>
                            <option value="Senior attendant">{"Senior attendant"}</option>
                            <option value="PA attendant">{"PA attendant"}</option>
                            <option value="Houseman">{"Houseman"}</option>
                            <option value="Turndown attendant">{"Turndown attendant"}</option>
                            <option value="Linen room attendant">{"Linen room attendant"}</option>
                            <option value="Floor supervisor">{"Floor supervisor"}</option>
                            <option value="Assistant housekeeper">{"Assistant housekeeper"}</option>
                            <option value="Executive housekeeper">{"Executive housekeeper"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Roles used in housekeeping"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2022-skill">
                          {"Skill level "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2022-skill" name="skill" required={true} defaultValue={"1"}>
                            <option value="1">{"Level 1"}</option>
                            <option value="2">{"Level 2"}</option>
                            <option value="3">{"Level 3 – VIP and suite rooms"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Level 3 may clean VIP and suite rooms when that allocation rule is on"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="hks-p02-e2022-sec">{"Home section"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2022-sec" name="home_section" defaultValue={""}>
                            <option value="">{"No home section"}</option>
                            <option value="S1">{"S1"}</option>
                            <option value="S2">{"S2"}</option>
                            <option value="S3">{"S3"}</option>
                            <option value="S4">{"S4"}</option>
                            <option value="S5">{"S5"}</option>
                            <option value="S6">{"S6"}</option>
                            <option value="S7">{"S7"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Required for attendants and floor supervisors. Sections are set in HKS-03."}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2022-shift">
                          {"Default shift "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2022-shift" name="default_shift" required={true} defaultValue={"E"}>
                            <option value="M">{"M · Morning 07:00–15:30"}</option>
                            <option value="E">{"E · Evening 15:00–23:30"}</option>
                            <option value="N">{"N · Night 23:00–07:30"}</option>
                            <option value="G">{"G · General 09:00–18:00"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Shift codes from the Shift codes tab; the duty roster starts from it"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Languages"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="English" />
                            <span className="check__box" />
                            {"English"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Malayalam" defaultChecked={true} />
                            <span className="check__box" />
                            {"Malayalam"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Hindi" />
                            <span className="check__box" />
                            {"Hindi"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Tamil" />
                            <span className="check__box" />
                            {"Tamil"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Arabic" />
                            <span className="check__box" />
                            {"Arabic"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Other" />
                            <span className="check__box" />
                            {"Other"}
                          </label>
                        </div>
                        <span className="field__hint">{"Used to match the guest’s language when that allocation rule is on"}</span>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="hks-p02-e2022-insp">
                          <input id="hks-p02-e2022-insp" type="checkbox" role="switch" name="inspection_right" disabled={true} />
                          <span className="sw__track" />
                          {"Inspection right"}
                        </label>
                        <span className="field__hint">{"Only for supervisor roles (floor supervisor, assistant and executive housekeeper)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2022-max">{"Max credits override"}</label>
                        <input className="field__input num" id="hks-p02-e2022-max" type="number" name="max_credits" min="1" max="30" placeholder="16 (hotel default)" defaultValue={""} />
                        <span className="field__hint">{"1–30. A personal limit, for example 10 for a trainee. Empty = the hotel limit from Allocation rules."}</span>
                      </div>
                      <div className="field field--wide">
                        <span className="field__label">{"Mobile login"}</span>
                        <div className="hks-login">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                          {" "}
                          <span className="fd-muted">{"Hotel phone: Phone 20 · last sync today 09:10"}</span>
                        </div>
                        <span className="field__hint">{"“Create login” opens the user in Super Admin user management. Attendants need a login to use the phone app."}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p02-e2022-ag">
                          <input id="hks-p02-e2022-ag" type="checkbox" role="switch" name="agency" />
                          <span className="sw__track" />
                          {"Agency staff"}
                        </label>
                        <span className="field__hint">{"Outsourced staff: give the agency name and the contract end date"}</span>
                      </div>
                      <div className="field hks-agency">
                        <label className="field__label" htmlFor="hks-p02-e2022-agn">{"Agency name"}</label>
                        <input className="field__input" id="hks-p02-e2022-agn" type="text" name="agency_name" maxLength="60" defaultValue={""} />
                      </div>
                      <div className="field hks-agency" data-fw="s">
                        <label className="field__label" htmlFor="hks-p02-e2022-agd">{"Contract end date"}</label>
                        <input className="field__input num" id="hks-p02-e2022-agd" type="date" name="agency_end" defaultValue={""} />
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
              <div className="modal modal--full" id="hks-p02-e2023" data-code="HKS-P02" role="dialog" aria-modal="true" aria-labelledby="hks-p02-e2023-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box hks-form" action="/housekeeping-setup/hks-04-housekeeping-staff-and-shifts/#saved-e2023" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="hks-p02-e2023-t">{"Housekeeping profile: Leena D"}</h2>
                      <p className="modal__desc">{"Role, skill, languages, home section and shift of one staff member. The name and employee number come from HR and cannot be changed here."}</p>
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
                        <span className="field__label">{"Staff"}</span>
                        <div className="hks-who hks-who--big">
                          <span className="avatar" style={{"--av-h": "225"}} aria-hidden="true">{"LD"}</span>
                          <span>
                            <strong>{"Leena D"}</strong>
                            <span className="fd-sub">{"EMP-2023 · Housekeeping · from HR & Payroll"}</span>
                          </span>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2023-role">
                          {"HK role "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2023-role" name="role" required={true} defaultValue={"Turndown attendant"}>
                            <option value="Room attendant">{"Room attendant"}</option>
                            <option value="Senior attendant">{"Senior attendant"}</option>
                            <option value="PA attendant">{"PA attendant"}</option>
                            <option value="Houseman">{"Houseman"}</option>
                            <option value="Turndown attendant">{"Turndown attendant"}</option>
                            <option value="Linen room attendant">{"Linen room attendant"}</option>
                            <option value="Floor supervisor">{"Floor supervisor"}</option>
                            <option value="Assistant housekeeper">{"Assistant housekeeper"}</option>
                            <option value="Executive housekeeper">{"Executive housekeeper"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Roles used in housekeeping"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2023-skill">
                          {"Skill level "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2023-skill" name="skill" required={true} defaultValue={"2"}>
                            <option value="1">{"Level 1"}</option>
                            <option value="2">{"Level 2"}</option>
                            <option value="3">{"Level 3 – VIP and suite rooms"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Level 3 may clean VIP and suite rooms when that allocation rule is on"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="hks-p02-e2023-sec">{"Home section"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2023-sec" name="home_section" defaultValue={""}>
                            <option value="">{"No home section"}</option>
                            <option value="S1">{"S1"}</option>
                            <option value="S2">{"S2"}</option>
                            <option value="S3">{"S3"}</option>
                            <option value="S4">{"S4"}</option>
                            <option value="S5">{"S5"}</option>
                            <option value="S6">{"S6"}</option>
                            <option value="S7">{"S7"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Required for attendants and floor supervisors. Sections are set in HKS-03."}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2023-shift">
                          {"Default shift "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2023-shift" name="default_shift" required={true} defaultValue={"E"}>
                            <option value="M">{"M · Morning 07:00–15:30"}</option>
                            <option value="E">{"E · Evening 15:00–23:30"}</option>
                            <option value="N">{"N · Night 23:00–07:30"}</option>
                            <option value="G">{"G · General 09:00–18:00"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Shift codes from the Shift codes tab; the duty roster starts from it"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Languages"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="English" defaultChecked={true} />
                            <span className="check__box" />
                            {"English"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Malayalam" defaultChecked={true} />
                            <span className="check__box" />
                            {"Malayalam"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Hindi" />
                            <span className="check__box" />
                            {"Hindi"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Tamil" />
                            <span className="check__box" />
                            {"Tamil"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Arabic" />
                            <span className="check__box" />
                            {"Arabic"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Other" />
                            <span className="check__box" />
                            {"Other"}
                          </label>
                        </div>
                        <span className="field__hint">{"Used to match the guest’s language when that allocation rule is on"}</span>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="hks-p02-e2023-insp">
                          <input id="hks-p02-e2023-insp" type="checkbox" role="switch" name="inspection_right" disabled={true} />
                          <span className="sw__track" />
                          {"Inspection right"}
                        </label>
                        <span className="field__hint">{"Only for supervisor roles (floor supervisor, assistant and executive housekeeper)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2023-max">{"Max credits override"}</label>
                        <input className="field__input num" id="hks-p02-e2023-max" type="number" name="max_credits" min="1" max="30" placeholder="16 (hotel default)" defaultValue={""} />
                        <span className="field__hint">{"1–30. A personal limit, for example 10 for a trainee. Empty = the hotel limit from Allocation rules."}</span>
                      </div>
                      <div className="field field--wide">
                        <span className="field__label">{"Mobile login"}</span>
                        <div className="hks-login">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                          {" "}
                          <span className="fd-muted">{"Hotel phone: Phone 21 · last sync today 09:10"}</span>
                        </div>
                        <span className="field__hint">{"“Create login” opens the user in Super Admin user management. Attendants need a login to use the phone app."}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p02-e2023-ag">
                          <input id="hks-p02-e2023-ag" type="checkbox" role="switch" name="agency" />
                          <span className="sw__track" />
                          {"Agency staff"}
                        </label>
                        <span className="field__hint">{"Outsourced staff: give the agency name and the contract end date"}</span>
                      </div>
                      <div className="field hks-agency">
                        <label className="field__label" htmlFor="hks-p02-e2023-agn">{"Agency name"}</label>
                        <input className="field__input" id="hks-p02-e2023-agn" type="text" name="agency_name" maxLength="60" defaultValue={""} />
                      </div>
                      <div className="field hks-agency" data-fw="s">
                        <label className="field__label" htmlFor="hks-p02-e2023-agd">{"Contract end date"}</label>
                        <input className="field__input num" id="hks-p02-e2023-agd" type="date" name="agency_end" defaultValue={""} />
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
              <div className="modal modal--full" id="hks-p02-e2024" data-code="HKS-P02" role="dialog" aria-modal="true" aria-labelledby="hks-p02-e2024-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box hks-form" action="/housekeeping-setup/hks-04-housekeeping-staff-and-shifts/#saved-e2024" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="hks-p02-e2024-t">{"Housekeeping profile: Asha R"}</h2>
                      <p className="modal__desc">{"Role, skill, languages, home section and shift of one staff member. The name and employee number come from HR and cannot be changed here."}</p>
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
                        <span className="field__label">{"Staff"}</span>
                        <div className="hks-who hks-who--big">
                          <span className="avatar" style={{"--av-h": "135"}} aria-hidden="true">{"AR"}</span>
                          <span>
                            <strong>{"Asha R"}</strong>
                            <span className="fd-sub">{"EMP-2024 · Housekeeping · from HR & Payroll"}</span>
                          </span>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2024-role">
                          {"HK role "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2024-role" name="role" required={true} defaultValue={"Turndown attendant"}>
                            <option value="Room attendant">{"Room attendant"}</option>
                            <option value="Senior attendant">{"Senior attendant"}</option>
                            <option value="PA attendant">{"PA attendant"}</option>
                            <option value="Houseman">{"Houseman"}</option>
                            <option value="Turndown attendant">{"Turndown attendant"}</option>
                            <option value="Linen room attendant">{"Linen room attendant"}</option>
                            <option value="Floor supervisor">{"Floor supervisor"}</option>
                            <option value="Assistant housekeeper">{"Assistant housekeeper"}</option>
                            <option value="Executive housekeeper">{"Executive housekeeper"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Roles used in housekeeping"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2024-skill">
                          {"Skill level "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2024-skill" name="skill" required={true} defaultValue={"1"}>
                            <option value="1">{"Level 1"}</option>
                            <option value="2">{"Level 2"}</option>
                            <option value="3">{"Level 3 – VIP and suite rooms"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Level 3 may clean VIP and suite rooms when that allocation rule is on"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="hks-p02-e2024-sec">{"Home section"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2024-sec" name="home_section" defaultValue={""}>
                            <option value="">{"No home section"}</option>
                            <option value="S1">{"S1"}</option>
                            <option value="S2">{"S2"}</option>
                            <option value="S3">{"S3"}</option>
                            <option value="S4">{"S4"}</option>
                            <option value="S5">{"S5"}</option>
                            <option value="S6">{"S6"}</option>
                            <option value="S7">{"S7"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Required for attendants and floor supervisors. Sections are set in HKS-03."}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2024-shift">
                          {"Default shift "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2024-shift" name="default_shift" required={true} defaultValue={"E"}>
                            <option value="M">{"M · Morning 07:00–15:30"}</option>
                            <option value="E">{"E · Evening 15:00–23:30"}</option>
                            <option value="N">{"N · Night 23:00–07:30"}</option>
                            <option value="G">{"G · General 09:00–18:00"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Shift codes from the Shift codes tab; the duty roster starts from it"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Languages"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="English" />
                            <span className="check__box" />
                            {"English"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Malayalam" defaultChecked={true} />
                            <span className="check__box" />
                            {"Malayalam"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Hindi" />
                            <span className="check__box" />
                            {"Hindi"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Tamil" />
                            <span className="check__box" />
                            {"Tamil"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Arabic" />
                            <span className="check__box" />
                            {"Arabic"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Other" />
                            <span className="check__box" />
                            {"Other"}
                          </label>
                        </div>
                        <span className="field__hint">{"Used to match the guest’s language when that allocation rule is on"}</span>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="hks-p02-e2024-insp">
                          <input id="hks-p02-e2024-insp" type="checkbox" role="switch" name="inspection_right" disabled={true} />
                          <span className="sw__track" />
                          {"Inspection right"}
                        </label>
                        <span className="field__hint">{"Only for supervisor roles (floor supervisor, assistant and executive housekeeper)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2024-max">{"Max credits override"}</label>
                        <input className="field__input num" id="hks-p02-e2024-max" type="number" name="max_credits" min="1" max="30" placeholder="16 (hotel default)" defaultValue={""} />
                        <span className="field__hint">{"1–30. A personal limit, for example 10 for a trainee. Empty = the hotel limit from Allocation rules."}</span>
                      </div>
                      <div className="field field--wide">
                        <span className="field__label">{"Mobile login"}</span>
                        <div className="hks-login">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                          {" "}
                          <span className="fd-muted">{"Hotel phone: Phone 22 · last sync today 09:10"}</span>
                        </div>
                        <span className="field__hint">{"“Create login” opens the user in Super Admin user management. Attendants need a login to use the phone app."}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p02-e2024-ag">
                          <input id="hks-p02-e2024-ag" type="checkbox" role="switch" name="agency" />
                          <span className="sw__track" />
                          {"Agency staff"}
                        </label>
                        <span className="field__hint">{"Outsourced staff: give the agency name and the contract end date"}</span>
                      </div>
                      <div className="field hks-agency">
                        <label className="field__label" htmlFor="hks-p02-e2024-agn">{"Agency name"}</label>
                        <input className="field__input" id="hks-p02-e2024-agn" type="text" name="agency_name" maxLength="60" defaultValue={""} />
                      </div>
                      <div className="field hks-agency" data-fw="s">
                        <label className="field__label" htmlFor="hks-p02-e2024-agd">{"Contract end date"}</label>
                        <input className="field__input num" id="hks-p02-e2024-agd" type="date" name="agency_end" defaultValue={""} />
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
              <div className="modal modal--full" id="hks-p02-e2025" data-code="HKS-P02" role="dialog" aria-modal="true" aria-labelledby="hks-p02-e2025-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box hks-form" action="/housekeeping-setup/hks-04-housekeeping-staff-and-shifts/#saved-e2025" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="hks-p02-e2025-t">{"Housekeeping profile: Girija N"}</h2>
                      <p className="modal__desc">{"Role, skill, languages, home section and shift of one staff member. The name and employee number come from HR and cannot be changed here."}</p>
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
                        <span className="field__label">{"Staff"}</span>
                        <div className="hks-who hks-who--big">
                          <span className="avatar" style={{"--av-h": "348"}} aria-hidden="true">{"GN"}</span>
                          <span>
                            <strong>{"Girija N"}</strong>
                            <span className="fd-sub">{"EMP-2025 · Housekeeping · from HR & Payroll"}</span>
                          </span>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2025-role">
                          {"HK role "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2025-role" name="role" required={true} defaultValue={"Linen room attendant"}>
                            <option value="Room attendant">{"Room attendant"}</option>
                            <option value="Senior attendant">{"Senior attendant"}</option>
                            <option value="PA attendant">{"PA attendant"}</option>
                            <option value="Houseman">{"Houseman"}</option>
                            <option value="Turndown attendant">{"Turndown attendant"}</option>
                            <option value="Linen room attendant">{"Linen room attendant"}</option>
                            <option value="Floor supervisor">{"Floor supervisor"}</option>
                            <option value="Assistant housekeeper">{"Assistant housekeeper"}</option>
                            <option value="Executive housekeeper">{"Executive housekeeper"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Roles used in housekeeping"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2025-skill">
                          {"Skill level "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2025-skill" name="skill" required={true} defaultValue={"2"}>
                            <option value="1">{"Level 1"}</option>
                            <option value="2">{"Level 2"}</option>
                            <option value="3">{"Level 3 – VIP and suite rooms"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Level 3 may clean VIP and suite rooms when that allocation rule is on"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="hks-p02-e2025-sec">{"Home section"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2025-sec" name="home_section" defaultValue={""}>
                            <option value="">{"No home section"}</option>
                            <option value="S1">{"S1"}</option>
                            <option value="S2">{"S2"}</option>
                            <option value="S3">{"S3"}</option>
                            <option value="S4">{"S4"}</option>
                            <option value="S5">{"S5"}</option>
                            <option value="S6">{"S6"}</option>
                            <option value="S7">{"S7"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Required for attendants and floor supervisors. Sections are set in HKS-03."}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2025-shift">
                          {"Default shift "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2025-shift" name="default_shift" required={true} defaultValue={"M"}>
                            <option value="M">{"M · Morning 07:00–15:30"}</option>
                            <option value="E">{"E · Evening 15:00–23:30"}</option>
                            <option value="N">{"N · Night 23:00–07:30"}</option>
                            <option value="G">{"G · General 09:00–18:00"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Shift codes from the Shift codes tab; the duty roster starts from it"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Languages"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="English" />
                            <span className="check__box" />
                            {"English"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Malayalam" defaultChecked={true} />
                            <span className="check__box" />
                            {"Malayalam"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Hindi" />
                            <span className="check__box" />
                            {"Hindi"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Tamil" />
                            <span className="check__box" />
                            {"Tamil"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Arabic" />
                            <span className="check__box" />
                            {"Arabic"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Other" />
                            <span className="check__box" />
                            {"Other"}
                          </label>
                        </div>
                        <span className="field__hint">{"Used to match the guest’s language when that allocation rule is on"}</span>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="hks-p02-e2025-insp">
                          <input id="hks-p02-e2025-insp" type="checkbox" role="switch" name="inspection_right" disabled={true} />
                          <span className="sw__track" />
                          {"Inspection right"}
                        </label>
                        <span className="field__hint">{"Only for supervisor roles (floor supervisor, assistant and executive housekeeper)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2025-max">{"Max credits override"}</label>
                        <input className="field__input num" id="hks-p02-e2025-max" type="number" name="max_credits" min="1" max="30" placeholder="16 (hotel default)" defaultValue={""} />
                        <span className="field__hint">{"1–30. A personal limit, for example 10 for a trainee. Empty = the hotel limit from Allocation rules."}</span>
                      </div>
                      <div className="field field--wide">
                        <span className="field__label">{"Mobile login"}</span>
                        <div className="hks-login">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                          {" "}
                          <span className="fd-muted">{"Hotel phone: Phone 23 · last sync today 09:10"}</span>
                        </div>
                        <span className="field__hint">{"“Create login” opens the user in Super Admin user management. Attendants need a login to use the phone app."}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p02-e2025-ag">
                          <input id="hks-p02-e2025-ag" type="checkbox" role="switch" name="agency" />
                          <span className="sw__track" />
                          {"Agency staff"}
                        </label>
                        <span className="field__hint">{"Outsourced staff: give the agency name and the contract end date"}</span>
                      </div>
                      <div className="field hks-agency">
                        <label className="field__label" htmlFor="hks-p02-e2025-agn">{"Agency name"}</label>
                        <input className="field__input" id="hks-p02-e2025-agn" type="text" name="agency_name" maxLength="60" defaultValue={""} />
                      </div>
                      <div className="field hks-agency" data-fw="s">
                        <label className="field__label" htmlFor="hks-p02-e2025-agd">{"Contract end date"}</label>
                        <input className="field__input num" id="hks-p02-e2025-agd" type="date" name="agency_end" defaultValue={""} />
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
              <div className="modal modal--full" id="hks-p02-e2026" data-code="HKS-P02" role="dialog" aria-modal="true" aria-labelledby="hks-p02-e2026-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box hks-form" action="/housekeeping-setup/hks-04-housekeeping-staff-and-shifts/#saved-e2026" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="hks-p02-e2026-t">{"Housekeeping profile: Mini C"}</h2>
                      <p className="modal__desc">{"Role, skill, languages, home section and shift of one staff member. The name and employee number come from HR and cannot be changed here."}</p>
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
                        <span className="field__label">{"Staff"}</span>
                        <div className="hks-who hks-who--big">
                          <span className="avatar" style={{"--av-h": "136"}} aria-hidden="true">{"MC"}</span>
                          <span>
                            <strong>{"Mini C"}</strong>
                            <span className="fd-sub">{"EMP-2026 · Housekeeping · from HR & Payroll"}</span>
                          </span>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2026-role">
                          {"HK role "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2026-role" name="role" required={true} defaultValue={"Linen room attendant"}>
                            <option value="Room attendant">{"Room attendant"}</option>
                            <option value="Senior attendant">{"Senior attendant"}</option>
                            <option value="PA attendant">{"PA attendant"}</option>
                            <option value="Houseman">{"Houseman"}</option>
                            <option value="Turndown attendant">{"Turndown attendant"}</option>
                            <option value="Linen room attendant">{"Linen room attendant"}</option>
                            <option value="Floor supervisor">{"Floor supervisor"}</option>
                            <option value="Assistant housekeeper">{"Assistant housekeeper"}</option>
                            <option value="Executive housekeeper">{"Executive housekeeper"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Roles used in housekeeping"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2026-skill">
                          {"Skill level "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2026-skill" name="skill" required={true} defaultValue={"1"}>
                            <option value="1">{"Level 1"}</option>
                            <option value="2">{"Level 2"}</option>
                            <option value="3">{"Level 3 – VIP and suite rooms"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Level 3 may clean VIP and suite rooms when that allocation rule is on"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="hks-p02-e2026-sec">{"Home section"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2026-sec" name="home_section" defaultValue={""}>
                            <option value="">{"No home section"}</option>
                            <option value="S1">{"S1"}</option>
                            <option value="S2">{"S2"}</option>
                            <option value="S3">{"S3"}</option>
                            <option value="S4">{"S4"}</option>
                            <option value="S5">{"S5"}</option>
                            <option value="S6">{"S6"}</option>
                            <option value="S7">{"S7"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Required for attendants and floor supervisors. Sections are set in HKS-03."}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2026-shift">
                          {"Default shift "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-p02-e2026-shift" name="default_shift" required={true} defaultValue={"E"}>
                            <option value="M">{"M · Morning 07:00–15:30"}</option>
                            <option value="E">{"E · Evening 15:00–23:30"}</option>
                            <option value="N">{"N · Night 23:00–07:30"}</option>
                            <option value="G">{"G · General 09:00–18:00"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Shift codes from the Shift codes tab; the duty roster starts from it"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Languages"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="English" />
                            <span className="check__box" />
                            {"English"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Malayalam" defaultChecked={true} />
                            <span className="check__box" />
                            {"Malayalam"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Hindi" />
                            <span className="check__box" />
                            {"Hindi"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Tamil" defaultChecked={true} />
                            <span className="check__box" />
                            {"Tamil"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Arabic" />
                            <span className="check__box" />
                            {"Arabic"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="languages" value="Other" />
                            <span className="check__box" />
                            {"Other"}
                          </label>
                        </div>
                        <span className="field__hint">{"Used to match the guest’s language when that allocation rule is on"}</span>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="hks-p02-e2026-insp">
                          <input id="hks-p02-e2026-insp" type="checkbox" role="switch" name="inspection_right" disabled={true} />
                          <span className="sw__track" />
                          {"Inspection right"}
                        </label>
                        <span className="field__hint">{"Only for supervisor roles (floor supervisor, assistant and executive housekeeper)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-p02-e2026-max">{"Max credits override"}</label>
                        <input className="field__input num" id="hks-p02-e2026-max" type="number" name="max_credits" min="1" max="30" placeholder="16 (hotel default)" defaultValue={""} />
                        <span className="field__hint">{"1–30. A personal limit, for example 10 for a trainee. Empty = the hotel limit from Allocation rules."}</span>
                      </div>
                      <div className="field field--wide">
                        <span className="field__label">{"Mobile login"}</span>
                        <div className="hks-login">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                          {" "}
                          <span className="fd-muted">{"Hotel phone: Phone 24 · last sync today 09:10"}</span>
                        </div>
                        <span className="field__hint">{"“Create login” opens the user in Super Admin user management. Attendants need a login to use the phone app."}</span>
                      </div>
                      <div className="field field--toggle field--wide">
                        <label className="sw" htmlFor="hks-p02-e2026-ag">
                          <input id="hks-p02-e2026-ag" type="checkbox" role="switch" name="agency" />
                          <span className="sw__track" />
                          {"Agency staff"}
                        </label>
                        <span className="field__hint">{"Outsourced staff: give the agency name and the contract end date"}</span>
                      </div>
                      <div className="field hks-agency">
                        <label className="field__label" htmlFor="hks-p02-e2026-agn">{"Agency name"}</label>
                        <input className="field__input" id="hks-p02-e2026-agn" type="text" name="agency_name" maxLength="60" defaultValue={""} />
                      </div>
                      <div className="field hks-agency" data-fw="s">
                        <label className="field__label" htmlFor="hks-p02-e2026-agd">{"Contract end date"}</label>
                        <input className="field__input num" id="hks-p02-e2026-agd" type="date" name="agency_end" defaultValue={""} />
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
              <div className="fd-toast" id="t-e2001" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Profile of Sunita Ranjan saved"}
                  <small>{"Executive housekeeper · skill level 3 · default shift G. Logged in the settings audit (HKS-X02). The row is highlighted."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-e2002" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Profile of Reshma Nathan saved"}
                  <small>{"Assistant housekeeper · skill level 3 · default shift G. Logged in the settings audit (HKS-X02). The row is highlighted."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-e2003" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Profile of Beena Thomas saved"}
                  <small>{"Floor supervisor · skill level 3 · default shift M · home section S1. Logged in the settings audit (HKS-X02). The row is highlighted."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-e2004" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Profile of Joseph Paul saved"}
                  <small>{"Floor supervisor · skill level 3 · default shift M · home section S4. Logged in the settings audit (HKS-X02). The row is highlighted."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-e2005" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Profile of Latha Nathan saved"}
                  <small>{"Floor supervisor · skill level 3 · default shift E · home section S7. Logged in the settings audit (HKS-X02). The row is highlighted."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-e2006" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Profile of Mariamma Varghese saved"}
                  <small>{"Senior attendant · skill level 3 · default shift M · home section S3. Logged in the settings audit (HKS-X02). The row is highlighted."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-e2007" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Profile of Saritha K saved"}
                  <small>{"Senior attendant · skill level 3 · default shift M · home section S7. Logged in the settings audit (HKS-X02). The row is highlighted."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-e2008" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Profile of Anitha P saved"}
                  <small>{"Room attendant · skill level 2 · default shift M · home section S1. Logged in the settings audit (HKS-X02). The row is highlighted."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-e2009" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Profile of Remya K saved"}
                  <small>{"Room attendant · skill level 2 · default shift M · home section S1. Logged in the settings audit (HKS-X02). The row is highlighted."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-e2010" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Profile of Divya M saved"}
                  <small>{"Room attendant · skill level 2 · default shift M · home section S2. Logged in the settings audit (HKS-X02). The row is highlighted."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-e2011" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Profile of Shiny Joseph saved"}
                  <small>{"Room attendant · skill level 2 · default shift M · home section S4. Logged in the settings audit (HKS-X02). The row is highlighted."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-e2012" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Profile of Jincy Mathew saved"}
                  <small>{"Room attendant · skill level 1 · default shift M · home section S4. Logged in the settings audit (HKS-X02). The row is highlighted."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-e2013" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Profile of Rekha S saved"}
                  <small>{"Room attendant · skill level 2 · default shift M · home section S5. Logged in the settings audit (HKS-X02). The row is highlighted."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-e2014" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Profile of Lissy George saved"}
                  <small>{"Room attendant · skill level 2 · default shift M · home section S6. Logged in the settings audit (HKS-X02). The row is highlighted."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-e2015" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Profile of Sheeba T saved"}
                  <small>{"Room attendant · skill level 1 · default shift E · home section S6. Logged in the settings audit (HKS-X02). The row is highlighted."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-e2016" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Profile of Rani V saved"}
                  <small>{"Room attendant · skill level 1 · default shift M. Logged in the settings audit (HKS-X02). The row is highlighted."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-e2017" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Profile of Biju K saved"}
                  <small>{"PA attendant · skill level 2 · default shift M. Logged in the settings audit (HKS-X02). The row is highlighted."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-e2018" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Profile of Satheesan saved"}
                  <small>{"PA attendant · skill level 1 · default shift E. Logged in the settings audit (HKS-X02). The row is highlighted."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-e2019" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Profile of Ajith M saved"}
                  <small>{"PA attendant · skill level 1 · default shift N. Logged in the settings audit (HKS-X02). The row is highlighted."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-e2020" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Profile of Prasad V saved"}
                  <small>{"PA attendant · skill level 1 · default shift M. Logged in the settings audit (HKS-X02). The row is highlighted."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-e2021" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Profile of Manoj T saved"}
                  <small>{"Houseman · skill level 2 · default shift M. Logged in the settings audit (HKS-X02). The row is highlighted."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-e2022" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Profile of Sabu P saved"}
                  <small>{"Houseman · skill level 1 · default shift E. Logged in the settings audit (HKS-X02). The row is highlighted."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-e2023" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Profile of Leena D saved"}
                  <small>{"Turndown attendant · skill level 2 · default shift E. Logged in the settings audit (HKS-X02). The row is highlighted."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-e2024" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Profile of Asha R saved"}
                  <small>{"Turndown attendant · skill level 1 · default shift E. Logged in the settings audit (HKS-X02). The row is highlighted."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-e2025" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Profile of Girija N saved"}
                  <small>{"Linen room attendant · skill level 2 · default shift M. Logged in the settings audit (HKS-X02). The row is highlighted."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-e2026" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Profile of Mini C saved"}
                  <small>{"Linen room attendant · skill level 1 · default shift E. Logged in the settings audit (HKS-X02). The row is highlighted."}</small>
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
                  <span className="code-chip">{"HKS-04"}</span>
                </summary>
                <dl className="helpbox__body">
                  <dt>{"What it is for"}</dt>
                  <dd>{"The housekeeping profile of each staff member: role, skill level, languages, home section, default shift, mobile login and inspection right. Shift codes are on the second tab."}</dd>
                  <dt>{"How it works"}</dt>
                  <dd>{"1. Press Edit profile on a row. 2. Change the role, skill, section or shift. 3. Save. Staff who joined or left are pulled from HR with Sync from HR."}</dd>
                  <dt>{"Opened from"}</dt>
                  <dd>{"Housekeeping Setup Home (HKS-01) › Staff & shifts"}</dd>
                  <dt>{"Leads to"}</dt>
                  <dd>{"HKS-P02 Staff Housekeeping Profile, HKS-04-2 Shift codes, HR-02 Employee Master, Super Admin user management"}</dd>
                  <dt>{"Sends to"}</dt>
                  <dd>{"Duty roster (HK-07), room allocation (HK-04) and the phone app login"}</dd>
                  <dt>{"Note"}</dt>
                  <dd>{"Static screen (HTML and CSS only): it shows the layout, fields and sample data. Saving and live data come when the backend is connected."}</dd>
                </dl>
              </details>
              <div className="modal" id="hks-04-add-staff" data-flow="add-form" role="dialog" aria-modal="true" aria-labelledby="hks-04-add-staff-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hks-04-add-staff-t">{"Add staff"}</h2>
                      <p className="modal__desc">{"A new line in this list. Written to the setup audit log."}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="hks-04-add-staff-f1">
                          {"Staff "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-04-add-staff-f1" defaultValue={""}>
                            <option value="">{"Select…"}</option>
                            <option>{"Yes"}</option>
                            <option>{"No"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-04-add-staff-f2">{"HK role"}</label>
                        <input className="field__input" id="hks-04-add-staff-f2" type="text" placeholder="For example Executive housekeeper" />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-04-add-staff-f3">{"Skill level"}</label>
                        <input className="field__input" id="hks-04-add-staff-f3" type="number" placeholder="" />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-04-add-staff-f4">{"Languages"}</label>
                        <input className="field__input" id="hks-04-add-staff-f4" type="text" placeholder="For example English, Malayalam, Hindi" />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-04-add-staff-f5">{"Home section"}</label>
                        <input className="field__input" id="hks-04-add-staff-f5" type="text" placeholder="" />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-04-add-staff-f6">{"Default shift"}</label>
                        <input className="field__input" id="hks-04-add-staff-f6" type="text" placeholder="For example G" />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-04-add-staff-f7">{"Mobile login"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="hks-04-add-staff-f7" defaultValue={""}>
                            <option value="">{"Select…"}</option>
                            <option>{"Active"}</option>
                            <option>{"Inactive"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-04-add-staff-f8">{"Inspection right"}</label>
                        <input className="field__input" id="hks-04-add-staff-f8" type="text" placeholder="For example Yes" />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="hks-04-add-staff-f9">{"Max credits override"}</label>
                        <input className="field__input" id="hks-04-add-staff-f9" type="text" placeholder="For example 16 (default)" />
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
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
