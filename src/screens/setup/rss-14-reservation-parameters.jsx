// GENERATED from public/setup/rss-14-reservation-parameters/index.html by scripts/convert_legacy.py.
// Markup converted to JSX. Legacy page scripts and inline on* handlers are not ported yet.
import { Link } from '../../lib/router.jsx';
import ScreenShell from '../../components/ScreenShell.jsx';

const SHEETS = [
  {
    "href": "/css/aviv/aviv.css",
    "media": null
  },
  {
    "href": "/css/aviv/setup.css",
    "media": null
  },
  {
    "href": "/setup/rss-14-reservation-parameters/rss-14-reservation-parameters.css",
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

export default function SetupRss14ReservationParameters() {
  return (
    <ScreenShell title="Reservation Parameters" sheets={SHEETS} inlineCss={INLINE_CSS}>
      <div data-screen="RSS-14" data-code="RSS-14" data-static="1" className="legacy-body">
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
                  <Link className="nav__item is-active" data-nav="RSS-01" title="Setup Home (checklist)" to={"/setup/rss-01-setup-home-checklist"}>
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
            <main className="app__content" id="main" data-code="RSS-14" tabIndex="-1">
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
                        <Link to={"/setup/rss-01-setup-home-checklist"}>{"Reservation Setup"}</Link>
                      </li>
                      <li>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-right" />
                        </svg>
                        <span aria-current="page">{"Reservation Parameters"}</span>
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="page-header__row">
                  <div className="page-header__text">
                    <h1 className="page-header__title">{"Reservation Parameters"}</h1>
                  </div>
                  <span className="code-chip" title="Screen code">{"RSS-14"}</span>
                  <div className="page-header__actions">
                    <Link className="btn pb-back" data-leads-to="RSS-01" to={"/setup/rss-01-setup-home-checklist"}>{"Back to Setup Home"}</Link>
                    <button className="btn btn--primary" type="submit" form="rss14-form">{"Save changes"}</button>
                  </div>
                </div>
              </header>
              <form id="rss14-form" className="stack" action="#" noValidate={true}>
                <section className="card">
                  <fieldset className="form-section">
                    <legend className="form-section__title">{"Stay times and guests"}</legend>
                    <div className="form-section__grid">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f1871">{"Check-in time"}</label>
                        <input className="field__input num" id="f1871" type="time" readOnly={true} defaultValue={"15:00"} />
                        <span className="field__hint" data-flow="owner">
                          {"Set in Hotel Details (RSS-02). "}
                          <Link data-leads-to="RSS-02" to={"/setup/rss-02-hotel-details"}>{"Change it there"}</Link>
                        </span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f1872">{"Check-out time"}</label>
                        <input className="field__input num" id="f1872" type="time" readOnly={true} defaultValue={"12:00"} />
                        <span className="field__hint" data-flow="owner">
                          {"Set in Hotel Details (RSS-02). "}
                          <Link data-leads-to="RSS-02" to={"/setup/rss-02-hotel-details"}>{"Change it there"}</Link>
                        </span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f1873">{"Minimum guest age"}</label>
                        <input className="field__input num" id="f1873" type="number" readOnly={true} defaultValue={"18"} />
                        <span className="field__hint" data-flow="owner">
                          {"Set in Hotel Details (RSS-02). "}
                          <Link data-leads-to="RSS-02" to={"/setup/rss-02-hotel-details"}>{"Change it there"}</Link>
                        </span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f1874">{"Children stay free up to age"}</label>
                        <input className="field__input num" id="f1874" type="number" defaultValue={"11"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f1875">{"Free children per room (max)"}</label>
                        <input className="field__input num" id="f1875" type="number" defaultValue={"2"} />
                        <span className="field__hint">{"Using existing beds"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Pets"}</span>
                        <label className="sw">
                          <input type="checkbox" role="switch" />
                          <span className="sw__track" />
                          {"Allowed (not allowed at The Aviv Kochi)"}
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </section>
                <section className="card">
                  <fieldset className="form-section">
                    <legend className="form-section__title">{"Extra beds"}</legend>
                    <div className="form-section__grid">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f1876">{"Extra bed charge / night"}</label>
                        <div className="field__wrap field__wrap--money">
                          <span className="field__prefix">{"₹"}</span>
                          <input className="field__input num" id="f1876" inputMode="decimal" defaultValue={"1,500"} />
                        </div>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f1877">{"Extra beds per room (max)"}</label>
                        <input className="field__input num" id="f1877" type="number" defaultValue={"1"} />
                      </div>
                    </div>
                  </fieldset>
                </section>
                <section className="card">
                  <fieldset className="form-section">
                    <legend className="form-section__title">{"Booking limits"}</legend>
                    <div className="form-section__grid">
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f1878">{"Auto release after (days)"}</label>
                        <input className="field__input num" id="f1878" type="number" readOnly={true} defaultValue={"3"} />
                        <span className="field__hint" data-flow="owner">
                          {"Set in “Rooms are released automatically after” on this page. "}
                          <a href="#main" data-leads-to="RSS-14">{"Change it there"}</a>
                        </span>
                        <span className="field__hint">{"Preset 3 days = 72 hours. A tentative booking that is not confirmed by then is released automatically"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f1879">{"Booking horizon (days)"}</label>
                        <input className="field__input num" id="f1879" type="number" defaultValue={"365"} />
                        <span className="field__hint">{"How far ahead a booking can be made"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f1880">{"Tentative hold duration (hours)"}</label>
                        <input className="field__input num" id="f1880" type="number" readOnly={true} defaultValue={"72"} />
                        <span className="field__hint" data-flow="owner">
                          {"Set in “Rooms are released automatically after” on this page. "}
                          <a href="#main" data-leads-to="RSS-14">{"Change it there"}</a>
                        </span>
                        <span className="field__hint">{"A tentative booking is released after this time"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f1881">{"Longest stay (nights)"}</label>
                        <input className="field__input num" id="f1881" type="number" defaultValue={"30"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f1882">{"Rooms per individual booking (max)"}</label>
                        <input className="field__input num" id="f1882" type="number" min="1" max="10" defaultValue={"5"} />
                        <span className="field__hint">{"6 rooms or more must be made as a group reservation (RS-14) – the New Reservation screen stops at this number"}</span>
                      </div>
                    </div>
                  </fieldset>
                </section>
                <section className="card">
                  <fieldset className="form-section">
                    <legend className="form-section__title">{"Weekend pricing and defaults"}</legend>
                    <div className="form-section__grid">
                      <div className="field">
                        <span className="field__label">{"Weekend nights"}</span>
                        <div className="row">
                          <label className="check">
                            <input className="check__input" type="checkbox" />
                            <span className="check__box" />
                            {"Sun"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" />
                            <span className="check__box" />
                            {"Mon"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" />
                            <span className="check__box" />
                            {"Tue"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" />
                            <span className="check__box" />
                            {"Wed"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" />
                            <span className="check__box" />
                            {"Thu"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" defaultChecked={true} />
                            <span className="check__box" />
                            {"Fri"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" defaultChecked={true} />
                            <span className="check__box" />
                            {"Sat"}
                          </label>
                        </div>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f1883">{"Weekend uplift (%)"}</label>
                        <input className="field__input num" id="f1883" type="number" defaultValue={"10"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f1884">{"Default booking source"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f1884" defaultValue={"Phone"}>
                            <option>{"Aviv mobile app"}</option>
                            <option>{"Aviv website"}</option>
                            <option>{"Booking.com"}</option>
                            <option>{"Agoda"}</option>
                            <option>{"Expedia"}</option>
                            <option>{"MakeMyTrip / Goibibo"}</option>
                            <option>{"EaseMyTrip"}</option>
                            <option>{"Trip.com"}</option>
                            <option>{"Walk-in"}</option>
                            <option>{"Phone"}</option>
                            <option>{"Email"}</option>
                            <option>{"WhatsApp"}</option>
                            <option>{"Travel agent"}</option>
                            <option>{"Company booking"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f1885">{"Default segment"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f1885" defaultValue={"Leisure (FIT)"}>
                            <option>{"Leisure (FIT)"}</option>
                            <option>{"Corporate"}</option>
                            <option>{"Conference & events"}</option>
                            <option>{"Wedding"}</option>
                            <option>{"Travel agent"}</option>
                            <option>{"Online travel agency"}</option>
                            <option>{"Club member"}</option>
                            <option>{"Government"}</option>
                            <option>{"Long stay"}</option>
                            <option>{"Complimentary"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f1886">{"Sign out after idle (minutes)"}</label>
                        <input className="field__input num" id="f1886" type="number" defaultValue={"20"} />
                      </div>
                    </div>
                  </fieldset>
                </section>
                <section className="card">
                  <fieldset className="form-section">
                    <legend className="form-section__title">{"Tentative holds and auto release (decision D02)"}</legend>
                    <div className="form-section__grid">
                      <div className="field">
                        <label className="field__label" htmlFor="f1887">{"Rooms are released automatically after"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f1887" defaultValue={"72 hours (3 days) – preset"}>
                            <option>{"24 hours"}</option>
                            <option>{"48 hours"}</option>
                            <option>{"72 hours (3 days) – preset"}</option>
                            <option>{"96 hours"}</option>
                            <option>{"7 days"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"A tentative booking that is not confirmed by then is released once. Staff can choose a different time on each booking"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f1888">{"Release moment"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f1888" defaultValue={"Same time of day the booking was saved"}>
                            <option>{"Same time of day the booking was saved"}</option>
                            <option>{"A fixed time on the release day"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Exact time and time zone are always shown on the booking"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f1889">{"Warn the owner before release (hours)"}</label>
                        <input className="field__input num" id="f1889" type="number" defaultValue={"12"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f1890">{"Who can extend a hold"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f1890" defaultValue={"Reservation Manager"}>
                            <option>{"Reservation Agent"}</option>
                            <option>{"Reservation Manager"}</option>
                            <option>{"Front Office Manager"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f1891">{"Extensions allowed"}</label>
                        <input className="field__input num" id="f1891" type="number" defaultValue={"1"} />
                        <span className="field__hint">{"Each extension needs a reason"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f1892">{"Release not-guaranteed bookings with no arrival time at"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f1892" defaultValue={"16:00 on the arrival day"}>
                            <option>{"Do not release automatically"}</option>
                            <option>{"16:00 on the arrival day"}</option>
                            <option>{"18:00 on the arrival day"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Property rule for walk-up and phone bookings"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f1893">{"Late arrival hold (hours after the arrival time)"}</label>
                        <input className="field__input num" id="f1893" type="number" defaultValue={"4"} />
                        <span className="field__hint">{"How long a not-guaranteed room is kept for a guest who is late"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Which tentative bookings use up rooms"}</span>
                        <div className="row">
                          <label className="check">
                            <input className="check__input" type="checkbox" defaultChecked={true} />
                            <span className="check__box" />
                            {"Tentative with auto release"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" />
                            <span className="check__box" />
                            {"Tentative without release time (not allowed)"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" defaultChecked={true} />
                            <span className="check__box" />
                            {"Group blocks (deducting)"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" defaultChecked={true} />
                            <span className="check__box" />
                            {"Waitlist offers with a timed hold"}
                          </label>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </section>
                <section className="card">
                  <fieldset className="form-section">
                    <legend className="form-section__title">{"Time and business date"}</legend>
                    <div className="form-section__grid">
                      <div className="field">
                        <label className="field__label" htmlFor="f1894">{"Property time zone"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f1894" disabled={true} defaultValue={"Asia/Kolkata (IST, UTC+05:30)"}>
                            <option>{"Asia/Kolkata (IST, UTC+05:30)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint" data-flow="owner">
                          {"Set in Property Parameters (AD-03). "}
                          <Link data-leads-to="AD-03" to={"/property-administration/ad-03-property-parameters"}>{"Change it there"}</Link>
                        </span>
                        <span className="field__hint">{"All times on the booking are shown in this zone"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f1895">{"Business date moves at"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f1895" disabled={true} defaultValue={"02:00 (night audit)"}>
                            <option>{"02:00 (night audit)"}</option>
                            <option>{"03:00"}</option>
                            <option>{"04:00"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint" data-flow="owner">
                          {"Set in Night audit time, Hotel Details (RSS-02). "}
                          <Link data-leads-to="RSS-02" to={"/setup/rss-02-hotel-details"}>{"Change it there"}</Link>
                        </span>
                        <span className="field__hint">{"The business date can differ from the calendar date after midnight"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f1896">{"Base currency"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f1896" disabled={true} defaultValue={"INR – Indian rupee"}>
                            <option>{"INR – Indian rupee"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint" data-flow="owner">
                          {"Set in Property Parameters (AD-03). "}
                          <Link data-leads-to="AD-03" to={"/property-administration/ad-03-property-parameters"}>{"Change it there"}</Link>
                        </span>
                        <span className="field__hint">{"Other currencies are converted at the dated rate"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f1897">{"Selling horizon (days ahead)"}</label>
                        <input className="field__input num" id="f1897" type="number" readOnly={true} defaultValue={"365"} />
                        <span className="field__hint" data-flow="owner">
                          {"Set in Booking horizon on this page. "}
                          <a href="#main" data-leads-to="RSS-14">{"Change it there"}</a>
                        </span>
                        <span className="field__hint">{"Rates and rules must cover every day inside it"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f1898">{"Child age is counted on"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f1898" defaultValue={"Arrival date"}>
                            <option>{"Arrival date"}</option>
                            <option>{"Each night of the stay"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f1899">{"Meals and extra bed for children above the free age"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f1899" defaultValue={"Charged as an extra adult"}>
                            <option>{"Charged as an extra adult"}</option>
                            <option>{"Charged at the child price"}</option>
                            <option>{"Not charged"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </section>
                <section className="card">
                  <fieldset className="form-section">
                    <legend className="form-section__title">{"Optional features (decision D10)"}</legend>
                    <div className="form-section__grid">
                      <div className="field">
                        <label className="sw">
                          <input type="checkbox" role="switch" />
                          <span className="sw__track" />
                          {"Day-use rooms (check-in and check-out on the same day)"}
                        </label>
                      </div>
                      <div className="field">
                        <label className="sw">
                          <input type="checkbox" role="switch" />
                          <span className="sw__track" />
                          {"Dormitory or bed-wise selling"}
                        </label>
                      </div>
                      <div className="field">
                        <label className="sw">
                          <input type="checkbox" role="switch" />
                          <span className="sw__track" />
                          {"Automatic pricing (see Pricing Rules)"}
                        </label>
                      </div>
                      <div className="s-note">
                        <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#info" />
                        </svg>
                        <span>{"A feature that is switched off never blocks the base release."}</span>
                      </div>
                    </div>
                  </fieldset>
                </section>
                <div className="s-actions s-actions--sticky">
                  <Link className="btn" data-leads-to="RSS-01" to={"/setup/rss-01-setup-home-checklist"}>{"Cancel"}</Link>
                  <a className="btn btn--primary" href="#flow-done">{"Save changes"}</a>
                </div>
              </form>
              <section className="card" data-code="RSS-14-limits">
                <fieldset className="form-section">
                  <legend className="form-section__title">{"Rooms in one booking and group bookings"}</legend>
                  <div className="form-section__grid">
                    <div className="field" data-fw="x">
                      <label className="field__label">{"Most rooms in one individual booking"}</label>
                      <div className="field__wrap">
                        <input aria-label="Most rooms in one individual booking" className="field__input num" type="number" defaultValue={"5"} />
                      </div>
                      <span className="field__hint">{"More rooms are made as a group reservation (RS-14)"}</span>
                    </div>
                    <div className="field">
                      <label className="sw">
                        <input type="checkbox" role="switch" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Turn the booking into a group when a 6th room is added"}
                      </label>
                    </div>
                    <div className="field">
                      <label className="sw">
                        <input type="checkbox" role="switch" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Group rates: enter a price for every room, for single, double and triple, with every meal plan"}
                      </label>
                    </div>
                    <div className="field">
                      <label className="sw">
                        <input type="checkbox" role="switch" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Group stays may use a different meal plan on each day"}
                      </label>
                    </div>
                    <div className="field" data-fw="s">
                      <label className="field__label">{"Group rates are entered by"}</label>
                      <div className="field__wrap">
                        <select aria-label="Group rates are entered by" className="field__input field__input--select" defaultValue={"Reservation Manager and Sales Manager"}>
                          <option>{"Reservation Manager and Sales Manager"}</option>
                          <option>{"Any reservation user"}</option>
                          <option>{"Sales Manager only"}</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </fieldset>
                <fieldset className="form-section">
                  <legend className="form-section__title">{"Room allocation before arrival"}</legend>
                  <div className="form-section__grid">
                    <div className="field">
                      <label className="sw">
                        <input type="checkbox" role="switch" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Allow rooms to be allocated before the guest arrives (RS-25)"}
                      </label>
                    </div>
                    <div className="field" data-fw="x">
                      <label className="field__label">{"Allocate up to (days before arrival)"}</label>
                      <div className="field__wrap">
                        <input aria-label="Allocate up to (days before arrival)" className="field__input num" type="number" defaultValue={"7"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="sw">
                        <input type="checkbox" role="switch" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Allow a room that is still dirty"}
                      </label>
                    </div>
                    <div className="field">
                      <label className="sw">
                        <input type="checkbox" role="switch" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Keep rooms of one booking on the same floor when possible"}
                      </label>
                    </div>
                    <div className="field">
                      <label className="sw">
                        <input type="checkbox" role="switch" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Give a repeat guest their last room when it is free"}
                      </label>
                    </div>
                    <div className="field" data-fw="s">
                      <label className="field__label">{"An allocated room stays changeable until"}</label>
                      <div className="field__wrap">
                        <select aria-label="An allocated room stays changeable until" className="field__input field__input--select" defaultValue={"Check-in"}>
                          <option>{"Check-in"}</option>
                          <option>{"The day before arrival"}</option>
                          <option>{"The morning of arrival"}</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </fieldset>
                <fieldset className="form-section">
                  <legend className="form-section__title">{"Extending or changing an in-house booking"}</legend>
                  <div className="form-section__grid">
                    <div className="field">
                      <label className="sw">
                        <input type="checkbox" role="switch" defaultChecked={true} />
                        <span className="sw__track" />
                        {"In-house and checked-in bookings may be extended or modified"}
                      </label>
                    </div>
                    <div className="field">
                      <label className="field__label">{"Rate for the extra nights"}</label>
                      <div className="field__wrap">
                        <select aria-label="Rate for the extra nights" className="field__input field__input--select" defaultValue={"The rate loaded for each of those dates"}>
                          <option>{"The rate loaded for each of those dates"}</option>
                          <option>{"The same rate as the booked nights"}</option>
                          <option>{"Ask the user each time"}</option>
                        </select>
                      </div>
                      <span className="field__hint">{"Default: each extra night takes the rate loaded for that date (season, rate plan, meal plan)"}</span>
                    </div>
                    <div className="field" data-fw="x">
                      <label className="field__label">{"Discount the user may give on an extension (%)"}</label>
                      <div className="field__wrap">
                        <input aria-label="Discount the user may give on an extension (%)" className="field__input num" type="number" defaultValue={"5"} />
                      </div>
                      <span className="field__hint">{"Above this goes for approval (RS-20)"}</span>
                    </div>
                    <div className="field">
                      <label className="sw">
                        <input type="checkbox" role="switch" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Show the day-by-day rate and the total when a stay is extended"}
                      </label>
                    </div>
                    <div className="field">
                      <label className="sw">
                        <input type="checkbox" role="switch" />
                        <span className="sw__track" />
                        {"Block the extension when no room of the type is free (no over-booking)"}
                      </label>
                    </div>
                  </div>
                </fieldset>
                <fieldset className="form-section" data-code="RSS-14-tax">
                  <legend className="form-section__title">{"Prices with tax included and partner references"}</legend>
                  <div className="form-section__grid">
                    <div className="field">
                      <label className="sw">
                        <input type="checkbox" role="switch" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Allow a booking price to be entered with GST included (reverse calculation)"}
                      </label>
                      <span className="field__hint">{"The room charge and GST are worked out backwards from the agreed price (RS-05). The slab limits come from the Taxes setup (RSS-06)"}</span>
                    </div>
                    <div className="field" data-fw="s">
                      <label className="field__label">{"Price is entered as"}</label>
                      <div className="field__wrap">
                        <select aria-label="Price is entered as" className="field__input field__input--select" defaultValue={"Before GST (tax added on top)"}>
                          <option>{"Before GST (tax added on top)"}</option>
                          <option>{"GST included"}</option>
                        </select>
                      </div>
                      <span className="field__hint">{"What the field starts with on a new reservation"}</span>
                    </div>
                    <div className="field" data-fw="s">
                      <label className="field__label">{"Price between the two slabs (₹7,875 – ₹8,850 including GST)"}</label>
                      <div className="field__wrap">
                        <select aria-label="Price between the two slabs" className="field__input field__input--select" defaultValue={"Use 18 % and flag for review"}>
                          <option>{"Use 18 % and flag for review"}</option>
                          <option>{"Use 5 % and flag for review"}</option>
                          <option>{"Ask the user"}</option>
                        </select>
                      </div>
                    </div>
                    <div className="field">
                      <label className="sw">
                        <input type="checkbox" role="switch" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Show the partner reference number (OTA confirmation no.) on bookings made through a channel"}
                      </label>
                      <span className="field__hint">{"Filled in automatically by the channel manager (RSS-16); printed on the confirmation and the invoice"}</span>
                    </div>
                    <div className="field">
                      <label className="sw">
                        <input type="checkbox" role="switch" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Require a partner reference for every OTA booking typed by hand"}
                      </label>
                    </div>
                  </div>
                </fieldset>
              </section>
              <section className="card" data-code="RSS-14-decisions">
                <h2 className="s-card-title" style={{"marginBottom": "6px"}}>{"Decisions the hotel still has to make"}</h2>
                <p className="field__hint" style={{"marginBottom": "10px"}}>{"Each open decision stays visible here and on the readiness check until someone records it. An open decision is never quietly turned into a live setting. Values from the source papers (check-in 15:00, check-out 12:00, children free up to 11, extra bed ₹1,500, breakfast ₹799, airport transfer ₹1,940, GST 5% and 18%) are values to confirm, not approved settings."}</p>
                <div className="pgw">
                  <div className="s-scroll">
                    <table className="srt dt__table" style={{"--srt-cols": "auto auto auto auto max-content"}} data-mc="">
                      <thead>
                        <tr>
                          <th scope="col">
                            <input className="srt-i srt-a0" type="radio" name="strss140" id="strss140-0a" aria-label="Sort by ID, lowest or A first" />
                            <input className="srt-i srt-d0" type="radio" name="strss140" id="strss140-0d" aria-label="Sort by ID, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="strss140-0a">{"ID"}</label>
                            <label className="srt-l srt-l--d" htmlFor="strss140-0d" aria-hidden="true">{"ID"}</label>
                          </th>
                          <th scope="col">
                            <input className="srt-i srt-a1" type="radio" name="strss140" id="strss140-1a" aria-label="Sort by Decision needed, lowest or A first" />
                            <input className="srt-i srt-d1" type="radio" name="strss140" id="strss140-1d" aria-label="Sort by Decision needed, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="strss140-1a">{"Decision needed"}</label>
                            <label className="srt-l srt-l--d" htmlFor="strss140-1d" aria-hidden="true">{"Decision needed"}</label>
                          </th>
                          <th scope="col">
                            <input className="srt-i srt-a2" type="radio" name="strss140" id="strss140-2a" aria-label="Sort by Suggested owner, lowest or A first" />
                            <input className="srt-i srt-d2" type="radio" name="strss140" id="strss140-2d" aria-label="Sort by Suggested owner, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="strss140-2a">{"Suggested owner"}</label>
                            <label className="srt-l srt-l--d" htmlFor="strss140-2d" aria-hidden="true">{"Suggested owner"}</label>
                          </th>
                          <th scope="col">{"Status"}</th>
                          <th scope="col">
                            <span className="sr-only">{"Action"}</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style={{"--k0": "1", "--k1": "8", "--k2": "3"}}>
                          <td className="dt__td" data-label="ID" data-t="">
                            <strong>{"D01"}</strong>
                          </td>
                          <td className="dt__td" data-label="Decision needed" data-w="">
                            <strong>{"Room register and counts"}</strong>
                            <br />
                            <span className="field__hint">{"Reconcile 92 versus 85; record physical, active and sellable rooms by type."}</span>
                          </td>
                          <td className="dt__td" data-label="Suggested owner" data-w2="">{"Hotel operations"}</td>
                          <td className="dt__td" data-label="Status" data-s="">
                            <span className="pill pill--tentative">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Open"}
                            </span>
                          </td>
                          <td className="dt__td" data-a="">
                            <a className="btn" href="#RSS-14-decision" data-opens="RSS-14-decision">{"Record decision"}</a>
                          </td>
                        </tr>
                        <tr style={{"--k0": "2", "--k1": "9", "--k2": "8"}}>
                          <td className="dt__td" data-label="ID" data-t="">
                            <strong>{"D02"}</strong>
                          </td>
                          <td className="dt__td" data-label="Decision needed" data-w="">
                            <strong>{"Selling horizon and tentative holds"}</strong>
                            <br />
                            <span className="field__hint">{"Configure the horizon, whether each tentative type deducts inventory, expiry and extension authority."}</span>
                          </td>
                          <td className="dt__td" data-label="Suggested owner" data-w2="">{"Reservations lead"}</td>
                          <td className="dt__td" data-label="Status" data-s="">
                            <span className="pill pill--tentative">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Open"}
                            </span>
                          </td>
                          <td className="dt__td" data-a="">
                            <a className="btn" href="#RSS-14-decision" data-opens="RSS-14-decision">{"Record decision"}</a>
                          </td>
                        </tr>
                        <tr style={{"--k0": "3", "--k1": "5", "--k2": "3"}}>
                          <td className="dt__td" data-label="ID" data-t="">
                            <strong>{"D03"}</strong>
                          </td>
                          <td className="dt__td" data-label="Decision needed" data-w="">
                            <strong>{"Occupancy and commercial values"}</strong>
                            <br />
                            <span className="field__hint">{"Validate operating times, child treatment, extra-bed and add-on amounts."}</span>
                          </td>
                          <td className="dt__td" data-label="Suggested owner" data-w2="">{"Hotel operations"}</td>
                          <td className="dt__td" data-label="Status" data-s="">
                            <span className="pill pill--tentative">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Open"}
                            </span>
                          </td>
                          <td className="dt__td" data-a="">
                            <a className="btn" href="#RSS-14-decision" data-opens="RSS-14-decision">{"Record decision"}</a>
                          </td>
                        </tr>
                        <tr style={{"--k0": "4", "--k1": "3", "--k2": "7"}}>
                          <td className="dt__td" data-label="ID" data-t="">
                            <strong>{"D04"}</strong>
                          </td>
                          <td className="dt__td" data-label="Decision needed" data-w="">
                            <strong>{"Guarantee and advance policy"}</strong>
                            <br />
                            <span className="field__hint">{"Accepted guarantees, required amount, deadlines, waiver and part-payment behaviour."}</span>
                          </td>
                          <td className="dt__td" data-label="Suggested owner" data-w2="">{"Reservations and finance"}</td>
                          <td className="dt__td" data-label="Status" data-s="">
                            <span className="pill pill--tentative">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Open"}
                            </span>
                          </td>
                          <td className="dt__td" data-a="">
                            <a className="btn" href="#RSS-14-decision" data-opens="RSS-14-decision">{"Record decision"}</a>
                          </td>
                        </tr>
                        <tr style={{"--k0": "5", "--k1": "2", "--k2": "9"}}>
                          <td className="dt__td" data-label="ID" data-t="">
                            <strong>{"D05"}</strong>
                          </td>
                          <td className="dt__td" data-label="Decision needed" data-w="">
                            <strong>{"Group block and release policy"}</strong>
                            <br />
                            <span className="field__hint">{"Deducting states, cut-off, pickup and return of cancelled members."}</span>
                          </td>
                          <td className="dt__td" data-label="Suggested owner" data-w2="">{"Sales and reservations"}</td>
                          <td className="dt__td" data-label="Status" data-s="">
                            <span className="pill pill--tentative">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Open"}
                            </span>
                          </td>
                          <td className="dt__td" data-a="">
                            <a className="btn" href="#RSS-14-decision" data-opens="RSS-14-decision">{"Record decision"}</a>
                          </td>
                        </tr>
                        <tr style={{"--k0": "6", "--k1": "10", "--k2": "1"}}>
                          <td className="dt__td" data-label="ID" data-t="">
                            <strong>{"D06"}</strong>
                          </td>
                          <td className="dt__td" data-label="Decision needed" data-w="">
                            <strong>{"Taxes and financial treatment"}</strong>
                            <br />
                            <span className="field__hint">{"Effective rules, inclusions, rounding and transition examples; verify the slabs."}</span>
                          </td>
                          <td className="dt__td" data-label="Suggested owner" data-w2="">{"Finance"}</td>
                          <td className="dt__td" data-label="Status" data-s="">
                            <span className="pill pill--tentative">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Open"}
                            </span>
                          </td>
                          <td className="dt__td" data-a="">
                            <a className="btn" href="#RSS-14-decision" data-opens="RSS-14-decision">{"Record decision"}</a>
                          </td>
                        </tr>
                        <tr style={{"--k0": "7", "--k1": "1", "--k2": "4"}}>
                          <td className="dt__td" data-label="ID" data-t="">
                            <strong>{"D07"}</strong>
                          </td>
                          <td className="dt__td" data-label="Decision needed" data-w="">
                            <strong>{"Channel connectivity"}</strong>
                            <br />
                            <span className="field__hint">{"Provider, access route, supported operations, acknowledgements and test needs."}</span>
                          </td>
                          <td className="dt__td" data-label="Suggested owner" data-w2="">{"Integration owner"}</td>
                          <td className="dt__td" data-label="Status" data-s="">
                            <span className="pill pill--tentative">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Open"}
                            </span>
                          </td>
                          <td className="dt__td" data-a="">
                            <a className="btn" href="#RSS-14-decision" data-opens="RSS-14-decision">{"Record decision"}</a>
                          </td>
                        </tr>
                        <tr style={{"--k0": "8", "--k1": "7", "--k2": "6"}}>
                          <td className="dt__td" data-label="ID" data-t="">
                            <strong>{"D08"}</strong>
                          </td>
                          <td className="dt__td" data-label="Decision needed" data-w="">
                            <strong>{"Permissions and approvals"}</strong>
                            <br />
                            <span className="field__hint">{"Action limits, self-approval rule, substitutes, escalation and expiry."}</span>
                          </td>
                          <td className="dt__td" data-label="Suggested owner">{"Product owner and hotel management"}</td>
                          <td className="dt__td" data-label="Status" data-s="">
                            <span className="pill pill--tentative">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Open"}
                            </span>
                          </td>
                          <td className="dt__td" data-a="">
                            <a className="btn" href="#RSS-14-decision" data-opens="RSS-14-decision">{"Record decision"}</a>
                          </td>
                        </tr>
                        <tr style={{"--k0": "9", "--k1": "4", "--k2": "2"}}>
                          <td className="dt__td" data-label="ID" data-t="">
                            <strong>{"D09"}</strong>
                          </td>
                          <td className="dt__td" data-label="Decision needed" data-w="">
                            <strong>{"No-show and overbooking"}</strong>
                            <br />
                            <span className="field__hint">{"Cut-off, late arrival, remaining-night treatment, caps and exception authority."}</span>
                          </td>
                          <td className="dt__td" data-label="Suggested owner" data-w2="">{"Front Office Manager"}</td>
                          <td className="dt__td" data-label="Status" data-s="">
                            <span className="pill pill--tentative">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Open"}
                            </span>
                          </td>
                          <td className="dt__td" data-a="">
                            <a className="btn" href="#RSS-14-decision" data-opens="RSS-14-decision">{"Record decision"}</a>
                          </td>
                        </tr>
                        <tr style={{"--k0": "10", "--k1": "6", "--k2": "5"}}>
                          <td className="dt__td" data-label="ID" data-t="">
                            <strong>{"D10"}</strong>
                          </td>
                          <td className="dt__td" data-label="Decision needed" data-w="">
                            <strong>{"Optional feature scope"}</strong>
                            <br />
                            <span className="field__hint">{"Day-use, dormitory beds and automatic pricing. Disabled features do not block release."}</span>
                          </td>
                          <td className="dt__td" data-label="Suggested owner" data-w2="">{"Product owner"}</td>
                          <td className="dt__td" data-label="Status" data-s="">
                            <span className="pill pill--tentative">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Open"}
                            </span>
                          </td>
                          <td className="dt__td" data-a="">
                            <a className="btn" href="#RSS-14-decision" data-opens="RSS-14-decision">{"Record decision"}</a>
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
                      <input className="pg-in" type="radio" name="pg1r10" id="pg1r10p1" defaultChecked={true} />
                      <label className="pg-n" htmlFor="pg1r10p1" aria-label="Page 1">{"1"}</label>
                      <span className="pg-info">
                        <span>
                          {"Showing "}
                          <b>{"1–10"}</b>
                          {" of 10"}
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
                      <input className="pg-in" type="radio" name="pg1r15" id="pg1r15p1" defaultChecked={true} />
                      <label className="pg-n" htmlFor="pg1r15p1" aria-label="Page 1">{"1"}</label>
                      <span className="pg-info">
                        <span>
                          {"Showing "}
                          <b>{"1–10"}</b>
                          {" of 10"}
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
                      <input className="pg-in" type="radio" name="pg1r20" id="pg1r20p1" defaultChecked={true} />
                      <label className="pg-n" htmlFor="pg1r20p1" aria-label="Page 1">{"1"}</label>
                      <span className="pg-info">
                        <span>
                          {"Showing "}
                          <b>{"1–10"}</b>
                          {" of 10"}
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
                      <input className="pg-in" type="radio" name="pg1r25" id="pg1r25p1" defaultChecked={true} />
                      <label className="pg-n" htmlFor="pg1r25p1" aria-label="Page 1">{"1"}</label>
                      <span className="pg-info">
                        <span>
                          {"Showing "}
                          <b>{"1–10"}</b>
                          {" of 10"}
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
                      <input className="pg-in" type="radio" name="pg1r30" id="pg1r30p1" defaultChecked={true} />
                      <label className="pg-n" htmlFor="pg1r30p1" aria-label="Page 1">{"1"}</label>
                      <span className="pg-info">
                        <span>
                          {"Showing "}
                          <b>{"1–10"}</b>
                          {" of 10"}
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
              <section className="card" data-code="RSS-14-acceptance">
                <h2 className="s-card-title" style={{"marginBottom": "6px"}}>{"Release checks – scenarios to prove before going live"}</h2>
                <p className="field__hint" style={{"marginBottom": "10px"}}>{"These are the checks the hotel and the test team must run on the real system, including repeated, failed and out-of-order cases. For each one, record the property setup, test data, result, booking numbers, time, tester and evidence. A failed check stays open until it is fixed and checked again."}</p>
                <details className="s-more">
                  <summary className="btn">{"Show the 30 scenarios"}</summary>
                  <div className="s-more__panel" style={{"width": "100%"}}>
                    <div className="pgw">
                      <div className="s-scroll">
                        <table className="srt dt__table" style={{"--srt-cols": "auto auto auto auto"}} data-mc="">
                          <thead>
                            <tr>
                              <th scope="col">
                                <input className="srt-i srt-a0" type="radio" name="strss141" id="strss141-0a" aria-label="Sort by ID, lowest or A first" />
                                <input className="srt-i srt-d0" type="radio" name="strss141" id="strss141-0d" aria-label="Sort by ID, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strss141-0a">{"ID"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strss141-0d" aria-hidden="true">{"ID"}</label>
                              </th>
                              <th scope="col">
                                <input className="srt-i srt-a1" type="radio" name="strss141" id="strss141-1a" aria-label="Sort by Scenario, lowest or A first" />
                                <input className="srt-i srt-d1" type="radio" name="strss141" id="strss141-1d" aria-label="Sort by Scenario, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strss141-1a">{"Scenario"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strss141-1d" aria-hidden="true">{"Scenario"}</label>
                              </th>
                              <th scope="col">
                                <input className="srt-i srt-a2" type="radio" name="strss141" id="strss141-2a" aria-label="Sort by Expected result, lowest or A first" />
                                <input className="srt-i srt-d2" type="radio" name="strss141" id="strss141-2d" aria-label="Sort by Expected result, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strss141-2a">{"Expected result"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strss141-2d" aria-hidden="true">{"Expected result"}</label>
                              </th>
                              <th scope="col">{"Result"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr style={{"--k0": "1", "--k1": "30", "--k2": "2"}}>
                              <td className="dt__td" data-label="ID" data-t="">
                                <strong>{"AT01"}</strong>
                              </td>
                              <td className="dt__td" data-label="Scenario">{"Two users save the last room at the same time"}</td>
                              <td className="dt__td" data-label="Expected result" data-w="">{"Capacity is respected; the second user gets a recoverable message (RS-05)"}</td>
                              <td className="dt__td" data-label="Result" data-s="">
                                <span className="pill pill--ooo">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#clock" />
                                  </svg>
                                  {"Not run"}
                                </span>
                              </td>
                            </tr>
                            <tr style={{"--k0": "2", "--k1": "17", "--k2": "7"}}>
                              <td className="dt__td" data-label="ID" data-t="">
                                <strong>{"AT02"}</strong>
                              </td>
                              <td className="dt__td" data-label="Scenario">{"A three-night stay has no room on its middle night"}</td>
                              <td className="dt__td" data-label="Expected result">{"It is not sold as available; alternatives are shown (RS-04)"}</td>
                              <td className="dt__td" data-label="Result" data-s="">
                                <span className="pill pill--ooo">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#clock" />
                                  </svg>
                                  {"Not run"}
                                </span>
                              </td>
                            </tr>
                            <tr style={{"--k0": "3", "--k1": "24", "--k2": "12"}}>
                              <td className="dt__td" data-label="ID" data-t="">
                                <strong>{"AT03"}</strong>
                              </td>
                              <td className="dt__td" data-label="Scenario">{"One guest leaves on the day the next arrives"}</td>
                              <td className="dt__td" data-label="Expected result" data-w="">{"Nights do not overlap; an immediate check-in still checks room readiness (RS-04, RS-09)"}</td>
                              <td className="dt__td" data-label="Result" data-s="">
                                <span className="pill pill--ooo">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#clock" />
                                  </svg>
                                  {"Not run"}
                                </span>
                              </td>
                            </tr>
                            <tr style={{"--k0": "4", "--k1": "16", "--k2": "19"}}>
                              <td className="dt__td" data-label="ID" data-t="">
                                <strong>{"AT04"}</strong>
                              </td>
                              <td className="dt__td" data-label="Scenario">{"A tentative hold expires and the job runs twice"}</td>
                              <td className="dt__td" data-label="Expected result">{"Rooms are released once and the reason is recorded (RS-05, RS-06)"}</td>
                              <td className="dt__td" data-label="Result" data-s="">
                                <span className="pill pill--ooo">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#clock" />
                                  </svg>
                                  {"Not run"}
                                </span>
                              </td>
                            </tr>
                            <tr style={{"--k0": "5", "--k1": "4", "--k2": "26"}}>
                              <td className="dt__td" data-label="ID" data-t="">
                                <strong>{"AT05"}</strong>
                              </td>
                              <td className="dt__td" data-label="Scenario" data-w2="">{"A date change fails"}</td>
                              <td className="dt__td" data-label="Expected result">{"The original dates, price and rooms stay as they were (RS-08)"}</td>
                              <td className="dt__td" data-label="Result" data-s="">
                                <span className="pill pill--ooo">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#clock" />
                                  </svg>
                                  {"Not run"}
                                </span>
                              </td>
                            </tr>
                            <tr style={{"--k0": "6", "--k1": "28", "--k2": "28"}}>
                              <td className="dt__td" data-label="ID" data-t="">
                                <strong>{"AT06"}</strong>
                              </td>
                              <td className="dt__td" data-label="Scenario">{"The same room is assigned to two overlapping stays"}</td>
                              <td className="dt__td" data-label="Expected result">{"The second assignment is refused (RS-09)"}</td>
                              <td className="dt__td" data-label="Result" data-s="">
                                <span className="pill pill--ooo">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#clock" />
                                  </svg>
                                  {"Not run"}
                                </span>
                              </td>
                            </tr>
                            <tr style={{"--k0": "7", "--k1": "7", "--k2": "21"}}>
                              <td className="dt__td" data-label="ID" data-t="">
                                <strong>{"AT07"}</strong>
                              </td>
                              <td className="dt__td" data-label="Scenario">{"A maintenance period overlaps an assigned booking"}</td>
                              <td className="dt__td" data-label="Expected result">{"The booking is flagged and must be moved (RS-09, RS-17)"}</td>
                              <td className="dt__td" data-label="Result" data-s="">
                                <span className="pill pill--ooo">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#clock" />
                                  </svg>
                                  {"Not run"}
                                </span>
                              </td>
                            </tr>
                            <tr style={{"--k0": "8", "--k1": "23", "--k2": "22"}}>
                              <td className="dt__td" data-label="ID" data-t="">
                                <strong>{"AT08"}</strong>
                              </td>
                              <td className="dt__td" data-label="Scenario">{"New prices are published after a booking is confirmed"}</td>
                              <td className="dt__td" data-label="Expected result" data-w="">{"The booking keeps its agreed price; new quotes use the new one (RS-07)"}</td>
                              <td className="dt__td" data-label="Result" data-s="">
                                <span className="pill pill--ooo">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#clock" />
                                  </svg>
                                  {"Not run"}
                                </span>
                              </td>
                            </tr>
                            <tr style={{"--k0": "9", "--k1": "14", "--k2": "5"}}>
                              <td className="dt__td" data-label="ID" data-t="">
                                <strong>{"AT09"}</strong>
                              </td>
                              <td className="dt__td" data-label="Scenario">{"A stay crosses a season or tax-rule boundary"}</td>
                              <td className="dt__td" data-label="Expected result">{"Each night is priced and explained (RS-05c, RSS-06)"}</td>
                              <td className="dt__td" data-label="Result" data-s="">
                                <span className="pill pill--ooo">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#clock" />
                                  </svg>
                                  {"Not run"}
                                </span>
                              </td>
                            </tr>
                            <tr style={{"--k0": "10", "--k1": "22", "--k2": "20"}}>
                              <td className="dt__td" data-label="ID" data-t="">
                                <strong>{"AT10"}</strong>
                              </td>
                              <td className="dt__td" data-label="Scenario">{"Guests or an extra bed exceed the room capacity"}</td>
                              <td className="dt__td" data-label="Expected result">{"Saving is blocked with the exact reason (RS-05)"}</td>
                              <td className="dt__td" data-label="Result" data-s="">
                                <span className="pill pill--ooo">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#clock" />
                                  </svg>
                                  {"Not run"}
                                </span>
                              </td>
                            </tr>
                            <tr style={{"--k0": "11", "--k1": "29", "--k2": "8"}}>
                              <td className="dt__td" data-label="ID" data-t="">
                                <strong>{"AT11"}</strong>
                              </td>
                              <td className="dt__td" data-label="Scenario">{"Two rate rules conflict or a derived-rate loop is created"}</td>
                              <td className="dt__td" data-label="Expected result">{"It is refused until a priority is set (RSS-07, RSS-10)"}</td>
                              <td className="dt__td" data-label="Result" data-s="">
                                <span className="pill pill--ooo">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#clock" />
                                  </svg>
                                  {"Not run"}
                                </span>
                              </td>
                            </tr>
                            <tr style={{"--k0": "12", "--k1": "26", "--k2": "18"}}>
                              <td className="dt__td" data-label="ID" data-t="">
                                <strong>{"AT12"}</strong>
                              </td>
                              <td className="dt__td" data-label="Scenario">{"Rates are missing beyond day 90 inside the selling horizon"}</td>
                              <td className="dt__td" data-label="Expected result">{"Readiness lists the dates and the offer is not sold (RSS-01, RSS-08)"}</td>
                              <td className="dt__td" data-label="Result" data-s="">
                                <span className="pill pill--ooo">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#clock" />
                                  </svg>
                                  {"Not run"}
                                </span>
                              </td>
                            </tr>
                            <tr style={{"--k0": "13", "--k1": "9", "--k2": "27"}}>
                              <td className="dt__td" data-label="ID" data-t="">
                                <strong>{"AT13"}</strong>
                              </td>
                              <td className="dt__td" data-label="Scenario">{"A part advance is below the guarantee requirement"}</td>
                              <td className="dt__td" data-label="Expected result">{"The payment is saved; the guarantee stays Pending (RS-10)"}</td>
                              <td className="dt__td" data-label="Result" data-s="">
                                <span className="pill pill--ooo">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#clock" />
                                  </svg>
                                  {"Not run"}
                                </span>
                              </td>
                            </tr>
                            <tr style={{"--k0": "14", "--k1": "15", "--k2": "15"}}>
                              <td className="dt__td" data-label="ID" data-t="">
                                <strong>{"AT14"}</strong>
                              </td>
                              <td className="dt__td" data-label="Scenario">{"A successful payment confirmation arrives twice"}</td>
                              <td className="dt__td" data-label="Expected result">{"One payment and one receipt (RS-10)"}</td>
                              <td className="dt__td" data-label="Result" data-s="">
                                <span className="pill pill--ooo">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#clock" />
                                  </svg>
                                  {"Not run"}
                                </span>
                              </td>
                            </tr>
                            <tr style={{"--k0": "15", "--k1": "13", "--k2": "23"}}>
                              <td className="dt__td" data-label="ID" data-t="">
                                <strong>{"AT15"}</strong>
                              </td>
                              <td className="dt__td" data-label="Scenario">{"A refund is approved but the provider refund fails"}</td>
                              <td className="dt__td" data-label="Expected result" data-w="">{"The cancellation stands; the refund shows Failed or Retry, never Succeeded (RS-10, RS-12)"}</td>
                              <td className="dt__td" data-label="Result" data-s="">
                                <span className="pill pill--ooo">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#clock" />
                                  </svg>
                                  {"Not run"}
                                </span>
                              </td>
                            </tr>
                            <tr style={{"--k0": "16", "--k1": "10", "--k2": "6"}}>
                              <td className="dt__td" data-label="ID" data-t="">
                                <strong>{"AT16"}</strong>
                              </td>
                              <td className="dt__td" data-label="Scenario">{"A payment succeeds after the booking was cancelled"}</td>
                              <td className="dt__td" data-label="Expected result">{"It goes to reconciliation; the booking is not reactivated (RS-10)"}</td>
                              <td className="dt__td" data-label="Result" data-s="">
                                <span className="pill pill--ooo">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#clock" />
                                  </svg>
                                  {"Not run"}
                                </span>
                              </td>
                            </tr>
                            <tr style={{"--k0": "17", "--k1": "21", "--k2": "1"}}>
                              <td className="dt__td" data-label="ID" data-t="">
                                <strong>{"AT17"}</strong>
                              </td>
                              <td className="dt__td" data-label="Scenario">{"Five members are picked from a 20-room deducting block"}</td>
                              <td className="dt__td" data-label="Expected result">{"20 rooms stay held, not 25 (RS-14)"}</td>
                              <td className="dt__td" data-label="Result" data-s="">
                                <span className="pill pill--ooo">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#clock" />
                                  </svg>
                                  {"Not run"}
                                </span>
                              </td>
                            </tr>
                            <tr style={{"--k0": "18", "--k1": "5", "--k2": "13"}}>
                              <td className="dt__td" data-label="ID" data-t="">
                                <strong>{"AT18"}</strong>
                              </td>
                              <td className="dt__td" data-label="Scenario">{"A group cut-off or rooming-list import is repeated"}</td>
                              <td className="dt__td" data-label="Expected result">{"No duplicate members and no double release (RS-14, RS-15)"}</td>
                              <td className="dt__td" data-label="Result" data-s="">
                                <span className="pill pill--ooo">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#clock" />
                                  </svg>
                                  {"Not run"}
                                </span>
                              </td>
                            </tr>
                            <tr style={{"--k0": "19", "--k1": "25", "--k2": "30"}}>
                              <td className="dt__td" data-label="ID" data-t="">
                                <strong>{"AT19"}</strong>
                              </td>
                              <td className="dt__td" data-label="Scenario">{"One room of a three-room booking is cancelled"}</td>
                              <td className="dt__td" data-label="Expected result">{"Two rooms stay active; the deposit is shared correctly (RS-12)"}</td>
                              <td className="dt__td" data-label="Result" data-s="">
                                <span className="pill pill--ooo">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#clock" />
                                  </svg>
                                  {"Not run"}
                                </span>
                              </td>
                            </tr>
                            <tr style={{"--k0": "20", "--k1": "19", "--k2": "24"}}>
                              <td className="dt__td" data-label="ID" data-t="">
                                <strong>{"AT20"}</strong>
                              </td>
                              <td className="dt__td" data-label="Scenario">{"A waitlist request is for dates after tonight"}</td>
                              <td className="dt__td" data-label="Expected result">{"The night audit keeps it until its own validity ends (RS-16)"}</td>
                              <td className="dt__td" data-label="Result" data-s="">
                                <span className="pill pill--ooo">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#clock" />
                                  </svg>
                                  {"Not run"}
                                </span>
                              </td>
                            </tr>
                            <tr style={{"--k0": "21", "--k1": "8", "--k2": "4"}}>
                              <td className="dt__td" data-label="ID" data-t="">
                                <strong>{"AT21"}</strong>
                              </td>
                              <td className="dt__td" data-label="Scenario">{"A no-show is processed twice, or reinstated later"}</td>
                              <td className="dt__td" data-label="Expected result" data-w="">{"Charges and release happen once; reinstating rechecks rooms and money (RS-13)"}</td>
                              <td className="dt__td" data-label="Result" data-s="">
                                <span className="pill pill--ooo">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#clock" />
                                  </svg>
                                  {"Not run"}
                                </span>
                              </td>
                            </tr>
                            <tr style={{"--k0": "22", "--k1": "20", "--k2": "25"}}>
                              <td className="dt__td" data-label="ID" data-t="">
                                <strong>{"AT22"}</strong>
                              </td>
                              <td className="dt__td" data-label="Scenario">{"An approved change is applied after someone else edited the booking"}</td>
                              <td className="dt__td" data-label="Expected result">{"The old request is rechecked or marked Superseded (RS-08, RS-20)"}</td>
                              <td className="dt__td" data-label="Result" data-s="">
                                <span className="pill pill--ooo">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#clock" />
                                  </svg>
                                  {"Not run"}
                                </span>
                              </td>
                            </tr>
                            <tr style={{"--k0": "23", "--k1": "6", "--k2": "14"}}>
                              <td className="dt__td" data-label="ID" data-t="">
                                <strong>{"AT23"}</strong>
                              </td>
                              <td className="dt__td" data-label="Scenario">{"A guest deposit is handed to Front Desk twice"}</td>
                              <td className="dt__td" data-label="Expected result">{"One folio entry; both sides agree (RS-10)"}</td>
                              <td className="dt__td" data-label="Result" data-s="">
                                <span className="pill pill--ooo">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#clock" />
                                  </svg>
                                  {"Not run"}
                                </span>
                              </td>
                            </tr>
                            <tr style={{"--k0": "24", "--k1": "18", "--k2": "29"}}>
                              <td className="dt__td" data-label="ID" data-t="">
                                <strong>{"AT24"}</strong>
                              </td>
                              <td className="dt__td" data-label="Scenario">{"A user without permission calls a refund or another property"}</td>
                              <td className="dt__td" data-label="Expected result">{"The server refuses it and records the event (CM)"}</td>
                              <td className="dt__td" data-label="Result" data-s="">
                                <span className="pill pill--ooo">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#clock" />
                                  </svg>
                                  {"Not run"}
                                </span>
                              </td>
                            </tr>
                            <tr style={{"--k0": "25", "--k1": "27", "--k2": "17"}}>
                              <td className="dt__td" data-label="ID" data-t="">
                                <strong>{"AT25"}</strong>
                              </td>
                              <td className="dt__td" data-label="Scenario">{"The same external booking message arrives twice"}</td>
                              <td className="dt__td" data-label="Expected result" data-w2="">{"One reservation (RS-23)"}</td>
                              <td className="dt__td" data-label="Result" data-s="">
                                <span className="pill pill--ooo">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#clock" />
                                  </svg>
                                  {"Not run"}
                                </span>
                              </td>
                            </tr>
                            <tr style={{"--k0": "26", "--k1": "2", "--k2": "10"}}>
                              <td className="dt__td" data-label="ID" data-t="">
                                <strong>{"AT26"}</strong>
                              </td>
                              <td className="dt__td" data-label="Scenario">{"A channel change arrives before its booking, or after a newer one"}</td>
                              <td className="dt__td" data-label="Expected result">{"It waits or is ignored; nothing is duplicated or rolled back (RS-23)"}</td>
                              <td className="dt__td" data-label="Result" data-s="">
                                <span className="pill pill--ooo">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#clock" />
                                  </svg>
                                  {"Not run"}
                                </span>
                              </td>
                            </tr>
                            <tr style={{"--k0": "27", "--k1": "12", "--k2": "16"}}>
                              <td className="dt__td" data-label="ID" data-t="">
                                <strong>{"AT27"}</strong>
                              </td>
                              <td className="dt__td" data-label="Scenario">{"A rate update comes from setup and from a booking"}</td>
                              <td className="dt__td" data-label="Expected result">{"One publisher records it without sending twice (RSS-08, RS-23)"}</td>
                              <td className="dt__td" data-label="Result" data-s="">
                                <span className="pill pill--ooo">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#clock" />
                                  </svg>
                                  {"Not run"}
                                </span>
                              </td>
                            </tr>
                            <tr style={{"--k0": "28", "--k1": "3", "--k2": "3"}}>
                              <td className="dt__td" data-label="ID" data-t="">
                                <strong>{"AT28"}</strong>
                              </td>
                              <td className="dt__td" data-label="Scenario">{"A channel is down while local bookings continue"}</td>
                              <td className="dt__td" data-label="Expected result">{"Changes wait and are sent when it returns (RS-23)"}</td>
                              <td className="dt__td" data-label="Result" data-s="">
                                <span className="pill pill--ooo">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#clock" />
                                  </svg>
                                  {"Not run"}
                                </span>
                              </td>
                            </tr>
                            <tr style={{"--k0": "29", "--k1": "11", "--k2": "11"}}>
                              <td className="dt__td" data-label="ID" data-t="">
                                <strong>{"AT29"}</strong>
                              </td>
                              <td className="dt__td" data-label="Scenario">{"A rate plan used by future bookings is retired"}</td>
                              <td className="dt__td" data-label="Expected result" data-w="">{"New selection stops; existing bookings stay readable (RSS-07, RSS-P26)"}</td>
                              <td className="dt__td" data-label="Result" data-s="">
                                <span className="pill pill--ooo">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#clock" />
                                  </svg>
                                  {"Not run"}
                                </span>
                              </td>
                            </tr>
                            <tr style={{"--k0": "30", "--k1": "1", "--k2": "9"}}>
                              <td className="dt__td" data-label="ID" data-t="">
                                <strong>{"AT30"}</strong>
                              </td>
                              <td className="dt__td" data-label="Scenario">{"A background worker stops during a release or refund"}</td>
                              <td className="dt__td" data-label="Expected result">{"It restarts without repeating any money or room action"}</td>
                              <td className="dt__td" data-label="Result" data-s="">
                                <span className="pill pill--ooo">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#clock" />
                                  </svg>
                                  {"Not run"}
                                </span>
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
                          <input className="pg-in" type="radio" name="pg2r10" id="pg2r10p1" defaultChecked={true} />
                          <label className="pg-n" htmlFor="pg2r10p1" aria-label="Page 1">{"1"}</label>
                          <input className="pg-in" type="radio" name="pg2r10" id="pg2r10p2" />
                          <label className="pg-n" htmlFor="pg2r10p2" aria-label="Page 2">{"2"}</label>
                          <input className="pg-in" type="radio" name="pg2r10" id="pg2r10p3" />
                          <label className="pg-n" htmlFor="pg2r10p3" aria-label="Page 3">{"3"}</label>
                          <span className="pg-info">
                            <span>
                              {"Showing "}
                              <b>{"1–10"}</b>
                              {" of 30"}
                            </span>
                            <span>
                              {"Showing "}
                              <b>{"11–20"}</b>
                              {" of 30"}
                            </span>
                            <span>
                              {"Showing "}
                              <b>{"21–30"}</b>
                              {" of 30"}
                            </span>
                          </span>
                          <span className="pg-prev">
                            <span className="pg-arr is-off">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-left" />
                              </svg>
                            </span>
                            <label className="pg-arr" htmlFor="pg2r10p1" title="Previous page">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-left" />
                              </svg>
                            </label>
                            <label className="pg-arr" htmlFor="pg2r10p2" title="Previous page">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-left" />
                              </svg>
                            </label>
                          </span>
                          <span className="pg-next">
                            <label className="pg-arr" htmlFor="pg2r10p2" title="Next page">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-right" />
                              </svg>
                            </label>
                            <label className="pg-arr" htmlFor="pg2r10p3" title="Next page">
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
                          <input className="pg-in" type="radio" name="pg2r15" id="pg2r15p1" defaultChecked={true} />
                          <label className="pg-n" htmlFor="pg2r15p1" aria-label="Page 1">{"1"}</label>
                          <input className="pg-in" type="radio" name="pg2r15" id="pg2r15p2" />
                          <label className="pg-n" htmlFor="pg2r15p2" aria-label="Page 2">{"2"}</label>
                          <span className="pg-info">
                            <span>
                              {"Showing "}
                              <b>{"1–15"}</b>
                              {" of 30"}
                            </span>
                            <span>
                              {"Showing "}
                              <b>{"16–30"}</b>
                              {" of 30"}
                            </span>
                          </span>
                          <span className="pg-prev">
                            <span className="pg-arr is-off">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-left" />
                              </svg>
                            </span>
                            <label className="pg-arr" htmlFor="pg2r15p1" title="Previous page">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-left" />
                              </svg>
                            </label>
                          </span>
                          <span className="pg-next">
                            <label className="pg-arr" htmlFor="pg2r15p2" title="Next page">
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
                          <input className="pg-in" type="radio" name="pg2r20" id="pg2r20p1" defaultChecked={true} />
                          <label className="pg-n" htmlFor="pg2r20p1" aria-label="Page 1">{"1"}</label>
                          <input className="pg-in" type="radio" name="pg2r20" id="pg2r20p2" />
                          <label className="pg-n" htmlFor="pg2r20p2" aria-label="Page 2">{"2"}</label>
                          <span className="pg-info">
                            <span>
                              {"Showing "}
                              <b>{"1–20"}</b>
                              {" of 30"}
                            </span>
                            <span>
                              {"Showing "}
                              <b>{"21–30"}</b>
                              {" of 30"}
                            </span>
                          </span>
                          <span className="pg-prev">
                            <span className="pg-arr is-off">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-left" />
                              </svg>
                            </span>
                            <label className="pg-arr" htmlFor="pg2r20p1" title="Previous page">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-left" />
                              </svg>
                            </label>
                          </span>
                          <span className="pg-next">
                            <label className="pg-arr" htmlFor="pg2r20p2" title="Next page">
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
                          <input className="pg-in" type="radio" name="pg2r25" id="pg2r25p1" defaultChecked={true} />
                          <label className="pg-n" htmlFor="pg2r25p1" aria-label="Page 1">{"1"}</label>
                          <input className="pg-in" type="radio" name="pg2r25" id="pg2r25p2" />
                          <label className="pg-n" htmlFor="pg2r25p2" aria-label="Page 2">{"2"}</label>
                          <span className="pg-info">
                            <span>
                              {"Showing "}
                              <b>{"1–25"}</b>
                              {" of 30"}
                            </span>
                            <span>
                              {"Showing "}
                              <b>{"26–30"}</b>
                              {" of 30"}
                            </span>
                          </span>
                          <span className="pg-prev">
                            <span className="pg-arr is-off">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-left" />
                              </svg>
                            </span>
                            <label className="pg-arr" htmlFor="pg2r25p1" title="Previous page">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-left" />
                              </svg>
                            </label>
                          </span>
                          <span className="pg-next">
                            <label className="pg-arr" htmlFor="pg2r25p2" title="Next page">
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
                          <input className="pg-in" type="radio" name="pg2r30" id="pg2r30p1" defaultChecked={true} />
                          <label className="pg-n" htmlFor="pg2r30p1" aria-label="Page 1">{"1"}</label>
                          <span className="pg-info">
                            <span>
                              {"Showing "}
                              <b>{"1–30"}</b>
                              {" of 30"}
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
                  </div>
                </details>
              </section>
              <div className="modal" id="RSS-14-decision" data-code="RSS-14-decision" role="dialog" aria-modal="true" aria-labelledby="RSS-14-decision-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-14-decision-t">{"Record a decision"}</h2>
                      <p className="modal__desc">{"Kept with the change history"}</p>
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
                        <label className="field__label" htmlFor="f1900">{"Decision"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f1900" defaultValue={"D01 – Room register and counts"}>
                            <option>{"D01 – Room register and counts"}</option>
                            <option>{"D02 – Selling horizon and tentative holds"}</option>
                            <option>{"D03 – Occupancy and commercial values"}</option>
                            <option>{"D04 – Guarantee and advance policy"}</option>
                            <option>{"D05 – Group block and release policy"}</option>
                            <option>{"D06 – Taxes and financial treatment"}</option>
                            <option>{"D07 – Channel connectivity"}</option>
                            <option>{"D08 – Permissions and approvals"}</option>
                            <option>{"D09 – No-show and overbooking"}</option>
                            <option>{"D10 – Optional feature scope"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f1901">
                          {"Chosen value or rule "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f1901" type="text" required={true} defaultValue={""} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f1902">{"Effective from"}</label>
                        <div className="dpk">
                          <button type="button" className="dpk-f field__input" id="f1902" aria-haspopup="dialog">
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#calendar" />
                            </svg>
                            <span className="dpk-f__v">
                              <span className="dpk-f__d" />
                              {" "}
                              <span className="dpk-f__m" />
                              {" "}
                              <span className="dpk-f__y" />
                            </span>
                            <span className="dpk-f__ph">{"Select date"}</span>
                          </button>
                          <div className="dpk-pop" tabIndex="-1" role="dialog" aria-label="Choose a date">
                            <div className="dpk-h">
                              <select className="dpk-m" name="f1902-month" aria-label="Month" defaultValue={"10"}>
                                <option value="01">{"Jan"}</option>
                                <option value="02">{"Feb"}</option>
                                <option value="03">{"Mar"}</option>
                                <option value="04">{"Apr"}</option>
                                <option value="05">{"May"}</option>
                                <option value="06">{"Jun"}</option>
                                <option value="07">{"Jul"}</option>
                                <option value="08">{"Aug"}</option>
                                <option value="09">{"Sep"}</option>
                                <option value="10">{"Oct"}</option>
                                <option value="11">{"Nov"}</option>
                                <option value="12">{"Dec"}</option>
                              </select>
                              <select className="dpk-y" name="f1902-year" aria-label="Year" defaultValue={"2026"}>
                                <option value="2024" className="lp">{"2024"}</option>
                                <option value="2025">{"2025"}</option>
                                <option value="2026">{"2026"}</option>
                                <option value="2027">{"2027"}</option>
                                <option value="2028" className="lp">{"2028"}</option>
                                <option value="2029">{"2029"}</option>
                                <option value="2030">{"2030"}</option>
                              </select>
                            </div>
                            <div className="dpk-g">
                              <span className="dpk-w">{"Mo"}</span>
                              <span className="dpk-w">{"Tu"}</span>
                              <span className="dpk-w">{"We"}</span>
                              <span className="dpk-w">{"Th"}</span>
                              <span className="dpk-w">{"Fr"}</span>
                              <span className="dpk-w">{"Sa"}</span>
                              <span className="dpk-w">{"Su"}</span>
                              <label className="dpk-d">
                                <input type="radio" name="f1902" value="01" />
                                {"1"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f1902" value="02" />
                                {"2"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f1902" value="03" />
                                {"3"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f1902" value="04" />
                                {"4"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f1902" value="05" />
                                {"5"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f1902" value="06" />
                                {"6"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f1902" value="07" />
                                {"7"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f1902" value="08" />
                                {"8"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f1902" value="09" />
                                {"9"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f1902" value="10" />
                                {"10"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f1902" value="11" />
                                {"11"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f1902" value="12" />
                                {"12"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f1902" value="13" />
                                {"13"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f1902" value="14" />
                                {"14"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f1902" value="15" />
                                {"15"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f1902" value="16" />
                                {"16"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f1902" value="17" />
                                {"17"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f1902" value="18" />
                                {"18"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f1902" value="19" />
                                {"19"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f1902" value="20" />
                                {"20"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f1902" value="21" />
                                {"21"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f1902" value="22" defaultChecked={true} />
                                {"22"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f1902" value="23" />
                                {"23"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f1902" value="24" />
                                {"24"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f1902" value="25" />
                                {"25"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f1902" value="26" />
                                {"26"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f1902" value="27" />
                                {"27"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f1902" value="28" />
                                {"28"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f1902" value="29" />
                                {"29"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f1902" value="30" />
                                {"30"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f1902" value="31" />
                                {"31"}
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f1903">
                          {"Approved by "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f1903" type="text" required={true} defaultValue={""} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f1904">{"Evidence"}</label>
                      <input className="field__input" id="f1904" type="text" defaultValue={""} />
                      <span className="field__hint">{"Document, e-mail or meeting reference"}</span>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f1905">{"Screens affected"}</label>
                      <input className="field__input" id="f1905" type="text" defaultValue={""} />
                      <span className="field__hint">{"e.g. RSS-04, RSS-14, RS-05"}</span>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save decision"}</a>
                  </div>
                </form>
              </div>
              <details className="helpbox">
                <summary>
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#help" />
                  </svg>
                  {" Help for this screen "}
                  <span className="code-chip">{"RSS-14"}</span>
                </summary>
                <dl className="helpbox__body">
                  <dt>{"What it is for"}</dt>
                  <dd>{"Check-in 3 pm / out 12 noon, children ≤11 free, extra bed ₹1,500, option days, max stay"}</dd>
                  <dt>{"Opened from"}</dt>
                  <dd>
                    <Link to={"/setup/rss-01-setup-home-checklist"}>{"RSS-01"}</Link>
                  </dd>
                  <dt>{"Leads to"}</dt>
                  <dd>
                    <Link to={"/setup/rss-01-setup-home-checklist"}>{"RSS-01"}</Link>
                  </dd>
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
                        <td className="dt__td" data-label="List" data-w2="" data-t="">{"Guarantee types"}</td>
                        <td className="dt__td" data-label="Values" data-w2="">{"None, Advance payment, Card, Company guarantee, Travel agent guarantee, OTA prepaid"}</td>
                        <td className="dt__td" data-label="Used on" data-w2="">{"RS-05, RS-10"}</td>
                      </tr>
                      <tr>
                        <td className="dt__td" data-label="List" data-w2="" data-t="">{"Request progress"}</td>
                        <td className="dt__td" data-label="Values" data-w2="">{"Requested, Acknowledged by the department, Done, Could not be done"}</td>
                        <td className="dt__td" data-label="Used on" data-w2="">{"RS-05"}</td>
                      </tr>
                      <tr>
                        <td className="dt__td" data-label="List" data-w2="" data-t="">{"How the guest agreed / consent source"}</td>
                        <td className="dt__td" data-label="Values" data-w2="">{"Booking form, Website, At check-in, Phone call, Signed form, Online / app, Other"}</td>
                        <td className="dt__td" data-label="Used on" data-w2="">{"RS-05, RS-18"}</td>
                      </tr>
                      <tr>
                        <td className="dt__td" data-label="List" data-w2="" data-t="">{"Group types"}</td>
                        <td className="dt__td" data-label="Values" data-w2="">{"Wedding / family, Corporate, Conference, Tour group, Sports / event team, Other"}</td>
                        <td className="dt__td" data-label="Used on" data-w2="">{"RS-05, RS-14"}</td>
                      </tr>
                      <tr>
                        <td className="dt__td" data-label="List" data-w2="" data-t="">{"Group block types and member cancellation"}</td>
                        <td className="dt__td" data-label="Values" data-w2="">{"Deducting, Non-deducting · room goes back to the group block, Room goes to general sale"}</td>
                        <td className="dt__td" data-label="Used on" data-w2="">{"RS-14"}</td>
                      </tr>
                      <tr>
                        <td className="dt__td" data-label="List" data-w2="" data-t="">{"Group payment responsibility"}</td>
                        <td className="dt__td" data-label="Values" data-w2="">{"Master bill: rooms and tax, Master bill: everything, Each guest pays their own"}</td>
                        <td className="dt__td" data-label="Used on" data-w2="">{"RS-14"}</td>
                      </tr>
                      <tr>
                        <td className="dt__td" data-label="List" data-w2="" data-t="">{"Enquiry hold"}</td>
                        <td className="dt__td" data-label="Values" data-w2="">{"Do not hold, Hold 24 hours, Hold 48 hours, Hold 72 hours"}</td>
                        <td className="dt__td" data-label="Used on" data-w2="">{"RS-02"}</td>
                      </tr>
                      <tr>
                        <td className="dt__td" data-label="List" data-w2="" data-t="">{"No-show: remaining nights"}</td>
                        <td className="dt__td" data-label="Values" data-w2="">{"Apply the policy, Keep all remaining nights, Release all remaining nights"}</td>
                        <td className="dt__td" data-label="Used on" data-w2="">{"RS-13"}</td>
                      </tr>
                      <tr>
                        <td className="dt__td" data-label="List" data-w2="" data-t="">{"Rooming list import"}</td>
                        <td className="dt__td" data-label="Values" data-w2="">{"Add new members only, Update matching members, Replace unpicked rows"}</td>
                        <td className="dt__td" data-label="Used on" data-w2="">{"RS-15"}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
              <div className="modal modal--sm" id="flow-done" data-flow="flow-done" role="dialog" aria-modal="true" aria-labelledby="flow-done-t">
                <a className="modal__backdrop" href="#" aria-label="Close" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="flow-done-t">{"Done"}</h2>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close" />
                  </div>
                  <div className="modal__body">
                    <p className="field__hint">{"The action is recorded with your name and the time. In the live system this saves the entry and updates the screens that read it."}</p>
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
