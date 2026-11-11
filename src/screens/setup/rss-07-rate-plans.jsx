// GENERATED from public/setup/rss-07-rate-plans/index.html by scripts/convert_legacy.py.
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
    "href": "/setup/rss-07-rate-plans/rss-07-rate-plans.css",
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

export default function SetupRss07RatePlans() {
  return (
    <ScreenShell title="Rate Plans" sheets={SHEETS} inlineCss={INLINE_CSS}>
      <div data-screen="RSS-07" data-code="RSS-07" data-static="1" className="legacy-body">
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
            <main className="app__content" id="main" data-code="RSS-07" tabIndex="-1">
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
                        <span aria-current="page">{"Rate Plans"}</span>
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="page-header__row">
                  <div className="page-header__text">
                    <h1 className="page-header__title">{"Rate Plans"}</h1>
                  </div>
                  <span className="code-chip" title="Screen code">{"RSS-07"}</span>
                  <div className="page-header__filters">
                    <div className="hctl">
                      <div className="hsearch">
                        <input className="hsearch__input" id="hs1182" type="search" name="q" placeholder="Search rate plans" aria-label="Search rate plans" autoComplete="off" />
                        <label className="hsearch__ic" htmlFor="hs1182" title="Search">
                          <svg className="icon" width="17" height="17" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#search" />
                          </svg>
                          <span className="sr-only">{"Search"}</span>
                        </label>
                      </div>
                      <label className="hfilter__btn" htmlFor="hf1183" title="Show or hide the filters">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#filter" />
                        </svg>
                        <span>{"Filter"}</span>
                        <i className="hfilter__dot" aria-hidden="true" />
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </label>
                      <input className="hfilter__tg" type="checkbox" id="hf1183" aria-label="Show filters" />
                      <form className="hfilter" method="get" role="search" aria-label="Filters">
                        <span className="hfilter__hic" title="Filters">
                          <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#sliders" />
                          </svg>
                        </span>
                        <div className="hfilter__grid">
                          <label className="hf-f ">
                            <span className="hf-f__l">{"Type"}</span>
                            <select className="hf-f__c">
                              <option>{"All types"}</option>
                              <option>{"Best available"}</option>
                              <option>{"Member"}</option>
                              <option>{"Advance purchase"}</option>
                              <option>{"Corporate"}</option>
                              <option>{"Travel agent"}</option>
                              <option>{"Package"}</option>
                              <option>{"Group"}</option>
                              <option>{"Complimentary"}</option>
                            </select>
                            <svg className="icon hf-f__chev" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </label>
                          <label className="hf-f ">
                            <span className="hf-f__l">{"Status"}</span>
                            <select className="hf-f__c">
                              <option>{"All statuses"}</option>
                              <option>{"Active"}</option>
                              <option>{"Inactive"}</option>
                            </select>
                            <svg className="icon hf-f__chev" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </label>
                        </div>
                        <div className="hfilter__acts">
                          <button className="hfilter__clear" type="reset" title="Clear all filters">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#refresh" />
                            </svg>
                            <span>{"Clear"}</span>
                          </button>
                          <label className="hfilter__done" htmlFor="hf1183">
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
                    <Link className="btn" data-leads-to="RSS-08" to={"/setup/rss-08-rate-calendar"}>
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#calendar-range" />
                      </svg>
                      {"Rate Calendar"}
                    </Link>
                    <a className="btn btn--primary" href="#RSS-07a-new" data-opens="RSS-07a">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#plus" />
                      </svg>
                      {"New rate plan"}
                    </a>
                  </div>
                </div>
              </header>
              <div className="pgw">
                <div className="s-scroll">
                  <table className="srt dt__table dt--hug" data-code="RSS-07-list" style={{"--srt-cols": "auto auto auto auto auto auto auto max-content"}} data-mc="">
                    <caption className="sr-only">{"Rate plans"}</caption>
                    <thead>
                      <tr>
                        <th scope="col">
                          <input className="srt-i srt-a0" type="radio" name="strss070" id="strss070-0a" aria-label="Sort by Code, lowest or A first" />
                          <input className="srt-i srt-d0" type="radio" name="strss070" id="strss070-0d" aria-label="Sort by Code, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="strss070-0a">{"Code"}</label>
                          <label className="srt-l srt-l--d" htmlFor="strss070-0d" aria-hidden="true">{"Code"}</label>
                        </th>
                        <th scope="col">
                          <input className="srt-i srt-a1" type="radio" name="strss070" id="strss070-1a" aria-label="Sort by Rate plan, lowest or A first" />
                          <input className="srt-i srt-d1" type="radio" name="strss070" id="strss070-1d" aria-label="Sort by Rate plan, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="strss070-1a">{"Rate plan"}</label>
                          <label className="srt-l srt-l--d" htmlFor="strss070-1d" aria-hidden="true">{"Rate plan"}</label>
                        </th>
                        <th scope="col">
                          <input className="srt-i srt-a2" type="radio" name="strss070" id="strss070-2a" aria-label="Sort by Type, lowest or A first" />
                          <input className="srt-i srt-d2" type="radio" name="strss070" id="strss070-2d" aria-label="Sort by Type, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="strss070-2a">{"Type"}</label>
                          <label className="srt-l srt-l--d" htmlFor="strss070-2d" aria-hidden="true">{"Type"}</label>
                        </th>
                        <th scope="col">
                          <input className="srt-i srt-a3" type="radio" name="strss070" id="strss070-3a" aria-label="Sort by Meals, lowest or A first" />
                          <input className="srt-i srt-d3" type="radio" name="strss070" id="strss070-3d" aria-label="Sort by Meals, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="strss070-3a">{"Meals"}</label>
                          <label className="srt-l srt-l--d" htmlFor="strss070-3d" aria-hidden="true">{"Meals"}</label>
                        </th>
                        <th scope="col">
                          <input className="srt-i srt-a4" type="radio" name="strss070" id="strss070-4a" aria-label="Sort by Price rule, lowest or A first" />
                          <input className="srt-i srt-d4" type="radio" name="strss070" id="strss070-4d" aria-label="Sort by Price rule, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="strss070-4a">{"Price rule"}</label>
                          <label className="srt-l srt-l--d" htmlFor="strss070-4d" aria-hidden="true">{"Price rule"}</label>
                        </th>
                        <th scope="col">
                          <input className="srt-i srt-a5" type="radio" name="strss070" id="strss070-5a" aria-label="Sort by Visible to, lowest or A first" />
                          <input className="srt-i srt-d5" type="radio" name="strss070" id="strss070-5d" aria-label="Sort by Visible to, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="strss070-5a">{"Visible to"}</label>
                          <label className="srt-l srt-l--d" htmlFor="strss070-5d" aria-hidden="true">{"Visible to"}</label>
                        </th>
                        <th scope="col">{"Status"}</th>
                        <th scope="col" />
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{"--k0": "4", "--k1": "6", "--k2": "2", "--k3": "2", "--k4": "9", "--k5": "3"}}>
                        <td className="dt__td nw" data-label="Code" data-t="">
                          <strong>{"BAR-CP"}</strong>
                        </td>
                        <td className="dt__td" data-label="Rate plan">{"Best available rate – with breakfast"}</td>
                        <td className="dt__td nw" data-label="Type" data-w2="">{"Best available"}</td>
                        <td className="dt__td nw" data-label="Meals">{"CP"}</td>
                        <td className="dt__td nw" data-label="Price rule" data-w2="">{"Stored prices (base)"}</td>
                        <td className="dt__td nw" data-label="Visible to" data-w2="">{"Everyone"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#RSS-07a-BAR-CP" data-opens="RSS-07a">{"Edit"}</a>
                          {" "}
                          <a className="btn" href="#RSS-P05-BAR-CP" data-opens="RSS-P05">{"Copy"}</a>
                        </td>
                      </tr>
                      <tr style={{"--k0": "5", "--k1": "5", "--k2": "2", "--k3": "3", "--k4": "8", "--k5": "3"}}>
                        <td className="dt__td nw" data-label="Code" data-t="">
                          <strong>{"BAR-EP"}</strong>
                        </td>
                        <td className="dt__td" data-label="Rate plan">{"Best available rate – room only"}</td>
                        <td className="dt__td nw" data-label="Type" data-w2="">{"Best available"}</td>
                        <td className="dt__td nw" data-label="Meals">{"EP"}</td>
                        <td className="dt__td nw" data-label="Price rule" data-w2="">{"BAR-CP − breakfast ₹799 per guest"}</td>
                        <td className="dt__td nw" data-label="Visible to" data-w2="">{"Everyone"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#RSS-07a-BAR-EP" data-opens="RSS-07a">{"Edit"}</a>
                          {" "}
                          <a className="btn" href="#RSS-P05-BAR-EP" data-opens="RSS-P05">{"Copy"}</a>
                        </td>
                      </tr>
                      <tr style={{"--k0": "6", "--k1": "4", "--k2": "2", "--k3": "4", "--k4": "8", "--k5": "3"}}>
                        <td className="dt__td nw" data-label="Code" data-t="">
                          <strong>{"BAR-MAP"}</strong>
                        </td>
                        <td className="dt__td" data-label="Rate plan">{"Best available rate – breakfast and dinner"}</td>
                        <td className="dt__td nw" data-label="Type" data-w2="">{"Best available"}</td>
                        <td className="dt__td nw" data-label="Meals">{"MAP"}</td>
                        <td className="dt__td nw" data-label="Price rule" data-w2="">{"BAR-CP + dinner ₹1,399 per guest"}</td>
                        <td className="dt__td nw" data-label="Visible to" data-w2="">{"Everyone"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#RSS-07a-BAR-MAP" data-opens="RSS-07a">{"Edit"}</a>
                          {" "}
                          <a className="btn" href="#RSS-P05-BAR-MAP" data-opens="RSS-P05">{"Copy"}</a>
                        </td>
                      </tr>
                      <tr style={{"--k0": "3", "--k1": "3", "--k2": "2", "--k3": "1", "--k4": "8", "--k5": "3"}}>
                        <td className="dt__td nw" data-label="Code" data-t="">
                          <strong>{"BAR-AP"}</strong>
                        </td>
                        <td className="dt__td" data-label="Rate plan">{"Best available rate – all meals"}</td>
                        <td className="dt__td nw" data-label="Type" data-w2="">{"Best available"}</td>
                        <td className="dt__td nw" data-label="Meals">{"AP"}</td>
                        <td className="dt__td nw" data-label="Price rule" data-w2="">{"BAR-CP + lunch and dinner ₹2,598 per guest"}</td>
                        <td className="dt__td nw" data-label="Visible to" data-w2="">{"Everyone"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#RSS-07a-BAR-AP" data-opens="RSS-07a">{"Edit"}</a>
                          {" "}
                          <a className="btn" href="#RSS-P05-BAR-AP" data-opens="RSS-P05">{"Copy"}</a>
                        </td>
                      </tr>
                      <tr style={{"--k0": "7", "--k1": "10", "--k2": "6", "--k3": "2", "--k4": "2", "--k5": "1"}}>
                        <td className="dt__td nw" data-label="Code" data-t="">
                          <strong>{"CLUB"}</strong>
                        </td>
                        <td className="dt__td nw" data-label="Rate plan" data-w2="">{"Member rate"}</td>
                        <td className="dt__td nw" data-label="Type">{"Member"}</td>
                        <td className="dt__td nw" data-label="Meals">{"CP"}</td>
                        <td className="dt__td nw" data-label="Price rule" data-w2="">{"BAR-CP −10%"}</td>
                        <td className="dt__td nw" data-label="Visible to" data-w2="">{"Club members"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#RSS-07a-CLUB" data-opens="RSS-07a">{"Edit"}</a>
                          {" "}
                          <a className="btn" href="#RSS-P05-CLUB" data-opens="RSS-P05">{"Copy"}</a>
                        </td>
                      </tr>
                      <tr style={{"--k0": "1", "--k1": "1", "--k2": "1", "--k3": "2", "--k4": "5", "--k5": "3"}}>
                        <td className="dt__td nw" data-label="Code" data-t="">
                          <strong>{"ADV15"}</strong>
                        </td>
                        <td className="dt__td" data-label="Rate plan">{"Advance purchase – 15% off"}</td>
                        <td className="dt__td nw" data-label="Type" data-w2="">{"Advance purchase"}</td>
                        <td className="dt__td nw" data-label="Meals">{"CP"}</td>
                        <td className="dt__td nw" data-label="Price rule" data-w2="">{"BAR-CP −15%"}</td>
                        <td className="dt__td nw" data-label="Visible to" data-w2="">{"Everyone"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#RSS-07a-ADV15" data-opens="RSS-07a">{"Edit"}</a>
                          {" "}
                          <a className="btn" href="#RSS-P05-ADV15" data-opens="RSS-P05">{"Copy"}</a>
                        </td>
                      </tr>
                      <tr style={{"--k0": "9", "--k1": "8", "--k2": "4", "--k3": "2", "--k4": "4", "--k5": "2"}}>
                        <td className="dt__td nw" data-label="Code" data-t="">
                          <strong>{"CORP"}</strong>
                        </td>
                        <td className="dt__td nw" data-label="Rate plan" data-w2="">{"Corporate rate"}</td>
                        <td className="dt__td nw" data-label="Type" data-w2="">{"Corporate"}</td>
                        <td className="dt__td nw" data-label="Meals">{"CP"}</td>
                        <td className="dt__td nw" data-label="Price rule" data-w2="">{"BAR-CP −12%"}</td>
                        <td className="dt__td nw" data-label="Visible to" data-w2="">{"Corporate accounts"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#RSS-07a-CORP" data-opens="RSS-07a">{"Edit"}</a>
                          {" "}
                          <a className="btn" href="#RSS-P05-CORP" data-opens="RSS-P05">{"Copy"}</a>
                        </td>
                      </tr>
                      <tr style={{"--k0": "2", "--k1": "11", "--k2": "8", "--k3": "2", "--k4": "6", "--k5": "5"}}>
                        <td className="dt__td nw" data-label="Code" data-t="">
                          <strong>{"AGENT"}</strong>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="">{"Travel agent net rate"}</td>
                        <td className="dt__td nw" data-label="Type" data-w2="">{"Travel agent"}</td>
                        <td className="dt__td nw" data-label="Meals">{"CP"}</td>
                        <td className="dt__td nw" data-label="Price rule" data-w2="">{"BAR-CP −18%"}</td>
                        <td className="dt__td nw" data-label="Visible to" data-w2="">{"Travel agents"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#RSS-07a-AGENT" data-opens="RSS-07a">{"Edit"}</a>
                          {" "}
                          <a className="btn" href="#RSS-P05-AGENT" data-opens="RSS-P05">{"Copy"}</a>
                        </td>
                      </tr>
                      <tr style={{"--k0": "10", "--k1": "9", "--k2": "5", "--k3": "2", "--k4": "7", "--k5": "4"}}>
                        <td className="dt__td nw" data-label="Code" data-t="">
                          <strong>{"GROUP"}</strong>
                        </td>
                        <td className="dt__td nw" data-label="Rate plan" data-w2="">{"Group rate"}</td>
                        <td className="dt__td nw" data-label="Type">{"Group"}</td>
                        <td className="dt__td nw" data-label="Meals">{"CP"}</td>
                        <td className="dt__td nw" data-label="Price rule" data-w2="">{"BAR-CP −20%"}</td>
                        <td className="dt__td nw" data-label="Visible to" data-w2="">{"Staff only"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#RSS-07a-GROUP" data-opens="RSS-07a">{"Edit"}</a>
                          {" "}
                          <a className="btn" href="#RSS-P05-GROUP" data-opens="RSS-P05">{"Copy"}</a>
                        </td>
                      </tr>
                      <tr style={{"--k0": "11", "--k1": "2", "--k2": "7", "--k3": "4", "--k4": "1", "--k5": "3"}}>
                        <td className="dt__td nw" data-label="Code" data-w2="" data-t="">
                          <strong>{"PKG-AYUR"}</strong>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="">{"Ayurveda retreat package"}</td>
                        <td className="dt__td nw" data-label="Type">{"Package"}</td>
                        <td className="dt__td nw" data-label="Meals">{"MAP"}</td>
                        <td className="dt__td nw" data-label="Price rule" data-w2="">{"BAR-CP + ₹3,800"}</td>
                        <td className="dt__td nw" data-label="Visible to" data-w2="">{"Everyone"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#RSS-07a-PKG-AYUR" data-opens="RSS-07a">{"Edit"}</a>
                          {" "}
                          <a className="btn" href="#RSS-P05-PKG-AYUR" data-opens="RSS-P05">{"Copy"}</a>
                        </td>
                      </tr>
                      <tr style={{"--k0": "8", "--k1": "7", "--k2": "3", "--k3": "2", "--k4": "3", "--k5": "4"}}>
                        <td className="dt__td nw" data-label="Code" data-t="">
                          <strong>{"COMP"}</strong>
                        </td>
                        <td className="dt__td nw" data-label="Rate plan" data-w2="">{"Complimentary"}</td>
                        <td className="dt__td nw" data-label="Type" data-w2="">{"Complimentary"}</td>
                        <td className="dt__td nw" data-label="Meals">{"CP"}</td>
                        <td className="dt__td nw" data-label="Price rule" data-w2="">{"BAR-CP −100%"}</td>
                        <td className="dt__td nw" data-label="Visible to" data-w2="">{"Staff only"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#RSS-07a-COMP" data-opens="RSS-07a">{"Edit"}</a>
                          {" "}
                          <a className="btn" href="#RSS-P05-COMP" data-opens="RSS-P05">{"Copy"}</a>
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
                    <input className="pg-in" type="radio" name="pg1r10" id="pg1r10p1" defaultChecked={true} />
                    <label className="pg-n" htmlFor="pg1r10p1" aria-label="Page 1">{"1"}</label>
                    <input className="pg-in" type="radio" name="pg1r10" id="pg1r10p2" />
                    <label className="pg-n" htmlFor="pg1r10p2" aria-label="Page 2">{"2"}</label>
                    <span className="pg-info">
                      <span>
                        {"Showing "}
                        <b>{"1–10"}</b>
                        {" of 11"}
                      </span>
                      <span>
                        {"Showing "}
                        <b>{"11–11"}</b>
                        {" of 11"}
                      </span>
                    </span>
                    <span className="pg-prev">
                      <span className="pg-arr is-off">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-left" />
                        </svg>
                      </span>
                      <label className="pg-arr" htmlFor="pg1r10p1" title="Previous page">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-left" />
                        </svg>
                      </label>
                    </span>
                    <span className="pg-next">
                      <label className="pg-arr" htmlFor="pg1r10p2" title="Next page">
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
                    <input className="pg-in" type="radio" name="pg1r15" id="pg1r15p1" defaultChecked={true} />
                    <label className="pg-n" htmlFor="pg1r15p1" aria-label="Page 1">{"1"}</label>
                    <span className="pg-info">
                      <span>
                        {"Showing "}
                        <b>{"1–11"}</b>
                        {" of 11"}
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
                        <b>{"1–11"}</b>
                        {" of 11"}
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
                        <b>{"1–11"}</b>
                        {" of 11"}
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
                        <b>{"1–11"}</b>
                        {" of 11"}
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
              <div className="s-note">
                <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#info" />
                </svg>
                <span>
                  {"Only "}
                  <strong>{"BAR-CP"}</strong>
                  {" stores prices. Every other plan follows it by a rule, so one price change in the Rate Calendar updates all of them."}
                </span>
              </div>
              <div className="modal modal--full" id="RSS-07a-BAR-CP" data-code="RSS-07a" role="dialog" aria-modal="true" aria-labelledby="RSS-07a-BAR-CP-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-07a-BAR-CP-t">{"Rate plan BAR-CP"}</h2>
                      <p className="modal__desc">{"Best available rate – with breakfast"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="stabs">
                      <input type="radio" name="rpBARCP" id="rpBARCP-1" aria-label="Basic" defaultChecked={true} />
                      <input type="radio" name="rpBARCP" id="rpBARCP-2" aria-label="Prices & extras" />
                      <input type="radio" name="rpBARCP" id="rpBARCP-3" aria-label="Inclusions" />
                      <input type="radio" name="rpBARCP" id="rpBARCP-4" aria-label="Policies" />
                      <input type="radio" name="rpBARCP" id="rpBARCP-5" aria-label="Channels & window" />
                      <div className="stabs__list" role="tablist">
                        <label htmlFor="rpBARCP-1">{"Basic"}</label>
                        <label htmlFor="rpBARCP-2">{"Prices & extras"}</label>
                        <label htmlFor="rpBARCP-3">{"Inclusions"}</label>
                        <label htmlFor="rpBARCP-4">{"Policies"}</label>
                        <label htmlFor="rpBARCP-5">{"Channels & window"}</label>
                      </div>
                      <div className="stabs__panels">
                        <section className="stabs__panel" data-code="RSS-07a" aria-label="Basic">
                          <div className="s-grid2">
                            <div className="field">
                              <label className="field__label" htmlFor="f1184">
                                {"Code "}
                                <span className="field__req">{"*"}</span>
                              </label>
                              <input className="field__input" id="f1184" type="text" required={true} defaultValue={"BAR-CP"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f1185">
                                {"Name "}
                                <span className="field__req">{"*"}</span>
                              </label>
                              <input className="field__input" id="f1185" type="text" required={true} defaultValue={"Best available rate – with breakfast"} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1186">{"Type"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1186" defaultValue={"Best available"}>
                                  <option>{"Best available"}</option>
                                  <option>{"Member"}</option>
                                  <option>{"Advance purchase"}</option>
                                  <option>{"Corporate"}</option>
                                  <option>{"Travel agent"}</option>
                                  <option>{"Package"}</option>
                                  <option>{"Group"}</option>
                                  <option>{"Complimentary"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f1187">{"Meal plan"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1187" defaultValue={"CP – Room with breakfast"}>
                                  <option>{"EP – Room only"}</option>
                                  <option>{"CP – Room with breakfast"}</option>
                                  <option>{"MAP – Breakfast and dinner"}</option>
                                  <option>{"AP – All meals"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <fieldset className="form-section">
                            <legend className="form-section__title">{"Room types"}</legend>
                            <div className="row">
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"GDLX"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"PDLX"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"DLXS"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"PRMS"}
                              </label>
                            </div>
                          </fieldset>
                          <label className="sw">
                            <input type="checkbox" role="switch" defaultChecked={true} />
                            <span className="sw__track" />
                            {"Active"}
                          </label>
                          <fieldset className="form-section">
                            <legend className="form-section__title">{"Selling rules"}</legend>
                            <div className="s-grid3">
                              <div className="field" data-fw="s">
                                <label className="field__label" htmlFor="f1188">{"Sell from"}</label>
                                <div className="dpk">
                                  <button type="button" className="dpk-f field__input" id="f1188" aria-haspopup="dialog">
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
                                      <select className="dpk-m" name="f1188-month" aria-label="Month" defaultValue={"10"}>
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
                                      <select className="dpk-y" name="f1188-year" aria-label="Year" defaultValue={"2026"}>
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
                                        <input type="radio" name="f1188" value="01" />
                                        {"1"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1188" value="02" />
                                        {"2"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1188" value="03" />
                                        {"3"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1188" value="04" />
                                        {"4"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1188" value="05" />
                                        {"5"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1188" value="06" />
                                        {"6"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1188" value="07" />
                                        {"7"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1188" value="08" />
                                        {"8"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1188" value="09" />
                                        {"9"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1188" value="10" />
                                        {"10"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1188" value="11" />
                                        {"11"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1188" value="12" />
                                        {"12"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1188" value="13" />
                                        {"13"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1188" value="14" />
                                        {"14"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1188" value="15" />
                                        {"15"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1188" value="16" />
                                        {"16"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1188" value="17" />
                                        {"17"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1188" value="18" />
                                        {"18"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1188" value="19" />
                                        {"19"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1188" value="20" />
                                        {"20"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1188" value="21" />
                                        {"21"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1188" value="22" defaultChecked={true} />
                                        {"22"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1188" value="23" />
                                        {"23"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1188" value="24" />
                                        {"24"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1188" value="25" />
                                        {"25"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1188" value="26" />
                                        {"26"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1188" value="27" />
                                        {"27"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1188" value="28" />
                                        {"28"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1188" value="29" />
                                        {"29"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1188" value="30" />
                                        {"30"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1188" value="31" />
                                        {"31"}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="field" data-fw="s">
                                <label className="field__label" htmlFor="f1189">{"Sell until"}</label>
                                <div className="dpk">
                                  <button type="button" className="dpk-f field__input" id="f1189" aria-haspopup="dialog">
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
                                      <select className="dpk-m" name="f1189-month" aria-label="Month" defaultValue={"10"}>
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
                                      <select className="dpk-y" name="f1189-year" aria-label="Year" defaultValue={"2026"}>
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
                                        <input type="radio" name="f1189" value="01" />
                                        {"1"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1189" value="02" />
                                        {"2"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1189" value="03" />
                                        {"3"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1189" value="04" />
                                        {"4"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1189" value="05" />
                                        {"5"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1189" value="06" />
                                        {"6"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1189" value="07" />
                                        {"7"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1189" value="08" />
                                        {"8"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1189" value="09" />
                                        {"9"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1189" value="10" />
                                        {"10"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1189" value="11" />
                                        {"11"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1189" value="12" />
                                        {"12"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1189" value="13" />
                                        {"13"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1189" value="14" />
                                        {"14"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1189" value="15" />
                                        {"15"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1189" value="16" />
                                        {"16"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1189" value="17" />
                                        {"17"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1189" value="18" />
                                        {"18"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1189" value="19" />
                                        {"19"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1189" value="20" />
                                        {"20"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1189" value="21" />
                                        {"21"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1189" value="22" />
                                        {"22"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1189" value="23" />
                                        {"23"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1189" value="24" />
                                        {"24"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1189" value="25" />
                                        {"25"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1189" value="26" />
                                        {"26"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1189" value="27" />
                                        {"27"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1189" value="28" />
                                        {"28"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1189" value="29" />
                                        {"29"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1189" value="30" />
                                        {"30"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1189" value="31" />
                                        {"31"}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <span className="field__hint">{"Empty = no end"}</span>
                              </div>
                              <div className="field">
                                <label className="field__label" htmlFor="f1190">{"Price priority"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="f1190" defaultValue={"Contract → promotion → season → derived → manual"}>
                                    <option>{"Contract → promotion → season → derived → manual"}</option>
                                  </select>
                                  <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                                <span className="field__hint">{"Two rules that conflict are refused until one is given priority"}</span>
                              </div>
                            </div>
                            <div className="s-grid2">
                              <div className="field">
                                <label className="field__label" htmlFor="f1191">{"Child age counted on"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="f1191" disabled={true} defaultValue={"Arrival date"}>
                                    <option>{"Arrival date"}</option>
                                    <option>{"Each night of the stay"}</option>
                                  </select>
                                  <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                                <span className="field__hint" data-flow="owner">
                                  {"Set in Reservation Parameters (RSS-14). "}
                                  <Link data-leads-to="RSS-14" to={"/setup/rss-14-reservation-parameters"}>{"Change it there"}</Link>
                                </span>
                              </div>
                              <div className="field">
                                <label className="field__label" htmlFor="f1192">{"Children's meals and extra bed"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="f1192" defaultValue={"Free up to age 11 with existing beds"}>
                                    <option>{"Free up to age 11 with existing beds"}</option>
                                    <option>{"Charge meals only"}</option>
                                    <option>{"Charge meals and extra bed"}</option>
                                  </select>
                                  <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div className="s-note">
                              <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#info" />
                              </svg>
                              <span>{"A rate plan cannot follow itself, directly or through other plans. Saving is refused if the chain would loop. A retired plan stops new sales but stays readable on bookings already made."}</span>
                            </div>
                          </fieldset>
                        </section>
                        <section className="stabs__panel" data-code="RSS-07b" aria-label="Prices & extras">
                          <div className="s-note">
                            <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#info" />
                            </svg>
                            <span>{"This is the base plan: it stores the prices in the Rate Calendar. Every other plan follows it."}</span>
                          </div>
                          <div className="s-grid3">
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1193">{"Extra adult / night"}</label>
                              <div className="field__wrap field__wrap--money">
                                <span className="field__prefix">{"₹"}</span>
                                <input className="field__input num" id="f1193" inputMode="decimal" defaultValue={"1,800"} />
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1194">{"Extra child (above 11) / night"}</label>
                              <div className="field__wrap field__wrap--money">
                                <span className="field__prefix">{"₹"}</span>
                                <input className="field__input num" id="f1194" inputMode="decimal" defaultValue={"0"} />
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1195">{"Extra bed / night"}</label>
                              <div className="field__wrap field__wrap--money">
                                <span className="field__prefix">{"₹"}</span>
                                <input readOnly={true} className="field__input num" id="f1195" inputMode="decimal" defaultValue={"1,500"} />
                              </div>
                              <span className="field__hint" data-flow="owner-eb">
                                {"Set in Reservation Parameters (RSS-14). "}
                                <Link data-leads-to="RSS-14" to={"/setup/rss-14-reservation-parameters"}>{"Change it there"}</Link>
                              </span>
                            </div>
                          </div>
                          <div className="s-note">
                            <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#info" />
                            </svg>
                            <span>{"Children 11 and under stay free with existing beds (maximum 2)."}</span>
                          </div>
                        </section>
                        <section className="stabs__panel" data-code="RSS-07c" aria-label="Inclusions">
                          <div className="row">
                            <label className="check">
                              <input className="check__input" type="checkbox" defaultChecked={true} />
                              <span className="check__box" />
                              {"Breakfast"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" />
                              <span className="check__box" />
                              {"Lunch"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" />
                              <span className="check__box" />
                              {"Dinner"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" defaultChecked={true} />
                              <span className="check__box" />
                              {"Wi-Fi"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" />
                              <span className="check__box" />
                              {"Parking"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" />
                              <span className="check__box" />
                              {"Late check-out on request"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" />
                              <span className="check__box" />
                              {"Daily Ayurveda therapy"}
                            </label>
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f1196">{"Other inclusions"}</label>
                            <textarea className="field__input field__input--area" id="f1196" defaultValue={""} />
                            <span className="field__hint">{"One per line"}</span>
                          </div>
                        </section>
                        <section className="stabs__panel" data-code="RSS-07d" aria-label="Policies">
                          <div className="s-grid2">
                            <div className="field">
                              <label className="field__label" htmlFor="f1197">{"Cancellation policy"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1197" defaultValue={"Standard – free until 72 hours"}>
                                  <option>{"Standard – free until 72 hours"}</option>
                                  <option>{"Peak season – free until 7 days"}</option>
                                  <option>{"Non-refundable"}</option>
                                  <option>{"Group – staged charges"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f1198">{"Advance / guarantee policy"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1198" defaultValue={"Standard – one night advance"}>
                                  <option>{"Standard – one night advance"}</option>
                                  <option>{"Full payment at booking"}</option>
                                  <option>{"Group – 25% at confirmation"}</option>
                                  <option>{"Company credit – no advance"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="s-note">
                            <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#info" />
                            </svg>
                            <span>{"No-show charges come from the cancellation policy."}</span>
                          </div>
                        </section>
                        <section className="stabs__panel" data-code="RSS-07e" aria-label="Channels & window">
                          <fieldset className="form-section">
                            <legend className="form-section__title">{"Where it is sold"}</legend>
                            <div className="row">
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"Aviv mobile app (CRS)"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"Aviv website booking engine"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"Booking.com"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"Agoda"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"Expedia"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"MakeMyTrip / Goibibo"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"EaseMyTrip"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"Trip.com"}
                              </label>
                            </div>
                          </fieldset>
                          <div className="s-grid2">
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1199">{"Visible to"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1199" defaultValue={"Everyone"}>
                                  <option>{"Everyone"}</option>
                                  <option>{"Club members"}</option>
                                  <option>{"Corporate accounts"}</option>
                                  <option>{"Travel agents"}</option>
                                  <option>{"Staff only"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f1200">{"Promo code"}</label>
                              <input className="field__input" id="f1200" type="text" defaultValue={""} />
                              <span className="field__hint">{"Optional"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f1201">{"Book at least (days ahead)"}</label>
                              <input className="field__input num" id="f1201" type="number" defaultValue={"0"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f1202">{"Book at most (days ahead)"}</label>
                              <input className="field__input num" id="f1202" type="number" defaultValue={"365"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f1203">{"Minimum stay (nights)"}</label>
                              <input className="field__input num" id="f1203" type="number" defaultValue={"1"} />
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save rate plan"}</a>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="RSS-P05-BAR-CP" data-code="RSS-P05" role="dialog" aria-modal="true" aria-labelledby="RSS-P05-BAR-CP-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P05-BAR-CP-t">{"Copy rate plan"}</h2>
                      <p className="modal__desc">{"Copies all settings of BAR-CP"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="field" data-fw="x">
                      <label className="field__label" htmlFor="f1204">{"Source plan"}</label>
                      <div className="field__wrap">
                        <select className="field__input field__input--select" id="f1204" defaultValue={"BAR-CP"}>
                          <option>{"BAR-CP"}</option>
                          <option>{"BAR-EP"}</option>
                          <option>{"BAR-MAP"}</option>
                          <option>{"BAR-AP"}</option>
                          <option>{"CLUB"}</option>
                          <option>{"ADV15"}</option>
                          <option>{"CORP"}</option>
                          <option>{"AGENT"}</option>
                          <option>{"GROUP"}</option>
                          <option>{"PKG-AYUR"}</option>
                          <option>{"COMP"}</option>
                        </select>
                        <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f1205">
                        {"New code "}
                        <span className="field__req">{"*"}</span>
                      </label>
                      <input className="field__input" id="f1205" type="text" required={true} defaultValue={"BAR-CP2"} />
                      <span className="field__hint">{"Must not already exist"}</span>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f1206">
                        {"New name "}
                        <span className="field__req">{"*"}</span>
                      </label>
                      <input className="field__input" id="f1206" type="text" required={true} defaultValue={"Best available rate – with breakfast (copy)"} />
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Create copy"}</a>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="RSS-07a-BAR-EP" data-code="RSS-07a" role="dialog" aria-modal="true" aria-labelledby="RSS-07a-BAR-EP-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-07a-BAR-EP-t">{"Rate plan BAR-EP"}</h2>
                      <p className="modal__desc">{"Best available rate – room only"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="stabs">
                      <input type="radio" name="rpBAREP" id="rpBAREP-1" aria-label="Basic" defaultChecked={true} />
                      <input type="radio" name="rpBAREP" id="rpBAREP-2" aria-label="Prices & extras" />
                      <input type="radio" name="rpBAREP" id="rpBAREP-3" aria-label="Inclusions" />
                      <input type="radio" name="rpBAREP" id="rpBAREP-4" aria-label="Policies" />
                      <input type="radio" name="rpBAREP" id="rpBAREP-5" aria-label="Channels & window" />
                      <div className="stabs__list" role="tablist">
                        <label htmlFor="rpBAREP-1">{"Basic"}</label>
                        <label htmlFor="rpBAREP-2">{"Prices & extras"}</label>
                        <label htmlFor="rpBAREP-3">{"Inclusions"}</label>
                        <label htmlFor="rpBAREP-4">{"Policies"}</label>
                        <label htmlFor="rpBAREP-5">{"Channels & window"}</label>
                      </div>
                      <div className="stabs__panels">
                        <section className="stabs__panel" data-code="RSS-07a" aria-label="Basic">
                          <div className="s-grid2">
                            <div className="field">
                              <label className="field__label" htmlFor="f1207">
                                {"Code "}
                                <span className="field__req">{"*"}</span>
                              </label>
                              <input className="field__input" id="f1207" type="text" required={true} defaultValue={"BAR-EP"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f1208">
                                {"Name "}
                                <span className="field__req">{"*"}</span>
                              </label>
                              <input className="field__input" id="f1208" type="text" required={true} defaultValue={"Best available rate – room only"} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1209">{"Type"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1209" defaultValue={"Best available"}>
                                  <option>{"Best available"}</option>
                                  <option>{"Member"}</option>
                                  <option>{"Advance purchase"}</option>
                                  <option>{"Corporate"}</option>
                                  <option>{"Travel agent"}</option>
                                  <option>{"Package"}</option>
                                  <option>{"Group"}</option>
                                  <option>{"Complimentary"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f1210">{"Meal plan"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1210" defaultValue={"EP – Room only"}>
                                  <option>{"EP – Room only"}</option>
                                  <option>{"CP – Room with breakfast"}</option>
                                  <option>{"MAP – Breakfast and dinner"}</option>
                                  <option>{"AP – All meals"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <fieldset className="form-section">
                            <legend className="form-section__title">{"Room types"}</legend>
                            <div className="row">
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"GDLX"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"PDLX"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"DLXS"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"PRMS"}
                              </label>
                            </div>
                          </fieldset>
                          <label className="sw">
                            <input type="checkbox" role="switch" defaultChecked={true} />
                            <span className="sw__track" />
                            {"Active"}
                          </label>
                          <fieldset className="form-section">
                            <legend className="form-section__title">{"Selling rules"}</legend>
                            <div className="s-grid3">
                              <div className="field" data-fw="s">
                                <label className="field__label" htmlFor="f1211">{"Sell from"}</label>
                                <div className="dpk">
                                  <button type="button" className="dpk-f field__input" id="f1211" aria-haspopup="dialog">
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
                                      <select className="dpk-m" name="f1211-month" aria-label="Month" defaultValue={"10"}>
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
                                      <select className="dpk-y" name="f1211-year" aria-label="Year" defaultValue={"2026"}>
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
                                        <input type="radio" name="f1211" value="01" />
                                        {"1"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1211" value="02" />
                                        {"2"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1211" value="03" />
                                        {"3"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1211" value="04" />
                                        {"4"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1211" value="05" />
                                        {"5"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1211" value="06" />
                                        {"6"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1211" value="07" />
                                        {"7"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1211" value="08" />
                                        {"8"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1211" value="09" />
                                        {"9"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1211" value="10" />
                                        {"10"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1211" value="11" />
                                        {"11"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1211" value="12" />
                                        {"12"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1211" value="13" />
                                        {"13"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1211" value="14" />
                                        {"14"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1211" value="15" />
                                        {"15"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1211" value="16" />
                                        {"16"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1211" value="17" />
                                        {"17"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1211" value="18" />
                                        {"18"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1211" value="19" />
                                        {"19"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1211" value="20" />
                                        {"20"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1211" value="21" />
                                        {"21"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1211" value="22" defaultChecked={true} />
                                        {"22"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1211" value="23" />
                                        {"23"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1211" value="24" />
                                        {"24"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1211" value="25" />
                                        {"25"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1211" value="26" />
                                        {"26"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1211" value="27" />
                                        {"27"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1211" value="28" />
                                        {"28"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1211" value="29" />
                                        {"29"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1211" value="30" />
                                        {"30"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1211" value="31" />
                                        {"31"}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="field" data-fw="s">
                                <label className="field__label" htmlFor="f1212">{"Sell until"}</label>
                                <div className="dpk">
                                  <button type="button" className="dpk-f field__input" id="f1212" aria-haspopup="dialog">
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
                                      <select className="dpk-m" name="f1212-month" aria-label="Month" defaultValue={"10"}>
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
                                      <select className="dpk-y" name="f1212-year" aria-label="Year" defaultValue={"2026"}>
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
                                        <input type="radio" name="f1212" value="01" />
                                        {"1"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1212" value="02" />
                                        {"2"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1212" value="03" />
                                        {"3"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1212" value="04" />
                                        {"4"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1212" value="05" />
                                        {"5"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1212" value="06" />
                                        {"6"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1212" value="07" />
                                        {"7"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1212" value="08" />
                                        {"8"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1212" value="09" />
                                        {"9"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1212" value="10" />
                                        {"10"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1212" value="11" />
                                        {"11"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1212" value="12" />
                                        {"12"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1212" value="13" />
                                        {"13"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1212" value="14" />
                                        {"14"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1212" value="15" />
                                        {"15"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1212" value="16" />
                                        {"16"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1212" value="17" />
                                        {"17"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1212" value="18" />
                                        {"18"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1212" value="19" />
                                        {"19"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1212" value="20" />
                                        {"20"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1212" value="21" />
                                        {"21"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1212" value="22" />
                                        {"22"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1212" value="23" />
                                        {"23"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1212" value="24" />
                                        {"24"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1212" value="25" />
                                        {"25"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1212" value="26" />
                                        {"26"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1212" value="27" />
                                        {"27"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1212" value="28" />
                                        {"28"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1212" value="29" />
                                        {"29"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1212" value="30" />
                                        {"30"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1212" value="31" />
                                        {"31"}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <span className="field__hint">{"Empty = no end"}</span>
                              </div>
                              <div className="field">
                                <label className="field__label" htmlFor="f1213">{"Price priority"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="f1213" defaultValue={"Contract → promotion → season → derived → manual"}>
                                    <option>{"Contract → promotion → season → derived → manual"}</option>
                                  </select>
                                  <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                                <span className="field__hint">{"Two rules that conflict are refused until one is given priority"}</span>
                              </div>
                            </div>
                            <div className="s-grid2">
                              <div className="field">
                                <label className="field__label" htmlFor="f1214">{"Child age counted on"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="f1214" disabled={true} defaultValue={"Arrival date"}>
                                    <option>{"Arrival date"}</option>
                                    <option>{"Each night of the stay"}</option>
                                  </select>
                                  <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                                <span className="field__hint" data-flow="owner">
                                  {"Set in Reservation Parameters (RSS-14). "}
                                  <Link data-leads-to="RSS-14" to={"/setup/rss-14-reservation-parameters"}>{"Change it there"}</Link>
                                </span>
                              </div>
                              <div className="field">
                                <label className="field__label" htmlFor="f1215">{"Children's meals and extra bed"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="f1215" defaultValue={"Free up to age 11 with existing beds"}>
                                    <option>{"Free up to age 11 with existing beds"}</option>
                                    <option>{"Charge meals only"}</option>
                                    <option>{"Charge meals and extra bed"}</option>
                                  </select>
                                  <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div className="s-note">
                              <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#info" />
                              </svg>
                              <span>{"A rate plan cannot follow itself, directly or through other plans. Saving is refused if the chain would loop. A retired plan stops new sales but stays readable on bookings already made."}</span>
                            </div>
                          </fieldset>
                        </section>
                        <section className="stabs__panel" data-code="RSS-07b" aria-label="Prices & extras">
                          <div className="s-grid2">
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f1216">{"Follows rate plan"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1216" defaultValue={"BAR-CP"}>
                                  <option>{"BAR-CP"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1217">{"Rule"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1217" defaultValue={"Same as base"}>
                                  <option>{"Same as base"}</option>
                                  <option>{"Percent"}</option>
                                  <option>{"Amount (₹)"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f1218">{"Value"}</label>
                              <input className="field__input" id="f1218" type="text" defaultValue={"0"} />
                              <span className="field__hint">{"−10 means 10% below the base rate"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f1219">{"Adjustment (%)"}</label>
                              <input className="field__input num" id="f1219" type="number" defaultValue={""} />
                              <span className="field__hint">{"Shown when the rule is Percent"}</span>
                            </div>
                          </div>
                          <div className="s-grid3">
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1220">{"Extra adult / night"}</label>
                              <div className="field__wrap field__wrap--money">
                                <span className="field__prefix">{"₹"}</span>
                                <input className="field__input num" id="f1220" inputMode="decimal" defaultValue={"1,800"} />
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1221">{"Extra child (above 11) / night"}</label>
                              <div className="field__wrap field__wrap--money">
                                <span className="field__prefix">{"₹"}</span>
                                <input className="field__input num" id="f1221" inputMode="decimal" defaultValue={"0"} />
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1222">{"Extra bed / night"}</label>
                              <div className="field__wrap field__wrap--money">
                                <span className="field__prefix">{"₹"}</span>
                                <input readOnly={true} className="field__input num" id="f1222" inputMode="decimal" defaultValue={"1,500"} />
                              </div>
                              <span className="field__hint" data-flow="owner-eb">
                                {"Set in Reservation Parameters (RSS-14). "}
                                <Link data-leads-to="RSS-14" to={"/setup/rss-14-reservation-parameters"}>{"Change it there"}</Link>
                              </span>
                            </div>
                          </div>
                          <div className="s-note">
                            <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#info" />
                            </svg>
                            <span>{"Children 11 and under stay free with existing beds (maximum 2)."}</span>
                          </div>
                        </section>
                        <section className="stabs__panel" data-code="RSS-07c" aria-label="Inclusions">
                          <div className="row">
                            <label className="check">
                              <input className="check__input" type="checkbox" />
                              <span className="check__box" />
                              {"Breakfast"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" />
                              <span className="check__box" />
                              {"Lunch"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" />
                              <span className="check__box" />
                              {"Dinner"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" defaultChecked={true} />
                              <span className="check__box" />
                              {"Wi-Fi"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" />
                              <span className="check__box" />
                              {"Parking"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" />
                              <span className="check__box" />
                              {"Late check-out on request"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" />
                              <span className="check__box" />
                              {"Daily Ayurveda therapy"}
                            </label>
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f1223">{"Other inclusions"}</label>
                            <textarea className="field__input field__input--area" id="f1223" defaultValue={""} />
                            <span className="field__hint">{"One per line"}</span>
                          </div>
                        </section>
                        <section className="stabs__panel" data-code="RSS-07d" aria-label="Policies">
                          <div className="s-grid2">
                            <div className="field">
                              <label className="field__label" htmlFor="f1224">{"Cancellation policy"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1224" defaultValue={"Standard – free until 72 hours"}>
                                  <option>{"Standard – free until 72 hours"}</option>
                                  <option>{"Peak season – free until 7 days"}</option>
                                  <option>{"Non-refundable"}</option>
                                  <option>{"Group – staged charges"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f1225">{"Advance / guarantee policy"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1225" defaultValue={"Standard – one night advance"}>
                                  <option>{"Standard – one night advance"}</option>
                                  <option>{"Full payment at booking"}</option>
                                  <option>{"Group – 25% at confirmation"}</option>
                                  <option>{"Company credit – no advance"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="s-note">
                            <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#info" />
                            </svg>
                            <span>{"No-show charges come from the cancellation policy."}</span>
                          </div>
                        </section>
                        <section className="stabs__panel" data-code="RSS-07e" aria-label="Channels & window">
                          <fieldset className="form-section">
                            <legend className="form-section__title">{"Where it is sold"}</legend>
                            <div className="row">
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"Aviv mobile app (CRS)"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"Aviv website booking engine"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"Booking.com"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"Agoda"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"Expedia"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"MakeMyTrip / Goibibo"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"EaseMyTrip"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"Trip.com"}
                              </label>
                            </div>
                          </fieldset>
                          <div className="s-grid2">
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1226">{"Visible to"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1226" defaultValue={"Everyone"}>
                                  <option>{"Everyone"}</option>
                                  <option>{"Club members"}</option>
                                  <option>{"Corporate accounts"}</option>
                                  <option>{"Travel agents"}</option>
                                  <option>{"Staff only"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f1227">{"Promo code"}</label>
                              <input className="field__input" id="f1227" type="text" defaultValue={""} />
                              <span className="field__hint">{"Optional"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f1228">{"Book at least (days ahead)"}</label>
                              <input className="field__input num" id="f1228" type="number" defaultValue={"0"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f1229">{"Book at most (days ahead)"}</label>
                              <input className="field__input num" id="f1229" type="number" defaultValue={"365"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f1230">{"Minimum stay (nights)"}</label>
                              <input className="field__input num" id="f1230" type="number" defaultValue={"1"} />
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save rate plan"}</a>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="RSS-P05-BAR-EP" data-code="RSS-P05" role="dialog" aria-modal="true" aria-labelledby="RSS-P05-BAR-EP-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P05-BAR-EP-t">{"Copy rate plan"}</h2>
                      <p className="modal__desc">{"Copies all settings of BAR-EP"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="field" data-fw="x">
                      <label className="field__label" htmlFor="f1231">{"Source plan"}</label>
                      <div className="field__wrap">
                        <select className="field__input field__input--select" id="f1231" defaultValue={"BAR-EP"}>
                          <option>{"BAR-CP"}</option>
                          <option>{"BAR-EP"}</option>
                          <option>{"BAR-MAP"}</option>
                          <option>{"BAR-AP"}</option>
                          <option>{"CLUB"}</option>
                          <option>{"ADV15"}</option>
                          <option>{"CORP"}</option>
                          <option>{"AGENT"}</option>
                          <option>{"GROUP"}</option>
                          <option>{"PKG-AYUR"}</option>
                          <option>{"COMP"}</option>
                        </select>
                        <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f1232">
                        {"New code "}
                        <span className="field__req">{"*"}</span>
                      </label>
                      <input className="field__input" id="f1232" type="text" required={true} defaultValue={"BAR-EP2"} />
                      <span className="field__hint">{"Must not already exist"}</span>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f1233">
                        {"New name "}
                        <span className="field__req">{"*"}</span>
                      </label>
                      <input className="field__input" id="f1233" type="text" required={true} defaultValue={"Best available rate – room only (copy)"} />
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Create copy"}</a>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="RSS-07a-BAR-MAP" data-code="RSS-07a" role="dialog" aria-modal="true" aria-labelledby="RSS-07a-BAR-MAP-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-07a-BAR-MAP-t">{"Rate plan BAR-MAP"}</h2>
                      <p className="modal__desc">{"Best available rate – breakfast and dinner"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="stabs">
                      <input type="radio" name="rpBARMAP" id="rpBARMAP-1" aria-label="Basic" defaultChecked={true} />
                      <input type="radio" name="rpBARMAP" id="rpBARMAP-2" aria-label="Prices & extras" />
                      <input type="radio" name="rpBARMAP" id="rpBARMAP-3" aria-label="Inclusions" />
                      <input type="radio" name="rpBARMAP" id="rpBARMAP-4" aria-label="Policies" />
                      <input type="radio" name="rpBARMAP" id="rpBARMAP-5" aria-label="Channels & window" />
                      <div className="stabs__list" role="tablist">
                        <label htmlFor="rpBARMAP-1">{"Basic"}</label>
                        <label htmlFor="rpBARMAP-2">{"Prices & extras"}</label>
                        <label htmlFor="rpBARMAP-3">{"Inclusions"}</label>
                        <label htmlFor="rpBARMAP-4">{"Policies"}</label>
                        <label htmlFor="rpBARMAP-5">{"Channels & window"}</label>
                      </div>
                      <div className="stabs__panels">
                        <section className="stabs__panel" data-code="RSS-07a" aria-label="Basic">
                          <div className="s-grid2">
                            <div className="field">
                              <label className="field__label" htmlFor="f1234">
                                {"Code "}
                                <span className="field__req">{"*"}</span>
                              </label>
                              <input className="field__input" id="f1234" type="text" required={true} defaultValue={"BAR-MAP"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f1235">
                                {"Name "}
                                <span className="field__req">{"*"}</span>
                              </label>
                              <input className="field__input" id="f1235" type="text" required={true} defaultValue={"Best available rate – breakfast and dinner"} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1236">{"Type"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1236" defaultValue={"Best available"}>
                                  <option>{"Best available"}</option>
                                  <option>{"Member"}</option>
                                  <option>{"Advance purchase"}</option>
                                  <option>{"Corporate"}</option>
                                  <option>{"Travel agent"}</option>
                                  <option>{"Package"}</option>
                                  <option>{"Group"}</option>
                                  <option>{"Complimentary"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f1237">{"Meal plan"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1237" defaultValue={"MAP – Breakfast and dinner"}>
                                  <option>{"EP – Room only"}</option>
                                  <option>{"CP – Room with breakfast"}</option>
                                  <option>{"MAP – Breakfast and dinner"}</option>
                                  <option>{"AP – All meals"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <fieldset className="form-section">
                            <legend className="form-section__title">{"Room types"}</legend>
                            <div className="row">
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"GDLX"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"PDLX"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"DLXS"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"PRMS"}
                              </label>
                            </div>
                          </fieldset>
                          <label className="sw">
                            <input type="checkbox" role="switch" defaultChecked={true} />
                            <span className="sw__track" />
                            {"Active"}
                          </label>
                          <fieldset className="form-section">
                            <legend className="form-section__title">{"Selling rules"}</legend>
                            <div className="s-grid3">
                              <div className="field" data-fw="s">
                                <label className="field__label" htmlFor="f1238">{"Sell from"}</label>
                                <div className="dpk">
                                  <button type="button" className="dpk-f field__input" id="f1238" aria-haspopup="dialog">
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
                                      <select className="dpk-m" name="f1238-month" aria-label="Month" defaultValue={"10"}>
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
                                      <select className="dpk-y" name="f1238-year" aria-label="Year" defaultValue={"2026"}>
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
                                        <input type="radio" name="f1238" value="01" />
                                        {"1"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1238" value="02" />
                                        {"2"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1238" value="03" />
                                        {"3"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1238" value="04" />
                                        {"4"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1238" value="05" />
                                        {"5"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1238" value="06" />
                                        {"6"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1238" value="07" />
                                        {"7"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1238" value="08" />
                                        {"8"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1238" value="09" />
                                        {"9"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1238" value="10" />
                                        {"10"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1238" value="11" />
                                        {"11"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1238" value="12" />
                                        {"12"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1238" value="13" />
                                        {"13"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1238" value="14" />
                                        {"14"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1238" value="15" />
                                        {"15"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1238" value="16" />
                                        {"16"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1238" value="17" />
                                        {"17"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1238" value="18" />
                                        {"18"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1238" value="19" />
                                        {"19"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1238" value="20" />
                                        {"20"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1238" value="21" />
                                        {"21"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1238" value="22" defaultChecked={true} />
                                        {"22"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1238" value="23" />
                                        {"23"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1238" value="24" />
                                        {"24"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1238" value="25" />
                                        {"25"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1238" value="26" />
                                        {"26"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1238" value="27" />
                                        {"27"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1238" value="28" />
                                        {"28"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1238" value="29" />
                                        {"29"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1238" value="30" />
                                        {"30"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1238" value="31" />
                                        {"31"}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="field" data-fw="s">
                                <label className="field__label" htmlFor="f1239">{"Sell until"}</label>
                                <div className="dpk">
                                  <button type="button" className="dpk-f field__input" id="f1239" aria-haspopup="dialog">
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
                                      <select className="dpk-m" name="f1239-month" aria-label="Month" defaultValue={"10"}>
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
                                      <select className="dpk-y" name="f1239-year" aria-label="Year" defaultValue={"2026"}>
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
                                        <input type="radio" name="f1239" value="01" />
                                        {"1"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1239" value="02" />
                                        {"2"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1239" value="03" />
                                        {"3"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1239" value="04" />
                                        {"4"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1239" value="05" />
                                        {"5"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1239" value="06" />
                                        {"6"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1239" value="07" />
                                        {"7"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1239" value="08" />
                                        {"8"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1239" value="09" />
                                        {"9"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1239" value="10" />
                                        {"10"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1239" value="11" />
                                        {"11"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1239" value="12" />
                                        {"12"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1239" value="13" />
                                        {"13"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1239" value="14" />
                                        {"14"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1239" value="15" />
                                        {"15"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1239" value="16" />
                                        {"16"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1239" value="17" />
                                        {"17"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1239" value="18" />
                                        {"18"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1239" value="19" />
                                        {"19"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1239" value="20" />
                                        {"20"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1239" value="21" />
                                        {"21"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1239" value="22" />
                                        {"22"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1239" value="23" />
                                        {"23"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1239" value="24" />
                                        {"24"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1239" value="25" />
                                        {"25"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1239" value="26" />
                                        {"26"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1239" value="27" />
                                        {"27"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1239" value="28" />
                                        {"28"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1239" value="29" />
                                        {"29"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1239" value="30" />
                                        {"30"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1239" value="31" />
                                        {"31"}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <span className="field__hint">{"Empty = no end"}</span>
                              </div>
                              <div className="field">
                                <label className="field__label" htmlFor="f1240">{"Price priority"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="f1240" defaultValue={"Contract → promotion → season → derived → manual"}>
                                    <option>{"Contract → promotion → season → derived → manual"}</option>
                                  </select>
                                  <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                                <span className="field__hint">{"Two rules that conflict are refused until one is given priority"}</span>
                              </div>
                            </div>
                            <div className="s-grid2">
                              <div className="field">
                                <label className="field__label" htmlFor="f1241">{"Child age counted on"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="f1241" disabled={true} defaultValue={"Arrival date"}>
                                    <option>{"Arrival date"}</option>
                                    <option>{"Each night of the stay"}</option>
                                  </select>
                                  <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                                <span className="field__hint" data-flow="owner">
                                  {"Set in Reservation Parameters (RSS-14). "}
                                  <Link data-leads-to="RSS-14" to={"/setup/rss-14-reservation-parameters"}>{"Change it there"}</Link>
                                </span>
                              </div>
                              <div className="field">
                                <label className="field__label" htmlFor="f1242">{"Children's meals and extra bed"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="f1242" defaultValue={"Free up to age 11 with existing beds"}>
                                    <option>{"Free up to age 11 with existing beds"}</option>
                                    <option>{"Charge meals only"}</option>
                                    <option>{"Charge meals and extra bed"}</option>
                                  </select>
                                  <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div className="s-note">
                              <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#info" />
                              </svg>
                              <span>{"A rate plan cannot follow itself, directly or through other plans. Saving is refused if the chain would loop. A retired plan stops new sales but stays readable on bookings already made."}</span>
                            </div>
                          </fieldset>
                        </section>
                        <section className="stabs__panel" data-code="RSS-07b" aria-label="Prices & extras">
                          <div className="s-grid2">
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f1243">{"Follows rate plan"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1243" defaultValue={"BAR-CP"}>
                                  <option>{"BAR-CP"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1244">{"Rule"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1244" defaultValue={"Same as base"}>
                                  <option>{"Same as base"}</option>
                                  <option>{"Percent"}</option>
                                  <option>{"Amount (₹)"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f1245">{"Value"}</label>
                              <input className="field__input" id="f1245" type="text" defaultValue={"0"} />
                              <span className="field__hint">{"−10 means 10% below the base rate"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f1246">{"Adjustment (%)"}</label>
                              <input className="field__input num" id="f1246" type="number" defaultValue={""} />
                              <span className="field__hint">{"Shown when the rule is Percent"}</span>
                            </div>
                          </div>
                          <div className="s-grid3">
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1247">{"Extra adult / night"}</label>
                              <div className="field__wrap field__wrap--money">
                                <span className="field__prefix">{"₹"}</span>
                                <input className="field__input num" id="f1247" inputMode="decimal" defaultValue={"1,800"} />
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1248">{"Extra child (above 11) / night"}</label>
                              <div className="field__wrap field__wrap--money">
                                <span className="field__prefix">{"₹"}</span>
                                <input className="field__input num" id="f1248" inputMode="decimal" defaultValue={"0"} />
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1249">{"Extra bed / night"}</label>
                              <div className="field__wrap field__wrap--money">
                                <span className="field__prefix">{"₹"}</span>
                                <input readOnly={true} className="field__input num" id="f1249" inputMode="decimal" defaultValue={"1,500"} />
                              </div>
                              <span className="field__hint" data-flow="owner-eb">
                                {"Set in Reservation Parameters (RSS-14). "}
                                <Link data-leads-to="RSS-14" to={"/setup/rss-14-reservation-parameters"}>{"Change it there"}</Link>
                              </span>
                            </div>
                          </div>
                          <div className="s-note">
                            <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#info" />
                            </svg>
                            <span>{"Children 11 and under stay free with existing beds (maximum 2)."}</span>
                          </div>
                        </section>
                        <section className="stabs__panel" data-code="RSS-07c" aria-label="Inclusions">
                          <div className="row">
                            <label className="check">
                              <input className="check__input" type="checkbox" defaultChecked={true} />
                              <span className="check__box" />
                              {"Breakfast"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" />
                              <span className="check__box" />
                              {"Lunch"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" defaultChecked={true} />
                              <span className="check__box" />
                              {"Dinner"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" defaultChecked={true} />
                              <span className="check__box" />
                              {"Wi-Fi"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" />
                              <span className="check__box" />
                              {"Parking"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" />
                              <span className="check__box" />
                              {"Late check-out on request"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" />
                              <span className="check__box" />
                              {"Daily Ayurveda therapy"}
                            </label>
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f1250">{"Other inclusions"}</label>
                            <textarea className="field__input field__input--area" id="f1250" defaultValue={""} />
                            <span className="field__hint">{"One per line"}</span>
                          </div>
                        </section>
                        <section className="stabs__panel" data-code="RSS-07d" aria-label="Policies">
                          <div className="s-grid2">
                            <div className="field">
                              <label className="field__label" htmlFor="f1251">{"Cancellation policy"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1251" defaultValue={"Standard – free until 72 hours"}>
                                  <option>{"Standard – free until 72 hours"}</option>
                                  <option>{"Peak season – free until 7 days"}</option>
                                  <option>{"Non-refundable"}</option>
                                  <option>{"Group – staged charges"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f1252">{"Advance / guarantee policy"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1252" defaultValue={"Standard – one night advance"}>
                                  <option>{"Standard – one night advance"}</option>
                                  <option>{"Full payment at booking"}</option>
                                  <option>{"Group – 25% at confirmation"}</option>
                                  <option>{"Company credit – no advance"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="s-note">
                            <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#info" />
                            </svg>
                            <span>{"No-show charges come from the cancellation policy."}</span>
                          </div>
                        </section>
                        <section className="stabs__panel" data-code="RSS-07e" aria-label="Channels & window">
                          <fieldset className="form-section">
                            <legend className="form-section__title">{"Where it is sold"}</legend>
                            <div className="row">
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"Aviv mobile app (CRS)"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"Aviv website booking engine"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"Booking.com"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"Agoda"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"Expedia"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"MakeMyTrip / Goibibo"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"EaseMyTrip"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"Trip.com"}
                              </label>
                            </div>
                          </fieldset>
                          <div className="s-grid2">
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1253">{"Visible to"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1253" defaultValue={"Everyone"}>
                                  <option>{"Everyone"}</option>
                                  <option>{"Club members"}</option>
                                  <option>{"Corporate accounts"}</option>
                                  <option>{"Travel agents"}</option>
                                  <option>{"Staff only"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f1254">{"Promo code"}</label>
                              <input className="field__input" id="f1254" type="text" defaultValue={""} />
                              <span className="field__hint">{"Optional"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f1255">{"Book at least (days ahead)"}</label>
                              <input className="field__input num" id="f1255" type="number" defaultValue={"0"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f1256">{"Book at most (days ahead)"}</label>
                              <input className="field__input num" id="f1256" type="number" defaultValue={"365"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f1257">{"Minimum stay (nights)"}</label>
                              <input className="field__input num" id="f1257" type="number" defaultValue={"1"} />
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save rate plan"}</a>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="RSS-P05-BAR-MAP" data-code="RSS-P05" role="dialog" aria-modal="true" aria-labelledby="RSS-P05-BAR-MAP-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P05-BAR-MAP-t">{"Copy rate plan"}</h2>
                      <p className="modal__desc">{"Copies all settings of BAR-MAP"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="field" data-fw="s">
                      <label className="field__label" htmlFor="f1258">{"Source plan"}</label>
                      <div className="field__wrap">
                        <select className="field__input field__input--select" id="f1258" defaultValue={"BAR-MAP"}>
                          <option>{"BAR-CP"}</option>
                          <option>{"BAR-EP"}</option>
                          <option>{"BAR-MAP"}</option>
                          <option>{"BAR-AP"}</option>
                          <option>{"CLUB"}</option>
                          <option>{"ADV15"}</option>
                          <option>{"CORP"}</option>
                          <option>{"AGENT"}</option>
                          <option>{"GROUP"}</option>
                          <option>{"PKG-AYUR"}</option>
                          <option>{"COMP"}</option>
                        </select>
                        <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f1259">
                        {"New code "}
                        <span className="field__req">{"*"}</span>
                      </label>
                      <input className="field__input" id="f1259" type="text" required={true} defaultValue={"BAR-MAP2"} />
                      <span className="field__hint">{"Must not already exist"}</span>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f1260">
                        {"New name "}
                        <span className="field__req">{"*"}</span>
                      </label>
                      <input className="field__input" id="f1260" type="text" required={true} defaultValue={"Best available rate – breakfast and dinner (copy)"} />
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Create copy"}</a>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="RSS-07a-BAR-AP" data-code="RSS-07a" role="dialog" aria-modal="true" aria-labelledby="RSS-07a-BAR-AP-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-07a-BAR-AP-t">{"Rate plan BAR-AP"}</h2>
                      <p className="modal__desc">{"Best available rate – all meals"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="stabs">
                      <input type="radio" name="rpBARAP" id="rpBARAP-1" aria-label="Basic" defaultChecked={true} />
                      <input type="radio" name="rpBARAP" id="rpBARAP-2" aria-label="Prices & extras" />
                      <input type="radio" name="rpBARAP" id="rpBARAP-3" aria-label="Inclusions" />
                      <input type="radio" name="rpBARAP" id="rpBARAP-4" aria-label="Policies" />
                      <input type="radio" name="rpBARAP" id="rpBARAP-5" aria-label="Channels & window" />
                      <div className="stabs__list" role="tablist">
                        <label htmlFor="rpBARAP-1">{"Basic"}</label>
                        <label htmlFor="rpBARAP-2">{"Prices & extras"}</label>
                        <label htmlFor="rpBARAP-3">{"Inclusions"}</label>
                        <label htmlFor="rpBARAP-4">{"Policies"}</label>
                        <label htmlFor="rpBARAP-5">{"Channels & window"}</label>
                      </div>
                      <div className="stabs__panels">
                        <section className="stabs__panel" data-code="RSS-07a" aria-label="Basic">
                          <div className="s-grid2">
                            <div className="field">
                              <label className="field__label" htmlFor="f1261">
                                {"Code "}
                                <span className="field__req">{"*"}</span>
                              </label>
                              <input className="field__input" id="f1261" type="text" required={true} defaultValue={"BAR-AP"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f1262">
                                {"Name "}
                                <span className="field__req">{"*"}</span>
                              </label>
                              <input className="field__input" id="f1262" type="text" required={true} defaultValue={"Best available rate – all meals"} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1263">{"Type"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1263" defaultValue={"Best available"}>
                                  <option>{"Best available"}</option>
                                  <option>{"Member"}</option>
                                  <option>{"Advance purchase"}</option>
                                  <option>{"Corporate"}</option>
                                  <option>{"Travel agent"}</option>
                                  <option>{"Package"}</option>
                                  <option>{"Group"}</option>
                                  <option>{"Complimentary"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f1264">{"Meal plan"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1264" defaultValue={"AP – All meals"}>
                                  <option>{"EP – Room only"}</option>
                                  <option>{"CP – Room with breakfast"}</option>
                                  <option>{"MAP – Breakfast and dinner"}</option>
                                  <option>{"AP – All meals"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <fieldset className="form-section">
                            <legend className="form-section__title">{"Room types"}</legend>
                            <div className="row">
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"GDLX"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"PDLX"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"DLXS"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"PRMS"}
                              </label>
                            </div>
                          </fieldset>
                          <label className="sw">
                            <input type="checkbox" role="switch" defaultChecked={true} />
                            <span className="sw__track" />
                            {"Active"}
                          </label>
                          <fieldset className="form-section">
                            <legend className="form-section__title">{"Selling rules"}</legend>
                            <div className="s-grid3">
                              <div className="field" data-fw="s">
                                <label className="field__label" htmlFor="f1265">{"Sell from"}</label>
                                <div className="dpk">
                                  <button type="button" className="dpk-f field__input" id="f1265" aria-haspopup="dialog">
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
                                      <select className="dpk-m" name="f1265-month" aria-label="Month" defaultValue={"10"}>
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
                                      <select className="dpk-y" name="f1265-year" aria-label="Year" defaultValue={"2026"}>
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
                                        <input type="radio" name="f1265" value="01" />
                                        {"1"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1265" value="02" />
                                        {"2"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1265" value="03" />
                                        {"3"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1265" value="04" />
                                        {"4"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1265" value="05" />
                                        {"5"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1265" value="06" />
                                        {"6"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1265" value="07" />
                                        {"7"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1265" value="08" />
                                        {"8"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1265" value="09" />
                                        {"9"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1265" value="10" />
                                        {"10"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1265" value="11" />
                                        {"11"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1265" value="12" />
                                        {"12"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1265" value="13" />
                                        {"13"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1265" value="14" />
                                        {"14"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1265" value="15" />
                                        {"15"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1265" value="16" />
                                        {"16"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1265" value="17" />
                                        {"17"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1265" value="18" />
                                        {"18"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1265" value="19" />
                                        {"19"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1265" value="20" />
                                        {"20"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1265" value="21" />
                                        {"21"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1265" value="22" defaultChecked={true} />
                                        {"22"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1265" value="23" />
                                        {"23"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1265" value="24" />
                                        {"24"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1265" value="25" />
                                        {"25"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1265" value="26" />
                                        {"26"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1265" value="27" />
                                        {"27"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1265" value="28" />
                                        {"28"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1265" value="29" />
                                        {"29"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1265" value="30" />
                                        {"30"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1265" value="31" />
                                        {"31"}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="field" data-fw="s">
                                <label className="field__label" htmlFor="f1266">{"Sell until"}</label>
                                <div className="dpk">
                                  <button type="button" className="dpk-f field__input" id="f1266" aria-haspopup="dialog">
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
                                      <select className="dpk-m" name="f1266-month" aria-label="Month" defaultValue={"10"}>
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
                                      <select className="dpk-y" name="f1266-year" aria-label="Year" defaultValue={"2026"}>
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
                                        <input type="radio" name="f1266" value="01" />
                                        {"1"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1266" value="02" />
                                        {"2"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1266" value="03" />
                                        {"3"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1266" value="04" />
                                        {"4"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1266" value="05" />
                                        {"5"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1266" value="06" />
                                        {"6"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1266" value="07" />
                                        {"7"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1266" value="08" />
                                        {"8"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1266" value="09" />
                                        {"9"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1266" value="10" />
                                        {"10"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1266" value="11" />
                                        {"11"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1266" value="12" />
                                        {"12"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1266" value="13" />
                                        {"13"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1266" value="14" />
                                        {"14"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1266" value="15" />
                                        {"15"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1266" value="16" />
                                        {"16"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1266" value="17" />
                                        {"17"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1266" value="18" />
                                        {"18"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1266" value="19" />
                                        {"19"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1266" value="20" />
                                        {"20"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1266" value="21" />
                                        {"21"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1266" value="22" />
                                        {"22"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1266" value="23" />
                                        {"23"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1266" value="24" />
                                        {"24"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1266" value="25" />
                                        {"25"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1266" value="26" />
                                        {"26"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1266" value="27" />
                                        {"27"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1266" value="28" />
                                        {"28"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1266" value="29" />
                                        {"29"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1266" value="30" />
                                        {"30"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1266" value="31" />
                                        {"31"}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <span className="field__hint">{"Empty = no end"}</span>
                              </div>
                              <div className="field">
                                <label className="field__label" htmlFor="f1267">{"Price priority"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="f1267" defaultValue={"Contract → promotion → season → derived → manual"}>
                                    <option>{"Contract → promotion → season → derived → manual"}</option>
                                  </select>
                                  <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                                <span className="field__hint">{"Two rules that conflict are refused until one is given priority"}</span>
                              </div>
                            </div>
                            <div className="s-grid2">
                              <div className="field">
                                <label className="field__label" htmlFor="f1268">{"Child age counted on"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="f1268" disabled={true} defaultValue={"Arrival date"}>
                                    <option>{"Arrival date"}</option>
                                    <option>{"Each night of the stay"}</option>
                                  </select>
                                  <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                                <span className="field__hint" data-flow="owner">
                                  {"Set in Reservation Parameters (RSS-14). "}
                                  <Link data-leads-to="RSS-14" to={"/setup/rss-14-reservation-parameters"}>{"Change it there"}</Link>
                                </span>
                              </div>
                              <div className="field">
                                <label className="field__label" htmlFor="f1269">{"Children's meals and extra bed"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="f1269" defaultValue={"Free up to age 11 with existing beds"}>
                                    <option>{"Free up to age 11 with existing beds"}</option>
                                    <option>{"Charge meals only"}</option>
                                    <option>{"Charge meals and extra bed"}</option>
                                  </select>
                                  <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div className="s-note">
                              <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#info" />
                              </svg>
                              <span>{"A rate plan cannot follow itself, directly or through other plans. Saving is refused if the chain would loop. A retired plan stops new sales but stays readable on bookings already made."}</span>
                            </div>
                          </fieldset>
                        </section>
                        <section className="stabs__panel" data-code="RSS-07b" aria-label="Prices & extras">
                          <div className="s-grid2">
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f1270">{"Follows rate plan"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1270" defaultValue={"BAR-CP"}>
                                  <option>{"BAR-CP"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1271">{"Rule"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1271" defaultValue={"Same as base"}>
                                  <option>{"Same as base"}</option>
                                  <option>{"Percent"}</option>
                                  <option>{"Amount (₹)"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f1272">{"Value"}</label>
                              <input className="field__input" id="f1272" type="text" defaultValue={"0"} />
                              <span className="field__hint">{"−10 means 10% below the base rate"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f1273">{"Adjustment (%)"}</label>
                              <input className="field__input num" id="f1273" type="number" defaultValue={""} />
                              <span className="field__hint">{"Shown when the rule is Percent"}</span>
                            </div>
                          </div>
                          <div className="s-grid3">
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1274">{"Extra adult / night"}</label>
                              <div className="field__wrap field__wrap--money">
                                <span className="field__prefix">{"₹"}</span>
                                <input className="field__input num" id="f1274" inputMode="decimal" defaultValue={"1,800"} />
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1275">{"Extra child (above 11) / night"}</label>
                              <div className="field__wrap field__wrap--money">
                                <span className="field__prefix">{"₹"}</span>
                                <input className="field__input num" id="f1275" inputMode="decimal" defaultValue={"0"} />
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1276">{"Extra bed / night"}</label>
                              <div className="field__wrap field__wrap--money">
                                <span className="field__prefix">{"₹"}</span>
                                <input readOnly={true} className="field__input num" id="f1276" inputMode="decimal" defaultValue={"1,500"} />
                              </div>
                              <span className="field__hint" data-flow="owner-eb">
                                {"Set in Reservation Parameters (RSS-14). "}
                                <Link data-leads-to="RSS-14" to={"/setup/rss-14-reservation-parameters"}>{"Change it there"}</Link>
                              </span>
                            </div>
                          </div>
                          <div className="s-note">
                            <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#info" />
                            </svg>
                            <span>{"Children 11 and under stay free with existing beds (maximum 2)."}</span>
                          </div>
                        </section>
                        <section className="stabs__panel" data-code="RSS-07c" aria-label="Inclusions">
                          <div className="row">
                            <label className="check">
                              <input className="check__input" type="checkbox" defaultChecked={true} />
                              <span className="check__box" />
                              {"Breakfast"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" defaultChecked={true} />
                              <span className="check__box" />
                              {"Lunch"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" defaultChecked={true} />
                              <span className="check__box" />
                              {"Dinner"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" defaultChecked={true} />
                              <span className="check__box" />
                              {"Wi-Fi"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" />
                              <span className="check__box" />
                              {"Parking"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" />
                              <span className="check__box" />
                              {"Late check-out on request"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" />
                              <span className="check__box" />
                              {"Daily Ayurveda therapy"}
                            </label>
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f1277">{"Other inclusions"}</label>
                            <textarea className="field__input field__input--area" id="f1277" defaultValue={""} />
                            <span className="field__hint">{"One per line"}</span>
                          </div>
                        </section>
                        <section className="stabs__panel" data-code="RSS-07d" aria-label="Policies">
                          <div className="s-grid2">
                            <div className="field">
                              <label className="field__label" htmlFor="f1278">{"Cancellation policy"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1278" defaultValue={"Standard – free until 72 hours"}>
                                  <option>{"Standard – free until 72 hours"}</option>
                                  <option>{"Peak season – free until 7 days"}</option>
                                  <option>{"Non-refundable"}</option>
                                  <option>{"Group – staged charges"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f1279">{"Advance / guarantee policy"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1279" defaultValue={"Standard – one night advance"}>
                                  <option>{"Standard – one night advance"}</option>
                                  <option>{"Full payment at booking"}</option>
                                  <option>{"Group – 25% at confirmation"}</option>
                                  <option>{"Company credit – no advance"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="s-note">
                            <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#info" />
                            </svg>
                            <span>{"No-show charges come from the cancellation policy."}</span>
                          </div>
                        </section>
                        <section className="stabs__panel" data-code="RSS-07e" aria-label="Channels & window">
                          <fieldset className="form-section">
                            <legend className="form-section__title">{"Where it is sold"}</legend>
                            <div className="row">
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"Aviv mobile app (CRS)"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"Aviv website booking engine"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"Booking.com"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"Agoda"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"Expedia"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"MakeMyTrip / Goibibo"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"EaseMyTrip"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"Trip.com"}
                              </label>
                            </div>
                          </fieldset>
                          <div className="s-grid2">
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1280">{"Visible to"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1280" defaultValue={"Everyone"}>
                                  <option>{"Everyone"}</option>
                                  <option>{"Club members"}</option>
                                  <option>{"Corporate accounts"}</option>
                                  <option>{"Travel agents"}</option>
                                  <option>{"Staff only"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f1281">{"Promo code"}</label>
                              <input className="field__input" id="f1281" type="text" defaultValue={""} />
                              <span className="field__hint">{"Optional"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f1282">{"Book at least (days ahead)"}</label>
                              <input className="field__input num" id="f1282" type="number" defaultValue={"0"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f1283">{"Book at most (days ahead)"}</label>
                              <input className="field__input num" id="f1283" type="number" defaultValue={"365"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f1284">{"Minimum stay (nights)"}</label>
                              <input className="field__input num" id="f1284" type="number" defaultValue={"1"} />
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save rate plan"}</a>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="RSS-P05-BAR-AP" data-code="RSS-P05" role="dialog" aria-modal="true" aria-labelledby="RSS-P05-BAR-AP-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P05-BAR-AP-t">{"Copy rate plan"}</h2>
                      <p className="modal__desc">{"Copies all settings of BAR-AP"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="field" data-fw="x">
                      <label className="field__label" htmlFor="f1285">{"Source plan"}</label>
                      <div className="field__wrap">
                        <select className="field__input field__input--select" id="f1285" defaultValue={"BAR-AP"}>
                          <option>{"BAR-CP"}</option>
                          <option>{"BAR-EP"}</option>
                          <option>{"BAR-MAP"}</option>
                          <option>{"BAR-AP"}</option>
                          <option>{"CLUB"}</option>
                          <option>{"ADV15"}</option>
                          <option>{"CORP"}</option>
                          <option>{"AGENT"}</option>
                          <option>{"GROUP"}</option>
                          <option>{"PKG-AYUR"}</option>
                          <option>{"COMP"}</option>
                        </select>
                        <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f1286">
                        {"New code "}
                        <span className="field__req">{"*"}</span>
                      </label>
                      <input className="field__input" id="f1286" type="text" required={true} defaultValue={"BAR-AP2"} />
                      <span className="field__hint">{"Must not already exist"}</span>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f1287">
                        {"New name "}
                        <span className="field__req">{"*"}</span>
                      </label>
                      <input className="field__input" id="f1287" type="text" required={true} defaultValue={"Best available rate – all meals (copy)"} />
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Create copy"}</a>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="RSS-07a-CLUB" data-code="RSS-07a" role="dialog" aria-modal="true" aria-labelledby="RSS-07a-CLUB-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-07a-CLUB-t">{"Rate plan CLUB"}</h2>
                      <p className="modal__desc">{"Member rate"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="stabs">
                      <input type="radio" name="rpCLUB" id="rpCLUB-1" aria-label="Basic" defaultChecked={true} />
                      <input type="radio" name="rpCLUB" id="rpCLUB-2" aria-label="Prices & extras" />
                      <input type="radio" name="rpCLUB" id="rpCLUB-3" aria-label="Inclusions" />
                      <input type="radio" name="rpCLUB" id="rpCLUB-4" aria-label="Policies" />
                      <input type="radio" name="rpCLUB" id="rpCLUB-5" aria-label="Channels & window" />
                      <div className="stabs__list" role="tablist">
                        <label htmlFor="rpCLUB-1">{"Basic"}</label>
                        <label htmlFor="rpCLUB-2">{"Prices & extras"}</label>
                        <label htmlFor="rpCLUB-3">{"Inclusions"}</label>
                        <label htmlFor="rpCLUB-4">{"Policies"}</label>
                        <label htmlFor="rpCLUB-5">{"Channels & window"}</label>
                      </div>
                      <div className="stabs__panels">
                        <section className="stabs__panel" data-code="RSS-07a" aria-label="Basic">
                          <div className="s-grid2">
                            <div className="field">
                              <label className="field__label" htmlFor="f1288">
                                {"Code "}
                                <span className="field__req">{"*"}</span>
                              </label>
                              <input className="field__input" id="f1288" type="text" required={true} defaultValue={"CLUB"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f1289">
                                {"Name "}
                                <span className="field__req">{"*"}</span>
                              </label>
                              <input className="field__input" id="f1289" type="text" required={true} defaultValue={"Member rate"} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1290">{"Type"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1290" defaultValue={"Member"}>
                                  <option>{"Best available"}</option>
                                  <option>{"Member"}</option>
                                  <option>{"Advance purchase"}</option>
                                  <option>{"Corporate"}</option>
                                  <option>{"Travel agent"}</option>
                                  <option>{"Package"}</option>
                                  <option>{"Group"}</option>
                                  <option>{"Complimentary"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f1291">{"Meal plan"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1291" defaultValue={"CP – Room with breakfast"}>
                                  <option>{"EP – Room only"}</option>
                                  <option>{"CP – Room with breakfast"}</option>
                                  <option>{"MAP – Breakfast and dinner"}</option>
                                  <option>{"AP – All meals"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <fieldset className="form-section">
                            <legend className="form-section__title">{"Room types"}</legend>
                            <div className="row">
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"GDLX"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"PDLX"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"DLXS"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"PRMS"}
                              </label>
                            </div>
                          </fieldset>
                          <label className="sw">
                            <input type="checkbox" role="switch" defaultChecked={true} />
                            <span className="sw__track" />
                            {"Active"}
                          </label>
                          <fieldset className="form-section">
                            <legend className="form-section__title">{"Selling rules"}</legend>
                            <div className="s-grid3">
                              <div className="field" data-fw="s">
                                <label className="field__label" htmlFor="f1292">{"Sell from"}</label>
                                <div className="dpk">
                                  <button type="button" className="dpk-f field__input" id="f1292" aria-haspopup="dialog">
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
                                      <select className="dpk-m" name="f1292-month" aria-label="Month" defaultValue={"10"}>
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
                                      <select className="dpk-y" name="f1292-year" aria-label="Year" defaultValue={"2026"}>
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
                                        <input type="radio" name="f1292" value="01" />
                                        {"1"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1292" value="02" />
                                        {"2"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1292" value="03" />
                                        {"3"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1292" value="04" />
                                        {"4"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1292" value="05" />
                                        {"5"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1292" value="06" />
                                        {"6"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1292" value="07" />
                                        {"7"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1292" value="08" />
                                        {"8"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1292" value="09" />
                                        {"9"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1292" value="10" />
                                        {"10"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1292" value="11" />
                                        {"11"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1292" value="12" />
                                        {"12"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1292" value="13" />
                                        {"13"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1292" value="14" />
                                        {"14"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1292" value="15" />
                                        {"15"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1292" value="16" />
                                        {"16"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1292" value="17" />
                                        {"17"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1292" value="18" />
                                        {"18"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1292" value="19" />
                                        {"19"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1292" value="20" />
                                        {"20"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1292" value="21" />
                                        {"21"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1292" value="22" defaultChecked={true} />
                                        {"22"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1292" value="23" />
                                        {"23"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1292" value="24" />
                                        {"24"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1292" value="25" />
                                        {"25"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1292" value="26" />
                                        {"26"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1292" value="27" />
                                        {"27"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1292" value="28" />
                                        {"28"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1292" value="29" />
                                        {"29"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1292" value="30" />
                                        {"30"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1292" value="31" />
                                        {"31"}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="field" data-fw="s">
                                <label className="field__label" htmlFor="f1293">{"Sell until"}</label>
                                <div className="dpk">
                                  <button type="button" className="dpk-f field__input" id="f1293" aria-haspopup="dialog">
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
                                      <select className="dpk-m" name="f1293-month" aria-label="Month" defaultValue={"10"}>
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
                                      <select className="dpk-y" name="f1293-year" aria-label="Year" defaultValue={"2026"}>
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
                                        <input type="radio" name="f1293" value="01" />
                                        {"1"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1293" value="02" />
                                        {"2"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1293" value="03" />
                                        {"3"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1293" value="04" />
                                        {"4"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1293" value="05" />
                                        {"5"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1293" value="06" />
                                        {"6"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1293" value="07" />
                                        {"7"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1293" value="08" />
                                        {"8"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1293" value="09" />
                                        {"9"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1293" value="10" />
                                        {"10"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1293" value="11" />
                                        {"11"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1293" value="12" />
                                        {"12"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1293" value="13" />
                                        {"13"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1293" value="14" />
                                        {"14"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1293" value="15" />
                                        {"15"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1293" value="16" />
                                        {"16"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1293" value="17" />
                                        {"17"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1293" value="18" />
                                        {"18"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1293" value="19" />
                                        {"19"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1293" value="20" />
                                        {"20"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1293" value="21" />
                                        {"21"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1293" value="22" />
                                        {"22"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1293" value="23" />
                                        {"23"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1293" value="24" />
                                        {"24"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1293" value="25" />
                                        {"25"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1293" value="26" />
                                        {"26"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1293" value="27" />
                                        {"27"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1293" value="28" />
                                        {"28"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1293" value="29" />
                                        {"29"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1293" value="30" />
                                        {"30"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1293" value="31" />
                                        {"31"}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <span className="field__hint">{"Empty = no end"}</span>
                              </div>
                              <div className="field">
                                <label className="field__label" htmlFor="f1294">{"Price priority"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="f1294" defaultValue={"Contract → promotion → season → derived → manual"}>
                                    <option>{"Contract → promotion → season → derived → manual"}</option>
                                  </select>
                                  <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                                <span className="field__hint">{"Two rules that conflict are refused until one is given priority"}</span>
                              </div>
                            </div>
                            <div className="s-grid2">
                              <div className="field">
                                <label className="field__label" htmlFor="f1295">{"Child age counted on"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="f1295" disabled={true} defaultValue={"Arrival date"}>
                                    <option>{"Arrival date"}</option>
                                    <option>{"Each night of the stay"}</option>
                                  </select>
                                  <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                                <span className="field__hint" data-flow="owner">
                                  {"Set in Reservation Parameters (RSS-14). "}
                                  <Link data-leads-to="RSS-14" to={"/setup/rss-14-reservation-parameters"}>{"Change it there"}</Link>
                                </span>
                              </div>
                              <div className="field">
                                <label className="field__label" htmlFor="f1296">{"Children's meals and extra bed"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="f1296" defaultValue={"Free up to age 11 with existing beds"}>
                                    <option>{"Free up to age 11 with existing beds"}</option>
                                    <option>{"Charge meals only"}</option>
                                    <option>{"Charge meals and extra bed"}</option>
                                  </select>
                                  <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div className="s-note">
                              <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#info" />
                              </svg>
                              <span>{"A rate plan cannot follow itself, directly or through other plans. Saving is refused if the chain would loop. A retired plan stops new sales but stays readable on bookings already made."}</span>
                            </div>
                          </fieldset>
                        </section>
                        <section className="stabs__panel" data-code="RSS-07b" aria-label="Prices & extras">
                          <div className="s-grid2">
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f1297">{"Follows rate plan"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1297" defaultValue={"BAR-CP"}>
                                  <option>{"BAR-CP"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1298">{"Rule"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1298" defaultValue={"Percent"}>
                                  <option>{"Same as base"}</option>
                                  <option>{"Percent"}</option>
                                  <option>{"Amount (₹)"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f1299">{"Value"}</label>
                              <input className="field__input" id="f1299" type="text" defaultValue={"-10"} />
                              <span className="field__hint">{"−10 means 10% below the base rate"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f1300">{"Adjustment (%)"}</label>
                              <input className="field__input num" id="f1300" type="number" defaultValue={"-10"} />
                              <span className="field__hint">{"Shown when the rule is Percent"}</span>
                            </div>
                          </div>
                          <div className="s-grid3">
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1301">{"Extra adult / night"}</label>
                              <div className="field__wrap field__wrap--money">
                                <span className="field__prefix">{"₹"}</span>
                                <input className="field__input num" id="f1301" inputMode="decimal" defaultValue={"1,800"} />
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1302">{"Extra child (above 11) / night"}</label>
                              <div className="field__wrap field__wrap--money">
                                <span className="field__prefix">{"₹"}</span>
                                <input className="field__input num" id="f1302" inputMode="decimal" defaultValue={"0"} />
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1303">{"Extra bed / night"}</label>
                              <div className="field__wrap field__wrap--money">
                                <span className="field__prefix">{"₹"}</span>
                                <input readOnly={true} className="field__input num" id="f1303" inputMode="decimal" defaultValue={"1,500"} />
                              </div>
                              <span className="field__hint" data-flow="owner-eb">
                                {"Set in Reservation Parameters (RSS-14). "}
                                <Link data-leads-to="RSS-14" to={"/setup/rss-14-reservation-parameters"}>{"Change it there"}</Link>
                              </span>
                            </div>
                          </div>
                          <div className="s-note">
                            <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#info" />
                            </svg>
                            <span>{"Children 11 and under stay free with existing beds (maximum 2)."}</span>
                          </div>
                        </section>
                        <section className="stabs__panel" data-code="RSS-07c" aria-label="Inclusions">
                          <div className="row">
                            <label className="check">
                              <input className="check__input" type="checkbox" defaultChecked={true} />
                              <span className="check__box" />
                              {"Breakfast"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" />
                              <span className="check__box" />
                              {"Lunch"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" />
                              <span className="check__box" />
                              {"Dinner"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" defaultChecked={true} />
                              <span className="check__box" />
                              {"Wi-Fi"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" />
                              <span className="check__box" />
                              {"Parking"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" defaultChecked={true} />
                              <span className="check__box" />
                              {"Late check-out on request"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" />
                              <span className="check__box" />
                              {"Daily Ayurveda therapy"}
                            </label>
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f1304">{"Other inclusions"}</label>
                            <textarea className="field__input field__input--area" id="f1304" defaultValue={""} />
                            <span className="field__hint">{"One per line"}</span>
                          </div>
                        </section>
                        <section className="stabs__panel" data-code="RSS-07d" aria-label="Policies">
                          <div className="s-grid2">
                            <div className="field">
                              <label className="field__label" htmlFor="f1305">{"Cancellation policy"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1305" defaultValue={"Standard – free until 72 hours"}>
                                  <option>{"Standard – free until 72 hours"}</option>
                                  <option>{"Peak season – free until 7 days"}</option>
                                  <option>{"Non-refundable"}</option>
                                  <option>{"Group – staged charges"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f1306">{"Advance / guarantee policy"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1306" defaultValue={"Standard – one night advance"}>
                                  <option>{"Standard – one night advance"}</option>
                                  <option>{"Full payment at booking"}</option>
                                  <option>{"Group – 25% at confirmation"}</option>
                                  <option>{"Company credit – no advance"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="s-note">
                            <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#info" />
                            </svg>
                            <span>{"No-show charges come from the cancellation policy."}</span>
                          </div>
                        </section>
                        <section className="stabs__panel" data-code="RSS-07e" aria-label="Channels & window">
                          <fieldset className="form-section">
                            <legend className="form-section__title">{"Where it is sold"}</legend>
                            <div className="row">
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"Aviv mobile app (CRS)"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"Aviv website booking engine"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" />
                                <span className="check__box" />
                                {"Booking.com"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" />
                                <span className="check__box" />
                                {"Agoda"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" />
                                <span className="check__box" />
                                {"Expedia"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" />
                                <span className="check__box" />
                                {"MakeMyTrip / Goibibo"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" />
                                <span className="check__box" />
                                {"EaseMyTrip"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" />
                                <span className="check__box" />
                                {"Trip.com"}
                              </label>
                            </div>
                          </fieldset>
                          <div className="s-grid2">
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1307">{"Visible to"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1307" defaultValue={"Club members"}>
                                  <option>{"Everyone"}</option>
                                  <option>{"Club members"}</option>
                                  <option>{"Corporate accounts"}</option>
                                  <option>{"Travel agents"}</option>
                                  <option>{"Staff only"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f1308">{"Promo code"}</label>
                              <input className="field__input" id="f1308" type="text" defaultValue={""} />
                              <span className="field__hint">{"Optional"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f1309">{"Book at least (days ahead)"}</label>
                              <input className="field__input num" id="f1309" type="number" defaultValue={"0"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f1310">{"Book at most (days ahead)"}</label>
                              <input className="field__input num" id="f1310" type="number" defaultValue={"365"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f1311">{"Minimum stay (nights)"}</label>
                              <input className="field__input num" id="f1311" type="number" defaultValue={"1"} />
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save rate plan"}</a>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="RSS-P05-CLUB" data-code="RSS-P05" role="dialog" aria-modal="true" aria-labelledby="RSS-P05-CLUB-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P05-CLUB-t">{"Copy rate plan"}</h2>
                      <p className="modal__desc">{"Copies all settings of CLUB"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="field" data-fw="x">
                      <label className="field__label" htmlFor="f1312">{"Source plan"}</label>
                      <div className="field__wrap">
                        <select className="field__input field__input--select" id="f1312" defaultValue={"CLUB"}>
                          <option>{"BAR-CP"}</option>
                          <option>{"BAR-EP"}</option>
                          <option>{"BAR-MAP"}</option>
                          <option>{"BAR-AP"}</option>
                          <option>{"CLUB"}</option>
                          <option>{"ADV15"}</option>
                          <option>{"CORP"}</option>
                          <option>{"AGENT"}</option>
                          <option>{"GROUP"}</option>
                          <option>{"PKG-AYUR"}</option>
                          <option>{"COMP"}</option>
                        </select>
                        <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f1313">
                        {"New code "}
                        <span className="field__req">{"*"}</span>
                      </label>
                      <input className="field__input" id="f1313" type="text" required={true} defaultValue={"CLUB2"} />
                      <span className="field__hint">{"Must not already exist"}</span>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f1314">
                        {"New name "}
                        <span className="field__req">{"*"}</span>
                      </label>
                      <input className="field__input" id="f1314" type="text" required={true} defaultValue={"Member rate (copy)"} />
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Create copy"}</a>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="RSS-07a-ADV15" data-code="RSS-07a" role="dialog" aria-modal="true" aria-labelledby="RSS-07a-ADV15-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-07a-ADV15-t">{"Rate plan ADV15"}</h2>
                      <p className="modal__desc">{"Advance purchase – 15% off"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="stabs">
                      <input type="radio" name="rpADV15" id="rpADV15-1" aria-label="Basic" defaultChecked={true} />
                      <input type="radio" name="rpADV15" id="rpADV15-2" aria-label="Prices & extras" />
                      <input type="radio" name="rpADV15" id="rpADV15-3" aria-label="Inclusions" />
                      <input type="radio" name="rpADV15" id="rpADV15-4" aria-label="Policies" />
                      <input type="radio" name="rpADV15" id="rpADV15-5" aria-label="Channels & window" />
                      <div className="stabs__list" role="tablist">
                        <label htmlFor="rpADV15-1">{"Basic"}</label>
                        <label htmlFor="rpADV15-2">{"Prices & extras"}</label>
                        <label htmlFor="rpADV15-3">{"Inclusions"}</label>
                        <label htmlFor="rpADV15-4">{"Policies"}</label>
                        <label htmlFor="rpADV15-5">{"Channels & window"}</label>
                      </div>
                      <div className="stabs__panels">
                        <section className="stabs__panel" data-code="RSS-07a" aria-label="Basic">
                          <div className="s-grid2">
                            <div className="field">
                              <label className="field__label" htmlFor="f1315">
                                {"Code "}
                                <span className="field__req">{"*"}</span>
                              </label>
                              <input className="field__input" id="f1315" type="text" required={true} defaultValue={"ADV15"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f1316">
                                {"Name "}
                                <span className="field__req">{"*"}</span>
                              </label>
                              <input className="field__input" id="f1316" type="text" required={true} defaultValue={"Advance purchase – 15% off"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f1317">{"Type"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1317" defaultValue={"Advance purchase"}>
                                  <option>{"Best available"}</option>
                                  <option>{"Member"}</option>
                                  <option>{"Advance purchase"}</option>
                                  <option>{"Corporate"}</option>
                                  <option>{"Travel agent"}</option>
                                  <option>{"Package"}</option>
                                  <option>{"Group"}</option>
                                  <option>{"Complimentary"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f1318">{"Meal plan"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1318" defaultValue={"CP – Room with breakfast"}>
                                  <option>{"EP – Room only"}</option>
                                  <option>{"CP – Room with breakfast"}</option>
                                  <option>{"MAP – Breakfast and dinner"}</option>
                                  <option>{"AP – All meals"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <fieldset className="form-section">
                            <legend className="form-section__title">{"Room types"}</legend>
                            <div className="row">
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"GDLX"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"PDLX"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"DLXS"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"PRMS"}
                              </label>
                            </div>
                          </fieldset>
                          <label className="sw">
                            <input type="checkbox" role="switch" defaultChecked={true} />
                            <span className="sw__track" />
                            {"Active"}
                          </label>
                          <fieldset className="form-section">
                            <legend className="form-section__title">{"Selling rules"}</legend>
                            <div className="s-grid3">
                              <div className="field" data-fw="s">
                                <label className="field__label" htmlFor="f1319">{"Sell from"}</label>
                                <div className="dpk">
                                  <button type="button" className="dpk-f field__input" id="f1319" aria-haspopup="dialog">
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
                                      <select className="dpk-m" name="f1319-month" aria-label="Month" defaultValue={"10"}>
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
                                      <select className="dpk-y" name="f1319-year" aria-label="Year" defaultValue={"2026"}>
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
                                        <input type="radio" name="f1319" value="01" />
                                        {"1"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1319" value="02" />
                                        {"2"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1319" value="03" />
                                        {"3"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1319" value="04" />
                                        {"4"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1319" value="05" />
                                        {"5"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1319" value="06" />
                                        {"6"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1319" value="07" />
                                        {"7"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1319" value="08" />
                                        {"8"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1319" value="09" />
                                        {"9"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1319" value="10" />
                                        {"10"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1319" value="11" />
                                        {"11"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1319" value="12" />
                                        {"12"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1319" value="13" />
                                        {"13"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1319" value="14" />
                                        {"14"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1319" value="15" />
                                        {"15"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1319" value="16" />
                                        {"16"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1319" value="17" />
                                        {"17"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1319" value="18" />
                                        {"18"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1319" value="19" />
                                        {"19"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1319" value="20" />
                                        {"20"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1319" value="21" />
                                        {"21"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1319" value="22" defaultChecked={true} />
                                        {"22"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1319" value="23" />
                                        {"23"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1319" value="24" />
                                        {"24"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1319" value="25" />
                                        {"25"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1319" value="26" />
                                        {"26"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1319" value="27" />
                                        {"27"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1319" value="28" />
                                        {"28"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1319" value="29" />
                                        {"29"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1319" value="30" />
                                        {"30"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1319" value="31" />
                                        {"31"}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="field" data-fw="s">
                                <label className="field__label" htmlFor="f1320">{"Sell until"}</label>
                                <div className="dpk">
                                  <button type="button" className="dpk-f field__input" id="f1320" aria-haspopup="dialog">
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
                                      <select className="dpk-m" name="f1320-month" aria-label="Month" defaultValue={"10"}>
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
                                      <select className="dpk-y" name="f1320-year" aria-label="Year" defaultValue={"2026"}>
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
                                        <input type="radio" name="f1320" value="01" />
                                        {"1"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1320" value="02" />
                                        {"2"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1320" value="03" />
                                        {"3"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1320" value="04" />
                                        {"4"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1320" value="05" />
                                        {"5"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1320" value="06" />
                                        {"6"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1320" value="07" />
                                        {"7"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1320" value="08" />
                                        {"8"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1320" value="09" />
                                        {"9"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1320" value="10" />
                                        {"10"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1320" value="11" />
                                        {"11"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1320" value="12" />
                                        {"12"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1320" value="13" />
                                        {"13"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1320" value="14" />
                                        {"14"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1320" value="15" />
                                        {"15"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1320" value="16" />
                                        {"16"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1320" value="17" />
                                        {"17"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1320" value="18" />
                                        {"18"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1320" value="19" />
                                        {"19"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1320" value="20" />
                                        {"20"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1320" value="21" />
                                        {"21"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1320" value="22" />
                                        {"22"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1320" value="23" />
                                        {"23"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1320" value="24" />
                                        {"24"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1320" value="25" />
                                        {"25"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1320" value="26" />
                                        {"26"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1320" value="27" />
                                        {"27"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1320" value="28" />
                                        {"28"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1320" value="29" />
                                        {"29"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1320" value="30" />
                                        {"30"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1320" value="31" />
                                        {"31"}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <span className="field__hint">{"Empty = no end"}</span>
                              </div>
                              <div className="field">
                                <label className="field__label" htmlFor="f1321">{"Price priority"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="f1321" defaultValue={"Contract → promotion → season → derived → manual"}>
                                    <option>{"Contract → promotion → season → derived → manual"}</option>
                                  </select>
                                  <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                                <span className="field__hint">{"Two rules that conflict are refused until one is given priority"}</span>
                              </div>
                            </div>
                            <div className="s-grid2">
                              <div className="field">
                                <label className="field__label" htmlFor="f1322">{"Child age counted on"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="f1322" disabled={true} defaultValue={"Arrival date"}>
                                    <option>{"Arrival date"}</option>
                                    <option>{"Each night of the stay"}</option>
                                  </select>
                                  <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                                <span className="field__hint" data-flow="owner">
                                  {"Set in Reservation Parameters (RSS-14). "}
                                  <Link data-leads-to="RSS-14" to={"/setup/rss-14-reservation-parameters"}>{"Change it there"}</Link>
                                </span>
                              </div>
                              <div className="field">
                                <label className="field__label" htmlFor="f1323">{"Children's meals and extra bed"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="f1323" defaultValue={"Free up to age 11 with existing beds"}>
                                    <option>{"Free up to age 11 with existing beds"}</option>
                                    <option>{"Charge meals only"}</option>
                                    <option>{"Charge meals and extra bed"}</option>
                                  </select>
                                  <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div className="s-note">
                              <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#info" />
                              </svg>
                              <span>{"A rate plan cannot follow itself, directly or through other plans. Saving is refused if the chain would loop. A retired plan stops new sales but stays readable on bookings already made."}</span>
                            </div>
                          </fieldset>
                        </section>
                        <section className="stabs__panel" data-code="RSS-07b" aria-label="Prices & extras">
                          <div className="s-grid2">
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f1324">{"Follows rate plan"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1324" defaultValue={"BAR-CP"}>
                                  <option>{"BAR-CP"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1325">{"Rule"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1325" defaultValue={"Percent"}>
                                  <option>{"Same as base"}</option>
                                  <option>{"Percent"}</option>
                                  <option>{"Amount (₹)"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f1326">{"Value"}</label>
                              <input className="field__input" id="f1326" type="text" defaultValue={"-15"} />
                              <span className="field__hint">{"−10 means 10% below the base rate"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f1327">{"Adjustment (%)"}</label>
                              <input className="field__input num" id="f1327" type="number" defaultValue={"-15"} />
                              <span className="field__hint">{"Shown when the rule is Percent"}</span>
                            </div>
                          </div>
                          <div className="s-grid3">
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1328">{"Extra adult / night"}</label>
                              <div className="field__wrap field__wrap--money">
                                <span className="field__prefix">{"₹"}</span>
                                <input className="field__input num" id="f1328" inputMode="decimal" defaultValue={"1,800"} />
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1329">{"Extra child (above 11) / night"}</label>
                              <div className="field__wrap field__wrap--money">
                                <span className="field__prefix">{"₹"}</span>
                                <input className="field__input num" id="f1329" inputMode="decimal" defaultValue={"0"} />
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1330">{"Extra bed / night"}</label>
                              <div className="field__wrap field__wrap--money">
                                <span className="field__prefix">{"₹"}</span>
                                <input readOnly={true} className="field__input num" id="f1330" inputMode="decimal" defaultValue={"1,500"} />
                              </div>
                              <span className="field__hint" data-flow="owner-eb">
                                {"Set in Reservation Parameters (RSS-14). "}
                                <Link data-leads-to="RSS-14" to={"/setup/rss-14-reservation-parameters"}>{"Change it there"}</Link>
                              </span>
                            </div>
                          </div>
                          <div className="s-note">
                            <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#info" />
                            </svg>
                            <span>{"Children 11 and under stay free with existing beds (maximum 2)."}</span>
                          </div>
                        </section>
                        <section className="stabs__panel" data-code="RSS-07c" aria-label="Inclusions">
                          <div className="row">
                            <label className="check">
                              <input className="check__input" type="checkbox" defaultChecked={true} />
                              <span className="check__box" />
                              {"Breakfast"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" />
                              <span className="check__box" />
                              {"Lunch"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" />
                              <span className="check__box" />
                              {"Dinner"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" defaultChecked={true} />
                              <span className="check__box" />
                              {"Wi-Fi"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" />
                              <span className="check__box" />
                              {"Parking"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" />
                              <span className="check__box" />
                              {"Late check-out on request"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" />
                              <span className="check__box" />
                              {"Daily Ayurveda therapy"}
                            </label>
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f1331">{"Other inclusions"}</label>
                            <textarea className="field__input field__input--area" id="f1331" defaultValue={""} />
                            <span className="field__hint">{"One per line"}</span>
                          </div>
                        </section>
                        <section className="stabs__panel" data-code="RSS-07d" aria-label="Policies">
                          <div className="s-grid2">
                            <div className="field">
                              <label className="field__label" htmlFor="f1332">{"Cancellation policy"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1332" defaultValue={"Non-refundable"}>
                                  <option>{"Standard – free until 72 hours"}</option>
                                  <option>{"Peak season – free until 7 days"}</option>
                                  <option>{"Non-refundable"}</option>
                                  <option>{"Group – staged charges"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f1333">{"Advance / guarantee policy"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1333" defaultValue={"Full payment at booking"}>
                                  <option>{"Standard – one night advance"}</option>
                                  <option>{"Full payment at booking"}</option>
                                  <option>{"Group – 25% at confirmation"}</option>
                                  <option>{"Company credit – no advance"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="s-note">
                            <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#info" />
                            </svg>
                            <span>{"No-show charges come from the cancellation policy."}</span>
                          </div>
                        </section>
                        <section className="stabs__panel" data-code="RSS-07e" aria-label="Channels & window">
                          <fieldset className="form-section">
                            <legend className="form-section__title">{"Where it is sold"}</legend>
                            <div className="row">
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"Aviv mobile app (CRS)"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"Aviv website booking engine"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"Booking.com"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"Agoda"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"Expedia"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"MakeMyTrip / Goibibo"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"EaseMyTrip"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"Trip.com"}
                              </label>
                            </div>
                          </fieldset>
                          <div className="s-grid2">
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1334">{"Visible to"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1334" defaultValue={"Everyone"}>
                                  <option>{"Everyone"}</option>
                                  <option>{"Club members"}</option>
                                  <option>{"Corporate accounts"}</option>
                                  <option>{"Travel agents"}</option>
                                  <option>{"Staff only"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f1335">{"Promo code"}</label>
                              <input className="field__input" id="f1335" type="text" defaultValue={""} />
                              <span className="field__hint">{"Optional"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f1336">{"Book at least (days ahead)"}</label>
                              <input className="field__input num" id="f1336" type="number" defaultValue={"14"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f1337">{"Book at most (days ahead)"}</label>
                              <input className="field__input num" id="f1337" type="number" defaultValue={"365"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f1338">{"Minimum stay (nights)"}</label>
                              <input className="field__input num" id="f1338" type="number" defaultValue={"1"} />
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save rate plan"}</a>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="RSS-P05-ADV15" data-code="RSS-P05" role="dialog" aria-modal="true" aria-labelledby="RSS-P05-ADV15-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P05-ADV15-t">{"Copy rate plan"}</h2>
                      <p className="modal__desc">{"Copies all settings of ADV15"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="field" data-fw="x">
                      <label className="field__label" htmlFor="f1339">{"Source plan"}</label>
                      <div className="field__wrap">
                        <select className="field__input field__input--select" id="f1339" defaultValue={"ADV15"}>
                          <option>{"BAR-CP"}</option>
                          <option>{"BAR-EP"}</option>
                          <option>{"BAR-MAP"}</option>
                          <option>{"BAR-AP"}</option>
                          <option>{"CLUB"}</option>
                          <option>{"ADV15"}</option>
                          <option>{"CORP"}</option>
                          <option>{"AGENT"}</option>
                          <option>{"GROUP"}</option>
                          <option>{"PKG-AYUR"}</option>
                          <option>{"COMP"}</option>
                        </select>
                        <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f1340">
                        {"New code "}
                        <span className="field__req">{"*"}</span>
                      </label>
                      <input className="field__input" id="f1340" type="text" required={true} defaultValue={"ADV152"} />
                      <span className="field__hint">{"Must not already exist"}</span>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f1341">
                        {"New name "}
                        <span className="field__req">{"*"}</span>
                      </label>
                      <input className="field__input" id="f1341" type="text" required={true} defaultValue={"Advance purchase – 15% off (copy)"} />
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Create copy"}</a>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="RSS-07a-CORP" data-code="RSS-07a" role="dialog" aria-modal="true" aria-labelledby="RSS-07a-CORP-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-07a-CORP-t">{"Rate plan CORP"}</h2>
                      <p className="modal__desc">{"Corporate rate"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="stabs">
                      <input type="radio" name="rpCORP" id="rpCORP-1" aria-label="Basic" defaultChecked={true} />
                      <input type="radio" name="rpCORP" id="rpCORP-2" aria-label="Prices & extras" />
                      <input type="radio" name="rpCORP" id="rpCORP-3" aria-label="Inclusions" />
                      <input type="radio" name="rpCORP" id="rpCORP-4" aria-label="Policies" />
                      <input type="radio" name="rpCORP" id="rpCORP-5" aria-label="Channels & window" />
                      <div className="stabs__list" role="tablist">
                        <label htmlFor="rpCORP-1">{"Basic"}</label>
                        <label htmlFor="rpCORP-2">{"Prices & extras"}</label>
                        <label htmlFor="rpCORP-3">{"Inclusions"}</label>
                        <label htmlFor="rpCORP-4">{"Policies"}</label>
                        <label htmlFor="rpCORP-5">{"Channels & window"}</label>
                      </div>
                      <div className="stabs__panels">
                        <section className="stabs__panel" data-code="RSS-07a" aria-label="Basic">
                          <div className="s-grid2">
                            <div className="field">
                              <label className="field__label" htmlFor="f1342">
                                {"Code "}
                                <span className="field__req">{"*"}</span>
                              </label>
                              <input className="field__input" id="f1342" type="text" required={true} defaultValue={"CORP"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f1343">
                                {"Name "}
                                <span className="field__req">{"*"}</span>
                              </label>
                              <input className="field__input" id="f1343" type="text" required={true} defaultValue={"Corporate rate"} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1344">{"Type"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1344" defaultValue={"Corporate"}>
                                  <option>{"Best available"}</option>
                                  <option>{"Member"}</option>
                                  <option>{"Advance purchase"}</option>
                                  <option>{"Corporate"}</option>
                                  <option>{"Travel agent"}</option>
                                  <option>{"Package"}</option>
                                  <option>{"Group"}</option>
                                  <option>{"Complimentary"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f1345">{"Meal plan"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1345" defaultValue={"CP – Room with breakfast"}>
                                  <option>{"EP – Room only"}</option>
                                  <option>{"CP – Room with breakfast"}</option>
                                  <option>{"MAP – Breakfast and dinner"}</option>
                                  <option>{"AP – All meals"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <fieldset className="form-section">
                            <legend className="form-section__title">{"Room types"}</legend>
                            <div className="row">
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"GDLX"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"PDLX"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"DLXS"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"PRMS"}
                              </label>
                            </div>
                          </fieldset>
                          <label className="sw">
                            <input type="checkbox" role="switch" defaultChecked={true} />
                            <span className="sw__track" />
                            {"Active"}
                          </label>
                          <fieldset className="form-section">
                            <legend className="form-section__title">{"Selling rules"}</legend>
                            <div className="s-grid3">
                              <div className="field" data-fw="s">
                                <label className="field__label" htmlFor="f1346">{"Sell from"}</label>
                                <div className="dpk">
                                  <button type="button" className="dpk-f field__input" id="f1346" aria-haspopup="dialog">
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
                                      <select className="dpk-m" name="f1346-month" aria-label="Month" defaultValue={"10"}>
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
                                      <select className="dpk-y" name="f1346-year" aria-label="Year" defaultValue={"2026"}>
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
                                        <input type="radio" name="f1346" value="01" />
                                        {"1"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1346" value="02" />
                                        {"2"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1346" value="03" />
                                        {"3"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1346" value="04" />
                                        {"4"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1346" value="05" />
                                        {"5"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1346" value="06" />
                                        {"6"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1346" value="07" />
                                        {"7"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1346" value="08" />
                                        {"8"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1346" value="09" />
                                        {"9"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1346" value="10" />
                                        {"10"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1346" value="11" />
                                        {"11"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1346" value="12" />
                                        {"12"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1346" value="13" />
                                        {"13"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1346" value="14" />
                                        {"14"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1346" value="15" />
                                        {"15"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1346" value="16" />
                                        {"16"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1346" value="17" />
                                        {"17"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1346" value="18" />
                                        {"18"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1346" value="19" />
                                        {"19"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1346" value="20" />
                                        {"20"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1346" value="21" />
                                        {"21"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1346" value="22" defaultChecked={true} />
                                        {"22"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1346" value="23" />
                                        {"23"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1346" value="24" />
                                        {"24"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1346" value="25" />
                                        {"25"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1346" value="26" />
                                        {"26"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1346" value="27" />
                                        {"27"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1346" value="28" />
                                        {"28"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1346" value="29" />
                                        {"29"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1346" value="30" />
                                        {"30"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1346" value="31" />
                                        {"31"}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="field" data-fw="s">
                                <label className="field__label" htmlFor="f1347">{"Sell until"}</label>
                                <div className="dpk">
                                  <button type="button" className="dpk-f field__input" id="f1347" aria-haspopup="dialog">
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
                                      <select className="dpk-m" name="f1347-month" aria-label="Month" defaultValue={"10"}>
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
                                      <select className="dpk-y" name="f1347-year" aria-label="Year" defaultValue={"2026"}>
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
                                        <input type="radio" name="f1347" value="01" />
                                        {"1"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1347" value="02" />
                                        {"2"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1347" value="03" />
                                        {"3"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1347" value="04" />
                                        {"4"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1347" value="05" />
                                        {"5"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1347" value="06" />
                                        {"6"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1347" value="07" />
                                        {"7"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1347" value="08" />
                                        {"8"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1347" value="09" />
                                        {"9"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1347" value="10" />
                                        {"10"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1347" value="11" />
                                        {"11"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1347" value="12" />
                                        {"12"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1347" value="13" />
                                        {"13"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1347" value="14" />
                                        {"14"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1347" value="15" />
                                        {"15"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1347" value="16" />
                                        {"16"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1347" value="17" />
                                        {"17"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1347" value="18" />
                                        {"18"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1347" value="19" />
                                        {"19"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1347" value="20" />
                                        {"20"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1347" value="21" />
                                        {"21"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1347" value="22" />
                                        {"22"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1347" value="23" />
                                        {"23"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1347" value="24" />
                                        {"24"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1347" value="25" />
                                        {"25"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1347" value="26" />
                                        {"26"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1347" value="27" />
                                        {"27"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1347" value="28" />
                                        {"28"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1347" value="29" />
                                        {"29"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1347" value="30" />
                                        {"30"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1347" value="31" />
                                        {"31"}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <span className="field__hint">{"Empty = no end"}</span>
                              </div>
                              <div className="field">
                                <label className="field__label" htmlFor="f1348">{"Price priority"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="f1348" defaultValue={"Contract → promotion → season → derived → manual"}>
                                    <option>{"Contract → promotion → season → derived → manual"}</option>
                                  </select>
                                  <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                                <span className="field__hint">{"Two rules that conflict are refused until one is given priority"}</span>
                              </div>
                            </div>
                            <div className="s-grid2">
                              <div className="field">
                                <label className="field__label" htmlFor="f1349">{"Child age counted on"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="f1349" disabled={true} defaultValue={"Arrival date"}>
                                    <option>{"Arrival date"}</option>
                                    <option>{"Each night of the stay"}</option>
                                  </select>
                                  <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                                <span className="field__hint" data-flow="owner">
                                  {"Set in Reservation Parameters (RSS-14). "}
                                  <Link data-leads-to="RSS-14" to={"/setup/rss-14-reservation-parameters"}>{"Change it there"}</Link>
                                </span>
                              </div>
                              <div className="field">
                                <label className="field__label" htmlFor="f1350">{"Children's meals and extra bed"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="f1350" defaultValue={"Free up to age 11 with existing beds"}>
                                    <option>{"Free up to age 11 with existing beds"}</option>
                                    <option>{"Charge meals only"}</option>
                                    <option>{"Charge meals and extra bed"}</option>
                                  </select>
                                  <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div className="s-note">
                              <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#info" />
                              </svg>
                              <span>{"A rate plan cannot follow itself, directly or through other plans. Saving is refused if the chain would loop. A retired plan stops new sales but stays readable on bookings already made."}</span>
                            </div>
                          </fieldset>
                        </section>
                        <section className="stabs__panel" data-code="RSS-07b" aria-label="Prices & extras">
                          <div className="s-grid2">
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f1351">{"Follows rate plan"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1351" defaultValue={"BAR-CP"}>
                                  <option>{"BAR-CP"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1352">{"Rule"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1352" defaultValue={"Percent"}>
                                  <option>{"Same as base"}</option>
                                  <option>{"Percent"}</option>
                                  <option>{"Amount (₹)"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f1353">{"Value"}</label>
                              <input className="field__input" id="f1353" type="text" defaultValue={"-12"} />
                              <span className="field__hint">{"−10 means 10% below the base rate"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f1354">{"Adjustment (%)"}</label>
                              <input className="field__input num" id="f1354" type="number" defaultValue={"-12"} />
                              <span className="field__hint">{"Shown when the rule is Percent"}</span>
                            </div>
                          </div>
                          <div className="s-grid3">
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1355">{"Extra adult / night"}</label>
                              <div className="field__wrap field__wrap--money">
                                <span className="field__prefix">{"₹"}</span>
                                <input className="field__input num" id="f1355" inputMode="decimal" defaultValue={"1,800"} />
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1356">{"Extra child (above 11) / night"}</label>
                              <div className="field__wrap field__wrap--money">
                                <span className="field__prefix">{"₹"}</span>
                                <input className="field__input num" id="f1356" inputMode="decimal" defaultValue={"0"} />
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1357">{"Extra bed / night"}</label>
                              <div className="field__wrap field__wrap--money">
                                <span className="field__prefix">{"₹"}</span>
                                <input readOnly={true} className="field__input num" id="f1357" inputMode="decimal" defaultValue={"1,500"} />
                              </div>
                              <span className="field__hint" data-flow="owner-eb">
                                {"Set in Reservation Parameters (RSS-14). "}
                                <Link data-leads-to="RSS-14" to={"/setup/rss-14-reservation-parameters"}>{"Change it there"}</Link>
                              </span>
                            </div>
                          </div>
                          <div className="s-note">
                            <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#info" />
                            </svg>
                            <span>{"Children 11 and under stay free with existing beds (maximum 2)."}</span>
                          </div>
                        </section>
                        <section className="stabs__panel" data-code="RSS-07c" aria-label="Inclusions">
                          <div className="row">
                            <label className="check">
                              <input className="check__input" type="checkbox" defaultChecked={true} />
                              <span className="check__box" />
                              {"Breakfast"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" />
                              <span className="check__box" />
                              {"Lunch"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" />
                              <span className="check__box" />
                              {"Dinner"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" defaultChecked={true} />
                              <span className="check__box" />
                              {"Wi-Fi"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" />
                              <span className="check__box" />
                              {"Parking"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" />
                              <span className="check__box" />
                              {"Late check-out on request"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" />
                              <span className="check__box" />
                              {"Daily Ayurveda therapy"}
                            </label>
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f1358">{"Other inclusions"}</label>
                            <textarea className="field__input field__input--area" id="f1358" defaultValue={""} />
                            <span className="field__hint">{"One per line"}</span>
                          </div>
                        </section>
                        <section className="stabs__panel" data-code="RSS-07d" aria-label="Policies">
                          <div className="s-grid2">
                            <div className="field">
                              <label className="field__label" htmlFor="f1359">{"Cancellation policy"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1359" defaultValue={"Standard – free until 72 hours"}>
                                  <option>{"Standard – free until 72 hours"}</option>
                                  <option>{"Peak season – free until 7 days"}</option>
                                  <option>{"Non-refundable"}</option>
                                  <option>{"Group – staged charges"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f1360">{"Advance / guarantee policy"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1360" defaultValue={"Company credit – no advance"}>
                                  <option>{"Standard – one night advance"}</option>
                                  <option>{"Full payment at booking"}</option>
                                  <option>{"Group – 25% at confirmation"}</option>
                                  <option>{"Company credit – no advance"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="s-note">
                            <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#info" />
                            </svg>
                            <span>{"No-show charges come from the cancellation policy."}</span>
                          </div>
                        </section>
                        <section className="stabs__panel" data-code="RSS-07e" aria-label="Channels & window">
                          <fieldset className="form-section">
                            <legend className="form-section__title">{"Where it is sold"}</legend>
                            <div className="row">
                              <label className="check">
                                <input className="check__input" type="checkbox" />
                                <span className="check__box" />
                                {"Aviv mobile app (CRS)"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" />
                                <span className="check__box" />
                                {"Aviv website booking engine"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" />
                                <span className="check__box" />
                                {"Booking.com"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" />
                                <span className="check__box" />
                                {"Agoda"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" />
                                <span className="check__box" />
                                {"Expedia"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" />
                                <span className="check__box" />
                                {"MakeMyTrip / Goibibo"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" />
                                <span className="check__box" />
                                {"EaseMyTrip"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" />
                                <span className="check__box" />
                                {"Trip.com"}
                              </label>
                            </div>
                          </fieldset>
                          <div className="s-grid2">
                            <div className="field">
                              <label className="field__label" htmlFor="f1361">{"Visible to"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1361" defaultValue={"Corporate accounts"}>
                                  <option>{"Everyone"}</option>
                                  <option>{"Club members"}</option>
                                  <option>{"Corporate accounts"}</option>
                                  <option>{"Travel agents"}</option>
                                  <option>{"Staff only"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f1362">{"Promo code"}</label>
                              <input className="field__input" id="f1362" type="text" defaultValue={""} />
                              <span className="field__hint">{"Optional"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f1363">{"Book at least (days ahead)"}</label>
                              <input className="field__input num" id="f1363" type="number" defaultValue={"0"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f1364">{"Book at most (days ahead)"}</label>
                              <input className="field__input num" id="f1364" type="number" defaultValue={"365"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f1365">{"Minimum stay (nights)"}</label>
                              <input className="field__input num" id="f1365" type="number" defaultValue={"1"} />
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save rate plan"}</a>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="RSS-P05-CORP" data-code="RSS-P05" role="dialog" aria-modal="true" aria-labelledby="RSS-P05-CORP-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P05-CORP-t">{"Copy rate plan"}</h2>
                      <p className="modal__desc">{"Copies all settings of CORP"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="field" data-fw="x">
                      <label className="field__label" htmlFor="f1366">{"Source plan"}</label>
                      <div className="field__wrap">
                        <select className="field__input field__input--select" id="f1366" defaultValue={"CORP"}>
                          <option>{"BAR-CP"}</option>
                          <option>{"BAR-EP"}</option>
                          <option>{"BAR-MAP"}</option>
                          <option>{"BAR-AP"}</option>
                          <option>{"CLUB"}</option>
                          <option>{"ADV15"}</option>
                          <option>{"CORP"}</option>
                          <option>{"AGENT"}</option>
                          <option>{"GROUP"}</option>
                          <option>{"PKG-AYUR"}</option>
                          <option>{"COMP"}</option>
                        </select>
                        <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f1367">
                        {"New code "}
                        <span className="field__req">{"*"}</span>
                      </label>
                      <input className="field__input" id="f1367" type="text" required={true} defaultValue={"CORP2"} />
                      <span className="field__hint">{"Must not already exist"}</span>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f1368">
                        {"New name "}
                        <span className="field__req">{"*"}</span>
                      </label>
                      <input className="field__input" id="f1368" type="text" required={true} defaultValue={"Corporate rate (copy)"} />
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Create copy"}</a>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="RSS-07a-AGENT" data-code="RSS-07a" role="dialog" aria-modal="true" aria-labelledby="RSS-07a-AGENT-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-07a-AGENT-t">{"Rate plan AGENT"}</h2>
                      <p className="modal__desc">{"Travel agent net rate"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="stabs">
                      <input type="radio" name="rpAGENT" id="rpAGENT-1" aria-label="Basic" defaultChecked={true} />
                      <input type="radio" name="rpAGENT" id="rpAGENT-2" aria-label="Prices & extras" />
                      <input type="radio" name="rpAGENT" id="rpAGENT-3" aria-label="Inclusions" />
                      <input type="radio" name="rpAGENT" id="rpAGENT-4" aria-label="Policies" />
                      <input type="radio" name="rpAGENT" id="rpAGENT-5" aria-label="Channels & window" />
                      <div className="stabs__list" role="tablist">
                        <label htmlFor="rpAGENT-1">{"Basic"}</label>
                        <label htmlFor="rpAGENT-2">{"Prices & extras"}</label>
                        <label htmlFor="rpAGENT-3">{"Inclusions"}</label>
                        <label htmlFor="rpAGENT-4">{"Policies"}</label>
                        <label htmlFor="rpAGENT-5">{"Channels & window"}</label>
                      </div>
                      <div className="stabs__panels">
                        <section className="stabs__panel" data-code="RSS-07a" aria-label="Basic">
                          <div className="s-grid2">
                            <div className="field">
                              <label className="field__label" htmlFor="f1369">
                                {"Code "}
                                <span className="field__req">{"*"}</span>
                              </label>
                              <input className="field__input" id="f1369" type="text" required={true} defaultValue={"AGENT"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f1370">
                                {"Name "}
                                <span className="field__req">{"*"}</span>
                              </label>
                              <input className="field__input" id="f1370" type="text" required={true} defaultValue={"Travel agent net rate"} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1371">{"Type"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1371" defaultValue={"Travel agent"}>
                                  <option>{"Best available"}</option>
                                  <option>{"Member"}</option>
                                  <option>{"Advance purchase"}</option>
                                  <option>{"Corporate"}</option>
                                  <option>{"Travel agent"}</option>
                                  <option>{"Package"}</option>
                                  <option>{"Group"}</option>
                                  <option>{"Complimentary"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f1372">{"Meal plan"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1372" defaultValue={"CP – Room with breakfast"}>
                                  <option>{"EP – Room only"}</option>
                                  <option>{"CP – Room with breakfast"}</option>
                                  <option>{"MAP – Breakfast and dinner"}</option>
                                  <option>{"AP – All meals"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <fieldset className="form-section">
                            <legend className="form-section__title">{"Room types"}</legend>
                            <div className="row">
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"GDLX"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"PDLX"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"DLXS"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"PRMS"}
                              </label>
                            </div>
                          </fieldset>
                          <label className="sw">
                            <input type="checkbox" role="switch" defaultChecked={true} />
                            <span className="sw__track" />
                            {"Active"}
                          </label>
                          <fieldset className="form-section">
                            <legend className="form-section__title">{"Selling rules"}</legend>
                            <div className="s-grid3">
                              <div className="field" data-fw="s">
                                <label className="field__label" htmlFor="f1373">{"Sell from"}</label>
                                <div className="dpk">
                                  <button type="button" className="dpk-f field__input" id="f1373" aria-haspopup="dialog">
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
                                      <select className="dpk-m" name="f1373-month" aria-label="Month" defaultValue={"10"}>
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
                                      <select className="dpk-y" name="f1373-year" aria-label="Year" defaultValue={"2026"}>
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
                                        <input type="radio" name="f1373" value="01" />
                                        {"1"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1373" value="02" />
                                        {"2"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1373" value="03" />
                                        {"3"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1373" value="04" />
                                        {"4"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1373" value="05" />
                                        {"5"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1373" value="06" />
                                        {"6"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1373" value="07" />
                                        {"7"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1373" value="08" />
                                        {"8"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1373" value="09" />
                                        {"9"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1373" value="10" />
                                        {"10"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1373" value="11" />
                                        {"11"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1373" value="12" />
                                        {"12"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1373" value="13" />
                                        {"13"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1373" value="14" />
                                        {"14"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1373" value="15" />
                                        {"15"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1373" value="16" />
                                        {"16"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1373" value="17" />
                                        {"17"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1373" value="18" />
                                        {"18"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1373" value="19" />
                                        {"19"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1373" value="20" />
                                        {"20"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1373" value="21" />
                                        {"21"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1373" value="22" defaultChecked={true} />
                                        {"22"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1373" value="23" />
                                        {"23"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1373" value="24" />
                                        {"24"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1373" value="25" />
                                        {"25"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1373" value="26" />
                                        {"26"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1373" value="27" />
                                        {"27"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1373" value="28" />
                                        {"28"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1373" value="29" />
                                        {"29"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1373" value="30" />
                                        {"30"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1373" value="31" />
                                        {"31"}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="field" data-fw="s">
                                <label className="field__label" htmlFor="f1374">{"Sell until"}</label>
                                <div className="dpk">
                                  <button type="button" className="dpk-f field__input" id="f1374" aria-haspopup="dialog">
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
                                      <select className="dpk-m" name="f1374-month" aria-label="Month" defaultValue={"10"}>
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
                                      <select className="dpk-y" name="f1374-year" aria-label="Year" defaultValue={"2026"}>
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
                                        <input type="radio" name="f1374" value="01" />
                                        {"1"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1374" value="02" />
                                        {"2"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1374" value="03" />
                                        {"3"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1374" value="04" />
                                        {"4"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1374" value="05" />
                                        {"5"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1374" value="06" />
                                        {"6"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1374" value="07" />
                                        {"7"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1374" value="08" />
                                        {"8"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1374" value="09" />
                                        {"9"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1374" value="10" />
                                        {"10"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1374" value="11" />
                                        {"11"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1374" value="12" />
                                        {"12"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1374" value="13" />
                                        {"13"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1374" value="14" />
                                        {"14"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1374" value="15" />
                                        {"15"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1374" value="16" />
                                        {"16"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1374" value="17" />
                                        {"17"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1374" value="18" />
                                        {"18"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1374" value="19" />
                                        {"19"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1374" value="20" />
                                        {"20"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1374" value="21" />
                                        {"21"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1374" value="22" />
                                        {"22"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1374" value="23" />
                                        {"23"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1374" value="24" />
                                        {"24"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1374" value="25" />
                                        {"25"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1374" value="26" />
                                        {"26"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1374" value="27" />
                                        {"27"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1374" value="28" />
                                        {"28"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1374" value="29" />
                                        {"29"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1374" value="30" />
                                        {"30"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1374" value="31" />
                                        {"31"}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <span className="field__hint">{"Empty = no end"}</span>
                              </div>
                              <div className="field">
                                <label className="field__label" htmlFor="f1375">{"Price priority"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="f1375" defaultValue={"Contract → promotion → season → derived → manual"}>
                                    <option>{"Contract → promotion → season → derived → manual"}</option>
                                  </select>
                                  <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                                <span className="field__hint">{"Two rules that conflict are refused until one is given priority"}</span>
                              </div>
                            </div>
                            <div className="s-grid2">
                              <div className="field">
                                <label className="field__label" htmlFor="f1376">{"Child age counted on"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="f1376" disabled={true} defaultValue={"Arrival date"}>
                                    <option>{"Arrival date"}</option>
                                    <option>{"Each night of the stay"}</option>
                                  </select>
                                  <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                                <span className="field__hint" data-flow="owner">
                                  {"Set in Reservation Parameters (RSS-14). "}
                                  <Link data-leads-to="RSS-14" to={"/setup/rss-14-reservation-parameters"}>{"Change it there"}</Link>
                                </span>
                              </div>
                              <div className="field">
                                <label className="field__label" htmlFor="f1377">{"Children's meals and extra bed"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="f1377" defaultValue={"Free up to age 11 with existing beds"}>
                                    <option>{"Free up to age 11 with existing beds"}</option>
                                    <option>{"Charge meals only"}</option>
                                    <option>{"Charge meals and extra bed"}</option>
                                  </select>
                                  <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div className="s-note">
                              <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#info" />
                              </svg>
                              <span>{"A rate plan cannot follow itself, directly or through other plans. Saving is refused if the chain would loop. A retired plan stops new sales but stays readable on bookings already made."}</span>
                            </div>
                          </fieldset>
                        </section>
                        <section className="stabs__panel" data-code="RSS-07b" aria-label="Prices & extras">
                          <div className="s-grid2">
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f1378">{"Follows rate plan"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1378" defaultValue={"BAR-CP"}>
                                  <option>{"BAR-CP"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1379">{"Rule"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1379" defaultValue={"Percent"}>
                                  <option>{"Same as base"}</option>
                                  <option>{"Percent"}</option>
                                  <option>{"Amount (₹)"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f1380">{"Value"}</label>
                              <input className="field__input" id="f1380" type="text" defaultValue={"-18"} />
                              <span className="field__hint">{"−10 means 10% below the base rate"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f1381">{"Adjustment (%)"}</label>
                              <input className="field__input num" id="f1381" type="number" defaultValue={"-18"} />
                              <span className="field__hint">{"Shown when the rule is Percent"}</span>
                            </div>
                          </div>
                          <div className="s-grid3">
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1382">{"Extra adult / night"}</label>
                              <div className="field__wrap field__wrap--money">
                                <span className="field__prefix">{"₹"}</span>
                                <input className="field__input num" id="f1382" inputMode="decimal" defaultValue={"1,800"} />
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1383">{"Extra child (above 11) / night"}</label>
                              <div className="field__wrap field__wrap--money">
                                <span className="field__prefix">{"₹"}</span>
                                <input className="field__input num" id="f1383" inputMode="decimal" defaultValue={"0"} />
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1384">{"Extra bed / night"}</label>
                              <div className="field__wrap field__wrap--money">
                                <span className="field__prefix">{"₹"}</span>
                                <input readOnly={true} className="field__input num" id="f1384" inputMode="decimal" defaultValue={"1,500"} />
                              </div>
                              <span className="field__hint" data-flow="owner-eb">
                                {"Set in Reservation Parameters (RSS-14). "}
                                <Link data-leads-to="RSS-14" to={"/setup/rss-14-reservation-parameters"}>{"Change it there"}</Link>
                              </span>
                            </div>
                          </div>
                          <div className="s-note">
                            <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#info" />
                            </svg>
                            <span>{"Children 11 and under stay free with existing beds (maximum 2)."}</span>
                          </div>
                        </section>
                        <section className="stabs__panel" data-code="RSS-07c" aria-label="Inclusions">
                          <div className="row">
                            <label className="check">
                              <input className="check__input" type="checkbox" defaultChecked={true} />
                              <span className="check__box" />
                              {"Breakfast"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" />
                              <span className="check__box" />
                              {"Lunch"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" />
                              <span className="check__box" />
                              {"Dinner"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" defaultChecked={true} />
                              <span className="check__box" />
                              {"Wi-Fi"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" />
                              <span className="check__box" />
                              {"Parking"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" />
                              <span className="check__box" />
                              {"Late check-out on request"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" />
                              <span className="check__box" />
                              {"Daily Ayurveda therapy"}
                            </label>
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f1385">{"Other inclusions"}</label>
                            <textarea className="field__input field__input--area" id="f1385" defaultValue={""} />
                            <span className="field__hint">{"One per line"}</span>
                          </div>
                        </section>
                        <section className="stabs__panel" data-code="RSS-07d" aria-label="Policies">
                          <div className="s-grid2">
                            <div className="field">
                              <label className="field__label" htmlFor="f1386">{"Cancellation policy"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1386" defaultValue={"Standard – free until 72 hours"}>
                                  <option>{"Standard – free until 72 hours"}</option>
                                  <option>{"Peak season – free until 7 days"}</option>
                                  <option>{"Non-refundable"}</option>
                                  <option>{"Group – staged charges"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f1387">{"Advance / guarantee policy"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1387" defaultValue={"Company credit – no advance"}>
                                  <option>{"Standard – one night advance"}</option>
                                  <option>{"Full payment at booking"}</option>
                                  <option>{"Group – 25% at confirmation"}</option>
                                  <option>{"Company credit – no advance"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="s-note">
                            <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#info" />
                            </svg>
                            <span>{"No-show charges come from the cancellation policy."}</span>
                          </div>
                        </section>
                        <section className="stabs__panel" data-code="RSS-07e" aria-label="Channels & window">
                          <fieldset className="form-section">
                            <legend className="form-section__title">{"Where it is sold"}</legend>
                            <div className="row">
                              <label className="check">
                                <input className="check__input" type="checkbox" />
                                <span className="check__box" />
                                {"Aviv mobile app (CRS)"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" />
                                <span className="check__box" />
                                {"Aviv website booking engine"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" />
                                <span className="check__box" />
                                {"Booking.com"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" />
                                <span className="check__box" />
                                {"Agoda"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" />
                                <span className="check__box" />
                                {"Expedia"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" />
                                <span className="check__box" />
                                {"MakeMyTrip / Goibibo"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" />
                                <span className="check__box" />
                                {"EaseMyTrip"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" />
                                <span className="check__box" />
                                {"Trip.com"}
                              </label>
                            </div>
                          </fieldset>
                          <div className="s-grid2">
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1388">{"Visible to"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1388" defaultValue={"Travel agents"}>
                                  <option>{"Everyone"}</option>
                                  <option>{"Club members"}</option>
                                  <option>{"Corporate accounts"}</option>
                                  <option>{"Travel agents"}</option>
                                  <option>{"Staff only"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f1389">{"Promo code"}</label>
                              <input className="field__input" id="f1389" type="text" defaultValue={""} />
                              <span className="field__hint">{"Optional"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f1390">{"Book at least (days ahead)"}</label>
                              <input className="field__input num" id="f1390" type="number" defaultValue={"0"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f1391">{"Book at most (days ahead)"}</label>
                              <input className="field__input num" id="f1391" type="number" defaultValue={"365"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f1392">{"Minimum stay (nights)"}</label>
                              <input className="field__input num" id="f1392" type="number" defaultValue={"1"} />
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save rate plan"}</a>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="RSS-P05-AGENT" data-code="RSS-P05" role="dialog" aria-modal="true" aria-labelledby="RSS-P05-AGENT-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P05-AGENT-t">{"Copy rate plan"}</h2>
                      <p className="modal__desc">{"Copies all settings of AGENT"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="field" data-fw="x">
                      <label className="field__label" htmlFor="f1393">{"Source plan"}</label>
                      <div className="field__wrap">
                        <select className="field__input field__input--select" id="f1393" defaultValue={"AGENT"}>
                          <option>{"BAR-CP"}</option>
                          <option>{"BAR-EP"}</option>
                          <option>{"BAR-MAP"}</option>
                          <option>{"BAR-AP"}</option>
                          <option>{"CLUB"}</option>
                          <option>{"ADV15"}</option>
                          <option>{"CORP"}</option>
                          <option>{"AGENT"}</option>
                          <option>{"GROUP"}</option>
                          <option>{"PKG-AYUR"}</option>
                          <option>{"COMP"}</option>
                        </select>
                        <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f1394">
                        {"New code "}
                        <span className="field__req">{"*"}</span>
                      </label>
                      <input className="field__input" id="f1394" type="text" required={true} defaultValue={"AGENT2"} />
                      <span className="field__hint">{"Must not already exist"}</span>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f1395">
                        {"New name "}
                        <span className="field__req">{"*"}</span>
                      </label>
                      <input className="field__input" id="f1395" type="text" required={true} defaultValue={"Travel agent net rate (copy)"} />
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Create copy"}</a>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="RSS-07a-GROUP" data-code="RSS-07a" role="dialog" aria-modal="true" aria-labelledby="RSS-07a-GROUP-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-07a-GROUP-t">{"Rate plan GROUP"}</h2>
                      <p className="modal__desc">{"Group rate"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="stabs">
                      <input type="radio" name="rpGROUP" id="rpGROUP-1" aria-label="Basic" defaultChecked={true} />
                      <input type="radio" name="rpGROUP" id="rpGROUP-2" aria-label="Prices & extras" />
                      <input type="radio" name="rpGROUP" id="rpGROUP-3" aria-label="Inclusions" />
                      <input type="radio" name="rpGROUP" id="rpGROUP-4" aria-label="Policies" />
                      <input type="radio" name="rpGROUP" id="rpGROUP-5" aria-label="Channels & window" />
                      <div className="stabs__list" role="tablist">
                        <label htmlFor="rpGROUP-1">{"Basic"}</label>
                        <label htmlFor="rpGROUP-2">{"Prices & extras"}</label>
                        <label htmlFor="rpGROUP-3">{"Inclusions"}</label>
                        <label htmlFor="rpGROUP-4">{"Policies"}</label>
                        <label htmlFor="rpGROUP-5">{"Channels & window"}</label>
                      </div>
                      <div className="stabs__panels">
                        <section className="stabs__panel" data-code="RSS-07a" aria-label="Basic">
                          <div className="s-grid2">
                            <div className="field">
                              <label className="field__label" htmlFor="f1396">
                                {"Code "}
                                <span className="field__req">{"*"}</span>
                              </label>
                              <input className="field__input" id="f1396" type="text" required={true} defaultValue={"GROUP"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f1397">
                                {"Name "}
                                <span className="field__req">{"*"}</span>
                              </label>
                              <input className="field__input" id="f1397" type="text" required={true} defaultValue={"Group rate"} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1398">{"Type"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1398" defaultValue={"Group"}>
                                  <option>{"Best available"}</option>
                                  <option>{"Member"}</option>
                                  <option>{"Advance purchase"}</option>
                                  <option>{"Corporate"}</option>
                                  <option>{"Travel agent"}</option>
                                  <option>{"Package"}</option>
                                  <option>{"Group"}</option>
                                  <option>{"Complimentary"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f1399">{"Meal plan"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1399" defaultValue={"CP – Room with breakfast"}>
                                  <option>{"EP – Room only"}</option>
                                  <option>{"CP – Room with breakfast"}</option>
                                  <option>{"MAP – Breakfast and dinner"}</option>
                                  <option>{"AP – All meals"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <fieldset className="form-section">
                            <legend className="form-section__title">{"Room types"}</legend>
                            <div className="row">
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"GDLX"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"PDLX"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"DLXS"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"PRMS"}
                              </label>
                            </div>
                          </fieldset>
                          <label className="sw">
                            <input type="checkbox" role="switch" defaultChecked={true} />
                            <span className="sw__track" />
                            {"Active"}
                          </label>
                          <fieldset className="form-section">
                            <legend className="form-section__title">{"Selling rules"}</legend>
                            <div className="s-grid3">
                              <div className="field" data-fw="s">
                                <label className="field__label" htmlFor="f1400">{"Sell from"}</label>
                                <div className="dpk">
                                  <button type="button" className="dpk-f field__input" id="f1400" aria-haspopup="dialog">
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
                                      <select className="dpk-m" name="f1400-month" aria-label="Month" defaultValue={"10"}>
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
                                      <select className="dpk-y" name="f1400-year" aria-label="Year" defaultValue={"2026"}>
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
                                        <input type="radio" name="f1400" value="01" />
                                        {"1"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1400" value="02" />
                                        {"2"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1400" value="03" />
                                        {"3"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1400" value="04" />
                                        {"4"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1400" value="05" />
                                        {"5"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1400" value="06" />
                                        {"6"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1400" value="07" />
                                        {"7"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1400" value="08" />
                                        {"8"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1400" value="09" />
                                        {"9"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1400" value="10" />
                                        {"10"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1400" value="11" />
                                        {"11"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1400" value="12" />
                                        {"12"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1400" value="13" />
                                        {"13"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1400" value="14" />
                                        {"14"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1400" value="15" />
                                        {"15"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1400" value="16" />
                                        {"16"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1400" value="17" />
                                        {"17"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1400" value="18" />
                                        {"18"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1400" value="19" />
                                        {"19"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1400" value="20" />
                                        {"20"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1400" value="21" />
                                        {"21"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1400" value="22" defaultChecked={true} />
                                        {"22"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1400" value="23" />
                                        {"23"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1400" value="24" />
                                        {"24"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1400" value="25" />
                                        {"25"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1400" value="26" />
                                        {"26"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1400" value="27" />
                                        {"27"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1400" value="28" />
                                        {"28"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1400" value="29" />
                                        {"29"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1400" value="30" />
                                        {"30"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1400" value="31" />
                                        {"31"}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="field" data-fw="s">
                                <label className="field__label" htmlFor="f1401">{"Sell until"}</label>
                                <div className="dpk">
                                  <button type="button" className="dpk-f field__input" id="f1401" aria-haspopup="dialog">
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
                                      <select className="dpk-m" name="f1401-month" aria-label="Month" defaultValue={"10"}>
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
                                      <select className="dpk-y" name="f1401-year" aria-label="Year" defaultValue={"2026"}>
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
                                        <input type="radio" name="f1401" value="01" />
                                        {"1"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1401" value="02" />
                                        {"2"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1401" value="03" />
                                        {"3"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1401" value="04" />
                                        {"4"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1401" value="05" />
                                        {"5"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1401" value="06" />
                                        {"6"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1401" value="07" />
                                        {"7"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1401" value="08" />
                                        {"8"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1401" value="09" />
                                        {"9"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1401" value="10" />
                                        {"10"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1401" value="11" />
                                        {"11"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1401" value="12" />
                                        {"12"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1401" value="13" />
                                        {"13"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1401" value="14" />
                                        {"14"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1401" value="15" />
                                        {"15"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1401" value="16" />
                                        {"16"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1401" value="17" />
                                        {"17"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1401" value="18" />
                                        {"18"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1401" value="19" />
                                        {"19"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1401" value="20" />
                                        {"20"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1401" value="21" />
                                        {"21"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1401" value="22" />
                                        {"22"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1401" value="23" />
                                        {"23"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1401" value="24" />
                                        {"24"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1401" value="25" />
                                        {"25"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1401" value="26" />
                                        {"26"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1401" value="27" />
                                        {"27"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1401" value="28" />
                                        {"28"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1401" value="29" />
                                        {"29"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1401" value="30" />
                                        {"30"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1401" value="31" />
                                        {"31"}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <span className="field__hint">{"Empty = no end"}</span>
                              </div>
                              <div className="field">
                                <label className="field__label" htmlFor="f1402">{"Price priority"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="f1402" defaultValue={"Contract → promotion → season → derived → manual"}>
                                    <option>{"Contract → promotion → season → derived → manual"}</option>
                                  </select>
                                  <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                                <span className="field__hint">{"Two rules that conflict are refused until one is given priority"}</span>
                              </div>
                            </div>
                            <div className="s-grid2">
                              <div className="field">
                                <label className="field__label" htmlFor="f1403">{"Child age counted on"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="f1403" disabled={true} defaultValue={"Arrival date"}>
                                    <option>{"Arrival date"}</option>
                                    <option>{"Each night of the stay"}</option>
                                  </select>
                                  <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                                <span className="field__hint" data-flow="owner">
                                  {"Set in Reservation Parameters (RSS-14). "}
                                  <Link data-leads-to="RSS-14" to={"/setup/rss-14-reservation-parameters"}>{"Change it there"}</Link>
                                </span>
                              </div>
                              <div className="field">
                                <label className="field__label" htmlFor="f1404">{"Children's meals and extra bed"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="f1404" defaultValue={"Free up to age 11 with existing beds"}>
                                    <option>{"Free up to age 11 with existing beds"}</option>
                                    <option>{"Charge meals only"}</option>
                                    <option>{"Charge meals and extra bed"}</option>
                                  </select>
                                  <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div className="s-note">
                              <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#info" />
                              </svg>
                              <span>{"A rate plan cannot follow itself, directly or through other plans. Saving is refused if the chain would loop. A retired plan stops new sales but stays readable on bookings already made."}</span>
                            </div>
                          </fieldset>
                        </section>
                        <section className="stabs__panel" data-code="RSS-07b" aria-label="Prices & extras">
                          <div className="s-grid2">
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f1405">{"Follows rate plan"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1405" defaultValue={"BAR-CP"}>
                                  <option>{"BAR-CP"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1406">{"Rule"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1406" defaultValue={"Percent"}>
                                  <option>{"Same as base"}</option>
                                  <option>{"Percent"}</option>
                                  <option>{"Amount (₹)"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f1407">{"Value"}</label>
                              <input className="field__input" id="f1407" type="text" defaultValue={"-20"} />
                              <span className="field__hint">{"−10 means 10% below the base rate"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f1408">{"Adjustment (%)"}</label>
                              <input className="field__input num" id="f1408" type="number" defaultValue={"-20"} />
                              <span className="field__hint">{"Shown when the rule is Percent"}</span>
                            </div>
                          </div>
                          <div className="s-grid3">
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1409">{"Extra adult / night"}</label>
                              <div className="field__wrap field__wrap--money">
                                <span className="field__prefix">{"₹"}</span>
                                <input className="field__input num" id="f1409" inputMode="decimal" defaultValue={"1,800"} />
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1410">{"Extra child (above 11) / night"}</label>
                              <div className="field__wrap field__wrap--money">
                                <span className="field__prefix">{"₹"}</span>
                                <input className="field__input num" id="f1410" inputMode="decimal" defaultValue={"0"} />
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1411">{"Extra bed / night"}</label>
                              <div className="field__wrap field__wrap--money">
                                <span className="field__prefix">{"₹"}</span>
                                <input readOnly={true} className="field__input num" id="f1411" inputMode="decimal" defaultValue={"1,500"} />
                              </div>
                              <span className="field__hint" data-flow="owner-eb">
                                {"Set in Reservation Parameters (RSS-14). "}
                                <Link data-leads-to="RSS-14" to={"/setup/rss-14-reservation-parameters"}>{"Change it there"}</Link>
                              </span>
                            </div>
                          </div>
                          <div className="s-note">
                            <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#info" />
                            </svg>
                            <span>{"Children 11 and under stay free with existing beds (maximum 2)."}</span>
                          </div>
                        </section>
                        <section className="stabs__panel" data-code="RSS-07c" aria-label="Inclusions">
                          <div className="row">
                            <label className="check">
                              <input className="check__input" type="checkbox" defaultChecked={true} />
                              <span className="check__box" />
                              {"Breakfast"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" />
                              <span className="check__box" />
                              {"Lunch"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" />
                              <span className="check__box" />
                              {"Dinner"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" defaultChecked={true} />
                              <span className="check__box" />
                              {"Wi-Fi"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" />
                              <span className="check__box" />
                              {"Parking"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" />
                              <span className="check__box" />
                              {"Late check-out on request"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" />
                              <span className="check__box" />
                              {"Daily Ayurveda therapy"}
                            </label>
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f1412">{"Other inclusions"}</label>
                            <textarea className="field__input field__input--area" id="f1412" defaultValue={""} />
                            <span className="field__hint">{"One per line"}</span>
                          </div>
                        </section>
                        <section className="stabs__panel" data-code="RSS-07d" aria-label="Policies">
                          <div className="s-grid2">
                            <div className="field">
                              <label className="field__label" htmlFor="f1413">{"Cancellation policy"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1413" defaultValue={"Group – staged charges"}>
                                  <option>{"Standard – free until 72 hours"}</option>
                                  <option>{"Peak season – free until 7 days"}</option>
                                  <option>{"Non-refundable"}</option>
                                  <option>{"Group – staged charges"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f1414">{"Advance / guarantee policy"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1414" defaultValue={"Group – 25% at confirmation"}>
                                  <option>{"Standard – one night advance"}</option>
                                  <option>{"Full payment at booking"}</option>
                                  <option>{"Group – 25% at confirmation"}</option>
                                  <option>{"Company credit – no advance"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="s-note">
                            <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#info" />
                            </svg>
                            <span>{"No-show charges come from the cancellation policy."}</span>
                          </div>
                        </section>
                        <section className="stabs__panel" data-code="RSS-07e" aria-label="Channels & window">
                          <fieldset className="form-section">
                            <legend className="form-section__title">{"Where it is sold"}</legend>
                            <div className="row">
                              <label className="check">
                                <input className="check__input" type="checkbox" />
                                <span className="check__box" />
                                {"Aviv mobile app (CRS)"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" />
                                <span className="check__box" />
                                {"Aviv website booking engine"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" />
                                <span className="check__box" />
                                {"Booking.com"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" />
                                <span className="check__box" />
                                {"Agoda"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" />
                                <span className="check__box" />
                                {"Expedia"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" />
                                <span className="check__box" />
                                {"MakeMyTrip / Goibibo"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" />
                                <span className="check__box" />
                                {"EaseMyTrip"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" />
                                <span className="check__box" />
                                {"Trip.com"}
                              </label>
                            </div>
                          </fieldset>
                          <div className="s-grid2">
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1415">{"Visible to"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1415" defaultValue={"Staff only"}>
                                  <option>{"Everyone"}</option>
                                  <option>{"Club members"}</option>
                                  <option>{"Corporate accounts"}</option>
                                  <option>{"Travel agents"}</option>
                                  <option>{"Staff only"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f1416">{"Promo code"}</label>
                              <input className="field__input" id="f1416" type="text" defaultValue={""} />
                              <span className="field__hint">{"Optional"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f1417">{"Book at least (days ahead)"}</label>
                              <input className="field__input num" id="f1417" type="number" defaultValue={"0"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f1418">{"Book at most (days ahead)"}</label>
                              <input className="field__input num" id="f1418" type="number" defaultValue={"365"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f1419">{"Minimum stay (nights)"}</label>
                              <input className="field__input num" id="f1419" type="number" defaultValue={"1"} />
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save rate plan"}</a>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="RSS-P05-GROUP" data-code="RSS-P05" role="dialog" aria-modal="true" aria-labelledby="RSS-P05-GROUP-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P05-GROUP-t">{"Copy rate plan"}</h2>
                      <p className="modal__desc">{"Copies all settings of GROUP"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="field" data-fw="x">
                      <label className="field__label" htmlFor="f1420">{"Source plan"}</label>
                      <div className="field__wrap">
                        <select className="field__input field__input--select" id="f1420" defaultValue={"GROUP"}>
                          <option>{"BAR-CP"}</option>
                          <option>{"BAR-EP"}</option>
                          <option>{"BAR-MAP"}</option>
                          <option>{"BAR-AP"}</option>
                          <option>{"CLUB"}</option>
                          <option>{"ADV15"}</option>
                          <option>{"CORP"}</option>
                          <option>{"AGENT"}</option>
                          <option>{"GROUP"}</option>
                          <option>{"PKG-AYUR"}</option>
                          <option>{"COMP"}</option>
                        </select>
                        <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f1421">
                        {"New code "}
                        <span className="field__req">{"*"}</span>
                      </label>
                      <input className="field__input" id="f1421" type="text" required={true} defaultValue={"GROUP2"} />
                      <span className="field__hint">{"Must not already exist"}</span>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f1422">
                        {"New name "}
                        <span className="field__req">{"*"}</span>
                      </label>
                      <input className="field__input" id="f1422" type="text" required={true} defaultValue={"Group rate (copy)"} />
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Create copy"}</a>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="RSS-07a-PKG-AYUR" data-code="RSS-07a" role="dialog" aria-modal="true" aria-labelledby="RSS-07a-PKG-AYUR-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-07a-PKG-AYUR-t">{"Rate plan PKG-AYUR"}</h2>
                      <p className="modal__desc">{"Ayurveda retreat package"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="stabs">
                      <input type="radio" name="rpPKGAYUR" id="rpPKGAYUR-1" aria-label="Basic" defaultChecked={true} />
                      <input type="radio" name="rpPKGAYUR" id="rpPKGAYUR-2" aria-label="Prices & extras" />
                      <input type="radio" name="rpPKGAYUR" id="rpPKGAYUR-3" aria-label="Inclusions" />
                      <input type="radio" name="rpPKGAYUR" id="rpPKGAYUR-4" aria-label="Policies" />
                      <input type="radio" name="rpPKGAYUR" id="rpPKGAYUR-5" aria-label="Channels & window" />
                      <div className="stabs__list" role="tablist">
                        <label htmlFor="rpPKGAYUR-1">{"Basic"}</label>
                        <label htmlFor="rpPKGAYUR-2">{"Prices & extras"}</label>
                        <label htmlFor="rpPKGAYUR-3">{"Inclusions"}</label>
                        <label htmlFor="rpPKGAYUR-4">{"Policies"}</label>
                        <label htmlFor="rpPKGAYUR-5">{"Channels & window"}</label>
                      </div>
                      <div className="stabs__panels">
                        <section className="stabs__panel" data-code="RSS-07a" aria-label="Basic">
                          <div className="s-grid2">
                            <div className="field">
                              <label className="field__label" htmlFor="f1423">
                                {"Code "}
                                <span className="field__req">{"*"}</span>
                              </label>
                              <input className="field__input" id="f1423" type="text" required={true} defaultValue={"PKG-AYUR"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f1424">
                                {"Name "}
                                <span className="field__req">{"*"}</span>
                              </label>
                              <input className="field__input" id="f1424" type="text" required={true} defaultValue={"Ayurveda retreat package"} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1425">{"Type"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1425" defaultValue={"Package"}>
                                  <option>{"Best available"}</option>
                                  <option>{"Member"}</option>
                                  <option>{"Advance purchase"}</option>
                                  <option>{"Corporate"}</option>
                                  <option>{"Travel agent"}</option>
                                  <option>{"Package"}</option>
                                  <option>{"Group"}</option>
                                  <option>{"Complimentary"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f1426">{"Meal plan"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1426" defaultValue={"MAP – Breakfast and dinner"}>
                                  <option>{"EP – Room only"}</option>
                                  <option>{"CP – Room with breakfast"}</option>
                                  <option>{"MAP – Breakfast and dinner"}</option>
                                  <option>{"AP – All meals"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <fieldset className="form-section">
                            <legend className="form-section__title">{"Room types"}</legend>
                            <div className="row">
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"GDLX"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"PDLX"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"DLXS"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"PRMS"}
                              </label>
                            </div>
                          </fieldset>
                          <label className="sw">
                            <input type="checkbox" role="switch" defaultChecked={true} />
                            <span className="sw__track" />
                            {"Active"}
                          </label>
                          <fieldset className="form-section">
                            <legend className="form-section__title">{"Selling rules"}</legend>
                            <div className="s-grid3">
                              <div className="field" data-fw="s">
                                <label className="field__label" htmlFor="f1427">{"Sell from"}</label>
                                <div className="dpk">
                                  <button type="button" className="dpk-f field__input" id="f1427" aria-haspopup="dialog">
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
                                      <select className="dpk-m" name="f1427-month" aria-label="Month" defaultValue={"10"}>
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
                                      <select className="dpk-y" name="f1427-year" aria-label="Year" defaultValue={"2026"}>
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
                                        <input type="radio" name="f1427" value="01" />
                                        {"1"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1427" value="02" />
                                        {"2"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1427" value="03" />
                                        {"3"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1427" value="04" />
                                        {"4"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1427" value="05" />
                                        {"5"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1427" value="06" />
                                        {"6"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1427" value="07" />
                                        {"7"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1427" value="08" />
                                        {"8"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1427" value="09" />
                                        {"9"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1427" value="10" />
                                        {"10"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1427" value="11" />
                                        {"11"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1427" value="12" />
                                        {"12"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1427" value="13" />
                                        {"13"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1427" value="14" />
                                        {"14"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1427" value="15" />
                                        {"15"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1427" value="16" />
                                        {"16"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1427" value="17" />
                                        {"17"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1427" value="18" />
                                        {"18"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1427" value="19" />
                                        {"19"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1427" value="20" />
                                        {"20"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1427" value="21" />
                                        {"21"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1427" value="22" defaultChecked={true} />
                                        {"22"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1427" value="23" />
                                        {"23"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1427" value="24" />
                                        {"24"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1427" value="25" />
                                        {"25"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1427" value="26" />
                                        {"26"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1427" value="27" />
                                        {"27"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1427" value="28" />
                                        {"28"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1427" value="29" />
                                        {"29"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1427" value="30" />
                                        {"30"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1427" value="31" />
                                        {"31"}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="field" data-fw="s">
                                <label className="field__label" htmlFor="f1428">{"Sell until"}</label>
                                <div className="dpk">
                                  <button type="button" className="dpk-f field__input" id="f1428" aria-haspopup="dialog">
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
                                      <select className="dpk-m" name="f1428-month" aria-label="Month" defaultValue={"10"}>
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
                                      <select className="dpk-y" name="f1428-year" aria-label="Year" defaultValue={"2026"}>
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
                                        <input type="radio" name="f1428" value="01" />
                                        {"1"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1428" value="02" />
                                        {"2"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1428" value="03" />
                                        {"3"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1428" value="04" />
                                        {"4"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1428" value="05" />
                                        {"5"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1428" value="06" />
                                        {"6"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1428" value="07" />
                                        {"7"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1428" value="08" />
                                        {"8"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1428" value="09" />
                                        {"9"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1428" value="10" />
                                        {"10"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1428" value="11" />
                                        {"11"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1428" value="12" />
                                        {"12"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1428" value="13" />
                                        {"13"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1428" value="14" />
                                        {"14"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1428" value="15" />
                                        {"15"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1428" value="16" />
                                        {"16"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1428" value="17" />
                                        {"17"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1428" value="18" />
                                        {"18"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1428" value="19" />
                                        {"19"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1428" value="20" />
                                        {"20"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1428" value="21" />
                                        {"21"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1428" value="22" />
                                        {"22"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1428" value="23" />
                                        {"23"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1428" value="24" />
                                        {"24"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1428" value="25" />
                                        {"25"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1428" value="26" />
                                        {"26"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1428" value="27" />
                                        {"27"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1428" value="28" />
                                        {"28"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1428" value="29" />
                                        {"29"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1428" value="30" />
                                        {"30"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1428" value="31" />
                                        {"31"}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <span className="field__hint">{"Empty = no end"}</span>
                              </div>
                              <div className="field">
                                <label className="field__label" htmlFor="f1429">{"Price priority"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="f1429" defaultValue={"Contract → promotion → season → derived → manual"}>
                                    <option>{"Contract → promotion → season → derived → manual"}</option>
                                  </select>
                                  <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                                <span className="field__hint">{"Two rules that conflict are refused until one is given priority"}</span>
                              </div>
                            </div>
                            <div className="s-grid2">
                              <div className="field">
                                <label className="field__label" htmlFor="f1430">{"Child age counted on"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="f1430" disabled={true} defaultValue={"Arrival date"}>
                                    <option>{"Arrival date"}</option>
                                    <option>{"Each night of the stay"}</option>
                                  </select>
                                  <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                                <span className="field__hint" data-flow="owner">
                                  {"Set in Reservation Parameters (RSS-14). "}
                                  <Link data-leads-to="RSS-14" to={"/setup/rss-14-reservation-parameters"}>{"Change it there"}</Link>
                                </span>
                              </div>
                              <div className="field">
                                <label className="field__label" htmlFor="f1431">{"Children's meals and extra bed"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="f1431" defaultValue={"Free up to age 11 with existing beds"}>
                                    <option>{"Free up to age 11 with existing beds"}</option>
                                    <option>{"Charge meals only"}</option>
                                    <option>{"Charge meals and extra bed"}</option>
                                  </select>
                                  <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div className="s-note">
                              <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#info" />
                              </svg>
                              <span>{"A rate plan cannot follow itself, directly or through other plans. Saving is refused if the chain would loop. A retired plan stops new sales but stays readable on bookings already made."}</span>
                            </div>
                          </fieldset>
                        </section>
                        <section className="stabs__panel" data-code="RSS-07b" aria-label="Prices & extras">
                          <div className="s-grid2">
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f1432">{"Follows rate plan"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1432" defaultValue={"BAR-CP"}>
                                  <option>{"BAR-CP"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1433">{"Rule"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1433" defaultValue={"Amount (₹)"}>
                                  <option>{"Same as base"}</option>
                                  <option>{"Percent"}</option>
                                  <option>{"Amount (₹)"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f1434">{"Value"}</label>
                              <input className="field__input" id="f1434" type="text" defaultValue={"3,800"} />
                              <span className="field__hint">{"−10 means 10% below the base rate"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f1435">{"Adjustment (%)"}</label>
                              <input className="field__input num" id="f1435" type="number" defaultValue={""} />
                              <span className="field__hint">{"Shown when the rule is Percent"}</span>
                            </div>
                          </div>
                          <div className="s-grid3">
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1436">{"Extra adult / night"}</label>
                              <div className="field__wrap field__wrap--money">
                                <span className="field__prefix">{"₹"}</span>
                                <input className="field__input num" id="f1436" inputMode="decimal" defaultValue={"1,800"} />
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1437">{"Extra child (above 11) / night"}</label>
                              <div className="field__wrap field__wrap--money">
                                <span className="field__prefix">{"₹"}</span>
                                <input className="field__input num" id="f1437" inputMode="decimal" defaultValue={"0"} />
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1438">{"Extra bed / night"}</label>
                              <div className="field__wrap field__wrap--money">
                                <span className="field__prefix">{"₹"}</span>
                                <input readOnly={true} className="field__input num" id="f1438" inputMode="decimal" defaultValue={"1,500"} />
                              </div>
                              <span className="field__hint" data-flow="owner-eb">
                                {"Set in Reservation Parameters (RSS-14). "}
                                <Link data-leads-to="RSS-14" to={"/setup/rss-14-reservation-parameters"}>{"Change it there"}</Link>
                              </span>
                            </div>
                          </div>
                          <div className="s-note">
                            <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#info" />
                            </svg>
                            <span>{"Children 11 and under stay free with existing beds (maximum 2)."}</span>
                          </div>
                        </section>
                        <section className="stabs__panel" data-code="RSS-07c" aria-label="Inclusions">
                          <div className="row">
                            <label className="check">
                              <input className="check__input" type="checkbox" defaultChecked={true} />
                              <span className="check__box" />
                              {"Breakfast"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" />
                              <span className="check__box" />
                              {"Lunch"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" defaultChecked={true} />
                              <span className="check__box" />
                              {"Dinner"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" defaultChecked={true} />
                              <span className="check__box" />
                              {"Wi-Fi"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" />
                              <span className="check__box" />
                              {"Parking"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" />
                              <span className="check__box" />
                              {"Late check-out on request"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" defaultChecked={true} />
                              <span className="check__box" />
                              {"Daily Ayurveda therapy"}
                            </label>
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f1439">{"Other inclusions"}</label>
                            <textarea className="field__input field__input--area" id="f1439" defaultValue={""} />
                            <span className="field__hint">{"One per line"}</span>
                          </div>
                        </section>
                        <section className="stabs__panel" data-code="RSS-07d" aria-label="Policies">
                          <div className="s-grid2">
                            <div className="field">
                              <label className="field__label" htmlFor="f1440">{"Cancellation policy"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1440" defaultValue={"Standard – free until 72 hours"}>
                                  <option>{"Standard – free until 72 hours"}</option>
                                  <option>{"Peak season – free until 7 days"}</option>
                                  <option>{"Non-refundable"}</option>
                                  <option>{"Group – staged charges"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f1441">{"Advance / guarantee policy"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1441" defaultValue={"Standard – one night advance"}>
                                  <option>{"Standard – one night advance"}</option>
                                  <option>{"Full payment at booking"}</option>
                                  <option>{"Group – 25% at confirmation"}</option>
                                  <option>{"Company credit – no advance"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="s-note">
                            <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#info" />
                            </svg>
                            <span>{"No-show charges come from the cancellation policy."}</span>
                          </div>
                        </section>
                        <section className="stabs__panel" data-code="RSS-07e" aria-label="Channels & window">
                          <fieldset className="form-section">
                            <legend className="form-section__title">{"Where it is sold"}</legend>
                            <div className="row">
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"Aviv mobile app (CRS)"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"Aviv website booking engine"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" />
                                <span className="check__box" />
                                {"Booking.com"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" />
                                <span className="check__box" />
                                {"Agoda"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" />
                                <span className="check__box" />
                                {"Expedia"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" />
                                <span className="check__box" />
                                {"MakeMyTrip / Goibibo"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" />
                                <span className="check__box" />
                                {"EaseMyTrip"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" />
                                <span className="check__box" />
                                {"Trip.com"}
                              </label>
                            </div>
                          </fieldset>
                          <div className="s-grid2">
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1442">{"Visible to"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1442" defaultValue={"Everyone"}>
                                  <option>{"Everyone"}</option>
                                  <option>{"Club members"}</option>
                                  <option>{"Corporate accounts"}</option>
                                  <option>{"Travel agents"}</option>
                                  <option>{"Staff only"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f1443">{"Promo code"}</label>
                              <input className="field__input" id="f1443" type="text" defaultValue={""} />
                              <span className="field__hint">{"Optional"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f1444">{"Book at least (days ahead)"}</label>
                              <input className="field__input num" id="f1444" type="number" defaultValue={"0"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f1445">{"Book at most (days ahead)"}</label>
                              <input className="field__input num" id="f1445" type="number" defaultValue={"365"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f1446">{"Minimum stay (nights)"}</label>
                              <input className="field__input num" id="f1446" type="number" defaultValue={"3"} />
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save rate plan"}</a>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="RSS-P05-PKG-AYUR" data-code="RSS-P05" role="dialog" aria-modal="true" aria-labelledby="RSS-P05-PKG-AYUR-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P05-PKG-AYUR-t">{"Copy rate plan"}</h2>
                      <p className="modal__desc">{"Copies all settings of PKG-AYUR"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="field" data-fw="s">
                      <label className="field__label" htmlFor="f1447">{"Source plan"}</label>
                      <div className="field__wrap">
                        <select className="field__input field__input--select" id="f1447" defaultValue={"PKG-AYUR"}>
                          <option>{"BAR-CP"}</option>
                          <option>{"BAR-EP"}</option>
                          <option>{"BAR-MAP"}</option>
                          <option>{"BAR-AP"}</option>
                          <option>{"CLUB"}</option>
                          <option>{"ADV15"}</option>
                          <option>{"CORP"}</option>
                          <option>{"AGENT"}</option>
                          <option>{"GROUP"}</option>
                          <option>{"PKG-AYUR"}</option>
                          <option>{"COMP"}</option>
                        </select>
                        <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f1448">
                        {"New code "}
                        <span className="field__req">{"*"}</span>
                      </label>
                      <input className="field__input" id="f1448" type="text" required={true} defaultValue={"PKG-AYUR2"} />
                      <span className="field__hint">{"Must not already exist"}</span>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f1449">
                        {"New name "}
                        <span className="field__req">{"*"}</span>
                      </label>
                      <input className="field__input" id="f1449" type="text" required={true} defaultValue={"Ayurveda retreat package (copy)"} />
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Create copy"}</a>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="RSS-07a-COMP" data-code="RSS-07a" role="dialog" aria-modal="true" aria-labelledby="RSS-07a-COMP-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-07a-COMP-t">{"Rate plan COMP"}</h2>
                      <p className="modal__desc">{"Complimentary"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="stabs">
                      <input type="radio" name="rpCOMP" id="rpCOMP-1" aria-label="Basic" defaultChecked={true} />
                      <input type="radio" name="rpCOMP" id="rpCOMP-2" aria-label="Prices & extras" />
                      <input type="radio" name="rpCOMP" id="rpCOMP-3" aria-label="Inclusions" />
                      <input type="radio" name="rpCOMP" id="rpCOMP-4" aria-label="Policies" />
                      <input type="radio" name="rpCOMP" id="rpCOMP-5" aria-label="Channels & window" />
                      <div className="stabs__list" role="tablist">
                        <label htmlFor="rpCOMP-1">{"Basic"}</label>
                        <label htmlFor="rpCOMP-2">{"Prices & extras"}</label>
                        <label htmlFor="rpCOMP-3">{"Inclusions"}</label>
                        <label htmlFor="rpCOMP-4">{"Policies"}</label>
                        <label htmlFor="rpCOMP-5">{"Channels & window"}</label>
                      </div>
                      <div className="stabs__panels">
                        <section className="stabs__panel" data-code="RSS-07a" aria-label="Basic">
                          <div className="s-grid2">
                            <div className="field">
                              <label className="field__label" htmlFor="f1450">
                                {"Code "}
                                <span className="field__req">{"*"}</span>
                              </label>
                              <input className="field__input" id="f1450" type="text" required={true} defaultValue={"COMP"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f1451">
                                {"Name "}
                                <span className="field__req">{"*"}</span>
                              </label>
                              <input className="field__input" id="f1451" type="text" required={true} defaultValue={"Complimentary"} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1452">{"Type"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1452" defaultValue={"Complimentary"}>
                                  <option>{"Best available"}</option>
                                  <option>{"Member"}</option>
                                  <option>{"Advance purchase"}</option>
                                  <option>{"Corporate"}</option>
                                  <option>{"Travel agent"}</option>
                                  <option>{"Package"}</option>
                                  <option>{"Group"}</option>
                                  <option>{"Complimentary"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f1453">{"Meal plan"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1453" defaultValue={"CP – Room with breakfast"}>
                                  <option>{"EP – Room only"}</option>
                                  <option>{"CP – Room with breakfast"}</option>
                                  <option>{"MAP – Breakfast and dinner"}</option>
                                  <option>{"AP – All meals"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <fieldset className="form-section">
                            <legend className="form-section__title">{"Room types"}</legend>
                            <div className="row">
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"GDLX"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"PDLX"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"DLXS"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" defaultChecked={true} />
                                <span className="check__box" />
                                {"PRMS"}
                              </label>
                            </div>
                          </fieldset>
                          <label className="sw">
                            <input type="checkbox" role="switch" defaultChecked={true} />
                            <span className="sw__track" />
                            {"Active"}
                          </label>
                          <fieldset className="form-section">
                            <legend className="form-section__title">{"Selling rules"}</legend>
                            <div className="s-grid3">
                              <div className="field" data-fw="s">
                                <label className="field__label" htmlFor="f1454">{"Sell from"}</label>
                                <div className="dpk">
                                  <button type="button" className="dpk-f field__input" id="f1454" aria-haspopup="dialog">
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
                                      <select className="dpk-m" name="f1454-month" aria-label="Month" defaultValue={"10"}>
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
                                      <select className="dpk-y" name="f1454-year" aria-label="Year" defaultValue={"2026"}>
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
                                        <input type="radio" name="f1454" value="01" />
                                        {"1"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1454" value="02" />
                                        {"2"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1454" value="03" />
                                        {"3"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1454" value="04" />
                                        {"4"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1454" value="05" />
                                        {"5"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1454" value="06" />
                                        {"6"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1454" value="07" />
                                        {"7"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1454" value="08" />
                                        {"8"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1454" value="09" />
                                        {"9"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1454" value="10" />
                                        {"10"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1454" value="11" />
                                        {"11"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1454" value="12" />
                                        {"12"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1454" value="13" />
                                        {"13"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1454" value="14" />
                                        {"14"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1454" value="15" />
                                        {"15"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1454" value="16" />
                                        {"16"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1454" value="17" />
                                        {"17"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1454" value="18" />
                                        {"18"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1454" value="19" />
                                        {"19"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1454" value="20" />
                                        {"20"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1454" value="21" />
                                        {"21"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1454" value="22" defaultChecked={true} />
                                        {"22"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1454" value="23" />
                                        {"23"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1454" value="24" />
                                        {"24"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1454" value="25" />
                                        {"25"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1454" value="26" />
                                        {"26"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1454" value="27" />
                                        {"27"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1454" value="28" />
                                        {"28"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1454" value="29" />
                                        {"29"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1454" value="30" />
                                        {"30"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1454" value="31" />
                                        {"31"}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="field" data-fw="s">
                                <label className="field__label" htmlFor="f1455">{"Sell until"}</label>
                                <div className="dpk">
                                  <button type="button" className="dpk-f field__input" id="f1455" aria-haspopup="dialog">
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
                                      <select className="dpk-m" name="f1455-month" aria-label="Month" defaultValue={"10"}>
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
                                      <select className="dpk-y" name="f1455-year" aria-label="Year" defaultValue={"2026"}>
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
                                        <input type="radio" name="f1455" value="01" />
                                        {"1"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1455" value="02" />
                                        {"2"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1455" value="03" />
                                        {"3"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1455" value="04" />
                                        {"4"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1455" value="05" />
                                        {"5"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1455" value="06" />
                                        {"6"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1455" value="07" />
                                        {"7"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1455" value="08" />
                                        {"8"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1455" value="09" />
                                        {"9"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1455" value="10" />
                                        {"10"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1455" value="11" />
                                        {"11"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1455" value="12" />
                                        {"12"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1455" value="13" />
                                        {"13"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1455" value="14" />
                                        {"14"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1455" value="15" />
                                        {"15"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1455" value="16" />
                                        {"16"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1455" value="17" />
                                        {"17"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1455" value="18" />
                                        {"18"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1455" value="19" />
                                        {"19"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1455" value="20" />
                                        {"20"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1455" value="21" />
                                        {"21"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1455" value="22" />
                                        {"22"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1455" value="23" />
                                        {"23"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1455" value="24" />
                                        {"24"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1455" value="25" />
                                        {"25"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1455" value="26" />
                                        {"26"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1455" value="27" />
                                        {"27"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1455" value="28" />
                                        {"28"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1455" value="29" />
                                        {"29"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1455" value="30" />
                                        {"30"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1455" value="31" />
                                        {"31"}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <span className="field__hint">{"Empty = no end"}</span>
                              </div>
                              <div className="field">
                                <label className="field__label" htmlFor="f1456">{"Price priority"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="f1456" defaultValue={"Contract → promotion → season → derived → manual"}>
                                    <option>{"Contract → promotion → season → derived → manual"}</option>
                                  </select>
                                  <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                                <span className="field__hint">{"Two rules that conflict are refused until one is given priority"}</span>
                              </div>
                            </div>
                            <div className="s-grid2">
                              <div className="field">
                                <label className="field__label" htmlFor="f1457">{"Child age counted on"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="f1457" disabled={true} defaultValue={"Arrival date"}>
                                    <option>{"Arrival date"}</option>
                                    <option>{"Each night of the stay"}</option>
                                  </select>
                                  <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                                <span className="field__hint" data-flow="owner">
                                  {"Set in Reservation Parameters (RSS-14). "}
                                  <Link data-leads-to="RSS-14" to={"/setup/rss-14-reservation-parameters"}>{"Change it there"}</Link>
                                </span>
                              </div>
                              <div className="field">
                                <label className="field__label" htmlFor="f1458">{"Children's meals and extra bed"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="f1458" defaultValue={"Free up to age 11 with existing beds"}>
                                    <option>{"Free up to age 11 with existing beds"}</option>
                                    <option>{"Charge meals only"}</option>
                                    <option>{"Charge meals and extra bed"}</option>
                                  </select>
                                  <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div className="s-note">
                              <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#info" />
                              </svg>
                              <span>{"A rate plan cannot follow itself, directly or through other plans. Saving is refused if the chain would loop. A retired plan stops new sales but stays readable on bookings already made."}</span>
                            </div>
                          </fieldset>
                        </section>
                        <section className="stabs__panel" data-code="RSS-07b" aria-label="Prices & extras">
                          <div className="s-grid2">
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f1459">{"Follows rate plan"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1459" defaultValue={"BAR-CP"}>
                                  <option>{"BAR-CP"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1460">{"Rule"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1460" defaultValue={"Percent"}>
                                  <option>{"Same as base"}</option>
                                  <option>{"Percent"}</option>
                                  <option>{"Amount (₹)"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f1461">{"Value"}</label>
                              <input className="field__input" id="f1461" type="text" defaultValue={"-100"} />
                              <span className="field__hint">{"−10 means 10% below the base rate"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f1462">{"Adjustment (%)"}</label>
                              <input className="field__input num" id="f1462" type="number" defaultValue={"-100"} />
                              <span className="field__hint">{"Shown when the rule is Percent"}</span>
                            </div>
                          </div>
                          <div className="s-grid3">
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1463">{"Extra adult / night"}</label>
                              <div className="field__wrap field__wrap--money">
                                <span className="field__prefix">{"₹"}</span>
                                <input className="field__input num" id="f1463" inputMode="decimal" defaultValue={"1,800"} />
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1464">{"Extra child (above 11) / night"}</label>
                              <div className="field__wrap field__wrap--money">
                                <span className="field__prefix">{"₹"}</span>
                                <input className="field__input num" id="f1464" inputMode="decimal" defaultValue={"0"} />
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1465">{"Extra bed / night"}</label>
                              <div className="field__wrap field__wrap--money">
                                <span className="field__prefix">{"₹"}</span>
                                <input readOnly={true} className="field__input num" id="f1465" inputMode="decimal" defaultValue={"1,500"} />
                              </div>
                              <span className="field__hint" data-flow="owner-eb">
                                {"Set in Reservation Parameters (RSS-14). "}
                                <Link data-leads-to="RSS-14" to={"/setup/rss-14-reservation-parameters"}>{"Change it there"}</Link>
                              </span>
                            </div>
                          </div>
                          <div className="s-note">
                            <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#info" />
                            </svg>
                            <span>{"Children 11 and under stay free with existing beds (maximum 2)."}</span>
                          </div>
                        </section>
                        <section className="stabs__panel" data-code="RSS-07c" aria-label="Inclusions">
                          <div className="row">
                            <label className="check">
                              <input className="check__input" type="checkbox" />
                              <span className="check__box" />
                              {"Breakfast"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" />
                              <span className="check__box" />
                              {"Lunch"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" />
                              <span className="check__box" />
                              {"Dinner"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" />
                              <span className="check__box" />
                              {"Wi-Fi"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" />
                              <span className="check__box" />
                              {"Parking"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" />
                              <span className="check__box" />
                              {"Late check-out on request"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" />
                              <span className="check__box" />
                              {"Daily Ayurveda therapy"}
                            </label>
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f1466">{"Other inclusions"}</label>
                            <textarea className="field__input field__input--area" id="f1466" defaultValue={""} />
                            <span className="field__hint">{"One per line"}</span>
                          </div>
                        </section>
                        <section className="stabs__panel" data-code="RSS-07d" aria-label="Policies">
                          <div className="s-grid2">
                            <div className="field">
                              <label className="field__label" htmlFor="f1467">{"Cancellation policy"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1467" defaultValue={"Standard – free until 72 hours"}>
                                  <option>{"Standard – free until 72 hours"}</option>
                                  <option>{"Peak season – free until 7 days"}</option>
                                  <option>{"Non-refundable"}</option>
                                  <option>{"Group – staged charges"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f1468">{"Advance / guarantee policy"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1468" defaultValue={"Company credit – no advance"}>
                                  <option>{"Standard – one night advance"}</option>
                                  <option>{"Full payment at booking"}</option>
                                  <option>{"Group – 25% at confirmation"}</option>
                                  <option>{"Company credit – no advance"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="s-note">
                            <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#info" />
                            </svg>
                            <span>{"No-show charges come from the cancellation policy."}</span>
                          </div>
                        </section>
                        <section className="stabs__panel" data-code="RSS-07e" aria-label="Channels & window">
                          <fieldset className="form-section">
                            <legend className="form-section__title">{"Where it is sold"}</legend>
                            <div className="row">
                              <label className="check">
                                <input className="check__input" type="checkbox" />
                                <span className="check__box" />
                                {"Aviv mobile app (CRS)"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" />
                                <span className="check__box" />
                                {"Aviv website booking engine"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" />
                                <span className="check__box" />
                                {"Booking.com"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" />
                                <span className="check__box" />
                                {"Agoda"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" />
                                <span className="check__box" />
                                {"Expedia"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" />
                                <span className="check__box" />
                                {"MakeMyTrip / Goibibo"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" />
                                <span className="check__box" />
                                {"EaseMyTrip"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" />
                                <span className="check__box" />
                                {"Trip.com"}
                              </label>
                            </div>
                          </fieldset>
                          <div className="s-grid2">
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1469">{"Visible to"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1469" defaultValue={"Staff only"}>
                                  <option>{"Everyone"}</option>
                                  <option>{"Club members"}</option>
                                  <option>{"Corporate accounts"}</option>
                                  <option>{"Travel agents"}</option>
                                  <option>{"Staff only"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f1470">{"Promo code"}</label>
                              <input className="field__input" id="f1470" type="text" defaultValue={""} />
                              <span className="field__hint">{"Optional"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f1471">{"Book at least (days ahead)"}</label>
                              <input className="field__input num" id="f1471" type="number" defaultValue={"0"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f1472">{"Book at most (days ahead)"}</label>
                              <input className="field__input num" id="f1472" type="number" defaultValue={"365"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f1473">{"Minimum stay (nights)"}</label>
                              <input className="field__input num" id="f1473" type="number" defaultValue={"1"} />
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save rate plan"}</a>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="RSS-P05-COMP" data-code="RSS-P05" role="dialog" aria-modal="true" aria-labelledby="RSS-P05-COMP-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P05-COMP-t">{"Copy rate plan"}</h2>
                      <p className="modal__desc">{"Copies all settings of COMP"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="field" data-fw="x">
                      <label className="field__label" htmlFor="f1474">{"Source plan"}</label>
                      <div className="field__wrap">
                        <select className="field__input field__input--select" id="f1474" defaultValue={"COMP"}>
                          <option>{"BAR-CP"}</option>
                          <option>{"BAR-EP"}</option>
                          <option>{"BAR-MAP"}</option>
                          <option>{"BAR-AP"}</option>
                          <option>{"CLUB"}</option>
                          <option>{"ADV15"}</option>
                          <option>{"CORP"}</option>
                          <option>{"AGENT"}</option>
                          <option>{"GROUP"}</option>
                          <option>{"PKG-AYUR"}</option>
                          <option>{"COMP"}</option>
                        </select>
                        <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f1475">
                        {"New code "}
                        <span className="field__req">{"*"}</span>
                      </label>
                      <input className="field__input" id="f1475" type="text" required={true} defaultValue={"COMP2"} />
                      <span className="field__hint">{"Must not already exist"}</span>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f1476">
                        {"New name "}
                        <span className="field__req">{"*"}</span>
                      </label>
                      <input className="field__input" id="f1476" type="text" required={true} defaultValue={"Complimentary (copy)"} />
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Create copy"}</a>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="RSS-07a-new" data-code="RSS-07a" role="dialog" aria-modal="true" aria-labelledby="RSS-07a-new-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-07a-new-t">{"New rate plan"}</h2>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="stabs">
                      <input type="radio" name="rpnew" id="rpnew-1" aria-label="Basic" defaultChecked={true} />
                      <input type="radio" name="rpnew" id="rpnew-2" aria-label="Prices & extras" />
                      <input type="radio" name="rpnew" id="rpnew-3" aria-label="Inclusions" />
                      <input type="radio" name="rpnew" id="rpnew-4" aria-label="Policies" />
                      <input type="radio" name="rpnew" id="rpnew-5" aria-label="Channels & window" />
                      <div className="stabs__list" role="tablist">
                        <label htmlFor="rpnew-1">{"Basic"}</label>
                        <label htmlFor="rpnew-2">{"Prices & extras"}</label>
                        <label htmlFor="rpnew-3">{"Inclusions"}</label>
                        <label htmlFor="rpnew-4">{"Policies"}</label>
                        <label htmlFor="rpnew-5">{"Channels & window"}</label>
                      </div>
                      <div className="stabs__panels">
                        <section className="stabs__panel" data-code="RSS-07a" aria-label="Basic">
                          <div className="s-grid2">
                            <div className="field">
                              <label className="field__label" htmlFor="f1477">
                                {"Code "}
                                <span className="field__req">{"*"}</span>
                              </label>
                              <input className="field__input" id="f1477" type="text" required={true} defaultValue={""} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f1478">
                                {"Name "}
                                <span className="field__req">{"*"}</span>
                              </label>
                              <input className="field__input" id="f1478" type="text" required={true} defaultValue={""} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1479">{"Type"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1479" defaultValue={"Best available"}>
                                  <option>{"Best available"}</option>
                                  <option>{"Member"}</option>
                                  <option>{"Advance purchase"}</option>
                                  <option>{"Corporate"}</option>
                                  <option>{"Travel agent"}</option>
                                  <option>{"Package"}</option>
                                  <option>{"Group"}</option>
                                  <option>{"Complimentary"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f1480">{"Meal plan"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1480" defaultValue={"CP – Room with breakfast"}>
                                  <option>{"EP – Room only"}</option>
                                  <option>{"CP – Room with breakfast"}</option>
                                  <option>{"MAP – Breakfast and dinner"}</option>
                                  <option>{"AP – All meals"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <fieldset className="form-section">
                            <legend className="form-section__title">{"Room types"}</legend>
                            <div className="row">
                              <label className="check">
                                <input className="check__input" type="checkbox" />
                                <span className="check__box" />
                                {"GDLX"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" />
                                <span className="check__box" />
                                {"PDLX"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" />
                                <span className="check__box" />
                                {"DLXS"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" />
                                <span className="check__box" />
                                {"PRMS"}
                              </label>
                            </div>
                          </fieldset>
                          <label className="sw">
                            <input type="checkbox" role="switch" defaultChecked={true} />
                            <span className="sw__track" />
                            {"Active"}
                          </label>
                          <fieldset className="form-section">
                            <legend className="form-section__title">{"Selling rules"}</legend>
                            <div className="s-grid3">
                              <div className="field" data-fw="s">
                                <label className="field__label" htmlFor="f1481">{"Sell from"}</label>
                                <div className="dpk">
                                  <button type="button" className="dpk-f field__input" id="f1481" aria-haspopup="dialog">
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
                                      <select className="dpk-m" name="f1481-month" aria-label="Month" defaultValue={"10"}>
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
                                      <select className="dpk-y" name="f1481-year" aria-label="Year" defaultValue={"2026"}>
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
                                        <input type="radio" name="f1481" value="01" />
                                        {"1"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1481" value="02" />
                                        {"2"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1481" value="03" />
                                        {"3"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1481" value="04" />
                                        {"4"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1481" value="05" />
                                        {"5"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1481" value="06" />
                                        {"6"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1481" value="07" />
                                        {"7"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1481" value="08" />
                                        {"8"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1481" value="09" />
                                        {"9"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1481" value="10" />
                                        {"10"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1481" value="11" />
                                        {"11"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1481" value="12" />
                                        {"12"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1481" value="13" />
                                        {"13"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1481" value="14" />
                                        {"14"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1481" value="15" />
                                        {"15"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1481" value="16" />
                                        {"16"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1481" value="17" />
                                        {"17"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1481" value="18" />
                                        {"18"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1481" value="19" />
                                        {"19"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1481" value="20" />
                                        {"20"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1481" value="21" />
                                        {"21"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1481" value="22" defaultChecked={true} />
                                        {"22"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1481" value="23" />
                                        {"23"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1481" value="24" />
                                        {"24"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1481" value="25" />
                                        {"25"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1481" value="26" />
                                        {"26"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1481" value="27" />
                                        {"27"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1481" value="28" />
                                        {"28"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1481" value="29" />
                                        {"29"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1481" value="30" />
                                        {"30"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1481" value="31" />
                                        {"31"}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="field" data-fw="s">
                                <label className="field__label" htmlFor="f1482">{"Sell until"}</label>
                                <div className="dpk">
                                  <button type="button" className="dpk-f field__input" id="f1482" aria-haspopup="dialog">
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
                                      <select className="dpk-m" name="f1482-month" aria-label="Month" defaultValue={"10"}>
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
                                      <select className="dpk-y" name="f1482-year" aria-label="Year" defaultValue={"2026"}>
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
                                        <input type="radio" name="f1482" value="01" />
                                        {"1"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1482" value="02" />
                                        {"2"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1482" value="03" />
                                        {"3"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1482" value="04" />
                                        {"4"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1482" value="05" />
                                        {"5"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1482" value="06" />
                                        {"6"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1482" value="07" />
                                        {"7"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1482" value="08" />
                                        {"8"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1482" value="09" />
                                        {"9"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1482" value="10" />
                                        {"10"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1482" value="11" />
                                        {"11"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1482" value="12" />
                                        {"12"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1482" value="13" />
                                        {"13"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1482" value="14" />
                                        {"14"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1482" value="15" />
                                        {"15"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1482" value="16" />
                                        {"16"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1482" value="17" />
                                        {"17"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1482" value="18" />
                                        {"18"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1482" value="19" />
                                        {"19"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1482" value="20" />
                                        {"20"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1482" value="21" />
                                        {"21"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1482" value="22" />
                                        {"22"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1482" value="23" />
                                        {"23"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1482" value="24" />
                                        {"24"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1482" value="25" />
                                        {"25"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1482" value="26" />
                                        {"26"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1482" value="27" />
                                        {"27"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1482" value="28" />
                                        {"28"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1482" value="29" />
                                        {"29"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1482" value="30" />
                                        {"30"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f1482" value="31" />
                                        {"31"}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <span className="field__hint">{"Empty = no end"}</span>
                              </div>
                              <div className="field">
                                <label className="field__label" htmlFor="f1483">{"Price priority"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="f1483" defaultValue={"Contract → promotion → season → derived → manual"}>
                                    <option>{"Contract → promotion → season → derived → manual"}</option>
                                  </select>
                                  <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                                <span className="field__hint">{"Two rules that conflict are refused until one is given priority"}</span>
                              </div>
                            </div>
                            <div className="s-grid2">
                              <div className="field">
                                <label className="field__label" htmlFor="f1484">{"Child age counted on"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="f1484" disabled={true} defaultValue={"Arrival date"}>
                                    <option>{"Arrival date"}</option>
                                    <option>{"Each night of the stay"}</option>
                                  </select>
                                  <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                                <span className="field__hint" data-flow="owner">
                                  {"Set in Reservation Parameters (RSS-14). "}
                                  <Link data-leads-to="RSS-14" to={"/setup/rss-14-reservation-parameters"}>{"Change it there"}</Link>
                                </span>
                              </div>
                              <div className="field">
                                <label className="field__label" htmlFor="f1485">{"Children's meals and extra bed"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="f1485" defaultValue={"Free up to age 11 with existing beds"}>
                                    <option>{"Free up to age 11 with existing beds"}</option>
                                    <option>{"Charge meals only"}</option>
                                    <option>{"Charge meals and extra bed"}</option>
                                  </select>
                                  <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div className="s-note">
                              <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#info" />
                              </svg>
                              <span>{"A rate plan cannot follow itself, directly or through other plans. Saving is refused if the chain would loop. A retired plan stops new sales but stays readable on bookings already made."}</span>
                            </div>
                          </fieldset>
                        </section>
                        <section className="stabs__panel" data-code="RSS-07b" aria-label="Prices & extras">
                          <div className="s-grid2">
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f1486">{"Follows rate plan"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1486" defaultValue={"BAR-CP"}>
                                  <option>{"BAR-CP"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1487">{"Rule"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1487" defaultValue={"Percent"}>
                                  <option>{"Same as base"}</option>
                                  <option>{"Percent"}</option>
                                  <option>{"Amount (₹)"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f1488">{"Value"}</label>
                              <input className="field__input" id="f1488" type="text" defaultValue={"0"} />
                              <span className="field__hint">{"−10 means 10% below the base rate"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f1489">{"Adjustment (%)"}</label>
                              <input className="field__input num" id="f1489" type="number" defaultValue={"0"} />
                              <span className="field__hint">{"Shown when the rule is Percent"}</span>
                            </div>
                          </div>
                          <div className="s-grid3">
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1490">{"Extra adult / night"}</label>
                              <div className="field__wrap field__wrap--money">
                                <span className="field__prefix">{"₹"}</span>
                                <input className="field__input num" id="f1490" inputMode="decimal" defaultValue={"1,800"} />
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1491">{"Extra child (above 11) / night"}</label>
                              <div className="field__wrap field__wrap--money">
                                <span className="field__prefix">{"₹"}</span>
                                <input className="field__input num" id="f1491" inputMode="decimal" defaultValue={"0"} />
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1492">{"Extra bed / night"}</label>
                              <div className="field__wrap field__wrap--money">
                                <span className="field__prefix">{"₹"}</span>
                                <input readOnly={true} className="field__input num" id="f1492" inputMode="decimal" defaultValue={"1,500"} />
                              </div>
                              <span className="field__hint" data-flow="owner-eb">
                                {"Set in Reservation Parameters (RSS-14). "}
                                <Link data-leads-to="RSS-14" to={"/setup/rss-14-reservation-parameters"}>{"Change it there"}</Link>
                              </span>
                            </div>
                          </div>
                          <div className="s-note">
                            <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#info" />
                            </svg>
                            <span>{"Children 11 and under stay free with existing beds (maximum 2)."}</span>
                          </div>
                        </section>
                        <section className="stabs__panel" data-code="RSS-07c" aria-label="Inclusions">
                          <div className="row">
                            <label className="check">
                              <input className="check__input" type="checkbox" />
                              <span className="check__box" />
                              {"Breakfast"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" />
                              <span className="check__box" />
                              {"Lunch"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" />
                              <span className="check__box" />
                              {"Dinner"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" />
                              <span className="check__box" />
                              {"Wi-Fi"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" />
                              <span className="check__box" />
                              {"Parking"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" />
                              <span className="check__box" />
                              {"Late check-out on request"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" />
                              <span className="check__box" />
                              {"Daily Ayurveda therapy"}
                            </label>
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f1493">{"Other inclusions"}</label>
                            <textarea className="field__input field__input--area" id="f1493" defaultValue={""} />
                            <span className="field__hint">{"One per line"}</span>
                          </div>
                        </section>
                        <section className="stabs__panel" data-code="RSS-07d" aria-label="Policies">
                          <div className="s-grid2">
                            <div className="field">
                              <label className="field__label" htmlFor="f1494">{"Cancellation policy"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1494" defaultValue={"Standard – free until 72 hours"}>
                                  <option>{"Standard – free until 72 hours"}</option>
                                  <option>{"Peak season – free until 7 days"}</option>
                                  <option>{"Non-refundable"}</option>
                                  <option>{"Group – staged charges"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f1495">{"Advance / guarantee policy"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1495" defaultValue={"Standard – one night advance"}>
                                  <option>{"Standard – one night advance"}</option>
                                  <option>{"Full payment at booking"}</option>
                                  <option>{"Group – 25% at confirmation"}</option>
                                  <option>{"Company credit – no advance"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="s-note">
                            <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#info" />
                            </svg>
                            <span>{"No-show charges come from the cancellation policy."}</span>
                          </div>
                        </section>
                        <section className="stabs__panel" data-code="RSS-07e" aria-label="Channels & window">
                          <fieldset className="form-section">
                            <legend className="form-section__title">{"Where it is sold"}</legend>
                            <div className="row">
                              <label className="check">
                                <input className="check__input" type="checkbox" />
                                <span className="check__box" />
                                {"Aviv mobile app (CRS)"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" />
                                <span className="check__box" />
                                {"Aviv website booking engine"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" />
                                <span className="check__box" />
                                {"Booking.com"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" />
                                <span className="check__box" />
                                {"Agoda"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" />
                                <span className="check__box" />
                                {"Expedia"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" />
                                <span className="check__box" />
                                {"MakeMyTrip / Goibibo"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" />
                                <span className="check__box" />
                                {"EaseMyTrip"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" />
                                <span className="check__box" />
                                {"Trip.com"}
                              </label>
                            </div>
                          </fieldset>
                          <div className="s-grid2">
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f1496">{"Visible to"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1496" defaultValue={"Everyone"}>
                                  <option>{"Everyone"}</option>
                                  <option>{"Club members"}</option>
                                  <option>{"Corporate accounts"}</option>
                                  <option>{"Travel agents"}</option>
                                  <option>{"Staff only"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f1497">{"Promo code"}</label>
                              <input className="field__input" id="f1497" type="text" defaultValue={""} />
                              <span className="field__hint">{"Optional"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f1498">{"Book at least (days ahead)"}</label>
                              <input className="field__input num" id="f1498" type="number" defaultValue={"0"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f1499">{"Book at most (days ahead)"}</label>
                              <input className="field__input num" id="f1499" type="number" defaultValue={"365"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f1500">{"Minimum stay (nights)"}</label>
                              <input className="field__input num" id="f1500" type="number" defaultValue={"1"} />
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save rate plan"}</a>
                  </div>
                </form>
              </div>
              <details className="helpbox">
                <summary>
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#help" />
                  </svg>
                  {" Help for this screen "}
                  <span className="code-chip">{"RSS-07"}</span>
                </summary>
                <dl className="helpbox__body">
                  <dt>{"What it is for"}</dt>
                  <dd>{"BAR, Aviv Club, advance purchase, corporate, agent, packages, group – list"}</dd>
                  <dt>{"Opened from"}</dt>
                  <dd>
                    <Link to={"/setup/rss-01-setup-home-checklist"}>{"RSS-01"}</Link>
                  </dd>
                  <dt>{"Leads to"}</dt>
                  <dd>
                    <a href="/setup/rss-07-rate-plans/#RSS-07a-new">{"RSS-07a"}</a>
                    {"–e"}
                  </dd>
                  <dt>{"Note"}</dt>
                  <dd>{"Static screen (HTML and CSS only): it shows the layout, fields and sample data. Saving and live data come when the backend is connected."}</dd>
                </dl>
              </details>
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
