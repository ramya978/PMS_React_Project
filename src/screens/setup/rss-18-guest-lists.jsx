// GENERATED from public/setup/rss-18-guest-lists/index.html by scripts/convert_legacy.py.
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
    "href": "/setup/rss-18-guest-lists/rss-18-guest-lists.css",
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

export default function SetupRss18GuestLists() {
  return (
    <ScreenShell title="Guest Lists" sheets={SHEETS} inlineCss={INLINE_CSS}>
      <div data-screen="RSS-18" data-code="RSS-18" data-static="1" className="legacy-body">
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
            <main className="app__content" id="main" data-code="RSS-18" tabIndex="-1">
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
                        <span aria-current="page">{"Guest Lists"}</span>
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="page-header__row">
                  <div className="page-header__text">
                    <h1 className="page-header__title">{"Guest Lists"}</h1>
                  </div>
                  <span className="code-chip" title="Screen code">{"RSS-18"}</span>
                  <div className="page-header__actions">
                    <a className="btn btn--primary" href="#RSS-P15-new" data-opens="RSS-P15">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#plus" />
                      </svg>
                      {"Add item"}
                    </a>
                  </div>
                </div>
              </header>
              <div className="stabs">
                <input type="radio" name="gl" id="gl-1" aria-label="VIP levels" defaultChecked={true} />
                <input type="radio" name="gl" id="gl-2" aria-label="Preferences" />
                <input type="radio" name="gl" id="gl-3" aria-label="Titles" />
                <input type="radio" name="gl" id="gl-4" aria-label="Countries & states" />
                <input type="radio" name="gl" id="gl-5" aria-label="Guest classes" />
                <div className="stabs__list" role="tablist">
                  <label htmlFor="gl-1">
                    {"VIP levels"}
                    <span className="stabs__n">{"4"}</span>
                  </label>
                  <label htmlFor="gl-2">
                    {"Preferences"}
                    <span className="stabs__n">{"12"}</span>
                  </label>
                  <label htmlFor="gl-3">
                    {"Titles"}
                    <span className="stabs__n">{"8"}</span>
                  </label>
                  <label htmlFor="gl-4">
                    {"Countries & states"}
                    <span className="stabs__n">{"56"}</span>
                  </label>
                  <label htmlFor="gl-5">{"Guest classes"}</label>
                </div>
                <div className="stabs__panels">
                  <section className="stabs__panel" data-code="RSS-18-1" aria-label="VIP levels">
                    <div className="pgw">
                      <div className="s-scroll">
                        <table className="srt  dt__table dt--hug" data-code="RSS-18-1-list" style={{"--srt-cols": "auto auto auto max-content"}} data-mc="">
                          <caption className="sr-only">{"VIP levels"}</caption>
                          <thead>
                            <tr>
                              <th scope="col">
                                <input className="srt-i srt-a0" type="radio" name="strss186" id="strss186-0a" aria-label="Sort by Code, lowest or A first" />
                                <input className="srt-i srt-d0" type="radio" name="strss186" id="strss186-0d" aria-label="Sort by Code, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strss186-0a">{"Code"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strss186-0d" aria-hidden="true">{"Code"}</label>
                              </th>
                              <th scope="col">
                                <input className="srt-i srt-a1" type="radio" name="strss186" id="strss186-1a" aria-label="Sort by Level, lowest or A first" />
                                <input className="srt-i srt-d1" type="radio" name="strss186" id="strss186-1d" aria-label="Sort by Level, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strss186-1a">{"Level"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strss186-1d" aria-hidden="true">{"Level"}</label>
                              </th>
                              <th scope="col">{"Status"}</th>
                              <th scope="col" />
                            </tr>
                          </thead>
                          <tbody>
                            <tr style={{"--k0": "1", "--k1": "2"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"VIP-A"}</strong>
                              </td>
                              <td className="dt__td" data-label="Level" data-w2="">{"Owner / General Manager guest"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-vip-a" data-opens="RSS-P15" aria-label="Edit Owner / General Manager guest">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "2", "--k1": "1"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"VIP-B"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Level" data-w2="">{"Government dignitary"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-vip-b" data-opens="RSS-P15" aria-label="Edit Government dignitary">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "3", "--k1": "3"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"VIP-C"}</strong>
                              </td>
                              <td className="dt__td" data-label="Level" data-w2="">{"Repeat guest (5+ stays)"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-vip-c" data-opens="RSS-P15" aria-label="Edit Repeat guest (5+ stays)">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "4", "--k1": "4"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"VIP-D"}</strong>
                              </td>
                              <td className="dt__td" data-label="Level" data-w2="">{"Travel media / influencer"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-vip-d" data-opens="RSS-P15" aria-label="Edit Travel media / influencer">{"Edit"}</a>
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
                              <b>{"1–4"}</b>
                              {" of 4"}
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
                              <b>{"1–4"}</b>
                              {" of 4"}
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
                              <b>{"1–4"}</b>
                              {" of 4"}
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
                              <b>{"1–4"}</b>
                              {" of 4"}
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
                              <b>{"1–4"}</b>
                              {" of 4"}
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
                  <section className="stabs__panel" data-code="RSS-18-2" aria-label="Preferences">
                    <div className="pgw">
                      <div className="s-scroll">
                        <table className="srt  dt__table dt--hug" data-code="RSS-18-2-list" style={{"--srt-cols": "auto auto auto auto max-content"}} data-mc="">
                          <caption className="sr-only">{"Preferences"}</caption>
                          <thead>
                            <tr>
                              <th scope="col">
                                <input className="srt-i srt-a0" type="radio" name="strss187" id="strss187-0a" aria-label="Sort by Code, lowest or A first" />
                                <input className="srt-i srt-d0" type="radio" name="strss187" id="strss187-0d" aria-label="Sort by Code, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strss187-0a">{"Code"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strss187-0d" aria-hidden="true">{"Code"}</label>
                              </th>
                              <th scope="col">
                                <input className="srt-i srt-a1" type="radio" name="strss187" id="strss187-1a" aria-label="Sort by Preference, lowest or A first" />
                                <input className="srt-i srt-d1" type="radio" name="strss187" id="strss187-1d" aria-label="Sort by Preference, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strss187-1a">{"Preference"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strss187-1d" aria-hidden="true">{"Preference"}</label>
                              </th>
                              <th scope="col">
                                <input className="srt-i srt-a2" type="radio" name="strss187" id="strss187-2a" aria-label="Sort by Group, lowest or A first" />
                                <input className="srt-i srt-d2" type="radio" name="strss187" id="strss187-2d" aria-label="Sort by Group, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strss187-2a">{"Group"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strss187-2d" aria-hidden="true">{"Group"}</label>
                              </th>
                              <th scope="col">{"Status"}</th>
                              <th scope="col" />
                            </tr>
                          </thead>
                          <tbody>
                            <tr style={{"--k0": "4", "--k1": "5", "--k2": "3"}}>
                              <td className="dt__td nw" data-label="Code" data-w2="" data-t="">
                                <strong>{"HIGHFLOOR"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Preference" data-w2="">{"High floor"}</td>
                              <td className="dt__td nw" data-label="Group">{"Room"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-pf-highfloor" data-opens="RSS-P15" aria-label="Edit High floor">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "11", "--k1": "11", "--k2": "3"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"QUIET"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Preference" data-w2="">{"Quiet room"}</td>
                              <td className="dt__td nw" data-label="Group">{"Room"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-pf-quiet" data-opens="RSS-P15" aria-label="Edit Quiet room">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "6", "--k1": "7", "--k2": "3"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"KING"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Preference" data-w2="">{"King bed"}</td>
                              <td className="dt__td nw" data-label="Group">{"Room"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-pf-king" data-opens="RSS-P15" aria-label="Edit King bed">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "12", "--k1": "12", "--k2": "3"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"TWIN"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Preference" data-w2="">{"Twin beds"}</td>
                              <td className="dt__td nw" data-label="Group">{"Room"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-pf-twin" data-opens="RSS-P15" aria-label="Edit Twin beds">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "8", "--k1": "9", "--k2": "3"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"NOSMOKE"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Preference" data-w2="">{"Non-smoking"}</td>
                              <td className="dt__td nw" data-label="Group">{"Room"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-pf-nonsmoking" data-opens="RSS-P15" aria-label="Edit Non-smoking">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "10", "--k1": "4", "--k2": "4"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"PILLOWS"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Preference" data-w2="">{"Extra pillows"}</td>
                              <td className="dt__td nw" data-label="Group">{"Service"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-pf-pillows" data-opens="RSS-P15" aria-label="Edit Extra pillows">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "2", "--k1": "2", "--k2": "1"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"COT"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Preference" data-w2="">{"Baby cot"}</td>
                              <td className="dt__td nw" data-label="Group">{"Family"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-pf-cot" data-opens="RSS-P15" aria-label="Edit Baby cot">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "13", "--k1": "13", "--k2": "2"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"VEG"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Preference" data-w2="">{"Vegetarian meals"}</td>
                              <td className="dt__td nw" data-label="Group">{"Food"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-pf-veg" data-opens="RSS-P15" aria-label="Edit Vegetarian meals">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "5", "--k1": "6", "--k2": "2"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"JAIN"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Preference" data-w2="">{"Jain meals"}</td>
                              <td className="dt__td nw" data-label="Group">{"Food"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-pf-jain" data-opens="RSS-P15" aria-label="Edit Jain meals">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "9", "--k1": "10", "--k2": "2"}}>
                              <td className="dt__td nw" data-label="Code" data-w2="" data-t="">
                                <strong>{"NUTALLERGY"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Preference" data-w2="">{"Nut allergy"}</td>
                              <td className="dt__td nw" data-label="Group">{"Food"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-pf-nuts" data-opens="RSS-P15" aria-label="Edit Nut allergy">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "3", "--k1": "3", "--k2": "4"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"EARLYCI"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Preference" data-w2="">{"Early check-in"}</td>
                              <td className="dt__td nw" data-label="Group">{"Service"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-pf-early" data-opens="RSS-P15" aria-label="Edit Early check-in">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "7", "--k1": "8", "--k2": "4"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"LATECO"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Preference" data-w2="">{"Late check-out"}</td>
                              <td className="dt__td nw" data-label="Group">{"Service"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-pf-late" data-opens="RSS-P15" aria-label="Edit Late check-out">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "1", "--k1": "1", "--k2": "3"}}>
                              <td className="dt__td nw" data-label="Code" data-w2="" data-t="">
                                <strong>{"ACCESSIBLE"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Preference" data-w2="">{"Accessible room"}</td>
                              <td className="dt__td nw" data-label="Group">{"Room"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-pref-accessible" data-opens="RSS-P15" aria-label="Edit Accessible room">{"Edit"}</a>
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
                          <span className="pg-info">
                            <span>
                              {"Showing "}
                              <b>{"1–10"}</b>
                              {" of 12"}
                            </span>
                            <span>
                              {"Showing "}
                              <b>{"11–12"}</b>
                              {" of 12"}
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
                          </span>
                          <span className="pg-next">
                            <label className="pg-arr" htmlFor="pg2r10p2" title="Next page">
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
                          <span className="pg-info">
                            <span>
                              {"Showing "}
                              <b>{"1–12"}</b>
                              {" of 12"}
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
                          <input className="pg-in" type="radio" name="pg2r20" id="pg2r20p1" defaultChecked={true} />
                          <label className="pg-n" htmlFor="pg2r20p1" aria-label="Page 1">{"1"}</label>
                          <span className="pg-info">
                            <span>
                              {"Showing "}
                              <b>{"1–12"}</b>
                              {" of 12"}
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
                          <input className="pg-in" type="radio" name="pg2r25" id="pg2r25p1" defaultChecked={true} />
                          <label className="pg-n" htmlFor="pg2r25p1" aria-label="Page 1">{"1"}</label>
                          <span className="pg-info">
                            <span>
                              {"Showing "}
                              <b>{"1–12"}</b>
                              {" of 12"}
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
                          <input className="pg-in" type="radio" name="pg2r30" id="pg2r30p1" defaultChecked={true} />
                          <label className="pg-n" htmlFor="pg2r30p1" aria-label="Page 1">{"1"}</label>
                          <span className="pg-info">
                            <span>
                              {"Showing "}
                              <b>{"1–12"}</b>
                              {" of 12"}
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
                  <section className="stabs__panel" data-code="RSS-18-3" aria-label="Titles">
                    <div className="pgw">
                      <div className="s-scroll">
                        <table className="srt  dt__table dt--hug" data-code="RSS-18-3-list" style={{"--srt-cols": "auto auto auto max-content"}} data-mc="">
                          <caption className="sr-only">{"Titles"}</caption>
                          <thead>
                            <tr>
                              <th scope="col">
                                <input className="srt-i srt-a0" type="radio" name="strss188" id="strss188-0a" aria-label="Sort by Code, lowest or A first" />
                                <input className="srt-i srt-d0" type="radio" name="strss188" id="strss188-0d" aria-label="Sort by Code, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strss188-0a">{"Code"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strss188-0d" aria-hidden="true">{"Code"}</label>
                              </th>
                              <th scope="col">
                                <input className="srt-i srt-a1" type="radio" name="strss188" id="strss188-1a" aria-label="Sort by Title, lowest or A first" />
                                <input className="srt-i srt-d1" type="radio" name="strss188" id="strss188-1d" aria-label="Sort by Title, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strss188-1a">{"Title"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strss188-1d" aria-hidden="true">{"Title"}</label>
                              </th>
                              <th scope="col">{"Status"}</th>
                              <th scope="col" />
                            </tr>
                          </thead>
                          <tbody>
                            <tr style={{"--k0": "4", "--k1": "4"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"Mr"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Title">{"Mr"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-ti-mr" data-opens="RSS-P15" aria-label="Edit Mr">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "6", "--k1": "6"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"Ms"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Title">{"Ms"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-ti-ms" data-opens="RSS-P15" aria-label="Edit Ms">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "5", "--k1": "5"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"Mrs"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Title">{"Mrs"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-ti-mrs" data-opens="RSS-P15" aria-label="Edit Mrs">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "3", "--k1": "3"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"Miss"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Title">{"Miss"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-ti-miss" data-opens="RSS-P15" aria-label="Edit Miss">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "2", "--k1": "2"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"Dr"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Title">{"Dr"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-ti-dr" data-opens="RSS-P15" aria-label="Edit Dr">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "8", "--k1": "8"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"Prof"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Title">{"Prof"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-ti-prof" data-opens="RSS-P15" aria-label="Edit Prof">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "1", "--k1": "1"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"Capt"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Title">{"Capt"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-ti-capt" data-opens="RSS-P15" aria-label="Edit Capt">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "7", "--k1": "7"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"Mx"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Title">{"Mx"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-ti-mx" data-opens="RSS-P15" aria-label="Edit Mx">{"Edit"}</a>
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
                          <input className="pg-in" type="radio" name="pg3r10" id="pg3r10p1" defaultChecked={true} />
                          <label className="pg-n" htmlFor="pg3r10p1" aria-label="Page 1">{"1"}</label>
                          <span className="pg-info">
                            <span>
                              {"Showing "}
                              <b>{"1–8"}</b>
                              {" of 8"}
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
                          <input className="pg-in" type="radio" name="pg3r15" id="pg3r15p1" defaultChecked={true} />
                          <label className="pg-n" htmlFor="pg3r15p1" aria-label="Page 1">{"1"}</label>
                          <span className="pg-info">
                            <span>
                              {"Showing "}
                              <b>{"1–8"}</b>
                              {" of 8"}
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
                          <input className="pg-in" type="radio" name="pg3r20" id="pg3r20p1" defaultChecked={true} />
                          <label className="pg-n" htmlFor="pg3r20p1" aria-label="Page 1">{"1"}</label>
                          <span className="pg-info">
                            <span>
                              {"Showing "}
                              <b>{"1–8"}</b>
                              {" of 8"}
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
                          <input className="pg-in" type="radio" name="pg3r25" id="pg3r25p1" defaultChecked={true} />
                          <label className="pg-n" htmlFor="pg3r25p1" aria-label="Page 1">{"1"}</label>
                          <span className="pg-info">
                            <span>
                              {"Showing "}
                              <b>{"1–8"}</b>
                              {" of 8"}
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
                          <input className="pg-in" type="radio" name="pg3r30" id="pg3r30p1" defaultChecked={true} />
                          <label className="pg-n" htmlFor="pg3r30p1" aria-label="Page 1">{"1"}</label>
                          <span className="pg-info">
                            <span>
                              {"Showing "}
                              <b>{"1–8"}</b>
                              {" of 8"}
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
                  <section className="stabs__panel" data-code="RSS-18-4" aria-label="Countries & states">
                    <div className="pgw">
                      <div className="s-scroll">
                        <table className="srt  dt__table dt--hug" data-code="RSS-18-4-list" style={{"--srt-cols": "auto auto auto auto max-content"}} data-mc="">
                          <caption className="sr-only">{"Countries"}</caption>
                          <thead>
                            <tr>
                              <th scope="col">
                                <input className="srt-i srt-a0" type="radio" name="strss189" id="strss189-0a" aria-label="Sort by Code, lowest or A first" />
                                <input className="srt-i srt-d0" type="radio" name="strss189" id="strss189-0d" aria-label="Sort by Code, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strss189-0a">{"Code"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strss189-0d" aria-hidden="true">{"Code"}</label>
                              </th>
                              <th scope="col">
                                <input className="srt-i srt-a1" type="radio" name="strss189" id="strss189-1a" aria-label="Sort by Country, lowest or A first" />
                                <input className="srt-i srt-d1" type="radio" name="strss189" id="strss189-1d" aria-label="Sort by Country, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strss189-1a">{"Country"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strss189-1d" aria-hidden="true">{"Country"}</label>
                              </th>
                              <th scope="col">
                                <input className="srt-i srt-a2" type="radio" name="strss189" id="strss189-2a" aria-label="Sort by Dial code, lowest or A first" />
                                <input className="srt-i srt-d2" type="radio" name="strss189" id="strss189-2d" aria-label="Sort by Dial code, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strss189-2a">{"Dial code"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strss189-2d" aria-hidden="true">{"Dial code"}</label>
                              </th>
                              <th scope="col">{"Status"}</th>
                              <th scope="col" />
                            </tr>
                          </thead>
                          <tbody>
                            <tr style={{"--k0": "9", "--k1": "6", "--k2": "14"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"IN"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Country" data-w2="">{"India"}</td>
                              <td className="dt__td nw" data-label="Dial code" data-w2="">{"+91"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-co-in" data-opens="RSS-P15" aria-label="Edit India">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "20", "--k1": "20", "--k2": "1"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"US"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Country" data-w2="">{"United States"}</td>
                              <td className="dt__td nw" data-label="Dial code" data-w2="">{"+1"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-co-us" data-opens="RSS-P15" aria-label="Edit United States">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "8", "--k1": "19", "--k2": "6"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"GB"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Country" data-w2="">{"United Kingdom"}</td>
                              <td className="dt__td nw" data-label="Dial code" data-w2="">{"+44"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-co-gb" data-opens="RSS-P15" aria-label="Edit United Kingdom">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "1", "--k1": "18", "--k2": "17"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"AE"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Country" data-w2="">{"United Arab Emirates"}</td>
                              <td className="dt__td nw" data-label="Dial code" data-w2="">{"+971"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-co-ae" data-opens="RSS-P15" aria-label="Edit United Arab Emirates">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "6", "--k1": "5", "--k2": "8"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"DE"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Country" data-w2="">{"Germany"}</td>
                              <td className="dt__td nw" data-label="Dial code" data-w2="">{"+49"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-co-de" data-opens="RSS-P15" aria-label="Edit Germany">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "7", "--k1": "4", "--k2": "3"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"FR"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Country" data-w2="">{"France"}</td>
                              <td className="dt__td nw" data-label="Dial code" data-w2="">{"+33"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-co-fr" data-opens="RSS-P15" aria-label="Edit France">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "2", "--k1": "1", "--k2": "9"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"AU"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Country" data-w2="">{"Australia"}</td>
                              <td className="dt__td nw" data-label="Dial code" data-w2="">{"+61"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-co-au" data-opens="RSS-P15" aria-label="Edit Australia">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "19", "--k1": "14", "--k2": "10"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"SG"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Country" data-w2="">{"Singapore"}</td>
                              <td className="dt__td nw" data-label="Dial code" data-w2="">{"+65"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-co-sg" data-opens="RSS-P15" aria-label="Edit Singapore">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "4", "--k1": "3", "--k2": "1"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"CA"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Country" data-w2="">{"Canada"}</td>
                              <td className="dt__td nw" data-label="Dial code" data-w2="">{"+1"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-co-ca" data-opens="RSS-P15" aria-label="Edit Canada">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "17", "--k1": "13", "--k2": "16"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"SA"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Country" data-w2="">{"Saudi Arabia"}</td>
                              <td className="dt__td nw" data-label="Dial code" data-w2="">{"+966"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-co-sa" data-opens="RSS-P15" aria-label="Edit Saudi Arabia">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "15", "--k1": "11", "--k2": "18"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"QA"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Country" data-w2="">{"Qatar"}</td>
                              <td className="dt__td nw" data-label="Dial code" data-w2="">{"+974"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-co-qa" data-opens="RSS-P15" aria-label="Edit Qatar">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "12", "--k1": "15", "--k2": "15"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"LK"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Country" data-w2="">{"Sri Lanka"}</td>
                              <td className="dt__td nw" data-label="Dial code" data-w2="">{"+94"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-co-lk" data-opens="RSS-P15" aria-label="Edit Sri Lanka">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "14", "--k1": "9", "--k2": "19"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"NP"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Country" data-w2="">{"Nepal"}</td>
                              <td className="dt__td nw" data-label="Dial code" data-w2="">{"+977"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-co-np" data-opens="RSS-P15" aria-label="Edit Nepal">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "13", "--k1": "10", "--k2": "2"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"NL"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Country" data-w2="">{"Netherlands"}</td>
                              <td className="dt__td nw" data-label="Dial code" data-w2="">{"+31"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-co-nl" data-opens="RSS-P15" aria-label="Edit Netherlands">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "10", "--k1": "7", "--k2": "4"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"IT"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Country" data-w2="">{"Italy"}</td>
                              <td className="dt__td nw" data-label="Dial code" data-w2="">{"+39"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-co-it" data-opens="RSS-P15" aria-label="Edit Italy">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "16", "--k1": "12", "--k2": "11"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"RU"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Country" data-w2="">{"Russia"}</td>
                              <td className="dt__td nw" data-label="Dial code" data-w2="">{"+7"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-co-ru" data-opens="RSS-P15" aria-label="Edit Russia">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "11", "--k1": "8", "--k2": "12"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"JP"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Country" data-w2="">{"Japan"}</td>
                              <td className="dt__td nw" data-label="Dial code" data-w2="">{"+81"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-co-jp" data-opens="RSS-P15" aria-label="Edit Japan">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "5", "--k1": "17", "--k2": "5"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"CH"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Country" data-w2="">{"Switzerland"}</td>
                              <td className="dt__td nw" data-label="Dial code" data-w2="">{"+41"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-co-ch" data-opens="RSS-P15" aria-label="Edit Switzerland">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "18", "--k1": "16", "--k2": "7"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"SE"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Country" data-w2="">{"Sweden"}</td>
                              <td className="dt__td nw" data-label="Dial code" data-w2="">{"+46"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-co-se" data-opens="RSS-P15" aria-label="Edit Sweden">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "3", "--k1": "2", "--k2": "13"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"BD"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Country" data-w2="">{"Bangladesh"}</td>
                              <td className="dt__td nw" data-label="Dial code" data-w2="">{"+880"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-co-bd" data-opens="RSS-P15" aria-label="Edit Bangladesh">{"Edit"}</a>
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
                          <input className="pg-in" type="radio" name="pg4r10" id="pg4r10p1" defaultChecked={true} />
                          <label className="pg-n" htmlFor="pg4r10p1" aria-label="Page 1">{"1"}</label>
                          <input className="pg-in" type="radio" name="pg4r10" id="pg4r10p2" />
                          <label className="pg-n" htmlFor="pg4r10p2" aria-label="Page 2">{"2"}</label>
                          <span className="pg-info">
                            <span>
                              {"Showing "}
                              <b>{"1–10"}</b>
                              {" of 20"}
                            </span>
                            <span>
                              {"Showing "}
                              <b>{"11–20"}</b>
                              {" of 20"}
                            </span>
                          </span>
                          <span className="pg-prev">
                            <span className="pg-arr is-off">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-left" />
                              </svg>
                            </span>
                            <label className="pg-arr" htmlFor="pg4r10p1" title="Previous page">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-left" />
                              </svg>
                            </label>
                          </span>
                          <span className="pg-next">
                            <label className="pg-arr" htmlFor="pg4r10p2" title="Next page">
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
                          <input className="pg-in" type="radio" name="pg4r15" id="pg4r15p1" defaultChecked={true} />
                          <label className="pg-n" htmlFor="pg4r15p1" aria-label="Page 1">{"1"}</label>
                          <input className="pg-in" type="radio" name="pg4r15" id="pg4r15p2" />
                          <label className="pg-n" htmlFor="pg4r15p2" aria-label="Page 2">{"2"}</label>
                          <span className="pg-info">
                            <span>
                              {"Showing "}
                              <b>{"1–15"}</b>
                              {" of 20"}
                            </span>
                            <span>
                              {"Showing "}
                              <b>{"16–20"}</b>
                              {" of 20"}
                            </span>
                          </span>
                          <span className="pg-prev">
                            <span className="pg-arr is-off">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-left" />
                              </svg>
                            </span>
                            <label className="pg-arr" htmlFor="pg4r15p1" title="Previous page">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-left" />
                              </svg>
                            </label>
                          </span>
                          <span className="pg-next">
                            <label className="pg-arr" htmlFor="pg4r15p2" title="Next page">
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
                          <input className="pg-in" type="radio" name="pg4r20" id="pg4r20p1" defaultChecked={true} />
                          <label className="pg-n" htmlFor="pg4r20p1" aria-label="Page 1">{"1"}</label>
                          <span className="pg-info">
                            <span>
                              {"Showing "}
                              <b>{"1–20"}</b>
                              {" of 20"}
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
                          <input className="pg-in" type="radio" name="pg4r25" id="pg4r25p1" defaultChecked={true} />
                          <label className="pg-n" htmlFor="pg4r25p1" aria-label="Page 1">{"1"}</label>
                          <span className="pg-info">
                            <span>
                              {"Showing "}
                              <b>{"1–20"}</b>
                              {" of 20"}
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
                          <input className="pg-in" type="radio" name="pg4r30" id="pg4r30p1" defaultChecked={true} />
                          <label className="pg-n" htmlFor="pg4r30p1" aria-label="Page 1">{"1"}</label>
                          <span className="pg-info">
                            <span>
                              {"Showing "}
                              <b>{"1–20"}</b>
                              {" of 20"}
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
                    <h3 className="s-card-title" style={{"margin": "14px 0 8px"}}>{"States of India (GST state codes)"}</h3>
                    <div className="pgw">
                      <div className="s-scroll s-scroll--tall">
                        <table className="srt  dt__table dt--hug" style={{"--srt-cols": "auto auto auto auto max-content"}} data-mc="">
                          <caption className="sr-only">{"States"}</caption>
                          <thead>
                            <tr>
                              <th scope="col">
                                <input className="srt-i srt-a0" type="radio" name="strss1810" id="strss1810-0a" aria-label="Sort by Code, lowest or A first" />
                                <input className="srt-i srt-d0" type="radio" name="strss1810" id="strss1810-0d" aria-label="Sort by Code, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strss1810-0a">{"Code"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strss1810-0d" aria-hidden="true">{"Code"}</label>
                              </th>
                              <th scope="col">
                                <input className="srt-i srt-a1" type="radio" name="strss1810" id="strss1810-1a" aria-label="Sort by State, lowest or A first" />
                                <input className="srt-i srt-d1" type="radio" name="strss1810" id="strss1810-1d" aria-label="Sort by State, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strss1810-1a">{"State"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strss1810-1d" aria-hidden="true">{"State"}</label>
                              </th>
                              <th scope="col">
                                <input className="srt-i srt-a2" type="radio" name="strss1810" id="strss1810-2a" aria-label="Sort by GST state code, lowest or A first" />
                                <input className="srt-i srt-d2" type="radio" name="strss1810" id="strss1810-2d" aria-label="Sort by GST state code, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strss1810-2a">{"GST state code"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strss1810-2d" aria-hidden="true">{"GST state code"}</label>
                              </th>
                              <th scope="col">{"Status"}</th>
                              <th scope="col" />
                            </tr>
                          </thead>
                          <tbody>
                            <tr style={{"--k0": "5", "--k1": "5", "--k2": "10"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"BR"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="State">{"Bihar"}</td>
                              <td className="dt__td nw" data-label="GST state code" data-w2="">{"10"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-st-in-br" data-opens="RSS-P15" aria-label="Edit Bihar">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "30", "--k1": "30", "--k2": "11"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"SK"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="State">{"Sikkim"}</td>
                              <td className="dt__td nw" data-label="GST state code" data-w2="">{"11"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-st-in-sk" data-opens="RSS-P15" aria-label="Edit Sikkim">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "3", "--k1": "3", "--k2": "12"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"AR"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="State" data-w2="">{"Arunachal Pradesh"}</td>
                              <td className="dt__td nw" data-label="GST state code" data-w2="">{"12"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-st-in-ar" data-opens="RSS-P15" aria-label="Edit Arunachal Pradesh">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "25", "--k1": "25", "--k2": "13"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"NL"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="State" data-w2="">{"Nagaland"}</td>
                              <td className="dt__td nw" data-label="GST state code" data-w2="">{"13"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-st-in-nl" data-opens="RSS-P15" aria-label="Edit Nagaland">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "22", "--k1": "22", "--k2": "14"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"MN"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="State">{"Manipur"}</td>
                              <td className="dt__td nw" data-label="GST state code" data-w2="">{"14"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-st-in-mn" data-opens="RSS-P15" aria-label="Edit Manipur">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "24", "--k1": "24", "--k2": "15"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"MZ"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="State">{"Mizoram"}</td>
                              <td className="dt__td nw" data-label="GST state code" data-w2="">{"15"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-st-in-mz" data-opens="RSS-P15" aria-label="Edit Mizoram">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "33", "--k1": "33", "--k2": "16"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"TR"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="State">{"Tripura"}</td>
                              <td className="dt__td nw" data-label="GST state code" data-w2="">{"16"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-st-in-tr" data-opens="RSS-P15" aria-label="Edit Tripura">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "21", "--k1": "23", "--k2": "17"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"ML"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="State" data-w2="">{"Meghalaya"}</td>
                              <td className="dt__td nw" data-label="GST state code" data-w2="">{"17"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-st-in-ml" data-opens="RSS-P15" aria-label="Edit Meghalaya">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "4", "--k1": "4", "--k2": "18"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"AS"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="State">{"Assam"}</td>
                              <td className="dt__td nw" data-label="GST state code" data-w2="">{"18"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-st-in-as" data-opens="RSS-P15" aria-label="Edit Assam">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "36", "--k1": "36", "--k2": "19"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"WB"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="State" data-w2="">{"West Bengal"}</td>
                              <td className="dt__td nw" data-label="GST state code" data-w2="">{"19"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-st-in-wb" data-opens="RSS-P15" aria-label="Edit West Bengal">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "14", "--k1": "15", "--k2": "20"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"JH"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="State" data-w2="">{"Jharkhand"}</td>
                              <td className="dt__td nw" data-label="GST state code" data-w2="">{"20"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-st-in-jh" data-opens="RSS-P15" aria-label="Edit Jharkhand">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "26", "--k1": "26", "--k2": "21"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"OD"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="State">{"Odisha"}</td>
                              <td className="dt__td nw" data-label="GST state code" data-w2="">{"21"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-st-in-od" data-opens="RSS-P15" aria-label="Edit Odisha">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "6", "--k1": "7", "--k2": "22"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"CG"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="State" data-w2="">{"Chhattisgarh"}</td>
                              <td className="dt__td nw" data-label="GST state code" data-w2="">{"22"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-st-in-cg" data-opens="RSS-P15" aria-label="Edit Chhattisgarh">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "23", "--k1": "20", "--k2": "23"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"MP"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="State" data-w2="">{"Madhya Pradesh"}</td>
                              <td className="dt__td nw" data-label="GST state code" data-w2="">{"23"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-st-in-mp" data-opens="RSS-P15" aria-label="Edit Madhya Pradesh">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "11", "--k1": "11", "--k2": "24"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"GJ"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="State">{"Gujarat"}</td>
                              <td className="dt__td nw" data-label="GST state code" data-w2="">{"24"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-st-in-gj" data-opens="RSS-P15" aria-label="Edit Gujarat">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "8", "--k1": "8", "--k2": "25"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"DD"}</strong>
                              </td>
                              <td className="dt__td" data-label="State" data-w2="">{"Dadra & Nagar Haveli and Daman & Diu"}</td>
                              <td className="dt__td nw" data-label="GST state code" data-w2="">{"26"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-st-in-dd" data-opens="RSS-P15" aria-label="Edit Dadra & Nagar Haveli and Daman & Diu">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "20", "--k1": "21", "--k2": "26"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"MH"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="State" data-w2="">{"Maharashtra"}</td>
                              <td className="dt__td nw" data-label="GST state code" data-w2="">{"27"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-st-in-mh" data-opens="RSS-P15" aria-label="Edit Maharashtra">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "16", "--k1": "16", "--k2": "27"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"KA"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="State" data-w2="">{"Karnataka"}</td>
                              <td className="dt__td nw" data-label="GST state code" data-w2="">{"29"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-st-in-ka" data-opens="RSS-P15" aria-label="Edit Karnataka">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "10", "--k1": "10", "--k2": "28"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"GA"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="State">{"Goa"}</td>
                              <td className="dt__td nw" data-label="GST state code" data-w2="">{"30"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-st-in-ga" data-opens="RSS-P15" aria-label="Edit Goa">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "19", "--k1": "19", "--k2": "29"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"LD"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="State" data-w2="">{"Lakshadweep"}</td>
                              <td className="dt__td nw" data-label="GST state code" data-w2="">{"31"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-st-in-ld" data-opens="RSS-P15" aria-label="Edit Lakshadweep">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "17", "--k1": "17", "--k2": "30"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"KL"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="State">{"Kerala"}</td>
                              <td className="dt__td nw" data-label="GST state code" data-w2="">{"32"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-st-in-kl" data-opens="RSS-P15" aria-label="Edit Kerala">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "32", "--k1": "31", "--k2": "31"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"TN"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="State" data-w2="">{"Tamil Nadu"}</td>
                              <td className="dt__td nw" data-label="GST state code" data-w2="">{"33"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-st-in-tn" data-opens="RSS-P15" aria-label="Edit Tamil Nadu">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "28", "--k1": "27", "--k2": "32"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"PY"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="State" data-w2="">{"Puducherry"}</td>
                              <td className="dt__td nw" data-label="GST state code" data-w2="">{"34"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-st-in-py" data-opens="RSS-P15" aria-label="Edit Puducherry">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "1", "--k1": "1", "--k2": "33"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"AN"}</strong>
                              </td>
                              <td className="dt__td" data-label="State" data-w2="">{"Andaman & Nicobar Islands"}</td>
                              <td className="dt__td nw" data-label="GST state code" data-w2="">{"35"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-st-in-an" data-opens="RSS-P15" aria-label="Edit Andaman & Nicobar Islands">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "31", "--k1": "32", "--k2": "34"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"TG"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="State" data-w2="">{"Telangana"}</td>
                              <td className="dt__td nw" data-label="GST state code" data-w2="">{"36"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-st-in-tg" data-opens="RSS-P15" aria-label="Edit Telangana">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "2", "--k1": "2", "--k2": "35"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"AP"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="State" data-w2="">{"Andhra Pradesh"}</td>
                              <td className="dt__td nw" data-label="GST state code" data-w2="">{"37"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-st-in-ap" data-opens="RSS-P15" aria-label="Edit Andhra Pradesh">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "18", "--k1": "18", "--k2": "36"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"LA"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="State">{"Ladakh"}</td>
                              <td className="dt__td nw" data-label="GST state code" data-w2="">{"38"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-st-in-la" data-opens="RSS-P15" aria-label="Edit Ladakh">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "15", "--k1": "14", "--k2": "1"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"JK"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="State" data-w2="">{"Jammu & Kashmir"}</td>
                              <td className="dt__td nw" data-label="GST state code" data-w2="">{"01"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-st-in-jk" data-opens="RSS-P15" aria-label="Edit Jammu & Kashmir">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "12", "--k1": "13", "--k2": "2"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"HP"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="State" data-w2="">{"Himachal Pradesh"}</td>
                              <td className="dt__td nw" data-label="GST state code" data-w2="">{"02"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-st-in-hp" data-opens="RSS-P15" aria-label="Edit Himachal Pradesh">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "27", "--k1": "28", "--k2": "3"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"PB"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="State">{"Punjab"}</td>
                              <td className="dt__td nw" data-label="GST state code" data-w2="">{"03"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-st-in-pb" data-opens="RSS-P15" aria-label="Edit Punjab">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "7", "--k1": "6", "--k2": "4"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"CH"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="State" data-w2="">{"Chandigarh"}</td>
                              <td className="dt__td nw" data-label="GST state code" data-w2="">{"04"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-st-in-ch" data-opens="RSS-P15" aria-label="Edit Chandigarh">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "34", "--k1": "35", "--k2": "5"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"UK"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="State" data-w2="">{"Uttarakhand"}</td>
                              <td className="dt__td nw" data-label="GST state code" data-w2="">{"05"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-st-in-uk" data-opens="RSS-P15" aria-label="Edit Uttarakhand">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "13", "--k1": "12", "--k2": "6"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"HR"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="State">{"Haryana"}</td>
                              <td className="dt__td nw" data-label="GST state code" data-w2="">{"06"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-st-in-hr" data-opens="RSS-P15" aria-label="Edit Haryana">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "9", "--k1": "9", "--k2": "7"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"DL"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="State">{"Delhi"}</td>
                              <td className="dt__td nw" data-label="GST state code" data-w2="">{"07"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-st-in-dl" data-opens="RSS-P15" aria-label="Edit Delhi">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "29", "--k1": "29", "--k2": "8"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"RJ"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="State" data-w2="">{"Rajasthan"}</td>
                              <td className="dt__td nw" data-label="GST state code" data-w2="">{"08"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-st-in-rj" data-opens="RSS-P15" aria-label="Edit Rajasthan">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "35", "--k1": "34", "--k2": "9"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"UP"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="State" data-w2="">{"Uttar Pradesh"}</td>
                              <td className="dt__td nw" data-label="GST state code" data-w2="">{"09"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P15-st-in-up" data-opens="RSS-P15" aria-label="Edit Uttar Pradesh">{"Edit"}</a>
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
                          <input className="pg-in" type="radio" name="pg5r10" id="pg5r10p1" defaultChecked={true} />
                          <label className="pg-n" htmlFor="pg5r10p1" aria-label="Page 1">{"1"}</label>
                          <input className="pg-in" type="radio" name="pg5r10" id="pg5r10p2" />
                          <label className="pg-n" htmlFor="pg5r10p2" aria-label="Page 2">{"2"}</label>
                          <input className="pg-in" type="radio" name="pg5r10" id="pg5r10p3" />
                          <label className="pg-n" htmlFor="pg5r10p3" aria-label="Page 3">{"3"}</label>
                          <input className="pg-in" type="radio" name="pg5r10" id="pg5r10p4" />
                          <label className="pg-n" htmlFor="pg5r10p4" aria-label="Page 4">{"4"}</label>
                          <span className="pg-info">
                            <span>
                              {"Showing "}
                              <b>{"1–10"}</b>
                              {" of 36"}
                            </span>
                            <span>
                              {"Showing "}
                              <b>{"11–20"}</b>
                              {" of 36"}
                            </span>
                            <span>
                              {"Showing "}
                              <b>{"21–30"}</b>
                              {" of 36"}
                            </span>
                            <span>
                              {"Showing "}
                              <b>{"31–36"}</b>
                              {" of 36"}
                            </span>
                          </span>
                          <span className="pg-prev">
                            <span className="pg-arr is-off">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-left" />
                              </svg>
                            </span>
                            <label className="pg-arr" htmlFor="pg5r10p1" title="Previous page">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-left" />
                              </svg>
                            </label>
                            <label className="pg-arr" htmlFor="pg5r10p2" title="Previous page">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-left" />
                              </svg>
                            </label>
                            <label className="pg-arr" htmlFor="pg5r10p3" title="Previous page">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-left" />
                              </svg>
                            </label>
                          </span>
                          <span className="pg-next">
                            <label className="pg-arr" htmlFor="pg5r10p2" title="Next page">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-right" />
                              </svg>
                            </label>
                            <label className="pg-arr" htmlFor="pg5r10p3" title="Next page">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-right" />
                              </svg>
                            </label>
                            <label className="pg-arr" htmlFor="pg5r10p4" title="Next page">
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
                          <input className="pg-in" type="radio" name="pg5r15" id="pg5r15p1" defaultChecked={true} />
                          <label className="pg-n" htmlFor="pg5r15p1" aria-label="Page 1">{"1"}</label>
                          <input className="pg-in" type="radio" name="pg5r15" id="pg5r15p2" />
                          <label className="pg-n" htmlFor="pg5r15p2" aria-label="Page 2">{"2"}</label>
                          <input className="pg-in" type="radio" name="pg5r15" id="pg5r15p3" />
                          <label className="pg-n" htmlFor="pg5r15p3" aria-label="Page 3">{"3"}</label>
                          <span className="pg-info">
                            <span>
                              {"Showing "}
                              <b>{"1–15"}</b>
                              {" of 36"}
                            </span>
                            <span>
                              {"Showing "}
                              <b>{"16–30"}</b>
                              {" of 36"}
                            </span>
                            <span>
                              {"Showing "}
                              <b>{"31–36"}</b>
                              {" of 36"}
                            </span>
                          </span>
                          <span className="pg-prev">
                            <span className="pg-arr is-off">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-left" />
                              </svg>
                            </span>
                            <label className="pg-arr" htmlFor="pg5r15p1" title="Previous page">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-left" />
                              </svg>
                            </label>
                            <label className="pg-arr" htmlFor="pg5r15p2" title="Previous page">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-left" />
                              </svg>
                            </label>
                          </span>
                          <span className="pg-next">
                            <label className="pg-arr" htmlFor="pg5r15p2" title="Next page">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-right" />
                              </svg>
                            </label>
                            <label className="pg-arr" htmlFor="pg5r15p3" title="Next page">
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
                          <input className="pg-in" type="radio" name="pg5r20" id="pg5r20p1" defaultChecked={true} />
                          <label className="pg-n" htmlFor="pg5r20p1" aria-label="Page 1">{"1"}</label>
                          <input className="pg-in" type="radio" name="pg5r20" id="pg5r20p2" />
                          <label className="pg-n" htmlFor="pg5r20p2" aria-label="Page 2">{"2"}</label>
                          <span className="pg-info">
                            <span>
                              {"Showing "}
                              <b>{"1–20"}</b>
                              {" of 36"}
                            </span>
                            <span>
                              {"Showing "}
                              <b>{"21–36"}</b>
                              {" of 36"}
                            </span>
                          </span>
                          <span className="pg-prev">
                            <span className="pg-arr is-off">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-left" />
                              </svg>
                            </span>
                            <label className="pg-arr" htmlFor="pg5r20p1" title="Previous page">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-left" />
                              </svg>
                            </label>
                          </span>
                          <span className="pg-next">
                            <label className="pg-arr" htmlFor="pg5r20p2" title="Next page">
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
                          <input className="pg-in" type="radio" name="pg5r25" id="pg5r25p1" defaultChecked={true} />
                          <label className="pg-n" htmlFor="pg5r25p1" aria-label="Page 1">{"1"}</label>
                          <input className="pg-in" type="radio" name="pg5r25" id="pg5r25p2" />
                          <label className="pg-n" htmlFor="pg5r25p2" aria-label="Page 2">{"2"}</label>
                          <span className="pg-info">
                            <span>
                              {"Showing "}
                              <b>{"1–25"}</b>
                              {" of 36"}
                            </span>
                            <span>
                              {"Showing "}
                              <b>{"26–36"}</b>
                              {" of 36"}
                            </span>
                          </span>
                          <span className="pg-prev">
                            <span className="pg-arr is-off">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-left" />
                              </svg>
                            </span>
                            <label className="pg-arr" htmlFor="pg5r25p1" title="Previous page">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-left" />
                              </svg>
                            </label>
                          </span>
                          <span className="pg-next">
                            <label className="pg-arr" htmlFor="pg5r25p2" title="Next page">
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
                          <input className="pg-in" type="radio" name="pg5r30" id="pg5r30p1" defaultChecked={true} />
                          <label className="pg-n" htmlFor="pg5r30p1" aria-label="Page 1">{"1"}</label>
                          <input className="pg-in" type="radio" name="pg5r30" id="pg5r30p2" />
                          <label className="pg-n" htmlFor="pg5r30p2" aria-label="Page 2">{"2"}</label>
                          <span className="pg-info">
                            <span>
                              {"Showing "}
                              <b>{"1–30"}</b>
                              {" of 36"}
                            </span>
                            <span>
                              {"Showing "}
                              <b>{"31–36"}</b>
                              {" of 36"}
                            </span>
                          </span>
                          <span className="pg-prev">
                            <span className="pg-arr is-off">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-left" />
                              </svg>
                            </span>
                            <label className="pg-arr" htmlFor="pg5r30p1" title="Previous page">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-left" />
                              </svg>
                            </label>
                          </span>
                          <span className="pg-next">
                            <label className="pg-arr" htmlFor="pg5r30p2" title="Next page">
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
                      </nav>
                    </div>
                  </section>
                  <section className="stabs__panel" data-code="RSS-18-5" aria-label="Guest classes">
                    <div className="s-toolbar">
                      <p className="field__hint">{"The guest class is shown on the arrival list (FD-02) and the room allocation list (RS-09) and can be filtered there. Classes marked automatic are worked out from the booking; the others are chosen on the guest profile."}</p>
                      <a className="btn btn--primary" href="#rss18-new-guest-class">
                        <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        {"New guest class"}
                      </a>
                    </div>
                    <div className="s-scroll">
                      <table className="srt  dt__table" data-code="RSS-18-5-list" style={{"--srt-cols": "auto auto auto auto auto"}} data-mc="">
                        <caption className="sr-only">{"Guest classes"}</caption>
                        <thead>
                          <tr>
                            <th scope="col">
                              <input className="srt-i srt-a0" type="radio" name="strss1811" id="strss1811-0a" aria-label="Sort by Code, lowest or A first" />
                              <input className="srt-i srt-d0" type="radio" name="strss1811" id="strss1811-0d" aria-label="Sort by Code, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="strss1811-0a">{"Code"}</label>
                              <label className="srt-l srt-l--d" htmlFor="strss1811-0d" aria-hidden="true">{"Code"}</label>
                            </th>
                            <th scope="col">
                              <input className="srt-i srt-a1" type="radio" name="strss1811" id="strss1811-1a" aria-label="Sort by Guest class, lowest or A first" />
                              <input className="srt-i srt-d1" type="radio" name="strss1811" id="strss1811-1d" aria-label="Sort by Guest class, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="strss1811-1a">{"Guest class"}</label>
                              <label className="srt-l srt-l--d" htmlFor="strss1811-1d" aria-hidden="true">{"Guest class"}</label>
                            </th>
                            <th scope="col">
                              <input className="srt-i srt-a2" type="radio" name="strss1811" id="strss1811-2a" aria-label="Sort by How it is given, lowest or A first" />
                              <input className="srt-i srt-d2" type="radio" name="strss1811" id="strss1811-2d" aria-label="Sort by How it is given, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="strss1811-2a">{"How it is given"}</label>
                              <label className="srt-l srt-l--d" htmlFor="strss1811-2d" aria-hidden="true">{"How it is given"}</label>
                            </th>
                            <th scope="col">
                              <input className="srt-i srt-a3" type="radio" name="strss1811" id="strss1811-3a" aria-label="Sort by Shown on, lowest or A first" />
                              <input className="srt-i srt-d3" type="radio" name="strss1811" id="strss1811-3d" aria-label="Sort by Shown on, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="strss1811-3a">{"Shown on"}</label>
                              <label className="srt-l srt-l--d" htmlFor="strss1811-3d" aria-hidden="true">{"Shown on"}</label>
                            </th>
                            <th scope="col">{"Status"}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style={{"--k0": "3", "--k1": "2", "--k2": "4", "--k3": "5"}}>
                            <td className="dt__td nw" data-label="Code" data-t="">
                              <b>{"FT"}</b>
                            </td>
                            <td className="dt__td" data-label="Guest class" data-w2="">{"First timer"}</td>
                            <td className="dt__td" data-label="How it is given" data-w2="">{"Automatic – no earlier stay"}</td>
                            <td className="dt__td" data-label="Shown on" data-w2="">{"Arrivals, room allocation, reports"}</td>
                            <td className="dt__td" data-label="Status" data-s="">
                              <span className="pill pill--ready">
                                <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"Active"}
                              </span>
                            </td>
                          </tr>
                          <tr style={{"--k0": "5", "--k1": "4", "--k2": "5", "--k3": "2"}}>
                            <td className="dt__td nw" data-label="Code" data-t="">
                              <b>{"RPT"}</b>
                            </td>
                            <td className="dt__td" data-label="Guest class" data-w2="">{"Repeat guest"}</td>
                            <td className="dt__td" data-label="How it is given" data-w2="">{"Automatic – one or more earlier stays (count shown as Repeat stays)"}</td>
                            <td className="dt__td" data-label="Shown on" data-w2="">{"Arrivals, allocation, guest profile"}</td>
                            <td className="dt__td" data-label="Status" data-s="">
                              <span className="pill pill--ready">
                                <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"Active"}
                              </span>
                            </td>
                          </tr>
                          <tr style={{"--k0": "1", "--k1": "1", "--k2": "1", "--k3": "3"}}>
                            <td className="dt__td nw" data-label="Code" data-t="">
                              <b>{"CIP"}</b>
                            </td>
                            <td className="dt__td" data-label="Guest class" data-w2="">{"Commercial important person"}</td>
                            <td className="dt__td" data-label="How it is given" data-w2="">{"Automatic – booking billed to a company, PSU or government account"}</td>
                            <td className="dt__td" data-label="Shown on" data-w2="">{"Arrivals, allocation, Service View"}</td>
                            <td className="dt__td" data-label="Status" data-s="">
                              <span className="pill pill--ready">
                                <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"Active"}
                              </span>
                            </td>
                          </tr>
                          <tr style={{"--k0": "6", "--k1": "5", "--k2": "6", "--k3": "6"}}>
                            <td className="dt__td nw" data-label="Code" data-w2="" data-t="">
                              <b>{"VIP-A … D"}</b>
                            </td>
                            <td className="dt__td" data-label="Guest class" data-w2="">{"VIP levels (tab VIP levels)"}</td>
                            <td className="dt__td" data-label="How it is given" data-w2="">{"Given by the reservation or front office manager"}</td>
                            <td className="dt__td" data-label="Shown on" data-w2="">{"Every list, with the star mark"}</td>
                            <td className="dt__td" data-label="Status" data-s="">
                              <span className="pill pill--ready">
                                <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"Active"}
                              </span>
                            </td>
                          </tr>
                          <tr style={{"--k0": "2", "--k1": "6", "--k2": "3", "--k3": "4"}}>
                            <td className="dt__td nw" data-label="Code" data-t="">
                              <b>{"CLUB"}</b>
                            </td>
                            <td className="dt__td" data-label="Guest class" data-w2="">{"Aviv Club Member / Silver / Gold / Platinum"}</td>
                            <td className="dt__td" data-label="How it is given" data-w2="">{"Automatic – from the loyalty tier (FDS-27)"}</td>
                            <td className="dt__td" data-label="Shown on" data-w2="">{"Arrivals, folio, guest profile"}</td>
                            <td className="dt__td" data-label="Status" data-s="">
                              <span className="pill pill--ready">
                                <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"Active"}
                              </span>
                            </td>
                          </tr>
                          <tr style={{"--k0": "4", "--k1": "3", "--k2": "2", "--k3": "1"}}>
                            <td className="dt__td nw" data-label="Code" data-t="">
                              <b>{"LTS"}</b>
                            </td>
                            <td className="dt__td" data-label="Guest class" data-w2="">{"Long stay (7 nights or more)"}</td>
                            <td className="dt__td" data-label="How it is given" data-w2="">{"Automatic – from the booking"}</td>
                            <td className="dt__td" data-label="Shown on" data-w2="">{"Allocation, housekeeping"}</td>
                            <td className="dt__td" data-label="Status" data-s="">
                              <span className="pill pill--ready">
                                <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"Active"}
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>
                </div>
              </div>
              <div className="s-note">
                <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#info" />
                </svg>
                <span>{"The GST state code decides CGST + SGST or IGST for company invoices."}</span>
              </div>
              <div className="modal" id="RSS-P15-vip-a" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-vip-a-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-vip-a-t">{"List item"}</h2>
                      <p className="modal__desc">{"VIP levels · Owner / General Manager guest"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3227">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3227" defaultValue={"VIP levels"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3228">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3228" type="text" required={true} defaultValue={"VIP-A"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3229">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3229" type="text" required={true} defaultValue={"Owner / General Manager guest"} />
                      </div>
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-vip-b" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-vip-b-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-vip-b-t">{"List item"}</h2>
                      <p className="modal__desc">{"VIP levels · Government dignitary"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3230">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3230" defaultValue={"VIP levels"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3231">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3231" type="text" required={true} defaultValue={"VIP-B"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3232">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3232" type="text" required={true} defaultValue={"Government dignitary"} />
                      </div>
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-vip-c" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-vip-c-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-vip-c-t">{"List item"}</h2>
                      <p className="modal__desc">{"VIP levels · Repeat guest (5+ stays)"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3233">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3233" defaultValue={"VIP levels"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3234">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3234" type="text" required={true} defaultValue={"VIP-C"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3235">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3235" type="text" required={true} defaultValue={"Repeat guest (5+ stays)"} />
                      </div>
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-vip-d" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-vip-d-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-vip-d-t">{"List item"}</h2>
                      <p className="modal__desc">{"VIP levels · Travel media / influencer"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3236">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3236" defaultValue={"VIP levels"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3237">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3237" type="text" required={true} defaultValue={"VIP-D"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3238">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3238" type="text" required={true} defaultValue={"Travel media / influencer"} />
                      </div>
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-pf-highfloor" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-pf-highfloor-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-pf-highfloor-t">{"List item"}</h2>
                      <p className="modal__desc">{"Preferences · High floor"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3240">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3240" defaultValue={"Preferences"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3241">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3241" type="text" required={true} defaultValue={"HIGHFLOOR"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3242">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3242" type="text" required={true} defaultValue={"High floor"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3239">{"Group"}</label>
                      <input className="field__input" id="f3239" type="text" defaultValue={"Room"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-pf-quiet" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-pf-quiet-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-pf-quiet-t">{"List item"}</h2>
                      <p className="modal__desc">{"Preferences · Quiet room"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3244">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3244" defaultValue={"Preferences"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3245">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3245" type="text" required={true} defaultValue={"QUIET"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3246">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3246" type="text" required={true} defaultValue={"Quiet room"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3243">{"Group"}</label>
                      <input className="field__input" id="f3243" type="text" defaultValue={"Room"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-pf-king" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-pf-king-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-pf-king-t">{"List item"}</h2>
                      <p className="modal__desc">{"Preferences · King bed"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3248">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3248" defaultValue={"Preferences"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3249">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3249" type="text" required={true} defaultValue={"KING"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3250">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3250" type="text" required={true} defaultValue={"King bed"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3247">{"Group"}</label>
                      <input className="field__input" id="f3247" type="text" defaultValue={"Room"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-pf-twin" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-pf-twin-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-pf-twin-t">{"List item"}</h2>
                      <p className="modal__desc">{"Preferences · Twin beds"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3252">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3252" defaultValue={"Preferences"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3253">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3253" type="text" required={true} defaultValue={"TWIN"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3254">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3254" type="text" required={true} defaultValue={"Twin beds"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3251">{"Group"}</label>
                      <input className="field__input" id="f3251" type="text" defaultValue={"Room"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-pf-nonsmoking" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-pf-nonsmoking-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-pf-nonsmoking-t">{"List item"}</h2>
                      <p className="modal__desc">{"Preferences · Non-smoking"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3256">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3256" defaultValue={"Preferences"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3257">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3257" type="text" required={true} defaultValue={"NOSMOKE"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3258">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3258" type="text" required={true} defaultValue={"Non-smoking"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3255">{"Group"}</label>
                      <input className="field__input" id="f3255" type="text" defaultValue={"Room"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-pf-pillows" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-pf-pillows-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-pf-pillows-t">{"List item"}</h2>
                      <p className="modal__desc">{"Preferences · Extra pillows"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3260">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3260" defaultValue={"Preferences"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3261">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3261" type="text" required={true} defaultValue={"PILLOWS"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3262">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3262" type="text" required={true} defaultValue={"Extra pillows"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3259">{"Group"}</label>
                      <input className="field__input" id="f3259" type="text" defaultValue={"Service"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-pf-cot" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-pf-cot-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-pf-cot-t">{"List item"}</h2>
                      <p className="modal__desc">{"Preferences · Baby cot"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3264">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3264" defaultValue={"Preferences"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3265">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3265" type="text" required={true} defaultValue={"COT"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3266">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3266" type="text" required={true} defaultValue={"Baby cot"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3263">{"Group"}</label>
                      <input className="field__input" id="f3263" type="text" defaultValue={"Family"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-pf-veg" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-pf-veg-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-pf-veg-t">{"List item"}</h2>
                      <p className="modal__desc">{"Preferences · Vegetarian meals"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3268">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3268" defaultValue={"Preferences"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3269">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3269" type="text" required={true} defaultValue={"VEG"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3270">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3270" type="text" required={true} defaultValue={"Vegetarian meals"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3267">{"Group"}</label>
                      <input className="field__input" id="f3267" type="text" defaultValue={"Food"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-pf-jain" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-pf-jain-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-pf-jain-t">{"List item"}</h2>
                      <p className="modal__desc">{"Preferences · Jain meals"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3272">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3272" defaultValue={"Preferences"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3273">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3273" type="text" required={true} defaultValue={"JAIN"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3274">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3274" type="text" required={true} defaultValue={"Jain meals"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3271">{"Group"}</label>
                      <input className="field__input" id="f3271" type="text" defaultValue={"Food"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-pf-nuts" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-pf-nuts-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-pf-nuts-t">{"List item"}</h2>
                      <p className="modal__desc">{"Preferences · Nut allergy"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3276">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3276" defaultValue={"Preferences"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3277">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3277" type="text" required={true} defaultValue={"NUTALLERGY"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3278">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3278" type="text" required={true} defaultValue={"Nut allergy"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3275">{"Group"}</label>
                      <input className="field__input" id="f3275" type="text" defaultValue={"Food"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-pf-early" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-pf-early-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-pf-early-t">{"List item"}</h2>
                      <p className="modal__desc">{"Preferences · Early check-in"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3280">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3280" defaultValue={"Preferences"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3281">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3281" type="text" required={true} defaultValue={"EARLYCI"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3282">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3282" type="text" required={true} defaultValue={"Early check-in"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3279">{"Group"}</label>
                      <input className="field__input" id="f3279" type="text" defaultValue={"Service"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-pf-late" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-pf-late-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-pf-late-t">{"List item"}</h2>
                      <p className="modal__desc">{"Preferences · Late check-out"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3284">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3284" defaultValue={"Preferences"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3285">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3285" type="text" required={true} defaultValue={"LATECO"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3286">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3286" type="text" required={true} defaultValue={"Late check-out"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3283">{"Group"}</label>
                      <input className="field__input" id="f3283" type="text" defaultValue={"Service"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-pref-accessible" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-pref-accessible-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-pref-accessible-t">{"List item"}</h2>
                      <p className="modal__desc">{"Preferences · Accessible room"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="fa3284">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="fa3284" defaultValue={"Preferences"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="fa3285">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="fa3285" type="text" required={true} defaultValue={"ACCESSIBLE"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="fa3286">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="fa3286" type="text" required={true} defaultValue={"Accessible room"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="fa3283">{"Group"}</label>
                      <input className="field__input" id="fa3283" type="text" defaultValue={"Service"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-ti-mr" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-ti-mr-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-ti-mr-t">{"List item"}</h2>
                      <p className="modal__desc">{"Titles · Mr"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3287">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3287" defaultValue={"Titles"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3288">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3288" type="text" required={true} defaultValue={"Mr"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3289">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3289" type="text" required={true} defaultValue={"Mr"} />
                      </div>
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-ti-ms" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-ti-ms-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-ti-ms-t">{"List item"}</h2>
                      <p className="modal__desc">{"Titles · Ms"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3290">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3290" defaultValue={"Titles"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3291">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3291" type="text" required={true} defaultValue={"Ms"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3292">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3292" type="text" required={true} defaultValue={"Ms"} />
                      </div>
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-ti-mrs" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-ti-mrs-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-ti-mrs-t">{"List item"}</h2>
                      <p className="modal__desc">{"Titles · Mrs"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3293">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3293" defaultValue={"Titles"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3294">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3294" type="text" required={true} defaultValue={"Mrs"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3295">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3295" type="text" required={true} defaultValue={"Mrs"} />
                      </div>
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-ti-miss" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-ti-miss-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-ti-miss-t">{"List item"}</h2>
                      <p className="modal__desc">{"Titles · Miss"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3296">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3296" defaultValue={"Titles"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3297">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3297" type="text" required={true} defaultValue={"Miss"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3298">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3298" type="text" required={true} defaultValue={"Miss"} />
                      </div>
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-ti-dr" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-ti-dr-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-ti-dr-t">{"List item"}</h2>
                      <p className="modal__desc">{"Titles · Dr"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3299">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3299" defaultValue={"Titles"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3300">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3300" type="text" required={true} defaultValue={"Dr"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3301">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3301" type="text" required={true} defaultValue={"Dr"} />
                      </div>
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-ti-prof" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-ti-prof-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-ti-prof-t">{"List item"}</h2>
                      <p className="modal__desc">{"Titles · Prof"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3302">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3302" defaultValue={"Titles"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3303">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3303" type="text" required={true} defaultValue={"Prof"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3304">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3304" type="text" required={true} defaultValue={"Prof"} />
                      </div>
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-ti-capt" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-ti-capt-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-ti-capt-t">{"List item"}</h2>
                      <p className="modal__desc">{"Titles · Capt"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3305">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3305" defaultValue={"Titles"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3306">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3306" type="text" required={true} defaultValue={"Capt"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3307">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3307" type="text" required={true} defaultValue={"Capt"} />
                      </div>
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-ti-mx" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-ti-mx-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-ti-mx-t">{"List item"}</h2>
                      <p className="modal__desc">{"Titles · Mx"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3308">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3308" defaultValue={"Titles"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3309">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3309" type="text" required={true} defaultValue={"Mx"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3310">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3310" type="text" required={true} defaultValue={"Mx"} />
                      </div>
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-co-in" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-co-in-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-co-in-t">{"List item"}</h2>
                      <p className="modal__desc">{"Countries · India"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3312">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3312" defaultValue={"Countries"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3313">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3313" type="text" required={true} defaultValue={"IN"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3314">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3314" type="text" required={true} defaultValue={"India"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3311">{"Dial code"}</label>
                      <input className="field__input" id="f3311" type="text" defaultValue={"+91"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-co-us" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-co-us-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-co-us-t">{"List item"}</h2>
                      <p className="modal__desc">{"Countries · United States"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3316">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3316" defaultValue={"Countries"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3317">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3317" type="text" required={true} defaultValue={"US"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3318">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3318" type="text" required={true} defaultValue={"United States"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3315">{"Dial code"}</label>
                      <input className="field__input" id="f3315" type="text" defaultValue={"+1"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-co-gb" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-co-gb-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-co-gb-t">{"List item"}</h2>
                      <p className="modal__desc">{"Countries · United Kingdom"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3320">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3320" defaultValue={"Countries"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3321">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3321" type="text" required={true} defaultValue={"GB"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3322">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3322" type="text" required={true} defaultValue={"United Kingdom"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3319">{"Dial code"}</label>
                      <input className="field__input" id="f3319" type="text" defaultValue={"+44"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-co-ae" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-co-ae-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-co-ae-t">{"List item"}</h2>
                      <p className="modal__desc">{"Countries · United Arab Emirates"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3324">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3324" defaultValue={"Countries"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3325">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3325" type="text" required={true} defaultValue={"AE"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3326">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3326" type="text" required={true} defaultValue={"United Arab Emirates"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3323">{"Dial code"}</label>
                      <input className="field__input" id="f3323" type="text" defaultValue={"+971"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-co-de" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-co-de-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-co-de-t">{"List item"}</h2>
                      <p className="modal__desc">{"Countries · Germany"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3328">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3328" defaultValue={"Countries"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3329">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3329" type="text" required={true} defaultValue={"DE"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3330">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3330" type="text" required={true} defaultValue={"Germany"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3327">{"Dial code"}</label>
                      <input className="field__input" id="f3327" type="text" defaultValue={"+49"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-co-fr" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-co-fr-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-co-fr-t">{"List item"}</h2>
                      <p className="modal__desc">{"Countries · France"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3332">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3332" defaultValue={"Countries"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3333">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3333" type="text" required={true} defaultValue={"FR"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3334">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3334" type="text" required={true} defaultValue={"France"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3331">{"Dial code"}</label>
                      <input className="field__input" id="f3331" type="text" defaultValue={"+33"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-co-au" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-co-au-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-co-au-t">{"List item"}</h2>
                      <p className="modal__desc">{"Countries · Australia"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3336">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3336" defaultValue={"Countries"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3337">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3337" type="text" required={true} defaultValue={"AU"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3338">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3338" type="text" required={true} defaultValue={"Australia"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3335">{"Dial code"}</label>
                      <input className="field__input" id="f3335" type="text" defaultValue={"+61"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-co-sg" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-co-sg-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-co-sg-t">{"List item"}</h2>
                      <p className="modal__desc">{"Countries · Singapore"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3340">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3340" defaultValue={"Countries"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3341">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3341" type="text" required={true} defaultValue={"SG"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3342">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3342" type="text" required={true} defaultValue={"Singapore"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3339">{"Dial code"}</label>
                      <input className="field__input" id="f3339" type="text" defaultValue={"+65"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-co-ca" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-co-ca-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-co-ca-t">{"List item"}</h2>
                      <p className="modal__desc">{"Countries · Canada"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3344">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3344" defaultValue={"Countries"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3345">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3345" type="text" required={true} defaultValue={"CA"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3346">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3346" type="text" required={true} defaultValue={"Canada"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3343">{"Dial code"}</label>
                      <input className="field__input" id="f3343" type="text" defaultValue={"+1"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-co-sa" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-co-sa-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-co-sa-t">{"List item"}</h2>
                      <p className="modal__desc">{"Countries · Saudi Arabia"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3348">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3348" defaultValue={"Countries"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3349">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3349" type="text" required={true} defaultValue={"SA"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3350">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3350" type="text" required={true} defaultValue={"Saudi Arabia"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3347">{"Dial code"}</label>
                      <input className="field__input" id="f3347" type="text" defaultValue={"+966"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-co-qa" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-co-qa-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-co-qa-t">{"List item"}</h2>
                      <p className="modal__desc">{"Countries · Qatar"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3352">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3352" defaultValue={"Countries"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3353">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3353" type="text" required={true} defaultValue={"QA"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3354">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3354" type="text" required={true} defaultValue={"Qatar"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3351">{"Dial code"}</label>
                      <input className="field__input" id="f3351" type="text" defaultValue={"+974"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-co-lk" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-co-lk-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-co-lk-t">{"List item"}</h2>
                      <p className="modal__desc">{"Countries · Sri Lanka"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3356">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3356" defaultValue={"Countries"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3357">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3357" type="text" required={true} defaultValue={"LK"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3358">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3358" type="text" required={true} defaultValue={"Sri Lanka"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3355">{"Dial code"}</label>
                      <input className="field__input" id="f3355" type="text" defaultValue={"+94"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-co-np" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-co-np-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-co-np-t">{"List item"}</h2>
                      <p className="modal__desc">{"Countries · Nepal"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3360">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3360" defaultValue={"Countries"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3361">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3361" type="text" required={true} defaultValue={"NP"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3362">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3362" type="text" required={true} defaultValue={"Nepal"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3359">{"Dial code"}</label>
                      <input className="field__input" id="f3359" type="text" defaultValue={"+977"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-co-nl" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-co-nl-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-co-nl-t">{"List item"}</h2>
                      <p className="modal__desc">{"Countries · Netherlands"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3364">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3364" defaultValue={"Countries"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3365">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3365" type="text" required={true} defaultValue={"NL"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3366">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3366" type="text" required={true} defaultValue={"Netherlands"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3363">{"Dial code"}</label>
                      <input className="field__input" id="f3363" type="text" defaultValue={"+31"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-co-it" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-co-it-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-co-it-t">{"List item"}</h2>
                      <p className="modal__desc">{"Countries · Italy"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3368">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3368" defaultValue={"Countries"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3369">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3369" type="text" required={true} defaultValue={"IT"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3370">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3370" type="text" required={true} defaultValue={"Italy"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3367">{"Dial code"}</label>
                      <input className="field__input" id="f3367" type="text" defaultValue={"+39"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-co-ru" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-co-ru-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-co-ru-t">{"List item"}</h2>
                      <p className="modal__desc">{"Countries · Russia"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3372">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3372" defaultValue={"Countries"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3373">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3373" type="text" required={true} defaultValue={"RU"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3374">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3374" type="text" required={true} defaultValue={"Russia"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3371">{"Dial code"}</label>
                      <input className="field__input" id="f3371" type="text" defaultValue={"+7"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-co-jp" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-co-jp-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-co-jp-t">{"List item"}</h2>
                      <p className="modal__desc">{"Countries · Japan"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3376">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3376" defaultValue={"Countries"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3377">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3377" type="text" required={true} defaultValue={"JP"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3378">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3378" type="text" required={true} defaultValue={"Japan"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3375">{"Dial code"}</label>
                      <input className="field__input" id="f3375" type="text" defaultValue={"+81"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-co-ch" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-co-ch-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-co-ch-t">{"List item"}</h2>
                      <p className="modal__desc">{"Countries · Switzerland"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3380">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3380" defaultValue={"Countries"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3381">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3381" type="text" required={true} defaultValue={"CH"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3382">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3382" type="text" required={true} defaultValue={"Switzerland"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3379">{"Dial code"}</label>
                      <input className="field__input" id="f3379" type="text" defaultValue={"+41"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-co-se" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-co-se-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-co-se-t">{"List item"}</h2>
                      <p className="modal__desc">{"Countries · Sweden"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3384">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3384" defaultValue={"Countries"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3385">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3385" type="text" required={true} defaultValue={"SE"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3386">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3386" type="text" required={true} defaultValue={"Sweden"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3383">{"Dial code"}</label>
                      <input className="field__input" id="f3383" type="text" defaultValue={"+46"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-co-bd" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-co-bd-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-co-bd-t">{"List item"}</h2>
                      <p className="modal__desc">{"Countries · Bangladesh"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3388">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3388" defaultValue={"Countries"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3389">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3389" type="text" required={true} defaultValue={"BD"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3390">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3390" type="text" required={true} defaultValue={"Bangladesh"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3387">{"Dial code"}</label>
                      <input className="field__input" id="f3387" type="text" defaultValue={"+880"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-st-in-br" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-st-in-br-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-st-in-br-t">{"List item"}</h2>
                      <p className="modal__desc">{"States · Bihar"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3392">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3392" defaultValue={"States"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3393">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3393" type="text" required={true} defaultValue={"BR"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3394">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3394" type="text" required={true} defaultValue={"Bihar"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3391">{"GST state code"}</label>
                      <input className="field__input" id="f3391" type="text" defaultValue={"10"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-st-in-sk" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-st-in-sk-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-st-in-sk-t">{"List item"}</h2>
                      <p className="modal__desc">{"States · Sikkim"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3396">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3396" defaultValue={"States"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3397">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3397" type="text" required={true} defaultValue={"SK"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3398">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3398" type="text" required={true} defaultValue={"Sikkim"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3395">{"GST state code"}</label>
                      <input className="field__input" id="f3395" type="text" defaultValue={"11"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-st-in-ar" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-st-in-ar-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-st-in-ar-t">{"List item"}</h2>
                      <p className="modal__desc">{"States · Arunachal Pradesh"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3400">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3400" defaultValue={"States"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3401">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3401" type="text" required={true} defaultValue={"AR"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3402">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3402" type="text" required={true} defaultValue={"Arunachal Pradesh"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3399">{"GST state code"}</label>
                      <input className="field__input" id="f3399" type="text" defaultValue={"12"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-st-in-nl" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-st-in-nl-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-st-in-nl-t">{"List item"}</h2>
                      <p className="modal__desc">{"States · Nagaland"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3404">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3404" defaultValue={"States"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3405">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3405" type="text" required={true} defaultValue={"NL"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3406">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3406" type="text" required={true} defaultValue={"Nagaland"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3403">{"GST state code"}</label>
                      <input className="field__input" id="f3403" type="text" defaultValue={"13"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-st-in-mn" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-st-in-mn-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-st-in-mn-t">{"List item"}</h2>
                      <p className="modal__desc">{"States · Manipur"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3408">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3408" defaultValue={"States"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3409">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3409" type="text" required={true} defaultValue={"MN"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3410">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3410" type="text" required={true} defaultValue={"Manipur"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3407">{"GST state code"}</label>
                      <input className="field__input" id="f3407" type="text" defaultValue={"14"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-st-in-mz" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-st-in-mz-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-st-in-mz-t">{"List item"}</h2>
                      <p className="modal__desc">{"States · Mizoram"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3412">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3412" defaultValue={"States"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3413">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3413" type="text" required={true} defaultValue={"MZ"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3414">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3414" type="text" required={true} defaultValue={"Mizoram"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3411">{"GST state code"}</label>
                      <input className="field__input" id="f3411" type="text" defaultValue={"15"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-st-in-tr" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-st-in-tr-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-st-in-tr-t">{"List item"}</h2>
                      <p className="modal__desc">{"States · Tripura"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3416">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3416" defaultValue={"States"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3417">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3417" type="text" required={true} defaultValue={"TR"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3418">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3418" type="text" required={true} defaultValue={"Tripura"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3415">{"GST state code"}</label>
                      <input className="field__input" id="f3415" type="text" defaultValue={"16"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-st-in-ml" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-st-in-ml-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-st-in-ml-t">{"List item"}</h2>
                      <p className="modal__desc">{"States · Meghalaya"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3420">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3420" defaultValue={"States"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3421">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3421" type="text" required={true} defaultValue={"ML"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3422">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3422" type="text" required={true} defaultValue={"Meghalaya"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3419">{"GST state code"}</label>
                      <input className="field__input" id="f3419" type="text" defaultValue={"17"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-st-in-as" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-st-in-as-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-st-in-as-t">{"List item"}</h2>
                      <p className="modal__desc">{"States · Assam"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3424">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3424" defaultValue={"States"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3425">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3425" type="text" required={true} defaultValue={"AS"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3426">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3426" type="text" required={true} defaultValue={"Assam"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3423">{"GST state code"}</label>
                      <input className="field__input" id="f3423" type="text" defaultValue={"18"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-st-in-wb" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-st-in-wb-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-st-in-wb-t">{"List item"}</h2>
                      <p className="modal__desc">{"States · West Bengal"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3428">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3428" defaultValue={"States"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3429">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3429" type="text" required={true} defaultValue={"WB"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3430">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3430" type="text" required={true} defaultValue={"West Bengal"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3427">{"GST state code"}</label>
                      <input className="field__input" id="f3427" type="text" defaultValue={"19"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-st-in-jh" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-st-in-jh-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-st-in-jh-t">{"List item"}</h2>
                      <p className="modal__desc">{"States · Jharkhand"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3432">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3432" defaultValue={"States"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3433">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3433" type="text" required={true} defaultValue={"JH"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3434">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3434" type="text" required={true} defaultValue={"Jharkhand"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3431">{"GST state code"}</label>
                      <input className="field__input" id="f3431" type="text" defaultValue={"20"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-st-in-od" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-st-in-od-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-st-in-od-t">{"List item"}</h2>
                      <p className="modal__desc">{"States · Odisha"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3436">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3436" defaultValue={"States"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3437">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3437" type="text" required={true} defaultValue={"OD"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3438">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3438" type="text" required={true} defaultValue={"Odisha"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3435">{"GST state code"}</label>
                      <input className="field__input" id="f3435" type="text" defaultValue={"21"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-st-in-cg" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-st-in-cg-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-st-in-cg-t">{"List item"}</h2>
                      <p className="modal__desc">{"States · Chhattisgarh"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3440">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3440" defaultValue={"States"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3441">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3441" type="text" required={true} defaultValue={"CG"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3442">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3442" type="text" required={true} defaultValue={"Chhattisgarh"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3439">{"GST state code"}</label>
                      <input className="field__input" id="f3439" type="text" defaultValue={"22"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-st-in-mp" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-st-in-mp-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-st-in-mp-t">{"List item"}</h2>
                      <p className="modal__desc">{"States · Madhya Pradesh"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3444">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3444" defaultValue={"States"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3445">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3445" type="text" required={true} defaultValue={"MP"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3446">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3446" type="text" required={true} defaultValue={"Madhya Pradesh"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3443">{"GST state code"}</label>
                      <input className="field__input" id="f3443" type="text" defaultValue={"23"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-st-in-gj" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-st-in-gj-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-st-in-gj-t">{"List item"}</h2>
                      <p className="modal__desc">{"States · Gujarat"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3448">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3448" defaultValue={"States"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3449">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3449" type="text" required={true} defaultValue={"GJ"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3450">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3450" type="text" required={true} defaultValue={"Gujarat"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3447">{"GST state code"}</label>
                      <input className="field__input" id="f3447" type="text" defaultValue={"24"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-st-in-dd" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-st-in-dd-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-st-in-dd-t">{"List item"}</h2>
                      <p className="modal__desc">{"States · Dadra & Nagar Haveli and Daman & Diu"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3452">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3452" defaultValue={"States"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3453">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3453" type="text" required={true} defaultValue={"DD"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3454">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3454" type="text" required={true} defaultValue={"Dadra & Nagar Haveli and Daman & Diu"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3451">{"GST state code"}</label>
                      <input className="field__input" id="f3451" type="text" defaultValue={"26"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-st-in-mh" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-st-in-mh-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-st-in-mh-t">{"List item"}</h2>
                      <p className="modal__desc">{"States · Maharashtra"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3456">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3456" defaultValue={"States"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3457">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3457" type="text" required={true} defaultValue={"MH"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3458">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3458" type="text" required={true} defaultValue={"Maharashtra"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3455">{"GST state code"}</label>
                      <input className="field__input" id="f3455" type="text" defaultValue={"27"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-st-in-ka" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-st-in-ka-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-st-in-ka-t">{"List item"}</h2>
                      <p className="modal__desc">{"States · Karnataka"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3460">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3460" defaultValue={"States"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3461">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3461" type="text" required={true} defaultValue={"KA"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3462">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3462" type="text" required={true} defaultValue={"Karnataka"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3459">{"GST state code"}</label>
                      <input className="field__input" id="f3459" type="text" defaultValue={"29"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-st-in-ga" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-st-in-ga-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-st-in-ga-t">{"List item"}</h2>
                      <p className="modal__desc">{"States · Goa"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3464">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3464" defaultValue={"States"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3465">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3465" type="text" required={true} defaultValue={"GA"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3466">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3466" type="text" required={true} defaultValue={"Goa"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3463">{"GST state code"}</label>
                      <input className="field__input" id="f3463" type="text" defaultValue={"30"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-st-in-ld" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-st-in-ld-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-st-in-ld-t">{"List item"}</h2>
                      <p className="modal__desc">{"States · Lakshadweep"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3468">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3468" defaultValue={"States"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3469">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3469" type="text" required={true} defaultValue={"LD"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3470">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3470" type="text" required={true} defaultValue={"Lakshadweep"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3467">{"GST state code"}</label>
                      <input className="field__input" id="f3467" type="text" defaultValue={"31"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-st-in-kl" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-st-in-kl-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-st-in-kl-t">{"List item"}</h2>
                      <p className="modal__desc">{"States · Kerala"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3472">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3472" defaultValue={"States"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3473">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3473" type="text" required={true} defaultValue={"KL"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3474">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3474" type="text" required={true} defaultValue={"Kerala"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3471">{"GST state code"}</label>
                      <input className="field__input" id="f3471" type="text" defaultValue={"32"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-st-in-tn" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-st-in-tn-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-st-in-tn-t">{"List item"}</h2>
                      <p className="modal__desc">{"States · Tamil Nadu"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3476">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3476" defaultValue={"States"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3477">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3477" type="text" required={true} defaultValue={"TN"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3478">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3478" type="text" required={true} defaultValue={"Tamil Nadu"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3475">{"GST state code"}</label>
                      <input className="field__input" id="f3475" type="text" defaultValue={"33"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-st-in-py" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-st-in-py-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-st-in-py-t">{"List item"}</h2>
                      <p className="modal__desc">{"States · Puducherry"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3480">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3480" defaultValue={"States"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3481">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3481" type="text" required={true} defaultValue={"PY"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3482">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3482" type="text" required={true} defaultValue={"Puducherry"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3479">{"GST state code"}</label>
                      <input className="field__input" id="f3479" type="text" defaultValue={"34"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-st-in-an" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-st-in-an-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-st-in-an-t">{"List item"}</h2>
                      <p className="modal__desc">{"States · Andaman & Nicobar Islands"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3484">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3484" defaultValue={"States"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3485">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3485" type="text" required={true} defaultValue={"AN"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3486">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3486" type="text" required={true} defaultValue={"Andaman & Nicobar Islands"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3483">{"GST state code"}</label>
                      <input className="field__input" id="f3483" type="text" defaultValue={"35"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-st-in-tg" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-st-in-tg-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-st-in-tg-t">{"List item"}</h2>
                      <p className="modal__desc">{"States · Telangana"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3488">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3488" defaultValue={"States"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3489">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3489" type="text" required={true} defaultValue={"TG"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3490">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3490" type="text" required={true} defaultValue={"Telangana"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3487">{"GST state code"}</label>
                      <input className="field__input" id="f3487" type="text" defaultValue={"36"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-st-in-ap" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-st-in-ap-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-st-in-ap-t">{"List item"}</h2>
                      <p className="modal__desc">{"States · Andhra Pradesh"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3492">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3492" defaultValue={"States"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3493">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3493" type="text" required={true} defaultValue={"AP"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3494">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3494" type="text" required={true} defaultValue={"Andhra Pradesh"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3491">{"GST state code"}</label>
                      <input className="field__input" id="f3491" type="text" defaultValue={"37"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-st-in-la" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-st-in-la-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-st-in-la-t">{"List item"}</h2>
                      <p className="modal__desc">{"States · Ladakh"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3496">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3496" defaultValue={"States"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3497">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3497" type="text" required={true} defaultValue={"LA"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3498">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3498" type="text" required={true} defaultValue={"Ladakh"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3495">{"GST state code"}</label>
                      <input className="field__input" id="f3495" type="text" defaultValue={"38"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-st-in-jk" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-st-in-jk-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-st-in-jk-t">{"List item"}</h2>
                      <p className="modal__desc">{"States · Jammu & Kashmir"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3500">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3500" defaultValue={"States"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3501">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3501" type="text" required={true} defaultValue={"JK"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3502">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3502" type="text" required={true} defaultValue={"Jammu & Kashmir"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3499">{"GST state code"}</label>
                      <input className="field__input" id="f3499" type="text" defaultValue={"01"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-st-in-hp" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-st-in-hp-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-st-in-hp-t">{"List item"}</h2>
                      <p className="modal__desc">{"States · Himachal Pradesh"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3504">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3504" defaultValue={"States"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3505">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3505" type="text" required={true} defaultValue={"HP"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3506">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3506" type="text" required={true} defaultValue={"Himachal Pradesh"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3503">{"GST state code"}</label>
                      <input className="field__input" id="f3503" type="text" defaultValue={"02"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-st-in-pb" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-st-in-pb-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-st-in-pb-t">{"List item"}</h2>
                      <p className="modal__desc">{"States · Punjab"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3508">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3508" defaultValue={"States"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3509">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3509" type="text" required={true} defaultValue={"PB"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3510">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3510" type="text" required={true} defaultValue={"Punjab"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3507">{"GST state code"}</label>
                      <input className="field__input" id="f3507" type="text" defaultValue={"03"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-st-in-ch" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-st-in-ch-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-st-in-ch-t">{"List item"}</h2>
                      <p className="modal__desc">{"States · Chandigarh"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3512">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3512" defaultValue={"States"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3513">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3513" type="text" required={true} defaultValue={"CH"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3514">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3514" type="text" required={true} defaultValue={"Chandigarh"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3511">{"GST state code"}</label>
                      <input className="field__input" id="f3511" type="text" defaultValue={"04"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-st-in-uk" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-st-in-uk-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-st-in-uk-t">{"List item"}</h2>
                      <p className="modal__desc">{"States · Uttarakhand"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3516">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3516" defaultValue={"States"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3517">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3517" type="text" required={true} defaultValue={"UK"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3518">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3518" type="text" required={true} defaultValue={"Uttarakhand"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3515">{"GST state code"}</label>
                      <input className="field__input" id="f3515" type="text" defaultValue={"05"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-st-in-hr" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-st-in-hr-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-st-in-hr-t">{"List item"}</h2>
                      <p className="modal__desc">{"States · Haryana"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3520">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3520" defaultValue={"States"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3521">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3521" type="text" required={true} defaultValue={"HR"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3522">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3522" type="text" required={true} defaultValue={"Haryana"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3519">{"GST state code"}</label>
                      <input className="field__input" id="f3519" type="text" defaultValue={"06"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-st-in-dl" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-st-in-dl-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-st-in-dl-t">{"List item"}</h2>
                      <p className="modal__desc">{"States · Delhi"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3524">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3524" defaultValue={"States"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3525">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3525" type="text" required={true} defaultValue={"DL"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3526">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3526" type="text" required={true} defaultValue={"Delhi"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3523">{"GST state code"}</label>
                      <input className="field__input" id="f3523" type="text" defaultValue={"07"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-st-in-rj" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-st-in-rj-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-st-in-rj-t">{"List item"}</h2>
                      <p className="modal__desc">{"States · Rajasthan"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3528">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3528" defaultValue={"States"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3529">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3529" type="text" required={true} defaultValue={"RJ"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3530">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3530" type="text" required={true} defaultValue={"Rajasthan"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3527">{"GST state code"}</label>
                      <input className="field__input" id="f3527" type="text" defaultValue={"08"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-st-in-up" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-st-in-up-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-st-in-up-t">{"List item"}</h2>
                      <p className="modal__desc">{"States · Uttar Pradesh"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3532">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3532" defaultValue={"States"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3533">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3533" type="text" required={true} defaultValue={"UP"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3534">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3534" type="text" required={true} defaultValue={"Uttar Pradesh"} />
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3531">{"GST state code"}</label>
                      <input className="field__input" id="f3531" type="text" defaultValue={"09"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P15-new" data-code="RSS-P15" role="dialog" aria-modal="true" aria-labelledby="RSS-P15-new-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P15-new-t">{"New list item"}</h2>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3535">{"List"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3535" defaultValue={"VIP levels"}>
                            <option>{"VIP levels"}</option>
                            <option>{"Preferences"}</option>
                            <option>{"Titles"}</option>
                            <option>{"Countries"}</option>
                            <option>{"States"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3536">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3536" type="text" required={true} defaultValue={""} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3537">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3537" type="text" required={true} defaultValue={""} />
                      </div>
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <details className="helpbox">
                <summary>
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#help" />
                  </svg>
                  {" Help for this screen "}
                  <span className="code-chip">{"RSS-18"}</span>
                </summary>
                <dl className="helpbox__body">
                  <dt>{"What it is for"}</dt>
                  <dd>{"VIP levels, preferences, titles, countries and states"}</dd>
                  <dt>{"Opened from"}</dt>
                  <dd>
                    <Link to={"/setup/rss-01-setup-home-checklist"}>{"RSS-01"}</Link>
                  </dd>
                  <dt>{"Leads to"}</dt>
                  <dd>{"Tabs"}</dd>
                  <dt>{"Note"}</dt>
                  <dd>{"Static screen (HTML and CSS only): it shows the layout, fields and sample data. Saving and live data come when the backend is connected."}</dd>
                </dl>
              </details>
              <div className="modal" id="rss18-new-guest-class" data-flow="add-form" role="dialog" aria-modal="true" aria-labelledby="rss18-new-guest-class-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="rss18-new-guest-class-t">{"New guest class"}</h2>
                      <p className="modal__desc">{"Shown on the arrival list (FD-02) and the room allocation list (RS-09)."}</p>
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
                        <label className="field__label" htmlFor="rss18-new-guest-class-f1">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="rss18-new-guest-class-f1" type="text" placeholder="For example CREW" />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rss18-new-guest-class-f2">
                          {"Guest class "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="rss18-new-guest-class-f2" type="text" placeholder="For example Airline crew" />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rss18-new-guest-class-f3">
                          {"How it is given "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rss18-new-guest-class-f3" defaultValue={""}>
                            <option value="">{"Select…"}</option>
                            <option>{"Automatic, from the booking"}</option>
                            <option>{"Chosen on the guest profile"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rss18-new-guest-class-f4">{"Shown on"}</label>
                        <input className="field__input" id="rss18-new-guest-class-f4" type="text" placeholder="For example Arrivals, allocation" />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rss18-new-guest-class-f5">{"Status"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rss18-new-guest-class-f5" defaultValue={""}>
                            <option value="">{"Select…"}</option>
                            <option>{"Active"}</option>
                            <option>{"Inactive"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save guest class"}</a>
                  </div>
                </div>
              </div>
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
